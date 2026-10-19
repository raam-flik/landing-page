# FLIK Landing Page

Clickable prototype of the new FLIK landing page (flik.co.id), covering the 3 core products: **Checkout**, **Shipping** and **Funding** (Merchant Cash Advance).

| Page | Path | File |
|---|---|---|
| Homepage | `/` | `index.html` |
| Checkout | `/checkout/` | `checkout/index.html` |
| Shipping | `/shipping/` | `shipping/index.html` |
| Merchant Cash Advance | `/funding/merchant-cash-advance/` | `funding/merchant-cash-advance/index.html` |
| Merchant dashboard | `/dashboard/` | `dashboard/index.html` |

Live: https://landing-page-raams-projects-2709477f.vercel.app/ (Vercel deploys every push to `main`).

## Text content

All page text is in [`content/`](content/), one Markdown file per page, so the copy can be edited without touching HTML. [`content/AI-GUIDE.md`](content/AI-GUIDE.md) explains how an AI applies those edits back to the pages.

## How it fits together

- Each page is a single self-contained HTML file with inline CSS and JS. The Inter font loads from Google Fonts.
- The homepage, Checkout, Shipping and Merchant Cash Advance pages link to each other through a small `ROUTES` table near the end of each file. Links to pages that don't exist yet show a "Page not in this prototype yet" toast.
- Courier logos are in `shipping/img/` and `dashboard/img/`.
- `vercel.json` forwards links from earlier prototype rounds to the matching page.

## Style

- **Colours:** FLIK Blue `#002D5D` for headlines and dark sections, purple `#6A4BFF` for actions, pink and violet only in gradients. Never recolour the FLIK logo.
- **Language:** English first at `/`, Bahasa Indonesia later at `/id/`.
- **Tone:** calm and factual, like stripe.com.
- **Formats:** money `Rp 1.250.000`, dates `12 Okt 2026`, phone `+62 812-3456-7890`.

## Placeholders

This is still a prototype. Mockup data (the store "Aruna Studio", prices, tracking numbers), news posts, the API code samples and the Merchant Cash Advance success story (a made-up merchant with a stock photo) are placeholders. Each page's open questions are listed under **Things to confirm** in its `content/` file.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/
```
