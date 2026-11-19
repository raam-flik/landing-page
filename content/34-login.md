# Sign in (header → Sign in)

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/login/
- **Page file:** `login/index.html`, built from the Book a demo page kit (18 Nov 2026). Layout after dashboard.stripe.com/login: logo only, one centred card on a soft brand-ribbon glow, "New to FLIK?" link under the card, legal links in the footer. Components reused: header logo, form fields (`.fld`), primary button, the demo card, the success tick.
- Every "Sign in" button on the site opens this page. Signing in opens the v4 merchant dashboard (flik-dashboard.vercel.app) with the account saved on that browser.

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [ ] Sign-in methods: email and password only. Stripe also offers Google, passkey and SSO; left out until FLIK confirms which ones the merchant dashboard supports.
- [ ] Where the live page sends the merchant after signing in (today: the v4 dashboard prototype on flik-dashboard.vercel.app).
- [ ] "Remember me on this device" keeps only the email on this browser.

## Search results (SEO)

- **Page title:** Sign In to FLIK | FLIK
- **Description:** Sign in to your FLIK dashboard to see your payments, shipments and payouts in one place.

## 1. Sign in

- **Heading:** Sign in to your account
- **Fields:** Email · Password
- **Link:** Forgot your password?
- **Checkbox:** Remember me on this device
- **Button:** Sign in (while sending: Signing in…)
- **Loading screen:** the animated FLIK logo (`assets/loading/flik-loading.json`) plays once on a white screen, then the dashboard opens. Screen reader text: Opening your dashboard…
- **Errors:** Enter your email, like name@brand.co.id. · Enter your password.
- **Under the card:** New to FLIK? Create an account

## 2. Reset your password

- **Heading:** Reset your password
- **Text:** Enter the email you use for FLIK. We'll send you a link to set a new password.
- **Button:** Send reset link (while sending: Sending…)
- **Link:** Back to sign in

## 3. Check your email

- **Heading:** Check your email
- **Text:** If {email} has a FLIK account, you'll get a link to set a new password. It can take a few minutes.
- **Link:** Back to sign in
