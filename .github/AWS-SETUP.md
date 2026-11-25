# Deploying flik.co.id to S3 + CloudFront

The workflow `.github/workflows/deploy-aws.yml` deploys `main` to AWS on every push. It stays switched off (skips) until the repo variables below are set. It needs an AWS admin to do the one-time setup.

## 1. One-time AWS setup

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

**GitHub sign-in for AWS (OIDC)**
1. IAM → Identity providers → add `token.actions.githubusercontent.com`, audience `sts.amazonaws.com` (skip if it already exists).
2. IAM → Roles → create `github-flik-landing-deploy` with this trust policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {
        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
        "token.actions.githubusercontent.com:sub": "repo:useflik/landing-page:environment:production"
      }
    }
  }]
}
```

3. Give the role only what the deploy needs:

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

## 2. Repo variables (GitHub → useflik/landing-page → Settings → Secrets and variables → Actions → Variables)

| Variable | Example |
|---|---|
| `AWS_ROLE_ARN` | `arn:aws:iam::<ACCOUNT_ID>:role/github-flik-landing-deploy` |
| `S3_BUCKET` | `flik-landing-site` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E1ABCDEF234567` |
| `CLOUDFRONT_FUNCTION_NAME` | `flik-landing-router` (optional: keeps the function in step with `_redirects`) |
| `AWS_REGION` | `ap-southeast-1` (optional, the default) |
| `SITE_URL` | `https://dxxxxxxxx.cloudfront.net` while testing, then `https://flik.co.id` (optional: checks 4 pages after each deploy) |

No AWS keys are stored in GitHub: the workflow signs in with the role above.

## 3. First deploy and go-live

1. GitHub → Actions → **Deploy to AWS** → **Run workflow**.
2. Test `https://dxxxxxxxx.cloudfront.net` (Claude reruns the full site check there).
3. In Cloudflare DNS, replace the `flik.co.id` and `www` CNAMEs (today `ua2q2sgead.ap-southeast-1.awsapprunner.com`) with `dxxxxxxxx.cloudfront.net`, **DNS only**. Rollback: put the App Runner values back.

## Keep in step

`_redirects` is the one list of redirects. After changing it, run `python3 scripts/build_cf_function.py` (the deploy also does this) and keep `vercel.json` in step for the old Vercel preview.
