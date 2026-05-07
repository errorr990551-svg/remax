import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ArrowLeft } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';

const AlloySteelPowerGen = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Alloy Steel Pipe Fittings for Power Generation: Materials & Standards | Remax Forge"
        description="A technical guide to alloy steel pipe fittings in power plants. Learn about high-temperature grades like P91, F22, and F11, IBR compliance, and preventing flow-accelerated corrosion."
        keywords="Alloy Steel Pipe Fittings for Power Plants, Grade 91 (P91) steel fittings, high-pressure steam piping, IBR approved fittings India, creep-resistant alloy steel, Remax Forge power sector solutions"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Alloy Steel Power Gen Guide</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Power Sector Technical Reference
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Alloy Steel Pipe Fittings for Power Generation: Materials, Standards, and Life Cycle Considerations
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge & Fittings</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> Technical Reference</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          {/* Image 1: Industrial power plant piping system */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
            <img 
              src="/images/b6-1.jpeg" 
              alt="high-pressure alloy steel steam piping system inside thermal power generation facility" 
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-600">
            
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">The Unrelenting Demands of Power Generation Piping</h2>
            <p className="leading-relaxed mb-4">
              Power plants — whether coal-fired, gas-fired, nuclear, or concentrated solar — operate at the most extreme combinations of temperature and pressure found in any industrial piping system. Modern ultra-supercritical (USC) coal-fired units operate at steam temperatures exceeding 600°C (1,112°F) and pressures above 30 MPa (4,350 psi).
            </p>
            <p className="leading-relaxed mb-4">
              In this environment, the pipe fittings that connect boilers to turbines, that route steam through reheaters and superheaters, and that manage condensate and feedwater are as critical as any major equipment item. A failed elbow in a high-pressure steam header doesn't just interrupt generation — it can be lethal.
            </p>
            <p className="leading-relaxed mb-10">
              Remax Forge & Fittings has deep expertise in manufacturing alloy steel pipe fittings for the power generation industry. This guide explains the material science, standards, and best practices that underpin reliable power plant piping.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">The Temperature-Pressure Challenge in Power Plant Piping</h2>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Understanding the Steam Circuit</h3>
            <p className="leading-relaxed mb-4">
              A modern thermal power plant circulates water through a thermodynamic cycle. The conditions at each stage impose specific requirements on the piping materials:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-4 marker:text-[#D71920]">
              <li><strong>Feedwater system (130–250°C):</strong> Primarily carbon and low-alloy steel. Challenge: Flow-accelerated corrosion (FAC).</li>
              <li><strong>Superheater and main steam (540–620°C):</strong> Alloy steel is mandatory. Grade 91/92 alloys are required above 565°C.</li>
              <li><strong>Hot reheat (560–620°C):</strong> Similar temperature requirements to main steam but at lower pressure.</li>
            </ul>

            {/* Image 2: Alloy steel composition chart */}
            <div className="mb-10 mt-10 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img 
                src="/images/b6-2.jpeg" 
                alt="alloy steel pipe composition chart showing chromium molybdenum and carbon content for power plant applications" 
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Alloy Steel Materials for High-Temperature Service</h2>
            
            <h3 className="text-xl font-bold text-[#D71920] mb-3">Carbon Steel (A105, A234 WPB) — Up to ~425°C</h3>
            <p className="leading-relaxed mb-4">
              Standard for feedwater and auxiliary steam. Above 425°C, performance is limited by <strong>graphitization</strong>, oxidation/scaling, and creep deformation.
            </p>

            <h3 className="text-xl font-bold text-[#D71920] mb-3">1.25Cr-0.5Mo (ASTM A234 WP11 / A182 F11)</h3>
            <p className="leading-relaxed mb-4">
              Service up to ~540°C. Common in subcritical units and cold reheat piping. Requires preheat (175°C) and PWHT (675–760°C).
            </p>

            <h3 className="text-xl font-bold text-[#D71920] mb-3">2.25Cr-1Mo (ASTM A234 WP22 / A182 F22)</h3>
            <p className="leading-relaxed mb-4">
              Service up to ~570°C. Increases creep strength and oxidation resistance. Critical for high-temperature hydrogen attack (HTHA) resistance.
            </p>

            <h3 className="text-xl font-bold text-[#D71920] mb-3">9Cr-1Mo-V — Grade 91 (ASTM A182 F91 / A234 WP91)</h3>
            <p className="leading-relaxed mb-4">
              Transformational alloy for USC units (up to 620°C). Offers twice the allowable stress of Grade 22 at 600°C, enabling thinner-walled fittings and better thermal fatigue resistance. 
            </p>
            <p className="leading-relaxed mb-10 font-medium text-[#0F172A]">
              Note: Properties are highly sensitive to heat treatment. Incorrectly tempered Grade 91 can have dramatically reduced creep life.
            </p>

            {/* Image 3: Flow-accelerated corrosion diagram */}
            <div className="mb-10 rounded-xl overflow-hidden shadow-sm bg-slate-50 p-4 border border-slate-200">
              <img 
                src="/images/b6-3.jpeg" 
                alt="flow accelerated corrosion mechanism causing wall thinning in power plant piping systems" 
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Flow-Accelerated Corrosion (FAC) — The Hidden Danger</h2>
            <p className="leading-relaxed mb-6">
              FAC occurs when flowing fluid dissolves the protective magnetite layer on carbon steel faster than it reforms. It is most aggressive at 130–150°C and in high-turbulence areas like elbows and tees.
            </p>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Protecting Fittings Against FAC:</h3>
            <p className="leading-relaxed mb-8">
              The most reliable protection is material substitution. Replace carbon steel fittings with low-alloy (1.25Cr or 2.25Cr) or stainless steel (316L) in high-risk locations. Remax Forge manufactures FAC-resistant fittings specifically for power plant replacement programs.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Applicable Codes and Standards</h2>
            <ul className="list-disc pl-6 mb-10 space-y-4 marker:text-[#D71920]">
              <li><strong>ASME B31.1 (Power Piping):</strong> The primary governing code for steam and water piping from boilers and turbines.</li>
              <li><strong>Indian Boiler Regulations (IBR):</strong> Mandatory in India. Requires IBR-approved materials, Authorized Inspector certification, and specific stamping.</li>
              <li><strong>ASME Section I:</strong> Applies to piping within the boiler jurisdiction boundary.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Thermal Fatigue and Creep</h2>
            <p className="leading-relaxed mb-6">
              Power plants cycle through start-ups and shutdowns, imparting transient stresses. Creep-fatigue interaction is a major life cycle consideration. Fittings with complex geometry (tees/nozzles) experience higher stress concentrations. Modern forged tees with revised geometry offer superior performance.
            </p>

            {/* Image 4: Ultrasonic inspection of alloy steel pipe */}
            <div className="mb-10 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b6-4.jpeg" 
                alt="ultrasonic thickness testing of high-temperature alloy steel piping in power generation industry" 
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Inspection During Service</h2>
            <ul className="list-disc pl-6 mb-12 space-y-4 marker:text-[#D71920]">
              <li><strong>Thickness Monitoring:</strong> Periodic UT measurements at elbows/tees to detect FAC or creep swelling.</li>
              <li><strong>Replica Metallography:</strong> For Grade 91 components, in-situ surface impressions reveal microstructure degradation and creep voids.</li>
              <li><strong>Hardness Testing:</strong> Detects softening from incorrect PWHT or hardening from improper repairs.</li>
            </ul>

            {/* Section: Conclusion */}
            <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71920] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Conclusion: Long-Term Value Through Quality Manufacturing</h2>
              <p className="text-slate-300 leading-relaxed mb-4 relative z-10">
                In power generation, piping specification decisions play out over decades. A Grade 91 fitting with correct heat treatment provides 25–30 years of reliable service; one with marginal heat treatment may fail in 10.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-medium">
                Remax Forge & Fittings manufactures alloy steel pipe fittings for power generation with the rigor this industry demands. Our products include full heat treatment records and IBR certification where required.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#D71920] text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#D71920] transition-colors relative z-10 shadow-lg"
              >
                Discuss Power Sector Requirements <ChevronRight size={18} />
              </Link>
            </div>

          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
             <Link to="/blogs" className="flex items-center gap-2 text-slate-500 hover:text-[#D71920] font-medium transition-colors">
               <ArrowLeft size={16} /> Back to Blogs
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AlloySteelPowerGen;
