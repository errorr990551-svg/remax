import React from 'react';
import TrustBar from '../../components/common/TrustBar.jsx';

const FlangeFaceTypesGuide = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Flange Engineering</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Flange Facing Types: Raised Face (RF), Flat Face (FF) & Ring Type Joint (RTJ)</h1>
      <p className="text-slate-600 text-sm mb-6">Detailed guide to flange facing finishes, serrations (125-250 AARH), metallic RTJ ring gaskets, and choosing the right seal face for high-pressure systems.</p>
      <TrustBar className="my-6" />
    </div>
  </div>
);
export default FlangeFaceTypesGuide;
