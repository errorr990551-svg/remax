import React from 'react';
import { Home, ChevronRight, Download, Award } from 'lucide-react';

const Certification = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Certification</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Accreditation & Certificates</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        

        {/* Certificate Display Container */}
        <div className="flex justify-center">
            <div className="relative group max-w-3xl w-full">
                {/* Decorative border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-[#D71920]/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white p-4 rounded-lg shadow-xl border border-slate-200">
                    {/* CERTIFICATE IMAGE PLACEHOLDER */}
                    {/* Replace the src below with the actual link to your certificate image */}
                    <img 
                        src="https://img.freepik.com/premium-vector/luxurious-vertical-certificate-template-with-dynamic-colorful-flow-line-shape-texture-modern-pattern-background-diploma-vector-illustration_1002851-496.jpg?w=740" 
                        alt="ISO 9001:2015 Certificate" 
                        className="w-full h-auto object-contain border border-slate-100"
                    />
                    
                    
                </div>
            </div>
        </div>

        

      </div>
    </div>
  );
};

export default Certification;