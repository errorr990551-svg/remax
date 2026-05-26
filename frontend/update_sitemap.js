import fs from 'fs';
import path from 'path';

// Kept industrial cities
const keptCities = [
  'mumbai', 'ahmedabad', 'pune', 'surat', 'chennai', 'hyderabad', 'bengaluru', 
  'visakhapatnam', 'vadodara', 'rajkot', 'nashik', 'nagpur', 'jaipur', 
  'thane', 'coimbatore', 'kochi', 'jamshedpur', 'raipur', 'gandhinagar', 'vijayawada',
  'rishikesh', 'haldwani', 'roorkee', 'haridwar', 'dehradun',
  'siliguri', 'durgapur', 'asansol', 'kolkata', 'kharagpur'
];

const urls = [
  "/",
  "/about-us",
  "/contact",
  "/quality",
  "/certification",
  "/career",
  "/market-area",
  "/blogs",
  
  // Blog posts
  "/blogs/alloy-steel-power-gen-guide",
  "/blogs/butt-weld-fittings-guide",
  "/blogs/forged-vs-cast-fittings",
  "/blogs/oil-and-gas-pipe-fittings-guide",
  "/blogs/pipe-flanges-guide",
  "/blogs/stainless-steel-grades-explained",

  // Tech info
  "/tech-info/chemical-composition",
  "/tech-info/dimensions",
  "/tech-info/mechanical-properties",
  "/tech-info/weight-chart",

  // Product pages
  // Flanges
  "/products/flanges/blind-flange",
  "/products/flanges/lap-joint-flange",
  "/products/flanges/long-weld-neck-flange",
  "/products/flanges/slip-on-flange",
  "/products/flanges/socket-weld-flange",
  "/products/flanges/spectacle-blind-flange",
  "/products/flanges/threaded-flange",
  "/products/flanges/weld-neck-flange",

  // Pipes
  "/products/pipes/alloy-steel-pipes",
  "/products/pipes/aluminium-pipe",
  "/products/pipes/brass-pipes",
  "/products/pipes/carbon-steel-pipes",
  "/products/pipes/copper-pipes",
  "/products/pipes/duplex-steel-superduplex-steel-pipe",
  "/products/pipes/hastelloy-pipes",
  "/products/pipes/incoloy-pipe",
  "/products/pipes/mild-steel-pipes",
  "/products/pipes/monel-pipe",
  "/products/pipes/nickel-pipe",
  "/products/pipes/stainless-steel-pipes",
  "/products/pipes/tantalum-pipe",
  "/products/pipes/titanium-pipe",

  // Tubes
  "/products/tubes/alloy-steel-tube",
  "/products/tubes/aluminium-tubes",
  "/products/tubes/brass-tube",
  "/products/tubes/carbon-steel-tubes",
  "/products/tubes/copper-tube",
  "/products/tubes/duplex-steel-super-duplex-steel-tube",
  "/products/tubes/hastelloy-tubes",
  "/products/tubes/incoloy-tubes",
  "/products/tubes/monel-tubes",
  "/products/tubes/nickel-tube",
  "/products/tubes/stainless-steel-tubes",
  "/products/tubes/tantalum-tubes",
  "/products/tubes/titanium-tubes",

  // Plates
  "/products/plates/aluminium-plate",
  "/products/plates/boiler-quality-plate",
  "/products/plates/carbon-steel-plate",
  "/products/plates/chequered-plate",
  "/products/plates/chrome-moly-plate",
  "/products/plates/corten-steel-plate",
  "/products/plates/hardox-plate",
  "/products/plates/manganese-plate",
  "/products/plates/nickel-alloy-plate",
  "/products/plates/offshore-steel-plate",
  "/products/plates/pressure-vessel-plate",
  "/products/plates/quard-plate",
  "/products/plates/quend-plate",
  "/products/plates/stainless-steel-plate",

  // Round Bar
  "/products/round-bar/alloy-steel-bar",
  "/products/round-bar/carbon-steel-bar",
  "/products/round-bar/duplex-steel-bar",
  "/products/round-bar/nickel-alloy-bar",
  "/products/round-bar/stainless-steel-bar",

  // Buttweld fittings
  "/products/buttweld-fittings/180-elbow",
  "/products/buttweld-fittings/45-elbow",
  "/products/buttweld-fittings/90-elbow",
  "/products/buttweld-fittings/butt-weld-bends-fittings",
  "/products/buttweld-fittings/butt-weld-elbow-fittings",
  "/products/buttweld-fittings/butt-weld-reducers-fittings",
  "/products/buttweld-fittings/butt-weld-tee-fittings",
  "/products/buttweld-fittings/concentric-reducer",
  "/products/buttweld-fittings/eccentric-reducer",
  "/products/buttweld-fittings/oval-caps",
  "/products/buttweld-fittings/reducing-tee",
  "/products/buttweld-fittings/straight-tee",

  // Socket weld fittings
  "/products/socket-weld-fittings/socket-weld-bushing-fittings",
  "/products/socket-weld-fittings/socket-weld-cap-fittings",
  "/products/socket-weld-fittings/socket-weld-coupling-fittings",
  "/products/socket-weld-fittings/socket-weld-cross-fittings",
  "/products/socket-weld-fittings/socket-weld-elbow-fittings",
  "/products/socket-weld-fittings/socket-weld-lateral-tee-fittings",
  "/products/socket-weld-fittings/socket-weld-nipple-fittings",
  "/products/socket-weld-fittings/socket-weld-plug-fittings",
  "/products/socket-weld-fittings/socket-weld-reducer-insert-fittings",
  "/products/socket-weld-fittings/socket-weld-tee-fittings",
  "/products/socket-weld-fittings/socket-weld-union-fittings",

  // Add the 20 kept cities
  ...keptCities.map(city => `/${city}`)
];

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

const lastmod = new Date().toISOString().split('T')[0];

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

fs.writeFileSync(path.resolve('public/sitemap.xml'), xml);
console.log('Sitemap updated successfully!');
