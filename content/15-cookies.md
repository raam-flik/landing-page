# Cookie Policy

- **Live page:** not deployed yet. Draft for legal review, not in effect.
- **Page file:** `legal/cookies/index.html`

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

Markers in the text: `[[…]]` is a fact FLIK still has to confirm (it shows highlighted on the page). `[WC-n]` is a question for counsel. `†` is a legal article reference not yet checked against the law's text. Remove all three before publishing.

## Things to confirm on this page


### Facts for AG to confirm

- [ ] **W-1**: Effective date and version number for each page (shown as “Last updated”).
- [ ] **W-8b**: Production website host and where its server logs are kept. The prototype runs on Vercel; production is not decided here.
- [ ] **W-10**: Analytics tools in the merchant dashboard (the internal tracking plan says GA4 is already there), and the dashboard's own cookies.
- [x] **W-21**: Closed (AG, 24 Oct 2026): the banner shows on first visit. The choice is stored in `localStorage` under `flik_consent` (`{v, analytics, marketing, ts}`) until the visitor changes it or clears browser data. FLIK sets no cookies today. The footer's Cookie settings button reopens the banner.
- [ ] **W-22**: GA4 (not added yet; loads only after Analytics consent) measurement ID, cookie names and durations once the GA4 tag is configured (Linear FLI-38).
- [ ] **W-27**: Marketing tags planned for the website (for example ad platform pixels): provider, purpose, cookie names and durations. None are live.
- [x] **W-28**: Closed (AG, 24 Oct 2026): the hotlinked third-party photo is being removed from the Merchant Cash Advance page, so it's dropped from this policy and the Privacy Policy.
- [ ] **W-50**: The In-Store Payment page loads three.js (r128) from cdnjs.cloudflare.com. Self-host it next to the page (MIT licence) to drop this third-party request, then remove it from the Cookie and Privacy policies.
- [ ] **W-51**: Contact sales opens a Calendly booking page (calendly.com/desmount-i7g/flikintro). Confirm it is a FLIK company account, and check Calendly's data processing terms.

## Search results (SEO)

- **Page title:** Cookie Policy | FLIK
- **Description:** What cookies and similar technologies flik.co.id uses today, and how to change your choice. Draft for legal review.
- **Robots:** noindex while the page is a draft

## Draft notice and title
<!-- html: Draft notice -->

- **Notice:** **Draft for legal review. Not yet in effect.** Not legal advice. [[…]] marks a fact FLIK still has to confirm. [WC-n] marks a question for counsel. † marks a legal article reference not yet checked against the law's text.
- **Small text above headline:** Legal
- **Headline (H1):** Cookie Policy
- **Intro text:** What cookies and similar technologies flik.co.id uses, why, and how to change your choice.
- **Text:** Last updated: [[W-1: date]] · Version [[W-1: version]]
- **Contents heading:** On this page

## 1. About this policy
<!-- html: 1. About this policy -->

- **Text:** Cookies are small files a website stores in your browser. Similar technologies include browser storage (such as `localStorage`) and requests to other companies' servers, which share your IP address with them.
- **Text:** This policy covers flik.co.id. The merchant dashboard has its own cookies: [[W-10: dashboard analytics and cookies]]. How we handle personal data in general is in our [Privacy Policy](./privacy/). This policy is from **PT Flik Teknologi Indonesia** (“**FLIK**”, “**we**”).
- **Text:** **Language.** This page is in English for now. A Bahasa Indonesia version will follow. If the two versions differ, the Bahasa Indonesia version prevails.

## 2. What the website uses today
<!-- html: 2. What the website uses today -->

