import React, { Suspense, useEffect } from 'react';
import './App.css';
import './index.css';

import { Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './assets/components/common/Navbar.jsx';
import Footer from './assets/components/common/Footer.jsx';
import ScrollToTop from './assets/components/common/ScrollToTop.jsx';
import ProductMenuModal from './assets/components/common/ProductMenuModal.jsx';
import SEOManager from './assets/components/common/SEOManager.jsx';

import FloatingQuoteButton from './assets/components/common/FloatingQuoteButton.jsx';
import StickyMobileBar from './assets/components/common/StickyMobileBar.jsx';
import ExitIntentModal from './assets/components/common/ExitIntentModal.jsx';
import { appRoutes, legacyProductRedirects, optionARedirects } from './routes.jsx';

const TrailingSlashRedirector = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 0. Option A Town Merges
    if (optionARedirects[pathname]) {
      navigate(optionARedirects[pathname], { replace: true });
      return;
    }

    // 1. Legacy Product Details redirects
    if (legacyProductRedirects[pathname]) {
      navigate(legacyProductRedirects[pathname], { replace: true });
      return;
    }

    // 2. /about -> /about-us/
    if (pathname === '/about' || pathname === '/about/') {
      navigate('/about-us/', { replace: true });
      return;
    }

    // 3. Brochure redirect
    if (pathname === '/Remax%20Brochure.pdf' || pathname === '/Remax Brochure.pdf') {
      navigate('/brochure/', { replace: true });
      return;
    }

    // 4. Trailing-slash site-wide normalization
    if (pathname !== '/' && !pathname.endsWith('/') && !pathname.includes('.')) {
      navigate(`${pathname}/`, { replace: true });
    }
  }, [pathname, navigate]);

  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <TrailingSlashRedirector />
      <Navbar />
      <ProductMenuModal />

      {/* SEOManager shares the page's Suspense boundary so it commits (and reads the DOM) only once the lazy page has rendered */}
      <Suspense fallback={<div data-route-loading className="min-h-screen" />}>
        <SEOManager />
        <Routes>
          {appRoutes}
        </Routes>
      </Suspense>

      {/* Sitewide Interactive CRO Components */}
      <FloatingQuoteButton />
      <StickyMobileBar />
      <ExitIntentModal />

      <Footer />
    </div>
  );
}

export default App;