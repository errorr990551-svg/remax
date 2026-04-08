import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';

const LapJoint = () => {
    const { openQuotePopup } = useQuotePopup();
  const [activeTab, setActiveTab ] = useState('description');

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
            <span className="text-[#D71920] font-medium">Lap Joint Flange</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Lap Joint Flange</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="/images/Stainless-steel-Lap-joint-flange-ASTM-4-inch.jpg.jpeg" 
               alt="Lap Joint Flange" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "No welding required for the flange itself", desc: "Designed to slip over the pipe, requiring no direct welding on the flange ring." },
                { title: "Ideal for systems using expensive materials", desc: "Allows for lower cost backup flanges to be used with high-cost alloy stub ends." },
                { title: "Allows for easy bolt hole alignment", desc: "The flange rotates freely on the stub end, making alignment with mating flanges quick and simple." }
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
               <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
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
                  We offer carbon steel, stainless steel, alloy steel and special steels as per drawings or customer specifications, specially used in the oil & gas, petrochemical and processing industries. All kinds of stainless steel Lap Joint flanges are easily purchased under single roof named as Spire Industrial Equipments Co. Our stainless steel flanges are 100% free from any corrosion attack assuring their longevity. In addition ton this, our stainless steel flanges are universally appreciated for their high level of strength. We have a team of trained technocrats having immense experience in bringing superior quality stainless steel plate flange.
                </p>
                <p>
                  We are an ISO 9001:2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System. and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades and are committed to quick responses, unsurpassed quality, competitive pricing, reliable deliveries and an exhaustive inventory.
                </p>
                <p>
                  Lap Joint Flanges are used in piping systems that require frequent dismantling for inspection or cleaning. The primary advantage of this flange is that the bolt holes can be easily aligned with the mating flange after the weld joints have been completed. This "swivel" capability is particularly useful when dealing with large diameter pipes.
                </p>
                <p>
                  Because the Lap Joint flange does not come into contact with the fluid inside the pipe, it is often used as a cost-saving measure. For example, a stainless steel stub end can be used with a carbon steel lap joint flange, providing the necessary corrosion resistance at a much lower total cost.
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
                        { label: "Type", value: "Lap Joint Flange" },
                        { label: "Standards", value: "ANSI B16.5, ANSI B16.47 Series A & B, MSS SP44, ASA, API-605, AWWA, Custom Drawings" },
                        { label: "Outside Diameter", value: "<= 24 = 1.6 mm / > 24 = +/- 3.2 mm" },
                        { label: "Inside Diameter", value: "<= 10 = +/- 0.8 mm / > 12 = + 1.6 mm / - 0 mm" },
                        { label: "Diameter Contact Face", value: "1.6 mm RF = +/-0.8 mm / 6.35 mm RF = +/-0.4 mm" },
                        { label: "Outside Diameter of Hub", value: "<= 12 = + 2.4 mm / - 1.6 mm / >= 14 = +/- 3.2 mm" },
                        { label: "Drilling", value: "Bolt Circle = 1.6 mm / Bolt Hole Spacing = +/-0.8 mm" },
                        { label: "Thickness", value: "<= 18 = +3.2 mm / -0 / >= 20 = +4.8 mm / -0" },
                        { label: "Pressure Ratings", value: "Class 150, Class 300, Class 400, Class 600, Class 900, Class 1500, Class 2500" }
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
                        { type: "Carbon Steel Lap Joint Flanges", grades: "ASTM A105/A105N, A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2, A694 F42, F46, F48, F50, F52, F56, F60, F65, F70, A516.60, 65, 70, Steel RST37.2, C22.8" },
                        { type: "Stainless Steel Lap Joint Flanges", grades: "ASTM A182 F202, F304/304L/304H, F316/316L, F316H, F316TI, F310, F321, F904L" },
                        { type: "Alloy Steel Lap Joint Flanges", grades: "ASTM A182 F1, F5, F9, F11, F22, F91" },
                        { type: "Special Alloy Lap Joint Flanges", grades: "Duplex, Super Duplex, Nickel Alloys" },
                        { type: "Flange Face Type", grades: "Flat Face (FF)" },
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

export default LapJoint;
