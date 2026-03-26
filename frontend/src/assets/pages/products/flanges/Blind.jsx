import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const Blind = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'technical', label: 'Technical Specification' },
    { id: 'materials', label: 'Materials & Grades' },
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
            <span className="text-slate-400">Flanges</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Blind Flange</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Blind Flange</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
               alt="Blind Flange" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Seals pipeline ends securely", desc: "Used to seal the end of a piping system to prevent flow of liquids or gases." },
                { title: "No flow—complete line isolation", desc: "Allows for easy access to the piping system once it has been closed." },
                { title: "Ideal for high-pressure systems", desc: "Widely used in high pressure applications for testing and isolation." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    
                  </div>
                </div>
              ))}
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
                  We are a trusted firm engaged in offering a wide assortment of Blinds Flanges. Demanded extensively for the purpose of constructing bus bodies, shutters and grills, these products are manufactured using optimum quality raw material, obtained from authentic vendors of the industry. In addition to this, we make sure to examine the quality of the entire range before delivering these products to the clients end.
                </p>
                <p>
                  Commonly referred as blanking flanges, Blind pipe flanges are widely used in high pressure applications. Blind flanges are generally used to seal the end of a piping system to prevent flow of liquids or gases. The use of blind flanges allows ease of access to a piping system once it has been closed. Our blind flanges are available with raised or RTJ faces and also with female threads. Blind flanges can be supplied with or without hub as per the customer requirements.
                </p>
                <p>
                  We are an ISO 9001:2008, ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades.
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
                        { label: "Type", value: "Blind Flange" },
                        { label: "Standards", value: "ANSI B16.5, ANSI B16.47 Series A & B, MSS SP44, ASA, API-605, AWWA, Custom Drawings" },
                        { label: "Outside Diameter", value: "≤ 24 = 1.6 mm, > 24 = ± 3.2 mm" },
                        { label: "Inside Diameter", value: "≤ 10 = ± 0.8 mm, > 12 = + 1.6 mm / - 0 mm" },
                        { label: "Diameter Contact Face", value: "1.6 mm RF = ±0.8 mm, 6.35 mm RF = ±0.4 mm, Tongue & Groove = ±0.4 mm, Male-Female = ±0.4 mm" },
                        { label: "Outside Diameter of Hub", value: "≤12 = + 2.4 mm/ - 1.6 mm, ≥ 14 = ± 3.2 mm" },
                        { label: "Diameter of Counterbore", value: "Same as for Inside Diameter" },
                        { label: "Drilling", value: "Bolt Circle = 1.6 mm, Bolt Hole Spacing = ±0.8 mm. Eccentricity Bolt Circle with Respect to Facing: ≤2.1/2 = 0.8 mm max, ≥3 = 1.6 mm max" },
                        { label: "Thickness", value: "≤18 = +3.2 mm / -0, ≥20 = +4.8 mm / -0" },
                        { label: "Length thru Hub", value: "≤18 = 3.2 mm / - 0.8 mm, ≥20 = + 4.8 mm / - 1.6 mm" },
                        { label: "Pressure Ratings", value: "Class 150, Class 300, Class 400, Class 600, Class 900, Class 1500, Class 2500 | PN6, PN10, PN16, PN25, PN40, PN64 etc." },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "All fittings and flanges are subject to strict inspection at each stage of the production process, from starting material purchasing to product dispatch." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases." },
                        { label: "Value Added Services", value: "Hot Dipped Galvanizing, CNC Machining, Customised Flanges" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                            {row.label}
                          </td>
                          <td className="px-6 py-4 text-slate-600 align-top">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MATERIALS & GRADES TAB */}
            {activeTab === 'materials' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#0F172A] text-white">
                      <tr>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider border-r border-slate-600">Material Type</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Grades / Standards</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Carbon Steel Blind Flanges", grades: "ASTM A105/A105N, A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2, A694 F42, F46, F48, F50, F52, F56, F60, F65, F70, A516.60, 65, 70, Steel RST37.2, C22.8" },
                        { type: "Stainless Steel Blind Flanges", grades: "ASTM A182 F202, F304/304L/304H, F316/316L, F316H, F316TI, F310, F321, F904L" },
                        { type: "Alloy Steel Blind Flanges", grades: "ASTM A182 F1, F5, F9, F11, F22, F91" },
                        { type: "Special Alloy Blind Flanges", grades: "Duplex, Super Duplex, Nickel Alloys" },
                        { type: "Flange Face Type", grades: "Weld neck Flate Face (WNFF), Weld neck Raised Face (WNRF), Weld neck Ring Type Joint (WNRTJ)" },
                        { type: "Coating/Surface Treatment", grades: "Anti-rust Paint, Oil Black Paint, Yellow Transparent, Zinc Plated, Cold and Hot Dip Galvanized" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="px-6 py-4 font-bold text-[#D71920] border-r border-slate-200 w-1/4 align-middle">
                            {row.type}
                          </td>
                          <td className="px-6 py-4 text-slate-700 leading-relaxed align-middle">
                            {row.grades}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blind;