- **Text:** As of [[W-1: date]], the website:
- **List item:** **sets no cookies of its own;**
- **List item:** **stores your cookie choice in browser storage** (`localStorage`, under the key `flik_consent`). It holds only your Analytics and Marketing choices, a version number and the time you chose. It isn't a cookie, and it isn't sent to us or anyone else;
- **List item:** **serves its fonts from flik.co.id itself.** The fonts (Inter and JetBrains Mono, under the SIL Open Font License) are self-hosted, so no font request goes to Google or any other third party;
- **List item:** **loads one script from a third party.** The In-Store Payment page loads three.js, a 3D graphics library, from cdnjs.cloudflare.com (Cloudflare's public network). Your browser requests it directly, so Cloudflare receives your IP address and browser details. The request sets no cookies. [[W-50: self-host three.js, or keep this row]];
- **List item:** **loads nothing from Calendly until you click.** Contact sales opens our call-booking page on calendly.com in a new tab. There, Calendly's own cookies and privacy policy apply;
- **List item:** **keeps a `dataLayer` list in the open page.** It records only your cookie choice. It holds no personal data, is cleared when you leave, and isn't sent anywhere. It's there for a future Google Analytics (GA4) tag, which isn't added yet and will load only after you turn on Analytics.
- **Text:** Our website host also receives your IP address and browser details when you load a page, in its server logs. [[W-8b: website host and log location]]

## 3. Categories we use
<!-- html: 3. Categories we use -->

- **Table columns:** Category — What it does — Default
- **Table row:** Strictly necessary — Makes the website work and remembers your cookie choice — Always on
- **Table row:** Analytics — Helps us understand how visitors use the website, so we can improve it — Off until you consent
- **Table row:** Marketing — Measures our ads and shows relevant FLIK ads on other sites — Off until you consent
- **Text:** We don't put names, phone numbers, email addresses or other personal details into analytics or marketing data.

## 4. Cookie table
<!-- html: 4. Cookie table -->

- **Text:** Rows marked “not active yet” are planned. We'll update this table before any of them is switched on.
- **Table columns:** Name — Provider — Purpose — Category — Duration
- **Table row:** `flik_consent` (browser storage, not a cookie) — FLIK — Stores your choice: Analytics and Marketing on or off, and when you chose — Strictly necessary — Until you change your choice or clear your browser data
- **Table row:** `flik_motion_paused` (browser storage, not a cookie) — FLIK — Remembers that you paused page animations — Strictly necessary — Until you turn animations back on or clear your browser data
- **Table row:** `three.min.js` request (not a cookie) — Cloudflare (cdnjs) — Loads the 3D graphics library for the device model on the In-Store Payment page. Cloudflare receives your IP address and browser details — Strictly necessary — One request each time that page loads. Nothing is stored
- **Table row:** `_ga` (not active yet) — Google (GA4) — Tells visitors apart for website statistics — Analytics — [[W-22: duration set in GA4]]
- **Table row:** `_ga_`[[W-22: GA4 measurement ID]] (not active yet) — Google (GA4) — Keeps track of a visit for website statistics — Analytics — [[W-22: duration set in GA4]]
- **Table row:** [[W-27: marketing tag cookies, if any]] (not active yet) — [[W-27: provider]] — [[W-27: purpose]] — Marketing — [[W-27: duration]]

## 5. Your choices
<!-- html: 5. Your choices -->

- **List item:** **On your first visit,** a banner asks for your choice. Analytics and Marketing stay off until you turn them on.
- **List item:** **Change your choice at any time** with the **Cookie settings** button in the website footer. It reopens the banner, where you can turn Analytics and Marketing on or off. Strictly necessary items stay on.
- **List item:** **Withdrawing consent** stops new analytics or marketing data from being collected. It doesn't undo what was collected before.
- **List item:** **Your browser** can also block or delete cookies and browser storage. If you clear or block browser storage, we can't remember your choice, and the banner asks again.

## 6. Transfers outside Indonesia
<!-- html: 6. Transfers outside Indonesia -->

- **Text:** Google (Analytics, once added and only if you consent), Cloudflare (the script in section 2), Calendly (if you open it) and other providers may process data outside Indonesia. We handle these transfers as described in our [Privacy Policy](./privacy/), section 7.

## 7. Changes and contact
<!-- html: 7. Changes and contact -->

- **Text:** We'll update this policy when we add or remove a cookie, tag or provider, and change the “Last updated” date.
- **Text:** Privacy questions: email privacy@flik.co.id. General support: support@flik.co.id or WhatsApp +62 812-9201-2668, Monday–Friday, 09:00–18:00 WIB. PT Flik Teknologi Indonesia, Cibis Nine, Lantai 15, Jl. Raya Cilandak KKO, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560.

