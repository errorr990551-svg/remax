import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const HastelloyTube = () => {
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
            <span className="text-slate-400">Tubes</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Hastelloy Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hastelloy Tubes</h1>
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
               alt="Hastelloy Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Hastelloy Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Extreme corrosion resistant alloy</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Handles aggressive chemicals</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High temperature service tubing</h3>
                  </div>
               </div>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Hastelloy Tubes. Available in different lengths, thicknesses and sizes, these Hastelloy Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Hastelloy Tubes as per customer’s requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Hastelloy?</h3>
                <p>
                  Hastelloy is the registered trademark name of Haynes International, Inc. The trademark is applied as the prefix name of a range of twenty-two different highly corrosion-resistant metal alloys, loosely grouped by the metallurgical industry under the material term superalloys or high-performance alloys. The predominant alloying ingredient is typically the transition metal nickel. Other alloying ingredients are added to nickel in each of the subcategories of this trademark designation and include varying percentages of the elements molybdenum, chromium, cobalt, iron, copper, manganese, titanium, zirconium, aluminium, carbon, and tungsten.
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
                        { label: "Type", value: "Seamless Tube, Welded Tube" },
                        { label: "Trade Name", value: "Hastelloy B, Hastelloy B-2, Hastelloy B-3, C-276, C-4, C-22, Hastelloy G, G-2, G-3, Hastelloy X" },
                        { label: "Grade", value: "B/SB622 Ni-Mo, B/SB619 Ni-Mo, B/SB622 Ni-Mo, B/SB619 Ni-Mo, B/SB622 Low C Ni-Cr-Mo, B/SB619 Low C Ni-Cr-Mo, B/SB622 Ni-Cr-Mo-Fe, B/SB619 Ni-Cr-Mo-Fe, B/SB622 Ni-Cr-Fe-Mo-Cu, B/SB619 Ni-Cr-Fe-Mo-Cu" },
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
                
                {/* Chemical Composition Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs md:text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Alloy</th>
                          <th className="px-2 py-3 border-r border-slate-600">Co</th>
                          <th className="px-2 py-3 border-r border-slate-600">Cr</th>
                          <th className="px-2 py-3 border-r border-slate-600">Mo</th>
                          <th className="px-2 py-3 border-r border-slate-600">W</th>
                          <th className="px-2 py-3 border-r border-slate-600">Fe</th>
                          <th className="px-2 py-3 border-r border-slate-600">Si</th>
                          <th className="px-2 py-3 border-r border-slate-600">Mn</th>
                          <th className="px-2 py-3 border-r border-slate-600">C</th>
                          <th className="px-2 py-3 border-r border-slate-600">Ni</th>
                          <th className="px-2 py-3">Others</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { alloy: 'B-2', co: '1*', cr: '1*', mo: '28', w: '-', fe: '2*', si: '0.1*', mn: '1*', c: '0.01*', ni: 'Balance', oth: '-' },
                          { alloy: 'B-3', co: '3*', cr: '1.5', mo: '28.5', w: '3*', fe: '1.5', si: '0.1*', mn: '3*', c: '0.01*', ni: '65 min.', oth: 'Al-0.5*, Ti-0.2*' },
                          { alloy: 'C-4', co: '2*', cr: '16', mo: '16', w: '-', fe: '3*', si: '0.08*', mn: '1*', c: '0.01*', ni: 'Balance', oth: 'Ti-0.7*' },
                          { alloy: 'C-2000', co: '2*', cr: '23', mo: '16', w: '-', fe: '3*', si: '0.08*', mn: '-', c: '0.01*', ni: 'Balance', oth: 'Cu-1.6' },
                          { alloy: 'C-22', co: '2.5*', cr: '22', mo: '13', w: '3', fe: '3', si: '0.08*', mn: '0.5*', c: '0.01*', ni: 'Balance', oth: 'V-0.35*' },
                          { alloy: 'C-276', co: '2.5*', cr: '16', mo: '16', w: '4', fe: '5', si: '0.08*', mn: '1*', c: '0.01*', ni: 'Balance', oth: 'V-0.35*' },
                          { alloy: 'G-30', co: '2*', cr: '30', mo: '5.5', w: '2.5', fe: '15', si: '1*', mn: '1.5*', c: '0.03*', ni: 'Balance', oth: 'Nb-0.8*, Cu-2*' },
                          { alloy: 'N', co: '0.2*', cr: '7', mo: '16', w: '0.5*', fe: '5*', si: '1*', mn: '0.8*', c: '0.08*', ni: 'Balance', oth: 'Al+Ti-0.5*, Cu-0.35*' },
                          { alloy: 'W', co: '2.5*', cr: '5', mo: '24', w: '-', fe: '6', si: '1*', mn: '1*', c: '0.12*', ni: 'Balance', oth: 'V-0.6*' },
                          { alloy: 'X', co: '1.5*', cr: '22*', mo: '9*', w: '0.6*', fe: '18.5*', si: '0.5*', mn: '0.5*', c: '0.1*', ni: 'Balance', oth: '-' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.alloy}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.co}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.cr}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.mo}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.w}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.fe}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.si}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.mn}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.c}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.ni}</td>
                            <td className="px-2 py-2 text-slate-700">{row.oth}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">* Maximum</p>
                </div>

              </div>
            )}

            {/* PROPERTIES TAB */}
            {activeTab === 'properties' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                  <p className="font-semibold">Note:</p>
                  <p className="text-sm mt-1">
                    Specific mechanical properties vary by grade and treatment. Please consult our technical team for detailed property sheets for specific Hastelloy alloys.
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

export default HastelloyTube;