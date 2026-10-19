import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, Disc, CheckCircle2, ShieldAlert } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';
import TrustBar from '../../components/common/TrustBar.jsx';

const FlangeFaceTypesGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Flange Face Types: RF, FF, RTJ & T&G Guide | Remax Forge"
        description="Guide to flange facing types: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), and Tongue & Groove. Gasket compatibility and surface finish rules."
        keywords="Flange face types, Raised Face vs Flat Face, Ring Type Joint RTJ, Tongue and Groove flange, flange surface finish AARH Ra, ASME B16.5 facings"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs/" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Flange Face Types Guide</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Flange Facing & Gasket Sealing
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Flange Face Types Explained: Raised Face (RF), Flat Face (FF), RTJ & Tongue-and-Groove
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge Sealing Technologies</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> 8 min read • ASME B16.5 Facing Standards</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
              In a bolted flange joint, the flange facing provides the contact surface where the gasket is compressed to form a leak-tight seal. Under <strong>ASME B16.5 and ASME B16.47</strong>, specifying the proper facing geometry—whether <strong>Raised Face (RF)</strong>, <strong>Flat Face (FF)</strong>, <strong>Ring Type Joint (RTJ)</strong>, or <strong>Tongue & Groove (T&G)</strong>—is critical to preventing gasket blowout, catastrophic fluid leaks, and flange cracking.
            </p>

            <TrustBar className="my-8" />

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              1. The Four Primary Flange Facing Types
            </h2>

            <div className="space-y-6 my-6 not-prose">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <Disc className="text-[#D71920] w-5 h-5" /> 1. Raised Face (RF) — The Industry Standard
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  The most widely used facing in process plants. The gasket surface is elevated above the bolting circle face:
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>Class 150# and 300#:</strong> 1/16 inch (1.6 mm) raised face height.</li>
                  <li><strong>Class 400# through 2500#:</strong> 1/4 inch (6.4 mm) raised face height.</li>
                  <li><strong>Sealing Mechanism:</strong> Concentrates bolt load onto a smaller gasket area, creating high sealing stress without excessive bolt torque.</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <Disc className="text-blue-600 w-5 h-5" /> 2. Flat Face (FF) — Protecting Fragile Equipment
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  The entire mating surface lies in the same plane as the bolting circle. Uses full-face gaskets:
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Mandatory when mating with cast iron (ASTM A126), bronze valves, plastic (PVC/FRP), or fiberglass equipment nozzles.</li>
                  <li>Prevents excessive bending moment caused when tightening raised face flanges against brittle cast iron.</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <Disc className="text-amber-600 w-5 h-5" /> 3. Ring Type Joint (RTJ) — Extreme High Pressure & Temperature
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Features a precision-machined metallic groove in the face designed to house a solid metal ring gasket (octagonal or oval profile):
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Standard in high-pressure oil & gas exploration (Class 900#, 1500#, and 2500#).</li>
                  <li>Metallic ring deforms into the groove under intense bolt load, providing a reliable metal-to-metal seal up to 1000°C.</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <Disc className="text-emerald-600 w-5 h-5" /> 4. Tongue and Groove (T&G) & Male-to-Female (M&F)
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Matings feature interlocking male and female profiles that confine the gasket inside an enclosed groove:
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Completely eliminates gasket extrusion under extreme pressure.</li>
                  <li>Common in ammonia refrigeration, explosive toxic gas lines, and high-vacuum services.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              2. Surface Finish Requirements (AARH / Ra)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ASME B16.5 specifies exact surface finish serrations to ensure gasket bite:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
              <li>
                <strong>Stock Finish / Serrated Concentric or Spiral:</strong> 125 to 250 microinches AARH (3.2 to 6.3 micrometers Ra). Used with non-metallic sheets and spiral wound gaskets.
              </li>
              <li>
                <strong>Smooth Finish:</strong> 63 to 125 microinches AARH (1.6 to 3.2 micrometers Ra). Used with solid metal gaskets or critical vacuum sealing.
              </li>
              <li>
                <strong>RTJ Groove Finish:</strong> 63 microinches Ra maximum roughness along the 23° groove sidewalls.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 pb-2 border-b">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 my-6 not-prose">
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Can you bolt a Flat Face flange to a Raised Face flange?</h3>
                <p className="text-sm text-slate-600">
                  Engineering codes strongly advise against it when the flat face component is cast iron or bronze, as the cantilever bending stress induced by the 1/16" gap can crack the cast iron flange. If unavoidable, the raised face must be machined off or a full-face spacer ring used.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">Why do RTJ ring gaskets need to be softer than the flange?</h3>
                <p className="text-sm text-slate-600">
                  The metallic ring gasket must plastically yield and deform into the groove to form a seal without galling or damaging the expensive flange groove faces. For example, a soft iron ring (max 90 HBW) is used with carbon steel flanges, or a 316L ring (max 160 HBW) with stainless steel flanges.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Custom Machined Flange Facings in Mumbai</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
                Remax Forge machines RF, FF, RTJ, and Tongue & Groove facings on CNC lathes to exact ASME B16.5 surface roughness tolerances with complete EN 10204 3.1 certification.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products/flanges/" className="bg-[#D71920] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Flanges Range
                </Link>
                <Link to="/products/flanges/weld-neck-flange/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700">
                  Weld Neck Flanges
                </Link>
                <Link to="/contact/" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Inquire Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FlangeFaceTypesGuide;
