// No-fake-prices guard - part of `npm run build`, so it runs on every deploy.
// SITE RULE: never publish prices, stock, offers or ratings in structured data
// (JSON-LD). Fails the build if any built page's schema contains them.
// Do not weaken or remove this check. See CLAUDE.md -> "No fake prices".
import fs from 'fs';
import path from 'path';
import process from 'process';

const BANNED = /"@type":\s*"(Offer|AggregateOffer|AggregateRating|Review)"|"(lowPrice|highPrice|price|offerCount|availability|ratingValue|reviewCount)":/;
const bad = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) {
      const html = fs.readFileSync(full, 'utf8');
      for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
        if (BANNED.test(json)) { bad.push(path.relative('dist', full)); break; }
      }
    }
  }
};
walk(path.resolve('dist'));
if (bad.length) {
  console.error(`\n✗ No-fake-prices check FAILED: price/stock/offer/rating schema on ${bad.length} page(s): ${bad.slice(0, 10).join(', ')}\n  See CLAUDE.md -> "No fake prices".`);
  process.exit(1);
}
console.log('✓ No fake prices: no price, stock, offer or rating schema on any page');
