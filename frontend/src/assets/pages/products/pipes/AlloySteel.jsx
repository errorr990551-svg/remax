import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const AlloySteel = () => {
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
            <span className="text-[#D71920] font-medium">Alloy Steel Pipe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Alloy Steel Pipe</h1>
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
               alt="Alloy Steel Pipe" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Enhanced mechanical properties", desc: "Superior strength, hardness, and toughness compared to carbon steel." },
                { title: "High temperature pressure service", desc: "Designed to withstand elevated temperatures and pressures." },
                { title: "Chromium-molybdenum alloys", desc: "Commonly used for improved corrosion resistance and high-temperature strength." }
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Alloy Steel Pipe. Available in different lengths, thicknesses and sizes, these Alloy Steel Pipe are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Alloy Steel Pipe as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Alloy Steel?</h3>
                <p>
                  Alloy steel is steel that is alloyed with a variety of elements in total amounts between 1.0% and 50% by weight to improve its mechanical properties. Alloy steels are broken down into two groups: low-alloy steels and high-alloy steels. The difference between the two is somewhat arbitrary: Smith and Hashemi define the difference at 4.0%, while Degarmo, et al., define it at 8.0%. Most commonly, the phrase "alloy steel" refers to low-alloy steels.
                </p>
                <p>
                  Strictly speaking, every steel is an alloy, but not all steels are called "alloy steels". The simplest steels are iron (Fe) alloyed with carbon (C) (about 0.1% to 1%, depending on type). However, the term "alloy steel" is the standard term referring to steels with other alloying elements added deliberately in addition to the carbon. Common alloyants include manganese (the most common one), nickel, chromium, molybdenum, vanadium, silicon, and boron. Less common alloyants include aluminum, cobalt, copper, cerium, niobium, titanium, tungsten, tin, zinc, lead, and zirconium.
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
                        { label: "Type", value: "Seamless Pipe ,  ERW Pipe ,  EFW Pipe" },
                        { label: "Standard", value: "ASTM / ASME A/SA 213, ASTM A519, ASTM A513/5, API 5CT, ASTM 335, ASTM 333, ASTM 213, A53-A53/A53M-99b, A74-A74-98, A106-A106-99e1, A126-A126-95e1, A126-A126-95e1, A312-A312/A312M-00, A312-A312/A312M-00, A335-A335/A335M-99, A369-A369/A369M-92, A376-A376/A376M-98, A524-A524-96, A790A790-A790/A790M-99A790/A790M-99" },
                        { label: "Grade", value: "T9, T11, T12, T22, T91, 4130, 4140/4142, 8620, P-5, P-9, P-11, P-22, and P-91" },
                        { label: "Range", value: "6.35 mm OD upto 254 mm OD in 0.6 TO 20 mm thickness." },
                        { label: "Wall Thicknesses", value: "Schedules 40 through 160, STD, XS, XXS." },
                        { label: "End", value: "PLAIN END, BEVELLED END, TREADED" },
                        { label: "Length", value: "SINGLE RANDOM, DOUBLE RANDOM & REQUIRED LENGTH" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Value Added Services", value: "Polishing, Beveling, Honing & Turning, Heatreating & Annealing, Positive Material Identification (PMI)" },
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
                          {['C %', 'Mn %', 'P %', 'S %', 'Si %', 'Cr %', 'Mo %'].map(h => (
                            <th key={h} className="px-4 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-3 border-r border-slate-200">0.10-0.20</td>
                          <td className="px-4 py-3 border-r border-slate-200">0.30-0.61</td>
                          <td className="px-4 py-3 border-r border-slate-200">0.025 max</td>
                          <td className="px-4 py-3 border-r border-slate-200">0.025 max</td>
                          <td className="px-4 py-3 border-r border-slate-200">0.10-0.30</td>
                          <td className="px-4 py-3 border-r border-slate-200">0.50-0.81</td>
                          <td className="px-4 py-3">0.44-0.65</td>
                        </tr>
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
                          { p: 'Tensile Strength', v: '415 MPa min' },
                          { p: 'Yield Strength', v: '205 MPa min' },
                          { p: 'Elongation', v: '30% min' },
                          { p: 'Hardness, HB', v: '163 max' }
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

                {/* Outside Diameter & Tolerance (Hot Rolled) */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Outside Diameter & Tolerance (Hot Rolled)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Outside Diameter (mm)</th>
                          <th className="px-4 py-3">Tolerance (mm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { od: 'OD ≤ 101.6', tol: '+0.4/-0.8' },
                          { od: '101.6 < OD ≤ 190.5', tol: '+0.4/-1.2' },
                          { od: '190.5 < OD ≤ 228.6', tol: '+0.4/-1.6' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.od}</td>
                            <td className="px-4 py-2 text-slate-700">{row.tol}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Outside Diameter & Tolerance (Cold Drawn) */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Outside Diameter & Tolerance (Cold Drawn)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Outside Diameter (mm)</th>
                          <th className="px-4 py-3">Tolerance (mm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { od: 'OD < 25.4', tol: '±0.10' },
                          { od: '25.4 ≤ OD ≤ 38.1', tol: '±0.15' },
                          { od: '38.1 < OD ≤ 50.8', tol: '±0.20' },
                          { od: '50.8 ≤ OD < 63.5', tol: '±0.25' },
                          { od: '63.5 ≤ OD < 76.2', tol: '±0.30' },
                          { od: '76.2 ≤ OD ≤ 101.6', tol: '±0.38' },
                          { od: '101.6 < OD ≤ 190.5', tol: '+0.38/-0.64' },
                          { od: '190.5 < OD ≤ 228.6', tol: '+0.38/-1.14' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.od}</td>
                            <td className="px-4 py-2 text-slate-700">{row.tol}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Wall Thickness & Tolerance */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Wall Thickness & Tolerance
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Size Range (mm)</th>
                          <th className="px-4 py-3">Tolerance (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Hot Rolled', range: 'OD ≤ 101.6, WT ≤ 2.4', tol: '+40/-0' },
                          { type: 'Hot Rolled', range: 'OD ≤ 101.6, 2.4 < WT ≤ 3.8', tol: '+35/-0' },
                          { type: 'Hot Rolled', range: 'OD ≤ 101.6, 3.8 < WT ≤ 4.6', tol: '+33/-0' },
                          { type: 'Hot Rolled', range: 'OD ≤ 101.6, WT > 4.6', tol: '+28/-0' },
                          { type: 'Hot Rolled', range: 'OD > 101.6, 2.4 < WT ≤ 3.8', tol: '+35/-0' },
                          { type: 'Hot Rolled', range: 'OD > 101.6, 3.8 < WT ≤ 4.6', tol: '+33/-0' },
                          { type: 'Hot Rolled', range: 'OD > 101.6, WT > 4.6', tol: '+28/-0' },
                          { type: 'Cold Drawn', range: 'OD ≤ 38.1', tol: '+20/-0' },
                          { type: 'Cold Drawn', range: 'OD > 38.1', tol: '+22/-0' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.type}</td>
                            <td className="px-4 py-2 text-slate-700">{row.range}</td>
                            <td className="px-4 py-2 text-slate-700">{row.tol}</td>
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

export default AlloySteel;