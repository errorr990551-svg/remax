import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { 
  WhyChooseRemax, 
  HowToOrder,
  FlangeFAQs
} from '../../../components/products/flanges/FlangeCommonContent.jsx';

const AlloySteelPipeManufacturerinIndia = () => {
  const { openQuotePopup } = useQuotePopup();

  const specsRows = [
    { label: "Standard Specifications", value: "ASTM A335, ASME SA335 (Seamless); ASTM A691 (Welded)" },
    { label: "Grades", value: "P5, P9, P11, P22, P91, P92 (Chrome-Moly Alloy)" },
    { label: "Size Range", value: "1/2\" to 36\" Nominal Pipe Size (Seamless)" },
    { label: "Schedules / Wall Thickness", value: "SCH 10, 20, 40, 80, 160, XXS" },
    { label: "Compliance", value: "IBR (Indian Boiler Regulations) certified Form III-A / III-B" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Products</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Alloy Steel Pipe Manufacturer in India</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Alloy Steel Pipe Manufacturer in India
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img 
              src="/images/alloy-steel-pipes.webp" 
              alt="Alloy Steel Pipe Manufacturer in India standard specifications and materials" 
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
            Alloy Steel Pipe Grades Explained
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>Intro: Alloy steel pipes for high-temp/high-pressure service — chrome-moly grades.</p>
            <p>Grade table: P5 (5Cr-0.5Mo), P9 (9Cr-1Mo), P11 (1.25Cr-0.5Mo), P22 (2.25Cr-1Mo), P91 (9Cr-1Mo-V), P92 (9Cr-1.8W-Mo-V). For each: composition, max service temp, typical application.</p>
            <p>Standard: ASTM A335 (seamless), A691 (welded), A213 (tubes).</p>
            <p>Dimensions: OD range 1/2" to 36", SCH 10 to XXS.</p>
            <p>Mechanical properties table: YS/UTS/elongation per ASTM.</p>
            <p>Heat treatment: normalize + temper (P11/P22); normalized + tempered (P91 — strict 730–780°C PWHT required).</p>
            <p>IBR approval requirements.</p>
            <p>PWHT requirement note for P91 (CRITICAL: 730–780°C, 1 hr/25mm).</p>
            <p>Applications: supercritical boilers, hydrotreaters, reformers, ethylene crackers.</p>
            <p>CTA.</p>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            ASTM A335 Standard
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
          <FlangeFAQs slug="alloy-steel-pipes" />
        </div>
      </div>
    </div>
  );
};

export default AlloySteelPipeManufacturerinIndia;
