import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, FileCheck, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const MtcEN10204Guide = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="EN 10204 MTC Guide: 2.1, 2.2, 3.1 & 3.2 Differences | Remax"
        description="Understand EN 10204 inspection documents: 2.1, 2.2, 3.1, and 3.2 Mill Test Certificates. Traceability, chemical analysis, and 3rd-party inspection rules."
        keywords="EN 10204 3.1 MTC, EN 10204 3.2 certificate, Mill Test Certificate explained, material test report, 3.1 vs 3.2 MTC, third party inspection piping"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">EN 10204 MTC Explained</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Quality Assurance & Traceability
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            MTC EN 10204 Explained: The Complete Guide to Types 2.1, 2.2, 3.1 & 3.2 Inspection Certificates
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Quality Assurance Directorate</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 9 min read • European Standard EN 10204</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              In the procurement of industrial flanges, fittings, and pressure vessels, a <strong>Mill Test Certificate (MTC)</strong>—also referred to as a Certified Material Test Report (CMTR)—is the definitive legal and technical pedigree of the product. The European standard <strong>EN 10204 (Metallic products – Types of inspection documents)</strong> defines the exact hierarchy of documentation, validating who conducted the testing and whether the test results reflect the exact product shipped or merely representative batch data.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. The Four Types of EN 10204 Inspection Documents
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              EN 10204 classifies test certificates into two broad divisions: <strong>Non-specific inspection</strong> (Types 2.1 and 2.2) and <strong>Specific inspection</strong> (Types 3.1 and 3.2):
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Document Title</th>
                    <th className="p-3">Test Data Nature</th>
                    <th className="p-3">Authorized Validator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Type 2.1</td>
                    <td className="p-3 text-slate-700">Declaration of Compliance</td>
                    <td className="p-3 text-slate-700">No test results included; simple statement of conformity</td>
                    <td className="p-3 text-slate-700">Manufacturer</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Type 2.2</td>
                    <td className="p-3 text-slate-700">Test Report</td>
                    <td className="p-3 text-slate-700">Non-specific; representative test results from general mill production</td>
                    <td className="p-3 text-slate-700">Manufacturer</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-[#D71920]">Type 3.1</td>
                    <td className="p-3 text-slate-700 font-bold">Inspection Certificate 3.1</td>
                    <td className="p-3 font-bold text-emerald-700">Specific test results on the exact heat/lot supplied</td>
                    <td className="p-3 text-slate-700">Manufacturer's independent QC representative</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-bold text-[#D71920]">Type 3.2</td>
                    <td className="p-3 text-slate-700 font-bold">Inspection Certificate 3.2</td>
                    <td className="p-3 font-bold text-emerald-700">Specific test results verified by independent third party</td>
                    <td className="p-3 text-slate-700">Manufacturer's QC + Independent 3rd Party (SGS, TUV, Lloyd's)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Key Requirements of an EN 10204 3.1 Certificate
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An EN 10204 3.1 certificate is the baseline standard demanded by oil & gas operators, EPC contractors, and chemical plants worldwide. To be valid, a 3.1 MTC must contain:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>
                <strong>Material Specification & Grade:</strong> Explicit citation of ASTM / ASME standard (e.g., ASTM A105, A182 F316L, A350 LF2).
              </li>
              <li>
                <strong>Chemical Analysis (Heat Analysis):</strong> Actual percentage of Carbon, Manganese, Phosphorus, Sulfur, Silicon, Chromium, Nickel, Molybdenum, and calculated Carbon Equivalent (CE).
              </li>
              <li>
                <strong>Mechanical Properties:</strong> Tensile strength (MPa/ksi), Yield strength (0.2% offset), Elongation percentage, Reduction of Area, and Hardness (HBW / HRC).
              </li>
              <li>
                <strong>Heat Treatment Record:</strong> Heat treatment process, soaking temperatures, holding durations, and cooling medium (Normalized, Solution Annealed, Quenched & Tempered).
              </li>
              <li>
                <strong>Non-Destructive Examination (NDE):</strong> Hydrostatic test pressure, Ultrasonic (UT), Magnetic Particle (MT), or Dye Penetrant (PT) clearance.
              </li>
              <li>
                <strong>Signatory Independence:</strong> The certificate must be signed by a quality representative completely independent of the commercial manufacturing shop floor.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. When Is an EN 10204 3.2 Certificate Mandatory?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under an EN 10204 3.2 inspection, the material is witnessed during production and mechanical testing by an independent Third Party Inspection Agency (TPIA) appointed by the purchaser. Common inspecting bodies include:
            </p>
            <div className="grid md:grid-cols-4 gap-4 my-6 not-prose text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800">Lloyd's Register (LR)</div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800">DNV GL</div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800">Bureau Veritas (BV)</div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800">SGS / TUV</div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Specifying 3.2 certification increases inspection costs and delivery lead times by 1 to 2 weeks, and is typically reserved for critical subsea infrastructure, nuclear power piping, lethal gas manifolds, and offshore high-pressure topside systems.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can a distributor upgrade a 3.1 MTC to a 3.2 certificate?</h3>
                <p className="text-sm text-slate-600">
                  Generally no. Under strict European and ASME rules, a 3.2 certificate requires witnessing of the heat treatment and mechanical testing directly at the manufacturing mill or forging shop. Retrospective 3.2 intent requires exhaustive re-testing, PMI, hardness, and coupon extraction under TPIA witnessing.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">What does "EN 10204 3.1 with NACE MR0175" mean?</h3>
                <p className="text-sm text-slate-600">
                  It certifies that the material meets both EN 10204 3.1 specific testing rules and NACE MR0175 / ISO 15156 sour service limits—specifically maximum hardness (typically ≤ 22 HRC / 237 HBW) and strict sulfur/phosphorus ceilings to prevent sulfide stress cracking.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">100% Traceable Forged Flanges & Fittings</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Every component manufactured at Remax Forge ships with an authentic EN 10204 3.1 MTC. Third-party 3.2 inspection (TUV, DNV, Lloyd's, SGS, BV) readily accommodated upon order placement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/quality/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Quality Assurance
                </Link>
                <Link to="/certification/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Certificates & Accreditations
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Request Sample MTC
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MtcEN10204Guide;
