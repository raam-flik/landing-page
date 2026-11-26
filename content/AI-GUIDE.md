# AI guide: applying content edits to the pages

You are updating the FLIK landing page with text edits made in the Markdown files in `content/`. Change **text only**: never layout, styles, scripts, links or images, unless a `> Note:` explicitly asks for it.

## Files

| Content file | Page file |
|---|---|
| `content/00-menu-and-footer.md` | The `MENU` array and the footer script. They are duplicated in **every** page file, so update every copy identically. |
| `content/01-homepage.md` | `index.html` |
| `content/02-checkout.md` | `checkout/index.html` |
| `content/03-shipping.md` | `shipping/index.html` |
| `content/04-merchant-cash-advance.md` | `funding/merchant-cash-advance/index.html` |
| `content/05-early-settlement.md` | `payment/early-settlement/index.html` |
| `content/06-fraud-detection.md` | `payment/fraud-detection/index.html` |
| `content/08-promo.md` | `promo/index.html` (promos are in the `PROMOS` list in the page script) |
| `content/20-customers.md` | `customers/index.html` and `customers/story/index.html` (the `CUSTOMERS` list is in both scripts) |
| `content/19-developers.md` | `developers/index.html` (integration steps and FAQ are lists in the page script) |
| `content/18-pricing.md` | `pricing/index.html` |
| `content/17-flik-connect.md` | `payment/connect/index.html` (use cases, example rules, FAQ and glance lists are in the page script) |
| `content/11-shipment-tracking.md` | `shipping/track/index.html` (couriers, example shipments, status guide and FAQ are lists in the page script) |
| `content/10-help.md` | `help/index.html` (questions are in the `TOPICS` list in the page script) |
| `content/09-blog.md` | `blog/index.html` (articles are in the `POSTS` list in the page script) |
| `content/07-in-store-payment.md` | `payment/in-store/index.html` |
| `content/12-privacy.md` | `legal/privacy/index.html` |
| `content/13-terms.md` | `legal/terms/index.html` |
| `content/14-refund.md` | `legal/refund/index.html` |
| `content/15-cookies.md` | `legal/cookies/index.html` |
| `content/16-data-request.md` | `legal/data-request/index.html` |

**Legal pages (12–16)** are drafts for counsel. Their text is legal wording: change only what an edit or note asks for, and never remove a `[[…]]` placeholder or a `†` unless the edit answers it. Counsel's review notes are kept privately, not in this public repo.

## How to find what changed

The edited Markdown is the new text. The **original** text is the version of the same file in this repository before the edit:

- If you have the git history, run `git diff` on `content/` (or compare with the last commit that touched the file).
- If you were only given the edited files, fetch the originals from `https://github.com/useflik/landing-page/tree/main/content` (private: ask for access).

Compare line by line. Each line is `- **Label:** text`. A changed text means: find the old text in the page file and replace it with the new text.

## How to find the text in the page file

- Sections follow the page order. Each section has a hidden marker such as `<!-- html: Hero ... -->`. It matches an HTML comment `<!-- ===== Hero ... ===== -->` in the page file.
- Some text is in the HTML. Some is in JavaScript arrays near the end of the file (FAQ, steps, menu, tabs, cards). Search for the exact old string.
- **Grey part** is the `<span class="soft">` inside the heading above it.
- `Stat: 10M+ — shoppers …`: the part before `—` is the big number, the part after it is the caption.
- `A — B — C` on one line means several pieces of text inside one element (for example a step number, title and description). Keep the same number of parts.
- Text may contain HTML entities (`&amp;`, `&nbsp;`) or a `<br>`. Keep that markup and change only the words.
- A few lines are built by JavaScript from smaller parts, for example the city pairs `Jakarta – Denpasar` in the Shipping rate checker (`[['Jakarta','Denpasar'],…]`). Edit the parts.
- If the same text appears more than once, change only the one in the matching section, unless it is the shared menu or footer.

## Notes, new items and deletions

