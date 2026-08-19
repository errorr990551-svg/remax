import React from 'react';
import { Home, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
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
import { newFlangePagesData } from '../../../data/newFlangePagesData.js';

const coreFlanges = [
  {
    name: 'Weld Neck Flange (WNRF / WNRTJ)',
    url: '/products/flanges/weld-neck-flange/',
    desc: 'High-pressure forged flange with a tapered hub for severe service, thermal cycling, and high-vibration piping.',
    spec: 'Class 150 - 2500 | ½" to 60" | ASME B16.5 / B16.47'
  },
  {
    name: 'Slip-On Flange (SORF / SOFT)',
    url: '/products/flanges/slip-on-flange/',
    desc: 'Cost-effective flange slipped over the pipe and welded inside and out. Ideal for low/medium pressure systems.',
    spec: 'Class 150 - 1500 | ½" to 60" | ASME B16.5'
  },
  {
    name: 'Blind Flange (BLRF / BLRTJ)',
    url: '/products/flanges/blind-flange/',
    desc: 'Solid forged disc used to seal pipeline ends, vessel nozzles, and perform pressure testing isolation.',
    spec: 'Class 150 - 2500 | ½" to 60" | ASME B16.5 / B16.47'
  },
  {
    name: 'Socket Weld Flange (SWRF)',
    url: '/products/flanges/socket-weld-flange/',
    desc: 'Bored flange with a socket recess for smooth-bore internal fluid flow in small-diameter high-pressure piping.',
    spec: 'Class 150 - 1500 | ½" to 4" | ASME B16.5'
  },
  {
    name: 'Threaded Flange (THRF / NPT)',
    url: '/products/flanges/threaded-flange/',
    desc: 'Weld-free installation with internal NPT/BSPT threads. Perfect for explosive or non-weldable utility systems.',
    spec: 'Class 150 - 2500 | ½" to 24" | ASME B16.5'
  },
  {
    name: 'Lap Joint Flange & Stub Ends (LJRF)',
    url: '/products/flanges/lap-joint-flange/',
    desc: 'Loose backing flange paired with a stub end for easy bolt-hole alignment and frequent line dismantling.',
    spec: 'Class 150 - 600 | ½" to 24" | ASME B16.5'
  },
  {
    name: 'Spectacle Blind Flange (8-Blind / Spec Blind)',
    url: '/products/flanges/spectacle-blind-flange/',
    desc: 'Figure-8 positive line isolation device (solid plate + open spacer ring) for quick cycling between open and blind state.',
    spec: 'Class 150 - 2500 | ½" to 60" | ASME B16.48'
  },
  {
    name: 'Long Weld Neck Flange (LWN)',
    url: '/products/flanges/long-weld-neck-flange/',
    desc: 'Extended neck forged flange used primarily as heavy-barrel vessel nozzles and high-stress column connections.',
    spec: 'Class 150 - 2500 | ½" to 36" | Custom Lengths'
  }
];

const FlangesCategoryHub = () => {
  const { openQuotePopup } = useQuotePopup();

  // Commercial pages grouped by category
  const commercialPages = Object.values(newFlangePagesData);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Hero Header */}
      <div className="bg-[#0F172A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Forged Flanges</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-3">
            Forged Flanges Manufacturer in India
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            ASME B16.5, B16.47 & EN 1092-1 forged flanges manufactured in Mumbai. Stocking Carbon Steel (A105), Stainless Steel (304/316/321), Duplex 2205, Super Duplex, Alloy Steel & Nickel Alloys. Complete EN 10204 3.1 MTC & 3rd-party inspection.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => openQuotePopup("Flanges Category Hub")}
              className="bg-[#D71920] hover:bg-[#b5141a] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md flex items-center gap-2"
            >
              Request Quote in 30 Minutes <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Flange Types Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Explore Primary Flange Types</h2>
          <p className="text-slate-600 mb-8">Select a forged flange type below for full technical specifications, dimension tables, and ordering guides.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFlanges.map((flange, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{flange.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{flange.desc}</p>
                  <div className="text-xs font-semibold text-[#D71920] bg-red-50 py-1 px-2.5 rounded-md inline-block mb-4">
                    {flange.spec}
                  </div>
                </div>
                <a
                  href={flange.url}
                  className="mt-auto inline-flex items-center text-sm font-bold text-[#D71920] hover:text-[#b5141a] transition-colors gap-1"
                >
                  View Full Specs <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized / Commercial Flange Solutions */}
        <div className="mb-16 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Specialized Industry & Custom Flange Solutions</h2>
          <p className="text-slate-600 mb-6">Engineered solutions by application, material grade, location, and service condition:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialPages.map((page, idx) => (
              <a
                key={idx}
                href={page.url}
                className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#D71920] hover:bg-red-50/30 transition-all flex items-start gap-3 group"
              >
                <CheckCircle2 size={18} className="text-[#D71920] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-[#D71920] transition-colors text-sm">
                    {page.h1}
                  </h4>
                  <span className="text-xs text-slate-500">{page.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Standard Common Content Sections */}
        <MaterialGradesTable productName="Forged Flange" />
        <StandardsTable productName="Forged Flange" />
        <FlangeFaceTypes />
        <TestingInspection />
        <DocumentsCertificates />
        <IndustriesApplications />
        <WhyChooseRemax />
        <ExportMarkets />
        <HowToOrder productName="Forged Flanges" />
      </div>
    </div>
  );
};

export default FlangesCategoryHub;
