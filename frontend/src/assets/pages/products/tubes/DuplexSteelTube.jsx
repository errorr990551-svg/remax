import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const DuplexSteelTube = () => {
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
            <span className="text-[#D71920] font-medium">Duplex Steel Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Duplex / Super Duplex Steel Tubes</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1565514020176-db765cb86b72?q=80&w=2070&auto=format&fit=crop" 
               alt="Duplex Steel Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Duplex Steel Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High strength stainless tubing</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Excellent stress corrosion resistance</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Ideal for offshore service</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Duplex Steel Tubes. Available in different lengths, thicknesses and sizes, these Duplex Steel Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Duplex Steel Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Duplex Steel?</h3>
                <p>
                  Duplex is a material that has approximately equal amounts of austenite and ferrite. These combine excellent corrosion resistance with high strength. Mechanical properties are approximately double those of singular austenitic steel and resistance to stress corrosion cracking is superior to type 316 stainless steel in chloride solutions. Duplex material has ductile or brittle transition at approximately -50 degrees. High Temperature use is usually restricted to a maximum temperature of 300 degrees for indefinite use due to embrittlement.
                </p>
                <p>
                  Duplex stainless steels have a mixed microstructure of austenite and ferrite, the aim being to produce a 50/50 mix, although in commercial alloys, the mix may be 40/60 respectively. Duplex steels have improved strength over austenitic stainless steels and also improved resistance to localised corrosion, particularly pitting, crevice corrosion and stress corrosion cracking. They are characterised by high chromium (up to 28%) and molybdenum (up to 5%) and lower nickel contents than austenitic stainless steels. The most used Duplex Stainless Steel are the 2205 (22% Chromium, 5% Nickel) and 2507 (25% Chromium, 7% Nickel); the 2507 is also known as Super Duplex due to its higher corrosion resistance.
                </p>

                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Super Duplex Steel?</h3>
                <p>
                  Super duplex pipe is known to have better stress corrosion, cracking resistance and mechanical properties. The high corrosion resistance of super duplex pipeline supplies makes them ideal for onshore and offshore environments in oil and gas applications. Super Duplex is an Austenitic Ferritic Iron Chromium Nickel Alloys with Molybdenum addition. It has good resistance to pitting and a very high tensile strength and high resistance too stress corrosion cracking at moderate temperatures compared to that of conventional austenitic stainless steels.
                </p>
              </div>
            )}

            {/* TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse mb-8">
                    <caption className="text-left font-bold text-lg text-[#0F172A] mb-2">Duplex Steel</caption>
                    <tbody>
                      {[
                        { label: "Type", value: "Seamless Pipe, Welded Pipe" },
                        { label: "Standards", value: "ASTM/ASME A789/SA789, A790/SA790, A450, A530, A240, A276, A182" },
                        { label: "Grade", value: "UNS S31803 (Cr22Ni5Mo3/1.4462)/2205, UNS S32750 (1.4410), UNS S31500 (Cr18NiMo3Si2), UNS32760 (1.4501)" },
                        { label: "Wall Thickness", value: "0.3mm-30mm" },
                        { label: "Length", value: "As per customer requirement" },
                        { label: "Outer Diameter", value: "8mm-1000mm" },
                        { label: "Keyword", value: "Seamless Duplex Stainless Steel Pipe for Petroleum Chemical Industry Specifications-Seamless Duplex Stainless Steel Pipe for Petroleum Chemical Industry." },
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

                  <table className="w-full text-sm text-left border-collapse">
                    <caption className="text-left font-bold text-lg text-[#0F172A] mb-2">Super Duplex</caption>
                    <tbody>
                      {[
                        { label: "Type", value: "Seamless Pipe, Welded Pipe" },
                        { label: "Standards", value: "ASTM A790, ASTM A928" },
                        { label: "Grade", value: "A790, A789, A240, A276, A182" },
                        { label: "UNS No", value: "S32760" },
                        { label: "Wall Thickness", value: "0.3mm-30mm" },
                        { label: "Length", value: "As per customer requirement" },
                        { label: "Outer Diameter", value: "8mm-1000mm" },
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
                
                {/* Duplex Steel Composition */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Duplex Steel Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          {['Cr', 'Ni', 'Mo', 'C', 'N'].map(h => (
                            <th key={h} className="px-4 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-3 border-r border-slate-200">22.0-23.0</td>
                          <td className="px-4 py-3 border-r border-slate-200">4.50-6.50</td>
                          <td className="px-4 py-3 border-r border-slate-200">3.00-3.50</td>
                          <td className="px-4 py-3 border-r border-slate-200">.030 Max</td>
                          <td className="px-4 py-3">0.14-0.20</td>
                        </tr>
                      </tbody>
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          {['Mn', 'Si', 'P', 'S', 'Fe'].map(h => (
                            <th key={h} className="px-4 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                         <tr className="bg-white">
                          <td className="px-4 py-3 border-r border-slate-200">2.00 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">1.00 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">.030 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">.020 Max</td>
                          <td className="px-4 py-3">Balance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Super Duplex Steel Composition */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Super Duplex Steel Composition
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          {['Cr', 'Ni', 'Mo', 'C', 'N'].map(h => (
                            <th key={h} className="px-4 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-3 border-r border-slate-200">22.0-23.0</td>
                          <td className="px-4 py-3 border-r border-slate-200">4.50-6.50</td>
                          <td className="px-4 py-3 border-r border-slate-200">3.00-3.50</td>
                          <td className="px-4 py-3 border-r border-slate-200">.030 Max</td>
                          <td className="px-4 py-3">0.14-0.20</td>
                        </tr>
                      </tbody>
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          {['Mn', 'Si', 'P', 'S', 'Fe'].map(h => (
                            <th key={h} className="px-4 py-3 border-r border-slate-600 last:border-0">{h}</th>
                          ))}
                        </tr>
                      </thead>
                       <tbody>
                         <tr className="bg-white">
                          <td className="px-4 py-3 border-r border-slate-200">2.00 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">1.00 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">.030 Max</td>
                          <td className="px-4 py-3 border-r border-slate-200">.020 Max</td>
                          <td className="px-4 py-3">Balance</td>
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
                
                {/* Mechanical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Mechanical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full md:w-2/3">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Ultimate Tensile Strength, ksi Minimum</th>
                          <th className="px-4 py-3">.2% Yield Strength, ksi Minimum</th>
                          <th className="px-4 py-3">Hardness Max.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Duplex Steel', uts: '95', ys: '65', h: '31 Rockwell C' },
                          { type: 'Super Duplex Steel', uts: '95', ys: '65', h: '31 Rockwell C' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920]">{row.type}</td>
                            <td className="px-4 py-2 text-slate-700">{row.uts}</td>
                            <td className="px-4 py-2 text-slate-700">{row.ys}</td>
                            <td className="px-4 py-2 text-slate-700">{row.h}</td>
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

export default DuplexSteelTube;