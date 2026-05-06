import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ArrowLeft } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';

const OilAndGasFittings = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="High-Pressure Pipe Fittings for Oil & Gas: Safety & Standards"
        description="Explore the essential role of forged fittings and flanges in oil and gas applications. Learn about ASME standards, material traceability, and ensuring facility safety."
        keywords="Oil and Gas Pipe Fittings, High-pressure forged components, ASME B16.11 standards, material test certificates (MTC), upstream and downstream piping, Remax Forge & Fittings"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Oil & Gas Pipe Fittings</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Oil & Gas Sector Technical Reference
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            High-Pressure Pipe Fittings for Oil & Gas: Standards, Materials, and Best Practices
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge & Fittings</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> Oil & Gas Sector Technical Reference</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          {/* Primary Image: High-pressure refinery piping system */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
            <img 
              src="/images/b4-1.jpeg" 
              alt="high-pressure oil and gas refinery piping system with industrial valves and forged pipe fittings" 
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Where the Stakes Are Highest</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The oil and gas industry operates at the intersection of extreme conditions and extreme consequences. Wellheads generating pressures exceeding 15,000 psi. Subsea equipment at water depths where ambient pressure is crushing. Process trains handling hydrocarbons that ignite at room temperature. Sour gas streams where a single stressed component can fracture without warning.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In this environment, pipe fittings are not commodity items. Every socket-weld elbow on a high-pressure Christmas tree, every threaded coupling on an HP flare system, every forged tee on a gas compression train is a critical component whose failure could initiate a fire, explosion, or environmental incident.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              Remax Forge & Fittings has supplied high-pressure pipe fittings to oil & gas clients across India, the Middle East, Southeast Asia, and Africa. This article draws on that experience to explain what makes a fitting genuinely suitable for oil & gas service — not just nominally compliant, but engineered for reliability.
            </p>


            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">The Pressure Rating Challenge in Oil & Gas</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Oil and gas pressure systems span an enormous range. Understanding where your application falls is the first step in correct fitting selection.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Surface Production Pressure Classifications</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wellhead and Christmas tree equipment is governed primarily by <strong>API 6A</strong>, which defines working pressure ratings up to 20,000 psi. These ratings far exceed the ranges covered by ASME B16.11, meaning that fittings for wellhead service require specialized engineering and additional testing.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">ASME B16.11 Pressure Classes in Oil & Gas Context</h3>
            <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b4-2.jpeg" 
                alt="ASME B16.11 forged pipe fitting dimensions and pressure class technical specification chart" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Standard forged pipe fittings per ASME B16.11 are available in Classes 2000#, 3000#, and 6000#. For high-pressure oil and gas service, 3000# and 6000# are the most commonly specified classes. The actual pressure capability depends on the pipe schedule it is mated with and the allowable stresses of the material at the operating temperature.
            </p>


            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Sour Service — The H₂S Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Perhaps no service condition is more demanding than sour service: the presence of hydrogen sulfide (H₂S) in quantities sufficient to cause hydrogen embrittlement or sulfide stress cracking (SSC).
            </p>

            <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b4-3.jpeg" 
                alt="severe corrosion damage in oil and gas pipeline caused by hydrogen sulfide sour service exposure" 
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">NACE MR0175 / ISO 15156 — The Governing Standard</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              For carbon and low-alloy steel fittings in sour service, NACE MR0175 imposes strict requirements:
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Maximum Hardness:</strong> Generally 22 HRC (approx. 250 HBW) to prevent SSC.</li>
              <li><strong>Heat Treatment:</strong> Specific cycles like Quench and Temper are often required.</li>
              <li><strong>Chemistry:</strong> Restrictions on Carbon Equivalent (CE), sulfur, and phosphorus.</li>
            </ul>


            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Specification Requirements for Oil & Gas Fittings</h2>
            <h3 className="text-xl font-bold text-[#D71920] mb-3">Positive Material Identification (PMI)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              For alloy-containing fittings, PMI is typically mandatory. It verifies that each fitting is made from the specified alloy, catching any alloy mix-up before installation.
            </p>

            <h3 className="text-xl font-bold text-[#D71920] mb-3">Material Test Certificates (MTCs)</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              The heat treatment condition and compliance with NACE MR0175 must be documented on the MTC. Remax Forge & Fittings performs Brinell hardness testing on all sour-service fittings, documenting results for full traceability.
            </p>


            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Third-Party Inspection and Certification — What Oil & Gas Buyers Demand</h2>
            <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b4-4.jpeg" 
                alt="quality inspection of high-pressure oil and gas pipeline fitting by industrial safety engineer" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Major oil and gas operators often designate third-party inspection (TPI) agencies like Bureau Veritas, Lloyd's Register, or SGS to witness manufacturing. Standard witness points include:
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li>Chemical and Mechanical analysis witness</li>
              <li>Dimensional and Surface inspection</li>
              <li>Final documentation and MTC review</li>
            </ul>


            <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71920] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Conclusion: Fittings You Can Stake Your Facility's Safety On</h2>
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                High-pressure oil and gas service makes no allowances for substandard components. The fittings that connect your production system must be manufactured, tested, and documented to standards that match the severity of the service.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-medium">
                Remax Forge & Fittings delivers forged pipe fittings and flanges engineered for the most demanding oil and gas applications — from onshore production to offshore installations worldwide.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#D71920] text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#D71920] transition-colors relative z-10 shadow-lg"
              >
                Contact Remax Forge & Fittings <ChevronRight size={18} />
              </Link>
            </div>

          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
             <Link to="/blogs" className="flex items-center gap-2 text-slate-500 hover:text-[#D71920] font-medium transition-colors">
               <ArrowLeft size={16} /> Back to Blogs
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OilAndGasFittings;
