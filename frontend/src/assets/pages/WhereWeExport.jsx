import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, ShieldCheck, Home, MapPin, Search } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';
import { exportHubsData } from '../data/exportHubsData.js';
import { exportCitiesData } from '../data/exportCitiesData.js';
import { useQuotePopup } from '../context/QuotePopupContext.jsx';

const WhereWeExport = () => {
  const { openQuotePopup } = useQuotePopup();
  const [searchTerm, setSearchTerm] = React.useState('');

  const hubs = Object.values(exportHubsData);
  const cities = Object.values(exportCitiesData);

  const filteredHubs = hubs.filter(hub =>
    hub.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full font-sans bg-slate-50 min-h-screen text-slate-800">
      <MetaTags
        title="Where We Export | Global Flange & Fitting Markets | Remax Forge"
        description="Explore Remax Forge's global export hubs across 19 countries and 453 industrial cities. Manufactured in Mumbai, certified to ASME B16.5 & EN 10204 3.1 MTC."
        keywords="global flange export, flange exporter india, where we export, international flange supplier"
        robots="index, follow"
      />

      {/* Hero Banner */}
      <div className="relative w-full bg-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <span>/</span>
            <span className="text-red-400 font-medium">Where We Export</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/30 mb-2">
                <Globe size={14} /> Global Supply Network
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Global Export Markets & Industrial Destinations
              </h1>
              <p className="text-base text-slate-300 mt-2 max-w-2xl">
                Serving 19 international country hubs and 453 industrial port cities directly from our Mumbai manufacturing facilities.
              </p>
            </div>
            <button
              onClick={() => openQuotePopup("Global Export Inquiry")}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0"
            >
              Request International RFQ <ArrowRight size={18} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-md">
            <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search destination country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl text-sm focus:outline-none focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub) => {
            const countryCities = cities.filter(c => c.countrySlug === hub.slug);
            return (
              <div key={hub.slug} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{hub.country}</h3>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                      {countryCities.length} Cities
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                    {hub.metaDescription}
                  </p>

                  <div className="space-y-1 mb-4 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Top Cities:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {countryCities.slice(0, 4).map(c => (
                        <Link
                          key={c.citySlug}
                          to={c.url}
                          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded transition-colors"
                        >
                          {c.city}
                        </Link>
                      ))}
                      {countryCities.length > 4 && (
                        <span className="text-xs text-slate-400 self-center">+{countryCities.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <Link
                  to={hub.url}
                  className="mt-2 w-full py-2.5 bg-slate-900 hover:bg-red-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  Explore {hub.country} Hub <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhereWeExport;
