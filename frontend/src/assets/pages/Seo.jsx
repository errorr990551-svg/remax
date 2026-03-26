import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Globe, Settings, Clock, ChevronLeft, ChevronRight, Factory, Award, Truck, PenTool, Recycle } from 'lucide-react';

const Seo = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified manufacturing processes ensuring zero-defect products."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Export",
      description: "Trusted by industries in over 45 countries with reliable logistics and timely delivery."
    },
    {
      icon: <Settings size={40} />,
      title: "Custom Forging",
      description: "Tailor-made solutions and bespoke dimensions to fit your specific project requirements."
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Support",
      description: "Dedicated technical support team ready to assist you around the clock."
    }
  ];

  // Category Data for the "Explore Our Range" Slider
  const categoriesList = [
    { name: "Flanges", image: "https://images.unsplash.com/photo-1622632128965-055c0a3739db?auto=format&fit=crop&q=80&w=800" },
    { name: "Buttweld Fittings", image: "https://images.unsplash.com/photo-1518709414768-a8c554069679?auto=format&fit=crop&q=80&w=800" },
    { name: "Forged Fittings", image: "https://images.unsplash.com/photo-1558611997-0950a7522439?auto=format&fit=crop&q=80&w=800" },
    { name: "Pipes", image: "https://images.unsplash.com/photo-1584984558296-61a7924fb3fa?auto=format&fit=crop&q=80&w=800" },
    { name: "Tubes", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800" },
    { name: "Round Bar", image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80&w=800" },
    { name: "Plates", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" }
  ];

  // Data for "Why Choose Us" GRID Section (Static with descriptions)
  const whyUsGrid = [
    { 
      icon: <Factory size={40} />, 
      title: "Advanced Manufacturing", 
      description: "Our facility is equipped with the latest CNC machinery and forging hammers, allowing us to maintain tight tolerances and superior surface finishes on every component." 
    },
    { 
      icon: <Award size={40} />, 
      title: "Certified Excellence", 
      description: "We adhere to strict international standards including ASME, ASTM, and DIN. Our in-house testing laboratory ensures every fitting meets rigorous quality benchmarks." 
    },
    { 
      icon: <Truck size={40} />, 
      title: "Fast Global Delivery", 
      description: "With a strategic inventory of raw materials and finished goods, we offer one of the shortest lead times in the industry for both standard and rush orders." 
    },
    { 
      icon: <PenTool size={40} />, 
      title: "Technical Expertise", 
      description: "Our team of engineers brings over two decades of experience to help you select the right materials and specifications for your critical infrastructure projects." 
    }
  ];

  // Data for SLIDER Section (Featured Highlights)
  const sliderItems = [
    { 
      image: "https://images.unsplash.com/photo-1565514020176-db765cb86b72?q=80&w=2070&auto=format&fit=crop",
      icon: <Factory size={32} />, 
      title: "Advanced Manufacturing", 
      description: "State-of-the-art machinery for precision forging." 
    },
    { 
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      icon: <Award size={32} />, 
      title: "Certified Excellence", 
      description: "Adhering to strict international standards (ASME, ASTM)." 
    },
    { 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      icon: <Truck size={32} />, 
      title: "Fast Global Delivery", 
      description: "Strategic logistics for short lead times worldwide." 
    },
    { 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      icon: <PenTool size={32} />, 
      title: "Technical Expertise", 
      description: "Decades of engineering experience at your service." 
    },
    { 
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
      icon: <Recycle size={32} />, 
      title: "Sustainable Practices", 
      description: "Eco-friendly manufacturing with 100% recyclable materials." 
    }
  ];

  // Data for Clients Section (Using specific logos)
  const clientLogos = [
    "https://companieslogo.com/img/orig/RELIANCE.NS-7401d43b.png",
    "https://companieslogo.com/img/orig/TATASTEEL.NS-501bde94.png",
    "https://companieslogo.com/img/orig/LT.NS-6b66d9b5.png",
    "https://companieslogo.com/img/orig/ONGC.NS-ef2a6c0a.png",
    "https://companieslogo.com/img/orig/IOC.NS-d918cdb8.png",
    "https://companieslogo.com/img/orig/BHEL.NS-628fb5c5.png",
    "https://companieslogo.com/img/orig/GAIL.NS-f7d6a4a4.png",
    "https://companieslogo.com/img/orig/NTPC.NS-97c35e29.png",
    "https://companieslogo.com/img/orig/ESSAR.NS.png",
    "https://companieslogo.com/img/orig/JINDALSTEL.NS-ef5cccec.png",
    "https://companieslogo.com/img/orig/ADANIENT.NS-884fc12a.png",
    "https://companieslogo.com/img/orig/VEDL.NS-3c80f6a4.png"
  ];

  // ---------------- STATE & LOGIC ---------------- //

  // 1. Explore Our Range Slider State
  const [rangeSlide, setRangeSlide] = useState(0);
  const maxRangeSlide = categoriesList.length - 3;

  const nextRangeSlide = () => {
    setRangeSlide((prev) => (prev >= maxRangeSlide ? 0 : prev + 1));
  };

  const prevRangeSlide = () => {
    setRangeSlide((prev) => (prev === 0 ? maxRangeSlide : prev - 1));
  };

  // 2. Featured Highlights Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for Featured Highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (sliderItems.length - 2)); 
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (sliderItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderItems.length - 3 : prev - 1));
  };

  return (
    <div className="w-full font-sans bg-slate-50 min-h-screen">
      {/* Styles for Infinite Scroll Animation */}
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

      {/* Hero / Banner Section */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')", // Industrial pipes/forge image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1 rounded border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Precision Engineering for <br />
              <span style={{ color: '#D71920' }}>Global Industries</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              We manufacture high-quality forged fittings, flanges, and high-pressure components designed to withstand the toughest environments. Quality you can trust, delivered worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap">
              <button 
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
                style={{ backgroundColor: '#D71920' }}
              >
                OUR SERVICES
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section (Overlapping the banner slightly) */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-24 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded shadow-xl border-t-4 hover:-translate-y-2 transition-transform duration-300 group"
              style={{ borderColor: '#D71920' }}
            >
              <div 
                className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0F172A' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- EXPLORE OUR RANGE SECTION (SLIDER) --- */}
      <div className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
                Our Products
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
                Explore Our Range
              </h2>
              <div className="h-1 w-20 rounded bg-[#D71920] mt-4"></div>
            </div>
            
            <div className="hidden md:flex gap-3">
              <button 
                onClick={prevRangeSlide}
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-[#D71920] hover:text-white hover:border-[#D71920] transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextRangeSlide}
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-[#D71920] hover:text-white hover:border-[#D71920] transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative -mx-4 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${rangeSlide * (100 / 3)}%)` }}
            >
              {categoriesList.map((category, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 h-full flex flex-col">
                    
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    <div className="p-6 flex justify-between items-center bg-white flex-grow">
                      <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#D71920] transition-colors">
                        {category.name}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-[#D71920] transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    
                    <div className="h-1 w-full bg-[#D71920] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2 md:hidden">
            {Array.from({ length: maxRangeSlide + 1 }).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setRangeSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${rangeSlide === idx ? 'w-8 bg-[#D71920]' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* --- NEW SEO CONTENT SECTION --- */}
      <div className="bg-white py-20 lg:py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute inset-0 border-2 border-red-200 rounded-2xl transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Remax Industrial Facility" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 right-0 bg-[#D71920] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-tl-2xl shadow-lg">
                  Remax Forge & Fittings
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
                Welcome to Remax Forge & Fittings
              </h2>
              <div className="h-1 w-24 bg-[#D71920] rounded-full mb-10"></div>

              <div className="space-y-10 text-slate-600 leading-relaxed text-justify">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                    Leading Forged Fittings Manufacturers in [Your Region]
                  </h3>
                  <p>
                    Remax Forge & Fittings specializes in manufacturing and exporting a wide range of industrial piping components in <span className="font-semibold text-[#D71920]">[Your Region]</span> to suit critical infrastructure needs. When it comes to high-quality, ISO-certified, and reliable products, look no further than our esteemed <span className="font-semibold text-[#D71920]">Forged Fittings Suppliers in [Your Region]</span>. Our dedicated professionals ensure that every product meets rigorous international standards like ASME, ASTM, and DIN.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    Premium Flanges & Pipe Fittings in [Your Region]
                  </h3>
                  <p>
                    For those seeking precision-crafted and highly durable industrial piping solutions, we, as one of the top <span className="font-semibold text-[#D71920]">Flanges & Pipe Fittings Suppliers in [Your Region]</span>, offer a diverse selection to choose from. These robustly manufactured components in <span className="font-semibold text-[#D71920]">[Your Region]</span> provide reliability during critical high-pressure operations and add an element of uncompromising safety to your facilities. Our fittings are designed to enhance the operational capabilities of your plant in <span className="font-semibold text-[#D71920]">[Your Region]</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    Wholesale Industrial Steel Plates in [Your Region]
                  </h3>
                  <p>
                    We offer a wide range of structural, boiler quality, and alloy steel plates in various specifications in <span className="font-semibold text-[#D71920]">[Your Region]</span> to complement different industrial requirements. If you prioritize material strength and project safety, we as the leading <span className="font-semibold text-[#D71920]">Wholesale Steel Plate Suppliers in [Your Region]</span> have you covered. Each product is thoroughly tested to ensure uncompromised performance in <span className="font-semibold text-[#D71920]">[Your Region]</span>, making it a perfect addition to heavy engineering and construction projects.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Why Choose Us Grid Section */}
      <div className="py-24" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-2 block" style={{ color: '#D71920' }}>
              Why Choose Remax
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Engineering The Extraordinary
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsGrid.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1e293b] group-hover:bg-[#D71920] transition-colors duration-300"></div>
                
                <div className="pl-8 py-2">
                  <div 
                    className="mb-5 inline-block text-[#D71920] transform group-hover:scale-110 transition-transform duration-300"
                  >
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D71920] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAP & STATS SECTION --- */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
            <div className="w-full md:w-5/12">
              <h2 className="text-xl md:text-2xl font-bold text-[#D71920] uppercase tracking-widest mb-2">
                Global Reach
              </h2>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] leading-snug">
                Leading Pipe Fittings & Flanges Manufacturers in [Your Region]
              </h3>
            </div>
            <div className="w-full md:w-7/12">
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                Remax Forge & Fittings offers a comprehensive variety of industrial flanges, butt-weld fittings, and high-pressure components that are available in different specifications as per project requirements. We are a prominent manufacturer and supplier in the industrial sector. The demand for our products has grown significantly over the years due to their excellent precision, uncompromised safety, and competitive pricing. Following the latest ASME, ASTM, and DIN standards, our supplies add reliability and operational efficiency to your facility.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:block">
            <div className="w-full md:w-3/4 md:ml-auto bg-slate-100 rounded-lg overflow-hidden aspect-square md:aspect-[21/9] relative z-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Service Map" 
                className="w-full h-full object-cover opacity-90" 
              />
              <div className="absolute inset-0 bg-[#0F172A]/20"></div>
            </div>

            <div className="w-full md:w-5/12 bg-[#0F172A] text-white relative z-10 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 shadow-2xl rounded-lg md:rounded-none overflow-hidden -mt-16 md:mt-0">
              <div className="grid grid-cols-2">
                
                <div className="p-8 border-b border-r border-slate-700/50 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D71920] mb-2">45+</div>
                  <div className="text-sm font-semibold tracking-wide text-slate-300">Countries Worldwide Served</div>
                </div>
                
                <div className="p-8 border-b border-slate-700/50 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D71920] mb-2">10k+</div>
                  <div className="text-sm font-semibold tracking-wide text-slate-300">Projects Completed</div>
                </div>
                
                <div className="p-8 border-r border-slate-700/50 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D71920] mb-2">5k+</div>
                  <div className="text-sm font-semibold tracking-wide text-slate-300">Standard & Custom Products</div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D71920] mb-2">25+</div>
                  <div className="text-sm font-semibold tracking-wide text-slate-300">Years of Experience</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SLIDER Section (Featured Highlights) --- */}
      <div className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Slider Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A]">Featured Highlights</h2>
            <div className="h-1 w-12 mx-auto mt-4 rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Arrows */}
            <div 
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 cursor-pointer text-slate-400 hover:text-[#D71920] transition-colors bg-white rounded-full p-1 shadow-md hover:shadow-lg" 
              onClick={prevSlide}
            >
              <ChevronLeft size={40} />
            </div>
            <div 
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 cursor-pointer text-slate-400 hover:text-[#D71920] transition-colors bg-white rounded-full p-1 shadow-md hover:shadow-lg" 
              onClick={nextSlide}
            >
              <ChevronRight size={40} />
            </div>

            {/* Viewport */}
            <div className="overflow-hidden w-full px-2">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }} 
              >
                {sliderItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-22px)] group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                    </div>

                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="mb-3 text-[#D71920] -mt-10 bg-white p-3 rounded-full shadow-lg relative z-10">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#D71920] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: sliderItems.length - 2 }).map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-8 bg-[#D71920]' : 'w-2 bg-slate-300'}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== OUR CLIENTS SECTION (Infinite Slider - Logos Only) ==================== */}
      <div className="py-16 bg-white border-t border-slate-100 overflow-hidden">
        
        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
            Our Clients
          </h2>
          <div className="h-1 w-20 mx-auto rounded bg-[#D71920]"></div>
        </div>

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden">
          
          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Sliding Track */}
          <div className="flex w-max animate-infinite-scroll">
            
            {/* First Set */}
            <div className="flex gap-20 px-12 items-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-36 h-24 flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-20 px-12 items-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-36 h-24 flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Seo;