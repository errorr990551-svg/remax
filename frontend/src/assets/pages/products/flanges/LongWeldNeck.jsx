import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const LongWeldNeck = () => {
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
    { icon: "🏭", title: "Eliminates Nipple Weld", desc: "One less weld at the most stress-concentrated point (vessel shell-to-nozzle junction) → fewer leak points → safer vessel." },
    { icon: "📋", title: "Code Compliant", desc: "Meets ASME Section VIII minimum nozzle projection requirements directly — no need for a separate nipple." },
    { icon: "🔍", title: "Radiographable", desc: "The long neck allows full radiographic examination of the vessel shell weld without obstruction from the flange face." },
    { icon: "🌡️", title: "Thermal Stress Buffer", desc: "Extended neck reduces thermal gradient between a hot vessel and the cooler flanged piping connection." },
    { icon: "⚙️", title: "Custom Bored", desc: "Neck bore exactly matches the connecting pipe schedule — zero flow restriction, zero turbulence at the nozzle entry." },
    { icon: "🔧", title: "Simplifies Installation", desc: "One forged piece replaces a short WN flange + separate pipe nipple + two additional welds." },
  ];

  const applications = [
    "Pressure vessels — nozzle connections on columns, reactors, drums, heat exchangers",
    "Offshore platforms — ASME Section VIII process vessels and separators",
    "Oil & Gas separators — nozzle outlets for instrumentation and process lines",
    "Chemical reactors — top head nozzles and side-wall connections",
    "Heat exchangers — shell-side and tube-side nozzle connections",
    "Storage tanks — roof nozzles and shell nozzles requiring code minimum projection",
    "LNG vessels — cryogenic vessel nozzles with special impact test requirements",
    "Nuclear plant pressure vessels — where nozzle weld traceability is mandatory",
  ];

  const specsRows = [
    { label: "Product Names", value: "Long Weld Neck Flange, LWN Flange, Long Hub Flange, Nozzle Flange, LWNCF (Companion Flange variant)" },
    { label: "Size Range", value: "2\" (50 NB) to 24\" (600 NB) standard; larger per ASME B16.47 on request" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500#" },
    { label: "Face Types", value: "RF (LWNRF), FF (LWNFF), RTJ (LWNRTJ) — specify when ordering" },
    { label: "Standards", value: "ASME B16.5 (flange face/bolt); ASME Sec. VIII Div.1 (vessel nozzle); ASME B31.3" },
    { label: "Neck Length", value: "Made to order — buyer must specify required neck length (in mm or inches)" },
    { label: "Bore Schedule", value: "Any schedule (SCH 40/80/120/160/XXS) — machined to match connecting pipe" },
    { label: "Custom Options", value: "Special neck lengths, taper bore, counterbore, hub taper angle; NACE/low-temp/impact tested" },
    { label: "MANDATORY INFO", value: "NPS + Pressure Class + Material + Neck Length + Bore Schedule + Face Type" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 available for pressure vessel applications" },
    { label: "Lead Time", value: "3–6 weeks (all LWN flanges are made to order)" },
  ];

  const neckLengthTable = [
    { nps: "2\"", min: "150 mm", purpose: "Clear vessel wall + insulation" },
    { nps: "4\"", min: "200 mm", purpose: "Clear vessel wall + insulation" },
    { nps: "6\"", min: "250 mm", purpose: "Clear vessel wall + insulation" },
    { nps: "8\"", min: "300 mm", purpose: "Clear vessel wall + insulation" },
    { nps: "10\"", min: "350 mm", purpose: "Clear vessel wall + insulation" },
    { nps: "12\"", min: "400 mm", purpose: "Clear vessel wall + insulation" },
  ];

  const comparisonData = [
    { feature: "What it replaces", lwn: "WN flange + separate pipe nipple", wn: "Connects pipe to pipe", slipOn: "Connects pipe to pipe" },
    { feature: "Primary Use", lwn: "Pressure vessel nozzle", wn: "Pipeline connections", slipOn: "General pipeline" },
    { feature: "Neck Length", lwn: "Extended (custom — to order)", wn: "Short tapered hub", slipOn: "No hub" },
    { feature: "Weld Count at Vessel", lwn: "1 weld (neck to vessel shell)", wn: "2 welds (WN to nipple + nipple to vessel)", slipOn: "Not used on vessels" },
    { feature: "Code Requirement", lwn: "Satisfies ASME VIII nozzle projection directly", wn: "Requires additional nipple", slipOn: "N/A" },
    { feature: "Radiography", lwn: "Yes — full access for shell weld RT", wn: "Limited by short hub", slipOn: "No" },
    { feature: "Lead Time", lwn: "3–6 weeks (made to order)", wn: "7–14 days (standard stock)", slipOn: "7–14 days (standard stock)" },
    { feature: "Best For", lwn: "Vessel nozzles, code compliance", wn: "Critical piping", slipOn: "General process piping" },
  ];

  const TrustBar = () => (
    <div className="bg-[#0F172A] rounded-2xl px-6 py-4 mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {[{ icon: "🏆", text: "ISO 9001:2015 Certified" }, { icon: "✅", text: "20+ Years Experience" }, { icon: "🌍", text: "45+ Countries Exported" }, { icon: "📋", text: "EN 10204 3.1 MTC Standard" }, { icon: "🔬", text: "In-House Testing Lab" }, { icon: "🏭", text: "3–6 Week Lead Time (MTO)" }].map((badge, idx) => (
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
            <ChevronRight size={14} /><span className="text-[#D71920] font-medium">Long Weld Neck Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Long Weld Neck Flange Manufacturer in India | LWN / LWNF / Long Hub / Nozzle Flange | ASME B16.5 | Remax Forge
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
            <img src="/images/long-weld-neck-flange-500x500.webp" alt="Long Weld Neck Flange LWN Nozzle Flange Pressure Vessel ASME Manufacturer Mumbai India" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Extended neck — acts as a pressure vessel nozzle", desc: "Unlike a standard WN flange, the LWN neck is long enough to serve as the nozzle itself — eliminating the need for a separate pipe nipple." },
                { title: "Fewer welds = safer vessel (ASME Sec. VIII)", desc: "LWN satisfies ASME Section VIII minimum nozzle projection requirements in a single forged piece — one weld replaces two." },
                { title: "Always made to order — specify neck length + bore schedule", desc: "Neck length and bore schedule are custom per project. Must specify: NPS + Class + Material + Neck Length + Bore Schedule + Face Type." },
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

        {/* MTO callout */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle size={28} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-extrabold text-amber-800 text-lg mb-2">Important: Long Weld Neck Flanges are Made-to-Order</h3>
            <p className="text-amber-700 text-sm leading-relaxed font-medium mb-3">
              LWN Flanges are <strong>not standard stock items</strong>. Every LWN flange is manufactured to your specific neck length, bore schedule, and face type. To request a quote, we need:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-amber-800 font-bold">
              {["1. NPS (e.g. 8\")", "2. Pressure Class (e.g. 600#)", "3. Material (e.g. A182 F316L)", "4. Neck Length (e.g. 300mm)", "5. Bore Schedule (e.g. SCH 80)", "6. Face Type (RF / FF / RTJ)"].map((item, idx) => (
                <div key={idx} className="bg-amber-100 rounded-lg px-3 py-2">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What is a Long Weld Neck Flange?</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Long Weld Neck Flange (LWN Flange)</strong> is essentially a Weld Neck Flange with an <strong>extended neck (hub)</strong> that is long enough to serve as a nozzle neck on a pressure vessel, column, drum, or heat exchanger. Instead of welding a short WN flange to a separate pipe nipple, the LWN eliminates the nipple entirely — <strong>the long neck IS the nozzle</strong>.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations & Variants</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[{ abbr: "LWN", full: "Long Weld Neck" }, { abbr: "LWNRF", full: "LWN Raised Face" }, { abbr: "LWNFF", full: "LWN Flat Face" }, { abbr: "LWNRTJ", full: "LWN Ring Type Joint" }, { abbr: "LWNCF", full: "Long WN Companion Flange" }, { abbr: "HB / EB", full: "Heavy Barrel / Equal Barrel" }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-sm">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-3">Key Distinction — LWN vs Standard Weld Neck Flange:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="font-bold text-slate-800 text-sm mb-2">Standard WN Flange</p>
                  <p className="text-slate-600 text-sm">Short tapered hub → connects to a <strong>pipe</strong> in a pipeline system. Hub length is fixed by ASME B16.5.</p>
                </div>
                <div className="p-4 bg-red-50/40 border border-red-100 rounded-xl">
                  <p className="font-bold text-slate-800 text-sm mb-2">Long WN (LWN) Flange</p>
                  <p className="text-slate-600 text-sm">Extended neck → connects directly as a <strong>nozzle on a pressure vessel</strong>. Neck length specified by buyer.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For pipeline connections, see our standard <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a>. For permanent vessel nozzle closures, see our <a href="/products/flanges/blind-flange" className="text-[#D71920] hover:underline font-extrabold">Blind Flange</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Standard Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Complete specifications for Long Weld Neck Flanges — all made to order:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead><tr className="bg-[#0F172A] text-white"><th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">Property</th><th className="px-6 py-4 font-bold uppercase tracking-wider">Detail</th></tr></thead>
              <tbody>
                {specsRows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} ${row.label === 'MANDATORY INFO' ? 'bg-red-50/40' : ''}`}>
                    <td className={`px-6 py-4 font-bold align-top border-r border-slate-200 ${row.label === 'MANDATORY INFO' ? 'text-red-700' : 'text-[#0F172A]'}`}>{row.label}</td>
                    <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Material Grades */}
        <div id="materials" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Long Weld Neck Flange Material Grades</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">We forge LWN Flanges in all standard and exotic materials for pressure vessel service — including NACE MR0175/MR0103 compliant and low-temperature impact tested grades:</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Long Weld Neck Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp" alt="Long Weld Neck Flange material grades" className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Long Weld Neck Flange Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">LWN flange faces per ASME B16.5; nozzle design per ASME Section VIII Div.1; piping per ASME B31.3:</p>
          <StandardsTable />
        </div>

        {/* Dimensions / Ordering Guide */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">LWN Flange Dimensions & Ordering Guide</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            LWN Flanges are made-to-order. The face OD, bolt circle, and bolt holes follow ASME B16.5 for the selected NPS and class — same as a standard WN Flange. <strong>What changes is the neck length</strong>, which you specify:
          </p>

          {/* Neck Length Reference Table */}
          <div className="mb-8">
            <h3 className="text-base font-bold text-slate-800 mb-4">Typical Minimum Neck Lengths (Reference Only)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead><tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-3 font-bold border-r border-slate-700">NPS</th>
                  <th className="px-5 py-3 font-bold border-r border-slate-700">Typical Min. Neck Length</th>
                  <th className="px-5 py-3 font-bold">Purpose</th>
                </tr></thead>
                <tbody>
                  {neckLengthTable.map((row, idx) => (
                    <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <td className="px-5 py-3 font-bold text-slate-800 border-r border-slate-200">{row.nps}</td>
                      <td className="px-5 py-3 text-[#D71920] font-bold border-r border-slate-200">{row.min}</td>
                      <td className="px-5 py-3 text-slate-600">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic mt-2">Actual neck length is specified by the vessel designer per ASME Section VIII nozzle projection requirements. Contact us for engineering assistance.</p>
          </div>

          {/* Ordering checklist */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="font-extrabold text-lg mb-4">📋 To Order an LWN Flange — Send Us These 7 Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "1. NPS — Nominal Pipe Size (e.g. 8\")",
                "2. Pressure Class (e.g. 600#)",
                "3. Material Grade (e.g. A182 F316L)",
                "4. Neck Length required (e.g. 300mm — face to weld end)",
                "5. Bore Schedule (e.g. SCH 80 — to match connecting pipe)",
                "6. Face Type (RF / FF / RTJ)",
                "7. Special requirements (NACE, low-temp, impact tested, PWHT)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="text-[#D71920] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <button onClick={() => openQuotePopup()} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all">Request LWN Quote <ArrowRight size={16} /></button>
          </div>
        </div>

        {/* Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Flange Face Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">LWN Flanges are available as LWNRF (Raised Face — most common), LWNFF (Flat Face), and LWNRTJ (Ring Type Joint — for high-pressure critical vessel connections).</p>
          <FlangeFaceTypes />
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Why Specify Long Weld Neck on Pressure Vessels?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-[#D71920]/30 transition-all">
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div><h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4><p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Industries & Applications</h2>
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4">✓ Primary Applications — Pressure Vessel Nozzles</h3>
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
              <p className="text-slate-600 text-sm font-medium mb-6">For pressure vessel service, LWN flanges undergo additional testing including charpy impact testing (for low-temperature), NACE hardness testing, and 100% UT on critical bore areas.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">EN 10204 3.1 MTC standard; 3.2 available for pressure vessel ASME Section VIII applications. Full traceability from raw billet to finished nozzle flange.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">LWN Flange vs Standard WN Flange vs Slip On</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Understanding the key differences helps you select the right flange for your application:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Long Weld Neck</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Weld Neck</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Slip On</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.lwn}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.wn}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.slipOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Weld Neck Flange →</a>
            <a href="/products/flanges/blind-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Blind Flange →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          <div id="export"><h2 className="sr-only">Export Markets</h2><ExportMarkets /></div>
        </div>

        <WhyChooseRemax />

        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Download Long Weld Neck Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Technical catalogue including typical neck lengths, material grades, ordering guide, face types, and ASME B16.5 flange face dimensions.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get LWN Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Common questions about Long Weld Neck Flanges — LWN vs standard WN, how to specify neck length, ASME Sec. VIII compliance, and special materials.</p>
          <FlangeFAQs slug="long-weld-neck-flange" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Products</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Compare our complete range of industrial flanges for your piping and vessel project.</p>
          <RelatedFlanges activeSlug="long-weld-neck-flange" />
        </div>

      </div>
    </div>
  );
};

export default LongWeldNeck;
