import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const OffshoreSteelPlate = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
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
            <span className="text-[#D71920] font-medium">Offshore Steel Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Offshore Steel Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop" 
               alt="Offshore Steel Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Offshore Steel Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Marine environment resistant</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High yield strength</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Low temperature toughness</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Offshore Steel Plate. Available in different lengths, thicknesses and sizes, these Offshore Steel Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Offshore Steel Plate as per customers‘ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Offshore Steel?</h3>
                <p>
                  Predominantly, offshore structures are built specifically for drilling oil and gas deposits deep under the sea bed. Whilst applications will vary, all will have exposure to the effects of salt water corrosion, powerful sea currents often dictated by the tides and strong winds. Our search for natural fuel resources has stretched into even more inaccessible areas such as the Arctic which has also resulted in rigs drilling at much greater depths and hence lower temperatures.
                </p>
                <p>
                  Structures in harsh working environments like these require a specific range of steels to promote greater safety, longer working life and reduce the risk of failure which in certain cases could prove disastrous.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-6">
                   <p className="font-medium text-slate-800 italic">
                      We are an ISO 9001:2008,ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world ‘s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
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
                        { label: "Type", value: "Offshore Steel Plate" },
                        { label: "Grade", value: "EN10225:S355, EN10225:S420, EN10225:S460, API 2H, API 2W" },
                        { label: "Size", value: "Maximum width 1400mm" },
                        { label: "Width", value: "1901-3300mm" },
                        { label: "Length", value: "2-15mm" },
                        { label: "Thickness", value: "8-65mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "High yield strength,Excellent weldability,Good internal soundness,Good resistance to brittle fracture (longitudinal and transverse),Low phosphorus and sulphur contents,High resistance to lamellar tearing" },
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

            {/* PROPERTIES TAB */}
            {activeTab === 'properties' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Comparison Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Comparison of tensile strength, yield strength and toughness
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-xs md:text-sm text-center">
                       <thead className="bg-[#0F172A] text-white">
                          <tr>
                             <th className="px-2 py-3 border-r border-slate-600"></th>
                             <th className="px-2 py-3 border-r border-slate-600">BS7191</th>
                             <th className="px-2 py-3 border-r border-slate-600">EN 10225 / NORSOK</th>
                             <th className="px-2 py-3 border-r border-slate-600">API 2H</th>
                             <th className="px-2 py-3">Shipbuilding rules LR / GL / NV etc.</th>
                          </tr>
                          <tr>
                             <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">355 N</th>
                             <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">355EM / EMZ</th>
                             <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">S355G2+N, S355G3+N, S355G7+N...</th>
                             <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">API 2H-50</th>
                             <th className="px-2 py-2 bg-slate-800">e. g. E 36 / EH 36</th>
                          </tr>
                       </thead>
                       <tbody className="bg-white">
                          {/* Tensile Strength Section */}
                          <tr className="bg-slate-100 border-b border-slate-200">
                             <td className="px-2 py-2 font-bold text-left border-r border-slate-200 text-[#D71920]">Tensile strength Rm [MPa]</td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2"></td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">Thick. ≤ 25mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">460 - 620</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">470 - 630</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">483 - 620</td>
                             <td className="px-2 py-2 text-slate-700">490 - 620</td>
                          </tr>
                          <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">25 &lt; t ≤ 40mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">""</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">""</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">""</td>
                             <td className="px-2 py-2 text-slate-700">""</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">40 &lt; t ≤ 100mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                           <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">100 &lt; t ≤ 150mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>

                          {/* Yield Strength Section */}
                          <tr className="bg-slate-100 border-b border-slate-200">
                             <td className="px-2 py-2 font-bold text-left border-r border-slate-200 text-[#D71920]">Yield Strength ReH [MPa]</td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2 border-r border-slate-200"></td>
                             <td className="px-2 py-2"></td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">Thick. ≤ 16mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 355</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 355</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 355 *)</td>
                             <td className="px-2 py-2 text-slate-700">≥ 355</td>
                          </tr>
                          <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">16 &lt; t ≤ 20mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 345</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">20 &lt; t ≤ 25mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">25 &lt; t ≤ 40mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 345</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">40 &lt; t ≤ 63mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 340</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">63 &lt; t ≤ 80mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 325</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 325 *)</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">80 &lt; t ≤ 100mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 325</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                          <tr className="border-b border-slate-200 bg-slate-50">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">100 &lt; t ≤ 120mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 315</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
                          </tr>
                           <tr className="border-b border-slate-200">
                             <td className="px-2 py-2 font-medium text-left border-r border-slate-200">120 &lt; t ≤ 150mm</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">≥ 305</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">-</td>
                             <td className="px-2 py-2 text-slate-700 border-r border-slate-200">''</td>
                             <td className="px-2 py-2 text-slate-700">''</td>
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

export default OffshoreSteelPlate;