import React, { createContext, useContext, useState, useEffect } from "react";
import PopUp from "../pages/PopUp.jsx";

const QuotePopupContext = createContext();

export const QuotePopupProvider = ({ children }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem("remax_contact_unlocked") === "true";
  });

  const openQuotePopup = (productName = "") => {
    setQuoteProduct(typeof productName === "string" ? productName : "");
    setIsQuoteOpen(true);
  };

  const closeQuotePopup = () => {
    setIsQuoteOpen(false);
  };

  const openCallbackPopup = () => {
    setIsCallbackOpen(true);
  };

  const closeCallbackPopup = () => {
    setIsCallbackOpen(false);
  };

  const unlockDetails = () => {
    localStorage.setItem("remax_contact_unlocked", "true");
    setIsUnlocked(true);
  };

  // Attach global functions and click interception for sitewide 'req a call' / 'Request Callback'
  useEffect(() => {
    window.openQuotePopup = openQuotePopup;
    window.openCallbackPopup = openCallbackPopup;

    const handleDocumentClick = (e) => {
      const el = e.target.closest("button, a");
      if (!el) return;
      const text = (el.textContent || "").trim().toLowerCase();
      
      // Match variants of request callback / req a call
      if (
        text.includes("req a call") ||
        text.includes("request callback") ||
        text.includes("request a callback") ||
        text.includes("request a call") ||
        text.includes("request call") ||
        el.getAttribute("aria-label") === "Request Callback"
      ) {
        e.preventDefault();
        e.stopPropagation();
        openCallbackPopup();
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  // Auto-show Instant RFQ Popup for first-time visitors (Home page or any other landing page)
  useEffect(() => {
    const isDismissed =
      localStorage.getItem("remax_rfq_popup_dismissed") === "true" ||
      sessionStorage.getItem("remax_rfq_popup_dismissed") === "true";

    const path = window.location.pathname.toLowerCase();
    const isExcluded = path.includes("/thank-you") || path.includes("/contact");

    if (!isDismissed && !isExcluded) {
      const timer = setTimeout(() => {
        const stillNotDismissed =
          localStorage.getItem("remax_rfq_popup_dismissed") === "true" ||
          sessionStorage.getItem("remax_rfq_popup_dismissed") === "true";
        if (!stillNotDismissed) {
          openQuotePopup();
        }
      }, 3000); // 3 seconds delay for smooth page experience

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QuotePopupContext.Provider
      value={{
        isQuoteOpen,
        openQuotePopup,
        closeQuotePopup,
        quoteProduct,
        isCallbackOpen,
        openCallbackPopup,
        closeCallbackPopup,
        isUnlocked,
        unlockDetails,
      }}
    >
      {children}

      {/* Global Image 2 'Send Us a Message' Popup (Triggered sitewide on 'Request Callback' / 'req a call') */}
      <PopUp
        isOpen={isCallbackOpen}
        onClose={closeCallbackPopup}
        autoShow={false}
        onSuccess={unlockDetails}
      />
    </QuotePopupContext.Provider>
  );
};

export const useQuotePopup = () => useContext(QuotePopupContext);

