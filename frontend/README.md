# Remax Forge & Fittings website

## ⚠️ Contact gate - permanent rule

Phone numbers, WhatsApp links and email addresses are **only shown after a visitor
submits the Get Quote / contact form**. They live only in
`src/assets/data/contactDetails.js` (encoded) and are rendered through
`getContactDetails()` inside an `isUnlocked` branch. `npm run build` runs
`check_contact_gate.js`, which **fails the build and blocks the deploy** if they are
exposed anywhere else. Full rule: [CLAUDE.md](../CLAUDE.md).

Run the check on its own with `npm run check:contact` (after `npm run build`).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
