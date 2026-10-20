# Fraud Detection

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/fraud-detection/
- **Page file:** `payment/fraud-detection/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Fraud Detection is new (Linear FLI-47). What FLIK offers depends on the **FDS** and **Transaction Monitoring System** projects, both in Backlog, and it is not in `product-facts.md` yet. **Every feature below is a placeholder** until product confirms the scope. The page shows no detection rates or other figures on purpose.

- [ ] **Decision before approval:** the page says each payment is checked before it is approved, with three outcomes: Approved, Held for review, Blocked. Is that how FDS works, or does it only flag after the fact?
- [ ] **Signals:** Device, Location, Behaviour (speed, frequency, amount) and History (FLIK account). Which of these will FDS use?
- [ ] **Merchant rules:** "Your own rules on top" and the example rules (COD over Rp5.000.000, 5 failed payments in 10 minutes, first orders to a new address, 3× the average order). Can merchants set rules?
- [ ] **Review queue:** can merchants approve or decline held payments themselves, or does the FLIK team review them?
- [ ] **COD:** holding suspicious COD orders before shipping. Is COD in scope?
- [ ] **Where it runs:** Checkout, Payment Link and In-Store Payment. Which channels are covered?
- [ ] **Shopper experience:** "No extra step for shoppers" (FAQ).
- [ ] **Pricing:** the FAQ says pricing will be shared at launch. Is it included in the success fee, or priced separately?
- [ ] Example numbers in the mockups (118 approved, 1.284 checked, 23 held, 6 blocked) are example data, not FLIK figures.

## Search results (SEO)

- **Page title:** Fraud Detection for Every Payment | FLIK
- **Description:** FLIK Fraud Detection checks payments for fraud and risk, so genuine orders go through and suspicious ones are held or stopped. Add your own rules and review unusual orders from your dashboard.

## 1. Hero
<!-- html: Hero: text left, a live screening feed on the right (example data) -->

- **Small text above headline:** FLIK Fraud Detection
- **Headline (H1):** Every payment, checked.
  - **Grey part:** Fraud stopped early.
- **Intro text:** Turning every transaction into a risk signal, so genuine orders go through and suspicious ones don't. You keep selling, FLIK watches the payments.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** Checked before approval
- **List item:** Your own rules on top
- **List item:** A review queue for unusual orders

*Example text inside the product mockup (only change if needed):*

- Payments — Fraud Detection on
- 118 approved — 3 held for review — 1 blocked
- QRIS — ARN-1052 · Jakarta — Rp349.000 — Approved
- GoPay — ARN-1053 · Bandung — Rp128.000 — Approved
- Cash on delivery — ARN-1054 · 4th address today — Rp2.150.000 — Review
- BCA virtual account — ARN-1055 · Surabaya — Rp890.000 — Approved
- Card — ARN-1056 · 6 failed tries — Rp4.750.000 — Blocked
- OVO — ARN-1057 · Medan — Rp215.000 — Approved
- DANA — ARN-1058 · Yogyakarta — Rp472.000 — Approved
- Mandiri virtual account — ARN-1059 · Makassar — Rp1.320.000 — Approved
- Checking
- Checked before approval

## 2. How it decides
<!-- html: How it decides: full-width band with a flow diagram that splits into three outcomes #decide -->

- **Section heading:** One check, three outcomes.
  - **Grey part:** Each payment is scored before it is approved. Most go straight through; the unusual ones wait for a closer look.
- **Step:** Wherever you sell — Shopper pays — Checkout, Payment Link or at your counter
- **Step:** FLIK Fraud Detection — Risk check — The payment's signals and your rules, scored together
- **Outcome:** Low risk — Approved — The payment goes through as usual.
- **Outcome:** Unusual — Held for review — It waits in your review queue until you decide.
- **Outcome:** High risk — Blocked — The payment is stopped before the order ships.

## 3. The signals
<!-- html: The signals: ruled four-column grid to the guide lines, one column lit at a time #signals -->

- **Section heading:** More than the amount.
  - **Grey part:** A payment is judged on who is paying, from where, and how.
- **Signal:** Device — Has this phone or browser paid before, and how was it used?
- **Signal:** Location — Does the payment's location fit the delivery address?
- **Signal:** Behaviour — How fast, how often and how much is this shopper paying?
- **Signal:** History — Has this FLIK account paid for and received orders before?

## 4. Fake COD orders
<!-- html: Fake COD orders: dark band with a ledger of held orders (example data) #cod-risk -->

- **Section heading:** Fewer fake COD orders.
  - **Grey part:** Cash on delivery is easy to abuse. Suspicious COD orders can be held before you pay to ship them.
- **List item:** Spot repeated orders to different addresses.
- **List item:** Hold large first orders from new accounts.
- **List item:** Fewer returned packages and wasted shipping.
- **Link:** COD Shipping

*Example text inside the product mockup (only change if needed):*

- COD orders held today
- ARN-2041 · Rp1.850.000 — 4 orders to different addresses today — Held
- ARN-2047 · Rp3.200.000 — First order from a new account
- ARN-2052 · Rp960.000 — Phone number used by 3 accounts
- ARN-2058 · Rp2.400.000 — Address with earlier refused deliveries
- ARN-2063 · Rp1.150.000 — 6 orders in 10 minutes

## 5. Your rules, your call
<!-- html: Your rules, your review queue: tabs drive one dashboard window (example data) #dash -->

- **Section heading:** Your rules, your call.
  - **Grey part:** Add rules for how your business sells, and decide on held orders from one queue.
- **Tab:** Rules
- **Tab:** Review queue

*Example text inside the product mockup (only change if needed):*

- Rules — Example rules
- Your rules, on top of FLIK's checks
- Review COD orders over Rp5.000.000
- Block 5 failed payments within 10 minutes
- Review first orders to a new address
- Review orders over 3× your average
- Last 7 days (example) — Payments checked 1.284 — Held for review 23 — Blocked 6
- Review queue — 3 waiting
- ARN-1054 · Rp2.150.000 — Cash on delivery · 4th address today
- ARN-1061 · Rp6.400.000 — Cash on delivery · over Rp5.000.000
- ARN-1066 · Rp3.900.000 — GoPay · 3× your average order
- Tap to decide — Needs review / Approved / Declined

## 6. Works where you sell
<!-- html: Works where you sell: three product cards #where -->

- **Section heading:** Works where you sell.
  - **Grey part:** The same check runs on payments across FLIK, online and at your counter.
- **Card:** Checkout — Online orders. — Payments in FLIK Checkout are checked before the order is confirmed. — Explore Checkout
- **Card:** Payment Link — Sales in chat. — Links you share on WhatsApp or social media get the same check. — Explore Payment Link
- **Card:** In-Store Payment — At your counter. — QRIS and card payments in your outlets are screened too. — Explore In-Store Payment

*Example text inside the product mockup (only change if needed):*

- Order ARN-1052 — Approved — QRIS · Rp349.000 — Risk check passed
- Payment link — Review — GoPay · Rp4.500.000 — Much larger than usual
- Counter 1 · Bandung — Approved — Card · Rp1.250.000 — Risk check passed

## 7. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What is Fraud Detection?
  - **Answer:** A risk check on payments made through FLIK. Genuine payments go through, unusual ones are held for review, and high-risk ones are stopped.
- **Question:** Which payments are checked?
  - **Answer:** Payments through FLIK Checkout, Payment Link and In-Store Payment, including QRIS, e-wallets, virtual accounts, cards and cash on delivery.
- **Question:** Does it slow down checkout?
  - **Answer:** No extra step for shoppers. The check runs while the payment is processed.
- **Question:** What happens to a held payment?
  - **Answer:** It waits in your review queue. You approve or decline it, and the order only ships once it is approved.
- **Question:** What happens to a blocked payment?
  - **Answer:** The payment is stopped and the order is not created, so you don't ship goods that won't be paid for.
- **Question:** Can I add my own rules?
  - **Answer:** Yes. Add rules for how your business sells, such as reviewing COD orders above an amount, on top of FLIK's own checks.
- **Question:** Does it help with COD?
  - **Answer:** Yes. Suspicious COD orders can be held before you pay to ship them, which means fewer returned packages.
- **Question:** What does it cost?
  - **Answer:** The FLIK team will share pricing when Fraud Detection launches.
- **Text:** Can't find what you need? Talk to the FLIK team

## 8. Resources
<!-- html: Resources: 3 cards -->

- **Small heading:** More from FLIK
- **Card:** Product — Sell with FLIK Checkout — A 30-second checkout with every way Indonesia pays. — Explore Checkout
- **Card:** Product — COD with fewer returns — Cash on delivery across Indonesia for a 3% fee. — Explore COD Shipping
- **Card:** Guide — Spotting fake orders — The patterns behind most payment fraud, and what to do about them. — Read more

## 9. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Sell with confidence.
- **Text:** Talk to the FLIK team about how Fraud Detection fits the way you sell.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
