import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const TitaniumTube = () => {
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
            <span className="text-[#D71920] font-medium">Titanium Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Titanium Tubes</h1>
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
               alt="Titanium Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Titanium Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Lightweight with high strength</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Outstanding corrosion resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Ideal for marine applications</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Titanium Tubes. Available in different lengths, thicknesses and sizes, these Titanium Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Titanium Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Titanium?</h3>
                <p>
                  Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine. Titanium was discovered in Cornwall, Great Britain, by William Gregor in 1791 and named by Martin Heinrich Klaproth for the Titans of Greek mythology. The element occurs within a number of mineral deposits, principally rutile and ilmenite, which are widely distributed in the Earth's crust and lithosphere, and it is found in almost all living things, rocks, water bodies, and soils. The metal is extracted from its principal mineral ores via the Kroll process or the Hunter process. Its most common compound, titanium dioxide, is a popular photocatalyst and is used in the manufacture of white pigments. Other compounds include titanium tetrachloride (TiCl4), a component of smoke screens and catalysts; and titanium trichloride (TiCl3), which is used as a catalyst in the production of polypropylene.
                </p>
                <p>
                  Titanium can be alloyed with iron, aluminium, vanadium, and molybdenum, among other elements, to produce strong, lightweight alloys for aerospace (jet engines, missiles, and spacecraft), military, industrial process (chemicals and petro-chemicals, desalination plants, pulp, and paper), automotive, agri-food, medical prostheses, orthopaedic implants, dental and endodontic instruments and files, dental implants, sporting goods, jewellery, mobile phones, and other applications. The two most useful properties of the metal are corrosion resistance and the highest strength-to-density ratio of any metallic element. In its unalloyed condition, titanium is as strong as some steels, but less dense. There are two allotropic forms and five naturally occurring isotopes of this element, 46Ti through 50Ti, with 48Ti being the most abundant (73.8%).
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
                        { label: "Standards", value: "ASME SB-363, ASME SB-381, ASME SB-337, ASME SB-338, ASME SB-348, ASTM F-67, AMS 4921, ASME SB-265, AMS 4902, ASME SB-337, ASME SB-338, AMS 4942/tr" },
                        { label: "Grade", value: "Titanium Grade 1, Titanium Grade 2, Titanium Grade 3, Titanium Grade 4 & Titanium Grade 7" },
                        { label: "UNSPSC Code", value: "UNS N04400" },
                        { label: "Diameter", value: "5-110×0.4~6.0×2000-9000" },
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
                    Chemical Composition (Max Values)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs md:text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Element</th>
                          {[1, 2, 5, 7, 9, 12, 23].map(g => (
                            <th key={g} className="px-2 py-3 font-bold border-r border-slate-600 last:border-0">Gr {g}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'N, Nitrogen', vals: ['0.03', '0.03', '0.05', '0.03', '0.02', '0.03', '0.03'] },
                          { el: 'C, Carbon', vals: ['0.1', '0.1', '0.1', '0.1', '0.05', '0.08', '0.08'] },
                          { el: 'H, Hydrogen', vals: ['0.015', '0.015', '0.0125', '0.015', '0.013', '0.015', '0.0125'] },
                          { el: 'Fe, Iron', vals: ['0.2', '0.3', '0.4', '0.3', '0.25', '0.3', '0.25'] },
                          { el: 'O, Oxygen', vals: ['0.18', '0.25', '0.20', '0.25', '0.12', '0.25', '0.13'] },
                          { el: 'Pd, Palladium', vals: ['-', '-', '-', '0.12-0.25', '-', '-', '-'] },
                          { el: 'Al, Aluminum', vals: ['-', '-', '5.5-6.75', '-', '2.5-3.5', '-', '5.5-6.5'] },
                          { el: 'Mo, Molybdenum', vals: ['-', '-', '-', '-', '-', '0.2-0.4', '-'] },
                          { el: 'V, Vanadium', vals: ['-', '-', '3.5-4.5', '-', '2.0-3.0', '-', '3.5-4.5'] },
                          { el: 'Ni, Nickel', vals: ['-', '-', '-', '-', '-', '0.6-0.9', '-'] },
                          { el: 'Ti, Titanium', vals: ['Bal.', 'Bal.', 'Bal.', 'Bal.', 'Bal.', 'Bal.', 'Bal.'] }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left pl-4">{row.el}</td>
                            {row.vals.map((v, i) => (
                              <td key={i} className="px-2 py-2 text-slate-700 border-r border-slate-200 last:border-0">{v}</td>
                            ))}
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
                
                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          {[1, 2, 5, 7, 9, 12, 23].map(g => (
                            <th key={g} className="px-4 py-3">Gr {g}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { prop: "Tensile strength, min (Mpa)", vals: ["240", "345", "895", "345", "620", "483", "828"] },
                          { prop: "Yield strength, 0.2% Offset, min (Mpa)", vals: ["170", "275", "825", "275", "483", "345", "759"] },
                          { prop: "Elongation (in 4D, min, %)", vals: ["24", "20", "10", "20", "15", "18", "10"] },
                          { prop: "Reduction of Area, min, %", vals: ["30", "30", "25", "30", "25", "25", "15"] },
                          { prop: "Hardness * Interpolated", vals: ["Rb70", "Rb80", "Rc36", "Rb80", "Rc28", "Rc17", "-"] }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200">{row.prop}</td>
                            {row.vals.map((v, i) => (
                              <td key={i} className="px-4 py-3 text-slate-700 border-r border-slate-200 last:border-0">{v}</td>
                            ))}
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

export default TitaniumTube;