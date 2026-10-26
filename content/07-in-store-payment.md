# In-Store Payment

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/in-store/
- **Page file:** `payment/in-store/index.html` (the 3D device and its screen: `payment/in-store/edc-3d.js`)

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

In-Store Payment is in the menu but its scope was never written down (see the sitemap's open points). The device and the home screen come from the real FLIK EDC (Smart POS T10), but these points need product confirmation:

- [ ] **Cards:** "debit or credit cards" and "card reader". Chip, swipe, tap (NFC)? Which card networks?
- [ ] **Hardware:** Android touchscreen, built-in thermal receipt printer, scanner on the back for barcodes and QR codes, rechargeable battery with USB-C charging.
- [ ] **One balance:** in-store sales land in the same FLIK balance as Checkout and Payment Link.
- [ ] **Reports:** "sales by channel, outlet and payment method" in the dashboard.
- [ ] **Multiple outlets:** one device per counter, sales by outlet.
- [ ] **Device screen language:** the real app is in Bahasa Indonesia (Beranda, Buat Transaksi, Cetak Struk Settlement). The 3D screen shows it in English for the English page.
- [ ] **Pricing:** device and transaction pricing. The FAQ says the FLIK team shares it.
- [ ] All amounts, names and counts in the mockups are example data. They are now labelled "Example" (receipt, settlement card, device screen hint).
- [x] No claim that FLIK is a licensed acquirer: "FLIK handles the payment" became "Payments are processed by licensed partners" (AG, 24 Oct 2026). `product-facts.md` has no In-Store facts yet, so the details below carry visible placeholders on the page.
- [ ] `[[confirm: card types]]`: "Every way they pay" card tile, At a glance, FAQ.
- [ ] `[[confirm: hardware]]`: scanner, Android touchscreen, battery and USB-C (At a glance).
- [ ] `[[confirm: in-store sales land in the same FLIK balance]]`: One balance section and FAQ.
- [ ] `[[confirm: sales by outlet]]`: FAQ "more than one outlet".
- [x] Resources: the Fraud Detection card says it is planned (FLI-47) and the Early Settlement card no longer promises same-day payouts (FLI-46).

## Search results (SEO)

- **Page title:** Accept QRIS and Card Payments In Store | FLIK
- **Description:** FLIK In-Store Payment turns your counter into a checkout: QRIS and debit or credit cards on one handheld device with a built-in receipt printer, in the same dashboard as your online sales.

## 1. Hero
<!-- html: Hero: text left, the FLIK EDC in 3D on the right (procedural Three.js model; screen shows example data) -->

- **Small text above headline:** FLIK In-Store Payment
- **Headline (H1):** Get paid at the counter.
  - **Grey part:** QRIS and cards, one device.
- **Intro text:** Turning every counter into a checkout. Customers scan or use their card, the receipt prints on the spot, and the sale sits next to your online orders. You serve the customer. Payments are processed by licensed partners.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** QRIS and debit or credit cards
- **List item:** Built-in receipt printer
- **List item:** One dashboard with your online sales
- **Label:** Receipt printer built in
- **Hint:** Example screen · Drag to turn
- **Text alternative (screen readers):** A handheld FLIK EDC payment terminal with a touchscreen and a receipt printer. Its screen shows an example home screen: today's successful transactions and total sales split by QRIS and card, a button to print the settlement receipt, and the latest transactions. The device turns slowly and can be dragged to turn.

*Example text on the device screen (only change if needed):*

- Welcome, Reza (admin)
- Today's transactions — Successful 90 — Total sales Rp12.000.000
- QRIS : 2 — Card : 88 — QRIS : 10.000.000 — Card : 2.000.000
- Print settlement receipt
- Latest transactions — Rp90.000 — 2 min ago · Card — 01092026-QFCAZZ-1
- Just now · QRIS
- Powered by FLIK
- Home — New transaction — Transactions

## 2. A sale in four steps
<!-- html: A sale at the counter: the step list drives a receipt that prints (example data) #counter -->

- **Section heading:** A sale in four steps.
  - **Grey part:** From the amount to the receipt in the customer's hand, on one device.
- **Heading:** Enter the amount
- **Text:** Tap New transaction and type what the customer owes.
- **Heading:** The customer pays
- **Text:** They scan the QRIS code on screen or use their card.
- **Heading:** The receipt prints
- **Text:** Straight from the device, no separate printer.
- **Heading:** It lands in your balance
- **Text:** Next to your online orders, in the same dashboard.

*Example text on the receipt (only change if needed):*

- Example receipt
- Aruna Studio — Jl. Braga 21, Bandung
- 21 Oct 2026, 10:42 — Counter 1
- Payment — QRIS / Card
- Reference — QF1042-1
- Total — Rp350.000 — Payment received
- Thank you for shopping
- +Rp350.000 — In your FLIK balance

## 3. Every way they pay
<!-- html: Every way they pay: three tiles light up in turn #ways -->

- **Section heading:** Every way they pay.
  - **Grey part:** QRIS and debit or credit cards on one device, with a receipt for every sale.
- **Tile:** QRIS — Any QRIS app can pay
- **Tile:** Debit and credit cards — Read by the card reader on the device [[confirm: card types]]
- **Tile:** Receipt — Printed every time

## 4. One balance
<!-- html: One balance: online and in-store payments merge into one FLIK balance #one -->

- **Section heading:** Online and in store, one balance.
  - **Grey part:** Counter sales and online orders land in the same FLIK balance, so you see the whole business in one place. [[confirm: in-store sales land in the same FLIK balance]]
- **Step:** Online — Checkout and Payment Link — Orders from your store, chat and social media
- **Step:** In store — FLIK EDC — QRIS and card payments at every counter
- **Step:** FLIK — One balance — Every sale, whichever way it was paid
- **Step:** Dashboard — One report — Sales by channel, outlet and payment method

## 5. Close the day
<!-- html: Close the day: dark band with a settlement card (example data) #settle -->

- **Section heading:** Close the day in one tap.
  - **Grey part:** Print a settlement receipt with every transaction of the day, split by QRIS and card.
- **List item:** Today's total, ready the moment you close.
- **List item:** Successful transactions by payment method.
- **List item:** Reprint any receipt from the transaction list.

*Example text inside the settlement card (only change if needed):*

- Example · Settlement · 21 Oct 2026 · Counter 1 — Rp12.000.000
- Successful transactions — Today — 90
- QRIS — 64 transactions — Rp8.420.000
- Cards — 26 transactions — Rp3.580.000
- Print settlement receipt — Ready / Printed

## 6. Built for the counter
<!-- html: Built for the counter: device at a glance (PLACEHOLDER hardware facts) #glance -->

- **Section heading:** Built for the counter.
- **Heading:** Take payments
- **List item:** QRIS shown on the screen
- **List item:** Card reader for debit and credit cards [[confirm: card types]]
- **List item:** Scanner on the back for barcodes and QR codes [[confirm: hardware]]
- **Heading:** Print
- **List item:** Built-in thermal receipt printer
- **List item:** Settlement receipt at the end of the day
- **List item:** Reprint any receipt from the transaction list
- **Heading:** Handheld
- **List item:** Android touchscreen [[confirm: hardware]]
- **List item:** Rechargeable battery, USB-C charging [[confirm: hardware]]
- **List item:** Grip made to hold at the counter or the table

## 7. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What is In-Store Payment?
  - **Answer:** A FLIK EDC device for your counter. Customers pay by QRIS or card, the receipt prints on the device, and the sale appears in your FLIK dashboard. Payments are processed by licensed partners.
- **Question:** Which payments can I accept?
  - **Answer:** QRIS from any bank or e-wallet app, and debit or credit cards. [[confirm: card types]]
- **Question:** Does it print receipts?
  - **Answer:** Yes. The device has a built-in receipt printer for every sale and for the settlement receipt at the end of the day.
- **Question:** Where does the money go?
  - **Answer:** Into your FLIK balance, together with your online sales from Checkout and Payment Link. [[confirm: in-store sales land in the same FLIK balance]]
- **Question:** Can I use it in more than one outlet?
  - **Answer:** Yes. Each counter gets its own device, and your dashboard shows sales by outlet. [[confirm: sales by outlet]]
- **Question:** How do I get a device?
  - **Answer:** Talk to the FLIK team. We set up the device and connect it to your account.
- **Question:** What does it cost?
  - **Answer:** The FLIK team will share device and transaction pricing for your business.
- **Text:** Can't find what you need? Talk to the FLIK team

## 8. Resources
<!-- html: Resources: 3 cards -->

- **Small heading:** More from FLIK
- **Card:** Product — Sell online with FLIK Checkout — A 30-second checkout for your store, in the same balance. — Explore Checkout
- **Card:** Product — Fraud checks, planned — Fraud Detection is in development, with checks at the counter planned too. — Explore Fraud Detection
- **Card:** Product — Paid sooner — Early Settlement pays out sales before the standard settlement date. — Explore Early Settlement

## 9. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Bring FLIK to your counter.
- **Text:** Tell us about your outlets. The FLIK team will set up your devices and connect them to your dashboard.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
