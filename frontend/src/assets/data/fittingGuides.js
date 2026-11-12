// Per-product buyer content for butt weld and socket weld fitting pages.
// Keep every statement technically accurate (ASME/MSS/ASTM) and free of contact details.

export const BW_FAMILY = [
  { slug: 'butt-weld-elbow-fittings', title: 'Butt Weld Elbows' },
  { slug: '90-elbow', title: '90° Elbows' },
  { slug: '45-elbow', title: '45° Elbows' },
  { slug: '180-elbow', title: '180° Return Elbows' },
  { slug: 'butt-weld-bends-fittings', title: 'Pipe Bends (3D / 5D)' },
  { slug: 'butt-weld-tee-fittings', title: 'Butt Weld Tees' },
  { slug: 'straight-tee', title: 'Equal (Straight) Tees' },
  { slug: 'reducing-tee', title: 'Reducing Tees' },
  { slug: 'butt-weld-reducers-fittings', title: 'Butt Weld Reducers' },
  { slug: 'concentric-reducer', title: 'Concentric Reducers' },
  { slug: 'eccentric-reducer', title: 'Eccentric Reducers' },
  { slug: 'oval-caps', title: 'Butt Weld Caps' },
];

export const SW_FAMILY = [
  { slug: 'socket-weld-elbow-fittings', title: 'Socket Weld Elbows' },
  { slug: 'socket-weld-tee-fittings', title: 'Socket Weld Tees' },
  { slug: 'socket-weld-cross-fittings', title: 'Socket Weld Crosses' },
  { slug: 'socket-weld-lateral-tee-fittings', title: 'Socket Weld Lateral Tees' },
  { slug: 'socket-weld-coupling-fittings', title: 'Socket Weld Couplings' },
  { slug: 'socket-weld-union-fittings', title: 'Socket Weld Unions' },
  { slug: 'socket-weld-cap-fittings', title: 'Socket Weld Caps' },
  { slug: 'socket-weld-reducer-insert-fittings', title: 'Reducer Inserts' },
  { slug: 'socket-weld-nipple-fittings', title: 'Pipe Nipples' },
  { slug: 'socket-weld-bushing-fittings', title: 'Bushings' },
  { slug: 'socket-weld-plug-fittings', title: 'Plugs' },
];

