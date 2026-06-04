import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { 
  MaterialGradesTable, 
  StandardsTable, 
  FlangeFaceTypes, 
  TestingInspection, 
  DocumentsCertificates, 
  SurfaceFinish, 
  ExportMarkets, 
  IndustriesApplications, 
  WhyChooseRemax, 
  HowToOrder,
  FlangeDimensionsTable,
  FlangeFAQs,
  RelatedFlanges
} from '../../../components/products/flanges/FlangeCommonContent.jsx';

const Blind = () => {
  const { openQuotePopup } = useQuotePopup();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { label: "Overview", target: "overview" },
    { label: "Specifications", target: "specifications" },
    { label: "Material Grades", target: "materials" },
    { label: "Dimensions", target: "dimensions" },
    { label: "Quality & Testing", target: "quality" },
    { label: "FAQ", target: "faq" }
  ];

  const useCases = [
    { icon: "🔒", title: "System Termination", desc: "Permanently seal the dead end of a pipeline (e.g. future expansion tap-off point)." },
    { icon: "🧪", title: "Pressure Testing", desc: "Isolate a pipe section to hydro-test at 1.5× working pressure per code requirements." },
    { icon: "🛠️", title: "Maintenance Isolation", desc: "Temporarily blank off a nozzle while connected equipment is under maintenance or repair." },
    { icon: "🔮", title: "Future Access Point", desc: "Install now, drill out later when future connection or branch connection is needed." },
    { icon: "⚗️", title: "Vessel Nozzle Closure", desc: "Close unused nozzles on pressure vessels, storage tanks, columns, and reactors." },
    { icon: "🚰", title: "Utility Isolation", desc: "Block off utility connections (steam-out, purge, vent) when not in use." },
  ];

  const primaryApplications = [
    "Oil & Gas — Capping wellhead nozzles, pipeline dead ends, emergency isolation",
    "Refineries — Closing vessel/column/drum nozzles not currently in service",
    "Power Plants — Isolating boiler nozzle during maintenance outages",
    "Chemical Plants — Blanking off reactor nozzles, closing storage tank outlets",
    "Shipbuilding — Sealing ship piping dead ends and emergency blanking",
    "Water Treatment — Isolating pipe sections for maintenance and testing",
    "Pharmaceuticals — Blanking unused vessel ports in sterile systems",
    "Pressure Vessels — Closing head openings and side nozzles",
  ];

  const specsRows = [
    { label: "Product Names", value: "Blind Flange, BL Flange, Dummy Flange, Blank Flange, Blind Plate Flange" },
    { label: "Size Range", value: "½\" (15 NB) to 60\" (1500 NB)" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500# (ASME B16.5); PN6 to PN400 (DIN/EN)" },
    { label: "Face Types", value: "RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint); T&G and M&F available" },
    { label: "Standards", value: "ANSI/ASME B16.5, B16.47, DIN, EN 1092-1, JIS, BS, API" },
    { label: "Vent/Drain", value: "Optional center hole with NPT plug — for pressure equalization before removal" },
    { label: "Optional Bore", value: "Can be supplied with partial bore for future nozzle use" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 on request; NACE MR0175/MR0103 available" },
    { label: "Lead Time", value: "7–14 days standard; thicker higher-class flanges may need 3–4 weeks" },
  ];

  const comparisonData = [
    { feature: "Has Central Bore?", blind: "No — solid plate", spectacleBlind: "No — blind disc + open ring", weldNeck: "Yes — bore = pipe ID" },
    { feature: "Purpose", blind: "Permanent or rare isolation", spectacleBlind: "Frequent cycling (maintenance)", weldNeck: "Pipe connection" },
    { feature: "Stays Connected During Use?", blind: "No — removed to open flow", spectacleBlind: "Yes — rotated in place", weldNeck: "Always connected" },
    { feature: "Thickness at Higher Classes", blind: "Increases dramatically (4–5× from 150# to 900#)", spectacleBlind: "Same principle", weldNeck: "Standardized hub" },
    { feature: "Cost (150# CS)", blind: "Lowest for permanent close", spectacleBlind: "Higher (two-piece assembly)", weldNeck: "Highest (hub + machining)" },
    { feature: "Best For", blind: "Permanent closures & hydro-testing", spectacleBlind: "Repeated isolation cycling", weldNeck: "High-pressure piping joints" },
    { feature: "Vent/Drain Hole Option?", blind: "Yes — NPT threaded hole", spectacleBlind: "Available on request", weldNeck: "N/A" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Flanges</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Blind Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Blind Flange Manufacturer in India | BL / BLRF / BLFF / BLRTJ | ASME B16.5 | Remax Forge
          </h1>
        </div>
      </div>

      {/* Floating Section Nav */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {navItems.map((item, idx) => (
              <button key={idx} onClick={() => scrollToSection(item.target)}
                className="text-sm font-bold text-slate-600 hover:text-[#D71920] transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero: Image & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img src="/images/blind-flanges.webp"
              alt="Blind Flange ASME B16.5 Class 150 Carbon Steel Manufacturer Mumbai India"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              {[
                { title: "No bore — solid plate design", desc: "The only flange with NO central opening. Withstands full system pressure applied across the entire plate area." },
                { title: "Thickness increases at higher classes", desc: "Blind flange thickness doubles from Class 150# to 300# and increases 4–5× from 150# to 900#. Always specify class when ordering." },
                { title: "Permanent closure or temporary isolation", desc: "Use for permanent pipe dead-ends, hydrostatic pressure testing, or maintenance blanking of vessel nozzles." },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Request Quote <ArrowRight size={18} />
              </button>
              <a href="/contact" className="px-6 py-3 rounded font-bold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 transition-all flex items-center gap-2">
                <Download size={18} className="text-slate-500" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-[#0F172A] rounded-2xl px-6 py-4 mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            { icon: "🏆", text: "ISO 9001:2015 Certified" },
            { icon: "✅", text: "20+ Years Experience" },
            { icon: "🌍", text: "45+ Countries Exported" },
            { icon: "📋", text: "EN 10204 3.1 MTC Standard" },
            { icon: "🔬", text: "In-House Testing Lab" },
            { icon: "⚡", text: "7–14 Day Lead Time" },
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-white whitespace-nowrap">
              <span className="text-base">{badge.icon}</span>
              <span>{badge.text}</span>
              {idx < 5 && <span className="hidden md:inline text-slate-600 ml-3">|</span>}
            </div>
          ))}
        </div>

        {/* H2-1: What is a Blind Flange? */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            What is a Blind Flange?
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Blind Flange (BL Flange)</strong> is a solid plate used to seal — or "blank off" — the open end of a pipe, vessel nozzle, or valve. It is the <strong>only flange type with NO bore</strong> (no central opening). Despite having no opening, blind flanges must withstand full system pressure applied across the entire plate area, which means they must be significantly thicker at higher pressure classes.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { abbr: "BL", full: "Blind" },
                  { abbr: "BLRF", full: "Blind Raised Face" },
                  { abbr: "BLFF", full: "Blind Flat Face" },
                  { abbr: "BLRTJ", full: "Blind Ring Type Joint" },
                  { abbr: "Dummy", full: "Also called Dummy Flange" },
                  { abbr: "Blank", full: "Also called Blank Flange" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-base">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-slate-800 mb-3">Critical Technical Points Buyers Need to Know:</p>
              <ul className="space-y-2">
                {[
                  "Under pressure, a blind flange behaves like a \"plate under uniform load\" — bending stress is maximum at center",
                  "At higher pressure classes (900#, 1500#, 2500#), thickness increases dramatically — this is normal and required by code",
                  "Blind flanges must have the same ASME class as the mating flange — never mix classes",
                  "Can be used with a vent/drain hole (drilled in center) for pressure equalization before removal",
                  "Used as a PERMANENT closure OR a TEMPORARY isolation during pressure testing",
                  "For repeated use isolation (maintenance cycling), consider Spectacle Blind instead",
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0"></span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thickness callout box */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800 mb-1">Important: Thickness & Weight Vary Significantly by Class</p>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Blind flange thickness <strong>doubles</strong> from Class 150# to 300# and <strong>increases 4–5×</strong> from 150# to 900#. 
                    Always specify your pressure class when ordering — the weight and price difference is significant.
                    A 12" NPS blind flange weighs ~22 kg at Class 150# but ~100+ kg at Class 900#.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For frequent maintenance cycling, see our <a href="/products/flanges/spectacle-blind-flange" className="text-[#D71920] hover:underline font-extrabold">Spectacle Blind Flange</a>. For high-pressure pipe connections, our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a> is code-mandated. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a>.
              </p>
            </div>
          </div>
        </div>

        {/* H2-2: Standard Specifications Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Standard Specifications
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Remax Forge & Fittings manufactures forged Blind Flanges to international standards. The table below answers the most common buyer questions in one place:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">Property</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider">Detail</th>
                </tr>
              </thead>
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

        {/* H2-3: Material Grades */}
        <div id="materials" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange Material Grades
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            We forge industrial Blind Flanges in a wide variety of metallic materials — Stainless Steel, Duplex, Super Duplex, Carbon Steel (LTCS & high yield), Alloy Steel, and corrosion-resistant Nickel Alloys (Inconel, Hastelloy, Monel):
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8">
              <MaterialGradesTable productName="Blind Flange" />
            </div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp"
                alt="Blind Flange material grades stainless steel duplex inconel"
                className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* H2-4: Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange Standards & Specifications
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Our forged Blind Flanges are engineered according to ASME, ANSI, DIN, EN, JIS, and BS standards:
          </p>
          <StandardsTable />
        </div>

        {/* H2-5: Dimensions Table */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            ASME B16.5 Blind Flange Dimensions Table
          </h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">
            Dimensional chart for Class 150# and Class 300# forged Blind Flanges including minimum thickness and approximate weights. Dimensions per ASME B16.5. Weights are approximate for Carbon Steel A516 Gr.70:
          </p>
          <p className="text-xs text-slate-500 italic mb-8">
            Note: Class 900# thickness is typically 3.5× the Class 150# value. Always specify class when ordering — weight and price differ significantly.
          </p>
          <FlangeDimensionsTable slug="blind-flange" altText="ASME B16.5 Blind Flange dimensions and weight chart" />
        </div>

        {/* H2-6: Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Flange Face Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Blind Flanges are available in RF (BLRF — standard for oil & gas), FF (BLFF — for cast iron mating flanges), and RTJ (BLRTJ — for high-pressure critical service). The face type must match the mating flange face.
          </p>
          <FlangeFaceTypes />
        </div>

        {/* Why Use a Blind Flange — Use Case Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Why Use a Blind Flange?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Blind Flanges serve several distinct use cases across industrial piping systems. Unlike Weld Neck or Slip On flanges that connect pipe sections, a Blind Flange <em>closes</em> them:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-blue-50/40 border border-blue-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-3xl shrink-0">{uc.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{uc.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Blind vs Spectacle Blind note */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-bold text-slate-800 mb-3 text-sm">Blind Flange vs Spectacle Blind — Which to Choose?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Blind Flange</strong> = cheaper for <strong>permanent or rare-use</strong> closures. Requires breaking the flanged joint to remove.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Spectacle Blind</strong> = better for <strong>frequent open/close cycling</strong>. Stays permanently installed; rotated to switch.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industries & Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">
            Industries & Applications
          </h2>
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-xs font-bold">✓</span>
              Primary Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {primaryApplications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  {app}
                </div>
              ))}
            </div>
          </div>
          <IndustriesApplications />
        </div>

        {/* Testing & Inspection + Documents */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Testing & Inspection
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                We implement a rigorous, zero-defect quality control protocol on all flange fabrications. Every production batch undergoes visual inspection and dimensional checking. Advanced NDT including ultrasonic testing, PMI spectrometer analysis, hydrostatic pressure testing, and magnetic particle examinations.
              </p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Documents & Certificates
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                We supply a comprehensive documentation package with every shipment — Mill Test Certificates (EN 10204 3.1), NACE compliance documentation, heat treatment records, hydrostatic test charts, and third-party inspection clearances from SGS, Lloyd's, and DNV.
              </p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange vs Other Isolation Options
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Use this quick comparison to determine the right isolation solution for your application:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Blind Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Spectacle Blind</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Weld Neck Flange</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.blind}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.spectacleBlind}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.weldNeck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/spectacle-blind-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Spectacle Blind Flange →
            </a>
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Weld Neck Flange →
            </a>
          </div>
        </div>

        {/* Surface Finish & Export */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          <div id="export">
            <h2 className="sr-only">Export Markets</h2>
            <ExportMarkets />
          </div>
        </div>

        <WhyChooseRemax />

        {/* PDF Download CTA */}
        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              📥 Download Blind Flange Catalogue (PDF)
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Get the complete technical catalogue including product description, full ASME B16.5 Class 150# & 300# dimension and weight tables, material grades, standards — ready to attach to your RFQ.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap">
              <Download size={18} /> Request PDF Catalogue
            </a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">
              Get Instant Quote <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <HowToOrder />

        {/* FAQ */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Find answers to the most common questions about Blind Flanges — including Blind vs Spectacle Blind, thickness differences by class, vent holes, face types, and special alloy availability.
          </p>
          <FlangeFAQs slug="blind-flange" />
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Related Products
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Compare our comprehensive range of industrial flanges to find the perfect fit for your piping project.
          </p>
          <RelatedFlanges activeSlug="blind-flange" />
        </div>

      </div>
    </div>
  );
};

export default Blind;
