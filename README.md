# FLIK Landing Page

Clickable prototypes for the new FLIK landing page (flik.co.id), covering the 3 core products: **Checkout**, **Shipping** and **Funding** (Merchant Cash Advance).

| Path | Version | Direction |
|---|---|---|
| `/v1/` | Version 1 | Product page layout inspired by stripe.com/managed-payments |
| `/v2/` | Version 2 | v1 with a 3D carousel hero that turns into the product cards on scroll |
| `/v3/` | Version 3 | Layout of the stripe.com homepage |
| `/dashboard/` | Dashboard | Transactions page of the FLIK merchant dashboard, in the Stripe dashboard style |

The site root (`/`) links to all of them.

## Content
Product facts, marketing copy, the sitemap and the SEO plan are in [`docs/FLIK_Landing_Page_Reference.md`](docs/FLIK_Landing_Page_Reference.md). Every page follows it.

Rules:
- **Language:** English first at `/`, Bahasa Indonesia second at `/id/`.
- **Tone:** calm and factual, like stripe.com.
- **Colours:** Stripe palette, with purple `#533AFD` as the accent.

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
