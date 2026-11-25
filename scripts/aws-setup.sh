#!/bin/sh
# One-time AWS setup for flik.co.id on S3 + CloudFront (what .github/AWS-SETUP.md describes).
# Safe to rerun: every step looks for its resource first and only creates what is missing.
#
#   sh scripts/aws-setup.sh check          read-only: shows what exists and what is missing
#   sh scripts/aws-setup.sh create         bucket, certificate, function, header policies, OAC, distribution, bucket policy
#   sh scripts/aws-setup.sh github         deploy-only IAM user + key -> GitHub secrets, and the repo variables
#   sh scripts/aws-setup.sh attach-domain  once the certificate is ISSUED: flik.co.id + www on the distribution
#
# Needs: aws CLI v2 signed in (default profile flik-prod: aws sso login --profile flik-prod),
# python3, and gh signed in with admin on the repo (github step only).
# Override any of these:
set -e
export AWS_PROFILE="${AWS_PROFILE:-flik-prod}"
REGION="${REGION:-ap-southeast-1}"
BUCKET="${BUCKET:-flik-landing-site}"
DOMAIN="${DOMAIN:-flik.co.id}"
FUNCTION_NAME="${FUNCTION_NAME:-flik-landing-router}"
DEPLOY_USER="${DEPLOY_USER:-github-flik-landing-deploy}"
REPO="${REPO:-useflik/landing-page}"
TAG=flik-landing                                    # distribution comment and OAC name, used to find them again
CACHING_OPTIMIZED=658327ea-f89d-4fab-a63d-7e88639e58f6 # AWS managed cache policy
export AWS_PAGER=""

cd "$(dirname "$0")/.."
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

say()  { printf '\n== %s\n' "$*"; }
none() { [ -z "$1" ] || [ "$1" = None ] || [ "$1" = null ]; }

# ---- lookups (all read-only) ----
account()   { aws sts get-caller-identity --query Account --output text; }
bucket_state() {  # ours | taken | missing
  if out=$(aws s3api head-bucket --bucket "$BUCKET" 2>&1); then echo ours
  elif echo "$out" | grep -q 403; then echo taken
  else echo missing; fi
}
cert_arn()  { aws acm list-certificates --region us-east-1 --certificate-statuses PENDING_VALIDATION ISSUED \
                --query "CertificateSummaryList[?DomainName=='$DOMAIN'].CertificateArn | [0]" --output text; }
cert_status() { aws acm describe-certificate --region us-east-1 --certificate-arn "$1" --query Certificate.Status --output text; }
cert_records() {
  aws acm describe-certificate --region us-east-1 --certificate-arn "$1" \
    --query 'Certificate.DomainValidationOptions[].[DomainName,ValidationStatus,ResourceRecord.Name,ResourceRecord.Value]' --output text |
  while read -r d s n v; do echo "  $d ($s)"; echo "    CNAME  $n  ->  $v"; done
}
func_arn()  { aws cloudfront describe-function --name "$FUNCTION_NAME" --stage LIVE \
                --query FunctionSummary.FunctionMetadata.FunctionARN --output text 2>/dev/null || true; }
rhp_id()    { aws cloudfront list-response-headers-policies --type custom \
                --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='$1'].ResponseHeadersPolicy.Id | [0]" --output text; }
oac_id()    { aws cloudfront list-origin-access-controls \
                --query "OriginAccessControlList.Items[?Name=='$TAG'].Id | [0]" --output text; }
dist_id()   { aws cloudfront list-distributions --query "DistributionList.Items[?Comment=='$TAG'].Id | [0]" --output text; }
dist_info() { aws cloudfront get-distribution --id "$1" \
                --query 'Distribution.[DomainName,Status,join(`,`,DistributionConfig.Aliases.Items || `[]`)]' --output text; }
alias_owner() { aws cloudfront list-distributions \
                --query "DistributionList.Items[?Aliases.Quantity > \`0\` && contains(Aliases.Items, '$1')].Id | [0]" --output text; }

