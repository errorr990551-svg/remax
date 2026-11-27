// Quote popup guard - part of `npm run build`, so it runs on every deploy.
//
// SITE RULE: the Get Quote popup is the website's only lead source. It must open and
// submit on every page, on desktop and on mobile. This script fails the build (so the
// deploy stops) if:
//   1. any built page is missing the floating "Get Quote" button or the mobile sticky bar, or
//   2. on a sample of every page template, in a real browser, the popup does not open,
//      does not POST /contact with the visitor's details, or shows no success message.
// The POST is intercepted here, so no real enquiry is sent.
//
// Do not weaken or remove this check. See CLAUDE.md -> "Quote popup".
import http from 'http';
import fs from 'fs';
import path from 'path';
import process from 'process';
import puppeteer from 'puppeteer-core';

const dist = path.resolve('dist');
const fail = (msg) => { console.error(`\n✗ Quote popup check FAILED: ${msg}\n  See CLAUDE.md -> "Quote popup".`); process.exit(1); };

// 1. Static: every real page (not a redirect stub) ships both quote entry points
const pages = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name === 'index.html') pages.push(full);
  }
};
walk(dist);
const routes = [];
const missing = [];
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  if (/http-equiv="refresh"/i.test(html)) continue;
  const route = '/' + path.relative(dist, path.dirname(file)).split(path.sep).join('/') + '/';
  routes.push(route.replace(/^\/\/$/, '/'));
  if (!html.includes('aria-label="Get Instant Quote"') || !html.includes('aria-label="Get Quote"')) missing.push(route);
}
if (!routes.length) fail('no built pages found in dist/');
if (missing.length) fail(`${missing.length} page(s) have no Get Quote button: ${missing.slice(0, 10).join(', ')}`);

// 2. Browser: one page per template (first path segment + depth), plus key pages
const sample = new Map([['/', '/'], ['/contact/', '/contact/'], ['/about-us/', '/about-us/'], ['/brochure/', '/brochure/']]);
for (const r of routes.sort()) {
  const seg = r.split('/').filter(Boolean);
  const key = seg.length > 1 ? `${seg[0]}:${seg.length}` : 'top-level';
  if (!sample.has(key)) sample.set(key, r);
}
const testRoutes = [...new Set(sample.values())].filter((r) => routes.includes(r));

const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json' };
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'));
const server = http.createServer((req, res) => {
  let p = path.join(dist, decodeURIComponent(req.url.split('?')[0]));
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(indexHtml); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({
  // Same browser lookup as prerender.js
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ].find((p) => fs.existsSync(p)) || 'google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' };

// Opens a popup with `open`, fills the visible modal form, submits, and checks the POST + success message
const testPopup = async (route, viewport, open, label) => {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  // Stop the auto-popup from racing the click; the auto-popup itself is checked separately
  await page.evaluateOnNewDocument(() => localStorage.setItem('remax_rfq_popup_dismissed', 'true'));
  await page.setRequestInterception(true);
  let posted = null;
  page.on('request', (req) => {
    const url = req.url();
    if (url.endsWith('/contact') && req.method() === 'OPTIONS') return req.respond({ status: 204, headers: CORS });
    if (url.endsWith('/contact') && req.method() === 'POST') {
      posted = req.postData();
      return req.respond({ status: 200, headers: CORS, contentType: 'application/json', body: '{"success":true,"message":"Quote request received!"}' });
    }
    // Keep the check offline and fast: only the local site loads
    return url.startsWith(origin) || url.startsWith('data:') ? req.continue() : req.abort();
  });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  try {
    await page.goto(origin + route, { waitUntil: 'networkidle0', timeout: 30000 });
    // Retry until hydrated: a click on prerendered HTML before React attaches does nothing
    let form = null;
    for (let i = 0; i < 20 && !form; i++) {
      await open(page);
      await new Promise((r) => setTimeout(r, 250));
      form = await page.evaluateHandle(() => [...document.querySelectorAll('.fixed input[name="name"]')]
        .find((el) => el.offsetParent !== null)?.closest('form') || null);
      if (!(await form.evaluate((f) => !!f))) form = null;
    }
    if (!form) throw new Error('popup did not open');
    const values = { name: 'Build Check', company: 'Build Check', phone: '9999999999', email: 'check@example.com', location: 'Mumbai', message: 'build check' };
    for (const [name, value] of Object.entries(values)) {
      const input = await form.$(`[name="${name}"]`);
      if (input) await input.type(value);
    }
    await (await form.$('button[type="submit"]')).click();
    await page.waitForFunction(() => /Quote Request Received|Quote request received|success/i.test(document.body.innerText), { timeout: 5000 })
      .catch(() => { throw new Error('no success message after submit'); });
    if (!posted) throw new Error('form did not POST /contact');
    const body = JSON.parse(posted);
    if (body.name !== values.name || body.phone !== values.phone || body.email !== values.email) throw new Error(`POST body missing visitor details: ${posted.slice(0, 200)}`);
    if (errors.length) throw new Error(`page error: ${errors[0]}`);
  } catch (e) {
    throw new Error(`${label} on ${route}: ${e.message}`);
  } finally {
    await page.close();
  }
};

const DESKTOP = { width: 1366, height: 800 };
const MOBILE = { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 1 };
const click = (selector) => (page) => page.evaluate((s) => document.querySelector(s)?.click(), selector);

try {
  for (const route of testRoutes) {
    await testPopup(route, DESKTOP, click('button[aria-label="Get Instant Quote"]'), 'desktop Get Quote');
    await testPopup(route, MOBILE, click('button[aria-label="Get Quote"]'), 'mobile Get Quote');
  }
  await testPopup('/', DESKTOP, (page) => page.evaluate(() => window.openCallbackPopup?.()), 'Request Callback popup');

  // Desktop auto-popup for first-time visitors (opens after 1 s); fresh profile so no "dismissed" flag
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport(DESKTOP);
  await page.setRequestInterception(true);
  page.on('request', (req) => (req.url().startsWith(origin) ? req.continue() : req.abort()));
  await page.goto(origin + '/', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForFunction(() => [...document.querySelectorAll('.fixed input[name="name"]')].some((el) => el.offsetParent !== null), { timeout: 8000 })
    .catch(() => { throw new Error('desktop auto-popup did not open on the home page within 8 s'); });
  await ctx.close();
} catch (e) {
  await browser.close();
  server.close();
  fail(e.message);
}

await browser.close();
server.close();
console.log(`✓ Quote popup: ${routes.length} pages have Get Quote; popup opened and submitted on ${testRoutes.length} page templates (desktop + mobile), callback popup and auto-popup OK`);
