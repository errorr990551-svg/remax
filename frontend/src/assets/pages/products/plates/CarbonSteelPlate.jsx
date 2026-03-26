import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const CarbonSteelPlate = () => {
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
            <span className="text-[#D71920] font-medium">Carbon Steel Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Carbon Steel Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=2070&auto=format&fit=crop" 
               alt="Carbon Steel Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Carbon Steel Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High strength material</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Cost effective solution</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Structural steel applications</h3>
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
          <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-hide">
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
          <div className="p-8 md:p-12 bg-white">
            
            {/* DESCRIPTION TAB */}
            {activeTab === 'description' && (
              <div className="space-y-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 text-justify">
                <p>
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Carbon Steel Plate. Available in different lengths, thicknesses and sizes, these Carbon Steel Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Carbon Steel Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Carbon Steel?</h3>
                <p>
                  Carbon steel is steel in which the main interstitial alloying constituent is carbon in the range of 0.12-2.0%. The American Iron and Steel Institute (AISI) defines that: Steel is considered to be carbon steel when no minimum content is specified or required for chromium, cobalt, molybdenum, nickel, niobium, titanium, tungsten, vanadium or zirconium, or any other element to be added to obtain a desired alloying effect, when the specified minimum for copper does not exceed 0.40 percent, or when the maximum content specified for any of the following elements does not exceed the percentages noted: manganese 1.65, silicon 0.60, copper 0.60.
                </p>
                <p>
                  The term "carbon steel" may also be used in reference to steel which is not stainless steel; in this use carbon steel may include alloy steels. As the carbon percentage content rises, steel has the ability to become harder and stronger through heat treating; however, it becomes less ductile. Regardless of the heat treatment, a higher carbon content reduces weldability. In carbon steels, the higher carbon content lowers the melting point.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-6">
                   <p className="font-medium text-slate-800 italic">
                      We are an ISO 9001:2008,ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
                   </p>
                </div>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse border border-slate-200">
                    <tbody>
                      {[
                        { label: "Type", value: "Carbon Steel Plate" },
                        { label: "Grade", value: "IS 2062 Gr.A,B & C, IS 2002 Gr.1 & 2, ASTM A 516 Gr.60 & 70, ASTM A515 Gr.70, A36, A572 Gr.50, A588, 1045, A514 T-1" },
                        { label: "Size", value: "Maximum width 1400mm" },
                        { label: "Width", value: "36”to 120”" },
                        { label: "Length", value: "96”to 480”" },
                        { label: "Thickness", value: "3/16”-8”" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Buildings,including pre-fabricated buildings,warehouses,industrial,commercial structures,Cabinets,enclosures,housings,Pipe and tubing" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate / Laboratory Test Certificate from Govt. Approved Lab. / Under Third Party Inspection with Excise Gate Pass to available benefit." }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-4 py-3 font-bold text-[#0F172A] w-1/4 align-top border-r border-slate-200">
                            {row.label}
                          </td>
                          <td className="px-4 py-3 text-slate-600 align-top">
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
                
                {/* Chemical Composition */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-3/4">
                     <table className="w-full text-sm text-center">
                        <thead className="bg-[#0F172A] text-white">
                           <tr>
                              <th className="px-4 py-3 border-r border-slate-600">Constituent</th>
                              <th className="px-4 py-3">Percent (%)</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white">
                           {[
                              { c: 'Carbon, Max.', p: '0.16' },
                              { c: 'Manganese, Min', p: '0.30' },
                              { c: 'Silicon, Max.', p: '0.25' },
                              { c: 'Sulphur, Max.', p: '0.030' },
                              { c: 'Phosphorous, Max.', p: '0.030' },
                              { c: 'Aluminium, Min', p: '0.02' }
                           ].map((row, idx) => (
                              <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                 <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200">{row.c}</td>
                                 <td className="px-4 py-3 text-slate-700">{row.p}</td>
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
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-3/4">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Property</th>
                          <th className="px-4 py-3">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Tensile Strength Mpa (kgf/mm ²)', v: '350 to 450 ( 36 to 46 )' },
                          { p: 'Yield Strength. Mpa ( Kg/mm ²) Min', v: '240 (25)' },
                          { p: 'Elongation, Min percent on guage length 5.65 OSo', v: '25' },
                          { p: 'Bend', v: 't' },
                          { p: 'EC v ( for 2.80-3.15 mm thickness) min', v: '13.5' }
                        ].map((row, idx) => (
                           <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                             <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 w-1/2">{row.p}</td>
                             <td className="px-4 py-2 text-slate-700">{row.v}</td>
                           </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic">* Both longitudinal and transverse directions.</p>
                </div>

                {/* Tolerance on Thickness */}
                <div>
                   <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Tolerance on Thickness of Sheets (AS PER IS : 513)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                       <thead className="bg-[#0F172A] text-white">
                          <tr>
                             <th rowSpan="2" className="px-2 py-3 border-r border-slate-600 align-middle">Nominal Thickness (mm)</th>
                             <th colSpan="3" className="px-2 py-2 border-b border-slate-600">Tolerance on the thickness for different width</th>
                          </tr>
                          <tr>
                             <th className="px-2 py-2 border-r border-slate-600">Upto 1250mm</th>
                             <th className="px-2 py-2 border-r border-slate-600">Above 1250 Upto 1600</th>
                             <th className="px-2 py-2">Above 1600</th>
                          </tr>
                       </thead>
                       <tbody className="bg-white">
                          {[
                             { t: 'Upto 0.25', w1: '+/- 0.03', w2: '-', w3: '-' },
                             { t: 'Above 0.25-0.40', w1: '+/- 0.04', w2: '-', w3: '-' },
                             { t: 'Above 0.40-0.60', w1: '+/- 0.05', w2: '+/- 0.06', w3: '-' },
                             { t: 'Above 0.60-0.80', w1: '+/- 0.06', w2: '+/- 0.07', w3: '+/- 0.08' },
                             { t: 'Above 0.80-1.00', w1: '+/- 0.08', w2: '+/- 0.09', w3: '+/- 0.10' },
                             { t: 'Above 1.00-1.25', w1: '+/- 0.09', w2: '+/- 0.10', w3: '+/- 0.12' },
                             { t: 'Above 1.25-1.60', w1: '+/- 0.11', w2: '+/- 0.12', w3: '+/- 0.14' },
                             { t: 'Above 1.60-2.00', w1: '+/- 0.12', w2: '+/- 0.14', w3: '+/- 0.16' }
                          ].map((row, idx) => (
                             <tr key={idx} className={idx % 2 === 0 ? "bg-white border-b border-slate-200" : "bg-slate-50 border-b border-slate-200"}>
                                <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.t}</td>
                                <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.w1}</td>
                                <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.w2}</td>
                                <td className="px-2 py-2 text-slate-700">{row.w3}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
                </div>

                {/* Tolerance on Width */}
                <div>
                   <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Tolerance on Width Of Sheets
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-1/2">
                    <table className="w-full text-sm text-center">
                       <thead className="bg-[#0F172A] text-white">
                          <tr>
                             <th className="px-4 py-3 border-r border-slate-600">Width of Sheets</th>
                             <th className="px-4 py-3">Tolerance (mm)</th>
                          </tr>
                       </thead>
                       <tbody className="bg-white">
                          <tr className="border-b border-slate-200">
                             <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200">Upto 1250 mm</td>
                             <td className="px-4 py-3 text-slate-700">+7, -0</td>
                          </tr>
                          <tr className="bg-slate-50 border-b border-slate-200">
                             <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200">Above 1250 mm</td>
                             <td className="px-4 py-3 text-slate-700">+10, -0</td>
                          </tr>
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

export default CarbonSteelPlate;