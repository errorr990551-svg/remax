import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download } from 'lucide-react';
import { useQuotePopup } from '../../context/QuotePopupContext';
import { 
  WhyChooseRemax, 
  HowToOrder,
  FlangeFAQs
} from '../../components/products/flanges/FlangeCommonContent.jsx';

const BoilerQualityPlateSupplierinIndia = () => {
  const { openQuotePopup } = useQuotePopup();

  const specsRows = [
    { label: "Standards", value: "IS 2002 Grade 1/2/3, ASTM A516 / ASME SA516 Grade 60/65/70" },
    { label: "Thickness Range", value: "6mm to 150mm standard stock" },
    { label: "Plate Sizes", value: "Widths up to 3000mm, lengths up to 12000mm" },
    { label: "Testing Scope", value: "HIC (Hydrogen Induced Cracking) NACE TM0284, Charpy V-notch impact test at -29°C" },
    { label: "Certifications", value: "IBR Form IV approved, EN 10204 3.1 / 3.2 MTCs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Product Details</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Boiler Quality Plate Supplier in India</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Boiler Quality Plate Supplier in India
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img 
              src="/images/boiler-quality-plates.webp" 
              alt="Boiler Quality Plate Supplier in India standard specifications and materials" 
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
              Key Details
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-red-50/50 p-2 rounded-full h-fit">
                  <CheckCircle2 size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">ISO 9001:2015 Quality standards</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">
                    Strict mechanical and testing logs are validated for each forging batch before dispatch.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-red-50/50 p-2 rounded-full h-fit">
                  <CheckCircle2 size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Short production lead times</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">
                    Typically dispatched in 7–14 days with standard EN 10204 3.1 Mill Test Reports.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <button 
                onClick={openQuotePopup} 
                className="px-8 py-4 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Request Quote <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Brief Outlines */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            What is Boiler Quality Plate
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>Intro: BQ plate — low-alloy carbon steel for pressure vessels and boilers at elevated temperatures.</p>
            <p>IS 2002 grades: Grade 1 (up to 250°C), Grade 2 (up to 350°C), Grade 3 (up to 450°C) — chemical composition and UTS table.</p>
            <p>ASTM A516: Gr55/Gr60/Gr65/Gr70 — yield strength and UTS table.</p>
            <p>Equivalence table: IS 2002 Gr2 ≈ A516 Gr60; IS 2002 Gr3 ≈ A516 Gr70.</p>
            <p>Thickness range: 6mm to 150mm in standard mill sizes (up to 3000mm × 12000mm).</p>
            <p>Normalizing: mandatory for thickness &gt; 40mm per IS 2002; ASTM A516 all thicknesses if Charpy required.</p>
            <p>IBR scope: boiler drums, headers, steam vessels above 1 kg/cm² per IBR 1950 Reg 4.</p>
            <p>Applications: boiler drums, pressure vessels, heat exchanger shells, storage tanks.</p>
            <p>NACE HIC testing (Hydrogen Induced Cracking) for sour service — HIC-tested A516 Gr70.</p>
            <p>CTA.</p>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            IS 2002 vs ASTM A516
          </h2>
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

        {/* Why Choose Us */}
        <WhyChooseRemax />

        {/* How to Order */}
        <HowToOrder />

        {/* Dynamic FAQ Accordion */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Browse answers to common piping and forged components questions. Contact our technical team for custom configurations.
          </p>
          <FlangeFAQs slug="boiler-quality-plate" />
        </div>
      </div>
    </div>
  );
};

export default BoilerQualityPlateSupplierinIndia;
