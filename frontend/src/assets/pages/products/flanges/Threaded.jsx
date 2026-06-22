import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeDimensionsTable, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const Threaded = () => {
  const { openQuotePopup } = useQuotePopup();
  const scrollToSection = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  const navItems = [
    { label: "Overview", target: "overview" },
    { label: "Specifications", target: "specifications" },
    { label: "Material Grades", target: "materials" },
    { label: "Dimensions", target: "dimensions" },
    { label: "Quality & Testing", target: "quality" },
    { label: "FAQ", target: "faq" }
  ];

  const advantages = [
    { icon: "🔥", title: "No Welding Required", desc: "Fastest installation possible — no hot work permit, no skilled welder, no heat distortion of pipe." },
    { icon: "🚫", title: "ATEX / Ex Zone Safe", desc: "The ONLY standard flange type for explosive atmosphere zones where welding is strictly prohibited." },
    { icon: "♻️", title: "Reusable", desc: "Can be removed, inspected, re-sealed with fresh thread compound, and reinstalled repeatedly." },
    { icon: "⚡", title: "Fast Installation", desc: "Thread engagement takes minutes vs hours for welded joints — significant labour cost saving." },
    { icon: "🏗️", title: "No Heat Distortion", desc: "No weld shrinkage or heat-affected zone (HAZ) to worry about — pipe dimensions unchanged after installation." },
  ];

  const limitations = [
    "Not for high-pressure cyclic service (vibration loosens threads → leakage over time)",
    "Not recommended above Class 600# — leakage risk at higher pressures",
    "Thread sealant required — without PTFE tape or thread compound, joint will leak",
    "Temperature range more limited vs welded flanges",
    "Cannot be used with galvanized pipe in food/pharma applications (zinc contamination risk)",
  ];

  const applications = [
    "Natural gas distribution pipelines (low to medium pressure)",
    "ATEX / Ex hazardous area piping where hot work is prohibited",
    "Galvanized steel piping systems (HVAC, water supply)",
    "Compressed air distribution systems",
    "Low-pressure steam utility headers",
    "Instrument impulse lines (small bore, low pressure)",
    "Temporary test connections and process sampling points",
    "Agricultural irrigation piping",
    "Fire suppression systems (sprinkler lines, deluge headers)",
  ];

  const specsRows = [
    { label: "Product Names", value: "Threaded Flange, Screwed Flange, THRF, THFF, NPT Flange, BSP Flange" },
    { label: "Size Range", value: "½\" (15 NB) to 4\" (100 NB) — standard threaded range; up to 6\" on request" },
    { label: "Pressure Classes", value: "150#, 300#, 600#, 900# (ASME B16.5); higher classes not recommended for threaded joints" },
    { label: "Thread Types", value: "NPT (ASME B1.20.1) — taper thread, US standard; BSP/BSPT (ISO 7/1) — British/international" },
    { label: "Face Types", value: "THRF (Raised Face), THFF (Flat Face)" },
    { label: "Standards", value: "ASME B16.5, ASME B1.20.1 (NPT), ISO 7/1 (BSP), BSEN 10226, BS 21" },
    { label: "Thread Sealant", value: "PTFE tape, Loctite 565, Rector Seal or equivalent thread compound required" },
    { label: "No Hot Work", value: "Zero welding required — suitable for ATEX / Ex hazardous zones" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 on request" },
    { label: "Lead Time", value: "7–14 days standard" },
  ];

  const comparisonData = [
    { feature: "Welding Required?", th: "❌ No welding at all", wn: "Yes — 1 butt weld", slipOn: "Yes — 2 fillet welds" },
    { feature: "ATEX / Ex Zone Safe?", th: "✅ Yes — primary use case", wn: "No (welding required)", slipOn: "No (welding required)" },
    { feature: "Installation Speed", th: "Fastest (thread & seal)", wn: "Slowest (precision weld)", slipOn: "Moderate" },
    { feature: "Max Pressure Class", th: "600# recommended max", wn: "2500# (all classes)", slipOn: "600# preferred max" },
    { feature: "Cyclic / Vibration", th: "NOT recommended", wn: "Best choice", slipOn: "Not recommended" },
    { feature: "Reusable / Dismantled?", th: "Yes — unscrew and re-seal", wn: "No — must cut weld", slipOn: "No — must cut weld" },
    { feature: "Thread Sealant Needed?", th: "Yes — PTFE tape or compound", wn: "No", slipOn: "No" },
    { feature: "Best For", th: "ATEX zones, low-pressure utilities", wn: "Critical/high-pressure", slipOn: "General process piping" },
  ];

  const TrustBar = () => (
    <div className="bg-[#0F172A] rounded-2xl px-6 py-4 mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {[{ icon: "🏆", text: "ISO 9001:2015 Certified" }, { icon: "✅", text: "20+ Years Experience" }, { icon: "🌍", text: "45+ Countries Exported" }, { icon: "📋", text: "EN 10204 3.1 MTC Standard" }, { icon: "🔬", text: "In-House Testing Lab" }, { icon: "⚡", text: "7–14 Day Lead Time" }].map((badge, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-white whitespace-nowrap">
          <span className="text-base">{badge.icon}</span><span>{badge.text}</span>
          {idx < 5 && <span className="hidden md:inline text-slate-600 ml-3">|</span>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} /><a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} /><span className="text-slate-400">Flanges</span>
            <ChevronRight size={14} /><span className="text-[#D71920] font-medium">Threaded Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">Threaded Flange Manufacturer in India</h1>
        </div>
      </div>

      <div className="sticky top-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {navItems.map((item, idx) => (
              <button key={idx} onClick={() => scrollToSection(item.target)} className="text-sm font-bold text-slate-600 hover:text-[#D71920] transition-colors">{item.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img src="/images/threaded-flange.webp" alt="Threaded Flange ASME B16.5 NPT BSP Screwed Flange Manufacturer Mumbai India" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Zero welding — screws directly onto pipe thread", desc: "The ONLY standard flange type that requires no welding. Tapered internal thread (NPT or BSP) screws onto the pipe external thread." },
                { title: "ATEX zone safe — approved for no-hot-work areas", desc: "When welding is strictly prohibited in explosive/flammable atmospheres, Threaded Flange is the only compliant solution." },
                { title: "Available in NPT (US) and BSP (International) thread", desc: "Specify NPT (ASME B1.20.1) for US/American standard, or BSP/BSPT (ISO 7/1) for UK and international projects. Not interchangeable." },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit"><CheckCircle2 size={24} className="text-[#D71920]" /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">Request Quote <ArrowRight size={18} /></button>
              <a href="/contact" className="px-6 py-3 rounded font-bold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 transition-all flex items-center gap-2"><Download size={18} className="text-slate-500" /> Download Catalogue</a>
            </div>
          </div>
        </div>

        <TrustBar />

        {/* ATEX callout */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <span className="text-3xl shrink-0">🚫</span>
          <div>
            <h3 className="font-extrabold text-blue-800 text-lg mb-2">When Threaded Flanges Are the ONLY Safe Choice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700 font-medium">
              {[
                "Explosive / flammable atmosphere zones (Ex zones, ATEX areas) — hot work completely prohibited",
                "Post-galvanized piping — galvanized coatings release toxic zinc fumes when welded",
                "Temporary connections that must be dismantled and re-used",
                "Remote locations where welding equipment is unavailable",
                "Low-pressure utility services where installation speed is priority",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">→</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What is a Threaded Flange?</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Threaded Flange</strong> (also called <strong>Screwed Flange</strong>) has a tapered internal thread that screws directly onto the external thread of the pipe — <strong>NO WELDING REQUIRED</strong>. This makes it the ONLY standard flange type that can be installed in environments where welding is strictly prohibited.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations & Thread Standards</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { abbr: "TH / THD", full: "Threaded / Screwed" },
                  { abbr: "THRF", full: "Threaded Raised Face" },
                  { abbr: "THFF", full: "Threaded Flat Face" },
                  { abbr: "NPT", full: "National Pipe Taper (ASME B1.20.1)" },
                  { abbr: "BSP", full: "British Standard Pipe (ISO 7/1)" },
                  { abbr: "BSPT", full: "British Standard Pipe Taper" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-sm">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-amber-700 font-bold mt-3 bg-amber-50 border border-amber-100 rounded-lg p-2">⚠️ NPT and BSP threads are NOT interchangeable — they will not seal properly together. Always specify which thread form when ordering.</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-3">Technical Limitations Buyers Must Know:</p>
              <ul className="space-y-2">
                {[
                  "NOT suitable for cyclic or vibration service (threads can loosen and leak)",
                  "NOT recommended above Class 600# (leakage risk at higher pressure)",
                  "Temperature range is more limited than welded flanges",
                  "Requires thread sealant (PTFE tape or thread compound) to achieve a leak-tight joint",
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span><span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For high-pressure applications requiring welded connections, see our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a>. For small-bore high-pressure welded connections, see <a href="/products/flanges/socket-weld-flange" className="text-[#D71920] hover:underline font-extrabold">Socket Weld Flange</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Standard Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Complete specifications for Threaded / Screwed Flanges — buyer-ready in one table:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead><tr className="bg-[#0F172A] text-white"><th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">Property</th><th className="px-6 py-4 font-bold uppercase tracking-wider">Detail</th></tr></thead>
              <tbody>
                {specsRows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-bold text-[#0F172A] align-top border-r border-slate-200">{row.label}</td>
                    <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Material Grades */}
        <div id="materials" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Threaded Flange Material Grades</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">We manufacture Threaded Flanges in all standard materials — Carbon Steel, Stainless Steel, Duplex, Super Duplex, Alloy Steel, and Nickel Alloys:</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Threaded Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp" alt="Threaded Flange material grades" className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Threaded Flange Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Manufactured per ASME B16.5, ASME B1.20.1 (NPT), ISO 7/1 (BSP), BSEN 10226, BS 21, and DIN standards:</p>
          <StandardsTable />
        </div>

        {/* Dimensions */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">ASME B16.5 Threaded Flange Dimensions Table</h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">Class 150# NPT threaded flanges per ASME B16.5. Weights approximate for Carbon Steel A105:</p>
          <p className="text-xs text-slate-500 italic mb-8">Please specify NPT or BSP thread when ordering. Default is NPT unless specified.</p>
          <FlangeDimensionsTable slug="threaded-flange" altText="ASME B16.5 Threaded Flange NPT BSP dimensions chart" />
        </div>

        {/* Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Flange Face Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Threaded Flanges are available as THRF (Raised Face — most common) and THFF (Flat Face for cast iron or low-pressure mating flanges).</p>
          <FlangeFaceTypes />
        </div>

        {/* Advantages & Limitations */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Advantages & Limitations of Threaded Flange</h2>
          <h3 className="text-lg font-bold text-slate-800 mb-5">✅ Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-green-50/50 border border-green-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div><h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4><p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4"><AlertTriangle size={20} className="text-amber-600 shrink-0" /><h3 className="text-lg font-bold text-amber-800">Limitations — Transparent Disclosure</h3></div>
            <div className="space-y-3">
              {limitations.map((lim, idx) => (
                <div key={idx} className="flex items-start gap-3"><span className="text-amber-600 font-bold shrink-0 mt-0.5">⚠️</span><span className="text-amber-800 text-sm font-medium">{lim}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Industries & Applications</h2>
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4">✓ Primary Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />{app}
                </div>
              ))}
            </div>
          </div>
          <IndustriesApplications />
        </div>

        {/* Testing + Docs */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Testing & Inspection</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Zero-defect quality control — thread form gauging, visual inspection, dimensional checking, PMI, and hydrostatic testing. Thread form verified per ASME B1.20.1 or ISO 7/1 as applicable.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Full documentation package including EN 10204 3.1 MTC, thread inspection records, and third-party inspection from SGS, Lloyd's, and DNV on request.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Threaded Flange vs Other Flange Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Not sure which flange suits your application? This quick comparison covers the key decision factors:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Threaded Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Weld Neck</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Socket Weld</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.th}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.wn}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.slipOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Weld Neck Flange →</a>
            <a href="/products/flanges/socket-weld-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Socket Weld Flange →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          <div id="export"><h2 className="sr-only">Export Markets</h2><ExportMarkets /></div>
        </div>

        <WhyChooseRemax />

        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Download Threaded Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Complete technical catalogue including NPT/BSP dimension tables, material grades, standards, and thread specification data.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get Instant Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Common questions about Threaded Flanges — NPT vs BSP, high-pressure steam, seal welds, thread sealants, and special alloy availability.</p>
          <FlangeFAQs slug="threaded-flange" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Products</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Compare our complete range of industrial flanges for your piping project.</p>
          <RelatedFlanges activeSlug="threaded-flange" />
        </div>

      </div>
    </div>
  );
};

export default Threaded;
