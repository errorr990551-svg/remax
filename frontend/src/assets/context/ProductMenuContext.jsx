import React, { createContext, useContext, useState } from 'react';

const ProductMenuContext = createContext();

export const ProductMenuProvider = ({ children }) => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const openProductMenu = (categoryIndex = 0) => {
    setActiveCategoryIndex(categoryIndex);
    setIsProductMenuOpen(true);
  };

  const closeProductMenu = () => {
    setIsProductMenuOpen(false);
  };

  return (
    <ProductMenuContext.Provider
      value={{
        isProductMenuOpen,
        activeCategoryIndex,
        setActiveCategoryIndex,
        openProductMenu,
        closeProductMenu
      }}
    >
      {children}
    </ProductMenuContext.Provider>
  );
};

export const useProductMenu = () => {
  const context = useContext(ProductMenuContext);
  if (!context) {
    throw new Error('useProductMenu must be used within a ProductMenuProvider');
  }
  return context;
};
