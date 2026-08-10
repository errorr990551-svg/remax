import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import api from '../services/api.js';

// Popup API (separate function, same endpoint)
export const sendPopupMessage = (data) => {
  return api.post("/contact", data);
};

const PopUp = ({ isOpen, onClose, autoShow = true, onSuccess }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: "",
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  // Handle Auto-Show Logic (Default behavior)
  useEffect(() => {
    if (autoShow && isOpen === undefined) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoShow, isOpen]);

  // Handle Controlled Logic (When passed via props)
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit (BACKEND API CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendPopupMessage(formData);

      // Google Ads Conversion Tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-18254252296/Hd6pCKHMlcIcEIiSp4BE',
          'value': 1.0,
          'currency': 'INR'
        });
      }

      showToast(response.data.message || "Message sent successfully! Our experts will contact you soon.", "success");
      if (onSuccess) onSuccess();

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        message: "",
      });

      // Wait 1.5s for the toast to be seen before closing
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (error) {
      console.error("API Error:", error);
      const errorMsg = error.response?.data?.message || "Failed to send message. Please try again later.";
      showToast(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 font-sans">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border transition-all duration-300 transform translate-y-0 scale-100 ${
          toast.type === "success" 
            ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
            : "bg-rose-50 border-rose-200 text-rose-800"
        }`}>
          <div className={`w-2.5 h-2.5 rounded-full ${toast.type === "success" ? "bg-emerald-500" : "bg-rose-500"}`}></div>
          <span className="font-semibold text-sm">{toast.message}</span>
        </div>
      )}
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-5 md:p-10 z-10 animate-in fade-in zoom-in-95 duration-300 border-t-4 border-[#D71920] max-h-[98vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-slate-400 hover:text-[#D71920] transition-colors bg-slate-50 hover:bg-red-50 p-1.5 md:p-2 rounded-full shadow-sm"
          aria-label="Close popup"
        >
          <X size={18} className="md:w-5 md:h-5" strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="mb-3 text-center md:text-left">
          <span className="text-[#D71920] font-bold tracking-wider uppercase text-[10px] md:text-xs mb-1 block">
            Get in touch
          </span>
          <h2 className="text-xl md:text-3xl font-extrabold text-[#0F172A] mb-1 leading-tight">
            Fill this form and get a quote in 30 minutes — guaranteed
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Let our experts take over from here!
          </p>
        </div>

        {/* Trust Bar per Sheet 9 #5 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 my-3 text-center md:text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] md:text-xs font-semibold text-slate-700">
            <div>🏆 ISO 9001:2015</div>
            <div>🤝 ONGC • Tata • L&T</div>
            <div>📜 MTC 3.1 Provided</div>
            <div>⚡ 30 Min Response</div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
            
          <div className="grid md:grid-cols-2 gap-3 md:gap-5">
            {/* Name */}
            <div className="relative">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-5">
            {/* Phone */}
            <div className="relative">
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
              />
            </div>

            {/* Company */}
            <div className="relative">
              <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
              />
            </div>
          </div>

          <div className="relative">
            <input 
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows="2"
              className="w-full px-4 py-2.5 md:py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 resize-none font-medium"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-[#D71920]/30 uppercase tracking-wider text-xs md:text-base flex justify-center items-center gap-2"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default PopUp;