# FLIK Connect (Split Payments)

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/connect/
- **Page file:** `payment/connect/index.html`. Use cases, example rules, the rule builder, the history and the FAQ are lists in the page script.
- **Linear:** FLI-51. The issue says `/payments/connect`; the sitemap names the group Payment, so the page is at `/payment/connect` next to Early Settlement and Fraud Detection.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Naming (agreed by AG, 9 Oct 2026)

Product **FLIK Connect**; feature **Split Payments**; the merchant's setup is a **Split Rule**; the result for one transaction is an **Allocation**. Never "Capture" (a different product) and never "disbursement" for splits (that means money sent to a bank).

## Things to confirm on this page

- [ ] **Status:** not live. The page says "Coming soon" and every CTA is "Join the waitlist" or "Talk to the FLIK team" (both open the Calendly intro link), never "Get started". Change this only when product confirms launch (wallet service and PJP licensing).
- [ ] **Source docs** listed in FLI-51 (`product/payments/...`) are not in this repo; the page follows the brief in the issue. Check it against the configuration catalogue and the allocation ledger interface.
- [ ] **Example fees in the rule builder:** payment fee QRIS 0.7% and VAT 11% are examples. Replace them with the real MDR and VAT from the pricing page (FLI-50).
- [ ] **Order of deductions:** the builder takes the FLIK Connect fee (3% + VAT of the whole payment) from the main merchant's remainder. Confirm that is how it will be charged.
- [ ] **Limits:** the builder allows up to four recipients for the demo. Confirm the real maximum.
- [ ] **Not in the MVP and not shown:** per-transaction custom splits via API, tiers, caps and minimums, scheduled rules, bulk invites, splits on the gross amount, free transfers between any merchants.
- [ ] No volume or customer claims; all names and amounts in the mockups are examples.

## Search results (SEO)

- **Page title:** Split Payments Across Wallets | FLIK Connect
- **Description:** FLIK Connect splits each payment across FLIK wallets automatically, so suppliers, outlets and partners get their share without manual transfers. Coming soon.

## 1. Hero
<!-- html: Hero: text left, one payment splitting into allocations on the right (example data) -->

- **Small text above headline:** FLIK Connect — Coming soon
- **Headline (H1):** One payment, every share.
  - **Grey part:** Split each sale automatically.
- **Intro text:** Turning every payment into everyone's share. FLIK Connect pays suppliers, outlets and partners their part of each sale, and the rest stays with you. You set the rule once, FLIK splits every payment.
- **Button:** Join the waitlist
- **Button:** See how it works
- **List item:** Fixed or percentage splits
- **List item:** The remainder stays with you
- **List item:** Every partner withdraws to its own bank
- **Label:** No manual transfers

*Example text inside the product mockup (only change if needed):*

- Allocation · ARN-2041 · QRIS — Rp1.000.000 — Payment completed
- Split on the net amount
- Supplier — 40%
- Outlet partner — Rp150.000 fixed
- Affiliate — 5%
- You (remainder) — Before the FLIK Connect fee

## 2. Who it's for
<!-- html: Who it's for: four example businesses with an example Split Rule each #who -->

- **Section heading:** Built for brands that sell together.
  - **Grey part:** When a sale belongs to more than one business, everyone gets their share as it happens.
- **Card:** Brands and suppliers — Pay suppliers or consignment partners their share of every sale. — Consignment partner 60%, You remainder
- **Card:** Outlets and franchises — Send each outlet or franchisee its share, and keep the brand's part. — Franchisee, Bandung 90%, You remainder
- **Card:** Resellers and affiliates — Pay commission the moment a sale completes. — Affiliate 5%, Reseller Rp25.000 fixed, You remainder
- **Card:** Multi-vendor stores — Every vendor receives its part of the sale in its own wallet. — Vendor A 45%, Vendor B 35%, You remainder

## 3. How it works
<!-- html: How it works: ruled four-step flow to the guide lines #how -->

- **Section heading:** Set it once, split every payment.
  - **Grey part:** A Split Rule decides who gets what. FLIK applies it to every completed payment.
- **Step:** 01 — Link wallets — Link the wallets of your partners. Each is a verified FLIK merchant, and FLIK approves every link.
- **Step:** 02 — Create a Split Rule — Give each recipient a fixed amount in Rp or a percentage.
- **Step:** 03 — FLIK splits it — When a payment completes, the net amount is split. Your partners are paid first; the rest stays with you.
- **Step:** 04 — Everyone withdraws — Each wallet has its own balance and statement, and withdraws to its own bank account.

## 4. Try a Split Rule
<!-- html: Try a Split Rule: interactive builder (example fees) #try -->

- **Section heading:** Try a Split Rule.
  - **Grey part:** Change the payment and the recipients, and see each Allocation.
