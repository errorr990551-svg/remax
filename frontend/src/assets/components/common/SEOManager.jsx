import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sheet4MetaData } from '../../data/sheet4MetaData.js';
import { newFlangePagesData } from '../../data/newFlangePagesData.js';
import { marketAreaMeta } from '../../data/marketAreaMeta.js';
import { cityStrategyData } from '../../data/cityStrategyData.js';
import flangeFaqs from '../../data/flange_faqs.json';

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = 'https://remaxforge.com';

    // Normalize path with trailing slash for canonical tag (except root '/')
    let canonicalPath = pathname;
    if (canonicalPath !== '/' && !canonicalPath.endsWith('/')) {
      canonicalPath += '/';
    }
    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    // 0. Check if path matches one of our 9 city/hub/market-area pages in cityStrategyData
    let strategyPage = null;
    for (const cfg of Object.values(cityStrategyData)) {
      if (cfg.url === canonicalPath || cfg.url.replace(/\/$/, '') === pathname.replace(/\/$/, '')) {
        strategyPage = cfg;
        break;
      }
    }

    if (strategyPage) {
      document.title = strategyPage.title;

      const setMeta = (name, content) => {
        if (!content) return;
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (tag) tag.setAttribute('content', content);
        else {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          tag.setAttribute('content', content);
          document.head.appendChild(tag);
        }
      };

      const setProp = (prop, content) => {
        if (!content) return;
        let tag = document.querySelector(`meta[property="${prop}"]`);
        if (tag) tag.setAttribute('content', content);
        else {
          tag = document.createElement('meta');
          tag.setAttribute('property', prop);
          tag.setAttribute('content', content);
          document.head.appendChild(tag);
        }
      };

      const setLink = (rel, href, attributes = {}) => {
        if (!href) return;
        const selector = attributes.hreflang ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]` : `link[rel="${rel}"]`;
        let tag = document.querySelector(selector);
        if (tag) tag.setAttribute('href', href);
        else {
          tag = document.createElement('link');
          tag.setAttribute('rel', rel);
          tag.setAttribute('href', href);
          Object.keys(attributes).forEach(k => tag.setAttribute(k, attributes[k]));
          document.head.appendChild(tag);
        }
      };

      const oldKeywordsTag = document.querySelector('meta[name="keywords"]');
      if (oldKeywordsTag) oldKeywordsTag.remove();

      setMeta('robots', 'index, follow');
      setMeta('description', strategyPage.meta_desc);
      setLink('canonical', `${baseUrl}${strategyPage.url}`);
      setLink('alternate', `${baseUrl}${strategyPage.url}`, { hreflang: 'en' });
      setLink('alternate', `${baseUrl}${strategyPage.url}`, { hreflang: 'x-default' });

      setProp('og:title', strategyPage.title);
      setProp('og:description', strategyPage.meta_desc);
      setProp('og:url', `${baseUrl}${strategyPage.url}`);
      setProp('og:image', `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`);
      setProp('og:type', 'website');
      setProp('og:site_name', 'Remax Forge & Fittings');
      setProp('og:locale', 'en_IN');

      setMeta('twitter:card', 'summary_large_image');
      setMeta('twitter:title', strategyPage.title);
      setMeta('twitter:description', strategyPage.meta_desc);
      setMeta('twitter:image', `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`);

      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
      if (strategyPage.schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(strategyPage.schema);
        document.head.appendChild(script);
      }

      return;
    }

    // Lookup metadata from Sheet 4 data or fallbacks
    const pageMeta = sheet4MetaData[canonicalPath] || sheet4MetaData[pathname] || {};

    let title = pageMeta.title || 'Flanges & Pipe Fittings Manufacturer India | Remax Forge';
    let description = pageMeta.description || 'ISO 9001 manufacturer of flanges, buttweld & forged fittings in Mumbai. Trusted by ONGC, Tata Steel & L&T. Exporting to 45+ countries. Get a quote in 30 min.';
    let type = 'website';
    // First content image actually rendered on the page (skips the navbar logo); falls back to the logo.
    // Guessing /images/<slug>.webp pointed most product & blog schemas at files that do not exist.
    const pageImg = Array.from(document.querySelectorAll('#root img')).find((el) => {
      const src = el.getAttribute('src') || '';
      return src.startsWith('/images/') && !src.includes('REMAX_FORGE_AND_FITTINGS') && !el.closest('nav, header, footer');
    });
    let image = pageImg ? encodeURI(`${baseUrl}${pageImg.getAttribute('src')}`) : `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`;
    let schemas = [];
    let noindex = false;

    // Helper to format names
    const formatName = (slug) => {
      if (!slug) return '';
      if (slug === 'duplex-steel-superduplex-steel-pipe') return 'Duplex Steel Superduplex Steel Pipe';
      if (slug === '180-elbow') return '180° Elbow';
      if (slug === '90-elbow') return '90° Elbow';
      if (slug === '45-elbow') return '45° Elbow';
      return slug.split('-').map(word => {
        if (word.toLowerCase() === 'on') return 'On';
        if (word.toLowerCase() === 'vs') return 'vs';
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    };

    const makeBreadcrumbs = (items) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.name,
        'item': `${baseUrl}${item.path.endsWith('/') || item.path === '/' ? item.path : item.path + '/'}`
      }))
    });

    const breadcrumbsHome = { name: 'Home', path: '/' };

    // Intermediate levels that are real, indexable hub pages (/products/, /materials/ etc. are 301s)
    const hubNames = {
      '/blogs/': 'Blogs',
      '/export/': 'Export',
      '/market-area/': 'Market Area',
      '/products/flanges/': 'Flanges',
      '/products/socket-weld-fittings/': 'Socket Weld Fittings',
      '/products/forged-fittings/': 'Forged Fittings'
    };
    const hubCrumbs = (path) => {
      const segs = path.split('/').filter(Boolean);
      const crumbs = [];
      for (let i = 1; i < segs.length; i++) {
        const hubPath = `/${segs.slice(0, i).join('/')}/`;
        if (hubNames[hubPath]) {
          crumbs.push({ name: hubNames[hubPath], path: hubPath });
        } else if (/^\/(export|market-area)\/[^/]+\/$/.test(hubPath)) {
          crumbs.push({ name: formatName(segs[i - 1]), path: hubPath });
        }
      }
      return crumbs;
    };

    // Standard Organization Schema per Sheet 6 #1
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://remaxforge.com/#organization',
      'name': 'Remax Forge & Fittings',
      'url': 'https://remaxforge.com/',
      'logo': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`,
      'description': 'ISO 9001:2015 certified manufacturer of forged flanges, buttweld fittings and pipe fittings in Mumbai, India. Exporting to 45+ countries.',
      'foundingDate': '2004',
      'email': 'sales@remaxforge.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '135, New Madhav Baug, C.P. Tank Road, Bhuleshwar',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400004',
        'addressCountry': 'IN'
      },
      'telephone': '+919769983108',
      'sameAs': [
        'https://www.facebook.com/remaxforgefittings',
        'https://www.linkedin.com/company/remax-forge-fittings/',
        'https://www.instagram.com/remax_forge/',
        'https://www.indiamart.com/remaxforge-fittings/'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'sales',
        'telephone': '+919769983108',
        'url': 'https://remaxforge.com/contact/',
        'areaServed': ['IN', 'AE', 'SA', 'US'],
        'availableLanguage': ['en', 'hi']
      }
    };

    // Standard LocalBusiness Schema per Sheet 6 #2
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://remaxforge.com/#localbusiness',
      'name': 'Remax Forge & Fittings',
      'image': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`,
      'url': 'https://remaxforge.com/',
      'telephone': '+919769983108',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '135, New Madhav Baug, C.P. Tank Road, Bhuleshwar',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400004',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 18.9530,
        'longitude': 72.8250
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:30',
        'closes': '19:00'
      }
    };

    // Standard WebSite Schema per Sheet 6 #3
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://remaxforge.com/#website',
      'url': 'https://remaxforge.com/',
      'name': 'Remax Forge & Fittings',
      'publisher': { '@id': 'https://remaxforge.com/#organization' }
    };

    const parts = canonicalPath.split('/').filter(Boolean);

    if (canonicalPath === '/') {
      schemas.push(orgSchema);
      schemas.push(localBusinessSchema);
      schemas.push(websiteSchema);
      schemas.push(makeBreadcrumbs([breadcrumbsHome]));

    } else if (canonicalPath === '/contact/' || canonicalPath === '/mumbai/') {
      schemas.push(localBusinessSchema);
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: formatName(parts[0]), path: canonicalPath }]));

    } else if ((canonicalPath.startsWith('/product-details/') || canonicalPath.startsWith('/products/')) && !hubNames[canonicalPath]) {
      const productSlug = parts[parts.length - 1] || '';
      const productName = pageMeta.h1 || formatName(productSlug);

      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': productName,
        'image': image,
        'description': description,
        'brand': { '@type': 'Brand', 'name': 'Remax Forge & Fittings' },
        'manufacturer': { '@id': 'https://remaxforge.com/#organization' },
        'material': 'Stainless Steel, Carbon Steel, Alloy Steel, Duplex',
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'INR',
          'lowPrice': '150',
          'highPrice': '45000',
          'offerCount': '100',
          'priceValidUntil': '2027-12-31',
          'availability': 'https://schema.org/InStock',
          'url': canonicalUrl,
          'seller': {
            '@type': 'Organization',
            'name': 'Remax Forge & Fittings'
          }
        }
      };
      schemas.push(productSchema);

      const rawFaqs = flangeFaqs[productSlug] || (newFlangePagesData[canonicalPath] || newFlangePagesData[pathname] || {}).faqs;
      if (rawFaqs && rawFaqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': rawFaqs.map(f => ({
            '@type': 'Question',
            'name': f.question || f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.answer || f.a }
          }))
        });
      }

      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        ...hubCrumbs(canonicalPath),
        { name: productName, path: canonicalPath }
      ]));

    } else if (canonicalPath.startsWith('/blogs/') && parts.length > 1) {
      type = 'article';

      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': title,
        'image': image,
        'author': { '@type': 'Organization', 'name': 'Remax Forge & Fittings', '@id': 'https://remaxforge.com/#organization' },
        'publisher': { '@id': 'https://remaxforge.com/#organization' },
        'datePublished': '2025-10-10',
        'dateModified': '2026-08-10',
        'mainEntityOfPage': canonicalUrl
      };
      schemas.push(articleSchema);
      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        ...hubCrumbs(canonicalPath),
        { name: pageMeta.h1 || title, path: canonicalPath }
      ]));

    } else {
      const citySlug = parts[parts.length - 1]?.toLowerCase() || '';
      const cityData = marketAreaMeta[citySlug];
      if (cityData) {
        title = cityData.title || title;
        description = cityData.description || description;
      }

      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        ...hubCrumbs(canonicalPath),
        { name: pageMeta.h1 || formatName(parts[parts.length - 1] || 'Page'), path: canonicalPath }
      ]));
    }

    const knownStaticPaths = new Set([
      '/', '/contact/', '/about-us/', '/quality/', '/certification/', '/certificates/',
      '/career/', '/brochure/', '/market-area/', '/export/', '/oil-gas-pipe-fittings/',
      '/pipe-fittings-manufacturer-india/', '/buttweld-fittings-exporter-india/',
      '/blogs/'
    ]);

    const isKnownPath = 
      knownStaticPaths.has(canonicalPath) ||
      Boolean(pageMeta.title) ||
      Boolean(sheet4MetaData[canonicalPath]) ||
      Boolean(sheet4MetaData[pathname]) ||
      Boolean(newFlangePagesData[canonicalPath]) ||
      Boolean(newFlangePagesData[pathname]) ||
      canonicalPath.startsWith('/tech-info/') ||
      canonicalPath.startsWith('/export/') ||
      canonicalPath.startsWith('/market-area/') ||
      canonicalPath.startsWith('/materials/') ||
      canonicalPath.startsWith('/standards/') ||
      canonicalPath.startsWith('/industries/') ||
      canonicalPath.startsWith('/blogs/') ||
      Boolean(marketAreaMeta[parts[parts.length - 1]?.toLowerCase()]);

    if (!isKnownPath) {
      title = '404 - Page Not Found | Remax Forge & Fittings';
      description = 'The page you requested could not be found. Please check the URL or return to our homepage.';
      noindex = true;
    }

    // Update document title
    document.title = title;

    // Helper functions for meta tags
    const setMetaTag = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    const setPropertyTag = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    const setLinkTag = (rel, href, attributes = {}) => {
      if (!href) return;
      const selector = attributes.hreflang ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]` : `link[rel="${rel}"]`;
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('href', href);
      } else {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('href', href);
        Object.keys(attributes).forEach(key => {
          tag.setAttribute(key, attributes[key]);
        });
        document.head.appendChild(tag);
      }
    };

    // Remove legacy meta keywords tag per Sheet 3 #7
    const oldKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (oldKeywordsTag) {
      oldKeywordsTag.remove();
    }

    // Indexing
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Basic Meta
    setMetaTag('description', description);

    // Canonical Tag (Self-referencing with trailing slash)
    setLinkTag('canonical', canonicalUrl);

    // Hreflang Tags
    setLinkTag('alternate', canonicalUrl, { hreflang: 'en' });
    setLinkTag('alternate', canonicalUrl, { hreflang: 'x-default' });

    // Open Graph
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setPropertyTag('og:url', canonicalUrl);
    setPropertyTag('og:image', image);
    setPropertyTag('og:type', type);
    setPropertyTag('og:site_name', 'Remax Forge & Fittings');
    setPropertyTag('og:locale', 'en_IN');

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Inject JSON-LD Schemas
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [pathname]);

  return null;
};

export default SEOManager;

