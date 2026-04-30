import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Clock, User, ArrowLeft } from 'lucide-react';
import MetaTags from '../../components/common/MetaTags.jsx';

const ForgedVsCast = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Forged Fittings vs. Cast Fittings: Which is Best? | Remax Forge"
        description="Compare Forged vs. Cast fittings for industrial use. Learn about strength, durability, and pressure ratings to choose the right component for your piping system."
        keywords="Forged Fittings vs Cast Fittings, Industrial pipe fittings, High-pressure forged components, Casting vs Forging process, ASME B16.11 standards, Stainless steel fittings manufacturer"
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <Link to="/blogs" className="hover:text-[#D71920] transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium truncate">Forged vs. Cast Fittings</span>
          </div>
          <div className="inline-block bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Technical Guide
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Forged Fittings vs. Cast Fittings: Which Is Right for Your Industrial Application?
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D71920]" /> Remax Forge & Fittings</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D71920]" /> Expert Insights for Process Industries</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          
          {/* Primary Image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/b1.jpeg" 
              alt="industrial hot forging process of high-pressure steel pipe fittings in manufacturing plant" 
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Why the Manufacturing Process Matters More Than You Think</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When procurement teams and project engineers specify pipe fittings, the focus often falls on material grade, pressure rating, or dimensional standard. Rarely does the conversation start with how the fitting was made — and that oversight can cost companies significantly in maintenance downtime, safety incidents, and replacement expenses.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Remax Forge & Fittings, we manufacture precision forged fittings that go into some of the most demanding piping systems on the planet — from upstream oil & gas facilities in the Middle East to high-pressure chemical plants across India and Southeast Asia. Over years of working with global clients, one question keeps surfacing: <strong>What is the real difference between forged fittings and cast fittings, and how do I know which one my project needs?</strong>
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              This guide answers that question comprehensively. By the end, you will understand the metallurgical basis for each process, the performance implications for real-world applications, the applicable standards, and the scenarios where each type excels.
            </p>

            {/* Section: Forging Process */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Understanding the Forging Process: Metallurgy in Motion</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Forging is one of the oldest metalworking techniques in human history, but modern industrial forging has evolved into a precise, highly controlled science. At its core, forging involves shaping metal under compressive force — either by hammering, pressing, or rolling — while the metal is in a solid state, typically at elevated temperatures (hot forging) but sometimes at or near room temperature (cold forging).
            </p>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b2.jpeg" 
                alt="steel billet hot forging process showing grain flow alignment in forged metal fittings" 
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">The Hot Forging Cycle</h3>
            <p className="text-slate-600 leading-relaxed mb-4">For carbon steel, alloy steel, and stainless steel fittings, hot forging typically proceeds as follows:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Billet preparation:</strong> A pre-cut steel billet of the appropriate weight is selected based on the finished fitting's dimensions.</li>
              <li><strong>Heating:</strong> The billet is heated in a furnace to forging temperature — typically between 1,100°C and 1,250°C for carbon steels, adjusted for alloy content.</li>
              <li><strong>Die forging:</strong> The hot billet is placed in a die and struck or pressed, causing the metal to flow and fill the die cavity.</li>
              <li><strong>Trimming:</strong> Flash (excess metal) is trimmed.</li>
              <li><strong>Heat treatment:</strong> Post-forging heat treatment (normalizing, annealing, quenching, tempering) refines grain structure and achieves the required mechanical properties.</li>
              <li><strong>Machining:</strong> Threads, socket openings, or bearing faces are machined to precise tolerances.</li>
              <li><strong>Inspection & testing:</strong> Hardness, tensile strength, dimensional checks, and NDT as required.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">The Microstructural Advantage of Forging</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              During forging, the compressive force closes internal voids and micro-porosity present in the original billet. More importantly, the forging process refines and aligns the grain flow of the metal — a phenomenon that is fundamental to mechanical performance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In a well-designed forging die, the grain flow follows the contour of the fitting. This means that stress concentrations — which in service occur at threads, shoulders, and bore changes — are oriented along the grain boundaries, not across them. The practical effect is substantially higher resistance to fracture, fatigue, and impact loading compared to a fitting where grain structure is random.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              This is not a theoretical benefit. ASTM standards for forged fittings explicitly recognize these properties, which is why they permit higher allowable stresses than equivalent cast products in many pressure-temperature tables under ASME B31.3 and ASME Section VIII.
            </p>


            {/* Section: Casting Process */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Understanding the Casting Process</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Casting involves melting metal, pouring it into a mold shaped like the desired fitting, and allowing it to solidify. Once cooled, the casting is removed, cleaned, and machined to final dimensions.
            </p>

            <div className="my-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b3.jpeg" 
                alt="metal casting process with molten steel poured into mold showing porosity and defects" 
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Common Casting Methods Used for Industrial Fittings</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Sand casting</strong> is the most common and economical method for larger fittings. Molten metal is poured into a sand mold, which is broken apart after solidification. Surface finish is relatively rough, and dimensional tolerances are wider.</li>
              <li><strong>Investment casting</strong> (lost-wax casting) produces finer surface finishes and tighter tolerances. A wax pattern is coated in ceramic, the wax is melted out, and metal is cast into the ceramic shell. This method is common for complex valve bodies and fittings where machining access is difficult.</li>
              <li><strong>Centrifugal casting</strong> spins the mold as metal is poured, using centrifugal force to distribute the metal and reduce central porosity. It is widely used for pipe and tube production.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Limitations of the Casting Process</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Because casting involves solidification from a liquid state, inherent challenges arise:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Porosity:</strong> Gas bubbles or shrinkage voids can become trapped as the metal solidifies. These internal defects reduce effective wall thickness and create initiation sites for cracking under cyclic or high-pressure loading.</li>
              <li><strong>Segregation:</strong> Alloying elements can concentrate unevenly as the metal cools, leading to regions with different compositions and properties within the same fitting.</li>
              <li><strong>Random grain structure:</strong> Unlike forging, casting produces equiaxed (randomly oriented) grains. There is no inherent grain flow alignment relative to the fitting geometry.</li>
              <li><strong>Surface defects:</strong> Sand inclusions, cold shuts, and misruns require careful inspection.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-10">
              Reputable casting manufacturers mitigate these issues through rigorous quality control, radiographic inspection, and heat treatment. However, the fundamental metallurgical limitations remain, which is why pressure ratings for cast fittings are generally lower than for forged equivalents of the same material and wall thickness.
            </p>

            {/* Section: Comparison */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Key Performance Differences — A Comparative Analysis</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Understanding the manufacturing processes allows us to predict how forged and cast fittings will perform in service. Here is a structured comparison across the parameters that matter most in process industries:
            </p>

            <div className="my-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/images/b4.jpeg" 
                alt="forged vs cast fittings comparison showing grain structure strength and durability differences" 
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Mechanical Strength</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Forged fittings consistently outperform cast fittings in tensile strength, yield strength, and impact toughness — particularly at sub-zero temperatures. The ASTM A105 carbon steel forged fitting specification requires a minimum Charpy impact value at low temperatures that many cast fittings cannot match.<br/>
              For high-pressure applications such as wellhead equipment, hydraulic systems, or steam headers operating above 600 psig, forged fittings are typically mandatory under process safety management standards.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Fatigue Resistance</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Repeated pressure cycling — common in compressor suction/discharge lines, water hammer-prone systems, and variable-load process plants — is a primary cause of fitting failure. Forged fittings, with their refined, oriented grain structure and absence of internal voids, offer substantially better fatigue life. Failures at cast fitting thread roots under cyclic loading are a documented failure mode in oil & gas facilities.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Pressure-Temperature Ratings</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              ASME B16.11 (Forged Fittings, Socket-Welding and Threaded) provides pressure ratings based on pipe schedule and class (3000#, 6000#, 9000# for threaded; 3000# and 6000# for socket-weld). These ratings assume forged manufacture.<br/>
              ASME B16.3 covers malleable iron threaded fittings, and ASME B16.4 covers gray iron — both inherently lower-pressure applications. Stainless and alloy steel cast fittings fall under MSS SP-43 and related standards, which carry lower allowable stresses.<br/>
              In practical terms, a 2-inch 3000# forged stainless steel socket-weld elbow can handle pressures and temperatures that a cast equivalent of the same nominal wall cannot.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Leak Integrity</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Forged fittings have lower porosity and fewer internal defects, which translates to superior leak integrity — a critical consideration in hydrocarbon service, toxic fluid handling, and cryogenic applications where even a slow fugitive emission is a safety, environmental, or regulatory violation.
            </p>

            <h3 className="text-xl font-bold mb-2 text-[#D71920]">Weight and Compactness</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              Because forging achieves higher strength per unit of material, forged fittings can achieve the same pressure rating with a lighter, more compact body than cast equivalents. This matters in weight-sensitive applications like offshore topside piping and aerospace support systems.
            </p>

            {/* Section: Standards */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Standards and Specifications Governing Forged and Cast Fittings</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Navigating the standards landscape can be confusing, especially since different industry sectors reference different codes. Here is a structured overview:
            </p>

            <h3 className="text-lg font-bold text-[#0F172A] mb-3">Key Standards for Forged Fittings</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Standard</th>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A105</td><td className="py-3 px-4 text-slate-600 text-sm">Carbon steel forgings for ambient- and elevated-temperature service</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A182</td><td className="py-3 px-4 text-slate-600 text-sm">Alloy and stainless steel forged or rolled fittings, flanges, and valves</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A350</td><td className="py-3 px-4 text-slate-600 text-sm">Carbon and low-alloy steel forgings requiring notch toughness (low-temperature service)</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A694</td><td className="py-3 px-4 text-slate-600 text-sm">Carbon and alloy steel forgings for pipe flanges and fittings for high-pressure transmission</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASME B16.11</td><td className="py-3 px-4 text-slate-600 text-sm">Dimensional standard for forged socket-weld and threaded fittings</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">MSS SP-83</td><td className="py-3 px-4 text-slate-600 text-sm">Socket-weld and threaded union specifications</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#0F172A] mb-3">Key Standards for Cast Fittings</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Standard</th>
                    <th className="py-3 px-4 text-left text-sm font-bold text-[#0F172A]">Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A216 (WCB, WCC)</td><td className="py-3 px-4 text-slate-600 text-sm">Carbon steel castings for high-temperature service</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A351 (CF8, CF8M)</td><td className="py-3 px-4 text-slate-600 text-sm">Austenitic stainless steel castings</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASTM A352</td><td className="py-3 px-4 text-slate-600 text-sm">Ferritic and martensitic steel castings for low-temperature service</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">ASME B16.9</td><td className="py-3 px-4 text-slate-600 text-sm">Factory-made wrought butt-welding fittings (note: wrought, not necessarily forged)</td></tr>
                  <tr className="hover:bg-slate-50"><td className="py-3 px-4 font-medium text-[#D71920]">MSS SP-43</td><td className="py-3 px-4 text-slate-600 text-sm">Wrought and fabricated butt-welding fittings for low-pressure, corrosive service</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-3">ASME B31.3 Process Piping — The Governing Code</h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              Most process plant piping is designed under ASME B31.3. This code allows the designer to use published pressure-temperature ratings from the applicable fitting standard, or to calculate custom ratings. Forged fittings, by virtue of higher allowable stresses, provide more headroom in these calculations, allowing the same fitting to serve in more demanding service conditions.
            </p>

            {/* Section: Application Guide */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Application Guide — When to Specify Forged vs. Cast Fittings</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The choice between forged and cast fittings is rarely absolute — it depends on the service conditions, regulatory requirements, and project economics. Here is a practical guide:
            </p>

            <h3 className="text-lg font-bold text-[#0F172A] mb-3">Specify Forged Fittings When:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>High pressure service:</strong> Class 3000# and above for threaded fittings; Class 600# and above for flanged systems</li>
              <li><strong>High or low temperature extremes:</strong> Superheated steam service, cryogenic LNG applications, or any service below -29°C or above 427°C</li>
              <li><strong>Cyclic loading or vibration:</strong> Compressor piping, pump discharge headers, or any system subject to water hammer or pulsation</li>
              <li><strong>Toxic or flammable fluid service:</strong> Where leak tightness is a safety imperative under regulatory frameworks (OSHA PSM, ATEX, PED)</li>
              <li><strong>Small diameter, high-integrity connections:</strong> 1/4" to 4" instrument impulse lines, sample systems, chemical injection points</li>
              <li><strong>Subsea and offshore topside piping:</strong> Weight limitations and reliability requirements mandate forged components</li>
              <li><strong>Nuclear and power generation systems:</strong> ASME Section III requirements effectively require forged fittings for primary circuit applications</li>
            </ul>

            <h3 className="text-lg font-bold text-[#0F172A] mb-3">Cast Fittings Are Appropriate When:</h3>
            <ul className="list-disc pl-6 mb-10 space-y-2 text-slate-600 marker:text-[#D71920]">
              <li><strong>Lower pressure, non-critical service:</strong> Cooling water, fire water, HVAC, and general utility systems where operating pressures are well within the fitting's rated capacity</li>
              <li><strong>Large diameter and complex geometries:</strong> Above 4-6 inches, forging dies become very expensive, and investment or sand casting can produce complex shapes more economically</li>
              <li><strong>Valve bodies and complex internals:</strong> Casting allows for internal passages and body geometries that are impractical to forge</li>
              <li><strong>Economies of scale for standard ratings:</strong> In low-risk utility service, ASTM A216 WCB cast fittings are a cost-effective and perfectly adequate choice</li>
            </ul>

            {/* Section: Quality Assurance */}
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 border-b pb-2">Quality Assurance — What to Demand from Your Supplier</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Whether you specify forged or cast fittings, the quality of the supplied components is ultimately a function of your supplier's quality management system, raw material traceability, testing rigor, and documentation practices. Here is what Remax Forge & Fittings delivers — and what every serious buyer should demand:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-[#D71920] mb-2">Material Traceability</h4>
                <p className="text-sm text-slate-600">Every fitting should be traceable to its heat of steel through a Mill Test Certificate (MTC) that documents chemical composition and mechanical properties per the applicable ASTM or EN standard. Remax Forge & Fittings provides full heat/lot traceability for every shipment, allowing customers to link each fitting back to its source material.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-[#D71920] mb-2">Dimensional Inspection</h4>
                <p className="text-sm text-slate-600">Fittings must meet the dimensional requirements of the applicable standard (typically ASME B16.11 for forged fittings). Our QC team performs 100% dimensional inspection on critical dimensions — bore, thread form and engagement length, socket depth, fitting-to-fitting gap — using calibrated gauges and coordinate measuring equipment.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-[#D71920] mb-2">Non-Destructive Testing</h4>
                <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                  <li><strong>PT/LPT:</strong> Detects surface-breaking cracks, particularly at thread roots</li>
                  <li><strong>MT/MPI:</strong> Detects near-surface defects in ferromagnetic materials</li>
                  <li><strong>UT:</strong> Detects volumetric internal defects</li>
                  <li><strong>RT:</strong> Provides a permanent record of internal integrity, particularly for cast components</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-[#D71920] mb-2">Hardness Testing & 3rd Party Inspection</h4>
                <p className="text-sm text-slate-600">Post-forging heat treatment is validated by hardness testing (e.g., max 187 HBW for ASTM A105). We test and document hardness on every production lot. We also welcome and support third-party inspection by agencies such as Bureau Veritas, Lloyd's Register, SGS, DNV, or client-nominated inspectors.</p>
              </div>
            </div>

            {/* Section: Conclusion */}
            <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D71920] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Conclusion: Make the Right Choice with the Right Partner</h2>
              <p className="text-slate-300 leading-relaxed mb-4 relative z-10">
                The decision between forged and cast fittings carries real engineering and financial consequences. In high-pressure, high-consequence, or cyclically loaded services, specifying forged fittings is not merely a preference, it is an engineering necessity. In lower-risk utility applications, cast fittings provide excellent value.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                Remax Forge & Fittings has been serving the global process industries with precision-manufactured forged fittings, flanges, and pipe components. Our products meet or exceed ASTM, ASME, MSS, and EN standards, and our quality management system is built around the demands of oil & gas, petrochemical, power, and chemical customers.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-medium">
                If you are evaluating suppliers for your next project, we invite you to request a product data sheet, review our quality certifications, or speak with our technical team. The right fitting, manufactured to the right standard, is the foundation of a reliable piping system.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#D71920] text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#D71920] transition-colors relative z-10 shadow-lg"
              >
                Contact Remax Forge & Fittings <ChevronRight size={18} />
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

export default ForgedVsCast;
