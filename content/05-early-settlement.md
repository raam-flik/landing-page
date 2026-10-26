# Early Settlement

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/payment/early-settlement/
- **Page file:** `payment/early-settlement/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

Early Settlement is new (Linear FLI-46). It is not in `product-facts.md` yet, so every fact below is a **placeholder** until the product team confirms it.

Since 24 Oct 2026 (AG) the page makes no timing, fee or eligibility promise: specific values are replaced with neutral wording ("sooner", "before your standard settlement date") or with visible `[[confirm: …]]` placeholders. Replace each placeholder once product confirms:

- [ ] `[[confirm: timing]]`: early settlement timing (diagram chip, FAQ).
- [ ] `[[T+?]]`: standard schedule per payment method (three diagram chips).
- [ ] `[[confirm: standard schedule]]`: the "On the standard schedule" list.
- [ ] `[[confirm: fee]]` and `[[confirm: fee structure and rate]]`: hero note, payout summary, At a glance, Pricing, FAQ.
- [ ] `[[confirm: eligible payment methods]]`: payment methods section and FAQ.
- [ ] `[[confirm: eligibility criteria]]`: FAQ "Who is it for?".
- [ ] `[[confirm: automatic option]]`: "Automatic, if you want", the settle-early window and At a glance.

- [ ] **Who it's for:** "Merchants who accept payments with FLIK, online or in store." Is it open to every merchant, or only selected ones (minimum sales, time on FLIK)?
- [ ] **Timing:** "Paid as soon as the same day" and the big "T+0" in the payment methods section. Is it same day, T+0 or T+1? Does it depend on the payment method?
- [ ] **Fee:** "One flat fee per early payout". Is it a flat fee, a percentage, or per day early? The page shows an **example rate of 1%** in the hero, the settle-early window and Pricing.
- [ ] **Standard settlement is free:** the Pricing section says so. Confirm.
- [ ] **Eligible transactions:** QRIS, e-wallets, virtual accounts and cards; COD settles after delivery. Is that right?
- [ ] **Where the money goes:** FLIK balance or a bank account?
- [ ] **Automatic early settlement** ("Settle early automatically, every day at 17:00 WIB"): does this option exist?
- [ ] **Standard schedule per payment method:** the "Same payment, two timelines" diagram shows QRIS and e-wallets T+1, virtual accounts T+2, cards T+3. Confirm the real schedule.
- [ ] **Standard schedule in the examples:** the hero assumes T+2 (sales from 19 Oct arrive 21 Oct). Which schedule does FLIK use today? (FLIK Payments shows a daily settlement engine.)
- [ ] "No collateral or loan paperwork" (At a glance).

## Search results (SEO)

- **Page title:** Get Paid Before Your Settlement Date | FLIK Early Settlement
- **Description:** FLIK Early Settlement pays out your sales before the standard settlement date, so cash from paid orders is ready when your business needs it. The fee is shown before you confirm.

## 1. Hero
<!-- html: Hero: text left, a balance window switching between the standard and the early schedule (example data) -->

- **Small text above headline:** FLIK Early Settlement
- **Headline (H1):** Sold today, paid sooner.
  - **Grey part:** Less waiting for settlement.
- **Intro text:** Turning paid orders into cash you can use sooner. You keep selling, FLIK speeds up the payout.
- **Button:** Talk to the FLIK team
- **Button:** See how it works
- **List item:** Paid before your standard settlement date
- **List item:** The fee is shown before you confirm
- **List item:** Not a loan, nothing to repay

*Example text inside the product mockup (only change if needed):*

- Balance
- Standard — Early settlement
- Available balance · Example
- Sales from 18 Oct, settled on schedule
- Before the early settlement fee [[confirm: fee]]
- Sales 18 Oct — QRIS and e-wallets — Rp12.400.000 — In your balance
- Sales 19 Oct — Cards and virtual accounts — Rp18.400.000 — On schedule / Settled early
- Sales 20 Oct — QRIS and e-wallets — Rp21.300.000 — On schedule / Settled early
- Sooner — than the standard schedule

## 2. Same payment, two timelines
<!-- html: Same payment, two timelines: one payment forks into the early and the standard lane (inspired by xendit.co early settlement; example schedule) #gap -->

- **Section heading:** Same payment, two timelines.
  - **Grey part:** With Early Settlement, a shopper's payment is yours to use before the standard settlement date.
- **Lane label:** With Early Settlement
- **Lane label:** Standard schedule
- **Heading:** With Early Settlement
- **List item:** Use the money before the standard settlement date.
- **List item:** Pay out to your FLIK balance or bank account.
- **List item:** See the fee before every payout.
- **Heading:** On the standard schedule
- **List item:** Money arrives on the standard schedule for each payment method. [[confirm: standard schedule]]
- **List item:** No early settlement fee on the standard schedule.
- **List item:** Settles automatically, with nothing to request.

*Example text inside the diagram (only change if needed):*

- Shopper pays — Rp3.000.000 — QRIS, e-wallet, virtual account or card
- Early settlement · [[timing]]
- QRIS and e-wallets · [[T+?]] — Virtual accounts · [[T+?]] — Cards · [[T+?]]
- FLIK balance — Waiting / Rp3.000.000 available
- Waiting — Early — Pending — On schedule

## 3. In control of every payout
<!-- html: In control: feature list drives highlights on one settle-early window (example data) #control -->

- **Section heading:** In control of every payout.
  - **Grey part:** Settle early when it helps, keep the standard schedule when it doesn't.
- **Heading:** Choose the amount
- **Text:** All your pending sales, or only what you need.
- **Heading:** Balance or bank account
- **Text:** Send it where you will spend it.
- **Heading:** Fee before you confirm
- **Text:** See exactly what you will receive.
- **Heading:** Automatic, if you want
- **Text:** Settle early without asking each time. [[confirm: automatic option]]
- **Heading:** Every payout on record
- **Text:** Each early payout is listed in your reports.

*Example text inside the product mockup (only change if needed):*

- Amount — Rp50.000.000 — Max Rp86.500.000
- Pay out to — FLIK balance — BCA ··· 4021
- Settle early automatically — [[confirm: automatic option]]
- Payout summary · Example
- Pending settlement — Rp86.500.000
- Amount — Rp50.000.000
- Early settlement fee — [[confirm: fee]]
- You receive — Rp50.000.000 minus the fee
- Recent early payouts — 17 Oct 2026 — Rp24.750.000 — Paid
- 13 Oct 2026 — Rp31.680.000 — Paid
- Confirm payout

## 4. Payment methods
<!-- html: Payment methods: a settlement ledger (the Shipping COD pattern, on white so partner logos keep their colours; example data) #settle-methods -->

- **Section heading:** Early, from every way Indonesia pays.
  - **Grey part:** QRIS, e-wallets, virtual accounts and cards can settle early [[confirm: eligible payment methods]]. Cash on delivery settles once the package is delivered.
- **Big number:** Sooner — than the standard settlement date
- **List item:** Pending sales from every payment method, in one balance.
- **List item:** Each early payout shows the original settlement date.
- **List item:** Use the money for stock, suppliers, ads or payroll.
- **Link:** Payment Methods

*Example text inside the product mockup (only change if needed):*

- Settled early · Example
- QRIS — Due 21 Oct — +Rp9.800.000 — Paid early
- GoPay — Due 21 Oct — +Rp4.250.000
- BCA virtual account — Due 22 Oct — +Rp6.120.000
- Credit and debit cards — Due 23 Oct — +Rp7.400.000
- OVO — Due 21 Oct — +Rp3.180.000
- Mandiri virtual account — Due 22 Oct — +Rp5.560.000
- DANA — Due 21 Oct — +Rp2.740.000
- Cash on delivery — Settles after delivery — Not early

## 5. At a glance
<!-- html: Early Settlement at a glance #glance -->

- **Section heading:** Early Settlement at a glance.
- **Heading:** Your cash flow
- **List item:** Paid before your standard settlement date
- **List item:** Settle all pending sales or part of them
- **List item:** Pay out to your FLIK balance or bank account
- **List item:** Settle once, or automatically [[confirm: automatic option]]
- **List item:** No early settlement fee on the standard schedule
- **Heading:** Payment methods
- **List item:** QRIS
- **List item:** E-wallets
- **List item:** Bank virtual accounts
- **List item:** Credit and debit cards
- **List item:** Cash on delivery settles after delivery
- **Heading:** Clear terms
- **List item:** A fee per early payout [[confirm: fee]]
- **List item:** The fee shows before you confirm
- **List item:** Not a loan: nothing to repay
- **List item:** No collateral or loan paperwork
- **List item:** Every payout listed in your reports

## 6. Pricing
<!-- html: Pricing (like stripe.com/payments/checkout "Know what you'll pay") #pricing -->

- **Label:** Pricing
- **Section heading:** Know what you'll pay.
  - **Grey part:** You only pay the early settlement fee when you settle early.
- **Heading:** Early settlement
- **Link:** Pricing details
- **Text:** A fee on each early payout, shown on screen before you confirm.
- **Price:** [[confirm: fee]] — per early payout
- **Heading:** Standard settlement
- **Text:** Sales you don't settle early arrive on the usual schedule, at no extra cost.
- **Price:** No extra fee — on the standard schedule

## 7. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** What is Early Settlement?
  - **Answer:** It pays out your sales before the standard settlement date, so money from paid orders is ready sooner.
- **Question:** Who is it for?
  - **Answer:** Merchants who accept payments with FLIK can ask the FLIK team, which confirms eligibility for each account. [[confirm: eligibility criteria]]
- **Question:** How fast do I get paid?
  - **Answer:** Before your standard settlement date. The exact timing is confirmed when Early Settlement is turned on for your account. [[confirm: timing]]
- **Question:** What does it cost?
  - **Answer:** A fee per early payout, shown before you confirm. [[confirm: fee structure and rate]] There is no early settlement fee on the standard schedule.
- **Question:** Is it a loan?
  - **Answer:** No. Early Settlement pays out money from sales you already made, so there is nothing to repay.
- **Question:** Which transactions can I settle early?
  - **Answer:** Paid transactions waiting for settlement, such as QRIS, e-wallets, virtual accounts and cards [[confirm: eligible payment methods]]. Cash on delivery orders settle after the package is delivered.
- **Question:** Can I keep the standard schedule?
  - **Answer:** Yes. Early Settlement is optional. Use it on the days you need it and keep the standard schedule the rest of the time.
- **Question:** How is it different from Merchant Cash Advance?
  - **Answer:** Early Settlement pays out money you already earned. Merchant Cash Advance funds your growth upfront and is settled from future sales.
- **Text:** Can't find what you need? Talk to the FLIK team

## 8. Resources
<!-- html: Resources: 3 cards -->

- **Small heading:** More from FLIK
- **Card:** Product — Sell with FLIK Checkout — A 30-second checkout. Every paid order flows into your balance. — Explore Checkout
- **Card:** Product — Fund your next stage — Need more than your pending sales? Merchant Cash Advance funds growth upfront. — Explore Funding
- **Card:** Guide — Cash flow between settlements — When to settle early, and when the standard schedule is enough. — Read more

## 9. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Get paid on your schedule.
- **Text:** Start with a conversation. The FLIK team will check your account and turn on early settlement in your dashboard.
- **Button:** Talk to the FLIK team
- **Button:** Create an account
- **Small text:** By continuing you agree to the Terms and Privacy Policy.
- **Label:** Pricing
- **Text:** A fee per early payout, shown before you confirm. No extra fee on the standard schedule.
- **Link:** See pricing
