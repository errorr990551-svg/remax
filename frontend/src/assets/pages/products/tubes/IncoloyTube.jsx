import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight, Home } from 'lucide-react';

const IncoloyTube = () => {
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
            <span className="text-[#D71920] font-medium">Incoloy Tubes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Incoloy Tubes</h1>
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
               alt="Incoloy Tubes" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Incoloy Tubes</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">High temperature strength alloy</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Resistant to oxidation corrosion</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Ideal for heat processes</h3>
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
                  REMAX FORGE & FITTINGS are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Incoloy Tubes. Available in different lengths, thicknesses and sizes, these Incoloy Tubes are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Incoloy Tubes as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Incoloy?</h3>
                <p>
                  Incoloy refers to a range of superalloys produced by the Special Metals Corporation group of companies. They are mostly nickel-based, and designed for excellent corrosion resistance as well as strength at high temperatures; there are specific alloys for resistance to particular chemical attacks (e.g. alloy 020 is designed to be resistant to sulphuric acid, DS to be used in heat-treating furnaces with reactive atmospheres and many heat cycles). Incoloy MA956 is made by a mechanical alloying rather than a bulk-melting process; it was studied for space reactor components in the JIMO project. It is difficult to weld and needs to be heated to 200C for cold-forming processes.
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
                        { label: "Type", value: "Seamless Pipe, Welded Pipe" },
                        { label: "Trade Name", value: "Inconel 600 N06600, Inconel 625 N06625, Incoloy 800 N08800, Incoloy 800H N08810, Incoloy 800HT N08811" },
                        { label: "Standard", value: "ASTM A, ASME SA B161 , B725 , B163 , B730 , B167 , B517 , B751 , B516 , B775 , B444, B705, B704 , B407, B154, B515 , B423" },
                        { label: "Grade", value: "UNS N04400, UNS N06600, UNS N06625, UNS N08020, UNS N08800, UNS N08810 -UNS N08811, UNS N08825, UNS N10276, UNS S31254" },
                        { label: "UNSPSC Code", value: "UNS N06600, UNS N06625" },
                        { label: "Diameter", value: "less than 325mm (12.80” )" },
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs md:text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-2 py-3 font-bold border-r border-slate-600">Element</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600" colSpan="2">Incoloy 800</th>
                          <th className="px-2 py-3 font-bold border-r border-slate-600" colSpan="2">Incoloy 800H</th>
                        </tr>
                        <tr className="bg-slate-700 text-white">
                          <th className="px-2 py-2 border-r border-slate-500"></th>
                          <th className="px-2 py-2 border-r border-slate-500">Min</th>
                          <th className="px-2 py-2 border-r border-slate-500">Max</th>
                          <th className="px-2 py-2 border-r border-slate-500">Min</th>
                          <th className="px-2 py-2">Max</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { el: 'Nickel + Cobalt', min800: '30.0', max800: '35.0', min800H: '30.0', max800H: '35.0' },
                          { el: 'Cobalt', min800: '---', max800: '2.00', min800H: '---', max800H: '2.00' },
                          { el: 'Chromium', min800: '19.0', max800: '23.0', min800H: '19.0', max800H: '23.0' },
                          { el: 'Copper', min800: '---', max800: '0.75', min800H: '---', max800H: '0.75' },
                          { el: 'Iron', min800: 'Bal', max800: 'Bal', min800H: 'Bal', max800H: 'Bal' },
                          { el: 'Silicon', min800: '---', max800: '1.00', min800H: '---', max800H: '1.00' },
                          { el: 'Manganese', min800: '---', max800: '1.50', min800H: '---', max800H: '1.50' },
                          { el: 'Carbon', min800: '---', max800: '0.10', min800H: '0.05', max800H: '0.10' },
                          { el: 'Aluminum', min800: '0.15', max800: '0.60', min800H: '0.15', max800H: '0.60' },
                          { el: 'Titanium', min800: '0.15', max800: '0.60', min800H: '0.15', max800H: '0.60' },
                          { el: 'Sulfur', min800: '---', max800: '0.015', min800H: '---', max800H: '0.015' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-2 py-2 font-bold text-[#D71920] border-r border-slate-200 text-left pl-4">{row.el}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.min800}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.max800}</td>
                            <td className="px-2 py-2 text-slate-700 border-r border-slate-200">{row.min800H}</td>
                            <td className="px-2 py-2 text-slate-700">{row.max800H}</td>
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-4 py-3">Property</th>
                          <th className="px-4 py-3">Temp (°F)</th>
                          <th className="px-4 py-3">British Units</th>
                          <th className="px-4 py-3">Temp (°C)</th>
                          <th className="px-4 py-3">Metric Units</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { prop: "Density", tempF: "Room", brit: "0.287 lb./in.³", tempC: "Room", met: "7.95 g/cm³" },
                          { prop: "Electrical Resistivity", tempF: "70\n200\n400\n600\n800", brit: "38.9 microhm-in.\n40.6 microhm-in.\n43.0 microhm-in.\n44.7 microhm-in.\n46.1 microhm-in.", tempC: "21\n93\n204\n316\n427", met: "0.989 microhm-m\n1.03 microhm-m\n1.09 microhm-m\n1.13 microhm-m\n1.17 microhm-m" },
                          { prop: "Mean Coeff. Thermal Exp.", tempF: "70-200\n70-400\n70-600\n70-800", brit: "7.9 microin./in.-°F\n8.8 microin./in.-°F\n9.0 microin./in.-°F\n9.2 microin./in.-°F", tempC: "21-93\n21-204\n21-316\n21-427", met: "14.2 X 10⁻⁶ m/m-K\n15.8 X 10⁻⁶ m/m-K\n16.2 X 10⁻⁶ m/m-K\n16.6 X 10⁻⁶ m/m-K" },
                          { prop: "Thermal Conductivity", tempF: "70\n200\n400\n600\n800", brit: "80 Btu-in/ft²-hr-°F\n89 Btu-in/ft²-hr-°F\n103 Btu-in/ft²-hr-°F\n115 Btu-in/ft²-hr-°F\n127 Btu-in/ft²-hr-°F", tempC: "21\n93\n204\n316\n427", met: "11.5 W/m-K\n12.8 W/m-K\n14.8 W/m-K\n16.6 W/m-K\n18.3 W/m-K" },
                          { prop: "Dynamic Modulus of Elasticity", tempF: "Room", brit: "28.5 x 10⁶ psi", tempC: "Room", met: "196 GPa" }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-4 font-bold text-[#D71920] border-r border-slate-200 align-top">{row.prop}</td>
                            <td className="px-4 py-4 text-slate-700 border-r border-slate-200 whitespace-pre-line align-top">{row.tempF}</td>
                            <td className="px-4 py-4 text-slate-700 border-r border-slate-200 whitespace-pre-line align-top">{row.brit}</td>
                            <td className="px-4 py-4 text-slate-700 border-r border-slate-200 whitespace-pre-line align-top">{row.tempC}</td>
                            <td className="px-4 py-4 text-slate-700 whitespace-pre-line align-top">{row.met}</td>
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
                          <th className="px-4 py-3">Alloy</th>
                          <th className="px-4 py-3">Form</th>
                          <th className="px-4 py-3">Condition</th>
                          <th className="px-4 py-3">Ultimate Tensile Strength, ksi (MPa)</th>
                          <th className="px-4 py-3">Yield Strength at 0.2% offset, ksi (MPa)</th>
                          <th className="px-4 py-3">Elongation in 2" or 4D, %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { alloy: '800', form: 'Sheet, Plate', cond: 'Annealed', uts: '85 (586)', ys: '40 (276)', el: '43' },
                          { alloy: '800', form: 'Sheet, Plate, Strip, Bar', cond: 'Annealed', uts: '75 (520)*', ys: '30 (205)*', el: '30*' },
                          { alloy: '800H', form: 'Sheet, Plate', cond: 'SHT', uts: '80 (552)', ys: '35 (241)', el: '47' },
                          { alloy: '800H', form: 'Sheet, Plate, Strip, Bar', cond: 'SHT', uts: '65 (450)*', ys: '25 (170)*', el: '30*' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="px-4 py-2 font-bold text-[#D71920] border-r border-slate-200">{row.alloy}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.form}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.cond}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.uts}</td>
                            <td className="px-4 py-2 text-slate-700 border-r border-slate-200">{row.ys}</td>
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

export default IncoloyTube;