# ---- check ----
check() {
  say "AWS account"
  aws sts get-caller-identity --query '[Account,Arn]' --output text

  say "S3 bucket $BUCKET ($REGION)"
  case $(bucket_state) in
    ours)    echo "  exists in this account" ;;
    taken)   echo "  NAME TAKEN by another AWS account: rerun with BUCKET=<other-name>" ;;
    missing) echo "  missing" ;;
  esac

  say "Certificate for $DOMAIN + www (us-east-1)"
  c=$(cert_arn)
  if none "$c"; then echo "  missing"; else echo "  $c: $(cert_status "$c")"; cert_records "$c"; fi

  say "CloudFront Function $FUNCTION_NAME"
  f=$(func_arn); if none "$f"; then echo "  missing"; else echo "  $f"; fi

  say "Response headers policies"
  for n in flik-security flik-noindex; do p=$(rhp_id $n); if none "$p"; then echo "  $n: missing"; else echo "  $n: $p"; fi; done

  say "Origin access control $TAG"
  o=$(oac_id); if none "$o"; then echo "  missing"; else echo "  $o"; fi

  say "Distribution (comment $TAG)"
  d=$(dist_id); if none "$d"; then echo "  missing"; else echo "  $d"; dist_info "$d" | sed 's/^/  /'; fi

  say "Who serves $DOMAIN / www.$DOMAIN in CloudFront today (this account)"
  for h in "$DOMAIN" "www.$DOMAIN"; do o=$(alias_owner "$h"); if none "$o"; then echo "  $h: none"; else echo "  $h: $o"; fi; done

  say "Deploy user $DEPLOY_USER"
  if aws iam get-user --user-name "$DEPLOY_USER" >/dev/null 2>&1; then
    echo "  exists, access keys: $(aws iam list-access-keys --user-name "$DEPLOY_USER" --query 'length(AccessKeyMetadata)' --output text)"
  else echo "  missing"; fi
}

# ---- create ----
headers_policy_json() {  # $1 name, $2 "noindex" to add X-Robots-Tag
  python3 - "$1" "$2" <<'EOF'
import json, sys
name, extra = sys.argv[1], sys.argv[2]
custom = [{"Header": "Cross-Origin-Opener-Policy", "Value": "same-origin", "Override": True}]
if extra == "noindex":
    custom.append({"Header": "X-Robots-Tag", "Value": "noindex, nofollow", "Override": True})
print(json.dumps({
  "Name": name,
  "Comment": "flik.co.id headers, from _headers" + (" (+ noindex)" if extra else ""),
  "SecurityHeadersConfig": {
    "FrameOptions": {"FrameOption": "SAMEORIGIN", "Override": True},
    "ContentTypeOptions": {"Override": True},
    "ReferrerPolicy": {"ReferrerPolicy": "strict-origin-when-cross-origin", "Override": True},
    "ContentSecurityPolicy": {"ContentSecurityPolicy": "frame-ancestors 'self'", "Override": True},
  },
  "CustomHeadersConfig": {"Quantity": len(custom), "Items": custom},
}))
EOF
}

