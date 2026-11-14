import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Home, FileText, Clock, Truck, ClipboardList } from 'lucide-react';
import { useQuotePopup } from '../context/QuotePopupContext';
import {
  WhyChooseRemax,
  HowToOrder,
  FlangeFAQs
} from '../components/products/flanges/FlangeCommonContent.jsx';

const productRange = [
  { name: 'Forged Flanges', url: '/products/flanges/', spec: 'Weld neck, slip-on, blind, socket weld, threaded, lap joint, spectacle blind. 1/2" to 48", Class 150 to 2500 (ASME B16.5 / B16.47).' },
  { name: 'Butt Weld Fittings', url: '/products/buttweld-fittings/butt-weld-elbow-fittings/', spec: '90°/45°/180° elbows, equal and reducing tees, concentric and eccentric reducers, caps, stub ends. Seamless and welded, ASME B16.9 / MSS SP-75.' },
  { name: 'Forged Fittings (SW & Threaded)', url: '/products/forged-fittings/', spec: 'Elbows, tees, couplings, unions, bushings, plugs. 1/8" to 4", 2000#, 3000#, 6000# and 9000# to ASME B16.11.' },
  { name: 'Socket Weld Fittings', url: '/products/socket-weld-fittings/', spec: 'Socket weld elbows, tees, couplings and bushings in carbon, stainless and alloy steel for small-bore, high-pressure lines.' },
  { name: 'Alloy Steel Pipes', url: '/products/pipes/alloy-steel-pipes/', spec: 'ASTM A335 P11 / P22 / P91 seamless pipe for high-temperature steam and refinery service, supplied with the matching fittings.' },
  { name: 'Material Grades', url: '/materials/carbon-steel-flanges/', spec: 'Carbon steel A105 / A234 WPB, SS 304 / 316 / 321 / 347, duplex 2205 / 2507, alloy F11 / F22 / F91, Inconel 625, Monel 400, Hastelloy C276.' },
];

const rfqItems = [
  'Product type (flange, BW fitting, SW/threaded fitting, pipe) and quantity per line',
  'Size: NPS or DN, and schedule or bore for weld neck flanges and BW fittings',
  'Pressure class (150–2500 for flanges, 2000–9000# for forged fittings) or PN rating',
  'Material specification and grade, e.g. ASTM A105, A182 F316L, A234 WP91',
  'Facing and finish for flanges (RF, FF, RTJ) and any coating requirement',
  'Delivery location, required date, and whether a third-party inspection is needed',
];

const industries = [
  'Oil & gas, refineries and petrochemicals', 'Power plants and boilers (IBR grades F11 / F22 / F91)',
  'Fertilizer and chemical plants', 'Pharma and food processing (SS 304 / 316L)',
  'Water infrastructure and desalination', 'Shipbuilding, ports and defence',
  'Steel, cement and mining', 'EPC contractors and piping fabricators',
];

