import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const NickelAlloyPlate = () => {
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
            <span className="text-[#D71920] font-medium">Nickel Alloy Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nickel Alloy Plate</h1>
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
               alt="Nickel Alloy Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Nickel Alloy Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Superior corrosion resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High temperature stability</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Chemical processing grade</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Nickel Alloy Plate. Available in different lengths, thicknesses and sizes, these Nickel Alloy Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Nickel Alloy Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Nickel Alloy?</h3>
                <p>
                  Nickel alloys are metals that contain large amounts of nickel for the purpose of increasing the level of resistance to corrosion and heat-induced weakness or softening. Sandmeyer Steel Company houses an extensive inventory of nickel alloy plate in a variety of thicknesses and additionally provides a wide variety of value added processes for manufacturing an exact nickel alloy part or component.
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
                        { label: "Type", value: "Nickel Alloy Plate" },
                        { label: "Standards", value: "ASTM B-463, ASME SB-463, ASTM B-575, ASME SB-575, ASTM B-753, ASTM F-1684, MIL-I-23011, AMS 5545, AMS 5712, AMS 5800, AMS 5712, AMS 5608, AMS 5772, AMS 5609, ASTM B-162, ASME SB-162, AMS 5533, ASTM B-127, ASME SB-127, AMS 4544, QQ-N-281, STM B-168, ASME SB-168, AMS 5540, MIL-N-23228, MIL-T-23227." },
                        { label: "UNS No", value: "N08020, N06022, K93603, N02200, N02201, N04400, N06600, N06625, N07718, N08810, N08825." },
                        { label: "Width", value: "120-1460mm" },
                        { label: "Length", value: "210-1600mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Flue gas scrubbers, Sulphuric acid tanks and racks, Process piping, Heat exchangers, Chemical processing, pollution control, flue gas desulfurization systems, sour gas services," },
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Element</th>
                          <th className="px-4 py-3">Content (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'Molybdenum, Mo', val: '15-17' },
                          { el: 'Chromium, Cr', val: '14.5-16.5' },
                          { el: 'Cobalt, Co', val: '2.5 max' },
                          { el: 'Manganese, Mn', val: '1' },
                          { el: 'Vanadium, V', val: '0.35 max' },
                          { el: 'Silicon, Si', val: '0.08 max' },
                          { el: 'Phosphorus, P', val: '0.04 max' },
                          { el: 'Sulfur, S', val: '0.03 max' },
                          { el: 'Carbon, C', val: '0.01 max' },
                          { el: 'Nickel, Ni', val: '62.5-67.5' }
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
                
                {/* Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Properties</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">Imperial</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Density', m: '8.89 g/cm3', i: '0.321 lb/in3' },
                          { p: 'Melting point', m: '1325 °C', i: '2417 °F' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.m}</td>
                            <td className="px-4 py-2 text-slate-700">{row.i}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Properties</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">Imperial</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Tensile strength', m: '740.5 MPa', i: '107400 psi' },
                          { p: 'Yield strength', m: '347 MPa', i: '50300 psi' },
                          { p: 'Elastic modulus', m: '205 GPa', i: '29700 ksi' },
                          { p: 'Elongation at break', m: '67%', i: '67%' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.m}</td>
                            <td className="px-4 py-2 text-slate-700">{row.i}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Thermal Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Thermal Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Properties</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">Imperial</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Thermal conductivity (@23°C/73.4°F)', m: '9.80 W/m-K', i: '68.0 BTU·in/hr·ft²·°F' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.m}</td>
                            <td className="px-4 py-2 text-slate-700">{row.i}</td>
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

export default NickelAlloyPlate;