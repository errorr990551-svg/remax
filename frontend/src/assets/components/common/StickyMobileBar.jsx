import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useQuotePopup } from '../../context/QuotePopupContext.jsx';

const StickyMobileBar = () => {
  const { pathname } = useLocation();
  const quoteContext = useQuotePopup();
  const openQuotePopup = quoteContext?.openQuotePopup;

  const handleGetQuote = () => {
    if (openQuotePopup) {
      openQuotePopup();
    } else {
      const btn = document.querySelector('button[aria-label="Get Instant Quote"]');
      if (btn) btn.click();
    }
  };

  return (
    <>
      {/* Fixed Sticky Mobile Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-2 shadow-2xl flex items-center gap-2">
        <a
          href="tel:+919769983108"
          className="bg-slate-800 active:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs border border-slate-700 cursor-pointer"
          aria-label="Call +91 97699 83108"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919769983108?text=Hello%20Remax%20Forge,%20I%20would%20like%20to%20inquire%20about%20flanges%20and%20fittings."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-md cursor-pointer"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={handleGetQuote}
          className="flex-1 bg-[#D71920] active:bg-red-700 text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          aria-label="Get Quote"
        >
          <FileText className="w-4 h-4" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
};

export default StickyMobileBar;
