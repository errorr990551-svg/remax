import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const BrassTube = () => {
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
            <span className="text-[#D71920] font-medium">Brass Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Brass Tubes</h1>
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
               alt="Brass Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Brass Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Good machinability alloy tubing</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Low friction applications</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Used in valves fittings</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Brass Tube. Available in different lengths, thicknesses and sizes, these Brass Tube are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Brass Tube as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Brass?</h3>
                <p>
                  Brass is an alloy made of copper and zinc; the proportions of zinc and copper can be varied to create a range of brasses with varying properties. It is a substitutional alloy: atoms of the two constituents may replace each other within the same crystal structure. By comparison, bronze is principally an alloy of copper and tin. However, the common term "bronze" may also include arsenic, phosphorus, aluminium, manganese, and silicon. The term is also applied to a variety of brasses, and the distinction is largely historical. Modern practice in museums and archaeology increasingly avoids both terms for historical objects in favour of the all-embracing "copper alloy".
                </p>
                <p>
                  Brass is used for decoration for its bright gold-like appearance; for applications where low friction is required such as locks, gears, bearings, doorknobs, ammunition casings and valves; for plumbing and electrical applications; and extensively in brass musical instruments such as horns and bells where a combination of high workability (historically with hand tools) and durability is desired. It is also used in zippers. Brass is often used in situations in which it is important that sparks not be struck, such as in fittings and tools around explosive gases.
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
                        { label: "Type", value: "Brass Tube" },
                        { label: "Standard", value: "ASTM B-111, BS 2871 Part 3, EN 12451, NFA 51 102, JIS H3300" },
                        { label: "Grade", value: "C68700, CZ-110CZ-110, CuZn20Al2As, CuZn22Al2, C6870" },
                        { label: "Outer Diameter", value: "6.35 mm - 165 mm" },
                        { label: "Wall Thicknesses", value: "0.71 mm- 3.5mm" },
                        { label: "Length", value: "According to customers' requirements" },
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Chemical Requirements</th>
                          <th className="px-4 py-3 border-r border-slate-600">CuZn42Pb2</th>
                          <th className="px-4 py-3">CuZn40Pb2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { req: 'Copper', v1: '56.5 - 60.0%', v2: '57.0 - 59.0%' },
                          { req: 'Lead', v1: '0.60 to 2.0%', v2: '1.5 to 2.5%' },
                          { req: 'Iron', v1: '0.30% max', v2: '0.40% max' },
                          { req: 'Total Imp. Excl. Iron', v1: '0.20% max', v2: '0.70% max' },
                          { req: 'Zinc', v1: 'Remainder', v2: 'Remainder' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left">{row.req}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.v1}</td>
                            <td className="px-4 py-2 text-slate-700">{row.v2}</td>
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
                
                {/* Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Value 1</th>
                          <th className="px-4 py-3">Value 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Tensile Strength', v1: '380 Mpa Min', v2: '40 kg/mm2 Min.' },
                          { p: 'Elongation %', v1: '25% Min', v2: '18% Min.' },
                          { p: 'Izod Value', v1: '-', v2: '2.0 KJ min' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.v1}</td>
                            <td className="px-4 py-2 text-slate-700">{row.v2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Fabrication Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Fabrication Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Capacity</th>
                          <th className="px-4 py-3">Rating 1</th>
                          <th className="px-4 py-3">Rating 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { c: 'Cold worked', r1: 'Poor', r2: 'Poor' },
                          { c: 'Hot formed', r1: 'Excellent', r2: 'Excellent' },
                          { c: 'Hot forgeability rating', r1: '100%', r2: '100%' },
                          { c: 'Machinability Rating', r1: '80%', r2: '80%' },
                          { c: 'Suitability for soldering', r1: 'Excellent', r2: 'Excellent' },
                          { c: 'Suitability for Brazing', r1: 'Good', r2: 'Good' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.c}</td>
                            <td className="px-4 py-2 text-slate-700">{row.r1}</td>
                            <td className="px-4 py-2 text-slate-700">{row.r2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Typical Uses */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Typical Uses
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    Forged Components, Industrial Valves, Defence components, Watch Case, Automobile Valves Components
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

export default BrassTube;