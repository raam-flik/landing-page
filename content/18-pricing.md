# Pricing

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/pricing/ (tabs: `#payments`, `#shipping`, `#funding`)
- **Page file:** `pricing/index.html`
- **Linear:** FLI-50. The top bar's **Pricing** link and every "Pricing details" / "See pricing" link on the product pages open this page.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Debit cards and GPN rate (AG, 12 Nov 2026):** AG asked for debit cards and GPN to be priced separately from Visa and Mastercard credit cards. The row shows [rate] until AG or finance gives the fee.
- [x] **Rate card (AG, 12 Nov 2026):** QRIS 0.7% including PPN, and 0% on payments of Rp100.000 or less (BI rule from 1 Oct 2026). E-wallets from 1.5% + PPN. VA Rp4.000 + PPN. Cards 2.8% + Rp2.000 + PPN. PPN at 11%. No settlement column.
- [ ] **Other live methods:** add a row for any other live method (for example PayLater or retail outlets).
- [x] **FLIK Checkout fee:** 0–2% + PPN stays, positioned as the fee for the whole checkout, not just payment acceptance (AG, 12 Nov 2026). "No fee if the package isn't delivered" was removed: the fee is earned on success and isn't refunded, as on the Checkout page.
- [x] **COD fee:** 3% + PPN, deducted when the COD amount is credited after delivery, never upfront (AG, 12 Nov 2026).
- [x] **FLIK Connect (AG, 12 Nov 2026):** 0.5% of the amount split to partners, max Rp10.000 per transaction, + PPN, paid by the main merchant; partners pay nothing. Was 3% of the whole transaction (AG, 21 Oct). Shown as "Coming soon".
- [ ] **PPN wording (finance):** "Every fee on this page excludes PPN. PPN is added at the prevailing rate and shown as its own line." The example uses 11%: Rp500 fee + Rp55 PPN = Rp555 (from the split-payment ledger example).
- [x] **When fees are charged** (FAQ, fixed 12 Nov 2026: the COD fee comes off at delivery, not at booking): "Payment fees are taken from each payment before it is settled to your balance. Shipping fees are paid from your balance when you create the shipment. The COD fee is deducted when the COD amount reaches your balance after delivery." Confirm.
- [x] **Shipping and Funding tabs (AG, 12 Nov 2026):** Shipping shows "up to 50% off published courier rates", with no per-courier rate card. Funding shows no rates: the MCA fee is set per offer. Early Settlement is a Payments product, so it is only on the Payments tab.

- [x] **Hero ribbon (AG, 13 Nov 2026):** the page looked quiet, so the brand ribbon from the earlier homepage hero (orange → magenta → violet → cyan, animated lines) now sits top right in the hero. Same kit on Help. Fraud Detection and In-Store Payment use the particle field instead.

## Search results (SEO)

- **Page title:** Pricing: Payment Fees, PPN and Settlement | FLIK
- **Description:** FLIK pricing: the fee for every payment method, PPN on each fee, and the Checkout, COD and FLIK Connect fees. Volume pricing on request.

## 1. Page header
<!-- html: Page header with product tabs -->

- **Small text above headline:** Pricing
- **Headline (H1):** Simple pricing, no surprises.
  - **Grey part:** Pay per transaction, and see the PPN on every fee.
- **Intro text:** Fees exclude PPN. PPN is added on each fee at the prevailing rate, so the fee, the PPN and the total are always shown side by side.
- **Tab:** Payments
- **Tab:** Shipping
- **Tab:** Funding

## 2. Payments tab
<!-- html: Payments tab #payments -->

- **Section heading:** Payment methods.
  - **Grey part:** The fee for each method, the PPN on that fee, and the total.
- **Columns:** Method — Fee — PPN on fee — Total
- **Row:** QRIS — Any bank or e-wallet app that scans QRIS — 0% / 0.63% — 0% / 0.07% — 0% / 0.7%
  - **Note in the row:** 0% on payments up to Rp100.000. Above that, 0.7% with PPN included.
