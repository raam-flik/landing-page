# FLIK Landing Page

Clickable prototypes for the new FLIK landing page (flik.co.id), covering the 3 core products: **Checkout**, **Shipping** and **Funding** (Merchant Cash Advance).

The site has **8 prototypes**: the same 4 designs in 2 colour sets. The root page (`/`) is the entry point to all of them.

| Design | Entry 1: current colours (Stripe purple) | Entry 2: new FLIK brand colours |
|---|---|---|
| Version 1: product page layout (stripe.com/managed-payments) | `/v1/` | `/brand/v1/` |
| Version 2: 3D carousel hero | `/v2/` | `/brand/v2/` |
| Version 3: stripe.com homepage layout | `/v3/` | `/brand/v3/` |
| Merchant dashboard: Home (`#home`) and Transactions (`#transactions`) | `/dashboard/` | `/brand/dashboard/` |

**FLIK brand colours (Entry 2):**
- Purple `#9E4DC8`: actions (buttons, links, icons).
- Blue `#002D5D`: headlines and dark sections.
- Pink `#AE1D7C` and orange `#F16223`: gradients and accents.

Orange is never used for text. The full scales are in the colour guideline.

## Content
Product facts, marketing copy, the sitemap and the SEO plan are in [`docs/FLIK_Landing_Page_Reference.md`](docs/FLIK_Landing_Page_Reference.md). Every page follows it.

Rules:
- **Language:** English first at `/`, Bahasa Indonesia second at `/id/`.
- **Tone:** calm and factual, like stripe.com.
- **Colours:** Entry 1 uses Stripe purple `#533AFD`. Entry 2 follows the FLIK colour guideline in the reference doc.

## Notes
- Each page is a single self-contained HTML file with inline CSS and JS. The Inter font loads from Google Fonts.
- These are prototypes. The following are placeholders:
  - mockup data (the store "Aruna Studio", prices, tracking numbers)
  - news posts
  - brand art
  - the API code sample
- Links to pages that don't exist yet show a toast instead.

## Run locally
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080.

## Deploy
Vercel deploys every push to `main`. It's a static site with no build step.
