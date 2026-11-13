import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, Factory, Award, Truck, ChevronDown, ChevronUp, Home, HelpCircle, Calculator, FileText, MapPin, ClipboardList, Scale } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';
import { exportCitiesData } from '../data/exportCitiesData.js';
import flangeDimensions from '../data/flange_dimensions.json';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';

// Flange types offered, with the job each one does on a piping system.
const FLANGE_TYPES = [
  { name: 'Weld Neck Flange', to: '/products/flanges/weld-neck-flange/', use: 'Butt-welded to the pipe; the tapered hub spreads stress, so it is the default choice for high pressure, high temperature and cyclic service.' },
  { name: 'Slip On Flange', to: '/products/flanges/slip-on-flange/', use: 'Slides over the pipe and is fillet-welded inside and out; easier to align and lower in cost for low-pressure utility, water and cooling lines.' },
  { name: 'Blind Flange', to: '/products/flanges/blind-flange/', use: 'Closes the end of a line, nozzle or valve outlet and allows later extension or pressure testing.' },
  { name: 'Socket Weld Flange', to: '/products/flanges/socket-weld-flange/', use: 'For small-bore, high-pressure lines where the pipe is fillet-welded into a socket.' },
  { name: 'Threaded Flange', to: '/products/flanges/threaded-flange/', use: 'Screwed onto threaded pipe where welding is not allowed, such as some hazardous or temporary installations.' },
  { name: 'Lap Joint Flange', to: '/products/flanges/lap-joint-flange/', use: 'Used with a stub end; the flange rotates freely for easy bolt-hole alignment and lets costly alloy stay only on the wetted stub.' },
  { name: 'Spectacle Blind', to: '/products/flanges/spectacle-blind-flange/', use: 'Positive isolation between two flanges; rotate to switch between open and blanked line.' },
  { name: 'Long Weld Neck Flange', to: '/products/flanges/long-weld-neck-flange/', use: 'Extended neck for vessel and column nozzles.' },
];

const MATERIALS = [
  { family: 'Carbon steel', grades: 'ASTM A105 / A105N', to: '/materials/carbon-steel-flanges/' },
  { family: 'Low-temperature carbon steel', grades: 'ASTM A350 LF2', to: '/products/flanges/high-temperature-cryogenic-flange/' },
  { family: 'Stainless steel', grades: 'ASTM A182 F304/304L, F316/316L', to: '/materials/stainless-steel-316-flanges/' },
  { family: 'Stabilised stainless', grades: 'ASTM A182 F321, F347', to: '/materials/stainless-steel-321-347-flanges/' },
  { family: 'Alloy steel', grades: 'ASTM A182 F11, F22, F91', to: '/materials/alloy-steel-f11-f22-flanges/' },
  { family: 'Duplex / super duplex', grades: 'ASTM A182 F51 (2205), F53 (2507), F55 (Zeron 100)', to: '/materials/duplex-2205-flanges/' },
  { family: 'Nickel alloys', grades: 'Inconel 625 (UNS N06625), Monel 400 (N04400), Hastelloy C276 (N10276)', to: '/materials/inconel-625-flanges/' },
];

const RFQ_CHECKLIST = [
  'Flange type (weld neck, slip on, blind, socket weld, threaded, lap joint, spectacle blind)',
  'Nominal size (NPS or DN) and quantity per size',
  'Pressure class (ASME 150–2500) or PN rating (EN 1092-1)',
  'Facing: raised face (RF), flat face (FF) or ring type joint (RTJ)',
  'For weld neck and socket weld: pipe schedule or bore',
  'Material grade (e.g. ASTM A105, A182 F316L, A350 LF2)',
  'Dimensional standard (ASME B16.5, B16.47 Series A/B, EN 1092-1, ...)',
  'Required certificates and tests (EN 10204 3.1 / 3.2, NACE MR0175, third-party inspection)',
  'Delivery point and required date, plus your preferred Incoterm',
];

const PRICE_FACTORS = [
  ['Material grade', 'Nickel alloys and super duplex cost many times more per kg than carbon steel A105.'],
  ['Size and pressure class', 'Weight rises steeply with NPS and class, and forging weight is a major part of the price.'],
  ['Quantity per size', 'Larger runs per size reduce set-up cost per piece.'],
  ['Testing and certification', 'EN 10204 3.2, NACE MR0175 compliance or third-party inspection add cost and time.'],
  ['Facing and machining', 'RTJ grooves, special bores and coatings add machining time.'],
  ['Freight and packing', 'Sea or air freight, seaworthy packing and the Incoterm you choose.'],
];

