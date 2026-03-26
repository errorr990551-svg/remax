import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const Hastelloy = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
    { id: 'composition', label: 'Composition' },
    { id: 'properties', label: 'Properties' },
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
            <span className="text-slate-400">Pipes</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Hastelloy Pipes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hastelloy Pipes</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1535926952796-7c679234b677?q=80&w=2070&auto=format&fit=crop" 
               alt="Hastelloy Pipes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Extreme corrosion resistant alloy", desc: "Designed to withstand severe chemical environments and erosion." },
                { title: "High temperature performance", desc: "Maintains structural integrity and resistance in high-heat applications." },
                { title: "For aggressive chemical environments", desc: "Ideal for reactors, distillation equipment, and valves in chemical industries." }
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
               <button className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Hastelloy Pipe. Available in different lengths, thicknesses and sizes, these Hastelloy Pipe are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Hastelloy Pipe as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Hastelloy?</h3>
                <p>
                  Hastelloy is the registered trademark name of Haynes International, Inc. The trademark is applied as the prefix name of a range of twenty-two different highly corrosion-resistant metal alloys, loosely grouped by the metallurgical industry under the material term “superalloys” or “high-performance alloys”. The predominant alloying ingredient is typically the transition metal nickel. Other alloying ingredients are added to nickel in each of the subcategories of this trademark designation and include varying percentages of the elements molybdenum, chromium, cobalt, iron, copper, manganese, titanium, zirconium, aluminum, carbon, and tungsten.
                </p>
                <p>
                  The primary function of the Hastelloy super alloys is that of effective survival under high-temperature, high-stress service in a moderately to severely corrosive, and/or erosion-prone environment where more common and less expensive iron-based alloys would fail, including the pressure vessels of some nuclear reactors, chemical reactors, distillation equipment, and pipes and valves in chemical industry. Although a super alloy, Hastelloy does experience degradation due to fabricating and handling. Electropolishing or passivation of Hastelloy can improve corrosion resistance.
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
                        { label: "Type", value: "Seamless Pipe, Welded Pipe" },
                        { label: "Trade Name", value: "Hastelloy B, Hastelloy B-2, Hastelloy B-3, C-276, C-4, C-22, Hastelloy G, G-2, G-3, Hastelloy X" },
                        { label: "Grade", value: "B/SB622 Ni-Mo, B/SB619 Ni-Mo, B/SB622 Low C Ni-Cr-Mo, B/SB619 Low C Ni-Cr-Mo, B/SB622 Ni-Cr-Mo-Fe, B/SB619 Ni-Cr-Mo-Fe, B/SB622 Ni-Cr-Fe-Mo-Cu, B/SB619 Ni-Cr-Fe-Mo-Cu" },
                        { label: "UNSPSC Code", value: "UNS N10001, UNS N30012, UNS N10665, UNS J30007, UNS N10675, UNS N10276, UNS N30002, UNS N06455, UNS N26455, UNS N06022, UNS N26022, UNS N06007, UNS N06975, UNS N06985, UNS N06002" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
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
            )}

            {/* COMPOSITION TAB */}
            {activeTab === 'composition' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                  <p className="font-semibold">Note:</p>
                  <p className="text-sm mt-1">
                    Specific chemical composition varies by Hastelloy grade (e.g., C-276, B-2, X). Please contact our technical team for detailed composition charts for specific grades.
                  </p>
                </div>
              </div>
            )}

            {/* PROPERTIES TAB */}
            {activeTab === 'properties' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                  <p className="font-semibold">Note:</p>
                  <p className="text-sm mt-1">
                    Mechanical and physical properties depend on the specific Hastelloy alloy and treatment condition. Please refer to our product catalog or contact sales for detailed property data sheets.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hastelloy;