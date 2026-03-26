import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const ChromeMolyPlate = () => {
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
            <span className="text-[#D71920] font-medium">Chrome Moly Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Chrome Moly Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1535128795856-2b47f078d10f?q=80&w=2070&auto=format&fit=crop" 
               alt="Chrome Moly Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Chrome Moly Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High strength alloy steel</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Heat and pressure resistant</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Used in boilers</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Chrome Moly Plate. Available in different lengths, thicknesses and sizes, these Chrome Moly Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Chrome Moly Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Chrome Moly?</h3>
                <p>
                  41xx steel is a family of SAE steel grades, as specified by the Society of Automotive Engineers (SAE). Alloying elements include chromium and molybdenum, and as a result these materials are often informally referred to as chromoly steel (common variant stylings include chrome-moly, cro-moly, CrMo, CRMO, CR-MOLY, and similar). They have an excellent strength to weight ratio and are considerably stronger and harder than standard 1020 steel, but are not easily welded (need pre and post weld thermal treatment to avoid cold cracking).While these grades of steel do contain chromium, it is not in great enough quantities to provide the corrosion resistance found in stainless steel.
                </p>
                <p>
                  Examples of applications for 4130, 4140 and 4145 include structural tubing, bicycle frames, tubes for transportation of pressurized gases, firearm parts, clutch and flywheel components, and roll cages. 4150 stands out as being one of the steels accepted for use in M16 rifle and M4 carbine barrels by the United States military. These steels are also used in aircraft parts and therefore 41xx grade structural tubing is sometimes referred to as "aircraft tubing".
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
                        { label: "Type", value: "Chrome moly Steel Plate" },
                        { label: "Grade", value: 'ASTM A387 Grade 5 Class 2, Grade 9 Class 2, Grade 11 Class 2, Grade 12 Class 2, Grade 22 Class 2, Grade 91 Class 2, ASME SA387 Grade 5 Class 2, Grade 9 Class 2, Grade 11 Class 2, Grade 12 Class 2, Grade 22 Class 2, Grade 91 Class 2, EN 10028: 16Mo3, 13CrMo45, 10CrMo910, BS 1501: 620B, 621B, 622B' },
                        { label: "Width", value: "10-3500mm" },
                        { label: "Length", value: "2m,2.44m,3m,6m,8m,12m or rolled etc" },
                        { label: "Thickness", value: "0.3-500mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Boilers,Pressure Vessels,Heat Exchangers,Flanges,Valves,Ducting,Pipe Supports" },
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                     <table className="w-full text-sm text-center">
                        <thead className="bg-[#0F172A] text-white">
                           <tr>
                              <th className="px-3 py-3 border-r border-slate-600">SAE grade</th>
                              <th className="px-3 py-3 border-r border-slate-600">% Cr</th>
                              <th className="px-3 py-3 border-r border-slate-600">% Mo</th>
                              <th className="px-3 py-3 border-r border-slate-600">% C *</th>
                              <th className="px-3 py-3 border-r border-slate-600">% Mn</th>
                              <th className="px-3 py-3 border-r border-slate-600">% P (max)</th>
                              <th className="px-3 py-3 border-r border-slate-600">% S (max)</th>
                              <th className="px-3 py-3">% Si</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white">
                           {[
                              { g: '4118', cr: '0.40-0.60', mo: '0.08-0.15', c: '0.18-0.23', mn: '0.70-0.90', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4120', cr: '0.40-0.60', mo: '0.13-0.20', c: '0.18-0.23', mn: '0.90-1.20', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4121', cr: '0.45-0.65', mo: '0.20-0.30', c: '0.18-0.23', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4130', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.28-0.33', mn: '0.40-0.60', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4135', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.33-0.38', mn: '0.70-0.90', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4137', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.35-0.40', mn: '0.70-0.90', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4140', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.38-0.43', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4142', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.40-0.45', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4145', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.43-0.48', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4147', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.45-0.50', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4150', cr: '0.80-1.10', mo: '0.15-0.25', c: '0.48-0.53', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' },
                              { g: '4161', cr: '0.70-0.90', mo: '0.25-0.35', c: '0.56-0.64', mn: '0.75-1.00', p: '0.035', s: '0.040', si: '0.15-0.35' }
                           ].map((row, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? "bg-white border-b border-slate-200" : "bg-slate-50 border-b border-slate-200"}>
                                 <td className="px-3 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.g}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.cr}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.mo}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.c}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.mn}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.p}</td>
                                 <td className="px-3 py-2 text-slate-700 border-r border-slate-200">{row.s}</td>
                                 <td className="px-3 py-2 text-slate-700">{row.si}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic">* The carbon composition of the alloy is denoted by the last two digits of the SAE specification number, in hundredths of a percent</p>
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
                          <th className="px-4 py-3 border-r border-slate-600">Material</th>
                          <th className="px-4 py-3 border-r border-slate-600">Condition</th>
                          <th className="px-4 py-3 border-r border-slate-600">Tensile strength [psi (MPa)]</th>
                          <th className="px-4 py-3 border-r border-slate-600">Yield strength [psi (MPa)]</th>
                          <th className="px-4 py-3 border-r border-slate-600">Elongation in 2" [%]</th>
                          <th className="px-4 py-3">Hardness Rockwell</th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">4130</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">Cold drawn -normalized</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">85,000-110,000 psi (590-760 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">70,000-85,000 psi (480-590 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">20-30</td>
                           <td className="px-4 py-2 text-slate-700">B 90-96</td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200" rowSpan="2">4142</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">Hot rolled -annealed</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">90,000-100,000 psi (620-690 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">60,000-70,000 psi (410-480 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">20-30</td>
                           <td className="px-4 py-2 text-slate-700">B 90-95</td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">Cold drawn -annealed</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">105,000-120,000 psi (720-830 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">85,000-95,000 psi (590-660 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">15-25</td>
                           <td className="px-4 py-2 text-slate-700">B 96-100</td>
                         </tr>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">4150</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">Hot rolled -annealed</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">90,000-110,000 psi (620-760 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">65,000-75,000 psi (450-520 MPa)</td>
                           <td className="px-4 py-2 text-slate-700 border-r border-slate-200">20-30</td>
                           <td className="px-4 py-2 text-slate-700">B 90-96</td>
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

export default ChromeMolyPlate;