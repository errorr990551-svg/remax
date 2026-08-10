import React, { useState } from 'react';
import { FileText, X, Send, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api.js';
import TrustBar from './TrustBar.jsx';
import CustomSelect from './CustomSelect.jsx';

const FloatingQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { pathname } = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: 'NPS 1/2"',
    pressureClass: 'Class 150',
    material: 'Stainless Steel (304/316L)',
    quantity: '',
    message: ''
  });

  const handleOpen = () => {
    setIsOpen(true);
    // Push GTM event for quote_form_open per Sheet 10 #5
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'quote_form_open',
        page_path: pathname
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productName = pathname.split('/').filter(Boolean).pop() || 'General Inquiry';
    const payload = {
      ...formData,
      product_name: productName,
      page_url: window.location.href,
      ga_client_id: document.cookie.match(/_ga=([^;]+)/)?.[1] || ''
    };

    try {
      await api.post('/contact', payload);

      // Push GTM event for generate_lead per Sheet 10 #3
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'generate_lead',
          form_id: 'floating_quote_form',
          page_path: pathname,
          product_name: productName
        });
      }

      setSubmitted(true);
      setTimeout(() => {
        handleClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          size: 'NPS 1/2"',
          pressureClass: 'Class 150',
          material: 'Stainless Steel (304/316L)',
          quantity: '',
          message: ''
        });
      }, 2500);

    } catch (err) {
      console.error('RFQ Submission Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-40 bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 animate-bounce-subtle"
        aria-label="Get Instant Quote"
      >
        <FileText className="w-5 h-5" />
        <span className="hidden sm:inline">Get Quote in 30 Min</span>
        <span className="sm:hidden">Get Quote</span>
      </button>

      {/* Slide-in Quick RFQ Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
          <div
            className="absolute inset-0"
            onClick={handleClose}
          ></div>

          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-5 md:p-6 z-10 border-t-4 border-[#D71920] max-h-[95vh] overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-600 bg-slate-100 p-1.5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Quote Request Received!</h3>
                <p className="text-slate-600 text-sm">
                  Our sales team will send your written quotation within <strong>30 minutes</strong>.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <span className="text-[#D71920] font-bold text-xs uppercase tracking-wider block mb-1">
                    Instant RFQ Form
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                    Get Written Quote in 30 Minutes
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct factory pricing. No public phone calls needed.
                  </p>
                </div>

                <TrustBar className="my-3 py-2 text-[11px]" />

                <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Ltd"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="purchasing@company.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>
                  </div>

                  {/* Quick Spec Selectors */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 grid grid-cols-3 gap-2.5">
                    <CustomSelect
                      label="NPS Size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      options={[
                        '1/2" - 2"',
                        '2" - 8"',
                        '10" - 24"',
                        '26" - 48"'
                      ]}
                    />

                    <CustomSelect
                      label="Class / Sch"
                      name="pressureClass"
                      value={formData.pressureClass}
                      onChange={handleChange}
                      options={[
                        'Class 150 / Sch 40',
                        'Class 300 / Sch 80',
                        'Class 600 / Sch 160',
                        'Class 1500 / XXS'
                      ]}
                    />

                    <CustomSelect
                      label="Material"
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      options={[
                        'SS 304 / 304L',
                        'SS 316 / 316L',
                        'Carbon Steel A105',
                        'Duplex / Alloy'
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Quantity / Requirements *</label>
                    <textarea
                      name="message"
                      required
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify sizes, quantities, wall thicknesses or project requirements..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    Your details remain private and are only used for issuing official quotations.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingQuoteButton;
