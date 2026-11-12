# Fraud Detection

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/fraud-detection/
- **Page file:** `payment/fraud-detection/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Rewritten on 12 Nov 2026 (AG) around fraud, chargebacks and fake COD orders. The page says what FLIK watches (payments, refunds, chargebacks, withdrawals, account changes, COD orders) and how merchants are helped, but not how the checks work. It makes no claim either way about blocking payments. Mechanics such as waiting periods, OTP channels and alert routes are left out on purpose.

- [ ] **Launch date:** the page says "From December 2026". Confirm, or change it if the date moves.
- [x] **Pricing:** included at no extra cost (AG, 12 Nov 2026).
- [ ] **Chargeback help:** the page says merchants are told of a dispute with the reason and deadline, upload evidence in the dashboard, and FLIK sends it to the payment partner. Confirm this is live by the launch date.
- [ ] **No tipping off:** the page names what is checked, never the rules, thresholds or signals. Compliance to confirm the wording is safe.
- [ ] **COD and shipping fraud (coming soon):** delivery risk level, COD confirmation on WhatsApp, address check and courier choice are planned, not built. Before the risk level goes live, the shopper privacy notice must be published, and the merchant sees only the level and the reason. Remove "Coming soon" only when each is live.
- [x] AI-agent withdrawals and the payment-partner screening line removed (AG, 12 Nov 2026).
- [ ] Example data in the mockups (orders, amounts, banks, card digits) is example data, not FLIK figures.

## Search results (SEO)

- **Page title:** Fraud Detection: Fight Fraud and Chargebacks | FLIK
- **Description:** FLIK checks payments, refunds and withdrawals for fraud, helps you fight chargebacks, and soon flags risky COD orders. Included for every FLIK merchant.

## 1. Hero
<!-- html: Hero: text left, a live feed of payments, refunds, disputes and withdrawals on the right (example data) -->

- **Small text above headline:** FLIK Fraud Detection · From December 2026
- **Headline (H1):** Stop fraud before it costs you.
  - **Grey part:** Fewer chargebacks, fewer fake COD orders.
- **Intro text:** Fraud costs you twice: the goods, then the payment. FLIK checks every payment, refund and withdrawal, and helps you fight chargebacks.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** Every payment, refund and withdrawal checked
- **List item:** Help with every chargeback
- **List item:** Risky COD orders flagged (coming soon)

*Example text inside the product mockup (only change if needed):*

- Risk activity — Example
- 214 cleared — 1 under review — 0 stopped
- Payment — QRIS · order #4821 — Rp350.000 — Cleared
- Withdrawal — WD-3102 · BCA — Rp12.500.000 — Cleared
- Card dispute — Visa · order #4790 — Rp1.250.000 — Evidence needed
- Refund — Order #4802 — Rp180.000 — Cleared
- Payment — Card · order #4822 — Rp2.400.000 — Cleared
- Withdrawal — WD-3104 · BCA — Rp86.000.000 — Under review
- Payment — QRIS · order #4823 — Rp95.000 — Cleared
- Withdrawal — WD-3105 · Mandiri — Rp4.200.000 — Cleared
- Checking
- Example

## 2. How it decides
<!-- html: How it decides: full-width band with a flow diagram that splits into three outcomes #decide -->

- **Label:** How it works
- **Section heading:** One check at every risky moment.
  - **Grey part:** Dashboard or API, the same check applies.
- **Step:** You or your system — Request — A payment, refund or withdrawal
- **Step:** FLIK Fraud Detection — Risk check — Looks for signs of fraud
- **Outcome:** Usual — Cleared — Goes through as usual.
- **Outcome:** Unusual — Under review — FLIK's risk team takes a look.
- **Outcome:** Fraud — Stopped — The money stays in your balance.

## 3. What it covers
<!-- html: What it covers: ruled five-step flow, the progress line walks and an example check follows (example data) #steps -->

- **Section heading:** Covered end to end.
  - **Grey part:** From first payment to last withdrawal.
- **Step:** 01 — Payments — Checked for fraud.
- **Step:** 02 — Refunds — Unusual patterns flagged.
- **Step:** 03 — Chargebacks — We help you respond to disputes.
- **Step:** 04 — Withdrawals — Checked before money leaves.
- **Step:** 05 — COD orders — Risky orders flagged. Coming soon.

*Example text inside the example card (only change if needed):*

- Example · Payments — 214 payments today — Cleared
- Example · Refunds — 3 refunds today — Normal
- Example · Chargebacks — Card payment of Rp1.250.000 disputed — Evidence sent
- Example · Withdrawal — Rp12.500.000 to your usual BCA account — Cleared
- Example · COD order — Order #4830 · past failed deliveries — High risk

## 4. Chargebacks
<!-- html: Chargebacks: the list highlights one card dispute (example data) #signals -->

- **Section heading:** Fight chargebacks with evidence.
  - **Grey part:** You don't face them alone.
- **Heading:** Told straight away
- **Text:** With the reason and the deadline.
- **Heading:** Clear outcome
- **Text:** Shown on your statement.
- **Heading:** Evidence in one place
- **Text:** Upload receipts, delivery proof and chats.
- **Heading:** FLIK responds with you
- **Text:** We send your evidence before the deadline.

*Example text inside the product mockup (only change if needed):*

- Example · Card dispute — Rp1.250.000 · Visa ···· 4821 — Evidence needed
- 6 — days to respond — Respond by 18 Dec (example)
- What happens now
- Reason: item not received — Notice
- Delivery proof and chat uploaded — Evidence
- Sent to the payment partner by FLIK — Response
- Result shown on your statement — Outcome
- Upload evidence

## 5. COD and shipping fraud
<!-- html: COD and shipping fraud: delivery risk level, COD confirmation and address check, coming soon #dash -->

- **Section heading:** Stop fake COD orders before they ship.
  - **Pill:** Coming soon
  - **Grey part:** FLIK flags risky orders before pickup. You decide what to do.
- **List item:** Risk level. Low, Medium or High, with the reason.
- **List item:** COD confirmation. The shopper confirms on WhatsApp before pickup.
- **List item:** Address check. Bad addresses flagged before you ship.
- **List item:** Prepaid instead. Send a payment link instead of COD.
- **List item:** Right courier. Use the one that delivers best there.

## 6. Reviewed by people
<!-- html: Reviewed by people: dark band with a short list #cod-risk -->

- **Section heading:** People decide, not just rules.
  - **Grey part:** Unusual cases go to FLIK's risk team.
- **List item:** Every flagged case is reviewed by a person.
- **List item:** Track the status in your dashboard.
- **Link:** Contact support

## 7. Works however you withdraw
<!-- html: Works where you sell: three product cards #where -->

- **Section heading:** The same check, however you withdraw.
  - **Grey part:** No setup and nothing to switch on.
- **Card:** Dashboard — Withdraw by hand. — Every withdrawal is checked first. — Open the dashboard
- **Card:** API — Withdraw from your system. — Same check, plus a webhook when one is under review. — Explore Developers

*Example text inside the product mockup (only change if needed):*

- Withdrawal WD-3102 — Sent — Dashboard · Rp12.500.000 — Risk check passed
- Withdrawal WD-3104 — Under review — API · Rp86.000.000 — Under review

## 8. At a glance
<!-- html: Fraud Detection at a glance #glance -->

- **Section heading:** Fraud Detection at a glance.
  - **Grey part:** On for every FLIK merchant from December 2026.
- **Heading:** Always on
- **List item:** No setup, no code
- **List item:** Payments, refunds and withdrawals checked
- **List item:** Reviewed by FLIK's risk team
- **Heading:** Chargebacks
- **List item:** Told as soon as a payment is disputed
- **List item:** Evidence uploaded in the dashboard
- **List item:** FLIK sends it to the payment partner
- **Heading:** COD and shipping (coming soon)
- **List item:** Delivery risk level per order
- **List item:** COD confirmation on WhatsApp
- **List item:** Address check before pickup

## 9. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What does Fraud Detection do?
  - **Answer:** It checks payments, refunds and withdrawals for fraud, and helps you fight chargebacks.
- **Question:** How does FLIK help with chargebacks?
  - **Answer:** You're told straight away, with the reason and deadline. Upload evidence in the dashboard, and FLIK sends it to the payment partner.
- **Question:** How does FLIK help with fake COD orders?
  - **Answer:** Soon, each order gets a risk level with the reason. Ask the shopper to confirm on WhatsApp, send a payment link instead, or switch courier.
- **Question:** What happens when a withdrawal is held?
  - **Answer:** It shows as "Under review", with an expected time. It's sent once FLIK's risk team clears it.
- **Question:** Why won't you tell me why it was held?
  - **Answer:** Explaining the checks would help fraudsters get around them. We'll contact you if we need anything.
- **Question:** Do I need to set anything up?
  - **Answer:** No. It's on for every FLIK merchant.
- **Question:** What does it cost?
  - **Answer:** Nothing. It's included.
- **Text:** Can't find what you need? Talk to the FLIK team

## 10. Resources
<!-- html: Resources: 3 cards -->

- **Small heading:** More from FLIK
- **Card:** Product — Early Settlement — Get paid sooner, straight into your FLIK balance. — Explore Early Settlement
- **Card:** Product — Developers — API keys, webhooks and how to connect. — Explore Developers
- **Card:** Guide — Keeping your account safe — Simple habits that keep your FLIK account in your hands. — Read more

## 11. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Sell with confidence.
- **Text:** See how Fraud Detection protects your sales.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
