// Buyer (transactional) content for butt weld and socket weld fitting pages, keyed by slug.
// Rendered by components/products/FittingBuyerGuide.jsx. Engineering per ASME B16.9, B16.11,
// B16.49, MSS SP-75/79/83/95 and ASTM A733; company statements per content-plan/FACTS.md only.
// No prices, lead times, stock levels or contact details.

export const fittingBuyContent = {
  // ---------------- BUTT WELD ----------------
  'butt-weld-elbow-fittings': {
    h2: 'Ordering Butt Weld Elbows: What Fixes the Quote',
    notes: [
      'An elbow line on a quotation is defined by five things: angle (45°, 90° or 180°), radius (long or short), nominal size, wall schedule and material grade. Leave any one of them open and the quote has to assume it, so state all five on every line, for example "90° LR elbow, 8 inch, Sch 40, ASTM A234 WPB, seamless".',
      'Seamless or welded construction is the next decision. Seamless elbows are the usual choice in smaller sizes and for heavier walls; welded elbows (made from plate or welded pipe) are common in large diameters and in stainless steel, where A403 marks them as class W, WX or WU depending on the extent and method of weld examination. If your piping class requires a particular class, write it on the enquiry.',
      'Mixed orders are normal for a piping package: different angles, sizes and schedules on one purchase order. List every line with its own quantity, and say whether certificates should be issued per heat or per line, so that the paperwork matches your material receiving procedure.',
    ],
    faqs: [
      { q: 'Can I order long radius and short radius elbows on the same purchase order?', a: 'Yes. Give each radius its own line, because the centre-to-face dimension, the price and the marking differ. Short radius elbows are normally used only where the piping layout leaves no room for a long radius fitting.' },
      { q: 'Which certificate comes with a butt weld elbow?', a: 'An EN 10204 3.1 mill test certificate traceable to the heat number marked on the elbow. If your project needs an independent witness, ask for EN 10204 3.2 and name the inspection agency on the enquiry.' },
      { q: 'Do you supply elbows for export packages?', a: 'Yes. Orders are dispatched from Mumbai with a commercial invoice, packing list, certificate of origin, mill test certificates and bill of lading for the shipment.' },
    ],
  },
  '90-elbow': {
    h2: 'Buying 90° Elbows: Specification Checklist',
    notes: [
      'The 90° long radius elbow is the most-ordered butt weld fitting on most piping jobs, so small errors repeat across many lines. The two that cause the most rework are a schedule that does not match the pipe (a Sch 40 elbow on Sch 80 pipe leaves a step in the bore) and a short radius elbow supplied where the isometric drawing assumed long radius, which moves every downstream dimension by half a pipe diameter.',
      'For carbon steel process lines the common grade is ASTM A234 WPB; for low-temperature service A420 WPL6 with impact testing; for high-temperature steam and hydrocarbon lines A234 WP11, WP22 or WP91 to match the A335 pipe. Stainless 90° elbows are A403 WP304L or WP316L for most chemical and water duties.',
      'If the elbow is to be welded to pipe of a different wall thickness, ask for the ends to be bevelled to the thinner wall or tapered to match, as ASME B16.25 allows. Mention any pigging, lining or coating requirement, because they affect the radius and the end finish we quote.',
    ],
    faqs: [
      { q: 'What does a 90° elbow quotation need from me?', a: 'Nominal size, wall schedule or thickness, long or short radius, material grade, seamless or welded, quantity per size and the certificate type. Add NACE MR0175, impact testing or other supplementary requirements if your piping class calls for them.' },
      { q: 'Can a 90° elbow be supplied with a different bevel angle?', a: 'The standard weld bevel is 37.5° to ASME B16.25. Other end preparations, such as a compound bevel for heavy walls, can be machined to your drawing; state the detail on the enquiry.' },
      { q: 'Are 90° elbows marked individually?', a: 'Yes. Each elbow is marked with the manufacturer, grade, size, schedule and heat number so it can be matched to its mill test certificate at site.' },
    ],
  },
  '45-elbow': {
    h2: 'Ordering 45° Elbows for Your Piping Package',
    notes: [
      'A 45° elbow turns a line through half the angle of a 90° and has a much shorter centre-to-face dimension; for a 6 inch long radius 45° it is 95 mm (3¾ inch) against 229 mm for the 90°. Designers use 45° elbows for offsets, sloped drain lines and to reduce pressure drop compared with a sharper change of direction.',
      'When you order, confirm that the drawing really calls for a 45° fitting and not a 90° elbow cut down at site. A factory-made 45° elbow keeps the B16.9 dimensions and tolerances, carries its own heat number marking, and avoids an extra bevel that has to be cut and checked in the field.',
      'Grades follow the pipe: A234 WPB or A420 WPL6 for carbon steel lines, A403 WP304/316 and their L grades for stainless steel, A815 for duplex. Give the schedule of the mating pipe so the elbow wall matches it.',
    ],
    faqs: [
      { q: 'Can a 45° elbow be cut from a 90° elbow instead?', a: 'It can be done at site, but the cut end needs a new bevel and loses the marking of the original fitting. Ordering a factory 45° elbow keeps the dimensions, marking and certificate traceability intact.' },
      { q: 'Are 45° elbows available in stainless and duplex grades?', a: 'Yes. Stainless 45° elbows are made to ASTM A403 and duplex or super duplex to ASTM A815. State the grade and the wall schedule on your enquiry.' },
      { q: 'What should I check when 45° elbows arrive?', a: 'Check the marking against the mill test certificate (grade, size, schedule and heat number), the bevel condition and the centre-to-face dimension for the size you ordered.' },
    ],
  },
  '180-elbow': {
    h2: 'Buying 180° Return Bends: What to Specify',
    notes: [
      'A 180° return elbow turns the flow back on itself and is ordered mainly for heater coils, heat exchanger tube banks and serpentine heating or cooling loops. Its key dimension is centre-to-centre: for a long radius return it is twice the 90° centre-to-face dimension, so a 4 inch long radius return has 305 mm (12 inch) between the two pipe centrelines.',
      'Short radius returns pack the coil tighter but raise the pressure drop and the erosion rate on the outer wall. If the return will see high velocity, two-phase flow or abrasive solids, discuss the radius with your process engineer before you order and state the choice clearly on the enquiry.',
      'Heater and furnace returns are often in chrome-moly grades such as A234 WP11, WP22 or WP9, chosen to match the coil tubes; stainless returns are used in chemical and food plants. Give the design temperature if heat treatment or hardness checks are part of your specification.',
    ],
    faqs: [
      { q: 'Is a 180° return the same as a U-bend?', a: 'A 180° return elbow is a forged or formed fitting to ASME B16.9 with fixed dimensions. A U-bend is usually bent from a length of pipe or tube to a radius you specify. Tell us which one your drawing shows.' },
      { q: 'Which grades are used for heater coil returns?', a: 'Chrome-moly grades such as ASTM A234 WP11, WP22 and WP9 are common for fired heater coils, matched to the tube material. Stainless grades are used where the process fluid requires them.' },
      { q: 'Do 180° returns come in long and short radius?', a: 'Yes. Long radius returns have a centre-to-centre distance of three times the nominal size and short radius returns two times. State the radius on each line of the enquiry.' },
    ],
  },
  'butt-weld-bends-fittings': {
    h2: 'Ordering Pipe Bends: Radius, Wall and Tangents',
    notes: [
      'Unlike an elbow, a bend is ordered by its radius as a multiple of the pipe diameter (3D, 5D, 6D and so on), its angle and the length of straight tangent on each end. Induction and hot bends for pipelines are covered by ASME B16.49; for plant piping the bend is normally specified on the piping isometric or a bend data sheet.',
      'The outside of a bend thins as it is formed and the inside thickens. For that reason the order should state the minimum wall thickness required after bending, not just the schedule of the parent pipe. Ovality limits, hardness checks and any post-bend heat treatment should also be listed if your specification sets them.',
      'Bends are the usual choice for pigged lines, slurry lines and long-radius layouts where an elbow would cause too much pressure drop or wear. Send the pipe size, material, radius, angle, tangent lengths, quantity and test requirements, and we prepare a written, itemised quotation.',
    ],
    faqs: [
      { q: 'What is a tangent on a pipe bend?', a: 'A tangent is the straight length of pipe left on each side of the curved section. It gives room to weld the bend without heat affecting the curve and makes field fit-up easier. State the tangent length you need on each end.' },
      { q: 'Can I order bends with a minimum wall after bending?', a: 'Yes, and it is the recommended way to order. State the minimum wall thickness required on the outer radius after bending, and the bend is made from pipe with enough starting wall to meet it.' },
      { q: 'Which standard covers induction bends for pipelines?', a: 'ASME B16.49 covers factory-made wrought steel butt welding induction bends for transportation and distribution systems. Plant bends are often ordered to the project piping specification instead.' },
    ],
  },
  'butt-weld-tee-fittings': {
    h2: 'Ordering Butt Weld Tees: Run, Branch and Grade',
    notes: [
      'A butt weld tee is ordered by run size and branch size, for example 8 × 8 inch for an equal tee or 8 × 4 inch for a reducing tee, plus the wall schedule of each end and the material grade. If the run and branch pipes have different schedules, write both; the tee can be made with different end walls so each weld matches its pipe.',
      'Tees are made by hot forming from pipe or plate, which thins and thickens parts of the body. ASME B16.9 makes the manufacturer responsible for the tee meeting the pressure rating of the matching pipe, so the body of a tee is often heavier than the nominal schedule. This is normal and should not be rejected at receiving inspection.',
      'Grades are the same as for elbows: A234 WPB and A420 WPL6 for carbon steel, A234 WP11/WP22/WP91 for alloy service, A403 for stainless and A815 for duplex. If the line is pigged, ask for a barred tee and state the bar arrangement.',
    ],
    faqs: [
      { q: 'How should I write a tee size on the purchase order?', a: 'Write the run size first and the branch size second, for example 10 × 10 inch for an equal tee or 10 × 6 inch for a reducing tee, followed by the schedule of each end and the grade.' },
      { q: 'Can tees be supplied seamless?', a: 'Seamless tees are made by hot forming seamless pipe and are common in carbon and alloy steel. Welded tees are used in larger sizes and in many stainless grades. State seamless or welded if your piping class specifies it.' },
      { q: 'Why is the body of my tee thicker than the pipe schedule?', a: 'ASME B16.9 requires the tee to be at least as strong as the matching pipe, and forming a branch needs extra metal around the opening. The ends are machined to the ordered schedule; the extra thickness is in the body.' },
    ],
  },
  'straight-tee': {
    h2: 'Buying Equal Tees: What Your Enquiry Needs',
    notes: [
      'An equal (straight) tee has all three ends the same size, so its order line is short: size, schedule, grade, construction and quantity. Because equal tees appear on almost every piping job, the main risk is a mismatch between the tee schedule and the pipe schedule; check the line class before you send the enquiry.',
      'Equal tees also serve as the body for a reduced branch when they are combined with a reducer, but a reducing tee is shorter and has one weld fewer. Ask for both options on the quotation if you are not sure which the layout allows.',
      'For low-temperature lines, A420 WPL6 equal tees are supplied with Charpy impact results on the mill test certificate. For sour service, state NACE MR0175 / ISO 15156 so the hardness limits are part of the order.',
    ],
    faqs: [
      { q: 'What information do you need to quote an equal tee?', a: 'Size, wall schedule, material grade, seamless or welded, quantity and certificate type. Add any supplementary requirements such as impact testing or NACE hardness limits.' },
      { q: 'Are equal tees supplied with heat number marking?', a: 'Yes. Each tee is marked with the grade, size, schedule and heat number, which match the EN 10204 3.1 mill test certificate supplied with the order.' },
      { q: 'Can equal tees be bevelled for a heavier pipe wall?', a: 'Yes. If the pipe wall is heavier than the tee schedule, tell us; the tee must then be ordered in the heavier wall, because the bevel cannot add strength the body does not have.' },
    ],
  },
  'reducing-tee': {
    h2: 'Ordering Reducing Tees: Size Combinations and Walls',
    notes: [
      'A reducing tee has a branch smaller than the run. ASME B16.9 lists the standard run and branch combinations for each size; a branch outside those tables, such as a very small outlet on a large run, is normally made with a weldolet or other branch fitting instead. If your enquiry shows an unusual combination, we confirm whether a tee or an outlet fitting is the better route before quoting.',
      'State the schedule of the run and of the branch separately. Many piping classes use a heavier wall on the small branch than on the large run, and a tee made to a single schedule would leave one of the welds mismatched.',
      'Reducing tees in A234 WPB, A420 WPL6, A403 stainless and A815 duplex are supplied with EN 10204 3.1 certificates. For projects with third-party inspection, give the agency name and any hold points with your enquiry.',
    ],
    faqs: [
      { q: 'What is the smallest branch I can get on a reducing tee?', a: 'It depends on the run size; ASME B16.9 sets the standard combinations. Very small branches on large runs are usually better served by an integrally reinforced outlet fitting. Send the sizes and we confirm the option.' },
      { q: 'Should I order a reducing tee or an equal tee with a reducer?', a: 'A reducing tee is shorter and saves one butt weld and its inspection. An equal tee plus reducer may suit where the layout needs extra length or where an equal tee is already on the order.' },
      { q: 'How are reducing tees marked?', a: 'They are marked with both sizes (run × branch), the schedules, the grade and the heat number, so they can be checked against the mill test certificate on arrival.' },
    ],
  },
  'butt-weld-reducers-fittings': {
    h2: 'Ordering Butt Weld Reducers: Type, Sizes and Schedules',
    notes: [
      'A reducer order line needs four things beyond the grade: concentric or eccentric, large-end size, small-end size and the schedule of each end. The schedules matter because a reducer often joins a large pipe in one wall to a smaller pipe in a heavier wall, and each end is bevelled to its own pipe.',
      'Choose concentric reducers for vertical lines and general service, and eccentric reducers for horizontal lines where gas or liquid must not collect at the change of size, such as pump suction (flat side up) or pipe racks that need a level bottom of pipe (flat side down). The orientation is set at installation, but your drawing should show it.',
      'ASME B16.9 gives the standard length for each size combination; a 6 × 4 inch reducer, for example, is 140 mm long. Where the size step is too large for one reducer, two reducers welded in series are used, and we can quote the combination.',
    ],
    faqs: [
      { q: 'Can a reducer have different schedules on each end?', a: 'Yes. Write both schedules, for example "6 × 4 inch concentric reducer, Sch 40 × Sch 80". Each end is bevelled to its own wall thickness.' },
      { q: 'What if my size reduction is larger than a standard reducer allows?', a: 'Two reducers welded in series are the usual answer, for example 12 × 8 and 8 × 4 inch. Send the start and end sizes and we quote the combination.' },
      { q: 'Which grades are reducers supplied in?', a: 'ASTM A234 WPB and WP11/WP22/WP91, A420 WPL6, A403 stainless grades and A815 duplex, matched to the pipe you are welding them to.' },
    ],
  },
  'concentric-reducer': {
    h2: 'Buying Concentric Reducers: Quote Checklist',
    notes: [
      'A concentric reducer keeps both ends on the same centreline, so it suits vertical pipe runs, the discharge side of pumps and general size changes where trapped gas or liquid is not a concern. List the large and small sizes, both schedules, the grade and the quantity of each combination.',
      'Concentric reducers are also used next to control valves and flow meters to bring the line down to the instrument size. In that case send the valve or meter size with the line size, so the reducer pair on each side of the instrument is quoted together.',
    ],
    faqs: [
      { q: 'Can concentric reducers be supplied seamless?', a: 'Yes, in the sizes where seamless forming is practical. Larger sizes are often made welded from plate. State seamless or welded if your piping class specifies it.' },
      { q: 'Are concentric reducers used on pump suction?', a: 'Not normally on horizontal suction lines, where an eccentric reducer with the flat side up stops air pockets forming. Concentric reducers are common on pump discharge and on vertical lines.' },
    ],
  },
  'oval-caps': {
    h2: 'Ordering Butt Weld Caps: Size, Wall and Grade',
    notes: [
      'A butt weld cap closes the end of a pipe permanently with a domed head that welds directly to the pipe. It is ordered by nominal size, wall schedule and grade. Where the line may need to be opened later, for pigging, cleaning or future extension, a blind flange or closure is the better choice and should be quoted instead.',
      'ASME B16.9 sets the cap length for each size, with a longer length for heavy walls. If your drawing shows a dimension from the end of the pipe to the outside of the cap, check it against the wall you are ordering, because a change of schedule can change the cap length.',
      'Caps are supplied in A234 WPB, A420 WPL6, A234 alloy grades, A403 stainless and A815 duplex, with EN 10204 3.1 certificates traceable to the heat number. Dead-leg and drain caps on sour lines should be ordered with NACE MR0175 hardness requirements.',
    ],
    faqs: [
      { q: 'What do I need to send to get a quote for butt weld caps?', a: 'Nominal size, wall schedule or thickness, material grade, quantity and the certificate type. Add supplementary requirements such as impact testing or NACE hardness limits if they apply.' },
      { q: 'Can caps be supplied with a drain or vent connection?', a: 'A cap can be drilled and fitted with a small-bore connection to your drawing. Send the drawing with the enquiry so the machining is quoted.' },
      { q: 'Are caps tested before dispatch?', a: 'Caps are checked for dimensions and marking against the mill test certificate. PMI on stainless and alloy grades and other tests can be added when your specification requires them.' },
    ],
  },

  // ---------------- SOCKET WELD ----------------
  'socket-weld-elbow-fittings': {
    h2: 'Ordering Socket Weld Elbows: Class, Size and Grade',
    notes: [
      'A socket weld elbow line needs the angle (90° or 45°), nominal pipe size, pressure class and material grade. The class is chosen from the pipe wall: Class 3000 for Schedule 80 pipe, Class 6000 for Schedule 160 and Class 9000 for double extra strong (XXS). Ordering by class rather than by schedule avoids the most common mismatch on small-bore lines.',
      'Common grades are ASTM A105 for carbon steel, A350 LF2 for low-temperature service, A182 F304L and F316L for stainless, A182 F11 and F22 for high-temperature alloy lines and A182 F51 for duplex. Name the grade exactly, including the L for low carbon stainless, because F316 and F316L are certified differently.',
      'Socket weld elbows are often bought with matching tees, couplings and caps for a skid or instrument package. List every fitting on one enquiry with its quantity, and the quotation comes back itemised line by line.',
    ],
    faqs: [
      { q: 'What do you need to quote socket weld elbows?', a: 'Angle, nominal size, pressure class, material grade, quantity and certificate type, plus NACE MR0175 or impact testing if your piping class requires them.' },
      { q: 'Are socket weld elbows available in Class 9000?', a: 'Yes, in the smaller sizes that ASME B16.11 covers for Class 9000, for use with XXS pipe. State the size and confirm the pipe wall on the enquiry.' },
      { q: 'Do socket weld elbows come with mill test certificates?', a: 'Yes. Every lot is supplied with an EN 10204 3.1 certificate traceable to the heat number marked on the fittings; EN 10204 3.2 can be arranged with your inspection agency.' },
    ],
  },
  'socket-weld-tee-fittings': {
    h2: 'Buying Socket Weld Tees: What to Put on the Enquiry',
    notes: [
      'An equal socket weld tee is ordered by nominal size, class and grade. A reducing tee needs the size of each socket in the order run × run × branch, for example 1 × 1 × ½ inch. Reducing tees are made to order; for a quick alternative, an equal tee with a reducer insert in the branch socket is often accepted, and we can quote both.',
      'Small-bore branches on vents, drains and instrument tappings are where socket weld tees are used most. If the tee will see vibration or cyclic service, mention it, because some piping codes and company specifications restrict socket welds in that duty and a butt weld or forged outlet may be required instead.',
      'Grades include A105, A350 LF2, A182 F304L/F316L, F11, F22 and F51. Each tee is marked with the class, size, grade and heat number to match its certificate.',
    ],
    faqs: [
      { q: 'Can I order reducing socket weld tees?', a: 'Yes. State the size of each socket in the order run, run, branch. Reducing tees are made to order; an equal tee with a reducer insert is an alternative where your specification allows it.' },
      { q: 'Which class of tee matches Schedule 160 pipe?', a: 'Class 6000. Class 3000 matches Schedule 80 and Class 9000 matches XXS pipe.' },
      { q: 'Can socket weld tees be supplied for sour service?', a: 'Yes. State NACE MR0175 / ISO 15156 on the enquiry so the hardness limits and certificate statements are part of the order.' },
      { q: 'How are socket weld tee dimensions checked?', a: 'The centre-to-bottom-of-socket dimension, socket bore, socket depth and wall thickness are checked against ASME B16.11 for the size and class ordered. These checks, together with the marking and the mill test certificate, are what receiving inspection normally verifies when socket weld tees arrive.' },
    ],
  },
  'socket-weld-cross-fittings': {
    h2: 'Ordering Socket Weld Crosses: Sizes and Alternatives',
    notes: [
      'A socket weld cross order should list the size of all four sockets, the pressure class and the grade. Equal crosses are the standard item; a cross with one or two smaller outlets is machined to order, so send a sketch with each outlet size marked to avoid misreading the order of sizes.',
      'Because a cross puts four welds close together, many piping specifications allow it only in compact instrument and manifold assemblies, and prefer two tees elsewhere. Check your line class before ordering, and if crosses are not permitted, we can quote the equivalent tee arrangement on the same enquiry.',
      'Crosses are supplied in A105, A350 LF2 and A182 stainless, alloy and duplex grades, with EN 10204 3.1 certificates. For fire protection and sprinkler systems, state the applicable code so the material and marking meet it.',
    ],
    faqs: [
      { q: 'How should I specify a reducing cross?', a: 'Give the size of each of the four outlets and mark them on a simple sketch, because the order of sizes in a reducing cross is easy to misread. Reducing crosses are machined to order.' },
      { q: 'Which classes are socket weld crosses made in?', a: 'Class 3000, 6000 and 9000 under ASME B16.11, matched to Schedule 80, Schedule 160 and XXS pipe respectively.' },
      { q: 'Can you quote tees as an alternative to a cross?', a: 'Yes. Mention it on the enquiry and the quotation will show both the cross and the two-tee arrangement, so you can choose according to your piping specification.' },
      { q: 'Are socket weld crosses marked like other fittings?', a: 'Yes. Each cross is marked with the manufacturer, pressure class, size, material grade and heat number. The marking is matched to the EN 10204 3.1 mill test certificate, so receiving inspection can check every cross against the paperwork before it is issued to the fabrication shop.' },
    ],
  },
  'socket-weld-lateral-tee-fittings': {
    h2: 'Ordering Socket Weld Laterals: Angle and Drawing',
    notes: [
      'A lateral tee brings the branch in at 45° instead of 90°. ASME B16.11 does not give dimensions for socket weld laterals, so they are made to the manufacturer’s standard or to your drawing. For that reason the enquiry should include the branch angle, the size of each socket, the class and, where the layout is tight, the centre-to-end dimensions you need.',
      'Laterals are ordered for drain headers, slurry and solids lines and blending points, where a 45° entry reduces turbulence and wear compared with a 90° branch. If the line carries abrasive solids, mention it so the wall and the inside finish at the branch can be considered.',
      'Supply is in A105, A350 LF2 and A182 stainless and alloy grades with EN 10204 3.1 certificates. Because laterals are made to order, approve the dimensional drawing before manufacture if your project requires it.',
    ],
    faqs: [
      { q: 'Do I need a drawing to order a socket weld lateral?', a: 'It is strongly recommended. ASME B16.11 does not set lateral dimensions, so a drawing or at least the branch angle, socket sizes and required centre-to-end dimensions avoids a mismatch.' },
      { q: 'Can laterals be made at angles other than 45°?', a: 'Other branch angles can be made to drawing. State the angle and the size of each socket on the enquiry.' },
      { q: 'Are laterals supplied with a dimensional report?', a: 'A dimensional check against the approved drawing can be included with the documents; ask for it on the enquiry along with the mill test certificate.' },
      { q: 'What should a lateral tee enquiry say about the branch?', a: 'Give the branch angle, the branch socket size and which end of the run the branch points towards, because a 45° lateral is directional. A simple sketch showing the flow direction avoids a lateral being installed the wrong way round.' },
    ],
  },
  'socket-weld-coupling-fittings': {
    h2: 'Ordering Socket Weld Couplings: Full, Half and Reducing',
    notes: [
      'Couplings are ordered in three forms. A full coupling joins two pipes of the same size end to end; a reducing coupling joins two sizes; a half coupling has one socket and is welded onto a larger pipe or vessel as a small branch connection. Write the type on each line, together with size, class and grade.',
      'When a half coupling is used as a branch, the branch connection must meet the reinforcement rules of your piping code. Many specifications now prefer an integrally reinforced outlet fitting for this duty; if your line class allows either, we can quote both.',
      'Couplings are among the highest-volume socket weld items on a project, so quantity per size and grade drives the quotation. Group them by grade on the enquiry, and state the certificate type once for the whole list.',
    ],
    faqs: [
      { q: 'What is the difference between a full, half and reducing coupling?', a: 'A full coupling joins two pipes of the same size, a reducing coupling joins two sizes, and a half coupling has a single socket for welding to a larger pipe or vessel as a branch.' },
      { q: 'Which grades are couplings supplied in?', a: 'ASTM A105, A350 LF2 and A182 F304L, F316L, F11, F22 and F51, among others. State the exact grade on the enquiry.' },
      { q: 'Can couplings be supplied in Class 9000?', a: 'Yes, in the sizes ASME B16.11 covers for Class 9000, for use with XXS pipe.' },
      { q: 'Can a half coupling be ordered with a contoured end?', a: 'Yes. A half coupling welded to a larger pipe can be supplied with the welding end contoured to the outside diameter of that run pipe, so it sits closely before welding. State the run pipe size with the coupling size and class on the enquiry.' },
    ],
  },
  'socket-weld-union-fittings': {
    h2: 'Ordering Socket Weld Unions: Class, Seat and Grade',
    notes: [
      'A union has three parts (two ends and a nut) and lets a small-bore line be opened without cutting. Forged socket weld and threaded unions are covered by MSS SP-83 in Class 3000 and Class 6000. State the class, the size, the end type (socket weld on both ends, threaded on both, or one of each) and the grade.',
      'The standard seat is metal to metal. If the service needs a different seal, write it on the enquiry. Unions are used next to equipment that has to be removed for maintenance, such as small pumps, strainers, instruments and sample coolers.',
      'Unions are quoted in A105, A350 LF2 and A182 stainless grades. Because the nut is a separate forging, ask for certificates covering every component if your inspection plan requires it.',
    ],
    faqs: [
      { q: 'Can I order a union with one socket weld end and one threaded end?', a: 'Yes. State the end type for each side on the enquiry, along with size, class and grade.' },
      { q: 'Which pressure classes are forged unions made in?', a: 'MSS SP-83 covers Class 3000 and Class 6000 unions. Choose the class to match the pipe wall and design pressure of the line.' },
      { q: 'Are union nuts certified as well as the ends?', a: 'They can be. If your inspection plan requires certificates for each part of the union, state it on the enquiry.' },
      { q: 'Why use a union instead of a pair of small flanges?', a: 'A union is shorter, lighter and needs no gasket or bolts, so it suits tight small-bore layouts next to instruments, strainers and small pumps. Flanges are preferred where the joint is opened often, where the line class rules out unions, or where a spectacle blind or spacer has to be fitted at the break.' },
    ],
  },
  'socket-weld-cap-fittings': {
    h2: 'Ordering Socket Weld Caps: What the Quote Needs',
    notes: [
      'A socket weld cap is a permanent closure for the end of a small-bore pipe. The order line needs nominal size, class (3000, 6000 or 9000) and grade. If the end may need to be opened, order a threaded cap or a plug in a threaded fitting instead, and say so on the enquiry so both options can be quoted.',
      'Caps are mostly used on vent and drain stubs, dead legs and future tie-in points. On sour or low-temperature lines, the cap must carry the same supplementary requirements as the rest of the line, such as NACE MR0175 hardness limits or Charpy impact testing for A350 LF2.',
      'Every cap is marked with the class, size, grade and heat number. Lots are supplied with EN 10204 3.1 certificates; PMI on stainless and alloy grades can be added to the order.',
    ],
    faqs: [
      { q: 'Should I order a socket weld cap or a threaded cap?', a: 'A socket weld cap is permanent and leak-tight once welded. A threaded cap can be removed but relies on the thread seal. Choose according to whether the end will ever be opened and what your piping class allows.' },
      { q: 'Are socket weld caps supplied in low-temperature grades?', a: 'Yes. ASTM A350 LF2 caps are supplied with Charpy impact results on the mill test certificate.' },
      { q: 'Can I order caps together with the rest of my socket weld fittings?', a: 'Yes. List every item and quantity on one enquiry; the quotation is itemised line by line.' },
      { q: 'Can socket weld caps be supplied with a drilled and tapped hole?', a: 'Yes, a cap can be drilled and tapped to your drawing for a small vent, drain or instrument connection. Send the drawing or the thread size and position with the enquiry, so the machining is shown as a separate line on the quotation and the dimensional check is part of the order.' },
    ],
  },
  'socket-weld-reducer-insert-fittings': {
    h2: 'Ordering Reducer Inserts: Sizes and Types',
    notes: [
      'A reducer insert fits into the socket of a standard fitting and provides a smaller socket for the reduced pipe. Inserts are covered by MSS SP-79. The order line needs the socket size of the fitting it goes into, the size of the reduced pipe, the class and the grade, for example "insert 1 inch × ½ inch, Class 3000, A105".',
      'MSS SP-79 shows more than one insert type, depending on how large the reduction is. If you are not sure which type your reduction needs, give the two sizes and the class and we confirm the type on the quotation.',
      'Inserts let a project hold fewer special reducing fittings, because one equal tee or coupling can be reduced on site. Order them in the same grade and class as the fitting they go into, with EN 10204 3.1 certificates.',
    ],
    faqs: [
      { q: 'How do I specify a reducer insert?', a: 'Give the socket size of the fitting it fits into, the reduced pipe size, the class and the grade. The insert type is chosen from MSS SP-79 for that size combination.' },
      { q: 'Can reducer inserts be used in tees and couplings?', a: 'Yes. They fit the socket of any standard socket weld fitting of the matching size and class.' },
      { q: 'Are reducer inserts made in stainless steel?', a: 'Yes, in ASTM A182 F304L, F316L and other grades, as well as A105 and A350 LF2 carbon steel.' },
      { q: 'Is a reducer insert welded in two places?', a: 'Yes. The insert is fillet welded into the socket of the larger fitting, and the reduced pipe is then fillet welded into the socket of the insert. Each weld needs the usual expansion gap at the bottom of its socket, so both welds should be shown on the weld map and inspected to your piping specification.' },
    ],
  },
  'socket-weld-nipple-fittings': {
    h2: 'Ordering Pipe Nipples: Ends, Length and Schedule',
    notes: [
      'A pipe nipple is a short length of pipe with prepared ends. ASTM A733 covers welded and seamless carbon and austenitic stainless steel nipples. The order needs the nominal size, schedule, length, material and end preparation: plain both ends (PBE), threaded both ends (TBE), plain one end and threaded one end (POE/TOE), or bevelled.',
      'Swage nipples, which change size along their length, are covered by MSS SP-95. They are ordered by large-end and small-end size, schedule of each end, end preparation of each end and whether the swage is concentric or eccentric.',
      'Nipples are used for vents, drains, instrument tappings and short connections between valves and fittings. State the length exactly, because a nipple is often cut to suit a particular valve or instrument.',
    ],
    faqs: [
      { q: 'What do PBE, TBE and TOE mean?', a: 'PBE is plain both ends, TBE is threaded both ends and TOE is threaded one end. State the end preparation of each end on your enquiry.' },
      { q: 'Which standard covers swage nipples?', a: 'MSS SP-95 covers swage nipples and bull plugs. ASTM A733 covers standard welded and seamless pipe nipples.' },
      { q: 'Can nipples be supplied in a specific length?', a: 'Yes. Give the overall length and the end preparation of each end, along with size, schedule and material.' },
      { q: 'Which schedule should a pipe nipple be?', a: 'The nipple wall should match the pipe or the fitting it connects to. Threaded nipples are often ordered one schedule heavier than the line pipe, for example Schedule 160 or XXS, because cutting the thread removes part of the wall. Check your piping class, which usually states the nipple schedule.' },
    ],
  },
  'socket-weld-bushing-fittings': {
    h2: 'Ordering Bushings: Head Type, Sizes and Thread',
    notes: [
      'Bushings are threaded fittings, covered by ASME B16.11, that reduce a female thread to a smaller female thread. The order needs the outside thread size, the inside thread size, the head type (hex or flush) and the grade, for example "hex bushing ¾ × ½ inch NPT, A105".',
      'A hex bushing is tightened with a spanner and suits most service; a flush bushing has no head and sits level with the fitting face where there is no room for a hex. State the thread type, normally NPT to ASME B1.20.1, and whether a seal weld is planned after assembly.',
      'Because a bushing adds one more threaded joint, some piping specifications restrict it in hazardous or cyclic service. Check the line class, and if bushings are not allowed, a reducer insert or a reducing fitting can be quoted instead.',
    ],
    faqs: [
      { q: 'What do you need to quote a bushing?', a: 'Outside and inside thread sizes, head type (hex or flush), thread standard, material grade and quantity, plus the certificate type.' },
      { q: 'Which thread is standard on bushings?', a: 'NPT taper thread to ASME B1.20.1 is standard. Other threads, such as BSPT, can be quoted on request; state the thread on the enquiry.' },
      { q: 'Are bushings supplied in stainless and alloy grades?', a: 'Yes. Grades include ASTM A105, A350 LF2 and A182 stainless and alloy grades.' },
      { q: 'Can a bushing be used to reduce a socket weld fitting?', a: 'No. Bushings are threaded and reduce a female threaded port. To reduce a socket weld fitting, use a socket weld reducer insert to MSS SP-79, or order a reducing fitting. State which joint type your line uses so the right item is quoted.' },
    ],
  },
  'socket-weld-plug-fittings': {
    h2: 'Ordering Plugs: Head Type, Thread and Grade',
    notes: [
      'Threaded plugs close a female threaded connection and are covered by ASME B16.11 in hex head, square head and round head forms. The order line needs the thread size, head type, thread standard and grade. Bull plugs, which close the end of a pipe and can be drilled for a connection, are covered by MSS SP-95.',
      'Plugs are installed in vents, drains, test points and unused ports on valves and equipment. If the plug will be seal welded after installation, order it in a weldable grade that matches the fitting it goes into, and state the seal weld requirement.',
      'Plugs are quoted in A105, A350 LF2 and A182 stainless and alloy grades. Where hundreds of plugs of one size are needed for a valve or skid package, give the total quantity per size so it is quoted as one line.',
    ],
    faqs: [
      { q: 'Which plug head type should I order?', a: 'Hex head plugs are the most common because they are easy to tighten. Square head plugs are used where a spanner fits better, and round head plugs are used where the plug will be seal welded or should not be removed easily.' },
      { q: 'What is the difference between a threaded plug and a bull plug?', a: 'A threaded plug closes a female threaded port. A bull plug closes the end of a pipe and is covered by MSS SP-95; it can be drilled and tapped for a connection.' },
      { q: 'Can plugs be supplied with a different thread?', a: 'NPT is standard. Other threads can be quoted on request; state the thread type and size on your enquiry.' },
    ],
  },
};
