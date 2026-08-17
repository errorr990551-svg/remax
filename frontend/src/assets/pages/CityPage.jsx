import React, { useState } from 'react';
import { useNavigate, useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Settings, Clock, CheckCircle2, Factory, Award, Truck, PenTool, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, ChevronUp, Home } from 'lucide-react';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';
import MetaTags from '../components/common/MetaTags.jsx';
import { marketAreaData } from '../data/marketAreaData.js';

const CityPage = () => {
  const { cityName } = useParams();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  
  const KEPT_CITIES = Object.keys(marketAreaData);
  const lowercaseCity = cityName?.toLowerCase();
  
  // Resolve key to support flat lookup
  const data = marketAreaData[lowercaseCity];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!lowercaseCity || !data) {
    return <Navigate to="/market-area" replace />;
  }

  const scrollToProducts = () => {
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clientLogos = [
    "/images/1.webp", "/images/3.webp", "/images/4.webp", "/images/5.webp", "/images/6.webp", "/images/8.webp", "/images/9.webp", "/images/10.webp", "/images/11.svg", "/images/12.webp", "/images/13.webp", "/images/14.webp", "/images/15.webp", "/images/16.webp", "/images/17.webp", "/images/19.webp", "/images/c2.webp", "/images/Adani_2012_logo.webp", "/images/air-products-logo.webp", "/images/Arcelor_Mittal.svg.webp", "/images/BHEL_logo.svg.webp", "/images/bhilosa.webp", "/images/deccan.webp", "/images/deepak-chem-tech.webp", "/images/DESMET.jpg.webp", "/images/gardner-denver.webp", "/images/gnfc.webp", "/images/godrej-logo.jpg.webp", "/images/gujrat-state-fertilizers.webp", "/images/Hindustan-Petroleum.webp", "/images/indian-oil.jpg.webp", "/images/isrro.jpg.webp", "/images/jindal-steel.webp", "/images/jsw.webp", "/images/larsen.webp", "/images/linde.webp", "/images/nrl-og-logo.webp", "/images/ongc.webp", "/images/paharpur.webp", "/images/pidilite-logo.jpg.webp", "/images/Praj.jpg.webp", "/images/Shree_Renuka_Sugars.jpg.webp", "/images/tata-steel.jpg.webp", "/images/thyssenkurpp.webp", "/images/upl.webp", "/images/wipro-logo-300x300.webp"
  ];

  const getClientAltText = (logoPath) => {
    const filename = logoPath.split('/').pop().split('.')[0];
    let name = filename
      .replace(/[-_]logo/gi, '')
      .replace(/_\d+/g, '')
      .replace(/-\d+x\d+/g, '')
      .replace(/[_-]/g, ' ');
    name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    if (name === "Bhel") return "BHEL";
    if (name === "Isrro") return "ISRO";
    if (name === "Gnfc") return "GNFC";
    if (name === "Ongc") return "ONGC";
    if (name === "Upl") return "UPL";
    if (name === "Jsw") return "JSW";
    
    if (/^\d+$/.test(name)) {
      return "Industrial Partner";
    }
    return name;
  };

  return (
    <div className="w-full font-sans">
      <MetaTags 
        title={data.meta.title}
        description={data.meta.description}
        keywords={data.meta.keywords}
        robots={KEPT_CITIES.includes(lowercaseCity) ? "index, follow" : "noindex, nofollow"}
      />
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] md:h-[700px] flex items-center pt-24 md:pt-0">
        <div 
          className="absolute inset-0 z-0"
          title={data.banner.imageAlt}
          style={{
            backgroundImage: "url('/images/banner.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16 pb-20">
          <div className="max-w-5xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
              <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
              <ChevronRight size={14} className="text-slate-400" />
              <Link to="/market-area" className="hover:text-[#D71920] transition-colors">Market Area</Link>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-[#D71920] font-bold">{data.city}</span>
            </div>

            <div className="inline-block mb-4 px-4 py-1 rounded border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg uppercase tracking-tight">
              {data.banner.h1}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              {data.banner.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap">
              <button 
                onClick={openQuotePopup}
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
                style={{ backgroundColor: '#D71920' }}
              >
                REQUEST A QUOTE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Highlights Section */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mt-10 md:-mt-24 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.banner.highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded shadow-xl border-t-4 hover:-translate-y-2 transition-transform duration-300 group"
              style={{ borderColor: '#D71920' }}
            >
              <div 
                className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300"
              >
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#0F172A' }}>
                {highlight.feature}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {highlight.reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Content Sections */}
      <div className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/why.jpeg" 
                alt={data.warehouseImageAlt} 
                title={data.warehouseImageAlt}
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div 
                className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 p-6 md:p-8 rounded-lg shadow-xl text-white max-w-[200px]"
                style={{ backgroundColor: '#D71920' }}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-1">ISO</div>
                <div className="text-sm font-medium opacity-90 leading-tight">9001:2015 Certified Excellence</div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
                  Piping & Forged Fittings Solutions for {data.city}
                </h2>
                <div className="h-1 w-24 mb-6 rounded bg-[#D71920]"></div>
                <p 
                  className="text-slate-600 leading-relaxed text-sm md:text-base text-left mb-6"
                  dangerouslySetInnerHTML={{ __html: data.introParagraph }}
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
                  ISO 9001:2015 Certified Quality & Material Testing
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base text-left">
                  At Remax Forge & Fittings, compliance and precision are non-negotiable. To ensure 100% reliability in high-pressure steam, oil and gas, and chemical utilities, all piping hardware is manufactured under a certified ISO 9001:2015 quality management system in our Mumbai facility. Before dispatching any order to {data.city}, every item undergoes rigorous destructive and non-destructive quality testing. This includes Positive Material Identification (PMI), hydrostatic pressure testing, ultrasonic flaws checks, and dimensional audits to ASME B16.5, B16.47, and B16.11 standards. Every dispatch is accompanied by an EN 10204 3.1 Mill Test Certificate (MTC), dimensional reports, and compliance docs.
                </p>
              </div>
              
              <div className="pt-4 flex justify-start">
                <button 
                  onClick={openQuotePopup}
                  className="px-8 py-4 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
                  style={{ backgroundColor: '#D71920' }}
                >
                  ENQUIRY NOW
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Forging Solutions (Product Slider/Grid) */}
      <div id="products-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              PREMIUM SOLUTIONS IN {data.city.toUpperCase()}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              Premium Forging Solutions
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.products.map((product, index) => (
              <div 
                key={index} 
                onClick={() => openProductMenu(index)}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col min-h-[450px] cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={index === 0 ? "/images/industrial-flanges.jpeg" : index === 1 ? "/images/but-weld-fittings.jpeg" : "/images/socket-weld-fittings.jpeg"} 
                    alt={product.alt} 
                    title={product.alt}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D71920] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#D71920] transition-colors mb-3" style={{ color: '#0F172A' }}>
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-2 block" style={{ color: '#D71920' }}>
              Why Choose Remax Forge & Fittings in {data.city}?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Engineering The Extraordinary through Precision & Compliance
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "ISO 9001:2015 Certified", desc: "Unlike standard suppliers, Remax Forge & Fittings operates a certified zero-defect manufacturing unit. We are premier Flanges Manufacturers, ensuring every component meets the stringent safety regulations. Our in-house testing lab conducts: Hydrostatic & Ultrasonic Testing, Positive Material Identification (PMI), Radiography & Magnetic Particle Inspection." },
              { title: "Advanced CNC Precision", desc: "While competitors offer standard sizes, we excel in Custom Forging Solutions. Using state-of-the-art CNC machinery and forging hammers, we maintain tight tolerances for High-Pressure Forged Fittings (2000#, 3000#, 6000#, and 9000#) and Specialized Flange Faces (RTJ, Tongue & Groove, Male-Female)." },
              { title: "Global Export Footprint", desc: "As a leading Flanges Exporter in India, we have perfected our logistics to serve over 45 countries, including the UAE, USA, and Saudi Arabia. Our strategic inventory management allows us to offer the shortest lead times in the industry." },
              { title: "Technical Consultancy", desc: "We don't just sell fittings; we provide engineering solutions. Our team of experts assists you in selecting the correct pressure ratings and material grades to prevent corrosion and system failure in extreme environments." }
            ].map((item, index) => {
              const icons = [<Award size={40} />, <Factory size={40} />, <Globe size={40} />, <PenTool size={40} />];
              return (
                <div key={index} className="group relative flex flex-col">
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#1e293b] group-hover:bg-[#D71920] transition-colors duration-300"></div>
                  <div className="pl-8 py-2 flex flex-col flex-grow">
                    <div className="mb-5 inline-block text-[#D71920] transform group-hover:scale-110 transition-transform duration-300">
                      {icons[index]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D71920] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries/Sectors We Serve */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              Sectors We Serve in {data.city}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              Industries We Empower
            </h2>
            <p className="text-slate-600">Precision-engineered components for mission-critical environments.</p>
            <div className="h-1 w-20 mx-auto rounded mt-4" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.sectors || []).map((item, index) => (
              <div key={index} className="group relative bg-slate-900 rounded-lg overflow-hidden h-80 shadow-lg">
                <img 
                  src={item.image} 
                  alt={`Remax Forge supplying flanges and fittings to ${item.sector} sector in ${data.city}`} 
                  title={`Remax Forge supplying flanges and fittings to ${item.sector} sector in ${data.city}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.sector}</h3>
                  <div className="h-0.5 w-12 bg-[#D71920] mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-slate-300 text-sm font-medium mb-1">{item.application}</p>
                  <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-4">{item.products}</p>
                  
                  {item.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.links.map((link, lIndex) => (
                        <Link
                          key={lIndex}
                          to={link.url}
                          className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 border border-white/30 text-white hover:bg-[#D71920] hover:border-[#D71920] transition-all duration-300 rounded backdrop-blur-sm"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logistics & Delivery Section */}
      <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              Logistics & Delivery Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              Getting it to {data.city}
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 space-y-6">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                <Truck className="text-[#D71920]" size={24} />
                Shipping & Transit Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-slate-100 pb-3 text-sm">
                  <span className="text-slate-500 font-medium">Primary Freight Route</span>
                  <span className="text-[#0F172A] font-bold text-right">{data.route || "NH-48 Corridor"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3 text-sm">
                  <span className="text-slate-500 font-medium">Estimated Transit Time</span>
                  <span className="text-[#0F172A] font-bold text-right">~{Math.round(data.transit || 4)} Working Days</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3 text-sm">
                  <span className="text-slate-500 font-medium">Dispatch Schedule</span>
                  <span className="text-[#0F172A] font-bold text-right">24–48 Hours (Ex-Stock Items)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3 text-sm">
                  <span className="text-slate-500 font-medium">Custom Forgings Lead Time</span>
                  <span className="text-[#0F172A] font-bold text-right">7–15 Working Days</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">Transit Summary</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {data.logistics}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-[#0F172A] mb-2">Seaworthy Packing</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Wooden crates or pallets wrapped with rust-preventive oils and plastics to survive coastal storage conditions.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-[#0F172A] mb-2">Documents Pack</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Invoice, packing list, EN 10204 3.1 MTC, PMI reports, hydro test reports, and IBR Form II (if applicable) are dispatched with every order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Infinite Scroll */}
      <div className="pt-32 pb-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">Our Clients</h2>
          <div className="h-1 w-20 mx-auto rounded bg-[#D71920]"></div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-infinite-scroll">
            <div className="flex gap-20 px-12 items-center">
              {clientLogos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex-shrink-0 w-36 h-24 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={`${getClientAltText(logo)} logo — supplier to ${data.city}`} 
                    loading="lazy" 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-20 px-12 items-center">
              {clientLogos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0 w-36 h-24 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={`${getClientAltText(logo)} logo — supplier to ${data.city}`} 
                    loading="lazy" 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              FAQs
            </h2>
            <div className="h-1 w-20 mx-auto rounded bg-[#D71920]"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {data.faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm border transition-all duration-300 ${openFaqIndex === index ? 'border-[#D71920] ring-1 ring-[#D71920]' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                >
                  <h3 className={`text-lg font-bold transition-colors ${openFaqIndex === index ? 'text-[#D71920]' : 'text-[#0F172A] group-hover:text-[#D71920]'}`}>
                    {faq.q}
                  </h3>
                  <div className={`shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-[#D71920]' : 'text-slate-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100 whitespace-pre-line">
                    {faq.a.trim()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Also Serving (Nearby Cities) Section */}
      {data.nearbyCities && data.nearbyCities.length > 0 && (
        <div className="py-12 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-extrabold tracking-widest text-[#0F172A] uppercase mb-4">
              Also Serving in {data.state}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearbyCities.map((city, idx) => (
                <Link
                  key={idx}
                  to={city.url}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full hover:bg-[#D71920] hover:text-white hover:border-[#D71920] transition-all duration-300"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityPage;
