import React from 'react';
import MaterialCommonContent from '../../components/materials/MaterialCommonContent.jsx';
import { materialsData } from '../../data/materialsData.js';

const Duplex2205Flanges = () => {
  const material = materialsData['duplex-2205-flanges'];
  if (!material) return <div className="p-8 text-center text-slate-600">Material specification loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl shadow-xl border-l-8 border-[#D71920]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-2">Material Grade Specification</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{material.h1}</h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-3xl">{material.metaDesc}</p>
        </header>

        <MaterialCommonContent material={material} />
      </div>
    </div>
  );
};

export default Duplex2205Flanges;
