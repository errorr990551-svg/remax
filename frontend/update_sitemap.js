import fs from 'fs';
import path from 'path';
import { marketAreaData } from './src/assets/data/marketAreaData.js';

// Kept industrial cities
const keptCities = Object.keys(marketAreaData);

const baseUrl = 'https://remaxforge.com';

function getPriority(url) {
  if (url === '/') return '1.0';
  if (url.startsWith('/products/')) return '0.9';
  if (['/about-us', '/contact', '/quality', '/certification'].includes(url)) return '0.8';
  if (url.startsWith('/tech-info/')) return '0.7';
  if (url === '/career') return '0.7';
  if (url.startsWith('/blogs/')) return '0.6';
  if (url === '/blogs') return '0.7';
  if (url === '/market-area') return '0.8';
  // City pages
  return '0.7';
}

function generateSitemap() {
  try {
    // 1. Read App.jsx and extract routes
    const appJsxPath = path.resolve('src/App.jsx');
    const appContent = fs.readFileSync(appJsxPath, 'utf8');
    
    const routeRegex = /path=['"]([^'"]+)['"]/g;
    const routes = [];
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      const route = match[1];
      // Filter out dynamic routes (like :cityName, :stateName/:cityName) and sitemap routes
      if (!route.includes(':') && !route.includes('sitemap')) {
        const formattedRoute = route.startsWith('/') ? route : '/' + route;
        routes.push(formattedRoute);
      }
    }

    // Remove potential duplicates
    const uniqueRoutes = [...new Set(routes)];

    // 2. Add the kept cities
    const cityRoutes = keptCities.map(city => `/${city}`);
    
    // Combine all URLs
    const urls = [...uniqueRoutes, ...cityRoutes];

    // Get current date for lastmod (YYYY-MM-DD format)
    const lastmod = new Date().toISOString().split('T')[0];

    // Generate XML content
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    urls.forEach(url => {
      xml += `  <url>
    <loc>${baseUrl}${url === '/' ? '' : url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${getPriority(url)}</priority>
  </url>\n`;
    });

    xml += `</urlset>`;

    const sitemapPath = path.resolve('public/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    console.log(`Sitemap updated successfully with ${urls.length} URLs!`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
