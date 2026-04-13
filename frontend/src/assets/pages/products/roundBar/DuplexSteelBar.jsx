import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';

const DuplexSteelBar = () => {
    const { openQuotePopup } = useQuotePopup();
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
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
            <span className="text-slate-400">Round Bar</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Duplex Steel Round Bar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Duplex Steel Round Bar</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group p-10">
             <img 
               src="/images/duplex-steel-round-bar.webp"
               alt="Duplex Steel Round Bar" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Duplex Steel Round Bar</h2>
            <div className="space-y-6">
              {[
                "High corrosion resistance",
                "Excellent strength and toughness",
                "Ideal for marine and chemical environments"
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature}</h3>
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
          <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-hide">
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

          <div className="p-8 md:p-12 bg-white">
            {activeTab === 'description' && (
              <div className="space-y-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 text-justify">
                <p>REMAX FORGE & FITTINGS supplies premium Duplex Steel Round Bars known for their excellent combination of strength and corrosion resistance. Duplex steel contains a balanced microstructure of austenite and ferrite, which enhances mechanical properties and resistance to stress corrosion cracking.</p>
                <p>These bars are widely used in chemical processing, offshore platforms, desalination plants, and marine industries. REMAX FORGE & FITTINGS ensures that all Duplex Steel Round Bars meet international quality standards and are available in multiple sizes and grades.</p>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse border border-slate-200">
                    <tbody>
                      {[
                        { label: "Type", value: "Duplex Steel Round Bar" },
                        { label: "Standard", value: "ASTM A276, ASTM A479" },
                        { label: "Material", value: "Duplex Stainless Steel" },
                        { label: "Grades", value: "UNS S31803, S32205" },
                        { label: "Size", value: "6mm to 500mm Diameter" },
                        { label: "Length", value: "3m – 6m or Custom" },
                        { label: "Finish", value: "Black, Bright Polished" },
                        { label: "Form", value: "Round" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-4 py-3 font-bold text-[#0F172A] w-1/4 align-top border-r border-slate-200">
                            {row.label}
                          </td>
                          <td className="px-4 py-3 text-slate-600 align-top">
                            {row.value}
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

export default DuplexSteelBar;
