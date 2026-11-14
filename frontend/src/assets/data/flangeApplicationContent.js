// Written content for the flange "type x industry" pages (replaces the internal outline notes).
// Engineering statements follow the cited standards; company statements follow content-plan/FACTS.md.
// No contact details here: CTAs on the page open the quote form (CLAUDE.md contact gate).

export const flangeApplicationContent = {
  '/products/flanges/weld-neck-flange-for-petrochemical/': {
    title: 'Weld Neck Flange for Petrochemical Plants | Remax Forge',
    description: 'Buy weld neck flanges for petrochemical piping: ASME B16.5/B16.47, Class 150–2500, A105, LF2, F304/F316L, F321, F11/F22. EN 10204 3.1 MTC. Get a quote.',
    intro: 'Remax Forge & Fittings manufactures forged weld neck flanges for petrochemical process piping at its Mumbai works: ASME B16.5 (NPS ½"–24") and ASME B16.47 (NPS 26"–60"), Classes 150 to 2500, raised face or ring type joint, each bored to the schedule of the pipe it is welded to and shipped with an EN 10204 3.1 mill test certificate.',
    sections: [
      {
        h2: 'Why petrochemical piping specifies weld neck flanges',
        paras: [
          'Process lines in crackers, reformers, aromatics and polymer units see high temperature, pressure swings and thermal cycling at start-up and shutdown. A weld neck flange is butt-welded to the pipe and its tapered hub carries bending and thermal stress away from the flange ring, so the joint can be fully radiographed and stands up to cyclic loading better than slip on or lap joint designs.',
          'Process piping in these plants is normally designed to ASME B31.3. The flange class you order follows from the line\'s design pressure and temperature in the pressure–temperature tables of ASME B16.5, not from the operating pressure alone.',
        ],
      },
      {
        h2: 'Material grades by petrochemical service',
        table: {
          head: ['Service', 'Typical flange grade'],
          rows: [
            ['General hydrocarbon and utility lines', 'ASTM A105 / A105N carbon steel'],
            ['Low-temperature lines down to −46 °C (e.g. propane, refrigerant circuits)', 'ASTM A350 LF2 Class 1'],
            ['Cryogenic ethylene and LNG lines below −46 °C', 'ASTM A182 F304/304L, F316/316L'],
            ['High-temperature furnace outlet and hydrogen service', 'ASTM A182 F11, F22 (Cr-Mo)'],
            ['High-temperature lines at risk of sensitisation or polythionic acid cracking', 'ASTM A182 F321, F347'],
            ['Chloride-bearing or corrosive process streams', 'ASTM A182 F51 duplex, F53 super duplex, nickel alloys'],
          ],
        },
        paras: ['The licensor or owner\'s piping material specification always decides the grade; this table is a starting point for the RFQ, not a substitute for it.'],
      },
      {
        h2: 'Facing, bore and testing to state in the order',
        list: [
          'Facing: ASME B16.5 raised face is 1.6 mm high for Classes 150 and 300 and 6.4 mm for Class 600 and above. Ring type joint (RTJ) facing is common on high-pressure and hydrogen lines.',
          'Bore: give the pipe schedule (e.g. Sch 40, Sch 80, XS) so the weld bevel matches the pipe wall.',
          'Wet H2S service: name the requirement (NACE MR0175 / ISO 15156 or NACE MR0103) so hardness limits are applied in manufacture and recorded on the MTC.',
          'Inspection: PMI, ultrasonic testing and third-party inspection at our works can be added to the order.',
        ],
      },
    ],
    faqs: [
      { q: 'Which pressure class should I order for a petrochemical weld neck flange?', a: 'Take the design pressure and design temperature of the line and read them against the ASME B16.5 pressure–temperature table for the flange material group. For carbon steel A105 (Group 1.1) at 38 °C, Class 150 is rated 19.6 bar, Class 300 51.1 bar and Class 600 102.1 bar, and the ratings fall as temperature rises. Your piping class sheet normally fixes this already.' },
      { q: 'Can you supply weld neck flanges for hydrogen or high-temperature service?', a: 'Yes. Cr-Mo grades ASTM A182 F11 and F22 and stabilised stainless F321/F347 are supplied for high-temperature and hydrogen lines, with RTJ facing on request. State the design temperature and any licensor specification in your RFQ.' },
      { q: 'Do you supply NACE-compliant weld neck flanges?', a: 'Yes. Flanges for sour service are made to the hardness limits of NACE MR0175 / ISO 15156, and compliance is stated on the mill test certificate. See our sour service flange page for details.' },
      { q: 'What documents come with petrochemical flange orders?', a: 'Every order ships with an EN 10204 3.1 mill test certificate showing heat number, chemistry and mechanical results. EN 10204 3.2 certification and third-party inspection by your nominated agency can be arranged before dispatch.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Weld neck flange (all sizes)'],
      ['/products/flanges/sour-service-nace-flange/', 'Sour service NACE flanges'],
      ['/products/flanges/rtj-face-flange-manufacturer/', 'RTJ face flanges'],
      ['/materials/stainless-steel-321-347-flanges/', 'SS 321 / 347 flanges'],
    ],
  },

  '/products/flanges/weld-neck-flange-for-power-generation/': {
    title: 'Weld Neck Flange for Power Plants | F22, F91 | Remax Forge',
    description: 'Weld neck flanges for power plant piping: ASME B16.5/B16.47, Class 150–2500, ASTM A105, A182 F11/F22/F91 for steam service. EN 10204 3.1 MTC. Get a quote.',
    intro: 'Weld neck flanges for steam, feedwater and auxiliary piping in thermal, combined-cycle and waste-to-energy plants, forged at our Mumbai works to ASME B16.5 and B16.47 in Classes 150 to 2500 and supplied in carbon steel and Cr-Mo alloy grades with EN 10204 3.1 certification.',
    sections: [
      {
        h2: 'Where weld neck flanges are used in a power plant',
        paras: [
          'Power piping is designed to ASME B31.1. Main steam, hot and cold reheat, high-pressure feedwater and turbine bypass lines run at high temperature or high pressure and cycle every time the unit starts, ramps or trips. A butt-welded weld neck flange keeps the weld out of the flange ring and lets the joint be volumetrically examined, which is why it is the usual choice wherever those lines need a flanged break, such as at valves, flow elements and equipment nozzles.',
          'Lower-duty systems (cooling water, condensate, service water) can use slip on flanges. Socket weld flanges cover small-bore drains, vents and instrument lines.',
        ],
      },
      {
        h2: 'Steam service grades',
        table: {
          head: ['Line', 'Typical flange grade', 'Matching pipe'],
          rows: [
            ['Feedwater, condensate, auxiliary steam', 'ASTM A105', 'A106 Gr B'],
            ['Intermediate-temperature steam', 'ASTM A182 F11 (1¼Cr-½Mo)', 'A335 P11'],
            ['High-temperature steam', 'ASTM A182 F22 (2¼Cr-1Mo)', 'A335 P22'],
            ['Main steam and hot reheat in supercritical units', 'ASTM A182 F91 (9Cr-1Mo-V)', 'A335 P91'],
          ],
        },
        paras: ['F91 and other Cr-Mo grades need controlled preheat and post-weld heat treatment when they are welded on site. Order the flange grade that matches the pipe so the weld procedure qualification covers both sides of the joint.'],
      },
      {
        h2: 'What to specify',
        list: [
          'Class from the ASME B16.5 pressure–temperature table at the line\'s design temperature. Cr-Mo grades keep more of their rating at high temperature than carbon steel.',
          'Bore to the pipe wall thickness: high-pressure steam pipe is often heavy-wall, so give the schedule or the exact bore.',
          'Facing: raised face, or RTJ for high-pressure steam where your specification calls for it.',
          'Heat treatment condition and hardness checks for F91 (normalised and tempered), recorded on the MTC.',
        ],
      },
    ],
    faqs: [
      { q: 'Which flange material is used for main steam lines?', a: 'It depends on steam temperature. ASTM A182 F22 is common on subcritical units and F91 on supercritical and ultra-supercritical main steam and hot reheat lines. The flange grade should match the P-grade of the pipe (P22 or P91).' },
      { q: 'Can you supply F91 weld neck flanges with heat treatment records?', a: 'Yes. F91 flanges are supplied normalised and tempered, with the heat treatment cycle and test results recorded on the EN 10204 3.1 mill test certificate. EN 10204 3.2 can be arranged with your inspection agency.' },
      { q: 'Do you make high-pressure Class 1500 and 2500 weld neck flanges?', a: 'Yes. ASME B16.5 Class 1500 and 2500 weld neck flanges are supplied for feedwater and high-pressure steam, bored to the pipe schedule you specify.' },
      { q: 'What should a power plant flange RFQ include?', a: 'Flange type, NPS, class, facing, material grade, pipe schedule or bore, quantity per size, the piping code (ASME B31.1), certificates required and delivery point. Send it through the quote form for a written offer.' },
    ],
    related: [
      ['/products/flanges/weld-neck-flange/', 'Weld neck flange (all sizes)'],
      ['/materials/alloy-steel-f91-flanges/', 'Alloy steel F91 flanges'],
      ['/materials/alloy-steel-f11-f22-flanges/', 'Alloy steel F11 / F22 flanges'],
      ['/products/flanges/high-pressure-flange-manufacturer/', 'High-pressure flanges'],
    ],
  },

  '/products/flanges/socket-weld-flange-for-power-generation/': {
    title: 'Socket Weld Flange for Power Plants | Remax Forge',
    description: 'Socket weld flanges for small-bore power plant lines: drains, vents, instrument lines. ASME B16.5, A105, F11, F22, F91, F316L. 3.1 MTC. Get a quote.',
    intro: 'Forged socket weld flanges for the small-bore lines of a power plant (drains, vents, instrument, sampling and chemical-dosing lines), made to ASME B16.5 at our Mumbai works in carbon steel, Cr-Mo and stainless grades, with the socket bored to the schedule of your pipe.',
    sections: [
      {
        h2: 'Where socket weld flanges fit in power piping',
        paras: [
          'A socket weld flange takes the pipe end into a counterbored socket and is joined with a single external fillet weld. On small-bore lines this is quicker to fit up than a butt weld and needs no backing ring, which suits the large number of drain, vent, trap and instrument connections around boilers, HRSGs, turbines and feedwater heaters.',
          'Power piping is designed to ASME B31.1, which sets the limits on where socket welds may be used. Check your project\'s piping class for the maximum size and the services where socket welds are allowed before you order.',
        ],
      },
      {
        h2: 'Installation points that affect what you order',
        list: [
          'Socket bore: give the pipe schedule. The bore must match the pipe wall so the flow path stays smooth.',
          'Expansion gap: standard practice is to withdraw the pipe about 1.6 mm (1/16") from the socket bottom before welding, so the weld does not crack when the pipe heats up.',
          'Crevice: the gap left inside the socket can trap fluid. In corrosive or chemical-dosing service, confirm with your specification that socket welds are acceptable.',
          'Material match: order the flange in the same P-number family as the pipe (A105 with carbon steel, F22 with P22, F91 with P91) so the weld procedure covers the joint.',
        ],
      },
      {
        h2: 'Grades we supply for small-bore power lines',
        table: {
          head: ['Service', 'Flange grade'],
          rows: [
            ['Water, low-temperature drains and vents', 'ASTM A105'],
            ['Steam drains and trap lines on Cr-Mo headers', 'ASTM A182 F11, F22, F91'],
            ['Sampling, chemical dosing and instrument lines', 'ASTM A182 F304L / F316L'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'What sizes are socket weld flanges made in?', a: 'Socket weld flanges are small-bore flanges. ASME B16.5 covers them only in the smaller NPS sizes, and the range depends on pressure class. Tell us the NPS and class you need, and we will confirm it against the standard in the quotation.' },
      { q: 'Why leave a gap at the bottom of the socket?', a: 'A gap of about 1.6 mm (1/16") between the pipe end and the socket shoulder lets the pipe expand when it heats up, so the fillet weld is not cracked by thermal growth. It is standard practice in ASME B31.1 and B31.3 piping.' },
      { q: 'Can you supply F91 socket weld flanges?', a: 'Yes. ASTM A182 F91 socket weld flanges are supplied normalised and tempered, with the results on the EN 10204 3.1 certificate, for drains and vents on P91 headers.' },
      { q: 'Socket weld or threaded flange for small-bore steam lines?', a: 'Socket weld flanges give a seal-welded joint and are generally preferred on steam and high-temperature lines. Threaded flanges are used where welding is not allowed. Your piping specification decides which is permitted.' },
    ],
    related: [
      ['/products/flanges/socket-weld-flange/', 'Socket weld flange (all sizes)'],
      ['/materials/alloy-steel-f91-flanges/', 'Alloy steel F91 flanges'],
      ['/products/flanges/weld-neck-flange-for-power-generation/', 'Weld neck flanges for power plants'],
    ],
  },

  '/products/flanges/spectacle-blind-flange-for-power-generation/': {
    title: 'Spectacle Blind for Power Plants | ASME B16.48 | Remax',
    description: 'Spectacle blinds, paddle blanks and spacers for power plant isolation, to ASME B16.48, Class 150–2500, in A105, A516, F11, F22 and F91. 3.1 MTC. Get a quote.',
    intro: 'Spectacle blinds (figure-8 blanks), paddle blanks and spacers made to ASME B16.48 for positive isolation of steam, feedwater, fuel gas and auxiliary systems in power plants, supplied in carbon steel and Cr-Mo grades to match the flanges they sit between.',
    sections: [
      {
        h2: 'Why power plants use spectacle blinds',
        paras: [
          'A closed valve is not positive isolation. Before work on a turbine, boiler, heater or fuel gas skid, maintenance procedures usually call for a physical blank in the line. A spectacle blind stays in the flanged joint permanently: one end is solid (line blanked), the other is a ring (line open). Turning it over switches the line between the two states, and the blind always shows which state the line is in.',
          'Typical locations are steam and feedwater branches to equipment taken out for maintenance, fuel gas supplies to gas turbines and boilers, chemical dosing connections and hydrotest break points.',
        ],
      },
      {
        h2: 'Spectacle blind, or paddle blank and spacer?',
        paras: [
          'ASME B16.48 covers spectacle blinds, paddle blanks and paddle spacers for Classes 150 to 2500. On large sizes and high classes, a one-piece spectacle blind becomes heavy to handle, so a separate paddle blank and paddle spacer are often specified instead. The thickness is set by the standard for each size and class, so the blind must be ordered in the same class as the mating flanges.',
        ],
      },
      {
        h2: 'Grades and what to specify',
        table: {
          head: ['Line', 'Typical blind material'],
          rows: [
            ['Water, low-temperature steam, fuel gas', 'ASTM A105 or A516 Gr 70'],
            ['Cr-Mo steam lines', 'ASTM A182 F11, F22, F91, matching the line'],
            ['Chemical dosing and sampling', 'ASTM A182 F316L'],
          ],
        },
        list: [
          'NPS, class and facing (RF or RTJ) of the mating flanges',
          'Type: spectacle blind, or paddle blank and spacer pair',
          'Material grade, plus any handle or marking requirements in your specification',
        ],
      },
      {
        h2: 'Ordering for an outage',
        paras: [
          'Isolation points are usually listed in the outage or commissioning plan long before the work starts. Send the full list in one enquiry, with tag or line number, size, class, facing, material and quantity per item. The quotation can then confirm production time against the outage date, and the blinds can be marked with your tag numbers if your specification requires it.',
        ],
      },
    ],
    faqs: [
      { q: 'Which standard covers spectacle blinds?', a: 'ASME B16.48 (Line Blanks) covers spectacle blinds, paddle blanks and paddle spacers, sized to fit between ASME B16.5 and B16.47 flanges in Classes 150 to 2500.' },
      { q: 'Does the spectacle blind need to be the same class as the flanges?', a: 'Yes. The blind thickness is set by its pressure class, so it must match the class of the line. A lower-class blind may not hold the line\'s test or design pressure.' },
      { q: 'Can you supply spectacle blinds in F22 or F91?', a: 'Yes. Spectacle blinds and paddle blanks can be supplied in Cr-Mo grades to match high-temperature steam lines. State the grade and the mating flange class in the RFQ.' },
      { q: 'RF or RTJ spectacle blind?', a: 'Order the facing that matches the mating flanges. RTJ blinds have ring grooves on both faces for ring-type joint gaskets on high-pressure lines.' },
    ],
    related: [
      ['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flange (all sizes)'],
      ['/products/flanges/blind-flange/', 'Blind flanges'],
      ['/products/flanges/weld-neck-flange-for-power-generation/', 'Weld neck flanges for power plants'],
    ],
  },

  '/products/flanges/spectacle-blind-flange-for-petrochemical/': {
    title: 'Spectacle Blind for Petrochemical Plants | Remax Forge',
    description: 'Spectacle blinds, paddle blanks and spacers for petrochemical isolation and turnarounds. ASME B16.48, Class 150–2500, RF/RTJ, A105, LF2, NACE. Get a quote.',
    intro: 'Spectacle blinds, paddle blanks and spacers to ASME B16.48 for positive isolation in petrochemical units, used at vessel entries, battery limits, turnarounds and hydrotest break points. Supplied in Classes 150 to 2500, RF or RTJ, in carbon, low-temperature, stainless and sour-service grades.',
    sections: [
      {
        h2: 'Positive isolation for entry and turnarounds',
        paras: [
          'Vessel and column entry, hot work near process lines and equipment handover all need the line physically blanked, not just valved off. Petrochemical sites install spectacle blinds at these points so that isolation can be applied and verified quickly at every shutdown. The visible solid or open end shows the line\'s status to anyone walking the unit.',
          'They are also placed at unit battery limits, so a single unit can be isolated while the rest of the complex keeps running, and at hydrotest break points where a section of new piping is tested before tie-in.',
        ],
      },
      {
        h2: 'Matching the blind to the line',
        list: [
          'Class and facing: the blind must match the mating flanges (RF or RTJ). Thickness is fixed by ASME B16.48 for each size and class.',
          'Low-temperature lines: ASTM A350 LF2 for service down to −46 °C, and stainless for colder cryogenic lines.',
          'Sour (wet H2S) service: blinds made to the hardness limits of NACE MR0175 / ISO 15156, with compliance recorded on the MTC.',
          'Large sizes and high classes: specify a paddle blank and spacer pair where a one-piece spectacle blind would be too heavy to handle.',
        ],
      },
      {
        h2: 'Turnaround planning',
        paras: [
          'Blinds are usually needed in quantity before a planned shutdown. Sending the full blind list early, with size, class, facing, material and quantity per item, lets the quotation confirm production time against your turnaround date.',
        ],
      },
      {
        h2: 'Grades for petrochemical blinds',
        table: {
          head: ['Service', 'Typical blind material'],
          rows: [
            ['General hydrocarbon lines', 'ASTM A105 or A516 Gr 70'],
            ['Low-temperature lines to −46 °C', 'ASTM A350 LF2'],
            ['Cryogenic and corrosive lines', 'ASTM A182 F304L / F316L'],
            ['High-temperature Cr-Mo lines', 'ASTM A182 F11 / F22'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'What is the difference between a spectacle blind and a paddle blank?', a: 'A spectacle blind joins the solid blank and the open ring in one piece and stays in the line permanently. A paddle blank is a solid plate with a handle that is fitted when isolation is needed, and a paddle spacer fills the gap when it is removed. Both are covered by ASME B16.48.' },
      { q: 'Can spectacle blinds be supplied for sour service?', a: 'Yes. Blinds for wet H2S service are made to NACE MR0175 / ISO 15156 hardness limits, with compliance stated on the EN 10204 3.1 certificate.' },
      { q: 'Do you supply RTJ spectacle blinds?', a: 'Yes. RTJ spectacle blinds have ring grooves machined on both faces to suit the mating RTJ flanges and ring gaskets.' },
      { q: 'How should I order blinds for a turnaround?', a: 'Send the blind list through the quote form with the size, class, facing, material and quantity per item, plus your required-on-site date, and the quotation will confirm the production time.' },
    ],
    related: [
      ['/products/flanges/spectacle-blind-flange/', 'Spectacle blind flange (all sizes)'],
      ['/products/flanges/sour-service-nace-flange/', 'Sour service NACE flanges'],
      ['/products/flanges/weld-neck-flange-for-petrochemical/', 'Weld neck flanges for petrochemical'],
    ],
  },

  '/products/flanges/lap-joint-flange-for-petrochemical/': {
    title: 'Lap Joint Flange for Petrochemical Piping | Remax Forge',
    description: 'Lap joint flanges with stub ends for petrochemical piping: carbon steel backing flange, alloy stub end. ASME B16.5, Class 150–600, 3.1 MTC. Get a quote.',
    intro: 'Lap joint flanges for petrochemical piping, supplied as backing flanges to ASME B16.5 for use with ASME B16.9 or MSS SP-43 stub ends. Typical use is a carbon steel backing flange with a stainless, duplex or nickel alloy stub end, so only the wetted stub needs the expensive alloy.',
    sections: [
      {
        h2: 'Why petrochemical lines use lap joint flanges',
        paras: [
          'In a lap joint, the stub end is welded to the pipe and the flange slides loose behind it. The process fluid touches only the pipe and stub end, never the flange. On corrosive streams in stainless, duplex or nickel alloy, this means the backing flange can be carbon steel, which can cut the cost of each joint considerably compared with a solid alloy weld neck flange.',
          'Because the flange rotates, bolt holes line up without twisting the pipe. This helps on lines that are dismantled often for cleaning or inspection, and where pipe spools are prefabricated and fitted on site.',
        ],
      },
      {
        h2: 'Limits to check',
        paras: [
          'A lap joint has less resistance to bending and cyclic stress than a weld neck joint, so it is used on lower-pressure, non-cyclic lines rather than on high-pressure, high-temperature or vibrating service. Your piping class sheet shows where lap joints are permitted.',
        ],
      },
      {
        h2: 'Ordering a lap joint set',
        list: [
          'Backing flange: NPS, class, material (often ASTM A105), and the bore to suit the stub end OD',
          'Stub end: material to match the pipe (e.g. A403 WP316L), and long pattern (ASME B16.9) or short pattern (MSS SP-43)',
          'Facing is formed by the stub end lap, so the gasket seats on the stub, not the flange',
          'Coating of the carbon steel backing flange if the plant atmosphere is corrosive. State the specification so it can be confirmed in the quote.',
        ],
      },
      {
        h2: 'Typical petrochemical lap joint combinations',
        table: {
          head: ['Process line', 'Stub end / pipe', 'Backing flange'],
          rows: [
            ['Corrosive organic or aqueous streams', 'A403 WP316L', 'ASTM A105'],
            ['Chloride-bearing process water', 'Duplex 2205 / super duplex', 'ASTM A105'],
            ['Severe acid service', 'Nickel alloy (e.g. C276)', 'ASTM A105 or A182 F304'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'Can the lap joint flange be a different material from the pipe?', a: 'Yes, and that is the main reason to use one. The flange does not touch the process fluid, so a carbon steel backing flange is commonly used with a stainless or alloy stub end and pipe.' },
      { q: 'Do you supply stub ends with the lap joint flanges?', a: 'We manufacture the lap joint backing flanges. Stub ends can be included in the same enquiry: state the material, schedule and long or short pattern, and the quotation will confirm the scope.' },
      { q: 'What pressure classes are lap joint flanges used in?', a: 'ASME B16.5 lists lap joint flanges in several pressure classes, but in practice they are used mostly on lower-pressure lines because the joint has lower bending and fatigue strength than a weld neck. Follow your piping class sheet.' },
      { q: 'How do I get a price for lap joint flanges?', a: 'Send the NPS, class, backing flange grade, stub end details and quantities through the quote form for a written offer.' },
    ],
    related: [
      ['/products/flanges/lap-joint-flange/', 'Lap joint flange (all sizes)'],
      ['/materials/stainless-steel-316-flanges/', 'SS 316 / 316L flanges'],
      ['/materials/duplex-2205-flanges/', 'Duplex 2205 flanges'],
    ],
  },

  '/products/flanges/lap-joint-flange-for-water-infrastructure/': {
    title: 'Lap Joint Flange for Water Pipelines | Remax Forge',
    description: 'Lap joint flanges for water treatment and desalination piping: carbon steel backing flange with SS316L or duplex stub end. ASME B16.5 / EN 1092-1. Get a quote.',
    intro: 'Lap joint backing flanges for stainless steel water piping in water treatment, desalination, pumping stations and process water systems. A carbon steel backing flange is paired with a stainless or duplex stub end, so the wetted material stays corrosion-resistant while the flange costs less.',
    sections: [
      {
        h2: 'Why water projects use lap joint flanges',
        paras: [
          'Treated water, brine and chemical-dosing lines are often run in stainless steel 316L or duplex to resist chlorides. Making every flange from the same alloy is expensive, especially on large diameters. With a lap joint, only the stub end welded to the pipe is alloy. The loose backing flange, which never touches the water, can be carbon steel with a protective coating.',
          'The rotating flange also makes it easy to line up bolt holes on long prefabricated spools, pump connections and valve stations, and to dismantle lines for maintenance.',
        ],
      },
      {
        h2: 'Matching standards and connections',
        list: [
          'Drilling: ASME B16.5 Class 150, or EN 1092-1 PN10 / PN16 where the project and its valves and pumps are on EN drilling. State the drilling, because the two patterns are not interchangeable.',
          'Stub end: ASME B16.9 long pattern or MSS SP-43 short pattern, in the pipe material and schedule (thin-wall stainless water pipe is often Sch 10S).',
          'Corrosion protection of the backing flange: give the coating specification your project requires so it can be confirmed in the quotation.',
        ],
      },
      {
        h2: 'Seawater and brine service',
        paras: [
          'For seawater intake, brine and high-pressure reverse osmosis piping, chloride pitting resistance matters more than cost. Duplex (ASTM A182 F51) and super duplex (F53, F55) are commonly specified for these lines, either as stub ends with a lap joint or as solid flanges, depending on pressure and the designer\'s specification. Where a carbon steel backing flange is used on these lines, its coating has to survive a wet, salty plant atmosphere. Include the coating system and the dry film thickness in the RFQ.',
        ],
      },
      {
        h2: 'Typical water-project combinations',
        table: {
          head: ['Line', 'Stub end / pipe', 'Backing flange'],
          rows: [
            ['Treated and product water', 'A403 WP316L, Sch 10S', 'ASTM A105, coated'],
            ['Chemical dosing', 'A403 WP316L', 'ASTM A105, coated, or A182 F304'],
            ['Seawater intake and brine', 'Duplex / super duplex', 'ASTM A105, coated'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'Are lap joint flanges suitable for water pipelines?', a: 'Yes, for low and moderate pressure lines. They are widely used on stainless water piping because the carbon steel backing flange does not touch the water. High-pressure lines usually use weld neck flanges.' },
      { q: 'Can you supply lap joint flanges with EN 1092-1 drilling?', a: 'EN 1092-1 PN-rated flanges are made to order. State PN10 or PN16 drilling in your RFQ and we will confirm it in the quotation.' },
      { q: 'What stub end material is used for desalination?', a: 'It follows the pipe. Stainless 316L is common on product water, and duplex or super duplex on seawater and brine lines. The project specification decides.' },
      { q: 'How do I order lap joint flanges for a water project?', a: 'Send the NPS, drilling standard (ASME class or EN PN), backing flange material, coating specification, stub end material and schedule, and quantities through the quote form.' },
    ],
    related: [
      ['/products/flanges/lap-joint-flange/', 'Lap joint flange (all sizes)'],
      ['/standards/en-1092-1/', 'EN 1092-1 flange standard'],
      ['/materials/super-duplex-2507-flanges/', 'Super duplex 2507 flanges'],
    ],
  },

  '/products/flanges/blind-flange-for-water-infrastructure/': {
    title: 'Blind Flange for Water Pipelines | Remax Forge',
    description: 'Blind flanges for water mains, treatment plants and desalination: ASME B16.5/B16.47, EN 1092-1, flat or raised face, A105, SS316L, duplex. 3.1 MTC. Get a quote.',
    intro: 'Blind flanges for water transmission mains, treatment plants, pumping stations and desalination plants: end closures, future tie-in points and hydrotest blanks, forged to ASME B16.5, B16.47 or EN 1092-1 drilling in carbon steel, stainless and duplex grades.',
    sections: [
      {
        h2: 'Where water projects use blind flanges',
        list: [
          'Hydrostatic testing: blanking each end of a test section of new main or plant piping',
          'Future connections: closing branches and tees left for later network extensions or plant expansions',
          'Maintenance access: removable covers on strainers, meters and pipe ends that need inspection or cleaning',
          'Dead ends and spare nozzles on tanks, filters and pump manifolds',
        ],
      },
      {
        h2: 'Face type: flat face against cast or ductile iron',
        paras: [
          'Many valves, pumps and fittings in water systems are cast or ductile iron with flat-face flanges. Bolting a raised-face steel blind to a flat-face iron flange concentrates load at the centre and can crack the iron flange. Order the blind with a flat face (FF) and use a full-face gasket against iron equipment, and a raised face (RF) against steel flanges.',
        ],
      },
      {
        h2: 'Drilling and material',
        table: {
          head: ['Requirement', 'Options'],
          rows: [
            ['Drilling', 'ASME B16.5 Class 150/300, ASME B16.47 for NPS 26"+, EN 1092-1 PN10/PN16/PN25'],
            ['Potable and process water', 'ASTM A105 with the coating your project specifies, or A182 F304L/F316L'],
            ['Seawater, brine, RO high-pressure', 'ASTM A182 F51 duplex, F53 / F55 super duplex'],
          ],
        },
        paras: ['Blind thickness rises with size and class. Large-diameter blinds for hydrotest closures are heavy, so give the test pressure in the RFQ so the correct class is confirmed.'],
      },
      {
        h2: 'Large-diameter water mains',
        paras: [
          'Transmission mains above NPS 24" fall outside ASME B16.5. Steel water pipelines are often flanged to AWWA C207, which has its own classes and drilling. Process piping on desalination and treatment plants more often uses ASME B16.47 Series A or B. These patterns are not interchangeable, so give the standard, class and nominal size of the flange the blind will bolt to, or send the mating flange drawing.',
          'Bolting and gaskets complete the joint. State the gasket type (full-face rubber, spiral wound or ring) and the bolt material and coating your specification requires, so the blind face finish and bolt holes are confirmed against them in the quotation.',
        ],
      },
    ],
    faqs: [
      { q: 'Should a blind flange for a water line be flat face or raised face?', a: 'Use flat face (FF) with a full-face gasket when the mating flange is cast or ductile iron, as on many valves and pumps. Use raised face (RF) when the mating flange is a steel raised-face flange.' },
      { q: 'Can you supply blind flanges drilled to EN 1092-1 PN16?', a: 'Yes. EN 1092-1 PN-rated blind flanges are made to order. State the PN rating and DN in the RFQ.' },
      { q: 'Which material is used for desalination blind flanges?', a: 'Duplex F51 or super duplex F53/F55 are commonly specified on seawater and brine lines, and stainless 316L on product water. The project specification decides.' },
      { q: 'What class blind flange do I need for a hydrotest?', a: 'The blind must be rated for the test pressure at test temperature. Give us the test pressure and the line\'s flange class, and the quotation will confirm a suitable rating.' },
    ],
    related: [
      ['/products/flanges/blind-flange/', 'Blind flange (all sizes)'],
      ['/standards/en-1092-1/', 'EN 1092-1 flange standard'],
      ['/materials/duplex-2205-flanges/', 'Duplex 2205 flanges'],
    ],
  },

  '/products/flanges/threaded-flange-for-water-infrastructure/': {
    title: 'Threaded Flange for Water Lines | NPT / BSP | Remax Forge',
    description: 'Threaded (screwed) flanges for galvanised and small-bore water piping: ASME B16.5, NPT per ASME B1.20.1, A105, SS304/316. EN 10204 3.1 MTC. Get a quote.',
    intro: 'Threaded (screwed) flanges for small-bore water, fire water and utility piping where welding is not wanted, especially on galvanised pipe. Made to ASME B16.5 with tapered pipe threads, in carbon steel and stainless steel.',
    sections: [
      {
        h2: 'When a threaded flange is the right choice',
        paras: [
          'Welding destroys the zinc coating on galvanised pipe, so galvanised water and utility lines are normally joined with threads. A threaded flange lets these lines connect to flanged valves, meters, pumps and tanks without welding on site. They are also used on small-bore lines in plant rooms and in areas where hot work is restricted.',
          'Threaded joints are best kept to small sizes and to low-pressure, non-cyclic, non-vibrating service. On larger or high-pressure lines, a welded flange is preferred.',
        ],
      },
      {
        h2: 'Thread standard: state it in the order',
        list: [
          'NPT (ASME B1.20.1) is the standard taper thread for ASME B16.5 threaded flanges and is used on US-standard piping.',
          'Many water networks use BSP taper threads instead. NPT and BSP do not seal together, so the thread must match the pipe already on site.',
          'Give the pipe schedule. Threading reduces the wall at the joint, so threaded pipe is often heavier schedule.',
        ],
      },
      {
        h2: 'Material for water service',
        table: {
          head: ['Line', 'Typical grade'],
          rows: [
            ['Galvanised water and fire water lines', 'ASTM A105, with the coating your project specifies'],
            ['Treated water and chemical dosing', 'ASTM A182 F304 / F316'],
          ],
        },
      },
      {
        h2: 'Fire water and utility systems',
        paras: [
          'Fire water rings, sprinkler risers and plant utility headers often mix flanged valves and equipment with threaded small-bore branches. A threaded flange is the transition piece: it screws onto the threaded pipe and bolts to the flanged valve, pump or hydrant. Fire protection codes and the authority having jurisdiction set the sizes and pressures at which threaded joints are allowed, so confirm this in your design before ordering.',
          'For assembly, use a thread sealant suited to the fluid (approved for potable water where required) and tighten the flange onto the pipe before bolting it up, so the bolt holes can be aligned without unscrewing the joint. Never seal-weld a threaded flange on galvanised pipe: the heat destroys the coating that the threaded joint was chosen to protect.',
        ],
      },
    ],
    faqs: [
      { q: 'What thread do your threaded flanges have?', a: 'ASME B16.5 threaded flanges are made with NPT taper threads to ASME B1.20.1. If your system uses BSP threads, state it in your RFQ and we will confirm it in the quotation.' },
      { q: 'Can threaded flanges be used on galvanised water pipe?', a: 'Yes. That is one of their main uses, because the joint is made without welding, which would burn off the zinc coating.' },
      { q: 'Are threaded flanges suitable for high pressure?', a: 'Threaded joints are best for small-bore, low-pressure, non-cyclic service. For high-pressure, high-temperature or vibrating lines, use weld neck or socket weld flanges as your piping specification requires.' },
      { q: 'How do I order threaded flanges?', a: 'Send the NPS, class, thread type (NPT or BSP), material, pipe schedule and quantity through the quote form for a written offer.' },
    ],
    related: [
      ['/products/flanges/threaded-flange/', 'Threaded flange (all sizes)'],
      ['/products/flanges/blind-flange-for-water-infrastructure/', 'Blind flanges for water pipelines'],
      ['/materials/stainless-steel-304-flanges/', 'SS 304 flanges'],
    ],
  },
};

// FAQs for a commercial flange page: written FAQs if present, otherwise drop the
// placeholder FAQs whose answer just repeats the question.
export const getCommercialFlangeFaqs = (path, fallback = []) => {
  const written = flangeApplicationContent[path]?.faqs;
  if (written) return written;
  return (fallback || []).filter((f) => f.a && f.q && !f.a.startsWith(f.q));
};
