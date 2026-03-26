import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home, Download } from 'lucide-react';

const CortenSteelPlate = () => {
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
            <span className="text-[#D71920] font-medium">Corten Steel Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Corten Steel Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1518709414768-a8c554069679?q=80&w=2000&auto=format&fit=crop" 
               alt="Corten Steel Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Corten Steel Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Natural weather resistance</h3>
                    
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Low maintenance steel</h3>
                    
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Aesthetic rust finish</h3>
                    
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Cor ten Steel Plate. Available in different lengths, thicknesses and sizes, these Cor ten Steel Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Cor ten Steel Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Corten?</h3>
                <p>
                  Weathering steel, best-known under the trademark COR-TEN steel and sometimes written without the hyphen as "Corten steel", is a group of steel alloys which were developed to eliminate the need for painting, and form a stable rust-like appearance if exposed to the weather for several years. U.S. Steel holds the registered trademark on the name COR-TEN. Although USS sold its discrete plate business to International Steel Group (now Arcelor-Mittal) in 2003,it still sells COR-TEN branded material in strip-mill plate and sheet forms.
                </p>
                <p>
                  The original COR-TEN received the standard designation A 242 ("COR-TEN A") from the ASTM International standards group. Newer ASTM grades are A 588 ("COR-TEN B") and A 606 for thin sheet. All alloys are in common production and use.
                </p>
                
                <p className="mt-6">
                   We are an ISO 9001:2008 , ISO 9001-2008 , ISO 14001-2004 , OHSAS 18001-2007 , NSIC-CRISIL , EEPC , and QA-UKAS (ISO 9001-2008) , SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-10">
                  
                  {/* Main Spec Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse border border-slate-200">
                      <tbody>
                        {[
                          { label: "Type", value: "Cor ten Steel Plate" },
                          { label: "Standard", value: "ASTM A588, A242" },
                          { label: "Grade", value: "IRSM-41, Corten A ,Corten B , S355J0WP , S355J0W, S355J2W , A588 Grade A, A588 Grade B, A588 Grade C , A242 Type 1 , SA588 Grade A, SA588 Grade B, SA588 Grade C" },
                          { label: "Thickness", value: "0.3-500mm" },
                          { label: "Width", value: "10-3500mm" },
                          { label: "Length", value: "2m, 2.44m, 3m, 6m, 8m, 12m or rolled etc" },
                          { label: "Delivery time", value: "up to the order quantity" },
                          { label: "Order", value: "Accept custom order" },
                          { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                          { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                          { label: "Application", value: "Outdoor Sculptures,Complex,Marine Transportation,Tanks,Corten Facades,Building,Rail Wagons" },
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

                  {/* Standards List */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-4 border-b pb-2">Corten Steel Can Be Also Supplied According To Following Standard & Specifications</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 bg-slate-50 p-6 rounded-lg border border-slate-200">
                        {[
                          "COR-TEN® A, COR-TEN®A, COR-TEN A, CORTEN-A, CORTEN A",
                          "COR-TEN® B, COR-TEN®B, COR-TEN B, CORTEN-B, CORTEN B",
                          "ASTM A588 Grade A, ASTM A 588 Grade-A, ASTM A-588 Grade A",
                          "ASTM A588 Grade B, ASTM A 588 Grade-B, ASTM A-588 Grade B",
                          "ASTM A588 Grade C, ASTM A 588 Grade-C, ASTM A-588 Grade C",
                          "ASTM A242 Type 1, ASTM A242 Type-1, ASTM A-242 Type 1",
                          "S355JOWP EN 10025-5, S355JOWP EN10025-5, S355 JOWP EN-10025-5",
                          "S355JOWP+N EN 10025-5, S355JOWP+N EN10025-5, S355 JOWP+N EN-10025-5",
                          "S355J2W EN 10025-5, S355J2W EN10025-5, S355 J2W EN-10025-5",
                          "S355J2W+N EN 10025-5, S355J2W+N EN10025-5, S355 J2W+N EN-10025-5",
                          "S355J2G1W EN 10155, S355J2G1W EN10155, S355 J2G1W EN-10155",
                          "S355K2G1W EN 10155, S355K2G1W EN10155, S355 K2G1W EN-10155",
                          "S355J2G2W EN 10155, S355J2G2W EN10155, S355 J2G2W EN-10155",
                          "S355K2G2W EN 10155, S355J2G2W EN10155, S355 K2G2W EN-10155",
                          "SAILCOR IRSM41, IRSM-41, IRS-M41 FOR RAILWAY WAGON & CONTAINER",
                          "JIS G3125 SPA-H, JIS G3125 SPAH, JIS: G3125-SPA-H, JIS-G3125-SPAH, G3125-SPA-H"
                        ].map((std, i) => (
                          <li key={i}>{std}</li>
                        ))}
                    </ul>
                  </div>

                  {/* Equivalent Specifications Table */}
                  <div className="overflow-x-auto">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-4 border-b pb-2">Equivalent Specifications</h3>
                    <table className="w-full text-sm text-center border-collapse border border-slate-200">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-2 border border-slate-600">Material #</th>
                          <th className="px-2 py-2 border border-slate-600">EN 10155</th>
                          <th className="px-2 py-2 border border-slate-600">SEW 087</th>
                          <th className="px-2 py-2 border border-slate-600">NFA 35-502</th>
                          <th className="px-2 py-2 border border-slate-600">UNI</th>
                          <th className="px-2 py-2 border border-slate-600">BS 4360</th>
                          <th className="px-2 py-2 border border-slate-600">ASTM</th>
                          <th className="px-2 py-2 border border-slate-600"></th>
                          <th className="px-2 py-2 border border-slate-600">JIS G3114</th>
                        </tr>
                      </thead>
                      <tbody>
                         {[
                           ["1.8961", "S235J2W", "WTSt 37-3", "E 24 W 4", "Fe 360 DK 1", "-", "-", "-", "-"],
                           ["1.8945", "S355J0WP", "-", "E 36 WA 3", "Fe 510 C1K1", "WR 50 A", "-", "-", "-"],
                           ["1.8946", "S355J2WP", "-", "E 36 WA 4", "Fe 510 D1K1", "-", "A 242 Type 1", "-", "-"],
                           ["1.8959", "S355J0W", "-", "E 36 WB 3", "Fe 510 C2K1", "WR 50 B", "A 588 - A 242 Gr. 1", "", "SMA 50 AW"],
                           ["1.8963", "S355J2G1W", "WTSt 52-3", "-", "Fe 510 D2K1", "WR 50 C", "A 588 Gr. A", "to", "SMA 50 CP"],
                           ["1.8965", "S355J2G2W", "-", "-", "-", "-", "-", "", "-"],
                           ["1.8966", "S355K2G1W", "-", "E 36 WB 4", "-", "-", "A 709 Gr. 50 W", "", "-"],
                           ["1.8967", "S355K2G2W", "-", "-", "-", "-", "-", "", "-"]
                         ].map((row, rIdx) => (
                           <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                             {row.map((cell, cIdx) => (
                               <td key={cIdx} className="px-2 py-2 border border-slate-200">{cell}</td>
                             ))}
                           </tr>
                         ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            )}

            {/* COMPOSITION TAB */}
            {activeTab === 'composition' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 border border-slate-600">Thickness mm Cut lengths</th>
                          <th className="px-2 py-3 border border-slate-600">Heavy Plates</th>
                          <th className="px-2 py-3 border border-slate-600">C</th>
                          <th className="px-2 py-3 border border-slate-600">Si</th>
                          <th className="px-2 py-3 border border-slate-600">Mn</th>
                          <th className="px-2 py-3 border border-slate-600">P</th>
                          <th className="px-2 py-3 border border-slate-600">S</th>
                          <th className="px-2 py-3 border border-slate-600">AI</th>
                          <th className="px-2 py-3 border border-slate-600">Cr</th>
                          <th className="px-2 py-3 border border-slate-600">Ni</th>
                          <th className="px-2 py-3 border border-slate-600">Mo</th>
                          <th className="px-2 py-3 border border-slate-600">B</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b border-slate-200">
                           <td className="px-2 py-2">3 - 12</td>
                           <td className="px-2 py-2">5 - 30</td>
                           <td className="px-2 py-2">0.20</td>
                           <td className="px-2 py-2">0.70</td>
                           <td className="px-2 py-2">1.70</td>
                           <td className="px-2 py-2">0.030</td>
                           <td className="px-2 py-2">0.015</td>
                           <td className="px-2 py-2">0.060</td>
                           <td className="px-2 py-2">1.50</td>
                           <td className="px-2 py-2">0.40</td>
                           <td className="px-2 py-2">0.50</td>
                           <td className="px-2 py-2">0.004</td>
                        </tr>
                        <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-2 py-2">---</td>
                           <td className="px-2 py-2">(30) - 60</td>
                           <td className="px-2 py-2">0.24</td>
                           <td className="px-2 py-2">0.70</td>
                           <td className="px-2 py-2">1.70</td>
                           <td className="px-2 py-2">0.030</td>
                           <td className="px-2 py-2">0.015</td>
                           <td className="px-2 py-2">0.060</td>
                           <td className="px-2 py-2">1.00</td>
                           <td className="px-2 py-2">0.70</td>
                           <td className="px-2 py-2">0.50</td>
                           <td className="px-2 py-2">0.004</td>
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
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 border border-slate-600">Thickness mm Cut lengths</th>
                          <th className="px-2 py-3 border border-slate-600">Heavy plates</th>
                          <th className="px-2 py-3 border border-slate-600">Yield strength Rp0,2 N/mm2</th>
                          <th className="px-2 py-3 border border-slate-600">Tensile strength Rm N/m2</th>
                          <th className="px-2 py-3 border border-slate-600">Elongation A5 %</th>
                          <th className="px-2 py-3 border border-slate-600">Hardness range HBW</th>
                          <th className="px-2 py-3 border border-slate-600">Impact strength t0C KV J</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b border-slate-200">
                          <td className="px-2 py-2">3 - 12</td>
                          <td className="px-2 py-2">5 - 15</td>
                          <td className="px-2 py-2">1000</td>
                          <td className="px-2 py-2">1250</td>
                          <td className="px-2 py-2">10</td>
                          <td className="px-2 py-2">360 - 420</td>
                          <td className="px-2 py-2">-40 &nbsp;&nbsp; 40</td>
                        </tr>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <td className="px-2 py-2">--------</td>
                          <td className="px-2 py-2">(15) - 30</td>
                          <td className="px-2 py-2">1000</td>
                          <td className="px-2 py-2">1250</td>
                          <td className="px-2 py-2">10</td>
                          <td className="px-2 py-2">380 - 450</td>
                          <td className="px-2 py-2">-40 &nbsp;&nbsp; 20</td>
                        </tr>
                        <tr className="bg-white border-b border-slate-200">
                          <td className="px-2 py-2">--------</td>
                          <td className="px-2 py-2">(30) - 60</td>
                          <td className="px-2 py-2">1100</td>
                          <td className="px-2 py-2">1400</td>
                          <td className="px-2 py-2">8</td>
                          <td className="px-2 py-2">380 - 480</td>
                          <td className="px-2 py-2">-40 &nbsp;&nbsp; 20</td>
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
export default CortenSteelPlate;