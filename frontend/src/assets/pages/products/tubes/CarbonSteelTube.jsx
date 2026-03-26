import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const CarbonSteelTube = () => {
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
            <span className="text-[#D71920] font-medium">Carbon Steel Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Carbon Steel Tubes</h1>
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
               alt="Carbon Steel Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description (Title Only) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Carbon Steel Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High strength pressure tubing</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Cost-effective industrial pipes</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Suitable for high temperatures</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Carbon Steel Tubes. Available in different lengths, thicknesses and sizes, these Carbon Steel Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Carbon Steel Tubes as per customers requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Carbon Steel?</h3>
                <p>
                  Carbon Steel is steel in which the main interstitial alloying constituent is carbon in the range of 0.12–2.0%. The American Iron and Steel Institute (AISI) defines that: Steel is considered to be carbon steel when no minimum content is specified or required for chromium, cobalt, molybdenum, nickel, niobium, titanium, tungsten, vanadium or zirconium, or any other element to be added to obtain a desired alloying effect. not exceed the percentages noted: manganese 1.65, silicon 0.60, copper 0.60. The term "carbon steel" may also be used in reference to steel which is not stainless steel; in this use carbon steel may include alloy steels.
                </p>
                <p>
                  As the carbon percentage content rises, steel has the ability to become harder and stronger through heat treating; however, it becomes less ductile. Regardless of the heat treatment, a higher carbon content reduces weldability. In carbon steels, the higher carbon content lowers the melting point.
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
                        { label: "Type", value: "Seamless Tube , ERW Tube , EFW Tube" },
                        { label: "Standard", value: "API 5L, ISO 3183, ASTM: A-53, A-333, A-334,ASTM: A-106, A-178, A-179, A-192, A-209, A-210, A-214, ASTM: A-500, A-501, ASTM: A-519, ASTM A-589, ASTM A671, BS : 3602, BS : 3059, IS : 1239 , 3589, CA55, CB60, CB65, CB70, CC60, CC65, CC70, CD70, CD80, CF65, CF70, CF66, CF71, CG100, CH100, CJ101, CJ102, CJ103, CJ104, CJ105, CJ106, CJ107, CJ108, CJ109, CJ110, CJ111, CJ112, CJ113, CK75, CP65, CP75" },
                        { label: "Grade", value: "ASTM A106 GR.A, ASTM A106 GRADE B, ASTM A106 GRADE C, A53 GRADE A, A53 GRADE B, A333 GRADE 1, A333 GRADE 6, API 5L GRADE A, API 5L GRADE B, API 5L GRADE X42, X46, X52, X56, X60, X65, X70, X80 PSL1 & PSL2, A519 4130. ASTM 671 GR. CC60, CC65, CC70, ASTM A672 GR. B60, B65, B70, C55, C60, C70." },
                        { label: "Size", value: "½″ NB – 100″ NB" },
                        { label: "Thicknesses", value: "SCH20 TO SCHXXS UPTO 250MMTHK." },
                        { label: "Length", value: "6- 18 METERS" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Value Added Services", value: "Heat treatment facility up to 100\" [2540 MM]., Capability to manufacture pipes as per API 5L Grade X-80 or Equivalent., Contacts with major mills & stockists around the world., Can offer ex-stock materials as well as mill delivery with nominal margins., Complete in-house testing facilities viz. hydro, eddy current, UT, chemical analysis, physical/mechanical, PMI, microscopic examination, etc" },
                        { label: "Additional Test", value: "NACE MR0175, NACE TM0177, NACE TM0284, HIC TEST, SSC TEST, H2 SERVICE, IBR, etc." },
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

                {/* SAE/AMS Specifications Table */}
                <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                  SAE/AMS Specifications
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0F172A] text-white">
                        <th className="px-6 py-3 border-r border-slate-600">Specification</th>
                        <th className="px-6 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { spec: "SAE-J356", desc: "Welded Flash Controlled Low Carbon Steel Tubing Normalized for Bending. Double Flaring and Beading. Covers normalized electric resistance welded tube ID flash-controlled .005\" to .010\" manipulative quality." },
                        { spec: "SAE-J524", desc: "Seamless Low Carbon Steel Tubing Annealed for Bending and Flaring. Covers cold drawn seamless JIC hydraulic line tubing." },
                        { spec: "SAE-J525", desc: "Welded and Drawn Low Carbon Steel Tubing Annealed for Bending and Flaring. Covers welded and drawn JIC hydraulic line tubing." },
                        { spec: "SAE-J526", desc: "Welded Low Carbon Steel Tubing. Covers annealed welded tube with ID flash-in for general automotive applications." },
                        { spec: "SAE-J527", desc: "Brazed Double Wall Carbon Steel Tubing. Covers copper brazed double wall low carbon steel tube intended for general automotive applications and other similar uses. Suitable for bending, forming and double flaring." },
                        { spec: "SAE-J529", desc: "Fuel Injection Tubing. Covers low carbon steel tube specially manufactured for high pressure fuel injection lines for diesel engines." },
                        { spec: "AMS-5050", desc: "Seamless Annealed Low Carbon Steel Tube. Covers cold drawn seamless JIC hydraulic line steel tubing for aircraft applications." },
                        { spec: "AMS-5062", desc: "Seamless Low Carbon Steel Tube. Covers cold finished or hot finished seamless low carbon mechanical steel tube." },
                        { spec: "AMS-6360", desc: "Seamless SAE 4130 Alloy Steel Tubing. Covers aircraft quality 4130 tube in condition N temper. Similar to MIL-T-6736 specification." },
                        { spec: "AMS-6365", desc: "Seamless SAE 4135 Alloy Steel Tubing. Covers aircraft quality 4135 tube in condition N temper. Similar to MIL-T-6735 specification." },
                        { spec: "AMS-6371", desc: "Seamless SAE 4130 Alloy Steel Mechanical Tubing. Covers electric furnace grade magnaflux quality 4130 aircraft tube, either hot finished or cold finished, hardenable." },
                        { spec: "AMS-6372", desc: "Seamless SAE 4135 Alloy Steel Mechanical Tubing. Covers electric furnace grade magnaflux quality 4135 aircraft tube, either hot finished or cold finished, hardenable." },
                        { spec: "AMS-6381", desc: "Seamless SAE 4140 Alloy Steel Mechanical Tubing. Covers electric furnace grade magnaflux quality 4140 aircraft tube, either hot finished or cold finished, hardenable." },
                        { spec: "AMS-6415", desc: "Seamless SAF 4340 Alloy Steel Mechanical Tubing. Covers electric furnace grade magnaflux quality 4340 aircraft tube, either hot finished or cold finished, hardenable." }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#D71920] border-r border-slate-200">{row.spec}</td>
                          <td className="px-6 py-4 text-slate-600">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ASTM Specifications Table */}
                <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                  ASTM Specifications
                </h3>
                <div className="overflow-x-auto h-64 border border-slate-200 rounded-lg">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-[#0F172A] text-white sticky top-0">
                      <tr>
                        <th className="px-6 py-3 border-r border-slate-600">Spec</th>
                        <th className="px-6 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { spec: "A 53", desc: "Welded and Seamless Steel Pipe" },
                        { spec: "A 161", desc: "Seamless Low-Carbon and Carbon-Molybdenum Steel Still Tubes for Refinery Service" },
                        { spec: "A 106", desc: "Seamless Carbon Steel Pipe for High-Temperature Service" },
                        { spec: "A 178", desc: "Electric-Resistance-Welded Carbon Steel Boiler Tubes" },
                        { spec: "A 179", desc: "Seamless Cold-Drawn Low-Carbon Steel Heat-Ex-Changer and Condenser Tubes" },
                        { spec: "A 192", desc: "Seamless Carbon Steel Boiler Tubes for High-Pressure Service" },
                        { spec: "A 210", desc: "Seamless Medium-Carbon Steel Boiler and Superheater Tubes" },
                        { spec: "A 213", desc: "Seamless Ferritic Chrome-Moly Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes" },
                        { spec: "A 333", desc: "Seamless and Welded Steel Pipe for Low-Temperature Service" },
                        { spec: "A 335", desc: "Seamless Ferritic Alloy Steel Pipe for High-Temperature Service" },
                        { spec: "A 500", desc: "Cold-Formed Welded and Seamless Carbon Steel Structural Tubing in Rounds and Shapes" },
                        { spec: "A 519", desc: "Seamless Steel Mechanical Tubing (CDS or HFS). Covers carbon and alloy steel mechanical tube manufactured by the seamless process." }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                          <td className="px-6 py-4 font-bold text-[#D71920] border-r border-slate-200">{row.spec}</td>
                          <td className="px-6 py-4 text-slate-600">{row.desc}</td>
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
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Specification</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">WT</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">C%</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Mn%</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">P% MAX</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">S% MAX</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Si%</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Cr%</th>
                          <th className="px-2 py-3 font-bold">Mo%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { spec: "ASTM A 53/A\nA 53/B\nA 106/A\nA 106/B\nA 106/C", wt: "AW", c: "0.25MAX\n0.30MAX\n0.25MAX\n0.30MAX\n0.35MAX", mn: "0.95MAX\n1.20MAX\n0.27-0.93\n0.29-1.06\n0.29-1.06", p: "0.050\n0.050\n0.025\n0.025\n0.025", s: "0.060\n0.060\n0.025\n0.025\n0.025", si: "-\n-\n0.10MIN\n0.10MIN\n0.10MIN", cr: "-\n-\n0.40MAX\n0.40MAX\n0.40MAX", mo: "-\n-\n0.15MAX\n0.15MAX\n0.15MAX" },
                          { spec: "ASTM A 179\nA 214\nA 192\nA 210/A-1", wt: "MW", c: "0.06-0.18\n0.18MAX\n0.06-0.18\n0.27MAX", mn: "0.27-0.63\n0.27-0.63\n0.27-0.63\n0.93MAX", p: "0.048\n0.050\n0.048\n0.048", s: "0.048\n0.050\n0.048\n0.058", si: "-\n-\n0.25MAX\n0.10MIN", cr: "-", mo: "-" },
                          { spec: "ASTM A 333/1\n6\nA 334/1\n6", wt: "AW", c: "0.30MAX\n0.30MAX\n0.30MAX\n0.30MAX", mn: "0.40-1.06\n0.29-1.06\n0.40-1.06\n0.29-1.06", p: "0.025", s: "0.025", si: "-\n0.10MIN\n-\n0.10MIN", cr: "-", mo: "-" },
                          { spec: "X42\nX46", wt: "-", c: "0.22\n≤0.28", mn: "0.50-1.10\n≤1.40", p: "0.04\n≤0.030", s: "0.035\n≤0.030", si: "0.45\n-", cr: "-", mo: "-" }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200 whitespace-pre-line text-left">{row.spec}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.wt}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.c}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.mn}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.p}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.s}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.si}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200 whitespace-pre-line">{row.cr}</td>
                            <td className="px-2 py-2 text-slate-700 whitespace-pre-line">{row.mo}</td>
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
                
                {/* Physical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Physical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">English</th>
                          <th className="px-4 py-3">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-2 font-bold text-[#D71920]">Density</td>
                          <td className="px-4 py-2">7.87 g/cc</td>
                          <td className="px-4 py-2">0.284 lb/in³</td>
                          <td className="px-4 py-2">Typical for steel</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* API 5L Grade Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    API 5L Grade Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">API 5L Grade</th>
                          <th className="px-4 py-3">Yield Strength min. (ksi)</th>
                          <th className="px-4 py-3">Tensile Strength min. (ksi)</th>
                          <th className="px-4 py-3">Yield to Tensile Ratio (max)</th>
                          <th className="px-4 py-3">Elongation min. %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { g: 'A', y: '30', t: '48', r: '0.93', e: '28' },
                          { g: 'B', y: '35', t: '60', r: '0.93', e: '23' },
                          { g: 'X42', y: '42', t: '60', r: '0.93', e: '23' },
                          { g: 'X46', y: '46', t: '63', r: '0.93', e: '22' },
                          { g: 'X52', y: '52', t: '66', r: '0.93', e: '21' },
                          { g: 'X56', y: '56', t: '71', r: '0.93', e: '19' },
                          { g: 'X60', y: '60', t: '75', r: '0.93', e: '19' },
                          { g: 'X65', y: '65', t: '77', r: '0.93', e: '18' },
                          { g: 'X70', y: '70', t: '82', r: '0.93', e: '17' },
                          { g: 'X80', y: '80', t: '90', r: '0.93', e: '16' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.g}</td>
                            <td className="px-4 py-2">{row.y}</td>
                            <td className="px-4 py-2">{row.t}</td>
                            <td className="px-4 py-2">{row.r}</td>
                            <td className="px-4 py-2">{row.e}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Properties Table */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    General Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">English</th>
                          <th className="px-4 py-3">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: "Hardness, Brinell", m: "163", e: "163", c: "" },
                          { p: "Hardness, Knoop", m: "184", e: "184", c: "Converted from Brinell hardness" },
                          { p: "Hardness, Rockwell B", m: "84", e: "84", c: "Converted from Brinell hardness" },
                          { p: "Hardness, Vickers", m: "170", e: "170", c: "Converted from Brinell hardness" },
                          { p: "Tensile Strength, Ultimate", m: "540 MPa", e: "78300 psi", c: "" },
                          { p: "Tensile Strength, Yield", m: "415 MPa", e: "60200 psi", c: "" },
                          { p: "Elongation at Break", m: "10%", e: "10%", c: "" },
                          { p: "Reduction of Area", m: "35%", e: "35%", c: "" },
                          { p: "Modulus of Elasticity", m: "200 GPa", e: "29000 ksi", c: "Typical for Steel" },
                          { p: "Bulk Modulus", m: "140 GPa", e: "20300 ksi", c: "Typical for Steel" },
                          { p: "Poisson's Ratio", m: "0.29", e: "0.29", c: "Typical for Steel" },
                          { p: "Machinability", m: "160%", e: "160%", c: "Based on 100% machinability for AISI 1212 steel" },
                          { p: "Shear Modulus", m: "80 GPa", e: "11600 ksi", c: "Typical for Steel" }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2">{row.m}</td>
                            <td className="px-4 py-2">{row.e}</td>
                            <td className="px-4 py-2">{row.c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Electrical & Thermal Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Electrical & Thermal Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Metric</th>
                          <th className="px-4 py-3">English</th>
                          <th className="px-4 py-3">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: "Electrical Resistivity", m: "1.74e-005 ohm-cm", e: "1.74e-005 ohm-cm", c: "Typical for steel" },
                          { p: "CTE, linear 20°C", m: "11.5 µm/m-°C", e: "6.39 µin/in-°F", c: "" },
                          { p: "CTE, linear 250°C", m: "12.2 µm/m-°C", e: "6.78 µin/in-°F", c: "Converted from Brinell hardness" },
                          { p: "CTE, linear 500°C", m: "13.9 µm/m-°C", e: "7.72 µin/in-°F", c: "Converted from Brinell hardness" },
                          { p: "CTE, linear 1000°C", m: "14.7 µm/m-°C", e: "8.17 µin/in-°F", c: "Converted from Brinell hardness" },
                          { p: "Specific Heat Capacity", m: "0.472 J/g-°C", e: "0.113 BTU/lb-°F", c: "" },
                          { p: "Thermal Conductivity", m: "51.9 W/m-K", e: "360 BTU-in/hr-ft²-°F", c: "" }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2">{row.m}</td>
                            <td className="px-4 py-2">{row.e}</td>
                            <td className="px-4 py-2">{row.c}</td>
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

export default CarbonSteelTube;