import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const AsmeB165VsB1647 = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="ASME B16.5 vs B16.47 Flange Standard Guide | Remax Forge"
        description="ASME B16.5 vs ASME B16.47 comparison for piping engineers. Size limits (up to NPS 24 vs NPS 60), Series A vs Series B differences, and bolting requirements."
        keywords="ASME B16.5 vs ASME B16.47, large diameter flanges, Series A vs Series B, MSS SP-44 vs API 605, large bore flange manufacturer Mumbai"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">ASME B16.5 vs ASME B16.47</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Codes & Standards Engineering
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            ASME B16.5 vs. ASME B16.47: Complete Standards, Size & Series A vs. B Comparison
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Large-Diameter Engineering</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • ASME Codes Reference</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              When specifying steel pipe flanges for oil, gas, power, and water transmission pipelines, two primary American National Standards govern dimensions and pressure-temperature ratings: <strong>ASME B16.5</strong> and <strong>ASME B16.47</strong>. While they share similar pressure classes and metallurgies, their nominal size limits and dimensional profiles differ substantially—most notably the distinct divergence between <strong>Series A (MSS SP-44)</strong> and <strong>Series B (API 605)</strong>.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. The Fundamental Difference: Nominal Pipe Size (NPS) Range
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">Standard Bore Piping</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ASME B16.5</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Covers pipe flanges and flanged fittings from <strong>NPS 1/2 through NPS 24</strong> (DN 15 through DN 600).
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Ratings: Class 150#, 300#, 400#, 600#, 900#, 1500#, and 2500#</li>
                  <li>Flange Types: Weld Neck, Slip-On, Blind, Socket Weld, Threaded, Lap Joint</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-[#D71920] uppercase block mb-1">Large Diameter Piping</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ASME B16.47</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Covers large diameter steel flanges from <strong>NPS 26 through NPS 60</strong> (DN 650 through DN 1500).
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Ratings: Class 75#, 150#, 300#, 400#, 600#, and 900# (Series B limited to Class 75-300 in sizes &gt;36")</li>
                  <li>Flange Types: Restricted solely to <strong>Weld Neck and Blind Flanges</strong></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Series A vs. Series B: Which Large-Diameter Standard to Specify?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ASME B16.47 absorbed two previously competing industry standards, designating them as Series A and Series B. They are <strong>dimensionally incompatible</strong> and cannot be bolted together:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Characteristic</th>
                    <th className="p-3">ASME B16.47 Series A (MSS SP-44)</th>
                    <th className="p-3">ASME B16.47 Series B (API 605)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Originating Standard</td>
                    <td className="p-3 text-slate-700">MSS SP-44 (Pipeline Standard)</td>
                    <td className="p-3 text-slate-700">API 605 (Refinery / Compact Standard)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Flange Weight & Thickness</td>
                    <td className="p-3 font-bold text-slate-900">Heavier, thicker hub and body</td>
                    <td className="p-3 text-slate-700">Lighter, thinner, more compact</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Bolting Pattern</td>
                    <td className="p-3 text-slate-700">Fewer, larger diameter bolts</td>
                    <td className="p-3 text-slate-700">More numerous, smaller diameter bolts</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">External Bending Resistance</td>
                    <td className="p-3 font-bold text-emerald-700">Superior resistance to soil load & bending</td>
                    <td className="p-3 text-slate-700">Moderate; ideal for compact valve stations</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Common Industry Use</td>
                    <td className="p-3 font-bold text-[#D71920]">Cross-country oil/gas pipelines, offshore</td>
                    <td className="p-3 text-slate-700">Refinery units, tank farm headers, compact skid piping</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Procurement Warning: Series Mismatch
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The single biggest RFQ error in large bore piping is requesting an "ASME B16.47 NPS 36 Class 300 flange" without designating <strong>Series A or Series B</strong>. Because their bolt hole circles, bolt diameters, and overall outside diameters do not match, valve manufacturers and pipe fabricators cannot mate them in the field without costly on-site re-machining.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can you buy Slip-On or Socket Weld flanges in ASME B16.47?</h3>
                <p className="text-sm text-slate-600">
                  No. ASME B16.47 strictly standardizes only <strong>Weld Neck</strong> and <strong>Blind</strong> flanges. At nominal diameters of 26" to 60", slip-on or socket-weld joints cannot provide adequate fatigue resistance against pipeline flexure and internal pressure loads.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Which standard is preferred for pipeline valve connections?</h3>
                <p className="text-sm text-slate-600">
                  Most pipeline ball valves and check valves in sizes 26" and larger are built with end flanges conforming to <strong>ASME B16.47 Series A (MSS SP-44)</strong> because the heavier flange dimensions withstand pipeline settlement and soil movement without flange distortion.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Large Diameter Forged Flanges Up to 60"</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge manufactures heavy ring forgings and large-diameter flanges in ASME B16.47 Series A & B, ASTM A105, A350 LF2, and high-yield pipeline grades (F52, F60, F65, F70).
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/standards/asme-b16-47/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  ASME B16.47 Standards
                </Link>
                <Link to="/standards/asme-b16-5/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  ASME B16.5 Standards
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Request Large Bore Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AsmeB165VsB1647;
