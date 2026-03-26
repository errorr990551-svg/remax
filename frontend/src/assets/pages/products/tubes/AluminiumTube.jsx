import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const AluminiumTube = () => {
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
            <span className="text-[#D71920] font-medium">Aluminium Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Aluminium Tubes</h1>
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
               alt="Aluminium Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Aluminium Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Lightweight corrosion resistant tubing</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Easy fabrication and handling</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Good thermal conductivity</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Aluminium Tube. Available in different lengths, thicknesses and sizes, these Aluminium Tube are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Aluminium Tube as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Aluminium?</h3>
                <p>
                  Aluminium (or aluminum; see spelling differences) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal in the Earth's crust. It makes up about 8% by weight of the Earth's solid surface. Aluminium metal is so chemically reactive that native specimens are rare and limited to extreme reducing environments. Instead, it is found combined in over 270 different minerals. The chief ore of aluminium is bauxite. Aluminium is remarkable for the metal's low density and for its ability to resist corrosion due to the phenomenon of passivation. Structural components made from aluminium and its alloys are vital to the aerospace industry and are important in other areas of transportation and structural materials. The most useful compounds of aluminium, at least on a weight basis, are the oxides and sulfates.
                </p>
                <p>
                  Despite its prevalence in the environment, no known form of life uses aluminium salts metabolically. In keeping with its pervasiveness, aluminium is well tolerated by plants and animals. Owing to their prevalence, potential beneficial (or otherwise) biological roles of aluminium compounds are of continuing interest.
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
                        { label: "Type", value: "Aluminium Pipe" },
                        { label: "Standards", value: "ASME SB241, ASTM B210, WWW-T-700/5, ASTM B221, ASTM B241, ASTM B429, AMS-QQ-A-200/8, MIL-DTL-25995 Type A, ASTM B221, ASTM B241, ASTM B429, AMS-QQ-A-200/9" },
                        { label: "Grade", value: "5086, 5083, 6061, 60630" },
                        { label: "Wall Thickness", value: "0.2~5.0mm" },
                        { label: "Length", value: "200~6000mm" },
                        { label: "Outer Diameter", value: "1.0~150mm" },
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
                          <th className="px-4 py-3 border-r border-slate-600">Component</th>
                          <th className="px-4 py-3">Amount (wt.%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { comp: 'Aluminium', amt: 'Balance' },
                          { comp: 'Magnesium', amt: '0.8-1.2' },
                          { comp: 'Silicon', amt: '0.4 – 0.8' },
                          { comp: 'Iron', amt: 'Max. 0.7' },
                          { comp: 'Copper', amt: '0.15-0.40' },
                          { comp: 'Zinc', amt: 'Max. 0.25' },
                          { comp: 'Titanium', amt: 'Max. 0.15' },
                          { comp: 'Manganese', amt: 'Max. 0.15' },
                          { comp: 'Chromium', amt: '0.04-0.35' },
                          { comp: 'Others', amt: '0.05' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left pl-6">{row.comp}</td>
                            <td className="px-4 py-2 text-slate-700">{row.amt}</td>
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
                          <th className="px-4 py-3">Temper</th>
                          <th className="px-4 py-3">Ultimate Tensile Strength (MPa)</th>
                          <th className="px-4 py-3">0.2% Proof Stress (MPa)</th>
                          <th className="px-4 py-3">Brinell Hardness (500kg load, 10mm ball)</th>
                          <th className="px-4 py-3">Elongation 50mm dia (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { t: '0', uts: '110-152', ps: '65-110', bh: '30-33', el: '14-16' },
                          { t: 'T1', uts: '180', ps: '95-96', bh: '-', el: '16' },
                          { t: 'T4', uts: '179 min', ps: '110 min', bh: '-', el: '-' },
                          { t: 'T6', uts: '260-310', ps: '240-276', bh: '95-97', el: '9-13' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.t}</td>
                            <td className="px-4 py-2 text-slate-700">{row.uts}</td>
                            <td className="px-4 py-2 text-slate-700">{row.ps}</td>
                            <td className="px-4 py-2 text-slate-700">{row.bh}</td>
                            <td className="px-4 py-2 text-slate-700">{row.el}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Physical Property Treatment */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Property Treatments
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Treatment</th>
                          <th className="px-4 py-3">Definition</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { tr: 'F', def: 'As fabricated' },
                          { tr: '0', def: 'Annealed to obtain lower strength temper' },
                          { tr: 'T1', def: 'Cooled from an elevated shaping process and naturally aged' },
                          { tr: 'T4, T4511', def: 'Solution heat treated and naturally aged' },
                          { tr: 'T51', def: 'Cooled from an elevated shaping process and artificially aged' },
                          { tr: 'T6, T6511', def: 'Solution heat treated and artificially aged' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 pl-4">{row.tr}</td>
                            <td className="px-4 py-2 text-slate-700">{row.def}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-sm text-slate-500 space-y-1">
                    <p>1. This designation applies to products which are not cold worked after cooling from an elevated temperature shaping process...</p>
                    <p>2. This designation applies to products which are not cold worked after solution heat-treated...</p>
                    <p>3. This designation applies to products which are not cold worked after solution heat-treatment...</p>
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

export default AluminiumTube;