- **Row:** E-wallets — GoPay, ShopeePay, OVO, DANA and others — From 1.5% — From 0.165% — From 1.665%
- **Row:** Bank virtual accounts — BCA, Mandiri, BNI, BRI, Permata, BSI — Rp4.000 — Rp440 — Rp4.440
- **Row:** Credit cards — Visa and Mastercard — 2.8% + Rp2.000 — 0.308% + Rp220 — 3.108% + Rp2.220
- **Row:** Debit cards and GPN — Local debit cards on the GPN network — [rate] — [PPN] — [total]
- **Section heading:** Other fees.
  - **Grey part:** Each fee is charged with PPN on top.
- **Card:** FLIK Checkout — 0–2% + PPN — A success fee on each successful payment, for the whole checkout: shopper trust, higher conversion, and shipping, promotions and loyalty in one place. The rate depends on your payment methods and volume. — Explore Checkout
- **Card:** Cash on delivery — 3% + PPN — Of the COD amount. It's deducted when the COD amount reaches your balance after delivery, so you never pay it upfront. — COD Shipping
- **Card:** FLIK Connect (Coming soon) — 0.5% + PPN — Of the amount split to partners, max Rp10.000 per transaction, paid by the main merchant. Partners pay nothing to receive their split. — Explore FLIK Connect
- **Section heading:** How PPN works.
  - **Grey part:** PPN applies to FLIK's fees, not to your sales.
- **Text:** Every fee on this page excludes PPN. PPN is added at the prevailing rate and shown as its own line, on your invoice and in your dashboard. For example, at 11%:
- **Example:** Fee Rp500 + PPN 11% Rp55 = Total Rp555
- **Section heading:** Need your money sooner?
  - **Grey part:** Money reaches your FLIK balance once the order is completed.
- **Card:** Early Settlement — Get paid before your settlement date — Turn pending sales into cash sooner, for 0.2% (non-card) or 0.3% (card) + PPN. — Explore Early Settlement
- **Card:** Volume pricing — Selling at volume? — Talk to the FLIK team about rates for your business. — Contact sales

## 3. Shipping tab
<!-- html: Shipping tab (summary of fees stated on the Shipping page) #shipping-fees -->

- **Section heading:** Shipping.
  - **Grey part:** No registration fee. You pay per shipment from your FLIK balance.
- **Card:** Joining — Free — No registration fee and no monthly fee.
- **Card:** Shipments — Up to 50% off — Off published courier rates. Rates compared in one place, paid per shipment from your balance before it is created. — Check rates
- **Card:** Cash on delivery — 3% + PPN — Of the COD amount, deducted after delivery. Nothing upfront. — COD Shipping

## 4. Funding tab
<!-- html: Funding tab (summary of terms stated on the funding pages) #funding-fees -->

- **Section heading:** Funding.
  - **Grey part:** Clear terms, agreed before you sign.
- **Card:** Merchant Cash Advance — One fixed margin — Agreed upfront and never changes. No compounding interest and no hidden fees. Settled automatically from your sales.

## 5. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** Do the fees include PPN?
  - **Answer:** No. Every fee on this page excludes PPN. PPN is added to each fee at the prevailing rate and shown as its own line.
- **Question:** When are fees charged?
  - **Answer:** Payment fees are taken from each payment before it is settled to your balance. Shipping fees are paid from your balance when you create the shipment. The COD fee is deducted when the COD amount reaches your balance after delivery.
- **Question:** When does the money reach my balance?
  - **Answer:** Once the order is completed and FLIK has received the funds. Need it sooner? Use Early Settlement.
- **Question:** Can I get paid faster?
  - **Answer:** Yes. Early Settlement pays out your sales before the standard settlement date, for 0.2% of each non-card payment or 0.3% of each card payment, plus PPN.
- **Question:** Who pays the FLIK Connect fee?
  - **Answer:** The main merchant: 0.5% of the amount split to partners, max Rp10.000 per transaction, plus PPN. Partners pay nothing to receive their split.
- **Question:** Do you offer volume pricing?
  - **Answer:** Yes. Talk to the FLIK team about rates for your business.

## 6. Final call to action
<!-- html: Final CTA (centered): volume pricing -->

- **Heading:** Pricing for your volume.
- **Text:** Selling a lot, or need a custom setup? Talk to the FLIK team about rates for your business.
- **Button:** Contact sales
- **Button:** Get started
