import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  FileCheck, 
  Truck, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  ExternalLink,
  Layers,
  MapPin,
  Tag
} from 'lucide-react';
import { cityStrategyData } from '../data/cityStrategyData.js';
import CityHeroQuoteForm from '../components/city/CityHeroQuoteForm.jsx';
import CityFullRfqForm from '../components/city/CityFullRfqForm.jsx';

const CityPageStrategy = ({ forcedKey }) => {
  const { cityName } = useParams();
  
  // Resolve city key
  let resolvedKey = forcedKey;
  if (!resolvedKey && cityName) {
    const cleanName = cityName.toLowerCase().replace(/^\/+|\/+$/g, '');
    for (const [k, cfg] of Object.entries(cityStrategyData)) {
      if (cfg.slug === cleanName || k === cleanName) {
        resolvedKey = k;
        break;
      }
    }
  }

  const pageData = resolvedKey ? cityStrategyData[resolvedKey] : null;

  const [openFaq, setOpenFaq] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  if (!pageData) {
    return <Navigate to="/market-area/" replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToRfq = () => {
    const el = document.getElementById('rfq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find sections robustly matching "4.0", "4", 4.0, or 4
  const getSec = (secNum) => {
    const target = parseFloat(secNum);
    return pageData.sections?.find(s => parseFloat(s.sec_num) === target);
  };

  const heroIntro = getSec(2.0)?.copy || '';
  const localDemandIntro = getSec(4.0)?.copy || '';
  const materialsCopy = getSec(5.0)?.copy || '';
  const productRangeIntro = getSec(6.0)?.copy || '';
  const deliveryCopy = getSec(8.0)?.copy || '';
  const priceCopy = getSec(9.0)?.copy || '';
  const areasCopy = getSec(10.0)?.copy || '';

  const sharedTrust = pageData.shared_sections?.['3.0'] || pageData.shared_sections?.['3'] || {};
  const sharedMfg = pageData.shared_sections?.['7.0'] || pageData.shared_sections?.['7'] || {};
  const sharedQuote = pageData.shared_sections?.['11.0'] || pageData.shared_sections?.['11'] || {};
  const sharedCta = pageData.shared_sections?.['14.0'] || pageData.shared_sections?.['14'] || {};

  return (
    <main className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1.0 Breadcrumb Navigation */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
              <li>
                <Link to="/" className="hover:text-[#D71920] transition-colors">Home</Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li>
                <Link to="/market-area/" className="hover:text-[#D71920] transition-colors">Areas We Supply</Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li>
                <Link to={pageData.state_hub_url || '/market-area/'} className="hover:text-[#D71920] transition-colors">
                  {pageData.state}
                </Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li aria-current="page" className="font-bold text-slate-900">
                {pageData.city}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 2.0 Hero Section with Form A */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-12 lg:py-20 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: H1, subline, description, value points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D71920]/20 border border-[#D71920]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-200 tracking-wide uppercase">
                <ShieldCheck size={14} className="text-[#D71920]" />
                ISO 9001:2015 Manufacturer Ex-Mumbai
              </div>

              {/* Exactly ONE H1 tag */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                {pageData.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                {pageData.meta_desc}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-300 leading-relaxed">
                {heroIntro}
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-slate-400">Dispatch Time</div>
                  <div className="text-sm font-bold text-white">Ex-Stock in 24–48 h</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-slate-400">Road Transit</div>
                  <div className="text-sm font-bold text-white">~{pageData.transit} to {pageData.city}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-400">Inspection & QA</div>
                  <div className="text-sm font-bold text-white">EN 10204 3.1 MTC</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={scrollToRfq}
                  className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-6 py-3 rounded-lg shadow-lg transition"
                >
                  Jump to Detailed RFQ
                  <ArrowRight size={16} />
                </button>
                <span className="text-xs text-slate-400">
                  Written line-by-line quotes by email · No unsolicited phone calls
                </span>
              </div>
            </div>

            {/* Right Column (Desktop) / Below (Mobile): Form A */}
            <div className="lg:col-span-5 w-full">
              <CityHeroQuoteForm 
                city={pageData.city} 
                state={pageData.state} 
                pageUrl={pageData.canonical} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3.0 Trust Strip */}
      <section className="bg-white border-y border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#D71920] shrink-0" />
              <span>
                <strong>GSTIN:</strong> 27FFLPP0007K1ZA{' '}
                <a 
                  href="https://services.gst.gov.in/services/searchtp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D71920] hover:underline inline-flex items-center gap-0.5"
                >
                  (verify on GST portal <ExternalLink size={10} />)
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck size={16} className="text-slate-500 shrink-0" />
              <span>GST-registered since 2020 · Proprietorship led by Vikas Purohit, CEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory size={16} className="text-slate-500 shrink-0" />
              <span>Forging Unit: Marine Lines, Mumbai · ISO 9001:2015 QMS</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-500 shrink-0" />
              <span>Written quotes by email · No calls needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.0 Local Demand Table */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Industrial Demand & Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Where Flanges Are Used in {pageData.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {localDemandIntro}
            </p>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Industry Sector</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Local Sites & Projects</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Where Flanges Are Used</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Commonly Specified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {pageData.local_demand_table?.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="px-4 sm:px-6 py-4 font-bold text-slate-900 align-top whitespace-nowrap">
                      {row.industry}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-slate-700 align-top max-w-xs sm:max-w-sm">
                      {row.local_sites}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-slate-600 align-top max-w-xs sm:max-w-sm">
                      {row.where_used}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-slate-800 font-medium align-top">
                      {row.specified}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5.0 Materials Guidance */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Engineering Selection & Metallurgy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Materials Guidance for {pageData.city} Projects
            </h2>
            <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
              {materialsCopy.split('\n').map((para, i) => (
                para.trim() ? <p key={i}>{para}</p> : null
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.0 Product Range Table */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Manufacturing Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Flange Types We Supply to {pageData.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {productRangeIntro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Flange Type (ASME / DIN / IS)</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5">Typical Use in {pageData.city}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {pageData.product_range_table?.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="px-4 sm:px-6 py-3.5 font-bold text-slate-900 align-middle">
                      <Link 
                        to={row.url} 
                        className="text-[#D71920] hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        {row.type}
                        <ChevronRight size={14} />
                      </Link>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 align-middle">
                      {row.typical_use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7.0 Manufacturing & QA with Video Facade and Transcript */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Quality Assurance & Traceability
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              How Every Flange Is Made and Checked
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {sharedMfg.copy}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Manufacturing Photo */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="relative rounded-lg overflow-hidden bg-slate-100 aspect-video mb-3">
                <img
                  src={pageData.photo?.src || '/images/industrial-flanges.jpeg'}
                  alt={pageData.photo?.alt || 'Flange forging shop'}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-600 italic">
                {pageData.photo?.caption}
              </p>
            </div>

            {/* Video Facade with Transcript */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">Video Demonstration</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {pageData.video?.title || 'Flange Manufacturing Process'}
                  </h3>
                </div>
                <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded">
                  {pageData.video?.duration || '1:15'}
                </span>
              </div>

              {/* Video Facade Container */}
              <div className="relative rounded-lg overflow-hidden bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer border border-slate-800">
                <img
                  src="/images/why.jpeg"
                  alt={pageData.video?.title || 'Video preview'}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition"
                />
                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play video"
                  className="absolute w-16 h-16 bg-[#D71920] text-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition"
                >
                  <Play size={28} className="ml-1" />
                </button>
              </div>

              {/* Expandable Transcript inside the HTML */}
              <details className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <summary className="font-bold text-slate-900 cursor-pointer hover:text-[#D71920] py-1 select-none flex items-center justify-between">
                  <span>View Full Video Transcript</span>
                  <span className="text-[11px] font-normal text-slate-500">(Audio & step text)</span>
                </summary>
                <div className="mt-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 leading-relaxed space-y-2">
                  <p>{pageData.video?.transcript}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 8.0 Delivery & Documents */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Logistics & Commercial Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Delivery to {pageData.city} Sites
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {deliveryCopy}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">Transport Corridor</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consignments depart directly from our Mumbai facility via dedicated truck (loads &gt; 5 MT) or reliable part-load carriers. Full transit updates provided.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">Enclosed Dispatch Docs</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every order includes GST tax invoice with IGST, generated e-way bill for consignments above ₹50,000, detailed packing slip, and EN 10204 3.1 MTCs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9.0 Price Guidance */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Transparent Commercials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Price Guidance for {pageData.city} Buyers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {priceCopy}
            </p>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Indicative Material Price Bands (Ex-Mumbai Works)
              </div>
              <div className="text-sm font-semibold text-slate-800 leading-relaxed mb-3">
                {pageData.price_bands}
              </div>
              <p className="text-xs text-slate-500">
                * Note: Raw material steel prices fluctuate with international billet indices. Line-by-line itemized quotations are issued for {pageData.city} consignments upon receipt of flange size, rating, and quantity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10.0 Areas Served */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Supply Network Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Areas Served in and Around {pageData.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {areasCopy}
            </p>

            {pageData.state === "Andhra Pradesh" && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Other Active Supply Hubs in Andhra Pradesh:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Visakhapatnam', url: '/visakhapatnam/' },
                    { name: 'Vijayawada', url: '/vijayawada/' },
                    { name: 'Guntur', url: '/guntur/' },
                    { name: 'Nellore', url: '/nellore/' },
                    { name: 'Kurnool', url: '/kurnool/' },
                    { name: 'Andhra Pradesh State Hub', url: '/market-area/andhra-pradesh/' }
                  ].filter(c => c.name !== pageData.city).map((item, cIdx) => (
                    <Link
                      key={cIdx}
                      to={item.url}
                      className="text-xs font-semibold bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[#D71920] border border-slate-200 hover:border-red-200 px-3 py-1.5 rounded-lg transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 11.0 Request a Quote - Full RFQ Section */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Direct Manufacturer Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Request a Written Quote for {pageData.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {sharedQuote.copy}
            </p>
          </div>

          {/* Form B with id="rfq" */}
          <CityFullRfqForm 
            city={pageData.city} 
            state={pageData.state} 
            pageUrl={pageData.canonical} 
          />
        </div>
      </section>

      {/* 12.0 FAQs Section (All answers in HTML on load) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Common Questions & Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Frequently Asked Questions by {pageData.city} Buyers
            </h2>
            <p className="text-sm text-slate-600">
              Detailed answers covering technical specifications, testing certifications, transit times, and commercial terms for {pageData.city}.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {pageData.faqs?.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-100 transition"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-[#D71920] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {/* HTML content is present on page load */}
                <div 
                  className={`px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3 ${
                    openFaq === idx ? 'block' : 'hidden sm:block sm:opacity-90'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13.0 Related Pages */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Related Pages & Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore related state hubs, industrial piping specifications, and material engineering guides.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {pageData.related_links?.map((link, idx) => (
              <Link
                key={idx}
                to={link.url}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-lg hover:border-[#D71920] hover:text-[#D71920] transition shadow-sm"
              >
                <Tag size={12} className="text-[#D71920]" />
                {link.anchor}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14.0 Final CTA Band */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Forged Flanges Delivered to {pageData.city}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            {sharedCta.copy}
          </p>
          <button
            onClick={scrollToRfq}
            className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl transition transform hover:-translate-y-0.5"
          >
            Get a Written Quote
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </main>
  );
};

export default CityPageStrategy;
