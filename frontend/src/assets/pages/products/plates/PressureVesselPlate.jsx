import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';

const PressureVesselPlate = () => {
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
            <span className="text-[#D71920] font-medium">Pressure Vessel Plate</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Pressure Vessel Plate</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Image & Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Left Column: Image Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             {/* Replace with actual image */}
             <img 
               src="https://images.unsplash.com/photo-1574689049597-7e6df3e2b024?q=80&w=2070&auto=format&fit=crop" 
               alt="Pressure Vessel Plate" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Side Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Pressure Vessel Plate</h2>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Designed for high pressure</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Excellent notch toughness</h3>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Certified vessel grade</h3>
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
                  REMAX FORGE & FITTINGS & Fitting are among the pre-eminent organizations, involved in manufacturers, suppliers, stockists and exporter Pressure Vessel Plate. Available in different lengths, thicknesses and sizes, these Pressure Vessel Plate are widely demanded by various industries like food & beverage, chemical, petrochemical, pharmaceutical and cosmetics. In addition to this, we provide tailor-made solution for all our offered Pressure Vessel Plate as per customers’ requirements.
                </p>
                
                <h3 className="text-xl font-bold text-[#0F172A] mt-6">What is Pressure Vessel?</h3>
                <p>
                  A pressure vessel is a closed container designed to hold gases or liquids at a pressure substantially different from the ambient pressure. The pressure differential is dangerous, and fatal accidents have occurred in the history of pressure vessel development and operation. Consequently, pressure vessel design, manufacture, and operation are regulated by engineering authorities backed by legislation. For these reasons, the definition of a pressure vessel varies from country to country, but involves parameters such as maximum safe operating pressure and temperature, and are engineered with a safety factor, corrosion allowance, minimum design temperature (for brittle fracture), and involve non destructive testing, such as ultrasonic testing, radiography, and pressure tests, usually involving water, also known as a hydrotest, but could be pneumatically tested involving air or another gas.
                </p>
                <p>
                  The preferred test is hydrostatic testing because it's a much safer method of testing as it releases much less energy if fracture were to occur (water does not rapidly increase its volume while rapid depressurization occurs, unlike gases like air, i.e. gasses fail explosively). In the United States, as with many other countries, it is the law that vessels over a certain size and pressure (15 PSIg) be built to Code, in the United States that Code is the ASME Boiler and Pressure Vessel Code (BPVC), these vessels also require an Authorized Inspector to sign off on every new vessel constructed and each vessel has a nameplate with pertinent information about the vessel such as maximum allowable working pressure, maximum temperature, minimum design metal temperature, what company manufactured it, the date, it's registration number (through the National Board), and ASME's official stamp for pressure vessels (U-stamp), making the vessel traceable and officially an ASME Code vessel.
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
                        { label: "Type", value: "Pressure Vessel Plate" },
                        { label: "Grade", value: 'A516 Gr.60, Gr.65, Gr.70, P235GH, P265GH, P295GH, P335GH, P275GH, P355NL1, P355N, A537 Plates, A537 Cl.1, A537 Cl.2' },
                        { label: "Size", value: "Maximum width 1400mm" },
                        { label: "Width", value: "1500-3500mm" },
                        { label: "Length", value: "3000-18000mm" },
                        { label: "Thickness", value: "8-100mm" },
                        { label: "Delivery time", value: "up to the order quantity" },
                        { label: "Order", value: "Accept custom order" },
                        { label: "Quality Assurance", value: "They are visually examined for conformity to ASTM, ASME, MSS, DIN, EN, and JIS codes and standards. Upon request, official certified Inspection Agencies can be called in to witness the material reports, dimensions and quality conformity of products." },
                        { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases. On special requests we can also, make custom marking on our products." },
                        { label: "Application", value: "Boilers,Calorifiers,Columns,Dished Ends,Filters,Flanges,Heat exchangers,Pipelines,Pressure vessels,Storage tanks,Valves" },
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
                
                {/* Chemical Properties */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b-2 border-[#D71920] inline-block pb-1">
                    Chemical Properties
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                     <table className="w-full text-sm text-center">
                        <thead className="bg-[#0F172A] text-white">
                           <tr>
                              <th className="px-3 py-3 border-r border-slate-600"></th>
                              <th className="px-3 py-3 border-r border-slate-600">Grade 5</th>
                              <th className="px-3 py-3 border-r border-slate-600">Grade 9</th>
                              <th className="px-3 py-3 border-r border-slate-600">Grade 11</th>
                              <th className="px-3 py-3 border-r border-slate-600">Grade 12</th>
                              <th className="px-3 py-3">Grade 22</th>
                           </tr>
                        </thead>
                        <tbody className="bg-white">
                           {/* Carbon */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Carbon</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.15 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.15 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.05 - 0.17</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.05 - 0.17</td>
                              <td className="px-3 py-2 text-slate-600">0.05 - 0.15</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.15 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.15 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.04 - 0.17</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.04 - 0.17</td>
                              <td className="px-3 py-2 text-slate-600">0.04 - 0.15</td>
                           </tr>

                           {/* Manganese */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Manganese</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.3 - 0.6</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.30 - 0.6</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.4 - 0.65</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.4 - 0.65</td>
                              <td className="px-3 py-2 text-slate-600">0.3 - 0.6</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.25 - 0.66</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.25 - 0.66</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.35 - 0.73</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.35 - 0.73</td>
                              <td className="px-3 py-2 text-slate-600">0.25 - 0.66</td>
                           </tr>

                           {/* Phosphorous */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Phosphorous</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600">0.035</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600">0.035</td>
                           </tr>

                           {/* Sulphur */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Sulphur</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600">0.035</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.03</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.035</td>
                              <td className="px-3 py-2 text-slate-600">0.035</td>
                           </tr>

                           {/* Silicon */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Silicon</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.5 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">1.0 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.5 - 0.80</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.15 - 0.4</td>
                              <td className="px-3 py-2 text-slate-600">0.5 max</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.55 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">1.05 max</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.44 - 0.86</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.13 - 0.45</td>
                              <td className="px-3 py-2 text-slate-600">0.5 max</td>
                           </tr>

                           {/* Chromium */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Chromium</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">4.00 - 6.00</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">8.0 - 10.0</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">1.0 - 1.5</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.8 - 1.15</td>
                              <td className="px-3 py-2 text-slate-600">2.0 - 2.5</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">3.9 - 6.1</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">7.9 - 10.1</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.94 - 1.56</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.74 - 1.21</td>
                              <td className="px-3 py-2 text-slate-600">1.88 - 2.62</td>
                           </tr>

                           {/* Molybdenum */}
                           <tr className="bg-slate-100 border-b border-slate-200">
                              <td colSpan="6" className="px-3 py-2 font-bold text-left text-[#D71920]">Molybdenum</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Heat Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.45 - 0.65</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.9 - 1.1</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.45 - 0.65</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.45 - 0.6</td>
                              <td className="px-3 py-2 text-slate-600">0.9 - 1.1</td>
                           </tr>
                           <tr className="border-b border-slate-200">
                              <td className="px-3 py-2 font-medium text-slate-700 text-left border-r border-slate-200">Product Analysis</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.40 - 0.7</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.85 1.15</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.40 - 0.7</td>
                              <td className="px-3 py-2 text-slate-600 border-r border-slate-200">0.4 - 0.65</td>
                              <td className="px-3 py-2 text-slate-600">0.85 - 1.15</td>
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
                  <div className="overflow-x-auto rounded-lg border border-slate-200 w-full">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          <th className="px-3 py-3 border-r border-slate-600">Property</th>
                          <th colSpan="2" className="px-3 py-3 border-r border-slate-600">A 387 Grade 5</th>
                          <th colSpan="2" className="px-3 py-3 border-r border-slate-600">A 387 Grade 9</th>
                          <th colSpan="2" className="px-3 py-3 border-r border-slate-600">A 387 Grade 11</th>
                          <th colSpan="2" className="px-3 py-3 border-r border-slate-600">A 387 Grade 12</th>
                          <th colSpan="2" className="px-3 py-3">A 387 Grade 22</th>
                        </tr>
                        <tr>
                           <th className="px-3 py-2 border-r border-slate-600 bg-slate-800">Class</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">1</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">2</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">1</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">2</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">1</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">2</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">1</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">2</th>
                           <th className="px-2 py-2 border-r border-slate-600 bg-slate-800">1</th>
                           <th className="px-2 py-2 bg-slate-800">2</th>
                        </tr>
                      </thead>
                      <tbody>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Tensile Strength (ksi)</td>
                           <td className="px-2 py-2 border-r border-slate-200">60-85</td>
                           <td className="px-2 py-2 border-r border-slate-200">75-100</td>
                           <td className="px-2 py-2 border-r border-slate-200">60-85</td>
                           <td className="px-2 py-2 border-r border-slate-200">75-100</td>
                           <td className="px-2 py-2 border-r border-slate-200">60-85</td>
                           <td className="px-2 py-2 border-r border-slate-200">70-90</td>
                           <td className="px-2 py-2 border-r border-slate-200">50-80</td>
                           <td className="px-2 py-2 border-r border-slate-200">65-85</td>
                           <td className="px-2 py-2 border-r border-slate-200">60-85</td>
                           <td className="px-2 py-2">75-100</td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Tensile Strength (MPa)</td>
                           <td className="px-2 py-2 border-r border-slate-200">415-585</td>
                           <td className="px-2 py-2 border-r border-slate-200">515-690</td>
                           <td className="px-2 py-2 border-r border-slate-200">415-585</td>
                           <td className="px-2 py-2 border-r border-slate-200">515-690</td>
                           <td className="px-2 py-2 border-r border-slate-200">415-585</td>
                           <td className="px-2 py-2 border-r border-slate-200">485-620</td>
                           <td className="px-2 py-2 border-r border-slate-200">380-550</td>
                           <td className="px-2 py-2 border-r border-slate-200">450-585</td>
                           <td className="px-2 py-2 border-r border-slate-200">415-585</td>
                           <td className="px-2 py-2">515-690</td>
                         </tr>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Yield Strength (ksi)</td>
                           <td className="px-2 py-2 border-r border-slate-200">30</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">30</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">35</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">33</td>
                           <td className="px-2 py-2 border-r border-slate-200">40</td>
                           <td className="px-2 py-2 border-r border-slate-200">30</td>
                           <td className="px-2 py-2">45</td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Yield Strength (MPa)</td>
                           <td className="px-2 py-2 border-r border-slate-200">205</td>
                           <td className="px-2 py-2 border-r border-slate-200">310</td>
                           <td className="px-2 py-2 border-r border-slate-200">205</td>
                           <td className="px-2 py-2 border-r border-slate-200">310</td>
                           <td className="px-2 py-2 border-r border-slate-200">240</td>
                           <td className="px-2 py-2 border-r border-slate-200">310</td>
                           <td className="px-2 py-2 border-r border-slate-200">230</td>
                           <td className="px-2 py-2 border-r border-slate-200">275</td>
                           <td className="px-2 py-2 border-r border-slate-200">205</td>
                           <td className="px-2 py-2">310</td>
                         </tr>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Elongation in 200mm (%)</td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200">19</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">19</td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2"></td>
                         </tr>
                         <tr className="bg-slate-50 border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Elongation in 50mm (%)</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2 border-r border-slate-200">22</td>
                           <td className="px-2 py-2 border-r border-slate-200">22</td>
                           <td className="px-2 py-2 border-r border-slate-200">22</td>
                           <td className="px-2 py-2 border-r border-slate-200">22</td>
                           <td className="px-2 py-2 border-r border-slate-200">18</td>
                           <td className="px-2 py-2">18</td>
                         </tr>
                         <tr className="bg-white border-b border-slate-200">
                           <td className="px-3 py-2 font-medium text-left border-r border-slate-200">Reduction of Area (%)</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200"></td>
                           <td className="px-2 py-2 border-r border-slate-200">45</td>
                           <td className="px-2 py-2">45</td>
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

export default PressureVesselPlate;