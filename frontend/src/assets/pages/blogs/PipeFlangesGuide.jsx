import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ArrowLeft } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import usePageSchema, { faqSchema } from '../../components/common/usePageSchema.js';

const flangeTypes = [
  { type: 'Weld Neck (WN)', to: '/products/flanges/weld-neck-flange/', joint: 'Butt weld', sizes: 'NPS ½–60', service: 'High pressure, high / low temperature, cyclic service' },
  { type: 'Slip-On (SO)', to: '/products/flanges/slip-on-flange/', joint: 'Two fillet welds', sizes: 'NPS ½–60', service: 'Low pressure utilities, cooling water, general service' },
  { type: 'Blind (BL)', to: '/products/flanges/blind-flange/', joint: 'None (bolted cover)', sizes: 'NPS ½–60', service: 'Closing pipe ends, nozzles and test points' },
  { type: 'Socket Weld (SW)', to: '/products/flanges/socket-weld-flange/', joint: 'One fillet weld', sizes: 'NPS ½–3 (mostly ≤ 2)', service: 'Small-bore high pressure process and instrument lines' },
  { type: 'Threaded (TH)', to: '/products/flanges/threaded-flange/', joint: 'Pipe thread, no weld', sizes: 'NPS ½–24 (mostly ≤ 4)', service: 'Low pressure, non-hazardous lines where welding is not allowed' },
  { type: 'Lap Joint (LJ)', to: '/products/flanges/lap-joint-flange/', joint: 'Stub end butt welded', sizes: 'NPS ½–24', service: 'Frequent dismantling, costly alloy lines with CS backing flange' },
  { type: 'Spectacle Blind', to: '/products/flanges/spectacle-blind-flange/', joint: 'Fitted between flanges', sizes: 'NPS ½–24', service: 'Positive isolation that is switched repeatedly' },
];

const faqs = [
  { q: 'What are the main types of pipe flanges?', a: 'The main types are weld neck, slip-on, blind, socket weld, threaded and lap joint flanges, plus special types such as orifice flanges, long weld neck flanges and spectacle blinds. Weld neck flanges are used for high pressure and critical service, slip-on flanges for low pressure utilities, and blind flanges to close pipe ends.' },
  { q: 'Which standard covers pipe flanges?', a: 'ASME B16.5 covers pipe flanges from NPS ½ to 24 in Classes 150 to 2500. ASME B16.47 covers NPS 26 to 60 (Series A and B). In Europe, EN 1092-1 covers PN-rated flanges. Line blinds are covered by ASME B16.48 and orifice flanges by ASME B16.36.' },
  { q: 'What does flange pressure class mean?', a: 'The class (150, 300, 400, 600, 900, 1500, 2500) is a rating designation, not a pressure in psi. The allowable pressure depends on the class, the material group and the temperature. For example, an A105 Class 150 flange is rated 285 psig at ambient temperature but 170 psig at 500°F.' },
  { q: 'What is the difference between RF, FF and RTJ flange faces?', a: 'A raised face (RF) concentrates bolt load on a raised gasket area and is the most common facing. A flat face (FF) is used against cast iron or FRP flanges with a full-face gasket. A ring type joint (RTJ) has a groove for a metal ring gasket and is used for high pressure and high temperature service, typically Class 600 and above.' },
  { q: 'Which material is best for pipe flanges?', a: 'It depends on the service. A105 carbon steel suits most hydrocarbon, steam and water service; A350 LF2 suits low temperature down to -46°C; F304L / F316L stainless suit corrosive and cryogenic service; F51 / F53 duplex suit chlorides and seawater; and F11 / F22 / F91 alloy steel suit high temperature power and refinery lines.' },
];

const toc = [
  ['types', 'Flange types'],
  ['comparison', 'Quick comparison table'],
  ['facings', 'Flange facing types'],
  ['classes', 'Pressure classes'],
  ['materials', 'Flange materials'],
  ['bolting', 'Bolting and gaskets'],
  ['inspection', 'Inspection and documents'],
  ['faq', 'FAQs'],
];

