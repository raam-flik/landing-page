# Privacy Policy

- **Live page:** not deployed yet. Draft for legal review, not in effect.
- **Page file:** `legal/privacy/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

Markers in the text: `[[…]]` is a fact FLIK still has to confirm (it shows highlighted on the page). `[WC-n]` is a question for counsel. `†` is a legal article reference not yet checked against the law's text. Remove all three before publishing.

## Things to confirm on this page


### Facts for AG to confirm

- [ ] **W-1**: Effective date and version number for each page (shown as “Last updated”).
- [ ] **W-2**: NIB of PT Flik Teknologi Indonesia.
- [ ] **W-3**: NPWP of PT Flik Teknologi Indonesia.
- [x] **W-4**): Closed (AG, 24 Oct 2026): a new privacy@flik.co.id mailbox is the privacy and data-request contact on every page. support@flik.co.id stays for general support. The DPO's name is still open (W-5).
- [ ] **W-5**: Name or function of the Personal Data Protection Officer (*Pejabat Pelindungan Data Pribadi*).
- [ ] **W-6a**: Retention: sales and demo enquiries that never become merchants.
- [ ] **W-6b**: Retention: merchant account and business data after the account closes.
- [ ] **W-6c**: Retention: verification (KYC) documents.
- [ ] **W-6d**: Retention: funding applications, including declined ones.
- [ ] **W-6e**: Retention: transaction records kept as bookkeeping evidence (FLIK's draft SOP says 10 years from the end of the financial year).
- [ ] **W-6f**: Retention: website and dashboard technical logs.
- [ ] **W-6g**: Retention: personal data requests and FLIK's replies.
- [ ] **W-8**: Cloud provider and where merchant data is stored today.
- [ ] **W-8b**: Production website host and where its server logs are kept. The prototype runs on Vercel; production is not decided here.
- [ ] **W-9**: Email, WhatsApp and OTP providers, and where they process data.
- [ ] **W-10**: Analytics tools in the merchant dashboard (the internal tracking plan says GA4 is already there), and the dashboard's own cookies.
- [ ] **W-11**: Does FLIK send marketing to merchants or leads today? Which channels, and how does someone unsubscribe?
- [ ] **W-12**: Credit bureaus and funding partners that receive funding application data, and who provides the funding (FLIK or a partner).
- [ ] **W-13**: AI or document-processing providers besides the Anthropic API (for example for reading funding documents), and where they process data.
- [ ] **W-15**: Current merchant onboarding fields. Two verification wizards exist today with different fields.
- [ ] **W-18**: Minimum age, and who may open a merchant account (individuals, entity types).
- [ ] **W-19**: Security controls that are live and tested at launch. List only those.
- [ ] **W-20**: How merchants are told about material changes (email, dashboard notice) and how much notice.
- [ ] **W-25**: Link and launch date of the shopper privacy notice.
- [ ] **W-50**: The In-Store Payment page loads three.js (r128) from cdnjs.cloudflare.com. Self-host it next to the page (MIT licence) to drop this third-party request, then remove it from the Cookie and Privacy policies.
- [ ] **W-51**: Contact sales opens a Calendly booking page (calendly.com/desmount-i7g/flikintro). Confirm it is a FLIK company account, and check Calendly's data processing terms.
- [ ] **P** (AG): Name the licensed payment partners and their licences (instruction: never state or imply that FLIK itself holds a payment licence).
- [ ] **Timeline**: Response time for personal data requests, within the UU PDP deadline.

## Search results (SEO)

- **Page title:** Privacy Policy | FLIK
- **Description:** How PT Flik Teknologi Indonesia handles personal data from website visitors and merchants. Draft for legal review.
- **Robots:** noindex while the page is a draft

## Draft notice and title
<!-- html: Draft notice -->

- **Notice:** **Draft for legal review. Not yet in effect.** Not legal advice. [[…]] marks a fact FLIK still has to confirm. [WC-n] marks a question for counsel. † marks a legal article reference not yet checked against the law's text.
- **Small text above headline:** Legal
- **Headline (H1):** Privacy Policy
- **Intro text:** How PT Flik Teknologi Indonesia handles personal data from people who visit flik.co.id and from merchants who use FLIK.
- **Text:** Last updated: [[W-1: date]] · Version [[W-1: version]]
- **Contents heading:** On this page

## 1. About this policy
<!-- html: 1. About this policy -->

- **Text:** This policy explains how PT Flik Teknologi Indonesia (“**FLIK**”, “**we**”) processes personal data when you visit flik.co.id or use FLIK as a merchant. It covers:
- **List item:** **Website visitors:** people who browse flik.co.id, use tools such as the shipping rate checker, or fill in a form.
- **List item:** **Merchants:** business owners and their staff who sign up, contact sales, apply for funding or use the FLIK merchant dashboard. This includes the people we deal with at a merchant, such as owners, directors, staff and signatories.
- **Text:** **Shoppers** who buy from a store that uses FLIK Checkout or FLIK Shipping are covered by a separate notice. **Shopper privacy notice: coming soon.** [[W-25: link and launch date of the shopper privacy notice]]
- **Note for counsel:** The shopper notice exists as a separate draft (v0.1, 17 Oct 2026) and isn't live. Until it is, FLIK has no public notice for shopper processing. Should this page carry interim shopper wording?
- **Text:** This policy is based on Law No. 27 of 2022 on Personal Data Protection (“**UU PDP**”)† and related regulations.
- **Text:** **Language.** This page is in English for now. A Bahasa Indonesia version will follow. If the two versions differ, the Bahasa Indonesia version prevails.

## 2. Who we are
<!-- html: 2. Who we are -->

- **Text:** The controller of your personal data is **PT Flik Teknologi Indonesia**, Cibis Nine, Lantai 15, Jl. Raya Cilandak KKO, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560. NIB: [[W-2: NIB]]. NPWP: [[W-3: NPWP]].
- **Text:** FLIK is the controller for the merchant data it decides how to use. When FLIK processes shopper data on a merchant's behalf, the Merchant Agreement sets each party's role.

## 3. Personal data we collect
<!-- html: 3. Personal data we collect -->

- **Heading:** From website visitors
- **Table columns:** Type of data — Examples — When we collect it
- **Table row:** Contact details — Name, work email, company, products you're interested in, your message — When you use Contact sales or Book a demo. Contact sales opens our booking page on Calendly (section 6)
- **Table row:** Sign-up details — Name, business email, WhatsApp number — When you start creating a merchant account from the website
- **Table row:** Rate checker inputs — Origin and destination city, weight — When you use the rate checker on the Shipping page. We don't ask for your name to compare rates
- **Table row:** Data request details — Name, email or WhatsApp number, your relationship to FLIK, your request — When you send a [personal data request](./data-request/)
- **Table row:** Technical data — IP address, browser and device type, pages viewed, the page that sent you — When you load a page. Our website host receives your IP address. Our fonts are served from our own site, so no font request goes to a third party. The In-Store Payment page loads one script from Cloudflare, which receives your IP address ([Cookie Policy](./cookies/))
- **Heading:** From merchants
- **Table columns:** Type of data — Examples — Source
- **Table row:** Account — Name, email, WhatsApp number, login details, user role — You
- **Table row:** Business and verification — Business name and type, address, details of the person in charge, NPWP, bank account for payouts, identity documents. [[W-15: current onboarding fields]] — You
- **Table row:** Store and transactions — Store connections (Shopify, WooCommerce), orders, payments, shipments, balance, top-ups and withdrawals — You, your store platform, payment partners and couriers
- **Table row:** Funding application — Funding request, KTP and NPWP of directors and owners, company documents (NIB, *akta pendirian*, SK Kemenkumham), bank statements, financial statements, other debts — You, when you apply. [[W-12: credit bureaus and funding partners]]
- **Table row:** Support and messages — Emails, WhatsApp messages, call notes, support tickets — You and our team
- **Table row:** Dashboard use — Features used, device and log data — Your device. [[W-10: analytics tools in the merchant dashboard]]
- **Text:** Some funding data, such as personal financial data, may be specific personal data under Article 4(2) UU PDP†. We give it extra protection.
- **Text:** If you give us data about other people, such as your staff, directors or shareholders, make sure they know about this policy.

## 4. Why we use it, and our legal basis
<!-- html: 4. Why we use it, and our legal basis -->

- **Text:** We only use personal data for the purposes below. Each has a legal basis under Article 20 UU PDP†.
- **Table columns:** Purpose — Main data — Legal basis
- **Table row:** Answer your enquiry, book a demo, follow up on a sales conversation — Contact details — Steps you ask for before a contract (Art. 20(2)(b)†), and legitimate interest (Art. 20(2)(f)†)
- **Table row:** Open and run your merchant account; provide Checkout, Shipping and Funding — Account, business, transactions — Performance of a contract (b†)
- **Table row:** Verify your identity and business; prevent fraud and misuse — Verification, transactions — Legal obligation (c†) and legitimate interest (f†)
- **Table row:** Assess a funding application and manage funding — Funding application — Performance of a contract (b†). Consent (a†) for credit bureau checks where the law requires it
- **Table row:** Process payments, refunds and payouts through payment partners — Transactions, bank account — Performance of a contract (b†)
- **Table row:** Give support — Support and messages, account — Performance of a contract (b†)
- **Table row:** Keep the website and dashboard secure and working — Technical data — Legitimate interest (f†)
- **Table row:** Measure how the website is used — Technical data, analytics cookies — Consent (a†), only if you turn on Analytics cookies
- **Table row:** Tell you about FLIK products — Contact details — Consent (a†), or legitimate interest for existing merchants. [[W-11: marketing to merchants today, channels]]
- **Table row:** Bookkeeping, tax, audit and lawful requests from authorities — Transactions, account — Legal obligation (c†)
- **Text:** We don't sell personal data. Where we rely on legitimate interest, we weigh it against your rights, and you can object (section 9).

## 5. AI in the merchant dashboard
<!-- html: 5. AI in the merchant dashboard -->

- **Text:** Some dashboard features use AI, for example to read the columns of an uploaded file or suggest a cleaner address. AI only suggests. You decide.
- **Text:** For these features we use the Anthropic API under a zero data retention agreement. Shopper names and phone numbers are replaced with tokens before they're sent. To clean up an address, we send only the street line, with no name or phone number.
- **Text:** [[W-13: other AI or document-processing providers, and where they process data]]

## 6. Who we share it with
<!-- html: 6. Who we share it with -->

- **Table columns:** Recipient — Data — Why
- **Table row:** Payment partners: [[P: name the licensed payment partners and their licences]] — Transactions, payout bank account — Process payments, refunds and payouts
- **Table row:** Couriers on FLIK Shipping (listed on the Shipping page) — Sender and recipient name, phone, address, COD amount — Pick up and deliver parcels, collect COD
- **Table row:** Store platforms you connect, such as Shopify or WooCommerce — Store and order data — Run the integration you set up
- **Table row:** Credit bureaus and funding partners: [[W-12: names]] — Funding application and repayment data — Assess and provide funding
- **Table row:** Messaging providers: [[W-9: email, WhatsApp and OTP providers]] — Contact details, message content — Send OTP codes, notifications and replies
- **Table row:** Cloud and hosting providers: [[W-8: cloud provider]], [[W-8b: website host]] — Data we store, server logs — Hosting, storage and security
- **Table row:** AI providers (section 5) — Limited data, as set out in section 5 — Dashboard features
- **Table row:** Analytics and advertising providers — Cookie and device data — Only if you consent ([Cookie Policy](./cookies/))
- **Table row:** Calendly (call booking) — Name, email and anything you type when booking; IP address and browser details — Contact sales opens our booking page on calendly.com in a new tab. Calendly receives data only if you click it, and its own privacy and cookie policies apply there [[W-51: Calendly account and terms]]
- **Table row:** Cloudflare (cdnjs.cloudflare.com) — IP address and browser details — Serves a 3D graphics library (three.js) on the In-Store Payment page ([Cookie Policy](./cookies/)) [[W-50: self-host three.js, or keep this row]]
- **Table row:** Auditors, legal advisers, authorities, law enforcement — As needed — Legal obligations, audits, protecting FLIK's rights
- **Table row:** A party that acquires or merges with FLIK — As needed — Merger, acquisition or demerger, with notice to you (Art. 48 UU PDP†)
- **Text:** Service providers that process data for us are bound by contract to keep it confidential and secure, and to use it only on our instructions.

## 7. Transfers outside Indonesia
<!-- html: 7. Transfers outside Indonesia -->

- **Text:** We aim to store personal data in Indonesia. [[W-8: where merchant data is stored today]]
- **Text:** Some providers process data outside Indonesia: Google (analytics, once added and only if you consent), our AI providers (section 5), Calendly (if you book a call), Cloudflare (section 6), [[W-9: messaging providers, if offshore]] and [[W-8b: website host, if offshore]].
- **Text:** For each transfer, we check that the destination country offers equal or higher protection, or we put binding safeguards in place, as Article 56 UU PDP† requires.

## 8. How long we keep data
<!-- html: 8. How long we keep data -->

- **Table columns:** Data — How long
- **Table row:** Sales and demo enquiries that don't lead to an account — [[W-6a: period]]
- **Table row:** Merchant account and business data — While the account is open, then [[W-6b: period]] after it closes
- **Table row:** Verification documents — [[W-6c: period]]
- **Table row:** Funding applications, including declined ones — [[W-6d: period]]
- **Table row:** Transaction records kept as bookkeeping evidence — As long as the law requires: [[W-6e: period]]
- **Table row:** Technical logs — [[W-6f: period]]
- **Table row:** Personal data requests and our replies — [[W-6g: period]]
- **Text:** When the period ends, we delete or anonymise the data, unless a law requires us to keep it longer.

## 9. Your rights
<!-- html: 9. Your rights -->

- **Text:** Under UU PDP†, you have the right to:
- **List item:** information about how your personal data is processed (Art. 5†);
- **List item:** complete, update or correct inaccurate data (Art. 6†);
- **List item:** access and get a copy of your personal data (Art. 7†);
- **List item:** end processing, and delete or destroy your personal data (Art. 8†);
- **List item:** withdraw consent (Art. 9†);
- **List item:** object to a decision based solely on automated processing, including profiling, that significantly affects you (Art. 10†);
- **List item:** delay or restrict processing (Art. 11†);
- **List item:** sue and receive compensation for a processing violation (Art. 12†);
- **List item:** obtain and/or transfer your personal data to another controller (Art. 13†).
- **Text:** **How to make a request.** Use the [personal data request form](./data-request/), or email privacy@flik.co.id. We verify your identity before we act. We respond within [[timeline, per UU PDP†]].
- **Text:** **Limits.** The law may limit some rights (Art. 15 UU PDP†). For example, we must keep transaction records for bookkeeping. Closing your account doesn't end what you still owe, such as outstanding funding.

## 10. Marketing choices
<!-- html: 10. Marketing choices -->

- **Text:** You can stop FLIK marketing at any time. Use the unsubscribe link in the message, or contact us (section 16). [[W-11: channels and unsubscribe method]]
- **Text:** While your account is open, you'll still get service messages, such as OTP codes, payout notices and changes to your terms.

## 11. Cookies and analytics
<!-- html: 11. Cookies and analytics -->

- **Text:** Our [Cookie Policy](./cookies/) lists what the website uses. In short: the website sets no cookies of its own today. It stores your cookie choice in your browser (`flik_consent`), serves its fonts from our own site, loads one script from Cloudflare on the In-Store Payment page, and keeps Analytics and Marketing off until you consent. You can change your choice at any time with the **Cookie settings** button in the footer, which reopens the cookie banner.

## 12. Security
<!-- html: 12. Security -->

- **Text:** We protect personal data with technical and organisational measures. [[W-19: controls live and tested at launch]]
- **Text:** No system is risk-free. Keep your password and OTP codes to yourself. Never share an OTP code with anyone, including someone who says they're from FLIK.

## 13. Data breaches
<!-- html: 13. Data breaches -->

- **Text:** If a personal data breach affects your data, we'll tell you and the personal data protection authority in writing within **3 × 24 hours** (Art. 46 UU PDP†). The notice says what data was exposed, when and how it happened, and what we're doing about it.

## 14. Children
<!-- html: 14. Children -->

- **Text:** Our website and merchant services are for businesses and adults. They aren't directed at children under [[W-18: age threshold]]. If we learn we've collected a child's data without a parent's or guardian's consent (Art. 25 UU PDP†), we'll delete it unless the law requires us to keep it.

## 15. Changes to this policy
<!-- html: 15. Changes to this policy -->

- **Text:** We may update this policy. The latest version is always on this page. For material changes, we'll tell merchants [[W-20: how and how far in advance]] before they take effect.

## 16. Contact us
<!-- html: 16. Contact us -->

- **Text:** **PT Flik Teknologi Indonesia**, Cibis Nine, Lantai 15, Jl. Raya Cilandak KKO, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560.
- **List item:** Privacy questions and personal data requests: privacy@flik.co.id
- **List item:** General support: support@flik.co.id
- **List item:** WhatsApp: +62 812-9201-2668
- **List item:** Support hours: Monday–Friday, 09:00–18:00 WIB
- **List item:** Personal Data Protection Officer: [[W-5: name or function]]
- **Text:** If you're not satisfied with our answer, you can complain to the personal data protection authority under UU PDP†.

