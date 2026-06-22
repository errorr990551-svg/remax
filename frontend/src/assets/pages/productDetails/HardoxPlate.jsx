import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Download } from 'lucide-react';
import { useQuotePopup } from '../../context/QuotePopupContext';
import { 
  WhyChooseRemax, 
  HowToOrder,
  FlangeFAQs
} from '../../components/products/flanges/FlangeCommonContent.jsx';

const HardoxPlateSupplierinIndia = () => {
  const { openQuotePopup } = useQuotePopup();

  const specsRows = [
    { label: "Grades", value: "Hardox 400, Hardox 450, Hardox 500, Hardox 600" },
    { label: "Typical Hardness", value: "370–430 HBW (Hardox 400) | 425–475 HBW (Hardox 450) | 470–530 (Hardox 500)" },
    { label: "Thickness Range", value: "4mm to 160mm (depends on grade)" },
    { label: "Fabrication", value: "Weldable with low hydrogen electrodes; preheating required for heavy plates" },
    { label: "Cutting Options", value: "CNC Plasma, Oxy-Fuel profiling, and Laser cutting available" },
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
            <span className="text-[#D71920] font-medium">Hardox Plate Supplier in India</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Hardox Plate Supplier in India
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img 
              src="/images/hardox-plate.webp" 
              alt="Hardox Plate Supplier in India standard specifications and materials" 
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
            What is Hardox Wear Plate
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
            <p>Intro: Hardox — SSAB's premium wear-resistant steel. Superior abrasion resistance vs standard AR plates.</p>
            <p>Grade comparison table: Hardox 400 (370–430 HBW), Hardox 450 (425–475 HBW), Hardox 500 (470–530 HBW), Hardox 600 (570–640 HBW) — typical YS/UTS/elongation/Charpy.</p>
            <p>Thickness range: Hardox 400 (4mm–160mm), 450 (4mm–103mm), 500 (4mm–80mm), 600 (4mm–32mm).</p>
            <p>Weldability: Hardox has low PCM (carbon equivalent) — pre-heat requirements per Hardox Weldox handbook. Pre-heat table by grade and thickness.</p>
            <p>Hardox vs generic AR plate: consistent hardness through-thickness (Hardox), tighter tolerances, guaranteed Charpy.</p>
            <p>Applications: dump truck bodies, excavator buckets, crusher liners, cement mill liners, conveyor hoppers, chutes.</p>
            <p>CTA.</p>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            Hardox 400 vs 450 vs 500 vs 600
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
          <FlangeFAQs slug="hardox-plate" />
        </div>
      </div>
    </div>
  );
};

export default HardoxPlateSupplierinIndia;
