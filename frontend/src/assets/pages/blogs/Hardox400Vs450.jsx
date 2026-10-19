import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, Shield, CheckCircle2, Hammer } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const Hardox400Vs450 = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Hardox 400 vs Hardox 450: Wear Plate Comparison | Remax"
        description="Hardox 400 vs Hardox 450 wear plate comparison: Brinell hardness, yield strength, impact toughness, weldability, and heavy mining liner service life."
        keywords="Hardox 400 vs Hardox 450, abrasion resistant steel plate, wear plate comparison, Brinell hardness steel, mining excavator liner plate, Hardox supplier India"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Hardox 400 vs Hardox 450</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Abrasion Resistant Wear Plate Metallurgy
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Hardox 400 vs. Hardox 450: Hardness, Impact Toughness & Wear Life Comparison
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Special Steels & Plate Division</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • Wear Resistant Steel Metallurgy</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              In heavy mining, quarrying, cement manufacturing, and material handling applications, equipment components face continuous gouging, scraping, and sliding abrasion. <strong>Hardox 400</strong> and <strong>Hardox 450</strong> are the two most prominent quenched and tempered abrasion-resistant (AR) steels globally. While separated by an apparent difference of just 50 Brinell hardness points, their mechanical performance, service longevity, and fabrication behaviors differ significantly.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. Hardness & Service Life: The Extra 50 HBW Advantage
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wear life does not scale linearly with hardness—it scales exponentially under abrasive sliding conditions. Hardox 450 provides an average of <strong>50% longer wear life</strong> than Hardox 400 in pure sliding abrasion:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">General All-Round Wear Plate</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hardox 400</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Delivers a nominal hardness of <strong>400 HBW (range 370–430 HBW)</strong>. Outstanding bendability, weldability, and structural strength.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Yield Strength: ~1000 MPa (145 ksi)</li>
                  <li>Tensile Strength: 1250 MPa (181 ksi)</li>
                  <li>Can serve simultaneously as a structural load-bearing member</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">High-Endurance Wear Steel</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hardox 450</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Delivers a nominal hardness of <strong>450 HBW (range 425–475 HBW)</strong>. The industry benchmark for dump truck bodies and excavator buckets.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Yield Strength: ~1200 MPa (174 ksi)</li>
                  <li>Tensile Strength: 1400–1600 MPa (203–232 ksi)</li>
                  <li>Enables significant payload weight reduction</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Chemical Composition & Mechanical Property Comparison
            </h2>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Property</th>
                    <th className="p-3">Hardox 400</th>
                    <th className="p-3">Hardox 450</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Brinell Hardness (HBW)</td>
                    <td className="p-3 text-slate-700">370 – 430 HBW</td>
                    <td className="p-3 font-bold text-[#D71920]">425 – 475 HBW</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Carbon (C) % max</td>
                    <td className="p-3 text-slate-700">0.32%</td>
                    <td className="p-3 text-slate-700">0.26% (Modern low-carbon metallurgy)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Typical Carbon Equivalent (CET)</td>
                    <td className="p-3 text-slate-700">0.28 – 0.38</td>
                    <td className="p-3 text-slate-700">0.29 – 0.37</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Charpy-V Impact Energy (-40°C)</td>
                    <td className="p-3 font-bold text-emerald-700">45 Joules (33 ft-lbs)</td>
                    <td className="p-3 font-bold text-emerald-700">40 Joules (30 ft-lbs)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Minimum Punch Radius (Bending)</td>
                    <td className="p-3 text-slate-700">3.0 x Plate Thickness (t)</td>
                    <td className="p-3 text-slate-700">4.0 x Plate Thickness (t)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Weight Savings Through Down-Gauging
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Because Hardox 450 has roughly 20% higher yield strength and greater wear endurance than Hardox 400, engineers designing tipper truck bodies and concrete mixer drums frequently substitute an 8 mm Hardox 400 plate with a 6 mm Hardox 450 plate. This <strong>25% weight reduction</strong> cuts empty vehicle tare weight, boosts payload capacity, and reduces diesel consumption over hundreds of thousands of haul cycles.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can Hardox 400 and Hardox 450 be welded with standard welding wire?</h3>
                <p className="text-sm text-slate-600">
                  Yes. Both grades can be welded to standard mild or high-strength steel using standard unalloyed or low-alloy GMAW/SMAW consumables (e.g. AWS E7018 or ER70S-6). Preheating is generally not required for plate thicknesses under 20 mm, provided ambient temperature is above 5°C and low-hydrogen practices are maintained.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">What is the maximum operating temperature for Hardox steel?</h3>
                <p className="text-sm text-slate-600">
                  Hardox 400 and 450 are quenched and tempered martensitic steels. Exposure to temperatures exceeding 250°C (482°F) will temper the microstructure, permanently reducing hardness and wear resistance. For high-temperature abrasive service (up to 500°C), specialized grades like Hardox HiTemp are required.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Sourcing Certified Wear & Boiler Plates</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge supplies genuine, fully certified abrasion-resistant wear plates and boiler quality plates cut to custom profiles with complete mill test certificates.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/product-details/hardox-plate/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Hardox Plate Specifications
                </Link>
                <Link to="/product-details/boiler-quality-plate/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Boiler Quality Plate
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Get a Custom Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardox400Vs450;
