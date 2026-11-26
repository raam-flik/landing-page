# Shipping

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/shipping/
- **Page file:** `shipping/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [x] **Demo calls (Raam, 26 Nov 2026):** every Contact sales / Talk to the FLIK team button on the Shipping pages and the COD sellers page, and any button tagged `data-interest="Shipping"` elsewhere, opens Bintang's Calendly (https://calendly.com/bintang-flik/30min) instead of the general intro link. Set in each page as `SHIP_SALES_URL`.

- [x] Coverage: Malaysia and Singapore removed everywhere, including the search data (`areaServed` is now Indonesia only). Coverage is "across Indonesia" (AG, 24 Oct 2026).
- [x] Shipping discount is "up to 45% off published rates" (Raam, 16 Nov 2026; was "up to 50%", AG 12 Nov; "up to 40% less", AG 24 Oct). Claims: "up to 40% less", "COD fee 3% (excl. PPN)" and "99% of shipments created successfully" are allowed (AG, 24 Oct 2026). The "3 countries" stat is replaced with "15 payment methods".
- [x] Struck-through "was" prices and invented discounts removed from the rate checker and the globe. Prices are labelled "Example" (AG, 24 Oct 2026).
- [x] "Lower RTO", "Fewer coming back", the −38% badge and the returns chart removed. The page now uses neutral copy about tracking every parcel and handling returns (AG, 24 Oct 2026).
- [x] COD: "paid upfront" and "No other withdrawal costs" removed. The COD ledger mockup now shows a "PPN on fee (example, 11%)" row so the balance adds up (AG, 24 Oct 2026).
- [ ] "COD that pays you back fast" (COD heading) is kept as Raam wrote it. Please confirm "fast" is OK next to "credited after delivery".
- [ ] PPN rate in the COD mockups is shown as an example (11%). Please confirm the rate to show.
- [ ] **Delivery health check and Monitoring (15 Nov 2026):** both sections are rebuilt from the dashboard prototype (Shipping › Shipment and Shipping › Monitoring), with example data. Confirm each is live before publishing: the 0–100 health score, WhatsApp confirmation and payment link for COD orders, the Monitoring statuses (Delayed, At risk, Problem), tickets and claims.
- [ ] **Score or level:** the Fraud Detection page shows a risk level and its reason. This page shows the dashboard's 0–100 score with the reason. Pick one for both pages. Reasons here carry no counts, dates or other merchants' details.
- [ ] The shopper privacy notice must be published before the health score goes live (same gate as Fraud Detection).
- [ ] **COD fee 3% appears once (AG, 16 Nov 2026):** only in the COD section. Removed from the hero list (now "COD and non-COD"), the stats row (now "100K+ COD orders delivered this year", its second and last use site-wide), the COD list, the balance mockup, the globe label, the COD sellers card ("7 couriers with COD", Bintang 13 Nov) and the FAQ. Still in the shared menu, the search description and the search data: decide whether those change too.
- [x] "99% of shipments created successfully" removed from the hero list and the stats row: weak claim (AG, 16 Nov 2026). The hero list now ends with "Cross-border shipping"; the stats row splits 13 couriers and 38 logistics options into two stats.
- [x] Speed and cost bars removed from the five service cards: gimmicky, keep the section light (AG, 16 Nov 2026).
- [x] COD section cut from about 85 words to 35: "too verbose" (AG, 16 Nov 2026). Two list items removed, courier names replaced by a count.
- [ ] **Cross-border (16 Nov 2026):** added as a strip under the five speeds and one FAQ answer. The only approved fact is that it is available (AG, 13 Nov 2026), so the page names no destinations, couriers, rates or delivery times. The homepage notes still say it is off (Bintang, 13 Nov). Align the two before publishing. "Across Indonesia" is dropped from the hero intro only (AG, 16 Nov 2026). It stays in the search description, the COD heading and the FAQ, where the claim is domestic, and `areaServed` is still Indonesia only (AG, 24 Oct 2026).

- [x] **Hero globe (Raam, 13 Nov 2026):** now draws the land like the homepage globe (Natural Earth land map), so it reads as a real globe instead of an even dot field.
## Search results (SEO)

- **Page title:** The Shipping Engine for Growing Brands | FLIK Shipping
- **Description:** FLIK Shipping compares all major couriers in one dashboard. Ship across Indonesia for up to 45% off published rates, single or bulk, with a 3% COD fee (excl. PPN) and parcel tracking.

## 1. Hero
<!-- html: Hero: text left, a working rate checker on the right -->

- **Small text above headline:** FLIK Shipping
- **Headline (H1):** The shipping engine for growing brands.
  - **Grey part:** All major couriers, up to 45% off published rates.
- **Intro text:** Turning every order into a tracked delivery. Compare rates, ship one by one or in bulk, and follow every package. You make the sale, we move it.
- **Button:** Start shipping free
- **Button:** Contact sales
- **List item:** No registration fee
- **List item:** COD and non-COD
- **List item:** Cross-border shipping
- **Text:** All major couriers, one dashboard — and more

## 2. Stats
<!-- html: Stats: ruled grid to the guide lines -->

- **Section heading:** One dashboard for every shipment.
  - **Grey part:** From your first order to your busiest sale, FLIK handles the couriers so you can focus on selling.
- **Stat:** 45% — off published rates, at most
- **Stat:** 100K+ — COD orders delivered this year
- **Stat:** 13 — couriers in one dashboard
- **Stat:** 38 — logistics options

## 3. Rate checker
<!-- html: Rate checker: compare all major couriers #rates -->

- **Section heading:** Compare all major couriers in seconds.
  - **Grey part:** Pick a route and a weight, then sort by the cheapest or the fastest.
- **List item:** Regular, next day, same day, instant and cargo
- **List item:** Up to 45% off published shipping rates
- **List item:** Live rates in your dashboard
- **Label (top of rate checker):** Example
- **Form label:** From
- **Dropdown option:** Jakarta
- **Dropdown option:** Bandung
- **Dropdown option:** Semarang
- **Dropdown option:** Yogyakarta
- **Dropdown option:** Surabaya
- **Dropdown option:** Denpasar
- **Dropdown option:** Medan
- **Dropdown option:** Makassar
- **Dropdown option:** Balikpapan
- **Dropdown option:** Jayapura
- **Form label:** To
- **Dropdown option:** Jakarta
- **Dropdown option:** Bandung
- **Dropdown option:** Semarang
- **Dropdown option:** Yogyakarta
- **Dropdown option:** Surabaya
- **Dropdown option:** Denpasar
- **Dropdown option:** Medan
- **Dropdown option:** Makassar
- **Dropdown option:** Balikpapan
- **Dropdown option:** Jayapura
- **Form label:** Weight
- **Button:** Jakarta – Denpasar
- **Button:** Semarang – Jakarta
- **Button:** Surabaya – Bandung
- **Button:** Medan – Jakarta
- **Button:** Jakarta (same city)
- **Button:** Cheapest
- **Button:** Fastest
- **Text:** Example rates. Your live rates appear in the dashboard.

## 4. Services
<!-- html: Services: five speeds in one row #services -->

- **Section heading:** The right speed for every order.
  - **Grey part:** Instant, same day, next day, regular or cargo. Pick one per order, or let FLIK pick the cheapest or fastest.
- **Heading:** Instant
- **Text:** Within the city, delivered in hours by motorbike.
- **Heading:** Same day
- **Text:** Delivered the same day within the city.
- **Heading:** Next day
- **Text:** Delivered the next day to nearby cities.
- **Heading:** Regular
- **Text:** Everyday orders to anywhere in Indonesia.
- **Heading:** Cargo
- **Text:** Heavy and bulky items at a lower rate per kg.

### Cross-border strip (16 Nov 2026)
<!-- html: #cross-border, inside #services -->

- **Heading:** A shopper abroad is still your shopper.
- **Text:** FLIK ships cross-border too.
- **Link:** Ask about destinations and rates (opens the sales form)

## 5. Single or bulk
<!-- html: Single or bulk: full-width band with a live diagram #bulk -->

- **Section heading:** One warehouse or all of them.
- **Intro text:** Ship from one warehouse to one or many addresses, or from all your warehouses at once. Every shipment is paid from your FLIK balance before it is created.
- **Button:** One warehouse (was "Single")
- **Button:** Many warehouses (was "Bulk")
- **List item:** One warehouse to one or many addresses
- **List item:** Choose the service and a pickup time
- **List item:** Paid from your FLIK balance before it is created
- **List item (Many warehouses):** Many warehouses to many destinations at once
- **List item (Many warehouses):** Upload a file, or pull orders from your store
- **List item (Many warehouses):** COD money in, next shipments paid (was "Top up your balance if it runs low, then ship"; AG, 16 Nov 2026)

## 6. Courier performance by region
<!-- html: Courier performance by region #performance -->

- **Section heading:** Pick the best courier for every region.
  - **Grey part:** See how each courier performs where your shoppers live, and send each order with the one that delivers.
- **Button:** Jabodetabek — 2.500
- **Button:** Jawa Barat — 746
- **Button:** Jawa Tengah & DIY — 2.332
- **Button:** Jawa Timur — 1.977
- **Button:** Bali & Nusa Tenggara — 2.289
- **Button:** Sumatera — 1.737
- **Button:** Kalimantan — 1.401
- **Button:** Sulawesi — 2.334
- **Button:** Papua & Maluku — 2.433
- **Text:** Example data.

## 7. COD
<!-- html: COD: dark section with a balance ledger #cod -->

- **Section heading:** COD that pays you back fast.
  - **Grey part:** Paid into your FLIK balance as soon as the parcel is delivered.
- **Text:** 3% — COD fee (excl. PPN), deducted when you're paid.
- **List item:** Your COD money pays for the next shipments.
- **List item:** Missed the shopper? The courier tries again the next day. (AG, 16 Nov 2026; fact: the courier tries again the next day, up to two attempts.)

*Example text inside the COD mockup (only change if needed):*

- FLIK balance · Example
- COD fee · Deducted when credited
- PPN on fee (example, 11%) · On the COD fee

## 7b. Delivery health check
<!-- html: Delivery health check: a score on every shipment before it ships (example data) #health -->

- **Section heading:** Spot the risky order before it ships.
  - **Grey part:** Every shipment gets a delivery health score, so you know which ones to check first.
- **Heading:** A score on every shipment
- **Text:** From 0 to 100, with the reason beside it. Higher means the parcel is more likely to arrive.
- **Heading:** Ask before you ship
- **Text:** Ask a COD shopper to confirm on WhatsApp, or send a payment link instead. The order ships once they reply.
- **Heading:** Always your call
- **Text:** The score is advice. Ship anyway, fix the details, or remove the order.

*Example text inside the health check mockup (only change if needed):*

- Delivery health check — A score from 0 to 100 for each shipment. Higher means less risk.
- Average — 91 · 236 good · 9 fair · 3 risky · Review 12
- Columns — Shopper · Health score · Payment · Action
- Reasons — Past deliveries to this number failed · Fewer deliveries succeed in this area · No delivery history for this number yet
- Actions — Ship anyway · Confirm on WhatsApp · Payment link on WhatsApp · Remove order
- Example data.

## 8. Tracking + returns
<!-- html: Tracking + returns #track -->

- **Section heading:** Every package tracked.
  - **Grey part:** Returns handled in the same place.
- **Small text:** All major couriers, one search
- **Button:** Track
- **Text:** The AWB is ready the moment you create a shipment, so shoppers can follow it from the start.
- **Text:** If a delivery fails, the courier tries again the next day, up to two attempts.
- **Heading:** Returns in one place
- **Text:** Follow every parcel, including the ones that come back. See failed deliveries in the dashboard, and switch to the courier that delivers best in that region.

## 8b. Monitoring
<!-- html: Monitoring: every shipment on the move, and the ones that need action (example data) #monitoring -->

- **Section heading:** Problems come to you.
  - **Grey part:** Late, failed or lost: every shipment that needs you lands in one list.
- **Heading:** Alerts for your team
- **Text:** When a delivery hits a problem, your operations team is told automatically.
- **Heading:** Late parcels flagged
- **Text:** Each shipment is checked against the courier's delivery time for its route.
- **Heading:** Tickets and claims in one place
- **Text:** Ask FLIK to chase a late parcel, or file a claim when one is lost or damaged.

*Example text inside the Monitoring mockup (only change if needed):*

- Tabs — Live · Needs action · On hold · Tickets · Claims
- Shipping condition — 94,2% on track · 1.240 shipments on the move
- Statuses — On track · Delayed · At risk · Problem
- On the move now — Wait pickup · Picked up · In transit · Out for delivery
- Needs action columns — AWB · Monitoring · Courier · Issue · Age
- Issues — Unconfirmed return · Lost · Address not found · Customer refused the parcel · Past the courier's SLA
- Example data.

## 9. Integrations
<!-- html: Integrations #integrate -->

- **Section heading:** Orders flow in on their own.
  - **Grey part:** Connect your store and every new order is ready to ship in the FLIK dashboard.
- **Label:** Shopify
- **Heading:** Orders sync from Shopify
- **Text:** New orders appear in your FLIK Shipping dashboard, ready to ship.
- **Checklist:** New orders come in on their own · Ready to ship in one dashboard · Track every package
- **Link:** Shopify integration
- **Label:** WooCommerce
- **Heading:** We set it up for you
- **Text:** The FLIK team connects your WooCommerce store to the FLIK Shipping dashboard.
- **Checklist:** The FLIK team sets it up · A WordPress plugin · Rates shown at checkout
- **Link:** WooCommerce integration
- **Label:** FLIK Checkout
- **Heading:** Sold with FLIK, shipped with FLIK
- **Text:** Checkout orders ship through FLIK Shipping with the couriers you set in Shipping settings.
- **Checklist:** Courier picked at checkout · Ships from your warehouse · Your choice of couriers
- **Link:** Explore Checkout

## 10. Who it is for
<!-- html: Who it is for #who -->

- **Section heading:** Built for brands that ship every day.
- **Text (COD sellers card):** 7 couriers — with COD
- **Link:** Learn more


## Customer stories (13 Nov 2026)
<!-- html: kit customer-stories: the homepage "Powering brands" story cards and carousel (Stripe style), the same on Checkout, Shipping, Merchant Cash Advance and In-Store Payment, before the FAQ #customers -->

- **Section heading:** Brands that grow with FLIK Shipping.
  - **Grey part:** How Indonesian brands use it, in their own stories.
- **Story cards (carousel, every brand on this product, in this order):** Zaafer, Gerai Hawa, Manta Liberta, Teenage Death Star. Each card: brand logo, a big line (the stat for real stories, the brand name for example stories), the story headline and "Read <brand>'s story". Real stories go first: Gerai Hawa, Teenage Death Star, Zaafer.
- **Fourth card:** All stories · "See how every brand sells, ships and grows with FLIK." · link: See all customer stories (to Customers)
- Captions are two lines at most, shortened from each story's headline (the story page keeps the full headline).
- Data and headlines come from the Customers page. ERIGO, EMADO'S and HEYLOCAL are real stories (with their stat); the others are example stories until each brand approves its own. No quotes are invented.

## 11. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Button:** What is FLIK Shipping?
- **Answer:** A shipping service that helps businesses ship for less through one dashboard, with access to many couriers across Indonesia.
- **Button:** How does it work?
- **Answer:** Enter the delivery addresses, one by one or in bulk, and FLIK shows every available rate. Choose the service (regular, same day, next day, instant or cargo) and a pickup time.
- **Button:** How much does it cost?
- **Answer:** Joining is free and there is no registration fee. You pay for each shipment from your FLIK balance before it is created.
- **Button:** When is the COD fee charged?
- **Answer:** The COD fee is paid by the merchant. It is deducted when the COD amount is credited to your balance after delivery. Shipping is paid from your balance when you create the shipment.
- **Button:** How do I receive COD funds?
- **Answer:** They are credited to your FLIK balance automatically once the delivery is complete.
- **Button:** Can I ship abroad?
- **Answer:** Yes. Cross-border shipping is available. Talk to the FLIK team about destinations and rates.
- **Button:** Can I cancel a shipment?
- **Answer:** Yes, until the courier picks up the package.
- **Button:** What happens if a delivery fails?
- **Answer:** The courier tries again the next day, up to two attempts. If it still fails, the package is returned to you. Courier-direct services don't retry: undelivered packages are returned right away.
- **Button:** How long does pickup take?
- **Answer:** Regular: 3–5 hours after the AWB is ready. Same day: orders fulfilled before 14:00 WIB are picked up the same day, later ones the next day. Instant: a driver comes right away.
- **Button:** How do I contact FLIK support?
- **Answer:** Monday to Friday, 09:00–18:00 WIB, at support@flik.co.id or on WhatsApp at +62 812-9201-2668.
- **Text:** Can't find what you need? Talk to the FLIK team

## 12. Resources
<!-- html: Resources: 3 cards -->

- **Heading:** More from FLIK
- **Tag:** Product
- **Tag:** Tool
- **Text:** Check the status of any shipment, from all major couriers.

## 13. Final CTA
<!-- html: Final CTA (centered) -->

- **Section heading:** Start shipping for less today.
- **Text:** Create a free account, connect your store, and send your first shipment in minutes.
- **Button:** Start shipping free
- **Button:** Contact sales
- **Link:** See pricing
