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

const WeldNeck = () => {
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

  const advantages = [
    { icon: "💪", title: "Strongest Flange", desc: "Single full-penetration butt weld — the strongest weld joint possible; code-required for critical service." },
    { icon: "🔍", title: "Radiographic Inspection Possible", desc: "Full-penetration butt weld can be X-rayed (100% RT) to detect internal defects — ensuring zero-leak joints." },
    { icon: "📏", title: "Perfect Bore Match", desc: "Hub bore machined to exact pipe bore — zero turbulence, zero pressure drop, zero erosion at the joint." },
    { icon: "🌡️", title: "Best for Extremes", desc: "For high temp (up to 700°C alloy steel), high pressure (2500#), cryogenic (-196°C LNG), and cyclic fatigue." },
    { icon: "🛡️", title: "Maximum Fatigue Life", desc: "Tapered hub distributes stress smoothly into pipe wall — outlasts Slip-On by 3× under fatigue loading." },
    { icon: "📋", title: "Code-Mandated", desc: "Required by ASME B31.3 for lethal, high-temp, cyclic, and Class 900# and above critical service." },
    { icon: "🔧", title: "One Weld Only", desc: "Just one weld joint to inspect and maintain (vs. two fillet welds for Slip-On flanges)." },
  ];

  const limitations = [
    "Higher cost than Slip-On — more material, longer hub, and precision bore machining required",
    "Requires precise pipe cut length — pipe must be cut accurately before welding (no adjustment possible)",
    "Longer installation time — full-penetration butt weld requires a skilled welder and more time than fillet welds",
  ];

  const primaryApplications = [
    "High-pressure oil & gas pipelines (Class 600# to 2500#)",
    "Petroleum refineries — process lines, reactor piping, fired heater piping",
    "Petrochemical plants — corrosive media at elevated temperatures",
    "Power plants — high-pressure steam lines, boiler feed water, turbine inlet",
    "LNG and cryogenic plants — liquid nitrogen, LNG, liquid oxygen (-196°C service)",
    "Offshore platforms & FPSOs — subsea, topsides, wellhead connections",
    "Chemical plants — highly corrosive acids, caustics, solvents under pressure",
    "Compressor station discharge piping (cyclic high-pressure)",
    "Nuclear power — Class 1 & 2 piping (with special material certifications)",
    "Any service requiring radiographic weld inspection per code",
  ];

  const specsRows = [
    { label: "Product Names", value: "Weld Neck Flange, WN Flange, WNRF, WNFF, WNRTJ, Welding Neck Flange" },
    { label: "Size Range", value: "½\" (15 NB) to 60\" (1500 NB); custom sizes available" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500# (ASME B16.5); PN6 to PN400 (DIN/EN)" },
    { label: "Pipe Schedule", value: "SCH 10S, 20, 40, 80, 120, 160, XXS — bore machined to match exact pipe schedule" },
    { label: "Face Types", value: "RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint), T&G, M&F" },
    { label: "Standards", value: "ANSI/ASME B16.5, B16.47 Series A & B, EN 1092-1, DIN 2633/2635, JIS B2220, BS 4504, MSS SP-44, API 6A, API 605, GOST, AWWA" },
    { label: "Weld Type", value: "Single full-penetration V-groove butt weld (1 weld only)" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 on request; NACE MR0175/MR0103 available" },
    { label: "Radiography", value: "100% RT available; mandatory for lethal/critical service per ASME B31.3" },
    { label: "Lead Time", value: "7–14 days (standard); 3–6 weeks (special alloy/custom)" },
  ];

  const comparisonData = [
    { feature: "Weld Joints Required", wn: "1 butt weld (full penetration)", slipOn: "2 fillet welds", socketWeld: "1 fillet weld (external)" },
    { feature: "Pressure Rating", wn: "Highest (all classes 150–2500#)", slipOn: "Medium (up to 600# preferred)", socketWeld: "High (small bore ½\"–3\")" },
    { feature: "Fatigue Life", wn: "Highest (3× Slip-On)", slipOn: "~1/3 of Weld Neck", socketWeld: "~2/3 of Weld Neck" },
    { feature: "Radiography (RT)", wn: "Yes — 100% RT capable", slipOn: "Not feasible (fillet weld)", socketWeld: "Not feasible" },
    { feature: "Bore Match to Pipe", wn: "Exact — zero turbulence", slipOn: "Slides over pipe OD", socketWeld: "Socket bore ≈ pipe OD" },
    { feature: "Installation Speed", wn: "Slower (precise cut & butt weld)", slipOn: "Faster (slide & fillet weld)", socketWeld: "Moderate" },
    { feature: "Cost (Relative)", wn: "Highest", slipOn: "Lowest", socketWeld: "Moderate" },
    { feature: "Code-Mandated For", wn: "Lethal, cyclic, Class 900+", slipOn: "General/low-medium pressure", socketWeld: "Small-bore high pressure" },
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
            <span className="text-[#D71920] font-medium">Weld Neck Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Weld Neck Flange Manufacturer in India | WN / WNRF / WNFF / WNRTJ | ASME B16.5 | Remax Forge
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
            <img src="/images/weld-neck-flange.webp"
              alt="Weld Neck Flange ASME B16.5 Class 150 Carbon Steel Manufacturer Mumbai India"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              {[
                { title: "Single full-penetration butt weld", desc: "The strongest connection method — one V-groove butt weld with zero flow restriction and full RT capability." },
                { title: "Long tapered hub — stress transfer", desc: "Gradually transfers stress from flange body to pipe wall, eliminating stress concentration at the junction." },
                { title: "Bore matched exactly to pipe schedule", desc: "Hub bore = pipe bore — no step, no turbulence, no erosion. Must specify NPS + pipe schedule when ordering." },
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

        {/* H2-1: What is a Weld Neck Flange? */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            What is a Weld Neck Flange?
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Weld Neck Flange (WN Flange)</strong> is the most structurally superior flange type, featuring a long tapered hub that is welded to the pipe via a <strong>single full-penetration butt weld (V-groove)</strong>. The tapered hub gradually transfers stress from the flange to the pipe wall, eliminating stress concentration at the flange-pipe junction — the primary failure point in other flange types.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { abbr: "WN", full: "Weld Neck" },
                  { abbr: "WNRF", full: "Weld Neck Raised Face" },
                  { abbr: "WNFF", full: "Weld Neck Flat Face" },
                  { abbr: "WNRTJ", full: "Weld Neck Ring Type Joint" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-lg">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-slate-800 mb-3">Why It Is the Strongest Flange Type:</p>
              <ul className="space-y-2">
                {[
                  "Single full-penetration butt weld — the strongest weld joint possible",
                  "Tapered hub distributes mechanical stress smoothly — no abrupt stress transitions",
                  "Internal bore matches exactly to pipe bore — NO flow restriction, NO turbulence",
                  "Radiographic examination (X-ray) of the weld is possible — defects are detectable",
                  "Required by code (ASME B31.3) for: lethal service, cyclic service, Class 900# and above in critical systems",
                  "The ONLY flange type recommended for: high pressure, high temp, cryogenic, fatigue-loading, and corrosive media",
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0"></span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For lower-pressure applications, our <a href="/products/flanges/slip-on-flange" className="text-[#D71920] hover:underline font-extrabold">Slip On Flange</a> is more economical. For pipe end closures, see our <a href="/products/flanges/blind-flange" className="text-[#D71920] hover:underline font-extrabold">Blind Flange</a>. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a>.
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
            Remax Forge & Fittings manufactures forged Weld Neck Flanges to the most stringent international standards. The table below answers the most common buyer questions in one place:
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
            Weld Neck Flange Material Grades
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            We forge industrial Weld Neck Flanges in a wide variety of metallic materials to handle diverse chemical and corrosion requirements. Our range includes Stainless Steel, Duplex, Super Duplex, LTCS Carbon Steel, Alloy Steel, and corrosion-resistant Nickel Alloys (Inconel, Hastelloy, Monel):
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8">
              <MaterialGradesTable productName="Weld Neck Flange" />
            </div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp"
                alt="Weld Neck Flange material grades stainless steel duplex inconel"
                className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* H2-4: Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Weld Neck Flange Standards & Specifications
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Our forged Weld Neck Flanges are engineered according to ASME, ANSI, DIN, EN, JIS, API, and BS standards. We also offer customization to client-specific drawings:
          </p>
          <StandardsTable />
        </div>

        {/* H2-5: Dimensions Table */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            ASME B16.5 Weld Neck Flange Dimensions Table
          </h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">
            Detailed dimensional chart for Class 150# forged Weld Neck Flanges. Dimensions per ASME B16.5. Weights are approximate for Carbon Steel A105. Click column headers to sort:
          </p>
          <p className="text-xs text-slate-500 italic mb-8">
            Contact us for exact drawings, Class 300#/600#/900# dimensions, or downloadable PDF catalogue.
          </p>
          <FlangeDimensionsTable slug="weld-neck-flange" altText="ASME B16.5 Weld Neck Flange dimensions chart" />
        </div>

        {/* H2-6: Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Flange Face Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Weld Neck Flanges are available in all face configurations — RF (Raised Face, standard for oil & gas), FF (Flat Face, for cast iron mating), and RTJ (Ring Type Joint, for high-pressure critical service). WNRTJ is the most specified face type for Class 900# and above.
          </p>
          <FlangeFaceTypes />
        </div>

        {/* Advantages & Limitations */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">
            Advantages & Limitations of Weld Neck Flange
          </h2>

          <h3 className="text-lg font-bold text-slate-800 mb-5">✅ Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-green-50/50 border border-green-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={20} className="text-amber-600 shrink-0" />
              <h3 className="text-lg font-bold text-amber-800">Limitations — Transparent Disclosure</h3>
            </div>
            <p className="text-amber-700 text-sm mb-4 leading-relaxed">
              Weld Neck is the strongest flange — but it comes with trade-offs that buyers should understand before specifying:
            </p>
            <div className="space-y-3">
              {limitations.map((lim, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">⚠️</span>
                  <span className="text-amber-800 text-sm font-medium">{lim}</span>
                </div>
              ))}
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
            <div className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-xs text-blue-800 font-semibold leading-relaxed">
                💡 For low-to-medium pressure general service, the more economical{' '}
                <a href="/products/flanges/slip-on-flange" className="text-[#D71920] hover:underline font-bold">Slip On Flange</a>{' '}
                may be a better fit. Weld Neck is specified where safety and code compliance demand the highest integrity connection.
              </p>
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
                We implement a rigorous, zero-defect quality control protocol on all flange fabrications. Every production batch undergoes visual inspection and dimensional checking. Advanced NDT including ultrasonic testing, PMI spectrometer analysis, hydrostatic pressure testing, and 100% radiography available on request.
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
            Weld Neck Flange vs Other Flange Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Use this quick comparison to decide whether Weld Neck is the right choice for your application:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Weld Neck Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Slip On Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Socket Weld Flange</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.wn}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.slipOn}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.socketWeld}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/slip-on-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Slip On Flange →
            </a>
            <a href="/products/flanges/socket-weld-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Socket Weld Flange →
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
              📥 Download Weld Neck Flange Catalogue (PDF)
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Get the complete technical catalogue including product description, full ASME B16.5 Class 150#, 300#, 600# & 900# dimension tables, material grades, standards, and weight charts — ready to attach to your RFQ.
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
            Find answers to the most common questions about Weld Neck Flanges — including WNRF vs WNFF, pipe schedule matching, API 6A, large bore B16.47, and temperature limits. Contact our metallurgical engineers for project-specific guidance.
          </p>
          <FlangeFAQs slug="weld-neck-flange" />
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Related Products
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Compare our comprehensive range of industrial flanges to find the perfect fit for your piping project.
          </p>
          <RelatedFlanges activeSlug="weld-neck-flange" />
        </div>

      </div>
    </div>
  );
};

export default WeldNeck;
