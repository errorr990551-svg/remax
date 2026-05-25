import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';

const PORT = 8085;
const distPath = path.resolve('dist');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

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
  return new Promise((resolve) => {
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

    server.listen(PORT, () => {
      resolve(server);
    });
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
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Track the pre-rendered homepage content separately so we don't overwrite dist/index.html early
  let prerenderedHomeHtml = '';

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const targetUrl = `http://localhost:${PORT}${url}`;
    console.log(`[${i + 1}/${urls.length}] Rendering: ${targetUrl}`);

    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });
      // Add a slight sleep to let dynamic JS updates settle
      await new Promise(r => setTimeout(r, 800));

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
    } finally {
      await page.close();
    }
  }

  // Save the pre-rendered homepage at the very end
  if (prerenderedHomeHtml) {
    fs.writeFileSync(path.join(distPath, 'index.html'), prerenderedHomeHtml, 'utf8');
    console.log('Saved pre-rendered homepage to dist/index.html');
  }

  console.log('Closing browser and stopping server...');
  await browser.close();
  server.close();
  console.log('Pre-rendering completed successfully!');
}

run().catch(err => {
  console.error('Error during pre-render:', err);
  process.exit(1);
});
