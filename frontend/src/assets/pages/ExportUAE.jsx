import React from 'react';
import { ShieldCheck, Truck, Globe, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustBar from '../components/common/TrustBar.jsx';

const ExportUAE = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 font-sans">
      
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Jebel Ali & Abu Dhabi Logistics Express
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Pipe Fittings, Flanges & Steel Plates Supplier to UAE
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              ISO 9001:2015 Mumbai manufacturer exporting ASME B16.5 flanges, buttweld fittings, and SSAB Hardox 400/450 wear plates directly to Dubai, Abu Dhabi, Sharjah, and Mussafah industrial zones.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
                  if (btn) btn.click();
                }}
                className="bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
              >
                Get Quote in AED / USD
              </button>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-white">UAE Export Guarantee</h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Certificate of Origin (COO) Attested</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> EN 10204 3.1 & 3.2 Inspection MTC</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Door-to-Door Freight to Dubai & Abu Dhabi</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> SGS / BV Third Party Inspection</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <TrustBar className="mb-12" />

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              Fast Shipping to Jebel Ali Port (3–7 Days)
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              With frequent sea freight sailings from Nhava Sheva (Mumbai) to Jebel Ali Port (Dubai) and Khalifa Port (Abu Dhabi), Remax Forge delivers critical piping components within 3 to 7 shipping days.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in Hardox 400/450 wear plates for UAE mining/quarrying and Class 150-2500 forged flanges for Abu Dhabi ADNOC oilfield projects.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Popular Products in Demand across UAE</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="p-2 bg-white rounded border border-slate-200 font-semibold">• Hardox 400 & 450 Wear Resistant Steel Plates</li>
              <li className="p-2 bg-white rounded border border-slate-200 font-semibold">• ASME B16.48 Spectacle Blinds & Figure-8 Spacer Rings</li>
              <li className="p-2 bg-white rounded border border-slate-200 font-semibold">• ASTM A105 & Stainless Steel Weld Neck / Slip-On Flanges</li>
              <li className="p-2 bg-white rounded border border-slate-200 font-semibold">• ASTM A335 P11 / P22 High Temp Alloy Steel Pipes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportUAE;
