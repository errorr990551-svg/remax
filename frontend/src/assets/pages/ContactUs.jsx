import React from 'react';
import { Home, ChevronRight, Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Let's Discuss Your Project</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Have a question about our products or need a custom quote? Our team of experts is ready to assist you. Reach out to us via the form or contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 bg-white p-3 rounded-lg shadow-md border border-slate-100 group-hover:border-[#D71920] transition-colors">
                  <MapPin size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">Factory Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Plot No. 123, Industrial Area,<br />
                    Phase-II, Mumbai, Maharashtra,<br />
                    India - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 bg-white p-3 rounded-lg shadow-md border border-slate-100 group-hover:border-[#D71920] transition-colors">
                  <Phone size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">Phone</h3>
                  <p className="text-slate-600 mb-1">
                    <a href="tel:+919876543210" className="hover:text-[#D71920] transition-colors">+91 98765 43210</a>
                  </p>
                  <p className="text-slate-600">
                    <a href="tel:+911234567890" className="hover:text-[#D71920] transition-colors">+91 12345 67890</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 bg-white p-3 rounded-lg shadow-md border border-slate-100 group-hover:border-[#D71920] transition-colors">
                  <Mail size={24} className="text-[#D71920]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">Email</h3>
                  <p className="text-slate-600 mb-1">
                    <a href="mailto:info@remaxforge.com" className="hover:text-[#D71920] transition-colors">info@remaxforge.com</a>
                  </p>
                  <p className="text-slate-600">
                    <a href="mailto:sales@remaxforge.com" className="hover:text-[#D71920] transition-colors">sales@remaxforge.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone No</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-lg font-bold text-white bg-[#D71920] hover:bg-red-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="h-96 w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
          {/* Replace with actual Google Maps Embed */}
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-2 opacity-50" />
            <p>Google Map Embed Will Go Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;