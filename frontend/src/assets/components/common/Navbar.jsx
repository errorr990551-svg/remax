import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Added
import LogoImg from '../../images/REMAX_FORGE_AND_FITTINGS-01.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Desktop & Mobile Dropdown States
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [qualityDropdownOpen, setQualityDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  
  // Category trackers
  const [activeCategory, setActiveCategory] = useState(0); // For Desktop
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null); // For Mobile Products
  const [mobileQualityOpen, setMobileQualityOpen] = useState(false); // For Mobile Quality

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slug Generator
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const productData = [
    {
      category: "Flanges",
      subcategories: [
        "Slip On Flange", "Weld Neck Flange", "Blind Flange", "Socket Weld Flange",
        "Threaded Flange", "Lap Joint Flange", "Long Weld Neck Flange", "Spectacle Blind Flange"
      ]
    },
    {
      category: "Buttweld Fittings",
      subcategories: [
        "Butt Weld Elbow Fittings", "180° Elbow", "90° Elbow", "45° Elbow",
        "Butt Weld Bends Fittings", "Butt Weld Tee Fittings", "Reducing Tee", "Straight Tee",
        "Butt Weld Reducers Fittings", "Concentric Reducer", "Eccentric Reducer", "Oval Caps"
      ]
    },
    {
      category: "Forged Fittings",
      subcategories: [
        "Socket Weld Elbow", "Threaded Elbow", "Socket Weld Tee", "Threaded Tee",
        "Coupling", "Union", "Plug", "Bush"
      ]
    },
    {
      category: "Pipes",
      subcategories: [
        "Stainless Steel Pipes", "Carbon Steel Pipes", "Hastelloy Pipes",
        "Incoloy Pipe", "Monel Pipe", "Titanium Pipe", "Tantalum Pipe",
        "Aluminium Pipe", "Duplex Steel/ Superduplex Steel Pipe", "Nickel Pipe",
        "Alloy Steel Pipes", "Mild Steel Pipes", "Copper Pipes", "Brass Pipes"
      ]
    },
    {
      category: "Tubes",
      subcategories: [
        "Stainless Steel Tubes", "Carbon Steel Tubes", "Hastelloy Tubes",
        "Incoloy Tubes", "Monel Tubes", "Titanium Tubes", "Tantalum Tubes",
        "Aluminium Tubes", "Duplex Steel/ Super duplex Steel Tube", "Nickel Tube",
        "Alloy Steel Tube", "Copper Tube", "Brass Tube"
      ]
    },
    {
      category: "Round Bar",
      subcategories: [
        "Stainless Steel Bar", "Carbon Steel Bar", "Alloy Steel Bar",
        "Duplex Steel Bar", "Nickel Alloy Bar"
      ]
    },
    {
      category: "Plates",
      subcategories: [
        "Hardox Plate", "Corten Steel Plate", "Boiler Quality Plate",
        "Manganese Plate", "Nickel Alloy Plate", "Chrome Moly Plate",
        "Pressure Vessel Plate", "Stainless Steel Plate", "Carbon Steel Plate",
        "Offshore Steel Plate", "Quend Plate", "Quard Plate",
        "Aluminium Plate", "Chequered Plate"
      ]
    },
    {
      category: "Socket Weld Fittings",
      subcategories: [
        "Socket weld Coupling Fittings",
        "Socket weld Union Fittings",
        "Socket weld Elbow Fittings",
        "Socket weld Tee Fittings",
        "Socket weld Lateral Tee Fittings",
        "Socket weld Cross Fittings",
        "Socket weld Cap Fittings",
        "Socket weld Reducer Insert Fittings",
        "Socket weld Nipple Fittings",
        "Socket weld Bushing Fittings",
        "Socket weld Plug Fittings"
      ]
    }
  ];

  const handleMobileCategoryClick = (index) => {
    setMobileActiveCategory(mobileActiveCategory === index ? null : index);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setProductDropdownOpen(false);
    setMobileQualityOpen(false);
    setTechDropdownOpen(false);
    setMobileActiveCategory(null);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
            <Link to="/" onClick={closeAllMenus}>
              {/* Fallback to simple styled div if LogoImg is broken in preview */}
              
              
              <img
                src={LogoImg}
                alt="Remax Logo"
                className="h-14 w-auto object-contain"
              />
             
            </Link>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider uppercase leading-none">
                REMAX
              </span>
              <span className="text-[10px] tracking-[0.2em] opacity-80 uppercase leading-none mt-1">
                Forge & Fittings
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <div className="flex items-center space-x-8 xl:space-x-12 h-full">

              {/* Home */}
              <Link
                to="/"
                className="relative font-medium text-base transition-colors hover:text-[#D71920] flex items-center h-full group"
              >
                Home
                <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-[#D71920] transition-all group-hover:w-full"></span>
              </Link>

              {/* About */}
              <Link
                to="/about-us"
                className="relative font-medium text-base transition-colors hover:text-[#D71920] flex items-center h-full group"
              >
                About Us
                <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-[#D71920] transition-all group-hover:w-full"></span>
              </Link>

              {/* Products Mega Menu */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <button className="flex items-center font-medium text-base hover:text-[#D71920]">
                  Products
                  <ChevronDown
                    size={18}
                    className={`ml-1 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[900px] -translate-x-1/2 bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-200 origin-top border-t-4 border-[#D71920] ${
                    productDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  <div className="flex">
                    {/* Categories */}
                    <div className="w-1/3 bg-slate-50 border-r py-6">
                      {productData.map((item, index) => (
                        <div
                          key={index}
                          onMouseEnter={() => setActiveCategory(index)}
                          className={`px-8 py-4 cursor-pointer flex items-center justify-between text-base font-bold ${
                            activeCategory === index
                              ? 'bg-white text-[#D71920] border-l-4 border-[#D71920]'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item.category}
                          {activeCategory === index && <ChevronRight size={18} />}
                        </div>
                      ))}
                    </div>

                    {/* Subcategories */}
                    <div className="w-2/3 p-8 bg-white min-h-[400px]">
                      <h4 className="text-2xl font-bold mb-6 border-b pb-3">
                        {productData[activeCategory].category}
                      </h4>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {productData[activeCategory].subcategories.map((subItem, subIndex) => {
                          const linkHref = `/products/${createSlug(
                            productData[activeCategory].category
                          )}/${createSlug(subItem)}`;

                          return (
                            <Link
                              key={subIndex}
                              to={linkHref}
                              onClick={closeAllMenus}
                              className="flex items-center text-base text-slate-600 hover:text-[#D71920] transition-colors"
                            >
                              <div className="w-2 h-2 rounded-full bg-slate-300 mr-3"></div>
                              {subItem}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setQualityDropdownOpen(true)}
                onMouseLeave={() => setQualityDropdownOpen(false)}
              >
                <button className="flex items-center font-medium text-base hover:text-[#D71920]">
                  Quality
                  <ChevronDown size={18} className={`ml-1 transition-transform ${qualityDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute left-0 top-full w-56 bg-white rounded-md shadow-xl py-2 border-t-4 border-[#D71920] ${
                    qualityDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  <Link to="/quality" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Quality
                  </Link>
                  <Link to="/certification" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Certification
                  </Link>
                </div>
              </div>

              {/* Tech Info */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setTechDropdownOpen(true)}
                onMouseLeave={() => setTechDropdownOpen(false)}
              >
                <button className="flex items-center font-medium text-base hover:text-[#D71920]">
                  Tech Info
                  <ChevronDown size={18} className={`ml-1 transition-transform ${techDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute left-0 top-full w-72 bg-white rounded-md shadow-xl py-2 border-t-4 border-[#D71920] ${
                    techDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  <Link to="/tech-info/chemical-composition" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Chemical Composition
                  </Link>
                  <Link to="/tech-info/mechanical-properties" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Mechanical Properties
                  </Link>
                  <Link to="/tech-info/weight-chart" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Weight Chart
                  </Link>
                  <Link to="/tech-info/dimensions" onClick={closeAllMenus} className="block px-4 py-3 text-sm hover:text-[#D71920] hover:bg-slate-50">
                    Dimension Chart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Desktop CTA & Mobile Toggle) */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-6 py-3 rounded font-bold hover:shadow-lg text-sm bg-[#D71920] text-white transition-all transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-[#0F172A] hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MOBILE NAV DROPDOWN ===================== */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          
          {/* Direct Links */}
          <Link 
            to="/" 
            className="block px-4 py-3 text-base font-bold text-[#0F172A] hover:text-[#D71920] hover:bg-slate-50 rounded-lg transition-colors"
            onClick={closeAllMenus}
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            className="block px-4 py-3 text-base font-bold text-[#0F172A] hover:text-[#D71920] hover:bg-slate-50 rounded-lg transition-colors"
            onClick={closeAllMenus}
          >
            About Us
          </Link>

          {/* Products Accordion */}
          <div className="border-t border-b border-slate-100 my-2 py-2">
            <button
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-[#0F172A] hover:text-[#D71920] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Products
              <ChevronDown size={20} className={`transition-transform duration-300 ${productDropdownOpen ? 'rotate-180 text-[#D71920]' : ''}`} />
            </button>

            {/* Mobile Categories Level 2 */}
            <div className={`pl-4 overflow-hidden transition-all duration-300 ${productDropdownOpen ? 'max-h-[1500px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
              {productData.map((item, index) => (
                <div key={index} className="mb-2">
                  <button
                    onClick={() => handleMobileCategoryClick(index)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-bold rounded-lg transition-colors ${
                      mobileActiveCategory === index ? 'text-[#D71920] bg-red-50/50' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.category}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileActiveCategory === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Subcategories Level 3 */}
                  <div className={`pl-4 border-l-2 border-slate-100 ml-4 overflow-hidden transition-all duration-300 ${mobileActiveCategory === index ? 'max-h-[800px] mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.subcategories.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/products/${createSlug(item.category)}/${createSlug(subItem)}`}
                        onClick={closeAllMenus}
                        className="block px-4 py-2.5 text-sm text-slate-500 hover:text-[#D71920] hover:translate-x-1 transition-transform"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Accordion */}
          <div className="border-b border-slate-100 mb-2 pb-2">
            <button
              onClick={() => setMobileQualityOpen(!mobileQualityOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-[#0F172A] hover:text-[#D71920] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Quality
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileQualityOpen ? 'rotate-180 text-[#D71920]' : ''}`} />
            </button>
            <div className={`pl-4 border-l-2 border-slate-100 ml-4 overflow-hidden transition-all duration-300 ${mobileQualityOpen ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/quality" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Quality</Link>
              <Link to="/certification" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Certification</Link>
            </div>
          </div>

          {/* Tech Info Accordion */}
          <div className="border-b border-slate-100 mb-4 pb-2">
            <button
              onClick={() => setTechDropdownOpen(!techDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-[#0F172A] hover:text-[#D71920] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Tech Info
              <ChevronDown size={20} className={`transition-transform duration-300 ${techDropdownOpen ? 'rotate-180 text-[#D71920]' : ''}`} />
            </button>
            <div className={`pl-4 border-l-2 border-slate-100 ml-4 overflow-hidden transition-all duration-300 ${techDropdownOpen ? 'max-h-64 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/tech-info/chemical-composition" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Chemical Composition</Link>
              <Link to="/tech-info/mechanical-properties" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Mechanical Properties</Link>
              <Link to="/tech-info/weight-chart" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Weight Chart</Link>
              <Link to="/tech-info/dimensions" onClick={closeAllMenus} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#D71920]">Dimension Chart</Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-2">
            <Link 
              to="/contact" 
              onClick={closeAllMenus}
              className="flex justify-center w-full bg-[#D71920] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;