import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  Zap,
  Globe,
  Home,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  UserCheck,
  MapPin,
  Clock,
  IndianRupee,
  GraduationCap,
  User,
  Mail,
  Linkedin,
  Check
} from 'lucide-react';

const CareerPage = () => {
  // Data for "Why Choose Remax"
  const whyUsGrid = [
    {
      icon: <TrendingUp size={32} />,
      title: "Accelerated Growth",
      description: "We don't just offer jobs; we build careers. Our mentorship programs and clear promotion paths ensure you never stop moving forward."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Safety First Culture",
      description: "Your well-being is our priority. We maintain rigorous ISO 45001 safety standards to ensure a secure environment for every team member."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Teams",
      description: "Work alongside industry experts in a culture that values diverse perspectives, open communication, and shared success."
    },
    {
      icon: <Award size={32} />,
      title: "Competitive Rewards",
      description: "Enjoy top-tier compensation packages, performance bonuses, and comprehensive benefits that reward your hard work and dedication."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation Led",
      description: "Work with cutting-edge CNC technology and advanced manufacturing processes that are setting new standards in the industry."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Impact",
      description: "See your work power industries around the world. From oil & gas to aerospace, our components are trusted globally."
    },
  ];

  // Updated Data based on user input
  const jobDetails = {
    title: "Sales Executive",
    location: "Opera House (3 mins from Charni Road Stn), Mumbai",
    salary: "15-20k (Flexible for potential candidates)",
    experience: "Minimum 2 years",
    qualification: "Bachelor’s degree / equivalent work experience / undergraduate with good communication",
    gender: "Neutral",
    territory: "Travelling Territory",
    
    roles: [
      "Generate leads through various channels such as cold calling, networking, and digital marketing.",
      "Identify and acquire new clients through lead generation and prospecting.",
      "Address client queries and objections effectively.",
      "Meet or exceed sales targets and quotas.",
      "Build and maintain relationships with clients."
    ],
    desired: [
      "Excellent verbal and written communication skills.",
      "Ability to effectively communicate with clients.",
      "Goal-oriented and motivated to achieve and exceed sales targets."
    ]
  };

  const scrollToApply = () => {
    document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Careers at Remax</h1>
        </div>
      </div>

      {/* Why Choose Us Grid Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-2 block" style={{ color: '#D71920' }}>
              Grow with us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">
              Engineering Your Future
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsGrid.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border-t-4 border-[#D71920] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-slate-100"
              >
                <div 
                  className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* NEW SECTION: Job Description & Details */}
      <div className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
             <span className="inline-block py-1 px-3 rounded bg-red-100 text-[#D71920] font-bold text-xs uppercase tracking-wider mb-2">
               Urgent Hiring
             </span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
               {jobDetails.title}
             </h2>
             <div className="flex flex-wrap gap-4 mt-4 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-1"><MapPin size={16} /> {jobDetails.location}</span>
                <span className="flex items-center gap-1"><Briefcase size={16} /> {jobDetails.experience}</span>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">
            
            {/* PART 1: Job Description & Details (Dark Column) */}
            <div className="w-full lg:w-1/2 bg-[#0F172A] p-8 md:p-12 text-white">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 border-b border-slate-700 pb-4">
                <Briefcase className="text-[#D71920]" size={24} />
                Job Overview
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-white" /> Location
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{jobDetails.location}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                    <Clock size={18} className="text-white" /> Experience
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base">{jobDetails.experience}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                    <GraduationCap size={18} className="text-white" /> Qualification
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base">{jobDetails.qualification}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                    <IndianRupee size={18} className="text-white" /> Salary Budget
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base">{jobDetails.salary}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                      <User size={18} className="text-white" /> Gender
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base">{jobDetails.gender}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D71920] mb-2 flex items-center gap-2">
                      <Globe size={18} className="text-white" /> Territory
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base">{jobDetails.territory}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={scrollToApply}
                    className="w-full px-8 py-4 rounded font-bold text-[#0F172A] bg-white hover:bg-[#D71920] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    Apply for this Position
                  </button>
                </div>
              </div>
            </div>

            {/* PART 2: Roles & Responsibilities + Desired Candidates (Light Column) */}
            <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-slate-200">
              
              {/* Roles */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                  <Award className="text-[#D71920]" size={24} />
                  Roles & Responsibilities
                </h3>
                <ul className="space-y-4">
                  {jobDetails.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 min-w-[20px]">
                        <CheckCircle2 size={20} className="text-[#D71920]" />
                      </div>
                      <span className="text-slate-600 text-sm md:text-base leading-relaxed">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desired Candidates */}
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                  <UserCheck className="text-[#D71920]" size={24} />
                  Desired Candidate Profile
                </h3>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                   <ul className="space-y-4">
                    {jobDetails.desired.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm md:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      

      {/* NEW SECTION 5: How to Apply (Replaced Form) */}
      <div id="apply-section" className="py-20 md:py-28 bg-[#D71920] text-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 3px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
                Ready to Apply?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Email Application Card */}
              <div className="group bg-white p-10 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-black/20 text-[#0F172A]">
                <div className="w-16 h-16 bg-[#0F172A] text-[#D71920] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Send via Email</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Prefer a direct approach? Send your CV and cover letter directly to our recruitment team.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:hr@remaxforge.com" className="inline-flex items-center font-bold text-lg text-[#0F172A] hover:text-[#D71920] transition-colors no-underline">
                    <span className="w-2 h-2 bg-[#D71920] rounded-full mr-3"></span>
                    hr@remaxforge.com
                  </a>
                  <a href="mailto:careers@remaxforge.com" className="inline-flex items-center font-bold text-lg text-[#0F172A] hover:text-[#D71920] transition-colors no-underline">
                    <span className="w-2 h-2 bg-[#D71920] rounded-full mr-3"></span>
                    careers@remaxforge.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="group bg-[#0F172A] p-10 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-black/20 text-white">
                <div className="w-16 h-16 bg-white text-[#0077b5] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Apply via LinkedIn</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  View our latest openings, company updates, and apply directly through our official LinkedIn page.
                </p>
                <a 
                  href="https://www.linkedin.com/company/remax-forge/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#0077b5] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#005582] transition-all transform active:scale-95 no-underline shadow-lg border border-transparent hover:border-white/20"
                >
                  Visit Remax Careers
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* NEW SECTION 4: Why Join Us (Adapted Theme) */}
      <div className="py-16 md:py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Heading & Intro */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Join Us
                <span className="block h-1.5 w-24 bg-[#D71920] mt-3 rounded-full mx-auto lg:mx-0"></span>
              </h2>
              <p className="text-slate-400 text-lg">
                Be part of a team that values innovation, growth, and people first. Discover the benefits of building a career with us.
              </p>
            </div>

            {/* Right: Benefits List */}
            <div className="w-full lg:w-2/3">
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Hands-on learning in industrial IoT and smart metering technology",
                  "Exposure to CGWA, CPCB, and Industry 4.0-compliant systems",
                  "A culture built on lean principles and continuous improvement",
                  "Opportunities for cross-team collaboration and leadership growth",
                  "Balanced work environment focused on innovation and people"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start bg-[#1E293B] p-5 rounded-xl border border-slate-700 hover:border-[#D71920] transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#D71920] rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg">
                      <Check size={18} strokeWidth={3} />
                    </span>
                    <span className="text-slate-200 text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default CareerPage;