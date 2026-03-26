import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const BoilerQualityPlate = () => {
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
            <span className="text-[#D71920] font-medium">Boiler Quality Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Boiler Quality Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1974&auto=format&fit=crop" 
               alt="Boiler Quality Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Boiler Quality Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High pressure resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Excellent weldability</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Temperature resistant steel</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Boiler Quality Plate. Available in different lengths, thicknesses and sizes, these Boiler Quality Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Boiler Quality Plate as per customer’s requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Boiler Steel?</h3>
                <p>
                  Boiler Quality or Pressure Vessel Plates are produced to make a superior quality carbon steel plate which have consistent controlled properties and are designed to withstand the internal pressure of pressure vessels, boilers and valves. Boiler quality or Pressure Vessel Steel Plates are very popular due to its diversity of use and longevity. Characteristics Uniform surface High tensile strength Corrosion resistance Sturdy construction Temperature resistance.
                </p>
                <p>
                  ASTM A 516 or ASME SA 516 grade is one of the most popular steel grades. It is primarily intended for use in welded pressure vessels where notch toughness is important. These grades cover a range of tensile strengths from 55 - 90 MPa and this versatility explains much of the specification’s popularity. For plates thinner than 40mm normally supply as rolled. Plates above 40mm thick are normalised. For A 516 grade 70, which is one of most popular steels, the ASME standard composition is as follows (dependent on grade). ASTM A516 Standard steel plates are intended for use in pressure vessels where increased strength is important.
                </p>

                <h3 className="text-xl font-bold text-[#0F172A] mt-6">ASTM A 516 GR. 60</h3>
                <p>
                  ASTM A516 Grade 60 is a boiler and pressure vessel quality steel which is ideal for moderate and lower temperature service. The material is used extensively by industrial boiler and pressure vessel fabricators who provide manufacturing support to the oil, gas and petrochemical industry. The steel has good weldability and excellent notch toughness.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-6">
                   <p className="font-medium text-slate-800 italic">
                      We are an ISO 9001:2008 , ISO 9001-2008 , ISO 14001-2004 , OHSAS 18001-2007 , NSIC-CRISIL , EEPC , and QA-UKAS (ISO 9001-2008) , SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
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
                        { label: "Type", value: "Boiler Quality Plate" },
                        { label: "Grade", value: "ASME SA516 Gr. 60, ASME SA516 Gr. 65, ASTM A516 Gr. 70 EN 10028-2 P265GH, EN 10028-3 P275NH, BS 1501 161 430A, BS 1501 161 430B, DIN 17155, ASTM A285 , ASTM A283" },
                        { label: "Width", value: "1500-3500mm" },
                        { label: "Thickness", value: "8-100mm" },
                        { label: "Length", value: "1500-3500mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Bridge Construction,Structures,Fences,Urban Furniture,Sculptures,Industrial Containers" },
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
                
                {/* Chemical Composition of ASTM A 516 Grade 60 */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition of ASTM A 516 Grade 60
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                     <table className="w-full text-sm text-center">
                        <thead className="bg-[#0F172A] text-white">
                           <tr>
                              <th className="px-2 py-3 border-r border-slate-600">Element</th>
                              <th className="px-2 py-3 border-r border-slate-600">Condition/Thickness</th>
                              <th className="px-2 py-3">Value (%)</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white">
                           {/* Carbon */}
                           <tr className="border-b border-slate-200">
                              <td rowSpan="5" className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200 align-middle">Carbon (C)</td>
                              <td className="px-2 py-2 border-r border-slate-200">12.5mm or less</td>
                              <td className="px-2 py-2">0.21</td>
                           </tr>
                           <tr className="border-b border-slate-200 bg-slate-50">
                              <td className="px-2 py-2 border-r border-slate-200">12.5 - 50mm</td>
                              <td className="px-2 py-2">0.23</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-2 py-2 border-r border-slate-200">50 - 100mm</td>
                              <td className="px-2 py-2">0.25</td>
                           </tr>
                           <tr className="border-b border-slate-200 bg-slate-50">
                              <td className="px-2 py-2 border-r border-slate-200">100 - 200mm</td>
                              <td className="px-2 py-2">0.27</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-2 py-2 border-r border-slate-200">&gt; 200mm</td>
                              <td className="px-2 py-2">0.27</td>
                           </tr>

                           {/* Manganese */}
                           <tr className="border-b border-slate-200 bg-slate-50">
                              <td rowSpan="2" className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200 align-middle">Manganese (Mn)</td>
                              <td className="px-2 py-2 border-r border-slate-200">12.5mm or less</td>
                              <td className="px-2 py-2">0.60 - 0.90</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-2 py-2 border-r border-slate-200">Over 12.5mm</td>
                              <td className="px-2 py-2">0.85 - 1.20</td>
                           </tr>

                           {/* Others */}
                           <tr className="border-b border-slate-200 bg-slate-50">
                              <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">Phosphorus (P)</td>
                              <td className="px-2 py-2 border-r border-slate-200">Max</td>
                              <td className="px-2 py-2">0.035</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">Sulphur (S)</td>
                              <td className="px-2 py-2 border-r border-slate-200">Max</td>
                              <td className="px-2 py-2">0.035</td>
                           </tr>
                           <tr className="border-b border-slate-200 bg-slate-50">
                              <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">Silicon (Si)</td>
                              <td className="px-2 py-2 border-r border-slate-200">Heat Analysis</td>
                              <td className="px-2 py-2">0.15 - 0.40</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                </div>

                {/* ASTM A516 Chemical Properties (Cast Analysis) */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    ASTM A516 Chemical Properties (Cast Analysis)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 border-r border-slate-600">Grade</th>
                          <th className="px-2 py-3 border-r border-slate-600">C (t &lt; 12.5mm)</th>
                          <th className="px-2 py-3 border-r border-slate-600">C (12.5 &lt; t ≤ 50)</th>
                          <th className="px-2 py-3 border-r border-slate-600">Mn (t &lt; 12.5mm)</th>
                          <th className="px-2 py-3 border-r border-slate-600">Mn (t &gt; 12.5mm)</th>
                          <th className="px-2 py-3 border-r border-slate-600">P max</th>
                          <th className="px-2 py-3 border-r border-slate-600">S max</th>
                          <th className="px-2 py-3">Si max</th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">A516 Grade 60</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.21</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.23</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.60-0.90</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.85-1.2</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.035</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.035</td>
                           <td className="px-2 py-2">0.15-0.4</td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">A516 Grade 70</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.27</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.28</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.85-1.2</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.85-1.2</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.035</td>
                           <td className="px-2 py-2 border-r border-slate-200">0.035</td>
                           <td className="px-2 py-2">0.15-0.4</td>
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
                
                {/* ASTM A516 Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    ASTM A516 Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-3/4">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Grade</th>
                          <th className="px-4 py-3 border-r border-slate-600">Tensile Strength (ksi)</th>
                          <th className="px-4 py-3 border-r border-slate-600">Tensile Strength (MPa)</th>
                          <th className="px-4 py-3 border-r border-slate-600">Yield Strength (ksi)</th>
                          <th className="px-4 py-3 border-r border-slate-600">Yield Strength (MPa)</th>
                          <th className="px-4 py-3 border-r border-slate-600">Elongation in 200mm(%)</th>
                          <th className="px-4 py-3">Elongation in 50mm(%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b border-slate-200">
                          <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">A516 Grade 60</td>
                          <td className="px-4 py-2 border-r border-slate-200">60-80</td>
                          <td className="px-4 py-2 border-r border-slate-200">415-550</td>
                          <td className="px-4 py-2 border-r border-slate-200">32</td>
                          <td className="px-4 py-2 border-r border-slate-200">220</td>
                          <td className="px-4 py-2 border-r border-slate-200">21</td>
                          <td className="px-4 py-2">25</td>
                        </tr>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">A516 Grade 70</td>
                          <td className="px-4 py-2 border-r border-slate-200">70-90</td>
                          <td className="px-4 py-2 border-r border-slate-200">485-620</td>
                          <td className="px-4 py-2 border-r border-slate-200">38</td>
                          <td className="px-4 py-2 border-r border-slate-200">260</td>
                          <td className="px-4 py-2 border-r border-slate-200">17</td>
                          <td className="px-4 py-2">21</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Properties of ASTM A 516 Grade 60 */}
                <div>
                   <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties of ASTM A 516 Grade 60 (Detailed)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-3/4">
                    <table className="w-full text-sm text-left border-collapse">
                       <tbody>
                          {[
                            { label: "Tensile strength (ksi)", value: "60-80" },
                            { label: "Tensile strength (MPa)", value: "415-550" },
                            { label: "Yield strength (ksi)", value: "32" },
                            { label: "Yield strength (MPa)", value: "220" },
                            { label: "Elongation in 200mm (min)(%)", value: "21" },
                            { label: "Elongation in 50mm (min) (%)", value: "25" },
                            { label: "Thickness (max)(mm)", value: "205" }
                          ].map((row, idx) => (
                             <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                <td className="px-4 py-2 font-bold text-[#0F172A] border-r border-slate-200 w-1/2">{row.label}</td>
                                <td className="px-4 py-2 text-slate-700">{row.value}</td>
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

export default BoilerQualityPlate;