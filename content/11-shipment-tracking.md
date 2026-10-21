# Shipment tracking (cek resi)

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/shipping/track/
- **Result link:** `/shipping/track/?id=<order number or AWB>` (optional `&courier=<code>`). This is the shareable link ("Link AWB" in the dashboard).
- **Page file:** `shipping/track/index.html`. Couriers are in the `COURIERS` list, the example shipments in `DEMO`, the status guide in `GUIDE` and the questions in `FAQ`, all near the end of the page script.
- **Linear:** FLI-49. Replaces the look of https://cekresi.flik.co.id/track/.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Data:** the page uses example shipments. Live status needs a public tracking API from the shipping backend (the same feed the dashboard uses), returning only: courier, service, status, city of origin and destination, masked recipient initial, estimated delivery, last update, and event descriptions with times.
- [ ] **Privacy (the API must enforce this, not the page):** never return the shopper's name, phone, full address, item details or COD amount. City or kecamatan level only; recipient as one initial plus "***".
- [ ] **Current cekresi.flik.co.id leaks personal data.** On 21 Oct 2026 its result pages showed the recipient's name, full phone number, full street address (RT/RW and house number), the sender and the COD payment type to anyone with the number. Fix or retire it before linking it anywhere.
- [ ] **noindex:** result pages (`?id=`) must be `noindex`. The prototype adds the meta tag with JavaScript; the server should also send `X-Robots-Tag: noindex` for any URL with `?id=`. Only `/shipping/track` itself is indexed.
- [ ] **Rate limit and enumeration:** the prototype blocks more than 5 searches a minute in the browser only. The API must rate-limit by IP, and return the same "No tracking yet" answer for unknown and invalid numbers.
- [ ] **Courier detection:** there is no courier picker; the backend detects the courier from the number. The patterns in `COURIERS` only serve the prototype.
- [ ] **Status names:** the page maps every courier event to Created, Picked up, At hub, Out for delivery, Delivered, Delivery failed or Returned to sender. The backend must send these instead of raw codes such as "DELIVERY_FAILED" or "Invalid Status".
- [ ] **Event text:** courier events arrive in Bahasa Indonesia. The English page shows them in English; the `/id/` page can show the originals.
- [ ] **Courier staff names** in event text (for example "SATRIA sudah ditugaskan") should be removed by the API.

## Search results (SEO)

- **Page title:** Track Your Package, All Couriers | FLIK
- **Page title (ID):** Cek Resi Semua Kurir | FLIK
- **Description:** Track any package with one search: enter the order number or AWB (resi) and see the status, courier and estimated delivery for JNE, J&T, SPX, AnterAja, SiCepat, Ninja Xpress and more.

## 1. Search
<!-- html: Search: order number or AWB, courier auto-detected or picked -->

- **Small text above headline:** Shipment tracking
- **Headline (H1):** Track any package.
  - **Grey part:** Every courier, one search.
- **Intro text:** Enter the order number or AWB (resi). FLIK detects the courier and shows where your package is, without signing in.
- **Form label:** Order number or AWB
- **Placeholder:** e.g. JX2026102100428
- **Button:** Track
- **Error:** Enter the full order number or AWB (resi).
- **Error:** Too many searches. Try again in a minute.
- **Text:** Try an example:
- **Text:** Works with JNE, J&T Express, SPX Express, AnterAja, SiCepat, Ninja Xpress, ID Express, Lion Parcel and more

## 2. Result
<!-- html: Result (example data). Public page: city level only, masked recipient, no phone, address, items or COD amount. Result URLs are noindex. #result -->

- **Button:** Copy link
- **Toast:** Tracking link copied
- **Button:** Share on WhatsApp
- **Label:** Courier / Estimated delivery / Delivered / Returned / Last update / Route
- **Steps:** Created — Picked up — At hub — Out for delivery — Delivered
- **Small heading:** Tracking history
- **Note:** For privacy this page shows the city only, never the shopper's name, phone, address or order details. Questions about the order? Contact the store you bought from.
- **No result heading:** No tracking for <number> yet.
- **No result text:** If the number is right, tracking can take a few hours to appear after the sender creates the shipment. Check the number with the sender and try again.
- **Button:** Check the number
- **Button:** Get help

*Example shipments (only change if needed):*

- JX2026102100428 — JNE Reguler — Jakarta Barat → Bandung — Recipient R*** — Delivered 22 Oct 2026
- SPXID06200428119A — SPX Express Standard — Purwakarta → Jakarta Utara — Recipient D*** — Delivery failed, next attempt 22 Oct 2026
- 11004497100428 — AnterAja Reguler — Jakarta Timur → Tangerang — Recipient V*** — Returned to sender 17 Oct 2026

## 3. What your tracking status means
<!-- html: What each status means #statuses -->

- **Section heading:** What your tracking status means.
  - **Grey part:** The same words for every courier, so you always know what happens next.
- **Status:** Created — The sender has created the shipment and the AWB. The courier hasn't picked it up yet.
- **Status:** Picked up — The courier has the package and is taking it to their first hub.
- **Status:** At hub — The package is being sorted or is moving between the courier's hubs.
- **Status:** Out for delivery — A courier is bringing the package to the delivery address today.
- **Status:** Delivered — The package has been received at the delivery address.
- **Status:** Delivery failed — The courier couldn't deliver it. They usually try again the next day, up to two attempts.
- **Status:** Returned to sender — After failed attempts, the package goes back to the sender.

## 4. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** Where do I find my AWB (resi)?
  - **Answer:** In the shipping confirmation from the store, on the order page of the store you bought from, or on the label of the package. Some stores send a tracking link instead.
- **Question:** Do I need to know the courier?
  - **Answer:** No. FLIK detects the courier from the order number or AWB.
- **Question:** Why is there no tracking yet?
  - **Answer:** Tracking can take a few hours to appear after the sender creates the shipment. If it still doesn't show, check the number with the store.
- **Question:** What happens if a delivery fails?
  - **Answer:** The courier usually tries again the next day, up to two attempts. If it still fails, the package goes back to the sender.
- **Question:** Why don't I see the name or address?
  - **Answer:** To protect shoppers, this public page only shows the city. The store you bought from can see the full details.
- **Question:** Can I share the tracking?
  - **Answer:** Yes. Copy the link or share it on WhatsApp. Anyone with the link sees the same status, without signing in.

## 5. Merchant sign-up prompt
<!-- html: Merchant sign-up prompt (centered) -->

- **Heading:** Ship it with FLIK.
- **Text:** Every courier in one dashboard for up to 40% less, with a tracking link for every shopper.
- **Button:** Get started
- **Button:** Explore Shipping
