import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const ManganesePlate = () => {
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
            <span className="text-[#D71920] font-medium">Manganese Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Manganese Plate</h1>
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
               alt="Manganese Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Manganese Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Exceptional wear resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Impact hardening steel</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Ideal for crushing applications</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Manganese Plate. Available in different lengths, thicknesses and sizes, these Manganese Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Manganese Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Manganese Plate?</h3>
                <p>
                  Mangalloy is made by alloying steel, containing 0.8 to 1.25% carbon, with 11 to 15% manganese. Mangalloy is a unique non-magnetic steel with extreme anti-wear properties. The material is very resistant to abrasion and will achieve up to three times its surface hardness during conditions of impact, without any increase in brittleness which is usually associated with hardness. This allows mangalloy to retain its toughness. Most steels contain 0.15 to 0.8% manganese. High strength alloys often contain 1 to 1.8% manganese. At about 1.5% manganese content, the steel becomes brittle, and this trait increases until about 4 to 5% manganese content is reached. At this point, the steel will pulverize at the strike of a hammer. Further increase in the manganese content will increase both hardness and ductility. At around 10% manganese content the steel will remain in its austenite form at room temperature if cooled correctly. Both hardness and ductility reach their highest points around 12%, depending on other alloying agents.
                </p>
                <p>
                  Mangalloy has been used in the mining industry, cement mixers, rock crushers, railway switches and crossings, crawler treads for tractors and other high impact and abrasive environments. It is also used in high impact environments like inside a shot peening machine. These alloys are finding new uses as cryogenic steels, due to their high strength at very low temperatures. Mangalloy is heat treatable, but the manganese lowers the temperature at which austenite transforms into ferrite. Most grades are ready for use after annealing and then quenching from a yellow heat, with no further need of tempering, and usually have a normal Brinell hardness of around 200 HB, (roughly the same as 304 stainless steel), but, due to its unique properties, this number has very little effect on determining the abrasion and impact resistance of the metal. Another source says that the basic Brinnell hardness of manganese steel according to the original Hadfield specification is 220 but that with impact wear the surface hardness will increase to over 550.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-6">
                   <p className="font-medium text-slate-800 italic">
                      We are an ISO 9001:2008, ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
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
                        { label: "Type", value: "Manganese Plate" },
                        { label: "Standard", value: 'EURONORM 1.3401 - X120Mn13, DIN W1.3401, AFNOR X120Mn13, ASTM A128 Gr B2' },
                        { label: "Size", value: '1/4", 1/2", 3/4", 1-1/4", 2"' },
                        { label: "Width", value: '48", 60", 72", 96"' },
                        { label: "Thickness", value: "3mm-600mm" },
                        { label: "Length", value: '120", 144", 240"' },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases .On special requests we can also, make custom marking on our products." },
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
                
                {/* Chemical Analysis */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Analysis Typical values (% weight)
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-3/4">
                     <table className="w-full text-sm text-center">
                        <thead className="bg-[#0F172A] text-white">
                           <tr>
                              <th className="px-4 py-3 border-r border-slate-600">C</th>
                              <th className="px-4 py-3 border-r border-slate-600">Si</th>
                              <th className="px-4 py-3 border-r border-slate-600">Mn</th>
                              <th className="px-4 py-3 border-r border-slate-600">S</th>
                              <th className="px-4 py-3">P</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white">
                           <tr className="border-b border-slate-200">
                              <td className="px-4 py-3 text-slate-700 border-r border-slate-200">1.13</td>
                              <td className="px-4 py-3 text-slate-700 border-r border-slate-200">0.40</td>
                              <td className="px-4 py-3 text-slate-700 border-r border-slate-200">13</td>
                              <td className="px-4 py-3 text-slate-700 border-r border-slate-200">0.003</td>
                              <td className="px-4 py-3 text-slate-700">≤ 0.20</td>
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600"></th>
                          <th className="px-4 py-3 border-r border-slate-600">Hardness HB</th>
                          <th className="px-4 py-3 border-r border-slate-600">Yield Strength MPa</th>
                          <th className="px-4 py-3 border-r border-slate-600">UTS MPa</th>
                          <th className="px-4 py-3 border-r border-slate-600">El %</th>
                          <th className="px-4 py-3">KCV 20°C (68°F) - J</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b border-slate-200">
                          <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200 text-left">Typical Values</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">220</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">380 (55 KSI)</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">940 (136 KSI)</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">40</td>
                          <td className="px-4 py-3 text-slate-700">≥ 112 J (≥ 83 ft.lbs)</td>
                        </tr>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <td className="px-4 py-3 font-bold text-[#D71920] border-r border-slate-200 text-left">Guaranteed Values*</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">180/245</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">350 (51 KSI)</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">800 (116 KSI)</td>
                          <td className="px-4 py-3 text-slate-700 border-r border-slate-200">30</td>
                          <td className="px-4 py-3 text-slate-700">64 J (47 ft.lbs)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic">* after water quenching 980°C (1800°F)</p>
                </div>

                {/* Physical Properties */}
                <div>
                   <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                       <thead className="bg-[#0F172A] text-white">
                          <tr>
                             <th className="px-2 py-3 border-r border-slate-600"></th>
                             <th className="px-2 py-3 border-r border-slate-600">Density *</th>
                             <th className="px-2 py-3 border-r border-slate-600">Expansion Coeff. 0-600 °C</th>
                             <th className="px-2 py-3 border-r border-slate-600">Specific Heat</th>
                             <th className="px-2 py-3 border-r border-slate-600">Electrical * Resistivity</th>
                             <th className="px-2 py-3 border-r border-slate-600">Thermal * Conductivity</th>
                             <th className="px-2 py-3">Magnetic * Permability</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr className="bg-white border-b border-slate-200">
                             <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">Metric</td>
                             <td className="px-2 py-2 border-r border-slate-200">7.88</td>
                             <td className="px-2 py-2 border-r border-slate-200">10⁻⁶ °C⁻¹</td>
                             <td className="px-2 py-2 border-r border-slate-200">J/Metric Kg. °C 502</td>
                             <td className="px-2 py-2 border-r border-slate-200">µΩ·m 75</td>
                             <td className="px-2 py-2 border-r border-slate-200">W/m. °C 13</td>
                             <td className="px-2 py-2" rowSpan="2">≈ 1.002</td>
                          </tr>
                          <tr className="bg-slate-50 border-b border-slate-200">
                             <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">US</td>
                             <td className="px-2 py-2 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 border-r border-slate-200">10⁻⁶ °F⁻¹</td>
                             <td className="px-2 py-2 border-r border-slate-200">BTU/lb°F .12</td>
                             <td className="px-2 py-2 border-r border-slate-200">µΩ·m 75</td>
                             <td className="px-2 py-2 border-r border-slate-200">BTU/hr.ft°F 7.3</td>
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

export default ManganesePlate;