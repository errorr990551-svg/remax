import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const CustomSelect = ({ label, value, onChange, options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block text-[11px] font-bold text-slate-700 mb-1 tracking-wide uppercase">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-xl border bg-white text-slate-800 transition-all duration-200 shadow-xs ${
          isOpen
            ? 'border-[#D71920] ring-3 ring-[#D71920]/10 shadow-md'
            : 'border-slate-200 hover:border-slate-400'
        }`}
      >
        <span className="truncate">{value || 'Select...'}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-1 ${
            isOpen ? 'rotate-180 text-[#D71920]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 py-1.5 max-h-52 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
          {options.map((opt, idx) => {
            const isSelected = opt === value;
            return (
              <div
                key={idx}
                onClick={() => handleSelect(opt)}
                className={`px-3.5 py-2.5 text-xs font-medium cursor-pointer flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-red-50 text-[#D71920] font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="truncate">{opt}</span>
                {isSelected && <Check className="w-4 h-4 text-[#D71920] shrink-0 ml-2" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
