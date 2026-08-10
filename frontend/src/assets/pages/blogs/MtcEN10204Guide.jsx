import React from 'react';
import TrustBar from '../../components/common/TrustBar.jsx';

const MtcEN10204Guide = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Quality Compliance</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Mill Test Certificates EN 10204 Explained: 2.1 vs 2.2 vs 3.1 vs 3.2</h1>
      <p className="text-slate-600 text-sm mb-6">What buyers and inspection engineers need to know about material test reports (MTR), heat code traceability, and third-party 3.2 certification.</p>
      <TrustBar className="my-6" />
    </div>
  </div>
);
export default MtcEN10204Guide;