// Real Class 150 carbon steel weights from the site's own ASME B16.5 tables.
const WEIGHT_TABLES = Object.entries(flangeDimensions)
  .map(([key, t]) => {
    const col = t.headers.findIndex((h) => /w(eigh)?t/i.test(h));
    if (col < 0) return null;
    const label = t.title.split('\n')[0].replace(/\s*(DIMENSIONS|dimensions).*$/, '').replace(/\s*—\s*/, ' ').trim();
    return { key, label, rows: t.rows.map((r) => ({ nps: r[0], kg: r[col] })) };
  })
  .filter(Boolean);

const faqAnswer = (q, d) => {
  const where = `${d.city}, ${d.country}`;
  const s = q.toLowerCase();
  if (s.includes('standard')) return `Flanges for ${where} are made to ${d.standards || 'ASME B16.5 / B16.47'} as specified on your purchase order, with EN 1092-1 and other standards on request. Every shipment carries an EN 10204 3.1 mill test certificate; 3.2 certification can be arranged.`;
  if (s.includes('lead time') || s.includes('shipping')) return `Ex-stock items are dispatched from our Mumbai works within 24–48 hours of order confirmation. Production time for made-to-order sizes and the freight transit time to ${d.city} are confirmed in writing with your quotation, based on the current sailing or flight schedule.`;
  if (s.includes('customs') || s.includes('documentation')) return `Yes. Each shipment to ${d.country} is sent with a commercial invoice, packing list, certificate of origin, mill test certificates and the bill of lading or airway bill. Tell us any extra documents your importer or consultant needs when you send the RFQ.`;
  if (s.includes('material') || s.includes('grade')) return `Grades are chosen to suit the service, and the project specification always governs. For ${d.country} orders we supply carbon steel ASTM A105/A105N for general process and utility lines, A350 LF2 for low-temperature service, stainless A182 F304/F316L for corrosive or hygienic duty, duplex F51 and super duplex F53/F55 for seawater and chloride service, alloy steel F11/F22/F91 for high-temperature steam, and nickel alloys for severe corrosion.`;
  if (s.includes('minimum order')) return `Minimum order quantities depend on grade and size. Send your list of sizes and quantities through the quote form and we will confirm the MOQ and the price together.`;
  if (s.includes('third-party') || s.includes('inspected')) return `Yes. Third-party inspection by the agency you or your end client nominate can be carried out at our Mumbai works before dispatch, alongside our own inspection records.`;
  if (s.includes('price') || s.includes('quote')) return `Use the Get Quote form and include type, size, class, facing, material and quantity. The price depends mainly on material grade, forging weight, testing and freight to ${d.city}. See "What affects flange price" above.`;
  if (s.includes('testing') || s.includes('quality')) return `Before export, flanges are inspected for dimensions against the ordered standard and checked by positive material identification (PMI). Ultrasonic testing (UT) and hydrostatic testing are carried out where the order or the service calls for them.`;
  return `Send your requirement through the Get Quote form and our export team will reply with a written offer for ${d.city}.`;
};

