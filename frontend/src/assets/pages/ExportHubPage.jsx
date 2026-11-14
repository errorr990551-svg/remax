import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2, Factory, Award, Truck, ChevronDown, ChevronUp, Home, HelpCircle, ClipboardList, Scale } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';
import { exportHubsData } from '../data/exportHubsData.js';
import { exportHubContent } from '../data/exportHubContent.js';
import { exportCitiesData } from '../data/exportCitiesData.js';
import { FLANGE_TYPES, MATERIALS, RFQ_CHECKLIST, PRICE_FACTORS } from '../data/exportShared.js';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';

const STANDARD_LINKS = [
  ['/standards/asme-b16-5/', 'ASME B16.5'],
  ['/standards/asme-b16-47/', 'ASME B16.47'],
  ['/standards/en-1092-1/', 'EN 1092-1'],
  ['/standards/jis-b2220/', 'JIS B2220'],
];

const ExportHubPage = ({ slugOverride }) => {
  const { countrySlug } = useParams();
  const slug = slugOverride || countrySlug;
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const base = exportHubsData[slug];
  const content = exportHubContent[slug] || null;

  if (!base && !content) {
    return <Navigate to="/export/" replace />;
  }

  const hub = {
    ...(base || {}),
    ...(content ? { metaTitle: content.metaTitle, metaDescription: content.metaDescription, h1: content.h1 } : {}),
    country: content?.country || base?.country,
  };

  const countryCities = Object.values(exportCitiesData).filter((city) => city.countrySlug === slug);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const clientLogos = [
    "/images/1.webp", "/images/3.webp", "/images/4.webp", "/images/5.webp", "/images/6.webp", "/images/8.webp", "/images/9.webp", "/images/10.webp", "/images/11.svg", "/images/12.webp", "/images/13.webp", "/images/14.webp", "/images/15.webp", "/images/16.webp", "/images/17.webp", "/images/19.webp"
  ];

  const baseFaqs = [
    {
      q: `What certificates come with flanges exported to ${hub.country}?`,
      a: `Every heat is supplied with an EN 10204 3.1 mill test certificate. EN 10204 3.2, with tests witnessed by a third-party inspection agency you nominate, is available when ordered.`
    },
    {
      q: `Which export documents are supplied with a shipment to ${hub.country}?`,
      a: `A commercial invoice, packing list, certificate of origin, bill of lading and the EN 10204 3.1 MTC for each heat. Send any extra document your importer or bank needs with the order.`
    },
  ];
  const faqs = [...(content?.faqs || []), ...baseFaqs];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Remax Forge & Fittings",
    "url": "https://remaxforge.com",
    "logo": "https://remaxforge.com/images/REMAX_FORGE_AND_FITTINGS-01.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "description": hub.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="w-full font-sans bg-slate-50 min-h-screen text-slate-800">
      <MetaTags
        title={hub.metaTitle}
        description={hub.metaDescription}
        robots="index, follow"
      />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Header */}
      <div className="relative w-full bg-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <span>/</span>
            <Link to="/export/" className="hover:text-white">Where We Export</Link>
            <span>/</span>
            <span className="text-red-400 font-medium">{hub.country}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/30">
                <Globe size={14} /> Flange Export to {hub.country}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {hub.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                {content?.intro || `ISO 9001:2015 certified manufacturer supplying ASME B16.5, B16.47 and EN 1092-1 forged flanges from our Mumbai works to industrial projects in ${hub.country}.`}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => openQuotePopup(`Export Inquiry - ${hub.country}`)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  Get Flange Quote for {hub.country} <ArrowRight size={18} />
                </button>
                <button
                  onClick={openProductMenu}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg transition-all"
                >
                  Browse Flange Range
                </button>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
                <ShieldCheck className="text-red-500" size={20} /> Export Capabilities Overview
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Origin:</strong> Forged, machined and tested in Mumbai, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Standards:</strong> ASME B16.5, B16.47, EN 1092-1, JIS B2220</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Certification:</strong> EN 10204 3.1 MTC (3.2 when ordered), ISO 9001:2015</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Testing:</strong> PMI, UT and hydrostatic testing on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Country-specific content */}
        {content?.sections && (
          <section className="mb-12 bg-white rounded-2xl p-8 border border-slate-200 space-y-10">
            {content.sections.map((sec) => (
              <div key={sec.h2} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">{sec.h2}</h2>
                {(sec.paras || []).map((p) => <p key={p} className="text-slate-700 leading-relaxed">{p}</p>)}
                {sec.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200">
                      <thead className="bg-slate-100 text-slate-900"><tr>{sec.table.head.map((h) => <th key={h} className="p-3 text-left">{h}</th>)}</tr></thead>
                      <tbody>{sec.table.rows.map((r) => <tr key={r[0]} className="border-t border-slate-200 align-top">{r.map((c, i) => <td key={i} className={`p-3 ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{c}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
                {sec.list && (
                  <ul className="space-y-2">
                    {sec.list.map((li) => <li key={li} className="flex items-start gap-2 text-slate-700"><CheckCircle2 size={18} className="text-red-600 mt-0.5 shrink-0" />{li}</li>)}
                  </ul>
                )}
              </div>
            ))}
            {content.related && (
              <div className="pt-2 border-t border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Related pages</h3>
                <ul className="flex flex-wrap gap-4">
                  {content.related.map(([to, label]) => <li key={to}><Link to={to} className="text-sm text-red-600 hover:underline">{label}</Link></li>)}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Flange types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Flange Types Exported to {hub.country}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLANGE_TYPES.map((t) => (
              <Link key={t.to} to={t.to} className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 transition-all">
                <span className="font-semibold text-slate-900 group-hover:text-red-600">{t.name}</span>
                <p className="text-xs text-slate-600 mt-1">{t.use}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section className="mb-12 bg-white rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Material Grades</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100 text-slate-900"><tr><th className="p-3 text-left">Family</th><th className="p-3 text-left">Grades</th></tr></thead>
              <tbody>
                {MATERIALS.map((m) => (
                  <tr key={m.family} className="border-t border-slate-200">
                    <td className="p-3 font-semibold"><Link to={m.to} className="text-slate-900 hover:text-red-600">{m.family}</Link></td>
                    <td className="p-3 text-slate-700">{m.grades}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Dimensional standards: {STANDARD_LINKS.map(([to, label], i) => (
              <React.Fragment key={to}>{i > 0 && ', '}<Link to={to} className="text-red-600 hover:underline">{label}</Link></React.Fragment>
            ))}.
          </p>
        </section>

        {/* RFQ checklist and price factors */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><ClipboardList className="text-red-600" size={22} /> What to Send for a Flange Quote</h2>
            <ul className="space-y-2">
              {RFQ_CHECKLIST.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />{item}</li>)}
            </ul>
            <button
              onClick={() => openQuotePopup(`Export RFQ - ${hub.country}`)}
              className="mt-6 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm"
            >
              Send Your RFQ
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Scale className="text-red-600" size={22} /> What Drives Flange Price</h2>
            <dl className="space-y-3">
              {PRICE_FACTORS.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-semibold text-slate-900 text-sm">{k}</dt>
                  <dd className="text-sm text-slate-600">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* City Directory for this Country */}
        {countryCities.length > 0 ? (
          <section className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cities and Industrial Areas Served in {hub.country}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Select a city for local supply details.
                </p>
              </div>
              <span className="text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">
                {countryCities.length} Cities
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countryCities.map((city) => (
                <Link
                  key={city.citySlug}
                  to={city.url}
                  className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <span className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                    Flange supplier in {city.city}
                  </span>
                  <div className="mt-3 flex items-center text-xs font-medium text-red-600 group-hover:translate-x-1 transition-transform">
                    View details <ArrowRight size={14} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Manufacturing Transparency Banner */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Factory className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-white">Direct Production</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Forged and machined at our Mumbai works under an ISO 9001:2015 quality system.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-white">Full Traceability</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Heat numbers on every flange and an EN 10204 3.1 Mill Test Certificate for every heat.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Truck className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-white">Export Logistics</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Sea freight from Nhava Sheva (JNPT) / Mumbai port with complete export documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="mb-12 bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Trusted by Global Engineering & EPC Contractors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-75">
            {clientLogos.map((logo, idx) => (
              <img key={idx} src={logo} alt="Client logo" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </section>

        {/* FAQ Block */}
        <section className="mb-12 bg-white rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-red-600" size={24} /> Flange Export FAQ: {hub.country}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`p-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-200 ${openFaqIndex === idx ? '' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={() => openQuotePopup(`Export Inquiry - ${hub.country}`)}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg inline-flex items-center gap-2"
          >
            Get a Written Flange Quotation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportHubPage;
