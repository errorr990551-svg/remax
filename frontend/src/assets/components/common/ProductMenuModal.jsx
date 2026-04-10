import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProductMenu } from '../../context/ProductMenuContext.jsx';
import { productData, createSlug } from '../../data/productsData.js';

const ProductMenuModal = () => {
  const { isProductMenuOpen, closeProductMenu, activeCategoryIndex, setActiveCategoryIndex } = useProductMenu();

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeProductMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeProductMenu]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isProductMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isProductMenuOpen]);

  if (!isProductMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-md transition-opacity"
        onClick={closeProductMenu}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 border-t-8 border-[#D71920]">
        
        {/* Close Button */}
        <button 
          onClick={closeProductMenu}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#D71920] transition-colors bg-slate-50 hover:bg-red-50 p-2 rounded-full z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[90vh]">
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/3 bg-slate-50 border-r py-8 overflow-y-auto">
            <div className="px-6 mb-4">
              <span className="text-[#D71920] font-bold tracking-widest uppercase text-xs">Categories</span>
            </div>
            {productData.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCategoryIndex(index)}
                onClick={() => setActiveCategoryIndex(index)}
                className={`px-8 py-4 cursor-pointer flex items-center justify-between text-base font-bold transition-all ${
                  activeCategoryIndex === index
                    ? 'bg-white text-[#D71920] border-l-4 border-[#D71920] shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.category}
                {activeCategoryIndex === index && <ChevronRight size={18} />}
              </div>
            ))}
          </div>

          {/* Subcategories Main Area */}
          <div className="w-full md:w-2/3 p-10 bg-white overflow-y-auto">
            <div className="mb-8 border-b pb-6">
              <h4 className="text-3xl font-extrabold text-[#0F172A]">
                {productData[activeCategoryIndex].category}
              </h4>
              <p className="text-slate-500 mt-2">Explore our full range of {productData[activeCategoryIndex].category.toLowerCase()}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {productData[activeCategoryIndex].subcategories.map((subItem, subIndex) => {
                const linkHref = `/products/${createSlug(
                  productData[activeCategoryIndex].category
                )}/${createSlug(subItem)}`;

                return (
                  <Link
                    key={subIndex}
                    to={linkHref}
                    onClick={closeProductMenu}
                    className="flex items-center group py-2"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-[#D71920] mr-4 transition-colors"></div>
                    <span className="text-base text-slate-600 group-hover:text-[#D71920] font-medium transition-colors">
                      {subItem}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* View More / Contact CTA in Modal */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-400">Can't find what you're looking for?</p>
              <Link 
                to="/contact" 
                onClick={closeProductMenu}
                className="text-[#D71920] font-bold text-sm hover:underline flex items-center gap-1"
              >
                Contact our experts <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenuModal;
