import React, { useState } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Factory, 
  FileCheck, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  ExternalLink,
  MapPin,
  Tag
} from 'lucide-react';
import { cityStrategyData } from '../data/cityStrategyData.js';
import CityHeroQuoteForm from '../components/city/CityHeroQuoteForm.jsx';
import CityFullRfqForm from '../components/city/CityFullRfqForm.jsx';

const StateHubPage = ({ forcedKey }) => {
  const { stateSlug } = useParams();
  const navigate = useNavigate();

  let resolvedKey = forcedKey;
  if (!resolvedKey && stateSlug) {
    const clean = stateSlug.toLowerCase().replace(/^\/+|\/+$/g, '');
    if (clean === 'andhra-pradesh' || clean === 'ap') resolvedKey = 'ap_hub';
    if (clean === 'arunachal-pradesh' || clean === 'arunachal' || clean === 'ar') resolvedKey = 'ar_hub';
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

  // Extract sections
  const heroIntro = pageData.sections?.find(s => s.sec_num === '2.0' || s.sec_num === 2.0)?.copy || '';
  const hubSections = pageData.sections?.filter(s => s.sec_num.startsWith('4.')) || [];

  const sharedTrust = pageData.shared_sections?.['3.0'] || pageData.shared_sections?.['3'] || {};
  const sharedMfg = pageData.shared_sections?.['7.0'] || pageData.shared_sections?.['7'] || {};
  const sharedQuote = pageData.shared_sections?.['11.0'] || pageData.shared_sections?.['11'] || {};
  const sharedCta = pageData.shared_sections?.['14.0'] || pageData.shared_sections?.['14'] || {};

  return (
    <main className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1.0 Breadcrumbs */}
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
              <li aria-current="page" className="font-bold text-slate-900">
                {pageData.city}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 2.0 Hero Section with Form A */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D71920]/20 border border-[#D71920]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-200 tracking-wide uppercase">
                <ShieldCheck size={14} className="text-[#D71920]" />
                Statewide Supply Hub · Mumbai Manufacturing Facility
              </div>

              {/* Single H1 Tag */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                {pageData.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                {pageData.meta_desc}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-300 leading-relaxed">
                {heroIntro}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-slate-400">Dispatch Speed</div>
                  <div className="text-sm font-bold text-white">24–48 h from Mumbai</div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-slate-400">Road Transit</div>
                  <div className="text-sm font-bold text-white">~{pageData.transit} statewide</div>
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
                  Request Statewide RFQ
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

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
              <span>Manufacturing Unit: Marine Lines, Mumbai · ISO 9001:2015 QMS</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-500 shrink-0" />
              <span>Written quotes by email · No calls needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.x Regional Hub Breakdown Sections */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Regional Supply Corridors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Flange Demand & Supply Across {pageData.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We supply forged flanges across all districts and major industrial projects directly from our Mumbai manufacturing facility with full mill test certificates and traceable heat numbers.
            </p>
          </div>

          {/* Quick City Selector on State Hub */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#D71920] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Select a City in {pageData.city}</h3>
                <p className="text-xs text-slate-500">Jump directly to city-specific industrial demand, local site specs and pricing</p>
              </div>
            </div>
            <div className="w-full sm:w-72 shrink-0">
              <select
                aria-label={`Select City in ${pageData.city}`}
                onChange={(e) => {
                  if (e.target.value) navigate(e.target.value);
                }}
                defaultValue=""
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D71920] cursor-pointer shadow-sm"
              >
                <option value="" disabled>-- Select City --</option>
                {resolvedKey === 'ap_hub' ? (
                  <>
                    <option value="/visakhapatnam/">Visakhapatnam (Vizag Port & RINL)</option>
                    <option value="/vijayawada/">Vijayawada (Amaravati & NTTPS)</option>
                    <option value="/guntur/">Guntur (Agro & Cold Storage)</option>
                    <option value="/nellore/">Nellore (Krishnapatnam & BPCL)</option>
                    <option value="/kurnool/">Kurnool (Pinnapuram & HNSS)</option>
                  </>
                ) : (
                  <option value="/itanagar/">Itanagar & Naharlagun (Capital Region)</option>
                )}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubSections.map((sec, idx) => {
              // Determine city links
              const hLower = (sec.heading || '').toLowerCase();
              let cityLinks = [];
              if (hLower.includes('visakhapatnam')) {
                cityLinks.push({ name: 'Visakhapatnam City Page', url: '/visakhapatnam/' });
              }
              if (hLower.includes('vijayawada')) {
                cityLinks.push({ name: 'Vijayawada City Page', url: '/vijayawada/' });
              }
              if (hLower.includes('guntur')) {
                cityLinks.push({ name: 'Guntur City Page', url: '/guntur/' });
              }
              if (hLower.includes('nellore')) {
                cityLinks.push({ name: 'Nellore City Page', url: '/nellore/' });
              }
              if (hLower.includes('kurnool')) {
                cityLinks.push({ name: 'Kurnool City Page', url: '/kurnool/' });
              }
              if (hLower.includes('itanagar')) {
                cityLinks.push({ name: 'Itanagar City Page', url: '/itanagar/' });
              }

              return (
                <div 
                  key={idx}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D71920] transition duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#D71920] font-bold text-xs uppercase tracking-wider mb-2">
                      <MapPin size={14} />
                      <span>Regional Center {sec.sec_num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {sec.heading}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 mb-4">
                      {sec.copy.split('\n').map((p, pi) => (
                        p.trim() ? <p key={pi}>{p}</p> : null
                      ))}
                    </div>
                  </div>

                  <div>
                    {cityLinks.length > 0 && (
                      <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-2 mb-2">
                        {cityLinks.map((cl, cli) => (
                          <Link
                            key={cli}
                            to={cl.url}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-lg transition"
                          >
                            {cl.name} <ChevronRight size={12} />
                          </Link>
                        ))}
                      </div>
                    )}
                    {sec.dev_note && (
                      <div className="text-xs text-slate-500 italic">
                        {sec.dev_note}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7.0 Manufacturing & QA */}
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
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="relative rounded-lg overflow-hidden bg-slate-100 aspect-video mb-3">
                <img
                  src={pageData.photo?.src || '/images/industrial-flanges.jpeg'}
                  alt={pageData.photo?.alt || 'Manufacturing unit in Mumbai'}
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

      {/* 11.0 Request a Quote - Full RFQ */}
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

          <CityFullRfqForm 
            city={pageData.city} 
            state={pageData.state} 
            pageUrl={pageData.canonical} 
          />
        </div>
      </section>

      {/* 12.0 FAQs */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Common Questions & Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Questions About Flange Supply to {pageData.city}
            </h2>
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

export default StateHubPage;
