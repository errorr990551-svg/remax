import React from 'react';
import { Link } from 'react-router-dom';
import TrustBar from '../../components/common/TrustBar.jsx';

const Hardox400Vs450 = () => (
  <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans text-slate-900">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
      <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">Wear Plate Selection Guide</span>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Hardox 400 vs Hardox 450: Hardness, Toughness & Selection Guide</h1>
      <p className="text-slate-600 text-sm mb-6">Comparing Brinell hardness (BHN), impact toughness, weldability, bending, and cost efficiency between Hardox 400 and Hardox 450 wear plates for mining and cement industries.</p>
      <TrustBar className="my-6" />
      
      <div className="overflow-x-auto my-6">
        <table className="w-full text-xs text-left border-collapse border border-slate-200">
          <thead>
            <tr className="bg-[#0F172A] text-white">
              <th className="p-3 border">Property</th>
              <th className="p-3 border">Hardox 400</th>
              <th className="p-3 border">Hardox 450</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border font-bold">Nominal Hardness</td><td className="p-3 border">400 HBW (370-430 HBW)</td><td className="p-3 border font-bold text-[#D71920]">450 HBW (425-475 HBW)</td></tr>
            <tr><td className="p-3 border font-bold">Yield Strength</td><td className="p-3 border">1000 MPa</td><td className="p-3 border">1250 MPa</td></tr>
            <tr><td className="p-3 border font-bold">Impact Toughness (-40°C)</td><td className="p-3 border">45 J</td><td className="p-3 border">50 J</td></tr>
            <tr><td className="p-3 border font-bold">Service Life Multiplier</td><td className="p-3 border">Baseline (1.0x)</td><td className="p-3 border font-bold text-emerald-600">1.5x to 1.8x vs Hardox 400</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Link to="/product-details/hardox-plate/" className="inline-block bg-[#D71920] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg">Explore Hardox Plate Stock & Pricing</Link>
      </div>
    </div>
  </div>
);
export default Hardox400Vs450;