export const fittingGuides = {
  // ---------------- BUTT WELD ----------------
  'butt-weld-elbow-fittings': {
    family: 'bw', name: 'Butt Weld Elbow',
    intro: [
      'A butt weld elbow changes the direction of a welded pipeline. REMAX FORGE & FITTINGS manufactures seamless and welded elbows to ASME B16.9 in 45°, 90° and 180° configurations, in long radius (centre-to-end equal to 1.5 times the nominal pipe size) and short radius (1.0 times NPS). The ends are bevelled for full-penetration welding, so the elbow becomes part of the pipe wall with no gasket or thread to leak.',
      'Elbows are supplied in carbon steel (ASTM A234 WPB), low-temperature carbon steel (A420 WPL6), chrome-moly alloys (A234 WP11, WP22, WP91), stainless steel (A403 WP304/316 and L grades) and duplex/super duplex (A815). Wall thickness is matched to your pipe schedule, from Sch 5S to XXS, so the bore stays continuous across the weld.',
    ],
    uses: ['Direction changes in process and utility piping', 'Pump, compressor and vessel nozzle hook-ups', 'Pipe rack routing in refineries and petrochemical units', 'Steam, condensate and cooling water lines'],
    rfq: ['Angle (45°, 90° or 180°) and radius (LR or SR)', 'Seamless or welded construction'],
    faqs: [
      { q: 'When should I choose a short radius elbow?', a: 'Short radius elbows save space where a long radius elbow will not fit, but they cause a higher pressure drop and more turbulence. Most piping specifications default to long radius and allow short radius only where layout demands it.' },
      { q: 'Can elbows be supplied with a different wall thickness on each end?', a: 'Yes. Elbows can be machined to suit mismatched schedules or bored to a specified inside diameter. State both wall thicknesses in your enquiry.' },
    ],
  },
  '90-elbow': {
    family: 'bw', name: '90° Elbow',
    intro: [
      'The 90° elbow is the most used butt weld fitting in any piping system. It turns the flow through a right angle and is made to ASME B16.9 in long radius, where the centre-to-face dimension is 1.5 times the nominal pipe size, and short radius, where it equals the nominal pipe size. REMAX FORGE & FITTINGS produces 90° elbows by hot forming seamless pipe or by pressing and welding plate for the larger diameters.',
      'Every elbow is checked for centre-to-face dimension, wall thickness at the intrados and extrados, bevel angle and ovality before marking. Carbon steel, alloy steel, stainless steel, duplex and nickel alloy grades are available with the matching ASTM fitting specification.',
    ],
    uses: ['Right-angle turns in pipe racks and process lines', 'Riser to header connections', 'Pump suction and discharge piping', 'Fire water, steam and cooling water networks'],
    rfq: ['Long radius or short radius', 'Seamless (up to the sizes your spec requires) or welded'],
    faqs: [
      { q: 'What is the centre-to-face dimension of a 6 inch long radius 90° elbow?', a: 'For a long radius 90° elbow the centre-to-face dimension is 1.5 times NPS, so a 6 inch LR elbow measures 9 inches (229 mm) from the centre line to each face, per ASME B16.9.' },
      { q: 'Is a 3D elbow the same as a 90° long radius elbow?', a: 'No. A long radius elbow has a 1.5D radius. A 3D or 5D fitting is a pipe bend with a larger radius, used where lower pressure drop or pigging is needed.' },
    ],
  },
  '45-elbow': {
    family: 'bw', name: '45° Elbow',
    intro: [
      'A 45° elbow turns a pipeline through half a right angle. It gives a gentler change of direction than a 90° elbow, with lower pressure drop and less erosion, which is why it is used for offsets and for lines carrying slurries or solids. REMAX FORGE & FITTINGS manufactures 45° elbows to ASME B16.9 on the same 1.5D long radius used for 90° elbows.',
      'Two 45° elbows welded together form a compact offset that moves a line sideways around an obstacle. The elbows are supplied with bevelled ends to ASME B16.25, in seamless or welded construction, and in carbon, alloy, stainless, duplex and nickel alloy grades.',
    ],
    uses: ['Offsets around steelwork and equipment', 'Slurry, ash and solids handling lines', 'Lateral branch connections combined with a tee', 'Drain and vent routing'],
    rfq: ['Nominal size and wall schedule for each end', 'Seamless or welded construction'],
    faqs: [
      { q: 'Why choose two 45° elbows instead of one 90°?', a: 'Two 45° elbows let you shift a line sideways while it continues in the same direction, and the gentler turns lower pressure drop and wear compared with a sharp change.' },
      { q: 'Are short radius 45° elbows available?', a: 'ASME B16.9 dimensions 45° elbows on a long radius. Other radii can be made to a drawing, or a pipe bend can be used for larger radii.' },
    ],
  },
  '180-elbow': {
    family: 'bw', name: '180° Return Elbow',
    intro: [
      'A 180° elbow, also called a return bend, reverses the direction of flow so that two parallel pipes can be connected. ASME B16.9 dimensions it in long radius, with a centre-to-centre distance of 3 times the nominal pipe size, and short radius, with a centre-to-centre distance of 2 times NPS. REMAX FORGE & FITTINGS supplies both in seamless and welded construction.',
      'Return bends are the standard fitting for heater coils, heat exchanger tube bundles and serpentine cooling circuits, where many parallel runs must be joined in a small space. Dimensional checks cover centre-to-centre, back-to-face and wall thickness so that coils line up during fabrication.',
    ],
    uses: ['Fired heater and furnace coils', 'Heat exchanger and condenser circuits', 'Cooling and heating coils', 'Space-limited loops and test circuits'],
    rfq: ['Long radius (3 × NPS) or short radius (2 × NPS) centre-to-centre', 'Required wall thickness at the bend, including corrosion allowance'],
    faqs: [
      { q: 'What is the centre-to-centre dimension of a 4 inch long radius return?', a: 'For a long radius 180° return the centre-to-centre is 3 times NPS, so a 4 inch LR return is 12 inches (305 mm) between pipe centres.' },
      { q: 'Can a 180° elbow be made from two 90° elbows?', a: 'It can be fabricated that way, but a one-piece return bend avoids an extra weld and gives a consistent centre-to-centre, which matters in coil fabrication.' },
    ],
  },
  'butt-weld-bends-fittings': {
    family: 'bw', name: 'Butt Weld Pipe Bend',
    intro: [
      'A pipe bend is a section of pipe bent to a larger radius than a standard elbow, usually 3D, 5D or a custom radius, where D is the pipe outside diameter. REMAX FORGE & FITTINGS supplies hot induction bends and cold bends, with tangent lengths at each end so the bend can be welded directly into the line. Induction bends for transportation and distribution pipelines are made to ASME B16.49.',
      'Bending thins the wall on the outside of the bend and thickens it on the inside. We therefore select the mother pipe so that the minimum wall after bending meets your design, and check ovality, wall thickness and bend angle on every piece. U bends and multi-plane bends can be supplied to drawing.',
    ],
    uses: ['Oil and gas pipelines that must be pigged (3D and larger)', 'Low pressure-drop routing in slurry and gas lines', 'U bends for heat exchangers and coils', 'Long-radius changes of direction in plant piping'],
    rfq: ['Bend radius (3D, 5D or custom) and angle', 'Tangent length required at each end', 'Mother pipe specification, or the minimum wall required after bending'],
    faqs: [
      { q: 'What is the difference between a bend and an elbow?', a: 'An elbow is a standard ASME B16.9 fitting with a 1.0D or 1.5D radius and no tangents. A bend has a larger radius, is made from pipe and usually has straight tangents at each end.' },
      { q: 'What bend radius is needed for pigging?', a: 'Pipelines that are pigged generally call for a bend radius of 3D or more. Check the pig vendor and pipeline specification for the exact minimum.' },
    ],
  },
  'butt-weld-tee-fittings': {
    family: 'bw', name: 'Butt Weld Tee',
    intro: [
      'A butt weld tee splits or combines flow by providing a 90° branch from the main run. REMAX FORGE & FITTINGS makes equal tees, where the branch is the same size as the run, and reducing tees, where the branch is smaller, to ASME B16.9. High-yield tees for pipelines are made to MSS SP-75 in WPHY grades.',
      'Tees are hot extruded from seamless pipe or fabricated from plate for the larger sizes, then checked for centre-to-end dimensions on run and branch, wall thickness at the crotch and bevel geometry. They are supplied in carbon, low-temperature, alloy, stainless, duplex and nickel alloy grades.',
    ],
    uses: ['Branch connections on headers and manifolds', 'Distribution of steam, water and gas', 'Instrument and sampling take-offs on larger lines', 'Pipeline branch points (MSS SP-75 tees)'],
    rfq: ['Equal or reducing; for reducing tees give run × run × branch size', 'Schedule of run and branch if they differ'],
    faqs: [
      { q: 'How is a reducing tee size written?', a: 'It is written run × run × branch, for example 6 × 6 × 4 for a 6 inch run with a 4 inch branch.' },
      { q: 'When is a barred tee needed?', a: 'Pipelines that are pigged use a barred tee, with bars across the branch to stop the pig entering it. Barred tees can be supplied to drawing.' },
    ],
  },
  'straight-tee': {
    family: 'bw', name: 'Equal (Straight) Tee',
    intro: [
      'A straight tee, or equal tee, has all three ends the same size. It is used where a branch line needs the same flow capacity as the main run. REMAX FORGE & FITTINGS manufactures equal tees to ASME B16.9 in seamless and welded construction, with the centre-to-end dimension identical on the run and the branch.',
      'Equal tees are available in every common nominal size, which makes them the default choice for headers and loops. Each tee is checked for centre-to-end dimensions, crotch wall thickness and end bevels before it is marked with grade, size, schedule and heat number.',
    ],
    uses: ['Header and manifold branches of equal size', 'Ring mains and loop systems', 'Bypass lines around control valves', 'Fire water and utility distribution'],
    rfq: ['Nominal size and wall schedule'],
    faqs: [
      { q: 'Is an equal tee always available ex-stock?', a: 'Common sizes in carbon and stainless steel usually are. Large diameters, heavy walls and special alloys are made to order.' },
      { q: 'Can an equal tee be used with a reducer instead of a reducing tee?', a: 'Yes, but it adds a weld and length. A reducing tee is more compact where the reduction is a standard B16.9 combination.' },
    ],
  },
  'reducing-tee': {
    family: 'bw', name: 'Reducing Tee',
    intro: [
      'A reducing tee has a branch smaller than the run, so a smaller line can be taken off a header without a separate reducer. REMAX FORGE & FITTINGS manufactures reducing tees to ASME B16.9, which lists the standard run and branch combinations for each nominal size. Sizes are written run × run × branch, for example 8 × 8 × 4.',
      'Not every combination is a standard item. Very small branches on large runs are normally made with a weldolet or other branch outlet fitting instead. Tell us the combination you need and we will confirm whether it is a standard tee or a made-to-order item.',
    ],
    uses: ['Smaller branch lines from headers', 'Equipment feed lines from distribution mains', 'Drain and vent branches on process lines', 'Compact branch arrangements in skids'],
    rfq: ['Run and branch sizes (run × run × branch)', 'Schedule of run and branch if they differ'],
    faqs: [
      { q: 'Why is a 16 × 16 × 2 reducing tee hard to find?', a: 'ASME B16.9 does not list very large reductions for tees. For those, a branch outlet fitting welded onto the run pipe is the normal solution.' },
      { q: 'Does a reducing tee need the same schedule on run and branch?', a: 'No. Run and branch can be specified with different wall thicknesses to match the connected pipes.' },
    ],
  },
  'butt-weld-reducers-fittings': {
    family: 'bw', name: 'Butt Weld Reducer',
    intro: [
      'A butt weld reducer joins two pipes of different sizes. It is made in two forms: concentric, where both ends share the same centre line, and eccentric, where one side is flat and the centre lines are offset. REMAX FORGE & FITTINGS manufactures both to ASME B16.9, which sets the overall length for each size combination. Sizes are written large end × small end, for example 6 × 4.',
      'Reducers are formed from seamless pipe or welded plate and checked for overall length, end wall thicknesses and bevels. Different schedules can be specified on each end when the connected pipes differ.',
    ],
    uses: ['Size changes at pumps, compressors and control valves', 'Transitions between line sizes in pipe racks', 'Vessel and exchanger nozzle connections', 'Header size changes along a distribution main'],
    rfq: ['Concentric or eccentric', 'Large end × small end size, and schedule of each end'],
    faqs: [
      { q: 'How do I choose between a concentric and an eccentric reducer?', a: 'Use concentric reducers on vertical lines and on pump discharge. Use eccentric reducers on horizontal pump suction lines (flat side on top) and where a constant bottom of pipe is needed in a pipe rack.' },
      { q: 'Can a reducer have different schedules on each end?', a: 'Yes. Specify the wall thickness for both ends, for example 6 inch Sch 40 × 4 inch Sch 80.' },
    ],
  },
  'concentric-reducer': {
    family: 'bw', name: 'Concentric Reducer',
    intro: [
      'A concentric reducer has a cone-shaped body with both ends on the same centre line. It gives a symmetrical transition between two pipe sizes and is made to ASME B16.9 by REMAX FORGE & FITTINGS in seamless and welded construction.',
      'Because it is symmetrical, a concentric reducer can trap air or liquid in horizontal lines, so it is mainly used in vertical runs and on pump discharge. On horizontal pump suction, an eccentric reducer is normally specified instead.',
    ],
    uses: ['Vertical pipe runs', 'Pump and compressor discharge', 'Gas lines where pockets are not a concern', 'Nozzle connections on vessels'],
    rfq: ['Large end × small end size', 'Schedule of each end'],
    faqs: [
      { q: 'Why not use a concentric reducer on pump suction?', a: 'On a horizontal suction line a concentric reducer can trap an air pocket at the top, which can cause cavitation. An eccentric reducer installed flat side up avoids this.' },
      { q: 'What length is a 6 × 4 concentric reducer?', a: 'ASME B16.9 gives an end-to-end length of 5.5 inches (140 mm) for 6 inch reducers.' },
    ],
  },
  'eccentric-reducer': {
    family: 'bw', name: 'Eccentric Reducer',
    intro: [
      'An eccentric reducer has one flat side, so the centre lines of the two ends are offset. REMAX FORGE & FITTINGS manufactures eccentric reducers to ASME B16.9, with the same end-to-end length as the matching concentric reducer.',
      'Orientation matters. On horizontal pump suction the reducer is installed flat side on top, so no air pocket can form ahead of the pump. In pipe racks it is often installed flat side on the bottom, so the line drains and the pipe supports stay at one elevation.',
    ],
    uses: ['Horizontal pump suction lines (flat on top)', 'Pipe rack lines needing a constant bottom of pipe (flat on bottom)', 'Lines that must drain fully', 'Slurry lines where settling must be avoided'],
    rfq: ['Large end × small end size', 'Schedule of each end'],
    faqs: [
      { q: 'What do FOT and FOB mean?', a: 'FOT means flat on top and FOB means flat on bottom. They describe how the eccentric reducer is installed and are shown on the piping isometric.' },
      { q: 'Is an eccentric reducer the same length as a concentric one?', a: 'Yes. ASME B16.9 gives the same end-to-end length for concentric and eccentric reducers of the same size.' },
    ],
  },
  'oval-caps': {
    family: 'bw', name: 'Butt Weld Cap',
    intro: [
      'A butt weld cap closes the end of a pipe. ASME B16.9 caps have an elliptical (oval) head shape, which carries pressure more efficiently than a flat plate. REMAX FORGE & FITTINGS manufactures caps by pressing seamless or welded blanks, then machining the weld bevel to suit your pipe schedule.',
      'Caps are welded permanently, so they are used where the line will not be opened again. Where access is needed later, a blind flange is the usual choice. Caps are supplied in carbon, low-temperature, alloy, stainless, duplex and nickel alloy grades.',
    ],
    uses: ['Closing header and manifold ends', 'Dead legs and drip legs', 'Closing spools for pressure testing', 'Closed ends of small vessels and pipe stands'],
    rfq: ['Nominal size and wall schedule'],
    faqs: [
      { q: 'What is the difference between a cap and a blind flange?', a: 'A cap is welded on and is permanent. A blind flange is bolted and can be removed for inspection or future connection.' },
      { q: 'Are caps made to the same wall thickness as the pipe?', a: 'Yes. The cap wall at the weld end is matched to the pipe schedule so that the joint is a straight butt weld.' },
    ],
  },

  // ---------------- SOCKET WELD ----------------
  'socket-weld-elbow-fittings': {
    family: 'sw', name: 'Socket Weld Elbow',
    intro: [
      'A socket weld elbow changes the direction of small-bore piping. The pipe is pushed into the socket, pulled back about 1/16 inch (1.6 mm) to leave an expansion gap, and sealed with a fillet weld. REMAX FORGE & FITTINGS forges 90° and 45° socket weld elbows to ASME B16.11 from bar or forgings, then machines the sockets to the bore and depth the standard requires.',
      'Elbows are made in Class 3000, 6000 and 9000. As a guide, Class 3000 suits Schedule 80 pipe, Class 6000 suits Schedule 160 and Class 9000 suits XXS. Grades include A105, A350 LF2, A182 F11/F22/F91, A182 F304/F316 and duplex F51/F53.',
    ],
    uses: ['Instrument, drain and vent lines', 'Small-bore steam and condensate piping', 'Hydraulic and lube oil systems', 'Chemical injection and sampling lines'],
    rfq: ['Angle (90° or 45°) and pressure class'],
    faqs: [
      { q: 'Why is a gap left at the bottom of the socket?', a: 'The 1/16 inch gap lets the pipe expand during welding. Without it, the fillet weld can crack as it cools.' },
      { q: 'Which class should I order for Schedule 80 pipe?', a: 'Class 3000 is normally matched with Schedule 80 pipe and Class 6000 with Schedule 160. Your piping specification has the final say.' },
    ],
  },
  'socket-weld-tee-fittings': {
    family: 'sw', name: 'Socket Weld Tee',
    intro: [
      'A socket weld tee provides a 90° branch on small-bore piping. REMAX FORGE & FITTINGS forges equal tees to ASME B16.11 with three sockets of the same size, and makes reducing tees to order. The pipe ends are fillet welded into the sockets, which keeps fit-up quick and avoids the precise bevel alignment a butt weld needs.',
      'Tees are made in Class 3000, 6000 and 9000 from forged carbon steel, low-temperature steel, chrome-moly, stainless steel and duplex grades. Socket bore, socket depth and centre-to-bottom-of-socket dimensions are checked on every lot.',
    ],
    uses: ['Instrument and pressure gauge take-offs', 'Drain and vent branches', 'Small-bore utility headers', 'Sampling and chemical dosing lines'],
    rfq: ['Equal or reducing (run × run × branch) and class'],
    faqs: [
      { q: 'Up to what size are socket weld tees used?', a: 'ASME B16.11 covers socket weld fittings up to NPS 4, but most piping specifications use socket welding only up to NPS 1-1/2 or 2 and butt welding above that.' },
      { q: 'Is a socket weld tee suitable for cyclic service?', a: 'ASME B31.3 restricts socket welds in severe cyclic conditions. Check your piping code and specification before using them in that service.' },
    ],
  },
  'socket-weld-cross-fittings': {
    family: 'sw', name: 'Socket Weld Cross',
    intro: [
      'A socket weld cross has four sockets at right angles and joins four small-bore lines at one point. REMAX FORGE & FITTINGS forges crosses to ASME B16.11 in Class 3000, 6000 and 9000, with socket dimensions checked to the standard.',
      'Crosses are less common than tees because they concentrate stress at one point, but they save space in compact manifolds and instrument assemblies. Grades include A105, A350 LF2, A182 alloy and stainless grades and duplex.',
    ],
    uses: ['Compact instrument manifolds', 'Sprinkler and fire protection branches', 'Small-bore distribution in skids', 'Test and sampling assemblies'],
    rfq: ['Size of each outlet and class'],
    faqs: [
      { q: 'When should I use a cross instead of two tees?', a: 'Use a cross where space is tight and four lines must meet at one point. Two tees spread the load and are easier to inspect, so they are preferred where space allows.' },
      { q: 'Can the outlets be different sizes?', a: 'Reducing crosses can be machined to order. State the size of each outlet in your enquiry.' },
    ],
  },
  'socket-weld-lateral-tee-fittings': {
    family: 'sw', name: 'Socket Weld Lateral Tee',
    intro: [
      'A socket weld lateral tee has its branch at 45° to the run instead of 90°. The angled branch merges flow with less turbulence and pressure drop than a standard tee. ASME B16.11 does not give dimensions for laterals, so REMAX FORGE & FITTINGS machines them from forgings to your drawing or to our standard dimensions.',
      'Laterals are made with sockets sized to your pipe and in pressure classes matched to the line. Forged carbon, low-temperature, alloy, stainless and duplex grades are available, with full material traceability.',
    ],
    uses: ['Merging flows with low turbulence', 'Drain and blow-down headers', 'Slurry and solids-bearing small-bore lines', 'Sprinkler and fire protection piping'],
    rfq: ['Branch angle, run and branch sizes', 'Drawing or required centre-to-end dimensions'],
    faqs: [
      { q: 'Is a lateral tee covered by ASME B16.11?', a: 'No. B16.11 covers tees and crosses, not laterals, so laterals are made to a drawing or a manufacturer standard and rated by design.' },
      { q: 'Why use a 45° branch?', a: 'The angled entry reduces turbulence and wear where two flows merge, which helps in drain headers and lines carrying solids.' },
    ],
  },
  'socket-weld-coupling-fittings': {
    family: 'sw', name: 'Socket Weld Coupling',
    intro: [
      'A socket weld coupling joins two lengths of small-bore pipe in a straight line. REMAX FORGE & FITTINGS makes full couplings, half couplings and reducing couplings to ASME B16.11 in Class 3000, 6000 and 9000.',
      'A full coupling has a socket at each end. A half coupling has a socket at one end and is welded onto a larger pipe as a branch connection. A reducing coupling joins two different pipe sizes. All are machined from forgings or bar in carbon, alloy, stainless and duplex grades.',
    ],
    uses: ['Joining small-bore pipe lengths', 'Branch connections on larger pipe and vessels (half coupling)', 'Size changes in small-bore lines (reducing coupling)', 'Instrument connections on tanks'],
    rfq: ['Full, half or reducing coupling', 'Sizes of each end and class'],
    faqs: [
      { q: 'What is a half coupling used for?', a: 'A half coupling is welded onto a larger pipe or vessel to create a small-bore branch. It is a common, low-cost alternative to a sockolet.' },
      { q: 'Does a coupling need a gap at each socket?', a: 'Yes. Each pipe end is pulled back about 1/16 inch from the bottom of its socket before the fillet weld is made.' },
    ],
  },
  'socket-weld-union-fittings': {
    family: 'sw', name: 'Socket Weld Union',
    intro: [
      'A socket weld union lets a small-bore line be taken apart without cutting the pipe. It has three parts: two ends that are welded to the pipes and a nut that pulls them together. REMAX FORGE & FITTINGS supplies forged unions to MSS SP-83 in Class 3000 and 6000.',
      'Unions are placed next to equipment that must be removed for maintenance, such as pumps, meters and control valves. The seat can be metal-to-metal or fitted with a seal to suit the service. Carbon, stainless and alloy grades are available.',
    ],
    uses: ['Connections to pumps, meters and valves that need removal', 'Instrument and analyser lines', 'Small-bore utility piping', 'Skid connections that are split for transport'],
    rfq: ['Class (3000 or 6000) and seat type'],
    faqs: [
      { q: 'Which standard covers socket weld unions?', a: 'MSS SP-83 covers Class 3000 and 6000 pipe unions with socket weld and threaded ends.' },
      { q: 'Can a union replace a flange in small-bore lines?', a: 'Often, yes. A union is smaller and cheaper than a flanged joint for small sizes, but check whether your specification allows unions in the service.' },
    ],
  },
  'socket-weld-cap-fittings': {
    family: 'sw', name: 'Socket Weld Cap',
    intro: [
      'A socket weld cap closes the end of a small-bore pipe permanently. The pipe is inserted into the cap, gapped, and fillet welded. REMAX FORGE & FITTINGS forges caps to ASME B16.11 in Class 3000, 6000 and 9000.',
      'Caps are used on drains, vents and dead ends that will not be reopened. Where the end must be opened later, a threaded plug or a valve with a plug is normally used instead. Grades include A105, A350 LF2, A182 alloy and stainless steels and duplex.',
    ],
    uses: ['Closing small-bore dead ends', 'Drain and vent terminations', 'Capping spare branches for future use', 'Closing ends for pressure testing'],
    rfq: ['Size and class'],
    faqs: [
      { q: 'Is a socket weld cap removable?', a: 'No. It is fillet welded and must be cut off to reopen the line. Use a threaded plug where the end needs to be opened.' },
      { q: 'What class should the cap be?', a: 'Match the cap class to the other fittings on the line, typically Class 3000 for Schedule 80 pipe and Class 6000 for Schedule 160.' },
    ],
  },
  'socket-weld-reducer-insert-fittings': {
    family: 'sw', name: 'Socket Weld Reducer Insert',
    intro: [
      'A reducer insert fits into the socket of a larger fitting and gives a smaller socket for the reduced pipe. It lets a standard tee, elbow or coupling take a smaller line without a separate reducing fitting. REMAX FORGE & FITTINGS machines reducer inserts to MSS SP-79 from forged bar.',
      'Inserts are made in Class 3000 and 6000 for socket welding. Because the insert is welded inside the larger socket, both joints are fillet welds. Carbon, alloy, stainless and duplex grades are available.',
    ],
    uses: ['Reducing the outlet of a standard socket weld tee', 'Size changes where a reducing fitting is not stocked', 'Instrument and sampling connections', 'Compact small-bore assemblies'],
    rfq: ['Large and small socket sizes', 'Class'],
    faqs: [
      { q: 'Which standard covers reducer inserts?', a: 'MSS SP-79 covers socket welding reducer inserts.' },
      { q: 'Why use a reducer insert instead of a reducing tee?', a: 'A reducer insert lets you use a stocked equal fitting and reduce one outlet, which is often faster than waiting for a special reducing fitting.' },
    ],
  },
  'socket-weld-nipple-fittings': {
    family: 'sw', name: 'Pipe Nipple',
    intro: [
      'A pipe nipple is a short length of pipe used to connect fittings, valves and equipment in small-bore lines. REMAX FORGE & FITTINGS supplies nipples to ASTM A733 with plain ends for socket welding or threaded ends, in the combinations plain both ends (PBE), threaded both ends (TBE), threaded one end (TOE) and plain one end (POE).',
      'Swage nipples, which change pipe size over a short length, are made to MSS SP-95 in concentric and eccentric forms. Nipples are cut from seamless or welded pipe in the schedule of the connected line, and in carbon, alloy, stainless and duplex grades.',
    ],
    uses: ['Valve and instrument connections', 'Drain and vent assemblies', 'Spacers between socket weld fittings', 'Size changes with swage nipples'],
    rfq: ['Size, schedule and length', 'End combination (PBE, TBE, TOE or POE)', 'For swage nipples: large × small size and concentric or eccentric'],
    faqs: [
      { q: 'What does TOE mean on a nipple?', a: 'TOE means threaded one end, with the other end plain for socket welding. Similar abbreviations are PBE (plain both ends) and TBE (threaded both ends).' },
      { q: 'What is a swage nipple?', a: 'A swage nipple reduces from one pipe size to a smaller one over a short length. It is made to MSS SP-95 and can be concentric or eccentric.' },
    ],
  },
  'socket-weld-bushing-fittings': {
    family: 'sw', name: 'Bushing',
    intro: [
      'A bushing reduces the size of a connection by fitting inside a larger fitting. ASME B16.11 bushings are threaded, with a male thread on the outside and a female thread inside, and come with a hex head or as flush bushings. REMAX FORGE & FITTINGS machines bushings from forged bar.',
      'Bushings are used to adapt instruments and small lines to larger threaded outlets. For socket weld systems, the equivalent part is a reducer insert to MSS SP-79. Grades include A105, A182 stainless and alloy steels, and duplex.',
    ],
    uses: ['Adapting gauges and instruments to larger outlets', 'Reducing threaded ports on equipment', 'Small-bore drain and vent connections', 'Compact size changes in threaded piping'],
    rfq: ['Hex or flush bushing', 'Outer and inner thread sizes and type (NPT or BSP)'],
    faqs: [
      { q: 'What is the difference between a hex bushing and a flush bushing?', a: 'A hex bushing has a hex head for a spanner. A flush bushing sits level with the face of the fitting and is used where space is tight.' },
      { q: 'Is there a socket weld bushing?', a: 'Bushings in ASME B16.11 are threaded. For socket weld piping, use a reducer insert to MSS SP-79.' },
    ],
  },
  'socket-weld-plug-fittings': {
    family: 'sw', name: 'Plug',
    intro: [
      'A plug closes a threaded opening, such as a spare port on a fitting, valve or vessel. ASME B16.11 plugs are threaded and come with a hex head, square head or round head. REMAX FORGE & FITTINGS machines plugs from forged bar in carbon, alloy, stainless and duplex grades.',
      'Bull plugs, which close the end of a pipe and can be drilled and tapped for an instrument, are made to MSS SP-95. Where a permanent, welded closure is needed on socket weld piping, a socket weld cap is used instead.',
    ],
    uses: ['Closing spare threaded ports', 'Drain and vent closures that must be reopened', 'Test points on valves and fittings', 'Pipe end closures (bull plugs)'],
    rfq: ['Hex, square or round head, or bull plug', 'Thread size and type (NPT or BSP)'],
    faqs: [
      { q: 'Which head type should I order?', a: 'Hex head plugs are the most common because they are easy to tighten with a spanner. Square and round head plugs are used where the specification calls for them.' },
      { q: 'What is a bull plug?', a: 'A bull plug is a solid or tapped plug that closes the end of a pipe. It is made to MSS SP-95 and can be plain or threaded.' },
    ],
  },
};
