import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Home, FileText, Ship, Package, FileCheck2 } from 'lucide-react';
import { useQuotePopup } from '../context/QuotePopupContext';
import {
  WhyChooseRemax,
  HowToOrder,
  FlangeFAQs
} from '../components/products/flanges/FlangeCommonContent.jsx';

const exportRange = [
  { product: '90° / 45° / 180° Elbows (LR & SR)', url: '/products/buttweld-fittings/butt-weld-elbow-fittings/', materials: 'A234 WPB / WPC, A403 WP304L / WP316L, A420 WPL6, WP11 / WP22 / WP91, duplex S31803', standard: 'ASME B16.9, MSS SP-75' },
  { product: 'Equal & Reducing Tees', url: '/products/buttweld-fittings/butt-weld-tee-fittings/', materials: 'A234 WPB, A403 WP316L, WP11 / WP22, duplex', standard: 'ASME B16.9' },
  { product: 'Concentric & Eccentric Reducers', url: '/products/buttweld-fittings/butt-weld-reducers-fittings/', materials: 'A234 WPB, A403 WP304L / WP316L, alloy WP grades', standard: 'ASME B16.9' },
  { product: 'Caps & Stub Ends', url: '/products/buttweld-fittings/oval-caps/', materials: 'Carbon, stainless and alloy steel', standard: 'ASME B16.9, MSS SP-43' },
  { product: 'Matching Flanges', url: '/products/flanges/', materials: 'A105, A182 F304L / F316L / F51, F11 / F22 / F91', standard: 'ASME B16.5, B16.47, EN 1092-1' },
];

const exportDocs = [
  'Commercial invoice and packing list with heat numbers per line',
  'EN 10204 3.1 mill test certificate for every heat; 3.2 with third-party witness on request',
  'Certificate of origin from the Chamber of Commerce',
  'Third-party inspection release note (SGS, Bureau Veritas, TUV, DNV) when specified',
  'NACE MR0175 / ISO 15156 compliance statement for sour-service material',
  'Fumigation certificate for wooden packing (ISPM 15) and bill of lading or airway bill',
];

const exportSteps = [
  { icon: FileCheck2, t: 'Quote in writing', d: 'Send your MTO or enquiry with sizes, schedules, grades and quantities. You get a line-by-line quote, usually within 30 minutes during Indian working hours, on EXW, FOB Nhava Sheva or CIF basis.' },
  { icon: Package, t: 'Export packing', d: 'Fittings are bevel-protected with plastic caps, bagged in VCI film and packed in ISPM 15 plywood cases or steel pallets, stencilled with your PO and heat numbers.' },
  { icon: Ship, t: 'Shipment', d: 'Sea freight through Nhava Sheva (JNPT), Mumbai, or air freight for urgent lots. Ex-stock sizes dispatch in 24–48 hours; production lots typically ship in 7–14 days.' },
];

const ButtweldFittingsExporterinIndia = () => {
  const { openQuotePopup } = useQuotePopup();

  const specsRows = [
    { label: "Size Range", value: '1/2" to 48" NB, Schedule 10 to XXS; seamless up to 24", welded above' },
    { label: "Export Standards", value: "ASME B16.9, MSS SP-75, MSS SP-43, EN 10253, DIN 2605 / 2615 / 2616" },
    { label: "Key Markets", value: "UAE, Saudi Arabia, Qatar, Oman, Kuwait, USA, UK, Germany, Netherlands, Singapore, Australia; 45+ countries in total" },
    { label: "Payment Terms", value: "Letter of credit at sight, or advance with balance against bill of lading copy; T/T for repeat customers" },
    { label: "Incoterms", value: "EXW Mumbai, FOB / FCA Nhava Sheva, CFR or CIF destination port" },
    { label: "Testing", value: "100% PMI on alloy and stainless lots, dimensional and visual inspection on every lot; hydrostatic, UT, RT, MPI, hardness and impact tests when the order specifies them" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <Link to="/products/buttweld-fittings/butt-weld-elbow-fittings/" className="hover:text-[#D71920] transition-colors">Butt Weld Fittings</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Buttweld Fittings Exporter in India</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Buttweld Fittings Exporter in India
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            ASME B16.9 elbows, tees, reducers and caps manufactured in Mumbai and exported to 45+ countries with EN 10204 3.1 certificates. Send your MTO for an FOB or CIF quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img
              src="/images/ButtweldReducerFitting.webp"
              alt="ASME B16.9 butt weld reducer fittings exported from India by Remax Forge & Fittings"
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
              How an Export Order Works
            </h2>
            <div className="space-y-6">
              {exportSteps.map((k, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-red-50/50 p-2 rounded-full h-fit">
                    <k.icon size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{k.t}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">{k.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={openQuotePopup}
                className="px-8 py-4 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get an Export Quote <ArrowRight size={18} />
              </button>
              <Link to="/brochure/" className="px-8 py-4 rounded font-bold text-[#0F172A] bg-white border border-slate-300 hover:border-[#D71920] transition-all flex items-center gap-2">
                <FileText size={18} /> Download Catalogue
              </Link>
            </div>
          </div>
        </div>

        {/* Export range table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-3">
            What We Export
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Every item below is made at our Mumbai works, so one order can combine fittings and flanges in the same grade with matching heat certificates.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Product</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Materials</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider">Standard</th>
                </tr>
              </thead>
              <tbody>
                {exportRange.map((r, idx) => (
                  <tr key={r.product} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <td className="px-5 py-4 font-bold text-[#0F172A] align-top"><Link to={r.url} className="hover:text-[#D71920] underline-offset-2 hover:underline">{r.product}</Link></td>
                    <td className="px-5 py-4 text-slate-600 align-top leading-relaxed">{r.materials}</td>
                    <td className="px-5 py-4 text-slate-600 align-top">{r.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents + terms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
              Export Documents Supplied
            </h2>
            <ul className="space-y-3">
              {exportDocs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                  <CheckCircle2 size={18} className="text-[#D71920] shrink-0 mt-0.5" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
              Why Buyers Source from India
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Indian mills produce the ASTM and ASME grades that Gulf, European and North American projects specify, at manufacturing costs well below European sources. The difference is in the paperwork and inspection: our lots carry EN 10204 3.1 certificates traceable to heat number, 100% PMI on alloy and stainless material, and third-party inspection whenever your project or client requires it.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Our Mumbai works are a short drive from Nhava Sheva port, which keeps inland freight low and lets us consolidate flanges, fittings and pipe into one shipment. You are welcome to audit the works in person or by video call before placing a first order.
            </p>
            <button onClick={openQuotePopup} className="w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider">
              Send Your MTO for Pricing
            </button>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            Export Terms at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">Property</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider">Detail</th>
                </tr>
              </thead>
              <tbody>
                {specsRows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-bold text-[#0F172A] align-top border-r border-slate-200">{row.label}</td>
                    <td className="px-6 py-4 text-slate-600 align-top leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <WhyChooseRemax />

        {/* How to Order */}
        <HowToOrder />

        {/* Dynamic FAQ Accordion */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Common questions from importers of butt weld fittings. For a specific project, send the specification with your enquiry.
          </p>
          <FlangeFAQs slug="buttweld-fittings-exporter-india" />
        </div>
      </div>
    </div>
  );
};

export default ButtweldFittingsExporterinIndia;
