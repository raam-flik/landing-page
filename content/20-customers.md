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
- [ ] **Example stories (Raam, 12 Nov 2026):** every story page now has a general example story (challenge, how FLIK helps, result) built from the products the brand uses, labelled "Example story". The text describes what each FLIK product does; it is not the brand's own account. Replace each with the approved real story before relying on it publicly.
- [ ] **Full stories:**  Stripe-style stories need the brand's own words: a short story, a quote with name and role, two to four results with real numbers, and a photo. None are invented here.
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
- **Section heading:** What brands get with FLIK.
- **Results:** 30 sec — to check out with FLIK Checkout / 15 — payment methods in one checkout / Up to 40% — less on shipping, with all major couriers / 99% — of shipments created successfully (FLIK product facts approved for the homepage, not results claimed for any one brand)
- **Logo wall:** every customer (real logo where we have it, name otherwise)
- **Section heading (tabs):** One platform, every way they sell.
  - **Grey part:** See which brands use each FLIK product.
- **Tabs:** Checkout / Shipping / In-Store Payment / Merchant Cash Advance
- **Product text (Checkout):** A 30-second checkout on their own website, with QRIS, e-wallets, virtual accounts, cards and COD.
- **Product text (Shipping):** Every major courier in one dashboard, with rates compared and a tracking link for every shopper.
- **Product text (In-Store Payment):** QRIS and cards at the counter, with in-store sales in the same dashboard as online.
- **Product text (Merchant Cash Advance):** Upfront funding for stock or a new outlet, settled automatically from sales.
- **Link:** Explore <product>
- **Building together (eyebrow):** Building together
- **Section heading:** We work with brands to grow every channel.
  - **Grey part:** From the website to the counter, FLIK fits the way each brand sells.
- **Examples:** Kopi Kalian, Gerai Hawa, OSIM — How <Brand> works with FLIK — Challenge / Solution / Products (the example story text) — Read the example story; beside it an example FLIK screen for the brand's product
- **All stories (eyebrow):** All customer stories
- **Section heading:** Sell, ship and grow with FLIK.
- **Filters:** All / Checkout / Shipping / In-Store Payment / Merchant Cash Advance
- **By solution (eyebrow):** Customers by solution
- **Section heading:** We obsess over every step of the sale, so brands don't have to.
- **Text:** Checkout, payments, shipping and funding are built to work together in one dashboard, without months of integration work.
- **Text:** That means more time for the product and the customers, and less time stitching systems together or chasing payments and packages.
- **Checklist:** Accept payments online / Take QRIS and cards in store / Ship with every major courier / Offer cash on delivery / Track every package / Settle early / Fund your next step / Stop fraud before it costs you
- **Final section:** Ready to get started? — Create an account and start selling, or talk to the FLIK team about a setup for your business. — Get started / Contact sales
  - **Always know what you'll pay** — Fees per transaction, with VAT shown on every fee. No hidden costs. — Pricing details
  - **Start your integration** — Connect with a Shopify or WooCommerce plugin, or build on the FLIK API. — Developer docs
- **Card link:** Read story

## Example story text (per product, <Brand> is filled in)

- **Checkout headline:** <Brand> gives shoppers a faster way to pay with FLIK Checkout.
  - **Challenge:** Selling on its own website means <Brand> needs a checkout shoppers trust, with the payment methods Indonesians use every day. Every extra step between the cart and the payment is a chance to lose the sale.
  - **How FLIK helps:** <Brand> replaced its checkout with FLIK Checkout. Shoppers log in with a WhatsApp code, their details fill in from their FLIK account, and they pay by QRIS, e-wallet, virtual account, card or COD on one page.
  - **Result:** Shoppers get from cart to paid in a few taps, and returning shoppers don't type their details again.
- **Shipping headline:** <Brand> ships every order from one dashboard with FLIK Shipping.
  - **Challenge:** Every order has to reach the shopper on time. Comparing courier rates, booking pickups and answering "where is my package?" takes time the <Brand> team would rather spend on the brand.
  - **How FLIK helps:** With FLIK Shipping, <Brand> compares rates from all major couriers in one dashboard, books pickups in a few clicks and sends every shopper a tracking link.
  - **Result:** Shipping runs from one place, and shoppers can follow every package without messaging the team.
- **In-Store Payment headline:** <Brand> takes QRIS and cards at the counter with FLIK.
  - **Challenge:** At the counter, <Brand>'s customers want to pay the way they like, and fast. Keeping in-store sales apart from the rest of the business makes the numbers harder to read.
  - **How FLIK helps:** With FLIK In-Store Payment, customers pay <Brand> by QRIS or card at the counter, and every sale lands in the same FLIK dashboard as its other channels.
  - **Result:** Payments at the counter are quick, and the team sees in-store sales next to everything else.
- **Merchant Cash Advance headline:** <Brand> funds its next step with a FLIK Merchant Cash Advance.
  - **Challenge:** Growing means buying stock or opening a new outlet before the sales come in. Bank loans take time, and fixed instalments don't follow how sales actually move.
  - **How FLIK helps:** With a Merchant Cash Advance from FLIK, <Brand> gets funding upfront for one fixed margin, agreed before it signs, and settles it automatically from its sales.
  - **Result:** <Brand> can invest in growth now and pay it back as it sells, with no compounding interest.
- **In-Store Payment + Merchant Cash Advance headline:** <Brand> takes payments at the counter and funds its growth with FLIK.

## 2. Story page
<!-- html: Story (?c=slug): breadcrumb, headline + side card, products used in detail -->

- **Breadcrumb:** Customers / <Brand>
- **Label:** Example story
- **Headline (H1):** the example headline for the brand's products (above)
- **Intro text:** <Brand> is a <category> brand. It uses <products>.
- **Side card:** logo — Products used — Category — Website
- **Side button:** Ready to grow? — Contact sales
- **Sections:** The challenge — How FLIK helps (one part per product, with Explore <product>) — The result
- **Note:** This is an example story. — The final story, with <Brand>'s own words and results, will be written with the <Brand> team.
- **Section heading:** More customers.
- **Not found:** We couldn't find that story. — It may have moved. See every brand on the customers page. — All customers

## 3. Final call to action (both pages)

- **Heading:** Grow with FLIK.
- **Text:** Join the brands that sell, ship and grow with FLIK. Talk to the team about your business.
- **Button:** Get started
- **Button:** Contact sales
