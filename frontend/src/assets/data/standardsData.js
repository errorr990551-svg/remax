// Standards Data - 6 Standards for Remax Forge & Fittings
export const standardsData = {
  "asme-b16-5": {
    id: "1.0",
    slug: "asme-b16-5",
    name: "ASME B16.5 Flange Standard",
    h1: "ASME B16.5 Flange Standard — Covers NPS 1/2 to 24 Pipe Flanges",
    metaTitle: "ASME B16.5 Flange Standard Guide | Class 150 to 2500 Dimensions",
    metaDesc: "Complete ASME B16.5 flange standard specification guide: NPS 1/2 to 24, Class 150-2500, pressure-temp ratings, facings (RF, RTJ, FF), materials. Quote in 30 min.",
    scope: "ASME B16.5 covers pressure-temperature ratings, materials, dimensions, tolerances, marking, testing, and methods of designating openings for pipe flanges and flanged fittings in sizes NPS 1/2 through NPS 24 metric/inch standard.",
    sizeRange: "NPS 1/2 to NPS 24 (DN 15 to DN 600)",
    pressureClasses: ["Class 150", "Class 300", "Class 400", "Class 600", "Class 900", "Class 1500", "Class 2500"],
    facings: ["Raised Face (RF)", "Ring Type Joint (RTJ)", "Flat Face (FF)", "Tongue and Groove (T&G)", "Male and Female (M&F)"],
    flangeTypes: ["Slip On (SO)", "Weld Neck (WN)", "Blind (BL)", "Socket Weld (SW)", "Threaded (TH)", "Lap Joint (LJ)"],
    comparisonTable: [
      { param: "Size Scope", asme: "NPS 1/2\" to 24\"", metric: "DN 15 to DN 600" },
      { param: "Pressure System", asme: "Class 150 to 2500", metric: "PN 2.5 to PN 400" },
      { param: "Facing Standard", asme: "RF (1.6mm / 6.3mm), RTJ", metric: "Type A, B, C, D, E, F" },
      { param: "Gasket Standard", asme: "ASME B16.20 (Spiral Wound / RTJ)", metric: "EN 1514 / DIN 2690" }
    ],
    overview: "ASME B16.5 is the globally dominant standard for steel pipe flanges and flanged fittings from NPS 1/2 through NPS 24. It defines strict dimensional interchangeability, pressure-temperature rating tables across Material Groups 1.1 through 3.17, and face finish standards.",
    faqs: [
      {
        q: "What is the size boundary between ASME B16.5 and ASME B16.47?",
        a: "ASME B16.5 covers pipe sizes up to NPS 24. For flanges NPS 26 and larger, ASME B16.47 Series A (MSS SP-44) or Series B (API 605) applies."
      },
      {
        q: "What raised face height is required for Class 150 vs Class 600?",
        a: "For Class 150 and 300, ASME B16.5 specifies a 1.6 mm (0.06 in.) Raised Face. For Class 400, 600, 900, 1500, and 2500, a 6.4 mm (0.25 in.) Raised Face is standard."
      }
    ],
    relatedLinks: [
      { title: "ASME B16.47 Large Diameter", url: "/standards/asme-b16-47/" },
      { title: "Weld Neck Flange", url: "/products/flanges/weld-neck-flange/" },
      { title: "Carbon Steel Flanges", url: "/materials/carbon-steel-flanges/" }
    ]
  },
  "asme-b16-47": {
    id: "2.0",
    slug: "asme-b16-47",
    name: "ASME B16.47 Large Diameter Flanges",
    h1: "ASME B16.47 — Large Diameter Steel Flanges NPS 26 to 60",
    metaTitle: "ASME B16.47 Flange Standard | Series A vs Series B NPS 26-60",
    metaDesc: "ASME B16.47 large diameter flange guide (NPS 26 to 60): Series A (MSS SP-44) vs Series B (API 605), pressure classes 75-900, weights & bolt patterns. Quote in 30 min.",
    scope: "ASME B16.47 covers pressure-temperature ratings, materials, dimensions, tolerances, marking, and testing for steel pipe flanges in sizes NPS 26 through NPS 60.",
    sizeRange: "NPS 26 to NPS 60 (DN 650 to DN 1500)",
    pressureClasses: ["Class 75 (Series B only)", "Class 150", "Class 300", "Class 400", "Class 600", "Class 900"],
    facings: ["Raised Face (RF)", "Ring Type Joint (RTJ)", "Flat Face (FF)"],
    seriesComparison: [
      { feature: "Origin Spec", seriesA: "MSS SP-44", seriesB: "API 605" },
      { feature: "Flange Thickness", seriesA: "Thicker & heavier", seriesB: "Thinner & lighter" },
      { feature: "Bolt Circle & Bolt Size", seriesA: "Fewer, larger diameter bolts", seriesB: "More, smaller diameter bolts" },
      { feature: "Pipeline Weight Impact", seriesA: "Higher weight, high bending rigidity", seriesB: "Compact design, lower weight" }
    ],
    overview: "ASME B16.47 governs large-diameter steel flanges from NPS 26 through NPS 60. It incorporates two distinct series: Series A (derived from MSS SP-44) for heavy-duty industrial piping, and Series B (derived from API 605) for compact pipeline applications.",
    faqs: [
      {
        q: "Are ASME B16.47 Series A and Series B flanges interchangeable?",
        a: "No. Series A and Series B flanges have completely different bolt circle diameters, bolt hole quantities, flange thicknesses, and outer diameters. They cannot mate with each other."
      }
    ],
    relatedLinks: [
      { title: "ASME B16.5 Standard", url: "/standards/asme-b16-5/" },
      { title: "Blind Flange", url: "/products/flanges/blind-flange/" }
    ]
  },
  "en-1092-1": {
    id: "3.0",
    slug: "en-1092-1",
    name: "EN 1092-1 Flange Standard",
    h1: "EN 1092-1 European Flange Standard — PN Ratings & Type 01-37",
    metaTitle: "EN 1092-1 Flange Standard Guide | PN6 to PN400 Types 01-37",
    metaDesc: "EN 1092-1 European flange specification guide: PN6 to PN400, Type 01, 02, 05, 11, 12, 13, 21, facing types A-H, material groups, dimensions. Quote in 30 min.",
    scope: "EN 1092-1 specifies requirements for circular steel flanges in PN designations from PN 2.5 to PN 400 and nominal sizes from DN 10 to DN 4000.",
    sizeRange: "DN 10 to DN 4000",
    pressureClasses: ["PN 2.5", "PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100", "PN 160", "PN 250", "PN 320", "PN 400"],
    facingTypes: ["Type A (Flat Face)", "Type B1/B2 (Raised Face)", "Type C (Tongue)", "Type D (Groove)", "Type E (Spigot)", "Type F (Recess)", "Type G/H (O-Ring Recess)"],
    typeDefinitions: [
      { type: "Type 01", desc: "Plate flange for welding" },
      { type: "Type 02", desc: "Loose plate flange with weld-on collar" },
      { type: "Type 05", desc: "Blind flange" },
      { type: "Type 11", desc: "Weld neck flange" },
      { type: "Type 12", desc: "Hubbed slip-on flange for welding" },
      { type: "Type 13", desc: "Hubbed threaded flange" }
    ],
    overview: "EN 1092-1 is the harmonized European standard for circular steel flanges. Replacing obsolete national standards like DIN 2501 across the EU, it standardizes PN pressure designations and facing types A through H.",
    faqs: [
      {
        q: "What is the difference between EN 1092-1 Facing B1 and B2?",
        a: "B1 is standard raised face roughness (Ra 3.2 to 12.5 µm) for PN 2.5 to PN 40. B2 is fine turned surface finish (Ra 0.8 to 3.2 µm) required for higher pressure PN ratings (PN 63 and above)."
      }
    ],
    relatedLinks: [
      { title: "DIN 2501 Standard", url: "/standards/din-2501/" },
      { title: "Stainless Steel 316", url: "/materials/stainless-steel-316-flanges/" }
    ]
  },
  "din-2501": {
    id: "4.0",
    slug: "din-2501",
    name: "DIN 2501 Flange Standard",
    h1: "DIN 2501 Flange Standard — Legacy German Specification Guide",
    metaTitle: "DIN 2501 Flange Standard Guide | PN6 to PN40 Dimensions & EN 1092-1 Cross Reference",
    metaDesc: "DIN 2501 legacy German flange standard reference: PN6, PN10, PN16, PN25, PN40 dimensions, bolt circles, mating compatibility with EN 1092-1. Quote in 30 min.",
    scope: "DIN 2501 is the legacy German Institute for Standardization standard for mating dimensions of steel pipe flanges in PN 6 through PN 40.",
    sizeRange: "DN 10 to DN 1000",
    pressureClasses: ["PN 6", "PN 10", "PN 16", "PN 25", "PN 40"],
    crossRef: [
      { din: "DIN 2527", en: "EN 1092-1 Type 05 (Blind Flange)" },
      { din: "DIN 2573 / 2576", en: "EN 1092-1 Type 01 (Plate Slip-On)" },
      { din: "DIN 2631 - 2635", en: "EN 1092-1 Type 11 (Weld Neck)" }
    ],
    overview: "Although DIN 2501 was officially superseded by EN 1092-1 in the European Union, DIN flange callouts remain ubiquitous in existing plant maintenance specifications and international engineering drawings.",
    faqs: [
      {
        q: "Can an EN 1092-1 flange bolt directly to an existing DIN 2501 flange?",
        a: "Yes. For DN 10 through DN 600, EN 1092-1 maintains identical bolt circle diameters, bolt hole counts, and pitch dimensions as legacy DIN 2501."
      }
    ],
    relatedLinks: [
      { title: "EN 1092-1 Standard", url: "/standards/en-1092-1/" },
      { title: "Carbon Steel Flanges", url: "/materials/carbon-steel-flanges/" }
    ]
  },
  "jis-b2220": {
    id: "5.0",
    slug: "jis-b2220",
    name: "JIS B2220 Flange Standard",
    h1: "JIS B2220 Flange Standard — Japanese Industrial Specification 5K to 63K",
    metaTitle: "JIS B2220 Flange Standard Guide | 5K 10K 16K 20K 30K Dimensions",
    metaDesc: "JIS B2220 Japanese standard steel flange guide: 5K, 10K, 16K, 20K, 30K, SOP, SOH, WN, BL types, dimensions, bolt patterns, ASME/PN conversion. Quote in 30 min.",
    scope: "JIS B2220 specifies dimensions, tolerances, materials, and testing for Japanese industrial steel pipe flanges in pressure ratings 2K through 63K.",
    sizeRange: "10A to 1500A (DN 10 to DN 1500)",
    pressureClasses: ["5K", "10K", "16K", "20K", "30K", "40K", "63K"],
    typeCodes: [
      { code: "SOP", desc: "Slip-On Plate flange" },
      { code: "SOH", desc: "Slip-On Hubbed flange" },
      { code: "WN", desc: "Welding Neck flange" },
      { code: "BL", desc: "Blind flange" },
      { code: "IT", desc: "Threaded flange" }
    ],
    overview: "JIS B2220 is the Japanese Industrial Standard for steel pipe flanges utilized throughout Asian shipbuilding, marine, and industrial plant engineering projects.",
    faqs: [
      {
        q: "What does '10K' mean in JIS B2220?",
        a: "'10K' represents a nominal pressure rating of approximately 10 kgf/cm² (1.0 MPa or ~150 psi). However, bolt patterns differ from ASME Class 150."
      }
    ],
    relatedLinks: [
      { title: "Marine Industry", url: "/industries/marine/" },
      { title: "BS 10 / BS 4504", url: "/standards/bs-10-bs-4504/" }
    ]
  },
  "bs-10-bs-4504": {
    id: "6.0",
    slug: "bs-10-bs-4504",
    name: "BS 10 / BS 4504 Flange Standard",
    h1: "BS 10 & BS 4504 Flange Standards — British Imperial & Metric Specs",
    metaTitle: "BS 10 & BS 4504 Flange Standard Guide | Table D, E, F, H & PN Ratings",
    metaDesc: "BS 10 (Tables D, E, F, H) & BS 4504 British flange standard guide: imperial bolt circles, metric PN ratings, dimensions, material options. Quote in 30 min.",
    scope: "BS 10 specifies imperial British standard pipe flanges (Table D, E, F, H), while BS 4504 specifies metric circular steel flanges (PN 6 to PN 40).",
    sizeRange: "1/2 inch to 24 inch (BS 10) / DN 10 to DN 2000 (BS 4504)",
    pressureClasses: ["Table D", "Table E", "Table F", "Table H", "BS 4504 PN10", "BS 4504 PN16", "BS 4504 PN25", "BS 4504 PN40"],
    overview: "BS 10 and BS 4504 are historical British standards widely specified across Commonwealth countries, UK infrastructure, water authorities, and marine vessels.",
    faqs: [
      {
        q: "Which BS 10 Table is most commonly specified in water utilities?",
        a: "BS 10 Table E is the most widely specified imperial British flange table for general municipal water distribution lines up to 100 psi working pressure."
      }
    ],
    relatedLinks: [
      { title: "Water Infrastructure", url: "/industries/water-infrastructure/" },
      { title: "ASME B16.5 Standard", url: "/standards/asme-b16-5/" }
    ]
  }
};
