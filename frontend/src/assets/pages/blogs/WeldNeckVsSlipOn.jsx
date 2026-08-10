import React from 'react';
import { Link } from 'react-router-dom';
import TrustBar from '../../components/common/TrustBar.jsx';

const WeldNeckVsSlipOn = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Flange Comparison</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Weld Neck vs. Slip-On Flange: Strength, Fatigue & Cost Analysis</h1>
      <p className="text-slate-600 text-sm mb-6">Comparing WNRF (Weld Neck) and SORF (Slip-On) flanges on fatigue strength, welding labor, stress distribution, and pressure applications.</p>
      <TrustBar className="my-6" />
      <div className="mt-8 flex gap-4 justify-center">
        <Link to="/products/flanges/weld-neck-flange/" className="bg-[#D71920] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg">Weld Neck Flanges</Link>
        <Link to="/products/flanges/slip-on-flange/" className="bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg">Slip-On Flanges</Link>
      </div>
    </div>
  </div>
);
export default WeldNeckVsSlipOn;
