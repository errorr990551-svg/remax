import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeDimensionsTable, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const LapJoint = () => {
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
    { icon: "🔄", title: "360° Free Rotation", desc: "Backing flange rotates freely — eliminates bolt hole alignment problems in cramped spaces or long pipe runs with cumulative misalignment." },
    { icon: "💰", title: "40–60% Cost Saving", desc: "Carbon Steel backing flange + expensive alloy stub end = significant saving on Duplex, Inconel, Hastelloy, and Monel pipelines." },
    { icon: "🔍", title: "Easy Inspection", desc: "Back off the backing flange and inspect or replace the stub end WITHOUT cutting the pipe or breaking the weld." },
    { icon: "🔧", title: "Frequent Dismantling", desc: "Ideal for systems requiring regular disassembly for cleaning, inspection, catalyst change, or process modifications." },
    { icon: "🛡️", title: "Lined Piping Compatible", desc: "For FRP, PTFE-lined, rubber-lined, or enamel-lined pipes where direct welding to the flange face is not possible." },
    { icon: "⚗️", title: "Corrosive Service", desc: "Stub end in corrosion-resistant alloy (contacting fluid); backing flange in cheap Carbon Steel (external only)." },
  ];

  const applications = [
    "Stainless/Duplex/Hastelloy/Inconel pipelines where exotic material cost is a concern",
    "Cryogenic systems (LNG, liquid nitrogen) where alignment at cold temperatures is difficult",
    "Corrosive chemical service with lined piping (rubber-lined, PTFE-lined, FRP)",
    "Offshore platforms — alignment in prefabricated modular piping",
    "Marine piping — shipboard systems requiring frequent maintenance access",
    "Slurry service — easy stub end replacement when erosion wear occurs",
    "Long pipeline runs — where cumulative bolt-hole misalignment is common",
  ];

  const specsRows = [
    { label: "Product Names", value: "Lap Joint Flange, LJ Flange, Loose Flange, Backing Flange + Stub End Assembly" },
    { label: "Size Range", value: "½\" (15 NB) to 60\" (1500 NB)" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500# (ASME B16.5)" },
    { label: "Backing Flange Face", value: "Always Flat Face (LJFF) — backing flange has no raised face" },
    { label: "Sealing Face", value: "The \"lap\" radius of the Stub End acts as the sealing surface" },
    { label: "Standards", value: "ASME B16.5 (backing flange), ASME B16.9 (stub ends), MSS SP-43 (light gauge stub ends)" },
    { label: "Stub End Types", value: "Short Pattern (ASME B16.9) or Long Pattern; specify when ordering" },
    { label: "Cost Advantage", value: "Backing Flange in Carbon Steel A105; Stub End in exotic alloy = 40–60% cost saving" },
    { label: "Rotation", value: "Backing flange rotates 360° freely over pipe — unlimited bolt hole alignment" },
    { label: "MTC", value: "EN 10204 3.1 for both backing flange and stub end; 3.2 on request" },
    { label: "Lead Time", value: "7–14 days standard; custom alloy stub ends 3–6 weeks" },
  ];

  const comparisonData = [
    { feature: "Bolt Hole Alignment", lj: "360° free rotation — always perfect", wn: "Fixed — must be aligned during fit-up", slipOn: "Fixed — must be aligned during fit-up" },
    { feature: "Material Cost (exotic alloy)", lj: "Lowest — CS backing + alloy stub end only", wn: "Highest — full flange in alloy", slipOn: "High — full flange in alloy" },
    { feature: "Inspection / Replacement", lj: "Slide back and inspect without cutting", wn: "Must cut weld to disassemble", slipOn: "Must cut weld to disassemble" },
    { feature: "Lined Pipe Compatible?", lj: "✅ Yes — no flange-to-pipe weld contact", wn: "No", slipOn: "No" },
    { feature: "Weld Required?", lj: "Yes — stub end welded to pipe", wn: "Yes — butt weld to pipe", slipOn: "Yes — 2 fillet welds" },
    { feature: "Pressure Rating", lj: "All classes (150#–2500#)", wn: "All classes — code preferred for high P", slipOn: "Up to 600# preferred" },
    { feature: "Best For", lj: "Exotic alloys, frequent dismantling, tight spaces", wn: "Critical/cyclic/high-pressure", slipOn: "General/moderate service" },
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
            <ChevronRight size={14} /><span className="text-[#D71920] font-medium">Lap Joint Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Lap Joint Flange & Stub End Manufacturer in India | LJ / LJF / LJFF | ASME B16.5 | Remax Forge
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
            <img src="/images/Stainless-steel-Lap-joint-flange-ASTM-4-inch.webp" alt="Lap Joint Flange with Stub End ASME B16.5 Manufacturer Mumbai India" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Two-piece assembly — Backing Flange + Stub End", desc: "The backing flange is NOT welded to the pipe. Only the stub end (welded to pipe) contacts the fluid — enabling exotic alloy savings." },
                { title: "360° free rotation — solves bolt hole alignment", desc: "The backing flange rotates freely through 360° around the stub end — aligns bolt holes to any position after all welds are complete." },
                { title: "40–60% cost saving on exotic alloy pipelines", desc: "Only the stub end (in contact with fluid) needs expensive alloy. The backing flange (external only) stays in Carbon Steel A105." },
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

        {/* How it works callout */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12">
          <h3 className="font-extrabold text-blue-800 text-lg mb-4">🔄 How the Lap Joint Assembly Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-blue-100 p-4">
              <p className="font-bold text-slate-800 mb-2 text-sm">1. Stub End</p>
              <p className="text-slate-600 text-sm leading-relaxed">Short piece of pipe with a flared/lapped end — <strong>welded to the pipe</strong>. Must be in the same material as the pipe (it contacts the fluid). Available as Short Pattern (ASME B16.9) or Long Pattern.</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 p-4">
              <p className="font-bold text-slate-800 mb-2 text-sm">2. Backing Flange</p>
              <p className="text-slate-600 text-sm leading-relaxed">Flat-faced, hubless flange that slides freely over the pipe. <strong>NOT welded — it laps over the stub end radius.</strong> Can be Carbon Steel A105 even on exotic alloy pipelines. Rotates 360° freely.</p>
            </div>
          </div>
          <p className="text-blue-700 text-xs font-bold mt-3">Note: Gasket sits between the two Stub End faces (not on the backing flanges). The Stub End radius IS the sealing surface.</p>
        </div>

        {/* Overview */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What is a Lap Joint Flange?</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>Lap Joint Flange (LJ Flange)</strong> is a TWO-PIECE assembly consisting of: (1) the <strong>Lap Joint Backing Flange</strong> — a flat-faced, hubless flange that slides freely over the pipe, and (2) a <strong>Stub End</strong> — a short piece of pipe with a flared/lapped end that is butt-welded to the pipe.
            </p>
            <p>
              The backing flange is NOT welded to the pipe. It simply "laps" over the radius of the stub end. This creates two powerful advantages found in no other flange type: <strong>free 360° rotation</strong> for perfect bolt hole alignment, and <strong>significant material cost savings</strong> on exotic alloy pipelines.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[{ abbr: "LJ", full: "Lap Joint" }, { abbr: "LJF", full: "Lap Joint Flange" }, { abbr: "LJFF", full: "Lap Joint Flat Face" }, { abbr: "SE", full: "Stub End (ordered separately)" }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-lg">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <p className="font-bold text-green-800 text-sm mb-2">✅ Backing Flange Material</p>
                <p className="text-green-700 text-sm">Use <strong>Carbon Steel A105</strong> for the backing flange in almost all cases — it never contacts the process fluid.</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="font-bold text-blue-800 text-sm mb-2">🔬 Stub End Material</p>
                <p className="text-blue-700 text-sm"><strong>Must match the pipe material</strong> — it is butt-welded to the pipe and contacts the fluid directly.</p>
              </div>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For high-pressure critical service, see our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a>. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Standard Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Complete specifications for the Lap Joint Flange assembly (backing flange + stub end):</p>
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
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Lap Joint Flange Material Grades</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">We manufacture Stub Ends in all alloys to match pipe material. Backing Flanges are typically Carbon Steel A105. Both components available in Stainless Steel, Duplex, Super Duplex, Nickel Alloys, and more:</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Lap Joint Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp" alt="Lap Joint Flange Stub End material grades" className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Lap Joint Flange Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Backing flanges per ASME B16.5; stub ends per ASME B16.9 (short/long pattern) and MSS SP-43:</p>
          <StandardsTable />
        </div>

        {/* Dimensions */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">ASME B16.5 Lap Joint Flange Dimensions Table</h2>
          <p className="text-slate-600 mb-2 text-sm md:text-base font-medium">Class 150# backing flange dimensions — same OD, bolt circle, and bolt holes as Slip-On/Weld Neck of same class. Dimensions per ASME B16.5. Weights are approximate for Carbon Steel A105:</p>
          <p className="text-xs text-slate-500 italic mb-8">Order separately: (1) Backing Flange — size, class, material; (2) Stub End — size, material (must match pipe), short or long pattern. Contact us for matched pair pricing.</p>
          <FlangeDimensionsTable slug="lap-joint-flange" altText="ASME B16.5 Lap Joint Flange backing flange dimensions chart" />
        </div>

        {/* Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Flange Face Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">The Lap Joint backing flange is <strong>always Flat Face (LJFF)</strong>. The sealing surface is provided by the Stub End lap radius — not the backing flange face. The gasket contacts the two Stub End faces.</p>
          <FlangeFaceTypes />
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Why Choose Lap Joint Flange?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-blue-50/40 border border-blue-100 rounded-xl p-5 hover:shadow-md transition-shadow">
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
              <p className="text-slate-600 text-sm font-medium mb-6">Zero-defect quality control — visual inspection, dimensional checking, PMI, UT, hydrostatic testing. Stub end weld tested separately from backing flange.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Full documentation for both components — separate MTCs for backing flange and stub end. EN 10204 3.1 standard; 3.2 on request.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Lap Joint Flange vs Other Flange Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Quick comparison to help you decide if Lap Joint is the right choice for your application:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Lap Joint Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Weld Neck</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Slip On</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.lj}</td>
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

        <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-2xl p-8 md:p-10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Download Lap Joint Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Complete technical catalogue including backing flange and stub end dimension tables, material grades, standards, and ordering guide.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get Instant Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Common questions about Lap Joint Flanges — ordering stub end separately, backing flange material choice, short vs long pattern, and pressure classes.</p>
          <FlangeFAQs slug="lap-joint-flange" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Products</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Compare our complete range of industrial flanges for your piping project.</p>
          <RelatedFlanges activeSlug="lap-joint-flange" />
        </div>

      </div>
    </div>
  );
};

export default LapJoint;
