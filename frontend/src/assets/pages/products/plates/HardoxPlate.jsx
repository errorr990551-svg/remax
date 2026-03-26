import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const HardoxPlate = () => {
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
            <span className="text-slate-400">Plates</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Hardox Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hardox Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1565514020176-db765cb86b72?q=80&w=2070&auto=format&fit=crop" 
               alt="Hardox Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Hardox Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Extreme abrasion resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High impact strength</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Long service life</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Hardox Plate. Available in different lengths, thicknesses and sizes, these Hardox Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Hardox Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Hardox?</h3>
                <p>
                  Steels are alloys of iron and other elements, primarily carbon, widely used in construction and other applications because of their high tensile strengths and low costs. Carbon, other elements, and inclusions within iron act as hardening agents that prevent the movement of dislocations that otherwise occur in the crystal lattices of iron atoms. The carbon in typical steel alloys may contribute up to 2.1% of its weight. Varying the amount of alloying elements, their formation in the steel either as solute elements, or as precipitated phases, retards the movement of those dislocations that make iron comparatively ductile and weak, and thus controls qualities such as the hardness, ductility, and tensile strength of the resulting steel. Steel's strength compared to pure iron is only possible at the expense of ductility, of which iron has an excess.
                </p>
                <p>
                  Although steel had been produced in bloomery furnaces for thousands of years, steel's use expanded extensively after more efficient production methods were devised in the 17th century for blister steel and then crucible steel. With the invention of the Bessemer process in the mid-19th century, a new era of mass-produced steel began. This was followed by Siemens-Martin process and then Gilchrist-Thomas process that refined the quality of steel. With their introductions, mild steel replaced wrought iron. Further refinements in the process, such as basic oxygen steelmaking (BOS), largely replaced earlier methods by further lowering the cost of production and increasing the quality of the metal. Today, steel is one of the most common materials in the world, with more than 1.3 billion tons produced annually. It is a major component in buildings, infrastructure, tools, ships, automobiles, machines, appliances, and weapons. Modern steel is generally identified by various grades defined by assorted standards organizations.
                </p>
                <p>
                  We are an ISO 9001:2008,ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
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
                        { label: "Type", value: "HARDOX 500 , HARDOX 400 , HARDOX 450 & HARDOX 600, SAILHARD, ABREX, NICRODUR, DILLIDUR 360, 400, 450, 500, 550, 600, 700, 900 & 1000(BHN)" },
                        { label: "Thickness", value: "3-200mm" },
                        { label: "Width", value: "500-3000mm" },
                        { label: "Length", value: "1000-12000mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases .On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Dump Truck Bodies, Conveyors, Chutes, Loading Buckets & Bulldozers, Crushers, Mining, Recycling Equipment, Lifting and Agricultural Equipment manufacturing" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate / Laboratory Test Certificate from Govt. Approved Lab. / Under Third Party Inspection with Excise Gate Pass to available benefit." }
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
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Thickness mm Cut lengths</th>
                          <th className="px-4 py-3 border-r border-slate-600">Heavy Plates</th>
                          {['C', 'Si', 'Mn', 'P', 'S', 'Al', 'Cr', 'Ni', 'Mo', 'B'].map(h => (
                            <th key={h} className="px-3 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b border-slate-200">
                          <td className="px-4 py-3 border-r border-slate-200">3 - 12</td>
                          <td className="px-4 py-3 border-r border-slate-200">5 - 30</td>
                          <td className="px-3 py-3 text-slate-700">0.20</td>
                          <td className="px-3 py-3 text-slate-700">0.70</td>
                          <td className="px-3 py-3 text-slate-700">1.70</td>
                          <td className="px-3 py-3 text-slate-700">0.030</td>
                          <td className="px-3 py-3 text-slate-700">0.015</td>
                          <td className="px-3 py-3 text-slate-700">0.060</td>
                          <td className="px-3 py-3 text-slate-700">1.50</td>
                          <td className="px-3 py-3 text-slate-700">0.40</td>
                          <td className="px-3 py-3 text-slate-700">0.50</td>
                          <td className="px-3 py-3 text-slate-700">0.004</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="px-4 py-3 border-r border-slate-200">---</td>
                          <td className="px-4 py-3 border-r border-slate-200">(30) - 60</td>
                          <td className="px-3 py-3 text-slate-700">0.24</td>
                          <td className="px-3 py-3 text-slate-700">0.70</td>
                          <td className="px-3 py-3 text-slate-700">1.70</td>
                          <td className="px-3 py-3 text-slate-700">0.030</td>
                          <td className="px-3 py-3 text-slate-700">0.015</td>
                          <td className="px-3 py-3 text-slate-700">0.060</td>
                          <td className="px-3 py-3 text-slate-700">1.00</td>
                          <td className="px-3 py-3 text-slate-700">0.70</td>
                          <td className="px-3 py-3 text-slate-700">0.50</td>
                          <td className="px-3 py-3 text-slate-700">0.004</td>
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Thickness mm Cut lengths</th>
                          <th className="px-4 py-3 border-r border-slate-600">Heavy plates</th>
                          <th className="px-4 py-3 border-r border-slate-600">Yield strength Rp0,2 N/mm²</th>
                          <th className="px-4 py-3 border-r border-slate-600">Tensile strength Rm N/m²</th>
                          <th className="px-4 py-3 border-r border-slate-600">Elongation A5 %</th>
                          <th className="px-4 py-3 border-r border-slate-600">Hardness range HBW</th>
                          <th className="px-4 py-3">Impact strength 0°C KV J</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { t1: '3 - 12', t2: '5 - 15', ys: '1000', ts: '1250', el: '10', h: '360 - 420', i: '40' },
                          { t1: '---', t2: '(15) - 30', ys: '1000', ts: '1250', el: '10', h: '380 - 450', i: '20' },
                          { t1: '---', t2: '(30) - 60', ys: '1100', ts: '1400', el: '8', h: '380 - 480', i: '20' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-3 border-r border-slate-200">{row.t1}</td>
                            <td className="px-4 py-3 border-r border-slate-200">{row.t2}</td>
                            <td className="px-4 py-3 text-slate-700 border-r border-slate-200">{row.ys}</td>
                            <td className="px-4 py-3 text-slate-700 border-r border-slate-200">{row.ts}</td>
                            <td className="px-4 py-3 text-slate-700 border-r border-slate-200">{row.el}</td>
                            <td className="px-4 py-3 text-slate-700 border-r border-slate-200">{row.h}</td>
                            <td className="px-4 py-3 text-slate-700">{row.i}</td>
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

export default HardoxPlate;