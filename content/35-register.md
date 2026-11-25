# Create account (login page → Create an account)

- **Live page:** https://landing-page-raams-projects-2709477f.vercel.app/register/
- **Page file:** `register/index.html`, built from the sign-in page (18 Nov 2026). Fields follow the live merchant.flik.co.id/register page, in English. Components reused: the sign-in layout and ribbon, form fields (`.fld`), primary button, the success tick.
- Opens from "Create an account" on the sign-in page, every "Get started" button, the blog article links and the Promo "Register as a merchant" button (Raam, 18 Nov 2026).

Edit the text after each label. Keep the labels and headings as they are, so the AI knows where each line goes.

## Things to confirm on this page

- [x] **Not linked (launch answers, 25 Nov 2026):** Get started opens the live sign-up (https://merchant.flik.co.id/register/), which already shows the Terms and Privacy notice. This page stays in the repo, unlinked.

- [ ] The WhatsApp code: 6 digits, resend after 2 minutes. Confirm both match the live sign-up.
- [ ] "Free to register" matches the homepage ("Start for free. No registration fee.").

## Search results (SEO)

- **Page title:** Create Your FLIK Account | FLIK
- **Description:** Create your free FLIK account. Get paid, ship and grow from one dashboard.

## 1. Create your FLIK account

- **Heading:** Create your FLIK account
- **Text:** Free to register. Start selling in minutes.
- **Fields:** Business name · Full name · WhatsApp number · Email · Password (At least 6 characters.) · Confirm password
- **Button:** Create account (while sending: Creating your account…)
- **Note:** By creating an account, you agree to FLIK's Terms of Service and Privacy Policy.
- **Errors:** Enter your business name. · Enter your full name. · Enter a WhatsApp number with at least 9 digits, like +62 812-3456-7890. · Enter your email, like name@brand.co.id. · Use at least 6 characters. · The passwords don't match.
- **Under the card:** Already have an account? Sign in

## 2. Verify your WhatsApp

- **Back link:** Back (returns to the form to fix the number)
- **Heading:** Verify your WhatsApp
- **Text:** Enter the 6-digit code we sent to your WhatsApp {number}.
- **Code:** 6 boxes. Typing, pasting or phone autofill fills them in order.
- **Timer:** Resend code in 02:00, then: Didn't get it? Resend code (toast: We sent a new code to your WhatsApp)
- **Button:** Verify (while checking: Verifying…). Off until all 6 digits are in.
- **Loading screen:** after a correct code, the animated FLIK logo (`assets/loading/flik-loading.json`) plays once on a white screen, then the dashboard opens. Screen reader text: Opening your dashboard…
- **Wrong code:** That code isn't right. Check WhatsApp and try again. (Prototype: 000000 is the wrong code; any other 6 digits pass, as in the dashboard prototype.)
- **After a correct code:** the v4 merchant dashboard opens as a new merchant, not verified, with the welcome tour greeting the first name and the business name in the sidebar.
