import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const StainlessSteelTube = () => {
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
            <span className="text-slate-400">Tubes</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Stainless Steel Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Stainless Steel Tubes</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1623944893558-44474776b329?q=80&w=2070&auto=format&fit=crop" 
               alt="Stainless Steel Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description (Title Only as requested) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Stainless Steel Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Corrosion resistant industrial tubing</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Suitable for hygienic environments</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Multiple grades and finishes</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Stainless Steel Tubes. Available in different lengths, thicknesses and sizes, these Stainless-Steel Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Stainless-Steel Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Stainless Steel?</h3>
                <p>
                  In metallurgy, stainless steel, also known as inox steel or inox from French "inoxydable", is a steel alloy with a minimum of 10.5% chromium content by mass. Stainless steel does not readily corrode, rust or stain with water as ordinary steel does. However, it is not fully stain-proof in low-oxygen, high-salinity, or poor air-circulation environments. There are different grades and surface finishes of stainless steel to suit the environment the alloy must endure. Stainless steel is used where both the properties of steel and corrosion resistance are required.
                </p>
                <p>
                  Stainless steel differs from carbon steel by the amount of chromium present. Unprotected carbon steel rusts readily when exposed to air and moisture. This iron oxide film (the rust) is active and accelerates corrosion by forming more iron oxide; and, because of the greater volume of the iron oxide, this tends to flake and fall away. Stainless steels contain sufficient chromium to form a passive film of chromium oxide, which prevents further surface corrosion by blocking oxygen diffusion to the steel surface and blocks corrosion from spreading into the metal's internal structure. Due to the similar size of the steel and oxide ions, they bond very strongly and remain attached to the surface.
                </p>

                <h3 className="text-xl font-bold text-[#0F172A] mt-6">Types of Stainless Steel Tubes:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Stainless Steel Seamless Heat Exchanger Tubes</li>
                  <li>Stainless Steel Instrumentation Tubes</li>
                  <li>Stainless Steel Seamless Heat Exchanger ‘U’-Tubes</li>
                  <li>Stainless Steel Tubes with Electro Polish</li>
                  <li>Stainless Steel tubes for Boiler application</li>
                </ul>
              </div>
            )}

           {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                    {[
                        { label: "Type", value: "Seamless Tube , ERW Tube , EFW Tube (Heat Exchanger Tubes)" },
                        { label: "Standard", value: "ASTM A312, ASTM A358 , ASTM A813, ASTM A814, ANSI B36.19, AWS A5.9, SAE J1086, PA 15096-0001, A262 , A370, A941, A999/A999M, A1016/A1016M, E112, E381, E527, ASTM A-269, A-268, A-213, A-789, ASTM A-312, A-790, ASTM A-213, A 249, A-268, A-269, A-270, A271, A688, A-789, A 511, A554, A632, EN 10216-5 ASTM A-213, A 249, A-268, A-269, A-270, A271, A688, A-789, A 511, A554, A632, EN 10216-5, B677 Equivalent to ASME, EN, JIS Etc" },
                        { label: "Grade", value: "TP304/304L, 304H, TP309/309S, TP316/316L, 316Ti, TP-316H, TP-316Ti , TP317/317L, TP321/321H, TP347/347H, TP405, TP410, TP416, TP904L, S31260, S31500, S31803, S32550, S32750, S32760, TP309Cb and TP348 etc." },
                        { label: "Keywords", value: "Austenitic Stainless Steel - Cold Working - Corrosive Service Applications - Forming - High-Temperature Service Applications - High-Temperature Services - Seamless Pipes and Tubes - Seamless Steel Tube - Stainless Steel Tube - Tubular Products - Welded Pipes And Tubes - Welded Steel Tube-Stainless Steel Heat Exchanger Tubes-Stainless Steel Instrumental Tubes-Electro Polish Stainless Steel Tubes" },
                        { label: "Size", value: "6.00 mm OD to 101.6 mm OD" },
                        { label: "Thickness", value: "0.89 mm THK to 6.00 mm THK" },
                        { label: "ICS Code", value: "ICS Number Code 23.040.10 (Iron and steel tube)" },
                        { label: "UNSPSC Code", value: "UNSPSC Code 40171621(Industrial welded stainless steel tube); 40171622(Industrial seamless stainless steel tube)" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Value Added Services", value: "Good Surface Finish, Good Corrosion Resistance, Ability to produce tubes with stringent NDT requirements of the Client, Closer Dimensional Tolerance, Draw & Expansion as per required Size & Length, Polish (Electro & Commercial) Heat Treatment, Annealed & Pickled, Sand Blasting" },
                        { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" }
                    ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                            {row.label}
                        </td>
                        <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">
                            {row.label === 'Type' ? (
                            // LOGIC FOR "Type" ROW ONLY
                            row.value.split(',').map((item, i, arr) => {
                                const cleanText = item.trim();
                                
                                // URL MAPPING LOGIC
                                let url = "";
                                if (cleanText === "Seamless Tube") {
                                url = "https://shivamsteelindia.com/tubes/seamless-tubes-manufacturers-suppliers-india.html";
                                } else if (cleanText === "ERW Tube") {
                                url = "https://shivamsteelindia.com/tubes/erw-tubes-manufacturers-suppliers-india.html";
                                } else if (cleanText.includes("EFW Tube")) {
                                // Uses 'includes' to catch "EFW Tube (Heat Exchanger Tubes)"
                                url = "https://www.shivamsteelindia.com/tubes/welded-tubes-manufacturers-suppliers-india.html";
                                }

                                return (
                                <React.Fragment key={i}>
                                    {url ? (
                                    <a 
                                        href={url}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[#D71920] font-medium hover:underline transition-colors"
                                    >
                                        {cleanText}
                                    </a>
                                    ) : (
                                    // Fallback if text doesn't match known links
                                    cleanText
                                    )}
                                    {/* Add comma back unless it's the last item */}
                                    {i < arr.length - 1 && ', '}
                                </React.Fragment>
                                );
                            })
                            ) : (
                            // ALL OTHER ROWS
                            row.value
                            )}
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
                
                {/* Chemical Composition Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs md:text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">S.S.</th>
                          {['301','303','304','304L','309','309s','310s','316','316L','321','347'].map(h => (
                            <th key={h} className="px-2 py-3 font-bold border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'Carbon', vals: ['0.15','0.15','0.08','0.03','0.20','0.08','0.08','0.08','0.03','0.08','0.08'] },
                          { el: 'Manganese', vals: ['2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00','2.00'] },
                          { el: 'Silicone', vals: ['1.00','1.00','1.00','1.00','1.00','1.00','1.5','1.00','1.00','1.00','1.00'] },
                          { el: 'Chromium', vals: ['16/18','17/19','18/20','18/02','22/24','22/24','24/26','23/26','16/18','17/19','17/19'] },
                          { el: 'Nickel', vals: ['6.0/8.0','8.0/10','8.0/12','8.0/12','12/15','12/15','19/22','10/14','10/14','9.0/12','9/13'] },
                          { el: 'Molybdenum', vals: ['-','-','-','-','-','-','-','2.0/3.0','2.0/3.0','-','-'] },
                          { el: 'Phosphorus', vals: ['0.045','0.20','0.045','0.045','0.045','0.045','0.045','0.045','0.045','0.045','0.045'] },
                          { el: 'Sulphur', vals: ['0.03','0.15MIN','0.03','0.03','0.03','0.03','0.03','0.03','0.03','0.03','0.03'] }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.el}</td>
                            {row.vals.map((v, i) => (
                              <td key={i} className="px-2 py-2 text-slate-700 border-r border-slate-200 last:border-0">{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Physical Corrosion Resistance Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Corrosion Resistance & Other Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs md:text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3 font-bold border-r border-slate-600">S.S. Grade</th>
                          {['301','303','304','304L','309','309S','310S','316','316L','321','347'].map(h => (
                            <th key={h} className="px-2 py-3 font-bold border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { prop: 'Density', vals: ['8.0','8.0','8.0','8.0','8.0','8.0','8.0','8.0','8.0','8.0','8.0'] },
                          { prop: 'Sp.Elec. Resist 20C micro', vals: ['72','72','72','72','78','78','78','74','74','72','73'] },
                          { prop: 'Sp. Heat (0-100c)', vals: ['0.5','0.5','0.5','0.5','0.5','0.5','0.5','0.5','0.5','0.5','0.5'] },
                          { prop: 'Ther. Conductivity', vals: ['16.3','16.3','16.3','16.3','14.2','14.2','14.2','16.3','16.3','16.3','16.3'] },
                          { prop: 'Mild water', vals: ['X','X','X','X','X','X','X','X','X','X','X'] },
                          { prop: 'Industrial', vals: ['X','X','X','X','X','X','X','X','X','X','X'] },
                          { prop: 'Marine', vals: ['X','X','X','X','X','X','X','X','X','X','X'] },
                          { prop: 'Salt Water', vals: ['-','-','-','-','-','-','X','X','-','-','-'] },
                          { prop: 'Mild', vals: ['X','X','X','X','X','X','X','X','X','X','X'] },
                          { prop: 'Oxidising', vals: ['X','X','X','X','X','X','X','X','X','X','X'] },
                          { prop: 'Reducing', vals: ['-','-','-','-','-','-','-','X','X','-','-'] },
                          { prop: 'Abrasion Resistance', vals: ['Good','Good','Good','Good','Good','Good','Good','Good','Good','Good','Good'] },
                          { prop: 'Cold Forming', vals: ['Good','Excel','Excel','Good','Good','Good','Good','Good','Good','Good','Good'] },
                          { prop: 'Weldability', vals: ['Excel','Excel','Excel','Excel','Good','Excel','Excel','Excel','Excel','Excel','Excel'] },
                          { prop: 'Melting Flange', vals: ['-','1400 1450','1370 1400','-','-','-','-','-','-','-','-'] },
                          { prop: 'Scaling Temp', vals: ['800','900','900','900','1100','1100','1100','900','900','900','900'] }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left">{row.prop}</td>
                            {row.vals.map((v, i) => (
                              <td key={i} className="px-2 py-2 text-slate-700 border-r border-slate-200 last:border-0">{v}</td>
                            ))}
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
                
                {/* 300 Series Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    300 Series Austenitic Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">UNS</th>
                          <th className="px-4 py-3">Tensile (ksi) min</th>
                          <th className="px-4 py-3">Yield (ksi) min</th>
                          <th className="px-4 py-3">Elongation min</th>
                          <th className="px-4 py-3">Hardness (Brinell) max</th>
                          <th className="px-4 py-3">Hardness (Rockwell B) max</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: '302', uns: 'S30200', t: '75', y: '30', e: '40% in 2"', h: '183', hr: '88' },
                          { type: '304*', uns: 'S30400', t: '75', y: '30', e: '40% in 2"', h: '183', hr: '88' },
                          { type: '304L*', uns: 'S30403', t: '70', y: '30', e: '40% in 2"', h: '183', hr: '88' },
                          { type: '309', uns: 'S30900', t: '75', y: '30', e: '40% in 2"', h: '217', hr: '95' },
                          { type: '309S', uns: 'S30908', t: '75', y: '30', e: '40% in 2"', h: '217', hr: '95' },
                          { type: '310', uns: 'S31000', t: '75', y: '30', e: '40% in 2"', h: '217', hr: '95' },
                          { type: '310S', uns: 'S31008', t: '75', y: '30', e: '40% in 2"', h: '217', hr: '95' },
                          { type: '316*', uns: 'S31600', t: '75', y: '30', e: '40% in 2"', h: '217', hr: '95' },
                          { type: '316L*', uns: 'S31603', t: '70', y: '25', e: '35% in 2"', h: '217', hr: '95' },
                          { type: '317', uns: 'S31700', t: '75', y: '30', e: '35% in 2"', h: '217', hr: '95' },
                          { type: '317L', uns: 'S31703', t: '75', y: '30', e: '35% in 2"', h: '217', hr: '95' },
                          { type: '321', uns: 'S32100', t: '75', y: '30', e: '40% in 2"', h: '183', hr: '88' },
                          { type: '347', uns: 'S34700', t: '75', y: '30', e: '40% in 2"', h: '183', hr: '88' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.type}</td>
                            <td className="px-4 py-2">{row.uns}</td>
                            <td className="px-4 py-2">{row.t}</td>
                            <td className="px-4 py-2">{row.y}</td>
                            <td className="px-4 py-2">{row.e}</td>
                            <td className="px-4 py-2">{row.h}</td>
                            <td className="px-4 py-2">{row.hr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 400 Series Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    400 Series Martensitic Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">UNS</th>
                          <th className="px-4 py-3">Tensile (ksi) min</th>
                          <th className="px-4 py-3">Yield (ksi) min</th>
                          <th className="px-4 py-3">Elongation min</th>
                          <th className="px-4 py-3">Hardness (Brinell) max</th>
                          <th className="px-4 py-3">Hardness (Rockwell B) max</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: '410*', uns: 'S41000', t: '65', y: '30', e: '20% in 2"', h: '217', hr: '95' },
                          { type: '410S', uns: 'S41008', t: '60', y: '30', e: '22% in 2"', h: '183', hr: '88' },
                          { type: '416', uns: 'S41600', t: '75', y: '40', e: '30-25% in 2"', h: '-', hr: '82' },
                          { type: '420', uns: 'S42000', t: '95', y: '60', e: '30-25% in 2"', h: '-', hr: '92' },
                          { type: '430', uns: 'S43000', t: '65', y: '30', e: '22% in 2"', h: '183', hr: '88' },
                          { type: '440C', uns: 'S44004', t: '-', y: '-', e: '-', h: '-', hr: '-' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.type}</td>
                            <td className="px-4 py-2">{row.uns}</td>
                            <td className="px-4 py-2">{row.t}</td>
                            <td className="px-4 py-2">{row.y}</td>
                            <td className="px-4 py-2">{row.e}</td>
                            <td className="px-4 py-2">{row.h}</td>
                            <td className="px-4 py-2">{row.hr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Temper</th>
                          <th className="px-4 py-3">Tensile Strength (ksi)</th>
                          <th className="px-4 py-3">Yield Strength (ksi)</th>
                          <th className="px-4 py-3">Elongation in 2" (%)</th>
                          <th className="px-4 py-3">Rockwell (1) Hardness</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: '304 304L', temp: 'Annealed Half Hard Full Hard', t: '100 max. 110-140 140 min.', y: '25-45 70-110 110 min.', e: '35 15 7', h: 'B 90 max. B 93-C 30 C 22 min.' },
                          { type: '310', temp: 'Annealed Half Hard Full Hard', t: '100 max. 115-135 140 min.', y: '35-55 75-115 115 min.', e: '35 15 5', h: 'B 95 max. B 95-C 26 C 24 min.' },
                          { type: '316 316L', temp: 'Annealed Half Hard Full Hard', t: '100 max. 110-140 140 min.', y: '30-50 70-110 110 min.', e: '35 15 6', h: 'B 95 max. B 95-C 26 C 24 min.' },
                          { type: '321', temp: 'Annealed Half Hard Full Hard', t: '100 max. 110-140 140 min.', y: '35-55 80-120 120 min.', e: '35 15 6', h: 'B 92 max. B 95-C 26 C 24 min.' },
                          { type: '347', temp: 'Annealed Half Hard Full Hard', t: '100 max. 110-140 140 min.', y: '35-55 80-120 120 min.', e: '35 15 6', h: 'B 92 max. B 95-C 26 C 24 min.' },
                          { type: '403 410', temp: 'Annealed Half Hard Full Hard', t: '85 max. 85-100 100 min.', y: '30-50 65-85 85 min.', e: '35 15 5', h: 'B 95 max. B 90-B 100 C 96 min.' },
                          { type: '430', temp: 'Annealed Half Hard Full Hard', t: '85 max. 82-97 98 min.', y: '35-50 60-90 85 min.', e: '35 15 5', h: 'B 90 max. B 85-98 C 93 min.' },
                          { type: '446', temp: 'Annealed Half Hard Full Hard', t: '95 max. 95-115 115 min.', y: '40-75 70-90 85 min.', e: '35 15 4', h: 'B 95 max. B 90-C 24 B 96 min.' },
                          { type: 'A-286', temp: 'Annealed Half Hard Full Hard', t: '1010 max. 115-140 140 min.', y: '35-65 80-110 110 min.', e: '35 15 3', h: 'B 95 max. B 96-C 26 C 26 min.' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.type}</td>
                            <td className="px-4 py-2">{row.temp}</td>
                            <td className="px-4 py-2">{row.t}</td>
                            <td className="px-4 py-2">{row.y}</td>
                            <td className="px-4 py-2">{row.e}</td>
                            <td className="px-4 py-2">{row.h}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Stainless Steel Pipe Tolerances */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Stainless Steel Pipe Tolerances
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">NPS Designator</th>
                          <th className="px-4 py-3">Over (In.)</th>
                          <th className="px-4 py-3">Under (In.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { nps: '1/8 to 1-1/2, incl', over: '1/64 (0.015)', under: '1/32 (0.031)' },
                          { nps: 'Over 1-1/2 to 4, incl', over: '1/32 (0.031)', under: '1/32 (0.031)' },
                          { nps: 'Over 4 to 8, incl', over: '1/16 (0.062)', under: '1/32 (0.031)' },
                          { nps: 'Over 8 to 18, incl', over: '3/23 (0.093)', under: '1/32 (0.031)' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.nps}</td>
                            <td className="px-4 py-2">{row.over}</td>
                            <td className="px-4 py-2">{row.under}</td>
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

export default StainlessSteelTube;