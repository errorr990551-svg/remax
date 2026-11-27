import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Home, ChevronRight, MapPin } from 'lucide-react';
import { INDIA_STATE_HUBS } from '../data/indiaStateHubs.js';
import { INDIA_STATES } from '../data/indiaStates.js';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import FlangeRfqBlock from '../components/common/FlangeRfqBlock.jsx';
import { PageSchema, faqSchema } from '../components/common/usePageSchema.js';

const PRODUCT_LINKS = [
  ['/products/flanges/weld-neck-flange/', 'Weld neck flanges'],
  ['/products/flanges/slip-on-flange/', 'Slip-on flanges'],
  ['/products/flanges/blind-flange/', 'Blind flanges'],
  ['/products/flanges/spectacle-blind-flange/', 'Spectacle blinds'],
  ['/standards/asme-b16-47/', 'ASME B16.47 large flanges'],
  ['/tech-info/dimensions/', 'Flange dimension tables'],
];

const IndiaStateHub = ({ slug }) => {
  const { openQuotePopup } = useQuotePopup();
  const hub = INDIA_STATE_HUBS[slug];
  if (!hub) return <Navigate to="/market-area/" replace />;
  const cities = INDIA_STATES.find((s) => s.name === hub.name)?.cities || [];
  const supply = {
    title: `Flange range we quote for ${hub.name}`,
    intro: `Sizes, classes and grades below are those listed on our flange product pages; anything else is quoted against your ${hub.name} project specification.`,
    items: [
      { label: 'Types', value: 'Weld neck, slip-on, blind, spectacle blind, socket weld, threaded, lap joint, RTJ and long weld neck' },
      { label: 'Dimension standards', value: 'ASME B16.5 (NPS ½"–24"), ASME B16.47 Series A/B (NPS 26"–60"), EN 1092-1 (PN6–PN400)' },
      { label: 'Rating range', value: 'Class 150 to 2500; PN6 to PN400' },
      { label: 'Face options', value: 'RF, FF, RTJ, tongue & groove, male & female' },
      { label: 'Certificates', value: 'EN 10204 3.1 MTC with heat number on each piece; 3.2 on request' },
      { label: 'Dispatch', value: `By road from Mumbai to your ${hub.name} site; lead time on the written quote` },
    ],
  };

  return (
    <main className="w-full bg-slate-50 text-slate-800">
      <div className="bg-slate-100 border-b border-slate-200">
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
            <li><Link to="/" aria-label="Home" className="hover:text-[#D71920]"><Home size={14} aria-hidden="true" /></Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li><Link to="/market-area/" className="hover:text-[#D71920]">Areas We Supply</Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-slate-900">{hub.name}</li>
          </ol>
        </nav>
      </div>

      <section className="bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{hub.h1}</h1>
          <p className="text-slate-200 max-w-3xl leading-relaxed mb-6">{hub.intro}</p>
          <button onClick={openQuotePopup} className="bg-[#D71920] hover:bg-[#B3141A] text-white font-bold px-6 py-3 rounded-lg">
            Get a Written Quote
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Where {hub.name} Buys Flanges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hub.sections.map((sec) => (
              <article key={sec.h} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{sec.h}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{sec.p}</p>
              </article>
            ))}
          </div>
        </section>

        {cities.length > 0 && (
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Flange Supply by City in {hub.name}</h2>
            <ul className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <li key={c.path}>
                  <Link to={c.path} className="inline-flex items-center gap-1 text-sm bg-slate-50 border border-slate-200 hover:border-[#D71920] hover:text-[#B3141A] px-3 py-1.5 rounded-lg">
                    <MapPin size={14} aria-hidden="true" /> Flanges in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <FlangeRfqBlock supply={supply} />

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Flange Supply in {hub.name}: Questions</h2>
          <div className="space-y-4">
            {hub.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <PageSchema schemas={[faqSchema(hub.faqs)]} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Products and References</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {PRODUCT_LINKS.map(([to, label]) => (
              <li key={to}><Link to={to} className="text-[#B3141A] underline">{label} for {hub.name}</Link></li>
            ))}
            <li><Link to="/market-area/" className="text-[#B3141A] underline">All states we supply</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default IndiaStateHub;
