import React from 'react';
import { Home, ChevronRight, Award, Users, Globe, CheckCircle2, Factory } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
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
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Excellence in Metal Manufacturing Since 1995</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Remax Forge & Fittings has established itself as a premier manufacturer and exporter of high-quality industrial components. With over two decades of experience, we specialize in producing robust flanges, precision fittings, and durable pipes that serve critical industries worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our journey began with a simple mission: to deliver engineering excellence without compromise. Today, our state-of-the-art manufacturing facility and rigorous quality control processes ensure that every product leaving our factory meets the highest international standards.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D71920]">
                <h4 className="font-bold text-[#0F172A] text-lg">Mission</h4>
                <p className="text-sm text-slate-500">To provide superior quality forging solutions that empower global infrastructure.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D71920]">
                <h4 className="font-bold text-[#0F172A] text-lg">Vision</h4>
                <p className="text-sm text-slate-500">To be the world's most trusted partner for critical industrial components.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Factory Floor" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D71920] p-6 text-white rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm font-medium opacity-90">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values / Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-[#D71920] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Quality First", desc: "ISO 9001:2015 certified processes ensuring zero-defect products." },
              { icon: <Users size={32} />, title: "Customer Focus", desc: "Tailored solutions and dedicated support for every client requirement." },
              { icon: <Globe size={32} />, title: "Global Standards", desc: "Products manufacturing adhering to ASTM, ASME, DIN, and EN standards." },
              { icon: <Factory size={32} />, title: "Innovation", desc: "Continuous investment in modern technology and manufacturing techniques." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-[#D71920] mb-6 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Section: Why Choose Us (Content & Image Placeholder) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
          <div className="order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#D71920] text-sm font-bold mb-4">
               <CheckCircle2 size={16} /> Why Choose Us
             </div>
             <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Why Partner With Remax?</h2>
             <p className="text-slate-600 leading-relaxed mb-6">
               [Content Placeholder: We deliver precision-engineered solutions tailored to your industry needs. Our commitment to innovation and quality ensures reliability in every project.]
             </p>
             <div className="space-y-4">
               {[
                 "Advanced Manufacturing Technology",
                 "Global Supply Chain Network",
                 "Strict Quality Compliance",
                 "Cost-Effective Solutions"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                   <div className="h-2 w-2 rounded-full bg-[#D71920]"></div>
                   <span className="text-slate-700 font-medium">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
             <div className="h-80 w-full bg-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Image Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                  alt="Why Choose Us Placeholder" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                  <span className="bg-white/80 backdrop-blur px-4 py-2 rounded text-slate-500 font-medium text-sm border border-slate-300">
                    Image Placeholder
                  </span>
                </div>
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
             <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Commitment to Quality</h2>
             <p className="text-slate-600 leading-relaxed mb-6">
               Quality is at the heart of everything we do. Our rigorous quality assurance program covers every stage of the manufacturing process, from raw material procurement to final inspection and dispatch.
             </p>
             <ul className="space-y-4">
               {[
                 "Material Traceability & PMI Testing",
                 "Hydrostatic & Pneumatic Testing",
                 "Ultrasonic & Radiographic Examination",
                 "Dimensional & Visual Inspection"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <CheckCircle2 size={20} className="text-[#D71920] flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
             {/* Certificate Image Placeholders */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 h-32 rounded flex items-center justify-center text-slate-400 text-xs">ISO 9001 Certificate</div>
                <div className="bg-slate-100 h-32 rounded flex items-center justify-center text-slate-400 text-xs">PED Certificate</div>
                <div className="bg-slate-100 h-32 rounded flex items-center justify-center text-slate-400 text-xs">OHSAS Certificate</div>
                <div className="bg-slate-100 h-32 rounded flex items-center justify-center text-slate-400 text-xs">Material Certs</div>
             </div>
             <p className="text-sm text-slate-500 mt-4 italic">Certified by leading international bodies</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;