create() {
  ACCOUNT=$(account)
  echo "Account $ACCOUNT, profile $AWS_PROFILE"

  say "S3 bucket $BUCKET"
  case $(bucket_state) in
    taken) echo "  name taken by another AWS account: rerun with BUCKET=<other-name>"; exit 1 ;;
    ours)  echo "  exists, left as is" ;;
    missing)
      aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
        --create-bucket-configuration LocationConstraint="$REGION" >/dev/null
      aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
        BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
      echo "  created, all public access blocked" ;;
  esac

  say "Certificate (us-east-1)"
  CERT=$(cert_arn)
  if none "$CERT"; then
    CERT=$(aws acm request-certificate --region us-east-1 --domain-name "$DOMAIN" \
      --subject-alternative-names "www.$DOMAIN" --validation-method DNS \
      --idempotency-token flikland --query CertificateArn --output text)
    echo "  requested $CERT"
    sleep 15  # ACM needs a moment before it shows the validation records
  else
    echo "  exists $CERT"
  fi

  say "CloudFront Function $FUNCTION_NAME"
  python3 scripts/build_cf_function.py
  if none "$(func_arn)" && ! aws cloudfront describe-function --name "$FUNCTION_NAME" >/dev/null 2>&1; then
    ETAG=$(aws cloudfront create-function --name "$FUNCTION_NAME" \
      --function-config '{"Comment":"flik.co.id router, from _redirects","Runtime":"cloudfront-js-2.0"}' \
      --function-code fileb://scripts/cloudfront-function.js --query ETag --output text)
    aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$ETAG" >/dev/null
    echo "  created and published"
  elif none "$(func_arn)"; then
    ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query ETag --output text)
    aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$ETAG" >/dev/null
    echo "  existed unpublished, published"
  else
    echo "  exists (each deploy updates it)"
  fi
  FUNC_ARN=$(func_arn)

  say "Response headers policies"
  for n in flik-security flik-noindex; do
    if none "$(rhp_id $n)"; then
      extra=; [ $n = flik-noindex ] && extra=noindex
      headers_policy_json $n "$extra" > "$TMP/$n.json"
      aws cloudfront create-response-headers-policy --response-headers-policy-config "file://$TMP/$n.json" >/dev/null
      echo "  $n created"
    else echo "  $n exists"; fi
  done
  SEC=$(rhp_id flik-security); NOINDEX=$(rhp_id flik-noindex)

  say "Origin access control"
  OAC=$(oac_id)
  if none "$OAC"; then
    OAC=$(aws cloudfront create-origin-access-control --origin-access-control-config \
      Name=$TAG,Description=flik.co.id-bucket,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3 \
      --query OriginAccessControl.Id --output text)
    echo "  created $OAC"
  else echo "  exists $OAC"; fi

  say "Distribution"
  DIST=$(dist_id)
  if none "$DIST"; then
    BUCKET="$BUCKET" REGION="$REGION" OAC="$OAC" SEC="$SEC" NOINDEX="$NOINDEX" FUNC_ARN="$FUNC_ARN" \
    CACHE="$CACHING_OPTIMIZED" TAG="$TAG" python3 - > "$TMP/dist.json" <<'EOF'
import json, os, time
e = os.environ
def behavior(headers_policy, path=None):
    b = {
      "TargetOriginId": "s3-site",
      "ViewerProtocolPolicy": "redirect-to-https",
      "AllowedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"],
                         "CachedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"]}},
      "Compress": True,
      "CachePolicyId": e["CACHE"],
      "ResponseHeadersPolicyId": headers_policy,
      "FunctionAssociations": {"Quantity": 1, "Items": [
          {"FunctionARN": e["FUNC_ARN"], "EventType": "viewer-request"}]},
    }
    if path: b["PathPattern"] = path
    return b
print(json.dumps({
  "CallerReference": f"{e['TAG']}-{int(time.time())}",
  "Comment": e["TAG"],
  "Enabled": True,
  "DefaultRootObject": "index.html",
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": True,
  "PriceClass": "PriceClass_200",
  "Origins": {"Quantity": 1, "Items": [{
      "Id": "s3-site",
      "DomainName": f"{e['BUCKET']}.s3.{e['REGION']}.amazonaws.com",
      "OriginAccessControlId": e["OAC"],
      "S3OriginConfig": {"OriginAccessIdentity": ""}}]},
  "DefaultCacheBehavior": behavior(e["SEC"]),
  "CacheBehaviors": {"Quantity": 1, "Items": [behavior(e["NOINDEX"], "/dashboard/*")]},
  "CustomErrorResponses": {"Quantity": 2, "Items": [
      {"ErrorCode": c, "ResponsePagePath": "/404.html", "ResponseCode": "404", "ErrorCachingMinTTL": 60}
      for c in (403, 404)]},
}))
EOF
    DIST=$(aws cloudfront create-distribution --distribution-config "file://$TMP/dist.json" \
      --query Distribution.Id --output text)
    echo "  created $DIST (takes a few minutes to deploy)"
  else echo "  exists $DIST"; fi

  say "Bucket policy (only CloudFront may read)"
  DIST_ARN="arn:aws:cloudfront::$ACCOUNT:distribution/$DIST"
  cur=$(aws s3api get-bucket-policy --bucket "$BUCKET" --query Policy --output text 2>/dev/null || true)
  cat > "$TMP/policy.json" <<EOF
{"Version":"2012-10-17","Statement":[{"Sid":"CloudFrontRead","Effect":"Allow",
 "Principal":{"Service":"cloudfront.amazonaws.com"},"Action":"s3:GetObject",
 "Resource":"arn:aws:s3:::$BUCKET/*","Condition":{"StringEquals":{"AWS:SourceArn":"$DIST_ARN"}}}]}
