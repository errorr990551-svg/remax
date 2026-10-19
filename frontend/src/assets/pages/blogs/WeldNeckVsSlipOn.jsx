import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const WeldNeckVsSlipOn = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Weld Neck vs Slip-On Flange: Strength & Cost Guide | Remax"
        description="Compare Weld Neck (WNRF) vs Slip-On (SORF) flanges. Analysis of fatigue strength, welding costs, pressure limits (ASME B16.5), and engineering selection."
        keywords="weld neck vs slip on flange, WNRF vs SORF, ASME B16.5 flanges, flange fatigue strength, flange cost comparison, piping engineering"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Weld Neck vs Slip-On Flange</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Flange Engineering & Selection
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Weld Neck vs. Slip-On Flange: Strength, Fatigue, Cost & Application Analysis
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge & Fittings Technical Team</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • ASME B16.5 Reference</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              When designing piping systems under ASME B31.3 or ASME B16.5, selecting between a <strong>Weld Neck Flange (WNRF)</strong> and a <strong>Slip-On Flange (SORF)</strong> is one of the most critical engineering and procurement decisions. While both connect pipes to valves, vessels, and equipment, their mechanical performance, fatigue endurance, welding labor, and total installation costs differ substantially.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. Fundamental Design Differences
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The primary physical difference lies in the hub geometry and the method of pipe attachment:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Weld Neck Flange (WN)</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Features a long, tapered hub that matches the outer diameter and schedule (bore) of the connecting pipe. It is attached via a single full-penetration butt weld.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Smooth stress transition from flange to pipe</li>
                  <li>100% volumetric NDT (radiography/ultrasonic) inspectable</li>
                  <li>Matches pipe ID, eliminating turbulent flow erosion</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Slip-On Flange (SO)</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Slides over the outside of the pipe. The pipe end is set back approximately 1/4" to 3/8" from the flange face and secured by two fillet welds (one inside, one outside).
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Simpler alignment during field fit-up</li>
                  <li>Fillet welds cannot be radiographed (PT/MT only)</li>
                  <li>Crevice between pipe OD and flange bore invites corrosion</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Structural Strength and Fatigue Life Comparison
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under internal hydrostatic pressure, a slip-on flange has calculated burst strength roughly comparable to a weld neck flange. However, under <strong>external bending moments, mechanical vibration, thermal cycling, and pressure pulsation</strong>, their fatigue behaviors diverge drastically:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0F172A] text-white">
                  <tr>
                    <th className="p-3">Mechanical Parameter</th>
                    <th className="p-3">Weld Neck Flange (WNRF)</th>
                    <th className="p-3">Slip-On Flange (SORF)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Fatigue Endurance</td>
                    <td className="p-3 font-bold text-emerald-700">1.0 (Baseline Reference)</td>
                    <td className="p-3 text-amber-700 font-medium">~0.33 (1/3 of Weld Neck)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Stress Concentration Factor</td>
                    <td className="p-3 text-slate-700">Low (gradual tapered hub transition)</td>
                    <td className="p-3 text-slate-700">High (sharp corner at fillet weld toe)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-800">Bending Moment Resistance</td>
                    <td className="p-3 text-slate-700">Superior across Class 150 to 2500#</td>
                    <td className="p-3 text-slate-700">Limited; generally restricted to Class 150-300#</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Radiographic Examination (RT)</td>
                    <td className="p-3 text-slate-700">Fully compliant with ASME B31.3 100% RT</td>
                    <td className="p-3 text-slate-700">Not possible; relies on Magnetic Particle (MT) or Dye Penetrant (PT)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              3. Procurement vs. Installation Cost Analysis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Piping estimators frequently make the mistake of looking only at the initial purchase price of the forging. A true Total Installed Cost (TIC) calculation reveals the full economics:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-600">
              <li>
                <strong>Initial Purchase Price:</strong> A slip-on flange forging is typically 20% to 35% cheaper than a weld neck flange of the same nominal size and pressure rating because it uses less raw forged steel.
              </li>
              <li>
                <strong>Welding Labor & Consumables:</strong> A slip-on flange requires <em>two fillet welds</em> (inner bore fillet and outer hub fillet). A weld neck flange requires only <em>one butt weld</em>. In larger pipe sizes (DN 200 / 8" and above), the double fillet welding labor frequently wipes out the initial material savings.
              </li>
              <li>
                <strong>Fit-up & Alignment:</strong> Slip-on flanges require less precision in pipe cutting since the pipe slides inside. Weld neck flanges require precise beveling and pipe squareness to ensure uniform root opening (2-3 mm) per AWS D1.1.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              4. Engineering Selection Guidelines: When to Choose Which
            </h2>
            <div className="space-y-4 my-6 not-prose">
              <div className="p-5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5" /> Mandatory Applications for Weld Neck Flanges
                </h4>
                <p className="text-sm text-slate-600">
                  ASME Class 600#, 900#, 1500#, and 2500# systems; severe cyclic temperature or pressure swings; cryogenic and elevated temperature service (&gt; 400°C); hazardous, lethal, or toxic fluids (Category M fluid service under ASME B31.3); high vibration lines near pump discharges or compressor manifolds.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-blue-500 bg-blue-50/50">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> Recommended Applications for Slip-On Flanges
                </h4>
                <p className="text-sm text-slate-600">
                  Low-pressure utility lines (firewater, cooling water, compressed air, low-pressure steam); ASME Class 150# and 300# non-critical services; compact space installations where straight pipe run does not permit a long tapered hub; budget-sensitive commercial HVAC and municipal piping.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can you mix weld neck and slip-on flanges on the same pipeline?</h3>
                <p className="text-sm text-slate-600">
                  Yes, provided each flange meets the design pressure, temperature, and joint rating of its specific piping class. For example, a weld neck flange is commonly used on a high-pressure pump discharge nozzle, transitioning into slip-on flanges further downstream where operating pressures and vibrations dissipate.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Does choosing slip-on vs weld neck affect gasket selection?</h3>
                <p className="text-sm text-slate-600">
                  Both flange types use standard ASME B16.5 facing dimensions (Raised Face 125-250 AARH or Ring Type Joint). Spiral wound gaskets, Kammprofile, and ring joint gaskets function identically on both, provided the flange face finish and bolt torque adhere to ASME PCC-1 guidelines.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Order ASME B16.5 Forged Flanges Factory-Direct</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge & Fittings manufactures both Weld Neck and Slip-On forged flanges in Carbon Steel (A105), Low-Temp (A350 LF2), Stainless Steel (304/316L), and Duplex with 100% PMI and EN 10204 3.1 certification.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products/flanges/weld-neck-flange/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Weld Neck Flanges
                </Link>
                <Link to="/products/flanges/slip-on-flange/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Slip-On Flanges
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Request Custom Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeldNeckVsSlipOn;
