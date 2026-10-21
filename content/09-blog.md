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
- **Text:** A 30-second checkout, every courier and funding for your stock, from one dashboard.
- **Button:** Talk to the FLIK team
- **Button:** Explore Checkout
