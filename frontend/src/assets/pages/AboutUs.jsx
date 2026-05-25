import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ChevronRight, Award, Users, Globe, CheckCircle2, Factory, FileText, ArrowRight } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="About Remax Forge & Fittings | 25+ Years of Forging Excellence"
        description="Learn about Remax Forge & Fittings, a leading ISO 9001:2015 certified manufacturer of industrial flanges and fittings. Serving 45+ countries with precision engineering and global quality standards since 1995."
        keywords="Industrial Pipe Fittings Manufacturer, Remax Forge History, Forging Industry Experts India, ISO 9001 Certified Forging Company, Metal Manufacturing Experience, Global Fittings Exporter, Precision Engineering Company Mumbai."
      />
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Building Trust Through Quality</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Introduction & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-[#D71920] font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">A Decade of Forging Excellence: The Remax Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Established in 2006 by Mr. Revaram Purohit, Remax Forge & Fittings was founded on a commitment to engineering precision and material integrity. What began as a specialized manufacturing unit has grown into a premier Stainless Steel Flanges Manufacturer and Exporter in India, competing with global leaders through innovation and quality.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Today, the company’s legacy is carried forward under the visionary leadership of Mr. Vikas Purohit. As an ISO 9001:2015 certified organization, we have expanded our footprint across 45+ countries, providing mission-critical forged fittings and high-pressure components to the Oil & Gas, Petrochemical, and Power industries.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Under Vikas Purohit’s guidance, Remax has integrated advanced CNC machining and rigorous Quality Assurance protocols, ensuring that our products—from Weld Neck Flanges to Socket Weld Fittings—meet the stringent ASME, ANSI, and DIN standards required by global infrastructure projects.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/why.jpeg" 
                alt="Factory Floor" 
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D71920] p-6 text-white rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-sm font-medium opacity-90">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#D71920] flex flex-col h-full hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-[#0F172A] text-xl mb-4">Mission</h4>
            <p className="text-base text-slate-600 leading-relaxed">"To deliver high-precision forging solutions and industrial components that meet the most stringent global standards. We are committed to empowering the world’s infrastructure by ensuring zero-defect manufacturing, continuous technical innovation, and an unwavering focus on material integrity for the Oil & Gas, Petrochemical, and Power sectors."</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#D71920] flex flex-col h-full hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-[#0F172A] text-xl mb-4">Vision</h4>
            <p className="text-base text-slate-600 leading-relaxed">"To emerge as the premier global benchmark for excellence in the stainless steel forging industry. Under the leadership of Vikas Purohit, we aim to expand our footprint across 100+ countries, becoming the most trusted partner for mission-critical infrastructure through advanced CNC engineering and sustainable manufacturing practices."</p>
          </div>
        </div>

        {/* Section 2: Core Values / Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Core Values: The Pillars of Remax Excellence</h2>
            <div className="h-1 w-20 bg-[#D71920] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Award size={32} />, title: "Quality Without Compromise", desc: "We operate an ISO 9001:2015 certified manufacturing unit where \"Quality First\" is a mandate, not just a slogan. By integrating rigorous testing—including PMI, Ultrasonic, and Hydro-testing—we ensure that every forged fitting and flange delivered is 100% defect-free and compliant with EN 10204 3.1 traceability standards." },
              { icon: <Globe size={32} />, title: "Global Engineering Standards", desc: "Our manufacturing processes are engineered to meet and exceed international benchmarks. We specialize in producing components that strictly adhere to ASTM, ASME, DIN, and ANSI specifications, ensuring seamless integration into mission-critical infrastructure projects across the globe." },
              { icon: <Factory size={32} />, title: "Technological Innovation", desc: "Following the lead of global industry giants, Remax Forge & Fittings invests heavily in Advanced CNC Machining and modern forging technology. Under the leadership of Vikas Purohit, we continuously upgrade our facility to maintain tight tolerances and superior surface finishes for high-pressure applications." },
              { icon: <Users size={32} />, title: "Customer-Centric Reliability", desc: "We believe in building long-term partnerships through transparency and performance. With a track record of 100% timely delivery and a supply chain reaching 45+ countries, we provide tailored solutions that address the specific metallurgical and dimensional needs of our diverse clientele." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-slate-50 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Section: Leadership & Visionary Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
          <div className="order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#D71920] text-sm font-bold mb-4">
               <CheckCircle2 size={16} /> Driving Innovation
             </div>
             <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Leadership & Visionary Growth</h2>
             
             <blockquote className="border-l-4 border-[#D71920] pl-4 italic text-slate-700 mb-6 font-medium text-lg">
               "Our mission is to bridge the gap between traditional forging craftsmanship and the future of precision engineering." 
               <span className="block mt-2 text-sm text-[#D71920] font-bold not-italic">— Vikas Purohit</span>
             </blockquote>
             
             <h3 className="text-xl font-bold text-[#0F172A] mb-4">The Modern Remax Advantage:</h3>
             
             <div className="space-y-4">
               {[
                 { title: "Tech-Driven Manufacturing", desc: "Vikas has integrated Advanced CNC Machining and automated forging workflows to meet the tight tolerances required by the Oil & Gas and Aerospace sectors." },
                 { title: "Compliance & Excellence", desc: "Strengthening our commitment to ISO 9001:2015 standards, he has implemented a \"Zero-Defect\" culture backed by stringent EN 10204 3.1 material traceability." },
                 { title: "Strategic Global Expansion", desc: "By modernizing our supply chain logistics, he has positioned Remax as a premier partner for high-pressure ASME/ANSI compliant components in the USA, UAE, and European markets." }
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                   <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-[#D71920]"></div>
                   <div>
                     <span className="text-[#0F172A] font-bold block mb-1">{item.title}</span>
                     <span className="text-slate-600 text-sm leading-relaxed block">{item.desc}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
             <div className="h-[450px] w-full rounded-2xl shadow-xl overflow-hidden group">
                <img 
                  src="/images/aboutus.jpeg" 
                  alt="Leadership & Visionary Growth" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>
        </div>

        {/* Section 3: Our Capabilities / Stats */}
        <div className="bg-[#0F172A] rounded-2xl p-8 md:p-16 text-white text-center mb-24 relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full bg-[#D71920] blur-3xl"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15K+", label: "Tons Produced" },
              { number: "45+", label: "Export Countries" },
              { number: "500+", label: "Happy Clients" },
              { number: "100%", label: "Timely Delivery" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Certifications & Quality Policy (Text Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <h2 className="text-3xl font-bold text-[#0F172A] mb-2">Technical Excellence & Quality Assurance</h2>
             <h4 className="text-lg font-semibold text-[#D71920] mb-4">Our Commitment to Zero-Defect Manufacturing</h4>
             <p className="text-slate-600 leading-relaxed mb-6">
               Remax Forge & Fittings has evolved into a tech-driven manufacturing unit. We have replaced standard inspections with a rigorous, multi-tier testing protocol to ensure every component exceeds global safety standards. 
             </p>
             <ul className="space-y-4">
               {[
                 "100% Material Traceability",
                 "Precision Testing",
                 "Advanced NDT",
                 "Corrosion Resistance"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <CheckCircle2 size={20} className="text-[#D71920] flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>

             {/* Action Buttons */}
             <div className="mt-10 flex flex-wrap gap-4">
               <button 
                 onClick={() => navigate('/quality')}
                 className="px-6 py-3 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                 style={{ backgroundColor: '#D71920' }}
               >
                 Learn More
                 <ArrowRight size={18} />
               </button>
               <button 
                 onClick={() => navigate('/certification')}
                 className="px-6 py-3 rounded-lg font-bold text-[#0F172A] border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
               >
                 <FileText size={18} />
                 View Certificate
               </button>
             </div>
          </div>
          <div className="space-y-6">
             {/* commitment image */}
             <div className="bg-white p-4 rounded-2xl shadow-xl border-4 border-white h-[400px] flex items-center justify-center overflow-hidden group">
                <img 
                  src="/images/commitment-1.webp" 
                  alt="Commitment to Quality" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-slate-500 mt-4 italic text-center">Certified expertise in precision forging and industrial manufacturing</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;