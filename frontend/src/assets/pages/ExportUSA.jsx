import React from 'react';
import { ShieldCheck, Truck, Globe, CheckCircle } from 'lucide-react';
import TrustBar from '../components/common/TrustBar.jsx';

const ExportUSA = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 font-sans">
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Houston / Texas Freight & Port Supply
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              ASME B16.5 / B16.9 Pipe Fittings Supplier to USA
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer exporting high-quality forged steel flanges, butt weld elbows, and alloy piping components to Houston, Texas, Gulf Coast refineries, and Midwest industrial hubs.
            </p>
            <button
              onClick={() => {
                const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
                if (btn) btn.click();
              }}
              className="bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
            >
              Request US Quote in USD
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-white">US Compliance Standards</h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> ASME / ASTM Material Specifications</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> EN 10204 3.1 Mill Test Certificates (MTC)</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Positive Material Identification (PMI) Test</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> ThomasNet Listed Manufacturer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <TrustBar className="mb-12" />
        
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Direct Export to Houston, Texas & Gulf Coast</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            We provide seamless sea & air logistics, palletized seaworthy packaging, and transparent custom documentation for American distributors, EPC contractors, and OEM equipment fabricators.
          </p>
          <button
            onClick={() => {
              const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
              if (btn) btn.click();
            }}
            className="bg-[#D71920] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md"
          >
            Get Written US Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExportUSA;
