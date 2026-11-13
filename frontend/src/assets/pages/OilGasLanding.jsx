import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustBar from '../components/common/TrustBar.jsx';
import { useQuotePopup } from '../context/QuotePopupContext';

const serviceTable = [
  { service: 'Wellhead, flowlines and manifolds', parts: 'Weld neck and blind flanges Class 900–2500, RTJ facing; 3000# / 6000# / 9000# forged fittings', material: 'A105N, A350 LF2 (low temp), A182 F51 / F53 duplex for sour or CO2 service', url: '/products/flanges/high-pressure-flange-manufacturer/' },
  { service: 'Sour gas (H2S) lines', parts: 'Flanges and fittings supplied to NACE MR0175 / ISO 15156 hardness limits (22 HRC max for carbon steel)', material: 'A105N (HIC-tested on request), A182 F316L, duplex F51', url: '/products/flanges/sour-service-nace-flange/' },
  { service: 'Cross-country pipelines', parts: 'High-yield butt weld elbows, tees and reducers; matching weld neck flanges', material: 'MSS SP-75 WPHY 42 / 52 / 60 / 65, A234 WPB', url: '/products/buttweld-fittings/butt-weld-elbow-fittings/' },
  { service: 'Refinery and petrochemical units', parts: 'Flanges, butt weld fittings and seamless pipe for high-temperature hydrogen and steam service', material: 'A182 F11 / F22 / F91, A234 WP11 / WP22 / WP91, A335 P11 / P22 / P91', url: '/products/pipes/alloy-steel-pipes/' },
  { service: 'Offshore platforms and FPSO', parts: 'Spectacle blinds, spades and spacers, weld neck flanges, socket weld fittings for utility lines', material: 'A350 LF2, A182 F316L, duplex and super duplex', url: '/products/flanges/spectacle-blind-flange/' },
];

const rfqList = [
  'Line class or piping spec sheet (or the P&ID line number)',
  'Size, schedule and pressure class per line, with quantities',
  'Material grade and any supplementary requirements: NACE, HIC, impact test temperature, PWHT',
  'Inspection level: 3.1 MTC only, or 3.2 with a named TPI agency',
  'Delivery point and required-on-site date',
];

const OilGasLanding = () => {
  const { openQuotePopup } = useQuotePopup();
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Sour Service to NACE MR0175 / ISO 15156 on Request
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Pipe Fittings & Flanges for Oil & Gas Industry
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer of high-pressure forged flanges, butt weld fittings, and heavy-wall alloy pipe fittings engineered for upstream, midstream, and downstream refinery operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={openQuotePopup}
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
            <h3 className="text-xl font-bold mb-3 text-white">Specifications We Supply To</h3>
            <p className="text-xs text-slate-300 mb-4">
              We quote and manufacture to the piping specifications used by Indian and Gulf oil & gas owners and their EPC contractors, with full heat traceability.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">ONGC & OIL specs</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">IOCL, HPCL, BPCL specs</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">EIL standard specs</div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-center">ADNOC & Aramco grades</div>
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

        {/* What to buy for which service */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 text-center">
            What to Specify for Each Service
          </h2>
          <p className="text-slate-600 text-sm md:text-base text-center max-w-3xl mx-auto mb-8">
            The combinations below are what oil & gas buyers most often order from us. Each row links to the product page with full dimensions and grades.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Service</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Typical Parts</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Materials</th>
                </tr>
              </thead>
              <tbody>
                {serviceTable.map((r, i) => (
                  <tr key={r.service} className={`border-b border-slate-200 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <td className="px-5 py-4 font-bold text-[#0F172A] align-top"><Link to={r.url} className="hover:text-[#D71920] hover:underline underline-offset-2">{r.service}</Link></td>
                    <td className="px-5 py-4 text-slate-600 align-top leading-relaxed">{r.parts}</td>
                    <td className="px-5 py-4 text-slate-600 align-top leading-relaxed">{r.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RFQ checklist + commercial terms */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">What to Send With Your RFQ</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {rfqList.map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" /> {x}</li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">A complete MTO is quoted line by line in writing, usually within 30 minutes during working hours.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">Lead Time, Pricing and Delivery</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" /> Ex-stock carbon and stainless sizes dispatch from Mumbai in 24–48 hours; alloy, duplex and NACE-tested lots typically 7–14 days.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" /> Prices quoted ex-works Mumbai, delivered to site in India, or FOB Nhava Sheva / CIF for export.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" /> Every lot ships with EN 10204 3.1 MTC; 3.2 certificates with SGS, BV, TUV or DNV witness when specified.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" /> Works audit in person or by video call before you place a first order.</li>
            </ul>
            <button onClick={openQuotePopup} className="mt-6 w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider">
              Request a Quote
            </button>
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
                onClick={openQuotePopup}
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
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">What is the lead time for sour-service flanges and fittings?</h3>
              <p className="text-slate-600">Standard A105N and 316L items in common sizes ship from stock in 24–48 hours. Lots that need NACE hardness testing, HIC testing or impact testing at low temperature are typically dispatched in 7–14 days after order, because the tests are done on the actual heat supplied.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">Can one order combine flanges, fittings and pipe in the same grade?</h3>
              <p className="text-slate-600">Yes. Flanges, butt weld fittings, forged fittings and alloy pipe are supplied from the same Mumbai works, so a complete line class can be shipped together with one set of test certificates and one packing list.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">Which pressure classes and sizes do you cover?</h3>
              <p className="text-slate-600">Flanges from 1/2" to 48" in Class 150 to 2500 (ASME B16.5 and B16.47), butt weld fittings from 1/2" to 48" in schedules 10 to XXS, and forged socket weld or threaded fittings from 1/8" to 4" in 2000#, 3000#, 6000# and 9000#.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default OilGasLanding;
