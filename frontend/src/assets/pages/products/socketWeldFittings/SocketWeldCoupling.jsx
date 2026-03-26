import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const SocketWeldCoupling = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
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
            <span className="text-slate-400">Socket Weld Fittings</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Socket weld Coupling Fittings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Socket weld Coupling Fittings</h1>
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
               alt="Socket weld Coupling Fittings" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Socket weld Coupling Fittings</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Strong pipe joint connection</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High pressure socket fitting</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Leak resistant welding design</h3>
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
                  REMAX FORGE & FITTINGS is one of eminent manufacturers and suppliers of high-grade Socket weld Coupling Fittings. REMAX FORGE & FITTINGS overseas offers a commendable range of Socket weld Coupling Fittings, for the prestigious client with competitive price. Export packaging is grade towards the protection, handling and transport of Socket weld Coupling Fittings by air or sea freight, as such shares many characteristics with export and transport Socket weld Coupling Fittings packing. Backed by a diligent teen of professional, we are engaged in offering an excellent quality range of Socket weld Coupling Fittings.
                </p>
                <p>
                  REMAX FORGE & FITTINGS is a Socket weld Coupling Fittings stockholders and suppliers, delivering to whole of the world. We are an ISO 9001:2008,ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory. Socket weld Coupling Fittings to internationally approved quality standards for application. Socket weld Coupling Fittings have excellent quality to fully satisfy customer's requirement. We can offer high quality electro polish fittings. Socket weld Coupling Fittings are manufactured in accordance with national and international product standards, while we can also produce fittings as per special specification of our customers. In case of custom size fabricate Socket weld Coupling Fittings; the welding is done carried out by qualified personnel.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse border border-slate-200">
                    <tbody>
                      {[
                        { label: "Type", value: "Socket weld Coupling" },
                        { label: "Standard", value: "ASME B 16.11-09, BS2799, MSS SP 79, MSS SP 83, MSS SP 95, ASTM A 733" },
                        { label: "Material", value: "Stainless Steel, Duplex, Super Duplex, Carbon Steel, Alloy Steel, Monel, Inconel, Hastelloy, Titanium & Special Metals" },
                        { label: "Size", value: "1/8” to 48”" },
                        { label: "Schedule", value: "Sch 5s to Sch XXS and other heady thickness." },
                        { label: "End", value: "NPT, BSP, Socket Weld, Metric & Special Threads as per ANSI B1.20.1" },
                        { label: "Rating", value: "2000Lbs, 3000Lbs, 6000 Lbs, 9000Lbs& 10000Lbs" },
                        { label: "Quality Assurance", value: "All fittings and flanges are subject to strict inspection at each stage of the production process, from starting material purchasing to product dispatch. They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. All buttweld fittings are marked with Grade, Lot No, Size, Degree and our trade mark. On special requests we can also, make custom marking on our products. #Protected by End Caps." },
                        { label: "Value Added Services", value: "Hot Dipped Galvanizing, Epoxy & FBE Coating, Electro Polish, Shot Blast / Sand Blast, Pickled & Passivated" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" },
                        { label: "Special Supplies", value: "Low Temperature Fittings" }
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

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Carbon Steel</h4>
                    <p className="text-sm text-slate-600">ASTM A105, A350 LF2, LF3, LF6.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Alloy Steel</h4>
                    <p className="text-sm text-slate-600">ASTM A182 F5, F9, F91, F22.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Stainless Steel</h4>
                    <p className="text-sm text-slate-600">ASTM A182 F304, 304L, 304H, 310, 316, 316L, 316H, 316Ti, 317L, 347, 347H, 321, 321H, F20, F44, F904L.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Duplex & Super Duplex</h4>
                    <p className="text-sm text-slate-600">ASTM A182 F51, F60, UNS S31803, UNS S32205, F53, F55, UNS S32750, UNS S32760.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 md:col-span-2">
                    <h4 className="font-bold text-[#0F172A] mb-3">Nickel Alloy Steel & Others</h4>
                    <p className="text-sm text-slate-600"><strong>Inconel:</strong> 600, 625, 718 | <strong>Incoloy:</strong> 800, 800H, 800HT, 825 | <strong>Hastelloy:</strong> B2, B3, C22, C276, C2000 | <strong>Monel:</strong> 200, 201, 400, K500 | <strong>Alloy 20</strong> - UNS NO8020</p>
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

export default SocketWeldCoupling;