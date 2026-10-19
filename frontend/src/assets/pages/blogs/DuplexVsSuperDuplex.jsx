import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ShieldCheck, CheckCircle2, Droplets } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const DuplexVsSuperDuplex = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Duplex vs Super Duplex Stainless Steel Guide | Remax"
        description="Duplex 2205 vs Super Duplex 2507 comparison. PREN numbers, pitting resistance, yield strength, seawater corrosion, and offshore piping specification."
        keywords="Duplex vs Super Duplex, 2205 vs 2507, PREN calculation, duplex stainless steel flanges, marine seawater piping, offshore oil and gas metallurgy"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Duplex vs Super Duplex</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Corrosion Engineering & Metallurgy
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Duplex vs. Super Duplex Stainless Steel: PREN, Strength & Corrosion Comparison
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Materials Laboratory</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • Norsok M-650 / ASTM A182</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              In severe offshore marine, chemical processing, and desalination environments, standard austenitic stainless steels like 304L and 316L are prone to chloride stress corrosion cracking (SCC) and localized pitting. Duplex stainless steels—featuring a dual-phase microstructure of roughly 50% austenite and 50% ferrite—solve this challenge. When specifying between <strong>Standard Duplex (UNS S31803 / S32205 / 2205)</strong> and <strong>Super Duplex (UNS S32750 / 2507 / Zeron 100)</strong>, engineers must evaluate pitting resistance, temperature limits, and budget trade-offs.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. Understanding PREN: The Pitting Resistance Equivalent Number
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Pitting resistance in chloride-bearing environments is quantified by the PREN index formula:
            </p>
            <div className="bg-slate-100 p-4 rounded-xl text-center font-mono text-sm text-slate-800 my-4 not-prose border border-slate-200">
              PREN = %Cr + 3.3(%Mo + 0.5%W) + 16(%N)
            </div>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>
                <strong>Duplex 2205 (F51 / F60):</strong> Typically achieves a PREN between <strong>34 and 36</strong>. Outstanding resistance in brackish water, moderate chloride streams, and sour crude.
              </li>
              <li>
                <strong>Super Duplex 2507 (F53 / F55):</strong> Strictly guaranteed to achieve a <strong>PREN ≥ 40 or 42</strong>. Mandatory for warm, raw seawater piping and subsea manifolds where chlorination or stagnation accelerates pitting.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Chemical Composition & Mechanical Property Comparison
            </h2>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Specification</th>
                    <th className="p-3">Standard Duplex 2205 (F51/F60)</th>
                    <th className="p-3">Super Duplex 2507 (F53/S32750)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">UNS Number</td>
                    <td className="p-3 text-slate-700">UNS S31803 / S32205</td>
                    <td className="p-3 font-bold text-[#D71920]">UNS S32750</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Chromium (Cr) %</td>
                    <td className="p-3 text-slate-700">22.0 – 23.0%</td>
                    <td className="p-3 text-slate-700">24.0 – 26.0%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Molybdenum (Mo) %</td>
                    <td className="p-3 text-slate-700">3.0 – 3.5%</td>
                    <td className="p-3 text-slate-700">3.0 – 5.0%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Nitrogen (N) %</td>
                    <td className="p-3 text-slate-700">0.14 – 0.20%</td>
                    <td className="p-3 text-slate-700">0.24 – 0.32%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Min Yield Strength (0.2%)</td>
                    <td className="p-3 font-bold text-slate-900">450 MPa (65 ksi)</td>
                    <td className="p-3 font-bold text-emerald-700">550 MPa (80 ksi)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Min Tensile Strength</td>
                    <td className="p-3 text-slate-700">620 MPa (90 ksi)</td>
                    <td className="p-3 text-slate-700">750 MPa (116 ksi)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Weight Savings Advantage
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Because Super Duplex 2507 has over double the yield strength of conventional 316L (550 MPa vs. 205 MPa), piping designers can specify thinner pipe walls (e.g., Schedule 10S or 40S instead of Schedule 80S). On offshore topside platforms, this wall-thinning effect can reduce topside piping tonnage by 30% to 50%, resulting in millions of dollars in structural support savings.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              4. Selection Rule of Thumb
            </h2>
            <div className="space-y-4 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5" /> Choose Duplex 2205 when:
                </h4>
                <p className="text-sm text-slate-600">
                  Chlorides are below 10,000 ppm at moderate temperatures; sour gas pipelines with H2S under NACE MR0175; wastewater treatment lines; and chemical processing equipment where budget does not justify premium super duplex pricing.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> Choose Super Duplex 2507 when:
                </h4>
                <p className="text-sm text-slate-600">
                  Direct seawater exposure (intakes, ballast lines, high-pressure RO desalination membranes); subsea oil & gas umbilicals and manifolds; hot aggressive organic acids; and systems requiring Norsok M-650 qualification.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">What is the upper temperature limit for duplex stainless steel?</h3>
                <p className="text-sm text-slate-600">
                  Both Duplex 2205 and Super Duplex 2507 are restricted to maximum operating temperatures of 250°C to 280°C (approx. 500°F). Sustained exposure beyond 300°C causes 475°C embrittlement, where intermetallic sigma and chi phases precipitate, severely reducing impact toughness.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can you weld Duplex 2205 to 2507?</h3>
                <p className="text-sm text-slate-600">
                  Yes. When joining Duplex to Super Duplex, standard welding practice uses a 2507 over-alloyed filler metal (e.g. 25.10.4.L) to ensure the weld metal achieves acceptable ferrite-austenite balance and PREN properties.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Order Certified Duplex & Super Duplex Forgings</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge manufactures ASTM A182 F51, F53, F55, and F60 forged flanges with ferrite phase count verification (35-55%), ASTM G48 ferric chloride corrosion testing, and EN 10204 3.1 MTC.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/materials/duplex-2205-flanges/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Duplex 2205 Flanges
                </Link>
                <Link to="/materials/super-duplex-2507-flanges/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Super Duplex 2507 Flanges
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Request RFQ
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DuplexVsSuperDuplex;
