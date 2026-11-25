#!/bin/sh
# Deploy flik.co.id to S3 + CloudFront. Used by .github/workflows/deploy-aws.yml; can also run by hand.
#
# Needs AWS credentials with access to the bucket and the distribution, and these variables:
#   S3_BUCKET                    the bucket name, e.g. flik-landing-site
#   CLOUDFRONT_DISTRIBUTION_ID   e.g. E1ABCDEF234567
#   CLOUDFRONT_FUNCTION_NAME     optional: the viewer-request function to update from scripts/cloudfront-function.js
#
# Cache rules match vercel.json and _headers: pages always re-checked, fonts 1 year, assets 30 days.
set -e
: "${S3_BUCKET:?set S3_BUCKET}"
: "${CLOUDFRONT_DISTRIBUTION_ID:?set CLOUDFRONT_DISTRIBUTION_ID}"

sh scripts/cf-build.sh
python3 scripts/build_cf_function.py

PAGES='public, max-age=0, must-revalidate'
FONTS='public, max-age=31536000, immutable'
ASSETS='public, max-age=2592000, stale-while-revalidate=86400'

# pages and root files (everything except fonts/ and assets/); _redirects/_headers are Cloudflare-only
aws s3 sync dist/ "s3://$S3_BUCKET/" --delete --no-progress \
  --exclude "fonts/*" --exclude "assets/*" --exclude "_redirects" --exclude "_headers" \
  --cache-control "$PAGES"
aws s3 sync dist/fonts/ "s3://$S3_BUCKET/fonts/" --delete --no-progress --cache-control "$FONTS"
aws s3 sync dist/assets/ "s3://$S3_BUCKET/assets/" --delete --no-progress --cache-control "$ASSETS"
# the icons keep a 30-day cache, like on Vercel and Cloudflare
for f in favicon.ico favicon.svg apple-touch-icon.png; do
  aws s3 cp "dist/$f" "s3://$S3_BUCKET/$f" --cache-control "public, max-age=2592000" --no-progress
done

# keep the CloudFront Function in step with _redirects
if [ -n "$CLOUDFRONT_FUNCTION_NAME" ]; then
  ETAG=$(aws cloudfront describe-function --name "$CLOUDFRONT_FUNCTION_NAME" --stage DEVELOPMENT --query ETag --output text)
  ETAG=$(aws cloudfront update-function --name "$CLOUDFRONT_FUNCTION_NAME" --if-match "$ETAG" \
    --function-config Comment="flik.co.id router, from _redirects",Runtime=cloudfront-js-2.0 \
    --function-code fileb://scripts/cloudfront-function.js --query ETag --output text)
  aws cloudfront publish-function --name "$CLOUDFRONT_FUNCTION_NAME" --if-match "$ETAG" >/dev/null
  echo "CloudFront Function $CLOUDFRONT_FUNCTION_NAME published"
fi

# show the new pages straight away
aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*" \
  --query Invalidation.Id --output text
echo "Deployed to s3://$S3_BUCKET"
