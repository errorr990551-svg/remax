import React from 'react';
import { ShieldCheck, Clock, Award, FileCheck } from 'lucide-react';

const TrustBar = ({ className = "" }) => {
  return (
    <div className={`bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 my-4 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center md:text-left">
        
        <div className="flex items-center gap-2">
          <Award className="text-[#D71920] w-5 h-5 shrink-0" />
          <div className="text-xs font-semibold text-slate-800">
            ISO 9001:2015 <span className="block font-normal text-[10px] text-slate-500">Certified Mfg</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck className="text-[#D71920] w-5 h-5 shrink-0" />
          <div className="text-xs font-semibold text-slate-800">
            Trusted Supplier <span className="block font-normal text-[10px] text-slate-500">ONGC • Tata • L&T • HPCL</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FileCheck className="text-[#D71920] w-5 h-5 shrink-0" />
          <div className="text-xs font-semibold text-slate-800">
            MTC EN 10204 3.1 <span className="block font-normal text-[10px] text-slate-500">With Every Order</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="text-[#D71920] w-5 h-5 shrink-0" />
          <div className="text-xs font-semibold text-slate-800">
            Quote in 30 Min <span className="block font-normal text-[10px] text-slate-500">Guaranteed Response</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustBar;
