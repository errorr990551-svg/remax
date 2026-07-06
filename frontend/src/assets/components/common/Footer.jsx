import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImg from "../../images/REMAX_FORGE_AND_FITTINGS-01.webp";
import { useProductMenu } from '../../context/ProductMenuContext.jsx';
import { productData } from '../../data/productsData.js';

const Footer = () => {
  const { openProductMenu } = useProductMenu();
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            {/* Logo Space */}
            <div className="flex items-center gap-3">
              <div className="bg-white px-4 py-3 rounded-xl shadow-md inline-flex items-center gap-2">
                <img 
                  src={LogoImg}
                  alt="Remax Logo" 
                  className="h-12 md:h-14 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-wider uppercase leading-none text-[#0F172A]">
                    REMAX
                  </span>
                  <span className="text-[10px] tracking-[0.2em] font-medium uppercase leading-none mt-1 text-[#D71920]">
                    Forge AND Fittings
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer and exporter of high-quality forged fittings, flanges, and industrial components. Committed to precision, durability, and global standards.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, link: "https://www.facebook.com/remaxforgefittings" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/remax-forge-fittings/" },
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/remax_forge/" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D71920] hover:text-white transition-all duration-300 text-slate-400"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D71920] rounded"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Quality Policy', path: '/quality' },
                { name: 'Tech Info', path: '/tech-info/dimensions' },
                { name: 'Certificates', path: '/certification' },
                { name: 'Careers', path: '/career' },
                { name: 'Blogs', path: '/blogs' },
                { name: 'Market Area', path: '/market-area' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-[#D71920] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#D71920]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D71920] rounded"></span>
            </h3>
            <ul className="space-y-3">
              {productData.map((item, index) => {
                const getCategoryLink = (category) => {
                  if (category === "Flanges") return "/products/flanges/slip-on-flange";
                  if (category === "Buttweld Fittings") return "/products/buttweld-fittings/butt-weld-elbow-fittings";
                  if (category === "Socket Weld Fittings") return "/products/socket-weld-fittings/socket-weld-coupling-fittings";
                  if (category === "Forged Fittings") return "/products/forged-fittings";
                  if (category === "Pipes & Plates") return "/products/pipes/alloy-steel-pipes";
                  return "/";
                };
                return (
                  <li key={item.category}>
                    <Link 
                      to={getCategoryLink(item.category)}
                      onClick={() => openProductMenu(index)}
                      className="text-slate-400 hover:text-[#D71920] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm text-left w-full group"
                    >
                      <ChevronRight size={14} className="text-[#D71920] group-hover:translate-x-1 transition-transform" />
                      {item.category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Us (Personal Details from Image) */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D71920] rounded"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#D71920] p-2 rounded-full shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  <span className="block text-white font-semibold mb-1">Head Office:</span>
                  135, New Madhav Baug, C.P Tank Road, <br />
                  Marine Line, Mumbai - 400004.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#D71920] p-2 rounded-full shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div className="text-slate-400 text-sm">
                  <span className="block text-white font-semibold mb-1">Call Us:</span>
                  <a href="tel:+919769983108" className="hover:text-white transition-colors block">+91 97699 83108</a>
                  <a href="tel:+912266109211" className="hover:text-white transition-colors block">022 6610 9211</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#D71920] p-2 rounded-full shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <div className="text-slate-400 text-sm">
                  <span className="block text-white font-semibold mb-1">Email Us:</span>
                  <a href="mailto:info@remaxforge.com" className="hover:text-white transition-colors block">info@remaxforge.com</a>
                  <a href="mailto:sales@remaxforge.com" className="hover:text-white transition-colors block">sales@remaxforge.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white font-bold">Remax Forge AND Fittings</span> All Rights Reserved.
            </p>
            <p className="text-slate-500 text-sm text-center md:text-right">
              <a href="https://errorr.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Website by Errorr.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;