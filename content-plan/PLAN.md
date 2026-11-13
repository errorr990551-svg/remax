# Flange content programme: 419 thin pages, 14 days

Owner request (2026-11-13): make the thin pages deep and high quality, flanges only,
transactional intent only, run automatically over 10–15 days, never expose contact
details except through the form, avoid assumptions, update the sitemap and push at the end.

Baseline: `thin_pages_baseline.csv` (421 thin of 749 live pages; `/contact/` and
`/brochure/` are out of scope because they are not flange pages, which leaves 419).
Measured with `thin_scan.py` (counts words that appear on 3 or fewer pages, after
masking the page's own town name, so template text does not count).

## Hard rules (every day, no exceptions)

1. **Contact gate (CLAUDE.md):** no phone, WhatsApp, email, `tel:`, `mailto:` or `wa.me` in
   any page, data file, schema or meta tag. CTAs call `openQuotePopup()`. The build must end
   with "✓ Contact gate". Never edit `check_contact_gate.js`.
2. **No invented facts.** Use only `FACTS.md` (company facts with source lines) plus facts
   verified with a web search on the day (keep the source URL in the data entry's
   `sources` field, which is not rendered). If a fact can't be verified, leave it out. Never
   invent customers, projects, stock quantities, prices, MOQ, transit days, vendor approvals
   (Aramco, ADNOC, KOC, QatarEnergy, PDO, ...), PED, API 6A, NORSOK or a founding year.
3. **Anything unknown goes into `QUESTIONS.md`.** Don't block on it: write the page without
   that claim.
4. **Flanges only, transactional intent only:** supplier, manufacturer, exporter, stockist,
   price, buy, RFQ or quote for flanges in <place>. No informational blog content.
5. **Don't remove or 301 any page,** and don't change URLs, `.htaccess` redirects or the
   Udyam noindex rule.
6. Commit at the end of each day to `claude/charming-ptolemy-81qaz1` and push that branch.
   Deploy to `main` only on Day 14 (owner: "after everything is done").

## What a top-quality page has (definition of done)

- A title, H1 and meta description built on a transactional term: "Flange Supplier in X",
  "Flange Manufacturer & Exporter to X", "flange price". Each is unique, with the title
  under 60 characters and the meta description under 155.
- The offer above the fold: what is supplied (flange types, sizes, classes, materials from
  `FACTS.md`), documents (EN 10204 3.1 MTC), and a "Get Quote" button that opens the popup.
- An **RFQ checklist** (what a buyer must send: type, NPS/DN, class/PN, facing, bore or
  schedule, material grade, standard, quantity, testing, delivery point, Incoterm).
- A **flange range table** for that market, using standards actually used there (ASME
  B16.5/B16.47, EN 1092-1, ...), backed by a search when it's country-specific.
- **Local, verified context:** the region or governorate, the nearest seaport or air cargo
  entry, and the nearby industrial zones or sectors that buy flanges, each with a source.
  For small towns, use what can be verified, plus the country-level logistics.
- **Pricing factors** (material, size, class, quantity, testing, certification, freight), with no
  price figures.
- 3–5 FAQs where **each answer matches its question** (today's template answers by
  position, so the answers are mismatched). FAQ schema must match the visible text.
- Internal links: the country hub, 3+ relevant flange product pages, the materials page,
  the standards page.
- Unique-word score (thin_scan.py): **250+ for town pages, 500+ for country and flange
  variant pages.** No two pages share a paragraph except intentional boilerplate.

## Day 1 template fixes (before the content work)

- `ExportCityPage.jsx`:
  - Remove the public "Hub Rationale" text. It shows internal notes such as "included for full
    national coverage per direction to target every populated place" on 371 pages.
  - Render the new data fields: `region`, `port`, `industry`, `rfqNotes`, `faqs[]`,
    `sources` (sources not rendered).
  - Make FAQ answers keyed to the question.
  - Move the `useState` hooks above the early `return`, which is a rules-of-hooks bug.
- Fix the generic "Sea transit ... approximately 14–28 days" claim. It's not true for every
  country (the USA, Mexico, ...). Replace it with "transit time confirmed with your quote"
  until the owner answers in QUESTIONS.md.
- `ExportHubPage.jsx`: the same FAQ, schema and field support for the country pages.

## Schedule (one run per day, about 40 town pages per run)

| Day | Work |
|---|---|
| 1 | Template fixes above, plus the 9 flange "for <industry>" variant pages and `/materials/super-duplex-zeron-100-flanges/` |
| 2 | 15 export country pages (singapore, netherlands, nigeria, bangladesh, south-africa, south-korea, turkey, malaysia, indonesia, vietnam, mexico, germany, usa, united-states, kuwait). Differentiate `usa` and `united-states`, and log the duplication in QUESTIONS.md. |
| 3 | Qatar towns 1–40 |
| 4 | Qatar towns 41–80 |
| 5 | Qatar towns 81–119 |
| 6 | Saudi Arabia towns 1–37 |
| 7 | Saudi Arabia towns 38–74 |
| 8 | Saudi Arabia towns 75–110 |
| 9 | Oman 39 |
| 10 | Bahrain 39 |
| 11 | Kuwait 25 + UAE 18 |
| 12 | Remaining 41 (Germany 6, Mexico 5, Malaysia 4, South Africa 4, Indonesia 4, South Korea 4, Turkey 3, Vietnam 3, Bangladesh 3, Nigeria 3, Netherlands 3, Singapore 2) |
| 13 | Catch-up for anything that missed the bar. Fold in the owner's answers from QUESTIONS.md. |
| 14 | Full rebuild, re-run thin_scan, check the contact gate and the redirect trace, regenerate and commit `sitemap.xml`, push the branch and `main` (deploy), disable the Routine, and write the final report in PROGRESS.md |

The town order within a country is the order in `thin_pages_baseline.csv`, filtered by country.

## Daily procedure

1. `git pull` the branch. Read `PROGRESS.md` to find today's day number, and `QUESTIONS.md` for answers.
2. Do the day's batch. Verify local facts with web searches, and batch the searches.
3. Build: `cd frontend && PUPPETEER_EXECUTABLE_PATH=/opt/pw-browsers/chromium npm run build`.
   It must pass the contact gate.
4. Run `python3 ../content-plan/thin_scan.py /tmp/scan.json` from `frontend/`, and check
   that every page in today's batch meets its unique-word target. Fix any that miss.
5. Spot-check 2 built pages for factual claims against `FACTS.md` and the sources.
6. `git checkout -- frontend/public/sitemap.xml` (only Day 14 commits the sitemap). Commit,
   push the branch, and log the day in `PROGRESS.md` (pages done, scores, open questions).
7. If you hit a usage limit mid-day, commit what passed. The next run continues from PROGRESS.md.
