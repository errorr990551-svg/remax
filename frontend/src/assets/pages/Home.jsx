import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Settings, Clock, CheckCircle2, Calendar, Factory, Award, Truck, PenTool, Recycle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';
import { useProductMenu } from '../context/ProductMenuContext.jsx';

const Home = () => {
  const navigate = useNavigate();
  const { openQuotePopup } = useQuotePopup();
  const { openProductMenu } = useProductMenu();

  const scrollToServices = () => {
    const section = document.getElementById('services-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Data for the 4 feature cards
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Assurance",
      description: "Our zero-defect policy is backed by rigorous testing. Every component undergoes ultrasonic, hydro, and chemical analysis to ensure compliance with ASTM, ASME, and DIN standards."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Export Hub",
      description: "Strategically located in Mumbai, India, we are premier exporters providing seamless logistics and timely delivery to the USA, UAE, Europe, and Southeast Asia."
    },
    {
      icon: <Settings size={40} />,
      title: "Custom Forging Solutions",
      description: "We provide bespoke manufacturing for special alloys, including Stainless Steel, Carbon Steel, and Duplex, tailored to your unique project dimensions."
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Technical Support",
      description: "Our engineering team provides round-the-clock consultancy to help you select the right pressure ratings (2000#, 3000#, 6000#) for your infrastructure."
    }
  ];

  // Data for the Product Section
  const productsList = [
    {
      title: "Industrial Flanges",
      description: "Top-rated Flanges Manufacturer in India, producing Slip-on, Weld Neck, Blind, and Socket Weld flanges. Compliant with ASME B16.5 and B16.47 specifications.",
      image: "/images/slip-on-flange.webp",
      link: "/products/flanges/slip-on-flange"
    },
    {
      title: "Buttweld Fittings",
      description: "High-durability seamless and welded fittings, including reducers and caps, engineered for smooth flow and maximum structural integrity.",
      image: "/images/butt weld elbow fittings.webp",
      link: "/products/buttweld-fittings/butt-weld-elbow-fittings"
    },
    {
      title: "Socket Weld Fittings",
      description: "Precision-crafted Socket Weld and Threaded Fittings (Elbows, Tees, Unions, and Couplings) designed for high-pressure systems.",
      image: "/images/elbow.webp",
      link: "/products/socket-weld-fittings/socket-weld-coupling-fittings"
    }
  ];

  // Data for "Why Choose Us" GRID Section (Static with descriptions)
  const whyUsGrid = [
    { 
      icon: <Award size={40} />, 
      title: "ISO 9001:2015 & IBR Approved", 
      description: "Unlike standard suppliers, Remax Forge & Fittings operates a certified zero-defect manufacturing unit. We are premier IBR Approved Flanges Manufacturers, ensuring every component meets the stringent safety Indian Boiler Regulations. Our in-house testing lab conducts: Hydrostatic & Ultrasonic Testing, Positive Material Identification (PMI), Radiography & Magnetic Particle Inspection." 
    },
    { 
      icon: <Factory size={40} />, 
      title: "Advanced CNC Precision", 
      description: "While competitors offer standard sizes, we excel in Custom Forging Solutions. Using state-of-the-art CNC machinery and forging hammers, we maintain tight tolerances for High-Pressure Forged Fittings (2000#, 3000#, 6000#, and 9000#) and Specialized Flange Faces (RTJ, Tongue & Groove, Male-Female)." 
    },
    { 
      icon: <Truck size={40} />, 
      title: "Global Export Footprint", 
      description: "As a leading Flanges Exporter in India, we have perfected our logistics to serve over 45 countries, including the UAE, USA, and Saudi Arabia. Our strategic inventory management allows us to offer the shortest lead times in the industry." 
    },
    { 
      icon: <PenTool size={40} />, 
      title: "Technical Consultancy", 
      description: "We don't just sell fittings; we provide engineering solutions. Our team of experts assists you in selecting the correct pressure ratings and material grades to prevent corrosion and system failure in extreme environments." 
    }
  ];

  // Data for SLIDER Section (5 items with Images now)
  const sliderItems = [
    { 
      image: "/images/advance manufacturing.webp",
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

  // Data for Clients Section (Using placeholder logos)
  const clientLogos = [
    "/images/1.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.svg",
    "/images/12.webp",
    "/images/13.webp",
    "/images/14.webp",
    "/images/15.webp",
    "/images/16.webp",
    "/images/17.webp",
    "/images/19.webp",
    "/images/c2.webp",
    "/images/Adani_2012_logo.webp",
    "/images/air-products-logo.webp",
    "/images/Arcelor_Mittal.svg.webp",
    "/images/BHEL_logo.svg.webp",
    "/images/bhilosa.webp",
    "/images/deccan.webp",
    "/images/deepak chem tech.webp",
    "/images/DESMET.jpg.webp",
    "/images/gardner denver.webp",
    "/images/gnfc.webp",
    "/images/godrej-logo.jpg.webp",
    "/images/gujrat state fertilizers.webp",
    "/images/Hindustan-Petroleum.webp",
    "/images/indian-oil.jpg.webp",
    "/images/isrro.jpg.webp",
    "/images/jindal-steel.webp",
    "/images/jsw.webp",
    "/images/larsen.webp",
    "/images/linde.webp",
    "/images/nrl-og-logo.webp",
    "/images/ongc.webp",
    "/images/paharpur.webp",
    "/images/pidilite-logo.jpg.webp",
    "/images/Praj.jpg.webp",
    "/images/Shree_Renuka_Sugars.jpg.webp",
    "/images/tata-steel.jpg.webp",
    "/images/thyssenkurpp.webp",
    "/images/upl.webp",
    "/images/wipro-logo-300x300.webp"
  ];




  // Product Slider State
  const [productSlide, setProductSlide] = useState(0);
  const itemsPerPage = 3;

  const nextProductSlide = () => {
    setProductSlide((prev) => (prev + 1) % (productsList.length - 2));
  };

  const prevProductSlide = () => {
    setProductSlide((prev) => (prev === 0 ? productsList.length - 3 : prev - 1));
  };

  // Original Feature Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (sliderItems.length - 2)); 
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderItems.length]);

  // Auto-slide for Product Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setProductSlide((prev) => (prev + 1) % (productsList.length - 2));
    }, 5000); // Slightly different timing for variety
    return () => clearInterval(timer);
  }, [productsList.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (sliderItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderItems.length - 3 : prev - 1));
  };



  return (
    <div className="w-full">
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
        {/* Background Image (Unsplash Industrial) */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')", // Industrial pipes/forge image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20">
          <div className="max-w-5xl">
            {/* Small Badge */}
            <div className="inline-block mb-4 px-4 py-1 rounded border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg uppercase tracking-tight">
              Top Flanges & Forged Fittings
              <span className="lg:block" style={{ color: '#D71920' }}> Manufacturer in India</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              Remax Forge & Fittings is a premier IBR-approved manufacturer and supplier of industrial flanges, buttweld fittings, and high-pressure forged components. Serving oil, gas, and petrochemical industries across India and 45+ countries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap">
              <button 
                onClick={scrollToServices}
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
                style={{ backgroundColor: '#D71920' }}
              >
                OUR SERVICES
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="/Remax Brochure.pdf" 
                download 
                className="w-full sm:w-auto px-8 py-4 rounded font-bold text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:bg-white/20 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0 min-w-[180px]"
              >
                DOWNLOAD BROCHURE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
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

      {/* Welcome / About Section */}
      <div className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2 relative">
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/we are the leaders.webp" 
                  alt="Industrial Worker Welding" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Decorative border outline */}
                <div 
                  className="absolute inset-0 border-4 pointer-events-none"
                  style={{ borderColor: 'rgba(215, 25, 32, 0.1)' }} // Very faint red border inside
                ></div>
              </div>
              
              {/* Floating Experience Box */}
              <div 
                className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 p-6 md:p-8 rounded-lg shadow-xl text-white max-w-[200px]"
                style={{ backgroundColor: '#D71920' }}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-1">25+</div>
                <div className="text-sm font-medium opacity-90 leading-tight">Years of Industrial Excellence</div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-1/2">
              <span className="block text-sm font-bold tracking-wider uppercase mb-2" style={{ color: '#D71920' }}>
                Why Remax Forge Leads
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#0F172A' }}>
                The Indian Industrial Market
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                While many are wholesale suppliers, Remax Forge & Fittings operates as a tech-driven manufacturer. We combine traditional craftsmanship with advanced CNC machining to deliver products that withstand extreme high-pressure and corrosive environments.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: "Complete Material Traceability", desc: "Every product is shipped with Mill Test Certificates (MTC) as per EN 10204 3.1." },
                  { title: "Advanced Metallurgy", desc: "Experts in Stainless Steel (304/316L), Carbon Steel (A105), and Alloy Steel (F5, F11, F22)." },
                  { title: "Precision Engineering", desc: "Tight tolerances and superior surface finishes that exceed standard market offerings." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" style={{ color: '#D71920' }} />
                    <div>
                      <span className="text-slate-900 font-bold block">{item.title}</span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/about-us')}
                className="px-8 py-3 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
                style={{ backgroundColor: '#0F172A' }}
              >
                About Company
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Our Products / Services Section */}
      <div id="services-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              What We Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
              Premium Forging Solutions
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          {/* Product Carousel Viewport Wrapper */}
          <div className="relative group/carousel">
            
            {/* Navigation Arrows on Sides */}
            <div 
              onClick={prevProductSlide}
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-30 cursor-pointer text-slate-400 hover:text-[#D71920] transition-colors bg-white rounded-full p-1 shadow-md hover:shadow-lg hidden md:flex"
            >
              <ChevronLeft size={40} />
            </div>
            
            <div 
              onClick={nextProductSlide}
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-30 cursor-pointer text-slate-400 hover:text-[#D71920] transition-colors bg-white rounded-full p-1 shadow-md hover:shadow-lg hidden md:flex"
            >
              <ChevronRight size={40} />
            </div>

            {/* Mobile Navigation (Always Visible) */}
            <div className="flex md:hidden justify-center gap-4 mb-6">
              <div 
                onClick={prevProductSlide}
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full shadow-sm active:scale-95 text-slate-400"
              >
                <ChevronLeft size={20} />
              </div>
              <div 
                onClick={nextProductSlide}
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full shadow-sm active:scale-95 text-slate-400"
              >
                <ChevronRight size={20} />
              </div>
            </div>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: `translateX(-${productSlide * (100 / itemsPerPage)}%)` }}
              >
                {productsList.map((product, index) => (
                  <div 
                    key={index} 
                    onClick={() => openProductMenu(index)}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-22px)] group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Decorative stripe */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D71920] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                    </div>

                    {/* Content */}
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

          {/* Request a Quote Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={openQuotePopup}
              className="px-8 py-3 rounded font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
              style={{ backgroundColor: '#D71920' }}
            >
              Request a Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Grid Section (Static, Dark Background) */}
      <div className="py-24" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-2 block" style={{ color: '#D71920' }}>
              Why Choose Remax
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Engineering The Extraordinary
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsGrid.map((item, index) => (
              <div key={index} className="group relative">
                {/* Border effect */}
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

      {/* Industries We Empower Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">
              Sectors We Serve
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
                image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
              },
              {
                sector: "Petrochemical",
                application: "Corrosive chemical processing",
                products: "Stainless Steel Fittings, Duplex Steel",
                image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop"
              },
              {
                sector: "Power Plants",
                application: "Boiler systems & steam generation",
                products: "IBR Approved Fittings, Alloy Steel",
                image: "https://images.unsplash.com/photo-1466611653911-954ff21b6748?q=80&w=2070&auto=format&fit=crop"
              },
              {
                sector: "Marine & Defense",
                application: "Saltwater resistant infrastructure",
                products: "Copper Nickel & Monel Components",
                image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-slate-900 rounded-lg overflow-hidden h-80 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.sector} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.sector}</h3>
                  <div className="h-0.5 w-12 bg-[#D71920] mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-slate-300 text-sm font-medium mb-1">{item.application}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">{item.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ==================== OUR CLIENTS SECTION (Infinite Slider - Logos Only) ==================== */}
<div className="py-17 bg-white border-t border-slate-100 overflow-hidden">

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
            className="flex-shrink-0 w-36 h-24 flex items-center justify-center transition duration-300"
          >
            <img
              src={logo}
              alt={`Client ${index}`}
              className="max-w-full max-h-full object-contain transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Duplicate Set for Seamless Loop */}
      <div className="flex gap-20 px-12 items-center">
        {clientLogos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className="flex-shrink-0 w-36 h-24 flex items-center justify-center transition duration-300"
          >
            <img
              src={logo}
              alt={`Client ${index}`}
              className="max-w-full max-h-full object-contain transition duration-300"
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

export default Home;