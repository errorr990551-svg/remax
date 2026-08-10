import React from 'react';
import { Link } from 'react-router-dom';
import TrustBar from '../../components/common/TrustBar.jsx';

const FlangePressureClassGuide = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">ASME Flange Technical Guide</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Flange Pressure Class Guide: 150#, 300#, 600#, 900#, 1500# & 2500#</h1>
      <p className="text-slate-600 text-sm mb-6">Understanding ASME B16.5 pressure rating classes, working pressure-temperature ratings for Carbon Steel A105 and Stainless Steel F316L flanges.</p>
      <TrustBar className="my-6" />
      <div className="mt-8 text-center">
        <Link to="/products/flanges/weld-neck-flange/" className="inline-block bg-[#D71920] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg">View Weld Neck Flanges Stock</Link>
      </div>
    </div>
  </div>
);
export default FlangePressureClassGuide;
