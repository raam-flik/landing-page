# Fraud Detection

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/fraud-detection/
- **Page file:** `payment/fraud-detection/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Rewritten on 12 Nov 2026 (AG) around fraud and chargebacks. The page says what FLIK watches (payments, refunds, chargebacks, withdrawals, account changes) and how merchants are helped, but not how the checks work. It makes no claim either way about blocking payments. Mechanics such as waiting periods, OTP channels and alert routes are left out on purpose.

- [ ] **Launch date:** the page says "From December 2026". Confirm, or change it if the date moves.
- [x] **Pricing:** included at no extra cost (AG, 12 Nov 2026).
- [ ] **Chargeback help:** the page says merchants are told of a dispute with the reason and deadline, upload evidence in the dashboard, and FLIK sends it to the payment partner. Confirm this is live by the launch date.
- [ ] **No tipping off:** the page names what is checked, never the rules, thresholds or signals. Compliance to confirm the wording is safe.
- [ ] **Delivery risk level:** shown as "Coming soon". Before it goes live, the shopper privacy notice must be published, and the merchant sees only the level and the reason.
- [ ] Example data in the mockups (orders, amounts, banks, card digits) is example data, not FLIK figures.

## Search results (SEO)

- **Page title:** Fraud Detection: Fight Fraud and Chargebacks | FLIK
- **Description:** FLIK watches payments, refunds and withdrawals for fraud, and helps you respond when a shopper disputes a card payment. Included for every FLIK merchant.

## 1. Hero
<!-- html: Hero: text left, a live feed of payments, refunds, disputes and withdrawals on the right (example data) -->

- **Small text above headline:** FLIK Fraud Detection · From December 2026
- **Headline (H1):** Stop fraud before it costs you.
  - **Grey part:** Fewer chargebacks, and a balance only you can move.
- **Intro text:** Fraud costs you twice: the goods are gone, then the payment is taken back. FLIK watches every payment, refund and withdrawal for fraud, and helps you fight back when a shopper disputes a card payment.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** Payments, refunds and withdrawals watched for fraud
- **List item:** Help with every chargeback, from notice to outcome
- **List item:** Reviewed by FLIK's risk team, not a black box

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
  - **Grey part:** Payments, refunds, withdrawals and account changes get the same check, whether they come from your dashboard, the API or an AI agent.
- **Step:** You or your system — Request — A payment, refund, withdrawal or account change
- **Step:** FLIK Fraud Detection — Risk check — Looks for signs of fraud
- **Outcome:** Usual — Cleared — It goes through as usual.
- **Outcome:** Unusual — Under review — FLIK's risk team takes a look. You see the status in your dashboard.
- **Outcome:** Fraud — Stopped — The money stays in your balance.

## 3. What it covers
<!-- html: What it covers: ruled five-step flow, the progress line walks and an example check follows (example data) #steps -->

- **Section heading:** Fraud and chargebacks, covered end to end.
  - **Grey part:** From the first payment to the last withdrawal.
- **Step:** 01 — Payments — Watched for signs of fraud. Card payments are also screened by our licensed payment partners.
- **Step:** 02 — Refunds — Watched for patterns that don't fit your business.
- **Step:** 03 — Chargebacks — You're told when a shopper disputes a card payment, and we help you respond.
- **Step:** 04 — Withdrawals — Checked before anything is sent to the bank.
- **Step:** 05 — Account changes — New payout accounts and contacts are checked, and you're told straight away.

*Example text inside the example card (only change if needed):*

- Example · Payments — 214 payments today — Cleared
- Example · Refunds — 3 refunds today — Normal
- Example · Chargebacks — Card payment of Rp1.250.000 disputed — Evidence sent
- Example · Withdrawal — Rp12.500.000 to your usual BCA account — Cleared
- Example · Account change — New payout account added — Checked

## 4. Chargebacks
<!-- html: Chargebacks: the list highlights one card dispute (example data) #signals -->

- **Section heading:** Fight chargebacks with evidence.
  - **Grey part:** When a shopper disputes a card payment, you don't face it alone.
- **Heading:** Told straight away
- **Text:** You get the reason and the deadline to respond.
- **Heading:** A clear outcome
- **Text:** Won or lost, the result shows on your statement.
- **Heading:** Evidence in one place
- **Text:** Upload receipts, delivery proof and chats in the dashboard.
- **Heading:** FLIK responds with you
- **Text:** We send your evidence to the payment partner before the deadline.

*Example text inside the product mockup (only change if needed):*

- Example · Card dispute — Rp1.250.000 · Visa ···· 4821 — Evidence needed
- 6 — days to respond — Respond by 18 Dec (example)
- What happens now
- Reason: item not received — Notice
- Delivery proof and chat uploaded — Evidence
- Sent to the payment partner by FLIK — Response
- Result shown on your statement — Outcome
- Upload evidence

## 5. Reviewed by people
<!-- html: Reviewed by people: dark band with a short list #cod-risk -->

- **Section heading:** People decide, not just rules.
  - **Grey part:** When something looks unusual, FLIK's risk team reviews it.
- **List item:** A person on FLIK's risk team reviews every flagged case.
- **List item:** You see the status in your dashboard.
- **Link:** Contact support

## 6. Spot risky orders
<!-- html: Risky shoppers: delivery risk level per order, coming soon #dash -->

- **Section heading:** Spot risky orders before you ship.
  - **Pill:** Coming soon
  - **Grey part:** Each order gets a delivery risk level, Low, Medium or High, with the reason: for example, past failed deliveries to the wrong address. You decide what to do.
- **List item:** Switch to a courier that delivers better to that area.
- **List item:** Confirm the address with the shopper before you ship.
- **List item:** Ask for prepayment instead of cash on delivery.

## 7. Works however you withdraw
<!-- html: Works where you sell: three product cards #where -->

- **Section heading:** The same check, however you withdraw.
  - **Grey part:** No setup and nothing to switch on.
- **Card:** Dashboard — Withdraw by hand. — Every withdrawal you make in the dashboard is checked first. — Open the dashboard
- **Card:** API — Withdraw from your system. — Withdrawals by API pass the same check, and you get a webhook when one is under review. — Explore Developers
- **Card:** AI agents — Withdraw through an agent. — Agent withdrawals carry the agent's identity and its limit, and pass the same check. — Explore Developers

*Example text inside the product mockup (only change if needed):*

- Withdrawal WD-3102 — Sent — Dashboard · Rp12.500.000 — Risk check passed
- Withdrawal WD-3104 — Under review — API · Rp86.000.000 — Under review
- Withdrawal WD-3109 — Sent — Agent · Rp3.000.000 — Within the agent's limit

## 8. At a glance
<!-- html: Fraud Detection at a glance #glance -->

- **Section heading:** Fraud Detection at a glance.
  - **Grey part:** On for every FLIK merchant from December 2026.
- **Heading:** Always on
- **List item:** No setup, no code
- **List item:** Payments, refunds and withdrawals checked
- **List item:** The same check on dashboard, API and AI agents
- **Heading:** Chargebacks
- **List item:** Told as soon as a payment is disputed
- **List item:** Evidence uploaded in the dashboard
- **List item:** FLIK sends it to the payment partner
- **Heading:** Your balance, protected
- **List item:** Every withdrawal checked before it's sent
- **List item:** Reviewed by FLIK's risk team
- **List item:** Delivery risk level per order (coming soon)

## 9. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What does Fraud Detection do?
  - **Answer:** It watches payments, refunds and withdrawals for fraud, and helps you respond when a shopper disputes a card payment. It also protects your balance if someone else gets into your account.
- **Question:** How does FLIK help with chargebacks?
  - **Answer:** When a shopper disputes a card payment, you're told straight away, with the reason and the deadline. Upload your evidence in the dashboard, and FLIK sends it to the payment partner. The outcome shows on your statement.
- **Question:** Can FLIK help me spot risky shoppers?
  - **Answer:** Soon. Each order will get a delivery risk level, Low, Medium or High, with the reason, such as past failed deliveries to the wrong address. You decide what to do: switch courier, confirm the address, or ask for prepayment.
- **Question:** What happens when a withdrawal is held?
  - **Answer:** It shows as "Under review" in your dashboard, with an expected time. FLIK's risk team reviews it, and it's sent as soon as it's cleared. Nothing leaves your balance in the meantime.
- **Question:** Why won't you tell me why it was held?
  - **Answer:** Sharing how the checks work would help fraudsters get around them. If we need anything from you, we'll contact you on your registered contacts.
- **Question:** Do I need to set anything up?
  - **Answer:** No. It's on for every FLIK merchant, on the dashboard, the API and AI agents.
- **Question:** What does it cost?
  - **Answer:** Nothing extra. It's included for every FLIK merchant.
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
- **Text:** Talk to the FLIK team about how Fraud Detection protects your sales and your balance.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
