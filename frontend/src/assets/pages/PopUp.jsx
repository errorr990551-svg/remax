import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import api from '../services/api.js';
import emailjs from '@emailjs/browser';

// Popup API (separate function, same endpoint)
export const sendPopupMessage = (data) => {
  return api.post("/contact", data);
};

const PopUp = ({ isOpen, onClose, autoShow = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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

  // Handle Submit (EMAILJS CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_e9tpgmh';
    const templateId = 'template_pr9w1jl'; // New Template ID
    const publicKey = 'L6kSSqLl5HJakWtm5';

    const templateParams = {
      title: 'New Get in Touch Enquiry',
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

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      handleClose(); // close popup after successful submission
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Failed to send message: ${error.text || "Please check your EmailJS settings."}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 z-10 animate-in fade-in zoom-in-95 duration-300 border-t-4 border-[#D71920]">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#D71920] transition-colors bg-slate-50 hover:bg-red-50 p-2 rounded-full shadow-sm"
          aria-label="Close popup"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="text-[#D71920] font-bold tracking-wider uppercase text-xs mb-2 block">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-2">
            Drop your details below
          </h2>
          <p className="text-slate-500 text-lg">
            Let our experts take over from here!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="relative">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
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
                className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="relative">
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
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
                className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 font-medium"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows="4"
              className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-[#D71920] focus:ring-4 focus:ring-[#D71920]/10 outline-none transition-all bg-slate-50 text-[#0F172A] placeholder-slate-400 resize-none font-medium"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-[#D71920]/30 uppercase tracking-wider text-sm md:text-base flex justify-center items-center gap-2"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default PopUp;