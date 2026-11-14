// Country export page content (Day 2 of the content programme, content-plan/PLAN.md).
// Every local fact has a source in `sources` (not rendered). Company facts come from
// content-plan/FACTS.md only. No transit days, prices, MOQ, customers or approvals.
// No contact details here (CLAUDE.md contact gate): CTAs open the quote popup.

export const exportHubContent = {
  'united-states': {
    metaTitle: 'Flange Supplier to the United States | Remax Forge',
    metaDescription: 'ASME B16.5 and B16.47 flanges in A105, A350 LF2, A182 stainless and duplex for US distributors and EPCs. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to the United States',
    intro: 'Remax Forge supplies forged flanges from its Mumbai works to US distributors, fabricators and EPC contractors: weld neck, slip on, blind, socket weld, threaded, lap joint and spectacle blinds to ASME B16.5 and B16.47, in ASTM A105, A350 LF2, A182 stainless, alloy and duplex grades, each with an EN 10204 3.1 mill test certificate. Before you compare our price with a domestic quote, read the duty section below: US imports of carbon and stainless steel flanges from India are under antidumping and countervailing duty orders.',
    sections: [
      {
        h2: 'What US buyers order: ASME sizes and ASTM grades',
        paras: ['US piping specifications almost always call up ASME dimensions and ASTM or ASME SA material, so that is how we quote. Give us the line class or the purchase specification and we price against it.'],
        table: {
          head: ['Requirement', 'What we quote against'],
          rows: [
            ['Dimensions NPS ½ to 24', 'ASME B16.5, Class 150, 300, 600, 900, 1500, 2500'],
            ['Large diameter NPS 26 to 60', 'ASME B16.47 Series A or Series B (state which: they do not interchange)'],
            ['Carbon steel', 'ASTM A105 / A105N; A350 LF2 for low-temperature service'],
            ['Stainless steel', 'ASTM A182 F304/304L, F316/316L, F321, F347'],
            ['Chrome-moly', 'ASTM A182 F11, F22, F91'],
            ['Duplex and super duplex', 'ASTM A182 F51, F53, F55'],
            ['Sour service', 'NACE MR0175 / ISO 15156 hardness limits, when stated on the order'],
          ],
        },
      },
      {
        h2: 'Antidumping and countervailing duties on flanges from India',
        paras: [
          'The US Department of Commerce has an antidumping duty order on finished carbon steel flanges from India (published in August 2017 and continued after the 2022 sunset review) and antidumping and countervailing duty orders on stainless steel flanges from India (published in October 2018). Administrative reviews under both cases were still being published in 2026.',
          'Flanges within the scope of these orders pay a cash deposit when they enter the US, on top of normal duty, at a rate that depends on the producer and is reset in each administrative review. The rate can change the landed cost more than the factory price does. Ask your customs broker for the rate that applies to our product before you place the order, and to confirm whether your grade (for example a nickel alloy or an alloy steel grade) is inside the scope at all. Our quotation names Remax Forge & Fittings as the producer so your broker can check it.',
        ],
      },
      {
        h2: 'Tariff codes and origin marking for US entry',
        list: [
          'HTS heading 7307.21 covers stainless steel flanges and 7307.91 covers other iron and steel flanges, such as carbon and alloy steel. Your broker confirms the full ten-digit code.',
          'Under 19 U.S.C. 1304(c), iron and steel pipe fittings must carry a permanent country-of-origin marking (die-stamped, cast, etched or engraved), and CBP rulings apply this to flanges. Ask for "INDIA" to be stamped with the ASME B16.5 marking (manufacturer, material, class, size and heat number).',
          'Each shipment travels with a commercial invoice, packing list, certificate of origin, bill of lading and the EN 10204 3.1 MTC for every heat.',
        ],
      },
      {
        h2: 'Ports and buyers we quote for',
        paras: ['Tell us the port of discharge or the final delivery address and the Incoterm you want. Gulf Coast refining and petrochemical buyers usually name Houston or New Orleans; East Coast and West Coast distributors name New York / New Jersey, Savannah or Los Angeles / Long Beach. Transit time and freight are confirmed in the quotation, not assumed.'],
      },
    ],
    faqs: [
      { q: 'Do antidumping duties apply to flanges imported from India?', a: 'Yes, for products in scope. Finished carbon steel flanges from India are under a US antidumping order, and stainless steel flanges from India are under antidumping and countervailing duty orders. The cash deposit rate depends on the producer, so ask your customs broker for the current rate for Remax Forge & Fittings before ordering.' },
      { q: 'Which HTS code do I use for forged flanges?', a: 'Stainless steel flanges fall under HTS 7307.21 and other iron or steel flanges, including carbon and alloy steel, under 7307.91. The ten-digit statistical suffix and duty rate are confirmed by your customs broker.' },
      { q: 'Can the flanges be marked with country of origin for US customs?', a: 'Yes. Ask for "INDIA" to be die-stamped with the standard ASME B16.5 marking. US law requires permanent origin marking on iron and steel pipe fittings, and CBP applies it to flanges.' },
      { q: 'Do you supply ASME B16.47 Series A and Series B?', a: 'Yes, B16.47 large-diameter flanges are quoted to the series you state. Series A and Series B have different bolt circles and thicknesses for the same NPS, so the RFQ must say which one.' },
    ],
    related: [['/export/usa/', 'Importing flanges from India to the USA: step-by-step checklist'], ['/standards/asme-b16-47/', 'ASME B16.47 Series A and B']],
    sources: [
      'https://www.federalregister.gov/documents/2026/06/18/2026-12248/finished-carbon-steel-flanges-from-india-final-results-of-antidumping-duty-administrative-review',
      'https://www.govinfo.gov/content/pkg/FR-2022-12-05/pdf/2022-26401.pdf',
      'https://enforcement.trade.gov/download/factsheets/factsheet-india-stainless-steel-flanges-ad-cvd-final-081318.pdf',
      'https://www.tarifflens.ai/rulings/731966',
    ],
  },

  usa: {
    country: 'USA',
    metaTitle: 'Import Flanges from India to the USA | Remax Forge',
    metaDescription: 'Buying forged flanges from India for US delivery: AD/CVD duty check, HTS 7307 codes, origin marking, inspection and documents. Get a written quote.',
    h1: 'Import Forged Flanges from India to the USA',
    intro: 'This page is for US buyers who have not imported flanges from India before. It walks through the order in the sequence a purchasing team meets it: specification, duty check, marking, inspection, documents and delivery. For the product range and grades, see our United States supplier page.',
    sections: [
      {
        h2: 'Step 1: Freeze the specification before you ask for a price',
        paras: ['A comparable quote needs the same data from every supplier. Send the line class or a bill of materials with size, class, facing, bore or schedule, ASTM grade and quantity per item. If the order is for a distributor stock, say whether the flanges must be dual-certified (for example 316/316L) so that one stock item covers both grades.'],
      },
      {
        h2: 'Step 2: Check the antidumping and countervailing duty position',
        paras: [
          'Carbon steel and stainless steel flanges from India are subject to US antidumping and countervailing duty orders administered by the Department of Commerce. Entries in scope pay a cash deposit set for the producer. This is the single largest variable in the landed cost, so get the rate from your customs broker for the named producer, Remax Forge & Fittings, before comparing offers.',
          'Grades outside carbon and stainless steel, such as nickel alloys, may fall outside the scope of these orders, but scope rulings decide that, not the grade name. Your broker or trade counsel confirms it.',
        ],
      },
      {
        h2: 'Step 3: Specify marking and documents on the purchase order',
        list: [
          'Country of origin "INDIA" die-stamped, next to the manufacturer, material, class, size and heat number marking.',
          'EN 10204 3.1 mill test certificate per heat; EN 10204 3.2 if your customer requires witnessed testing.',
          'Certificate of origin, commercial invoice and packing list that use the same item descriptions as your PO, so customs entry and your receiving inspection match.',
        ],
      },
      {
        h2: 'Step 4: Decide on inspection before shipment',
        paras: ['You can nominate a third-party inspector to witness dimensional checks, PMI and other tests at our Mumbai works before dispatch. Agree the inspection test plan with the order, not after the goods are packed. Without third-party inspection, the 3.1 MTC and our test reports are the record.'],
      },
      {
        h2: 'Step 5: Agree delivery terms in writing',
        paras: ['Name the US port or final address and the Incoterm. Freight, transit time and who acts as importer of record are confirmed in the written quotation. Duties, cash deposits and broker fees are paid by the importer of record unless the contract says otherwise.'],
      },
    ],
    faqs: [
      { q: 'Who pays the antidumping cash deposit on flanges from India?', a: 'The importer of record pays it at entry, together with normal duties and broker fees, unless the sales contract makes another party the importer. Check the rate for the named producer with your customs broker before you order.' },
      { q: 'Are nickel alloy flanges covered by the AD/CVD orders?', a: 'The published orders cover finished carbon steel flanges and stainless steel flanges from India. Whether a specific nickel alloy or alloy steel grade is in scope is decided under the scope language and rulings, so ask your broker or trade counsel to confirm it for your grade.' },
      { q: 'Can I send my own inspector to the factory?', a: 'Yes. A third-party inspector you nominate can witness inspection and testing at our Mumbai works before dispatch. Include the inspection test plan with the purchase order.' },
      { q: 'What should be on the flange for US receiving inspection?', a: 'The ASME B16.5 marking (manufacturer, material, class, size, heat number) plus "INDIA" as a permanent, die-stamped origin marking, so it matches the MTC and satisfies origin-marking rules.' },
    ],
    related: [['/export/united-states/', 'Flange supplier to the United States: range, grades and US port pages'], ['/standards/asme-b16-5/', 'ASME B16.5 flange standard']],
    sources: [
      'https://www.govinfo.gov/content/pkg/FR-2017-08-24/pdf/2017-18056.pdf',
      'https://enforcement.trade.gov/download/factsheets/factsheet-india-stainless-steel-flanges-ad-cvd-final-081318.pdf',
      'https://www.tarifflens.ai/rulings/731966',
    ],
  },

  germany: {
    metaTitle: 'Flange Supplier to Germany | EN 1092-1 & ASME | Remax',
    metaDescription: 'EN 1092-1 (PN 6–PN 100) and ASME B16.5 forged flanges for German plant builders and stockists. EN 10204 3.1 MTC, export from Mumbai. Get a quote.',
    h1: 'Flange Supplier & Exporter to Germany',
    intro: 'German plant builders, chemical parks and stockists buy most flanges to DIN EN 1092-1, with ASME B16.5 used where a project follows an American or international oil and gas specification. Remax Forge quotes both, from forged blanks machined at our Mumbai works, with EN 10204 3.1 certificates per heat.',
    sections: [
      {
        h2: 'DIN EN 1092-1: what to put in a German RFQ',
        paras: [
          'EN 1092-1 replaced the older German flange standards (DIN 2501 and the DIN 2627 to 2638 series, among others), so a drawing that still says "DIN 2633" usually means an EN 1092-1 Type 11 weld neck flange in PN 16. Quote the EN type number, the DN, the PN rating and the facing type, and we price against the current standard.',
        ],
        table: {
          head: ['EN 1092-1 type', 'Flange', 'Typical use'],
          rows: [
            ['Type 01', 'Plate flange for welding', 'Low-pressure water, air and utility lines'],
            ['Type 05', 'Blind flange', 'Line ends, test points and nozzle closures'],
            ['Type 11', 'Weld neck flange', 'Process lines, steam, higher PN'],
            ['Type 12', 'Hubbed slip-on flange', 'General process piping'],
            ['Type 13', 'Hubbed threaded flange', 'Small-bore lines where welding is avoided'],
          ],
        },
      },
      {
        h2: 'Facings and pressure ratings',
        paras: ['EN 1092-1 facings are lettered: Type A flat face, Type B1 or B2 raised face, Types C and D tongue and groove, Types E and F spigot and recess. PN is the rating in bar at room temperature; the allowable pressure falls with temperature according to the material group, so state the design temperature along with the PN.'],
      },
      {
        h2: 'Material grades and pressure equipment',
        paras: [
          'Our standard grades are ASTM and ASME SA (A105, A182 F304L/F316L, F51, F53 and others). If your drawing gives EN material numbers such as P250GH (1.0460), 1.4404 or 1.4462, list them: the quotation states whether we supply that grade or an ASTM grade with the chemistry and mechanical values for your engineer to approve.',
          'If the flanges go into equipment under the EU Pressure Equipment Directive 2014/68/EU, say so in the RFQ, so the quotation can state exactly which material documentation we provide.',
        ],
      },
      {
        h2: 'Where German orders go',
        paras: ['Most sea cargo for German buyers arrives through Hamburg or Bremerhaven, with Wilhelmshaven handling LNG and energy cargo. The large chemical sites, such as BASF Ludwigshafen, the Chempark sites at Leverkusen, Dormagen and Krefeld-Uerdingen, Leuna and the Marl chemical park, are typical delivery addresses for plant builders and maintenance stockists. Name the delivery point and Incoterm and we quote to it.'],
      },
    ],
    faqs: [
      { q: 'My drawing says DIN 2633. Can you supply it?', a: 'DIN 2633 was a PN 16 weld neck flange standard that has been replaced by EN 1092-1, where the same flange is Type 11, PN 16. We quote it to EN 1092-1, so state DN, PN, facing type and bore.' },
      { q: 'Do you supply EN material grades such as P250GH or 1.4404?', a: 'List the EN material number in the RFQ. The quotation confirms whether that grade is supplied, or offers an ASTM grade with its chemistry and mechanical properties for your approval.' },
      { q: 'Can you supply flanges for PED equipment?', a: 'Tell us in the RFQ that the flanges are for equipment under the Pressure Equipment Directive 2014/68/EU. The quotation then states exactly which material certification we provide, so your notified body can confirm it is acceptable.' },
      { q: 'Do you make both EN 1092-1 and ASME B16.5 flanges?', a: 'Yes. Both are quoted from the same forged and machined production. Say which standard each line item follows, because PN and Class flanges do not share bolt patterns.' },
    ],
    related: [['/standards/en-1092-1/', 'EN 1092-1 flange standard'], ['/standards/din-2501/', 'DIN 2501 (legacy) flanges']],
    sources: [
      'https://www.dinmedia.de/de/norm/din-en-1092-1/110951500',
      'https://store.accuristech.com/atis/products/preview/1854296',
      'https://www.ksb.com/en-global/centrifugal-pump-lexicon/article/flange-standard-1118832',
    ],
  },

  netherlands: {
    metaTitle: 'Flange Supplier to the Netherlands | Remax Forge',
    metaDescription: 'EN 1092-1 and ASME B16.5 flanges for Rotterdam refineries, Chemelot and Dutch stockists. Carbon, stainless, duplex; EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to the Netherlands',
    intro: 'Dutch flange demand centres on the refining and chemical cluster around the Port of Rotterdam, the Chemelot site in Limburg and the stockists that serve them and the wider Benelux market. Projects there mix EN 1092-1 and ASME B16.5, often on the same plot. Remax Forge quotes both, in carbon, stainless, duplex and nickel alloy grades, with an EN 10204 3.1 certificate per heat.',
    sections: [
      {
        h2: 'Rotterdam, Chemelot and the Dutch industrial clusters',
        paras: [
          'The Port of Rotterdam is Europe\'s largest port and also its largest refining and petrochemical cluster, with plants in Botlek, Europoort, Pernis and on the Maasvlakte. Refinery and chemical turnarounds there drive demand for weld neck and blind flanges in carbon steel and A182 stainless, and for spectacle blinds used for isolation during shutdowns.',
          'Chemelot, at Geleen in Limburg, is an inland chemical site supplied by road and barge, and Moerdijk and Amsterdam are further port and industrial locations. Give the site name and gate or the forwarder\'s warehouse, and the quotation states the delivery basis.',
        ],
      },
      {
        h2: 'Which standard: EN 1092-1 or ASME?',
        paras: ['Utilities, water and building-services piping in the Netherlands normally use EN 1092-1 PN flanges (NEN-EN 1092-1). Oil, gas and petrochemical units built to licensor or international specifications often use ASME B16.5 Class flanges. Mixing them on one order is fine, but each line must state its standard: a DN 100 PN 16 flange does not bolt to an NPS 4 Class 150 flange.'],
        table: {
          head: ['Service', 'Usual standard', 'Usual grades'],
          rows: [
            ['Cooling water, utilities', 'EN 1092-1 PN 10 / PN 16', 'Carbon steel, 316L'],
            ['Refinery process lines', 'ASME B16.5 Class 150–600', 'A105, A182 F316L, F11/F22'],
            ['Seawater and brine', 'ASME or EN as specified', 'Duplex F51, super duplex F53/F55'],
            ['Cryogenic and LNG', 'ASME B16.5', 'A182 F304L/F316L, A350 LF2 for low temperature'],
          ],
        },
      },
      {
        h2: 'Pressure equipment and documents',
        paras: ['If the flanges go into equipment covered by the EU Pressure Equipment Directive 2014/68/EU, state it in the RFQ so the quotation confirms the material documentation supplied. Every shipment includes the EN 10204 3.1 MTC, commercial invoice, packing list, certificate of origin and bill of lading; EN 10204 3.2 with a third-party inspector is available when ordered.'],
      },
    ],
    faqs: [
      { q: 'Can you deliver to a Rotterdam forwarder rather than to site?', a: 'Yes. Give the forwarder\'s address and the Incoterm you want, and the quotation states freight and delivery basis to that point.' },
      { q: 'Do Dutch refineries use EN or ASME flanges?', a: 'Both are common. Utility and water piping usually follows EN 1092-1, while many process units follow ASME B16.5. Your line class decides, so send it with the RFQ.' },
      { q: 'Can I get spectacle blinds for a turnaround?', a: 'Yes. Spectacle blinds are quoted to ASME B16.48 or to your drawing, in the same material as the piping class. Give size, class, facing and material.' },
      { q: 'Do you supply duplex flanges for seawater cooling?', a: 'Yes, duplex A182 F51 and super duplex F53 or F55 flanges are supplied with an EN 10204 3.1 MTC. State any corrosion test or ferrite measurement your specification requires.' },
    ],
    related: [['/standards/en-1092-1/', 'EN 1092-1 flange standard'], ['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flanges']],
    sources: [
      'https://www.portofrotterdam.com/en/doing-business/setting/industry-in-the-port-of-rotterdam',
      'https://www.chemelot.nl/en',
    ],
  },

  singapore: {
    metaTitle: 'Flange Supplier in Singapore | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Jurong Island plants, Tuas shipyards and Singapore stockists: ASME B16.5, JIS B2220, EN 1092-1. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Singapore',
    intro: 'Singapore buyers fall into three groups: refining and chemical plants on Jurong Island, marine and offshore yards in Tuas and the western shipyards, and stockists who re-export across South-East Asia. Each group specifies flanges differently, so this page covers what each needs from an Indian forging supplier.',
    sections: [
      {
        h2: 'Jurong Island refining and chemicals',
        paras: ['Jurong Island is Singapore\'s energy and chemicals hub, an island built by joining smaller islands, with refineries, crackers and specialty chemical plants. Its piping specifications are largely ASME B16.5 and B16.47 with ASTM grades: A105 and A350 LF2 for hydrocarbon lines, A182 F316L for corrosive service and F11/F22 for hot lines. Shutdown work needs blind flanges and spectacle blinds at short notice, so tell us the turnaround date in the RFQ.'],
      },
      {
        h2: 'Marine and offshore yards',
        paras: ['Ship and rig piping often follows the designer\'s home standard. Japanese and Korean designs call up JIS B2220 (5K, 10K, 16K, 20K) flanges, European designs EN 1092-1 PN flanges, and offshore topsides ASME B16.5 with duplex or super duplex for seawater. Classification society requirements for material certificates should be stated in the RFQ.'],
        table: {
          head: ['Buyer', 'Usual standard', 'Usual materials'],
          rows: [
            ['Refinery and petrochemical', 'ASME B16.5 / B16.47', 'A105, A350 LF2, A182 F316L, F11/F22'],
            ['Shipyard (Japanese/Korean design)', 'JIS B2220', 'Carbon steel, 316L'],
            ['Offshore topsides', 'ASME B16.5', 'Duplex F51, super duplex F53/F55'],
            ['Stockist / re-export', 'Mixed, by customer', 'Fast-moving carbon and stainless sizes'],
          ],
        },
      },
      {
        h2: 'Stockists and regional re-export',
        paras: ['Many Singapore buyers hold stock for Malaysia, Indonesia, Vietnam and beyond. If the goods will be re-exported, ask for the marking and documents your end customers need (heat number on each piece, one MTC per heat, packing list by size), so the stock can be split without re-certification.'],
      },
      {
        h2: "Import duty, GST and permits in Singapore",
        paras: ["Singapore Customs charges duty on only four groups of goods: intoxicating liquors, tobacco products, motor vehicles and petroleum products. Steel flanges fall outside them, so an import of flanges normally carries GST only, at 9% since 1 January 2024, on the import value. Every import needs a permit raised through TradeNet, usually by your freight forwarder or declaring agent. If the flanges go into a licensed warehouse or free trade zone for re-export, a different permit type can suspend GST. Your declaring agent picks the permit, so send them our commercial invoice and packing list as soon as the goods ship."],
      },
    ],
    faqs: [
      { q: 'Do you supply JIS B2220 flanges for shipyards?', a: 'Yes. JIS B2220 flanges are quoted by nominal size (A) and pressure rating (5K, 10K, 16K, 20K, 30K). Give the type, such as SOP slip-on or WN weld neck, and the material.' },
      { q: 'Can flanges be marked for re-export from Singapore?', a: 'Yes. State the marking you need, such as heat number and grade on every piece, in the RFQ. Each heat ships with its own EN 10204 3.1 MTC so stock can be split.' },
      { q: 'Which flanges do Jurong Island plants usually order?', a: 'Mostly ASME B16.5 and B16.47 flanges in A105, A350 LF2, A182 F316L and chrome-moly grades, plus blinds and spectacle blinds for shutdowns. The plant\'s line class decides the exact grade and facing.' },
      { q: 'Do you supply super duplex flanges for offshore seawater lines?', a: 'Yes, A182 F53 (2507) and F55 (Zeron 100) flanges with an EN 10204 3.1 MTC. State any corrosion test or ferrite requirement in your specification.' },
    ],
    related: [['/standards/jis-b2220/', 'JIS B2220 flange standard'], ['/materials/super-duplex-2507-flanges/', 'Super duplex 2507 flanges']],
    sources: [
      "https://www.customs.gov.sg/businesses/importing-goods/import-procedures",
      'https://www.jtc.gov.sg/find-space/jurong-island',
      'https://www.mpa.gov.sg/',
    ],
  },

  'south-korea': {
    metaTitle: 'Flange Supplier to South Korea | KS, JIS, ASME | Remax',
    metaDescription: 'Forged flanges for Korean shipyards, Ulsan and Yeosu plants and EPCs: ASME B16.5, JIS B2220, KS B 1503 sizes. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to South Korea',
    intro: 'South Korea has its own flange standard, KS B 1503, rated in K classes in the same way as JIS B2220. Korean shipyards and EPC contractors also buy large volumes of ASME B16.5 flanges for overseas projects. Remax Forge quotes all three systems from forged and machined stock produced in Mumbai, with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'KS B 1503, JIS B2220 or ASME B16.5?',
        table: {
          head: ['Standard', 'Rating system', 'Where you meet it'],
          rows: [
            ['KS B 1503', '5K, 10K, 16K, 20K, 30K, 40K', 'Korean domestic plants and building services'],
            ['JIS B2220', '5K to 63K', 'Ships and plants of Japanese design'],
            ['ASME B16.5 / B16.47', 'Class 150 to 2500', 'Export EPC projects, offshore, refineries'],
          ],
        },
        paras: ['The K number is a pressure rating, not a size, and K flanges do not bolt to ASME Class flanges. Send the drawing or the line class, and the quotation follows the standard it names. For KS B 1503 items, the quotation confirms whether they are machined to the KS table or to the equivalent JIS dimensions.'],
      },
      {
        h2: 'Shipbuilding and offshore',
        paras: ['The large shipyards at Ulsan and on Geoje Island build LNG carriers, container ships and offshore units. Ship piping uses K-rated flanges in carbon steel and 316L, while LNG and cryogenic systems need austenitic stainless flanges, such as A182 F304L and F316L, with impact testing when the specification calls for it. Offshore topsides often add duplex and super duplex flanges for seawater.'],
      },
      {
        h2: 'Petrochemical complexes',
        paras: ['Ulsan, Yeosu and Daesan host Korea\'s main refining and petrochemical complexes. Maintenance and expansion work there buys weld neck, blind and spectacle blind flanges, mostly to ASME with A105, F316L and chrome-moly grades. Give the plant\'s material specification, and state if the job is a turnaround with a fixed date.'],
      },
      {
        h2: "Classification society and third-party inspection",
        paras: ["Korean shipyard and offshore orders often require material certificates witnessed or issued under a classification society, such as Korean Register, ABS, DNV or Lloyd's Register, and plant owners may appoint their own third-party inspector. State which society or inspector applies, and at what stage they must witness (material, dimensions, hydrostatic test), in the RFQ. We confirm in the quotation what can be arranged and how it affects the price and delivery date."],
      },
    ],
    faqs: [
      { q: 'Is KS B 1503 the same as JIS B2220?', a: 'They use the same K-rating system and are closely aligned, but always check the drawing. Send the KS designation, and the quotation states the exact dimensional standard we machine to.' },
      { q: 'Do you supply flanges for LNG carrier piping?', a: 'We supply austenitic stainless flanges, such as A182 F304L and F316L, with an EN 10204 3.1 MTC. State impact testing temperature and any classification society certificate required.' },
      { q: 'Can Korean EPC contractors order ASME flanges for overseas projects?', a: 'Yes. ASME B16.5 and B16.47 flanges are quoted to the project specification, with third-party inspection by the agency you nominate if the end user requires it.' },
      { q: 'Do K-rated flanges fit ASME Class 150 flanges?', a: 'No. Bolt circles and bolt counts differ, so a 10K flange does not mate with a Class 150 flange. Each line must state its standard.' },
    ],
    related: [['/standards/jis-b2220/', 'JIS B2220 flange standard'], ['/materials/stainless-steel-316-flanges/', '316/316L stainless flanges']],
    sources: [
      'https://www.komachine.com/en/companies/noksan-flange',
      'https://standards.globalspec.com/std/1584433/jis-b-2220',
    ],
  },

  turkey: {
    metaTitle: 'Flange Supplier to Turkey | EN 1092-1 & ASME | Remax',
    metaDescription: 'Forged flanges for Turkish refineries, Aliağa and Kocaeli plants and stockists: EN 1092-1 (TS EN) and ASME B16.5. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Turkey',
    intro: 'Turkish industry works to TS EN standards, so most utility and general piping uses EN 1092-1 PN flanges, while refineries, petrochemical plants and pipeline projects specify ASME B16.5 Class flanges. Remax Forge quotes both from its Mumbai works, in carbon, stainless, alloy and duplex grades, with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'Industrial regions that buy flanges',
        paras: [
          'Kocaeli, around İzmit, is Turkey\'s densest industrial province, with a refinery, chemical plants and fabrication shops. Aliağa near İzmir is home to the Petkim petrochemical complex and the STAR refinery. Ceyhan and Mersin on the Mediterranean handle crude export terminals and project cargo for the south.',
          'Container cargo usually lands at Ambarlı (Istanbul), Mersin, İzmir or the Kocaeli ports. State the port or the site address and the Incoterm, and the quotation confirms the delivery basis.',
        ],
      },
      {
        h2: 'Standards and grades used in Turkish projects',
        table: {
          head: ['Service', 'Usual standard', 'Usual grades'],
          rows: [
            ['Water, HVAC, utilities', 'TS EN 1092-1 PN 10 / PN 16', 'Carbon steel, 304L/316L'],
            ['Refinery and petrochemical', 'ASME B16.5 Class 150–1500', 'A105, A350 LF2, F316L, F11/F22/F91'],
            ['Power and steam', 'ASME B16.5 or EN 1092-1', 'A105, F22, F91'],
            ['Pipelines and terminals', 'ASME B16.5 / B16.47', 'A105, A350 LF2, high-yield grades as specified'],
          ],
        },
      },
      {
        h2: 'Before you order',
        paras: ['Turkish distributors often buy mixed EN and ASME orders. Write the standard against every line, give the bore or schedule for weld neck flanges, and list the documents your customer needs (3.1 or 3.2 MTC, third-party inspection). Your customs broker confirms the GTİP tariff line and any duty that applies on the date of import; flanges fall under HS heading 7307.'],
      },
      {
        h2: "Black Sea gas: Sakarya and Filyos",
        paras: ["Turkey's Sakarya gas field in the Black Sea started production in April 2023. Gas comes ashore through a subsea pipeline of roughly 165 to 170 km to an onshore processing plant in the Filyos industrial zone in Zonguldak province, and a second phase built around a floating production unit aims to roughly double output. Gas processing, compression and pipeline packages of this kind call for weld neck and blind flanges to ASME B16.5 and B16.47, with A350 LF2 where low-temperature impact testing is specified and duplex for wet, corrosive gas. If you are bidding a package, send the line list and the project specification; we quote to the specification, not to a catalogue."],
      },
    ],
    faqs: [
      { q: 'Do Turkish projects use EN or ASME flanges?', a: 'Utilities and general industry mostly use TS EN 1092-1 PN flanges. Refineries, petrochemicals and pipelines usually specify ASME B16.5. The line class on your drawing decides.' },
      { q: 'Can you supply F91 flanges for power plant steam lines?', a: 'Yes, A182 F91 flanges are supplied with an EN 10204 3.1 MTC showing heat treatment. State the design temperature and any hardness or impact requirements.' },
      { q: 'Which port should I name for delivery to İzmir or Aliağa?', a: 'İzmir port, or the Aliağa terminals where your forwarder works. Name the port and Incoterm and the quotation states freight to that point.' },
      { q: 'Can a third-party inspector witness tests before shipment?', a: 'Yes. Nominate the agency with the order and agree the inspection test plan, and inspection takes place at our Mumbai works before dispatch.' },
    ],
    related: [['/standards/en-1092-1/', 'EN 1092-1 flange standard'], ['/materials/alloy-steel-f91-flanges/', 'Alloy steel F91 flanges']],
    sources: [
      "https://www.offshore-technology.com/projects/sakarya-gas-field-development-black-sea-turkey/",
      'https://www.petkim.com.tr/en',
      'https://www.starrafineri.com.tr/en',
    ],
  },

  mexico: {
    metaTitle: 'Flange Supplier to Mexico | Bridas ASME B16.5 | Remax',
    metaDescription: 'Bridas forjadas (forged flanges) for Mexican refineries, petrochemical plants and distributors: ASME B16.5, A105, A182. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Mexico',
    intro: 'In Mexico, flanges (bridas) for oil, gas and process plants are bought almost entirely to ASME B16.5 and ASTM grades, the same as in the US Gulf Coast. Remax Forge supplies weld neck, slip on, blind, socket weld and threaded bridas from its Mumbai works, each heat with an EN 10204 3.1 certificate.',
    sections: [
      {
        h2: 'Refineries and industrial regions',
        paras: [
          'Pemex operates the national refining system: Salina Cruz (Oaxaca), Tula (Hidalgo), Minatitlán (Veracruz), Cadereyta (Nuevo León), Salamanca (Guanajuato), Ciudad Madero (Tamaulipas) and the Olmeca refinery at Dos Bocas, Paraíso, Tabasco. Maintenance and revamp work there needs weld neck and blind flanges in A105, A350 LF2 and chrome-moly grades.',
          'The Coatzacoalcos area in Veracruz is the main petrochemical zone, and Monterrey and the Bajío are the manufacturing regions where distributors and fabricators hold stock.',
        ],
      },
      {
        h2: 'Ports and customs',
        paras: ['Sea cargo enters through Manzanillo or Lázaro Cárdenas on the Pacific, or Veracruz, Altamira or Coatzacoalcos on the Gulf. The import entry (pedimento) is filed by your customs broker (agente aduanal), who also confirms the tariff line under heading 7307 and any duty that applies. Send us the broker\'s document requirements so the invoice and packing list match on arrival.'],
      },
      {
        h2: 'What to send for a quote',
        table: {
          head: ['Item', 'Example'],
          rows: [
            ['Tipo de brida (flange type)', 'Weld neck (cuello soldable), slip on, blind (ciega)'],
            ['Size and class', 'NPS 6, Class 300'],
            ['Facing', 'RF, FF or RTJ'],
            ['Bore or schedule', 'Sch 40, Sch 80, or bore in mm'],
            ['Material', 'ASTM A105, A350 LF2, A182 F316L'],
            ['Documents', 'EN 10204 3.1 MTC, third-party inspection if required'],
          ],
        },
      },
      {
        h2: "Before the flanges leave India: importer registration",
        paras: ["In Mexico the importer of record must be registered in the Padrón de Importadores, and some steel products also need a sector-specific registration. Your customs broker (agente aduanal) classifies the flanges, checks the current duty rate for goods of Indian origin and confirms whether any sector registration or other requirement applies. Settle these points before the order ships: a missing registration can hold the goods at the port, and we cannot fix it from India. Send us the broker's document list and we will match the commercial invoice and packing list to it."],
      },
    ],
    faqs: [
      { q: '¿Fabrican bridas según ASME B16.5? (Do you make flanges to ASME B16.5?)', a: 'Yes. We supply ASME B16.5 flanges from NPS ½ to 24, Class 150 to 2500, and B16.47 flanges for larger diameters, in carbon, stainless, alloy and duplex grades.' },
      { q: 'Which Mexican port should I name for delivery?', a: 'Name the port your agente aduanal works through, such as Manzanillo, Lázaro Cárdenas, Veracruz or Altamira, or your warehouse address. The quotation then states the freight basis.' },
      { q: 'Can you supply RTJ flanges for refinery service?', a: 'Yes, ring type joint flanges are machined to ASME B16.5 groove dimensions. State the ring number or class and size, and the material.' },
      { q: 'Do you provide documents for the pedimento?', a: 'Each shipment includes the commercial invoice, packing list, certificate of origin, bill of lading and EN 10204 3.1 MTC. Send any extra wording your broker needs before dispatch.' },
    ],
    related: [['/products/flanges/rtj-face-flange-manufacturer/', 'Ring type joint (RTJ) flanges'], ['/materials/carbon-steel-flanges/', 'Carbon steel A105 flanges']],
    sources: [
      'https://www.pemex.com/en/about-pemex/Paginas/default.aspx',
    ],
  },

  malaysia: {
    metaTitle: 'Flange Supplier to Malaysia | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Malaysian oil and gas, Pengerang, Bintulu and Kerteh plants and stockists: ASME B16.5, duplex, A105. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Malaysia',
    intro: 'Malaysian flange demand comes mainly from oil, gas and petrochemical plants and the fabrication yards that build offshore structures. Most work follows ASME B16.5 with ASTM grades. Remax Forge supplies carbon, stainless, duplex and nickel alloy flanges from its Mumbai works, with an EN 10204 3.1 MTC for every heat.',
    sections: [
      {
        h2: 'Oil, gas and petrochemical sites',
        paras: [
          'The main hydrocarbon sites are the Pengerang Integrated Complex in south-east Johor, the Kerteh and Gebeng petrochemical areas on the east coast, and Bintulu in Sarawak, home to a large LNG complex. Offshore fabrication yards supply platforms for the fields off Peninsular Malaysia, Sabah and Sarawak.',
          'Offshore and coastal plants use a lot of duplex A182 F51 and super duplex F53 flanges for seawater and firewater, while cryogenic LNG service needs austenitic F304L/F316L. Onshore process lines use A105, A350 LF2 and chrome-moly grades.',
        ],
      },
      {
        h2: 'Ports',
        paras: ['General cargo usually enters through Port Klang (Selangor), Tanjung Pelepas or Pasir Gudang (Johor), Kemaman (Terengganu) or Bintulu. Name the port or your yard address and the Incoterm in the RFQ.'],
      },
      {
        h2: 'Approved vendors and end-user requirements',
        paras: ['Some operators buy only through locally licensed or registered suppliers. If your end user has a vendor list or a licensing rule, tell us: we supply through the licensed local company you nominate, and we do not claim any end-user registration we do not hold.'],
        table: {
          head: ['Service', 'Usual grades'],
          rows: [
            ['Seawater, firewater', 'Duplex F51, super duplex F53 / F55'],
            ['LNG and cryogenic', 'A182 F304L, F316L'],
            ['Hydrocarbon process', 'A105, A350 LF2'],
            ['Hot oil and steam', 'A182 F11, F22'],
          ],
        },
      },
      {
        h2: "Name the real discharge port",
        paras: ["Malaysian flange demand is spread across the peninsula and Borneo: Pengerang is in Johor, Kerteh in Terengganu and Bintulu in Sarawak. Freight to a Borneo port is priced differently from freight to Port Klang or the Johor ports, and transhipment can add time, so give the actual discharge port or site in your RFQ rather than just \"Malaysia\". If the flanges are for an offshore project supplied from a fabrication yard, give the yard's location. We confirm the freight basis and the delivery terms in the written quotation."],
      },
    ],
    faqs: [
      { q: 'Do you supply duplex flanges for offshore platforms in Malaysia?', a: 'Yes, duplex A182 F51 and super duplex F53 and F55 flanges with an EN 10204 3.1 MTC. State any corrosion test, ferrite count or impact test required by the specification.' },
      { q: 'Can you deliver to a fabrication yard in Johor?', a: 'Yes. Give the yard address or nearest port, such as Pasir Gudang or Tanjung Pelepas, and the Incoterm, and the quotation confirms the delivery basis.' },
      { q: 'Are you a registered vendor with Malaysian operators?', a: 'We do not claim any end-user registration. If the end user requires a licensed or registered supplier, we quote and supply through the local company you nominate.' },
      { q: 'Which flanges suit LNG service?', a: 'Austenitic stainless flanges such as A182 F304L and F316L are normally used for cryogenic LNG lines, with impact testing when the specification requires it.' },
    ],
    related: [['/materials/duplex-2205-flanges/', 'Duplex 2205 (F51) flanges'], ['/materials/stainless-steel-304-flanges/', '304/304L stainless flanges']],
    sources: [
      'https://www.petronas.com/',
      'https://www.pengerang.gov.my/',
    ],
  },

  indonesia: {
    metaTitle: 'Flange Supplier to Indonesia | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Indonesian refineries, LNG plants, nickel smelters and Batam yards: ASME B16.5, JIS B2220, duplex. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Indonesia',
    intro: 'Indonesian buyers range from refineries and LNG plants to nickel processing parks and offshore fabrication yards on Batam. Specifications are mostly ASME B16.5, with JIS B2220 on Japanese-designed plant. Remax Forge supplies both, in carbon, stainless, duplex and nickel alloy grades, with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'Where flanges are used',
        paras: [
          'Refineries such as Balikpapan in East Kalimantan, the LNG plants at Bontang and Tangguh, and the chemical and steel cluster at Cilegon in Banten buy weld neck, blind and spectacle blind flanges in A105, A350 LF2, F316L and chrome-moly grades.',
          'Nickel processing parks in Sulawesi and North Maluku run acid leach and smelting plants where duplex, super duplex and nickel alloy flanges may be specified for acid and slurry lines. Batam yards build offshore modules that usually follow ASME with duplex for seawater.',
        ],
      },
      {
        h2: 'Ports and import checks',
        paras: ['Cargo for Java usually lands at Tanjung Priok (Jakarta) or Tanjung Perak (Surabaya), while Batam has its own ports for the yards. Indonesia applies mandatory national standards (SNI) to a growing list of steel products. Ask your importer to confirm whether the HS code for your flanges (heading 7307) needs SNI certification or an import approval before shipment, because that must be settled before the goods sail.'],
      },
      {
        h2: 'Grades by service',
        table: {
          head: ['Service', 'Usual grades'],
          rows: [
            ['Hydrocarbon process', 'A105, A350 LF2'],
            ['LNG and cryogenic', 'A182 F304L, F316L'],
            ['Acid and slurry (nickel processing)', 'Duplex F51, super duplex F53, nickel alloys as specified'],
            ['Seawater (offshore yards)', 'Duplex F51, super duplex F53 / F55'],
          ],
        },
      },
      {
        h2: "Pertamina refinery units",
        paras: ["Most of Indonesia's refining runs through six Pertamina refinery units (RU): Dumai in Riau (RU II), Plaju in South Sumatra (RU III), Cilacap in Central Java (RU IV, the largest at about 348,000 barrels a day), Balikpapan in East Kalimantan (RU V), Balongan in West Java (RU VI, described by Pertamina as its most complex) and Kasim in West Papua (RU VII, the smallest). Upgrade projects and turnarounds at these sites need flanges to refinery line classes, typically ASME B16.5 and B16.47 in A105, A350 LF2, F316L and chrome-moly grades. Tell us which unit the order is for, the turnaround date and whether a third-party inspector will witness tests, so the quotation covers the right inspection and delivery plan."],
      },
    ],
    faqs: [
      { q: 'Do flanges need SNI certification to enter Indonesia?', a: 'Indonesia applies mandatory SNI to many steel products and the list has been changing. Ask your importer or customs broker to check the HS code for your flanges before shipment. We supply the MTC and documents they need.' },
      { q: 'Which materials suit nickel acid-leach plants?', a: 'The process licensor\'s specification decides, but duplex, super duplex and nickel alloy flanges are common choices for acid and slurry lines. Send the material specification and we quote to it.' },
      { q: 'Can you supply JIS B2220 flanges?', a: 'Yes. JIS B2220 flanges are quoted by size (A) and K rating. Give the type and material.' },
      { q: 'Can you deliver to Batam?', a: 'Yes. Name the Batam port or yard and the Incoterm, and the quotation states the delivery basis.' },
    ],
    related: [['/materials/super-duplex-2507-flanges/', 'Super duplex 2507 (F53) flanges'], ['/standards/jis-b2220/', 'JIS B2220 flange standard']],
    sources: [
      "https://kpi.pertamina.com/en/profil-perusahaan/bisnis-kami",
      'https://www.tci-pnp.com/en/blog/permenperin-1-2024-23-2025-why-epcs-in-2026-must-design-compliance-into-projects-from-the-tender-stage',
      'https://rri.co.id/en/national/2209410/the-government-supports-industry-readiness-in-implementing-sni-steel-regulation',
    ],
  },

  vietnam: {
    metaTitle: 'Flange Supplier to Vietnam | ASME B16.5 & JIS | Remax',
    metaDescription: 'Forged flanges for Nghi Son and Dung Quat refineries, Vung Tau offshore and Vietnamese EPCs: ASME B16.5, JIS B2220. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Vietnam',
    intro: 'Vietnam\'s refineries, gas processing plants, power projects and offshore yards buy flanges to ASME B16.5, with JIS B2220 common where Japanese or Korean contractors design the plant. Remax Forge quotes both from forged and machined production in Mumbai, with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'Refineries and energy projects',
        paras: [
          'Vietnam has two large refineries: Nghi Son in Thanh Hoa province (about 200,000 barrels per day) and Dung Quat in Quang Ngai province, operated by Binh Son Refining and Petrochemical, which has an expansion planned. Turnaround and expansion work at both needs weld neck, blind and spectacle blind flanges in A105, F316L and chrome-moly grades.',
          'Vung Tau is the base for offshore oil and gas services and fabrication, and the Thi Vai area hosts gas and LNG import facilities. Offshore work adds duplex flanges for seawater service.',
        ],
      },
      {
        h2: 'Ports',
        paras: ['Northern cargo usually lands at Hai Phong, southern cargo at Cai Mep–Thi Vai or Cat Lai (Ho Chi Minh City), and central projects use Da Nang or the Dung Quat port. Name the port or site and the Incoterm in the RFQ.'],
      },
      {
        h2: 'Standards by contractor',
        table: {
          head: ['Project designed by', 'Usual standard'],
          rows: [
            ['International oil and gas licensor', 'ASME B16.5 / B16.47, ASTM grades'],
            ['Japanese contractor', 'JIS B2220 (K ratings) or ASME, per spec'],
            ['Korean contractor', 'ASME for process, KS/JIS for utilities'],
            ['European contractor', 'EN 1092-1 PN for utilities, ASME for process'],
          ],
        },
      },
      {
        h2: "LNG power and the Block B gas pipeline",
        paras: ["Vietnam's first LNG-fired power plants, Nhon Trach 3 and 4 (about 1.6 GW), take their fuel from the LNG Thi Vai terminal in the south. A second large gas scheme, the Block B to O Mon project, links an offshore gas field in the south-west to the O Mon power complex in Can Tho through a pipeline of more than 430 km, with gas also planned for a power and fertilizer complex in Ca Mau.", "Projects like these use different flanges at each stage. LNG and other cryogenic lines need austenitic stainless flanges such as A182 F304L or F316L, often with impact testing at the design temperature. Gas pipelines and receiving stations need weld neck flanges whose bore matches the pipe schedule and whose class follows the design pressure, plus blind flanges for pigging and test points. Power plant balance-of-plant piping adds carbon steel slip-on and weld neck flanges for water and fuel gas. Send the line class or the EPC contractor's material requisition and we will quote each item against it."],
      },
    ],
    faqs: [
      { q: 'Do Vietnamese refineries use ASME or JIS flanges?', a: 'Process units are usually ASME B16.5. Utilities on Japanese- or Korean-designed plants may use JIS or KS K-rated flanges. Your line class tells you which.' },
      { q: 'Can you deliver to Hai Phong or Cai Mep?', a: 'Yes. Name the port and Incoterm, and the quotation states freight and the delivery basis.' },
      { q: 'Do you supply spectacle blinds for refinery turnarounds?', a: 'Yes, spectacle blinds to ASME B16.48 or to your drawing, in the piping class material. Give the shutdown date in the RFQ.' },
      { q: 'Can a Vietnamese EPC nominate a third-party inspector?', a: 'Yes. The inspector witnesses the agreed tests at our Mumbai works before dispatch, and EN 10204 3.2 certificates are issued when ordered.' },
    ],
    related: [['/standards/jis-b2220/', 'JIS B2220 flange standard'], ['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flanges']],
    sources: [
      "https://theinvestor.vn/vietnams-first-lng-fueled-power-plants-inaugurated-d17858.html",
      "https://www.pvn.vn/nhon-trach-3-and-4-combined-cycle-power-project-vietnam-31825",
      'https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/111124-vietnams-nsrp-seeks-approval-to-import-more-kuwaiti-crude-amid-high-run-rates',
      'https://www.enerdata.net/publications/daily-energy-news/vietnam-plans-expand-its-dung-quat-oil-refinery-capacity-171-kbd.html',
    ],
  },

  bangladesh: {
    metaTitle: 'Flange Supplier to Bangladesh | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Bangladesh power plants, gas transmission, fertiliser and EPC projects: ASME B16.5, A105, F22. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Bangladesh',
    intro: 'Bangladesh buys flanges mainly for gas-fired and coal power plants, gas transmission and distribution, fertiliser factories and the boilers of its industrial sector. Most projects specify ASME B16.5 with ASTM grades. Remax Forge supplies them from its Mumbai works, each heat with an EN 10204 3.1 MTC.',
    sections: [
      {
        h2: 'Sectors and grades',
        table: {
          head: ['Sector', 'Typical flanges and grades'],
          rows: [
            ['Gas transmission and distribution', 'Weld neck and blind, A105 / A350 LF2, Class 150–600'],
            ['Power plants (steam and feedwater)', 'Weld neck, A105, A182 F11 / F22 / F91, Class 600–2500'],
            ['Fertiliser and chemical plants', 'A182 F304L / F316L, A105'],
            ['Industrial boilers and utilities', 'Slip on and weld neck, A105, Class 150–300'],
          ],
        },
      },
      {
        h2: 'Ports and payment documents',
        paras: [
          'Chattogram is the main seaport and handles most of the country\'s container trade. Mongla and Payra serve the south-west and south, and the deep-sea port at Matarbari is under development.',
          'If you pay by letter of credit, send us the draft LC before it is issued. The flange description, HS code (heading 7307), quantities and the list of documents (commercial invoice, packing list, certificate of origin, bill of lading, MTC) must match between the LC and our documents, otherwise the bank can refuse them.',
        ],
      },
      {
        h2: 'Power-plant orders',
        paras: ['Steam and feedwater lines use high-class weld neck flanges in chrome-moly grades. For these, state the pipe schedule so the bore matches, the design temperature, and whether the specification needs hardness testing after heat treatment. The 3.1 MTC then reports the heat treatment and test results.'],
      },
      {
        h2: "Power plants: Payra and Matarbari",
        paras: ["Two of Bangladesh's largest coal-fired power stations are Payra in Patuakhali, two 660 MW units run by a Bangladeshi-Chinese joint venture, and Matarbari in Maheshkhali, Cox's Bazar, a 1,200 MW plant financed through JICA. Plants of this size need flanges for steam and feedwater lines in chrome-moly grades such as A182 F11, F22 and F91, large-bore cooling water flanges to ASME B16.47 or the designer's standard, and blind flanges for maintenance isolation. Spare flanges must match what was installed, which may follow Chinese, Japanese or ASME drawings depending on the original contractor, so send the drawing or the marking on the old flange and we will confirm the matching standard before quoting."],
      },
    ],
    faqs: [
      { q: 'Can you match your documents to my letter of credit?', a: 'Yes. Send the draft LC before it is issued, and we check that the description, HS code and required documents match what we can provide, so the bank accepts them.' },
      { q: 'Which flanges suit power-plant steam lines?', a: 'Weld neck flanges in A182 F11, F22 or F91, in the class your piping specification gives, with the bore matched to the pipe schedule.' },
      { q: 'Do you deliver to Chattogram port?', a: 'Yes. Name Chattogram, Mongla or Payra and the Incoterm, and the quotation states the freight basis.' },
      { q: 'Can a third-party inspector check the flanges before shipment?', a: 'Yes. Nominate the agency with the order and the agreed tests are witnessed at our Mumbai works before dispatch.' },
    ],
    related: [['/materials/alloy-steel-f11-f22-flanges/', 'Alloy steel F11 / F22 flanges'], ['/products/flanges/weld-neck-flange-for-power-generation/', 'Weld neck flanges for power generation']],
    sources: [
      "https://www.gem.wiki/Payra_power_station_(BCPCL)",
      "https://gem.wiki/Matarbari_power_station",
      'https://cpa.gov.bd/',
      'https://www.mpa.gov.bd/',
    ],
  },

  nigeria: {
    metaTitle: 'Flange Supplier to Nigeria | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Nigerian oil and gas, Lekki refinery projects and Onne yards: ASME B16.5, A105, A350 LF2, duplex. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to Nigeria',
    intro: 'Nigerian flange buyers are mostly in oil and gas: upstream operators and service companies in the Niger Delta, the refining and petrochemical projects around Lagos, and the fabrication yards at Onne and Port Harcourt. Their specifications follow ASME B16.5 with ASTM grades. Remax Forge supplies them from Mumbai with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'Where Nigerian orders go',
        paras: [
          'Lagos cargo arrives at Apapa, Tin Can Island or the Lekki Deep Sea Port. The Lekki Free Zone is also home to the Dangote refinery, a 650,000 barrel-per-day single-train plant. Oil and gas cargo for the Niger Delta often goes through Onne, in Rivers State, which hosts an oil and gas free zone.',
          'Oil and gas service in the Delta uses A105 and A350 LF2 weld neck flanges, RTJ facings on higher classes, and duplex flanges for produced water and seawater.',
        ],
      },
      {
        h2: 'Import documents: Form M and SONCAP',
        paras: ['The importer opens a Form M through an authorised bank before shipment. For products on the Standards Organisation of Nigeria (SON) regulated list, a product certificate and a SONCAP certificate for each shipment are also needed for customs clearance. Ask your clearing agent whether the HS code for your flanges (heading 7307) is regulated, and send us what they need. We provide the MTC, commercial invoice, packing list, certificate of origin and bill of lading.'],
      },
      {
        h2: 'Typical grades for Nigerian service',
        table: {
          head: ['Service', 'Usual grades and facing'],
          rows: [
            ['Wellhead and flowlines (ASME scope)', 'A105, A350 LF2, RTJ at Class 900 and above'],
            ['Sour service', 'NACE MR0175 / ISO 15156 hardness limits, when specified'],
            ['Produced water, seawater', 'Duplex F51, super duplex F53'],
            ['Refinery process', 'A105, A182 F316L, F11 / F22'],
          ],
        },
      },
      {
        h2: "Local content rules for oil and gas buyers",
        paras: ["Nigeria's Oil and Gas Industry Content Development Act of 2010 requires operators and contractors to give first consideration to Nigerian goods and services, and it restricts imported items where an equivalent is available locally. The Nigerian Content Development and Monitoring Board (NCDMB) enforces it, and a 2023 bill proposes to replace the Act, so check the current position. If your flanges are for an oil and gas operator, confirm with the operator's or your own Nigerian content team that imported flanges are acceptable for the job before you place the order. We supply the mill test certificates and shipping documents that the compliance file needs."],
      },
    ],
    faqs: [
      { q: 'Do flanges need a SONCAP certificate to enter Nigeria?', a: 'SONCAP applies to products on the SON regulated list, and steel products are covered by the scheme. Ask your clearing agent to confirm for your flange HS code, and send us their document list before shipment.' },
      { q: 'Can you deliver to Onne for Niger Delta projects?', a: 'Yes. Name Onne or the Lagos port you use and the Incoterm, and the quotation states the freight basis.' },
      { q: 'Do you supply RTJ flanges?', a: 'Yes, ring type joint flanges machined to ASME B16.5 groove dimensions. State the class, size, ring number and material.' },
      { q: 'Can you supply sour-service flanges?', a: 'Yes, when the order specifies NACE MR0175 / ISO 15156, the flanges are supplied within its hardness limits and the MTC reports hardness.' },
    ],
    related: [['/products/flanges/rtj-face-flange-manufacturer/', 'Ring type joint (RTJ) flanges'], ['/materials/duplex-2205-flanges/', 'Duplex 2205 (F51) flanges']],
    sources: [
      "https://www.mondaq.com/nigeria/oil-gas--electricity/99294/an-overview-of-the-nigerian-oil-and-gas-industry-content-development-act-2010",
      "https://assets.kpmg.com/content/dam/kpmg/ng/pdf/2024/12/Commentary%20on%20the%20Nigerian%20Oil%20and%20Gas%20Industry%20Content%20Development%20(NOGICD)%20Bill%202023.pdf",
      'https://son.gov.ng/?p=1000',
      'https://www.intertek.com.mx/siteassets/_media/soncap-nigeria-programme-guide.pdf',
      'https://ogj.com/home/news/55326118/dangote-unveils-project-to-more-than-double-lekki-refinerys-crude-capacity',
    ],
  },

  'south-africa': {
    metaTitle: 'Flange Supplier to South Africa | ASME & SANS | Remax',
    metaDescription: 'Forged flanges for South African mining, Secunda, power and Durban stockists: ASME B16.5 and SANS 1123 tables. EN 10204 3.1 MTC. Get a quote.',
    h1: 'Flange Supplier & Exporter to South Africa',
    intro: 'South Africa uses two flange systems side by side: SANS 1123 tables, rated in kPa, in mining, water and general industry, and ASME B16.5 in petrochemical, refinery and power plants. Remax Forge quotes ASME flanges from stock production and SANS 1123 items to the table you specify, all with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'SANS 1123 or ASME?',
        table: {
          head: ['System', 'How it is specified', 'Where it is used'],
          rows: [
            ['SANS 1123', 'Table designation by pressure in kPa, such as 1000/3, 1600/3, 2500/3, 4000/3', 'Mining, slurry, water, general industry'],
            ['ASME B16.5 / B16.47', 'NPS and Class 150–2500', 'Petrochemical, refinery, power, imported plant'],
            ['EN 1092-1 / BS 4504', 'DN and PN', 'European-designed equipment'],
          ],
        },
        paras: ['A SANS 1123 flange does not bolt to an ASME Class flange of the same nominal size. Quote the full table designation from your drawing, and the quotation confirms the standard we machine to.'],
      },
      {
        h2: 'Mining, energy and the main ports',
        paras: [
          'Mining and mineral processing in Gauteng, Limpopo, the North West and Mpumalanga use slurry, water and process lines that need flanges in carbon steel, with stainless and duplex where water chemistry is aggressive. The synthetic fuels complex at Secunda and the coal power stations in Mpumalanga buy high-class carbon and chrome-moly flanges for steam service.',
          'Durban is the busiest container port, with Richards Bay, Gqeberha and Ngqura, Saldanha Bay and Cape Town also handling project cargo. Name the port or inland delivery point and the Incoterm.',
        ],
      },
      {
        h2: "Replacing an existing flange: identify it first",
        paras: ["Older South African plants can have flanges to several standards side by side, and SANS 1123 itself was earlier published as SABS 1123, so old drawings may carry that name. Flanges from different standards can look alike but will not bolt together: an ASME Class 150 flange and a SANS 1123 or EN PN16 flange of the same nominal size usually have different bolt circles and bolt counts.", "If you have no drawing, measure the old flange and send us the outside diameter, the bolt circle (pitch circle) diameter, the number and size of the bolt holes, the thickness, the bore and the face type (flat or raised). With those six figures we can tell you which standard and pressure rating it is, and quote a flange that fits the existing mating flange without modifying the line."],
      },
    ],
    faqs: [
      { q: 'Do you supply SANS 1123 flanges?', a: 'Send the SANS 1123 table designation (for example 1600/3), size, type and material. The quotation confirms whether the flange is machined to that table.' },
      { q: 'Do SANS 1123 flanges fit ASME flanges?', a: 'No. The bolt patterns differ, so each line must state its standard. Mixing them on one order is fine if each item is clearly specified.' },
      { q: 'Which flanges suit power-station steam lines?', a: 'Weld neck flanges in A182 F11, F22 or F91, in the ASME class your piping specification gives, with the bore matched to the pipe schedule.' },
      { q: 'Can you deliver to Durban?', a: 'Yes. Name Durban or another South African port and the Incoterm, and the quotation states the freight basis.' },
    ],
    related: [['/standards/bs-10-bs-4504/', 'BS 10 and BS 4504 flanges'], ['/materials/alloy-steel-f11-f22-flanges/', 'Alloy steel F11 / F22 flanges']],
    sources: [
      'https://www.jfeindia.com/sabs-sans-1123-flanges.html',
      'https://www.transnetnationalportsauthority.net/',
    ],
  },

  kuwait: {
    metaTitle: 'Flange Supplier in Kuwait | ASME B16.5 | Remax Forge',
    metaDescription: 'Forged flanges for Kuwait refineries (Al-Zour, Mina Al-Ahmadi, Mina Abdullah), upstream and contractors: ASME B16.5, A105, duplex. Get a quote.',
    h1: 'Flange Supplier & Exporter to Kuwait',
    intro: 'Kuwait\'s flange demand comes from its three refineries, the upstream oil fields and the contractors who maintain them. Specifications follow ASME B16.5 and B16.47 with ASTM grades. Remax Forge supplies weld neck, blind, spectacle blind, RTJ and socket weld flanges from Mumbai, with an EN 10204 3.1 MTC per heat.',
    sections: [
      {
        h2: 'Refineries and upstream',
        paras: [
          'Kuwait refines at Mina Al-Ahmadi and Mina Abdullah, operated by KNPC, and at Al-Zour, operated by KIPIC, which reached its full 615,000 barrels per day in late 2023. Together they lifted national refining capacity to about 1.4 million barrels per day. Upstream, the Burgan field and the other onshore fields in the north and west use high-class flanges on wellhead, gathering and injection lines.',
          'Most Kuwait cargo enters through Shuwaikh port (Kuwait City) or Shuaiba port, which serves the southern industrial area near the refineries.',
        ],
      },
      {
        h2: 'Vendor lists and project specifications',
        paras: ['Kuwaiti operators run their own approved-manufacturer lists and project specifications. If your order is for a project with a vendor list, tell us at the RFQ stage: the quotation states whether we can supply against it. We do not claim any end-user approval we do not hold.'],
        table: {
          head: ['Service', 'Usual flanges and grades'],
          rows: [
            ['Refinery process', 'Weld neck, A105, A182 F316L, F11/F22, Class 150–900'],
            ['Wellhead and gathering (ASME scope)', 'A105, A350 LF2, RTJ at Class 900 and above'],
            ['Sour service', 'NACE MR0175 / ISO 15156 when specified'],
            ['Seawater and firewater', 'Duplex F51, super duplex F53'],
            ['Isolation during shutdowns', 'Spectacle blinds and spacers'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'Can you quote to a KOC or KNPC material specification?', a: 'Yes, we quote against the specification you send and list any deviations in the quotation. We do not claim KOC or KNPC vendor registration, so if the end user accepts only registered vendors, check with your contractor how the order must be routed before you place it.' },
      { q: 'Are you on the KOC or KNPC approved vendor list?', a: 'We do not claim any Kuwaiti end-user approval. If your project has a vendor list, tell us at the RFQ stage and the quotation states whether we can supply against it.' },
      { q: 'Which port should I name for Kuwait delivery?', a: 'Shuwaikh port for Kuwait City and Shuaiba port for the southern industrial area, or your site address. Name the port and Incoterm in the RFQ.' },
      { q: 'Do you supply RTJ flanges for upstream lines?', a: 'Yes, ring type joint flanges to ASME B16.5 groove dimensions, in A105, A350 LF2 or the grade your specification gives.' },
      { q: 'Can you supply spectacle blinds for a refinery turnaround?', a: 'Yes, spectacle blinds and spacers to ASME B16.48 or your drawing. Give the shutdown date in the RFQ.' },
    ],
    related: [['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flanges'], ['/products/flanges/rtj-face-flange-manufacturer/', 'Ring type joint (RTJ) flanges']],
    sources: [
      'https://www.agbi.com/articles/kuwaits-al-zour-refinery-increases-capacity-by-50',
      'https://www.da.gov.kw/en/news/879-29_05_2024/',
    ],
  },
};
