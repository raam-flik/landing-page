# Pricing

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/pricing/ (tabs: `#payments`, `#shipping`, `#funding`)
- **Page file:** `pricing/index.html`
- **Linear:** FLI-50. The top bar's **Pricing** link and every "Pricing details" / "See pricing" link on the product pages open this page.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] **Rate card (AG / finance):** every value in `[brackets]` is a placeholder: the fee per payment method (QRIS, e-wallets, virtual accounts, cards), the VAT on each fee, the total, and the standard settlement period (T+?). Don't copy competitor rates.
- [ ] **Other live methods:** add a row for any other live method (for example PayLater or retail outlets).
- [ ] **FLIK Checkout fee:** the page shows "0–2% + VAT", the same as the Checkout page ("A success fee from 0–2% on each order that is paid and delivered"). FLI-50 says the Checkout fee isn't confirmed yet; confirm it or change both pages.
- [ ] **COD fee:** 3% + VAT of the COD amount (confirmed in the reference). Confirm "+ VAT".
- [ ] **FLIK Connect:** 3% of the whole transaction + VAT, paid by the main merchant; beneficiaries pay nothing (AG, 21 Oct 2026). Shown as "Coming soon".
- [ ] **VAT wording (finance):** "Every fee on this page excludes VAT. VAT is added at the prevailing rate and shown as its own line." The example uses 11%: Rp500 fee + Rp55 VAT = Rp555 (from the split-payment ledger example).
- [ ] **When fees are charged** (FAQ): "Payment fees are taken from each payment before it is settled to your balance. Shipping and COD fees are paid from your balance when you create the shipment." Confirm.
- [ ] **Shipping and Funding tabs** only repeat what the Shipping, Merchant Cash Advance and Early Settlement pages already say. Add their rate cards later.

## Search results (SEO)

- **Page title:** Pricing: Payment Fees, VAT and Settlement | FLIK
- **Description:** FLIK pricing: the fee for every payment method, VAT on each fee, standard settlement periods, and the Checkout, COD and FLIK Connect fees. Volume pricing on request.

## 1. Page header
<!-- html: Page header with product tabs -->

- **Small text above headline:** Pricing
- **Headline (H1):** Simple pricing, no surprises.
  - **Grey part:** Pay per transaction, and see the VAT on every fee.
- **Intro text:** Fees exclude VAT. VAT (PPN) is added on each fee at the prevailing rate, so the fee, the VAT and the total are always shown side by side.
- **Tab:** Payments
- **Tab:** Shipping
- **Tab:** Funding

## 2. Payments tab
<!-- html: Payments tab #payments -->

- **Heading:** Payment methods
- **Text:** The fee for each method, the VAT on that fee, and when the money is settled.
- **Label:** Rate card coming soon
- **Columns:** Method — Fee — VAT on fee — Total — Standard settlement
- **Row:** QRIS — Any bank or e-wallet app that scans QRIS — [x.x]% — [x.xx]% — [x.xx]% — T+[x]
- **Row:** E-wallets — GoPay, ShopeePay, OVO, DANA and others — [x.x]% — [x.xx]% — [x.xx]% — T+[x]
- **Row:** Bank virtual accounts — BCA, Mandiri, BNI, BRI, Permata, BSI — Rp[x.xxx] — Rp[xxx] — Rp[x.xxx] — T+[x]
- **Row:** Credit and debit cards — Visa, Mastercard and local debit cards — [x.x]% + Rp[x.xxx] — [x.xx]% + Rp[xxx] — [x.xx]% + Rp[x.xxx] — T+[x]
- **Heading:** Other fees
- **Text:** Each fee is charged with VAT on top.
- **Card:** FLIK Checkout — 0–2% + VAT — A success fee on each order that is paid and delivered. The rate depends on your payment methods and volume. No fee if the package isn't delivered. — Explore Checkout
- **Card:** Cash on delivery — 3% + VAT — Of the COD amount, paid upfront from your balance with the shipping fee. The COD amount reaches your balance after delivery. — COD Shipping
- **Card:** FLIK Connect (Coming soon) — 3% + VAT — Of the whole transaction amount, paid by the main merchant. Partners pay nothing to receive their split. — Explore FLIK Connect
- **Heading:** How VAT works
- **Text:** VAT (PPN) applies to FLIK's fees, not to your sales.
- **Text:** Every fee on this page excludes VAT. VAT is added at the prevailing rate and shown as its own line, on your invoice and in your dashboard. For example, at 11%:
- **Example:** Fee Rp500 + VAT 11% Rp55 = Total Rp555
- **Heading:** Need your money sooner?
- **Text:** Settlement follows the standard period above. You can also settle early.
- **Card:** Early Settlement — Get paid before your settlement date — Turn today's sales into cash today, for one flat fee per payout. — Explore Early Settlement
- **Card:** Volume pricing — Selling at volume? — Talk to the FLIK team about rates for your business. — Contact sales

## 3. Shipping tab
<!-- html: Shipping tab (summary of fees stated on the Shipping page) #shipping-fees -->

- **Heading:** Shipping
- **Text:** No registration fee. You pay per shipment from your FLIK balance.
- **Card:** Joining — Free — No registration fee and no monthly fee.
- **Card:** Shipments — Up to 40% less — Courier rates compared in one place, paid per shipment from your balance before it is created. — Check rates
- **Card:** Cash on delivery — 3% + VAT — Of the COD amount, paid upfront with the shipping fee. — COD Shipping

## 4. Funding tab
<!-- html: Funding tab (summary of terms stated on the funding pages) #funding-fees -->

- **Heading:** Funding
- **Text:** Clear terms, agreed before you sign.
- **Card:** Merchant Cash Advance — One fixed margin — Agreed upfront and never changes. No compounding interest and no hidden fees. Settled automatically from your sales.
- **Card:** Early Settlement — One flat fee — Per early payout, shown before you confirm. The standard settlement schedule stays free.

## 5. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** Do the fees include VAT?
  - **Answer:** No. Every fee on this page excludes VAT. VAT (PPN) is added to each fee at the prevailing rate and shown as its own line.
- **Question:** When are fees charged?
  - **Answer:** Payment fees are taken from each payment before it is settled to your balance. Shipping and COD fees are paid from your balance when you create the shipment.
- **Question:** What is the standard settlement period?
  - **Answer:** The time from a completed payment to the money in your FLIK balance. It depends on the payment method and is shown for each method above.
- **Question:** Can I get paid faster?
  - **Answer:** Yes. Early Settlement pays out your sales before the standard settlement date, for one flat fee per payout.
- **Question:** Who pays the FLIK Connect fee?
  - **Answer:** The main merchant: 3% of the whole transaction plus VAT. Partners pay nothing to receive their split.
- **Question:** Do you offer volume pricing?
  - **Answer:** Yes. Talk to the FLIK team about rates for your business.

## 6. Final call to action
<!-- html: Final CTA (centered): volume pricing -->

- **Heading:** Pricing for your volume.
- **Text:** Selling a lot, or need a custom setup? Talk to the FLIK team about rates for your business.
- **Button:** Contact sales
- **Button:** Get started
