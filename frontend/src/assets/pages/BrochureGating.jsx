import React, { useState } from 'react';
import { Download, FileCheck, CheckCircle2, Shield } from 'lucide-react';
import api from '../services/api.js';
import TrustBar from '../components/common/TrustBar.jsx';

const BrochureGating = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      message: '[BROCHURE DOWNLOAD REQUEST] Visitor requested official product catalog PDF.',
      page_url: window.location.href
    };

    try {
      await api.post('/contact', payload);

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'brochure_download',
          page_path: '/brochure/'
        });
      }

      setDownloadStarted(true);

      // Trigger automatic download of brochure PDF
      const link = document.createElement('a');
      link.href = '/remax-forge-fittings-brochure.pdf';
      link.download = 'remax-forge-fittings-brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error('Brochure request error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 grid md:grid-cols-5">
          
          {/* Left Column: Product Catalog Info */}
          <div className="md:col-span-2 bg-[#0F172A] text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#D71920] font-bold text-xs uppercase tracking-widest block mb-2">
                Official Catalog 2026
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                Remax Technical Product Brochure
              </h2>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Complete engineering specification guide including ASME B16.5 / B16.9 / B16.11 dimension charts, material chemical compositions, and pressure rating tables.
              </p>

              <div className="space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#D71920]" />
                  <span>Flanges, Buttweld & Forged Fittings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D71920]" />
                  <span>ASTM / ASME / DIN Material Grades</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 text-[11px] text-slate-400">
              ISO 9001:2015 Certified Manufacturer • Mumbai, India
            </div>
          </div>

          {/* Right Column: Gated Form */}
          <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
            {downloadStarted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Your Download Has Started!</h3>
                <p className="text-sm text-slate-600 mb-6">
                  If the download did not start automatically, click the button below:
                </p>
                <a
                  href="/remax-forge-fittings-brochure.pdf"
                  download="remax-forge-fittings-brochure.pdf"
                  className="inline-flex items-center gap-2 bg-[#D71920] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-red-700 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download PDF Directly
                </a>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                  Download Official Catalog (PDF)
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Please provide your contact details to instantly access the PDF download.
                </p>

                <TrustBar className="my-2 py-2" />

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="purchasing@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#D71920] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>{loading ? 'Preparing Catalog...' : 'Download Product Brochure (PDF)'}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureGating;
