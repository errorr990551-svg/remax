import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Clock, User } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';

const Blogs = () => {
  const blogs = [
    {
      id: 'pipe-flanges-guide',
      title: 'The Complete Guide to Pipe Flanges: Types, Standards, Materials, and Selection',
      excerpt: 'Comprehensive pipe flanges guide covering materials, types, sour service stainless forged flanges, and standard pressure classes for industrial use.',
      image: '/images/b(2)-1.jpeg',
      date: 'Technical Reference',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'forged-vs-cast-fittings',
      title: 'Forged Fittings vs. Cast Fittings: Which Is Right for Your Industrial Application?',
      excerpt: 'Compare forged vs cast fittings for industrial piping. Learn about grain structure, pressure ratings, ASME standards, and durability to choose the best.',
      image: '/images/b4.jpeg',
      date: 'Expert Insights',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'stainless-steel-grades-explained',
      title: 'Stainless Steel Grades Explained: Choosing the Right Grade for Fittings',
      excerpt: "Understand SS 304, 316, 316L, and duplex grades for pipe fittings. Learn how to select the right grade for your corrosion and pressure requirements.",
      image: '/images/b3-1.jpeg',
      date: 'Materials Engineering',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'oil-and-gas-pipe-fittings-guide',
      title: 'High-Pressure Pipe Fittings for Oil & Gas: Safety & Standards',
      excerpt: 'Discover essential oil refinery fittings and oil and gas pipe components. Read our complete guide for material specifications and applications.',
      image: '/images/b4-1.jpeg',
      date: 'Oil & Gas Sector',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'butt-weld-fittings-guide',
      title: 'Butt-Weld Fittings Guide: Welding Standards & Quality Control',
      excerpt: 'Learn how butt weld pipe fittings work, including welding standards, dimensions, and visual inspection criteria for weld joint penetration.',
      image: '/images/b5-1.jpeg',
      date: 'Engineering Reference',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'alloy-steel-power-gen-guide',
      title: 'Alloy Steel Pipe Fittings for Power Generation: Materials & Standards',
      excerpt: 'Technical guide to alloy steel fittings in power plants. Learn about high-temperature grades P91, F22, F11, IBR compliance, and flow-accelerated corrosion.',
      image: '/images/b6-1.jpeg',
      date: 'Power Sector',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'weld-neck-vs-slip-on-flange',
      title: 'Weld Neck vs. Slip-On Flange: Strength, Fatigue & Cost Analysis',
      excerpt: 'Engineering comparison between WNRF and SORF flanges. Fatigue endurance, welding labor, stress concentration, and ASME B16.5 application guidelines.',
      image: '/images/weld-neck-flange.webp',
      date: 'Flange Comparison',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'a105-vs-a350-lf2',
      title: 'ASTM A105 vs. ASTM A350 LF2: Low Temperature Service Comparison',
      excerpt: 'Choosing carbon steel forged flanges for standard ambient service (A105) vs sub-zero low temperature service (A350 LF2 Class 1 Charpy V-notch tested at -46°C).',
      image: '/images/industrial-flanges.jpeg',
      date: 'Metallurgy',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'duplex-vs-super-duplex',
      title: 'Duplex vs. Super Duplex: PREN, Strength & Corrosion Comparison',
      excerpt: 'Compare Duplex 2205 vs Super Duplex 2507 for seawater, marine, and offshore piping. Pitting Resistance Equivalent (PREN ≥ 40), yield strength, and weight savings.',
      image: '/images/b3-1.jpeg',
      date: 'Corrosion Engineering',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'ibr-approved-fittings-guide',
      title: 'The Complete Guide to IBR Approved Pipe Fittings & Flanges',
      excerpt: 'Indian Boiler Regulations 1950 statutory compliance: Form III-C certification, raw material pedigree, hydrostatic testing, and high-pressure steam line rules.',
      image: '/images/b5-1.jpeg',
      date: 'Boiler Regulations',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'mtc-en10204-explained',
      title: 'MTC EN 10204 Explained: Types 2.1, 2.2, 3.1 & 3.2 Certificates',
      excerpt: 'Understand Mill Test Certificates for steel piping. Specific vs non-specific inspection, independent QC validation, and third-party inspection (Lloyds, DNV, TUV).',
      image: '/images/quality.jpeg',
      date: 'Quality Assurance',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'flange-pressure-class-guide',
      title: 'Flange Pressure Classes: Class 150, 300, 600, 900, 1500 & 2500#',
      excerpt: 'Demystifying ASME B16.5 pressure ratings. Operating pressure-temperature derating, hydrostatic shell test formulas, and avoiding costly piping class mismatches.',
      image: '/images/b(2)2.jpeg',
      date: 'Piping Reference',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'flange-face-types',
      title: 'Flange Face Types: Raised Face, Flat Face, RTJ & Tongue-and-Groove',
      excerpt: 'Engineering guide to ASME B16.5 flange facings. RF vs FF gasket loads, Ring Type Joint metal-to-metal sealing, surface serrations (AARH/Ra), and cast iron protection.',
      image: '/images/blind-flanges.webp',
      date: 'Sealing Technology',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'asme-b16-5-vs-b16-47',
      title: 'ASME B16.5 vs. ASME B16.47: Standards, Sizes & Series A vs. B',
      excerpt: 'Comparing standard-bore flanges up to NPS 24 vs large-diameter flanges up to NPS 60. Series A (MSS SP-44) vs Series B (API 605) dimensional mismatch warnings.',
      image: '/images/advance-manufacturing.webp',
      date: 'Codes & Standards',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'hardox-400-vs-450',
      title: 'Hardox 400 vs. Hardox 450: Hardness & Wear Life Comparison',
      excerpt: 'Abrasion resistant wear plate metallurgy. The 50 HBW hardness difference, sliding wear life gains, impact toughness, cold bending, and truck body down-gauging.',
      image: '/images/hardox-plate.webp',
      date: 'Wear Steels',
      author: 'Remax Forge & Fittings',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Industrial Blogs & Guides | Remax Forge & Fittings"
        description="Explore technical engineering guides on flanges, forged fittings, IBR compliance, metallurgy (A105, Duplex), and ASME B16.5 pressure classes from Remax Forge."
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Blogs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Technical Blogs & Guides</h1>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Expert engineering references, metallurgical analyses, and standards comparisons from the Remax technical team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-slate-100">
              <Link to={`/blogs/${blog.id}/`} className="block h-48 overflow-hidden relative bg-slate-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-[#D71920] font-bold"><Clock size={14} /> {blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#D71920] transition-colors">
                  <Link to={`/blogs/${blog.id}/`}>{blog.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{blog.author}</span>
                  <Link 
                    to={`/blogs/${blog.id}/`} 
                    className="text-xs font-bold text-[#D71920] hover:underline inline-flex items-center gap-1"
                  >
                    Read Guide <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
