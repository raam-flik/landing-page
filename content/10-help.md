# Help center

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/help/
- **Page file:** `help/index.html`. The questions are in the `TOPICS` list near the end of the page script.
- **Source:** https://flik.co.id/en/help (copied 21 Oct 2026). That page only has the company and consumer protection contacts; the questions come from the FAQs on the Checkout, Shipping and Merchant Cash Advance pages, so an edit to those FAQs should be copied here too.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Support contacts:** email support@flik.co.id, WhatsApp +62 813-3532-8100, Monday to Friday 09:00–18:00 WIB (the same as the footer). The cards link to email and to WhatsApp (wa.me).
- [ ] **Consumer protection block** is copied word for word from flik.co.id/en/help. The Ditjen PKTN number links to WhatsApp (wa.me/6285311111010).
- [ ] **Topics for shoppers:** there are no shopper questions yet (FLIK app, FLIK Points, refunds). Add them when the content exists.
- [x] Early Settlement, Fraud Detection and In-Store Payment questions are not included while their answers are placeholders. Done (12 Nov 2026): six questions each (five for Fraud Detection), copied from the FAQs on those pages, each topic linking to its product page.
- [ ] **Answers changed for the AG rules (24 Oct 2026):** COD fee wording, "all major couriers", "credited to your balance after delivery", and Malaysia/Singapore removed from "What is FLIK Shipping?". The COD question now reads "Do I pay the COD fee upfront?" (answer: no, it's deducted after delivery). The Checkout and Shipping page FAQs still need the same change.
- [ ] **Privacy and your data:** new entry under General. It links to /legal/privacy and /legal/data-request, which must exist before launch.

## Search results (SEO)

- **Page title:** Help Center: Contact FLIK Support | FLIK
- **Description:** Answers about FLIK Checkout, Shipping and Funding. Contact FLIK support by email or WhatsApp, Monday to Friday, 09:00–18:00 WIB.

## 1. Page header
<!-- html: Page header with search (SearchField, marketing size) -->

- **Small text above headline:** Help center
- **Headline (H1):** How can we help?
  - **Grey part:** Answers about FLIK, and a team ready when you need one.
- **Search placeholder:** Search questions, e.g. COD, fee, pickup

## 2. Contact
<!-- html: Contact cards #contact -->

- **Card:** Email — support@flik.co.id — Send an email
- **Card:** WhatsApp — +62 813-3532-8100 — Chat with support
- **Card:** Support hours — Monday to Friday, 09:00–18:00 WIB

## 3. Questions by topic
<!-- html: Questions by topic (from the Checkout, Early Settlement, Fraud Detection, In-Store Payment, Shipping and Merchant Cash Advance pages) #faq-sec -->

- **Section heading:** Questions, answered.
- **Topic:** All topics
- **Topic:** General
  - **Question:** How do I contact FLIK support?
    - **Answer:** Monday to Friday, 09:00–18:00 WIB, at support@flik.co.id or on WhatsApp at +62 813-3532-8100.
    - **Links:** Email support (mailto:support@flik.co.id) · Chat on WhatsApp (https://wa.me/6281335328100)
  - **Question:** Privacy and your data
    - **Answer:** Our Privacy Policy explains what personal data FLIK collects and how we use it. To ask for a copy of your data, or to correct or delete it, send a data request or email privacy@flik.co.id.
    - **Links:** Privacy Policy (/legal/privacy) · Data request (/legal/data-request) · privacy@flik.co.id
  - **Question:** Where can I file a consumer complaint?
    - **Answer:** Contact FLIK first at support@flik.co.id. You can also reach the Directorate General of Consumer Protection and Trade Order (Ditjen PKTN) of the Ministry of Trade on WhatsApp at 0853 1111 1010.
- **Topic:** Checkout and payments (the 8 questions from `content/02-checkout.md`), with this change:
  - **Question:** When do I receive the money?
    - **Answer:** Once the shopper has paid and the package has arrived, the money is credited to your balance after delivery. COD payments too, with the 3% COD fee (excl. PPN) deducted.
- **Topic:** Early Settlement (6 of the questions from `content/05-early-settlement.md`)
  - **Question:** What is Early Settlement?
    - **Answer:** It pays out your sales before the standard settlement date, so money from paid orders is ready sooner.
    - **Links:** About Early Settlement (/payment/early-settlement)
  - **Question:** How fast do I get paid?
    - **Answer:** As soon as the payment is made, into your FLIK balance. For Checkout orders, once the order is completed.
  - **Question:** What does it cost?
    - **Answer:** 0.2% of each QRIS, e-wallet or virtual account payment you settle early, and 0.3% of each card payment, plus PPN. The fee shows before you confirm. There is no fee on the standard schedule.
  - **Question:** Is it a loan?
    - **Answer:** No. Early Settlement pays out money from sales you already made, so there is nothing to repay.
  - **Question:** Which transactions can I settle early?
    - **Answer:** Paid transactions waiting for settlement, such as QRIS, e-wallets, virtual accounts and cards. Cash on delivery orders settle after the package is delivered.
  - **Question:** How is it different from Merchant Cash Advance?
    - **Answer:** Early Settlement pays out money you already earned. Merchant Cash Advance funds your growth upfront and is settled from future sales.
- **Topic:** Fraud Detection (5 of the questions from `content/06-fraud-detection.md`)
  - **Question:** What does Fraud Detection do?
    - **Answer:** It watches payments, refunds and withdrawals for fraud, and helps you respond when a shopper disputes a card payment. It also protects your balance if someone else gets into your account.
    - **Links:** About Fraud Detection (/payment/fraud-detection)
  - **Question:** How does FLIK help with chargebacks?
    - **Answer:** When a shopper disputes a card payment, you're told straight away, with the reason and the deadline. Upload your evidence in the dashboard, and FLIK sends it to the payment partner. The outcome shows on your statement.
  - **Question:** What happens when a withdrawal is held?
    - **Answer:** It shows as "Under review" in your dashboard, with an expected time. FLIK's risk team reviews it, and it's sent as soon as it's cleared. Nothing leaves your balance in the meantime.
  - **Question:** Do I need to set anything up?
    - **Answer:** No. It's on for every FLIK merchant, on the dashboard, the API and AI agents.
  - **Question:** What does it cost?
    - **Answer:** Nothing extra. It's included for every FLIK merchant.
- **Topic:** In-Store Payment (6 of the questions from `content/07-in-store-payment.md`)
  - **Question:** What is In-Store Payment?
    - **Answer:** A FLIK EDC device for your counter. Customers pay by QRIS or card, the receipt prints on the device, and the sale appears in your FLIK dashboard. Payments are processed by licensed partners.
    - **Links:** About In-Store Payment (/payment/in-store)
  - **Question:** Which payments can I accept?
    - **Answer:** QRIS from any bank or e-wallet app, credit cards, and GPN debit cards.
  - **Question:** Does it print receipts?
    - **Answer:** Yes. The device has a built-in receipt printer for every sale and for the settlement receipt at the end of the day.
  - **Question:** Where does the money go?
    - **Answer:** Into your FLIK balance, together with your online sales from Checkout and Payment Link.
  - **Question:** How do I get a device?
    - **Answer:** Talk to the FLIK team. We set up the device and connect it to your account.
  - **Question:** What does it cost?
    - **Answer:** Transactions are priced at the rates on our Pricing page. The EDC device can be free with a minimum monthly transaction volume. Terms apply: ask the FLIK team.
    - **Links:** See pricing (/pricing)
- **Topic:** Shipping (the questions from `content/03-shipping.md`, without the support-contact question, which is under General), with these changes:
  - **Question:** What is FLIK Shipping?
    - **Answer:** A shipping service that helps businesses ship for less through one dashboard, with all major couriers across Indonesia.
  - **Question:** Do I pay the COD fee upfront?
    - **Answer:** No. The COD fee is 3% (excl. PPN), paid by the merchant, deducted when the COD amount is credited after delivery. Shipping is paid from your FLIK balance before the shipment is created, as for any shipment.
  - **Question:** How do I receive COD funds?
    - **Answer:** The COD amount is credited to your balance after delivery, with the 3% COD fee (excl. PPN) deducted.
- **Topic:** Funding (the 8 questions from `content/04-merchant-cash-advance.md`)
- **Text (no results):** No answers for "…". Try another word, or ask the support team.
- **Button:** Clear search
- **Button:** Email support

## 4. Consumer complaints
<!-- html: Consumer protection (from flik.co.id/en/help) #consumer -->

- **Section heading:** Consumer complaints.
  - **Grey part:** Contact FLIK first. If you need to, you can also reach the Indonesian consumer protection authority.
- **Card:** PT. Flik Teknologi Indonesia — Email: support@flik.co.id
- **Card:** Directorate General of Consumer Protection and Trade Order — Ministry of Trade of the Republic of Indonesia — WhatsApp Ditjen PKTN: 0853 1111 1010
