import React from 'react';
import { PhoneCall, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useQuotePopup } from '../../context/QuotePopupContext.jsx';

const StickyMobileBar = () => {
  const { pathname } = useLocation();
  const quoteContext = useQuotePopup();
  const openQuotePopup = quoteContext?.openQuotePopup;
  const openCallbackPopup = quoteContext?.openCallbackPopup;

  const handleGetQuote = () => {
    if (openQuotePopup) {
      openQuotePopup();
    } else {
      const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
      if (btn) btn.click();
    }
  };

  const handleRequestCallback = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'callback_request_open',
        page_path: pathname
      });
    }
    if (openCallbackPopup) {
      openCallbackPopup();
    }
  };

  return (
    <>
      {/* Fixed Sticky Mobile Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        <button
          onClick={handleGetQuote}
          className="flex-1 bg-[#D71920] active:bg-red-700 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          aria-label="Get Quote"
        >
          <FileText className="w-4 h-4" />
          <span>Get Quote</span>
        </button>

        <button
          onClick={handleRequestCallback}
          className="flex-1 bg-slate-800 active:bg-slate-700 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-slate-700 cursor-pointer"
          aria-label="Request Callback"
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <span>Request Callback</span>
        </button>
      </div>
    </>
  );
};

export default StickyMobileBar;
