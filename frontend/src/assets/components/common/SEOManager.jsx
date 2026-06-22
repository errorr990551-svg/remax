import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { marketAreaData } from '../../data/marketAreaData.js';
import flangeFaqs from '../../data/flange_faqs.json';

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
    const parts = pathname.split('/').filter(Boolean);
    const cleanPath = pathname.replace(/\/+$/, ""); // Remove trailing slashes for clean matching

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

    } else if (cleanPath === '/about-us') {
      title = 'About Us | Remax Forge & Fittings';
      description = 'Learn more about Remax Forge & Fittings, a leading manufacturer and exporter of forged fittings, flanges, and industrial components in India. Over two decades of expertise.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'About Us', path: '/about-us' }]));

    } else if (cleanPath === '/contact') {
      title = 'Contact Us | Remax Forge & Fittings';
      description = 'Get in touch with Remax Forge & Fittings. Contact us for inquiries, requests for quotes, and technical support on our forged fittings and flanges.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Contact Us', path: '/contact' }]));

    } else if (cleanPath === '/quality') {
      title = 'Quality Assurance & Policy | Remax Forge & Fittings';
      description = 'Our zero-defect quality policy ensures ASTM/ASME standards compliance. Learn about our testing processes, including ultrasonic, hydrostatic, and PMI.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Quality Policy', path: '/quality' }]));

    } else if (cleanPath === '/certification') {
      title = 'ISO 9001:2015 Certifications | Remax Forge & Fittings';
      description = 'View our ISO 9001:2015, PED, and other industrial quality certificates for manufacturing forged fittings and flanges.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Certifications', path: '/certification' }]));

    } else if (cleanPath === '/career') {
      title = 'Careers at Remax Forge & Fittings | Join Our Engineering Team';
      description = 'Join the engineering team at Remax Forge & Fittings. Discover career opportunities in industrial manufacturing, metallurgy, and quality control.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Careers', path: '/career' }]));

    } else if (cleanPath === '/market-area') {
      title = 'Industrial Piping Market Area & Supply Network | Remax Forge';
      description = 'Explore our global supply and distribution network for industrial flanges, buttweld fittings, and socket weld fittings across India and 45+ countries.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Market Area', path: '/market-area' }]));

    } else if (cleanPath === '/blogs') {
      title = 'Industrial Blogs & Insights | Remax Forge & Fittings';
      description = 'Stay updated with the latest insights, technical guides, and industry news about forged fittings, flanges, and piping systems from Remax Forge & Fittings.';
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Blogs', path: '/blogs' }]));

    } else if (cleanPath === '/pipe-fittings-manufacturer-india') {
      title = "Pipe Fittings Manufacturer in India | Flanges, BW, SW Fittings | Remax Forge";
      description = "Remax Forge — pipe fittings manufacturer in India. Flanges, butt weld, socket weld, forged fittings. ASME B16.5/B16.9/B16.11. Exported to 40+ countries. Get quote.";
      keywords = "pipe fittings manufacturer in india, industrial pipe fittings india, ASME pipe fittings manufacturer, pipe fitting supplier india export";
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Pipe Fittings Manufacturer', path: pathname }]));

    } else if (cleanPath === '/buttweld-fittings-exporter-india') {
      title = "Buttweld Fittings Exporter in India | ASME B16.9 | Remax Forge";
      description = "Remax Forge — buttweld fittings exporter in India. Elbows, tees, reducers, caps — ASME B16.9 — exported to UAE, Saudi Arabia, USA, UK, 40+ countries. Get quote.";
      keywords = "buttweld fittings exporter india, butt weld fittings export india, ASME B16.9 fittings india export, BW fittings manufacturer exporter";
      schemas.push(makeBreadcrumbs([breadcrumbsHome, { name: 'Buttweld Fittings Exporter', path: pathname }]));

    } else if (cleanPath.startsWith('/product-details/')) {
      const productSlug = parts[1] || '';
      const productName = formatName(productSlug);
      
      const detailsConfig = {
        'boiler-quality-plate': {
          title: "Boiler Quality Plate Supplier in India | IS 2002 / ASTM A516 | Remax Forge",
          desc: "Remax Forge — boiler quality plate supplier in India. IS 2002 Gr1/Gr2/Gr3, ASTM A516 Gr60/Gr70, SA516, IBR approved. Thicknesses 6mm–150mm. Quote in 24 hrs.",
          keywords: "boiler quality plate supplier india, BQ plate IS 2002, ASTM A516 Gr70 plate india, SA516 Gr70 boiler plate"
        },
        'hardox-plate': {
          title: "Hardox Plate Supplier in India | Hardox 400 450 500 | Remax Forge",
          desc: "Remax Forge — Hardox wear plate supplier in India. Hardox 400, 450, 500, 600 — all thicknesses. Mining, cement, steel plant applications. Quote in 24 hrs.",
          keywords: "hardox plate supplier india, Hardox 450 plate india, wear plate supplier india, Hardox 400 500 india"
        }
      };

      const config = detailsConfig[productSlug] || {
        title: `${productName} Supplier in India | Remax Forge`,
        desc: `${productName} supplier in India. Quality standard plates and fittings. Quote in 24 hrs.`,
        keywords: `${productSlug}, Remax Forge`
      };

      title = config.title;
      description = config.desc;
      keywords = config.keywords;

      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': productName,
        'description': description,
        'brand': { '@type': 'Brand', 'name': 'Remax Forge & Fittings' },
        'offers': {
          '@type': 'Offer',
          'availability': 'https://schema.org/InStock',
          'seller': { '@type': 'Organization', 'name': 'Remax Forge & Fittings' }
        }
      };
      schemas.push(productSchema);

      const productFaqs = flangeFaqs[productSlug];
      if (productFaqs && productFaqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': productFaqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
          }))
        });
      }

      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: 'Product Details', path: '/product-details/boiler-quality-plate' },
        { name: productName, path: pathname }
      ]));

    } else if (cleanPath.startsWith('/tech-info/')) {
      const pageName = formatName(parts[1] || '');
      title = `${pageName} - Technical Reference Chart | Remax Forge`;
      description = `View our comprehensive ${pageName} reference charts, dimensions, chemical compositions, and engineering specifications for piping systems.`;
      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: 'Tech Info', path: '/tech-info/dimensions' },
        { name: pageName, path: pathname }
      ]));

    } else if (cleanPath.startsWith('/products/')) {
      const categorySlug = parts[1] || '';
      const productSlug = parts[2] || '';
      const categoryName = formatName(categorySlug);
      const productName = formatName(productSlug || categorySlug);

      const productSEOConfig = {
      "weld-neck-flange": {
            "title": "Weld Neck Flange Manufacturer in India | ASME B16.5 / B16.47 | Remax Forge",
            "description": "Remax Forge — leading weld neck flange manufacturer in India. ASME B16.5 & B16.47, Class 150 to 2500, 1/2\" to 60\", SS/CS/Alloy. IBR approved. Get quote in 24 hrs.",
            "keywords": "weld neck flange manufacturer in india, WNRF flange supplier, weld neck flange ASME B16.5, raised face weld neck flange india, WNRF flange, long weld neck flange, high pressure flange, forged flange india, pipe flange manufacturer",
            "name": "Weld Neck Flange",
            "desc": "Remax Forge — leading weld neck flange manufacturer in India. ASME B16.5 & B16.47, Class 150 to 2500, 1/2\" to 60\", SS/CS/Alloy. IBR approved. Get quote in 24 hrs."
      },
      "slip-on-flange": {
            "title": "Slip On Flange Supplier in India | ASME B16.5 SO Flange | Remax Forge",
            "description": "Remax Forge — slip on flange supplier in India. ASME B16.5, Class 150–2500, all materials. Raised face & flat face. Bulk stock. Get quote in 24 hrs.",
            "keywords": "slip on flange supplier india, SORF flange manufacturer india, slip on raised face flange, SO flange ASME B16.5, slip on flange dimensions, slip on flange welding procedure, forged slip on flange, SS316 slip on flange",
            "name": "Slip On Flange",
            "desc": "Remax Forge — slip on flange supplier in India. ASME B16.5, Class 150–2500, all materials. Raised face & flat face. Bulk stock. Get quote in 24 hrs."
      },
      "blind-flange": {
            "title": "Blind Flange Manufacturer in India | ASME B16.5 BL Flange | Remax Forge",
            "description": "Remax Forge — blind flange manufacturer in India. ASME B16.5 & B16.47, Class 150 to 2500, all grades. RTJ, RF, FF facing. Export quality. Quote in 24 hrs.",
            "keywords": "blind flange manufacturer india, BLRF flange supplier, blind flange ASME B16.5, blind pipe flange, blinded flange, blanking flange, blind flange weight chart, forged blind flange",
            "name": "Blind Flange",
            "desc": "Remax Forge — blind flange manufacturer in India. ASME B16.5 & B16.47, Class 150 to 2500, all grades. RTJ, RF, FF facing. Export quality. Quote in 24 hrs."
      },
      "threaded-flange": {
            "title": "Threaded Flange Manufacturer in India | ASME B16.5 THRF | Remax Forge",
            "description": "Remax Forge — threaded flange manufacturer in India. ASME B16.5, NPT/BSPT threads, Class 150–2500, CS/SS/Alloy. No welding needed. Quote in 24 hrs.",
            "keywords": "threaded flange manufacturer india, THRF flange supplier, NPT threaded flange india, screwed flange manufacturer, screwed flange, threaded pipe flange, NPT flange, BSPT flange, threaded flange small bore",
            "name": "Threaded Flange",
            "desc": "Remax Forge — threaded flange manufacturer in India. ASME B16.5, NPT/BSPT threads, Class 150–2500, CS/SS/Alloy. No welding needed. Quote in 24 hrs."
      },
      "spectacle-blind-flange": {
            "title": "Spectacle Blind Flange Supplier | ASME B16.48 Spec Blind | Remax Forge",
            "description": "Remax Forge — spectacle blind flange supplier. ASME B16.48, Class 150–2500, CS/SS/Alloy. Paddle blind, spacer ring, figure-8. Same-day quote.",
            "keywords": "spectacle blind flange supplier, spec blind ASME B16.48, figure 8 blind flange, paddle blind flange india, figure 8 blind, paddle blank, spacer ring, isolation blind, spec blind dimensions",
            "name": "Spectacle Blind Flange",
            "desc": "Remax Forge — spectacle blind flange supplier. ASME B16.48, Class 150–2500, CS/SS/Alloy. Paddle blind, spacer ring, figure-8. Same-day quote."
      },
      "socket-weld-flange": {
            "title": "Socket Weld Flange Manufacturer | ASME B16.5 SWRF | Remax Forge India",
            "description": "Remax Forge — socket weld flange manufacturer. ASME B16.5, Class 150–2500, 1/2\" to 4\", CS/SS/Alloy. High-pressure small-bore applications. Quote in 24 hrs.",
            "keywords": "socket weld flange manufacturer, SWRF flange supplier india, socket weld raised face flange, SW flange ASME B16.5, socket weld flange small bore, SW flange high pressure, forged socket weld flange, SS316 socket weld flange",
            "name": "Socket Weld Flange Manufacturer",
            "desc": "Remax Forge — socket weld flange manufacturer. ASME B16.5, Class 150–2500, 1/2\" to 4\", CS/SS/Alloy. High-pressure small-bore applications. Quote in 24 hrs."
      },
      "butt-weld-elbow-fittings": {
            "title": "Butt Weld Elbow Manufacturer in India | 90° 45° LR SR | Remax Forge",
            "description": "Remax Forge — butt weld elbow manufacturer in India. 90° & 45°, LR & SR, ASME B16.9, 1/2\" to 48\", CS/SS/Alloy. IBR approved. Get quote in 24 hrs.",
            "keywords": "butt weld elbow manufacturer india, 90 degree butt weld elbow, LR elbow ASME B16.9, butt weld pipe elbow supplier, long radius elbow, short radius elbow, 3D elbow, 5D elbow, pipe elbow manufacturer india, seamless butt weld elbow",
            "name": "Butt Weld Elbow",
            "desc": "Remax Forge — butt weld elbow manufacturer in India. 90° & 45°, LR & SR, ASME B16.9, 1/2\" to 48\", CS/SS/Alloy. IBR approved. Get quote in 24 hrs."
      },
      "butt-weld-tee-fittings": {
            "title": "Butt Weld Tee Manufacturer in India | Equal & Reducing Tee | Remax Forge",
            "description": "Remax Forge — butt weld tee manufacturer in India. Equal & reducing tee, ASME B16.9, 1/2\" to 48\", CS/SS/Alloy/Duplex. Quote in 24 hrs.",
            "keywords": "butt weld tee manufacturer india, equal tee ASME B16.9, reducing tee supplier india, straight tee butt weld fitting, pipe tee fitting, BW tee, MSS SP-75 tee, CS tee fitting, SS tee manufacturer",
            "name": "Butt Weld Tee",
            "desc": "Remax Forge — butt weld tee manufacturer in India. Equal & reducing tee, ASME B16.9, 1/2\" to 48\", CS/SS/Alloy/Duplex. Quote in 24 hrs."
      },
      "concentric-reducer": {
            "title": "Concentric Reducer Manufacturer in India | ASME B16.9 | Remax Forge",
            "description": "Remax Forge — concentric reducer manufacturer in India. Concentric & eccentric, ASME B16.9, CS/SS/Duplex, all schedules. Quote in 24 hrs.",
            "keywords": "concentric reducer manufacturer india, ASME B16.9 concentric reducer, pipe reducer supplier india, BW concentric reducer, pipe reducer fitting, concentric reducer dimensions, A234 WPB reducer, SS reducer butt weld",
            "name": "Concentric Reducer",
            "desc": "Remax Forge — concentric reducer manufacturer in India. Concentric & eccentric, ASME B16.9, CS/SS/Duplex, all schedules. Quote in 24 hrs."
      },
      "eccentric-reducer": {
            "title": "Eccentric Reducer Supplier in India | ASME B16.9 | Remax Forge",
            "description": "Remax Forge — eccentric reducer supplier in India. ASME B16.9, CS/SS/Alloy/Duplex, all schedules. Expert pump suction solutions. Quote in 24 hrs.",
            "keywords": "eccentric reducer supplier india, eccentric reducer ASME B16.9, eccentric pipe reducer india, BW eccentric reducer, flat side up reducer, pump suction reducer, eccentric reducer dimensions, A234 WPB eccentric reducer",
            "name": "Eccentric Reducer",
            "desc": "Remax Forge — eccentric reducer supplier in India. ASME B16.9, CS/SS/Alloy/Duplex, all schedules. Expert pump suction solutions. Quote in 24 hrs."
      },
      "180-elbow": {
            "title": "180 Degree Elbow Manufacturer in India | Return Bend ASME B16.9 | Remax Forge",
            "description": "Remax Forge — 180 degree elbow (return bend) manufacturer in India. LR & SR, ASME B16.9, 1/2\" to 24\", CS/SS/Alloy. Quote in 24 hrs.",
            "keywords": "180 degree elbow manufacturer india, return bend elbow supplier, U bend pipe fitting india, 180 degree return bend ASME B16.9, return bend fitting, U-bend elbow, close return bend, open return bend, hairpin elbow",
            "name": "180 Degree Elbow",
            "desc": "Remax Forge — 180 degree elbow (return bend) manufacturer in India. LR & SR, ASME B16.9, 1/2\" to 24\", CS/SS/Alloy. Quote in 24 hrs."
      },
      "socket-weld-fittings": {
            "title": "Socket Weld Fittings Manufacturer in India | ASME B16.11 | Remax Forge",
            "description": "Remax Forge — socket weld fittings manufacturer in India. Elbow, tee, coupling, union, cross, reducer insert. ASME B16.11, Class 3000/6000/9000. CS/SS/Alloy.",
            "keywords": "socket weld fittings manufacturer india, SW fittings ASME B16.11, socket weld elbow tee coupling india, Class 3000 socket weld, forged socket weld fittings, high pressure fittings, socket weld class 6000, SW pipe fittings",
            "name": "Socket Weld Fittings",
            "desc": "Remax Forge — socket weld fittings manufacturer in India. Elbow, tee, coupling, union, cross, reducer insert. ASME B16.11, Class 3000/6000/9000. CS/SS/Alloy."
      },
      "forged-fittings": {
            "title": "Forged Fittings Manufacturer in India | ASME B16.11 | Remax Forge",
            "description": "Remax Forge — forged fittings manufacturer in India. Socket weld & threaded fittings, ASME B16.11, Class 2000–9000, CS/SS/Alloy. Exported to 40+ countries.",
            "keywords": "forged fittings manufacturer india, ASME B16.11 forged fittings, forged pipe fittings supplier, high pressure forged fittings india, forged steel fittings, Class 2000 3000 6000 9000 fittings, A105 forged fittings, threaded forged fittings",
            "name": "Forged Fittings",
            "desc": "Remax Forge — forged fittings manufacturer in India. Socket weld & threaded fittings, ASME B16.11, Class 2000–9000, CS/SS/Alloy. Exported to 40+ countries."
      },
      "socket-weld-elbow-fittings": {
            "title": "Socket Weld Elbow Supplier in India | 90° 45° SW Elbow | Remax Forge",
            "description": "Remax Forge — socket weld elbow supplier in India. 90° & 45° SW elbows, ASME B16.11, Class 3000/6000/9000, CS/SS/Alloy. Quote in 24 hrs.",
            "keywords": "socket weld elbow supplier india, SW 90 degree elbow B16.11, Class 3000 socket weld elbow, forged SW elbow india, socket weld 90 elbow, small bore elbow, forged elbow Class 6000, A182 F316 SW elbow",
            "name": "Socket Weld Elbow",
            "desc": "Remax Forge — socket weld elbow supplier in India. 90° & 45° SW elbows, ASME B16.11, Class 3000/6000/9000, CS/SS/Alloy. Quote in 24 hrs."
      },
      "alloy-steel-pipes": {
            "title": "Alloy Steel Pipe Manufacturer in India | P11 P22 P91 Pipes | Remax Forge",
            "description": "Remax Forge — alloy steel pipe manufacturer in India. P5/P9/P11/P22/P91, ASTM A335, seamless, IBR approved, power plant grade. Quote in 24 hrs.",
            "keywords": "alloy steel pipe manufacturer india, ASTM A335 P11 P22 P91 pipe, chrome moly pipe india, high temperature alloy steel pipe, P91 pipe, 9Cr-1Mo pipe, chrome moly pipe, seamless alloy pipe, boiler pipe India, power plant pipe",
            "name": "Alloy Steel Pipe",
            "desc": "Remax Forge — alloy steel pipe manufacturer in India. P5/P9/P11/P22/P91, ASTM A335, seamless, IBR approved, power plant grade. Quote in 24 hrs."
      }
};

      const key = productSlug || categorySlug;
      const config = productSEOConfig[key];

      if (config) {
        title = config.title;
        description = config.description;
        keywords = config.keywords;
        image = `${baseUrl}/images/${key}.webp`;

        const productSchema = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': config.name,
          'description': config.desc,
          'brand': {
            '@type': 'Brand',
            'name': 'Remax Forge & Fittings'
          },
          'manufacturer': {
            '@type': 'Organization',
            'name': 'Remax Forge & Fittings',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Mumbai',
              'addressRegion': 'Maharashtra',
              'addressCountry': 'IN'
            }
          }
        };
        schemas.push(productSchema);

        const productFaqs = flangeFaqs[key];
        if (productFaqs && productFaqs.length > 0) {
          const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': productFaqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          };
          schemas.push(faqSchema);
        }
      } else {
        title = `${productName} Manufacturer in India | Remax Forge & Fittings`;
        description = `${productName} manufacturer in India | ASME/ASTM certified | Available in SS, CS, Alloy Steel | Export to 45+ countries | Remax Forge`;
        image = `${baseUrl}/images/${key}.webp`;

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
      }

      schemas.push(makeBreadcrumbs([
        breadcrumbsHome,
        { name: categoryName, path: `/products/${categorySlug}` },
        { name: productName, path: pathname }
      ]));

    } else if (cleanPath.startsWith('/blogs/')) {
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

    // Index or Noindex
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Basic Meta
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Canonical
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

    // Inject JSON-LD Schema Tags
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