const PipeFittingsManufacturerinIndia = () => {
  const { openQuotePopup } = useQuotePopup();

  const specsRows = [
    { label: "Standard Codes", value: "ASME B16.5, B16.9, B16.11, B16.47, B16.48, MSS SP-43/75/79, IS 6392, EN 1092-1" },
    { label: "Materials Available", value: "Carbon Steel (A105, A234 WPB, A350 LF2), Stainless (304/304L/316/316L/321/347), Duplex (2205/2507), Alloy (F11/F22/F91), Nickel alloys (Inconel 625/825, Monel 400, Hastelloy C276)" },
    { label: "Pressure Classes", value: "Up to Class 2500 for flanges; 2000#, 3000#, 6000# and 9000# for forged fittings" },
    { label: "Certification & Testing", value: "ISO 9001:2015 quality system; EN 10204 3.1 MTC with every lot; 100% PMI on alloy and stainless lots; hydrostatic, UT, RT and MPI on request; NACE MR0175 hardness-controlled material on request; third-party inspection (SGS, BV, TUV) witnessed on request" },
    { label: "Lead Time", value: "Ex-stock sizes dispatched in 24–48 hours; made-to-order and special grades typically 7–14 days" },
    { label: "Export Markets", value: "45+ countries including UAE, Saudi Arabia, Qatar, USA, UK, Germany, Singapore and Australia" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <Link to="/products/flanges/" className="hover:text-[#D71920] transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Pipe Fittings Manufacturer in India</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Pipe Fittings Manufacturer in India
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Remax Forge & Fittings manufactures forged flanges, butt weld fittings and forged socket weld / threaded fittings at its Mumbai works and supplies them across India and to 45+ countries. Send your BOQ and get a written, line-by-line quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
            <img
              src="/images/but-weld-fittings.jpeg"
              alt="Butt weld pipe fittings manufactured by Remax Forge & Fittings in Mumbai, India"
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
              Buy Direct from the Manufacturer
            </h2>
            <div className="space-y-6">
              {[
                { icon: CheckCircle2, t: 'ISO 9001:2015 works, EN 10204 3.1 MTC on every lot', d: 'Heat numbers are hard-stamped on each piece. Alloy and stainless lots get 100% PMI before dispatch.' },
                { icon: Clock, t: 'Ex-stock dispatch in 24–48 hours', d: 'Common carbon and stainless sizes ship from Mumbai stock. Made-to-order items and special grades typically take 7–14 days.' },
                { icon: Truck, t: 'Delivered anywhere in India, or FOB Nhava Sheva for export', d: 'Road freight reaches Gujarat and Maharashtra in 1–2 days, most of South and North India in 2–4 days, and the East and Northeast in 4–10 days.' },
              ].map((k, i) => (
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
                Request a Quote <ArrowRight size={18} />
              </button>
              <Link to="/brochure/" className="px-8 py-4 rounded font-bold text-[#0F172A] bg-white border border-slate-300 hover:border-[#D71920] transition-all flex items-center gap-2">
                <FileText size={18} /> Download Catalogue
              </Link>
            </div>
          </div>
        </div>

        {/* Product Range */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-3">
            What We Manufacture
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            One supplier for the full piping bill of materials: flanges, butt weld fittings, forged fittings and matching alloy pipe, all from the same Mumbai works and covered by one set of test certificates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productRange.map((p) => (
              <Link key={p.url} to={p.url} className="group block rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-[#D71920] hover:bg-white transition">
                <h3 className="font-bold text-slate-900 text-lg flex items-center justify-between">
                  {p.name} <ChevronRight size={18} className="text-[#D71920] group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{p.spec}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RFQ checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-3 flex items-center gap-3">
              <ClipboardList className="text-[#D71920]" /> What to Send for a Written Quote
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium mb-6">
              A complete enquiry is quoted line by line, in writing. Include:
            </p>
            <ul className="space-y-3">
              {rfqItems.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                  <CheckCircle2 size={18} className="text-[#D71920] shrink-0 mt-0.5" /> {r}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm mt-6">
              No drawing yet? Send the P&ID line class or a photo of the existing part and we will confirm the specification before quoting. Prices are quoted ex-works Mumbai or delivered to site, with GST invoice and e-way bill.
            </p>
          </div>
          <div className="bg-[#0F172A] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold mb-3">Industries We Supply</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {industries.map((x) => (
                  <li key={x} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#D71920] shrink-0 mt-0.5" /> {x}</li>
                ))}
              </ul>
            </div>
            <button onClick={openQuotePopup} className="mt-8 w-full bg-[#D71920] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider">
              Send Your BOQ
            </button>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            Standards, Materials and Lead Times
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
          <p className="text-slate-500 text-sm mt-4">
            The Mumbai works are open to customer audit in person or by video call before you place an order.
          </p>
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
            Common questions from buyers sourcing pipe fittings from India. For anything else, send your query with the quote form.
          </p>
          <FlangeFAQs slug="pipe-fittings-manufacturer-india" />
        </div>
      </div>
    </div>
  );
};

export default PipeFittingsManufacturerinIndia;
