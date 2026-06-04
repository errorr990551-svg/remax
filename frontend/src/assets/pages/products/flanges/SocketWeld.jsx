import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeDimensionsTable, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const SocketWeld = () => {
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
    { icon: "🔒", title: "Smooth Internal Bore", desc: "Pipe end is fully contained in the socket; no gap or step inside the bore — excellent flow characteristics." },
    { icon: "⚡", title: "High Pressure Rated", desc: "Used in Class 3000# and 6000# (forged ratings) for small bore — higher pressure than Slip-On of same size." },
    { icon: "🔧", title: "One Weld Only", desc: "Single external fillet weld is simpler than Slip-On (which requires two welds — inside and outside)." },
    { icon: "📐", title: "Self-Aligning", desc: "Pipe bottoms out in the socket, ensuring concentricity and proper positioning before tack welding." },
    { icon: "🏗️", title: "Compact Design", desc: "Low profile makes it suitable for tight spaces and congested piping areas." },
    { icon: "💪", title: "Better Than Slip-On", desc: "Socket provides additional mechanical support at the joint — fatigue strength is 50% greater than Slip-On." },
  ];

  const limitations = [
    "Small bore only — primarily NPS ½\" to 3\" (not economical or standard for larger sizes)",
    "Crevice corrosion risk — the socket bottom creates a crevice that can trap corrosive media",
    "NOT for cryogenic or corrosive service — crevice issue; use Weld Neck instead",
    "Radiographic inspection difficult — internal weld area is not accessible for RT",
    "Code requires 1.6mm gap — must be maintained during assembly; gap error = weld failure",
  ];

  const applications = [
    "High-pressure instrument and sampling lines",
    "Chemical injection lines (small bore, high pressure)",
    "Hydraulic system piping",
    "Offshore instrument tapping connections",
    "Utility headers (steam, air, nitrogen, purge gas) in small bore",
    "Analyser connections and gauge tapping points",
    "Compressor suction/discharge small-bore connections",
    "Nuclear plant instrument lines (with special material certifications)",
  ];

  const specsRows = [
    { label: "Product Names", value: "Socket Weld Flange, SW Flange, SWRF, SWFF, Socket Flange" },
    { label: "Primary Size Range", value: "½\" (15 NB) to 3\" (80 NB) — standard socket weld range" },
    { label: "Extended Range", value: "Up to 4\" available; beyond 3\" consider Weld Neck instead" },
    { label: "Pressure Classes", value: "150#, 300#, 600#, 900#, 1500#, 2500# (ASME B16.5); Forged Class 3000#, 6000# (ASME B16.11)" },
    { label: "Face Types", value: "RF (most common), FF; RTJ generally not used at these small sizes" },
    { label: "Standards", value: "ASME B16.5, ASME B16.11 (Forged Fittings), ASME B31.3 (Process Piping)" },
    { label: "Mandatory Gap", value: "1.6mm gap at pipe bottom before welding (ASME B31.3 / B31.1 requirement)" },
    { label: "Crevice Note", value: "Not recommended for highly corrosive or sanitary service — crevice at socket bottom" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 on request" },
    { label: "Lead Time", value: "7–14 days standard" },
  ];

  const comparisonData = [
    { feature: "Weld Joints Required", sw: "1 external fillet weld", wn: "1 butt weld (full penetration)", slipOn: "2 fillet welds (inside + outside)" },
    { feature: "Primary Size Range", sw: "½\" to 3\" (small bore)", wn: "½\" to 60\" (all sizes)", slipOn: "½\" to 48\" (all sizes)" },
    { feature: "Pressure Rating (small bore)", sw: "Highest (3000# / 6000# forged)", wn: "Highest per class", slipOn: "Lowest" },
    { feature: "Radiography (RT)", sw: "Not feasible (fillet weld)", wn: "Yes — 100% RT capable", slipOn: "Not feasible" },
    { feature: "Crevice Risk", sw: "Yes — socket bottom", wn: "None — butt weld", slipOn: "Minor — inner bead gap" },
    { feature: "Cryogenic Service", sw: "NOT recommended", wn: "Yes (recommended)", slipOn: "Not recommended" },
    { feature: "Code Gap Required?", sw: "Yes — 1.6mm mandatory", wn: "No — exact bore match", slipOn: "No" },
    { feature: "Best For", sw: "Small-bore, high-pressure lines", wn: "Critical/all-service", slipOn: "General/moderate service" },
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
            <ChevronRight size={14} /><span className="text-[#D71920] font-medium">Socket Weld Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Socket Weld Flange Manufacturer in India | SW / SWRF / SWFF | ASME B16.5 | Remax Forge
          </h1>
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
            <img src="/images/Socket-Weld-Flanges.webp" alt="Socket Weld Flange ASME B16.5 Small Bore High Pressure Manufacturer Mumbai India" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Socket-bore — pipe inserts and fillet welds outside only", desc: "Single external fillet weld; internal bore is smooth and flush once installed — no weld protrusion into flow path." },
                { title: "Mandatory 1.6mm gap before welding", desc: "Per ASME B31.3: withdraw pipe 1.6mm from socket bottom before welding. This gap prevents thermal expansion cracking during welding and in service." },
                { title: "Primarily ½\" to 3\" — small-bore high-pressure", desc: "Designed for small bore, high pressure instrument and process lines. Higher pressure rated than Slip-On of same size." },
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

        {/* ASME Gap Callout */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle size={28} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-extrabold text-red-800 text-lg mb-2">⚠️ Critical Installation Note — ASME B31.3 Code Requirement</h3>
            <p className="text-red-700 text-sm leading-relaxed font-medium">
              Per ASME B31.3 Process Piping Code: After inserting the pipe to the bottom of the socket, <strong>withdraw the pipe back approximately 1.6mm (1/16") BEFORE welding.</strong> This gap is <strong>MANDATORY</strong> to prevent buckling/cracking of the pipe from thermal expansion during welding and during operation. Failure to leave this gap is a code violation and a common cause of weld failure.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What is a Socket Weld Flange?</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Socket Weld Flange (SW Flange)</strong> has a socket-type bore — the pipe end is inserted into the socket and then secured with a <strong>single fillet weld on the outside of the socket only</strong>. The internal bore of the flange is smooth and flush once installed, providing excellent flow characteristics.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[{ abbr: "SW", full: "Socket Weld" }, { abbr: "SWRF", full: "Socket Weld Raised Face" }, { abbr: "SWFF", full: "Socket Weld Flat Face" }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-lg">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-3">Key Technical Points:</p>
              <ul className="space-y-2">
                {[
                  "Primary range: NPS ½\" to 3\" — socket weld is designed for small-bore, high-pressure piping",
                  "Higher pressure rated than Slip-On of same size because of the contained socket design",
                  "Cannot be used for cryogenic service (socket creates a potential leak trap due to thermal cycling)",
                  "NOT recommended for corrosive media (crevice corrosion can occur at bottom of socket)",
                  "One weld only (external fillet) — no internal weld access possible once assembled",
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0"></span><span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For sizes above 3" or critical/cryogenic service, our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a> is the preferred choice. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Standard Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">The table below answers the most common buyer questions about Socket Weld Flanges in one place:</p>
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
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Socket Weld Flange Material Grades</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">We forge Socket Weld Flanges in Stainless Steel, Duplex, Super Duplex, Carbon Steel, Alloy Steel, and Nickel Alloys (Inconel, Hastelloy, Monel):</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Socket Weld Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp" alt="Socket Weld Flange material grades" className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Socket Weld Flange Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Manufactured per ASME B16.5, B16.11, ASME B31.3, DIN, EN, JIS, and BS standards:</p>
          <StandardsTable />
        </div>

        {/* Dimensions */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">ASME B16.5 Socket Weld Flange Dimensions Table</h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">Class 150# dimensions including socket bore and socket depth. Dimensions per ASME B16.5. Weights are approximate for Carbon Steel A105:</p>
          <p className="text-xs text-slate-500 italic mb-8">Note: Socket bore = Pipe OD + 1.2–1.5mm clearance. Contact us for Class 3000# / 6000# per ASME B16.11.</p>
          <FlangeDimensionsTable slug="socket-weld-flange" altText="ASME B16.5 Socket Weld Flange dimensions chart" />
        </div>

        {/* Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Flange Face Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Socket Weld Flanges are primarily available as SWRF (Raised Face — standard) and SWFF (Flat Face). RTJ is generally not used at small bore sizes.</p>
          <FlangeFaceTypes />
        </div>

        {/* Advantages & Limitations */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Advantages & Limitations of Socket Weld Flange</h2>
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
            <h3 className="text-lg font-bold text-slate-800 mb-4">✓ Primary Applications — Small Bore, High Pressure</h3>
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
              <p className="text-slate-600 text-sm font-medium mb-6">Rigorous zero-defect quality control including visual inspection, dimensional checking, PMI, UT, hydrostatic testing, and magnetic particle examination.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Full documentation package including EN 10204 3.1 MTC, NACE compliance, heat treatment records, and third-party inspection from SGS, Lloyd's, and DNV.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Socket Weld vs Other Flange Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Use this quick comparison to verify Socket Weld is the right choice for your application:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Socket Weld</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Weld Neck</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Slip On</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.sw}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.wn}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.slipOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Weld Neck Flange →</a>
            <a href="/products/flanges/slip-on-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Slip On Flange →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          <div id="export"><h2 className="sr-only">Export Markets</h2><ExportMarkets /></div>
        </div>

        <WhyChooseRemax />

        {/* PDF CTA */}
        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Download Socket Weld Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Complete technical catalogue including dimension tables, socket bore data, material grades, standards, and weight charts — ready for your RFQ.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get Instant Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Common questions about Socket Weld Flanges — including max size, the 1.6mm gap requirement, SW vs Slip-On, cryogenic service, and standards.</p>
          <FlangeFAQs slug="socket-weld-flange" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Products</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Compare our comprehensive range of industrial flanges for your piping project.</p>
          <RelatedFlanges activeSlug="socket-weld-flange" />
        </div>

      </div>
    </div>
  );
};

export default SocketWeld;
