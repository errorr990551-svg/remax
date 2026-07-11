import React, { createContext, useContext, useState } from "react";
import PopUp from "../pages/PopUp.jsx";

const QuotePopupContext = createContext();

export const QuotePopupProvider = ({ children }) => {
  // IMPORTANT: undefined keeps your autoShow logic intact
  const [isOpen, setIsOpen] = useState(undefined);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem("remax_contact_unlocked") === "true";
  });

  const openQuotePopup = () => {
    setIsOpen(true);
  };

  const closeQuotePopup = () => {
    setIsOpen(false);
  };

  const unlockDetails = () => {
    localStorage.setItem("remax_contact_unlocked", "true");
    setIsUnlocked(true);
  };

  return (
    <QuotePopupContext.Provider value={{ openQuotePopup, closeQuotePopup, isUnlocked, unlockDetails }}>
      {children}

      {/* Single global popup using YOUR original component */}
      <PopUp
        isOpen={isOpen}
        onClose={closeQuotePopup}
        autoShow={true} // keeps reload auto popup behavior
        onSuccess={unlockDetails}
      />
    </QuotePopupContext.Provider>
  );
};

export const useQuotePopup = () => useContext(QuotePopupContext);
