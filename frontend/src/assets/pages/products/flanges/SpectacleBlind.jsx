import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';

const SpectacleBlind = () => {
    const { openQuotePopup } = useQuotePopup();
  const [activeTab, setActiveTab ] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
    { id: 'materials', label: 'Materials & Grades' },
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
            <span className="text-[#D71920] font-medium">Spectacle Blind Flange</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Spectacle Blind Flange</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="/images/Spectacle-Blind-Flange-Weld-Neck-Flange.webp" 
               alt="Spectacle Blind Flange" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Dual Functionality", desc: "Acts as both a spacer and a blind to either allow or isolate flow." },
                { title: "Visual Flow Status", desc: "Provides a clear, immediate visual confirmation of the pipeline's status." },
                { title: "Inline Maintenance", desc: "Essential for safety during shutdowns, repairs, or pressure testing." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex gap-4">
               <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                 Request Quote <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tabs & Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-slate-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-bold text-sm md:text-base whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id 
                    ? 'text-[#D71920] bg-red-50/50' 
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D71920]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            
            {/* DESCRIPTION TAB */}
            {activeTab === 'description' && (
              <div className="space-y-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p>
                  We offer carbon steel, stainless steel, alloy steel, and special steels as per ASME B16.48 or customer drawings. A Spectacle Blind Flange is a safety device used to isolate a section of a piping system. It consists of two metal discs—one solid (blind) and one hollow (spacer)—connected by a web, resembling a pair of spectacles.
                </p>
                <p>
                  These flanges are universally appreciated for their high strength and durability, especially in hazardous areas where positive isolation is critical to prevent contamination or accidents. As an ISO 9001:2008, ISO 14001:2004, and OHSAS 18001-2007 certified company, we ensure our spectacle blinds are 100% free from corrosion attack and meet rigorous global benchmarks for the oil & gas, petrochemical, and marine industries.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {[
                        { label: "Type", value: "Spectacle Blind Flange, Paddle Blind, Paddle Spacer" },
                        { label: "Standards", value: "ASME B16.48, ANSI B16.5, ANSI B16.47 Series A & B, MSS SP44, API-605, AWWA" },
                        { label: "Outside Diameter", value: "≤ 24 = ± 1.6 mm / > 24 = ± 3.2 mm" },
                        { label: "Inside Diameter", value: "≤ 10 = ± 0.8 mm / > 12 = +1.6 mm / −0 mm" },
                        { label: "Pressure Ratings", value: "Class: 150, 300, 600, 900, 1500, 2500 | PN: PN6, PN10, PN16, PN25, PN40, PN64, etc." },
                        { label: "Size Range", value: "1/2\" (15 NB) to 48\" (1200 NB)" },
                        { label: "Thickness", value: "≤ 18 = +3.2 mm / −0 / ≥ 20 = +4.8 mm / −0" },
                        { label: "Quality Assurance", value: "Visually examined for conformity to ASTM, ASME, MSS, and DIN codes" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                            {row.label}
                          </td>
                          <td className="px-6 py-4 text-slate-600 align-top">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MATERIALS & GRADES TAB */}
            {activeTab === 'materials' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#0F172A] text-white">
                      <tr>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-slate-600">Material Type</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Grades / Standards</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Carbon Steel", grades: "ASTM A105/A105N, A350 LF1, LF2 CL1/CL2, A694 F42 to F70, A516 Gr. 60/65/70." },
                        { type: "Stainless Steel", grades: "ASTM A182 F304/304L, F316/316L, F316Ti, F310, F321, F904L." },
                        { type: "Alloy Steel", grades: "ASTM A182 F1, F5, F9, F11, F22, F91." },
                        { type: "Special Alloy", grades: "Duplex (F51, F53), Nickel Alloys (200, 400, 600, 800), Monel, Hastelloy." },
                        { type: "Flange Face Type", grades: "Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ)." },
                        { type: "Coating", grades: "Anti-rust Paint, Oil Black Paint, Zinc Plated, Cold and Hot Dip Galvanized." }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="px-6 py-4 font-bold text-[#D71920] border-r border-slate-200 w-1/4 align-middle">
                            {row.type}
                          </td>
                          <td className="px-6 py-4 text-slate-700 leading-relaxed align-middle">
                            {row.grades}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpectacleBlind;