const PipeFlangesGuide = () => {
  usePageSchema([faqSchema(faqs)]);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Pipe Flanges Guide: Types, Standards, Classes & Materials"
        description="Complete guide to pipe flanges: weld neck, slip-on, blind, socket weld, threaded and lap joint types, RF/FF/RTJ faces, ASME B16.5 classes and materials."
        keywords="Pipe Flanges, Weld Neck Flange, Slip-On Flange, Blind Flange, Flange Facing, ASME B16.5, Industrial Piping, Flange Materials, Remax Forge"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link to="/" aria-label="Home" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" className="text-[#D71920] font-medium truncate">Guide to Pipe Flanges</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Technical Reference
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            The Complete Guide to Pipe Flanges: Types, Standards, Materials, and Selection
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge & Fittings</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> Updated <time dateTime="2026-10-31">31 October 2026</time> · 15 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          {/* Primary Image: Installed piping system with flanges */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
            <img
              src="/images/pipe-flanges-guide-hero.webp"
              width="1200"
              height="800"
              fetchpriority="high"
              alt="Industrial piping system with bolted pipe flanges in a process plant"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Flanges — The Unsung Heroes of Industrial Piping</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every process plant, refinery, power station, and offshore platform is held together, in a very literal sense, by flanges. These circular discs with bolt holes allow piping systems to be assembled, disassembled, inspected, and modified without cutting pipe. They provide the mechanical joint between equipment nozzles, valves, instruments, and pipe segments that must be opened periodically for maintenance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Despite their ubiquity, flanges are frequently misunderstood or under-specified. An improperly selected flange — wrong pressure class, incompatible facing, insufficient material grade for the service temperature — is a point of failure waiting to happen. Industry incident databases contain numerous records of flange joint failures attributed to misspecification, improper bolt-up, or incorrect gasket selection.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              At Remax Forge & Fittings, we manufacture flanges for every major industry sector, in materials ranging from carbon steel to exotic nickel alloys. This guide consolidates the technical knowledge our engineering team draws on daily, structured to help you make better flange specification decisions.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
              <p className="font-bold text-slate-800 mb-2">In short</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                A pipe flange joins pipe, valves and equipment with a bolted, gasketed joint that can be taken apart. Choose the <strong>type</strong> by how it attaches to the pipe (weld neck, slip-on, socket weld, threaded, lap joint, or blind for a closure), the <strong>facing</strong> by the gasket (RF, FF or RTJ), the <strong>class</strong> from the ASME B16.5 pressure–temperature tables, and the <strong>material</strong> to match the pipe and the fluid.
              </p>
              <p className="font-bold text-slate-800 mb-2 text-sm">Contents</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm list-decimal list-inside">
                {toc.map(([id, label]) => (
                  <li key={id}><a href={`#${id}`} className="text-[#D71920] font-semibold hover:underline">{label}</a></li>
                ))}
              </ol>
            </div>

            {/* Section: Flange Types */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
              <img loading="lazy" decoding="async" 
                src="/images/b(2)2.jpeg" width="807" height="661" 
                alt="types of pipe flanges including weld neck slip on blind socket weld and threaded flange diagram" 
                className="w-full h-auto"
              />
            </div>
            <h2 id="types" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Flange Types — Understanding the Design Options</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The term "flange" encompasses a wide variety of designs, each suited to different installation requirements, pressure-temperature conditions, and maintenance philosophies. ASME B16.5 (Pipe Flanges and Flanged Fittings, NPS 1/2 through NPS 24) and ASME B16.47 (Large Diameter Steel Flanges, NPS 26 through NPS 60) are the primary dimensional and rating standards in North America and most international markets.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Weld Neck Flange (WN)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The weld neck flange is the workhorse of high-pressure, high-temperature piping. Its defining feature is a long, tapered hub that is butt-welded to the pipe. The taper distributes stress away from the weld and into the pipe body — an important characteristic in cyclic service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">Weld neck flanges are required by many engineering specifications for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Pressure Class 900# and above</li>
              <li>High-temperature steam service</li>
              <li>Cryogenic service</li>
              <li>Cyclic or fatigue-sensitive service</li>
              <li>Any application where full radiographic examination of the weld is required</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              The radiographic examination advantage is critical: because the bore of the weld neck flange matches the pipe bore exactly, the butt weld can be fully examined by radiography. Other flange types use fillet welds that cannot be radiographed.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Slip-On Flange (SO)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The slip-on flange slides over the pipe end and is secured with two fillet welds — one inside the bore at the pipe end, and one at the back of the hub. It is less expensive than a weld neck flange and easier to fit up during installation, since exact pipe cut length is not as critical.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">Slip-on flanges are suitable for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Low to moderate pressure service (generally Class 150# and 300#)</li>
              <li>Non-cyclic service</li>
              <li>Applications where the additional fillet welds are acceptable per the governing piping code</li>
              <li>Plant utilities, cooling water, and general service piping</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              The primary limitation of slip-on flanges is that the double fillet weld is more susceptible to fatigue cracking under cyclic loading than the butt weld of a weld neck flange. ASME B31.3 allows slip-on flanges but imposes restrictions on their use in severe cyclic conditions.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Blind Flange (BL)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              A blind flange is a solid disc used to close the end of a piping system, nozzle, or pressure vessel. It is the most stressed of all flange types because it must resist the full pressure acting on its face area, in bending, without the benefit of pipe wall support.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">Blind flanges are used for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Isolating the end of a pipeline for pressure testing or decommissioning</li>
              <li>Closing vessel nozzles that may be needed for future connections</li>
              <li>Temporary isolation during construction and commissioning</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Because of their high bending stress under pressure, blind flanges are conservatively rated. The minimum thickness of a blind flange is greater than a comparable weld neck or slip-on flange face.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Socket Weld Flange (SW)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Socket weld flanges are used primarily for small-diameter, high-pressure piping — typically 2 inches and below. The pipe is inserted into a socket (counter-bore) in the flange bore and a single fillet weld is applied at the hub face.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              A critical assembly detail: the pipe must be backed out approximately 1/16 inch (1.6 mm) from the socket bottom before welding, to allow thermal expansion during welding and prevent socket cracking. Many field failures at socket welds are attributable to violating this requirement.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">Socket weld flanges are widely used in:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>High-pressure instrument lines and sample connections</li>
              <li>Chemical injection and hydraulic control piping</li>
              <li>Small-bore process piping in Class 600# through 2500# service</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Threaded Flange (TH)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Threaded flanges attach to the pipe through internal threads — no welding is required. This is both their primary advantage and primary limitation. In flammable or hazardous service, most piping codes prohibit or restrict threaded connections because thread forms are susceptible to leakage under thermal cycling and vibration.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">Threaded flanges are acceptable for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Low-pressure, low-temperature, non-hazardous service</li>
              <li>Installations where welding is not possible (fire hazard environment)</li>
              <li>Instrument connections and gauge points in appropriate service</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Lap Joint Flange (LJ)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Lap joint flanges are used with stub ends and are free to rotate around the pipe. This rotation makes bolt-hole alignment trivial during installation and is particularly valuable when the pipe or equipment has a fixed orientation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">They are used when:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Frequent dismantling is required (heat exchanger channel covers, filter housings)</li>
              <li>Bolt-hole alignment is difficult</li>
              <li>The stub end is made of a corrosion-resistant alloy but the flange backing ring can be made of carbon steel to reduce cost</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Orifice Flange</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              Orifice flanges are a specialized pair of weld neck or slip-on flanges drilled with tapped pressure tap ports for differential pressure flow measurement. They accommodate an orifice plate between the flange faces. Orifice flanges are always supplied in sets and must be installed in matched pairs.
            </p>


            <h2 id="comparison" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Pipe Flange Types Compared</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-10 not-prose">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F172A] text-white">
                    {['Flange type', 'Attachment', 'Typical sizes', 'Typical service'].map((h) => <th key={h} className="px-4 py-3 font-bold border-r border-slate-700 last:border-0">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {flangeTypes.map((row, idx) => (
                    <tr key={row.type} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <td className="px-4 py-3 font-bold border-r border-slate-200"><Link to={row.to} className="text-[#D71920] hover:underline">{row.type}</Link></td>
                      <td className="px-4 py-3 text-slate-600 border-r border-slate-200">{row.joint}</td>
                      <td className="px-4 py-3 text-slate-600 border-r border-slate-200">{row.sizes}</td>
                      <td className="px-4 py-3 text-slate-600">{row.service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10">
              For a head-to-head comparison of the two most common types, read <Link to="/blogs/weld-neck-vs-slip-on-flange/" className="text-[#D71920] font-semibold hover:underline">weld neck vs slip-on flange</Link>.
            </p>

            {/* Section: Flange Facing Types */}
            <div className="mb-8 mt-12 rounded-xl overflow-hidden shadow-sm">
              <img loading="lazy" decoding="async" 
                src="/images/b(2)3.jpeg" width="1024" height="1024" 
                alt="raised face vs flat face flange comparison showing sealing surface differences in pipe flanges" 
                className="w-full h-auto"
              />
            </div>
            <h2 id="facings" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Flange Facing Types — The Critical Sealing Interface</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The flange face is the machined surface that contacts the gasket and creates the seal. Selecting the wrong facing for your gasket type and service conditions will result in a leaking joint.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Raised Face (RF)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The raised face is the most common facing type, used with flat ring gaskets and spiral wound gaskets. The raised face is 1/16 inch (1.6 mm) high on Class 150 and 300 flanges and 1/4 inch (6.4 mm) high on Class 400 to 2500 flanges.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The raised area concentrates the bolt load onto the gasket area, increasing seating stress and improving leak tightness. The face surface finish is typically specified in terms of arithmetic average roughness (Ra) — commonly 125 to 250 microinches AARH for spiral wound gaskets, or 63 microinches for ring type joint facings.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Flat Face (FF)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Flat face flanges have no raised portion — the entire flange face, including the area inside and outside the bolt circle, is at the same level. Flat face flanges are used when connecting to equipment or piping with flat-face flanges, such as cast iron valves and pumps.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Critical: never mate a raised face flange against a flat face cast iron flange. The raised face point-loads the cast iron, which can fracture. When connecting to cast iron equipment, convert both flanges to flat face with full-face gaskets.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Ring Type Joint (RTJ)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              RTJ flanges have a machined groove in the face that accepts a metallic ring gasket — either octagonal or oval cross-section. When the bolts are tightened, the ring is compressed into the groove, creating an extremely tight metal-to-metal seal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">RTJ facings are specified for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>High-pressure service (typically Class 900# and above)</li>
              <li>High-temperature service</li>
              <li>Hydrocarbon service where zero leakage is required</li>
              <li>Wellhead and Christmas tree equipment per API 6A</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              The metal ring gaskets must be softer than the flange material to prevent damage to the machined groove. For 316 SS flanges, use 316 SS rings. For carbon steel flanges in sour service, soft iron rings may be specified.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Tongue and Groove (T&G), and Male-Female (M&F)</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              These specialty facings mate with corresponding counterpart faces. They provide positive gasket positioning and are used in applications requiring precise gasket alignment, such as heat exchanger covers, pump casings, and other high-integrity joints.
            </p>


            {/* Section: Flange Pressure Classes */}
            <h2 id="classes" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Flange Pressure Classes — Understanding the Rating System</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              ASME B16.5 defines seven pressure classes for flanges: 150#, 300#, 400#, 600#, 900#, 1500#, and 2500#. These designations do not directly indicate the maximum allowable working pressure — rather, the pressure rating of a flange is a function of both its class and its material group at a given temperature.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">How to Read Pressure-Temperature Tables</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The pressure-temperature (P-T) rating tables in ASME B16.5 group materials into Material Groups (1.1, 1.2, 1.3, 2.1, 2.2, etc.). The allowable pressure for each class decreases as temperature increases, reflecting the reduction in yield strength at elevated temperatures.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              For example, a Class 150# flange in Group 1.1 (which includes A105 carbon steel) is rated at 285 psig at ambient temperature, but only 170 psig at 500°F (260°C), and the rating drops further as temperature rises. A Class 600 flange in the same material is rated at 1,480 psig at ambient temperature. See the <Link to="/blogs/flange-pressure-class-guide/" className="text-[#D71920] font-semibold hover:underline">flange pressure class guide</Link> and <Link to="/blogs/class-150-vs-class-300-flange/" className="text-[#D71920] font-semibold hover:underline">Class 150 vs Class 300</Link> for worked examples.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Choosing the Right Class</h3>
            <p className="text-slate-600 leading-relaxed mb-4">The selection process is straightforward once you know:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>The maximum operating pressure at the flange location</li>
              <li>The maximum operating temperature at the flange location</li>
              <li>The material group of the flange material</li>
              <li>The design pressure and temperature set by the piping code and process design (normally with a margin above the maximum operating conditions, and not below the relief valve set pressure)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-10">
              Look up the material group in ASME B16.5 Table 1A, then find the class whose P-T rating at your maximum temperature exceeds your design pressure. Always round up — never select a class whose rating is marginally above design pressure without considering future operating scenarios or pressure relief set points.
            </p>


            {/* Section: Flange Materials */}
            <div className="mb-8 mt-12 rounded-xl overflow-hidden shadow-sm">
              <img loading="lazy" decoding="async" 
                src="/images/b(2)4.jpeg" width="400" height="400" 
                alt="stack of industrial stainless steel pipe flanges in different sizes used in high-pressure piping systems" 
                className="w-full h-auto"
              />
            </div>
            <h2 id="materials" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Flange Materials — Matching Metal to Service</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Material selection for flanges follows the same principles as for any pressure-retaining component: you need sufficient strength at the operating temperature, adequate corrosion resistance for the fluid, compatibility with the gasket and bolt materials, and compliance with the applicable code and client specification.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Carbon Steel Flanges</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>ASTM A105</strong> is the most widely used carbon steel forged flange material for ambient to elevated temperature service. It covers carbon steel forgings for piping components with operating temperatures up to approximately 800°F (427°C).</li>
              <li><strong>ASTM A350 LF2</strong> is specified for low-temperature service down to -50°F (-45°C), with mandatory Charpy impact testing to verify notch toughness at the design minimum temperature.</li>
              <li><strong>ASTM A694</strong> grades (F42 through F80) are used for high-pressure gas transmission pipelines, with yield strength grades matching common pipeline steel grades.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Carbon steel flanges are suitable for: steam systems, compressed air, hydrocarbon service without wet H₂S or CO₂, cooling water (with corrosion allowance), general process fluids with appropriate inhibition.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Stainless Steel Flanges</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>ASTM A182 F304/304L</strong> — Austenitic stainless, excellent corrosion resistance in oxidizing environments, food and pharmaceutical service, cryogenic service. The "L" grade (low carbon) is preferred for welded construction to minimize sensitization risk.</li>
              <li><strong>ASTM A182 F316/316L</strong> — Superior corrosion resistance to F304 due to molybdenum addition. The preferred grade for chemical process, marine, and pharmaceutical applications.</li>
              <li><strong>ASTM A182 F321</strong> — Titanium-stabilized austenitic, resistant to sensitization in high-temperature service (800°F–1,500°F range).</li>
              <li><strong>ASTM A182 F347/347H</strong> — Niobium-stabilized, similar to F321, preferred for refinery furnace outlet piping and high-temperature heat exchangers.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Duplex and Super Duplex Stainless Steel</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>ASTM A182 F51 / F60</strong> (UNS S31803 / S32205) — Duplex stainless, approximately twice the yield strength of austenitic grades, excellent resistance to chloride stress corrosion cracking. Used in offshore, desalination, and chemical processing.</li>
              <li><strong>ASTM A182 F53</strong> (UNS S32750), <strong>F55</strong> (UNS S32760) — Super duplex, even higher strength and corrosion resistance. Specified for highly aggressive chloride environments such as seawater cooling, bleaching, and produced water handling.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Alloy Steel Flanges</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>ASTM A182 F11, F22</strong> — Chromium-molybdenum alloy steels for high-temperature service (up to 1,100°F). Standard in power generation, reformer piping, and refinery high-temperature circuits.</li>
              <li><strong>ASTM A182 F91</strong> — Advanced 9Cr-1Mo-V alloy, capable of operating at temperatures up to 1,200°F (650°C). Increasingly specified in ultra-supercritical power generation and refinery fired heater piping.</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Nickel Alloys</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Inconel 625</strong> (UNS N06625) — Exceptional corrosion resistance in highly aggressive environments including concentrated acids, seawater, and flue gases. Frequently specified for offshore riser flanges and chemical reactor nozzles.</li>
              <li><strong>Hastelloy C-276</strong> (UNS N10276) — Outstanding resistance to reducing acids, chlorides, and mixed acid environments. Standard in FGD (flue gas desulfurization) systems and chemical plant waste acid handling.</li>
              <li><strong>Monel 400</strong> (UNS N04400) — Copper-nickel alloy with exceptional resistance to hydrofluoric acid and seawater. Specified in HF alkylation units and marine systems.</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Sour Service Stainless Forged Flanges & NACE MR0175 Compliance</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              In upstream oil & gas production, sour gas and wet hydrogen sulfide (H₂S) streams represent one of the most hazardous operating environments. At Remax Forge, our sour service forged flanges are engineered to fully comply with <strong>NACE MR0175 / ISO 15156</strong> standards:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 space-y-3">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Key Technical Specifications for Sour Service Flanges:</h4>
              <ul className="list-disc pl-5 text-sm space-y-2 text-slate-600">
                <li><strong>Strict Hardness Controls:</strong> Carbon steel such as ASTM A105 must not exceed 22 HRC (about 237 HBW). Forged stainless steel F316/F316L and Duplex 2205 undergo controlled solution annealing and water quenching to ensure no deleterious intermetallic phases (sigma phase).</li>
                <li><strong>HIC & SSC Resistance:</strong> Where the project specification requires it, materials are qualified for sulfide stress cracking (SSC) per NACE TM0177 and for hydrogen-induced cracking (HIC) per NACE TM0284.</li>
                <li><strong>Material Traceability & 3.1 MTC:</strong> Every sour service flange is engraved with heat numbers, batch codes, and supplied with EN 10204 3.1 certification verifying chemical composition (restricted sulfur & phosphorus limits), tensile properties, and 100% PMI verification.</li>
              </ul>
            </div>


            {/* Section: Bolting and Gaskets */}
            <h2 id="bolting" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Bolting and Gaskets — The Complete Flange Joint System</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A flange is only as reliable as the complete joint system — including the bolts, nuts, and gasket. Under-specifying any of these components negates the pressure capability of the best flange.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Bolting Standards</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>ASTM A193 B7</strong> stud bolts with <strong>ASTM A194 2H</strong> heavy hex nuts are the standard pairing for Class 150# through 2500# carbon and alloy steel flanges in most process service. B7 is a chromium-molybdenum alloy steel that is heat-treated to achieve high strength.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>ASTM A193 B8M</strong> (316 SS) stud bolts with <strong>ASTM A194 8M</strong> nuts are used for stainless steel flanges in corrosive service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              For sour service (H₂S-containing), bolting must comply with NACE MR0175/ISO 15156, which limits the hardness and heat treatment of bolts to prevent sulfide stress cracking. A193 B7M studs with A194 2HM nuts (hardness-limited versions of B7 / 2H) are the standard sour-service bolting.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Gasket Types and Seating Requirements</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Gasket Type</th>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Typical Application</th>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Relative Seating Stress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Full-face non-metallic</td><td className="py-3 px-4 text-slate-600 text-sm">Flat face, Class 150# utility</td><td className="py-3 px-4 text-slate-600 text-sm">Low</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Spiral wound with inner ring</td><td className="py-3 px-4 text-slate-600 text-sm">Class 150# through 2500# RF</td><td className="py-3 px-4 text-slate-600 text-sm">Moderate</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Spiral wound with inner and outer ring</td><td className="py-3 px-4 text-slate-600 text-sm">High-pressure, precision alignment</td><td className="py-3 px-4 text-slate-600 text-sm">Moderate-high</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Kamprofile (grooved metal with graphite facing)</td><td className="py-3 px-4 text-slate-600 text-sm">High-pressure, elevated temperature</td><td className="py-3 px-4 text-slate-600 text-sm">High</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Ring Type Joint (octagonal or oval)</td><td className="py-3 px-4 text-slate-600 text-sm">Class 600# and above, RTJ facing</td><td className="py-3 px-4 text-slate-600 text-sm">Very high</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">Metal-jacketed</td><td className="py-3 px-4 text-slate-600 text-sm">Heat exchangers, special service</td><td className="py-3 px-4 text-slate-600 text-sm">High</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Proper Bolt Torquing</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Gasket seating requires a specific compressive load achieved through controlled bolt torquing. Under-torquing leaves the gasket insufficiently seated — a recipe for leakage. Over-torquing can crush spiral wound gaskets, extrude soft gaskets, or yield studs, all of which reduce the effective bolt load in service.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              For critical joints, hydraulic bolt tensioning tools are used to achieve precise, uniform bolt loads. Remax Forge & Fittings' technical team can provide bolt torque recommendations for specific gasket/flange/stud combinations on request.
            </p>


            {/* Section: Inspection */}
            <h2 id="inspection" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Inspection, Testing, and Documentation Requirements</h2>
            
            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Mill Test Certificates (MTCs)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Every flange shipment should be accompanied by MTCs that document:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Heat number and lot number</li>
              <li>Chemical composition (carbon, manganese, phosphorus, sulfur, silicon, chromium, molybdenum, etc.)</li>
              <li>Mechanical properties (yield strength, tensile strength, elongation, reduction of area, Charpy impact values if required)</li>
              <li>Confirmation of compliance with the applicable ASTM standard and heat treatment condition</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Remax Forge & Fittings provides EN 10204 Type 3.1 MTCs (issued by the manufacturer's quality department) as standard, and Type 3.2 (countersigned by an independent inspection body) on request for critical applications.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Dimensional Inspection</h3>
            <p className="text-slate-600 leading-relaxed mb-4">All flanges are dimensionally inspected against ASME B16.5 or B16.47 requirements, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Flange face outside diameter and bore diameter</li>
              <li>Bolt circle diameter and bolt hole diameter</li>
              <li>Raised face diameter and height</li>
              <li>Overall flange thickness and hub dimensions</li>
              <li>Flatness of the sealing face</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Hardness Testing</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              As-forged and heat-treated flanges are hardness tested to verify proper mechanical properties. For A105 carbon steel, maximum hardness is 187 HBW. Duplex and super duplex flanges are hardness tested to confirm phase balance — excessive ferrite or sigma phase will be indicated by hardness outside the acceptable range.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Positive Material Identification (PMI)</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              For alloy, stainless, and exotic alloy flanges, positive material identification using X-ray fluorescence (XRF) or optical emission spectroscopy (OES) confirms that the correct alloy has been used. This is mandatory on many oil & gas and petrochemical projects where alloy mix-up has caused catastrophic failures.
            </p>


            <h2 id="faq" className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2 scroll-mt-24">Pipe Flange FAQs</h2>
            <div className="space-y-6 mb-12">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-12">
              <p className="font-bold text-slate-800 mb-3">Related guides</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  ['/blogs/flange-face-types/', 'Flange face types explained'],
                  ['/blogs/rtj-vs-raised-face-flange/', 'RTJ vs raised face flange'],
                  ['/blogs/asme-b16-5-vs-b16-47/', 'ASME B16.5 vs B16.47'],
                  ['/blogs/blind-flange-vs-spectacle-blind/', 'Blind flange vs spectacle blind'],
                  ['/blogs/mtc-en10204-explained/', 'EN 10204 MTC explained'],
                  ['/tech-info/chemical-composition/', 'Steel chemical composition chart'],
                ].map(([to, label]) => (
                  <li key={to}><Link to={to} className="text-[#D71920] font-semibold hover:underline">{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Section: Conclusion */}
            <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71920] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Conclusion: The Right Flange, Every Time</h2>
              <p className="text-slate-300 leading-relaxed mb-4 relative z-10">
                Flanges seem simple, but the engineering behind them — and the consequences of getting them wrong — are anything but. The right combination of flange type, facing, pressure class, material, gasket, and bolting determines whether your piping system performs reliably for its design life or becomes a maintenance liability.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                Remax Forge & Fittings manufactures forged flanges to ASME B16.5 and B16.47 in a comprehensive range of materials and pressure classes. Our quality system ensures full traceability, compliance with applicable standards, and documentation that meets the requirements of the world's most demanding end users — EPC contractors, national oil companies, and major chemical producers.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-medium">
                Reach out to our technical team to discuss your requirements. We offer standard and custom sizes, expedited delivery from stock, and third-party inspection support.
              </p>
              
              <Link 
                to="/contact/" 
                className="inline-flex items-center gap-2 bg-[#D71920] text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#D71920] transition-colors relative z-10 shadow-lg"
              >
                Contact Remax Forge & Fittings <ChevronRight size={18} />
              </Link>
            </div>

          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
             <Link to="/blogs/" className="flex items-center gap-2 text-slate-500 hover:text-[#D71920] font-medium transition-colors">
               <ArrowLeft size={16} /> Back to Blogs
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PipeFlangesGuide;
