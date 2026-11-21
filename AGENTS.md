# Agent instructions

Read and follow [CLAUDE.md](CLAUDE.md). Its "Contact gate" rule is permanent: the
site's phone numbers, WhatsApp links and email addresses may only be shown after the
visitor submits the Get Quote form, and `npm run build` fails if they are exposed.
Its "Quote popup" rule is also permanent: the Get Quote popup is the only lead source
and must work on every page; `npm run build` fails if it does not.