- A line starting with `> Note:` is an instruction from the editor. Follow it if you can. If it needs a design decision, list it in your summary instead of guessing.
- A **new line** in a list: add it using the same markup as its neighbours.
- A **deleted line**: remove that text and its element. Leave a list or grid at least as long as its design needs. If deleting would break the layout, say so instead.
- **Things to confirm:** the answers are information for you and the team. They are not page text, unless the answer gives new wording.

## After applying

1. Check that each page still loads with no errors in the browser console, at 1440px and 375px wide.
2. Check that page titles and descriptions (`<title>`, `<meta name="description">`) match the **Search results (SEO)** section. Also update the `canonical` and JSON-LD text if they repeat it.
3. Update the Markdown files so they match the pages again. That way the next round of edits starts from the right text.
4. Summarise what changed, page by page, and list any notes you couldn't apply.

## House style

English, calm and plain (stripe.com tone). Money `Rp1.250.000`, dates `12 Oct 2026`, phone `+62 812-3456-7890`. The brand colours and logo are fixed; never change them for a text edit. `product-facts.md` lists what each product does and which claims can be made.

## After editing (24 Nov 2026)

- **Blog posts and customer stories have their own pages** (`blog/<slug>/`, `customers/<slug>/`), made from `blog/index.html` and `customers/story/index.html`. After changing `POSTS`, `CUSTOMERS` or `STORIES`, run `python3 scripts/build_pages.py`. It also rebuilds `sitemap.xml`. Never edit the generated pages by hand.
- **Story rows (Raam, 26 Nov 2026):** on every page with customer stories (homepage, product, use-case and industry pages), the "All stories" card is the **last** card in the row; on the homepage "What's happening" row, the "All articles" card is last too. No "All stories" link in the section header.
- **Images:** use WebP under 100 KB, and bump the `?v=` number when you replace an image (assets are cached for 30 days).
- **Logo and photo sizes (PageSpeed pass, 25 Nov 2026):** save images at about twice the size they're shown. Payment and courier logos are 72 px WebP (shown up to 34 px), platform logos 96 px. Merchant logos stay 96 px tall, because some are shown up to 83 px tall; the 18 logo-strip-only logos are 64 px tall. Use the `.webp` files; the `.png` and `.jpg` originals stay in the repo as sources.
- **AWS option (Raam, 25 Nov 2026):** `.github/workflows/deploy-aws.yml` deploys `main` to S3 + CloudFront once the repo variables are set (setup in `.github/AWS-SETUP.md`). Redirects come from `_redirects` through `scripts/build_cf_function.py` → `scripts/cloudfront-function.js`; the upload and cache rules are in `scripts/deploy-aws.sh`.
- **Security headers** (all pages, `vercel.json`): the site can't be framed by other sites (X-Frame-Options and CSP frame-ancestors), plus COOP, nosniff and a referrer policy. If a partner ever needs to embed a page in an iframe, that header has to change first.
- **Hosting (Raam, 25 Nov 2026): Cloudflare (Workers static assets, project `flik-landing` in the Techteam account) for flik.co.id.** The Vercel link stays as a preview. Cloudflare settings: build command `sh scripts/cf-build.sh`, deploy command `npx wrangler deploy`; `wrangler.jsonc` serves the `dist` folder and uses `404.html` for missing pages (the script copies the site without `archive/`, `content/`, `scripts/`, notes and `vercel.json`). Redirects live in `_redirects` and headers in `_headers`; **change both `_redirects`/`_headers` and `vercel.json` together**. `_redirects` also sends the old flik.co.id addresses (`/en/...`, `/qris`, `/order-form`, `/jago-kurir`, `/term-of-service...`, `/privacy-policy`, old blog posts) to their new pages, and `/login`, `/register` to merchant.flik.co.id. `404.html` is the not-found page (absolute paths, noindex).
- **Links:** keep the real path in `href` next to `data-page`, for example `<a href="/pricing/" data-page="/pricing">`.
