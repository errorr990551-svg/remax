import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Zap, 
  Flame, 
  Droplet, 
  Ship, 
  Building, 
  Compass, 
  Settings, 
  Award, 
  Calendar, 
  DollarSign, 
  HeartHandshake, 
  Clock, 
  Hammer,
  Layers,
  FileText,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useQuotePopup } from '../../../context/QuotePopupContext';
import { Link } from 'react-router-dom';
import dimensionsData from '../../../data/flange_dimensions.json';
import flangeFaqs from '../../../data/flange_faqs.json';

// Helper to pluralize flange names
const getPluralName = (name) => {
  if (!name) return 'Flanges';
  if (name.toLowerCase().endsWith('flange')) {
    return name + 's';
  }
  return name;
};

/* ----------------------------------------------------
   1. Material Grades Table
   ---------------------------------------------------- */
export const MaterialGradesTable = ({ productName }) => {
  const pluralProduct = getPluralName(productName);
  
  const materials = [
    { 
      category: `Stainless Steel ${pluralProduct}`, 
      grades: "ASTM/ASME A/SA182: F304, F304L, F316, F316L, F316H, F316Ti, F321, F347; Cast: CF3, CF3M, CF8, CF8M; DIN: 1.4301, 1.4306, 1.4401, 1.4404, 1.4408, 1.4409" 
    },
    { 
      category: `Duplex Steel ${pluralProduct}`, 
      grades: "UNS S31803/S32205 — ASTM A182 Gr F51, F52, F53, F54, F55, F57, F59, F60, F61" 
    },
    { 
      category: `Super Duplex ${pluralProduct}`, 
      grades: "UNS S32750/S32760 — ASTM A182 Gr F53, F55; Zeron 100" 
    },
    { 
      category: `Carbon Steel ${pluralProduct}`, 
      grades: "ASTM/ASME A/SA105, A105N, A216-WCB; A350 LF2 (low temp); A694 F52/F56/F60/F65/F70/F80 (high yield); DIN 1.0460, 1.0402, 1.0619" 
    },
    { 
      category: `Alloy Steel ${pluralProduct}`, 
      grades: "ASTM A182/ASME SA182: F5, F9, F11, F12, F22, F91 (all P-grades for high temp service)" 
    },
    { 
      category: `Nickel Alloy ${pluralProduct}`, 
      grades: "Inconel 600, 601, 625, 718, 690, X750 (ASTM B564/ASME SB564); Incoloy 800, 800H, 800HT, 825, 925" 
    },
    { 
      category: `Hastelloy ${pluralProduct}`, 
      grades: "C276 (UNS N10276), C22 (UNS N06022), C4, C2000, B2, B3, X (ASTM B564)" 
    },
    { 
      category: `Monel ${pluralProduct}`, 
      grades: "Monel 400 (UNS N04400), Monel K500 (UNS N05500) — ASTM B564" 
    },
    { 
      category: `Pure Nickel ${pluralProduct}`, 
      grades: "Nickel 200, 201, 205, 205LC — ASTM B564/ASME SB564" 
    },
    { 
      category: `Copper Nickel ${pluralProduct}`, 
      grades: "CuNi 90/10 (C70600), CuNi 70/30 (C71500), UNS C71640 — ASTM/ASME SB 61/62/151/152" 
    },
    { 
      category: `Titanium ${pluralProduct}`, 
      grades: "Gr.1, Gr.2, Gr.4, Gr.5, Gr.7 — ASTM B381/ASME SB381; R50250/R50400/R50550/R50700/R52400/R53400/R56400" 
    },
    { 
      category: `Aluminium ${pluralProduct}`, 
      grades: "5052, 6061, 6063, 2017, 7075" 
    },
    { 
      category: `Brass ${pluralProduct}`, 
      grades: "3602, 2604, H59, H62" 
    },
    { 
      category: `Special Alloy ${pluralProduct}`, 
      grades: "Alloy 20 (ASTM B462 SB462 — Carpenter 20Cb-3); SMO 254/6Mo (UNS S31254, DIN 1.4547); Al6XN; AISI 4130; AISI 4140; Nimonic 75/80A/90; Gunmetal; Cast Iron" 
    }
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0F172A] text-white">
            <th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">
              Material Category
            </th>
            <th className="px-6 py-4 font-bold uppercase tracking-wider">
              Grades / Specifications
            </th>
          </tr>
        </thead>
        <tbody>
          {materials.map((row, idx) => (
            <tr 
              key={idx} 
              className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
              }`}
            >
              <td className="px-6 py-4 font-bold text-slate-800 border-r border-slate-200">
                {row.category}
              </td>
              <td className="px-6 py-4 text-slate-600 leading-relaxed font-medium">
                {row.grades}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ----------------------------------------------------
   2. Standards & Specifications Table
   ---------------------------------------------------- */
export const StandardsTable = () => {
  const standards = [
    { std: "ANSI/ASME B16.5", flag: "🇺🇸", scope: "NPS ½\" to 24\" — the primary standard for most flanges" },
    { std: "ASME B16.47 Series A (MSS SP-44)", flag: "🇺🇸", scope: "NPS 26\" to 60\" — large diameter" },
    { std: "ASME B16.47 Series B (API 605)", flag: "🇺🇸", scope: "NPS 26\" to 60\" — large diameter (lighter)" },
    { std: "ASME B16.36", flag: "🇺🇸", scope: "Orifice flanges" },
    { std: "ASME B16.48", flag: "🇺🇸", scope: "Line blinds & spectacle blinds" },
    { std: "DIN 2501 / EN 1092-1", flag: "🇪🇺", scope: "European metric standard — PN ratings" },
    { std: "JIS B2220", flag: "🇯🇵", scope: "Japanese Industrial Standard" },
    { std: "BS 4504 / BS 10 Table D/E/F/H", flag: "🇬🇧", scope: "British Standard" },
    { std: "MSS SP-44", flag: "🇺🇸", scope: "Large diameter steel pipeline flanges" },
    { std: "API 6A", flag: "🇺🇸", scope: "Wellhead and Christmas tree equipment" },
    { std: "API 605", flag: "🇺🇸", scope: "Large diameter carbon steel flanges" },
    { std: "AWWA C207", flag: "🇺🇸", scope: "Water works flanges" },
    { std: "GOST 12820 / 12821", flag: "🇷🇺", scope: "Russian/CIS standard" },
    { std: "AS 2129 / AS 4087 / AS/NZS 4331.1", flag: "🇦🇺", scope: "Australian standard" },
    { std: "KS B1503", flag: "🇰🇷", scope: "Korean standard" },
    { std: "ISO 7005-1 / ISO 9624", flag: "🌐", scope: "International standard" },
    { std: "SAE J518", flag: "🇺🇸", scope: "Hydraulic flanged tube fittings" },
    { std: "GB Standard", flag: "🇨🇳", scope: "Chinese national standard" }
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0F172A] text-white">
            <th className="px-6 py-4 font-bold uppercase tracking-wider w-1/3 border-r border-slate-700">
              Standard / Spec
            </th>
            <th className="px-6 py-4 font-bold uppercase tracking-wider">
              Scope / Application Details
            </th>
          </tr>
        </thead>
        <tbody>
          {standards.map((row, idx) => (
            <tr 
              key={idx} 
              className={`border-b border-slate-200 hover:bg-slate-50/50 transition-colors ${
                idx % 2 === 0 ? 'bg-slate-50/30' : 'bg-white'
              }`}
            >
              <td className="px-6 py-4 font-bold text-slate-800 border-r border-slate-200 flex items-center gap-2">
                <span className="text-lg leading-none" role="img" aria-label="flag">{row.flag}</span>
                <span>{row.std}</span>
              </td>
              <td className="px-6 py-4 text-slate-600 font-medium">
                {row.scope}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ----------------------------------------------------
   3. Flange Face Types
   ---------------------------------------------------- */
export const FlangeFaceTypes = () => {
  const faces = [
    {
      title: "Raised Face (RF)",
      desc: "Most common. A raised circular ring that concentrates pressure on a smaller area to compress the gasket. Height: 1/16\" for Class 150/300; 1/4\" for Class 400 and above.",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          {/* Grid lines */}
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Left/Right profile */}
          <path d="M30 90h40V50h20v25h10V46h15" />
          <path d="M170 90h-40V50h-20v25h-10V46h-15" />
          {/* Raised Face highlight in Red */}
          <path d="M90 46h20" stroke="#D71920" strokeWidth="3" />
          {/* Center line */}
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          {/* Labels */}
          <text x="100" y="35" fill="#D71920" fontSize="10" fontWeight="bold" textAnchor="middle">Raised Gasket Area</text>
        </svg>
      )
    },
    {
      title: "Flat Face (FF)",
      desc: "No raised portion; entire flange face is in the same plane. Used when mating against cast iron or non-metallic flanges to avoid cracking on bolt tightening.",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Flange body */}
          <path d="M30 90h40V50h20v0h30v-0h20v40h40" />
          <path d="M90 50h20" stroke="#D71920" strokeWidth="2" />
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          <text x="100" y="35" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">100% Flat Mating Surface</text>
        </svg>
      )
    },
    {
      title: "Ring Type Joint (RTJ)",
      desc: "Oval or octagonal groove machined into the face; a metal ring gasket seats in the groove. Used in high-pressure, high-temperature critical service (refineries, oil fields).",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Flange body with groove */}
          <path d="M30 90h40V50h12v6h16v-6h12v40h40" />
          {/* Highlights the groove */}
          <path d="M82 50h16" stroke="#D71920" strokeWidth="2.5" />
          <path d="M102 50h16" stroke="#D71920" strokeWidth="2.5" />
          {/* Metal Ring diagram */}
          <rect x="85" y="44" width="10" height="6" rx="2" fill="#D71920" stroke="none" />
          <rect x="105" y="44" width="10" height="6" rx="2" fill="#D71920" stroke="none" />
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          <text x="100" y="32" fill="#D71920" fontSize="10" fontWeight="bold" textAnchor="middle">Deep Metallic Ring Groove</text>
        </svg>
      )
    },
    {
      title: "Tongue & Groove (T&G)",
      desc: "One flange has a raised ring (tongue); the other a matching groove. Provides excellent alignment and a confined gasket. Used in pumps and valve bonnets.",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Male tongue */}
          <path d="M30 70h40V40h15v8h10v-8h15v30h60" />
          <path d="M85 40v8h10v-8" fill="#D71920" opacity="0.3" />
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          <text x="100" y="25" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">Interlocking Alignment</text>
        </svg>
      )
    },
    {
      title: "Male & Female (M&F)",
      desc: "Similar to T&G but the female face is flat and the male face raised. Used in heat exchangers, pressure vessels, and high-integrity process joints.",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Mating flange profile */}
          <path d="M30 80h45V45h15v5h20v-5h15v35h45" />
          <path d="M90 45h20" stroke="#D71920" strokeWidth="2.5" />
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          <text x="100" y="30" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">Recessed Female Mating</text>
        </svg>
      )
    },
    {
      title: "Large Male & Female",
      desc: "Same operating principle as the standard Male & Female flange, scaled up with larger step contact surfaces for specialized heavy industrial equipment.",
      svg: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-slate-700 fill-none stroke-current" strokeWidth="1.5">
          <path d="M10 10h180M10 30h180M10 50h180M10 70h180M10 90h180M10 110h180" stroke="#f1f5f9" strokeWidth="1" />
          {/* Larger profile steps */}
          <path d="M30 85h40V50h25v5h10v-5h25v35h40" />
          <path d="M95 50h10" stroke="#D71920" strokeWidth="3" />
          <path d="M100 10v100" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" />
          <text x="100" y="32" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">Heavy-Duty Contact</text>
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {faces.map((face, idx) => (
        <div 
          key={idx} 
          className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
        >
          {/* Diagram header */}
          <div className="bg-slate-50 p-6 flex justify-center items-center border-b border-slate-100 h-44 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="w-full h-full max-w-[180px] transform group-hover:scale-105 transition-transform duration-500">
              {face.svg}
            </div>
          </div>

          {/* Content info */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#D71920] transition-colors mb-3">
                {face.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {face.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ----------------------------------------------------
   4. Testing & Inspection
   ---------------------------------------------------- */
export const TestingInspection = () => {
  const { openQuotePopup } = useQuotePopup();

  const tests = [
    { title: "Hydrostatic / Hydro Pressure Test", desc: "Each flange pressure tested at 1.5x working pressure per ASME code requirements." },
    { title: "Ultrasonic Testing (UT)", desc: "Non-destructive testing to detect internal sub-surface cracks, inclusions and forging defects." },
    { title: "Radiographic Testing (RT / X-Ray)", desc: "100% radiography available; mandatory for critical Class 900+ high pressure services." },
    { title: "Positive Material Identification (PMI)", desc: "Spectrometer validation to verify alloy chemistry precisely matches the Mill Test Certificate." },
    { title: "Dye Penetrant Test (DPT / LPT)", desc: "Detects micro surface cracking and porosity on critical machined seating surfaces." },
    { title: "Magnetic Particle Inspection (MPI)", desc: "For ferromagnetic alloys; flags surface and near-surface structural discontinuities." },
    { title: "Hardness Test (Brinell/Rockwell)", desc: "Verifies correct heat treatment structure and ensures mechanical properties are hit." },
    { title: "Direct-Reading Spectrograph", desc: "In-house lab chemical checks of billets before forging process begins." },
    { title: "Impact / Charpy Test", desc: "Crucial for low-temperature applications to verify ductility (e.g. A350 LF2, LTCS)." },
    { title: "NACE Compliance Testing", desc: "Verifies sour-gas / H2S environment service capability (NACE MR0175 / MR0103)." }
  ];

  return (
    <div className="flex-grow flex flex-col justify-between h-full">
      <div className="space-y-4">
        {tests.map((test, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{test.title}</h4>
              <p className="text-slate-500 text-xs leading-normal">{test.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <button 
          onClick={openQuotePopup}
          className="w-full py-3.5 bg-slate-900 hover:bg-[#D71920] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group text-sm shadow-md"
        >
          Request Test Certificates 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   5. Documents & Certificates
   ---------------------------------------------------- */
export const DocumentsCertificates = () => {
  const docs = [
    { name: "Mill Test Certificate (MTC)", detail: "Provided as per EN 10204 3.1 detailing chemical & mechanical analysis." },
    { name: "EN 10204 3.2 Certificate", detail: "Independent third-party inspection validation (available upon request)." },
    { name: "NACE MR0175 / MR0103 Compliance", detail: "Certified suitability for sour gas/H2S environments." },
    { name: "Raw Materials Certificate", detail: "Provides 100% trace origin tracking from steel billet to finished flange." },
    { name: "Dimensional Inspection Report", detail: "All critical tolerances checked and certified against CAD designs." },
    { name: "Heat Treatment Certificate", detail: "HTR and PWHT thermal chart records included where requested." },
    { name: "Hydrostatic Test Certificate", detail: "Pressure log documentation verifying weld integrity." },
    { name: "Third Party Inspection (TPI)", detail: "Bureau Veritas, SGS, Lloyds, DNV, TUV inspection options." },
    { name: "Packing List & Weight Certificate", detail: "Proper documentation for simple custom clearance and cargo log." },
    { name: "Country of Origin Certificate", detail: "Enables import tariff relief and compliance logging." }
  ];

  return (
    <div className="flex-grow flex flex-col justify-between h-full">
      <div className="space-y-4">
        {docs.map((doc, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <ShieldCheck className="text-[#D71920] mt-1 shrink-0" size={18} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{doc.name}</h4>
              <p className="text-slate-500 text-xs leading-normal">{doc.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block bg-slate-50 py-3 rounded-lg border border-dashed border-slate-200">
          🔒 Certified Compliance Guaranteed
        </span>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   6. Surface Finish & Coating
   ---------------------------------------------------- */
export const SurfaceFinish = () => {
  const options = [
    { title: "Anti-rust Paint", desc: "Standard protection coat applied on carbon steel flanges." },
    { title: "Oil Black Paint", desc: "High-grade finish offering superior long-term storage corrosion block." },
    { title: "Yellow Transparent Lacquer", desc: "Allows technical inspectors to visually inspect metal surface during receiving." },
    { title: "Zinc Plated", desc: "Electro-galvanized bright zinc barrier layer for light industrial environments." },
    { title: "Hot Dip Galvanized (HDG)", desc: "Thick zinc alloy barrier layer for maximum outdoor marine rust protection." },
    { title: "Epoxy Coating", desc: "FBE or liquid epoxy coating for heavy buried pipelines and sewage lines." },
    { title: "Bare/Pickled & Passivated", desc: "Chemical acid cleaning to restore corrosion resistance for stainless steel." },
    { title: "Custom Coating", desc: "Special finishes customized exactly to customer painting specifications." }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm h-full">
      <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-[#D71920] pl-3 mb-6">
        Surface Finish & Coating Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt, idx) => (
          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg hover:bg-slate-50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mt-2 shrink-0"></span>
            <div>
              <h4 className="font-bold text-slate-800 text-sm leading-tight">{opt.title}</h4>
              <p className="text-slate-500 text-xs mt-0.5 leading-normal">{opt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   7. Export Markets
   ---------------------------------------------------- */
export const ExportMarkets = () => {
  const markets = [
    { region: "Americas", countries: "USA (Texas, Houston, Louisiana), Canada, Brazil, Colombia, Mexico" },
    { region: "Middle East", countries: "UAE (Dubai, Abu Dhabi), Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Iraq, Iran" },
    { region: "Africa", countries: "Nigeria (Lagos, Port Harcourt), Ghana, South Africa, Egypt, Kenya, Libya" },
    { region: "Europe", countries: "Germany, Italy, Netherlands, Norway (Stavanger), Spain, France, UK" },
    { region: "Asia-Pacific", countries: "Singapore, Malaysia, Indonesia, Vietnam, Australia, South Korea, Japan" },
    { region: "Central Asia", countries: "Kazakhstan, Azerbaijan, Turkmenistan" }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Globe className="text-[#D71920]" size={24} />
          <h2 className="text-2xl font-bold text-slate-900">
            Global Export Network
          </h2>
        </div>
        <div className="space-y-4">
          {markets.map((mkt, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start border-b border-slate-100 last:border-0 pb-3 last:pb-0">
              <span className="font-bold text-slate-900 text-sm sm:w-1/3 shrink-0">
                {mkt.region}
              </span>
              <span className="text-slate-600 text-xs sm:w-2/3 font-medium mt-1 sm:mt-0 leading-relaxed">
                {mkt.countries}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
        🌍 Trusted logistics across 6 continents
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   8. Industries & Applications
   ---------------------------------------------------- */
export const IndustriesApplications = () => {
  const industries = [
    { name: "Oil & Gas", desc: "Upstream extraction, midstream pipelines, downstream refineries.", icon: <Flame size={20} className="text-[#D71920]" /> },
    { name: "Petrochemical", desc: "Chemical reactors, process lines, heat exchangers.", icon: <Droplet size={20} className="text-blue-600" /> },
    { name: "Power Generation", desc: "Boilers, steam turbines, nuclear plants, thermal power.", icon: <Zap size={20} className="text-yellow-600" /> },
    { name: "Pharmaceuticals", desc: "Hygienic piping, clean steam, pure water systems.", icon: <ShieldCheck size={20} className="text-emerald-600" /> },
    { name: "Food & Beverage", desc: "Sanitary flanges, sugar mills, beverage processing.", icon: <Layers size={20} className="text-amber-700" /> },
    { name: "Paper & Pulp", desc: "Chemical recovery, bleaching lines.", icon: <FileText size={20} className="text-indigo-600" /> },
    { name: "Water Treatment", desc: "Municipal water, desalination, irrigation.", icon: <Globe size={20} className="text-sky-600" /> },
    { name: "Shipbuilding", desc: "Offshore platforms, FPSOs, marine piping.", icon: <Ship size={20} className="text-cyan-700" /> },
    { name: "Chemical Plants", desc: "Acid service, caustic lines, solvent handling.", icon: <Settings size={20} className="text-rose-600" /> },
    { name: "Construction", desc: "HVAC, fire suppression, utility headers.", icon: <Building size={20} className="text-slate-700" /> }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {industries.map((ind, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
        >
          <div className="p-2 bg-slate-50 rounded-lg w-fit">
            {ind.icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{ind.name}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ----------------------------------------------------
   9. Why Choose Remax Forge
   ---------------------------------------------------- */
export const WhyChooseRemax = () => {
  const points = [
    { title: "ISO 9001:2015 Certified", desc: "Fully audited quality management workflows.", icon: <Award className="text-red-600" /> },
    { title: "In-House Forging", desc: "Forging, heat-treat, machining in Mumbai.", icon: <Hammer className="text-slate-700" /> },
    { title: "Testing Laboratory", desc: "PMI, Spectro, UT, Hydro labs on-site.", icon: <Settings className="text-blue-600" /> },
    { title: "Mill Certificates", desc: "EN 10204 3.1 standard; 3.2 available.", icon: <FileText className="text-green-600" /> },
    { title: "20+ Years Experience", desc: "Serving critical gas/oil clients globally.", icon: <Calendar className="text-amber-600" /> },
    { title: "45+ Export Countries", desc: "Proven global logistics and documentation.", icon: <Globe className="text-indigo-600" /> },
    { title: "Custom Forging", desc: "Special shapes, alloys and schedules.", icon: <Layers className="text-purple-600" /> },
    { title: "Factory-Direct Price", desc: "Competitive pricing with no agent markup.", icon: <DollarSign className="text-emerald-600" /> },
    { title: "Technical Support", desc: "Engineers ready to assist spec selection.", icon: <HeartHandshake className="text-pink-600" /> },
    { title: "Short Lead Times", desc: "Fast turnaround of custom and stock orders.", icon: <Clock className="text-sky-600" /> }
  ];

  return (
    <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight border-l-4 border-[#D71920] pl-3 inline-block">
          Why Choose Remax Forge?
        </h2>
        <p className="mt-4 text-slate-400 max-w-4xl text-sm md:text-base leading-relaxed font-medium">
          Remax Forge & Fittings stands out as a leading flange manufacturer due to our complete in-house forging, heat treatment, and precision CNC machining capabilities based in Mumbai. We provide certified compliance, factory-direct wholesale pricing, and custom forging schedules tailored to your engineering blueprints. With over 20 years of manufacturing experience, zero-defect quality management, and short lead times, we are a trusted supply partner for critical industrial piping projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {points.map((pt, idx) => (
          <div 
            key={idx} 
            className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-slate-500/60 transition-colors flex flex-col gap-3 backdrop-blur-sm"
          >
            <div className="p-2.5 bg-slate-900/60 rounded-lg w-fit border border-slate-700">
              {React.cloneElement(pt.icon, { size: 20 })}
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-1">{pt.title}</h3>
              <p className="text-slate-400 text-xs leading-normal">{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   10. How to Order
   ---------------------------------------------------- */
export const HowToOrder = () => {
  const { isUnlocked, openQuotePopup } = useQuotePopup();

  const steps = [
    "Flange Type (e.g. Weld Neck, Slip On, Blind, etc.)",
    "Size — NPS (Nominal Pipe Size) in inches (e.g. 2\", 4\", 10\")",
    "Pressure Class (e.g. 150#, 300#, 600#, 900#, 1500#, 2500#)",
    "Material Grade (e.g. ASTM A105, A182 F316L, A182 F51)",
    "Facing Type (RF / FF / RTJ / T&G / M&F)",
    "Quantity required",
    "Standard / Specification (ASME B16.5, DIN, JIS, etc.)",
    "Any special requirements (NACE, low-temp, PMI, 3rd party inspection, surface coating)"
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Info Column */}
        <div className="lg:col-span-8 p-8 md:p-12 space-y-6">
          <div>
            <span className="text-[#D71920] font-bold text-xs uppercase tracking-wider block mb-1">
              Procurement Process
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How to Order
            </h2>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed font-medium">
              Ordering high-quality forged flanges from Remax is straightforward. To ensure our engineering team provides you with a precise and competitive quote, please specify the exact flange type, nominal pipe size (NPS), pressure class rating, material grade, and facing configuration. Let us know your total quantity requirements and if you require any specialized testing or custom coatings. Contact us via email or phone for a quick, same-day response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-[#D71920] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                  {idx + 1}
                </span>
                <span className="text-slate-700 text-sm font-medium leading-tight">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Column */}
        <div className="lg:col-span-4 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-[#D71920] pl-3">
              Direct Inquiries
            </h3>
            <div className="space-y-4">
              {!isUnlocked ? (
                <button
                  type="button"
                  onClick={openQuotePopup}
                  className="w-full py-3 px-4 bg-[#D71920] hover:bg-red-700 text-white font-bold rounded-xl transition-all text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail size={16} /> Show Email Details
                </button>
              ) : (
                <>
                  <a 
                    href="mailto:info@remaxforge.com" 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-[#D71920] hover:text-[#D71920] transition-all group font-semibold text-slate-800 text-sm"
                  >
                    <Mail size={18} className="text-[#D71920] group-hover:scale-110 transition-transform" />
                    <span>info@remaxforge.com</span>
                  </a>
                  <a 
                    href="tel:+919769983108" 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-[#D71920] hover:text-[#D71920] transition-all group font-semibold text-slate-800 text-sm"
                  >
                    <Phone size={18} className="text-[#D71920] group-hover:scale-110 transition-transform" />
                    <span>+91-97699 83108</span>
                  </a>
                </>
              )}
            </div>
            
            <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Estimated Lead Times</h4>
              <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                <div className="flex justify-between">
                  <span>Standard sizes & specs:</span>
                  <span className="font-bold text-slate-900">7–14 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Special alloys / customs:</span>
                  <span className="font-bold text-slate-900">3–6 weeks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button 
              onClick={openQuotePopup}
              className="w-full py-4 bg-[#D71920] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-600/20 text-center flex items-center justify-center gap-2 group"
            >
              Get Instant Quote 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   11. Flange Dimensions Table
   ---------------------------------------------------- */
export const FlangeDimensionsTable = ({ slug, altText }) => {
  const data = dimensionsData[slug];
  if (!data) return null;

  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });

  const sortedRows = React.useMemo(() => {
    let sortableItems = [...data.rows];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let valA = a[sortConfig.key] || '';
        let valB = b[sortConfig.key] || '';
        
        const numA = parseFloat(valA.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(valB.replace(/[^0-9.]/g, ''));
        
        if (!isNaN(numA) && !isNaN(numB)) {
          return sortConfig.direction === 'asc' ? numA - numB : numB - numA;
        }
        
        if (valA < valB) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data.rows, sortConfig]);

  const requestSort = (index) => {
    let direction = 'asc';
    if (sortConfig.key === index && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: index, direction });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-[#0F172A] rounded-2xl overflow-hidden shadow-lg border border-slate-800 p-4">
          <div className="flex flex-col items-center">
            <img 
              src={`/images/${slug}-dimensions.svg`} 
              alt={altText || `ASME B16.5 ${slug.replace(/-/g, ' ')} dimensions chart`} 
              className="w-full h-auto object-contain max-h-[280px]"
            />
            <div className="mt-2 text-center text-xs text-slate-400 font-mono">
              CAD Technical Layout — Remax Forge & Fittings
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  {data.headers.map((hdr, idx) => (
                    <th 
                      key={idx} 
                      onClick={() => requestSort(idx)}
                      className="px-4 py-3.5 font-bold uppercase tracking-wider cursor-pointer hover:bg-slate-800 transition-colors select-none whitespace-nowrap border-r border-slate-700 last:border-0"
                    >
                      <div className="flex items-center gap-1.5 justify-between">
                        <span>{hdr}</span>
                        <span className="text-slate-400 text-[10px]">
                          {sortConfig.key === idx ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '↕'}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedRows.map((row, rIdx) => (
                  <tr 
                    key={rIdx} 
                    className={`border-b border-slate-200 hover:bg-slate-50/80 transition-colors ${
                      rIdx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                    }`}
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-slate-700 font-semibold border-r border-slate-200 last:border-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.notes && (
            <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed whitespace-pre-line">
              * {data.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   12. Flange FAQs Accordion Component
   ---------------------------------------------------- */
export const FlangeFAQs = ({ slug }) => {
  const faqs = flangeFaqs[slug];
  if (!faqs) return null;

  const [openIdx, setOpenIdx] = React.useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div 
            key={idx} 
            className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4"
            >
              <span>{faq.question}</span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D71920]' : ''}`} 
              />
            </button>
            <div 
              className={`transition-all duration-350 ease-in-out ${
                isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
              } overflow-hidden`}
            >
              <div className="px-6 py-4 text-slate-600 text-sm leading-relaxed font-medium bg-slate-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ----------------------------------------------------
   13. Related Flanges Navigation Component
   ---------------------------------------------------- */
export const RelatedFlanges = ({ activeSlug }) => {
  const flanges = [
    { name: "Slip On Flange", slug: "slip-on-flange", img: "/images/slip-on-flange.webp", desc: "Slides over pipe. Cost-effective and simple." },
    { name: "Weld Neck Flange", slug: "weld-neck-flange", img: "/images/weld-neck-flange.webp", desc: "Tapered neck for high pressure and temperature service." },
    { name: "Blind Flange", slug: "blind-flange", img: "/images/blind-flanges.webp", desc: "Bolts onto line to isolate sections securely." },
    { name: "Socket Weld Flange", slug: "socket-weld-flange", img: "/images/Socket-Weld-Flanges.webp", desc: "Shoulder socket. Great for high-pressure small lines." },
    { name: "Threaded Flange", slug: "threaded-flange", img: "/images/threaded-flange.webp", desc: "No welding needed. Screws onto standard pipes." },
    { name: "Lap Joint Flange", slug: "lap-joint-flange", img: "/images/Stainless-steel-Lap-joint-flange-ASTM-4-inch.webp", desc: "For simple disassembly & hole alignment." },
    { name: "Long Weld Neck Flange", slug: "long-weld-neck-flange", img: "/images/long-weld-neck-flange-500x500.webp", desc: "Acts as vessel nozzle; saves welding prep." },
    { name: "Spectacle Blind Flange", slug: "spectacle-blind-flange", img: "/images/Spectacle-Blind-Flange-Weld-Neck-Flange.webp", desc: "Figure-8 spade for simple maintenance block." }
  ];

  const filtered = flanges.filter(f => f.slug !== activeSlug);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filtered.slice(0, 4).map((flange, idx) => (
        <Link 
          key={idx} 
          to={`/products/flanges/${flange.slug}`}
          className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
        >
          <div className="bg-slate-50 p-4 flex justify-center items-center h-40 border-b border-slate-100">
            <img 
              src={flange.img} 
              alt={flange.name} 
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            />
          </div>
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-[#D71920] transition-colors text-base mb-1">
                {flange.name}
              </h3>
              <p className="text-slate-500 text-xs leading-normal font-medium mb-4">
                {flange.desc}
              </p>
            </div>
            <span className="text-[#D71920] group-hover:translate-x-1 transition-transform font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              View Product <ChevronRight size={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
