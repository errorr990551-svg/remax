import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

let PORT = 0;
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
};

const originalIndexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      let filePath = path.join(distPath, urlPath);

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

const targetUrls = [
  '/visakhapatnam/',
  '/vijayawada/',
  '/guntur/',
  '/nellore/',
  '/kurnool/',
  '/itanagar/',
  '/naharlagun/',
  '/pasighat/',
  '/tawang/',
  '/ziro/',
  '/market-area/andhra-pradesh/',
  '/market-area/arunachal-pradesh/',
  '/market-area/'
];

async function run() {
  const server = await startServer();
  console.log(`Server started on port ${PORT}`);

  console.log(`Pre-rendering ${targetUrls.length} city & hub pages...`);

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (let i = 0; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    const fullUrl = `http://localhost:${PORT}${url}`;
    console.log(`[${i + 1}/${targetUrls.length}] Rendering: ${fullUrl}`);

    try {
      await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 25000 });
      await new Promise(r => setTimeout(r, 600));

      const html = await page.content();
      const routeFolder = path.join(distPath, url);
      if (!fs.existsSync(routeFolder)) {
        fs.mkdirSync(routeFolder, { recursive: true });
      }
      fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf8');
      console.log(`  -> Saved ${path.join(routeFolder, 'index.html')} (${html.length} chars)`);
    } catch (e) {
      console.error(`Failed to pre-render ${url}:`, e.message);
    }
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering of strategy pages completed!');
}

run().catch(err => {
  console.error('Fatal pre-render error:', err);
  process.exit(1);
});
