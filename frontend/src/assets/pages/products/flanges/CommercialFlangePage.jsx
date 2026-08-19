import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle, FileText } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { newFlangePagesData } from '../../../data/newFlangePagesData.js';
import { 
  MaterialGradesTable, 
  StandardsTable, 
  FlangeFaceTypes, 
  TestingInspection, 
  DocumentsCertificates, 
  ExportMarkets, 
  IndustriesApplications, 
  WhyChooseRemax, 
  HowToOrder 
} from '../../../components/products/flanges/FlangeCommonContent.jsx';

const CommercialFlangePage = () => {
  const { pathname } = useLocation();
  const { openQuotePopup } = useQuotePopup();

  // Normalize path to find data in newFlangePagesData
  const canonicalPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const pageData = newFlangePagesData[canonicalPath] || newFlangePagesData[pathname] || {};

  const {
    category = 'Flange Solution',
    h1 = 'Forged Flange Manufacturing',
    title = 'Forged Flange Manufacturer | Remax Forge',
    description = 'High quality forged flanges manufactured in Mumbai according to ASME B16.5, B16.47 & EN standards.',
    primaryKw = '',
    outline = [],
    faqs = [],
    priority = 'P1'
  } = pageData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { label: "Overview", target: "overview" },
    { label: "Requirements & Outline", target: "outline" },
    { label: "Material Grades", target: "materials" },
    { label: "Quality & Testing", target: "quality" },
    { label: "FAQs", target: "faqs" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Hero Header */}
      <div className="bg-[#0F172A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 flex-wrap">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <a href="/products/flanges/" className="hover:text-[#D71920] transition-colors">Flanges</a>
            <ChevronRight size={14} />
            <span className="text-slate-400">{category}</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">{h1}</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {h1}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => openQuotePopup(h1)}
              className="bg-[#D71920] hover:bg-[#b5141a] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md flex items-center gap-2"
            >
              Get Instant Quote in 30 Min <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/80 px-4 py-2.5 rounded-lg border border-slate-700">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>EN 10204 3.1 MTC & 3rd-Party Inspection (SGS/Lloyd's/DNV)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Section Nav */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-medium text-slate-600 hover:text-[#D71920] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section id="overview" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Overview & Sourcing Context</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Remax Forge & Fittings is an ISO 9001:2015 certified manufacturer of forged flanges based in Mumbai, India. We deliver custom-engineered, fully-traceable forged piping components designed to meet strict industrial specifications for <strong className="text-slate-900">{primaryKw || h1}</strong> across global infrastructure, chemical processing, oil & gas, and power generation projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#D71920] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Full Traceability</h3>
                <p className="text-xs text-slate-600">Every flange stamped with heat number, pressure rating, grade & size.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#D71920] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Zero-Defect Quality</h3>
                <p className="text-xs text-slate-600">Spectro PMI analysis, ultrasonic testing, hydrostatic testing & MTC 3.1/3.2.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#D71920] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Fast Turnaround</h3>
                <p className="text-xs text-slate-600">Quotes provided within 30 minutes; standard orders dispatched in 7–14 days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outline & Key Technical Requirements Section */}
        {outline.length > 0 && (
          <section id="outline" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Engineering Requirements & Sourcing Checklist</h2>
            <p className="text-slate-600 mb-6">Key technical parameters required when specifying or ordering for this application:</p>
            <div className="space-y-4">
              {outline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#D71920] font-bold flex items-center justify-center shrink-0 text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-slate-800 font-medium text-sm md:text-base leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Material Grades & Standards */}
        <section id="materials">
          <MaterialGradesTable productName={h1} />
        </section>

        <section id="standards">
          <StandardsTable productName={h1} />
        </section>

        <FlangeFaceTypes />

        {/* Quality & Testing Section */}
        <section id="quality">
          <TestingInspection />
          <DocumentsCertificates />
        </section>

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section id="faqs" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-[#D71920]" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-start gap-2">
                    <span className="text-[#D71920]">Q:</span> {faq.q}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <WhyChooseRemax />
        <ExportMarkets />
        <HowToOrder productName={h1} />

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to Quote Your Custom Flange Project?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base">
            Send us your drawing, specifications, or inquiry details. Our technical engineering team will review your specs and provide a firm commercial quotation with EN 10204 3.1 certification within 30 minutes.
          </p>
          <button
            onClick={() => openQuotePopup(h1)}
            className="bg-[#D71920] hover:bg-[#b5141a] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-md inline-flex items-center gap-3"
          >
            Submit Inquiry Now <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialFlangePage;
