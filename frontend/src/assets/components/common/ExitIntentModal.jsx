import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Upload, Send, CheckCircle2 } from 'lucide-react';
import api from '../../services/api.js';

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { pathname } = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
    fileName: ''
  });

  useEffect(() => {
    // Only target desktop product & content pages
    const isProductOrContentPage = pathname.startsWith('/products/') || pathname.startsWith('/product-details/') || pathname.startsWith('/tech-info/');
    if (!isProductOrContentPage) return;

    const hasTriggeredThisSession = sessionStorage.getItem('remax_exit_shown');
    if (hasTriggeredThisSession) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowModal(true);
        sessionStorage.setItem('remax_exit_shown', 'true');
        
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'exit_intent_open',
            page_path: pathname
          });
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [pathname]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, fileName: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: `[EXIT INTENT SPEC SHEET UPLOAD] Spec file: ${formData.fileName || 'None specified'}. Additional Notes: ${formData.notes}`,
      page_url: window.location.href
    };

    try {
      await api.post('/contact', payload);

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'exit_intent_submit',
          page_path: pathname,
          file_attached: !!formData.fileName
        });
      }

      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (err) {
      console.error('Exit intent submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={() => setShowModal(false)}></div>

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 z-10 border-t-4 border-[#D71920] animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-600 bg-slate-100 p-1.5 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-2xl font-extrabold text-slate-900">Spec Sheet Received!</h3>
            <p className="text-sm text-slate-600 mt-2">
              Our engineering team is calculating your custom quotation right now.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-block bg-red-100 text-[#D71920] font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Before You Go
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight mb-1">
              Send Us Your Spec Sheet — Written Quote in 30 Min
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Attach your RFQ drawing/BOM list or enter specs below to receive instant factory pricing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-[#D71920]"
                />
                <input
                  type="text"
                  required
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-[#D71920]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-[#D71920]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-[#D71920]"
                />
              </div>

              {/* File Attachment Upload Field */}
              <div className="border-2 border-dashed border-slate-300 hover:border-[#D71920] rounded-xl p-3 text-center bg-slate-50 relative cursor-pointer transition-colors">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                <span className="text-xs font-semibold text-slate-700 block">
                  {formData.fileName ? formData.fileName : 'Upload Spec Sheet / BOM Drawing (Optional)'}
                </span>
                <span className="text-[10px] text-slate-400">PDF, Excel, CAD drawing or image</span>
              </div>

              <textarea
                rows="2"
                placeholder="Additional requirements or size specs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-[#D71920]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending Spec Sheet...' : 'Get Written Quote Now'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;
