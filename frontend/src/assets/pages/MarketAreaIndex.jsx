import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Factory, 
  FileCheck,
  ExternalLink 
} from 'lucide-react';
import { cityStrategyData } from '../data/cityStrategyData.js';
import CityFullRfqForm from '../components/city/CityFullRfqForm.jsx';

const MarketAreaIndex = () => {
  const pageData = cityStrategyData['market_area'];
  const navigate = useNavigate();

  const scrollToRfq = () => {
    const el = document.getElementById('rfq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const states = [
    {
      name: "Andhra Pradesh",
      hubUrl: "/market-area/andhra-pradesh/",
      cities: [
        { name: "Visakhapatnam", path: "/visakhapatnam/" },
        { name: "Vijayawada", path: "/vijayawada/" },
        { name: "Guntur", path: "/guntur/" },
        { name: "Nellore", path: "/nellore/" },
        { name: "Kurnool", path: "/kurnool/" },
      ]
    },
    {
      name: "Arunachal Pradesh",
      hubUrl: "/market-area/arunachal-pradesh/",
      cities: [
        { name: "Itanagar & Naharlagun", path: "/itanagar/" },
      ]
    },
    {
      name: "Assam",
      cities: [
        { name: "Guwahati", path: "/guwahati/" },
        { name: "Silchar", path: "/silchar/" },
        { name: "Dibrugarh", path: "/dibrugarh/" },
        { name: "Jorhat", path: "/jorhat/" },
      ]
    },
    {
      name: "Bihar",
      cities: [
        { name: "Patna", path: "/patna/" },
        { name: "Gaya", path: "/gaya/" },
        { name: "Bhagalpur", path: "/bhagalpur/" },
        { name: "Muzaffarpur", path: "/muzaffarpur/" },
      ]
    },
    {
      name: "Chhattisgarh",
      cities: [
        { name: "Raipur", path: "/raipur/" },
        { name: "Bhilai", path: "/bhilai/" },
        { name: "Bilaspur", path: "/bilaspur/" },
        { name: "Korba", path: "/korba/" },
      ]
    },
    {
      name: "Gujarat",
      cities: [
        { name: "Gandhinagar", path: "/gandhinagar/" },
        { name: "Ahmedabad", path: "/ahmedabad/" },
        { name: "Surat", path: "/surat/" },
        { name: "Vadodara", path: "/vadodara/" },
      ]
    },
    {
      name: "Karnataka",
      cities: [
        { name: "Bengaluru", path: "/bengaluru/" },
        { name: "Mysuru", path: "/mysuru/" },
        { name: "Hubballi-Dharwad", path: "/hubballi-dharwad/" },
        { name: "Mangaluru", path: "/mangaluru/" },
      ]
    },
    {
      name: "Maharashtra",
      cities: [
        { name: "Mumbai (Factory)", path: "/mumbai/" },
        { name: "Pune", path: "/pune/" },
        { name: "Nagpur", path: "/nagpur/" },
        { name: "Nashik", path: "/nashik/" },
      ]
    },
    {
      name: "Tamil Nadu",
      cities: [
        { name: "Chennai", path: "/chennai/" },
        { name: "Coimbatore", path: "/coimbatore/" },
        { name: "Madurai", path: "/madurai/" },
        { name: "Tiruchirappalli", path: "/tiruchirappalli/" },
      ]
    },
    {
      name: "Telangana",
      cities: [
        { name: "Hyderabad", path: "/hyderabad/" },
        { name: "Warangal", path: "/warangal/" },
        { name: "Nizamabad", path: "/nizamabad/" },
        { name: "Khammam", path: "/khammam/" },
      ]
    },
    {
      name: "West Bengal",
      cities: [
        { name: "Kolkata", path: "/kolkata/" },
        { name: "Howrah", path: "/howrah/" },
        { name: "Durgapur", path: "/durgapur/" },
        { name: "Asansol", path: "/asansol/" },
      ]
    }
  ];

  return (
    <main className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1.0 Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-600">
              <li>
                <Link to="/" className="hover:text-[#D71920] transition-colors">Home</Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li aria-current="page" className="font-bold text-slate-900">
                Areas We Supply
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 2.0 Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D71920]/20 border border-[#D71920]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-200 tracking-wide uppercase mb-6">
            <ShieldCheck size={14} className="text-[#D71920]" />
            National Supply Network · Mumbai Forge Works
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            {pageData.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-6 font-medium leading-relaxed">
            Forged flanges made in Mumbai and delivered by road to plants, EPC contractors and fabricators across India.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Pick your state to see the industries we supply there, what their piping engineers usually specify, delivery times from our Mumbai works, and required documents. Send your enquiry through any page's form for a line-by-line quote in writing.
          </p>

          <button
            onClick={scrollToRfq}
            className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            Request Quotation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 3.0 Trust Strip */}
      <section className="bg-white border-y border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#D71920] shrink-0" />
              <span>
                <strong>GSTIN:</strong> 27FFLPP0007K1ZA{' '}
                <a 
                  href="https://services.gst.gov.in/services/searchtp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D71920] hover:underline inline-flex items-center gap-0.5"
                >
                  (verify on GST portal <ExternalLink size={10} />)
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck size={16} className="text-slate-500 shrink-0" />
              <span>GST-registered since 2020 · Proprietorship led by Vikas Purohit, CEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory size={16} className="text-slate-500 shrink-0" />
              <span>Manufacturing Unit: Marine Lines, Mumbai · ISO 9001:2015 QMS</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-500 shrink-0" />
              <span>Written quotes by email · No calls needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.0 State & City Supply Directory */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Select Your Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Choose Your State or City
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore local project requirements, standard specifications, delivery corridors, and pricing guidance.
            </p>
          </div>

          {/* Quick City Selector Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#D71920] flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Quick City / Hub Selector</h3>
                <p className="text-xs text-slate-500">Jump directly to dedicated city supply specifications, local transit times & prices</p>
              </div>
            </div>
            <div className="w-full md:w-80 shrink-0">
              <select
                aria-label="Select City or State Hub"
                onChange={(e) => {
                  if (e.target.value) navigate(e.target.value);
                }}
                defaultValue=""
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D71920] cursor-pointer shadow-sm"
              >
                <option value="" disabled>-- Select City / State Hub --</option>
                <optgroup label="Andhra Pradesh (Active Hubs & Cities)">
                  <option value="/market-area/andhra-pradesh/">All Andhra Pradesh Hub</option>
                  <option value="/visakhapatnam/">Visakhapatnam (Vizag Port & RINL)</option>
                  <option value="/vijayawada/">Vijayawada (Amaravati & NTTPS)</option>
                  <option value="/guntur/">Guntur (Agro & Cold Storage)</option>
                  <option value="/nellore/">Nellore (Krishnapatnam & BPCL)</option>
                  <option value="/kurnool/">Kurnool (Pinnapuram & HNSS)</option>
                </optgroup>
                <optgroup label="Arunachal Pradesh (Active Hub & Cities)">
                  <option value="/market-area/arunachal-pradesh/">All Arunachal Pradesh Hub</option>
                  <option value="/itanagar/">Itanagar & Naharlagun (Capital Region)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((st, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm hover:border-[#D71920] transition duration-300"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#D71920]" />
                    <h3 className="font-extrabold text-base text-slate-900">
                      {st.name}
                    </h3>
                  </div>
                  {st.hubUrl && (
                    <Link 
                      to={st.hubUrl}
                      className="text-xs font-bold text-[#D71920] hover:underline inline-flex items-center gap-0.5"
                    >
                      State Hub <ChevronRight size={12} />
                    </Link>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Cities & Industrial Zones:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {st.cities.map((ct, cIdx) => (
                      <Link
                        key={cIdx}
                        to={ct.path}
                        className="text-xs bg-white border border-slate-200 hover:border-[#D71920] hover:text-[#D71920] px-3 py-1.5 rounded-lg transition font-medium text-slate-700"
                      >
                        {ct.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11.0 Request a Quote - Full RFQ */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              National Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Request a Written Quote
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A quote-ready enquiry lists: flange type · nominal size (NPS or DN) · pressure class or PN · facing (RF, FF or RTJ) · material specification and grade · bore or schedule for weld neck flanges · quantity · delivery location · testing and certificate needs (NACE, impact test, EN 10204 3.1/3.2, third-party inspection). Upload a BOQ or drawing and we will read it for you.
            </p>
          </div>

          <CityFullRfqForm 
            city="Pan-India" 
            state="India" 
            pageUrl="https://remaxforge.com/market-area/" 
          />
        </div>
      </section>

      {/* 14.0 Final CTA Band */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Looking for Certified Forged Flanges Across India?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Send your requirement — we reply in writing. Fill the form or upload your BOQ; you get a line-by-line quote by email within one working day. No phone calls needed — everything is in writing.
          </p>
          <button
            onClick={scrollToRfq}
            className="inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#b5141a] text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl transition transform hover:-translate-y-0.5"
          >
            Get a Written Quote
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </main>
  );
};

export default MarketAreaIndex;
