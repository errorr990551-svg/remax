import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import api from '../services/api.js';

// Popup API (separate function, same endpoint)
export const sendPopupMessage = (data) => {
  return api.post("/contact", data);
};

const PopUp = ({ isOpen, onClose, autoShow = false, onSuccess }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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

  // Handle Auto-Show Logic
  useEffect(() => {
    const isDismissed = localStorage.getItem('remax_popup_dismissed') === 'true' || sessionStorage.getItem('remax_popup_dismissed') === 'true';
    if (autoShow && isOpen === undefined && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoShow, isOpen]);

  // Handle Controlled Logic (When passed via props)
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(Boolean(isOpen));
    }
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem('remax_popup_dismissed', 'true');
    sessionStorage.setItem('remax_popup_dismissed', 'true');
    localStorage.setItem('remax_rfq_popup_dismissed', 'true');
    sessionStorage.setItem('remax_rfq_popup_dismissed', 'true');
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
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        location: formData.location,
        message: formData.message,
        page_url: window.location.href
      };

      const response = await sendPopupMessage(payload);

      // Google Ads Conversion Tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-18254252296/Hd6pCKHMlcIcEIiSp4BE',
          'value': 1.0,
          'currency': 'INR'
        });
      }

      showToast(response.data?.message || "Message sent successfully! Our experts will contact you soon.", "success");
      if (onSuccess) onSuccess();

      // Reset form after success
      setFormData({
        name: "",
        phone: "",
        email: "",
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 font-sans">
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

      {/* Modal Content - Styled to match Image 2 'Send Us a Message' */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-10 z-10 animate-in fade-in zoom-in-95 duration-200 border border-slate-100 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors shadow-sm"
          aria-label="Close popup"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
          Send Us a Message
        </h3>

        {/* Form matching Image 2 */}
        <form onSubmit={handleSubmit} className="space-y-5">
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <input 
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 placeholder-slate-400"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone No
              </label>
              <input 
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 placeholder-slate-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input 
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 placeholder-slate-400"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="modal-company" className="block text-sm font-semibold text-slate-700 mb-2">
                Company
              </label>
              <input 
                type="text"
                id="modal-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="modal-location" className="block text-sm font-semibold text-slate-700 mb-2">
              Location
            </label>
            <input 
              type="text"
              id="modal-location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State, Country"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 placeholder-slate-400"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="modal-message" className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea 
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#D71920] focus:ring-2 focus:ring-red-100 outline-none transition-all text-slate-700 resize-none placeholder-slate-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-[#D71920]/30 uppercase tracking-wider text-base flex justify-center items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default PopUp;