EOF
  if echo "$cur" | grep -q "$DIST_ARN"; then
    echo "  already allows $DIST"
  elif [ -n "$cur" ]; then
    # never overwrite a policy this script did not write
    echo "  the bucket already has a policy: not overwriting it. Add this statement by hand:"
    cat "$TMP/policy.json"
  else
    aws s3api put-bucket-policy --bucket "$BUCKET" --policy "file://$TMP/policy.json"
    echo "  set"
  fi

  say "Done. Next:"
  echo "  1. Add these DNS records in Cloudflare (DNS only, grey cloud) so the certificate can be issued:"
  cert_records "$CERT"
  echo "  2. sh scripts/aws-setup.sh github     (deploy key -> GitHub, repo variables)"
  echo "  3. Run the 'Deploy to AWS' workflow, test https://$(dist_info "$DIST" | cut -f1)"
  echo "  4. sh scripts/aws-setup.sh attach-domain   (when the certificate shows ISSUED)"
}

# ---- github: deploy-only user, its key as GitHub secrets, repo variables ----
github() {
  ACCOUNT=$(account)
  DIST=$(dist_id); none "$DIST" && { echo "No distribution yet: run create first"; exit 1; }
  gh auth status >/dev/null 2>&1 || { echo "gh is not signed in: gh auth login"; exit 1; }

  say "IAM user $DEPLOY_USER (can only deploy this site)"
  aws iam get-user --user-name "$DEPLOY_USER" >/dev/null 2>&1 || {
    aws iam create-user --user-name "$DEPLOY_USER" --tags Key=purpose,Value=github-deploy-$REPO >/dev/null
    echo "  created"; }
  cat > "$TMP/deploy-policy.json" <<EOF
{"Version":"2012-10-17","Statement":[
 {"Effect":"Allow","Action":["s3:ListBucket"],"Resource":"arn:aws:s3:::$BUCKET"},
 {"Effect":"Allow","Action":["s3:PutObject","s3:DeleteObject","s3:GetObject"],"Resource":"arn:aws:s3:::$BUCKET/*"},
 {"Effect":"Allow","Action":["cloudfront:CreateInvalidation"],"Resource":"arn:aws:cloudfront::$ACCOUNT:distribution/$DIST"},
 {"Effect":"Allow","Action":["cloudfront:DescribeFunction","cloudfront:UpdateFunction","cloudfront:PublishFunction"],
  "Resource":"arn:aws:cloudfront::$ACCOUNT:function/$FUNCTION_NAME"}]}
EOF
  aws iam put-user-policy --user-name "$DEPLOY_USER" --policy-name deploy-flik-landing \
    --policy-document "file://$TMP/deploy-policy.json"
  echo "  policy set (only this bucket, distribution and function)"

  say "GitHub environment 'production' on $REPO"
  # only main may use the environment (and so its secrets): a workflow pushed on another branch cannot read the key
  echo '{"deployment_branch_policy":{"protected_branches":false,"custom_branch_policies":true}}' |
    gh api -X PUT "repos/$REPO/environments/production" --input - >/dev/null
  gh api "repos/$REPO/environments/production/deployment-branch-policies" --jq '.branch_policies[].name' | grep -qx main ||
    gh api -X POST "repos/$REPO/environments/production/deployment-branch-policies" -f name=main -f type=branch >/dev/null
  echo "  ready, limited to the main branch"

  say "Access key -> GitHub secrets (never printed)"
  n=$(aws iam list-access-keys --user-name "$DEPLOY_USER" --query 'length(AccessKeyMetadata)' --output text)
  if [ "$n" = 0 ]; then
    set -- $(aws iam create-access-key --user-name "$DEPLOY_USER" \
      --query 'AccessKey.[AccessKeyId,SecretAccessKey]' --output text)
    printf %s "$1" | gh secret set PROD_AWS_ACCESS_KEY_ID -R "$REPO" --env production
    printf %s "$2" | gh secret set PROD_AWS_SECRET_ACCESS_KEY -R "$REPO" --env production
    set --
    echo "  key created and stored as PROD_AWS_ACCESS_KEY_ID / PROD_AWS_SECRET_ACCESS_KEY (environment production)"
  else
    echo "  the user already has $n key(s): left as is. To replace it, delete the old key in IAM and rerun."
  fi

  say "Repo variables"
  CF=$(dist_info "$DIST" | cut -f1)
  gh variable set S3_BUCKET -R "$REPO" --body "$BUCKET"
  gh variable set CLOUDFRONT_DISTRIBUTION_ID -R "$REPO" --body "$DIST"
  gh variable set CLOUDFRONT_FUNCTION_NAME -R "$REPO" --body "$FUNCTION_NAME"
  gh variable set AWS_REGION -R "$REPO" --body "$REGION"
  gh variable get SITE_URL -R "$REPO" >/dev/null 2>&1 || gh variable set SITE_URL -R "$REPO" --body "https://$CF"
  echo "  set. The workflow now deploys on every push to main; start one now with:"
  echo "  gh workflow run deploy-aws.yml -R $REPO"
}

