import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, Gauge, ShieldCheck, CheckCircle2 } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const FlangePressureClassGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Flange Pressure Classes: 150# to 2500# Guide | Remax"
        description="ASME B16.5 flange pressure classes explained: 150, 300, 600, 900, 1500, and 2500#. Pressure-temperature ratings, hydrostatic test rules, and selection."
        keywords="Flange pressure classes, ASME B16.5 pressure ratings, Class 150 vs Class 300, 600# flange pressure limit, flange pressure temperature derating"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Flange Pressure Class Guide</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            ASME B16.5 Engineering Reference
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Flange Pressure Classes Explained: Complete Guide to Class 150, 300, 600, 900, 1500 & 2500#
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Piping Applications Group</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • ASME B16.5 / B16.47</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              A common misconception among beginner piping designers is that a "Class 150#" or "Class 300#" flange has an operating limit of exactly 150 psi or 300 psi. Under <strong>ASME B16.5</strong>, a flange's pressure class is a dimensionless designation representing a standardized envelope of <strong>pressure-temperature (P-T) ratings</strong>. The actual maximum allowable working pressure (MAWP) depends on operating temperature and alloy metallurgy.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. The Seven Standard ASME B16.5 Pressure Classes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ASME B16.5 standardizes flanges from NPS 1/2 through NPS 24 in seven primary pressure classes:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-6 not-prose text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">150#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 285 psi ambient</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">300#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 740 psi ambient</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">400#</h4>
                <p className="text-xs text-slate-600 mt-1">Rarely specified</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">600#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 1480 psi ambient</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">900#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 2220 psi ambient</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">1500#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 3705 psi ambient</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 uppercase font-semibold">Class</span>
                <h4 className="text-xl font-extrabold text-[#D71920]">2500#</h4>
                <p className="text-xs text-slate-600 mt-1">Up to 6170 psi ambient</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Temperature Derating: ASTM A105 Carbon Steel Example
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As operating temperature increases, material yield strength drops. Consequently, the allowable pressure falls significantly below the ambient rating:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Operating Temp</th>
                    <th className="p-3">Class 150# (psi)</th>
                    <th className="p-3">Class 300# (psi)</th>
                    <th className="p-3">Class 600# (psi)</th>
                    <th className="p-3">Class 900# (psi)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">-29°C to 38°C (-20°F to 100°F)</td>
                    <td className="p-3 font-bold text-emerald-700">285 psi</td>
                    <td className="p-3 font-bold text-emerald-700">740 psi</td>
                    <td className="p-3 font-bold text-emerald-700">1480 psi</td>
                    <td className="p-3 font-bold text-emerald-700">2220 psi</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">200°C (392°F)</td>
                    <td className="p-3 text-slate-700">200 psi</td>
                    <td className="p-3 text-slate-700">635 psi</td>
                    <td className="p-3 text-slate-700">1270 psi</td>
                    <td className="p-3 text-slate-700">1910 psi</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">300°C (572°F)</td>
                    <td className="p-3 text-slate-700">140 psi</td>
                    <td className="p-3 text-slate-700">570 psi</td>
                    <td className="p-3 text-slate-700">1145 psi</td>
                    <td className="p-3 text-slate-700">1715 psi</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">400°C (752°F)</td>
                    <td className="p-3 text-rose-700 font-medium">80 psi</td>
                    <td className="p-3 text-rose-700 font-medium">490 psi</td>
                    <td className="p-3 text-rose-700 font-medium">975 psi</td>
                    <td className="p-3 text-rose-700 font-medium">1465 psi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Hydrostatic Shell Test Pressures
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under ASME B16.5 paragraph 7, finished flanges must be capable of withstanding a factory hydrostatic proof test conducted at <strong>1.5 times the 38°C (100°F) pressure rating</strong> rounded to the next higher 25 psi increment:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>Class 150# Hydro Test: <strong>450 psi (31 bar)</strong></li>
              <li>Class 300# Hydro Test: <strong>1125 psi (77 bar)</strong></li>
              <li>Class 600# Hydro Test: <strong>2225 psi (153 bar)</strong></li>
              <li>Class 900# Hydro Test: <strong>3350 psi (231 bar)</strong></li>
              <li>Class 1500# Hydro Test: <strong>5575 psi (384 bar)</strong></li>
              <li>Class 2500# Hydro Test: <strong>9275 psi (639 bar)</strong></li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can you bolt a Class 150 flange to a Class 300 flange?</h3>
                <p className="text-sm text-slate-600">
                  No. The bolt circle diameter (BCD), bolt hole size, and number of bolts differ completely between pressure classes to intentionally prevent mismatched connections in the field.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Why are Class 400 flanges almost never used?</h3>
                <p className="text-sm text-slate-600">
                  Historically, Class 400 was introduced as an intermediate rating, but piping engineers found it more practical and cost-effective to standardize on Class 600 to minimize warehouse spares and simplify inventory management.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Order ASME B16.5 Flanges Across All Pressure Classes</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge manufactures Class 150# through 2500# forged flanges in size ranges from 1/2" to 48", fully hydro-tested and certified to EN 10204 3.1.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products/flanges/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Explore Flanges Catalog
                </Link>
                <Link to="/tech-info/dimension-chart/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Flange Dimension Chart
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Request Pricing
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FlangePressureClassGuide;
