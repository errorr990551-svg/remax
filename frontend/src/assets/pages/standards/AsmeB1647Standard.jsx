import React from 'react';
import StandardsCommonContent from '../../components/standards/StandardsCommonContent.jsx';
import { standardsData } from '../../data/standardsData.js';

const AsmeB1647Standard = () => {
  const standard = standardsData['asme-b16-47'];
  if (!standard) return <div className="p-8 text-center text-slate-600">Standard specification loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl shadow-xl border-l-8 border-[#D71920]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-2">Standard Specification</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{standard.h1}</h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-3xl">{standard.metaDesc}</p>
        </header>

        <StandardsCommonContent standard={standard} />
      </div>
    </div>
  );
};

export default AsmeB1647Standard;
