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
