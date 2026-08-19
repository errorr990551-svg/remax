import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sheet4MetaData } from '../../data/sheet4MetaData.js';
import { newFlangePagesData } from '../../data/newFlangePagesData.js';
import { marketAreaData } from '../../data/marketAreaData.js';
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

    // Lookup metadata from Sheet 4 data or fallbacks
    const pageMeta = sheet4MetaData[canonicalPath] || sheet4MetaData[pathname] || {};

    let title = pageMeta.title || 'Flanges & Pipe Fittings Manufacturer India | Remax Forge';
    let description = pageMeta.description || 'ISO 9001 manufacturer of flanges, buttweld & forged fittings in Mumbai. Trusted by ONGC, Tata Steel & L&T. Exporting to 45+ countries. Get a quote in 30 min.';
    let type = 'website';
    let image = `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`;
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
      'email': 'info@remaxforge.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '135, New Madhav Baug, C.P. Tank Road, Marine Lines',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400004',
        'addressCountry': 'IN'
      },
      'sameAs': [
        'https://www.facebook.com/remaxforgefittings',
        'https://www.linkedin.com/company/remax-forge-fittings/',
        'https://www.instagram.com/remax_forge/',
        'https://www.indiamart.com/remaxforge-fittings/'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'sales',
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
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '135, New Madhav Baug, C.P. Tank Road, Marine Lines',
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

    } else if (canonicalPath.startsWith('/product-details/') || canonicalPath.startsWith('/products/')) {
      const productSlug = parts[parts.length - 1] || '';
      const productName = pageMeta.h1 || formatName(productSlug);

      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': productName,
        'image': `${baseUrl}/images/${productSlug}.webp`,
        'description': description,
        'brand': { '@type': 'Brand', 'name': 'Remax Forge & Fittings' },
        'manufacturer': { '@id': 'https://remaxforge.com/#organization' },
        'material': 'Stainless Steel, Carbon Steel, Alloy Steel, Duplex'
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
        { name: formatName(parts[0]), path: `/${parts[0]}/` },
        { name: productName, path: canonicalPath }
      ]));

    } else if (canonicalPath.startsWith('/blogs/')) {
      const blogSlug = parts[1] || '';
      type = 'article';
      image = `${baseUrl}/images/${blogSlug}.jpeg`;

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
        { name: 'Blogs', path: '/blogs/' },
        { name: title, path: canonicalPath }
      ]));

    } else {
      const citySlug = parts[parts.length - 1]?.toLowerCase() || '';
      const cityData = marketAreaData[citySlug];
      if (cityData) {
        title = cityData.meta?.title || title;
        description = cityData.meta?.description || description;
      }

      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: formatName(parts[0] || 'Page'), path: canonicalPath }
      ]));
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
      let tag = document.querySelector(`link[rel="${rel}"]`);
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

