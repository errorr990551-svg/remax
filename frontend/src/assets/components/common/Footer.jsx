import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import LogoImg from "../../images/REMAX_FORGE_AND_FITTINGS-01.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            {/* Logo Space */}
            <div className="flex items-center gap-3">
              {/* Replace src with your actual logo path */}
              <img 
                src={LogoImg}
                alt="Remax Forge & Fittings" 
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer and exporter of high-quality forged fittings, flanges, and industrial components. Committed to precision, durability, and global standards.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[<Facebook size={20} />, <Twitter size={20} />, <Linkedin size={20} />, <Instagram size={20} />].map((icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D71920] hover:text-white transition-all duration-300 text-slate-400"
                >
                  {icon}
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
              {['Home', 'About Us', 'Quality Policy', 'Tech Info', 'Certificates', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#D71920] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#D71920]" />
                    {item}
                  </a>
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
              {['Butt Weld Fittings', 'Forged Flanges', 'High Pressure Fittings', 'Olets & Branch Outlets', 'Forged Components'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#D71920] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#D71920]" />
                    {item}
                  </a>
                </li>
              ))}
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
                  <span className="block text-white font-semibold mb-1">Factory Address:</span>
                  Plot No. 123, Industrial Area, <br />
                  Phase-II, Mumbai, Maharashtra, <br />
                  India - 400001
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-[#D71920] p-2 rounded-full shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div className="text-slate-400 text-sm">
                  <span className="block text-white font-semibold mb-1">Call Us:</span>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">+91 98765 43210</a>
                  <a href="tel:+911234567890" className="hover:text-white transition-colors block">+91 12345 67890</a>
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
              © {new Date().getFullYear()} <span className="text-white font-bold">Remax Forge & Fittings</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-[#D71920] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D71920] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D71920] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;