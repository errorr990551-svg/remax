import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';

const LongWeldNeck = () => {
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
            <span className="text-[#D71920] font-medium">Long Weld Neck Flange</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Long Weld Neck Flange</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="/images/long-weld-neck-flange-500x500.webp" 
               alt="Long Weld Neck Flange" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Integrated Nozzle", desc: "Acts as a self-reinforcing nozzle, often used for vessels and tanks." },
                { title: "High Stability", desc: "Features a heavy-duty straight hub for superior structural support." },
                { title: "Custom Lengths", desc: "Hub length can be manufactured to specific customer requirements." }
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
                  We offer carbon steel, stainless steel, alloy steel, and special alloys as per drawings or customer specifications. Our Long Weld Neck (LWN) Flanges are primarily used in high-pressure and high-temperature environments within the oil & gas, petrochemical, and power generation industries. Unlike standard weld neck flanges, the hub of an LWN flange is significantly longer and typically straight (non-tapered), allowing it to function as a nozzle for equipment like columns and pressure vessels.
                </p>
                <p>
                  As an ISO 9001:2008, ISO 14001:2004, and OHSAS 18001-2007 certified company, Remax Forge & Fittings ensures every flange is 100% free from corrosion attacks and universally appreciated for high structural integrity. Our team of technocrats brings immense experience to the production of superior quality LWN flanges, commonly referred to as "Heavy Barrel" or "Equal Barrel" flanges depending on the hub configuration.
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
                        { label: "Type", value: "Long Weld Neck Flange (LWN), Heavy Barrel (HB), Equal Barrel (E)" },
                        { label: "Standards", value: "ANSI B16.5, ANSI B16.47 Series A & B, MSS SP44, API-605, AWWA, Custom Drawings" },
                        { label: "Outside Diameter", value: "≤ 24 = ± 1.6 mm / > 24 = ± 3.2 mm" },
                        { label: "Inside Diameter", value: "≤ 10 = ± 0.8 mm / 12–18 = ± 1.6 mm / ≥ 20 = +3.2 mm / −1.6 mm" },
                        { label: "Diameter Contact Face", value: "1.6 mm RF = ± 0.8 mm / 6.35 mm RF = ± 0.4 mm" },
                        { label: "Hub Diameter", value: "≤ 24 = ± 1.6 mm / > 24 = ± 3.2 mm" },
                        { label: "Thickness", value: "≤ 18 = +3.2 mm / −0 / ≥ 20 = +4.8 mm / −0" },
                        { label: "Pressure Ratings", value: "Class: 150, 300, 400, 600, 900, 1500, 2500 | PN: PN6, PN10, PN16, PN25, PN40, PN64, etc." },
                        { label: "Quality Assurance", value: "Strict inspection at each stage; conforms to ASTM, ASME, MSS, and DIN standards" }
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
                        { type: "Carbon Steel", grades: "ASTM A105/A105N, A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2, A694 F42, F46, F52, F60, F65, F70." },
                        { type: "Stainless Steel", grades: "ASTM A182 F304/304L/304H, F316/316L, F316Ti, F310, F321, F347, F904L." },
                        { type: "Alloy Steel", grades: "ASTM A182 F1, F5, F9, F11, F22, F91." },
                        { type: "Special Alloy", grades: "Duplex (F51, F53, F55), Nickel 200/201, Monel 400/500, Inconel 600/625, Hastelloy C276." },
                        { type: "Flange Face Type", grades: "Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)." },
                        { type: "Coating", grades: "Anti-rust Oil, Black Paint, Zinc Plated, Hot Dip Galvanized." }
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

export default LongWeldNeck;
