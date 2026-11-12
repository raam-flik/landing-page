# Customers

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/customers/ (sections: `#by-product`, `#all`)
- **Story page:** `/customers/story/?c=<slug>` (one template for every customer, for example `?c=emados`)
- **Page files:** `customers/index.html` and `customers/story/index.html`. The customer list is `CUSTOMERS` and the product texts are `PRODUCTS` near the end of each page script (the same list is in both files; change both).
- **Menu:** Resources › Learn › Customers. The homepage "Read Erigo's story" link opens Erigo's story.
- **Source:** customer list per product from Raam, 12 Nov 2026. Structure follows stripe.com/customers and stripe.com/customers/lovable.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Permission:** every brand below is shown by name, and with its logo where we have one. Confirm each brand has agreed to be listed as a FLIK customer.
- [ ] **Logos missing** (shown as the brand name in text until a real logo file is added to `design-system/assets/Logos/merchant/`): Sigit Store, Paper, Wakaigo, OSIM, Manta Liberta, Teenage Death Star, Kopi Kalian, Haus!, Donat Bahagia, Heylocal, Erigo.
- [ ] **Logo matches to check:** Aneka Family uses `aneka.png` (the "aneka" badge); Emados uses `emandos.png` (reads "EMADO'S", white artwork, so it sits on a navy tile).
- [ ] **Categories** are shown only where the brand is well known: OSIM (Wellness), Gerai Hawa (Modest fashion), Teenage Death Star (Music and merchandise), Kopi Kalian (Coffee), Emados, Haus! and Donat Bahagia (Food and beverage), Erigo (Fashion). Confirm, and add categories for the others.
- [ ] **Erigo:** the list says Merchant Cash Advance only, but the homepage story card says "Erigo runs delivery, payment and returns from one place with FLIK". Which products does Erigo use?
- [ ] **Full stories:** every story page shows the products the brand uses and a "full story is coming soon" note. Stripe-style stories need the brand's own words: a short story, a quote with name and role, two to four results with real numbers, and a photo. None are invented here.
- [ ] **No results section:** Stripe's customers page has "measurable results". It is left out until there are real, approved numbers.
- [ ] **Websites:** only Teenage Death Star has a website link (teenagedeathstar.com). Send the others' sites to add them.

## Search results (SEO)

- **Page title:** Customers: Brands That Grow with FLIK | FLIK
- **Description:** See the brands that use FLIK Checkout, Shipping, In-Store Payment and Merchant Cash Advance to sell, ship and grow in Indonesia.
- **Story page title:** <Brand> | FLIK Customers

## Customers by product

- **Checkout:** Sigit Store, Artch, Paper, Wakaigo, OSIM
- **Shipping:** Zaafer, Gerai Hawa, Manta Liberta, Teenage Death Star
- **In-Store Payment (QRIS):** Kopi Kalian, Aneka Family, Emados, Haus!, Donat Bahagia
- **Merchant Cash Advance:** Heylocal, Emados, Erigo, Haus!, Kopi Kalian

## 1. Customers page
<!-- html: Hero: text left, a collage of customer cards right -->

- **Sub-menu:** Customers — Overview / All customers
- **Headline (H1):** The commerce platform behind Indonesia's growing brands.
- **Intro text:** From fashion labels to coffee shops, brands use FLIK to sell on their own website, take QRIS at the counter, ship with every major courier and fund their next step.
- **Button:** See all customers
- **Button:** Contact sales
- **Hero cards:** Kopi Kalian, Artch, Emados, Gerai Hawa, Erigo, OSIM — each with its products and "Read story"
- **Section heading (logo wall):** Brands that grow with FLIK.
- **Section heading (tabs):** One platform, every way they sell.
  - **Grey part:** See which brands use each FLIK product.
- **Tabs:** Checkout / Shipping / In-Store Payment / Merchant Cash Advance
- **Product text (Checkout):** A 30-second checkout on their own website, with QRIS, e-wallets, virtual accounts, cards and COD.
- **Product text (Shipping):** Every major courier in one dashboard, with rates compared and a tracking link for every shopper.
- **Product text (In-Store Payment):** QRIS and cards at the counter, with in-store sales in the same dashboard as online.
- **Product text (Merchant Cash Advance):** Upfront funding for stock or a new outlet, settled automatically from sales.
- **Link:** Explore <product>
- **Section heading:** All customers.
- **Card link:** Read story

## 2. Story page
<!-- html: Story (?c=slug): breadcrumb, headline + side card, products used in detail -->

- **Breadcrumb:** Customers / <Brand>
- **Headline (H1):** How <Brand> uses <products>.
- **Intro text (when the category is known):** <Brand> is a <category> brand on FLIK.
- **Side card:** logo — Products used — Category — Website
- **Side button:** Ready to grow? — Contact sales
- **For each product:** the product text above — Explore <product>
- **Note:** <Brand>'s full story is coming soon. — We're writing it with the <Brand> team. In the meantime, talk to us about what FLIK can do for your brand.
- **Section heading:** More customers.
- **Not found:** We couldn't find that story. — It may have moved. See every brand on the customers page. — All customers

## 3. Final call to action (both pages)

- **Heading:** Grow with FLIK.
- **Text:** Join the brands that sell, ship and grow with FLIK. Talk to the team about your business.
- **Button:** Get started
- **Button:** Contact sales
