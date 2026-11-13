# Verified company facts (only these may be stated about Remax Forge)

Each fact is taken from the live site source. Add a new fact only with a source.

| Fact | Source |
|---|---|
| Company name: Remax Forge & Fittings | site-wide |
| Works / dispatch location: Mumbai, India | `ExportCityPage.jsx`, `AboutUs.jsx` |
| ISO 9001:2015 certified | `AboutUs.jsx:12`, `Certification.jsx` |
| Mill test certificates: EN 10204 3.1 (3.2 also listed) | `Certification.jsx:360` |
| Founded by Mr. Revaram Purohit; led today by Mr. Vikas Purohit | `AboutUs.jsx:35,38` |
| GST registered and MSME Udyam registered | `Certification.jsx:41-65` |
| Export documents: Certificate of Origin, commercial invoice, packing list, MTC, bill of lading | `ExportCityPage.jsx` FAQ |
| Inspection: hydrostatic testing, UT, PMI | `ExportCityPage.jsx` FAQ |
| Ex-stock dispatch 24–48 hours (owner's existing claim; confirmation pending) | `ExportCityPage.jsx` FAQ |
| Flange types, sizes, classes and materials: use only what the product pages in `src/assets/data/productsData.js`, `newFlangePagesData.js` and `materialsData.js` already state | data files |

## Do not state (unverified or in conflict)

- **Founding year:** the site says both "since 1995" (`AboutUs.jsx:12`) and "Established in
  2006" (`AboutUs.jsx:35`). See QUESTIONS.md.
- "45+ countries" (`AboutUs.jsx:12`): no supporting list. Don't repeat it.
- Sea transit days, MOQ, prices, stock tonnage, named customers or projects.
- Vendor approvals or registrations (Aramco, ADNOC, KOC, QatarEnergy, PDO, ...), PED, API 6A, NORSOK.
- Any contact detail (CLAUDE.md contact gate).
