import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, FileText, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const IbrFittingsGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="IBR Approved Pipe Fittings Guide: Rules & MTC | Remax"
        description="Complete guide to IBR (Indian Boiler Regulations) approved pipe fittings and flanges. Form III-C, Form IV-A, inspection procedures, and steam piping compliance."
        keywords="IBR approved fittings, Indian Boiler Regulations 1950, Form III-C certificate, IBR steam piping, boiler quality fittings, IBR flange manufacturer Mumbai"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">IBR Approved Fittings Guide</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Statutory & Boiler Compliance
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            The Complete Guide to IBR Approved Pipe Fittings & Flanges: Standards, Forms & Testing
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Quality & IBR Directorate</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • Indian Boiler Regulations 1950</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              In India and across global engineering projects executing steam generation lines, <strong>Indian Boiler Regulations (IBR 1950)</strong> compliance is a statutory legal mandate. Installing uncertified fittings on lines carrying steam over 1.0 bar (14.2 psi) is a punishable offense that risks severe plant shutdowns. Understanding how IBR governs forged fittings, buttweld components, and flanges ensures flawless safety, statutory approvals, and audit compliance.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. What Constitutes an IBR Pipe Fitting?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under Chapter VIII of the Indian Boiler Regulations, any piping component used in a steam line, boiler feed water circuit, or blowdown header must be manufactured from IBR-approved well-known steelmakers and stamped under the supervision of an authorized Inspector of Boilers.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Flame className="text-[#D71920] w-5 h-5" /> Steam Piping Scope
                </h4>
                <p className="text-sm text-slate-600">
                  Any pipe or fitting through which steam passes at a design pressure exceeding 3.5 kg/cm² (gauge) or where pipe diameter exceeds 254 mm (10 in) at any pressure.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Droplets className="text-blue-600 w-5 h-5" /> Boiler Feed Water Scope
                </h4>
                <p className="text-sm text-slate-600">
                  Piping delivering feed water from the economizer to the boiler drum under full design pressure and elevated feed water temperatures.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Mandatory Statutory Forms: Form III-C vs. Form IV-A
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The validity of an IBR fitting rests on its legal certificate signed by an authorized inspecting authority:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Certificate Type</th>
                    <th className="p-3">Governing Regulation</th>
                    <th className="p-3">Components Covered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Form III-C</td>
                    <td className="p-3 text-slate-700">Regulation 4(g) & 361</td>
                    <td className="p-3 font-bold text-emerald-700">
                      Pipe fittings, buttweld bends, tees, reducers, forged socket weld fittings, and flanges
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Form III-A</td>
                    <td className="p-3 text-slate-700">Regulation 4(e)</td>
                    <td className="p-3 text-slate-700">Pipes and tubes manufactured from seamless or welded billets</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Form IV-A</td>
                    <td className="p-3 text-slate-700">Regulation 4(c)</td>
                    <td className="p-3 text-slate-700">Raw steel forgings, cast steel, and plate materials before machining</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Raw Material & Testing Requirements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              IBR requires complete end-to-end traceability from raw melt heat to final dimensional inspection:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>
                <strong>Raw Material Pedigree:</strong> Steel must originate from an IBR-recognized "Well Known Steel Maker" or be re-inspected and cleared by the Directorate of Steam Boilers.
              </li>
              <li>
                <strong>Mechanical Testing:</strong> Tensile strength, yield point, elongation, and flattening/bend tests conducted in an IBR-approved laboratory in the presence of an inspector.
              </li>
              <li>
                <strong>Hydraulic Proof Testing:</strong> Every completed fitting or flange must withstand a hydro test pressure equal to at least 1.5 times the design operating pressure.
              </li>
              <li>
                <strong>Mandatory Hard Stamping:</strong> Each fitting bears the inspector's official symbol, heat number, manufacturer symbol (RF), and design pressure rating.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              4. Common Material Grades for IBR Service
            </h2>
            <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">Carbon Steel</span>
                <h4 className="font-bold text-slate-900 mb-2">ASTM A105 / A234 WPB</h4>
                <p className="text-xs text-slate-600">For saturated steam and boiler feed lines up to 400°C (750°F).</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">Low Alloy (P11/P22)</span>
                <h4 className="font-bold text-slate-900 mb-2">ASTM A182 F11 / F22</h4>
                <p className="text-xs text-slate-600">For superheated steam and reheater piping operating from 450°C to 540°C.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">High Alloy (P91)</span>
                <h4 className="font-bold text-slate-900 mb-2">ASTM A182 F91</h4>
                <p className="text-xs text-slate-600">For supercritical and ultra-supercritical boiler headers up to 600°C.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can imported fittings be used under IBR regulations?</h3>
                <p className="text-sm text-slate-600">
                  Yes, provided the foreign manufacturing mill holds recognition as a "Well-Known Forge/Steel Maker" by the Central Boilers Board (CBB) of India, or the fittings are inspected prior to dispatch by an authorized inspection agency (e.g., Lloyd's, BV, SGS, TUV) recognized under IBR Appendix C.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">What is the difference between an IBR MTC and a standard EN 10204 3.1 MTC?</h3>
                <p className="text-sm text-slate-600">
                  A standard EN 10204 3.1 MTC is issued solely by the manufacturer's quality control department. An IBR Form III-C certificate requires countersigning and physical stamping by a designated statutory government Boiler Inspector, providing legal proof of compliance for plant registration.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Order IBR Approved Forged Flanges & Fittings</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge supplies fully certified IBR Form III-C forged fittings, buttweld elbows, and flanges tested under Directorate of Steam Boilers inspection with complete material heat traceability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products/forged-fittings/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Forged Fittings
                </Link>
                <Link to="/products/flanges/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Flanges Catalog
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Submit IBR RFQ
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IbrFittingsGuide;
