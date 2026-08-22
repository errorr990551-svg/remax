import fs from 'fs';
import path from 'path';
import { marketAreaData } from './src/assets/data/marketAreaData.js';
import { newFlangePagesData } from './src/assets/data/newFlangePagesData.js';
import { exportHubsData } from './src/assets/data/exportHubsData.js';
import { exportCitiesData } from './src/assets/data/exportCitiesData.js';

// Kept industrial cities
const keptCities = Object.keys(marketAreaData);

const baseUrl = 'https://remaxforge.com';

function normalizeUrl(url) {
  if (url === '/') return '/';
  let formatted = url.startsWith('/') ? url : '/' + url;
  if (!formatted.endsWith('/')) {
    formatted += '/';
  }
  return formatted;
}

function getPriority(normUrl) {
  if (normUrl === '/') return '1.0';
  if (normUrl.startsWith('/products/') || normUrl.startsWith('/product-details/')) return '0.9';
  if (['/about-us/', '/contact/', '/quality/', '/certification/', '/market-area/', '/export/'].includes(normUrl)) return '0.8';
  if (normUrl.startsWith('/export/')) return '0.8';
  if (normUrl.startsWith('/materials/') || normUrl.startsWith('/standards/') || normUrl.startsWith('/industries/')) return '0.8';
  if (normUrl.startsWith('/tech-info/')) return '0.7';
  if (normUrl === '/career/') return '0.7';
  if (normUrl === '/blogs/') return '0.7';
  if (normUrl.startsWith('/blogs/')) return '0.6';
  // City pages & commercial flange pages default
  return '0.7';
}

function generateSitemap() {
  try {
    // 1. Read App.jsx and extract static routes
    const appJsxPath = path.resolve('src/App.jsx');
    const appContent = fs.readFileSync(appJsxPath, 'utf8');
    
    const routeRegex = /path=['"]([^'"]+)['"]/g;
    const routes = [];
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      const route = match[1];
      // Filter out dynamic routes (like :cityName, :stateName/:cityName) and sitemap routes
      if (!route.includes(':') && !route.includes('sitemap')) {
        routes.push(normalizeUrl(route));
      }
    }

    // 2. Add commercial flange pages, city pages, export hubs & export cities
    const newFlangeRoutes = Object.keys(newFlangePagesData).map(normalizeUrl);
    const cityRoutes = keptCities.map(city => normalizeUrl(`/${city}`));
    const exportHubRoutes = Object.values(exportHubsData).map(h => normalizeUrl(h.url));
    const exportCityRoutes = Object.values(exportCitiesData).map(c => normalizeUrl(c.url));
    
    // Combine all URLs and deduplicate into canonical set
    const allNormUrls = [...routes, ...newFlangeRoutes, ...cityRoutes, ...exportHubRoutes, ...exportCityRoutes];
    const canonicalUrls = [...new Set(allNormUrls)].sort((a, b) => {
      if (a === '/') return -1;
      if (b === '/') return 1;
      return a.localeCompare(b);
    });

    // Get current date for lastmod (YYYY-MM-DD format)
    const lastmod = new Date().toISOString().split('T')[0];

    // Generate XML content
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    canonicalUrls.forEach(url => {
      const loc = `${baseUrl}${url === '/' ? '' : url}`;
      xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${getPriority(url)}</priority>
  </url>\n`;
    });

    xml += `</urlset>`;

    const sitemapPath = path.resolve('public/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    console.log(`Sitemap updated successfully with ${canonicalUrls.length} canonical URLs!`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
