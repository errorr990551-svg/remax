import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const MonelTube = () => {
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
            <span className="text-[#D71920] font-medium">Monel Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Monel Tubes</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1623944893558-44474776b329?q=80&w=2070&auto=format&fit=crop" 
               alt="Monel Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Monel Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Nickel-copper corrosion resistant</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Excellent seawater performance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High strength alloy tubing</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Monel Tubes. Available in different lengths, thicknesses and sizes, these Monel Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Monel Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Monel?</h3>
                <p>
                  Monel is a group of nickel alloys, primarily composed of nickel (up to 67%) and copper, with small amounts of iron, manganese, carbon, and silicon. Stronger than pure nickel, Monel alloys are resistant to corrosion by many agents, including rapidly flowing seawater. They can be fabricated readily by hot- and cold-working, machining, and welding. Monel was created by David H. Browne, chief metallurgist for International Nickel Co. Monel alloy 400 is binary alloy of the same proportions of nickel and copper as is found naturally in the nickel ore from the Sudbury (Ontario) mines and is therefore considered a puritan alloy. Monel was named after company president Ambrose Monell, and patented in 1906. One L was dropped, because family names were not allowed as trademarks at that time. The name is now a trademark of Special Metals Corporation.
                </p>
                <p>
                  It is a very expensive alloy, with cost ranging from 5 to 10 times the cost of copper and nickel, hence its use is limited to those applications where it cannot be replaced with cheaper alternatives. Compared to carbon steel, piping in monel is more than 3 times as expensive.
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
                        { label: "Trade Name", value: "Monel 400" },
                        { label: "Standards", value: "BS3074NA13, ASTM B 163, ASTM B 165, ASTM B 725, ASTM B 730, ASTM B 751, ASTM B 775, ASTM B 829, ASME SB 163, ASME SB 165, ASME SB 725, ASME SB 730, ASME SB 751, ASME SB 775, ASME SB 829, SAE AMS 4574, DIN 1775, VdTÜV 263" },
                        { label: "Grade", value: "B/SB165, B/SB163, B725, B474, B730" },
                        { label: "UNSPSC Code", value: "UNS N04400" },
                        { label: "Diameter", value: "less than 325mm (12.80″)" },
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Element</th>
                          <th className="px-4 py-3">Monel 400</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'Ni', val: '63.0 min' },
                          { el: 'Fe', val: '1.0 - 2.5' },
                          { el: 'C', val: '0.3 max' },
                          { el: 'Mn', val: '2.0 max' },
                          { el: 'Si', val: '0.5 max' },
                          { el: 'Cu', val: '28.0 - 34.0' },
                          { el: 'Al', val: '0.50 max' },
                          { el: 'S', val: '0.02 max' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.el}</td>
                            <td className="px-4 py-2 text-slate-700">{row.val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* PROPERTIES TAB */}
            {activeTab === 'properties' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Mechanical & Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical & Physical Properties - Monel 400
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Density', v: '8.8 g/cm3' },
                          { p: 'Melting Point', v: '1350 °C (2460 °F)' },
                          { p: 'Tensile Strength', v: 'Psi - 80000, MPa - 550' },
                          { p: 'Yield Strength (0.2% Offset)', v: 'Psi - 35000, MPa - 240' },
                          { p: 'Elongation', v: '40 %' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MonelTube;