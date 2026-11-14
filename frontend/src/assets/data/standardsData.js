// Standards Data - 6 Standards for Remax Forge & Fittings
export const standardsData = {
  "asme-b16-5": {
    id: "1.0",
    slug: "asme-b16-5",
    name: "ASME B16.5 Flange Standard",
    h1: "ASME B16.5 Flange Standard — Covers NPS 1/2 to 24 Pipe Flanges",
    metaTitle: "ASME B16.5 Flange Standard Guide | Class 150 to 2500 Dimensions",
    metaDesc: "Complete ASME B16.5 flange standard specification guide: NPS 1/2 to 24, Class 150-2500, pressure-temp ratings, facings (RF, RTJ, FF), materials. Get a written quote.",
    scope: "ASME B16.5 covers pressure-temperature ratings, materials, dimensions, tolerances, marking, testing, and methods of designating openings for pipe flanges and flanged fittings in sizes NPS 1/2 through NPS 24 metric/inch standard.",
    sizeRange: "NPS 1/2 to NPS 24 (DN 15 to DN 600)",
    pressureClasses: ["Class 150", "Class 300", "Class 400", "Class 600", "Class 900", "Class 1500", "Class 2500"],
    supply: {
      "title": "ASME B16.5 Flanges We Supply",
      "intro": "Remax Forge supplies ASME B16.5 flanges from Mumbai with an EN 10204 3.1 mill test certificate on every lot. Sizes, classes and grades outside this list are quoted against your specification.",
      "items": [
        {
          "label": "Types",
          "value": "Weld neck, slip-on, blind, socket weld, threaded, lap joint"
        },
        {
          "label": "Sizes",
          "value": "NPS 1/2 to NPS 24 (DN 15 to DN 600)"
        },
        {
          "label": "Pressure classes",
          "value": "Class 150, 300, 400, 600, 900, 1500, 2500"
        },
        {
          "label": "Facings",
          "value": "RF, FF, RTJ"
        },
        {
          "label": "Materials",
          "value": "ASTM A105, A350 LF2, A182 F304/F316L, duplex F51, chrome-moly F11/F22"
        },
        {
          "label": "Testing & documents",
          "value": "PMI, UT, hydrostatic testing where specified; EN 10204 3.1 (3.2 on request)"
        }
      ]
    },
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
      { title: "Carbon Steel Flanges", url: "/materials/carbon-steel-flanges/" },
      { title: "ASME B16.5 vs B16.47 Compared", url: "/blogs/asme-b16-5-vs-b16-47/" },
      { title: "Pipe Flanges Guide", url: "/blogs/pipe-flanges-guide/" },
      { title: "EN 1092-1 Flanges", url: "/standards/en-1092-1/" },
      { title: "Oil & Gas NACE Flanges", url: "/oil-gas-pipe-fittings/" }
    ]
  },
  "asme-b16-47": {
    id: "2.0",
    slug: "asme-b16-47",
    name: "ASME B16.47 Large Diameter Flanges",
    h1: "ASME B16.47 — Large Diameter Steel Flanges NPS 26 to 60",
    metaTitle: "ASME B16.47 Flange Standard | Series A vs Series B NPS 26-60",
    metaDesc: "ASME B16.47 large diameter flange guide (NPS 26 to 60): Series A (MSS SP-44) vs Series B (API 605), pressure classes 75-900, weights & bolt patterns. Get a written quote.",
    scope: "ASME B16.47 covers pressure-temperature ratings, materials, dimensions, tolerances, marking, and testing for steel pipe flanges in sizes NPS 26 through NPS 60.",
    sizeRange: "NPS 26 to NPS 60 (DN 650 to DN 1500)",
    pressureClasses: ["Class 75 (Series B only)", "Class 150", "Class 300", "Class 400", "Class 600", "Class 900"],
    supply: {
      "title": "ASME B16.47 Large Diameter Flanges We Supply",
      "intro": "Large diameter flanges are made to order, so state Series A or Series B on every RFQ line. Sizes, classes and grades outside this list are quoted against your specification.",
      "items": [
        {
          "label": "Series",
          "value": "Series A (MSS SP-44) and Series B (API 605)"
        },
        {
          "label": "Sizes",
          "value": "NPS 26 to NPS 60 (DN 650 to DN 1500)"
        },
        {
          "label": "Pressure classes",
          "value": "Class 75 (Series B only), 150, 300, 400, 600, 900"
        },
        {
          "label": "Types",
          "value": "Weld neck and blind"
        },
        {
          "label": "Facings",
          "value": "RF, FF, RTJ"
        },
        {
          "label": "Testing & documents",
          "value": "PMI, UT where specified; EN 10204 3.1 (3.2 on request)"
        }
      ]
    },
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
      { title: "Blind Flange", url: "/products/flanges/blind-flange/" },
      { title: "ASME B16.5 vs B16.47 Compared", url: "/blogs/asme-b16-5-vs-b16-47/" },
      { title: "Pipe Flanges Guide", url: "/blogs/pipe-flanges-guide/" },
      { title: "Oil & Gas NACE Flanges", url: "/oil-gas-pipe-fittings/" }
    ]
  },
  "en-1092-1": {
    id: "3.0",
    slug: "en-1092-1",
    name: "EN 1092-1 Flange Standard",
    h1: "EN 1092-1 European Flange Standard — PN Ratings & Type 01-37",
    metaTitle: "EN 1092-1 Flange Standard Guide | PN6 to PN400 Types 01-37",
    metaDesc: "EN 1092-1 European flange specification guide: PN6 to PN400, Type 01, 02, 05, 11, 12, 13, 21, facing types A-H, material groups, dimensions. Get a written quote.",
    scope: "EN 1092-1 specifies requirements for circular steel flanges in PN designations from PN 2.5 to PN 400 and nominal sizes from DN 10 to DN 4000.",
    sizeRange: "DN 10 to DN 4000",
    pressureClasses: ["PN 2.5", "PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100", "PN 160", "PN 250", "PN 320", "PN 400"],
    sections: [
      {
        "title": "EN 1092-1 Flange Types and Their DIN Equivalents",
        "body": [
          "Most RFQs still arrive with a DIN number. The EN 1092-1 type that replaces it keeps the same mating dimensions, so the flange bolts to existing pipework: Type 05 blind replaces DIN 2527, Type 01 plate slip-on replaces DIN 2573 / 2576, Type 11 weld neck replaces DIN 2631 to 2635 (for example DIN 2633 PN 16 becomes EN 1092-1 Type 11 PN 16), and Type 13 hubbed threaded replaces DIN 2566.",
          "Type 02 loose plate flanges fit over a separate weld-on collar, the European counterpart of a lap joint flange and stub end. Type 12 is a hubbed slip-on flange for welding."
        ]
      },
      {
        "title": "Materials for EN 1092-1 Flanges",
        "body": [
          "Carbon steel Type 11 weld neck flanges are commonly made in P250GH, the EN designation of the older DIN grade C22.8. Stainless flanges are forged from EN 10222-5 or equivalent ASTM A182 material: 1.4301 (304), 1.4404 (316L) and 1.4462 duplex are the grades buyers ask for most.",
          "A PN 10 or PN 16 Type 11 weld neck in 1.4404 is the direct replacement for a stainless DIN 2632 / 2633 flange. Allowable pressure depends on the material and the design temperature, so state both on the RFQ and check the pressure-temperature table of EN 1092-1 for the grade you specify."
        ]
      },
      {
        "title": "PN 10 vs PN 16 Drilling",
        "body": [
          "PN 10 and PN 16 flanges share the same drilling up to DN 150. From DN 200 the bolt-hole count differs, so check the PN of the mating flange before you order a replacement. A PN 16 flange bolted to a PN 10 flange is rated only to PN 10."
        ]
      }
    ],
    sources: [
      "https://www.alleima.com/cz/products/fittings-flanges/flanges/en-flanges/welding-neck-flanges/",
      "https://www.onninen.fi/en/onninen-flans-en1092-1-11-m-krage-dn250-pn16-1-4404/p/AFA457",
      "https://blog.projectmaterials.com/flanges/astm-materials-for-forged-flanges"
    ],
    supply: {
      "title": "EN 1092-1 Flange Supply Range and RFQ Checklist",
      "intro": "EN 1092-1 flanges are quoted against your specification, marked with the type number, PN and material, with an EN 10204 3.1 certificate. Sizes, classes and grades outside this list are quoted against your specification.",
      "items": [
        {
          "label": "Types",
          "value": "Type 01 plate, Type 02 loose plate, Type 05 blind, Type 11 weld neck, Type 12 hubbed slip-on, Type 13 hubbed threaded"
        },
        {
          "label": "PN ratings",
          "value": "PN 6, PN 10, PN 16, PN 25, PN 40 and higher PN on request"
        },
        {
          "label": "Facings",
          "value": "Type A flat face, Type B1/B2 raised face, other facing types on request"
        },
        {
          "label": "Grades commonly ordered",
          "value": "P250GH (C22.8) carbon steel, 1.4301 (304), 1.4404 (316L), 1.4462 duplex"
        },
        {
          "label": "Documents",
          "value": "EN 10204 3.1 (3.2 on request)"
        }
      ]
    },
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
      },
      {
        q: "Which EN 1092-1 type replaces DIN 2633?",
        a: "DIN 2633 is a PN 16 weld neck flange. Its EN 1092-1 replacement is a Type 11 weld neck flange in PN 16, which has the same mating dimensions."
      },
      {
        q: "What material is used for carbon steel EN 1092-1 flanges?",
        a: "P250GH is the usual carbon steel grade for Type 11 weld neck flanges; it replaces the DIN grade C22.8. Stainless flanges are commonly 1.4301 (304) or 1.4404 (316L)."
      }
    ],
    relatedLinks: [
      { title: "DIN 2501 Standard", url: "/standards/din-2501/" },
      { title: "Stainless Steel 316", url: "/materials/stainless-steel-316-flanges/" },
      { title: "Pipe Flanges Guide", url: "/blogs/pipe-flanges-guide/" },
      { title: "ASME B16.5 Flanges", url: "/standards/asme-b16-5/" },
      { title: "Weld Neck Flange", url: "/products/flanges/weld-neck-flange/" }
    ]
  },
  "din-2501": {
    id: "4.0",
    slug: "din-2501",
    name: "DIN 2501 Flange Standard",
    h1: "DIN 2501 Flange Standard — Legacy German Specification Guide",
    metaTitle: "DIN 2501 Flange Standard Guide | PN6 to PN40 Dimensions & EN 1092-1 Cross Reference",
    metaDesc: "DIN 2501 legacy German flange standard reference: PN6, PN10, PN16, PN25, PN40 dimensions, bolt circles, mating compatibility with EN 1092-1. Get a written quote.",
    scope: "DIN 2501 is the legacy German Institute for Standardization standard for mating dimensions of steel pipe flanges in PN 6 through PN 40.",
    sizeRange: "DN 10 to DN 1000",
    pressureClasses: ["PN 6", "PN 10", "PN 16", "PN 25", "PN 40"],
    supply: {
      "title": "DIN Flange Supply Range and RFQ Checklist",
      "intro": "Order to the legacy DIN number for like-for-like replacement, or to the matching EN 1092-1 type. Sizes, classes and grades outside this list are quoted against your specification.",
      "items": [
        {
          "label": "DIN references",
          "value": "DIN 2527 blind, DIN 2573/2576 plate slip-on, DIN 2631-2635 weld neck, DIN 2566 threaded"
        },
        {
          "label": "Sizes",
          "value": "DN 10 to DN 1000"
        },
        {
          "label": "PN ratings",
          "value": "PN 6, PN 10, PN 16, PN 25, PN 40"
        },
        {
          "label": "Grades commonly ordered",
          "value": "C22.8 / P250GH carbon steel, 1.4301 (304), 1.4404 (316L), 1.4462 duplex"
        },
        {
          "label": "Documents",
          "value": "EN 10204 3.1 (3.2 on request)"
        }
      ]
    },
    crossRef: [
      { din: "DIN 2527", en: "EN 1092-1 Type 05 (Blind Flange)" },
      { din: "DIN 2573 / 2576", en: "EN 1092-1 Type 01 (Plate Slip-On)" },
      { din: "DIN 2631 - 2635", en: "EN 1092-1 Type 11 (Weld Neck)" },
      { din: "DIN 2566", en: "EN 1092-1 Type 13 (Threaded, hubbed)" }
    ],
    sections: [
      {
        title: "Why DIN Flanges Are Still Ordered Today",
        body: [
          "Plants built in Europe, the Middle East and India before the EN changeover still carry DIN numbers on their P&IDs, isometrics and spare-part lists. Maintenance teams therefore keep ordering \"DIN 2633 PN16 weld neck\" or \"DIN 2576 PN10 slip-on\" even though new projects are written to EN 1092-1.",
          "We supply both: flanges marked to the legacy DIN reference for like-for-like replacement, or EN 1092-1 flanges with the matching type number when your specification has been updated. Tell us which marking and certificate wording you need and we will quote accordingly."
        ]
      },
      {
        title: "PN Ratings and Drilling: What to Check",
        body: [
          "The PN number is the nominal pressure in bar at the reference temperature; the allowable pressure falls as temperature rises, so always check the pressure–temperature table for your material group.",
          "PN 10 and PN 16 flanges share the same drilling up to DN 150. From DN 200 upward the bolt-hole count differs, so a PN 10 flange will not bolt to a PN 16 flange of the same size. When you replace a DIN flange with an EN 1092-1 flange, the bolt pattern matches but flange thickness and hub length may differ slightly, which matters where space or stud length is fixed."
        ]
      },
      {
        title: "Ordering DIN Flanges from Remax Forge",
        body: [
          "Send the DIN number (or EN type), PN rating, DN size, facing, material grade and quantity. Common grades include C22.8 / P250GH carbon steel, 1.4301 / 1.4404 (304 / 316L) stainless and 1.4462 duplex. Every lot ships with an EN 10204 3.1 certificate; 3.2 with SGS, BV, TUV or DNV inspection is available on request. You get a written quote."
        ]
      }
    ],
    overview: "Although DIN 2501 was officially superseded by EN 1092-1 in the European Union, DIN flange callouts remain ubiquitous in existing plant maintenance specifications and international engineering drawings.",
    faqs: [
      {
        q: "Can an EN 1092-1 flange bolt directly to an existing DIN 2501 flange?",
        a: "Yes. For DN 10 through DN 600, EN 1092-1 maintains identical bolt circle diameters, bolt hole counts, and pitch dimensions as legacy DIN 2501."
      },
      {
        q: "Is DIN 2501 still a valid standard?",
        a: "DIN 2501 has been withdrawn and replaced by EN 1092-1, but it is still widely quoted on drawings and spare-part lists for existing plants. Flanges can be supplied and marked to either reference."
      },
      {
        q: "Can a PN 10 flange be bolted to a PN 16 flange?",
        a: "Up to DN 150 the drilling is the same, so they will bolt together, but the joint is only rated to the lower PN. From DN 200 upward the number of bolt holes differs and they do not match."
      },
      {
        q: "Which DIN standard covers weld neck flanges?",
        a: "Weld neck flanges are covered by DIN 2631 (PN 6), DIN 2632 (PN 10), DIN 2633 (PN 16), DIN 2634 (PN 25) and DIN 2635 (PN 40). The EN 1092-1 equivalent is Type 11."
      }
    ],
    relatedLinks: [
      { title: "EN 1092-1 Standard", url: "/standards/en-1092-1/" },
      { title: "Carbon Steel Flanges", url: "/materials/carbon-steel-flanges/" },
      { title: "Pipe Flanges Guide", url: "/blogs/pipe-flanges-guide/" }
    ]
  },
  "jis-b2220": {
    id: "5.0",
    slug: "jis-b2220",
    name: "JIS B2220 Flange Standard",
    h1: "JIS B2220 Flange Standard — Japanese Industrial Specification 5K to 63K",
    metaTitle: "JIS B2220 Flange Standard Guide | 5K 10K 16K 20K 30K Dimensions",
    metaDesc: "JIS B2220 Japanese standard steel flange guide: 5K, 10K, 16K, 20K, 30K, SOP, SOH, WN, BL types, dimensions, bolt patterns, ASME/PN conversion. Get a written quote.",
    scope: "JIS B2220 specifies dimensions, tolerances, materials, and testing for Japanese industrial steel pipe flanges in pressure ratings 2K through 63K.",
    sizeRange: "10A to 1500A (DN 10 to DN 1500)",
    pressureClasses: ["5K", "10K", "16K", "20K", "30K", "40K", "63K"],
    typeCodes: [
      { code: "SOP", desc: "Slip-On Plate flange" },
      { code: "SOH", desc: "Slip-On Hubbed flange" },
      { code: "WN", desc: "Welding Neck flange" },
      { code: "BL", desc: "Blind flange" },
      { code: "SW", desc: "Socket Welding flange" },
      { code: "LJ", desc: "Lap Joint flange" },
      { code: "TR", desc: "Threaded flange" },
      { code: "IT", desc: "Integral flange" }
    ],
    sections: [
      {
        title: "Where JIS B2220 Flanges Are Specified",
        body: [
          "JIS flanges are standard on Japanese-, Korean- and many Chinese-built ships, and on process plants and packaged equipment designed to Japanese codes. Shipyards, ship-repair yards and plant owners replacing parts on this equipment need JIS drilling; an ASME or EN flange will not fit.",
          "Sizes are written with an \"A\" suffix for the millimetre nominal size (for example 100A, equal to DN 100 or 4 inch) and the pressure class with a \"K\" suffix (for example 10K). A typical call-out is \"JIS B2220 10K 100A SOP RF\"."
        ]
      },
      {
        title: "JIS vs ASME vs EN Drilling",
        body: [
          "JIS, ASME B16.5 and EN 1092-1 flanges of the same nominal size have different outside diameters and bolt circles. At 4 inch / 100A, for example, an ASME Class 150 flange has a 190.5 mm bolt circle, an EN 1092-1 PN 16 flange 180 mm and a JIS 10K flange 175 mm. Always order to the standard shown on the mating flange or equipment nozzle."
        ]
      },
      {
        title: "Ordering JIS Flanges from Remax Forge",
        body: [
          "Send the pressure class (5K, 10K, 16K, 20K ...), size in A, flange type code, facing (RF or FF), material and quantity. We supply carbon steel (for example SS400) and stainless grades such as SUS304 and SUS316L, with an EN 10204 3.1 certificate and optional third-party inspection by SGS, BV, TUV or DNV. Written quote."
        ]
      }
    ],
    overview: "JIS B2220 is the Japanese Industrial Standard for steel pipe flanges utilized throughout Asian shipbuilding, marine, and industrial plant engineering projects.",
    faqs: [
      {
        q: "What does '10K' mean in JIS B2220?",
        a: "'10K' represents a nominal pressure rating of approximately 10 kgf/cm² (1.0 MPa or ~150 psi). However, bolt patterns differ from ASME Class 150."
      },
      {
        q: "What is the difference between SOP and SOH flanges?",
        a: "SOP is a slip-on plate flange: a flat ring with no hub, welded to the pipe. SOH is a slip-on flange with a hub, which gives extra strength at the weld and is used where higher loads are expected."
      },
      {
        q: "Can a JIS 10K flange replace an ASME Class 150 flange?",
        a: "No. Although the pressure ratings are similar, the outside diameter, bolt circle and often the bolt size differ, so the flanges will not bolt together."
      },
      {
        q: "What do 'A' and 'B' mean in JIS flange sizes?",
        a: "'A' is the nominal size in millimetres (100A) and 'B' is the same size in inches (4B). 100A and 4B refer to the same pipe size."
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
    metaDesc: "BS 10 (Tables D, E, F, H) & BS 4504 British flange standard guide: imperial bolt circles, metric PN ratings, dimensions, material options. Get a written quote.",
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
