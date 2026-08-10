import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustBar from '../components/common/TrustBar.jsx';

const OilGasLanding = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              NACE MR0175 / ISO 15156 Sour Service Certified
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Pipe Fittings & Flanges for Oil & Gas Industry
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer of high-pressure forged flanges, butt weld fittings, and heavy-wall alloy pipe fittings engineered for upstream, midstream, and downstream refinery operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
                  if (btn) btn.click();
                }}
                className="bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider"
              >
                Get Quote in 30 Min
              </button>
              <Link
                to="/brochure/"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-sm uppercase tracking-wider flex items-center gap-2 border border-slate-700"
              >
                <FileText className="w-4 h-4" /> Download Tech Catalog
              </Link>
            </div>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-white">Client Proof & Supply Approvals</h3>
            <p className="text-xs text-slate-300 mb-4">
              Trusted by major oil & gas EPCs and national petroleum corporations across India, UAE, Saudi Arabia, and USA.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">ONGC Approved</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">HPCL & IOCL</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">L&T Energy</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">NRL & EIL Specs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <TrustBar className="mb-12" />

        {/* Industry Sectors */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 text-center">
            Piping Solutions Across Oil & Gas Value Chain
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">1. Upstream Offshore & Drilling</h3>
              <p className="text-xs text-slate-600 mb-4">
                High-pressure Class 1500 to 2500 Weld Neck flanges, Spectacle Blinds, and Duplex/Super Duplex fittings resistant to sour gas (H2S) stress corrosion cracking.
              </p>
              <Link to="/products/flanges/weld-neck-flange/" className="text-xs font-bold text-[#D71920] flex items-center gap-1 hover:underline">
                Explore Weld Neck Flanges <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">2. Midstream Pipeline Transmission</h3>
              <p className="text-xs text-slate-600 mb-4">
                Seamless MSS SP-75 high-yield butt weld elbows, tees, and concentric/eccentric reducers engineered for long-distance oil and natural gas cross-country pipelines.
              </p>
              <Link to="/products/buttweld-fittings/butt-weld-elbow-fittings/" className="text-xs font-bold text-[#D71920] flex items-center gap-1 hover:underline">
                Explore Pipeline Fittings <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">3. Downstream Refinery & Petrochemical</h3>
              <p className="text-xs text-slate-600 mb-4">
                Chrome Moly ASTM A335 P11/P22/P91 alloy steel pipes and ASTM A234 WP91 fittings for high-temperature hydrocracker and fluid catalytic cracking units.
              </p>
              <Link to="/products/pipes/alloy-steel-pipes/" className="text-xs font-bold text-[#D71920] flex items-center gap-1 hover:underline">
                Explore Alloy Steel Pipes <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* Material Capabilities & Quality Assurance */}
        <div className="bg-[#0F172A] text-white p-8 md:p-12 rounded-3xl mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                Strict Quality & Material Traceability
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                Every refinery shipment is supplied with EN 10204 3.1 or 3.2 Mill Test Certificates (MTC), NACE MR0175 / ISO 15156 sour service compliance, 100% PMI testing, and Hydrostatic test reports.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="w-4 h-4 text-[#D71920]" /> ASTM A105 / A105N</div>
                <div className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="w-4 h-4 text-[#D71920]" /> ASTM A182 F304L / F316L</div>
                <div className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="w-4 h-4 text-[#D71920]" /> ASTM A182 F51 / F53 Duplex</div>
                <div className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="w-4 h-4 text-[#D71920]" /> ASTM A350 LF2 Class 1</div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Need Sour-Service RFQ Quote?</h3>
              <p className="text-xs text-slate-300 mb-6">
                Send us your project spec sheet or MTO list. We provide written factory quotes within 30 minutes.
              </p>
              <button
                onClick={() => {
                  const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
                  if (btn) btn.click();
                }}
                className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
              >
                Submit Project Requirement
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions (Oil & Gas Piping)</h2>
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">What standards govern oil & gas pipe fittings and flanges?</h3>
              <p className="text-slate-600">Oil & gas piping systems are designed to ASME B16.5 (flanges up to 24"), ASME B16.47 (large diameter flanges 26"-60"), ASME B16.9 (butt weld fittings), and ASME B16.11 (forged socket weld/threaded fittings).</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">What does NACE MR0175 sour service compliance mean?</h3>
              <p className="text-slate-600">NACE MR0175 / ISO 15156 restricts hardness levels and chemistry in metallic materials to prevent sulfide stress cracking (SSC) and hydrogen-induced cracking (HIC) in environments containing hydrogen sulfide (H2S).</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">Do you provide third-party inspection (TPI) like SGS or Bureau Veritas?</h3>
              <p className="text-slate-600">Yes, we regularly host TPI agencies (SGS, TUV, Bureau Veritas, DNV) for EN 10204 3.2 inspection witnessing on international oil & gas export orders.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default OilGasLanding;
