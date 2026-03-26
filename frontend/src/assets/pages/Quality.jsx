import React from 'react';
import { Home, ChevronRight, CheckCircle2, ShieldCheck, Award, Target, Users, Zap } from 'lucide-react';

const Quality = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Quality</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Commitment to Quality</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Section 1: Quality Assurance Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Quality Assurance</h2>
            <p>
              Quality Assurance at REMAX FORGE & FITTINGS starts with understanding the Customers Requirement and continues till the customer is completely satisfied with the delivery of products and services. Quality Control procedures are well defined and thoroughly implemented. REMAX FORGE & FITTINGS is built for result oriented work culture, to fulfil customer's needs in terms of Cost, Quality and Delivery. By enhancing effectiveness of people and plant equipment safely we are aiming towards zero losses. We also believe in continual improvement for effectiveness of Quality Management System through Team Work, Training and Focus on Actions and Results.
            </p>
            <p>
              A solid Quality Assurance program is essential to the safe operation to the main markets we service, the products that we supply to the power & process industries is critical path to the safe operation of the facility. A Quality Documentation Package accompanies every shipment that leaves REMAX FORGE & FITTINGS facilities, inclusive of a Manufacturers Certified Material Test Report that is in accordance with EN 10204 3.1. A report that is on mill letterhead that assures our customer of the pedigree of the material that they are in receipt of. There are no shorts cuts when it comes to quality. In compliance the first time, every time!!!
            </p>
          </div>
          <div className="relative">
            {/* Image Placeholder - Right Side */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-96 w-full bg-slate-200 flex items-center justify-center relative group">
                {/* Add your image source here later */}
                {/* <img src="YOUR_IMAGE_LINK_HERE" alt="Quality Assurance" className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400">
                    <ShieldCheck size={64} className="mb-4 text-[#D71920] opacity-50" />
                    <span className="font-semibold text-lg">Add Quality Assurance Image Here</span>
                </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#D71920]/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Section 2: Our Excellence */}
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-lg border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D71920]"></div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 flex items-center justify-center gap-3">
                <Award size={32} className="text-[#D71920]" />
                Our Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto text-lg">
                Quality is our prime concern. We are able to maintain high quality standards through our committed personnel and sound infrastructure. We ensure that finest quality material is used for our products. For ensure the quality of each material, we are providing Materials Test Certificate along with supply. Our team of experts maintain a vigil on the quality of the products. Every single piece is attached with test certificates and reports. We are continually improving our quality to serve our clients better.
            </p>
        </div>

        {/* Section 3: Quality Control */}
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Quality Control</h2>
                <div className="h-1 w-24 bg-[#D71920] mx-auto rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl">
                    <p className="text-lg leading-relaxed mb-6 text-slate-300">
                        We exercise stringent quality control measures for ensuring the accurate dimensions and mechanical properties of our products. Our quality assurance system assures each product to pass through following processes and quality systems:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Material Control System",
                            "Process Control System",
                            "Machining and Dimensional Control",
                            "Certification and Supplementary Test",
                            "Finishing and Marketing"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-[#D71920]"></div>
                                <span className="font-medium text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        The impeccable quality standards of our product range as well as services have contributed immensely to the success of our company. We ensure that every step of our manufacturing process is monitored and optimized for perfection.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center">
                            <Target size={40} className="text-[#D71920] mb-3" />
                            <h4 className="font-bold text-[#0F172A]">Precision</h4>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center">
                            <Zap size={40} className="text-[#D71920] mb-3" />
                            <h4 className="font-bold text-[#0F172A]">Efficiency</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 4: Quality Assurance Principles */}
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Guiding Principles</h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12 text-lg">
                The quality assurance system is guided by principles that support our unique working culture which incorporates respect, self-management, open communication and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                    { icon: <Award size={32} />, text: "We strive to be the best in our industry." },
                    { icon: <Users size={32} />, text: "We care about our customers." },
                    { icon: <CheckCircle2 size={32} />, text: "We do our absolute best to honour our commitments." },
                    { icon: <ShieldCheck size={32} />, text: "We strive to always act with integrity and fairness." }
                ].map((principle, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-[#D71920] transition-colors group text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#D71920] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            {principle.icon}
                        </div>
                        <p className="font-medium text-[#0F172A]">{principle.text}</p>
                    </div>
                ))}
            </div>

            <div className="text-slate-600 text-center leading-relaxed max-w-4xl mx-auto bg-blue-50 p-8 rounded-xl border border-blue-100">
                <p>
                    Strict quality assurance system is being followed in all our departments and Total Quality Management is applied to streamline and all the procedures and practices in operation to achieve high standard of efficiency. Continuous efforts are being made for improvement of materials technology and equipment’s to give best quality products at the most affordable prices.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Quality;