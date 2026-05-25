import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { marketAreaData } from '../../data/marketAreaData.js';

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = 'https://remaxforge.com';
    const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`;

    let title = 'REMAX FORGE & FITTINGS';
    let description = 'Leading manufacturer and exporter of high-quality forged fittings, flanges, and industrial components. Committed to precision, durability, and global standards.';
    let keywords = 'Forged Fittings, Flanges, Pipe Fittings, Remax Forge';
    let type = 'website';
    let image = `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`;
    let schemas = [];
    let noindex = false;

    // Helper to format product names
    const formatName = (slug) => {
      if (slug === 'duplex-steel-superduplex-steel-pipe') return 'Duplex Steel Superduplex Steel Pipe';
      if (slug === 'duplex-steel-super-duplex-steel-tube') return 'Duplex Steel Super Duplex Steel Tube';
      if (slug === '180-elbow') return '180° Elbow';
      if (slug === '90-elbow') return '90° Elbow';
      if (slug === '45-elbow') return '45° Elbow';
      return slug.split('-').map(word => {
        if (word.toLowerCase() === 'on') return 'On';
        if (word.toLowerCase() === 'vs') return 'vs';
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    };

    // Breadcrumb list generator
    const makeBreadcrumbs = (items) => {
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': item.name,
          'item': `${baseUrl}${item.path}`
        }))
      };
    };

    const breadcrumbsHome = { name: 'Home', path: '/' };

    // Dynamic routing match
    const parts = pathname.split('/').filter(Boolean);

    if (pathname === '/') {
      title = 'Forged Fittings & Flanges Manufacturer in India | Remax Forge & Fittings';
      description = 'Remax Forge & Fittings is an ISO 9001:2015 certified manufacturer of high-quality forged fittings, flanges, and high-pressure components. Exporting precision-engineered solutions to 45+ countries. Request a quote today!';
      keywords = 'Forged Fittings Manufacturer, Industrial Flanges India, Stainless Steel Forged Fittings, Socket Weld Fittings, Buttweld Fittings, High-Pressure Components, ASME Standard Flanges, Remax Forge Mumbai, Precision Forging Services, Industrial Pipe Fittings Exporter.';
      
      const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Remax Forge & Fittings',
        'url': baseUrl,
        'logo': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-97699-83108',
          'contactType': 'sales'
        },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '135, New Madhav Baug, C.P Tank Road, Marine Line',
          'addressLocality': 'Mumbai',
          'postalCode': '400004',
          'addressCountry': 'IN'
        },
        'sameAs': [
          'https://www.facebook.com/remaxforgefittings',
          'https://www.linkedin.com/company/remax-forge-fittings/',
          'https://www.instagram.com/remax_forge/'
        ]
      };
      schemas.push(orgSchema);
      schemas.push(makeBreadcrumbs([breadcrumbsHome]));

    } else if (pathname === '/about-us') {
      title = 'About Us | Remax Forge & Fittings';
      description = 'Learn more about Remax Forge & Fittings, a leading manufacturer and exporter of forged fittings, flanges, and industrial components in India. Over two decades of expertise.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'About Us', path: '/about-us' }]));

    } else if (pathname === '/contact') {
      title = 'Contact Us | Remax Forge & Fittings';
      description = 'Get in touch with Remax Forge & Fittings. Contact us for inquiries, requests for quotes, and technical support on our forged fittings and flanges.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Contact Us', path: '/contact' }]));

    } else if (pathname === '/quality') {
      title = 'Quality Assurance & Policy | Remax Forge & Fittings';
      description = 'Our zero-defect quality policy ensures ASTM/ASME standards compliance. Learn about our testing processes, including ultrasonic, hydrostatic, and PMI.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Quality Policy', path: '/quality' }]));

    } else if (pathname === '/certification') {
      title = 'ISO 9001:2015 Certifications | Remax Forge & Fittings';
      description = 'View our ISO 9001:2015, PED, and other industrial quality certificates for manufacturing forged fittings and flanges.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Certifications', path: '/certification' }]));

    } else if (pathname === '/career') {
      title = 'Careers at Remax Forge & Fittings | Join Our Engineering Team';
      description = 'Join the engineering team at Remax Forge & Fittings. Discover career opportunities in industrial manufacturing, metallurgy, and quality control.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Careers', path: '/career' }]));

    } else if (pathname === '/market-area') {
      title = 'Industrial Piping Market Area & Supply Network | Remax Forge';
      description = 'Explore our global supply and distribution network for industrial flanges, buttweld fittings, and socket weld fittings across India and 45+ countries.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Market Area', path: '/market-area' }]));

    } else if (pathname === '/blogs') {
      title = 'Industrial Blogs & Insights | Remax Forge & Fittings';
      description = 'Stay updated with the latest insights, technical guides, and industry news about forged fittings, flanges, and piping systems from Remax Forge & Fittings.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Blogs', path: '/blogs' }]));

    } else if (pathname === '/seo') {
      noindex = true;
      title = 'SEO Test Page | Remax Forge';
      description = 'Test page.';

    } else if (pathname.startsWith('/tech-info/')) {
      const pageName = formatName(parts[1] || '');
      title = `${pageName} - Technical Reference Chart | Remax Forge`;
      description = `View our comprehensive ${pageName} reference charts, dimensions, chemical compositions, and engineering specifications for piping systems.`;
      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: 'Tech Info', path: '/tech-info/dimensions' },
        { name: pageName, path: pathname }
      ]));

    } else if (pathname.startsWith('/products/')) {
      const categorySlug = parts[1] || '';
      const productSlug = parts[2] || '';
      const categoryName = formatName(categorySlug);
      const productName = formatName(productSlug);

      if (categorySlug === 'flanges' && productSlug === 'slip-on-flange') {
        title = 'Slip On Flange Manufacturer in India | ASME B16.5 | Remax Forge';
      } else if (categorySlug === 'flanges' && productSlug === 'weld-neck-flange') {
        title = 'Weld Neck Flange Manufacturer in India | ASME B16.5 | Remax Forge';
      } else {
        title = `${productName} Manufacturer in India | Remax Forge & Fittings`;
      }

      description = `${productName} manufacturer in India | ASME/ASTM certified | Available in SS, CS, Alloy Steel | Export to 45+ countries | Remax Forge`;
      
      // Attempt to map matching image name if exists on disk
      image = `${baseUrl}/images/${productSlug}.webp`;

      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': productName,
        'description': description,
        'brand': {
          '@type': 'Brand',
          'name': 'Remax Forge & Fittings'
        },
        'manufacturer': {
          '@type': 'Organization',
          'name': 'Remax Forge & Fittings'
        }
      };
      schemas.push(productSchema);
      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: categoryName, path: `/products/${categorySlug}/${productSlug}` },
        { name: productName, path: pathname }
      ]));

    } else if (pathname.startsWith('/blogs/')) {
      const blogSlug = parts[1] || '';
      const blogTitleMap = {
        'pipe-flanges-guide': {
          title: 'The Complete Guide to Pipe Flanges: Types, Standards, Materials, and Selection',
          desc: 'Comprehensive guide to industrial pipe flanges. Learn about flange types (Weld Neck, Slip-On, Blind), facing, pressure classes, materials, and selection for piping systems.',
          pub: '2025-10-10',
          mod: '2026-05-01'
        },
        'forged-vs-cast-fittings': {
          title: 'Forged Fittings vs. Cast Fittings: Which Is Right for Your Industrial Application?',
          desc: 'Compare Forged vs. Cast fittings for industrial use. Learn about strength, durability, and pressure ratings to choose the right component for your piping system.',
          pub: '2025-11-15',
          mod: '2026-05-02'
        },
        'stainless-steel-grades-explained': {
          title: 'Stainless Steel Grades Explained: Choosing the Right Grade for Fittings',
          desc: "Understand the differences between SS 304, 316, 316L, and duplex grades for industrial pipe fittings. Learn which stainless steel grade fits your environment's corrosion and pressure needs.",
          pub: '2025-12-05',
          mod: '2026-05-03'
        },
        'oil-and-gas-pipe-fittings-guide': {
          title: 'High-Pressure Pipe Fittings for Oil & Gas: Safety & Standards',
          desc: 'Explore the essential role of forged fittings and flanges in oil and gas applications. Learn about ASME standards, material traceability, and ensuring facility safety.',
          pub: '2026-01-20',
          mod: '2026-05-04'
        },
        'butt-weld-fittings-guide': {
          title: 'Butt-Weld Fittings Guide: Welding Standards & Quality Control',
          desc: 'Master the technicalities of butt-weld fittings. Learn about ASTM A234 grades, PWHT requirements, and ASME B31.3 weld examination standards for piping systems.',
          pub: '2026-02-12',
          mod: '2026-05-05'
        },
        'alloy-steel-power-gen-guide': {
          title: 'Alloy Steel Pipe Fittings for Power Generation: Materials & Standards',
          desc: 'A technical guide to alloy steel pipe fittings in power plants. Learn about high-temperature grades like P91, F22, and F11, IBR compliance, and preventing flow-accelerated corrosion.',
          pub: '2026-03-08',
          mod: '2026-05-06'
        }
      };

      const blog = blogTitleMap[blogSlug] || { title: formatName(blogSlug), desc: description, pub: '2026-05-01', mod: '2026-05-22' };
      title = `${blog.title} | Remax Forge`;
      description = blog.desc;
      type = 'article';
      image = `${baseUrl}/images/${blogSlug}.jpeg`;

      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': blog.title,
        'datePublished': blog.pub,
        'dateModified': blog.mod,
        'author': {
          '@type': 'Organization',
          'name': 'Remax Forge & Fittings'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Remax Forge & Fittings',
          'logo': {
            '@type': 'ImageObject',
            'url': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalUrl
        }
      };
      schemas.push(articleSchema);
      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: 'Blogs', path: '/blogs' },
        { name: blog.title, path: pathname }
      ]));

    } else {
      // Dynamic City Page check
      const citySlug = parts[parts.length - 1]?.toLowerCase() || '';
      const cityData = marketAreaData[citySlug];

      if (cityData) {
        const KEPT_CITIES = [
          'mumbai', 'ahmedabad', 'pune', 'surat', 'chennai', 'hyderabad', 'bengaluru', 
          'visakhapatnam', 'vadodara', 'rajkot', 'nashik', 'nagpur', 'jaipur', 
          'thane', 'coimbatore', 'kochi', 'jamshedpur', 'raipur', 'gandhinagar', 'vijayawada',
          'rishikesh', 'haldwani', 'roorkee', 'haridwar', 'dehradun',
          'siliguri', 'durgapur', 'asansol', 'kolkata', 'kharagpur'
        ];

        if (!KEPT_CITIES.includes(citySlug)) {
          noindex = true;
        }

        title = cityData.meta.title;
        description = cityData.meta.description;
        keywords = cityData.meta.keywords;

        const localBusinessSchema = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': `Remax Forge & Fittings - ${formatName(citySlug)}`,
          'url': canonicalUrl,
          'image': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`,
          'logo': `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`,
          'telephone': '+91-97699-83108',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': formatName(citySlug),
            'addressCountry': 'IN'
          }
        };
        schemas.push(localBusinessSchema);
        schemas.push(makeBreadcrumbs([
          breadcrumbsHome,
          { name: 'Market Area', path: '/market-area' },
          { name: formatName(citySlug), path: pathname }
        ]));
      }
    }

    // Apply Meta tags to Document Head
    document.title = title;

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
      
      // For canonical, match exact rel="canonical"
      // For hreflang, match rel="alternate" and hreflang attribute
      let selector = `link[rel="${rel}"]`;
      if (attributes.hreflang) {
        selector += `[hreflang="${attributes.hreflang}"]`;
      }
      
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

    // Index or Noindex
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Basic Meta
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Canonical
    setLinkTag('canonical', canonicalUrl);

    // Hreflang Tags (International Targeting)
    setLinkTag('alternate', canonicalUrl, { hreflang: 'en' });
    setLinkTag('alternate', canonicalUrl, { hreflang: 'x-default' });

    // Open Graph / Twitter Card Tags
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setPropertyTag('og:url', canonicalUrl);
    setPropertyTag('og:image', image);
    setPropertyTag('og:type', type);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Inject JSON-LD Schema Tags
    // First, clear existing schemas to prevent stacking
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