- **Small heading:** Split Rule — Example
- **Form label:** Payment amount
- **Button:** Add recipient
- **Text:** Up to four recipients in this example. The remainder always stays with you.
- **Small heading:** Allocation
- **Rows:** Payment / Payment fee + VAT (example) / Net amount / each recipient / Remainder / FLIK Connect 3% + VAT / You receive
- **Error:** The recipients add up to more than the net amount. Lower a share.
- **Warning:** Your remainder doesn't cover the FLIK Connect fee. Leave a bigger remainder.
- **Warning:** Enter a payment amount.
- **Text:** Example payment fee: QRIS 0.7% + VAT. VAT shown at 11%. Your real rates are on the pricing page.

## 5. Controls
<!-- html: Controls: dark band with a Split Rule history (example data) #controls -->

- **Section heading:** In control, every version.
  - **Grey part:** FLIK approves each Split Rule before it goes live, and keeps every change.
- **List item:** FLIK approves every Split Rule and every linked wallet.
- **List item:** One active rule at a time, so every payment is split one way.
- **List item:** Every change is versioned and audited.
- **List item:** Past payments keep the rule that applied when they happened.
- **List item:** Each wallet's fees come from its own share, never from anyone else's.

*Example text inside the history card (only change if needed):*

- Aruna Studio · Split Rule history — Supplier, outlet partner and affiliate
- v4 — Supplier share 40% → 42% — Sent to FLIK · 22 Oct 2026 — Waiting for approval / Active
- v3 — Approved by FLIK · 18 Oct 2026 — Active / Replaced
- v2 — Kept for payments from 2 Oct to 18 Oct — Replaced
- v1 — Kept for payments from 21 Sep to 2 Oct — Replaced

## 6. Pricing
<!-- html: Pricing (like stripe.com/payments/checkout "Know what you'll pay") #pricing -->

- **Label:** Pricing
- **Section heading:** Know what you'll pay.
  - **Grey part:** One fee for the main merchant. Receiving a share is free.
- **Heading:** FLIK Connect
- **Link:** Pricing details
- **Text:** Charged on the whole transaction amount and paid by the main merchant. Payment method fees still apply.
- **Price:** 3% + VAT — of the whole transaction amount
- **Heading:** Receiving a split
- **Text:** Partners pay nothing to receive their share. Each wallet's own fees, such as withdrawals, come from its own balance.
- **Price:** Free — for beneficiary wallets

## 7. At a glance
<!-- html: At a glance #glance -->

- **Section heading:** FLIK Connect at a glance.
- **Heading:** Wallets — Linked beneficiary wallets, each a verified FLIK merchant / A balance and statement for every wallet / Each wallet withdraws to its own bank account
- **Heading:** Split Rules — Fixed amounts in Rp or percentages / Calculated on the net amount / The remainder stays with the main merchant / Split automatically on every completed payment / IDR only
- **Heading:** Controls — FLIK approves rules and linked wallets / One active rule per merchant / Every change versioned and audited / Past payments keep their rule

## 8. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What is FLIK Connect?
  - **Answer:** FLIK Connect splits each payment you receive across several FLIK wallets, so every party gets its share without manual transfers. The feature is called Split Payments, and your setup is a Split Rule.
- **Question:** Who can receive a split?
  - **Answer:** Verified FLIK merchants with their own wallet, linked to your account. FLIK checks and approves every link.
- **Question:** Can I split by amount or percentage?
  - **Answer:** Both. Each recipient in a Split Rule gets a fixed amount in Rp or a percentage.
- **Question:** What is the net amount?
  - **Answer:** The payment minus the payment fee and its VAT. Splits are calculated on this amount.
- **Question:** What happens to the rest?
  - **Answer:** Recipients are paid first. Whatever is left, the remainder, stays in your wallet.
- **Question:** Who pays the fees?
  - **Answer:** The main merchant pays FLIK Connect: 3% of the whole transaction plus VAT. Recipients pay nothing to receive a split; each wallet's own fees come from its own share.
- **Question:** Can I change a Split Rule?
  - **Answer:** Yes. A new version goes to FLIK for approval and then replaces the active rule. Past payments keep the rule that applied when they happened.
- **Question:** When can I use it?
  - **Answer:** FLIK Connect is coming soon. Join the waitlist and the FLIK team will contact you when it launches.
- **Text:** Can't find what you need? Talk to the FLIK team

## 9. Final call to action
<!-- html: Final CTA (centered): waitlist, not Get started, until launch -->

- **Heading:** Be first to split payments with FLIK.
- **Text:** FLIK Connect is coming soon. Join the waitlist and the FLIK team will walk you through it when it launches.
- **Button:** Join the waitlist
- **Button:** Explore Checkout
- **Label:** Pricing
- **Text:** 3% + VAT of the whole transaction, paid by the main merchant.
- **Link:** See pricing
