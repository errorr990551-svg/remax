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

const SlipOn = () => {
  const { openQuotePopup } = useQuotePopup();

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    { icon: "💰", title: "Lower Cost", desc: "Less material and machining vs Weld Neck; ideal for budget-sensitive projects." },
    { icon: "🔧", title: "Easy Installation", desc: "Pipe doesn't need precise cut length — just slide in and weld." },
    { icon: "📐", title: "Easier Alignment", desc: "Pipe can be repositioned slightly before tack welding for perfect fit." },
    { icon: "⚡", title: "Faster Fabrication", desc: "Two fillet welds are faster to execute than a full-penetration butt weld." },
    { icon: "🏗️", title: "Low/Medium Pressure Service", desc: "Perfect for water, steam, and general process piping at moderate pressures." },
    { icon: "📦", title: "Wide Availability", desc: "Stocked in all common sizes and materials with 7–14 day lead times." },
  ];

  const limitations = [
    "Strength = 2/3 of Weld Neck; NOT recommended for high-pressure cyclic service",
    "Two weld zones = two potential leak points (vs one for Weld Neck)",
    "Cannot be combined with elbows or tees — fittings have no straight end to slide into",
    "Not recommended for services above Class 900# pressure rating",
  ];

  const primaryApplications = [
    "General process piping (water, air, steam at moderate pressures)",
    "Chemical supply lines (non-critical, non-corrosive)",
    "HVAC systems",
    "Fire suppression systems",
    "Municipal water and wastewater treatment",
    "Cooling water systems",
    "Pharmaceutical utilities (CIP/SIP water)",
    "Food and beverage (non-aseptic service)",
    "Agricultural irrigation systems",
    "Shipbuilding ballast and bilge lines",
  ];

  const notRecommended = [
    "High-pressure steam (above Class 600#)",
    "Cyclic or vibrating services",
    "Cryogenic applications",
    "Highly corrosive media requiring zero leakage",
  ];

  const comparisonData = [
    { feature: "Weld Joints Required", slipOn: "2 fillet welds", weldNeck: "1 butt weld (full penetration)", socketWeld: "1 fillet weld (external only)" },
    { feature: "Pressure Rating", slipOn: "Medium (up to 600# preferred)", weldNeck: "Highest (all classes)", socketWeld: "High (½\"–3\" small bore)" },
    { feature: "Installation Speed", slipOn: "Faster", weldNeck: "Slower (precise bore match)", socketWeld: "Moderate" },
    { feature: "Cost (Relative)", slipOn: "Lowest", weldNeck: "Highest", socketWeld: "Moderate" },
    { feature: "Fatigue Life", slipOn: "~1/3 of Weld Neck", weldNeck: "Highest", socketWeld: "~2/3 of Weld Neck" },
    { feature: "Size Range", slipOn: "½\" to 48\" (custom)", weldNeck: "½\" to 60\"", socketWeld: "½\" to 3\" (standard)" },
    { feature: "Radiography", slipOn: "Not feasible (fillet weld)", weldNeck: "100% RT capable", socketWeld: "Not feasible" },
    { feature: "Best For", slipOn: "General/moderate service", weldNeck: "Critical/high pressure", socketWeld: "Small-bore high pressure" },
  ];

  const specsRows = [
    { label: "Product Names", value: "Slip On Flange, SO Flange, SORF, SOFF, Hubbed Flange" },
    { label: "Size Range", value: "½\" (15 NB) to 48\" (1200 NB); larger on custom order" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500# (ASME B16.5); PN6, PN10, PN16, PN25, PN40, PN64 (DIN/EN)" },
    { label: "Face Types", value: "RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint), T&G (Tongue & Groove), M&F (Male & Female)" },
    { label: "Standards", value: "ANSI/ASME B16.5, B16.47 Series A & B, BS 4504, BS 10 Table D/E, EN 1092-1, DIN 86029, JIS B2220, MSS SP-44, AWWA C207, GOST, API 605" },
    { label: "Material Forms", value: "Forged (with hub) or Fabricated from plate (no hub)" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 on request; NACE MR0175/MR0103 available" },
    { label: "Coating", value: "Anti-rust paint, oil paint, zinc plated, hot-dip galvanized" },
    { label: "Origin", value: "India (Mumbai) / USA / Japan / Europe / Korea" },
    { label: "Lead Time", value: "7–14 days (standard); 3–6 weeks (special alloy/custom)" },
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
            <span className="text-[#D71920] font-medium">Slip On Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Slip On Flange Manufacturer in India | SO / SORF / SOFF | ASME B16.5 | Remax Forge
          </h1>
        </div>
      </div>

      {/* Floating Section Nav */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-bold text-slate-600 hover:text-[#D71920] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Hero Section: Image & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 items-center">
          {/* Left Column: Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="/images/slip-on-flange.webp" 
               alt="Slip On Flange ASME B16.5 Class 150 Carbon Steel Manufacturer Mumbai India" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Key Features */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              {
[
                { title: "Slides over pipe — easy installation", desc: "Bore is slightly larger than pipe OD allowing the pipe to slide freely before both fillet welds are applied." },
                { title: "Double fillet welded — inside & outside", desc: "Inner weld prevents fluid penetration; outer weld provides structural strength. Two welds per ASME code." },
                { title: "Cost-effective for general service", desc: "Strength = 2/3 of Weld Neck. Ideal for low-to-medium pressure water, steam, and chemical lines." },
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
              ))
}
            </div>
            
            <div className="mt-10 flex gap-4">
               <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                 Request Quote <ArrowRight size={18} />
               </button>
               <a
                 href="/contact"
                 className="px-6 py-3 rounded font-bold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 transition-all flex items-center gap-2"
               >
                 <Download size={18} className="text-slate-500" />
                 Download Catalogue
               </a>
            </div>
          </div>
        </div>

        {/* ── EXTRA: Trust Badges Bar ── */}
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

        {/* Linear Content Flow */}

        {/* H2-1: What is a Slip On Flange? */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            What is a Slip On Flange?
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Slip-On Flange (SO Flange)</strong> slides over the pipe and is secured by <strong>two fillet welds</strong> — one executed on the inside bore (to prevent fluid penetrating between pipe and flange) and one on the outside. The flange bore is slightly larger than the pipe OD to allow the pipe to slide freely before welding.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { abbr: "SO", full: "Slip On" },
                  { abbr: "SORF", full: "Slip On Raised Face" },
                  { abbr: "SOFF", full: "Slip On Flat Face" },
                  { abbr: "SOTJ", full: "Slip On Tongue & Groove" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-lg">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-slate-800 mb-3">Key Technical Facts Buyers Need to Know:</p>
              <ul className="space-y-2">
                {[
                  "Strength under internal pressure = 2/3 of Weld Neck Flange",
                  "Fatigue life ≈ 1/3 of Weld Neck Flange",
                  "NOT recommended for cyclic, high-vibration, or high-pressure services",
                  "Two weld zones create two potential leak paths (vs one for Weld Neck)",
                  "Available as forged (with hub) or fabricated from plate (no hub)",
                  "The \"hub\" version has a short raised section that improves stress distribution",
                  "Easy to install — pipe doesn't need precise cut length; slide and weld",
                  "More economical than Weld Neck for non-critical services",
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0"></span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50 mt-2">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For high-pressure, cyclic, or critical service, see our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a>. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a> for your project.
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
            Remax Forge & Fittings manufactures forged Slip On Flanges to meet stringent international standards. The table below answers the five most common buyer questions in one place:
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
                    <td className="px-6 py-4 font-bold text-[#0F172A] align-top border-r border-slate-200">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2-3: Material Grades */}
        <div id="materials" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Slip On Flange Material Grades
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            We forge industrial Slip On Flanges in a wide variety of metallic materials to handle diverse chemical and corrosion requirements. Our range includes high-integrity Stainless Steel, Duplex Steel, Super Duplex Steel, low temperature Carbon Steel (LTCS), high yield Carbon Steel, Alloy Steel, and corrosion-resistant Nickel Alloys (Inconel, Hastelloy, Monel):
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8">
              <MaterialGradesTable productName="Slip On Flange" />
            </div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img 
                src="/images/nickel-alloy-bar-500x500.webp" 
                alt="Slip On Flange material grades stainless steel duplex inconel" 
                className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2"
              />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* H2-4: Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Slip On Flange Standards & Specifications
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Our forged Slip On Flanges are engineered according to ASME, ANSI, DIN, EN, JIS, and BS standards. We also offer customization to client-specific drawings and dimensional schedules:
          </p>
          <StandardsTable />
        </div>

        {/* H2-5: Dimensions Table */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            ASME B16.5 Slip On Flange Dimensions Table
          </h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">
            Review our detailed dimensional chart for Class 150# forged Slip On Flanges. Dimensions per ASME B16.5. Weights are approximate for Carbon Steel A105. Click column headers to sort:
          </p>
          <p className="text-xs text-slate-500 italic mb-8">
            Contact us for exact drawings, Class 300# dimensions, or downloadable PDF catalogue.
          </p>
          <FlangeDimensionsTable slug="slip-on-flange" altText="ASME B16.5 Slip On Flange dimensions chart" />
        </div>

        {/* H2-6: Flange Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Flange Face Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Remax Forge & Fittings manufactures Slip On Flanges in several face type designs — RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint), T&G (Tongue & Groove), and M&F (Male & Female) — to accommodate different sealing gaskets and pressure ratings.
          </p>
          <FlangeFaceTypes />
        </div>

        {/* ── HIGH: Advantages & Limitations ── */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">
            Advantages & Limitations of Slip On Flange
          </h2>

          {/* Advantages */}
          <h3 className="text-lg font-bold text-slate-800 mb-5">✅ Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-green-50/50 border border-green-100 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Limitations */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={20} className="text-amber-600 shrink-0" />
              <h3 className="text-lg font-bold text-amber-800">Limitations — Transparent Disclosure</h3>
            </div>
            <p className="text-amber-700 text-sm mb-4 leading-relaxed">
              We believe informed buyers make better decisions. Here are the technical limitations of Slip On Flanges — this is why Weld Neck Flanges exist for critical services:
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

        {/* ── HIGH: Applications ── */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">
            Industries & Applications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Primary Applications */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-xs font-bold">✓</span>
                Primary Applications
              </h3>
              <ul className="space-y-2.5">
                {primaryApplications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            {/* Not Recommended */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-xs font-bold">✗</span>
                NOT Recommended For
              </h3>
              <div className="space-y-3">
                {notRecommended.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-red-50 border border-red-100 rounded-lg">
                    <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-xs text-blue-800 font-semibold leading-relaxed">
                  💡 For the above services, consider our{' '}
                  <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-bold">Weld Neck Flange</a>{' '}
                  which offers full pressure rating and superior fatigue life.
                </p>
              </div>
            </div>
          </div>
          {/* Shared industries grid */}
          <IndustriesApplications />
        </div>

        {/* H2-7: Testing & Inspection */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Testing & Inspection
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                We implement a rigorous, zero-defect quality control protocol on all flange fabrications. Every single production batch undergoes strict visual inspection and dimensional checking. In addition, we offer advanced non-destructive testing (NDT) such as ultrasonic testing, positive material identification (PMI) spectrometer analysis, hydrostatic pressure testing, and magnetic particle examinations.
              </p>
            </div>
            <TestingInspection />
          </div>

          {/* H2-8: Documents & Certificates */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Documents & Certificates
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                Traceability and quality assurance are integral to our manufacturing process. We supply a comprehensive package of documentation with every shipment at no extra cost, including Mill Test Certificates (MTC) in accordance with EN 10204 3.1. Third-party inspection clearances from SGS, Lloyd's, and DNV available on request.
              </p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* ── EXTRA: Comparison Table ── */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Slip On Flange vs Other Flange Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Not sure which flange is right for your project? Use this quick comparison to decide:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">
                    Slip On Flange
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Weld Neck Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Socket Weld Flange</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.slipOn}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.weldNeck}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.socketWeld}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Weld Neck Flange →
            </a>
            <a href="/products/flanges/socket-weld-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1">
              <ChevronRight size={14} /> View Socket Weld Flange →
            </a>
          </div>
        </div>

        {/* Surface Finish & Export Markets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          
          <div id="export">
            <h2 className="sr-only">Export Markets</h2>
            <ExportMarkets />
          </div>
        </div>

        {/* Why Choose Remax Forge? */}
        <WhyChooseRemax />

        {/* ── EXTRA: PDF Download CTA ── */}
        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              📥 Download Slip On Flange Catalogue (PDF)
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Get the complete technical catalogue including product description, full ASME B16.5 Class 150# & 300# dimension tables, material grades, standards, and weight charts — ready to share with your team or attach to your RFQ.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-600/30 whitespace-nowrap"
            >
              <Download size={18} />
              Request PDF Catalogue
            </a>
            <button
              onClick={() => openQuotePopup()}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap"
            >
              Get Instant Quote <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* How to Order */}
        <HowToOrder />

        {/* Frequently Asked Questions */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Find answers to the most common questions about Slip On Flanges — including SORF vs SOFF, pressure class selection, welding procedure, and ordering. If you need further technical assistance, our in-house metallurgical engineers are available to help.
          </p>
          <FlangeFAQs slug="slip-on-flange" />
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Related Products
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Compare our comprehensive range of industrial flanges to find the perfect fit for your piping project. If you're unsure which flange design is best suited for your system pressure and temperature requirements, our engineering experts can provide guidance.
          </p>
          <RelatedFlanges activeSlug="slip-on-flange" />
        </div>

      </div>
    </div>
  );
};

export default SlipOn;
