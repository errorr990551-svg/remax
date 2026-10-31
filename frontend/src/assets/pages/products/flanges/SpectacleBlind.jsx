import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeDimensionsTable, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const TrustBar = () => (
  <div className="bg-[#0F172A] rounded-2xl px-6 py-4 mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
    {[{ icon: "🏆", text: "ISO 9001:2015 Certified" }, { icon: "✅", text: "20+ Years Experience" }, { icon: "🌍", text: "45+ Countries Exported" }, { icon: "📋", text: "EN 10204 3.1 MTC Standard" }, { icon: "🔬", text: "In-House Testing Lab" }, { icon: "⚡", text: "7–21 Day Lead Time" }].map((badge, idx) => (
      <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-white whitespace-nowrap">
        <span className="text-base">{badge.icon}</span><span>{badge.text}</span>
        {idx < 5 && <span className="hidden md:inline text-slate-600 ml-3">|</span>}
      </div>
    ))}
  </div>
);

const SpectacleBlind = () => {
  const { openQuotePopup } = useQuotePopup();
  const scrollToSection = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  const navItems = [
    { label: "Overview", target: "overview" },
    { label: "Specifications", target: "specifications" },
    { label: "Material Grades", target: "materials" },
    { label: "Dimensions", target: "dimensions" },
    { label: "Swinging Procedure", target: "procedure" },
    { label: "Comparison", target: "comparison" },
    { label: "FAQ", target: "faq" }
  ];

  const advantages = [
    { icon: "🔒", title: "Positive Isolation", desc: "A solid plate across the bore is a positive break in the line. Valves rely on seats that can pass, which is why blinding is the preferred isolation for confined space entry and hot work." },
    { icon: "👁️", title: "Position Visible from Outside", desc: "The web shows which side is in the line, so operators and permit issuers can confirm 'open' or 'blinded' without breaking the joint." },
    { icon: "🔗", title: "One Piece, Never Lost", desc: "Blind disc and spacer ring are cut from one plate and stay with the line. There is no separate spade or spacer to store, mix up or install from the wrong line class." },
    { icon: "🔄", title: "Fast Switching", desc: "Loosen the bolts, spread the flanges, swing the figure-8 through 180° on the pivot bolt, fit new gaskets and re-torque. No loose parts to fetch from the store." },
    { icon: "📏", title: "Same Gap in Both Positions", desc: "Blind and spacer are the same thickness, so the flange gap and pipe alignment do not change when the blind is swung." },
    { icon: "🏭", title: "Built for Turnarounds", desc: "Standard isolation point around vessels, exchangers, compressors and pumps in refineries, chemical plants and offshore facilities." },
  ];

  const applications = [
    "Refinery unit isolation during planned turnarounds (TAR)",
    "Reactor and vessel isolation for catalyst change, inspection or confined space entry",
    "Heat exchanger isolation for bundle pulling and cleaning",
    "Compressor and pump suction / discharge isolation during overhaul",
    "Pipeline and piping system isolation for hydrostatic testing",
    "Tank inlet and outlet isolation for cleaning and inspection",
    "Flare and relief header isolation during tie-ins",
    "Hazardous services: amine, sulphur recovery, H2S, HF alkylation, hydrogen",
  ];

  const specsRows = [
    { label: "Product Names", value: "Spectacle Blind, Figure-8 Blind, Spec Blind, Spectacle Plate, Line Blind" },
    { label: "Standard", value: "ASME B16.48 Line Blanks (replaced the withdrawn API 590); project / company drawings on request" },
    { label: "Size Range", value: "NPS ½\" to 24\" (DN 15 to DN 600); larger sizes and paddle blank / spacer sets to drawing" },
    { label: "Pressure Classes", value: "Class 150, 300, 600, 900, 1500 and 2500 (to suit ASME B16.5 flanges)" },
    { label: "Facing", value: "Raised Face (RF), Flat Face (FF) and Ring Type Joint (RTJ, grooved both sides)" },
    { label: "Thickness", value: "Per ASME B16.48 for the size and class; calculated per ASME B31.3 para. 304.5.3 for special design conditions" },
    { label: "Construction", value: "Blind disc, spacer ring and web machined from one plate or forging — blind and spacer are the same thickness" },
    { label: "Face Finish", value: "RF/FF: 125–250 µin Ra (3.2–6.3 µm) serrated; RTJ grooves: 63 µin Ra (1.6 µm) max" },
    { label: "Marking", value: "Size, class, material grade, heat number and manufacturer's mark on the web for full traceability" },
    { label: "Certification", value: "EN 10204 3.1 MTC standard; 3.2 with third-party inspection (TPI) on request" },
    { label: "Lead Time", value: "7–21 days depending on size, class and material" },
  ];

  const swingSteps = [
    { title: "Isolate and make safe", desc: "Close the upstream and downstream valves, depressurise, drain and purge the line, and apply lockout / tagout under the work permit." },
    { title: "Loosen the bolts", desc: "Remove all studs except the pivot stud through the web hole; slacken the remaining ones evenly." },
    { title: "Spread the flanges", desc: "Open the joint with a flange spreader or jack screws just enough to clear the blind — do not lever on the gasket faces." },
    { title: "Swing the figure-8", desc: "Rotate the blind 180° on the pivot stud so the required side (blind or spacer) sits in the line." },
    { title: "Fit new gaskets", desc: "Install new gaskets on both faces. Spiral wound and ring joint gaskets must never be reused." },
    { title: "Re-bolt, torque and verify", desc: "Refit the studs, torque in a cross pattern to the specified value, leak test where required and update the blind register / tag." },
  ];

  const comparisonData = [
    { feature: "Isolation", sb: "Positive — solid plate across the bore", paddle: "Positive — solid paddle across the bore", blind: "Positive — closes a pipe end", valve: "Depends on seat tightness; DBB with bleed proven" },
    { feature: "Position visible?", sb: "Yes — from the web", paddle: "Yes — from the handle", blind: "Yes — line end is closed", valve: "Needs indicator, tag or lock" },
    { feature: "Pieces", sb: "1 — blind and spacer joined", paddle: "2 — paddle blank + paddle spacer", blind: "1", valve: "1 assembly" },
    { feature: "Standard", sb: "ASME B16.48", paddle: "ASME B16.48", blind: "ASME B16.5 / B16.47", valve: "API 6D / API 600 / API 602" },
    { feature: "Stays in the line?", sb: "Yes — between two flanges", paddle: "Swapped in and out", blind: "At pipe ends / nozzles", valve: "Yes — inline" },
    { feature: "Size practicality", sb: "Best up to about NPS 12–16", paddle: "Preferred for large bore", blind: "All sizes", valve: "All sizes" },
    { feature: "Best for", sb: "Lines isolated repeatedly", paddle: "Large lines, occasional isolation", blind: "Permanent closure, future tie-ins", valve: "Process control and short isolation" },
  ];

  const industryPages = [
    { label: "Spectacle Blind Flange for Oil & Gas", to: "/products/flanges/spectacle-blind-flange-for-oil-and-gas/" },
    { label: "Spectacle Blind Flange for Petrochemical", to: "/products/flanges/spectacle-blind-flange-for-petrochemical/" },
    { label: "Spectacle Blind Flange for Power Generation", to: "/products/flanges/spectacle-blind-flange-for-power-generation/" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">

      {/* Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link to="/" aria-label="Home" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/products/flanges/" className="hover:text-[#D71920] transition-colors">Flanges</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" className="text-[#D71920] font-medium">Spectacle Blind Flange</li>
            </ol>
          </nav>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">Spectacle Blind Flange Manufacturer — Figure-8 Blind to ASME B16.48</h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-sm md:text-base leading-relaxed">
            Remax Forge manufactures spectacle blinds (figure-8 blinds) to ASME B16.48 in NPS ½" to 24", Class 150 to 2500, with RF, FF or RTJ facing. We supply carbon steel, stainless, duplex, alloy and nickel alloy grades, with an EN 10204 3.1 MTC and full heat traceability.
          </p>
        </div>
      </div>

      {/* Sticky Nav */}
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
            <img src="/images/Spectacle-Blind-Flange-Weld-Neck-Flange.webp" width="659" height="872" fetchpriority="high" alt="Spectacle blind flange (figure-8 blind) to ASME B16.48 fitted between weld neck flanges" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "One piece: blind disc and spacer ring joined by a web", desc: "Machined from a single plate or forging, so the blind and spacer stay with the line and are always the same thickness and material." },
                { title: "Positive isolation with the position visible from outside", desc: "The web shows which side is in the line, so 'open' or 'blinded' can be checked at a glance during permits and turnarounds." },
                { title: "ASME B16.48, Class 150 to 2500, RF / FF / RTJ", desc: "Sized to fit ASME B16.5 flanges, NPS ½\" to 24\", with thickness checked to ASME B31.3 for special design conditions." },
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
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">Request Quote <ArrowRight size={18} /></button>
              <Link to="/contact/" className="px-6 py-3 rounded font-bold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 transition-all flex items-center gap-2"><Download size={18} className="text-slate-500" /> Request Catalogue</Link>
            </div>
          </div>
        </div>

        <TrustBar />

        {/* Safety Compliance Callout */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle size={28} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-extrabold text-amber-800 text-lg mb-2">Blinding: the recognised positive isolation method</h3>
            <p className="text-amber-700 text-sm leading-relaxed font-medium mb-3">
              OSHA 29 CFR 1910.146 defines blanking or blinding as the absolute closure of a line by a solid plate "such as a spectacle blind". Blinding is the standard way to isolate hazardous lines for confined space entry, lockout / tagout (1910.147) and process safety management (1910.119). When ordering, specify:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-amber-800 font-bold">
              {["1. NPS (e.g. 6\")", "2. Pressure Class (e.g. 300#)", "3. Material (e.g. A516 Gr.70)", "4. Facing (RF / FF / RTJ)", "5. Service (fluid, temp, pressure)", "6. Standard (ASME B16.48)"].map((item, idx) => (
                <div key={idx} className="bg-amber-100 rounded-lg px-3 py-2">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">What is a Spectacle Blind Flange?</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>
              A <strong>spectacle blind flange</strong> (also called a <strong>figure-8 blind</strong> or <strong>spec blind</strong>) is a line blind that is bolted between two pipe flanges and lets the line be switched between open and fully isolated. It is named after its shape, which looks like a pair of spectacles or the number 8. It has three parts:
            </p>
            <div className="space-y-3">
              {[
                { num: "1", title: "BLIND DISC", desc: "A solid plate. When it sits between the flanges, it blocks the line completely." },
                { num: "2", title: "SPACER RING", desc: "An open ring with a bore matched to the pipe. When it sits between the flanges, the line flows normally and the flange gap is kept." },
                { num: "3", title: "WEB (TIE BAR)", desc: "Joins the disc and ring, carries the pivot hole and identification marking, and shows from outside which side is in the line." },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="w-8 h-8 bg-[#D71920] rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0">{c.num}</div>
                  <div><p className="font-bold text-slate-800 text-sm">{c.title}</p><p className="text-slate-600 text-xs mt-1">{c.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              Because all three parts come from <strong>one piece of material</strong>, the blind and spacer are always the same thickness, grade and heat. This is the main difference from a <strong>paddle blind</strong>, where the paddle blank and paddle spacer are two separate pieces that have to be stored and swapped.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Common Names & Related Items</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[{ abbr: "Spec Blind", full: "Spectacle blind" }, { abbr: "Figure-8", full: "Figure-8 blind" }, { abbr: "Spectacle Plate", full: "Spectacle blind" }, { abbr: "Line Blind", full: "Generic term (ASME B16.48)" }, { abbr: "Paddle Blind", full: "Spade + spacer, two pieces" }, { abbr: "B16.48", full: "ASME Line Blanks standard" }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-sm">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-3">How It Works: 2 Positions</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50/60 border border-green-200 rounded-xl">
                  <p className="font-bold text-green-800 text-sm mb-2">✅ OPEN Position: Flow Allowed</p>
                  <p className="text-slate-600 text-sm">The spacer ring sits between the flanges and the line flows normally through the ring bore. The blind disc hangs outside the joint.</p>
                </div>
                <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl">
                  <p className="font-bold text-red-800 text-sm mb-2">🔒 BLIND Position: Line Isolated</p>
                  <p className="text-slate-600 text-sm">The figure-8 is swung through 180° so the solid disc sits between the flanges and the bore is fully closed. The spacer ring now hangs outside, so the position is easy to see.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-5">
              <p className="font-bold text-white text-sm mb-3">🛡️ WHY PLANTS SPECIFY SPECTACLE BLINDS</p>
              <div className="space-y-2">
                {[
                  "Positive isolation: a solid plate cannot pass fluid the way a worn valve seat can",
                  "The isolation status is visible from outside the flange, which simplifies permit checks and blind registers",
                  "Standard turnaround isolation point in refineries, chemical plants and offshore facilities",
                  "Required by many company safety standards for confined space entry and hot work on hazardous lines",
                  "Dimensions standardised by ASME B16.48 to fit ASME B16.5 flanges",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-[#D71920] shrink-0 mt-0.5">•</span>{s}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 To close a pipe end permanently, use a <Link to="/products/flanges/blind-flange/" className="text-[#D71920] hover:underline font-extrabold">blind flange</Link>. Spectacle blinds are usually fitted between <Link to="/products/flanges/weld-neck-flange/" className="text-[#D71920] hover:underline font-extrabold">weld neck flanges</Link>. See our <Link to="/products/flanges/" className="text-[#D71920] hover:underline font-extrabold">complete flange range</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Specifications for spectacle blind flanges made to ASME B16.48:</p>
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
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Flange Material Grades</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">The spectacle blind should match the material of the mating flanges and the line class. We supply the full range of standard and exotic grades:</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Spectacle Blind Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 text-sm text-slate-600">
              <h3 className="font-extrabold text-slate-800 text-base">Plate or forging?</h3>
              <p><strong>Plate</strong> is the most common source: ASTM A516 Gr.70 carbon steel or A240 304L / 316L stainless, profile-cut and machined.</p>
              <p><strong>Forgings</strong> are used where the line class calls for forged material, or for heavy sections: A105, A350 LF2 (low temperature), A182 F316L, F51 / F53 duplex and F11 / F22 alloy steel.</p>
              <p><strong>Sour service:</strong> material and hardness to NACE MR0175 / ISO 15156 or MR0103 on request.</p>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Spectacle blinds are made to ASME B16.48 (Line Blanks), which replaced API 590. For flanges to other standards, such as EN 1092-1 or JIS, we make them to the project drawing. The flange standards we work to are:</p>
          <StandardsTable />
        </div>

        {/* Dimensions */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Dimensions (ASME B16.48)</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            A spectacle blind is sized to the flanges it sits between. Its outside diameter fits inside the bolt circle, its bore matches the pipe, and its plate thickness is set by ASME B16.48 for each size and pressure class. The table shows the ASME B16.5 Class 150 mating flange dimensions that a figure-8 blind is made to fit.
          </p>

          <h3 className="text-base font-bold text-slate-800 mb-4">Class 150 Fit-Up: Mating Flange Dimensions</h3>
          <div className="mb-8">
            <FlangeDimensionsTable slug="spectacle-blind-flange" altText="Spectacle blind figure-8 drawing showing blind disc, spacer ring and tie bar per ASME B16.48" />
          </div>

          {/* Thickness calculation */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <h3 className="font-extrabold text-slate-800 text-base mb-3">Blind Thickness for Non-Standard Design Conditions</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Where the design pressure or temperature falls outside the standard class ratings, the minimum blank thickness is calculated with ASME B31.3 para. 304.5.3:</p>
            <p className="font-mono text-sm md:text-base text-[#0F172A] bg-white border border-slate-200 rounded-lg px-4 py-3 mb-4 overflow-x-auto whitespace-nowrap">t<sub>m</sub> = d<sub>g</sub> × √( 3P / 16SEW ) + c</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
              <li><strong>d<sub>g</sub></strong>: gasket inside diameter (RF / FF) or ring pitch diameter (RTJ)</li>
              <li><strong>P</strong>: internal design gauge pressure</li>
              <li><strong>S</strong>: allowable stress of the blind material at design temperature</li>
              <li><strong>E</strong>: quality factor</li>
              <li><strong>W</strong>: weld joint strength reduction factor</li>
              <li><strong>c</strong>: corrosion, erosion and machining allowances</li>
            </ul>
          </div>

          {/* Key notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "📐", note: "Blind disc and spacer ring are the same thickness, so the flange gap stays the same in both positions." },
              { icon: "📏", note: "Check the overall length of the figure-8 and the swing clearance in congested piping. The blind needs room to rotate on its pivot stud." },
              { icon: "⚖️", note: "Above about NPS 12–16, a one-piece figure-8 gets heavy to handle. Paddle blank and spacer sets are normally used instead." },
              { icon: "📋", note: "Class 300 to 2500 blinds are thicker. We supply a certified dimensional drawing for every size and class you quote." },
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="text-lg shrink-0">{n.icon}</span>
                <p className="text-slate-700 text-xs font-semibold leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>

          {/* Order checklist */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="font-extrabold text-lg mb-4">📋 To Order a Spectacle Blind, Send Us These Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "1. NPS: nominal pipe size (e.g. 6\")",
                "2. Pressure class (e.g. 150# or 300#)",
                "3. Material grade (e.g. A516 Gr.70 / A182 F316L)",
                "4. Facing (RF, FF or RTJ)",
                "5. Service fluid and design pressure / temperature",
                "6. Extras: NACE, low-temperature impact test, PMI, TPI",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="text-[#D71920] shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
            <button onClick={() => openQuotePopup()} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all">Request Quote <ArrowRight size={16} /></button>
          </div>
        </div>

        {/* Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Facing Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">The facing of the spectacle blind must match the mating flanges. Raised Face (RF) is the most common. Ring Type Joint (RTJ) blinds have a ring groove on both faces and are standard in Class 600 and above. Flat Face (FF) blinds are used with flat-faced flanges, such as cast iron or FRP equipment.</p>
          <FlangeFaceTypes />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Advantages & Limitations of Spectacle Blinds</h2>

          {/* Icon advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-[#D71920]/30 transition-all">
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div><h3 className="font-bold text-slate-900 mb-1">{adv.title}</h3><p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p></div>
              </div>
            ))}
          </div>

          {/* vs Valves */}
          <h3 className="text-base font-extrabold text-slate-800 mb-3 uppercase tracking-wide border-l-4 border-green-500 pl-3">Compared with valves</h3>
          <div className="space-y-2 mb-8">
            {[
              "A solid blind gives positive isolation; a closed valve can pass if its seats are worn or damaged",
              "The blind position is visible from outside, so it can be checked during permit sign-off",
              "No moving parts or seats to wear. Gaskets are renewed each time the blind is swung",
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-50/60 border border-green-100 rounded-xl p-3 text-sm text-green-800 font-medium">
                <span className="shrink-0 font-bold">✅</span>{v}
              </div>
            ))}
          </div>

          {/* vs Paddle Blind */}
          <h3 className="text-base font-extrabold text-slate-800 mb-3 uppercase tracking-wide border-l-4 border-blue-400 pl-3">Compared with paddle blinds (paddle blank + paddle spacer)</h3>
          <div className="space-y-2 mb-8">
            {[
              { good: true,  text: "One piece: the blind and spacer stay with the line, so nothing is lost or taken from the wrong line class" },
              { good: true,  text: "The isolation status is clear from the web" },
              { good: true,  text: "Faster switching: swing on the pivot stud instead of fetching and fitting a second piece" },
              { good: false, text: "Heavier and harder to handle in large sizes (above about NPS 12–16), where paddle sets are preferred" },
              { good: false, text: "Needs swing clearance around the flange and usually costs more than a paddle blank for the same size" },
            ].map((v, i) => (
              <div key={i} className={`flex items-start gap-3 rounded-xl p-3 text-sm font-medium ${v.good ? 'bg-green-50/60 border border-green-100 text-green-800' : 'bg-amber-50 border border-amber-100 text-amber-800'}`}>
                <span className="shrink-0 font-bold">{v.good ? '✅' : '⚠️'}</span>{v.text}
              </div>
            ))}
          </div>

          {/* Safety Compliance */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-sm font-extrabold text-white mb-4 uppercase tracking-wide">🛡️ Where Blinding Appears in Safety Rules</h3>
            <div className="space-y-2">
              {[
                "OSHA 29 CFR 1910.146 (confined spaces): blanking or blinding is a recognised isolation method, and a spectacle blind is named in its definition",
                "OSHA 29 CFR 1910.147 (lockout / tagout) and 1910.119 (PSM): hazardous energy must be isolated; blinding is the most positive way to do it",
                "Process safety regimes such as COMAH and Seveso, and most operator standards, call for blinding on hazardous lines before entry or hot work",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300 font-medium">
                  <span className="text-[#D71920] mt-0.5 shrink-0">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swinging procedure */}
        <div id="procedure" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">How to Swing a Spectacle Blind</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">The typical sequence for changing a figure-8 blind from open to blind, or back. Always follow your site's work permit and isolation procedure.</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {swingSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                <span className="w-8 h-8 bg-[#D71920] rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0">{idx + 1}</span>
                <div><h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3><p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p></div>
              </li>
            ))}
          </ol>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Spectacle Blind Applications & Industries</h2>
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4">✓ Typical Isolation Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />{app}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10 flex flex-wrap gap-3">
            {industryPages.map((page) => (
              <Link key={page.to} to={page.to} className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 hover:border-[#D71920] hover:text-[#D71920] transition-colors">
                {page.label} <ChevronRight size={14} />
              </Link>
            ))}
          </div>
          <IndustriesApplications />
        </div>

        {/* Testing + Docs */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Testing & Inspection</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Every spectacle blind is checked for dimensions, thickness, flatness and face finish, with PMI on alloy grades. Ultrasonic testing of the plate, hardness testing for NACE service and third-party inspection are available for critical service.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">Every shipment comes with an EN 10204 3.1 MTC. The heat number is traced from the raw plate or forging to the finished blind, covering chemistry, mechanical properties and the dimensional report.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div id="comparison" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind vs Paddle Blind vs Blind Flange vs Valve</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">How the common isolation options compare, to help you pick the right one for each point:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Spectacle Blind</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Paddle Blind</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Blind Flange</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Valve / DBB</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.sb}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.paddle}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.blind}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.valve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/products/flanges/blind-flange/" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> Blind Flange</Link>
            <Link to="/products/flanges/weld-neck-flange/" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> Weld Neck Flange</Link>
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
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Spectacle Blind Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Covers ASME B16.48 size and class range, material grades, facings and testing options. Send your line list or RFQ and we will return certified drawings with the quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</Link>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get Instant Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        {/* FAQ */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Flange FAQs</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Answers to common buyer questions: figure-8 vs paddle blind, ASME B16.48, RTJ facing, materials and when to use a blind flange instead.</p>
          <FlangeFAQs slug="spectacle-blind-flange" />
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Flanges</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Flanges commonly ordered with spectacle blinds for the same piping project.</p>
          <RelatedFlanges activeSlug="spectacle-blind-flange" />
        </div>

      </div>
    </div>
  );
};

export default SpectacleBlind;
