# Developers

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/developers/ (sections: `#ways`, `#how`, `#sandbox`, `#api`, `#keys`, `#coming`, `#live`, `#integrations`, `#shopify`, `#woocommerce`)
- **Page file:** `developers/index.html`. The integration steps (code panel) and the FAQ are lists in the page script.
- **Menu:** Developers › Overview (`/developers`), Documentation (docs home), API reference (docs `/api/merchant-api`), Sandbox (`#sandbox`), Shopify (`#shopify`), WooCommerce (`#woocommerce`). The homepage "View developer docs" button opens this page.
- **Source:** the Merchant API developer docs (https://ye2vctp5ki.ap-southeast-1.awsapprunner.com, first version 2026-11-05), checked 16 Nov 2026. Structure follows docs.stripe.com.
- **Focus (AG, 16 Nov 2026):** the Merchant API and the ways to build that are coming, not the dashboard. No payment method names in the hero.
- **Docs links:** every "→ docs" link below opens the docs site in a new tab. The docs address is set once per page file, as `DOCS_URL` in the docs-links kit beside the menu. Other pages link to `/developers`, not to the docs.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page (engineering)

- [x] **Docs address (launch answers, 25 Nov 2026):** `DOCS_URL` is https://docs.flik.co.id on every page.

- [ ] **Docs address:** `DOCS_URL` (in every page file) points to the App Runner address. Swap it for the final address (docs.flik.co.id?) when the docs move there.
- [ ] **Coming soon (16 Nov):** embedded checkout, headless sessions, more ways to pay, shipping and promotions are on the docs' "Coming" page. The SDK is coming (AG, 16 Nov 2026); its one-line description is draft wording. Customizable elements isn't on the docs' "Coming" page: confirm it belongs here. The Payment page still shows Embedded checkout and Customizable elements without a "Coming soon" label.
- [ ] **Payout keys (13 Nov):** in the key table, because the docs publish them (one-time code and IP allowlist on live). Agent keys and 2FA stay off the page. Confirm with engineering.
- [ ] **Shopify and WooCommerce** cards say FLIK connects the store. Add the Shopify App Store and WordPress plugin links when they're public.
- [x] **Test mode (16 Nov):** per the docs, test keys work straight away, a simulator answers every test payment, and helper calls pay, expire or fail one. The menu calls this section "Sandbox".
- [x] **Webhooks (13 Nov):** live in the API (signed events, retries for up to 72 hours, resend), per the docs.
- [x] **Code panel (13 Nov):** real calls, shortened from the docs' Accept a payment guide.
- [x] **Scopes (13 Nov):** the docs list `payment_intents:write`, `payment_intents:read`, `checkout_sessions:write`, `events:read`, `webhook_endpoints:write`, `balance:read`, `payouts:read`, `payouts:write`.

## Search results (SEO)

- **Page title:** Developers: Build with the FLIK API | FLIK
- **Description:** Accept payments on your own site or app with the FLIK Merchant API. OAuth credentials, signed webhooks, a full test mode, and help connecting Shopify and WooCommerce.

## 1. Hero
<!-- html: Hero: text left, an example test payment (request, response, event, webhook) right -->

- **Small text above headline:** Developers
- **Headline (H1):** See it work before you write a line.
  - **Grey part:** Payments in your own site or app, by API.
- **Intro text:** Create a checkout session, watch the event arrive, then build your own.
- **Button:** Get test keys
- **Button:** Read the docs → docs home

*Example panel (only change if needed):*

- A test payment, end to end — Example · test mode
- Request — `POST /v1/checkout/sessions`
- Response — a test session: `id` starting `cs_t-`, `livemode` false, a `url`
- Event — `checkout.session.completed`
- Webhook — Your endpoint answered 200
- Note: Shortened from the Accept a payment guide. → docs, Accept a payment

## 2. Two ways to build
<!-- html: Two ways to build: checkout session or payment intent #ways -->

- **Section heading:** Two ways to take a payment.
  - **Grey part:** Same keys, same webhooks, same test mode.
- **Card:** Checkout session (Recommended) — You send the cart. FLIK hosts the payment page, and your shopper can try again there if a payment expires. — 1. The least code 2. No payment page to maintain 3. Your shopper picks how to pay — Accept a payment → docs, Accept a payment
- **Card:** Payment intent — You build the payment step into your own page or app, and show the payment details yourself. — 1. Your page, your design 2. You pick the payment method 3. You decide what happens when a payment expires — Accept a payment on your own page → docs, Accept a payment on your own page
- **Text:** Start with one and add the other later. Compare the two → docs, Choose how to accept payments

## 3. How it works
<!-- html: How it works: steps left, code panel right #how -->

- **Section heading:** How an API integration works.
  - **Grey part:** Your server holds the secret. FLIK hosts the payment page.
- **Step:** 1 — Get an access token — Exchange your client ID and secret on your server. → docs, Get API keys and a token
- **Step:** 2 — Create a checkout session — Your server sends the cart to FLIK. → docs, Checkout sessions
- **Step:** 3 — Send the shopper to pay — FLIK hosts the page. Your shopper picks how to pay. → docs, Accept a payment
- **Step:** 4 — Fulfil from the webhook — FLIK sends a signed event when the payment succeeds. → docs, Receive and verify webhooks
- **Note:** Every request goes to api.flik.co.id, with test keys and with live keys.

## 4. Test mode
<!-- html: Test mode: test keys and simulated payments (menu: Sandbox) #sandbox -->

- **Section heading:** Break things safely.
  - **Grey part:** Test keys, simulated payments, no real money.
- **Item:** Test keys that work straight away — Create them yourself in the FLIK dashboard. A test key never touches a live payment, and a live key never touches a test one.
- **Item:** Every outcome, on demand — Pay, expire or fail a test payment with one call. Fixed test amounts give you a decline.
- **Item:** The same events as live — Test payments send the same signed events, to your test webhook endpoints only.
- **Item:** Nothing reaches a bank — A simulator answers every test payment. No payment provider is called.
- **Link:** Read the test mode guide → docs, Test mode

## 5. The essentials
<!-- html: API essentials: concept cards + key table #api -->

- **Section heading:** The essentials.
  - **Grey part:** What every integration needs to know.
- **Card:** Authentication — OAuth 2.0 client credentials. Your server exchanges its client ID and secret for a one-hour access token. Roll a secret and the old one keeps working for 24 hours. — Authentication and keys → docs
- **Card:** Test and live — Two separate modes, each with its own keys, webhook endpoints and events. Nothing carries over from test to live. — Test mode and live mode → docs
- **Card:** Errors and limits — Every error has a stable code, a page that explains it and a request ID to share with FLIK support. Up to 100 requests a minute per API key. — Error index → docs
- **Card:** Made for AI coding tools — Every docs page is also plain Markdown, with rules that keep generated code correct. — Docs for AI tools → docs, `/llms.txt`
- **Table columns:** Key — Where it lives — What it can do
- **Row:** API key — Your server — Client ID and secret for a one-hour access token. Scopes limit what it can do, such as checkout_sessions:write and payment_intents:read.
- **Row:** Publishable key — Your website or app — Not a secret. It only reads a checkout session from the browser, with that session's client secret.
- **Row:** Payout key — Your payout server — Only creates payouts to your registered bank account and reads your balance, so your checkout key can't move money out. A live payout key needs a one-time code and an IP allowlist. Payouts → docs
- **Row:** SNAP partner — Your bank integration — BI SNAP format (ASPI SNAP v1.0.2): requests signed with your private key and checked against your RSA public key (2048 bits or more). Covers virtual accounts, QRIS, balance inquiry and transfer to your bank account. BI SNAP → docs
- **Link:** See the full API reference → docs, `/api/merchant-api`

## 6. Coming soon
<!-- html: Coming soon: more ways to build #coming -->

- **Section heading:** Coming soon.
  - **Grey part:** More ways to build, on the same API.
- **Item:** Embedded checkout — The FLIK checkout inside your own page.
- **Item:** Customizable elements — Payment components for a checkout in your own design.
- **Item:** Headless sessions — A checkout run entirely through the API, for AI agents and point-of-sale systems.
- **Item:** SDK — Client libraries for the Merchant API.
- **Item:** More ways to pay — E-wallets, cards and cash on delivery.
- **Item:** Shipping and promotions — Delivery options and discount codes on a checkout session.
- **Text:** None of these is available yet, so don't build against them. See what's coming → docs, Coming to the Merchant API

## 7. Go live
<!-- html: Go live: three steps on the dark band #live -->

- **Section heading:** Go live when your tests say so.
  - **Grey part:** Three steps, then one small real payment.
- **Step:** Step 1 — Pass your own tests — Run a paid, a failed, an expired and a late payment in test mode, plus a duplicate webhook.
- **Step:** Step 2 — Verify your business — Complete account verification in the FLIK dashboard. Live keys need an activated account.
- **Step:** Step 3 — Switch your keys — Create live keys and a live webhook endpoint, swap them into your configuration and run one small real payment.
- **Link:** Open the go-live checklist → docs, Go-live checklist

## 8. Not building?
<!-- html: Integrations: Shopify, WooCommerce, no code #integrations -->

- **Section heading:** Not building?
  - **Grey part:** We connect the platforms you already sell on.
- **Card:** Shopify — We connect your Shopify store to FLIK Checkout and Shipping for you. — Get started
- **Card:** WooCommerce — We connect your WordPress store and switch it to FLIK Checkout. — Get started
- **Card:** No code — Send payment links and invoices, and create shipments from the FLIK dashboard. Nothing to install. — Get started

## 9. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** Do I need to write code?
  - **Answer:** No. We connect your Shopify or WooCommerce store for you, or you can work from the FLIK dashboard. The API is for teams that want to build their own flow.
- **Question:** Is there a test environment?
  - **Answer:** Yes. Test mode has its own keys, and test keys work straight away. A simulator answers every test payment, so no real money moves.
- **Question:** How long does an access token last?
  - **Answer:** One hour. Your server requests a new one with its client ID and secret when it expires.
- **Question:** What happens when I roll a secret?
  - **Answer:** You get a new secret, shown once. The old one keeps working for 24 hours, so you can update your server without downtime.
- **Question:** Can I put a key in my website code?
  - **Answer:** Only a publishable key. It only reads a checkout session from the browser. Keep your client secret on your server.
- **Question:** Which payment methods does the API take?
  - **Answer:** Virtual accounts at BCA, Mandiri, BNI, BRI and Permata, and QRIS. BCA and QRIS are on for every account; the other banks are switched on per account. E-wallets, cards and COD are coming to the API.
- **Question:** Do you support webhooks?
  - **Answer:** Yes. FLIK sends signed events to your webhook endpoint when a payment succeeds, fails or expires, and retries for up to 72 hours if your server doesn't answer. You can also resend an event.
- **Question:** What is SNAP?
  - **Answer:** Bank Indonesia's open API standard for payments. FLIK takes virtual account and QRIS payments in the SNAP format too, on the same payment engine. You set up your SNAP partner record on the BI SNAP page of the dashboard.
- **Question:** How do I go live?
  - **Answer:** Verify your business in the FLIK dashboard. Once your account is activated, create live keys on the API Keys page, add a live webhook endpoint and run one small real payment.
- **Question:** Is there an SDK?
  - **Answer:** Not yet. An SDK is coming. Today the docs give examples in curl, Node.js, PHP and Go.
- **Text:** Can't find what you need? Talk to the FLIK team — Integration support → docs, Support

## 10. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Start building today.
- **Text:** Create your FLIK account and get test keys, or talk to the FLIK team about your integration.
- **Button:** Get started
- **Button:** Talk to the FLIK team
