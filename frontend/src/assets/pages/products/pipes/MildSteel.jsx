import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const MildSteel = () => {
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
            <span className="text-[#D71920] font-medium">Mild Steel Pipe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mild Steel Pipe</h1>
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
               alt="Mild Steel Pipe" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                { title: "Economical general purpose piping", desc: "Low cost makes it suitable for large-scale structural applications." },
                { title: "Easy forming and welding", desc: "Highly malleable and ductile, making fabrication simple." },
                { title: "Widely used structural material", desc: "Commonly used for construction, fencing, and pipelines." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex gap-4">
               <button className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                 Request Quote <ArrowRight size={18} />
               </button>
               <button className="px-8 py-3 rounded font-bold text-[#0F172A] border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all">
                 Download Catalog
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Mild Steel Pipes. Available in different lengths, thicknesses and sizes, these Mild Steel Pipes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Mild Steel Pipes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Mild Steel?</h3>
                <p>
                  Mild steel, also known as plain-carbon steel, is now the most common form of steel because its price is relatively low while it provides material properties that are acceptable for many applications. Low-carbon steel contains approximately 0.05–0.15% carbon making it malleable and ductile. Mild steel has a relatively low tensile strength, but it is cheap and easy to form; surface hardness can be increased through carburizing. It is often used when large quantities of steel are needed, for example as structural steel. The density of mild steel is approximately 7.85 g/cm3 (7850 kg/m3 or 0.284 lb/in3) and the Young's modulus is 210 GPa (30,000,000 psi).
                </p>
                <p>
                  Low-carbon steels suffer from yield-point runout where the material has two yield points. The first yield point (or upper yield point) is higher than the second and the yield drops dramatically after the upper yield point. If a low-carbon steel is only stressed to some point between the upper and lower yield point then the surface may develop Lüder bands. Low-carbon steels contain less carbon than other steels and are easier to cold-form, making them easier to handle.
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
                        { label: "Type", value: "Seamless Pipe, ERW Pipe, EFW Pipe" },
                        { label: "Standard", value: "IS 1161-1998, 10577-1982, 1239 (Part 1), 554: 1999, 3589-2001, 3601-2006, 4270, 4270-2001 (Part 5), 4923-97, 4923-97 (Rect), 9295-1983, 9537, ISO 65-1981, BS 1387, ASTM A 53, DIN 2440 & 2441, 59410, EN 10255, EN 39, STAS 7656, STAS 7657" },
                        { label: "Grade", value: "Q195-Q345, Q235, Q345, Q195, Q215" },
                        { label: "Outer Diameter", value: "20-355mm" },
                        { label: "Wall Thicknesses", value: "0.9-14mm" },
                        { label: "Length", value: "2-12m, according to customers' requirements" },
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
                          <th className="px-4 py-3 border-r border-slate-600">Element</th>
                          <th className="px-4 py-3">Value (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'Carbon', val: '0.16-0.18%' },
                          { el: 'Silicon', val: '0.40% max' },
                          { el: 'Manganese', val: '0.70-0.90%' },
                          { el: 'Sulphur', val: '0.040% Max' },
                          { el: 'Phosphorus', val: '0.040% Max' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.el}</td>
                            <td className="px-4 py-2 text-slate-700">{row.val}</td>
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
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Value</th>
                          <th className="px-4 py-3">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { p: 'Max Stress', v: '400-560 n/mm2', c: 'dependent on ruling section' },
                          { p: 'Yield Stress', v: '300-440 n/mm2 Min', c: 'dependent on ruling section' },
                          { p: '0.2% Proof Stress', v: '280-420 n/mm2 Min', c: 'dependent on ruling section' },
                          { p: 'Elongation', v: '10-14% Min', c: 'dependent on ruling section' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.v}</td>
                            <td className="px-4 py-2 text-slate-700 italic">{row.c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

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
                          <th className="px-4 py-3">Imperial</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-2 font-bold text-[#D71920]">Density</td>
                          <td className="px-4 py-2 text-slate-700">7.87 g/cc</td>
                          <td className="px-4 py-2 text-slate-700">0.284 lb/in3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Electrical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Electrical Properties
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
                        {[
                          { p: 'Electrical resistivity @0°C (32°F)', m: '0.0000159 Ω-cm', e: '0.0000159 Ω-cm', c: 'annealed condition' },
                          { p: '@100 °C/ 212 °F', m: '0.0000219 Ω-cm', e: '0.0000219 Ω-cm', c: 'annealed condition' },
                          { p: '@ 200 °C/392 °F', m: '0.0000293 Ω-cm', e: '0.0000293 Ω-cm', c: 'annealed condition' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.p}</td>
                            <td className="px-4 py-2 text-slate-700">{row.m}</td>
                            <td className="px-4 py-2 text-slate-700">{row.e}</td>
                            <td className="px-4 py-2 text-slate-700 italic">{row.c}</td>
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

export default MildSteel;