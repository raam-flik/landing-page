# Help center

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/help/
- **Page file:** `help/index.html`. The questions are in the `TOPICS` list near the end of the page script.
- **Source:** https://flik.co.id/en/help (copied 21 Oct 2026). That page only has the company and consumer protection contacts; the questions come from the FAQs on the Checkout, Shipping and Merchant Cash Advance pages, so an edit to those FAQs should be copied here too.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Support contacts:** email support@flik.co.id, WhatsApp +62 812-9201-2668, Monday to Friday 09:00–18:00 WIB (the same as the footer). The cards link to email and to WhatsApp (wa.me).
- [ ] **Consumer protection block** is copied word for word from flik.co.id/en/help. The Ditjen PKTN number links to WhatsApp (wa.me/6285311111010).
- [ ] **Topics for shoppers:** there are no shopper questions yet (FLIK app, FLIK Points, refunds). Add them when the content exists.
- [ ] Early Settlement, Fraud Detection and In-Store Payment questions are not included while their answers are placeholders.
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
- **Card:** WhatsApp — +62 812-9201-2668 — Chat with support
- **Card:** Support hours — Monday to Friday, 09:00–18:00 WIB

## 3. Questions by topic
<!-- html: Questions by topic (from the Checkout, Shipping and Merchant Cash Advance pages) #faq-sec -->

- **Section heading:** Questions, answered.
- **Topic:** All topics
- **Topic:** General
  - **Question:** How do I contact FLIK support?
    - **Answer:** Monday to Friday, 09:00–18:00 WIB, at support@flik.co.id or on WhatsApp at +62 812-9201-2668.
    - **Links:** Email support (mailto:support@flik.co.id) · Chat on WhatsApp (https://wa.me/6281292012668)
  - **Question:** Privacy and your data
    - **Answer:** Our Privacy Policy explains what personal data FLIK collects and how we use it. To ask for a copy of your data, or to correct or delete it, send a data request or email privacy@flik.co.id.
    - **Links:** Privacy Policy (/legal/privacy) · Data request (/legal/data-request) · privacy@flik.co.id
  - **Question:** Where can I file a consumer complaint?
    - **Answer:** Contact FLIK first at support@flik.co.id. You can also reach the Directorate General of Consumer Protection and Trade Order (Ditjen PKTN) of the Ministry of Trade on WhatsApp at 0853 1111 1010.
- **Topic:** Checkout and payments (the 8 questions from `content/02-checkout.md`), with this change:
  - **Question:** When do I receive the money?
    - **Answer:** Once the shopper has paid and the package has arrived, the money is credited to your balance after delivery. COD payments too, with the 3% COD fee (excl. PPN) deducted.
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
