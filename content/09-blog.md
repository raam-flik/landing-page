# Blog

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/blog/ (an article opens at `/blog/?post=<slug>`)
- **Page file:** `blog/index.html`. Each article is one entry in the `POSTS` list near the end of the page script (title, date, reading time, excerpt, body HTML). The newest entry is shown as the featured post.
- **Source:** https://flik.co.id/en/blog (copied 21 Oct 2026, English versions).

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Categories:** the CMS tags two website articles as "Environment" and the brand article as "Fashion". The page labels every article "Guide" instead. Fix the categories in the CMS if they should show.
- [ ] **Images:** the stock photos from the CMS (Unsplash, Pexels) are not used. The design system asks for FLIK visuals, so each article shows a FLIK tile with an icon.
- [ ] **Translation gap:** in "The Importance of a Website for a Brand", one heading was still in Bahasa Indonesia ("4. Bisa Diintegrasikan dengan Layanan Lain"). The page shows "4. Can Be Integrated with Other Services".
- [ ] **Excerpts:** two articles have no SEO description in the CMS; their card text is the first sentence of the article.
- [ ] **Article images:** the checkout article has one inline photo in the CMS; it is left out.
- [x] **Claims check (AG rules, 24 Oct 2026):** the four articles have no 10M+/200+/>50% figures, no RTO or return-rate claims, no Malaysia/Singapore coverage and no COD fee wording, so nothing in them was changed. The final call to action now says "all major couriers" instead of "every courier".
- [x] **Photos for the 4 new articles (20 Nov 2026):** made from the image prompts below and added to the blog and the homepage "latest articles" row.
- [ ] **New articles copy check:** the four 20 Nov articles use only claims from `product-facts.md` (13 couriers and 38 shipping options; the 14:00 WIB same-day cut-off; Early Settlement fee shown before confirming, no timings). Confirm before publishing.
- [ ] **No newsletter sign-up** on this page. If one is added, it needs a privacy notice, an unticked opt-in and "Unsubscribe at any time".

## Search results (SEO)

- **Page title:** Blog: News and Guides for Online Brands | FLIK
- **Description:** News and guides from FLIK on selling online, building your brand and running your own website.
- **Article page title:** <article title> | FLIK Blog

## 1. Page header
<!-- html: List view: page header, featured post, other posts (content from flik.co.id/en/blog) -->

- **Small text above headline:** Blog
- **Headline (H1):** News and guides.
  - **Grey part:** Ideas for selling online and growing your brand.
- **Label:** Latest
- **Small heading:** More articles
- **Link:** Read article

## 2. Articles

- **Article:** Why shoppers leave at checkout, and how to keep them — 20 Nov 2026 — 5 min read — Checkout
- **Article:** Same day, next day or regular: pick the right shipping for every order — 19 Nov 2026 — 5 min read — Shipping
- **Article:** A 10-minute daily check of your sales and payouts — 18 Nov 2026 — 4 min read — Payments
- **Article:** Turn first orders into repeat customers — 17 Nov 2026 — 5 min read — Growth
- **Article:** How to cut failed COD deliveries and get paid faster — 16 Nov 2026 — 5 min read — Shipping
- **Article:** Which payment methods should your online store offer? — 11 Nov 2026 — 5 min read — Payments
- **Article:** Sell on WhatsApp and Instagram with payment links — 4 Nov 2026 — 4 min read — Payment links
- **Article:** Plan your stock and cash for 12.12 and other sale days — 28 Oct 2026 — 6 min read — Funding
- **Article:** The Best Checkout System for Your E-Commerce Website — 12 Jun 2025 — 2 min read
- **Article:** The Importance of Building a Brand for UMKM — 5 May 2025 — 2 min read
- **Article:** The Importance of a Website for a Brand: A Digital Storefront That Never Closes — 15 Apr 2025 — 2 min read
- **Article:** Benefits of Having a Website for Selling: Reach More, Work Smarter — 1 Apr 2025 — 2 min read

The article bodies are the English texts from the FLIK CMS. Edit them in the CMS, or in the `POSTS` list.

## 3. Article view
<!-- html: Article view (?post=slug) -->

- **Link:** All articles
- **Small heading:** More from the blog

## 4. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Sell on your own website with FLIK.
- **Text:** A faster checkout, all major couriers and funding for your stock, from one dashboard.
- **Button:** Talk to the FLIK team
- **Button:** Explore Checkout

## 5. Image prompts
<!-- Photos in assets/blog/: <name>-l.jpg (landscape, 1600×900, blog) and <name>-p.jpg (portrait, 928×1152, homepage cards). Same look as the existing four: a real product photo on a soft lilac backdrop. -->

**Shared style (add to every prompt):** Photorealistic product photo, soft diffused daylight from the left, seamless pastel lilac backdrop with a faint warm pink glow on one side, matte lilac surface, shallow depth of field, calm and minimal, the subject centred with plenty of space around it. No people's faces, no hands in focus, no readable text except the FLIK logo, no other brand logos. Upload `FLIK.svg` as a reference image so the logo is drawn correctly (orange F mark, navy "LIK"). Make one 16:9 version and one 4:5 version.

- **checkout-drop-off** (Why shoppers leave at checkout): A smartphone standing upright on a small stand, its screen showing a clean, simple checkout page with a single large violet pay button and a short order summary (text blurred). Next to it, a small white paper shopping bag with the FLIK logo on the front, its handles slightly tilted. A soft lilac shadow under both.
- **shipping-service-choice** (Pick the right shipping): Three kraft cardboard parcels in a row, small, medium and large, like steps going up. Each has a white shipping label with blurred text and the FLIK logo; a small round lilac sticker with a clock icon on the smallest parcel, a calendar icon on the middle one and no sticker on the largest. Neat, tight packing tape.
- **sales-payout-routine** (Daily check of sales and payouts): A flat lay seen from above at a slight angle: a smartphone showing a simple rising line chart in violet, a small paper notebook with three ticked checkboxes (text blurred), a ceramic coffee cup half full and a pen. The FLIK logo on the phone's screen header. Morning light, a soft long shadow.
- **repeat-customers** (Turn first orders into repeat customers): An opened kraft mailer box with lilac tissue paper folded back, a neatly folded linen shirt inside, and a small white thank-you card leaning on the box with a hand-drawn heart (no readable words). A small loyalty stamp card next to it with three of five circles stamped. The FLIK logo printed small on the inside of the box lid.

