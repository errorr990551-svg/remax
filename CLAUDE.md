# Project rules for remaxforge.com

## Contact gate (permanent rule, do not change)

The company's contact details are **only shown to visitors who have submitted the
Get Quote / contact form**. This is a business requirement from the site owner and
applies to every change, by any person or AI assistant.

Contact details means: phone and landline numbers, WhatsApp links, and every email
address (sales@, careers@, the Gmail address, ...), in any form: visible text,
`tel:` / `mailto:` / `wa.me` links, structured data (JSON-LD), meta tags, static
HTML, PDFs/images that print them.

How it works:

- `frontend/src/assets/data/contactDetails.js` is the **only** place the details
  exist in the frontend, base64-encoded so they never appear in the HTML or JS.
- Read them with `getContactDetails()` and render them **only** inside an
  `isUnlocked` branch (`useQuotePopup().isUnlocked`). Before that, render a button
  that calls `openQuotePopup()` (e.g. "Show Phone Details", Call/WhatsApp in the
  sticky mobile bar).
- A successful `POST /contact` (every quote/contact form) unlocks them for that
  browser (`frontend/src/assets/services/api.js` -> `unlockContactDetails()`).
- Documents that print contact details (the Udyam certificate) are gated the same
  way and served with `X-Robots-Tag: noindex`.

Enforcement: `npm run build` ends with `node check_contact_gate.js`, which scans the
source, the static files and the built site and **fails the build (so the deploy
stops)** if a number, email, `tel:`, `mailto:` or WhatsApp link appears in plain
text. Never weaken, skip or delete this check, never hard-code the details, and
never add them to schema/meta tags. To change a number or email, edit the encoded
value in `contactDetails.js` only.

If a request conflicts with this rule, do not implement it; point to this section
and ask the site owner to confirm.

## Quote popup (permanent rule, do not break)

The Get Quote popup form is the website's **only lead source**. It must open and
submit on **every page**, on desktop and mobile: the floating "Get Quote" button,
the mobile sticky bar (Get Quote / Call), the "Request Callback" popup and
the desktop auto-popup for first-time visitors. A successful submit must `POST
/contact` with the visitor's name, phone and email.

Enforcement: `npm run build` runs `node check_quote_form.js`, which fails the build
(so the deploy stops) if any built page lacks the Get Quote button or sticky bar, or
if, in a real browser, the popup does not open, submit and show its success message
on one page of every template (desktop + mobile). Never weaken, skip or delete this
check. Before changing `FloatingQuoteButton.jsx`, `StickyMobileBar.jsx`, `PopUp.jsx`,
`QuotePopupContext.jsx`, `services/api.js`, `App.jsx` or the backend `/contact`
route, test the popup yourself. If a request would break or remove the popup, do not
implement it; point to this section and ask the site owner to confirm.

No WhatsApp: the owner wants every customer to fill in the form on the website. Do not
add any WhatsApp button, link or CTA anywhere on the site (before or after the form
is submitted).

## No fake prices (permanent rule)

Never publish prices, price ranges, stock/availability, offers, ratings or reviews
anywhere on the site, including structured data (JSON-LD `offers`, `AggregateOffer`,
`AggregateRating`, `Review`). Customers get prices only through a written quote.
`npm run build` runs `node check_no_prices.js`, which fails the build if any page's
schema contains them. Never weaken, skip or delete this check.
