import React, { useState } from 'react';
import { Home, ChevronRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_e9tpgmh';
    const templateId = 'template_pr9w1jl'; // New Template ID
    const publicKey = 'L6kSSqLl5HJakWtm5';

    const templateParams = {
      title: 'New Contact Us Enquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: 'L6kSSqLl5HJakWtm5',
      });
      alert("Message sent successfully! Our experts will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Failed to send message: ${error.text || "Please check your EmailJS settings."}`);
    } finally {
      setLoading(false);
    }
  };

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
                    Vasil Khan Marg, inside Madhav Baug,<br />
                    Charni Road, Marine Lines East, Gulal Wadi,<br />
                    Bhuleshwar, Mumbai, Maharashtra 400004
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
                    <a href="tel:+919769983108" className="hover:text-[#D71920] transition-colors">+91 97699 83108</a>
                  </p>
                  <p className="text-slate-600">
                    <a href="tel:+912266109211" className="hover:text-[#D71920] transition-colors">022 6610 9211</a>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone No</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 rounded-lg font-bold text-white bg-[#D71920] hover:bg-red-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.470693129753!2d72.8262244!3d18.9548089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe1e1f41ddb%3A0x48b70c35f9378cd7!2sRemax%20Forge%20And%20Fittings!5e0!3m2!1sen!2sin!4v1775631889093!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Remax Forge And Fittings Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;