import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { 
  MaterialGradesTable, 
  StandardsTable, 
  FlangeFaceTypes, 
  TestingInspection, 
  DocumentsCertificates, 
  SurfaceFinish, 
  ExportMarkets, 
  IndustriesApplications, 
  WhyChooseRemax, 
  HowToOrder,
  FlangeDimensionsTable,
  FlangeFAQs,
  RelatedFlanges
} from '../../../components/products/flanges/FlangeCommonContent.jsx';

const Blind = () => {
  const { openQuotePopup } = useQuotePopup();

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: "Overview", target: "overview" },
    { label: "Specifications", target: "specifications" },
    { label: "Material Grades", target: "materials" },
    { label: "Dimensions", target: "dimensions" },
    { label: "Quality & Testing", target: "quality" },
    { label: "FAQ", target: "faq" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <a href="/products" className="hover:text-[#D71920] transition-colors">Products</a>
            <ChevronRight size={14} />
            <span className="text-slate-400">Flanges</span>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Blind Flange</span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Blind Flange Manufacturer in India | BL / BLRF / BLFF / BLRTJ | ASME B16.5 | Remax Forge
          </h1>
        </div>
      </div>

      {/* Floating Section Nav */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-bold text-slate-600 hover:text-[#D71920] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Hero Section: Image & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Column: Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[400px] flex items-center justify-center relative group">
             <img 
               src="/images/blind-flanges.webp" 
               alt="Blind Flange ASME B16.5 Class 150 Carbon Steel Manufacturer Mumbai India" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right Column: Key Features */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight border-l-4 border-[#D71920] pl-3 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              {
[
                { title: "Seals pipeline ends securely", desc: "Used to seal the end of a piping system to prevent flow of liquids or gases." },
                { title: "No flow—complete line isolation", desc: "Allows for easy access to the piping system once it has been closed." },
                { title: "Ideal for high-pressure systems", desc: "Widely used in high pressure applications for testing and isolation." },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-red-50 p-2 rounded-full h-fit">
                    <CheckCircle2 size={24} className="text-[#D71920]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1 font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))
}
            </div>
            
            <div className="mt-10 flex gap-4">
               <button onClick={() => openQuotePopup()} className="px-8 py-3 rounded font-bold text-white bg-[#D71920] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                 Request Quote <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>

        {/* Linear Content Flow */}

        {/* H2-1: What is a Blind Flange? */}
        <div id="overview" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-6">
            What is a Blind Flange?
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                        <p>
              We are a trusted firm engaged in offering a wide assortment of Blinds Flanges. Demanded extensively for the purpose of constructing bus bodies, shutters and grills, these products are manufactured using optimum quality raw material, obtained from authentic vendors of the industry. In addition to this, we make sure to examine the quality of the entire range before delivering these products to the clients end.
            </p>
            <p>
              Commonly referred as blanking flanges, Blind pipe flanges are widely used in high pressure applications. Blind flanges are generally used to seal the end of a piping system to prevent flow of liquids or gases. The use of blind flanges allows ease of access to a piping system once it has been closed. Our blind flanges are available with raised or RTJ faces and also with female threads. Blind flanges can be supplied with or without hub as per the customer requirements.
            </p>
            <p>
              We are an ISO 9001:2008, ISO 9001-2008, ISO 14001-2004, OHSAS 18001-2007, NSIC-CRISIL, EEPC, and QA-UKAS (ISO 9001-2008), SSI Certified company that follows total Quality Management System and have been recognized as one of the world’s leading stockists and manufacturer of quality metals for over two decades.
            </p>

            
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/50 mt-8">
              <p className="text-xs md:text-sm text-slate-700 font-bold leading-relaxed">
                🔗 Internal Reference: For high-pressure applications, see our <a href="/products/flanges/weld-neck-flange" className="text-[#D71920] hover:underline font-extrabold">Weld Neck Flange</a> page. For permanent pipe closure, our <a href="/products/flanges/blind-flange" className="text-[#D71920] hover:underline font-extrabold">Blind Flange</a> may be a better fit. Compare our <a href="/products/flanges" className="text-[#D71920] hover:underline font-extrabold">complete flange range</a> for your project.
              </p>
            </div>
          </div>
        </div>

        {/* H2-2: Blind Flange Standard Specifications */}
        <div id="specifications" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange Standard Specifications
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Remax Forge & Fittings manufactures forged Blind Flanges to meet stringent international standards. Our manufacturing processes comply with international norms, offering standard dimensions, thickness tolerances, and drilling patterns as outlined below:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <tbody>
                {
[
                { label: "Type", value: "Blind Flange" },
                { label: "Standards", value: "ANSI B16.5, ANSI B16.47 Series A & B, MSS SP44, ASA, API-605, AWWA, Custom Drawings" },
                { label: "Outside Diameter", value: "≤ 24 = 1.6 mm, > 24 = ± 3.2 mm" },
                { label: "Inside Diameter", value: "≤ 10 = ± 0.8 mm, > 12 = + 1.6 mm / - 0 mm" },
                { label: "Diameter Contact Face", value: "1.6 mm RF = ±0.8 mm, 6.35 mm RF = ±0.4 mm, Tongue & Groove = ±0.4 mm, Male-Female = ±0.4 mm" },
                { label: "Outside Diameter of Hub", value: "≤12 = + 2.4 mm/ - 1.6 mm, ≥ 14 = ± 3.2 mm" },
                { label: "Diameter of Counterbore", value: "Same as for Inside Diameter" },
                { label: "Drilling", value: "Bolt Circle = 1.6 mm, Bolt Hole Spacing = ±0.8 mm. Eccentricity Bolt Circle with Respect to Facing: ≤2.1/2 = 0.8 mm max, ≥3 = 1.6 mm max" },
                { label: "Thickness", value: "≤18 = +3.2 mm / -0, ≥20 = +4.8 mm / -0" },
                { label: "Length thru Hub", value: "≤18 = 3.2 mm / - 0.8 mm, ≥20 = + 4.8 mm / - 1.6 mm" },
                { label: "Pressure Ratings", value: "Class 150, Class 300, Class 400, Class 600, Class 900, Class 1500, Class 2500 | PN6, PN10, PN16, PN25, PN40, PN64 etc." },
                { label: "Order", value: "Accept custom order" },
                { label: "Quality Assurance", value: "All fittings and flanges are subject to strict inspection at each stage of the production process, from starting material purchasing to product dispatch." },
                { label: "Marking & Packing", value: "Products are packaged to ensure that there is no damage during transit. In case of exports, standard export packaging is done in wooden cases." },
                { label: "Value Added Services", value: "Hot Dipped Galvanizing, CNC Machining, Customised Flanges" },
                { label: "Test Certificates", value: "Manufacturer Test Certificate as per EN 10204 / 3.1B, Raw Materials Certificate, 100% Radiography Test Report, Third Party Inspection Report" },
              ].map((row, idx) => (
                <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                  <td className="px-6 py-4 font-bold text-[#0F172A] w-1/3 align-top border-r border-slate-200">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-slate-600 align-top">
                    {row.value}
                  </td>
                </tr>
              ))
}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2-3: Blind Flange Material Grades */}
        <div id="materials" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange Material Grades
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            We forge industrial Blind Flanges in a wide variety of metallic materials to handle diverse chemical and corrosion requirements. Our range includes high-integrity Stainless Steel, Duplex Steel, Super Duplex Steel, low temperature Carbon Steel (LTCS), high yield Carbon Steel, Alloy Steel, and corrosion-resistant Nickel Alloys (Inconel, Hastelloy, Monel):
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8">
              <MaterialGradesTable productName="Blind Flange" />
            </div>
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
              <img 
                src="/images/nickel-alloy-bar-500x500.webp" 
                alt="Blind Flange material grades stainless steel duplex inconel" 
                className="w-full h-auto max-h-[220px] object-contain rounded-xl shadow-sm mb-2"
              />
              <span className="text-[10px] text-slate-500 font-mono">Forged Raw Billets stock</span>
            </div>
          </div>
        </div>

        {/* H2-4: Blind Flange Standards & Dimensions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Blind Flange Standards & Dimensions
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Our forged Blind Flanges are engineered according to ASME, ANSI, DIN, EN, JIS, and BS standards. They are designed to suit standard industrial pipes and tubes for oil, gas, refinery, water, and chemical projects. We also offer customization to client-specific drawings and dimensional schedules:
          </p>
          <StandardsTable />
        </div>

        {/* H2-5: ASME B16.5 Blind Flange Dimensions Table */}
        <div id="dimensions" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            ASME B16.5 Blind Flange Dimensions Table
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base font-medium">
            Review our detailed dimensional chart for Class 150# and Class 300# forged Blind Flanges. Standard dimensions cover Nominal Pipe Size (NPS), outer diameter (OD), thickness, bolt circle, number of bolt holes, bolt diameter, and estimated weights. You can sort columns below for easy reference:
          </p>
          <FlangeDimensionsTable slug="blind-flange" altText="ASME B16.5 Blind Flange dimensions chart" />
        </div>

        {/* H2-6: Flange Face Types */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Flange Face Types
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Remax Forge & Fittings manufactures industrial flanges in several face type designs to accommodate different sealing gaskets and pressure ratings. The raised face (RF) concentrates compression load on the gasket to form an ultra-secure seal, whereas the flat face (FF) prevents cracking when mating with cast iron valves. For high-pressure offshore applications, the ring type joint (RTJ) employs metal-to-metal gaskets for leakage protection.
          </p>
          <FlangeFaceTypes />
        </div>

        {/* H2-7: Testing & Inspection */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Testing & Inspection
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                We implement a rigorous, zero-defect quality control protocol on all flange fabrications. Every single production batch undergoes strict visual inspection and dimensional checking. In addition, we offer advanced non-destructive testing (NDT) such as ultrasonic testing, positive material identification (PMI) spectrometer analysis, hydrostatic pressure testing, and magnetic particle examinations. This ensures that our flanges meet exact ASTM, ASME, and DIN standards before dispatch.
              </p>
            </div>
            <TestingInspection />
          </div>

          {/* H2-8: Documents & Certificates */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
                Documents & Certificates
              </h2>
              <p className="text-slate-600 text-sm font-medium mb-6">
                Traceability and quality assurance are integral to our manufacturing process. We supply a comprehensive package of documentation with every shipment at no extra cost, including Mill Test Certificates (MTC) in accordance with EN 10204 3.1. We also provide raw material origin tracking, NACE compliance documentation, heat treatment records, hydrostatic test charts, and third-party inspection clearances from world-renowned auditors like SGS, Lloyd's, and DNV.
              </p>
            </div>
            <DocumentsCertificates />
          </div>
        </div>

        {/* H2-9: Industries & Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Industries & Applications
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-6">
            Remax industrial flanges are designed and manufactured to perform reliably in extreme pressure, elevated temperature, and highly corrosive environments. Our products are widely used by procurement managers in oil and gas refineries, chemical processing plants, thermal and nuclear power plants, municipal water treatment facilities, marine shipbuilding yards, paper and pulp mills, and pharmaceutical clean-room projects. They are engineered to ensure smooth fluid flow and stress resistance.
          </p>
          <IndustriesApplications />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SurfaceFinish />
          
          {/* H2-10: Export Markets */}
          <div id="export">
            <h2 className="sr-only">Export Markets</h2>
            <p className="sr-only">
              As a premier industrial flange exporter, Remax Forge & Fittings ships high-grade forged flanges to more than 45 countries worldwide. Our robust distribution and logistics network covers the Americas, the Middle East, Europe, Africa, Central Asia, and the Asia-Pacific region. We coordinate with global sea and air cargo partners to handle customs clearances, export certifications, and secure seaworthy packaging, ensuring on-time delivery to Houston, Dubai, Rotterdam, and beyond.
            </p>
            <ExportMarkets />
          </div>
        </div>

        {/* H2-11: Why Choose Remax Forge? */}
        <WhyChooseRemax />

        {/* H2-12: How to Order */}
        <HowToOrder />

        {/* H2-13: Frequently Asked Questions */}
        <div id="faq" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Find answers to the most common questions about our industrial flanges, manufacturing tolerances, material grades, and ordering procedures. If you have any additional queries or require technical assistance for your specific piping system layout, please contact our in-house metallurgical engineers and sales team. We are available to help you select the ideal flange specification for your project.
          </p>
          <FlangeFAQs slug="blind-flange" />
        </div>

        {/* H2-14: Related Products */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#D71920] pl-3 mb-4">
            Related Products
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium mb-8">
            Compare our comprehensive range of industrial flanges to find the perfect fit for your piping project. We offer slip-on flanges, weld neck flanges, blind flanges, socket weld flanges, threaded flanges, lap joint flanges, long weld neck flanges, and spectacle blinds. If you are unsure which flange design is best suited for your system pressure and temperature requirements, our engineering experts can provide guidance.
          </p>
          <RelatedFlanges activeSlug="blind-flange" />
        </div>

      </div>
    </div>
  );
};

export default Blind;
