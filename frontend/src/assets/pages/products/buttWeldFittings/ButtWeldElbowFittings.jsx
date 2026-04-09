import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const ButtWeldElbowFittings = () => {
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
            <span className="text-slate-400">Butt Weld Fittings</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Butt weld Elbow Fittings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Butt weld Elbow Fittings</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group p-10">
             {/* Replace with actual image */}
              <img 
                src="/images/butt weld elbow fittings.webp" 
                alt="Butt weld Elbow Fittings" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Butt weld Elbow Fittings</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Smooth directional flow</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High pressure pipe joints</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Long service durability</h3>
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
                  REMAX FORGE & FITTINGS is one of eminent manufacturers and suppliers of high grade Butt weld Elbow Fittings. REMAX FORGE & FITTINGS overseas offers a commendable range of Butt weld Elbow Fittings, for the prestigious client with competitive price. Export packaging is grade towards the protection, handling and transport of Butt weld Elbow Fittings by air or sea freight, as such shares many characteristics with export and transport Butt weld Elbow Fittings packing. Backed by a diligent teen of professional, we are engaged in offering an excellent quality range of Butt weld Elbow Fittings.
                </p>
                <p>
                  REMAX FORGE & FITTINGS is an Butt weld Elbow Fittings stockholders and suppliers, delivering to whole of the world. We are an ISO 9001:2008, ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. With the focus on exports, supplier, stockists And Manufacturing. And to internationally approved quality standards for application. Butt weld Elbow Fittings have excellent quality to fully satisfy customer's requirement. We can offer high quality electro polish fittings. Butt weld Elbow Fittings are manufactured in accordance with national and international product standards, While we can also produce fittings as per special specification of our customers. In case of custom size fabricate Butt weld Elbow Fittings; the welding is done carried out by qualified personnel.
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
                        { label: "Type", value: "Butt weld Elbow" },
                        { label: "Standard", value: "ANSI B 16.9, ANSI B16.28, MSS SP43, MSS P75, JIS2311, JIS 2312, JIS2313, DIN2605 , GB-12459, GB-T13401 etc." },
                        { label: "Material", value: "Stainless Steel, Duplex, Super Duplex, Carbon Steel, Alloy Steel, Monel, Inconel, Hastelloy, Titanium & Special Metals" },
                        { label: "Size", value: "1/8” to 48”" },
                        { label: "Radius", value: "Long Radius (L.R) Or Short Radius (S.R)" },
                        { label: "Thickness", value: "SCH5S/10S, SCH20/40/80/160, STD/XS/XXS, SGP" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "All fittings and flanges are subject to strict inspection at each stage of the production process, from starting material purchasing to product dispatch. They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. All buttweld fittings are marked with Grade, Lot No, Size, Degree and our trade mark. On special requests we can also, make custom marking on our products. #Protected by End Caps." },
                        { label: "Value Added Services", value: "Hot Dipped Galvanizing, Epoxy & FBE Coating, Electro Polish, Shot Blast / Sand Blast" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" }
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
                    <p className="text-sm text-slate-600">ASTM A234 WPB / A420 WPL3/ A420 WPL6/ MSS-SP-75 WPHY 42/ 46/ 52/ 56/ 60/ 65/ 70</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Alloy Steel</h4>
                    <p className="text-sm text-slate-600">ASTM A234 WP1/ WP5/ WP9/ WP11/ WP22/ WP91</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Stainless Steel</h4>
                    <p className="text-sm text-slate-600">ASTM A403 WP 304/ 304L/ 304H/ 316/ 316L/ 317/ 317L/ 321/ 310/ 347/ 904L/2205 Duplex Fittings</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-[#0F172A] mb-3">Copper Nickel & Others</h4>
                    <p className="text-sm text-slate-600 mb-2"><strong>Copper Nickel:</strong> CuNi10Fe1Mn, CuNi30Mn1Fe</p>
                    <p className="text-sm text-slate-600"><strong>Other Materials:</strong> Monel, Nickel, Inconel, Hastelloy, Copper, Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, Zinc, Lead, etc</p>
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

export default ButtWeldElbowFittings;