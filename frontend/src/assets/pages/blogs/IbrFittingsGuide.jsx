import React from 'react';
import TrustBar from '../../components/common/TrustBar.jsx';

const IbrFittingsGuide = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Indian Boiler Regulations</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">IBR Approved Pipe Fittings & Flanges Guide: Form III-A & Form III-C</h1>
      <p className="text-slate-600 text-sm mb-6">A complete procurement guide for IBR certified steam piping components in India. Requirements for Form III-A / III-C inspection documentation.</p>
      <TrustBar className="my-6" />
    </div>
  </div>
);
export default IbrFittingsGuide;
