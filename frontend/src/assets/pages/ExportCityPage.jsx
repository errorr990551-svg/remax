import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, Factory, Award, Truck, ChevronDown, ChevronUp, Home, HelpCircle, Calculator, FileText } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';
import { exportCitiesData } from '../data/exportCitiesData.js';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';

const ExportCityPage = () => {
  const { countrySlug, citySlug } = useParams();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const fullKey = `${countrySlug}/${citySlug}`;
  const cityData = exportCitiesData[fullKey];

  if (!cityData) {
    return <Navigate to={`/export/${countrySlug}`} replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Calculator State
  const [calcNps, setCalcNps] = useState('2');
  const [calcClass, setCalcClass] = useState('150');
  const [calcType, setCalcType] = useState('Weld Neck');
  const [estimatedWeight, setEstimatedWeight] = useState(2.8);

  const handleCalculate = () => {
    const npsNum = parseFloat(calcNps) || 2;
    const classNum = parseFloat(calcClass) || 150;
    const typeMult = calcType === 'Blind' ? 1.3 : calcType === 'Slip On' ? 0.85 : 1.0;
    const weight = (npsNum * npsNum * (classNum / 100) * 0.7 * typeMult).toFixed(2);
    setEstimatedWeight(weight);
  };

  const faqs = [
    {
      q: cityData.faqQ1 || `What flange standards are certified for supply to ${cityData.city}?`,
      a: `All flanges shipped to ${cityData.city}, ${cityData.country} are manufactured to ${cityData.standards || 'ASME B16.5 / B16.47'} with EN 10204 3.1 Mill Test Certificates. Inspection standards include Hydrostatic Testing, Ultrasonic Testing (UT), and PMI chemical verification.`
    },
    {
      q: cityData.faqQ2 || `What is the shipping lead time from Mumbai to ${cityData.city}?`,
      a: `Ex-stock items dispatch within 24–48 hours from our Mumbai works. Sea transit to logistics hubs serving ${cityData.city} takes approximately 14–28 days depending on shipping line schedules. Expedited air freight is available for urgent shut-down orders.`
    },
    {
      q: cityData.faqQ3 || `Do you handle export documentation and customs clearance for ${cityData.country}?`,
      a: `Yes. Remax Forge provides full export documentation packages for ${cityData.city} buyers, including Certificate of Origin (COO), Commercial Invoice, Packing List, Mill Test Certificates, and Bill of Lading.`
    }
  ];

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
    "description": cityData.metaDescription
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
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        keywords={cityData.keywords}
        robots="index, follow"
      />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Header */}
      <div className="relative w-full bg-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <span>/</span>
            <Link to="/export" className="hover:text-white">Where We Export</Link>
            <span>/</span>
            <Link to={`/export/${cityData.countrySlug}`} className="hover:text-white">{cityData.country}</Link>
            <span>/</span>
            <span className="text-red-400 font-medium">{cityData.city}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/30">
                <Truck size={14} /> Factory-Direct Supply to {cityData.city}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {cityData.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                Serving industrial projects and procurement hubs in {cityData.city}, {cityData.country}. Manufactured at our Mumbai works, fully certified to {cityData.standards || 'ASME B16.5 / B16.47'} standards with EN 10204 3.1 MTC.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => openQuotePopup(`Inquiry for ${cityData.city}, ${cityData.country}`)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  Request Quote for {cityData.city} <ArrowRight size={18} />
                </button>
                <button
                  onClick={openProductMenu}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg transition-all"
                >
                  Browse Product Catalog
                </button>
              </div>
            </div>

            {/* Hub Details Card */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
                <ShieldCheck className="text-red-500" size={20} /> Local Market Targeting
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Destination:</strong> {cityData.city}, {cityData.country}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Hub Rationale:</strong> {cityData.whyThisCity}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Standards:</strong> {cityData.standards || 'ASME B16.5 / B16.47'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Origin Factory:</strong> Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Product Links & Weight Calculator */}
          <div className="lg:col-span-2 space-y-8">

            {/* Industrial Supply Scope */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Factory className="text-red-600" size={24} /> Flange & Fitting Supply Scope for {cityData.city}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Remax Forge supplies heavy industrial buyers and piping contractors across {cityData.city} with high-pressure forged flanges and butt weld fittings. Every product is manufactured at our Mumbai works in strict compliance with ASTM, ASME, DIN, and EN specifications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Forged Flanges</h4>
                  <p className="text-xs text-slate-600">Weld Neck, Slip On, Blind, Socket Weld, Threaded, Lap Joint, Spectacle Blinds (1/2" to 48", Class 150–2500).</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Butt Weld & Forged Fittings</h4>
                  <p className="text-xs text-slate-600">Elbows, Tees, Reducers, Caps, Union Fittings, Socket Weld Bushings in Carbon, Stainless & Alloy Steels.</p>
                </div>
              </div>
            </div>

            {/* Flange Weight Calculator Block */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="text-red-600" size={22} /> Embedded Flange Weight Calculator
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Quickly estimate unit flange shipping weight for export freight sizing.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Flange Type</label>
                  <select
                    value={calcType}
                    onChange={(e) => setCalcType(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="Weld Neck">Weld Neck</option>
                    <option value="Slip On">Slip On</option>
                    <option value="Blind">Blind Flange</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nominal Pipe Size (NPS)</label>
                  <select
                    value={calcNps}
                    onChange={(e) => setCalcNps(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="1">1"</option>
                    <option value="2">2"</option>
                    <option value="4">4"</option>
                    <option value="6">6"</option>
                    <option value="8">8"</option>
                    <option value="12">12"</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pressure Class</label>
                  <select
                    value={calcClass}
                    onChange={(e) => setCalcClass(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="150">Class 150</option>
                    <option value="300">Class 300</option>
                    <option value="600">Class 600</option>
                    <option value="1500">Class 1500</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Unit Weight:</span>
                  <div className="text-2xl font-bold text-red-400">{estimatedWeight} kg</div>
                </div>
                <button
                  onClick={handleCalculate}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded-lg transition-colors"
                >
                  Recalculate Weight
                </button>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="text-red-600" size={22} /> Frequently Asked Questions ({cityData.city})
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors text-sm"
                    >
                      <span>{faq.q}</span>
                      {openFaqIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-3 text-base flex items-center gap-2">
                <FileText className="text-red-600" size={18} /> Request RFQ for {cityData.city}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your BOM, sizes, and pressure classes. Our export technical team will issue a detailed commercial proposal within 30 minutes.
              </p>
              <button
                onClick={() => openQuotePopup(`Inquiry for ${cityData.city}`)}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-red-600/20"
              >
                Submit RFQ Now
              </button>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <Award className="text-red-500" size={18} /> Quality & Compliance Guarantee
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-red-500 shrink-0" /> EN 10204 3.1 Certified
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-red-500 shrink-0" /> 100% PMI Material Tested
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-red-500 shrink-0" /> Third-Party Inspection Allowed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-red-500 shrink-0" /> Direct Sea/Air Export Packaging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportCityPage;
