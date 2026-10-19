import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, CheckCircle2, ShieldCheck, Thermometer } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const A105VsA350LF2 = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="ASTM A105 vs A350 LF2: Low Temp Steel Comparison | Remax"
        description="ASTM A105 vs A350 LF2 comparison for piping engineers. Impact testing (-46°C Charpy V-notch), chemistry, heat treatment, ASME B31.3 low-temp selection."
        keywords="ASTM A105 vs A350 LF2, low temperature forged flanges, A350 LF2 Class 1, Charpy V-notch test, carbon steel forging metallurgy"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">ASTM A105 vs A350 LF2</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Metallurgy & Material Selection
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            ASTM A105 vs. ASTM A350 LF2: Low-Temperature Carbon Steel Flange Comparison
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Metallurgy Engineering</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 7 min read • ASTM / ASME Reference</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              When specifying forged carbon steel flanges and piping components under ASME B16.5 and ASME B31.3, two primary material grades dominate industrial requisitions: <strong>ASTM A105</strong> and <strong>ASTM A350 LF2</strong>. While both are forged carbon steels with comparable tensile strengths at room temperature, their behavior in sub-zero ambient environments and low-temperature process conditions is fundamentally different.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. The Critical Difference: Minimum Design Metal Temperature (MDMT)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Standard carbon steel undergoes a ductile-to-brittle transition when chilled. At temperatures below its transition threshold, steel can shatter catastrophically without prior plastic deformation under sudden pressure surges or mechanical impact.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-600">
              <li>
                <strong>ASTM A105:</strong> Standard ambient and higher-temperature forging grade. Under ASME B31.3 Curve B, A105 is generally rated down to <strong>-29°C (-20°F)</strong> without mandatory Charpy impact testing. In practice, many engineering specs avoid A105 below 0°C if high stress or impact risks exist.
              </li>
              <li>
                <strong>ASTM A350 LF2 (Class 1):</strong> Specifically formulated for low-temperature service. ASTM A350 strictly mandates <strong>Charpy V-Notch (CVN) impact testing at -46°C (-50°F)</strong> on each heat of material, guaranteeing minimum absorbed impact energy (typically 20 J / 15 ft-lbs average) to guard against brittle fracture.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Chemical Composition Comparison (% max unless noted)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To achieve superior sub-zero impact toughness, A350 LF2 features tighter chemical limits, particularly for carbon content, carbon equivalent (CE), and deoxidation practice:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Element</th>
                    <th className="p-3">ASTM A105 (Standard)</th>
                    <th className="p-3">ASTM A350 Grade LF2 Class 1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Carbon (C)</td>
                    <td className="p-3 text-slate-700">0.35 max</td>
                    <td className="p-3 font-bold text-emerald-700">0.30 max (Lower carbon improves toughness)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Manganese (Mn)</td>
                    <td className="p-3 text-slate-700">0.60 – 1.05</td>
                    <td className="p-3 text-slate-700">0.60 – 1.35</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Phosphorus (P) / Sulfur (S)</td>
                    <td className="p-3 text-slate-700">0.035 / 0.040 max</td>
                    <td className="p-3 font-bold text-emerald-700">0.035 / 0.040 max (0.015 max in NACE LF2)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Silicon (Si)</td>
                    <td className="p-3 text-slate-700">0.10 – 0.35</td>
                    <td className="p-3 text-slate-700">0.15 – 0.30 (Fully killed steel)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Nickel (Ni) / Chromium (Cr)</td>
                    <td className="p-3 text-slate-700">0.40 max each</td>
                    <td className="p-3 text-slate-700">0.40 max Ni / 0.30 max Cr / 0.12 max Mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Heat Treatment & Mechanical Properties
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Heat treatment is the key mechanism enabling fine grain size and cryogenic impact performance:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>
                <strong>A105 Heat Treatment:</strong> Forgings over Class 300# or NPS 4" require normalization, annealing, or quench & temper. However, Class 150# smaller fittings can be supplied in as-forged condition unless specified otherwise.
              </li>
              <li>
                <strong>A350 LF2 Heat Treatment:</strong> Mandatory 100% normalized, normalized & tempered, or quenched & tempered across all sizes and pressure classes to achieve an ASTM grain size of 5 or finer.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              4. When Should You Specify A350 LF2 Over A105?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At Remax Forge, our engineering team advises clients to specify ASTM A350 LF2 Class 1 in the following applications:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Thermometer className="text-[#D71920] w-4 h-4" /> Sub-Zero Geographical Locations
                </h4>
                <p className="text-xs text-slate-600">
                  Projects in Northern US, Canada, Central Asia, and high-altitude facilities where winter temperatures routinely drop below -20°C.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="text-emerald-600 w-4 h-4" /> Joule-Thomson Chilling Lines
                </h4>
                <p className="text-xs text-slate-600">
                  Natural gas expansion lines and pressure letdown stations where rapid gas decompression produces severe local freezing.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can ASTM A350 LF2 be used to replace ASTM A105?</h3>
                <p className="text-sm text-slate-600">
                  Yes. A350 LF2 has mechanical properties equal to or superior to A105 at ambient temperatures. Many oil & gas operators dual-certify or standardize on A350 LF2 Class 1 across their plant piping specs to avoid stocking duplicate warehouse inventory.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">What is the difference between A350 LF2 Class 1 and Class 2?</h3>
                <p className="text-sm text-slate-600">
                  Class 1 is standard low-temperature grade with Charpy impact testing at -46°C (-50°F) and minimum yield strength of 250 MPa (36 ksi). Class 2 has higher minimum yield strength (290 MPa / 42 ksi) but is impact tested at a higher temperature (-18°C / 0°F). Class 1 is used in &gt;95% of piping orders.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Sourcing A105 and A350 LF2 Forged Flanges</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge maintains extensive billet inventory of certified ASTM A105 and ASTM A350 LF2 Cl. 1 steels with complete EN 10204 3.1 MTC documentation and Charpy impact reports.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products/flanges/weld-neck-flange/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Weld Neck Flanges
                </Link>
                <Link to="/materials/carbon-steel-flanges/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Carbon Steel Grades
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Contact Sales Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default A105VsA350LF2;
