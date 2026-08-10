import React, { useState } from 'react';
import { PhoneCall, FileText, X, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api.js';
import CustomSelect from './CustomSelect.jsx';

const StickyMobileBar = () => {
  const [activeModal, setActiveModal] = useState(null); // 'quote' | 'callback' | null
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { pathname } = useLocation();

  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Morning (9 AM - 12 PM)'
  });

  const handleOpenCallback = () => {
    setActiveModal('callback');
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'callback_request_open',
        page_path: pathname
      });
    }
  };

  const handleClose = () => {
    setActiveModal(null);
    setSubmitted(false);
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: callbackData.name,
      phone: callbackData.phone,
      message: `Callback Request for preferred time: ${callbackData.preferredTime}`,
      page_url: window.location.href
    };

    try {
      await api.post('/contact', payload);

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'callback_request',
          page_path: pathname
        });
      }

      setSubmitted(true);
      setTimeout(() => {
        handleClose();
        setCallbackData({
          name: '',
          phone: '',
          preferredTime: 'Morning (9 AM - 12 PM)'
        });
      }, 2500);

    } catch (err) {
      console.error('Callback request error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fixed Sticky Mobile Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        <button
          onClick={() => {
            const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
            if (btn) btn.click();
          }}
          className="flex-1 bg-[#D71920] active:bg-red-700 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg"
        >
          <FileText className="w-4 h-4" />
          <span>Get Quote</span>
        </button>

        <button
          onClick={handleOpenCallback}
          className="flex-1 bg-slate-800 active:bg-slate-700 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-slate-700"
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <span>Request Callback</span>
        </button>
      </div>

      {/* Mini Callback Request Modal */}
      {activeModal === 'callback' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="absolute inset-0" onClick={handleClose}></div>

          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5 z-10 border-t-4 border-emerald-500">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 bg-slate-100 p-1.5 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-bold text-lg text-slate-900">Callback Scheduled!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Our sales engineer will call you back during {callbackData.preferredTime}.
                </p>
              </div>
            ) : (
              <div>
                <h4 className="font-extrabold text-lg text-slate-900 mb-1">Request a Call Back</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Leave your number and preferred time — we call you back directly.
                </p>

                <form onSubmit={handleCallbackSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={callbackData.name}
                      onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={callbackData.phone}
                      onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <CustomSelect
                      label="Preferred Time"
                      name="preferredTime"
                      value={callbackData.preferredTime}
                      onChange={(e) => setCallbackData({ ...callbackData, preferredTime: e.target.value })}
                      options={[
                        'Morning (9 AM - 12 PM)',
                        'Afternoon (12 PM - 4 PM)',
                        'Evening (4 PM - 7 PM)'
                      ]}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider shadow-md"
                  >
                    {loading ? 'Submitting...' : 'Call Me Back'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StickyMobileBar;
