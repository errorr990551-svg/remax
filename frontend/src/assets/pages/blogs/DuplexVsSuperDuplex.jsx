import React from 'react';
import TrustBar from '../../components/common/TrustBar.jsx';

const DuplexVsSuperDuplex = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Exotic Alloy Metallurgy</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Duplex Steel 2205 (F51) vs. Super Duplex 2507 (F53): PREN & Corrosion Guide</h1>
      <p className="text-slate-600 text-sm mb-6">Pitting Resistance Equivalent Number (PREN &gt; 40), offshore seawater resistance, strength comparison, and cost breakdown for exotic alloy piping.</p>
      <TrustBar className="my-6" />
    </div>
  </div>
);
export default DuplexVsSuperDuplex;
