# Fraud Detection

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/fraud-detection/
- **Page file:** `payment/fraud-detection/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Fraud Detection is new (Linear FLI-47). What FLIK offers depends on the **FDS** and **Transaction Monitoring System** projects, both in Backlog, and it is not in `product-facts.md` yet. **Every feature below is a placeholder** until product confirms the scope. The page shows no detection rates or other figures on purpose.

- [ ] **Decision before approval:** the page says each payment is checked before it is approved, with three outcomes: Approved, Held for review, Blocked. Is that how FDS works, or does it only flag after the fact?
- [ ] **Signals:** Device, Location, Behaviour (speed, frequency, amount) and History (FLIK account). Which of these will FDS use?
- [ ] **Every step of the order:** checks at sign-up, checkout, payment, shipping (COD) and after delivery (refused packages, refunds). Which stages will FDS and the Transaction Monitoring System cover?
- [ ] **Risk score and reasons:** a 0–100 score with ranked reasons per held order. Will FDS show a score and explain its decisions?
- [ ] **Strictness setting:** Relaxed, Balanced, Strict. Can merchants choose how strict the checks are?
- [ ] **Ready from day one:** "FLIK's checks switched on by default, no setup or code to start".
- [ ] **Merchant rules:** "Your own rules on top" and the example rules (COD over Rp5.000.000, 5 failed payments in 10 minutes, first orders to a new address, 3× the average order). Can merchants set rules?
- [ ] **Review queue:** can merchants approve or decline held payments themselves, or does the FLIK team review them?
- [ ] **COD:** holding suspicious COD orders before shipping. Is COD in scope?
- [ ] **Where it runs:** Checkout, Payment Link and In-Store Payment. Which channels are covered?
- [ ] **Shopper experience:** "No extra step for shoppers" (FAQ).
- [ ] **Pricing:** the FAQ says pricing will be shared at launch. Is it included in the success fee, or priced separately?
- [ ] Example numbers in the mockups (118 approved, 1.284 checked, 23 held, 6 blocked) are example data, not FLIK figures.
- [x] Since 24 Oct 2026 (AG) the page uses "Planned capabilities" framing: the hero says it is in development, feature claims say "Planned" or "The plan", and the mockups are labelled "Example". "Fewer returned packages" was removed (no lower-returns claims), and so was "Most payments go straight through".
- [ ] `[[confirm with product]]` placeholders on the page: How it decides, Every step of the order, Know why, COD holds, Your rules, Works where you sell, At a glance, and five FAQ answers. Remove each once product confirms the scope.

## Search results (SEO)

- **Page title:** Fraud Detection for Every Payment | FLIK
- **Description:** FLIK Fraud Detection is in development: a planned risk check on payments, so genuine orders go through and suspicious ones are held or stopped, with your own rules and a review queue in your dashboard.

## 1. Hero
<!-- html: Hero: text left, a live screening feed on the right (example data) -->

- **Small text above headline:** FLIK Fraud Detection · Planned
- **Headline (H1):** Fraud checks for every payment.
  - **Grey part:** Planned, and in development now.
- **Intro text:** We're building a risk check for FLIK payments, so genuine orders go through and suspicious ones don't. The capabilities on this page are planned and may change.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **Button (below logo strip):** Pause animations
- **List item:** Planned: a check before approval
- **List item:** Planned: your own rules on top
- **List item:** Planned: a review queue for unusual orders

*Example text inside the product mockup (only change if needed):*

- Payments — Example · planned
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
- Planned feature

## 2. How it decides
<!-- html: How it decides: full-width band with a flow diagram that splits into three outcomes #decide -->

- **Label:** Planned capabilities
- **Section heading:** One check, three outcomes.
  - **Grey part:** The plan: each payment is scored before it is approved. Most go straight through; the unusual ones wait for a closer look. [[confirm with product]]
- **Step:** Wherever you sell — Shopper pays — Checkout, Payment Link or at your counter
- **Step:** FLIK Fraud Detection — Risk check — The payment's signals and your rules, scored together
- **Outcome:** Low risk — Approved — The payment goes through as usual.
- **Outcome:** Unusual — Held for review — It waits in your review queue until you decide.
- **Outcome:** High risk — Blocked — The payment is stopped before the order ships.

## 3. Every step of the order
<!-- html: Every step of the order: ruled five-step flow, the progress line walks and an example check follows (structure from seon.io "protect every step"; example data) #steps -->

- **Section heading:** Planned: checks at every step of the order.
  - **Grey part:** Fraud doesn't only happen at payment. The plan is to look for risk from the first sign-up to after the package arrives. [[confirm with product]]
- **Step:** 01 — Sign-up — New FLIK accounts that share a phone number or device with others.
- **Step:** 02 — Checkout — Delivery addresses and contact details that don't add up.
- **Step:** 03 — Payment — Many failed tries, unusual amounts or a burst of payments.
- **Step:** 04 — Shipping — Risky COD orders held before you pay to ship them.
- **Step:** 05 — After delivery — Addresses that keep refusing packages, and repeated refunds.

*Example text inside the example card (only change if needed):*

- Example · Sign-up — Phone number already on 3 FLIK accounts — Review
- Example · Checkout — Delivery address in Medan, phone area code in Jayapura — Review
- Example · Payment — 6 failed card tries in 4 minutes — Blocked
- Example · Shipping — COD order of Rp2.150.000 from a new account — Held
- Example · After delivery — 3 refused COD packages at this address — Blocked

## 4. Know why
<!-- html: Know why: the list highlights the reasons behind one held order (structure from seon.io score explainability; example data) #signals -->

- **Section heading:** Planned: know why, every time.
  - **Grey part:** The plan is for every decision to come with its reasons, ranked by how much they counted. [[confirm with product]]
- **Heading:** Behaviour
- **Text:** Several orders in a few minutes.
- **Heading:** Location
- **Text:** Paid far from the delivery address.
- **Heading:** History
- **Text:** A new account with no delivered orders.
- **Heading:** Device
- **Text:** A phone already used on other accounts.

*Example text inside the product mockup (only change if needed):*

- Example · Order ARN-1054 · Cash on delivery — Rp2.150.000 — Held for review
- 72 — risk score — 0 low · 100 high (example)
- Why it was held
- 4 orders in 12 minutes — Behaviour
- Paid 800 km from the delivery address — Location
- Account created today — History
- Phone used by 2 other accounts — Device
- Review order

## 5. Fake COD orders
<!-- html: Fake COD orders: dark band with a ledger of held orders (example data) #cod-risk -->

- **Section heading:** Planned: holds on suspicious COD orders.
  - **Grey part:** Cash on delivery is easy to abuse. The plan is to let you hold suspicious COD orders before you pay to ship them. [[confirm with product]]
- **List item:** Spot repeated orders to different addresses.
- **List item:** Hold large first orders from new accounts.
- **Link:** COD Shipping

*Example text inside the product mockup (only change if needed):*

- COD orders held · Example
- ARN-2041 · Rp1.850.000 — 4 orders to different addresses today — Held
- ARN-2047 · Rp3.200.000 — First order from a new account
- ARN-2052 · Rp960.000 — Phone number used by 3 accounts
- ARN-2058 · Rp2.400.000 — Address with earlier refused deliveries
- ARN-2063 · Rp1.150.000 — 6 orders in 10 minutes

## 6. Your rules, your call
<!-- html: Your rules, your review queue: tabs drive one dashboard window (example data) #dash -->

- **Section heading:** Your rules, your call.
  - **Grey part:** Planned: add rules for how your business sells, and decide on held orders from one queue. [[confirm with product]]
- **Tab:** Rules
- **Tab:** Review queue

*Example text inside the product mockup (only change if needed):*

- Rules — Example rules
- How strict — Relaxed / Balanced / Strict
- Fewer orders held. Only clear risks are stopped. / The default: unusual orders go to your review queue. / More orders wait for review before they ship.
- Your rules, on top of FLIK's checks
- Review COD orders over Rp5.000.000
- Block 5 failed payments within 10 minutes
- Review first orders to a new address
- Review orders over 3× your average
- Last 7 days (example) — Payments checked 1.284 — Held for review 9 / 23 / 41 — Blocked 4 / 6 / 9 (Relaxed / Balanced / Strict)
- Review queue — 3 waiting
- ARN-1054 · Rp2.150.000 — Cash on delivery · 4th address today
- ARN-1061 · Rp6.400.000 — Cash on delivery · over Rp5.000.000
- ARN-1066 · Rp3.900.000 — GoPay · 3× your average order
- Tap to decide — Needs review / Approved / Declined

## 7. Works where you sell
<!-- html: Works where you sell: three product cards #where -->

- **Section heading:** Works where you sell.
  - **Grey part:** Planned for payments across FLIK, online and at your counter. [[confirm with product]]
- **Card:** Checkout — Online orders. — Planned: payments in FLIK Checkout checked before the order is confirmed. — Explore Checkout
- **Card:** Payment Link — Sales in chat. — Planned: the same check for links you share on WhatsApp or social media. — Explore Payment Link
- **Card:** In-Store Payment — At your counter. — Planned: QRIS and card payments in your outlets screened too. — Explore In-Store Payment

*Example text inside the product mockup (only change if needed):*

- Order ARN-1052 — Approved — QRIS · Rp349.000 — Risk check passed
- Payment link — Review — GoPay · Rp4.500.000 — Much larger than usual
- Counter 1 · Bandung — Approved — Card · Rp1.250.000 — Risk check passed

## 8. At a glance
<!-- html: Fraud Detection at a glance (structure from cybersource.com Fraud Management Essentials features; PLACEHOLDER scope) #glance -->

- **Section heading:** Planned capabilities at a glance.
  - **Grey part:** In development, so details may change. [[confirm with product]]
- **Heading:** Ready from day one
- **List item:** FLIK's checks switched on by default
- **List item:** No setup or code to start
- **List item:** Covers Checkout, Payment Link and In-Store Payment
- **Heading:** Your strategy
- **List item:** Choose how strict the checks are
- **List item:** Add your own rules on top
- **List item:** Approve or decline held orders in one queue
- **Heading:** No friction for genuine shoppers
- **List item:** No extra step at checkout
- **List item:** WhatsApp OTP login works as before

## 9. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What is Fraud Detection?
  - **Answer:** A planned risk check on payments made through FLIK. It is in development, so the answers below describe the plan and may change. Genuine payments would go through, unusual ones would be held for review, and high-risk ones stopped.
- **Question:** Which payments will be checked?
  - **Answer:** The plan covers payments through FLIK Checkout, Payment Link and In-Store Payment, including QRIS, e-wallets, virtual accounts, cards and cash on delivery. [[confirm with product]]
- **Question:** Will it slow down checkout?
  - **Answer:** It is designed to add no extra step for shoppers, with the check running while the payment is processed. [[confirm with product]]
- **Question:** What happens to a held payment?
  - **Answer:** In the planned design, it waits in your review queue. You approve or decline it, and the order only ships once it is approved.
- **Question:** What happens to a blocked payment?
  - **Answer:** In the planned design, the payment is stopped and the order is not created, so you don't ship goods that won't be paid for.
- **Question:** Will I see why an order was held?
  - **Answer:** That is the plan: each held order would show its reasons, ranked by how much they counted, such as several orders in a few minutes or a new account. [[confirm with product]]
- **Question:** Can I make it more or less strict?
  - **Answer:** Planned: choose Relaxed, Balanced or Strict. Stricter settings send more orders to your review queue. [[confirm with product]]
- **Question:** Can I add my own rules?
  - **Answer:** Planned: add rules for how your business sells, such as reviewing COD orders above an amount, on top of FLIK's own checks. [[confirm with product]]
- **Question:** Will it cover COD?
  - **Answer:** Planned: suspicious COD orders can be held before you pay to ship them. [[confirm with product]]
- **Question:** What does it cost?
  - **Answer:** Pricing isn't set yet. The FLIK team will share it before Fraud Detection launches.
- **Text:** Can't find what you need? Talk to the FLIK team

## 10. Resources
<!-- html: Resources: 3 cards -->

- **Small heading:** More from FLIK
- **Card:** Product — Sell with FLIK Checkout — A 30-second checkout with every way Indonesia pays. — Explore Checkout
- **Card:** Product — COD across Indonesia — COD fee 3% (excl. PPN), paid by the merchant. — Explore COD Shipping
- **Card:** Guide — Spotting fake orders — The patterns behind most payment fraud, and what to do about them. — Read more

## 11. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Sell with confidence.
- **Text:** Talk to the FLIK team about the planned Fraud Detection and how it could fit the way you sell.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
