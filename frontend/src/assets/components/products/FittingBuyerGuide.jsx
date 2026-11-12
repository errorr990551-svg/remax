import React from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, FileCheck2, Truck } from 'lucide-react';
import { useQuotePopup } from '../../context/QuotePopupContext';
import { fittingGuides, BW_FAMILY, SW_FAMILY } from '../../data/fittingGuides';

const familyMeta = {
  bw: { base: '/products/buttweld-fittings/', list: BW_FAMILY, label: 'Butt Weld Fittings', std: 'ASME B16.9 / MSS SP-75', size: 'Nominal size (NPS or DN) and wall schedule or thickness' },
  sw: { base: '/products/socket-weld-fittings/', list: SW_FAMILY, label: 'Socket Weld & Forged Fittings', std: 'ASME B16.11 / MSS SP-79 / SP-83 / SP-95', size: 'Nominal size (NPS) and pressure class (3000, 6000 or 9000) or pipe schedule' },
};

export const FittingIntro = ({ slug }) => {
  const g = fittingGuides[slug];
  if (!g) return null;
  return g.intro.map((p, i) => <p key={i}>{p}</p>);
};

const FittingBuyerGuide = ({ slug }) => {
  const { openQuotePopup } = useQuotePopup();
  const g = fittingGuides[slug];
  if (!g) return null;
  const fam = familyMeta[g.family];
  const rfq = [
    ...g.rfq,
    fam.size,
    'Material grade, plus NACE MR0175, impact testing or other supplementary requirements',
    `Standard (${fam.std}) and end preparation`,
    'Quantity per size',
    'Documents required: EN 10204 3.1 or 3.2, third-party inspection agency',
    'Delivery destination or port',
  ];

  return (
    <div className="mt-12 space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-5">Where {g.name}s Are Used</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {g.uses.map((u) => (
            <li key={u} className="flex gap-3 text-slate-700">
              <CheckCircle2 size={20} className="text-[#D71920] shrink-0 mt-0.5" />{u}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2 flex items-center gap-2"><ClipboardList className="text-[#D71920]" /> What to Include in Your {g.name} Enquiry</h2>
          <p className="text-slate-600 mb-5">A complete enquiry lets us send a written, itemised quote within 30 minutes during working hours.</p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            {rfq.map((r) => <li key={r}>{r}</li>)}
          </ol>
        </div>
        <div className="space-y-6">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2"><FileCheck2 size={20} className="text-[#D71920]" /> Inspection & Documents</h3>
            <p className="text-sm text-slate-600">Made under an ISO 9001:2015 quality system. Each lot ships with an EN 10204 3.1 certificate traceable to the heat number; 3.2 certification with SGS, BV, TUV or DNV inspection on request. 100% PMI on alloy and stainless lots.</p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2"><Truck size={20} className="text-[#D71920]" /> Lead Time & Dispatch</h3>
            <p className="text-sm text-slate-600">Common sizes and grades dispatch ex-stock in 24–48 hours. Made-to-order items typically take 7–14 days. Export orders are packed in seaworthy wooden cases and shipped from Nhava Sheva to 45+ countries.</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-slate-200 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-6">{g.name} FAQs</h2>
        <div className="space-y-5">
          {g.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold text-slate-900 mb-1">{f.q}</h3>
              <p className="text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-[#0F172A] mb-4">Other {fam.label}</h2>
        <div className="flex flex-wrap gap-3">
          {fam.list.filter((s) => s.slug !== slug).map((s) => (
            <a key={s.slug} href={`${fam.base}${s.slug}/`} className="px-4 py-2 rounded border border-slate-200 text-sm text-slate-700 hover:border-[#D71920] hover:text-[#D71920] transition-colors">{s.title}</a>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] text-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Get a {g.name} Price Today</h2>
          <p className="text-slate-300">Send your size, grade and quantity. We reply with price, stock position and delivery date.</p>
        </div>
        <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all flex items-center gap-2 shrink-0">
          Request Quote <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default FittingBuyerGuide;
