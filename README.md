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

## Reference and archive

- [`FLIK_Landing_Page_Reference.md`](FLIK_Landing_Page_Reference.md): product facts, marketing copy, sitemap and SEO plan. Every page follows it.
- [`archive/`](archive/): earlier rounds (v1–v3, the brand-colour set, the old dashboard, older prototypes, the 3D ecosystem exploration and the previous reference doc).
- `.vercelignore` keeps both out of the live website; they live in the repo only.

## Text content

All page text is in [`content/`](content/), one Markdown file per page, so the copy can be edited without touching HTML. [`content/AI-GUIDE.md`](content/AI-GUIDE.md) explains how an AI applies those edits back to the pages.

## How it fits together

- Each page is a single self-contained HTML file with inline CSS and JS. The Inter font loads from Google Fonts.
- The homepage, Checkout, Shipping and Merchant Cash Advance pages link to each other through a small `ROUTES` table near the end of each file. Links to pages that don't exist yet show a "Page not in this prototype yet" toast.
- Courier logos are in `shipping/img/` and `dashboard/img/`.
- `dashboard/index.html` is a **copy** of the v4 dashboard. The main copy is in the flik-dashboard repo (`product/Dashboard/<menu>/prototype-v4.html`); change it there first, then refresh this file.
- `vercel.json` forwards links from earlier prototype rounds to the matching page.

## Style

Everything visual follows the **FLIK Design System**: https://github.com/raam-flik/flik-design-system (use its components and only its colours). In short:

- **Colours:** navy `#002D5D` for headlines and dark sections, violet `#6A4BFF` for actions; orange, magenta and cyan only in the brand ribbon. Never recolour the FLIK logo.
- **Language:** English first at `/`, Bahasa Indonesia second at `/id/`.
- **Tone:** calm and factual, like stripe.com.
- **Formats:** money `Rp1.250.000`, dates `12 Oct 2026`, phone `+62 812-3456-7890`.

## Placeholders

This is still a prototype. Mockup data (the store "Aruna Studio", prices, tracking numbers), news posts, the API code samples and the Merchant Cash Advance success story (a made-up merchant with a stock photo) are placeholders. Each page's open questions are listed under **Things to confirm** in its `content/` file.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/
```
