import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const Copper = () => {
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
            <span className="text-slate-400">Pipes</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Copper Pipe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Copper Pipe</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1621905252507-b35a830137d8?q=80&w=2069&auto=format&fit=crop" 
               alt="Copper Pipe" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Excellent thermal conductivity", desc: "Superior heat transfer capabilities ideal for HVAC systems." },
                { title: "Highly ductile metal piping", desc: "Soft and malleable, allowing for easy bending and installation." },
                { title: "Used in HVAC systems", desc: "Widely used in heating, ventilation, and air conditioning systems." }
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Copper Pipes. Available in different lengths, thicknesses and sizes, these Copper Pipes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Copper pipes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Copper?</h3>
                <p>
                  Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a ductile metal with very high thermal and electrical conductivity. Pure copper is soft and malleable; a freshly exposed surface has a reddish-orange color. It is used as a conductor of heat and electricity, a building material, and a constituent of various metal alloys. The metal and its alloys have been used for thousands of years. In the Roman era, copper was principally mined on Cyprus, hence the origin of the name of the metal as cyprium (metal of Cyprus), later shortened to cuprum. Its compounds are commonly encountered as copper(II) salts, which often impart blue or green colors to minerals such as azurite and turquoise and have been widely used historically as pigments. Architectural structures built with copper corrode to give green verdigris (or patina). Decorative art prominently features copper, both by itself and as part of pigments.
                </p>
                <p>
                  Copper is essential to all living organisms as a trace dietary mineral because it is a key constituent of the respiratory enzyme complex cytochrome c oxidase. In molluscs and crustacea copper is a constituent of the blood pigment hemocyanin, which is replaced by the iron-complexed hemoglobin in fish and other vertebrates. The main areas where copper is found in humans are liver, muscle and bone.Copper compounds are used as bacteriostatic substances, fungicides, and wood preservatives.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {[
                        { label: "Type", value: "Copper Pipe" },
                        { label: "Standard", value: "ASTM B 68, ASTM B 75 DLP C12000, BS 2871 Part 2 C 101, BS 2871 Part 3 C 106, 1220TU2, C1020T, T2, C1100T, M1, TP1, C1021T, C1200, M1p, TP2, C1220TW, C12200, Cu-DHP, C14200, C19400, C19200, C2300T, CuZn15, H62, C2800T, EN 12451 DHP, JIS H3300 C, GB/T 1527-2006, JIS H3300-2006, ASTM B75M-02, ASTM B42-02, ASTM B111M-04, ASTM B395M-02." },
                        { label: "Grade", value: "T2, C1100, C1100, Ecu-58, TV1, C10200/ 102, C1020, Of-Cu, H85, C23000/ 230 C23030/ 230, C2300, CuZn15, H80, C24000/ 240, C2400, CuZn20, H70, C26000/ 260, C26100, C2600, CuZn30, H68, C26200/ 260, C2680, CuZn33, H65, C26800/ 268 C27000/ 270, C2700, CuZn36, H62, C28000/ 280, C2800, CuZn4Pb2, H60/ H59n, C28000/ 280, C2801, CuZn40, HPb60-2, C36000, C3713/ C3604, CuZn38, HPb59-1, C37800, C3710, CuZn40Pb" },
                        { label: "UNS No", value: "C11000, C12200, C1100, C1220, C10200" },
                        { label: "Outer Diameter", value: "20-355mm" },
                        { label: "Wall Thicknesses", value: "0.2-1.0(mm)" },
                        { label: "Length", value: "According to customers' requirements" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Value Added Services", value: "Polishing, Beveling, Honing & Turning, Heatreating & Annealing, Positive Material Identification (PMI)" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                            {row.label}
                          </td>
                          <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#0F172A] text-white">
                      <tr>
                        <th className="px-4 py-3 border-r border-slate-600">Product Name</th>
                        <th className="px-4 py-3 border-r border-slate-600">Grade</th>
                        <th className="px-4 py-3 border-r border-slate-600">Out Diameter</th>
                        <th className="px-4 py-3">Thickness</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Flat Copper Pipe Hot', grade: 'C11000, C12200, C21000', od: 'Width: 10-20mm; Height: 2-4mm', thk: '0.2-0.7mm' },
                        { name: 'Straight Copper Pipe', grade: 'C11000 C10200 C12000 C12200', od: '4-219mm', thk: '0.35-5.5mm' },
                        { name: 'Copper Clad Aluminum Pipe', grade: 'C11000 copper , 3003 aluminum', od: '6.35-19.05mm', thk: '0.5-1.20mm' },
                        { name: 'LWC Copper Pipe Coil/Pancake coil', grade: 'C10200', od: '4-22.23mm', thk: '0.3-1.5mm' },
                        { name: 'Inner Groove Copper Pipe NEW', grade: 'C10200 C12200 C26800C27000 etc.', od: '5.0-15.8mm', thk: '0.35-0.83mm' },
                        { name: 'Brass Pipe', grade: 'C23000 C24000 C26000 C26200 C27000 C72000 C28000', od: '4-203mm', thk: '0.5-3.5mm' },
                        { name: 'Nickel-Copper Pipe', grade: 'C71500 C70600', od: '10-55mm', thk: '0.5-3mm' },
                        { name: 'Copper Pipe Coil', grade: 'C11000, C10200, C12200, etc.', od: '4-22.23mm', thk: '0.3-3.5mm' },
                        { name: 'Precision Copper Pipe Hot', grade: 'C10200 C12200 C26800 C27200 C27000 etc.', od: '1.6-5mm', thk: '0.27- 2.0mm' },
                        { name: 'OFHC Copper Pipe', grade: 'C11000, C12200, C21000', od: '10-40mm', thk: '1-10mm' },
                        { name: 'ETP Copper Pipe', grade: 'C11000', od: '4-219mm', thk: '0.35-5.5mm' },
                        { name: 'Insulation Copper Pipe Coil Hot', grade: 'C12200', od: '22.35-35mm', thk: '0.3-1.5mm' },
                        { name: 'Aluminum Clad Copper Pipe', grade: 'C11000', od: '6.35-19.05mm', thk: '0.5-1.50mm' },
                        { name: 'Condenser Pipe', grade: 'C44300 C68700 C70600 C71500', od: '12-50mm', thk: '0.8-3mm' },
                        { name: 'Capillary Copper Pipe', grade: 'C10200 C12200 C2680 C27200 C27000 etc.', od: '≥ 0.3mm', thk: '≥ 0.1mm' },
                        { name: 'Oxygen Free Copper Pipe', grade: 'C10200', od: '4-25mm', thk: '0.27-2.5mm' }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.name}</td>
                          <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.grade}</td>
                          <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.od}</td>
                          <td className="px-4 py-2 text-slate-700">{row.thk}</td>
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
                
                {/* Chemical Composition Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 border-r border-slate-600">Material Designation</th>
                          <th className="px-4 py-3 border-r border-slate-600">Cu % (Min)</th>
                          <th className="px-4 py-3 border-r border-slate-600">P %</th>
                          <th className="px-4 py-3">Other Elements (Total/Excluding)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { mat: 'Cu-ETP (C10100)', cu: '99.90 min', p: '-', other: 'Ag, O (Total 0.03 max)' },
                          { mat: 'Cu-FRTP (C102)', cu: '99.90 min', p: '-', other: 'Ag, Ni, O (Total 0.05 max)' },
                          { mat: 'Cu-OF (C10300)', cu: '99.95 min', p: '-', other: 'Ag (Total 0.03 max)' },
                          { mat: 'Cu-DLP', cu: '99.90 min', p: '0.005 - 0.013', other: 'Ag, Ni, P (Total 0.03 max)' },
                          { mat: 'Cu-DHP (C106)', cu: '99.90 min', p: '0.015 - 0.040', other: '-' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left">{row.mat}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.cu}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.other}</td>
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
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Condition</th>
                          <th className="px-4 py-3">Tensile Strength (Kg/mm2)</th>
                          <th className="px-4 py-3">Elongation % Min</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { c: 'Annealed (O)', ts: '35 (or 37.5-46)', el: '35% (or 30%)' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.c}</td>
                            <td className="px-4 py-2 text-slate-700">{row.ts}</td>
                            <td className="px-4 py-2 text-slate-700">{row.el}</td>
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

export default Copper;