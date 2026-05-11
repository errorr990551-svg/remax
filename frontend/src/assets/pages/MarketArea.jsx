import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/common/MetaTags.jsx';
import { marketAreaData } from '../data/marketAreaData.js';

const MarketArea = () => {
  const states = [
    {
      name: "ANDHRA PRADESH",
      cities: [
        { name: "Visakhapatnam", path: "/visakhapatnam" },
        { name: "Vijayawada", path: "/vijayawada" },
        { name: "Guntur", path: "/guntur" },
        { name: "Nellore", path: "/nellore" },
        { name: "Kurnool", path: "/kurnool" },
      ]
    },
    {
      name: "ARUNACHAL PRADESH",
      cities: [
        { name: "Itanagar", path: "/itanagar" },
        { name: "Naharlagun", path: "/naharlagun" },
        { name: "Pasighat", path: "/pasighat" },
        { name: "Tawang", path: "/tawang" },
        { name: "Ziro", path: "/ziro" },
      ]
    },
    {
      name: "ASSAM",
      cities: [
        { name: "Guwahati", path: "/guwahati" },
        { name: "Silchar", path: "/silchar" },
        { name: "Dibrugarh", path: "/dibrugarh" },
        { name: "Jorhat", path: "/jorhat" },
        { name: "Tezpur", path: "/tezpur" },
      ]
    },
    {
      name: "BIHAR",
      cities: [
        { name: "Patna", path: "/patna" },
        { name: "Gaya", path: "/gaya" },
        { name: "Bhagalpur", path: "/bhagalpur" },
        { name: "Muzaffarpur", path: "/muzaffarpur" },
        { name: "Darbhanga", path: "/darbhanga" },
      ]
    },
    {
      name: "CHHATTISGARH",
      cities: [
        { name: "Raipur", path: "/raipur" },
        { name: "Bhilai", path: "/bhilai" },
        { name: "Bilaspur", path: "/bilaspur" },
        { name: "Korba", path: "/korba" },
        { name: "Durg", path: "/durg" },
      ]
    },
    {
      name: "GUJARAT",
      cities: [
        { name: "Gandhinagar", path: "/gandhinagar" },
        { name: "Ahmedabad", path: "/ahmedabad" },
        { name: "Surat", path: "/surat" },
        { name: "Rajkot", path: "/rajkot" },
        { name: "Vadodara", path: "/vadodara" },
      ]
    },
    {
      name: "HIMACHAL PRADESH",
      cities: [
        { name: "Shimla", path: "/himachal-pradesh/shimla" },
        { name: "Dharamshala", path: "/himachal-pradesh/dharamshala" },
        { name: "Solan", path: "/himachal-pradesh/solan" },
        { name: "Mandi", path: "/himachal-pradesh/mandi" },
        { name: "Baddi", path: "/himachal-pradesh/baddi" },
      ]
    },
    {
      name: "JHARKHAND",
      cities: [
        { name: "Jamshedpur", path: "/jharkhand/jamshedpur" },
        { name: "Dhanbad", path: "/jharkhand/dhanbad" },
        { name: "Ranchi", path: "/jharkhand/ranchi" },
        { name: "Bokaro", path: "/jharkhand/bokaro" },
        { name: "Deoghar", path: "/jharkhand/deoghar" },
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 pt-32">
      <MetaTags 
        title="Market Area | India Cities We Serve | Remax Forge & Fittings"
        description="Explore the list of cities and states across India where Remax Forge & Fittings supplies high-quality forged fittings and industrial flanges."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-8 text-sm text-slate-500 uppercase tracking-wider font-bold">
          <Link to="/" className="hover:text-[#D71920] transition-colors">HOME</Link>
          <span className="mx-2">/</span>
          <span className="text-[#0F172A]">MARKET AREA</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
            India Cities : We Serve
          </h1>
          <div className="h-1.5 w-24 bg-[#D71920] rounded"></div>
        </div>

        {states.map((state, sIndex) => (
          <div key={sIndex} className="mb-16">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 border-b-2 border-slate-200 pb-2 inline-block uppercase tracking-widest">
              {state.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {state.cities.map((city, cIndex) => (
                <Link 
                  key={cIndex}
                  to={city.path}
                  className={`px-6 py-4 rounded bg-white shadow-sm border border-slate-100 flex items-center justify-center text-center font-medium transition-all duration-300 hover:shadow-md hover:border-[#D71920] hover:text-[#D71920] group ${city.path === '#' ? 'cursor-default pointer-events-none opacity-60' : ''}`}
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketArea;
