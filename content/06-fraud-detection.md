# Fraud Detection

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/fraud-detection/
- **Page file:** `payment/fraud-detection/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Rewritten on 12 Nov 2026 (AG) to describe the fraud system FLIK actually runs. It checks money **leaving** FLIK: every withdrawal and every change to a payout account or registered contact. Money coming in is never refused, and card fraud stays with the payment partners. FLIK's risk team reviews every held case. The old page described shopper-payment screening, risk scores, strictness settings, merchant rules and a merchant review queue. None of that is planned, so it is gone.

- [ ] **Launch date:** the FDS goes live on 7 Dec 2026. The page says "From December 2026". Confirm, or change it if the date moves.
- [x] **Pricing:** included at no extra cost (AG, 12 Nov 2026).
- [ ] **No tipping off:** the page names what is checked, never the rules, thresholds or signals. Compliance to confirm the wording is safe.
- [ ] **2FA:** the spec says withdrawals and account changes need 2FA, but the Developers guide says 2FA isn't built. The page only mentions the OTP (WhatsApp) check on account changes. Confirm with Engineering.
- [ ] Example data in the mockups (withdrawal IDs, amounts, banks) is example data, not FLIK figures.

## Search results (SEO)

- **Page title:** Fraud Detection: Protection for Your Balance and Payouts | FLIK
- **Description:** FLIK checks every withdrawal and every change to your payout account before money moves. Your shoppers' payments are never blocked, and FLIK's risk team reviews anything unusual.

## 1. Hero
<!-- html: Hero: text left, a live feed of withdrawals and account changes on the right (example data) -->

- **Small text above headline:** FLIK Fraud Detection · From December 2026
- **Headline (H1):** Your money stays yours.
  - **Grey part:** Every withdrawal is checked before it leaves FLIK.
- **Intro text:** If someone gets into your account, the first thing they go for is your balance. FLIK checks every withdrawal and every change to your payout account before money moves. Your shoppers' payments are never blocked.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** Every withdrawal checked before it's sent
- **List item:** New payout accounts wait 24 hours, with an email to you
- **List item:** Reviewed by FLIK's risk team, not a black box

*Example text inside the product mockup (only change if needed):*

- Money out — Example
- 41 sent — 1 being verified — 0 stopped
- Withdrawal — WD-3102 · BCA — Rp12.500.000 — Sent
- Withdrawal — WD-3103 · Mandiri — Rp4.200.000 — Sent
- Payout account change — New BRI account — Waiting 24 h
- Withdrawal — WD-3104 · BCA — Rp86.000.000 — Being verified
- Withdrawal — WD-3105 · BNI — Rp2.750.000 — Sent
- Registered contact change — New email — Checked
- Withdrawal — WD-3106 · BCA — Rp9.900.000 — Sent
- Withdrawal — WD-3107 · Mandiri — Rp15.300.000 — Sent
- Checking
- Example

## 2. How it decides
<!-- html: How it decides: full-width band with a flow diagram that splits into three outcomes #decide -->

- **Label:** How it works
- **Section heading:** One check before money moves.
  - **Grey part:** Each withdrawal and each payout-account change gets the same check, whether it comes from your dashboard, the API or an AI agent.
- **Step:** You or your system — Request — A withdrawal, or a new payout account
- **Step:** FLIK Fraud Detection — Risk check — Compared with how your business usually moves money
- **Outcome:** Usual — Sent — The money goes out as usual.
- **Outcome:** Unusual — Being verified — It waits while FLIK's risk team takes a look. You see the expected time.
- **Outcome:** Clearly wrong — Stopped — Nothing leaves your balance.

## 3. What it covers
<!-- html: Every step of the order: ruled five-step flow, the progress line walks and an example check follows (example data) #steps -->

- **Section heading:** Watching every way money leaves.
  - **Grey part:** Withdrawals and payout details are checked before anything happens. Money coming in is watched, never refused.
- **Step:** 01 — Withdrawals — Checked before anything is sent to the bank.
- **Step:** 02 — New payout account — A 24-hour wait, with an email to every registered contact.
- **Step:** 03 — Contact changes — New phone numbers and emails get the same check.
- **Step:** 04 — Payments in — Never blocked. Unusual patterns go to FLIK's risk team.
- **Step:** 05 — Refunds — Watched for patterns that don't fit your business.

*Example text inside the example card (only change if needed):*

- Example · Withdrawal — Rp12.500.000 to your usual BCA account — Sent
- Example · Payout account — New account added from a new login — Waiting 24 h
- Example · Contact change — Registered email changed — Checked
- Example · Payments in — 214 QRIS payments today — Received
- Example · Refunds — 3 refunds today — Normal

## 4. Payout account changes
<!-- html: Know why: the list highlights one account change (example data) #signals -->

- **Section heading:** A new payout account waits 24 hours.
  - **Grey part:** That's the window a fraudster needs and doesn't get. You hear about it straight away, and you can stop it.
- **Heading:** Email alert
- **Text:** Every registered contact gets an email as soon as the change is made.
- **Heading:** One click to cancel
- **Text:** Didn't make the change? Cancel it from the email.
- **Heading:** Your choice meanwhile
- **Text:** Keep withdrawing to your old account, or wait for the new one.
- **Heading:** OTP check
- **Text:** The change needs the one-time code sent to your WhatsApp.

*Example text inside the product mockup (only change if needed):*

- Example · Payout account change — New BRI account ···· 4821 — Waiting 24 h
- 23:41 — hours left — Active on 13 Dec, 10:12 WIB (example)
- What happens now
- Email sent to 2 registered contacts — Alert
- Withdrawals go to your BCA account until then — Your choice
- Change made with a WhatsApp OTP — Check
- Not you? Cancel this change — Cancel
- Cancel change

## 5. Reviewed by people
<!-- html: Reviewed by people: dark band with a short list (replaces the old COD section) #cod-risk -->

- **Section heading:** People decide, not just rules.
  - **Grey part:** When a withdrawal looks unusual, FLIK's risk team reviews it. Nothing is rejected by a machine alone.
- **List item:** A person on FLIK's risk team reviews every held withdrawal.
- **List item:** You see "Being verified" and an expected time in your dashboard.
- **Link:** Contact support

## 6. Your shoppers aren't affected
<!-- html: replaces "Your rules, your review queue" -->

- **Section heading:** Your shoppers pay as usual.
  - **Grey part:** We never block a payment coming in. Card payments are screened by FLIK's licensed payment partners.

## 7. Works however you withdraw
<!-- html: Works where you sell: three product cards #where -->

- **Section heading:** The same check, however you withdraw.
  - **Grey part:** No setup and nothing to switch on.
- **Card:** Dashboard — Withdraw by hand. — Every withdrawal you make in the dashboard is checked first. — Open the dashboard
- **Card:** API — Withdraw from your system. — Withdrawals by API pass the same check, and you get a webhook when one is under review. — Explore Developers
- **Card:** AI agents — Withdraw through an agent. — Agent withdrawals carry the agent's identity and its limit, and pass the same check. — Explore Developers

*Example text inside the product mockup (only change if needed):*

- Withdrawal WD-3102 — Sent — Dashboard · Rp12.500.000 — Risk check passed
- Withdrawal WD-3104 — Being verified — API · Rp86.000.000 — Under review
- Withdrawal WD-3109 — Sent — Agent · Rp3.000.000 — Within the agent's limit

## 8. At a glance
<!-- html: Fraud Detection at a glance #glance -->

- **Section heading:** Fraud Detection at a glance.
  - **Grey part:** On for every FLIK merchant from December 2026.
- **Heading:** Always on
- **List item:** No setup, no code
- **List item:** Every withdrawal and payout-account change checked
- **List item:** The same check on dashboard, API and AI agents
- **Heading:** Your account, protected
- **List item:** 24-hour wait on new payout accounts
- **List item:** An email alert with one-click cancel
- **List item:** Reviewed by FLIK's risk team
- **Heading:** No friction for shoppers
- **List item:** Payments in are never blocked
- **List item:** No extra step at checkout

## 9. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What does Fraud Detection do?
  - **Answer:** It checks every withdrawal and every change to your payout account or registered contacts before anything happens. It protects your balance if someone else gets into your account.
- **Question:** Does it block my customers' payments?
  - **Answer:** No. Money coming in is never refused. FLIK watches incoming payments for unusual patterns, and card payments are also screened by our licensed payment partners.
- **Question:** What happens when a withdrawal is held?
  - **Answer:** It shows as "Being verified" in your dashboard, with an expected time. FLIK's risk team reviews it, and it's sent as soon as it's cleared. Nothing leaves your balance in the meantime.
- **Question:** Why won't you tell me why it was held?
  - **Answer:** Sharing how the checks work would help fraudsters get around them. If we need anything from you, we'll contact you on your registered contacts.
- **Question:** Why does a new payout account take 24 hours?
  - **Answer:** It gives you time to spot a change you didn't make. Every registered contact gets an email, and you can cancel from it. Until then, you can keep withdrawing to your old account.
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
- **Text:** Talk to the FLIK team about how Fraud Detection protects your balance.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
