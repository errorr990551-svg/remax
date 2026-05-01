import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Clock, User } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';

const Blogs = () => {
  const blogs = [
    {
      id: 'pipe-flanges-guide',
      title: 'The Complete Guide to Pipe Flanges: Types, Standards, Materials, and Selection',
      excerpt: 'Comprehensive guide to industrial pipe flanges. Learn about flange types (Weld Neck, Slip-On, Blind), facing, pressure classes, materials, and selection for piping systems.',
      image: '/images/b(2) 1.jpeg',
      date: 'Technical Reference',
      author: 'Remax Forge & Fittings',
    },
    {
      id: 'forged-vs-cast-fittings',
      title: 'Forged Fittings vs. Cast Fittings: Which Is Right for Your Industrial Application?',
      excerpt: 'Compare Forged vs. Cast fittings for industrial use. Learn about strength, durability, and pressure ratings to choose the right component for your piping system.',
      image: '/images/b4.jpeg',
      date: 'Expert Insights',
      author: 'Remax Forge & Fittings',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      <MetaTags 
        title="Industrial Blogs & Insights | Remax Forge & Fittings"
        description="Stay updated with the latest insights, technical guides, and industry news about forged fittings, flanges, and piping systems from Remax Forge & Fittings."
      />
      
      {/* Breadcrumb Header */}
      <div className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></Link>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Blogs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Blogs</h1>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Expert insights and technical guides for process industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <Link to={`/blogs/${blog.id}`} className="block h-48 overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#D71920]" /> {blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#D71920] transition-colors">
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <User size={16} className="text-[#D71920]"/> {blog.author}
                  </span>
                  <Link 
                    to={`/blogs/${blog.id}`} 
                    className="text-[#D71920] font-bold text-sm flex items-center hover:translate-x-1 transition-transform"
                  >
                    Read More <ChevronRight size={16} />
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
