import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';

let PORT = 0;
const distPath = path.resolve('dist');
const getBrowserPath = () => {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  const candidatePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];
  for (const p of candidatePaths) {
    if (fs.existsSync(p)) return p;
  }
  return 'google-chrome';
};
const edgePath = getBrowserPath();

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
};

// 1. Vite build is run externally before calling this script

// Read the original index.html into memory so we can serve it as the SPA fallback
const originalIndexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

// 2. Start a local server to serve the dist directory
function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      let filePath = path.join(distPath, urlPath);

      // SPA routing fallback: if path has no file extension and file does not exist, serve original index.html template
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        const potentialHtml = path.join(filePath, 'index.html');
        if (fs.existsSync(potentialHtml) && urlPath !== '/') {
          filePath = potentialHtml;
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(originalIndexHtml);
          return;
        }
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    });

    server.listen(0, () => {
      PORT = server.address().port;
      resolve(server);
    });

    server.on('error', reject);
  });
}

async function run() {
  const server = await startServer();
  console.log(`Server started on port ${PORT}`);

  // Parse URLs from sitemap.xml
  const sitemapPath = path.resolve('public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('sitemap.xml not found! Run update_sitemap.js first.');
    server.close();
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [];
  const matches = sitemapContent.matchAll(/<loc>https:\/\/remaxforge\.com([^<]*)<\/loc>/g);
  for (const match of matches) {
    urls.push(match[1] || '/');
  }

  console.log(`Found ${urls.length} URLs in sitemap to pre-render.`);

  // Launch headless browser using Edge path
  console.log('Launching headless Edge browser...');
  
  const launchBrowser = async () => {
    return await puppeteer.launch({
      executablePath: edgePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-component-update',
        '--disable-default-apps',
        '--disable-domain-reliability',
        '--disable-extensions',
        '--disable-features=AudioServiceOutOfProcess',
        '--disable-hang-monitor',
        '--disable-ipc-flooding-protection',
        '--disable-popup-blocking',
        '--disable-prompt-on-repost',
        '--disable-renderer-backgrounding',
        '--disable-sync',
        '--force-color-profile=srgb',
        '--metrics-recording-only',
        '--no-first-run',
        '--safebrowsing-disable-auto-update',
        '--enable-automation',
        '--password-store=basic',
        '--use-mock-keychain'
      ]
    });
  };

  let browser = await launchBrowser();

  const createOptimizedPage = async (b) => {
    const p = await b.newPage();
    await p.setViewport({ width: 1440, height: 900 });
    await p.setRequestInterception(true);
    p.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['image', 'media', 'font'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });
    return p;
  };

  // Support fast skip if SKIP_PRERENDER is enabled
  if (process.env.SKIP_PRERENDER === 'true') {
    console.log('⚡ SKIP_PRERENDER is set. Skipping Puppeteer pre-rendering.');
    server.close();
    // Still generate category redirects
    generateCategoryRedirects();
    return;
  }

  // Track the pre-rendered homepage content separately
  let prerenderedHomeHtml = '';
  const CONCURRENCY = parseInt(process.env.PRERENDER_CONCURRENCY || '6', 10);
  console.log(`🚀 Starting high-speed parallel pre-rendering with ${CONCURRENCY} workers...`);

  let currentIndex = 0;
  let completedCount = 0;

  async function worker() {
    let page = await createOptimizedPage(browser);
    while (true) {
      const idx = currentIndex++;
      if (idx >= urls.length) {
        try { await page.close(); } catch (_) {}
        break;
      }
      const url = urls[idx];
      const targetUrl = `http://localhost:${PORT}${url}`;

      // Periodically recycle page to release memory
      if (idx > 0 && idx % 35 === 0) {
        try { await page.close(); } catch (_) {}
        page = await createOptimizedPage(browser);
      }

      try {
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 12000 });
        await page.waitForSelector('#root > *', { timeout: 3000 }).catch(() => {});
        const html = await page.content();

        if (url === '/') {
          prerenderedHomeHtml = html;
        } else {
          const routeFolder = path.join(distPath, url);
          if (!fs.existsSync(routeFolder)) {
            fs.mkdirSync(routeFolder, { recursive: true });
          }
          fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf8');
        }
      } catch (e) {
        console.error(`Failed to pre-render ${url}:`, e.message);
      }

      completedCount++;
      if (completedCount % 50 === 0 || completedCount === urls.length) {
        console.log(`[${completedCount}/${urls.length}] Rendered: ${targetUrl}`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  // Save the pre-rendered homepage at the very end
  if (prerenderedHomeHtml) {
    fs.writeFileSync(path.join(distPath, 'index.html'), prerenderedHomeHtml, 'utf8');
    console.log('Saved pre-rendered homepage to dist/index.html');
  }

  generateCategoryRedirects();

  console.log('Closing browser and stopping server...');
  try {
    await browser.close();
  } catch (_) {}
  server.close();
  console.log('Pre-rendering completed successfully!');
}

function generateCategoryRedirects() {
  const categoryRedirects = [
    { dir: 'products', target: '/products/flanges/' },
    { dir: 'products/buttweld-fittings', target: '/products/buttweld-fittings/butt-weld-elbow-fittings/' },
    { dir: 'materials', target: '/materials/carbon-steel-flanges/' },
    { dir: 'industries', target: '/industries/oil-and-gas/' },
    { dir: 'product-details', target: '/product-details/boiler-quality-plate/' },
    { dir: 'tech-info', target: '/tech-info/dimension-chart/' },
    { dir: 'about', target: '/about-us/' },
    { dir: 'certificates', target: '/certification/' }
  ];

  categoryRedirects.forEach(({ dir, target }) => {
    const targetDir = path.join(distPath, dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=${target}">
  <link rel="canonical" href="https://remaxforge.com${target}">
  <title>Redirecting...</title>
  <script>window.location.replace("${target}");</script>
</head>
<body>
  <p>Redirecting to <a href="${target}">${target}</a>...</p>
</body>
</html>`;
    fs.writeFileSync(path.join(targetDir, 'index.html'), redirectHtml, 'utf8');
  });
  console.log('Category redirect index.html files generated successfully.');
}

run().catch(err => {
  console.error('Error during pre-render:', err);
  process.exit(1);
});
