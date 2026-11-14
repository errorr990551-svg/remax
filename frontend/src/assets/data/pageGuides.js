// Extra written guide sections rendered by components/common/PageGuide.jsx, keyed by canonical path.
export const pageGuides = {
  '/quality/': {
    sections: [
      { h2: 'Inspection points a flange order should cover', list: [
        'Raw material check: forging stock matched to its mill certificate for grade, heat number and size.',
        'Positive material identification (PMI) on stainless, duplex and nickel-alloy material, so the alloy on the certificate is the alloy in the part.',
        'Heat treatment: normalising, quench and temper or solution annealing as the material specification requires, reported against the heat number.',
        'Dimensional inspection of the finished flange against ASME B16.5, B16.47, EN 1092-1 or the customer drawing: outside diameter, thickness, bore, bolt circle, bolt holes, face and finish.',
        'Non-destructive and pressure tests as ordered, such as ultrasonic testing and hydrostatic testing.',
        'Marking: grade, size, class and heat number on each flange, matching the certificate.'] },
      { h2: 'Certificates and third-party inspection', paras: [
        'Every order is supplied with an EN 10204 3.1 mill test certificate, which EN 10204 requires to be validated by an inspection representative independent of the manufacturing department. When a project needs an independent witness, an EN 10204 3.2 certificate can be arranged with the third-party inspector named on your purchase order.',
        'If you have an inspection and test plan (ITP), send it with the enquiry. Hold and witness points are then listed on the quotation, so inspection time is planned into the schedule.'] },
      { h2: 'What to send for a quality-critical order', list: [
        'Material specification and edition, for example ASTM A182 F316L or ASTM A105N.',
        'Dimension standard, class and face finish.',
        'Required tests and their acceptance criteria: hardness, impact, IGC, ferrite, NDT.',
        'Certificate type and the inspection agency, if any.',
        'Marking, packing and preservation requirements.'] },
    ],
  },
  '/blogs/flange-pressure-class-guide/': {
    sections: [
      { h2: 'Choosing a class in four steps', list: [
        'Find the material group of the flange grade in ASME B16.5. A105 carbon steel is Group 1.1; stainless and alloy grades sit in other groups with their own ratings.',
        'Take the design temperature of the line, not the normal operating temperature.',
        'Read the rating for each class at that temperature in the table for your material group.',
        'Pick the lowest class whose rating is at or above the design pressure, then check that valves and equipment nozzles on the line use the same class.'] },
      { h2: 'Worked example: A105 at 200°C', paras: [
        'A line in A105 has a design pressure of 30 bar at 200°C. At 200°C, Class 150 for Group 1.1 is rated at 13.8 bar, which is too low. Class 300 is rated at 43.8 bar, which covers 30 bar. The flange is Class 300 even though 30 bar would look like a "low" pressure at ambient temperature.',
        'If the same line ran in 316 stainless, the result could differ because stainless grades have different ratings. Check the table for the group of the grade you actually order.'] },
      { h2: 'Pressure class and PN are not interchangeable', paras: [
        'EN 1092-1 PN ratings and ASME classes are sometimes listed side by side, for example Class 150 next to PN20 and Class 300 next to PN50, but the flanges have different drilling and dimensions. A PN16 flange will not bolt to a Class 150 flange. When a project mixes European and American equipment, state both standards on the RFQ so adaptors or the right drilling are quoted.'] },
    ],
  },
  '/tech-info/mechanical-properties/': {
    sections: [
      { h2: 'What each mechanical property tells you', table: { head: ['Property', 'What it measures', 'Where it matters'], rows: [
        ['Yield strength', 'Stress at which the metal starts to deform permanently', 'Basis of design stresses and wall thickness'],
        ['Tensile strength', 'Highest stress reached before the test bar breaks', 'Material grade limits; used in allowable stress'],
        ['Elongation', 'How far a test bar stretches before breaking, as a percentage', 'Ductility; ability to deform without cracking'],
        ['Reduction of area', 'How much the cross-section necks down at fracture', 'Ductility check on forgings'],
        ['Hardness (HB, HRC, HV)', 'Resistance to indentation', 'Sour service limits, heat treatment check, wear'],
        ['Impact energy (Charpy)', 'Energy absorbed when a notched bar is broken at a set temperature', 'Toughness for low-temperature service'],
      ] } },
      { h2: 'How the values are tested', paras: [
        'For steel products, tensile and Charpy tests are usually made to ASTM A370 or ISO 6892-1 and ISO 148-1. Brinell hardness follows ASTM E10, Rockwell ASTM E18 and Vickers ASTM E92 or ISO 6507. The product specification, such as ASTM A182 for forged flanges or ASTM A106 for pipe, sets which tests are required and the minimum values.',
        'Test bars are taken from the same heat and heat-treatment lot as the parts they represent. That is why the heat number on a flange must match the heat number on its certificate.'] },
      { h2: 'Reading mechanical properties on a mill test certificate', list: [
        'Check that the specification and grade on the certificate match the purchase order.',
        'Compare yield, tensile and elongation with the minimums in the material specification, not with typical values.',
        'For low-temperature service, check the Charpy test temperature as well as the energy values.',
        'For sour service, check that hardness is within the NACE MR0175 / ISO 15156 limit given in your specification.',
        'Confirm the heat treatment condition reported matches what the specification requires.'] },
    ],
    faqs: [
      { q: 'Is a higher tensile strength always better?', a: 'No. Very high strength often comes with lower ductility and toughness, and higher hardness can be a problem in sour service. The grade is chosen for the balance the service needs.' },
      { q: 'Why does hardness matter for flanges?', a: 'Hardness is a quick check that heat treatment was correct, and sour-service rules limit it to reduce the risk of sulphide stress cracking.' },
    ],
  },
  '/tech-info/pipe-dimensions/': {
    sections: [
      { h2: 'NPS, DN and outside diameter', paras: [
        'Pipe sizes are given as Nominal Pipe Size (NPS) in inches or Diameter Nominal (DN) in millimetres. For NPS 1/8 to 12 the nominal size is only a name: NPS 2 pipe has an outside diameter of 60.3 mm, not 2 inches. From NPS 14 upward the outside diameter equals the nominal size in inches, so NPS 14 is 355.6 mm (14 inches) OD.',
        'The outside diameter stays fixed for each size, and the wall thickness changes with schedule. A thicker schedule therefore has a smaller bore.'] },
      { h2: 'Common NPS to DN conversions', table: { head: ['NPS', 'DN', 'Outside diameter'], rows: [
        ['1/2', '15', '21.3 mm'], ['1', '25', '33.4 mm'], ['2', '50', '60.3 mm'], ['4', '100', '114.3 mm'], ['6', '150', '168.3 mm'], ['8', '200', '219.1 mm'], ['10', '250', '273.1 mm'], ['12', '300', '323.8 mm'],
      ] } },
      { h2: 'Schedules and standards', list: [
        'ASME B36.10M covers welded and seamless wrought steel pipe, with schedules such as 10, 20, 40, 80, 160 and the weight classes STD, XS and XXS.',
        'ASME B36.19M covers stainless steel pipe with schedules 5S, 10S, 40S and 80S.',
        'Schedule 40 and STD are the same wall up to NPS 10; schedule 80 and XS are the same up to NPS 8. Above those sizes they differ.',
        'Material specifications such as ASTM A106 and A312 allow a wall thickness under-tolerance, commonly 12.5%, which matters when wall thickness is calculated close to the minimum.'] },
      { h2: 'Why the pipe schedule matters when ordering flanges', paras: [
        'A weld neck flange is bored to match the inside diameter of the pipe it is welded to, so a smooth bore runs through the joint. A socket weld flange bore is also matched to the pipe schedule. Give the pipe schedule or wall thickness with every weld neck and socket weld flange order; a flange bored for schedule 40 will leave a step on schedule 80 pipe.'] },
    ],
  },
  '/tech-info/dimension-chart/': {
    sections: [
      { h2: 'Key dimensions on a flange drawing', table: { head: ['Dimension', 'Meaning'], rows: [
        ['O (outside diameter)', 'Overall diameter of the flange'],
        ['tf (thickness)', 'Thickness of the flange ring; check whether the table includes the raised face'],
        ['R (raised face diameter)', 'Diameter of the raised sealing surface'],
        ['W (bolt circle)', 'Diameter of the circle through the centres of the bolt holes, also called PCD'],
        ['Bolt holes', 'Number and diameter of holes, which set the stud size'],
        ['X (hub diameter)', 'Diameter of the hub at its base on weld neck and slip-on flanges'],
        ['Y (length through hub)', 'Overall length from face to end of hub'],
        ['B (bore)', 'Inside diameter, matched to the pipe for weld neck flanges'],
      ] } },
      { h2: 'Identifying an unknown flange', list: [
        'Measure the outside diameter and flange thickness.',
        'Count the bolt holes and measure their diameter.',
        'Measure the bolt circle: on flanges with an even number of holes, measure centre to centre across opposite holes.',
        'Check the face: raised face, flat face or ring groove.',
        'Compare the set of measurements with ASME B16.5, EN 1092-1, BS 10 or JIS B2220 tables. Bolt circle and hole count usually identify the standard and class.'] },
      { h2: 'Tolerances and what to put on an RFQ', paras: [
        'Flange standards set tolerances on outside diameter, thickness, bore and bolt circle. Tables give nominal values, so a measured flange will not always match to the millimetre. When matching existing equipment, send measured values or a drawing with the RFQ, plus the standard, class and face type if known, and the dimensions are confirmed before machining.'] },
    ],
  },
  '/tech-info/weight-chart/': {
    sections: [
      { h2: 'Worked examples', list: [
        'Carbon steel pipe, NPS 6 schedule 40 (168.3 mm OD × 7.11 mm wall): (168.3 − 7.11) × 7.11 × 0.02466 = about 28.3 kg per metre.',
        'Carbon steel plate, 2.5 m × 1.25 m × 10 mm: 2.5 × 1.25 × 10 × 7.85 = about 245 kg per sheet.',
        'Stainless steel is slightly denser than carbon steel, so results for stainless come out a few percent higher.'] },
      { h2: 'Estimating a flange weight', paras: [
        'Flanges have hubs, raised faces and bolt holes, so there is no single-line formula. For a blind flange, treat it as a disc: weight in kg is roughly 0.785 × OD² × thickness × 7.85 ÷ 1,000,000, with all dimensions in mm, then subtract the bolt holes.',
        'Example: an NPS 4 Class 150 blind flange has an outside diameter of about 229 mm and a thickness of about 24 mm. The disc gives about 7.8 kg, and eight 19 mm bolt holes remove about 0.4 kg, so the flange weighs roughly 7.4 kg plus the raised face. Use published weight tables or the quotation for freight planning, since hubbed flanges and higher classes vary more.'] },
      { h2: 'Why weight matters on an order', list: [
        'Freight cost and packing: crate and pallet sizes depend on total weight.',
        'Handling: large blinds and high-class flanges need lifting gear on site.',
        'Pipe supports: heavy flanges and valves add load at supports and nozzles.'] },
    ],
  },
  '/product-details/boiler-quality-plate/': {
    sections: [
      { h2: 'What boiler quality plate is', paras: [
        'Boiler quality (BQ) plate is carbon or carbon-manganese steel plate made for pressure-containing parts that run at moderate to elevated temperatures: boiler drums and shells, pressure vessels, heat exchanger shells and storage vessels. It is made to specifications that control chemistry, tensile properties and, where required, toughness.',
        'In India it is ordered to IS 2002. Internationally, ASTM A516 and EN 10028-2 are the common equivalents.'] },
      { h2: 'ASTM A516 grades at a glance', table: { head: ['A516 grade', 'Tensile strength', 'Minimum yield'], rows: [
        ['Grade 55', '380 to 515 MPa', '205 MPa'], ['Grade 60', '415 to 550 MPa', '220 MPa'], ['Grade 65', '450 to 585 MPa', '240 MPa'], ['Grade 70', '485 to 620 MPa', '260 MPa'],
      ] }, paras: ['A516 plates over 40 mm (1.5 inch) thick are supplied normalised. Thinner plates may be as-rolled unless normalising is ordered, which is usual when impact testing is required. Grade 70 is the most widely used grade for pressure vessels.'] },
      { h2: 'Sour service and extra testing', list: [
        'HIC testing to NACE TM0284 for plates in wet hydrogen sulphide service.',
        'Charpy impact testing at the minimum design metal temperature.',
        'Ultrasonic testing of plate to ASTM A435 or A578 when laminations must be ruled out.',
        'Simulated post-weld heat treatment of test coupons when the vessel will be stress relieved.'] },
      { h2: 'Ordering boiler quality plate', paras: [
        'Give the specification and grade, thickness, width and length, heat treatment condition, any supplementary requirements (impact, HIC, UT) and the certificate type. If the plate is for a boiler under the Indian Boiler Regulations, say so in the RFQ so the documents can be confirmed in the quotation.'] },
    ],
  },
  '/product-details/hardox-plate/': {
    sections: [
      { h2: 'What Hardox plate is', paras: [
        'Hardox is SSAB\'s brand of quenched and tempered abrasion-resistant steel plate. The plate is hardened through its thickness, so wear resistance stays consistent as the surface wears away. Grades are named after their nominal Brinell hardness.'] },
      { h2: 'Choosing between Hardox 400, 450 and 500', table: { head: ['Hardox grade', 'Hardness (HBW)', 'Typical choice'], rows: [
        ['Hardox 400', '370 to 430', 'Wear with impact; easier bending and machining'],
        ['Hardox 450', '425 to 475', 'Balanced wear life and workability; the most common grade'],
        ['Hardox 500', '470 to 530', 'Heavy sliding abrasion where longer life outweighs harder fabrication'],
      ] } },
      { h2: 'Fabrication guidance', list: [
        'Welding: use low-hydrogen consumables and follow preheat rules based on combined plate thickness and grade.',
        'Do not exceed the maximum interpass temperature, or the heat-affected zone can soften.',
        'Thermal cutting can soften edges and, on thick plate, cause cracking; preheating before cutting is advised on heavy sections.',
        'Bending radius depends on grade and thickness; harder grades need larger radii and stronger press brakes.',
        'Ask for the SSAB inspection certificate, which identifies the plate and its heat.'] },
      { h2: 'Where it is used', paras: [
        'Dump truck bodies, excavator buckets and cutting edges, crusher and hopper liners, chutes, conveyor transfer points, cement and mining equipment, and recycling machinery. Send the application, thickness and plate size or cutting drawing with the RFQ.'] },
    ],
  },
};
