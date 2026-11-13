# Developers

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/developers/ (sections: `#how`, `#api`, `#keys`, `#integrations`, `#shopify`, `#woocommerce`, `#resources`, `#live`)
- **Page file:** `developers/index.html`. The integration steps (code panel) and the FAQ are lists in the page script.
- **Menu:** Developers › Documentation (`/developers`), API reference (`#api`), Developer resources (`#resources`), Shopify (`#shopify`), WooCommerce (`#woocommerce`). The homepage "View developer docs" button opens this page.
- **Source:** the Merchant API developer docs (https://ye2vctp5ki.ap-southeast-1.awsapprunner.com, first version 2026-11-05), checked 13 Nov 2026, and the engineering team's "Developers Pages Guide" (12 Nov 2026). docs.flik.co.id today shows only the older External Payment API (QRIS, HMAC-signed requests). Structure follows docs.stripe.com.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page (engineering)

- [x] **Public features (13 Nov):** the developer docs describe API keys, publishable keys, payout keys and SNAP partner records publicly, so the page does too.
- [ ] **Payout keys (13 Nov):** now in the key table, because the docs publish them (one-time code and IP allowlist on live). Agent keys and 2FA stay off the page. Confirm with engineering.
- [x] **Webhooks (13 Nov):** live in the API (signed events, retries for up to 72 hours, resend), per the docs. "Coming soon" removed. The dashboard tabs may still be unbuilt.
- [x] **Code panel (13 Nov):** real calls, shortened from the docs' Accept a payment guide: `POST /v1/oauth/token`, `POST /v1/checkout/sessions`, redirect to `session.url`, `checkout.session.completed`.
- [ ] **Docs address:** the "Read the docs" links point to https://ye2vctp5ki.ap-southeast-1.awsapprunner.com. Swap them for the final address (docs.flik.co.id?) when the docs move there.
- [x] **Scopes (13 Nov):** the docs list `payment_intents:write`, `payment_intents:read`, `checkout_sessions:write`, `events:read`, `webhook_endpoints:write`, `balance:read`, `payouts:read`, `payouts:write`. The example card keeps the dashboard labels.
- [ ] **Key values** in the example card are made up and masked; no real key prefixes are shown.
- [ ] **Shopify and WooCommerce steps** (create account, install plugin, switch on) are generic. Confirm, and add the Shopify App Store and WordPress plugin links when they're public.
- [ ] **"Sign in"** under Developer settings uses the site's sign-in action (a toast today). Point it to the merchant dashboard sign-in.

## Search results (SEO)

- **Page title:** Developers: Build with the FLIK API | FLIK
- **Description:** Build payments and shipping into your own systems with FLIK. OAuth API credentials, publishable keys, a separate Sandbox, and plugins for Shopify and WooCommerce.

## 1. Hero
<!-- html: Hero: text left, an example Developers settings card right -->

- **Small text above headline:** Developers
- **Headline (H1):** Build with FLIK.
  - **Grey part:** Payments and shipping, from your own systems.
- **Intro text:** Connect your store with a plugin, or build on the FLIK API with OAuth credentials. Build and test in Sandbox, then go live once FLIK has verified your business.
- **Button:** Get started
- **Button:** See how it works

*Example card (only change if needed):*

- Settings · Developers — Example — Sandbox / Live
- Client ID — masked — Sandbox / Live
- Client secret — Shown once — Hidden
- Publishable key — masked — Browser-safe
- Scopes — Payments · read, Payments · write
- Note (Sandbox): Sandbox keys work only in Sandbox. Nothing carries over to Live.
- Note (Live): Live keys need a verified FLIK account.

## 2. Guides
<!-- html: Guides: three columns of links -->

- **Column:** Get started — Set up your Sandbox (Separate credentials for testing) / Create API credentials (Client ID and secret) / Go live (Verify your business, then switch)
- **Column:** Accept payments — FLIK Checkout on Shopify (FLIK sets it up for you) / FLIK Checkout on WooCommerce (Connect your WordPress store) / Build your own checkout (A FLIK-hosted page, or your own)
- **Column:** API essentials — Authentication (OAuth client credentials) / Keys and scopes (Which key goes where) / SNAP for banks and QRIS (For SNAP-enabled merchants)

## 3. How it works
<!-- html: How it works: steps left, code panel right (illustrative, no endpoints) #how -->

- **Section heading:** How an API integration works.
  - **Grey part:** Your server holds the secret. FLIK hosts the payment page.
- **Step:** 1 — Get an access token — Exchange your client ID and secret on your server.
- **Step:** 2 — Create a checkout session — Your server sends the cart to FLIK.
- **Step:** 3 — Send the shopper to pay — FLIK hosts the page. The shopper pays by virtual account or QRIS.
- **Step:** 4 — Fulfil from the webhook — FLIK sends a signed event when the payment succeeds.
- **Note:** Shortened from the Accept a payment guide. Every request goes to api.flik.co.id, with test keys and with live keys.

## 4. The essentials
<!-- html: API essentials: concept cards + key table #api -->

- **Section heading:** The essentials.
  - **Grey part:** What every integration needs to know.
- **Card:** Authentication — OAuth 2.0 client credentials. Your server exchanges its client ID and secret for an access token that lasts one hour.
- **Card:** Sandbox and Live — Two separate modes, each with its own credentials and keys. Nothing carries over from Sandbox to Live.
- **Card:** Rolling a secret — When you roll a secret, the old one keeps working for 24 hours so you can switch without downtime. A secret is shown once and stored only as a hash.
- **Card:** Errors and limits — Every error has a stable code, a page that explains it and a request ID to share with FLIK support. Up to 100 requests a minute per API key.
- **Table columns:** Key — Where it lives — What it can do
- **Row:** API key — Your server — Client ID and secret for a one-hour access token. Scopes limit what it can do, such as checkout_sessions:write and payment_intents:read.
- **Row:** Publishable key — Your website or app — Not a secret. It only reads a checkout session from the browser, with that session's client secret.
- **Row:** Payout key — Your payout server — Only creates payouts to your registered bank account and reads your balance, so your checkout key can't move money out. A live payout key needs a one-time code and an IP allowlist.
- **Row:** SNAP partner — Your bank integration — BI SNAP format (ASPI SNAP v1.0.2): requests signed with your private key and checked against your RSA public key (2048 bits or more). Covers virtual accounts, QRIS, balance inquiry and transfer to your bank account.

## 5. Integrations
<!-- html: Integrations: Shopify, WooCommerce, no code #integrations -->

- **Section heading:** Or skip the code.
  - **Grey part:** We connect the platforms you already sell on.
- **Card:** Shopify — We connect your Shopify store to FLIK Checkout and Shipping for you. — 1. Create your FLIK account 2. Tell us your store 3. We set it up and switch on FLIK Checkout — Get started
- **Card:** WooCommerce — We connect your WordPress store and switch it to FLIK Checkout. — 1. Create your FLIK account 2. Tell us your store 3. We set it up and switch on FLIK Checkout — Get started
- **Card:** No code — Send payment links and invoices, and create shipments from the FLIK dashboard. Nothing to install. — 1. Create your FLIK account 2. Verify your business 3. Start from the dashboard — Get started

## 6. Developer resources
<!-- html: Developer resources #resources -->

- **Section heading:** Developer resources.
  - **Grey part:** Everything you need to build and test.
- **Item:** Sandbox — Build and test with Sandbox credentials. Sandbox values never touch real money. — Create an account
- **Item:** API keys — Create, roll and revoke your keys yourself on the API Keys page of the FLIK dashboard. Live keys need a verified account. — Sign in
- **Item:** API reference — Every endpoint, object and error code, with guides and examples in curl, Node.js, PHP and Go. — Read the docs
- **Item:** Webhooks — Signed events when a payment succeeds, fails or expires. If your server doesn't answer, FLIK retries for up to 72 hours. — Receive webhooks

## 7. From Sandbox to Live
<!-- html: Go live: three steps on the dark band #live -->

- **Section heading:** From Sandbox to Live.
  - **Grey part:** Three steps, no surprises.
- **Step:** Step 1 — Build in Sandbox — Use Sandbox credentials to build and test your integration end to end.
- **Step:** Step 2 — Verify your business — Complete business verification in the FLIK dashboard.
- **Step:** Step 3 — Go live — Once your account is activated, create Live keys on the API Keys page, add a Live webhook endpoint and run one small real payment.

## 8. FAQ
<!-- html: FAQ (single column) #faq-sec -->

- **Section heading:** Questions, answered.
- **Question:** Do I need to write code?
  - **Answer:** No. Use the Shopify or WooCommerce plugin, or work from the FLIK dashboard. The API is for teams that want to build their own flow.
- **Question:** Is there a test environment?
  - **Answer:** Yes. Sandbox has its own credentials and keys, and nothing carries over to Live. Build and test there first.
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
  - **Answer:** Verify your business in the FLIK dashboard. Once your account is activated, create Live keys on the API Keys page, add a Live webhook endpoint and run one small real payment.
- **Text:** Can't find what you need? Talk to the FLIK team

## 9. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Start building today.
- **Text:** Create your FLIK account and get Sandbox credentials, or talk to the FLIK team about your integration.
- **Button:** Get started
- **Button:** Talk to the FLIK team
