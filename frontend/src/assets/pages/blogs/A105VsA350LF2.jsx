import React from 'react';
import TrustBar from '../../components/common/TrustBar.jsx';

const A105VsA350LF2 = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Material Metallurgy</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">ASTM A105 vs. ASTM A350 LF2: Low Temperature Service Comparison</h1>
      <p className="text-slate-600 text-sm mb-6">Choosing carbon steel forged flanges for standard ambient service (A105) vs sub-zero low temperature service (A350 LF2 Class 1 Charpy V-notch tested).</p>
      <TrustBar className="my-6" />
    </div>
  </div>
);
export default A105VsA350LF2;
