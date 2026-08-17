import React from 'react';
import IndustryCommonContent from '../../components/industries/IndustryCommonContent.jsx';
import { industriesData } from '../../data/industriesData.js';

const OilAndGasIndustry = () => {
  const industry = industriesData['oil-and-gas'];
  if (!industry) return <div className="p-8 text-center text-slate-600">Industry sector loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl shadow-xl border-l-8 border-[#D71920]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-2">Industry Application Guide</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{industry.h1}</h1>
          <p className="text-slate-300 mt-3 text-base md:text-lg max-w-3xl">{industry.metaDesc}</p>
        </header>

        <IndustryCommonContent industry={industry} />
      </div>
    </div>
  );
};

export default OilAndGasIndustry;
