import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Settings, Clock, CheckCircle2, Factory, Award, Truck, PenTool, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';
import MetaTags from '../components/common/MetaTags.jsx';
import { marketAreaData } from '../data/marketAreaData.js';

const CityPage = () => {
  const { stateName, cityName } = useParams();
  const navigate = useNavigate();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();
  
  const KEPT_CITIES = Object.keys(marketAreaData);

  const lowercaseCity = cityName?.toLowerCase();
  const lookupKey = stateName ? `${stateName}/${cityName}` : cityName;
  const data = marketAreaData[lookupKey?.toLowerCase()];

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

  const [productSlide, setProductSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProductSlide((prev) => (prev + 1) % (data.products.length - 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [data.products.length]);

  return (
    <div className="w-full">
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
            animation: infinite-scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] md:h-[700px] flex items-center pt-20 md:pt-0">
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
            <div className="inline-block mb-4 px-4 py-1 rounded border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg uppercase tracking-tight">
              {data.banner.h1.split('Manufacturer')[0]}
              <span className="lg:block" style={{ color: '#D71920' }}> Manufacturer {data.banner.h1.split('Manufacturer')[1]}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              {data.banner.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap">
              <button 
                onClick={scrollToProducts}
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
                style={{ backgroundColor: '#D71920' }}
              >
                OUR PRODUCTS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={openQuotePopup}
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:bg-white/20 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
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
              {data.sections
                .filter(section => !section.title.includes("Industrial Piping Solutions Provider"))
                .map((section, index) => (
                <div key={index}>
                  <h2 
                    className={`${index === 0 ? 'text-2xl md:text-3xl text-center' : 'text-xl md:text-2xl text-left'} font-extrabold mb-2`} 
                    style={{ color: '#0F172A' }}
                  >
                    {section.title}
                  </h2>
                  {index === 0 && (
                    <div className="h-1 w-24 mb-6 rounded bg-[#D71920] mx-auto"></div>
                  )}
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base text-left">
                    {section.content}
                  </p>
                </div>
              ))}
              
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

      {/* Premium Forging Solutions (Product Slider) */}
      <div id="products-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              PREMIUM SOLUTIONS IN {cityName.toUpperCase()}
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
              Why Choose Remax Forge & Fittings in {cityName}?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Engineering The Extraordinary through Precision & Compliance
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.whyChooseUs || [
              { title: "ISO 9001:2015 Certified", desc: "Unlike standard suppliers, Remax Forge & Fittings operates a certified zero-defect manufacturing unit. We are premier Flanges Manufacturers, ensuring every component meets the stringent safety regulations. Our in-house testing lab conducts: Hydrostatic & Ultrasonic Testing, Positive Material Identification (PMI), Radiography & Magnetic Particle Inspection." },
              { title: "Advanced CNC Precision", desc: "While competitors offer standard sizes, we excel in Custom Forging Solutions. Using state-of-the-art CNC machinery and forging hammers, we maintain tight tolerances for High-Pressure Forged Fittings (2000#, 3000#, 6000#, and 9000#) and Specialized Flange Faces (RTJ, Tongue & Groove, Male-Female)." },
              { title: "Global Export Footprint", desc: "As a leading Flanges Exporter in India, we have perfected our logistics to serve over 45 countries, including the UAE, USA, and Saudi Arabia. Our strategic inventory management allows us to offer the shortest lead times in the industry." },
              { title: "Technical Consultancy", desc: "We don't just sell fittings; we provide engineering solutions. Our team of experts assists you in selecting the correct pressure ratings and material grades to prevent corrosion and system failure in extreme environments." }
            ]).map((item, index) => {
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

      {/* Industries We Serve */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              Sectors We Serve in {cityName}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              Industries We Empower
            </h2>
            <p className="text-slate-600">Precision-engineered components for mission-critical environments.</p>
            <div className="h-1 w-20 mx-auto rounded mt-4" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sector: "Oil & Gas",
                application: "High-pressure extraction & refining",
                products: "Forged Flanges, RTJ Joints",
                image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
                links: [
                  { name: "Butt Weld Elbow Fittings", url: "/products/buttweld-fittings/butt-weld-elbow-fittings" },
                  { name: "Weld Neck Flange", url: "/products/flanges/weld-neck-flange" }
                ]
              },
              {
                sector: "Petrochemical",
                application: "Corrosive chemical processing",
                products: "Stainless Steel Fittings, Duplex Steel",
                image: "/images/petro-chemical.jpeg",
                links: [
                  { name: "Socket Weld Coupling Fittings", url: "/products/socket-weld-fittings/socket-weld-coupling-fittings" },
                  { name: "Threaded Flange", url: "/products/flanges/threaded-flange" }
                ]
              },
              {
                sector: "Power Plants",
                application: "Boiler systems & steam generation",
                products: "IBR Approved Fittings, Alloy Steel",
                image: "/images/power-plant.jpeg",
                links: [
                  { name: "Butt Weld Tee Fittings", url: "/products/buttweld-fittings/butt-weld-tee-fittings" },
                  { name: "Concentric Reducer", url: "/products/buttweld-fittings/concentric-reducer" }
                ]
              },
              {
                sector: "Marine & Defense",
                application: "Saltwater resistant infrastructure",
                products: "Copper Nickel & Monel Components",
                image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop",
                links: [
                  { name: "Socket Weld Elbow Fittings", url: "/products/socket-weld-fittings/socket-weld-elbow-fittings" },
                  { name: "Blind Flange", url: "/products/flanges/blind-flange" }
                ]
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-slate-900 rounded-lg overflow-hidden h-80 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.sector} 
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
                        <button
                          key={lIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(link.url);
                          }}
                          className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 border border-white/30 text-white hover:bg-[#D71920] hover:border-[#D71920] transition-all duration-300 rounded backdrop-blur-sm"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Piping Solutions Provider Section (Moved) */}
      {data.sections
        .filter(section => section.title.includes("Industrial Piping Solutions Provider"))
        .map((section, index) => (
          <div key={index} className="pt-24 pb-32 text-white" style={{ backgroundColor: '#0F172A' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                  {section.title}
                </h2>
                <div className="h-1 w-20 mx-auto rounded mb-10" style={{ backgroundColor: '#D71920' }}></div>
                <div className="space-y-6">
                  {section.content.split('. ').map((sentence, i, arr) => {
                    // Logic to group sentences into paragraphs for better readability like in Image 4
                    const isLast = i === arr.length - 1;
                    const content = sentence + (isLast ? "" : ".");
                    
                    // Grouping: 0,1 in para 1 | 2,3 in para 2 | 4 in para 3
                    if (i === 0 || i === 2 || i === 4) {
                      return (
                        <p key={i} className="text-slate-300 text-lg md:text-xl leading-relaxed">
                          {content} {!isLast && i !== 4 && arr[i+1] ? arr[i+1] + (i+1 === arr.length - 1 ? "" : ".") : ""}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}

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
                  <img src={logo} alt={`Client ${index}`} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex gap-20 px-12 items-center">
              {clientLogos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0 w-36 h-24 flex items-center justify-center">
                  <img src={logo} alt={`Client ${index}`} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (Moved after Clients) */}
      <div className="py-24 bg-slate-50">
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
                  <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
