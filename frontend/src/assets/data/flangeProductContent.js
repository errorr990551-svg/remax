// Written content for the flange product pages that had only outline notes (type x industry,
// material x type, class/face, quality-attribute and location pages). Merged into
// flangeApplicationContent. Engineering statements follow the cited standards; company
// statements follow content-plan/FACTS.md. No contact details here (CLAUDE.md contact gate).

export const flangeProductContent = {
  '/products/flanges/blind-flange-for-marine/': {
    intro: 'Remax Forge & Fittings supplies forged blind flanges for shipboard, offshore-support and port piping from its Mumbai works: ASME B16.5 sizes NPS ½"–24" and ASME B16.47 for larger lines, raised face or flat face, in carbon steel, stainless steel and duplex grades. Every flange is marked with its heat number and shipped with an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Where blind flanges are used in marine piping',
        paras: [
          'On a vessel, a blind flange closes the end of a seawater cooling header, isolates a pump or strainer while it is opened for maintenance, and blanks a branch left for a future tie-in on the fire main or ballast system. It is also the test closure when a new spool is hydrotested in the yard before it goes aboard.',
          'The design driver is not pressure: most seawater, ballast and fire-main systems run at Class 150. It is chloride attack. Seawater pits ordinary stainless steel and concentrates corrosion in the crevice under the gasket, so the blind flange grade has to be chosen for the fluid behind it and matched to the pipe it bolts to.',
        ],
      },
      {
        h2: 'Choosing the grade by marine system',
        table: {
          head: ['System', 'Usual blind flange grade', 'Reason'],
          rows: [
            ['Seawater cooling and ballast', 'Duplex F51 / F60, super duplex F53 / F55', 'High pitting resistance (PREN) in chloride water and better crevice resistance than 316L'],
            ['Fire main, bilge, coated steel lines', 'Carbon steel A105, painted or coated as specified', 'Matches the steel pipe; thickness carries the corrosion allowance'],
            ['Fresh water and deck utilities', 'Stainless steel F316L', 'Suitable where chloride levels stay low and the line is kept wet and clean'],
            ['Fuel and lube oil', 'Carbon steel A105', 'Oil-wetted service with little internal corrosion'],
          ],
        },
        paras: [
          'Keep the blind flange in the same metal as the pipe and flange it bolts against. Where dissimilar metals have to meet, for example duplex against carbon steel, an insulating gasket and sleeve kit breaks the galvanic couple; name it in the enquiry so the bolt holes suit the sleeves.',
        ],
      },
      {
        h2: 'Facing, drilling and class-society requirements',
        paras: [
          'Use a flat face blind flange where it mates with a cast iron or bronze valve body, or a fibre-reinforced plastic flange, so the bolts do not bend the mating flange over the raised face. Use a raised face against steel flanges. Ship equipment from Europe or Japan is often drilled to a metric standard: ASME B16.5 Class 150 drilling does not match EN 1092-1 PN16 across the size range, so state the drilling standard rather than assuming they interchange.',
          'If the vessel is built to a classification society\'s rules or a yard specification calls for extra tests, put the requirement and the inspection body in the RFQ. The quote states which tests, certificates and witness points are included.',
        ],
      },
    ],
    faqs: [
      { q: 'Which blind flange material is best for seawater service?', a: 'Duplex (F51 or F60) or super duplex (F53 or F55) is the usual choice for seawater cooling and ballast lines, because their pitting and crevice resistance in chlorides is well above 316L. Carbon steel is used only on coated or lined systems with a corrosion allowance.' },
      { q: 'Should a marine blind flange be raised face or flat face?', a: 'Flat face when it bolts to a cast iron, bronze or FRP flange, so the mating flange is not overloaded when the bolts are tightened. Raised face when both sides are steel flanges.' },
      { q: 'Is an ASME Class 150 blind flange interchangeable with a PN16 one?', a: 'Not across the size range: bolt circle, bolt count and hole size differ in several sizes. Tell us the drilling standard of the equipment flange and we machine the blind flange to match it.' },
      { q: 'What certificates come with marine blind flanges?', a: 'An EN 10204 3.1 mill test certificate with chemistry, mechanical properties and heat number as standard. An EN 10204 3.2 certificate, with a third-party or class surveyor witnessing, can be arranged when it is written into the order.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'Blind flange range by size and class'],
      ['/materials/duplex-2205-flanges/', 'Duplex 2205 flange grade data'],
      ['/products/flanges/weld-neck-flange-for-marine/', 'Marine weld neck flanges'],
      ['/products/flanges/threaded-flange-for-marine/', 'Marine threaded flanges'],
    ],
  },

  '/products/flanges/blind-flange-for-mining/': {
    intro: 'Remax Forge & Fittings supplies forged blind flanges for mine dewatering, slurry and tailings pipelines, and concentrator and leach plant piping from its Mumbai works. They are made to ASME B16.5 and B16.47 in carbon steel, stainless steel and duplex, raised face or flat face, and each carries the heat number of an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'What blind flanges do on a mine site',
        paras: [
          'Slurry and tailings lines block. Blind flanges at line ends, low points and pump discharge spools give access to flush or rod out a settled section without cutting the pipe. On dewatering mains they blank branches for future pump stations, and on the process plant they close spare nozzles on tanks, thickeners and leach vessels.',
          'Mining piping mixes materials more than most plants: rubber-lined steel, HDPE and bare carbon steel can all appear on one circuit. The blind flange has to suit whatever it bolts against, and on HDPE lines it seats against a stub end held by a backing ring, so the drilling must match that backing ring.',
        ],
      },
      {
        h2: 'Matching the blind flange to the duty',
        list: [
          'Raw water, dewatering and slurry lines: carbon steel A105, sized to the pump discharge class. Long-distance slurry lines near the pump station can need Class 600 or 900.',
          'Acid leach circuits and sulphate-bearing solutions: stainless steel F316L, with duplex where chlorides are also present.',
          'Hypersaline process or bore water: duplex F51 or super duplex F53, which resist chloride pitting that would attack 316L.',
          'Rubber-lined or HDPE lines: flat face blind flanges, so the face sits fully on the soft lining or stub end without cutting it.',
        ],
        paras: [
          'Abrasion wears the pipe, not usually the blind flange, because the flange only sees the flow at a dead end. Where the blind does face the flow, such as at the end of a tee, a sacrificial liner or extra thickness is the normal answer. State it in the RFQ and we confirm what is supplied on the quote.',
        ],
      },
      {
        h2: 'Tapped and drilled blind flanges for flushing points',
        paras: [
          'A blind flange drilled and tapped at the centre for a flushing valve, drain or pressure gauge saves a separate nozzle on the spool. Send a drawing with the tapping size, thread standard and position. The quote confirms the machining, and the tapped connection is recorded on the inspection report.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a steel blind flange be used to close an HDPE pipeline?', a: 'Yes. The blind flange bolts to the backing ring behind the HDPE stub end and seals against the stub end face. Use a flat face blind and match its drilling to the backing ring, which may be ASME, AS or EN drilled.' },
      { q: 'What pressure class do slurry pipeline blind flanges need?', a: 'It follows the design pressure at that point in the line. Lines near a pump station on a long overland pipeline can need Class 600 or 900, while plant-area lines are often Class 150 or 300. Give us the design pressure and temperature and we propose the class.' },
      { q: 'Which material suits a leach circuit?', a: 'Stainless steel F316L for most sulphuric acid leach solutions, and duplex where chlorides are also present. Send the solution chemistry and temperature so the grade can be checked.' },
      { q: 'Do you inspect mining blind flanges before dispatch?', a: 'Yes. Dimensions and drilling are checked against the drawing, alloy grades are PMI-tested, and UT or hydrostatic testing can be added. The EN 10204 3.1 certificate travels with the order.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'All blind flange types we make'],
      ['/products/flanges/lap-joint-flange/', 'Lap joint flanges and backing rings'],
      ['/materials/stainless-steel-316-flanges/', '316/316L flange grade data'],
      ['/materials/super-duplex-2507-flanges/', 'Super duplex 2507 flange data'],
    ],
  },

  '/products/flanges/blind-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies forged blind flanges for wellsite, gathering, pipeline and gas-processing piping from its Mumbai works. They are made to ASME B16.5 (NPS ½"–24", Classes 150 to 2500) and ASME B16.47 for large diameters, with a raised face or a ring type joint groove, in A105, low-temperature LF2, stainless steel and duplex. Each is traceable to an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Why the blind flange is the most heavily loaded flange in the line',
        paras: [
          'A weld neck or slip-on flange carries pressure through the pipe wall. A blind flange carries the full line pressure across its whole face as a flat plate held at the bolt circle. That is why blind flanges in the higher classes are thick, and why buyers on high-pressure gas lines check the thickness and the material grade before anything else.',
          'In oil and gas they close pig launcher and receiver branches, blank the ends of headers for future wells, isolate meters and filter skids, and act as hydrotest closures on new pipeline sections. Where the line is RTJ-faced, the blind flange carries the matching ring groove so the gasket seats metal to metal.',
        ],
      },
      {
        h2: 'Pressure ratings for carbon steel blind flanges',
        table: {
          head: ['ASME class', 'A105 rating at 38 °C', 'Usual facing'],
          rows: [
            ['Class 150', '19.6 bar', 'Raised face'],
            ['Class 300', '51.1 bar', 'Raised face'],
            ['Class 600', '102.1 bar', 'Raised face or RTJ'],
            ['Class 900', '153.2 bar', 'RTJ'],
            ['Class 1500', '255.3 bar', 'RTJ'],
            ['Class 2500', '425.5 bar', 'RTJ'],
          ],
        },
        paras: [
          'Ratings are from ASME B16.5 for material group 1.1 and fall as temperature rises. Check the rating at the design temperature, not just at ambient.',
        ],
      },
      {
        h2: 'Low-temperature and sour-service grades',
        paras: [
          'A105 has no impact test requirement. Where a gas line can chill through blowdown or Joule-Thomson cooling, specify A350 LF2 Class 1, which is Charpy tested at −46 °C. For wet gas containing H2S, call up NACE MR0175 / ISO 15156: carbon steel blind flanges are then supplied with hardness at or below 22 HRC, and hardness values are reported on the certificate.',
          'For produced water and corrosive condensate, duplex F51 or super duplex F53 blind flanges remove the need for an internal corrosion allowance.',
        ],
      },
    ],
    faqs: [
      { q: 'When should an oil and gas blind flange be RTJ instead of raised face?', a: 'RTJ is normal from Class 900 upward and is often specified from Class 600 on gas service, wellhead-adjacent piping and lines with high thermal or vibration loads. A raised face with a spiral wound gasket covers most Class 150 to 600 service.' },
      { q: 'What is the difference between A105 and LF2 blind flanges?', a: 'Both are carbon steel. A350 LF2 Class 1 is impact tested at −46 °C, so it is used where the metal can get cold. A105 is not impact tested and suits ambient and elevated temperatures.' },
      { q: 'Can you supply NACE MR0175 blind flanges?', a: 'Yes, when it is stated on the RFQ. The flanges are produced and tested to the hardness limits of MR0175 / ISO 15156 for the grade, and the hardness results are on the EN 10204 3.1 certificate.' },
      { q: 'Do blind flanges come with a hydrostatic test certificate?', a: 'Blind flanges are not hydro-tested individually by ASME B16.5. Hydrostatic testing, UT and PMI can be added to the order, and the results are reported with the MTC.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'Blind flange thickness and drilling'],
      ['/products/flanges/sour-service-nace-flange/', 'NACE MR0175 sour-service flanges'],
      ['/products/flanges/rtj-face-flange-manufacturer/', 'RTJ groove and ring guide'],
      ['/materials/carbon-steel-flanges/', 'A105 carbon steel flange grades'],
    ],
  },

  '/products/flanges/blind-flange-for-pharmaceutical/': {
    intro: 'Remax Forge & Fittings supplies forged stainless steel blind flanges for pharmaceutical and API plant process piping from its Mumbai works: F304L and F316L to ASME B16.5, raised face or flat face, PMI-verified and stamped with the heat number shown on the EN 10204 3.1 mill test certificate that a GMP audit trail needs.',
    sections: [
      {
        h2: 'Where flanges belong in a pharmaceutical plant',
        paras: [
          'Product-contact hygienic lines, such as purified water and water for injection loops and sterile transfer, are usually built to ASME BPE with orbital welds and clamp fittings, not bolted ASME B16.5 flanges. Flanged joints belong to the process side of an API or bulk-drug plant: reactor and receiver nozzles, solvent recovery, distillation columns, vacuum lines, scrubbers and utility headers.',
          'That is where blind flanges are used. They close spare reactor nozzles, blank manways and sight-glass ports during modifications, and isolate a vessel so it can be cleaned or inspected. Solvents, acids and cleaning chemicals are the corrosive load, so stainless steel is the default.',
        ],
      },
      {
        h2: '304L or 316L: choosing the grade',
        paras: [
          'F316L contains about 2–3% molybdenum, which F304L does not. Molybdenum improves resistance to pitting from chlorides, so 316L is the safer choice wherever hydrochloric acid traces, chlorinated solvents or chloride-bearing cleaning agents can reach the flange. F304L is adequate for many solvent and utility duties. The "L" low-carbon grades are standard because they resist sensitisation at weld-heat-affected zones.',
          'Because 304L and 316L look identical, the flanges are PMI-tested to confirm the molybdenum content before it is marked and released. The PMI result is recorded against the heat number.',
        ],
      },
      {
        h2: 'Gaskets, face finish and documentation',
        list: [
          'Gasket compatibility: PTFE envelope and expanded PTFE gaskets are common on solvent duty. Specify the face finish they need, or the standard 3.2–6.3 µm Ra serrated raised face is supplied.',
          'Marking: grade, size, class, heat number and standard are stamped on the rim so the flange stays traceable after installation.',
          'Documents: an EN 10204 3.1 MTC with chemistry and mechanical properties for each heat. Inspection reports go with the shipment for your qualification file.',
          'Cleanliness: state any degreasing, pickling or special packing requirement in the RFQ. The quote confirms what is included.',
        ],
      },
    ],
    faqs: [
      { q: 'Are ASME B16.5 blind flanges used on pharmaceutical WFI lines?', a: 'Normally not. Hygienic product-contact lines follow ASME BPE with clamp connections and orbital welds. B16.5 blind flanges are used on reactors, solvent, vacuum and utility piping in the process plant.' },
      { q: 'Should I choose 304L or 316L for a reactor nozzle blind flange?', a: 'Choose 316L if chlorides, chlorinated solvents or acid traces can be present, since its molybdenum improves pitting resistance. 304L suits clean solvent and utility service. If unsure, send the process fluids and we suggest the grade.' },
      { q: 'How do you prove the grade is 316L?', a: 'Each flange is PMI-tested to check molybdenum, chromium and nickel, and the chemistry on the EN 10204 3.1 certificate is tied to the heat number stamped on the flange.' },
      { q: 'Can blind flanges be supplied pickled and passivated?', a: 'Put the surface treatment and packing requirement in the RFQ. The quote states what is supplied, and the treatment is noted in the dispatch documents.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'Standard ASME B16.5 blind flanges'],
      ['/materials/stainless-steel-316-flanges/', 'SS316 flange chemistry and ratings'],
      ['/materials/stainless-steel-304-flanges/', '304/304L flange grade data'],
      ['/products/flanges/non-porous-lined-blind-flange/', 'Blind flanges for corrosive service'],
    ],
  },

  '/products/flanges/blind-flange-manufacturer-mumbai/': {
    intro: 'Remax Forge & Fittings is a blind flange manufacturer with its works in Mumbai. It supplies ASME B16.5 and B16.47 blind flanges in carbon, low-temperature, stainless, alloy and duplex steel to refineries, chemical plants, fabricators and EPC contractors in Mumbai and across India, and to export buyers through Jawaharlal Nehru Port (Nhava Sheva).',
    sections: [
      {
        h2: 'Supplying Mumbai\'s plants and fabricators',
        paras: [
          'Mumbai\'s demand for blind flanges comes from three directions. The refinery and petrochemical complexes around Chembur and Trombay need high-class, low-temperature and sour-service flanges for shutdown and revamp work. Chemical and pharmaceutical units in the Thane–Belapur MIDC belt and at Taloja need stainless steel and duplex blinds for corrosive duty. Pipe-spool fabricators across the region need standard A105 and F316L blinds in quantity for hydrotest closures.',
          'Having the works in the same city helps local buyers: witness inspection at the works can be written into the order, so flange markings and heat numbers are checked against the certificate before dispatch.',
        ],
      },
      {
        h2: 'Range made at the Mumbai works',
        table: {
          head: ['Parameter', 'Range'],
          rows: [
            ['Standards', 'ASME B16.5 (NPS ½"–24"), ASME B16.47 Series A and B (NPS 26"–60"), and drawing-specific blinds'],
            ['Pressure classes', 'Class 150, 300, 600, 900, 1500 and 2500 (B16.5)'],
            ['Facings', 'Raised face, flat face and ring type joint'],
            ['Materials', 'A105, A350 LF2, F304/F304L, F316/F316L, F321, F11, F22, F91, duplex F51/F60, super duplex F53/F55, nickel alloys to ASTM B564'],
            ['Testing', 'Dimensional check, PMI on alloys, UT and hydrostatic testing on request'],
          ],
        },
      },
      {
        h2: 'Export from Mumbai',
        paras: [
          'Blind flanges for export are shipped through Jawaharlal Nehru Port, with each item traceable by heat number to its certificate; state any packing requirement in the RFQ. The documents normally issued are the commercial invoice, packing list, certificate of origin, EN 10204 3.1 mill test certificates and bill of lading. An EN 10204 3.2 certificate, witnessed by a third-party inspector, can be added when the order calls for it.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I inspect blind flanges at your Mumbai works before dispatch?', a: 'Name the inspection body and the witness points (dimensions, PMI, UT or hydrostatic test) in the RFQ. The quote confirms the witness inspection, and an EN 10204 3.2 certificate can be issued where the order calls for it.' },
      { q: 'Which blind flange materials do Mumbai refineries usually order?', a: 'A105 and A350 LF2 for general and low-temperature hydrocarbon service, F11, F22 and F91 alloy steel for hot sections, and NACE MR0175 hardness-controlled carbon steel for sour service.' },
      { q: 'Do you make blind flanges larger than 24 inches?', a: 'Yes. ASME B16.47 Series A and Series B blind flanges cover NPS 26" to 60". State the series, because Series A and B differ in bolt circle and thickness.' },
      { q: 'What paperwork comes with a Mumbai order?', a: 'A tax invoice under the company\'s GST registration and an EN 10204 3.1 MTC for every heat. Export orders also get a certificate of origin, packing list and bill of lading.' },
    ],
    related: [
      ['/products/flanges/flanges-manufacturer-mumbai/', 'Our Mumbai flange works'],
      ['/products/flanges/weld-neck-flange-manufacturer-mumbai/', 'Weld neck flanges made in Mumbai'],
      ['/products/flanges/blind-flange/', 'Blind flanges in every material grade'],
      ['/quality/', 'Quality and inspection at our works'],
    ],
  },
  '/products/flanges/duplex-blind-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures forged duplex and super duplex blind flanges at its Mumbai works in ASTM A182 F51 (UNS S31803), F60 (UNS S32205), F53 (UNS S32750) and F55 (UNS S32760). They are machined to ASME B16.5 and B16.47 with a raised face or RTJ groove, PMI-tested, and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Why duplex is specified for blind flanges',
        paras: [
          'Duplex stainless steel has a mixed microstructure of roughly equal austenite and ferrite. That gives it about twice the yield strength of 316L and much better resistance to chloride pitting and chloride stress corrosion cracking. Blind flanges in duplex are used where 316L would pit: seawater and firewater systems, produced water, desalination brine, offshore topsides and chloride-bearing chemical streams.',
          'Pitting resistance is compared with the PREN (%Cr + 3.3×%Mo + 16×%N). Standard 2205 duplex sits around 35, and super duplex grades are specified at 40 or above, which is why super duplex is the usual choice for warm seawater.',
        ],
      },
      {
        h2: 'Duplex and super duplex grades',
        table: {
          head: ['ASTM A182 grade', 'UNS', 'Family', 'Typical use'],
          rows: [
            ['F51', 'S31803', '2205 duplex', 'Produced water, brackish water, chemical process'],
            ['F60', 'S32205', '2205 duplex, tighter chemistry', 'Same duties as F51 with higher minimum Cr, Mo and N'],
            ['F53', 'S32750', 'Super duplex 2507', 'Seawater, firewater, offshore topsides'],
            ['F55', 'S32760', 'Super duplex with W and Cu', 'Seawater and aggressive chloride service'],
          ],
        },
      },
      {
        h2: 'Heavy sections: the quality risk in duplex blind flanges',
        paras: [
          'A blind flange is a solid disc, often the thickest forging on a duplex package. If a thick section cools too slowly after solution annealing, intermetallic phases such as sigma form. They cut toughness and corrosion resistance without any visible sign. The forging is therefore solution annealed and rapidly water quenched, and buyers commonly specify ASTM A923 testing and a ferrite count to prove the structure is sound.',
          'State A923, ferrite range, impact test temperature and any NACE MR0175 / ISO 15156 requirement in the RFQ. The results are reported with the EN 10204 3.1 certificate. Duplex is not used above about 316 °C, the limit ASME B31.3 sets because of 475 °C embrittlement.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between F51 and F60 duplex blind flanges?', a: 'Both are 2205 duplex. F60 (S32205) has higher minimum chromium, molybdenum and nitrogen. Its chemistry falls inside the S31803 limits, so material made to F60 can usually be certified to both grades.' },
      { q: 'Do I need super duplex for seawater?', a: 'For warm or aerated seawater and firewater systems, super duplex F53 or F55 with PREN of 40 or more is the usual specification. Standard 2205 suits lower-chloride and cooler duties.' },
      { q: 'What is the maximum temperature for duplex flanges?', a: 'About 316 °C (600 °F). Above that, long exposure leads to 475 °C embrittlement of the ferrite, so ASME B31.3 does not allow duplex above this limit.' },
      { q: 'How do you check a duplex blind flange before dispatch?', a: 'PMI confirms the grade, and ASTM A923 testing and a ferrite count check the microstructure when ordered. UT checks the soundness of the forging. All results are reported against the heat number.' },
    ],
    related: [
      ['/materials/duplex-2205-flanges/', 'F51 / F60 duplex flanges'],
      ['/materials/super-duplex-2507-flanges/', 'F53 super duplex flanges'],
      ['/materials/super-duplex-zeron-100-flanges/', 'Super duplex Zeron 100 flanges'],
      ['/products/flanges/blind-flange/', 'Blind flange product overview'],
    ],
  },

  '/products/flanges/nickel-blind-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings supplies nickel alloy blind flanges forged to ASTM B564 at its Mumbai works: Inconel 625 (UNS N06625), Hastelloy C276 (UNS N10276) and Monel 400 (UNS N04400). They are machined to ASME B16.5 and B16.47, PMI-verified and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'When a nickel alloy blind flange is justified',
        paras: [
          'Nickel alloys are specified where stainless and duplex steels fail. That means hot concentrated chlorides, reducing acids, wet chlorine, hydrofluoric acid and high-temperature oxidising gases. A blind flange is a solid piece of alloy, so it is one of the most expensive flanges on a nickel package. Choose the alloy for the specific fluid, and do not over-specify the pressure class.',
        ],
        table: {
          head: ['Alloy', 'UNS', 'Where it is used'],
          rows: [
            ['Inconel 625', 'N06625', 'Seawater and brine, flue-gas scrubbers, high-temperature service; Mo and Nb give high strength'],
            ['Hastelloy C276', 'N10276', 'Wet chlorine, hypochlorite, hydrochloric acid, contaminated sulphuric acid'],
            ['Monel 400', 'N04400', 'Hydrofluoric acid alkylation units, seawater and brackish water; nickel-copper alloy'],
          ],
        },
      },
      {
        h2: 'Pressure ratings are not the same as carbon steel',
        paras: [
          'ASME B16.5 places nickel alloys in their own material groups: Monel 400 in group 3.4, and Inconel 625 and Hastelloy C276 in group 3.8. Each group has its own pressure-temperature table. A Class 300 Monel 400 blind flange does not carry the same pressure as a Class 300 A105 one, so check the rating for the alloy at the design temperature before fixing the class.',
          'Tell us the heat-treatment condition the design needs, for example annealed or solution annealed for Inconel 625 in high-temperature service. It is stated on the certificate.',
        ],
      },
      {
        h2: 'Telling the alloys apart: PMI and certification',
        paras: [
          'Inconel 625 and Hastelloy C276 are both nickel-chromium-molybdenum alloys and look the same. C276 carries about 16% molybdenum plus tungsten. Inconel 625 carries about 9% molybdenum plus niobium. PMI on every flange confirms these elements before marking, so a mix-up cannot reach site.',
          'The EN 10204 3.1 certificate gives the ASTM B564 chemistry, mechanical results and heat number for each heat, and the same heat number is stamped on the flange rim.',
        ],
      },
    ],
    faqs: [
      { q: 'Inconel 625 or Hastelloy C276: which blind flange do I need?', a: 'C276 for wet chlorine, hypochlorite and hydrochloric or contaminated sulphuric acid. Inconel 625 for seawater, brines and high-temperature duty where its strength matters. Send the fluid, concentration and temperature to confirm.' },
      { q: 'Why is Monel 400 used in HF alkylation units?', a: 'Monel 400 (UNS N04400) resists hydrofluoric acid across a wide range of concentrations, where stainless steels are attacked. It is also used in seawater service.' },
      { q: 'What standard covers nickel alloy flange forgings?', a: 'ASTM B564 covers nickel alloy forgings. The flange dimensions follow ASME B16.5 or B16.47, and the pressure rating comes from the B16.5 group for that alloy.' },
      { q: 'Do nickel blind flanges come with PMI reports?', a: 'Yes. Nickel alloy flanges are PMI-tested to confirm the key elements, and the results are reported with the EN 10204 3.1 certificate.' },
    ],
    related: [
      ['/materials/inconel-625-flanges/', 'Inconel 625 flange grade data'],
      ['/materials/hastelloy-c276-flanges/', 'Hastelloy C276 flange grade data'],
      ['/materials/monel-400-flanges/', 'Monel 400 flanges'],
      ['/products/flanges/blind-flange/', 'Compare blind flange options'],
    ],
  },

  '/products/flanges/non-porous-lined-blind-flange/': {
    intro: 'For corrosive service, Remax Forge & Fittings supplies forged blind flanges in solid corrosion-resistant alloy and forged steel blind flange bodies for lined systems. Forging leaves no casting porosity to leak through. They are made to ASME B16.5 at the Mumbai works, with UT and PMI available and EN 10204 3.1 certificates.',
    sections: [
      {
        h2: 'Why a forged blind flange is non-porous',
        paras: [
          'A cast blind flange can contain shrinkage cavities and gas porosity. In corrosive service a pore is a starting point for attack, and a chain of pores can become a leak path straight through the plate. Forging works the metal under pressure, closing internal voids and giving a dense, directional grain structure.',
          'Ultrasonic testing (UT) then confirms the forging is free of laminations and inclusions. On toxic or highly hazardous fluids, such as ASME B31.3 Category M service, that through-thickness soundness is the main reason a forged blind flange is specified.',
        ],
      },
      {
        h2: 'Solid alloy or lined: choosing the construction',
        table: {
          head: ['Construction', 'Chosen for', 'Limitation'],
          rows: [
            ['Solid F316L', 'Mild acids, solvents, caustic at moderate temperature', 'Pitting where chlorides are present'],
            ['Solid duplex / super duplex', 'Chloride-bearing water and process streams', 'Not used above about 316 °C'],
            ['Solid nickel alloy (625, C276)', 'Hot acids, wet chlorine, hypochlorite', 'Highest material cost'],
            ['Lined steel body (PTFE, PFA or rubber)', 'Strong acids and alkalis no economic metal survives', 'Temperature and vacuum limits of the lining'],
          ],
        },
      },
      {
        h2: 'Specifying a blind flange body for lining',
        paras: [
          'In a lined blind flange, the forged body (usually carbon steel) carries the pressure and the lining carries the corrosion. The lining wraps over the gasket face, so the body must be machined to the lining supplier\'s drawing: face finish, edge radius, any vent hole and the final thickness. Send that drawing, the lining material and the drilling standard with the RFQ. The quote confirms what is machined and what is included.',
          'For solid alloy blinds, state the fluid, concentration and temperature. The grade is checked against them, and every alloy flange is PMI-tested before release.',
        ],
      },
    ],
    faqs: [
      { q: 'Are forged blind flanges non-porous?', a: 'Forging closes internal voids, so a forged blind flange has no casting porosity. UT can be added to confirm through-thickness soundness, and the result is reported with the MTC.' },
      { q: 'Should I choose a solid alloy or a lined blind flange?', a: 'Solid alloy where a stainless, duplex or nickel grade resists the fluid at the design temperature. A lined steel blind where no economic metal survives, provided the lining\'s temperature and vacuum limits are met.' },
      { q: 'Which blind flange suits hydrochloric acid?', a: 'Hydrochloric acid attacks stainless and duplex steels. Hastelloy C276 or a PTFE-lined steel blind is the usual choice, depending on concentration and temperature.' },
      { q: 'What certificate covers a corrosive-service blind flange?', a: 'An EN 10204 3.1 mill test certificate with chemistry, mechanical properties and heat number, plus PMI and UT reports when ordered.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'Blind flange dimensions and facings'],
      ['/products/flanges/nickel-blind-flange-manufacturer/', 'Nickel alloy blind flanges'],
      ['/products/flanges/duplex-blind-flange-manufacturer/', 'Duplex and super duplex blinds'],
      ['/materials/stainless-steel-316-flanges/', 'Stainless 316 flanges for chloride duty'],
    ],
  },

  '/products/flanges/spectacle-blind-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings manufactures spectacle blinds, paddle blinds and paddle spacers to ASME B16.48 for oil and gas isolation duty at its Mumbai works. The range covers NPS ½"–24" in Classes 150 to 2500, raised face or ring type joint, in A105, A350 LF2, stainless steel and duplex, each with an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Positive isolation on oil and gas plants',
        paras: [
          'A closed valve can pass. Before people open a pig trap, enter a vessel or work on a compressor, most operators require positive isolation: a solid plate across the line. The spectacle blind (figure-8) does this with one part. One end is a solid blank, the other a ring spacer with the same bore as the pipe, joined by a web.',
          'Turning the blind round switches the line between open and isolated. Because the unused end hangs outside the flanges, anyone walking past can see the isolation status, which is why spectacle blinds are standard at battery limits, pig launchers and receivers, and equipment isolation points.',
        ],
      },
      {
        h2: 'Spectacle, paddle or spacer',
        table: {
          head: ['Item', 'What it is', 'When used'],
          rows: [
            ['Spectacle blind', 'Blank and spacer in one figure-8 piece', 'Smaller sizes and classes, where the piece can be handled'],
            ['Paddle blind', 'Solid blank with a handle', 'Larger or heavier sizes, used as a pair with a spacer'],
            ['Paddle spacer', 'Ring with pipe bore and a handle', 'Fills the gap when the paddle blind is removed'],
          ],
        },
        paras: [
          'ASME B16.48 thickness rises with size and class. A large Class 900 spectacle blind is too heavy to swing safely, so paddle and spacer pairs take over. The flange joint needs jackscrews or a spreader to open the gap.',
        ],
      },
      {
        h2: 'Facing and material for hydrocarbon service',
        paras: [
          'On RTJ lines the blind is faced to take ring joint gaskets on both sides, so each changeover uses two rings. Match the blind material to the line flanges: A105 for general hydrocarbon service, A350 LF2 Class 1 where blowdown can cool the line (impact tested at −46 °C), and duplex for produced water.',
          'For sour gas, call up NACE MR0175 / ISO 15156. Hardness is then controlled to the standard\'s limits and reported on the certificate.',
        ],
      },
    ],
    faqs: [
      { q: 'What standard covers spectacle blinds?', a: 'ASME B16.48 covers spectacle blinds, paddle blinds and paddle spacers for NPS ½" to 24", Classes 150 to 2500, to fit between ASME B16.5 flanges.' },
      { q: 'When should I use a paddle blind instead of a spectacle blind?', a: 'When the one-piece spectacle becomes too heavy to rotate by hand, which happens at larger sizes and higher classes. A paddle blind and paddle spacer pair is then used.' },
      { q: 'Do RTJ spectacle blinds need special gaskets?', a: 'They use ring joint gaskets to ASME B16.20 on both faces, so two rings are needed per joint. The ring must be softer than the groove, so specify both materials.' },
      { q: 'Can spectacle blinds be supplied for sour service?', a: 'Yes, when NACE MR0175 / ISO 15156 is on the order. Hardness is held within the standard\'s limits and reported on the EN 10204 3.1 certificate.' },
    ],
    related: [
      ['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flanges'],
      ['/products/flanges/spectacle-blind-flange-for-petrochemical/', 'Spectacle blinds for petrochemical'],
      ['/products/flanges/sour-service-nace-flange/', 'Flanges for wet H2S service'],
      ['/products/flanges/blind-flange-for-oil-and-gas/', 'Oil and gas blind flanges'],
    ],
  },

  '/products/flanges/alloy-weld-neck-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures alloy steel weld neck flanges at its Mumbai works in ASTM A182 F11 and F22, with F9 and F91 for higher temperatures. They are made to ASME B16.5 and B16.47 in Classes 150 to 2500, bored to the schedule of the mating pipe, PMI-verified and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Why chrome-moly flanges for hot service',
        paras: [
          'Above about 425 °C, prolonged exposure can turn the carbides in carbon steel to graphite and weaken it. Chromium and molybdenum raise creep strength and oxidation resistance at temperature, and improve resistance to hydrogen attack in hot hydrogen service. That makes chrome-moly the standard for main steam and reheat lines, refinery heater outlets, hydrotreaters and reformers.',
        ],
        table: {
          head: ['ASTM A182 grade', 'Nominal chemistry', 'Matching A335 pipe'],
          rows: [
            ['F11 (usually Class 2)', '1¼Cr–½Mo', 'P11'],
            ['F22 (usually Class 3)', '2¼Cr–1Mo', 'P22'],
            ['F9', '9Cr–1Mo', 'P9'],
            ['F91', '9Cr–1Mo–V', 'P91'],
          ],
        },
      },
      {
        h2: 'Why the weld neck design suits alloy piping',
        paras: [
          'Hot alloy lines cycle in temperature, and cycling punishes fillet welds. The weld neck\'s tapered hub moves stress away from the flange ring, and its butt weld can be fully radiographed. The bore is machined to the inside diameter of the pipe schedule, so the weld root lines up and the flow sees no step. Give the pipe schedule or wall thickness with every size so the bore is correct.',
        ],
      },
      {
        h2: 'Welding, heat treatment and PMI',
        paras: [
          'F11 is ASME P-No. 4, F22 is P-No. 5A and F91 is P-No. 15E. All need preheat and post-weld heat treatment under the piping code, and F91 needs tight control of its tempering temperature. The flanges are supplied in the heat-treated condition required by A182, and that condition is stated on the certificate.',
          'F11, F22 and carbon steel look identical. A carbon steel flange in a chrome-moly line is a classic cause of high-temperature failure, so every alloy flange is PMI-tested for chromium and molybdenum before it is stamped and released.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between F11 and F22 weld neck flanges?', a: 'F11 is 1¼Cr–½Mo and F22 is 2¼Cr–1Mo. The higher chromium and molybdenum of F22 give better creep strength and oxidation resistance, so it is used at higher temperatures. Match the flange to the P11 or P22 pipe.' },
      { q: 'Do you supply F91 weld neck flanges?', a: 'Yes, F91 (9Cr–1Mo–V) for high-temperature steam and power piping. State the pipe schedule and any hardness requirement after heat treatment in the RFQ.' },
      { q: 'Why is PMI important on alloy steel flanges?', a: 'Chrome-moly and carbon steel cannot be told apart by eye, and a wrong-grade flange can fail in hot service. PMI confirms the chromium and molybdenum content of each flange.' },
      { q: 'Can the bore match my pipe schedule?', a: 'Yes. Weld neck flanges are bored to the schedule or wall thickness you specify, such as Sch 40, 80 or 160, so the butt weld aligns with the pipe.' },
    ],
    related: [
      ['/materials/alloy-steel-f11-f22-flanges/', 'F11 / F22 chrome-moly flange data'],
      ['/materials/alloy-steel-f91-flanges/', 'F91 creep-strength flange data'],
      ['/products/flanges/weld-neck-flange/', 'Weld neck flange range'],
      ['/products/flanges/high-temperature-cryogenic-flange/', 'High-temperature and cryogenic flanges'],
    ],
  },

  '/products/flanges/carbon-slip-on-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures ASTM A105 carbon steel slip-on flanges at its Mumbai works to ASME B16.5, NPS ½"–24", raised face or flat face, with A350 LF2 for low-temperature lines. Every flange is stamped with its heat number and supplied with an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Why A105 slip-on flanges are the workhorse of utility piping',
        paras: [
          'A slip-on flange slides over the pipe, so the fitter does not need an exact cut length or perfect alignment before welding. It costs less than a weld neck and is quicker to install. That is why cooling water, fire water, compressed air, low-pressure steam, tank farm and general utility lines are full of A105 slip-ons, mostly in Class 150 and 300.',
          'ASTM A105 is forged carbon steel with a minimum tensile strength of 485 MPa and yield strength of 250 MPa. It is not impact tested. Where the line can see low temperature, switch to A350 LF2 Class 1, which is Charpy tested at −46 °C.',
        ],
      },
      {
        h2: 'A105 slip-on pressure ratings by temperature',
        table: {
          head: ['Temperature', 'Class 150', 'Class 300'],
          rows: [
            ['38 °C', '19.6 bar', '51.1 bar'],
            ['100 °C', '17.7 bar', '46.6 bar'],
            ['200 °C', '13.8 bar', '43.8 bar'],
            ['300 °C', '10.2 bar', '39.8 bar'],
          ],
        },
        paras: [
          'Values are ASME B16.5 ratings for material group 1.1. Note how Class 150 loses about half its rating between ambient and 300 °C. Hot water and steam lines often need Class 300 even at modest pressure.',
        ],
      },
      {
        h2: 'Welding and where slip-ons should not be used',
        paras: [
          'A slip-on is attached with two fillet welds: one outside on the hub and one inside at the pipe end. The pipe end is set back from the flange face so the inner weld does not reach the gasket surface. It is commonly quoted that a slip-on has about two-thirds of the strength of a weld neck under internal pressure, and about one-third of its fatigue life.',
          'For high-pressure, cyclic, vibrating or severe-temperature service, use a weld neck instead.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between A105 and A105N slip-on flanges?', a: 'A105N means the forging has been normalized. Specify it if the project requires normalized material; the heat treatment is then stated on the EN 10204 3.1 certificate.' },
      { q: 'Slip-on or weld neck for a carbon steel line?', a: 'Slip-on for low-pressure, non-cyclic utility service where fit-up speed and cost matter. Weld neck for high pressure, temperature cycling, vibration or where full radiography of the joint is required.' },
      { q: 'Can A105 slip-on flanges be galvanised or painted?', a: 'State the coating, such as primer, paint system or hot-dip galvanising, in the RFQ. The quote confirms what is applied.' },
      { q: 'Are A105 slip-on flanges suitable below 0 °C?', a: 'A105 is not impact tested. For lines that can go below about −29 °C, or where the code calls for impact testing, use A350 LF2 Class 1.' },
    ],
    related: [
      ['/products/flanges/slip-on-flange/', 'Slip-on flange range'],
      ['/materials/carbon-steel-flanges/', 'Carbon steel flange material page'],
      ['/products/flanges/class-150-flange-supplier/', 'Class 150 flange ratings'],
      ['/products/flanges/slip-on-flange-for-water-infrastructure/', 'Slip-on flanges for water infrastructure'],
    ],
  },

  '/products/flanges/ss304-slip-on-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures ASTM A182 F304 and F304L stainless steel slip-on flanges at its Mumbai works to ASME B16.5, NPS ½"–24", raised face or flat face. Each flange is PMI-tested, stamped with its heat number and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Where 304 stainless slip-on flanges fit',
        paras: [
          '304 is the general-purpose austenitic stainless steel. Slip-on flanges in F304 and F304L are used on low-pressure water treatment, chemical utility, instrument air, nitrogen, nitric acid and many food-grade process utility lines, where corrosion resistance is needed but chlorides are low. 304 keeps its toughness at very low temperature, so it also serves cold and cryogenic utility lines.',
          'Its weak point is chlorides. 304 pits in chloride water and can suffer chloride stress corrosion cracking above about 60 °C. For brackish water, seawater or chloride-bearing chemicals, move to 316L or duplex.',
        ],
      },
      {
        h2: '304, 304L or 304H',
        table: {
          head: ['Grade', 'Carbon', 'Choose it for'],
          rows: [
            ['F304', 'max 0.08% C', 'General service; higher strength than 304L'],
            ['F304L', 'max 0.030% C', 'Welded joints, to avoid sensitisation in the heat-affected zone'],
            ['F304H', '0.04–0.10% C (controlled)', 'High-temperature service where creep strength matters'],
          ],
        },
        paras: [
          'Low-carbon 304L has a lower strength, so ASME B16.5 gives it a lower rating: Class 150 at 38 °C is 19.0 bar for F304 but 15.9 bar for F304L. Material that meets both grades can be certified F304/F304L, which gives the weldability of 304L with the 304 rating. Ask for dual certification in the RFQ.',
        ],
      },
      {
        h2: 'Fabrication notes for stainless slip-ons',
        paras: [
          'Weld with a matching low-carbon filler such as 308L. A slip-on leaves a narrow gap between the pipe and the flange bore behind the inside weld. In corrosive service, make the inside fillet weld continuous so the crevice is sealed from the process fluid.',
          'Keep stainless flanges away from carbon steel tools and grinding dust. Embedded iron rusts and can start pitting, so specify any pickling or passivation in the RFQ.',
        ],
      },
    ],
    faqs: [
      { q: 'Should I order F304 or F304L slip-on flanges?', a: 'F304L for welded joints in corrosive service, because its low carbon avoids sensitisation. If you also need the higher pressure rating of F304, specify dual-certified F304/F304L.' },
      { q: 'Can 304 slip-on flanges be used on seawater?', a: 'Not recommended. 304 pits in chloride water. Use 316L for mild chloride exposure and duplex or super duplex for seawater.' },
      { q: 'What is the pressure rating of a Class 150 SS304 flange?', a: 'Under ASME B16.5, Class 150 F304 is rated 19.0 bar at 38 °C, and F304L is rated 15.9 bar. Ratings fall as temperature rises.' },
      { q: 'How is the 304 grade verified?', a: 'Each flange is PMI-tested for chromium and nickel. The EN 10204 3.1 certificate gives the full chemistry and mechanical results for the heat number stamped on it.' },
    ],
    related: [
      ['/materials/stainless-steel-304-flanges/', 'SS304 flange chemistry and ratings'],
      ['/products/flanges/slip-on-flange/', 'All slip-on flange sizes and classes'],
      ['/materials/stainless-steel-316-flanges/', '316L flange material page'],
      ['/products/flanges/carbon-slip-on-flange-manufacturer/', 'A105 slip-on flange ratings'],
    ],
  },

  '/products/flanges/ss316-weld-neck-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures ASTM A182 F316 and F316L stainless steel weld neck flanges at its Mumbai works to ASME B16.5 (NPS ½"–24") and B16.47 (NPS 26"–60"), Classes 150 to 2500. Each is bored to the schedule of the pipe, PMI-tested for molybdenum and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Why 316L weld neck flanges are specified',
        paras: [
          '316L adds 2–3% molybdenum to the 18Cr–8Ni base of 304. That raises its resistance to pitting and crevice corrosion in chlorides, and makes it the default stainless steel for chemical process, offshore utility, pharmaceutical process and coastal plant piping.',
          'The weld neck form is chosen when the joint must take high pressure, temperature cycling or vibration, or when the butt weld must be radiographed. The tapered hub spreads stress into the pipe, and the bore matches the pipe inside diameter, so there is no step for fluid to erode or for deposits to collect.',
        ],
      },
      {
        h2: 'Ratings: F316 versus F316L',
        table: {
          head: ['Grade (B16.5 group)', 'Class 150 at 38 °C', 'Class 300 at 38 °C', 'Class 600 at 38 °C'],
          rows: [
            ['F316 (group 2.2)', '19.0 bar', '49.6 bar', '99.3 bar'],
            ['F316L (group 2.3)', '15.9 bar', '41.4 bar', '82.7 bar'],
          ],
        },
        paras: [
          'The lower strength of 316L gives it a lower rating in every class. Dual-certified F316/F316L material provides the low-carbon chemistry with the F316 rating. For sustained service at high temperature, F316H with controlled carbon is the grade to specify.',
        ],
      },
      {
        h2: 'Bore, welding and verification',
        list: [
          'Bore: stainless lines often use thin walls such as Sch 10S and 40S. Give the schedule with every size so the weld neck bore matches the pipe inside diameter.',
          'Welding: use 316L filler and an inert-gas back purge so the root does not oxidise and lose corrosion resistance.',
          'PMI: molybdenum is the only practical difference between 316L and 304L, so each flange is PMI-checked for it before release.',
          'Certificate: EN 10204 3.1 with chemistry, mechanical results and heat number. EN 10204 3.2 is available with third-party witnessing when ordered.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between 316 and 316L weld neck flanges?', a: '316L has a maximum of 0.030% carbon against 0.08% for 316. That protects welded joints from sensitisation but lowers the ASME B16.5 rating. Dual-certified F316/F316L gives both benefits.' },
      { q: 'Which bore should I order for a 316L weld neck?', a: 'The bore must match the pipe inside diameter, so state the schedule, for example Sch 10S, 40S or 80S, or give the wall thickness for each size.' },
      { q: 'Is 316L suitable for seawater?', a: '316L is used for mild chloride exposure. It can pit and crevice-corrode in warm seawater, where duplex or super duplex is the better choice.' },
      { q: 'Do you supply 316L weld neck flanges above 24 inches?', a: 'Yes. ASME B16.47 Series A and Series B weld neck flanges cover NPS 26" to 60". State the series when ordering.' },
    ],
    related: [
      ['/materials/stainless-steel-316-flanges/', 'Grade 316 flange properties'],
      ['/products/flanges/weld-neck-flange/', 'All weld neck flange sizes and classes'],
      ['/products/flanges/long-weld-neck-flange/', 'Long weld neck flanges for nozzles'],
      ['/materials/duplex-2205-flanges/', '2205 duplex flange properties'],
    ],
  },

  '/products/flanges/class-150-flange-supplier/': {
    intro: 'Remax Forge & Fittings supplies Class 150 flanges in every ASME B16.5 type from its Mumbai works: weld neck, slip-on, socket weld, threaded, lap joint and blind, NPS ½"–24", plus ASME B16.47 for NPS 26"–60". Materials are carbon, low-temperature, stainless, alloy and duplex steel, each with an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'What "Class 150" actually rates',
        paras: [
          'Class 150 is a pressure class, not a pressure. The allowable working pressure depends on the material group and the temperature. A105 carbon steel in Class 150 is good for 19.6 bar at 38 °C, but only 13.8 bar at 200 °C. Low-carbon stainless 316L carries less than carbon steel even at ambient.',
        ],
        table: {
          head: ['Material (B16.5 group)', 'Class 150 at 38 °C'],
          rows: [
            ['A105 / A350 LF2 (1.1)', '19.6 bar'],
            ['F304 / F316 (2.1 / 2.2)', '19.0 bar'],
            ['F304L / F316L (2.3)', '15.9 bar'],
          ],
        },
      },
      {
        h2: 'Where Class 150 is used, and when to move to Class 300',
        paras: [
          'Class 150 covers most cooling water, fire water, compressed air, tank farm, low-pressure steam, drainage and general utility piping. Move to Class 300 when the design pressure at the design temperature exceeds the Class 150 rating. This happens sooner than many expect on hot water and steam lines, because the rating falls steeply with temperature.',
          'Class 150 raised faces are 1.6 mm high. Its drilling matches ASME B16.1 Class 125 cast iron flanges, so a Class 150 flat face flange is the right partner for cast iron pumps and valves. Do not bolt a raised face to them. Class 150 drilling is not the same as EN 1092-1 PN16 across the size range.',
        ],
      },
      {
        h2: 'Inspection on Class 150 orders',
        paras: [
          'Every order gets a dimensional check against ASME B16.5 and an EN 10204 3.1 certificate tied to the heat number on each flange. Alloy and stainless flanges are PMI-tested. ASME B16.5 does not require individual flanges to be hydrostatically tested. Where your specification calls for hydrostatic testing or UT, put it in the RFQ and the results are reported with the certificate.',
        ],
      },
    ],
    faqs: [
      { q: 'What pressure can a Class 150 flange take?', a: 'For A105 carbon steel, 19.6 bar at 38 °C, falling to 13.8 bar at 200 °C and 10.2 bar at 300 °C under ASME B16.5. Stainless and alloy grades have their own ratings.' },
      { q: 'Is a Class 150 flange the same as PN16?', a: 'No. They are different standards, and bolt circle, bolt count and hole size differ in several sizes. Specify which standard the mating flange follows.' },
      { q: 'Can a Class 150 flange mate with a cast iron valve?', a: 'Yes. Class 150 drilling matches ASME B16.1 Class 125 cast iron flanges. Use a flat face steel flange with a full-face gasket so the cast iron is not overstressed.' },
      { q: 'Are Class 150 flanges hydrostatically tested?', a: 'ASME B16.5 does not require it for individual flanges. Hydrostatic testing can be added to the order, and the results are reported with the MTC.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Weld neck flange dimensions'],
      ['/products/flanges/slip-on-flange/', 'Slip-on flange dimensions'],
      ['/products/flanges/high-pressure-flange-manufacturer/', 'High-pressure flanges, Class 900 to 2500'],
      ['/materials/carbon-steel-flanges/', 'A105 and LF2 flange data'],
    ],
  },

  '/products/flanges/flanges-manufacturer-mumbai/': {
    intro: 'Remax Forge & Fittings is a flange manufacturer based in Mumbai. It was founded by Mr. Revaram Purohit and is led today by Mr. Vikas Purohit. From its Mumbai works it supplies ASME B16.5 and B16.47 flanges in every common type, class and material to plants and fabricators in Maharashtra, across India and overseas, under ISO 9001:2015 quality management.',
    sections: [
      {
        h2: 'The full flange range from one Mumbai works',
        table: {
          head: ['Flange type', 'Typical use'],
          rows: [
            ['Weld neck', 'High pressure, temperature cycling, radiographed butt welds'],
            ['Slip-on', 'Low-pressure utility and water lines'],
            ['Socket weld', 'Small-bore process and instrument lines, NPS ½"–3"'],
            ['Threaded', 'Non-welded small-bore utility lines'],
            ['Lap joint', 'Alloy stub-end systems that need bolt-hole rotation'],
            ['Blind', 'End closures, test closures, future tie-ins'],
            ['Spectacle blind (ASME B16.48)', 'Positive isolation for maintenance'],
          ],
        },
        paras: [
          'Each type is made in raised face, flat face or ring type joint. Materials run from A105 and A350 LF2 carbon steel through F304/F316 stainless, F11/F22/F91 chrome-moly, F51/F53/F55 duplex and super duplex, to ASTM B564 nickel alloys.',
        ],
      },
      {
        h2: 'Who buys flanges from a Mumbai manufacturer',
        paras: [
          'Mumbai sits next to one of India\'s densest process-industry belts. The refinery, fertiliser and petrochemical units around Chembur and Trombay need alloy, low-temperature and sour-service flanges for turnarounds. Chemical, dye and pharmaceutical plants in the Thane–Belapur MIDC area and Taloja need stainless steel and duplex flanges. Pipe-spool fabricators and EPC contractors across Maharashtra need mixed-type orders delivered to one specification.',
          'For buyers outside India, orders ship through Jawaharlal Nehru Port (Nhava Sheva)',
        ],
      },
      {
        h2: 'What comes with every order',
        list: [
          'EN 10204 3.1 mill test certificate for each heat, with EN 10204 3.2 available when a third-party inspector is named on the order.',
          'Heat number, grade, size, class and standard stamped on each flange.',
          'PMI on stainless, alloy, duplex and nickel flanges. Hydrostatic testing and UT on request.',
          'GST tax invoice for Indian buyers. For export: commercial invoice, packing list, certificate of origin and bill of lading.',
          'Company registrations: GST registered and MSME Udyam registered.',
        ],
      },
    ],
    faqs: [
      { q: 'Where is Remax Forge & Fittings located?', a: 'The works and dispatch point are in Mumbai, India. Orders for other Indian states are dispatched from Mumbai, and export orders ship through Jawaharlal Nehru Port.' },
      { q: 'Which flange standards do you manufacture to?', a: 'ASME B16.5 for NPS ½" to 24", ASME B16.47 Series A and B for NPS 26" to 60", ASME B16.48 for spectacle blinds, and customer drawings for special flanges.' },
      { q: 'Can one order mix flange types and materials?', a: 'Yes. Fabricators often order weld neck, slip-on, blind and socket weld flanges in several grades together. Send the full bill of materials and it is quoted line by line.' },
      { q: 'Is the company ISO certified?', a: 'Yes. Remax Forge & Fittings is ISO 9001:2015 certified, and its certificates are shown on the certification page.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange-manufacturer-mumbai/', 'Mumbai weld neck flange range'],
      ['/products/flanges/blind-flange-manufacturer-mumbai/', 'Blind flanges, Mumbai'],
      ['/products/flanges/flanges-manufacturer-rajkot/', 'Flange supply to Rajkot'],
      ['/quality/', 'How we inspect and certify flanges'],
    ],
  },

  '/products/flanges/flanges-manufacturer-rajkot/': {
    intro: 'Remax Forge & Fittings supplies flanges to buyers in Rajkot and the wider Saurashtra region from its works in Mumbai. The range covers ASME B16.5 and B16.47 weld neck, slip-on, socket weld, threaded, lap joint and blind flanges in carbon, stainless, alloy and duplex steel, each traceable to an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Flanges for Rajkot\'s engineering cluster',
        paras: [
          'Rajkot is one of Gujarat\'s main engineering centres. It has a large base of pump, valve, diesel engine, machine tool and auto-component makers, and many small workshops that build skids and assemblies. For these OEMs, flanges are a component: they need the same size, class and drilling repeated across batches, with dimensional consistency and a certificate for every heat.',
          'Beyond the city, Saurashtra has the refinery and petrochemical complex at Jamnagar, chemical units along the coast, and the ports of Mundra and Kandla. Refinery shutdown work, chemical plant maintenance and export packing jobs from these sites need alloy, low-temperature and stainless flanges as well as standard carbon steel.',
        ],
      },
      {
        h2: 'What Rajkot buyers typically order',
        table: {
          head: ['Buyer', 'Usual flange requirement'],
          rows: [
            ['Pump and valve makers', 'A105 and F316 weld neck, slip-on and blind flanges in Class 150 and 300, repeated drilling'],
            ['Skid and package fabricators', 'Mixed types and classes to one project specification, with full MTC sets'],
            ['Refinery and petrochemical contractors', 'F11 / F22 alloy, LF2 low-temperature and NACE sour-service flanges'],
            ['Chemical and process plants', 'F304L / F316L stainless and duplex flanges with PMI reports'],
          ],
        },
      },
      {
        h2: 'Ordering from Rajkot',
        paras: [
          'Send the flange list with type, size, class, facing, material grade, the pipe schedule for weld neck bores, and the certificate and inspection required. The quote confirms each line and the dispatch terms from Mumbai. Every flange is stamped with its heat number, and the EN 10204 3.1 certificates travel with the consignment. Alloy and stainless flanges are PMI-tested, and hydrostatic testing or UT can be added.',
          'If the flanges go into an export assembly built in Rajkot, say so in the RFQ, so the documents your overseas customer needs are agreed on the quote.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have a factory in Rajkot?', a: 'No. Remax Forge & Fittings manufactures and dispatches from its works in Mumbai, and supplies Rajkot and Saurashtra buyers from there.' },
      { q: 'Can you supply repeat flange batches for pump and valve OEMs?', a: 'Yes. Give the drawing or standard, class, facing and drilling once, and repeat batches are made to the same specification, with a certificate for each heat.' },
      { q: 'Which certificates come with flanges delivered to Rajkot?', a: 'An EN 10204 3.1 mill test certificate per heat as standard, PMI reports for alloy and stainless grades, and a GST tax invoice.' },
      { q: 'Do you supply refinery-grade flanges for Jamnagar-area projects?', a: 'Yes: F11, F22 and F91 alloy steel, A350 LF2 low-temperature carbon steel and NACE MR0175 hardness-controlled flanges, made to ASME B16.5 and B16.47.' },
    ],
    related: [
      ['/products/flanges/flanges-manufacturer-mumbai/', 'Full flange range from Mumbai'],
      ['/products/flanges/weld-neck-flange/', 'Standard WNRF and WNRTJ flanges'],
      ['/products/flanges/slip-on-flange/', 'Standard SORF and SOFF flanges'],
      ['/materials/carbon-steel-flanges/', 'Forged carbon steel flanges'],
    ],
  },

  '/products/flanges/weld-neck-flange-manufacturer-mumbai/': {
    intro: 'Remax Forge & Fittings manufactures weld neck flanges at its Mumbai works to ASME B16.5 (NPS ½"–24", Classes 150 to 2500) and ASME B16.47 Series A and B (NPS 26"–60"). Each flange is bored to the schedule of the pipe it will be welded to, in carbon, low-temperature, stainless, chrome-moly, duplex or nickel alloy steel, with an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Weld neck flanges for Mumbai\'s process plants',
        paras: [
          'Weld neck flanges are used where a joint must not fail: high pressure, high temperature, temperature cycling, vibration or toxic fluids. Around Mumbai, that means refinery and fertiliser units at Chembur and Trombay, power and utility plants, and chemical units in the Thane–Belapur MIDC belt and Taloja.',
          'Many of these orders come during a shutdown, when the flange has to match a line installed years earlier. The quickest way to get the right flange is to give the size, class, facing, material grade and the pipe schedule or measured bore.',
        ],
      },
      {
        h2: 'Getting the bore right',
        paras: [
          'A weld neck is butt welded to the pipe, so its bore must equal the pipe inside diameter. A 6" Sch 40 pipe has a different bore from a 6" Sch 80 or Sch 160 pipe. A flange bored to the wrong schedule leaves a step at the root, which is hard to weld, collects deposits and erodes. Every weld neck is bored to the schedule or wall thickness on the order, and the hub end is bevelled for butt welding.',
        ],
        table: {
          head: ['What to specify', 'Example'],
          rows: [
            ['Size and standard', 'NPS 6", ASME B16.5'],
            ['Class and facing', 'Class 300, raised face'],
            ['Pipe schedule (sets the bore)', 'Sch 80'],
            ['Material grade', 'A105, F316L or F11 Class 2'],
            ['Certificate and inspection', 'EN 10204 3.1; PMI; UT if required'],
          ],
        },
      },
      {
        h2: 'Large-bore and long weld neck flanges',
        paras: [
          'Cooling water and flare headers often run above 24", where ASME B16.47 applies. Series A (heavier, derived from MSS SP-44) and Series B (lighter, derived from API 605) do not share bolt circles, so state the series. For vessel nozzles and thermowell connections, the long weld neck form has an extended straight barrel in place of the tapered hub.',
          'Mumbai buyers can arrange witness inspection at the works by naming the inspector and the witness points in the order.',
        ],
      },
    ],
    faqs: [
      { q: 'Why does a weld neck flange need the pipe schedule?', a: 'The flange bore must match the pipe inside diameter, and that changes with schedule. Without it the butt weld root will not line up.' },
      { q: 'What is the difference between B16.47 Series A and Series B?', a: 'Both cover NPS 26" to 60". Series A flanges are heavier, and Series B flanges are lighter with smaller bolts and a different bolt circle. They are not interchangeable.' },
      { q: 'Which weld neck materials do Mumbai refineries order?', a: 'Commonly A105 and A350 LF2 carbon steel, F11, F22 and F91 chrome-moly for hot sections, and F316L or duplex for corrosive streams, with NACE MR0175 hardness control for sour service.' },
      { q: 'Do you make long weld neck flanges?', a: 'Yes. Long weld neck flanges are made for vessel nozzles and instrument connections, to the barrel length and bore on the order.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Weld neck flange product overview'],
      ['/products/flanges/long-weld-neck-flange/', 'LWN flanges with extended barrel'],
      ['/products/flanges/flanges-manufacturer-mumbai/', 'Mumbai flange manufacturer overview'],
      ['/products/flanges/alloy-weld-neck-flange-manufacturer/', 'Chrome-moly weld neck flanges'],
    ],
  },

  '/products/flanges/high-pressure-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings manufactures high-pressure flanges in ASME B16.5 Classes 900, 1500 and 2500 at its Mumbai works: weld neck, blind and socket weld types, ring type joint or raised face, in A105, A350 LF2, F316/F316L, F11/F22/F91 chrome-moly and duplex. ASME B16.47 covers large diameters, and every flange carries an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'High-pressure ratings by material',
        table: {
          head: ['Class', 'A105 (group 1.1) at 38 °C', 'F316 (group 2.2) at 38 °C'],
          rows: [
            ['Class 900', '153.2 bar', '148.9 bar'],
            ['Class 1500', '255.3 bar', '248.2 bar'],
            ['Class 2500', '425.5 bar', '413.7 bar'],
          ],
        },
        paras: [
          'These are ASME B16.5 ratings at ambient temperature and fall as temperature rises. Choose the class from the rating at the design temperature. In ASME B16.5, Class 2500 is only defined up to NPS 12".',
        ],
      },
      {
        h2: 'Flange type and facing at high pressure',
        paras: [
          'At these classes the weld neck flange is the normal choice. Its tapered hub and full-penetration butt weld carry the high bolt and pressure loads, and the weld can be radiographed. Socket weld flanges are used on small-bore lines. Slip-on flanges are not a high-pressure design, and ASME B16.5 does not list them in Class 2500.',
          'Ring type joint facing dominates in Classes 900 to 2500. The metal ring gasket sits in a machined groove and seals by being squeezed into it. Where a raised face is used, it is 6.4 mm high from Class 400 upward, against 1.6 mm in Classes 150 and 300, and it needs a spiral wound gasket with inner and outer rings.',
        ],
      },
      {
        h2: 'Bolting and inspection',
        list: [
          'Bolting: high-pressure joints usually take ASTM A193 B7 studs, A320 L7 for low temperature and A193 B16 for high temperature. The stud size and length follow the flange class.',
          'Hardness: for RTJ joints the ring must be softer than the groove, so the groove hardness is checked when required.',
          'NDT: UT of the forging and PMI of alloy grades. Hydrostatic testing on request, as ASME B16.5 does not require it for individual flanges.',
          'Documents: an EN 10204 3.1 certificate for each heat, with EN 10204 3.2 when a third-party inspector is named on the order.',
        ],
      },
    ],
    faqs: [
      { q: 'What pressure does a Class 1500 flange hold?', a: 'In A105 carbon steel, 255.3 bar at 38 °C under ASME B16.5, reducing as temperature rises. Stainless and alloy grades have their own ratings.' },
      { q: 'Should a Class 900 flange be RTJ or raised face?', a: 'RTJ is the common choice from Class 900 upward, especially on gas and hydrocarbon service. Raised face with a spiral wound gasket is also used. Follow the project piping specification.' },
      { q: 'What is the largest Class 2500 flange in ASME B16.5?', a: 'NPS 12". Larger high-pressure flanges are designed to other standards or the customer\'s drawing.' },
      { q: 'Are high-pressure flanges hydrostatically tested?', a: 'ASME B16.5 does not require hydrostatic tests on individual flanges. Hydrostatic testing, UT and PMI can be added to the order, with the results reported against the heat number.' },
    ],
    related: [
      ['/products/flanges/rtj-face-flange-manufacturer/', 'Ring type joint face flanges'],
      ['/products/flanges/weld-neck-flange/', 'Weld neck flanges in every grade'],
      ['/products/flanges/class-150-flange-supplier/', 'Class 150 utility flanges'],
      ['/products/flanges/sour-service-nace-flange/', 'Hardness-controlled NACE flanges'],
    ],
  },

  '/products/flanges/high-temperature-cryogenic-flange/': {
    intro: 'Remax Forge & Fittings manufactures flanges for both ends of the temperature range at its Mumbai works. For high-temperature service it supplies F11, F22, F9 and F91 chrome-moly and F304H, F316H, F321 and F347 stainless. For low-temperature and cryogenic lines it supplies A350 LF2 and F304L/F316L. All are made to ASME B16.5 and B16.47 and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Choosing the grade by temperature',
        table: {
          head: ['Service', 'Usual flange grade', 'Why'],
          rows: [
            ['Cryogenic, e.g. LNG and liquid nitrogen (down to −196 °C)', 'F304L, F316L', 'Austenitic steel has no ductile-to-brittle transition'],
            ['Low temperature (down to −46 °C)', 'A350 LF2 Class 1', 'Carbon steel Charpy-tested at −46 °C'],
            ['Ambient to moderate temperature', 'A105', 'Standard carbon steel; not impact tested'],
            ['Hot steam and hydrocarbon (above about 425 °C)', 'F11, F22, F9, F91', 'Chrome-moly creep strength; avoids graphitisation of carbon steel'],
            ['Very hot or corrosive high-temperature service', 'F304H, F316H, F321, F347', 'Austenitic creep strength; F321 and F347 are stabilised'],
          ],
        },
      },
      {
        h2: 'High-temperature flanges',
        paras: [
          'Above about 425 °C, prolonged service can convert the carbides in carbon steel to graphite and weaken it, so hot lines move to chrome-moly. F11 and F22 cover most steam and refinery heater service. F91 adds vanadium and niobium for the high creep strength of modern steam piping.',
          'Austenitic grades are used where both heat and corrosion act. F321 (titanium) and F347 (niobium) are stabilised to resist sensitisation between about 425 and 815 °C. F304H and F316H carry controlled carbon for creep strength. At these temperatures, flange leakage comes from bolt relaxation and thermal gradients more than from pressure, so weld neck flanges and high-temperature bolting are the norm.',
        ],
      },
      {
        h2: 'Cryogenic and low-temperature flanges',
        paras: [
          'Ferritic carbon steel becomes brittle when cold. A350 LF2 Class 1 is impact tested at −46 °C and covers most refrigerated, blowdown-exposed and cold-climate lines. Below that, LNG, liquid nitrogen, oxygen and ethylene service use austenitic F304L or F316L, which stay tough down to −196 °C. Impact testing is added where the design code requires it.',
          'Cold boxes and cryogenic lines see large temperature swings during cool-down. Weld neck flanges are preferred over slip-on or threaded types, and bolting such as A320 L7 or stainless B8 studs is chosen to match.',
        ],
      },
    ],
    faqs: [
      { q: 'Which flange material is used for LNG service?', a: 'Austenitic stainless F304L or F316L, which remain tough down to −196 °C. Impact testing is added where the design code requires it.' },
      { q: 'Can A105 flanges be used below zero?', a: 'A105 is not impact tested. For low-temperature service, use A350 LF2 Class 1, which is Charpy tested at −46 °C.' },
      { q: 'When should I use F321 or F347 instead of 304?', a: 'When the flange operates for long periods at roughly 425–815 °C, where 304 can become sensitised. Titanium in F321 and niobium in F347 stabilise the carbon.' },
      { q: 'Which flange type is best for thermal cycling?', a: 'The weld neck. Its tapered hub and butt weld handle cyclic thermal stress far better than the fillet welds of slip-on and socket weld flanges.' },
    ],
    related: [
      ['/materials/alloy-steel-f11-f22-flanges/', 'Chrome-moly flange material page'],
      ['/materials/stainless-steel-321-347-flanges/', 'Stabilised 321 / 347 flange data'],
      ['/materials/alloy-steel-f91-flanges/', '9Cr-1Mo-V F91 flanges'],
      ['/products/flanges/alloy-weld-neck-flange-manufacturer/', 'F11 / F22 weld neck flanges'],
    ],
  },

  '/products/flanges/rtj-face-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings machines ring type joint (RTJ) face flanges at its Mumbai works to ASME B16.5 and B16.47: weld neck, blind and other types, Classes 150 to 2500, in carbon, low-temperature, stainless, chrome-moly and duplex steel. Grooves are cut to the ring numbers of ASME B16.20, and each flange is certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'How a ring type joint seals',
        paras: [
          'A raised face joint relies on a soft gasket compressed between two flat faces. An RTJ joint uses a solid metal ring in a trapezoidal groove machined into each flange face. Bolt load squeezes the ring into the groove walls, plastically deforming it to make a metal-to-metal seal. The flange faces themselves do not touch.',
          'This seal holds at pressures, temperatures and vibration levels where a soft gasket can blow out. That is why RTJ is standard from Class 900 upward and is specified at lower classes on gas, hydrogen and hot hydrocarbon service.',
        ],
      },
      {
        h2: 'Ring types and hardness',
        table: {
          head: ['Ring material (ASME B16.20)', 'Maximum ring hardness'],
          rows: [
            ['Soft iron', '90 HB'],
            ['Low-carbon steel', '120 HB'],
            ['4–6% Cr, ½% Mo (F5)', '130 HB'],
            ['304, 316 or 347 stainless', '160 HB'],
          ],
        },
        paras: [
          'The ring must be softer than the flange groove so the ring deforms, not the groove. R rings come in oval or octagonal section. RX rings are pressure-energised: line pressure pushes them harder into the groove. Specify the ring type and number with the flange so the groove is cut to match.',
        ],
      },
      {
        h2: 'Machining and inspection of RTJ grooves',
        list: [
          'Groove dimensions and the ring number are cut and gauged to ASME B16.5 for each size and class.',
          'Groove side-wall finish is held to the 1.6 µm Ra maximum that ASME B16.5 sets for ring joint grooves. Radial tool marks across the sealing surface are not accepted.',
          'Groove hardness is checked when the order or the ring material calls for it.',
        ],
      },
    ],
    faqs: [
      { q: 'What is an RTJ flange?', a: 'A flange with a machined groove in its face for a solid metal ring gasket. When the bolts are tightened the ring deforms into the grooves and makes a metal-to-metal seal for high-pressure, high-temperature service.' },
      { q: 'What is the difference between R and RX rings?', a: 'R rings are plain oval or octagonal rings. RX rings have a pressure-energised profile, so line pressure increases their seating force. Both fit ASME B16.5 RTJ grooves of the matching ring number.' },
      { q: 'Why must the ring be softer than the flange?', a: 'The ring has to deform to seal. If it is harder than the groove, it damages the groove and the joint can leak. ASME B16.20 sets a maximum hardness for each ring material.' },
      { q: 'Can an RTJ ring be reused?', a: 'No. Once a ring has been deformed into the grooves, it is replaced every time the joint is opened.' },
    ],
    related: [
      ['/products/flanges/rtj-flange-ring-type-joint-for-oil-and-gas/', 'RTJ flanges for oil and gas lines'],
      ['/products/flanges/rtj-flange-ring-type-joint-for-petrochemical/', 'RTJ flanges for petrochemical'],
      ['/products/flanges/high-pressure-flange-manufacturer/', 'Class 900–2500 flange ratings'],
      ['/products/flanges/weld-neck-flange/', 'Main weld neck flange page'],
    ],
  },

  '/products/flanges/rtj-flange-ring-type-joint-for-petrochemical/': {
    intro: 'Remax Forge & Fittings supplies RTJ (ring type joint) flanges for petrochemical and refinery piping from its Mumbai works: weld neck and blind flanges to ASME B16.5 and B16.47 in A105, F11, F22, F91, F316 and F321. Ring grooves are cut to ASME B16.20 ring numbers, and every flange is traceable to an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Where petrochemical plants specify RTJ',
        paras: [
          'On a petrochemical or refinery site, RTJ flanges appear where a gasket leak would be most serious. That includes hydrotreater and hydrocracker reactor circuits running hot hydrogen at high pressure, reformer and furnace outlet lines, high-pressure ethylene and polymer lines, and lines with frequent thermal cycling during startups and regenerations.',
          'In hydrogen service, a soft gasket can creep and leak as the joint heats and cools, and small hydrogen molecules find any leak path. A metal ring deformed into a machined groove keeps sealing across those cycles.',
        ],
      },
      {
        h2: 'Matching ring to flange material',
        table: {
          head: ['Flange grade', 'Common ring material'],
          rows: [
            ['A105 carbon steel', 'Soft iron or low-carbon steel'],
            ['F11 / F22 chrome-moly', 'F5 (4–6% Cr, ½% Mo)'],
            ['F316 / F321 stainless', 'Matching austenitic stainless'],
          ],
        },
        paras: [
          'The ring must be softer than the groove. With stainless flanges, the ring and groove can be close in hardness, so many refinery specifications ask for the groove hardness to be checked and recorded. Put that requirement in the RFQ and the result is reported with the certificate.',
        ],
      },
      {
        h2: 'Alloy RTJ flanges and verification',
        paras: [
          'Hot petrochemical lines are mostly chrome-moly. F11 Class 2, F22 Class 3 and F91 RTJ weld neck flanges are bored to the A335 pipe schedule and supplied in their A182 heat-treated condition. Each one is PMI-tested for chromium and molybdenum, because a carbon steel flange in a hot hydrogen line is a known cause of serious failures.',
          'For stainless lines in polymer and aromatics units, F316 and F321 are used. F321 is stabilised for long service in the sensitising temperature range.',
        ],
      },
    ],
    faqs: [
      { q: 'Why are RTJ flanges used in hydrogen service?', a: 'Hydrogen leaks through very small paths, and thermal cycling can relax soft gaskets. A metal ring seated in machined grooves keeps sealing through repeated heating and cooling.' },
      { q: 'Which ring goes with an F22 RTJ flange?', a: 'An F5 (4–6% Cr, ½% Mo) ring is common, because it is softer than the F22 groove. Confirm the ring material in your piping specification.' },
      { q: 'Are RTJ flanges used in Class 300 petrochemical lines?', a: 'Yes. ASME B16.5 includes RTJ facing from Class 150, and refineries specify it at Class 300 and 600 on hot hydrogen and severe cyclic service.' },
      { q: 'How is an alloy RTJ flange checked before dispatch?', a: 'Groove dimensions and finish are gauged, PMI confirms the alloy, and groove hardness is checked when specified. All results are tied to the heat number on the EN 10204 3.1 certificate.' },
    ],
    related: [
      ['/products/flanges/rtj-face-flange-manufacturer/', 'RTJ flanges: grooves and rings'],
      ['/products/flanges/weld-neck-flange-for-petrochemical/', 'Weld neck flanges for petrochemical'],
      ['/materials/alloy-steel-f11-f22-flanges/', '1¼Cr and 2¼Cr alloy flanges'],
      ['/materials/stainless-steel-321-347-flanges/', 'F321 and F347 flanges for heat'],
    ],
  },

  '/products/flanges/rtj-flange-ring-type-joint-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies RTJ (ring type joint) flanges for oil and gas production, gathering and pipeline piping from its Mumbai works: weld neck and blind flanges to ASME B16.5 and B16.47, Classes 600 to 2500, in A105, A350 LF2, F316L and duplex, with NACE MR0175 hardness control when ordered and EN 10204 3.1 certificates.',
    sections: [
      {
        h2: 'Why RTJ is the default on oil and gas high-pressure piping',
        paras: [
          'Flowlines, production manifolds, gas compression and injection piping, and pig traps on high-pressure pipelines often run in Class 900, 1500 or 2500. They also see vibration from compressors and pumps, and pressure surges. The RTJ joint\'s metal ring, held in a groove on each flange, resists blowout under these conditions and tolerates vibration better than a soft gasket.',
          'Many operators also specify RTJ at Class 600 on gas service, so the same ring and groove system runs through a facility.',
        ],
      },
      {
        h2: 'Low-temperature and sour gas',
        paras: [
          'Gas lines can chill sharply during depressurisation. A105 is not impact tested, so specify A350 LF2 Class 1, which is Charpy tested at −46 °C, wherever blowdown or Joule-Thomson cooling can reach the flange.',
          'For gas or crude containing H2S, call up NACE MR0175 / ISO 15156. Carbon steel flanges are then held to 22 HRC maximum hardness and the values are reported. The ring material must also be suitable for sour service, so specify it at the same time.',
        ],
        list: [
          'Produced water and wet CO2 service: duplex F51 or super duplex F53 RTJ flanges, with matching corrosion-resistant rings.',
          'Dry sweet gas and oil: A105 or LF2 with soft iron or low-carbon steel rings.',
        ],
      },
      {
        h2: 'Assembly practice that keeps RTJ joints tight',
        paras: [
          'Most RTJ leaks start with a damaged groove or a reused ring. Fit a new ring at every make-up, inspect the groove for scratches across the sealing surface, and tighten the studs evenly in a cross pattern. RX rings, which are pressure-energised, are often chosen for high-pressure gas.',
          'Every groove is gauged for ring number and checked for finish before dispatch.',
        ],
      },
    ],
    faqs: [
      { q: 'From which class are RTJ flanges used in oil and gas?', a: 'RTJ is normal from Class 900 upward, and many operators also specify it at Class 600 on gas and wellhead-adjacent piping.' },
      { q: 'Do RTJ flanges for sour gas need special rings?', a: 'Yes. The ring material must meet the same NACE MR0175 / ISO 15156 requirements as the flanges. Specify ring material and hardness together with the flanges.' },
      { q: 'Should I use LF2 or A105 RTJ flanges on gas lines?', a: 'LF2 Class 1 wherever the line can cool on blowdown, because it is impact tested at −46 °C. A105 suits warm, steady-temperature service.' },
      { q: 'Why does my RTJ joint leak after reassembly?', a: 'The usual causes are a reused ring, a scratched or dented groove, or uneven stud tightening. Always fit a new ring and inspect the groove first.' },
    ],
    related: [
      ['/products/flanges/rtj-face-flange-manufacturer/', 'All RTJ face flange types'],
      ['/products/flanges/weld-neck-flange-for-oil-and-gas/', 'Weld neck flanges for pipelines'],
      ['/products/flanges/sour-service-nace-flange/', 'Sour gas flanges to ISO 15156'],
      ['/products/flanges/high-pressure-flange-manufacturer/', 'Heavy-class flanges for high pressure'],
    ],
  },

  '/products/flanges/sour-service-nace-flange/': {
    intro: 'Remax Forge & Fittings supplies forged flanges for sour (H2S) service from its Mumbai works. They are made and tested to the hardness and material requirements of NACE MR0175 / ISO 15156 for oil and gas production, or NACE MR0103 for refining. Grades include A105, A350 LF2, F316L and duplex, in all ASME B16.5 and B16.47 types, with hardness results on the EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'What sour service does to steel',
        paras: [
          'Wet hydrogen sulphide releases atomic hydrogen at the steel surface. In hard, high-strength steel, that hydrogen causes sulphide stress cracking (SSC): sudden brittle cracking well below the design stress, often with no warning. The defence is to limit hardness and control heat treatment and chemistry. NACE MR0175 / ISO 15156 sets those limits for production equipment, and NACE MR0103 sets them for refinery sour service.',
        ],
      },
      {
        h2: 'Main requirements for sour-service flanges',
        table: {
          head: ['Requirement', 'Carbon and low-alloy steel (e.g. A105, LF2)'],
          rows: [
            ['Hardness', '22 HRC maximum (about 250 HV) in the flange'],
            ['Nickel content', 'Below 1% for carbon and low-alloy steels'],
            ['Heat treatment', 'An acceptable condition such as normalized, or normalized and tempered, stated on the certificate'],
            ['Welds', 'Weld and heat-affected-zone hardness controlled; the fabricator\'s welding procedure must be qualified for sour service'],
          ],
        },
        paras: [
          'Corrosion-resistant alloys such as 316L and duplex are covered by part 3 of ISO 15156. There, the hardness limits and the allowed H2S partial pressure, chloride level and temperature depend on the alloy. Send the service conditions with the RFQ so the grade can be checked.',
        ],
      },
      {
        h2: 'How sour-service flanges are made and documented',
        list: [
          'Material is ordered and heat treated to meet the hardness limits, and hardness is tested and recorded for the flanges supplied.',
          'The EN 10204 3.1 certificate gives chemistry, including nickel, plus the heat treatment, mechanical properties and hardness values, and states the NACE standard.',
          'Alloy and stainless grades are PMI-tested.',
          'Flanges are marked with the NACE standard alongside grade and heat number, when the order calls for it.',
        ],
      },
    ],
    faqs: [
      { q: 'What does "NACE flange" mean?', a: 'A flange whose material, heat treatment and hardness meet NACE MR0175 / ISO 15156 (production) or NACE MR0103 (refining), so it resists sulphide stress cracking in wet H2S service.' },
      { q: 'What is the hardness limit for A105 in sour service?', a: '22 HRC maximum, about 250 HV, for carbon steel under NACE MR0175 / ISO 15156. MR0103 sets its own limits for refinery service, including weld hardness. Hardness values are reported on the certificate.' },
      { q: 'MR0175 or MR0103: which applies?', a: 'MR0175 / ISO 15156 covers oil and gas production and processing equipment. MR0103 covers sour service in refineries. Your project specification will name one of them.' },
      { q: 'Can stainless or duplex flanges be NACE compliant?', a: 'Yes, within the limits ISO 15156-3 sets for each alloy on hardness, H2S partial pressure, chlorides and temperature. Send the service conditions to confirm.' },
    ],
    related: [
      ['/products/flanges/blind-flange-for-oil-and-gas/', 'Blind flanges for pipelines and wellsites'],
      ['/products/flanges/rtj-flange-ring-type-joint-for-oil-and-gas/', 'Ring joint flanges for gas service'],
      ['/materials/carbon-steel-flanges/', 'Carbon steel flange ratings'],
      ['/materials/duplex-2205-flanges/', 'Duplex stainless flange material page'],
    ],
  },

  '/products/flanges/lap-joint-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies lap joint flanges for oil and gas piping from its Mumbai works: ASME B16.5 lap joint backing flanges in A105 or stainless steel, used with stub ends in 316L, duplex or super duplex, so that only the wetted stub end is in corrosion-resistant alloy. Every flange carries an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Why oil and gas piping uses lap joints',
        paras: [
          'Produced water, seawater injection and corrosive condensate lines are often built in duplex or super duplex. In a lap joint the process fluid touches only the stub end, which is butt welded to the pipe and carries the gasket. The backing flange behind it never sees the fluid, so it can be carbon steel. On a large duplex spool package, that saves a significant amount of alloy.',
          'The backing flange also rotates freely around the stub end. On skids and modules built in a fabrication yard, that makes bolt-hole alignment between packages easy, and it lets fitters line up spools that will be dismantled for inspection or pigging maintenance.',
        ],
      },
      {
        h2: 'Specifying the lap joint assembly',
        table: {
          head: ['Part', 'Standard', 'Material choice'],
          rows: [
            ['Stub end', 'ASME B16.9 (long) or MSS SP-43 (short)', 'Same alloy as the pipe: 316L, duplex F51 / F60 or super duplex F53'],
            ['Lap joint backing flange', 'ASME B16.5 lap joint', 'A105 carbon steel, painted or coated; or stainless steel for external corrosion'],
            ['Gasket', 'ASME B16.20 or B16.21', 'Seats on the stub end face'],
          ],
        },
        paras: [
          'Order the stub end and flange to the same size and schedule. The backing flange bore has a radius to clear the stub end\'s lap, so a slip-on flange is not a direct substitute.',
        ],
      },
      {
        h2: 'Limits of the lap joint',
        paras: [
          'The joint\'s strength under bending and cyclic load is set by the stub end lap, not the flange ring. Lap joints are therefore used on Class 150 and 300 water and utility service rather than on high-pressure hydrocarbon lines. Avoid them where piping vibrates or sees large thermal cycles, and use weld necks instead. Offshore, where the backing flange is exposed to salt air, specify the coating system or a stainless backing flange in the RFQ.',
        ],
      },
    ],
    faqs: [
      { q: 'Can the lap joint backing flange be carbon steel on a duplex line?', a: 'Yes. Only the stub end touches the process fluid, so the backing flange can be A105 carbon steel, coated against external corrosion. That is the main cost advantage of a lap joint.' },
      { q: 'What is the difference between long and short stub ends?', a: 'Long-pattern stub ends follow ASME B16.9. Short-pattern stub ends follow MSS SP-43 and are mostly used in stainless and alloy systems. Both mate with an ASME B16.5 lap joint flange.' },
      { q: 'Are lap joint flanges suitable for high-pressure oil and gas lines?', a: 'They are mainly used on Class 150 and 300 water and utility service. For high-pressure, cyclic or vibrating hydrocarbon lines, weld neck flanges are the better choice.' },
      { q: 'Why does a lap joint flange have a radiused bore?', a: 'The radius clears the curved lap of the stub end so the flange bears evenly on it. A slip-on flange, with its square bore edge, would bear on the radius and damage the lap.' },
    ],
    related: [
      ['/products/flanges/lap-joint-flange/', 'Lap joint flanges: all types'],
      ['/products/flanges/lap-joint-flange-for-petrochemical/', 'Lap joint flanges for petrochemical'],
      ['/materials/super-duplex-2507-flanges/', 'UNS S32750 flange properties'],
      ['/products/flanges/weld-neck-flange-for-oil-and-gas/', 'Oil and gas weld neck flanges'],
    ],
  },

  '/products/flanges/slip-on-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies slip-on flanges for the utility and low-pressure systems of oil and gas facilities from its Mumbai works. They are made to ASME B16.5, mostly in Class 150 and 300, in A105, A350 LF2, F316L and duplex, raised face or flat face, each traceable to an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Where slip-on flanges belong on an oil and gas site',
        paras: [
          'Slip-on flanges are rarely allowed on the high-pressure hydrocarbon process side. Their job is the large volume of utility piping around it: firewater rings and deluge systems, cooling and service water, instrument and plant air, nitrogen, open and closed drains, and tank farm and terminal lines at low pressure.',
          'Many operator piping specifications limit slip-ons to Class 150 and 300, and keep them out of cyclic, toxic and flammable high-pressure service. Check the line class before ordering. If the specification says weld neck, a slip-on is not an acceptable substitute, even at the same pressure class.',
        ],
      },
      {
        h2: 'Material by utility system',
        table: {
          head: ['System', 'Typical slip-on grade'],
          rows: [
            ['Firewater and deluge (onshore)', 'A105, internally coated or galvanised as specified'],
            ['Firewater and seawater (offshore)', 'Duplex F51 or super duplex F53'],
            ['Instrument air and nitrogen', 'F316L or A105'],
            ['Cold vents and blowdown-exposed utility lines', 'A350 LF2 Class 1, impact tested at −46 °C'],
          ],
        },
      },
      {
        h2: 'Welding slip-ons on sour or corrosive lines',
        paras: [
          'A slip-on is attached with an outside fillet weld on the hub and an inside fillet at the pipe end, which leaves a crevice between the pipe and the flange bore. On wet or corrosive service, make the inside weld continuous so the fluid cannot reach the crevice.',
          'Where a utility line can contain H2S, such as sour water drains, the flange and both fillet welds must meet NACE MR0175 / ISO 15156 hardness limits. Order the flanges as NACE, and the hardness is reported on the certificate.',
        ],
      },
    ],
    faqs: [
      { q: 'Can slip-on flanges be used on hydrocarbon lines?', a: 'Only where the project piping specification allows it, usually Class 150 and 300 non-cyclic service. High-pressure, toxic and cyclic hydrocarbon lines normally require weld neck flanges.' },
      { q: 'Which slip-on flange material suits offshore firewater?', a: 'Duplex F51 or super duplex F53, which resist seawater pitting. Carbon steel needs internal lining or coating and still corrodes at the welds.' },
      { q: 'Can I get NACE slip-on flanges?', a: 'Yes. The flanges are supplied with hardness controlled to NACE MR0175 / ISO 15156 and reported on the EN 10204 3.1 certificate. The fillet welds must also meet the hardness limits.' },
      { q: 'Are slip-on flanges cheaper than weld neck?', a: 'Usually yes. They use less material and need less precise fit-up. The trade-off is lower strength and fatigue life, which is why their use is limited to utility service.' },
    ],
    related: [
      ['/products/flanges/slip-on-flange/', 'Slip-on flange product overview'],
      ['/products/flanges/weld-neck-flange-for-oil-and-gas/', 'WN flanges for hydrocarbon lines'],
      ['/products/flanges/carbon-slip-on-flange-manufacturer/', 'Carbon steel slip-ons for utilities'],
      ['/products/flanges/sour-service-nace-flange/', 'H2S service flange requirements'],
    ],
  },

  '/products/flanges/slip-on-flange-for-power-generation/': {
    intro: 'Remax Forge & Fittings supplies slip-on flanges for the balance-of-plant piping of thermal, combined-cycle and captive power plants from its Mumbai works. They are made to ASME B16.5 in A105 carbon steel and F304L/F316L stainless steel, raised face or flat face, each with an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Which power plant systems use slip-on flanges',
        paras: [
          'Power piping is designed to ASME B31.1. The critical lines, such as main steam, hot and cold reheat and boiler feedwater, run at high pressure and temperature and use weld neck flanges or welded joints. Slip-on flanges belong to the much larger set of lower-duty systems around them.',
        ],
        list: [
          'Auxiliary cooling water and service water.',
          'Raw water, clarified water and demineralised water distribution (stainless).',
          'Fire protection systems.',
          'Fuel oil and lube oil transfer at low pressure.',
          'Compressed air and low-pressure condensate return.',
        ],
      },
      {
        h2: 'Temperature matters more than pressure',
        paras: [
          'Many balance-of-plant lines run hot even at modest pressure, and ASME B16.5 ratings fall as temperature rises. A105 Class 150 drops from 19.6 bar at 38 °C to 13.8 bar at 200 °C. A condensate or hot water line that looks like Class 150 on pressure alone may need Class 300 once the temperature is applied.',
          'Slip-ons are also a poor match for lines that cycle thermally many times a day, such as those near peaking units. The fillet welds see the cycling stress. Those lines are better in weld neck.',
        ],
      },
      {
        h2: 'Large-bore cooling water lines',
        paras: [
          'Main condenser cooling water lines are often larger than NPS 24". ASME B16.47 does not include slip-on flanges, so large water lines are usually flanged with weld necks to B16.47, or with ring or plate flanges to a water-industry standard or a drawing. For those, send the standard or drawing, and the quote confirms what can be made.',
          'Demineralised water lines are stainless. F304L or F316L slip-ons are used to keep iron pick-up out of the boiler water, and each is PMI-tested.',
        ],
      },
    ],
    faqs: [
      { q: 'Can slip-on flanges be used on power plant steam lines?', a: 'Not on main steam, reheat or feedwater, which are high-pressure, high-temperature B31.1 lines using weld neck flanges or welded joints. Slip-ons suit low-pressure auxiliary systems.' },
      { q: 'Why might a Class 150 slip-on be under-rated on a hot water line?', a: 'Flange ratings fall with temperature. A105 Class 150 is rated 19.6 bar at 38 °C but only 13.8 bar at 200 °C, so check the rating at the design temperature.' },
      { q: 'Which material is used for demineralised water flanges?', a: 'Stainless steel, typically F304L or F316L, to avoid iron contamination of the boiler water.' },
      { q: 'Do you supply slip-on flanges larger than 24 inches?', a: 'ASME B16.47 does not cover slip-ons. For large-bore water lines, send the flange standard or drawing, and the quote states what can be supplied.' },
    ],
    related: [
      ['/products/flanges/slip-on-flange/', 'Main slip-on flange page'],
      ['/products/flanges/weld-neck-flange-for-power-generation/', 'Weld neck flanges for power generation'],
      ['/products/flanges/socket-weld-flange-for-power-generation/', 'Socket weld flanges for power generation'],
      ['/materials/stainless-steel-304-flanges/', 'F304 forged flange material page'],
    ],
  },

  '/products/flanges/slip-on-flange-for-water-infrastructure/': {
    intro: 'Remax Forge & Fittings supplies slip-on flanges for water treatment plants, pumping stations, desalination plants and distribution networks from its Mumbai works. They are made to ASME B16.5 in A105 carbon steel, F304L/F316L stainless steel and duplex, mostly flat face or raised face in Class 150, each with an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Why water projects use slip-on flanges',
        paras: [
          'Water and wastewater piping runs at low pressure over long lengths with many flanged connections: pumps, valves, flow meters, strainers and tank nozzles. Slip-on flanges suit this work. They need no exact cut length, they slide into alignment with the valve or pump, and they cost less than weld necks. At Class 150 pressures, their lower fatigue strength is rarely the limit.',
        ],
      },
      {
        h2: 'Mating with ductile iron and cast iron equipment',
        paras: [
          'Most valves and pumps on water projects are ductile or cast iron. Bolting a raised face steel flange to a flat-faced iron flange can crack the iron. Use flat face slip-on flanges with full-face gaskets against iron equipment.',
          'Check the drilling. ASME B16.5 Class 150 matches ASME B16.1 Class 125 cast iron drilling. Many imported pumps and valves are drilled to EN 1092-1 PN10 or PN16, which differs in several sizes. State the standard of the equipment flange so the slip-on is drilled to match.',
        ],
      },
      {
        h2: 'Grade by water type',
        table: {
          head: ['Water', 'Typical slip-on grade'],
          rows: [
            ['Treated and potable water, coated steel pipe', 'A105, coated to the project system'],
            ['Treatment chemicals and clean process water', 'F304L or F316L'],
            ['Seawater intake, RO brine and reject lines', 'Duplex F51 or super duplex F53'],
            ['Wastewater and sludge', 'A105 coated, or F316L where H2S and chlorides are present'],
          ],
        },
        paras: [
          'In desalination plants, high-pressure reverse osmosis feed and brine lines carry warm, concentrated chlorides that pit 316L. They are normally duplex or super duplex. State the coating system for carbon steel flanges in the RFQ.',
        ],
      },
    ],
    faqs: [
      { q: 'Should a water-line slip-on flange be flat face or raised face?', a: 'Flat face when it mates with ductile or cast iron valves and pumps, using a full-face gasket. Raised face when both mating flanges are steel.' },
      { q: 'Is ASME Class 150 compatible with PN16 valves?', a: 'Not in all sizes; bolt circle, bolt count and hole size differ. Tell us the equipment drilling standard, and the flange is drilled to match.' },
      { q: 'Which flange material suits RO desalination plants?', a: 'Duplex F51 or super duplex F53 for seawater and brine lines, because they resist chloride pitting at the temperatures and concentrations in RO systems.' },
      { q: 'Do water-infrastructure flanges come with test certificates?', a: 'Yes. An EN 10204 3.1 mill test certificate for each heat, with PMI for stainless and duplex. EN 10204 3.2 is available when a third-party inspector is named on the order.' },
    ],
    related: [
      ['/products/flanges/slip-on-flange/', 'Slip-on flanges in every grade'],
      ['/products/flanges/blind-flange-for-water-infrastructure/', 'Blind flanges for water infrastructure'],
      ['/products/flanges/threaded-flange-for-water-infrastructure/', 'Threaded flanges for water lines'],
      ['/materials/duplex-2205-flanges/', 'UNS S31803 / S32205 flanges'],
    ],
  },

  '/products/flanges/socket-weld-flange-for-chemical-processing/': {
    intro: 'Remax Forge & Fittings supplies socket weld flanges for small-bore chemical process piping from its Mumbai works. They are made to ASME B16.5 in sizes NPS ½" to 3" in F304L, F316L, duplex, nickel alloys and A105, with the socket bored to the pipe schedule. Every flange is PMI-tested where alloyed and certified to EN 10204 3.1.',
    sections: [
      {
        h2: 'Small-bore lines in a chemical plant',
        paras: [
          'Every chemical plant has hundreds of small-bore connections: instrument tappings, sample points, chemical dosing and injection lines, drains and vents, and utility branches. Socket weld flanges suit these lines. The pipe sits in a counterbore, so alignment is simple, and the single fillet weld is quicker to make than a butt weld on thin small-bore pipe.',
          'Before welding, the pipe is withdrawn about 1.6 mm from the bottom of the socket. That expansion gap stops the weld from cracking as it cools and shrinks.',
        ],
      },
      {
        h2: 'The crevice question',
        paras: [
          'The gap and the fit between pipe and socket form a crevice that cannot be cleaned or inspected. ASME B31.3 advises avoiding socket welds where crevice corrosion or severe erosion may occur. In chemical service, that rules them out on some fluids and pushes the material choice up on others.',
        ],
        table: {
          head: ['Fluid', 'Socket weld guidance'],
          rows: [
            ['Clean solvents, utilities, instrument air', 'Socket weld in F304L or F316L is normal'],
            ['Chloride-bearing streams', 'Use duplex or nickel alloy, or move to a butt-welded weld neck'],
            ['Caustic and other cracking-prone fluids', 'Prefer butt welds; check the plant specification'],
            ['Slurries and erosive flows', 'Avoid socket welds; use butt welds'],
          ],
        },
      },
      {
        h2: 'Ordering socket weld flanges correctly',
        paras: [
          'The socket bore is sized to the pipe outside diameter, and the flange bore is matched to the pipe schedule so there is no step at the end of the pipe. State the schedule with every size: Sch 40S, 80S and 160 are common on chemical small-bore lines.',
          'Alloy and stainless flanges are PMI-tested and stamped with their heat number. The EN 10204 3.1 certificate gives the full chemistry, which plants often keep for positive material identification records.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is a 1.6 mm gap left in a socket weld joint?', a: 'It allows the pipe to expand and the fillet weld to shrink without cracking. The pipe is bottomed in the socket and then withdrawn about 1.6 mm before welding.' },
      { q: 'When should socket weld flanges not be used in chemical plants?', a: 'Where crevice corrosion or severe erosion may occur, as ASME B31.3 advises, for example with chloride-bearing fluids that attack the grade, caustic service or slurries. Use butt-welded weld neck flanges there.' },
      { q: 'What sizes do socket weld flanges come in?', a: 'Small bore, typically NPS ½" to 3" under ASME B16.5. Larger lines use weld neck or slip-on flanges.' },
      { q: 'Can socket weld flanges be used on vacuum lines?', a: 'Yes. A sound fillet weld holds vacuum well. The crevice behind the pipe end is the only concern, and only where the fluid attacks the flange or pipe grade.' },
      { q: 'Which stainless grade is best for socket weld flanges?', a: 'F316L for most chemical service, because the molybdenum gives better crevice and pitting resistance than 304L. That matters because of the socket crevice.' },
    ],
    related: [
      ['/products/flanges/socket-weld-flange/', 'Socket weld flange range'],
      ['/products/flanges/socket-weld-flange-for-oil-and-gas/', 'Socket weld flanges for oil and gas'],
      ['/materials/stainless-steel-316-flanges/', '316 stainless flange specifications'],
      ['/materials/hastelloy-c276-flanges/', 'C276 (N10276) flanges for acids'],
    ],
  },

  '/products/flanges/socket-weld-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies socket weld flanges for small-bore oil and gas piping from its Mumbai works. They are made to ASME B16.5, NPS ½" to 3", in Classes 150 to 1500, in A105, A350 LF2, F316L and duplex, raised face or RTJ, with NACE MR0175 hardness control when ordered and EN 10204 3.1 certificates.',
    sections: [
      {
        h2: 'Small-bore piping on production and processing sites',
        paras: [
          'Instrument and pressure-gauge connections, chemical injection (corrosion inhibitor, methanol), sample lines, drains, vents and fuel gas lines are all small bore. Socket weld flanges let these lines be broken for maintenance without cutting the pipe. On high-pressure systems they are made in Class 600, 900 and 1500 to match the main line class.',
        ],
      },
      {
        h2: 'Vibration: the main threat to small-bore joints',
        paras: [
          'Small-bore branches near reciprocating compressors and pumps are a frequent source of fatigue leaks in oil and gas plants. A heavy valve or flange on a thin branch, with no support, vibrates until the fillet weld cracks. Keep small-bore flanged assemblies short, brace them back to the main pipe, and avoid hanging heavy valves on them.',
          'Make the fillet weld to the size the code requires and leave the 1.6 mm expansion gap at the socket bottom. A weld that is too small, or a pipe bottomed hard in the socket, shortens fatigue life.',
        ],
      },
      {
        h2: 'Cold, sour and corrosive service',
        table: {
          head: ['Service condition', 'Socket weld flange grade'],
          rows: [
            ['Gas lines that cool on blowdown', 'A350 LF2 Class 1, impact tested at −46 °C'],
            ['Wet H2S (sour) service', 'A105 or LF2 to NACE MR0175 / ISO 15156, 22 HRC maximum'],
            ['Produced water and chemical injection', 'F316L, duplex F51 or super duplex F53'],
            ['Dry sweet gas and oil at ambient temperature', 'A105'],
          ],
        },
        paras: [
          'In sour service, the fillet weld hardness must also meet the standard, so the fabricator\'s welding procedure has to be qualified for it.',
        ],
      },
    ],
    faqs: [
      { q: 'What pressure classes are socket weld flanges made in?', a: 'Under ASME B16.5, socket weld flanges cover Classes 150 to 1500 in small bore. Above that, or above NPS 3", weld neck flanges are used.' },
      { q: 'Why do small-bore socket weld connections fail?', a: 'Mostly from vibration fatigue at the fillet weld, especially near compressors and pumps. Short, braced assemblies and correctly sized welds with the expansion gap prevent most failures.' },
      { q: 'Can socket weld flanges be used in sour service?', a: 'Yes, when the flange and the weld meet NACE MR0175 / ISO 15156 hardness limits. Order the flanges as NACE, and hardness is reported on the certificate.' },
      { q: 'Do socket weld flanges come with RTJ facing?', a: 'Yes. In the higher classes, socket weld flanges can be faced for ring type joints to match the line specification.' },
    ],
    related: [
      ['/products/flanges/socket-weld-flange/', 'Small-bore socket weld flanges'],
      ['/products/flanges/socket-weld-flange-for-chemical-processing/', 'Socket weld flanges for chemical processing'],
      ['/products/flanges/sour-service-nace-flange/', 'NACE flange hardness limits'],
      ['/materials/carbon-steel-flanges/', 'CS flange chemistry and strength'],
    ],
  },

  '/products/flanges/subsea-offshore-flange-manufacturer/': {
    intro: 'Remax Forge & Fittings supplies forged flanges for offshore platform topsides, FPSO and offshore-support piping from its Mumbai works. They are made to ASME B16.5 and B16.47 in duplex, super duplex, 316L, A350 LF2 and Inconel 625, with project-specific testing added when the order calls for it, and EN 10204 3.1 or 3.2 certification.',
    sections: [
      {
        h2: 'What offshore piping demands from a flange',
        paras: [
          'Offshore piping is surrounded by seawater, salt air and limited space. Firewater, seawater cooling, produced water and chemical injection systems carry chloride-rich fluids, so the flanges are mostly duplex or super duplex. Weight also matters on a platform or FPSO: the higher strength of duplex can allow thinner pipe walls, and it resists pitting where 316L would fail.',
          'Hydrocarbon process piping offshore uses the same ASME B16.5 classes as onshore plant. RTJ facing is common from Class 900, and LF2 is used where blowdown can chill the line.',
        ],
      },
      {
        h2: 'Grades used offshore',
        table: {
          head: ['System', 'Common flange grade'],
          rows: [
            ['Firewater, seawater cooling and ballast', 'Super duplex F53 / F55'],
            ['Produced water', 'Duplex F51 / F60 or super duplex'],
            ['Hydrocarbon process, cold service', 'A350 LF2 Class 1'],
            ['Utilities and instrument air', 'F316L'],
            ['Severe chloride or high-temperature duty', 'Inconel 625 (UNS N06625)'],
          ],
        },
      },
      {
        h2: 'Project specifications and subsea work',
        paras: [
          'Offshore project specifications usually add to the base ASME and ASTM requirements. Common additions include impact testing at a set temperature, ferrite counts and ASTM A923 testing for duplex, hardness limits for sour service, extra UT, and witnessed EN 10204 3.2 certification. List these in the RFQ and the quote states which tests are included.',
          'Equipment installed subsea is often built to subsea-specific flange designs and standards rather than ASME B16.5. If your enquiry is for subsea hardware, send the full specification with the RFQ. The quote will state clearly which standard the flanges are made to.',
        ],
      },
    ],
    faqs: [
      { q: 'Which flange material is used for offshore firewater?', a: 'Super duplex F53 or F55 is common, because it resists pitting and crevice corrosion in seawater. 316L is not normally used for seawater systems.' },
      { q: 'Can you supply EN 10204 3.2 certificates for offshore projects?', a: 'Yes. EN 10204 3.2 certification is available with a third-party inspector named on the order, who witnesses the tests and countersigns the certificate.' },
      { q: 'Are offshore flanges different from onshore flanges?', a: 'The ASME B16.5 dimensions are the same, but offshore specifications usually require more corrosion-resistant grades, more testing and stricter documentation.' },
      { q: 'Do you make flanges for subsea equipment?', a: 'Subsea hardware often uses its own flange standards. Send the specification with the RFQ, and the quote states which standard the supplied flanges meet.' },
    ],
    related: [
      ['/materials/super-duplex-2507-flanges/', '2507 flanges for seawater'],
      ['/materials/inconel-625-flanges/', 'Alloy 625 (N06625) flanges'],
      ['/products/flanges/duplex-blind-flange-manufacturer/', 'Duplex blind flange grades'],
      ['/products/flanges/weld-neck-flange-for-marine/', 'Weld necks for ship piping'],
    ],
  },

  '/products/flanges/threaded-flange-for-general-industrial/': {
    intro: 'Remax Forge & Fittings supplies threaded flanges for general industrial piping from its Mumbai works. They are made to ASME B16.5 with NPT threads to ASME B1.20.1, in A105 carbon steel and F304/F316 stainless steel, raised face or flat face, mainly in Class 150 and 300. Each carries an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Why choose a threaded flange',
        paras: [
          'A threaded flange screws onto a threaded pipe, so no welding is needed. That makes it the practical choice in three situations. The first is where hot work is restricted, such as in a running plant, a hazardous area or near stored fuel. The second is galvanised pipe, whose coating would be burned off by welding. The third is small utility lines that are cheaper to thread than to weld and inspect.',
          'Common uses in general industry are compressed air, water, low-pressure gas and oil distribution, cooling lines on machinery, and skids that must be dismantled for transport.',
        ],
      },
      {
        h2: 'Limits on threaded joints',
        list: [
          'ASME B31.3 restricts threaded joints where crevice corrosion, severe erosion or cyclic loading can occur. The thread root is a stress raiser and a crevice.',
          'Threads leak under temperature cycling and vibration. Keep threaded flanges off hot, cycling or vibrating lines, or seal weld them where the code allows.',
          'Thread engagement reduces the pipe wall. Use at least Sch 80 pipe for threaded joints in carbon steel, or follow your piping specification.',
          'Most industrial threaded flanges are Class 150 and 300. Higher classes exist but are rarely the right answer.',
        ],
      },
      {
        h2: 'Making a reliable threaded joint',
        paras: [
          'NPT threads are tapered and seal on the thread flanks. Use a sealant or PTFE tape suited to the fluid and temperature, make up the joint to the normal hand-tight-plus-wrench engagement, and do not back it off to align bolt holes. Align the bolt holes by rotating the mating flange instead.',
          'For stainless threaded joints, use an anti-seize sealant. Stainless threads gall easily when screwed together dry. State whether you need NPT or another thread form, such as BSPT, in the RFQ, and the flange is threaded accordingly.',
        ],
      },
    ],
    faqs: [
      { q: 'What thread is used on ASME B16.5 threaded flanges?', a: 'Tapered NPT to ASME B1.20.1 as standard. Other thread forms, such as BSPT, can be cut when stated on the order.' },
      { q: 'Can threaded flanges be used on steam lines?', a: 'Only on low-pressure, steady service where the piping specification allows it. Temperature cycling tends to loosen threads, so steam lines usually use weld neck or socket weld flanges.' },
      { q: 'Should threaded flanges be seal welded?', a: 'Seal welding is used where the code or specification requires a leak-tight joint on threads. It is not possible on galvanised pipe without damaging the coating.' },
      { q: 'Can I use threaded flanges on stainless pipe?', a: 'Yes, for low-pressure utility service. Use a pipe schedule heavy enough to thread, as your specification requires, an anti-seize sealant to stop galling, and F304 or F316 flanges to match the pipe grade.' },
      { q: 'Which pipe schedule suits a threaded flange?', a: 'Sch 80 or heavier is common for carbon steel threaded joints, because threading removes part of the pipe wall. Follow your project piping specification.' },
    ],
    related: [
      ['/products/flanges/threaded-flange/', 'Threaded flange range'],
      ['/products/flanges/threaded-flange-for-marine/', 'Threaded flanges for ship utilities'],
      ['/products/flanges/threaded-flange-for-water-infrastructure/', 'Water-network threaded flanges'],
      ['/materials/carbon-steel-flanges/', 'A105 flange properties'],
    ],
  },

  '/products/flanges/threaded-flange-for-marine/': {
    intro: 'Remax Forge & Fittings supplies threaded flanges for shipboard and port utility piping from its Mumbai works. They are made to ASME B16.5 with NPT or BSPT threads, in A105 carbon steel and F316 stainless steel, mainly in Class 150, each with an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Where threaded flanges are used on vessels',
        paras: [
          'Welding on board a working vessel needs gas-freeing and hot-work permits, so threaded connections are used for small utility lines that may be modified or repaired at sea. Typical examples are fresh water, sanitary water, compressed air, deck washing lines and small galvanised steel systems.',
          'Classification rules and yard specifications often limit threaded joints to small sizes and non-critical systems, and exclude them from fuel, seawater and other essential services. Check the rule set for the vessel before choosing a threaded flange.',
        ],
      },
      {
        h2: 'Corrosion and vibration at sea',
        paras: [
          'The thread root is a crevice. On seawater, that crevice corrodes fast in carbon steel and can pit 316 stainless, which is why seawater systems are normally welded or flanged, not threaded. On fresh water and air lines, galvanised carbon steel or F316 threaded flanges perform well.',
          'Engine and propeller vibration loosens threads. Support threaded flanged assemblies close to the joint, use a thread sealant rated for the vibration and fluid, and inspect the joints at regular surveys.',
          'Where a threaded flange joins galvanised pipe, keep the bare thread hidden inside the flange. Exposed thread beyond the flange face is where rust starts on weather-deck lines, so paint or wrap the joint after make-up.',
        ],
      },
      {
        h2: 'Ordering threaded flanges for marine use',
        table: {
          head: ['Item', 'What to state'],
          rows: [
            ['Thread form', 'NPT (ASME B1.20.1) or BSPT, to match the ship\'s pipe'],
            ['Drilling', 'ASME B16.5 Class 150, or the metric standard of the mating equipment'],
            ['Material', 'A105 for galvanised steel systems; F316 for stainless lines'],
            ['Coating', 'Galvanised, painted or bare, as the system requires'],
            ['Certificate', 'EN 10204 3.1, or 3.2 with a class surveyor or third-party inspector'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'Are threaded flanges allowed on ships?', a: 'Usually on small, non-essential systems such as fresh water and compressed air. Classification rules often restrict them on fuel, seawater and other essential services, so check the vessel\'s rules.' },
      { q: 'Can I get BSPT threaded flanges?', a: 'Yes. Many vessels built outside the US use BSPT pipe threads. State the thread form on the order, and the flange is threaded to match.' },
      { q: 'Why are threaded joints avoided on seawater lines?', a: 'The thread root forms a crevice that corrodes quickly in seawater, and threads loosen under engine vibration. Welded or bolted flanged joints are preferred.' },
      { q: 'Can threaded flanges be used on fuel oil lines on ships?', a: 'Generally not. Classification rules usually require welded or bolted flanged joints on fuel oil systems, because a thread leak there is a fire risk. Use weld neck or slip-on flanges as the rules allow.' },
      { q: 'What certificate do marine threaded flanges come with?', a: 'An EN 10204 3.1 mill test certificate. EN 10204 3.2 can be provided when a class surveyor or third-party inspector is named on the order.' },
    ],
    related: [
      ['/products/flanges/threaded-flange/', 'NPT threaded flange sizes'],
      ['/products/flanges/threaded-flange-for-general-industrial/', 'Threaded flanges for general industrial'],
      ['/products/flanges/blind-flange-for-marine/', 'Marine blind flanges'],
      ['/materials/stainless-steel-316-flanges/', 'F316/F316L forged flanges'],
    ],
  },

  '/products/flanges/weld-neck-flange-for-marine/': {
    intro: 'Remax Forge & Fittings supplies weld neck flanges for ship, tanker and offshore-vessel piping from its Mumbai works. They are made to ASME B16.5 and B16.47 in carbon steel, low-temperature carbon steel, stainless steel and duplex, bored to the pipe schedule, with EN 10204 3.1 certificates and EN 10204 3.2 when a class surveyor is named.',
    sections: [
      {
        h2: 'Marine systems that call for weld neck flanges',
        paras: [
          'On a vessel, the weld neck is chosen wherever a joint sees engine and propeller vibration, high pressure or temperature swings. That includes main seawater cooling headers and pump connections, cargo lines on product and chemical tankers, fuel oil transfer and hydraulic systems, and steam and thermal oil lines. Its tapered hub spreads vibration stress into the pipe, and the full-penetration butt weld can be radiographed for class approval of the piping.',
          'On liquefied gas carriers, cryogenic cargo lines use weld necks because the joint must stay tight through repeated cool-downs from ambient to cargo temperature, where a fillet-welded flange would crack.',
        ],
      },
      {
        h2: 'Grade by vessel and system',
        table: {
          head: ['Vessel or system', 'Weld neck grade'],
          rows: [
            ['Seawater cooling, ballast and fire main', 'Duplex F51 or super duplex F53'],
            ['Chemical tanker cargo lines', 'F316L or duplex, to suit the cargoes carried'],
            ['Fuel oil, lube oil and hydraulic lines', 'A105 carbon steel'],
            ['Liquefied gas carrier cargo and vapour lines', 'F304L or F316L for cryogenic duty; A350 LF2 where the design temperature is −46 °C or warmer'],
          ],
        },
      },
      {
        h2: 'Bore matching and vessel documentation',
        paras: [
          'Marine pipe often comes in different schedules on the same system, such as heavier walls for seawater lines with a corrosion allowance. The weld neck bore must match the pipe inside diameter at each joint, so give the schedule or wall thickness for every size on the order.',
          'Piping for classed vessels usually needs traceable material. Every flange is stamped with grade and heat number, and the EN 10204 3.1 certificate gives the chemistry and mechanical results. When the classification society requires its surveyor to witness tests, name the society on the order and an EN 10204 3.2 certificate is arranged.',
        ],
      },
    ],
    faqs: [
      { q: 'Why use weld neck flanges on ships instead of slip-on?', a: 'Weld necks handle engine and propeller vibration, pressure surges and temperature swings far better than slip-ons, and their butt welds can be radiographed. Slip-ons are kept to low-duty systems.' },
      { q: 'Which weld neck material is used on chemical tankers?', a: 'Cargo piping on chemical tankers is commonly 316L or duplex, chosen for the range of cargoes the vessel is designed to carry.' },
      { q: 'Can you supply weld neck flanges for LNG or LPG carriers?', a: 'Yes. F304L and F316L weld neck flanges are supplied for cryogenic cargo lines, and A350 LF2 for lines with design temperatures down to −46 °C.' },
      { q: 'Which pressure class is used for weld necks on ship seawater systems?', a: 'Most seawater cooling, ballast and fire main systems are Class 150, sometimes Class 300 near high-head fire pumps. The class follows the system design pressure and the flange rating at the design temperature.' },
      { q: 'Can a classification society surveyor witness the inspection?', a: 'Yes. Name the society on the order, and testing is arranged with the surveyor for an EN 10204 3.2 certificate.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Weld neck bore and hub details'],
      ['/products/flanges/blind-flange-for-marine/', 'Blind flanges for ship piping'],
      ['/materials/super-duplex-2507-flanges/', 'Super duplex flange material page'],
      ['/products/flanges/subsea-offshore-flange-manufacturer/', 'Flanges for offshore piping'],
    ],
  },

  '/products/flanges/weld-neck-flange-for-oil-and-gas/': {
    intro: 'Remax Forge & Fittings supplies weld neck flanges for oil and gas production, gathering, pipeline and gas-processing piping from its Mumbai works. They are made to ASME B16.5 and B16.47 in Classes 150 to 2500, raised face or RTJ, in A105, A350 LF2, F316L and duplex, with NACE MR0175 hardness control when ordered and EN 10204 3.1 certification.',
    sections: [
      {
        h2: 'The standard flange for hydrocarbon service',
        paras: [
          'Most oil and gas piping specifications make the weld neck the default flange for hydrocarbon lines. Its tapered hub carries bending and vibration loads, its butt weld is fully radiographable, and its bore matches the pipe so the inside surface runs smooth through the joint.',
          'That smooth bore matters for pigging. Pipelines and gathering lines are cleaned and inspected with pigs, and a step at a flange can damage or stop an inspection tool. Weld necks bored exactly to the pipe inside diameter let pigs pass cleanly.',
        ],
      },
      {
        h2: 'Matching the flange to line pipe',
        paras: [
          'Pipelines are often built in high-yield API 5L line pipe, which is stronger than A105. Welding a weld neck to high-yield pipe needs the flange hub thickness and material to suit the pipe wall and the welding procedure. Send the pipe grade, outside diameter and wall thickness with the RFQ so the bore, hub and grade can be checked.',
        ],
        table: {
          head: ['Service', 'Flange grade and facing'],
          rows: [
            ['Sweet oil and gas, ambient temperature', 'A105, raised face to Class 600, RTJ above'],
            ['Gas lines exposed to blowdown cooling', 'A350 LF2 Class 1, impact tested at −46 °C'],
            ['Sour (H2S) service', 'A105 or LF2 to NACE MR0175 / ISO 15156, 22 HRC maximum'],
            ['Produced water and wet CO2', 'Duplex F51 / F60 or super duplex F53'],
          ],
        },
      },
      {
        h2: 'Inspection and documents for oil and gas orders',
        list: [
          'Bore checked against the pipe schedule or wall thickness on the order.',
          'RTJ grooves gauged to the ring number, with groove hardness checked when the specification calls for it.',
          'Hardness tested and reported for NACE orders. PMI on stainless and duplex flanges.',
          'UT and hydrostatic testing on request, and EN 10204 3.2 certification with a named third-party inspector.',
        ],
      },
    ],
    faqs: [
      { q: 'Why are weld neck flanges preferred for pipelines?', a: 'They carry bending and vibration loads well, their butt welds can be radiographed, and their bore matches the pipe so pigs pass without obstruction.' },
      { q: 'Can a weld neck flange be welded to API 5L X-grade pipe?', a: 'Yes, when the flange hub and material suit the pipe wall and the welding procedure. Send the pipe grade and wall thickness so the bore and hub can be matched.' },
      { q: 'Raised face or RTJ for an oil and gas weld neck?', a: 'Raised face is common up to Class 600 on oil and moderate gas service. RTJ is normal from Class 900, and it is often specified at Class 600 on gas.' },
      { q: 'Do you supply NACE weld neck flanges?', a: 'Yes. Carbon steel weld necks are supplied with hardness at or below 22 HRC to NACE MR0175 / ISO 15156, with values reported on the EN 10204 3.1 certificate.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Compare weld neck flange options'],
      ['/products/flanges/rtj-flange-ring-type-joint-for-oil-and-gas/', 'Oil and gas ring type joint flanges'],
      ['/products/flanges/sour-service-nace-flange/', 'Sour-service forged flanges'],
      ['/products/flanges/blind-flange-for-oil-and-gas/', 'High-class blinds for hydrocarbon lines'],
    ],
  },
};
