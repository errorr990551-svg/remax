import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const NickelTube = () => {
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
            <span className="text-[#D71920] font-medium">Nickel Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nickel Tubes</h1>
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
               alt="Nickel Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Nickel Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High purity corrosion resistant</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Excellent thermal stability</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Used in chemical processing</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Nickel Tubes. Available in different lengths, thicknesses and sizes, these Nickel Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Nickel Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Nickel?</h3>
                <p>
                  Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile. Pure nickel shows a significant chemical activity that can be observed when nickel is powdered to maximize the exposed surface area on which reactions can occur, but larger pieces of the metal are slow to react with air at ambient conditions due to the formation of a protective oxide surface. Even then, nickel is reactive enough with oxygen that native nickel is rarely found on Earth's surface, being mostly confined to the interiors of larger nickel iron meteorites that were protected from oxidation during their time in space. On Earth, such native nickel is found in combination with iron, a reflection of those elements' origin as major end products of supernova nucleosynthesis. An iron nickel mixture is thought to compose Earth's inner core.
                </p>
                <p>
                  The use of nickel (as a natural meteoric nickel iron alloy) has been traced as far back as 3500 BCE. Nickel was first isolated and classified as a chemical element in 1751 by Axel Fredrik Cronstedt, who initially mistook its ore for a copper mineral. The element's name comes from a mischievous sprite of German miner mythology, Nickel (similar to Old Nick), that personified the fact that copper-nickel ores resisted refinement into copper. An economically important source of nickel is the iron ore limonite, which often contains 1-2% nickel. Nickel's other important ore minerals include garnierite, and pentlandite. Major production sites include the Sudbury region in Canada (which is thought to be of meteoric origin), New Caledonia in the Pacific, and Norilsk in Russia.
                </p>
                <p>
                  Because of nickel's slow rate of oxidation at room temperature, it is considered corrosion-resistant. Historically, this has led to its use for plating metals such as iron and brass, coating chemistry equipment, and manufacturing certain alloys that retain a high silvery polish, such as German silver. About 6% of world nickel production is still used for corrosion-resistant pure-nickel plating. Nickel-plated items are noted for provoking nickel allergy. Nickel has been widely used in coins, though its rising price has led to some replacement with cheaper metals in recent years.
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
                        { label: "Grade", value: "Copper Nickel Alloy UNS C70600, UNS C71500, Cupro Nickel (Cu-Ni) 90/10, Cupro Nickel (Cu-Ni) 70/30." },
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
                    <caption className="text-left font-bold text-lg text-[#0F172A] p-4 bg-white border-b border-slate-200">Nominal Pipe Size (mm)</caption>
                    <thead className="bg-[#0F172A] text-white">
                      <tr>
                        <th className="px-4 py-3 border-r border-slate-600">Nominal Pipe Size</th>
                        <th className="px-4 py-3 border-r border-slate-600">Outside diameter</th>
                        <th className="px-4 py-3">Wall thickness (SCH 5S to XXS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: '1/8"', od: '10.29', wt: '1.24 - 2.41' },
                        { size: '1/4"', od: '13.72', wt: '1.65 - 3.02' },
                        { size: '3/8"', od: '17.15', wt: '1.65 - 3.20' },
                        { size: '1/2"', od: '21.34', wt: '1.65 - 7.47' },
                        { size: '3/4"', od: '26.67', wt: '1.65 - 7.82' },
                        { size: '1"', od: '33.40', wt: '1.65 - 9.09' },
                        { size: '1 1/4"', od: '42.16', wt: '1.65 - 9.70' },
                        { size: '1 1/2"', od: '48.26', wt: '1.65 - 10.16' },
                        { size: '2"', od: '60.33', wt: '1.65 - 11.07' },
                        { size: '3"', od: '88.90', wt: '2.11 - 15.24' },
                        { size: '4"', od: '114.30', wt: '2.11 - 17.12' },
                        { size: '24"', od: '609.6', wt: '5.54 - 59.51' }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="px-4 py-2 font-bold text-[#D71920]">{row.size}</td>
                          <td className="px-4 py-2 text-slate-700">{row.od}</td>
                          <td className="px-4 py-2 text-slate-700">{row.wt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-500 p-2">Source: ASME B36.19, ASME B36.10</p>
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
                          { prop: 'Vanderwaals radius', val: '0.124 nm' },
                          { prop: 'Ionic radius', val: '0.069 nm (+2) ; 0.06 nm (+3)' },
                          { prop: 'Isotopes', val: '10' },
                          { prop: 'Electronic Shell', val: '[ Ar ] 3d8 4s2' },
                          { prop: 'Energy of first ionisation', val: '735 kJ.mol -1' },
                          { prop: 'Energy of second ionisation', val: '1753 kJ.mol -1' },
                          { prop: 'Energy of third ionisation', val: '3387 kJ.mol -1' },
                          { prop: 'Standard potential', val: '- 0.25 V' },
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
                    Specific mechanical and physical properties for Nickel 200/201 tubes are available upon request.
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

export default NickelTube;