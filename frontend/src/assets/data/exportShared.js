// Shared flange tables for export country and town pages.

export const FLANGE_TYPES = [
  { name: 'Weld Neck Flange', to: '/products/flanges/weld-neck-flange/', use: 'Butt-welded to the pipe; the tapered hub spreads stress, so it is the default choice for high pressure, high temperature and cyclic service.' },
  { name: 'Slip On Flange', to: '/products/flanges/slip-on-flange/', use: 'Slides over the pipe and is fillet-welded inside and out; easier to align and lower in cost for low-pressure utility, water and cooling lines.' },
  { name: 'Blind Flange', to: '/products/flanges/blind-flange/', use: 'Closes the end of a line, nozzle or valve outlet and allows later extension or pressure testing.' },
  { name: 'Socket Weld Flange', to: '/products/flanges/socket-weld-flange/', use: 'For small-bore, high-pressure lines where the pipe is fillet-welded into a socket.' },
  { name: 'Threaded Flange', to: '/products/flanges/threaded-flange/', use: 'Screwed onto threaded pipe where welding is not allowed, such as some hazardous or temporary installations.' },
  { name: 'Lap Joint Flange', to: '/products/flanges/lap-joint-flange/', use: 'Used with a stub end; the flange rotates freely for easy bolt-hole alignment and lets costly alloy stay only on the wetted stub.' },
  { name: 'Spectacle Blind', to: '/products/flanges/spectacle-blind-flange/', use: 'Positive isolation between two flanges; rotate to switch between open and blanked line.' },
  { name: 'Long Weld Neck Flange', to: '/products/flanges/long-weld-neck-flange/', use: 'Extended neck for vessel and column nozzles.' },
];

export const MATERIALS = [
  { family: 'Carbon steel', grades: 'ASTM A105 / A105N', to: '/materials/carbon-steel-flanges/' },
  { family: 'Low-temperature carbon steel', grades: 'ASTM A350 LF2', to: '/products/flanges/high-temperature-cryogenic-flange/' },
  { family: 'Stainless steel', grades: 'ASTM A182 F304/304L, F316/316L', to: '/materials/stainless-steel-316-flanges/' },
  { family: 'Stabilised stainless', grades: 'ASTM A182 F321, F347', to: '/materials/stainless-steel-321-347-flanges/' },
  { family: 'Alloy steel', grades: 'ASTM A182 F11, F22, F91', to: '/materials/alloy-steel-f11-f22-flanges/' },
  { family: 'Duplex / super duplex', grades: 'ASTM A182 F51 (2205), F53 (2507), F55 (Zeron 100)', to: '/materials/duplex-2205-flanges/' },
  { family: 'Nickel alloys', grades: 'Inconel 625 (UNS N06625), Monel 400 (N04400), Hastelloy C276 (N10276)', to: '/materials/inconel-625-flanges/' },
];

export const RFQ_CHECKLIST = [
  'Flange type (weld neck, slip on, blind, socket weld, threaded, lap joint, spectacle blind)',
  'Nominal size (NPS or DN) and quantity per size',
  'Pressure class (ASME 150–2500) or PN rating (EN 1092-1)',
  'Facing: raised face (RF), flat face (FF) or ring type joint (RTJ)',
  'For weld neck and socket weld: pipe schedule or bore',
  'Material grade (e.g. ASTM A105, A182 F316L, A350 LF2)',
  'Dimensional standard (ASME B16.5, B16.47 Series A/B, EN 1092-1, ...)',
  'Required certificates and tests (EN 10204 3.1 / 3.2, NACE MR0175, third-party inspection)',
  'Delivery point and required date, plus your preferred Incoterm',
];

export const PRICE_FACTORS = [
  ['Material grade', 'Nickel alloys and super duplex cost many times more per kg than carbon steel A105.'],
  ['Size and pressure class', 'Weight rises steeply with NPS and class, and forging weight is a major part of the price.'],
  ['Quantity per size', 'Larger runs per size reduce set-up cost per piece.'],
  ['Testing and certification', 'EN 10204 3.2, NACE MR0175 compliance or third-party inspection add cost and time.'],
  ['Facing and machining', 'RTJ grooves, special bores and coatings add machining time.'],
  ['Freight and packing', 'Sea or air freight, seaworthy packing and the Incoterm you choose.'],
];
