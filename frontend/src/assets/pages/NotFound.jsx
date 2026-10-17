import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Package } from 'lucide-react';
import MetaTags from '../components/common/MetaTags.jsx';

const NotFound = () => {
  useEffect(() => {
    // Ensure robots is set to noindex, nofollow
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute('content', 'noindex, nofollow');
    }
  }, []);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50 py-32 px-4 sm:px-6 lg:px-8">
      <MetaTags 
        title="404: Page Not Found | Remax Forge & Fittings"
        description="The page you requested could not be found. Please check the URL or return to our homepage."
        robots="noindex, nofollow"
      />

      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 text-[#D71920] mb-8 font-black text-4xl shadow-sm">
          404
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
          Page Not Found
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#D71920] hover:bg-[#b5141a] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
          
          <Link
            to="/products/flanges/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-300 hover:border-[#D71920] hover:text-[#D71920] text-slate-700 font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-300"
          >
            <Package className="w-5 h-5 mr-2" />
            Explore Products
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Need immediate assistance? Contact our engineering sales desk at{' '}
            <Link to="/contact/" className="text-[#D71920] font-semibold hover:underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
