# Developers

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/developers/ (sections: `#how`, `#api`, `#keys`, `#integrations`, `#shopify`, `#woocommerce`, `#resources`, `#live`)
- **Page file:** `developers/index.html`. The integration steps (code panel) and the FAQ are lists in the page script.
- **Menu:** Developers › Documentation (`/developers`), API reference (`#api`), Developer resources (`#resources`), Shopify (`#shopify`), WooCommerce (`#woocommerce`). The homepage "View developer docs" button opens this page.
- **Source:** the engineering team's "Developers Pages Guide" (Merchant dashboard v2, Settings › Developers), 12 Nov 2026. That is an internal design review, not an API reference, so the page only explains concepts. Structure follows docs.stripe.com (stripe.com/developers no longer exists).

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page (engineering)

- [ ] **Built only:** the page shows API credentials (built), publishable keys and SNAP keys (built, interim screen design). Confirm all three can be public.
- [ ] **Left out on purpose:** payouts keys and AI-agent keys, IP allowlists, and anything about 2FA or finance codes. They are interim, switched on per merchant, or still being decided. Add them only when engineering says so.
- [ ] **Webhooks** are shown as "Coming soon" (the Webhooks, Events and Logs tabs aren't built).
- [ ] **No endpoints:** the code panel is illustrative. It shows the standard OAuth 2.0 client-credentials fields and response (`expires_in: 3600`, from "tokens last 1 hour") but no URLs, paths or field names. Add real examples once there is a public API reference (design-system rule: never show API calls that don't exist in the docs).
- [ ] **API reference** says "Shared on request" and "Request access" opens Contact sales. Change this when public docs exist, and add the link.
- [ ] **Scope names** are written in words (payments read, payments write), not as code strings, because the real scope strings aren't confirmed.
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
- Note (Live): Live keys are activated by FLIK after your business is verified.

## 2. Guides
<!-- html: Guides: three columns of links -->

- **Column:** Get started — Set up your Sandbox (Separate credentials for testing) / Create API credentials (Client ID and secret) / Go live (Verify your business, then switch)
- **Column:** Accept payments — FLIK Checkout on Shopify (FLIK sets it up for you) / FLIK Checkout on WooCommerce (Connect your WordPress store) / Build your own checkout (Server credentials and a publishable key)
- **Column:** API essentials — Authentication (OAuth client credentials) / Keys and scopes (Which key goes where) / SNAP for banks and QRIS (For SNAP-enabled merchants)

## 3. How it works
<!-- html: How it works: steps left, code panel right (illustrative, no endpoints) #how -->

- **Section heading:** How an API integration works.
  - **Grey part:** Your server holds the secret. Your website only ever sees a publishable key.
- **Step:** 1 — Get an access token — Exchange your client ID and secret on your server.
- **Step:** 2 — Create the payment — Your server creates a payment session for the order.
- **Step:** 3 — Finish in the browser — Your website starts the payment with a publishable key.
- **Step:** 4 — Confirm the result — Check the payment from your server. Webhooks are coming soon.
- **Note:** Illustrative. Endpoint paths and fields are in the API reference, shared with you when you start building.

## 4. The essentials
<!-- html: API essentials: concept cards + key table #api -->

- **Section heading:** The essentials.
  - **Grey part:** What every integration needs to know.
- **Card:** Authentication — OAuth 2.0 client credentials. Your server exchanges its client ID and secret for an access token that lasts one hour.
- **Card:** Sandbox and Live — Two separate modes, each with its own credentials and keys. Nothing carries over from Sandbox to Live.
- **Card:** Rolling a secret — When you roll a secret, the old one keeps working for 24 hours so you can switch without downtime. A secret is shown once and stored only as a hash.
- **Card:** Errors — A failed request returns an error code and a request ID. Share the request ID with FLIK support for a faster answer.
- **Table columns:** Key — Where it lives — What it can do
- **Row:** API credentials — Your server — Client ID and secret for an access token. Scopes: payments read and write.
- **Row:** Publishable key — Your website or app — Safe in browser and mobile code. It can only start a payment for a session your server already created. Up to 2 active per mode.
- **Row:** SNAP key — Your bank integration — For SNAP-enabled merchants: requests signed with your private key and checked against your registered RSA-2048 public key. Covers virtual accounts, QRIS, balance inquiry and transfer to bank.

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
- **Item:** Developer settings — Create, roll and revoke API credentials and publishable keys in Settings, Developers in the FLIK dashboard. — Sign in
- **Item:** API reference (Shared on request) — Endpoints, objects and examples. The FLIK team shares it when you start building. — Request access
- **Item:** Webhooks (Coming soon) — Get notified about payments as they happen. Until then, check a payment's status from your server.

## 7. From Sandbox to Live
<!-- html: Go live: three steps on the dark band #live -->

- **Section heading:** From Sandbox to Live.
  - **Grey part:** Three steps, no surprises.
- **Step:** Step 1 — Build in Sandbox — Use Sandbox credentials to build and test your integration end to end.
- **Step:** Step 2 — Verify your business — Complete business verification in the FLIK dashboard.
- **Step:** Step 3 — FLIK activates Live — Once you're verified, FLIK activates your Live keys. Create Live credentials and switch your server over.

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
  - **Answer:** Only a publishable key. It can only start a payment for a session your server created. Keep your client secret on your server.
- **Question:** Do you support webhooks?
  - **Answer:** Webhooks are coming soon. Until then, check a payment's status from your server before you fulfil the order.
- **Question:** What is SNAP?
  - **Answer:** The Indonesian open API standard for payments. SNAP-enabled merchants sign their requests with their own private key for virtual accounts, QRIS, balance inquiry and transfer to bank.
- **Question:** How do I go live?
  - **Answer:** Verify your business in the FLIK dashboard. Once FLIK has verified it, FLIK activates your Live keys.
- **Text:** Can't find what you need? Talk to the FLIK team

## 9. Final call to action
<!-- html: Final CTA (centered) -->

- **Heading:** Start building today.
- **Text:** Create your FLIK account and get Sandbox credentials, or talk to the FLIK team about your integration.
- **Button:** Get started
- **Button:** Talk to the FLIK team
