// Materials Data - 12 Material Grades for Remax Forge & Fittings
export const materialsData = {
  "carbon-steel-flanges": {
    id: "1.0",
    slug: "carbon-steel-flanges",
    name: "Carbon Steel Flanges (A105 / A350 LF2)",
    h1: "Carbon Steel Flanges — ASTM A105 & A350 LF2 Manufacturer",
    metaTitle: "Carbon Steel Flange Manufacturer | ASTM A105, A350 LF2 India",
    metaDesc: "Carbon steel flange manufacturer, Mumbai. ASTM A105 (ambient/elevated temp) & A350 LF2 (low-temp, Charpy tested). All flange types, Class 150-2500.",
    unsNumber: "K03504 (A105) / K03011 (A350 LF2)",
    governingStandard: "ASTM A105 / ASME SA-105 & ASTM A350 LF2 / ASME SA-350",
    chemicalComposition: [
      { element: "Carbon (C)", a105: "0.35 max", lf2: "0.30 max" },
      { element: "Manganese (Mn)", a105: "0.60 - 1.05", lf2: "0.60 - 1.35" },
      { element: "Silicon (Si)", a105: "0.10 - 0.35", lf2: "0.15 - 0.30" },
      { element: "Phosphorus (P)", a105: "0.035 max", lf2: "0.035 max" },
      { element: "Sulfur (S)", a105: "0.040 max", lf2: "0.040 max" },
      { element: "Chromium (Cr)", a105: "0.30 max (residual)", lf2: "0.30 max (residual)" },
      { element: "Molybdenum (Mo)", a105: "0.12 max (residual)", lf2: "0.12 max (residual)" },
      { element: "Nickel (Ni)", a105: "0.40 max (residual)", lf2: "0.40 max (residual)" },
      { element: "Copper (Cu)", a105: "0.40 max (residual)", lf2: "0.40 max (residual)" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength (0.2% Offset)", a105: "250 MPa (36 ksi) min", lf2: "250 MPa (36 ksi) min" },
      { property: "Tensile Strength", a105: "485 MPa (70 ksi) min", lf2: "485 - 655 MPa (70-95 ksi)" },
      { property: "Elongation (in 2 in.)", a105: "22% min", lf2: "22% min" },
      { property: "Hardness", a105: "187 HBW max", lf2: "197 HBW max" },
      { property: "Charpy V-Notch Impact", a105: "Not required by spec", lf2: "20 J min at -46°C (-50°F)" },
      { property: "Service Temp Range", a105: "-29°C to 427°C (-20°F to 800°F)", lf2: "-46°C to 343°C (-50°F to 650°F)" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "285 psi (19.6 bar)", class300: "740 psi (51.1 bar)", class600: "1480 psi (102.1 bar)", class900: "2220 psi (153.1 bar)" },
      { tempC: "100°C (212°F)", class150: "260 psi (17.9 bar)", class300: "675 psi (46.6 bar)", class600: "1350 psi (93.1 bar)", class900: "2025 psi (139.6 bar)" },
      { tempC: "200°C (392°F)", class150: "230 psi (15.9 bar)", class300: "655 psi (45.2 bar)", class600: "1310 psi (90.3 bar)", class900: "1965 psi (135.5 bar)" },
      { tempC: "300°C (572°F)", class150: "200 psi (13.8 bar)", class300: "640 psi (44.1 bar)", class600: "1280 psi (88.3 bar)", class900: "1920 psi (132.4 bar)" },
      { tempC: "400°C (752°F)", class150: "140 psi (9.7 bar)", class300: "585 psi (40.3 bar)", class600: "1170 psi (80.7 bar)", class900: "1755 psi (121.0 bar)" }
    ],
    overview: "Carbon steel forged flanges in ASTM A105 and A350 LF2 represent the core workhorses of industrial fluid transport piping. While A105 is specified for non-critical ambient and elevated temperature service up to 427°C, ASTM A350 LF2 is engineered with normalized heat treatment and mandatory Charpy V-notch impact testing to withstand sub-zero conditions down to -46°C without brittle failure risk.",
    applications: [
      "Oil & Gas upstream and midstream transportation lines",
      "Refinery utility water, steam, and hydrocarbon lines",
      "Power generation high-pressure feed water systems",
      "Municipal water transmission and distribution mains",
      "Chemical plant non-corrosive process streams"
    ],
    faqs: [
      {
        q: "When do I need A350 LF2 instead of ASTM A105?",
        a: "A350 LF2 is mandatory whenever minimum design metal temperature (MDMT) drops below -29°C (-20°F). A350 LF2 undergoes Charpy V-notch impact testing at -46°C (-50°F) to ensure notch toughness and prevent brittle catastrophic failure under cryogenic or cold-climate operating conditions."
      },
      {
        q: "What is the maximum continuous service temperature for ASTM A105?",
        a: "Per ASME B16.5 material group 1.1 tables, ASTM A105 is rated up to 427°C (800°F). Above 427°C, graphitization risk increases and structural strength drops significantly, requiring Cr-Mo alloy steel grades like F11 or F22."
      },
      {
        q: "Is ASTM A105 identical to ASTM A105N?",
        a: "The 'N' suffix denotes normalized heat treatment. While ASTM A105 standard permits hot forging without post-heat treatment under certain size/class conditions, Remax Forge supplies all A105 flanges in the normalized condition (A105N) as standard practice to refine grain structure and enhance mechanical uniformity."
      },
      {
        q: "What Mill Test Reports (MTC) are supplied with Carbon Steel flanges?",
        a: "Every shipment is accompanied by EN 10204 3.1 Certified Material Test Reports detailing actual heat heat analysis, mechanical tensile values, hardness testing, and Charpy impact values for LF2."
      }
    ],
    relatedLinks: [
      { title: "Slip On Flange", url: "/products/flanges/slip-on-flange/" },
      { title: "Weld Neck Flange", url: "/products/flanges/weld-neck-flange/" },
      { title: "Blind Flange", url: "/products/flanges/blind-flange/" },
      { title: "Oil & Gas Industry", url: "/industries/oil-and-gas/" }
    ]
  },
  "stainless-steel-304-flanges": {
    id: "2.0",
    slug: "stainless-steel-304-flanges",
    name: "Stainless Steel 304/304L Flanges",
    h1: "Stainless Steel 304/304L Flanges — ASTM A182 F304/F304L",
    metaTitle: "SS 304 304L Flange Manufacturer India | ASTM A182 F304",
    metaDesc: "SS 304/304L flange manufacturer, Mumbai. ASTM A182 F304/F304L, food/pharma/general chemical grade. All flange types, Class 150-2500. Quote in 30 min.",
    unsNumber: "S30400 (304) / S30403 (304L)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F304 / F304L",
    chemicalComposition: [
      { element: "Carbon (C)", a105: "0.08 max (F304)", lf2: "0.030 max (F304L)" },
      { element: "Chromium (Cr)", a105: "18.0 - 20.0%", lf2: "18.0 - 20.0%" },
      { element: "Nickel (Ni)", a105: "8.0 - 11.0%", lf2: "8.0 - 13.0%" },
      { element: "Manganese (Mn)", a105: "2.00% max", lf2: "2.00% max" },
      { element: "Silicon (Si)", a105: "1.00% max", lf2: "1.00% max" },
      { element: "Phosphorus (P)", a105: "0.045% max", lf2: "0.045% max" },
      { element: "Sulfur (S)", a105: "0.030% max", lf2: "0.030% max" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength (0.2% Offset)", a105: "205 MPa (30 ksi) min", lf2: "170 MPa (25 ksi) min" },
      { property: "Tensile Strength", a105: "515 MPa (75 ksi) min", lf2: "485 MPa (70 ksi) min" },
      { property: "Elongation (in 2 in.)", a105: "35% min", lf2: "35% min" },
      { property: "Hardness", a105: "92 HRB max", lf2: "92 HRB max" },
      { property: "Solution Anneal Temp", a105: "1040°C min + water quench", lf2: "1040°C min + water quench" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "275 psi (19.0 bar)", class300: "720 psi (49.6 bar)", class600: "1440 psi (99.3 bar)", class900: "2160 psi (148.9 bar)" },
      { tempC: "100°C (212°F)", class150: "230 psi (15.9 bar)", class300: "600 psi (41.4 bar)", class600: "1200 psi (82.7 bar)", class900: "1800 psi (124.1 bar)" },
      { tempC: "200°C (392°F)", class150: "195 psi (13.4 bar)", class300: "520 psi (35.9 bar)", class600: "1040 psi (71.7 bar)", class900: "1560 psi (107.6 bar)" }
    ],
    overview: "Stainless Steel 304 and dual-certified 304/304L flanges are the standard 18/8 austenitic stainless steel piping components used across food processing, sanitary pharma, potable water, and mild chemical environments. F304L provides controlled low-carbon limits (0.030% max) to eliminate chromium carbide precipitation during welding.",
    applications: [
      "Food and beverage sanitary process lines",
      "Pharmaceutical equipment and purified water loops",
      "Nitric acid and organic acid chemical handling",
      "Cryogenic liquid natural gas (LNG) auxiliary piping",
      "Architectural and clean-water distribution networks"
    ],
    faqs: [
      {
        q: "When is 304/304L sufficient and when is 316/316L required?",
        a: "304 handles freshwater, atmospheric exposure, and mild organic acids. 316/316L is mandatory whenever chlorides (seawater, coastal air, saline streams) or harsh inorganic acids are present due to 316's 2-3% molybdenum addition."
      },
      {
        q: "Why choose 304L over standard 304 for welded connections?",
        a: "304L restricts carbon to 0.030% max, preventing chromium carbide precipitation in the heat-affected zone (HAZ) during welding, maintaining intergranular corrosion resistance."
      }
    ],
    relatedLinks: [
      { title: "Stainless Steel 316/316L", url: "/materials/stainless-steel-316-flanges/" },
      { title: "Pharmaceutical Industry", url: "/industries/pharmaceutical/" },
      { title: "Weld Neck Flange", url: "/products/flanges/weld-neck-flange/" }
    ]
  },
  "stainless-steel-316-flanges": {
    id: "3.0",
    slug: "stainless-steel-316-flanges",
    name: "Stainless Steel 316/316L Flanges",
    h1: "Stainless Steel 316/316L Flanges — ASTM A182 F316/F316L",
    metaTitle: "SS 316 316L Flange Manufacturer India | ASTM A182 F316",
    metaDesc: "SS 316/316L flange manufacturer, Mumbai. ASTM A182 F316/F316L, chloride & marine grade. All flange types, Class 150-2500. EN 10204 3.1/3.2. Quote in 30 min.",
    unsNumber: "S31600 (316) / S31603 (316L)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F316 / F316L",
    chemicalComposition: [
      { element: "Molybdenum (Mo)", a105: "2.00 - 3.00%", lf2: "2.00 - 3.00%" },
      { element: "Chromium (Cr)", a105: "16.0 - 18.0%", lf2: "16.0 - 18.0%" },
      { element: "Nickel (Ni)", a105: "10.0 - 14.0%", lf2: "10.0 - 15.0%" },
      { element: "Carbon (C)", a105: "0.08 max (F316)", lf2: "0.030 max (F316L)" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "205 MPa min (F316)", lf2: "170 MPa min (F316L)" },
      { property: "Tensile Strength", a105: "515 MPa min (F316)", lf2: "485 MPa min (F316L)" },
      { property: "Hardness", a105: "95 HRB max", lf2: "95 HRB max" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "275 psi", class300: "720 psi", class600: "1440 psi", class900: "2160 psi" }
    ],
    overview: "ASTM A182 F316/F316L flanges incorporate 2-3% Molybdenum for exceptional resistance to chloride pitting, crevice corrosion, and aggressive process chemicals in marine, chemical, and offshore installations.",
    applications: [
      "Offshore oil platforms & marine seawater piping",
      "Chemical processing with chloride process streams",
      "Active pharmaceutical ingredient (API) reactor manifolds",
      "Pulp and paper bleaching equipment"
    ],
    faqs: [
      {
        q: "Does 316 resist stagnant seawater indefinitely?",
        a: "No. In low-velocity or stagnant seawater, 316 can experience pitting/crevice corrosion. Duplex 2205 or Super Duplex 2507 is recommended for continuous stagnant seawater exposure."
      }
    ],
    relatedLinks: [
      { title: "Marine Industry", url: "/industries/marine/" },
      { title: "Chemical Processing", url: "/industries/chemical-processing/" },
      { title: "Duplex 2205 Flanges", url: "/materials/duplex-2205-flanges/" }
    ]
  },
  "stainless-steel-321-347-flanges": {
    id: "4.0",
    slug: "stainless-steel-321-347-flanges",
    name: "Stainless Steel 321/347 Flanges",
    h1: "Stainless Steel 321/347 Flanges — Stabilized Grades",
    metaTitle: "SS 321 347 Flange Manufacturer India | Stabilized Grades",
    metaDesc: "SS 321/347 flange manufacturer, Mumbai. Ti/Nb-stabilized for high-temp welded service, refinery furnace outlet piping. Class 150-2500. Quote in 30 min.",
    unsNumber: "S32100 (321) / S34700 (347)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F321 / F347",
    chemicalComposition: [
      { element: "Titanium (Ti)", a105: "5x C min, 0.70% max (F321)", lf2: "N/A" },
      { element: "Niobium + Tantalum (Nb+Ta)", a105: "N/A", lf2: "10x C min, 1.10% max (F347)" },
      { element: "Chromium (Cr)", a105: "17.0 - 19.0%", lf2: "17.0 - 19.0%" },
      { element: "Nickel (Ni)", a105: "9.0 - 12.0%", lf2: "9.0 - 13.0%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "205 MPa min", lf2: "205 MPa min" },
      { property: "Tensile Strength", a105: "515 MPa min", lf2: "515 MPa min" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "275 psi", class300: "720 psi", class600: "1440 psi", class900: "2160 psi" }
    ],
    overview: "ASTM A182 F321 (Titanium stabilized) and F347 (Niobium stabilized) forged flanges are specifically alloyed to eliminate intergranular corrosion in high-temperature service between 425°C and 815°C.",
    applications: [
      "Refinery furnace tube outlet piping",
      "High-temperature exhaust manifolds and thermal oxidizers",
      "Chemical reactors operating in the sensitization range",
      "Power plant superheater steam piping loops"
    ],
    faqs: [
      {
        q: "What makes 321 and 347 'stabilized' grades?",
        a: "Titanium (in 321) and Niobium (in 347) have a higher affinity for carbon than chromium. They form stable carbides (TiC / NbC) during thermal exposure, preventing chromium depletion at grain boundaries."
      }
    ],
    relatedLinks: [
      { title: "Power Generation Industry", url: "/industries/power-generation/" },
      { title: "Alloy Steel F11/F22", url: "/materials/alloy-steel-f11-f22-flanges/" }
    ]
  },
  "duplex-2205-flanges": {
    id: "5.0",
    slug: "duplex-2205-flanges",
    name: "Duplex 2205 Flanges",
    h1: "Duplex 2205 Flanges — ASTM A182 Grade F51 / F60",
    metaTitle: "Duplex 2205 Flange Manufacturer India | ASTM A182 F51 F60",
    metaDesc: "Duplex 2205 flange manufacturer, Mumbai. UNS S31803/S32205 F51/F60, high yield 450 MPa, PREN >=34. Seawater & oilfield spec. Quote in 30 min.",
    unsNumber: "S31803 / S32205 (F51 / F60)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F51 / F60",
    chemicalComposition: [
      { element: "Chromium (Cr)", a105: "22.0 - 23.0%", lf2: "22.0 - 23.0%" },
      { element: "Molybdenum (Mo)", a105: "3.00 - 3.50%", lf2: "3.00 - 3.50%" },
      { element: "Nickel (Ni)", a105: "4.50 - 6.50%", lf2: "4.50 - 6.50%" },
      { element: "Nitrogen (N)", a105: "0.14 - 0.20%", lf2: "0.14 - 0.20%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength (0.2% Offset)", a105: "450 MPa (65 ksi) min", lf2: "450 MPa min" },
      { property: "Tensile Strength", a105: "620 MPa (90 ksi) min", lf2: "620 MPa min" },
      { property: "Hardness", a105: "293 HBW max", lf2: "293 HBW max" },
      { property: "PREN", a105: "≥ 34", lf2: "≥ 34" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Duplex 2205 (UNS S31803 / S32205) features a dual-phase 50/50 ferrite-austenite microstructure, providing double the mechanical yield strength of standard 316L alongside superior resistance to chloride stress corrosion cracking.",
    applications: [
      "Offshore oil & gas separation manifolds",
      "Seawater reverse osmosis (SWRO) desalination systems",
      "Chemical tankers and process vessels carrying acidic fluids",
      "Pulp & paper digesters and bleach plant piping"
    ],
    faqs: [
      {
        q: "What is the maximum operating temperature for Duplex 2205?",
        a: "Duplex 2205 is limited to 315°C (600°F). Sustained operation above 300-315°C leads to embrittlement due to 475°C phase precipitation and sigma phase formation."
      }
    ],
    relatedLinks: [
      { title: "Super Duplex 2507", url: "/materials/super-duplex-2507-flanges/" },
      { title: "Marine Industry", url: "/industries/marine/" }
    ]
  },
  "super-duplex-2507-flanges": {
    id: "6.0",
    slug: "super-duplex-2507-flanges",
    name: "Super Duplex 2507 Flanges",
    h1: "Super Duplex 2507 Flanges — ASTM A182 Grade F53",
    metaTitle: "Super Duplex 2507 Flange Manufacturer India | ASTM A182 F53",
    metaDesc: "Super Duplex 2507 flange manufacturer, Mumbai. UNS S32750 F53, PREN >=42, high yield 550 MPa. Sour gas & deepwater subsea spec. Quote in 30 min.",
    unsNumber: "S32750 (F53)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F53",
    chemicalComposition: [
      { element: "Chromium (Cr)", a105: "24.0 - 26.0%", lf2: "24.0 - 26.0%" },
      { element: "Molybdenum (Mo)", a105: "3.0 - 5.0%", lf2: "3.0 - 5.0%" },
      { element: "Nickel (Ni)", a105: "6.0 - 8.0%", lf2: "6.0 - 8.0%" },
      { element: "Nitrogen (N)", a105: "0.24 - 0.32%", lf2: "0.24 - 0.32%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "550 MPa (80 ksi) min", lf2: "550 MPa min" },
      { property: "Tensile Strength", a105: "795 MPa (116 ksi) min", lf2: "795 MPa min" },
      { property: "Hardness", a105: "310 HBW max", lf2: "310 HBW max" },
      { property: "PREN", a105: "≥ 42", lf2: "≥ 42" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Super Duplex 2507 (UNS S32750) delivers extreme resistance to localized pitting and crevice corrosion with PREN ≥ 42, engineered for severe marine, subsea oilfield, and aggressive acid processing.",
    applications: [
      "Deepwater subsea Christmas trees and manifold hubs",
      "Sour gas (H2S) processing lines complying with NACE MR0175",
      "High-concentration warm seawater piping",
      "Flue-gas desulfurization (FGD) scrubber systems"
    ],
    faqs: [
      {
        q: "What does PREN ≥ 42 signify for Super Duplex 2507?",
        a: "PREN (Pitting Resistance Equivalent Number = %Cr + 3.3%Mo + 16%N) quantifies resistance to localized pitting. A score ≥ 42 guarantees immunity to pitting in high-temperature seawater and chloride-saturated environments."
      }
    ],
    relatedLinks: [
      { title: "Super Duplex Zeron 100", url: "/materials/super-duplex-zeron-100-flanges/" },
      { title: "Oil & Gas Industry", url: "/industries/oil-and-gas/" }
    ]
  },
  "super-duplex-zeron-100-flanges": {
    id: "7.0",
    slug: "super-duplex-zeron-100-flanges",
    name: "Super Duplex Zeron 100 Flanges",
    h1: "Super Duplex Zeron 100 Flanges — ASTM A182 Grade F55",
    metaTitle: "Zeron 100 Flange Manufacturer India | ASTM A182 F55 UNS S32760",
    metaDesc: "Super Duplex Zeron 100 flange manufacturer, Mumbai. UNS S32760 F55 with Cu+W additions, high resistance to sulfuric & hydrochloric acids. Quote in 30 min.",
    unsNumber: "S32760 (F55)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F55",
    chemicalComposition: [
      { element: "Chromium (Cr)", a105: "24.0 - 26.0%", lf2: "24.0 - 26.0%" },
      { element: "Molybdenum (Mo)", a105: "3.0 - 4.0%", lf2: "3.0 - 4.0%" },
      { element: "Tungsten (W)", a105: "0.50 - 1.00%", lf2: "0.50 - 1.00%" },
      { element: "Copper (Cu)", a105: "0.50 - 1.00%", lf2: "0.50 - 1.00%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "550 MPa (80 ksi) min", lf2: "550 MPa min" },
      { property: "Tensile Strength", a105: "750 MPa (109 ksi) min", lf2: "750 MPa min" },
      { property: "PREN", a105: "≥ 41.5", lf2: "≥ 41.5" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Zeron 100 (UNS S32760 / F55) is a highly alloyed super duplex stainless steel containing deliberate additions of Copper (0.5-1.0%) and Tungsten (0.5-1.0%) for superior performance in hot concentrated acids.",
    applications: [
      "Sulfuric acid production plant piping",
      "Offshore oil platform firewater systems",
      "Geothermal brine injection systems",
      "Pollution control scrubber systems"
    ],
    faqs: [
      {
        q: "Why does Zeron 100 include Copper and Tungsten additions?",
        a: "Copper enhances corrosion resistance in non-oxidizing acids like sulfuric acid, while Tungsten reinforces resistance to pitting and crevice corrosion in acidic brine service."
      }
    ],
    relatedLinks: [
      { title: "Super Duplex 2507", url: "/materials/super-duplex-2507-flanges/" },
      { title: "Chemical Processing", url: "/industries/chemical-processing/" }
    ]
  },
  "alloy-steel-f11-f22-flanges": {
    id: "8.0",
    slug: "alloy-steel-f11-f22-flanges",
    name: "Alloy Steel F11/F22 Flanges",
    h1: "Alloy Steel F11/F22 Flanges — ASTM A182 Gr. F11 / F22",
    metaTitle: "Alloy Steel F11 F22 Flange Manufacturer India | ASTM A182",
    metaDesc: "Alloy steel F11/F22 flange manufacturer, Mumbai. Cr-Mo grades for high-temp steam lines up to 593°C. Class 150-2500, normalized & tempered. Quote in 30 min.",
    unsNumber: "K11572 (F11) / K21590 (F22)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F11 / F22",
    chemicalComposition: [
      { element: "Chromium (Cr)", a105: "1.00 - 1.50% (F11)", lf2: "2.00 - 2.50% (F22)" },
      { element: "Molybdenum (Mo)", a105: "0.44 - 0.65% (F11)", lf2: "0.87 - 1.13% (F22)" },
      { element: "Carbon (C)", a105: "0.05 - 0.20%", lf2: "0.05 - 0.15%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "205 MPa min (Class 2)", lf2: "205 MPa min (Class 2)" },
      { property: "Tensile Strength", a105: "415 - 585 MPa (F11)", lf2: "415 - 590 MPa (F22)" },
      { property: "Service Temp Range", a105: "Up to 593°C (1,100°F)", lf2: "Up to 593°C (1,100°F)" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Chromium-Molybdenum alloy steel flanges in ASTM A182 Grade F11 (1.25Cr-0.5Mo) and F22 (2.25Cr-1Mo) are engineered for elevated-temperature steam and hydroprocessing applications up to 593°C.",
    applications: [
      "Thermal power plant main steam lines and headers",
      "Petroleum refinery hydrocracker and catalytic reformer units",
      "Boiler nozzle flange connections",
      "High-pressure high-temperature steam distribution"
    ],
    faqs: [
      {
        q: "What heat treatment is required for F11 and F22 forged flanges?",
        a: "Flanges are normalized and tempered (or quenched and tempered) to achieve the specified grain structure, tensile properties, and creep resistance at elevated temperatures."
      }
    ],
    relatedLinks: [
      { title: "Alloy Steel F91", url: "/materials/alloy-steel-f91-flanges/" },
      { title: "Power Generation Industry", url: "/industries/power-generation/" }
    ]
  },
  "alloy-steel-f91-flanges": {
    id: "9.0",
    slug: "alloy-steel-f91-flanges",
    name: "Alloy Steel F91 Flanges",
    h1: "Alloy Steel F91 Flanges — 9Cr-1Mo-V Creep Resistant",
    metaTitle: "Alloy Steel F91 Flange Manufacturer India | ASTM A182 F91",
    metaDesc: "Alloy steel F91 flange manufacturer, Mumbai. UNS K91560 9Cr-1Mo-V creep-resistant steel for ultra-supercritical power steam lines to 650°C. Quote in 30 min.",
    unsNumber: "K91560 (F91)",
    governingStandard: "ASTM A182 / ASME SA-182 Grade F91",
    chemicalComposition: [
      { element: "Chromium (Cr)", a105: "8.0 - 9.5%", lf2: "8.0 - 9.5%" },
      { element: "Molybdenum (Mo)", a105: "0.85 - 1.05%", lf2: "0.85 - 1.05%" },
      { element: "Vanadium (V)", a105: "0.18 - 0.25%", lf2: "0.18 - 0.25%" },
      { element: "Niobium (Nb)", a105: "0.06 - 0.10%", lf2: "0.06 - 0.10%" },
      { element: "Nitrogen (N)", a105: "0.030 - 0.070%", lf2: "0.030 - 0.070%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "415 MPa (60 ksi) min", lf2: "415 MPa min" },
      { property: "Tensile Strength", a105: "585 - 760 MPa", lf2: "585 - 760 MPa" },
      { property: "Service Temp Range", a105: "Up to 650°C (1,200°F)", lf2: "Up to 650°C (1,200°F)" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "ASTM A182 F91 is a 9% Chromium, 1% Molybdenum alloy steel micro-alloyed with Vanadium and Niobium, providing exceptional creep rupture strength and thermal fatigue resistance at operating temperatures up to 650°C.",
    applications: [
      "Ultra-supercritical power plant main steam circuits",
      "Combined cycle gas turbine (CCGT) heat recovery steam generators (HRSG)",
      "High-temperature refinery hydroprocessing units",
      "High-energy steam piping systems"
    ],
    faqs: [
      {
        q: "Why is post-weld heat treatment (PWHT) critical for F91 flanges?",
        a: "F91 forms a fully martensitic structure upon cooling. Strict PWHT (typically 730°C to 760°C) is mandatory to temper the martensite and restore impact toughness."
      }
    ],
    relatedLinks: [
      { title: "Alloy Steel F11/F22", url: "/materials/alloy-steel-f11-f22-flanges/" },
      { title: "Power Generation Industry", url: "/industries/power-generation/" }
    ]
  },
  "inconel-625-flanges": {
    id: "10.0",
    slug: "inconel-625-flanges",
    name: "Inconel 625 Flanges",
    h1: "Inconel 625 Flanges — ASTM B564 UNS N06625",
    metaTitle: "Inconel 625 Flange Manufacturer India | ASTM B564 UNS N06625",
    metaDesc: "Inconel 625 flange manufacturer, Mumbai. UNS N06625 Ni-Cr-Mo alloy, extreme pitting & thermal resistance from cryogenic to 980°C. Quote in 30 min.",
    unsNumber: "N06625",
    governingStandard: "ASTM B564 / ASME SB-564 UNS N06625",
    chemicalComposition: [
      { element: "Nickel (Ni)", a105: "58.0% min", lf2: "58.0% min" },
      { element: "Chromium (Cr)", a105: "20.0 - 23.0%", lf2: "20.0 - 23.0%" },
      { element: "Molybdenum (Mo)", a105: "8.0 - 10.0%", lf2: "8.0 - 10.0%" },
      { element: "Niobium + Tantalum (Nb+Ta)", a105: "3.15 - 4.15%", lf2: "3.15 - 4.15%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "414 MPa (60 ksi) min", lf2: "414 MPa min" },
      { property: "Tensile Strength", a105: "827 MPa (120 ksi) min", lf2: "827 MPa min" },
      { property: "Elongation", a105: "30% min", lf2: "30% min" },
      { property: "Service Temp Range", a105: "Cryogenic to 980°C (1,800°F)", lf2: "Cryogenic to 980°C" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Inconel 625 (UNS N06625) is a nickel-chromium-molybdenum alloy solid-solution strengthened by Niobium and Molybdenum, exhibiting outstanding resistance to severe oxidation, chloride pitting, and stress corrosion cracking from cryogenic temperatures up to 980°C.",
    applications: [
      "Subsea sour gas riser piping and flare stacks",
      "Chemical process equipment handling organic and inorganic acids",
      "Marine seawater components exposed to high velocity flow",
      "Nuclear reactor control rod components"
    ],
    faqs: [
      {
        q: "What gives Inconel 625 its high strength without heat treatment?",
        a: "The stiffening effect of Molybdenum and Niobium on the Nickel-Chromium matrix provides high strength without requiring age-hardening heat treatments."
      }
    ],
    relatedLinks: [
      { title: "Hastelloy C-276", url: "/materials/hastelloy-c276-flanges/" },
      { title: "Chemical Processing", url: "/industries/chemical-processing/" }
    ]
  },
  "hastelloy-c276-flanges": {
    id: "11.0",
    slug: "hastelloy-c276-flanges",
    name: "Hastelloy C-276 Flanges",
    h1: "Hastelloy C-276 Flanges — ASTM B564 UNS N10276",
    metaTitle: "Hastelloy C276 Flange Manufacturer India | ASTM B564 UNS N10276",
    metaDesc: "Hastelloy C-276 flange manufacturer, Mumbai. UNS N10276 Ni-Mo-Cr alloy for wet chlorine, ferric/cupric chlorides, severe chemical service. Quote in 30 min.",
    unsNumber: "N10276",
    governingStandard: "ASTM B564 / ASME SB-564 UNS N10276",
    chemicalComposition: [
      { element: "Nickel (Ni)", a105: "~57.0% balance", lf2: "~57.0% balance" },
      { element: "Molybdenum (Mo)", a105: "15.0 - 17.0%", lf2: "15.0 - 17.0%" },
      { element: "Chromium (Cr)", a105: "14.5 - 16.5%", lf2: "14.5 - 16.5%" },
      { element: "Tungsten (W)", a105: "3.0 - 4.5%", lf2: "3.0 - 4.5%" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "283 MPa (41 ksi) min", lf2: "283 MPa min" },
      { property: "Tensile Strength", a105: "690 MPa (100 ksi) min", lf2: "690 MPa min" },
      { property: "Service Temp Range", a105: "Cryogenic to 1,090°C", lf2: "Cryogenic to 1,090°C" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Hastelloy C-276 (UNS N10276) is a premier nickel-molybdenum-chromium-tungsten alloy designed for maximum corrosion resistance in severe reducing and oxidizing chemical environments, including wet chlorine gas and ferric/cupric chlorides.",
    applications: [
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors handling hot contaminated mineral acids",
      "Sour gas wells containing high H2S and elemental sulfur",
      "Pulp & paper chlorine dioxide bleaching vessels"
    ],
    faqs: [
      {
        q: "Can Hastelloy C-276 resist wet chlorine gas?",
        a: "Yes. Hastelloy C-276 is one of the few metallic alloys capable of resisting wet chlorine gas, hypochlorite, and chlorine dioxide solutions."
      }
    ],
    relatedLinks: [
      { title: "Inconel 625 Flanges", url: "/materials/inconel-625-flanges/" },
      { title: "Monel 400 Flanges", url: "/materials/monel-400-flanges/" }
    ]
  },
  "monel-400-flanges": {
    id: "12.0",
    slug: "monel-400-flanges",
    name: "Monel 400 Flanges",
    h1: "Monel 400 Flanges — ASTM B564 UNS N04400",
    metaTitle: "Monel 400 Flange Manufacturer India | ASTM B564 UNS N04400",
    metaDesc: "Monel 400 flange manufacturer, Mumbai. UNS N04400 Ni-Cu alloy, immune to chloride stress corrosion cracking, hydrofluoric acid service spec. Quote in 30 min.",
    unsNumber: "N04400",
    governingStandard: "ASTM B564 / ASME SB-564 UNS N04400",
    chemicalComposition: [
      { element: "Nickel (Ni)", a105: "63.0% min", lf2: "63.0% min" },
      { element: "Copper (Cu)", a105: "28.0 - 34.0%", lf2: "28.0 - 34.0%" },
      { element: "Iron (Fe)", a105: "2.5% max", lf2: "2.5% max" },
      { element: "Manganese (Mn)", a105: "2.0% max", lf2: "2.0% max" }
    ],
    mechanicalProperties: [
      { property: "Yield Strength", a105: "240 MPa (35 ksi) min", lf2: "240 MPa min" },
      { property: "Tensile Strength", a105: "480 - 620 MPa", lf2: "480 - 620 MPa" },
      { property: "Service Temp Range", a105: "Cryogenic to 480°C", lf2: "Cryogenic to 480°C" }
    ],
    ptRatings: [
      { tempC: "Ambient (-29 to 38°C)", class150: "290 psi", class300: "750 psi", class600: "1500 psi", class900: "2250 psi" }
    ],
    overview: "Monel 400 (UNS N04400) is a nickel-copper alloy exhibiting high strength, excellent weldability, and exceptional resistance to rapidly flowing seawater, hydrofluoric acid, and alkalis.",
    applications: [
      "Hydrofluoric (HF) acid alkylation units in oil refineries",
      "Marine propeller shafts and seawater piping systems",
      "Brine heaters and evaporators in desalination plants",
      "Caustic soda concentration plant equipment"
    ],
    faqs: [
      {
        q: "Is Monel 400 resistant to Hydrofluoric (HF) acid?",
        a: "Yes. Monel 400 is the standard metallic material of choice for HF acid service up to boiling temperatures, provided aeration is controlled."
      }
    ],
    relatedLinks: [
      { title: "Marine Industry", url: "/industries/marine/" },
      { title: "Hastelloy C-276", url: "/materials/hastelloy-c276-flanges/" }
    ]
  }
};
