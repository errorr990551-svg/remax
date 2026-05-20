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
        { name: "Shimla", path: "/shimla" },
        { name: "Dharamshala", path: "/dharamshala" },
        { name: "Solan", path: "/solan" },
        { name: "Mandi", path: "/mandi" },
        { name: "Baddi", path: "/baddi" },
      ]
    },
    {
      name: "JHARKHAND",
      cities: [
        { name: "Jamshedpur", path: "/jamshedpur" },
        { name: "Dhanbad", path: "/dhanbad" },
        { name: "Ranchi", path: "/ranchi" },
        { name: "Bokaro", path: "/bokaro" },
        { name: "Deoghar", path: "/deoghar" },
      ]
    },
    {
      name: "KARNATAKA",
      cities: [
        { name: "Bengaluru", path: "/bengaluru" },
        { name: "Mysuru", path: "/mysuru" },
        { name: "Hubballi-Dharwad", path: "/hubballi-dharwad" },
        { name: "Mangaluru", path: "/mangaluru" },
        { name: "Belagavi", path: "/belagavi" },
      ]
    },
    {
      name: "KERALA",
      cities: [
        { name: "Thrissur", path: "/thrissur" },
        { name: "Kollam", path: "/kollam" },
        { name: "Kozhikode", path: "/kozhikode" },
        { name: "Kochi", path: "/kochi" },
        { name: "Thiruvananthapuram", path: "/thiruvananthapuram" },
      ]
    },
    {
      name: "MADHYA PRADESH",
      cities: [
        { name: "Ujjain", path: "/ujjain" },
        { name: "Gwalior", path: "/gwalior" },
        { name: "Jabalpur", path: "/jabalpur" },
        { name: "Bhopal", path: "/bhopal" },
        { name: "Indore", path: "/indore" },
      ]
    },
    {
      name: "MAHARASHTRA",
      cities: [
        { name: "Mumbai", path: "/mumbai" },
        { name: "Nagpur", path: "/nagpur" },
        { name: "Nashik", path: "/nashik" },
        { name: "Pune", path: "/pune" },
        { name: "Thane", path: "/thane" },
      ]
    },
    {
      name: "MANIPUR",
      cities: [
        { name: "Thoubal", path: "/thoubal" },
        { name: "Bishnupur", path: "/bishnupur" },
        { name: "Kakching", path: "/kakching" },
        { name: "Churachandpur", path: "/churachandpur" },
        { name: "Imphal", path: "/imphal" },
      ]
    },
    {
      name: "MEGHALAYA",
      cities: [
        { name: "Cherrapunji", path: "/cherrapunji" },
        { name: "Nongpoh", path: "/nongpoh" },
        { name: "Shillong", path: "/shillong" },
        { name: "Tura", path: "/tura" },
        { name: "Williamnagar", path: "/williamnagar" },
      ]
    },
    {
      name: "MIZORAM",
      cities: [
        { name: "Aizawl", path: "/aizawl" },
        { name: "Champhai", path: "/champhai" },
        { name: "Kolasib", path: "/kolasib" },
        { name: "Lunglei", path: "/lunglei" },
        { name: "Serchhip", path: "/serchhip" },
      ]
    },
    {
      name: "NAGALAND",
      cities: [
        { name: "Dimapur", path: "/dimapur" },
        { name: "Kohima", path: "/kohima" },
        { name: "Mokokchung", path: "/mokokchung" },
        { name: "Tuensang", path: "/tuensang" },
        { name: "Wokha", path: "/wokha" },
      ]
    },
    {
      name: "ODISHA",
      cities: [
        { name: "Sambalpur", path: "/sambalpur" },
        { name: "Rourkela", path: "/rourkela" },
        { name: "Berhampur", path: "/berhampur" },
        { name: "Cuttack", path: "/cuttack" },
        { name: "Bhubaneswar", path: "/bhubaneswar" },
      ]
    },
    {
      name: "PUNJAB",
      cities: [
        { name: "Bathinda", path: "/bathinda" },
        { name: "Patiala", path: "/patiala" },
        { name: "Jalandhar", path: "/jalandhar" },
        { name: "Amritsar", path: "/amritsar" },
        { name: "Ludhiana", path: "/ludhiana" },
      ]
    },
    {
      name: "RAJASTHAN",
      cities: [
        { name: "Bikaner", path: "/bikaner" },
        { name: "Ajmer", path: "/ajmer" },
        { name: "Kota", path: "/kota" },
        { name: "Jodhpur", path: "/jodhpur" },
        { name: "Jaipur", path: "/jaipur" },
        { name: "Udaipur", path: "/udaipur-rajasthan" },
      ]
    },
    {
      name: "SIKKIM",
      cities: [
        { name: "Mangan", path: "/mangan" },
        { name: "Geyzing", path: "/geyzing" },
        { name: "Namchi", path: "/namchi" },
        { name: "Jorethang", path: "/jorethang" },
        { name: "Gangtok", path: "/gangtok" },
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
