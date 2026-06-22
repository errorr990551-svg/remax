import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download, AlertTriangle } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { MaterialGradesTable, StandardsTable, FlangeFaceTypes, TestingInspection, DocumentsCertificates, SurfaceFinish, ExportMarkets, IndustriesApplications, WhyChooseRemax, HowToOrder, FlangeFAQs, RelatedFlanges } from '../../../components/products/flanges/FlangeCommonContent.jsx';

const SpectacleBlind = () => {
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
    { icon: "🔒", title: "Positive Isolation — Zero Leakage", desc: "Unlike valves (which can leak past seats), a correctly installed spectacle blind provides absolute isolation — required by OSHA 1910.147 and PSM regulations." },
    { icon: "👁️", title: "Always Visible from Outside", desc: "The handle always points to the active disc (BLIND or OPEN). No need to open the flange — isolation status is readable at a glance from outside." },
    { icon: "🔗", title: "One Piece — Cannot be Lost or Mixed Up", desc: "Blind disc and open ring are permanently joined from a single plate. Unlike Paddle Blinds (two separate pieces), there is no risk of mix-up or missing components." },
    { icon: "🔄", title: "Fast Switching — One Rotation", desc: "Switch from flow to isolation by unbolting flanges, rotating the figure-8, and re-bolting. One operation vs removing and reinstalling two separate Paddle Blind pieces." },
    { icon: "🏭", title: "Mandatory for Turnarounds (TAR)", desc: "Standard safety requirement in refineries, chemical plants, and offshore platforms for unit shutdown isolation. Required by API 590, ASME B16.48, and plant safety procedures." },
    { icon: "🛡️", title: "Compliant with OSHA & PSM Regulations", desc: "Classified as a positive isolation device under OSHA 1910.147 (Control of Hazardous Energy). Required by process safety regulations for maintenance on hazardous lines." },
  ];

  const applications = [
    "Refinery unit isolation during scheduled maintenance \"turnarounds\" (TAR)",
    "Chemical plant reactor isolation for catalyst change or inspection",
    "Vessel isolation for inspection or repair (nitrogen purging, confined space entry)",
    "Pipeline segment isolation for hydrostatic pressure testing",
    "Compressor suction and discharge isolation during overhaul",
    "Heat exchanger bundle isolation during bundle pull and inspection",
    "Flare/relief header isolation during test or depressuring operations",
    "Amine unit, sulfur unit, HF alkylation unit — all hazardous service isolation",
  ];

  const specsRows = [
    { label: "Product Names", value: "Spectacle Blind, Figure-8 Blind, Spec Blind, Spectacle Plate, Spectacle Flange" },
    { label: "Size Range", value: "½\" (15 NB) to 24\" (600 NB) per ASME B16.48; larger on custom order" },
    { label: "Pressure Classes", value: "150#, 300#, 400#, 600#, 900#, 1500# (per ASME B16.48)" },
    { label: "Face Types", value: "RF (Raised Face) — most common; FF (Flat Face); RTJ NOT available for spectacle blinds" },
    { label: "Standard", value: "ASME B16.48 (primary); API 590; EN 1092-1 (European markets)" },
    { label: "Thickness", value: "Per ASME B16.48 — blind plate and ring have different thicknesses; ring is thinner" },
    { label: "Handle", value: "Integral handle for rotation; includes \"BLIND\" and \"OPEN\" markings on each disc per ASME B16.48" },
    { label: "Material", value: "Both discs and connecting bar machined from same plate — no mismatched pieces possible" },
    { label: "MTC", value: "EN 10204 3.1 standard; 3.2 available" },
    { label: "Lead Time", value: "7–21 days depending on size and material" },
  ];

  const dimRows = [
    { nps: "2\"", rating: "150#", blindOD: 152, ringOD: 152, ringBore: 54, boltCircle: 121, bolts: 4, blindThk: "9.5", ringThk: "6.4", totalWidth: 330, wt: "1.8" },
    { nps: "3\"", rating: "150#", blindOD: 190, ringOD: 190, ringBore: 79, boltCircle: 152, bolts: 4, blindThk: "9.5", ringThk: "6.4", totalWidth: 408, wt: "3.0" },
    { nps: "4\"", rating: "150#", blindOD: 229, ringOD: 229, ringBore: 104, boltCircle: 190, bolts: 8, blindThk: "9.5", ringThk: "6.4", totalWidth: 483, wt: "4.5" },
    { nps: "6\"", rating: "150#", blindOD: 279, ringOD: 279, ringBore: 154, boltCircle: 241, bolts: 8, blindThk: "12.7", ringThk: "9.5", totalWidth: 584, wt: "8.5" },
    { nps: "8\"", rating: "150#", blindOD: 343, ringOD: 343, ringBore: 206, boltCircle: 298, bolts: 8, blindThk: "12.7", ringThk: "9.5", totalWidth: 711, wt: "14.0" },
    { nps: "10\"", rating: "150#", blindOD: 406, ringOD: 406, ringBore: 260, boltCircle: 362, bolts: 12, blindThk: "14.3", ringThk: "9.5", totalWidth: 838, wt: "22.0" },
    { nps: "12\"", rating: "150#", blindOD: 483, ringOD: 483, ringBore: 311, boltCircle: 432, bolts: 12, blindThk: "15.9", ringThk: "12.7", totalWidth: 991, wt: "34.0" },
    { nps: "16\"", rating: "150#", blindOD: 597, ringOD: 597, ringBore: 413, boltCircle: 540, bolts: 16, blindThk: "17.5", ringThk: "14.3", totalWidth: 1219, wt: "60.0" },
    { nps: "20\"", rating: "150#", blindOD: 699, ringOD: 699, ringBore: 514, boltCircle: 635, bolts: 20, blindThk: "19.1", ringThk: "15.9", totalWidth: 1422, wt: "98.0" },
    { nps: "24\"", rating: "150#", blindOD: 813, ringOD: 813, ringBore: 616, boltCircle: 749, bolts: 20, blindThk: "22.4", ringThk: "17.5", totalWidth: 1651, wt: "148.0" },
  ];

  const comparisonData = [
    { feature: "Isolation Type", sb: "POSITIVE — zero leakage possible", paddle: "Positive (two separate pieces)", valve: "Non-positive (seats can leak)" },
    { feature: "Position Visible?", sb: "✅ Yes — always externally visible", paddle: "✅ Yes — tab visible", valve: "Requires indicator or tag" },
    { feature: "Pieces to Manage", sb: "1 piece — permanently joined", paddle: "2 pieces (spade + ring)", valve: "1 unit — no field pieces" },
    { feature: "Standard", sb: "ASME B16.48", paddle: "ASME B16.48", valve: "API 6D / API 600" },
    { feature: "Installed Permanently?", sb: "✅ Yes — stays between flanges always", paddle: "Stored separately, swapped in use", valve: "Inline — always present" },
    { feature: "Large Bore (>16\")", sb: "Heavy — consider Paddle Blind", paddle: "Preferred for large bore", valve: "Standard for all sizes" },
    { feature: "Maintenance Isolation", sb: "✅ Best — required by OSHA 1910.147", paddle: "✅ Accepted positive isolation", valve: "❌ Not considered positive isolation" },
    { feature: "Best For", sb: "Frequent cycling, NPS 2\"–14\"", paddle: "Large bore NPS 16\"+", valve: "Flow control (not isolation)" },
  ];

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

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">

      {/* Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} /><a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} /><span className="text-slate-400">Flanges</span>
            <ChevronRight size={14} /><span className="text-[#D71920] font-medium">Spectacle Blind Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">Spectacle Blind Flange Supplier</h1>
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
            <img src="/images/Spectacle-Blind-Flange-Weld-Neck-Flange.webp" alt="Spectacle Blind Flange Figure-8 Spec Blind ASME B16.48 Manufacturer Mumbai India" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "One piece — solid blind disc and open ring permanently joined", desc: "Both discs are machined from a single plate and are permanently connected — they NEVER get separated. Critical safety advantage over Paddle Blinds (two separate pieces that can be mixed up or lost)." },
                { title: "Positive isolation — zero leakage, always visible from outside", desc: "The handle always points to the active disc (BLIND or OPEN). Position is readable from outside the flange — critical for safety in confined spaces and shutdown operations." },
                { title: "Mandatory for maintenance isolation in hazardous service", desc: "Required by OSHA 1910.147 and Process Safety Management (PSM) regulations for positive isolation during maintenance on hazardous process lines." },
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

        {/* Safety Compliance Callout */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle size={28} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-extrabold text-amber-800 text-lg mb-2">Regulatory Requirement: Positive Isolation for Hazardous Service</h3>
            <p className="text-amber-700 text-sm leading-relaxed font-medium mb-3">
              Spectacle blinds are classified as <strong>positive isolation devices</strong> under OSHA 1910.147 (Control of Hazardous Energy) and are required for maintenance isolation on hazardous process lines. When ordering, specify:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-amber-800 font-bold">
              {["1. NPS (e.g. 6\")", "2. Pressure Class (e.g. 300#)", "3. Material (e.g. A516 Gr.70)", "4. Face Type (RF / FF)", "5. Service (fluid, temp, pressure)", "6. Standard (ASME B16.48)"].map((item, idx) => (
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
              A <strong>Spectacle Blind Flange</strong> (also called <strong>Figure-8 Blind</strong> or <strong>Spec Blind</strong>) is a dual-disc safety isolation device permanently installed between two flanges. It consists of:
            </p>
            <div className="space-y-3">
              {[
                { num: "1", title: "SOLID DISC (the \"blind\")", desc: "Blocks flow completely when rotated into position — provides absolute positive isolation." },
                { num: "2", title: "OPEN RING (the \"spacer\")", desc: "Allows normal flow when rotated into position — ring bore matches pipe bore for unrestricted flow." },
                { num: "3", title: "CONNECTING BAR / HANDLE", desc: "Joins both discs permanently and allows visual identification from outside — always readable at a glance." },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="w-8 h-8 bg-[#D71920] rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0">{c.num}</div>
                  <div><p className="font-bold text-slate-800 text-sm">{c.title}</p><p className="text-slate-600 text-xs mt-1">{c.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              The two discs are machined from a <strong>single plate</strong> and are permanently joined — they <strong>NEVER get separated</strong>. This is the critical safety advantage over Paddle Blinds (which use two separate pieces that can be mixed up or lost).
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Industry Abbreviations & Variants</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[{ abbr: "Spec Blind", full: "Spectacle Blind" }, { abbr: "Figure-8", full: "Figure-8 Blind" }, { abbr: "Spectacle Plate", full: "Spectacle Plate" }, { abbr: "Line Blind", full: "Line Blind (generic)" }, { abbr: "Spade & Ring", full: "Paddle Blind (separate pieces)" }, { abbr: "B16.48", full: "ASME B16.48 (primary standard)" }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                    <div className="font-extrabold text-[#D71920] text-sm">{item.abbr}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.full}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-3">How It Works — 2 Positions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50/60 border border-green-200 rounded-xl">
                  <p className="font-bold text-green-800 text-sm mb-2">✅ OPEN Position — Flow Allowed</p>
                  <p className="text-slate-600 text-sm">Open ring sits between the two flanges. Fluid flows freely through the ring bore. Handle points to <strong>"OPEN"</strong> side.</p>
                </div>
                <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl">
                  <p className="font-bold text-red-800 text-sm mb-2">🔒 BLIND Position — 100% Blocked</p>
                  <p className="text-slate-600 text-sm">Solid blind disc rotated into position. Fluid is 100% blocked. Handle points to <strong>"BLIND"</strong> side. Positive isolation confirmed.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-5">
              <p className="font-bold text-white text-sm mb-3">🛡️ SAFETY IMPORTANCE</p>
              <div className="space-y-2">
                {[
                  "Position is ALWAYS VISIBLE from outside the flange — critical for safety in confined spaces and shutdown operations",
                  "Mandatory in refineries, chemical plants, and offshore platforms for turnaround/maintenance isolation",
                  "Provides POSITIVE ISOLATION (also called \"positive blindage\") — more reliable than valves (valves can leak past seats)",
                  "OSHA, NFPA, and industry PSM (Process Safety Management) programs require positive isolation during maintenance",
                  "Standard: ASME B16.48 (Line Blinds — the primary standard)",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-[#D71920] shrink-0 mt-0.5">•</span>{s}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 For frequent maintenance isolation cycling, Spectacle Blind is preferred over a standard <a href="/products/flanges/blind-flange" className="text-[#D71920] hover:underline font-extrabold">Blind Flange</a>. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a> for your project.
              </p>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Standard Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Complete specifications for Spectacle Blind Flanges per ASME B16.48:</p>
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
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">We forge Spectacle Blinds in all standard and exotic materials — both discs and the connecting bar machined from the same plate to ensure perfectly matched material properties:</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8"><MaterialGradesTable productName="Spectacle Blind Flange" /></div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img src="/images/nickel-alloy-bar-500x500.webp" alt="Spectacle Blind Flange material grades stainless duplex inconel hastelloy" className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2" />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Plate / Billets stock</span>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind Standards & Specifications</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">Manufactured per ASME B16.48, API 590, EN 1092-1, DIN, JIS, and BS standards for line blinds:</p>
          <StandardsTable />
        </div>

        {/* Dimensions */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">ASME B16.48 Spectacle Blind Flange Dimensions</h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Class 150# dimensions per ASME B16.48. Weights are approximate for Carbon Steel A516 Gr.70. <strong>Note: blind disc and ring have different thicknesses</strong> — the ring is thinner as it only provides spacing, not pressure containment.
          </p>

          <div className="mb-8">
            <h3 className="text-base font-bold text-slate-800 mb-4">ASME B16.48 — Class 150# Dimensions</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F172A] text-white">
                    {["NPS (in)", "Rating", "Blind OD (mm)", "Ring OD (mm)", "Ring Bore (mm)", "Bolt Circle (mm)", "No. Bolts", "Blind Thk (mm)", "Ring Thk (mm)", "Overall Width (mm)", "Wt CS (kg)"].map((h, i) => (
                      <th key={i} className="px-3 py-3 font-bold whitespace-nowrap border-r border-slate-700 last:border-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dimRows.map((row, idx) => (
                    <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <td className="px-3 py-3 font-bold text-slate-800 border-r border-slate-200">{row.nps}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.rating}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.blindOD}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.ringOD}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.ringBore}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.boltCircle}</td>
                      <td className="px-3 py-3 text-slate-600 border-r border-slate-200">{row.bolts}</td>
                      <td className="px-3 py-3 font-semibold text-slate-800 border-r border-slate-200">{row.blindThk}</td>
                      <td className="px-3 py-3 text-slate-500 border-r border-slate-200">{row.ringThk}</td>
                      <td className="px-3 py-3 text-[#D71920] font-bold border-r border-slate-200">{row.totalWidth}</td>
                      <td className="px-3 py-3 text-slate-600">{row.wt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic mt-2">Dimensions per ASME B16.48. Weights are approximate. Contact us for Class 300# tables and exact certified drawings.</p>
          </div>

          {/* Key notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "📐", note: "Blind disc and ring have DIFFERENT thicknesses — ring is thinner as it only provides spacing (not pressure containment)." },
              { icon: "📏", note: "Overall Width = total span of the figure-8 shape. Critical dimension for space planning in congested piping areas." },
              { icon: "⚖️", note: "Above NPS 16\", spectacle blinds become very heavy (60–150+ kg) — consider Paddle Blind (spade + spacer ring) for large bore." },
              { icon: "📋", note: "Class 300# requires thicker blind plates per ASME B16.48. Contact us for Class 300#, 600#, and 900# dimension tables." },
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="text-lg shrink-0">{n.icon}</span>
                <p className="text-slate-700 text-xs font-semibold leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>

          {/* Order checklist */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="font-extrabold text-lg mb-4">📋 To Order a Spectacle Blind — Send Us These Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "1. NPS — Nominal Pipe Size (e.g. 6\")",
                "2. Pressure Class (e.g. 150# or 300#)",
                "3. Material Grade (e.g. A516 Gr.70 / A182 F316L)",
                "4. Face Type (RF — Raised Face / FF — Flat Face)",
                "5. Service Fluid (e.g. crude oil, steam, H2S, acid)",
                "6. Special requirements (NACE, low-temp, HIC tested)",
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
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Flange Face Types</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Spectacle Blinds are available in RF (Raised Face — most common) and FF (Flat Face). RTJ is not used for spectacle blinds per ASME B16.48.</p>
          <FlangeFaceTypes />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Advantages &amp; Limitations — Spectacle Blind vs Other Isolation Methods</h2>

          {/* Icon advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-[#D71920]/30 transition-all">
                <span className="text-3xl shrink-0">{adv.icon}</span>
                <div><h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4><p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p></div>
              </div>
            ))}
          </div>

          {/* vs Valves */}
          <h3 className="text-base font-extrabold text-slate-800 mb-3 uppercase tracking-wide border-l-4 border-green-500 pl-3">vs Valves</h3>
          <div className="space-y-2 mb-8">
            {[
              "Spectacle Blind provides POSITIVE isolation — zero leakage possible; valves can leak past seats",
              "Spectacle Blind is visible from outside — always know current isolation status",
              "No valve seat degradation — spectacle blind never wears out; valves deteriorate over time",
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-50/60 border border-green-100 rounded-xl p-3 text-sm text-green-800 font-medium">
                <span className="shrink-0 font-bold">✅</span>{v}
              </div>
            ))}
          </div>

          {/* vs Paddle Blind */}
          <h3 className="text-base font-extrabold text-slate-800 mb-3 uppercase tracking-wide border-l-4 border-blue-400 pl-3">vs Paddle Blind (Spade + Spacer Ring — two separate pieces)</h3>
          <div className="space-y-2 mb-8">
            {[
              { good: true,  text: "Spectacle Blind = ONE PIECE ALWAYS — blind and ring joined; cannot be lost, mixed up, or installed wrong" },
              { good: true,  text: "Installation is clearer — handle points to which side is active; no confusion" },
              { good: true,  text: "Faster switching — one rotation vs removing and reinstalling two separate pieces" },
              { good: false, text: "Spectacle Blind is heavier for large sizes (NPS 16\u201D+) — Paddle Blind preferred for large bore" },
              { good: false, text: "Spectacle Blind costs more than equivalent Paddle Blind" },
            ].map((v, i) => (
              <div key={i} className={`flex items-start gap-3 rounded-xl p-3 text-sm font-medium ${v.good ? 'bg-green-50/60 border border-green-100 text-green-800' : 'bg-amber-50 border border-amber-100 text-amber-800'}`}>
                <span className="shrink-0 font-bold">{v.good ? '✅' : '❌'}</span>{v.text}
              </div>
            ))}
          </div>

          {/* Safety Compliance */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-sm font-extrabold text-white mb-4 uppercase tracking-wide">🛡️ Safety Compliance Requirements</h3>
            <div className="space-y-2">
              {[
                "Required by OSHA 1910.147 (Lockout/Tagout — positive isolation of hazardous energy)",
                "Required by process safety regulations (PSM, COMAH, SEVESO) for critical isolation",
                "API 598, ASME B31.3 recommend spectacle blinds for maintenance isolation on hazardous service lines",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300 font-medium">
                  <span className="text-[#D71920] mt-0.5 shrink-0">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-8">Industries & Applications</h2>
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4">✓ Primary Applications — Hazardous Service Isolation</h3>
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
              <p className="text-slate-600 text-sm font-medium mb-6">All spectacle blinds undergo dimensional inspection, face finish verification, and PMI. Optional hydrostatic pressure testing and UT are available for critical service applications.</p>
            </div>
            <TestingInspection />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Documents & Certificates</h2>
              <p className="text-slate-600 text-sm font-medium mb-6">EN 10204 3.1 MTC standard with every shipment. Full traceability from raw plate to finished spectacle blind — chemical composition, mechanical properties, dimensional report.</p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Spectacle Blind vs Paddle Blind vs Valve</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Understanding the differences helps you select the correct isolation device for your application:</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Feature</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700 bg-[#D71920]/20">Spectacle Blind</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider border-r border-slate-700">Paddle Blind</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Valve</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    <td className="px-5 py-3.5 font-bold text-slate-800 border-r border-slate-200">{row.feature}</td>
                    <td className="px-5 py-3.5 text-slate-700 font-semibold border-r border-slate-200 bg-red-50/30">{row.sb}</td>
                    <td className="px-5 py-3.5 text-slate-600 border-r border-slate-200">{row.paddle}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.valve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="/products/flanges/blind-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Blind Flange →</a>
            <a href="/products/flanges/weld-neck-flange" className="text-sm text-[#D71920] font-bold hover:underline flex items-center gap-1"><ChevronRight size={14} /> View Weld Neck Flange →</a>
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
            <h2 className="text-2xl font-extrabold text-white mb-2">📥 Download Spectacle Blind Flange Catalogue (PDF)</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Technical catalogue including Class 150# & 300# dimension tables, material grades, ASME B16.48 standards, weight charts — ready for your RFQ or technical review.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D71920] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg whitespace-nowrap"><Download size={18} /> Request PDF Catalogue</a>
            <button onClick={() => openQuotePopup()} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 whitespace-nowrap">Get Instant Quote <ArrowRight size={18} /></button>
          </div>
        </div>

        <HowToOrder />

        {/* FAQ */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Common questions about Spectacle Blind Flanges — Figure-8 vs Paddle Blind, ASME B16.48, face finish, large bore alternatives, and handle markings.</p>
          <FlangeFAQs slug="spectacle-blind-flange" />
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">Related Products</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">Compare our complete range of industrial flanges and isolation devices for your piping project.</p>
          <RelatedFlanges activeSlug="spectacle-blind-flange" />
        </div>

      </div>
    </div>
  );
};

export default SpectacleBlind;