const ExportCityPage = () => {
  const { countrySlug, citySlug } = useParams();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [weightType, setWeightType] = useState(WEIGHT_TABLES[0]?.key);
  const [weightNps, setWeightNps] = useState('');

  const cityData = exportCitiesData[`${countrySlug}/${citySlug}`];
  if (!cityData) {
    return <Navigate to={`/export/${countrySlug}/`} replace />;
  }

  const local = cityData.local || null;
  const table = WEIGHT_TABLES.find((t) => t.key === weightType) || WEIGHT_TABLES[0];
  const weightRow = table?.rows.find((r) => r.nps === weightNps) || table?.rows[0];

  const baseFaqs = [cityData.faqQ1, cityData.faqQ2, cityData.faqQ3]
    .filter(Boolean)
    .map((q) => ({ q, a: faqAnswer(q, cityData) }));
  const faqs = [...(cityData.faqs || []), ...baseFaqs];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Remax Forge & Fittings",
    "url": "https://remaxforge.com",
    "logo": "https://remaxforge.com/images/REMAX_FORGE_AND_FITTINGS-01.webp",
    "address": { "@type": "PostalAddress", "addressLocality": "Mumbai", "addressRegion": "Maharashtra", "addressCountry": "India" },
    "description": cityData.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://remaxforge.com/" },
      { "@type": "ListItem", "position": 2, "name": "Where We Export", "item": "https://remaxforge.com/export/" },
      { "@type": "ListItem", "position": 3, "name": cityData.country, "item": `https://remaxforge.com/export/${cityData.countrySlug}/` },
      { "@type": "ListItem", "position": 4, "name": cityData.city, "item": `https://remaxforge.com${cityData.url}` }
    ]
  };

  const card = 'bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4';

  return (
    <div className="w-full font-sans bg-slate-50 min-h-screen text-slate-800">
      <MetaTags title={cityData.metaTitle} description={cityData.metaDescription} keywords={cityData.keywords} robots="index, follow" />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* Hero */}
      <div className="relative w-full bg-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1"><Home size={14} /> Home</Link>
            <span>/</span>
            <Link to="/export/" className="hover:text-white">Where We Export</Link>
            <span>/</span>
            <Link to={`/export/${cityData.countrySlug}/`} className="hover:text-white">{cityData.country}</Link>
            <span>/</span>
            <span className="text-red-400 font-medium">{cityData.city}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/30">
                <Truck size={14} /> Factory-direct flanges for {cityData.city}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">{cityData.h1}</h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                {cityData.intro || `Buy forged flanges for projects in ${cityData.city}, ${cityData.country} direct from the manufacturer. Remax Forge & Fittings forges and machines flanges at its Mumbai works to ${cityData.standards || 'ASME B16.5 / B16.47'}, and ships them with EN 10204 3.1 mill test certificates.`}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => openQuotePopup(`Flange inquiry for ${cityData.city}, ${cityData.country}`)} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2">
                  Get Flange Price for {cityData.city} <ArrowRight size={18} />
                </button>
                <button onClick={openProductMenu} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg transition-all">
                  Browse Flange Range
                </button>
              </div>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
                <ShieldCheck className="text-red-500" size={20} /> Supply facts: {cityData.city}
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} /><span><strong>Destination:</strong> {cityData.city}{local?.region ? `, ${local.region}` : ''}, {cityData.country}</span></li>
                {local?.port && <li className="flex items-start gap-2"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} /><span><strong>Entry point:</strong> {local.port}</span></li>}
                <li className="flex items-start gap-2"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} /><span><strong>Standards:</strong> {cityData.standards || 'ASME B16.5 / B16.47'}</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} /><span><strong>Dispatched from:</strong> Mumbai, India</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} /><span><strong>Certificates:</strong> EN 10204 3.1 MTC (3.2 on request)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 min-w-0">

            {local && (
              <section className={card}>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><MapPin className="text-red-600" size={24} /> Flange supply to {cityData.city}: what buyers here need</h2>
                {(local.paragraphs || []).map((p, i) => <p key={i} className="text-slate-600 text-sm leading-relaxed">{p}</p>)}
                {local.industries?.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {local.industries.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />{ind}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            <section className={card}>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Factory className="text-red-600" size={24} /> Flanges we supply to {cityData.city}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">ASME B16.5 covers NPS ½" to 24" in Classes 150 to 2500; larger sizes (NPS 26" to 60") are made to ASME B16.47 Series A or B. EN 1092-1 PN-rated flanges are made to order.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200">
                  <thead className="bg-slate-100 text-slate-900"><tr><th className="p-3 text-left">Flange type</th><th className="p-3 text-left">Where it is used</th></tr></thead>
                  <tbody>
                    {FLANGE_TYPES.map((f) => (
                      <tr key={f.name} className="border-t border-slate-200 align-top">
                        <td className="p-3 font-semibold whitespace-nowrap"><Link to={f.to} className="text-red-700 hover:underline">{f.name}</Link></td>
                        <td className="p-3 text-slate-600">{f.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className={card}>
              <h2 className="text-xl font-bold text-slate-900">Flange materials and grades</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200">
                  <thead className="bg-slate-100 text-slate-900"><tr><th className="p-3 text-left">Material</th><th className="p-3 text-left">Grades</th></tr></thead>
                  <tbody>
                    {MATERIALS.map((m) => (
                      <tr key={m.family} className="border-t border-slate-200">
                        <td className="p-3 font-semibold"><Link to={m.to} className="text-red-700 hover:underline">{m.family}</Link></td>
                        <td className="p-3 text-slate-600">{m.grades}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className={card}>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><ClipboardList className="text-red-600" size={22} /> What to include in your RFQ</h2>
              <p className="text-slate-600 text-sm">A complete enquiry gets an exact price on the first reply:</p>
              <ul className="space-y-2">
                {RFQ_CHECKLIST.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />{item}</li>)}
              </ul>
              <button onClick={() => openQuotePopup(`RFQ for ${cityData.city}`)} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm">Send RFQ</button>
            </section>

            <section className={card}>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Scale className="text-red-600" size={22} /> What affects flange price</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRICE_FACTORS.map(([t, d]) => (
                  <div key={t} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <dt className="font-bold text-slate-900 text-sm mb-1">{t}</dt>
                    <dd className="text-xs text-slate-600">{d}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {table && (
              <section className={card}>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Calculator className="text-red-600" size={22} /> Flange weight lookup for freight planning</h2>
                <p className="text-xs text-slate-500">Approximate carbon steel weights from our ASME B16.5 tables. Your quotation states the exact shipping weight.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block text-xs font-semibold text-slate-700">Flange table
                    <select value={table.key} onChange={(e) => { setWeightType(e.target.value); setWeightNps(''); }} className="mt-1 w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
                      {WEIGHT_TABLES.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
                    </select>
                  </label>
                  <label className="block text-xs font-semibold text-slate-700">Nominal pipe size (NPS)
                    <select value={weightRow?.nps} onChange={(e) => setWeightNps(e.target.value)} className="mt-1 w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
                      {table.rows.map((r) => <option key={r.nps} value={r.nps}>{r.nps}"</option>)}
                    </select>
                  </label>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl">
                  <span className="text-xs text-slate-400">Approx. weight per piece:</span>
                  <div className="text-2xl font-bold text-red-400">{weightRow?.kg} kg</div>
                </div>
              </section>
            )}

            <section className={card}>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><HelpCircle className="text-red-600" size={22} /> Flange supply to {cityData.city}: FAQs</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full p-4 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 flex justify-between items-center gap-3 transition-colors text-sm">
                      <span>{faq.q}</span>
                      {openFaqIndex === idx ? <ChevronUp size={16} className="shrink-0" /> : <ChevronDown size={16} className="shrink-0" />}
                    </button>
                    <div className={`p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 ${openFaqIndex === idx ? '' : 'hidden'}`}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 border-b border-slate-200 pb-3 text-base flex items-center gap-2"><FileText className="text-red-600" size={18} /> Flange quote for {cityData.city}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">Send your sizes, classes, grades and quantities. You get a written offer with price, production time and freight terms to {cityData.city}.</p>
              <button onClick={() => openQuotePopup(`Flange inquiry for ${cityData.city}`)} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-red-600/20">Get Quote</button>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <h2 className="font-bold text-white text-sm flex items-center gap-2"><Award className="text-red-500" size={18} /> Quality & documents</h2>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500 shrink-0" /> ISO 9001:2015 certified manufacturer</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500 shrink-0" /> EN 10204 3.1 MTC with every shipment</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500 shrink-0" /> PMI material verification</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500 shrink-0" /> Third-party inspection allowed</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500 shrink-0" /> Seaworthy export packing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-bold text-slate-900 text-sm">Related</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to={`/export/${cityData.countrySlug}/`} className="text-red-700 hover:underline">Flange supplier in {cityData.country}</Link></li>
                <li><Link to="/standards/asme-b16-5/" className="text-red-700 hover:underline">ASME B16.5 flange standard</Link></li>
                <li><Link to="/standards/asme-b16-47/" className="text-red-700 hover:underline">ASME B16.47 large-diameter flanges</Link></li>
                <li><Link to="/products/flanges/sour-service-nace-flange/" className="text-red-700 hover:underline">NACE MR0175 sour service flanges</Link></li>
                <li><Link to="/certification/" className="text-red-700 hover:underline">Certificates</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ExportCityPage;
