# Deploying flik.co.id to S3 + CloudFront

The workflow `.github/workflows/deploy-aws.yml` deploys `main` to AWS on every push. It stays switched off (skips) until the repo variables below are set. It needs an AWS admin to do the one-time setup. It uses the same runner and AWS keys as merchant-dashboard-revamp.

## Quick way: scripts/aws-setup.sh

`scripts/aws-setup.sh` does sections 1 and 2 with the AWS CLI. It can be rerun: it only creates what is missing and never overwrites a bucket policy it did not write.

```sh
aws sso login --profile flik-prod
sh scripts/aws-setup.sh check          # read-only: what exists, what is missing
sh scripts/aws-setup.sh create         # bucket, certificate, function, header policies, OAC, distribution, bucket policy
#   -> add the certificate's 2 CNAMEs it prints in Cloudflare (DNS only)
sh scripts/aws-setup.sh github         # deploy-only IAM user, its key as GitHub secrets, repo variables
gh workflow run deploy-aws.yml         # first deploy; test the *.cloudfront.net address
sh scripts/aws-setup.sh attach-domain  # once the certificate is ISSUED; then switch DNS (section 3)
```

Defaults: profile `flik-prod`, bucket `flik-landing-site`, region `ap-southeast-1`. Override with e.g. `BUCKET=other-name sh scripts/aws-setup.sh create`.

## 1. One-time AWS setup (by hand)

**S3 bucket** (ap-southeast-1), e.g. `flik-landing-site`. Keep "Block all public access" on.

**Certificate** in ACM, region **us-east-1**, for `flik.co.id` and `www.flik.co.id`, DNS validation. Add the two CNAMEs ACM shows in Cloudflare (DNS only).

**CloudFront Function** `flik-landing-router`, runtime `cloudfront-js-2.0`. Paste `scripts/cloudfront-function.js` and publish. (Afterwards the workflow updates it from `_redirects` on every deploy.)

**Response headers policies**
- `flik-security`: X-Frame-Options SAMEORIGIN, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, custom `Content-Security-Policy: frame-ancestors 'self'` and `Cross-Origin-Opener-Policy: same-origin`.
- `flik-noindex`: custom `X-Robots-Tag: noindex, nofollow`.

**CloudFront distribution**
- Origin: the bucket, with Origin access control (OAC). Paste the bucket policy CloudFront offers into the bucket.
- Default behavior: Redirect HTTP to HTTPS, cache policy CachingOptimized, response headers `flik-security`, viewer request function `flik-landing-router`.
- Behavior `/dashboard/*`: the same, with response headers `flik-noindex`.
- Alternate domains `flik.co.id`, `www.flik.co.id` with the us-east-1 certificate. Default root object `index.html`.
- Custom error responses: 403 and 404 → `/404.html`, response code 404.

**Deploy credentials**

The workflow runs on the self-hosted `aws-runner`, like merchant-dashboard-revamp, with secrets of the same names (`PROD_AWS_ACCESS_KEY_ID` / `PROD_AWS_SECRET_ACCESS_KEY`). They hold the key of a separate IAM user, `github-flik-landing-deploy`, that can only deploy this site (inline policy below), so a leak cannot reach merchant-dashboard or anything else in the account:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::flik-landing-site" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"], "Resource": "arn:aws:s3:::flik-landing-site/*" },
    { "Effect": "Allow", "Action": ["cloudfront:CreateInvalidation"], "Resource": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>" },
    { "Effect": "Allow", "Action": ["cloudfront:DescribeFunction", "cloudfront:UpdateFunction", "cloudfront:PublishFunction"], "Resource": "arn:aws:cloudfront::<ACCOUNT_ID>:function/flik-landing-router" }
  ]
}
```

## 2. Secrets and variables (GitHub → useflik/landing-page → Settings → Secrets and variables → Actions)

**Secrets** (in the `production` environment): `PROD_AWS_ACCESS_KEY_ID` and `PROD_AWS_SECRET_ACCESS_KEY`, the access key of `github-flik-landing-deploy`. `sh scripts/aws-setup.sh github` creates the key and stores it straight into GitHub without printing it.

**Variables:**

| Variable | Example |
|---|---|
| `S3_BUCKET` | `flik-landing-site` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E1ABCDEF234567` |
| `CLOUDFRONT_FUNCTION_NAME` | `flik-landing-router` (optional: keeps the function in step with `_redirects`) |
| `AWS_REGION` | `ap-southeast-1` (optional, the default) |
| `SITE_URL` | `https://dxxxxxxxx.cloudfront.net` while testing, then `https://flik.co.id` (optional: checks 4 pages after each deploy) |

The workflow skips until `S3_BUCKET` and `CLOUDFRONT_DISTRIBUTION_ID` are set. It runs on `aws-runner` (org runner group `default`); each run installs a fresh AWS CLI v2 into the job's temp folder, so it never runs an `aws` binary another repo's job could have changed. Note that `aws-runner` is shared with other repos, so the production keys are only as safe as that machine; a runner group limited to the deploy repos, or keyless OIDC login, would reduce that.

## 3. First deploy and go-live

1. GitHub → Actions → **Deploy to AWS** → **Run workflow**.
2. Test `https://dxxxxxxxx.cloudfront.net` (Claude reruns the full site check there).
3. In Cloudflare DNS, replace the `flik.co.id` and `www` CNAMEs (today `ua2q2sgead.ap-southeast-1.awsapprunner.com`) with `dxxxxxxxx.cloudfront.net`, **DNS only**. Rollback: put the App Runner values back.

## Keep in step

`_redirects` is the one list of redirects. After changing it, run `python3 scripts/build_cf_function.py` (the deploy also does this) and keep `vercel.json` in step for the old Vercel preview.
