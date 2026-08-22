import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2, Factory, Award, Truck, ChevronDown, ChevronUp, Home, HelpCircle } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';
import { exportHubsData } from '../data/exportHubsData.js';
import { exportCitiesData } from '../data/exportCitiesData.js';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';

const ExportHubPage = () => {
  const { countrySlug } = useParams();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const hub = exportHubsData[countrySlug];

  if (!hub) {
    return <Navigate to="/export" replace />;
  }

  // Filter cities for this country
  const countryCities = Object.values(exportCitiesData).filter(
    (city) => city.countrySlug === countrySlug
  );

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const clientLogos = [
    "/images/1.webp", "/images/3.webp", "/images/4.webp", "/images/5.webp", "/images/6.webp", "/images/8.webp", "/images/9.webp", "/images/10.webp", "/images/11.svg", "/images/12.webp", "/images/13.webp", "/images/14.webp", "/images/15.webp", "/images/16.webp", "/images/17.webp", "/images/19.webp"
  ];

  const faqs = [
    {
      q: `What flange standards and certifications do you support for export to ${hub.country}?`,
      a: `Remax Forge manufactures and exports flanges fully compliant with ASME B16.5, ASME B16.47, EN 10204 3.1 MTC standards, and regional project specifications for ${hub.country}. EN 10204 3.2 inspection by SGS/Lloyd's/BV is available on request.`
    },
    {
      q: `How are shipments dispatched to projects in ${hub.country}?`,
      a: `All orders are manufactured and sea/air packed directly at our Mumbai production facilities, with complete export documentation (COO, Commercial Invoice, Packing List, 3.1 MTC) provided for seamless customs clearance.`
    },
    {
      q: `Can I order both standard and custom forging sizes for delivery to ${hub.country}?`,
      a: `Yes. We supply standard size ranges (1/2" to 48", Class 150 to 2500) as well as heavy ring forgings and custom drawing-based flanges manufactured to your exact requirements.`
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
        keywords={hub.keywords}
        robots="index, follow"
      />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Header */}
      <div className="relative w-full bg-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <span>/</span>
            <Link to="/export" className="hover:text-white">Where We Export</Link>
            <span>/</span>
            <span className="text-red-400 font-medium">{hub.country}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/30">
                <Globe size={14} /> Direct Global Export Hub
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {hub.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                ISO 9001:2015 certified manufacturer supplying ASME B16.5, B16.47, and DIN forged flanges directly from our Mumbai manufacturing facilities to industrial projects in {hub.country}.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => openQuotePopup(`Export Inquiry - ${hub.country}`)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  Request Fast Export Quote <ArrowRight size={18} />
                </button>
                <button
                  onClick={openProductMenu}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg transition-all"
                >
                  Browse Product Catalog
                </button>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-700 pb-3">
                <ShieldCheck className="text-red-500" size={20} /> Export Capabilities Overview
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Origin:</strong> Manufactured & tested in Mumbai, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Standards:</strong> ASME B16.5, B16.47, B16.11, DIN, EN 1092-1</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Certification:</strong> EN 10204 3.1 MTC standard (3.2 available)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <span><strong>Target Markets:</strong> {countryCities.length} regional industrial hubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City Directory for this Country */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Industrial Cities & Logistics Hubs Served in {hub.country}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Select a destination hub to view localized supply specifications and transit details.
              </p>
            </div>
            <span className="text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">
              {countryCities.length} Cities Registered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countryCities.map((city) => (
              <Link
                key={city.citySlug}
                to={city.url}
                className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                      {city.city}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Tier {city.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {city.whyThisCity}
                  </p>
                </div>
                <div className="mt-3 flex items-center text-xs font-medium text-red-600 group-hover:translate-x-1 transition-transform">
                  View Specs & Details <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Manufacturing Transparency Banner */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Factory className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h4 className="font-bold text-white">Direct Production</h4>
                <p className="text-xs text-slate-300 mt-1">
                  100% forged and machined at our integrated Mumbai manufacturing works under ISO strict quality control.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h4 className="font-bold text-white">Full Traceability</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Every order includes heat numbers and EN 10204 3.1 Mill Test Certificates with PMI & hydro test reports.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Truck className="text-red-500 shrink-0 mt-1" size={32} />
              <div>
                <h4 className="font-bold text-white">Global Logistics</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Direct sea freight dispatches from Nhava Sheva (JNPT) / Mumbai port with complete customs documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Carousel */}
        <section className="mb-12 bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Trusted by Global Engineering & EPC Contractors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-75">
            {clientLogos.map((logo, idx) => (
              <img key={idx} src={logo} alt="Global Client Logo" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </section>

        {/* FAQ Block */}
        <section className="mb-12 bg-white rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-red-600" size={24} /> Export Guidance & FAQ for {hub.country}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaqIndex === idx && (
                  <div className="p-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExportHubPage;