# ---- attach-domain: flik.co.id + www on the distribution ----
attach_domain() {
  CERT=$(cert_arn); DIST=$(dist_id)
  none "$DIST" && { echo "No distribution yet: run create first"; exit 1; }
  none "$CERT" && { echo "No certificate yet: run create first"; exit 1; }
  st=$(cert_status "$CERT")
  if [ "$st" != ISSUED ]; then
    echo "Certificate is $st. Add these records in Cloudflare (DNS only), wait, then rerun:"
    cert_records "$CERT"; exit 1
  fi
  for h in "$DOMAIN" "www.$DOMAIN"; do
    o=$(alias_owner "$h")
    if ! none "$o" && [ "$o" != "$DIST" ]; then echo "$h is already on distribution $o: remove it there first"; exit 1; fi
  done
  aws cloudfront get-distribution-config --id "$DIST" > "$TMP/cfg.json"
  ETAG=$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["ETag"])' "$TMP/cfg.json")
  python3 - "$TMP/cfg.json" "$DOMAIN" "$CERT" > "$TMP/new.json" <<'EOF'
import json, sys
cfg = json.load(open(sys.argv[1]))["DistributionConfig"]
domain, cert = sys.argv[2], sys.argv[3]
cfg["Aliases"] = {"Quantity": 2, "Items": [domain, "www." + domain]}
cfg["ViewerCertificate"] = {"ACMCertificateArn": cert, "SSLSupportMethod": "sni-only",
                            "MinimumProtocolVersion": "TLSv1.2_2021"}
print(json.dumps(cfg))
EOF
  aws cloudfront update-distribution --id "$DIST" --if-match "$ETAG" \
    --distribution-config "file://$TMP/new.json" >/dev/null
  CF=$(dist_info "$DIST" | cut -f1)
  say "$DOMAIN and www.$DOMAIN added to $DIST"
  echo "Go-live, in Cloudflare DNS (DNS only, grey cloud):"
  echo "  $DOMAIN      CNAME  $CF"
  echo "  www.$DOMAIN  CNAME  $CF"
  echo "Then: gh variable set SITE_URL -R $REPO --body https://$DOMAIN"
  echo "Rollback: put the old App Runner CNAMEs back."
}

case "$1" in
  check) check ;;
  create) create ;;
  github) github ;;
  attach-domain) attach_domain ;;
  *) sed -n '2,11p' "$0"; exit 1 ;;
esac
