import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const Nickel = () => {
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
            <span className="text-[#D71920] font-medium">Nickel Pipe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nickel Pipe</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1558611997-0950a7522439?q=80&w=1964&auto=format&fit=crop" 
               alt="Nickel Pipe" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "High purity corrosion resistant", desc: "Excellent resistance to various corrosive environments due to its stable oxide surface." },
                { title: "Excellent thermal stability", desc: "Maintains properties over a wide range of temperatures." },
                { title: "Used in chemical processing", desc: "Ideal for industries requiring high purity and resistance to chemicals." }
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Nickel Pipe. Available in different lengths, thicknesses and sizes, this Nickel Pipe are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Nickel Pipe as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Nickel?</h3>
                <p>
                  Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile. Pure nickel shows a significant chemical activity that can be observed when nickel is powdered to maximize the exposed surface area on which reactions can occur, but larger pieces of the metal are slow to react with air at ambient conditions due to the formation of a protective oxide surface. Even then, nickel is reactive enough with oxygen that native nickel is rarely found on Earth's surface, being mostly confined to the interiors of larger nickel–iron meteorites that were protected from oxidation during their time in space.
                </p>
                <p>
                  Because of nickel's slow rate of oxidation at room temperature, it is considered corrosion-resistant. Historically, this has led to its use for plating metals such as iron and brass, coating chemistry equipment, and manufacturing certain alloys that retain a high silvery polish, such as German silver. About 6% of world nickel production is still used for corrosion-resistant pure-nickel plating.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {[
                        { label: "Type", value: "Seamless Pipe, Welded Pipe" },
                        { label: "Standards", value: "ASTM B122, B171, B466, B467" },
                        { label: "Grade", value: "Nickel 200, Nickel 201, Copper Nickel Alloy UNS C70600, UNS C71500, Cupro Nickel (Cu-Ni) 90/10, Cupro Nickel (Cu-Ni) 70/30." },
                        { label: "Range", value: "½” NB to 24” NB in Sch 10s, 40s, 80s, 160s, XXS." },
                        { label: "Dimensions", value: "ANSI/ASME B16.9, B16.28, MSS-SP-43." },
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

                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-center">
                    <caption className="text-left font-bold text-lg text-[#0F172A] p-4 bg-white border-b border-slate-200">Nominal Pipe Dimensions (mm)</caption>
                    <thead className="bg-[#0F172A] text-white">
                      <tr>
                        <th className="px-4 py-3 border-r border-slate-600">Nominal Size</th>
                        <th className="px-4 py-3 border-r border-slate-600">OD</th>
                        <th className="px-4 py-3 border-r border-slate-600">SCH 5S</th>
                        <th className="px-4 py-3 border-r border-slate-600">SCH 10S</th>
                        <th className="px-4 py-3 border-r border-slate-600">SCH 40S</th>
                        <th className="px-4 py-3 border-r border-slate-600">SCH 80S</th>
                        <th className="px-4 py-3">SCH 160S</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: '1/2"', od: '21.34', s5: '1.65', s10: '2.11', s40: '2.77', s80: '3.73', s160: '4.75' },
                        { size: '3/4"', od: '26.67', s5: '1.65', s10: '2.11', s40: '2.87', s80: '3.91', s160: '5.54' },
                        { size: '1"', od: '33.40', s5: '1.65', s10: '2.77', s40: '3.38', s80: '4.55', s160: '6.35' },
                        { size: '2"', od: '60.33', s5: '1.65', s10: '2.77', s40: '3.91', s80: '5.54', s160: '8.71' },
                        { size: '3"', od: '88.90', s5: '2.11', s10: '3.05', s40: '5.49', s80: '7.62', s160: '11.13' },
                        { size: '4"', od: '114.30', s5: '2.11', s10: '3.05', s40: '6.02', s80: '8.56', s160: '13.49' }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="px-4 py-2 font-bold text-[#D71920]">{row.size}</td>
                          <td className="px-4 py-2 text-slate-700">{row.od}</td>
                          <td className="px-4 py-2 text-slate-700">{row.s5}</td>
                          <td className="px-4 py-2 text-slate-700">{row.s10}</td>
                          <td className="px-4 py-2 text-slate-700">{row.s40}</td>
                          <td className="px-4 py-2 text-slate-700">{row.s80}</td>
                          <td className="px-4 py-2 text-slate-700">{row.s160}</td>
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
                    Chemical Data - Nickel (Ni)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <tbody>
                        {[
                          { prop: 'Atomic Number', val: '28' },
                          { prop: 'Atomic Mass', val: '58.71 g.mol -1' },
                          { prop: 'Electronegativity', val: '1.8' },
                          { prop: 'Density', val: '8.9 g.cm-3 at 20°C' },
                          { prop: 'Melting Point', val: '1453 °C' },
                          { prop: 'Boiling Point', val: '2913 °C' },
                          { prop: 'Isotopes', val: '10' },
                          { prop: 'Electronic Shell', val: '[ Ar ] 3d8 4s2' },
                          { prop: 'Discovered By', val: 'Alex Constedt 1751' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-6 py-3 font-bold text-[#D71920] border-r border-slate-200 w-1/2">{row.prop}</td>
                            <td className="px-6 py-3 text-slate-700">{row.val}</td>
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
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                  <p className="font-semibold">Note:</p>
                  <p className="text-sm mt-1">
                    Detailed mechanical properties for specific Nickel pipe grades and schedules are available upon request or in our detailed product catalog.
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

export default Nickel;