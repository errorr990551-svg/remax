// Contact gate guard - part of `npm run build`, so it runs on every deploy.
//
// SITE RULE: phone numbers, WhatsApp and email addresses must only be revealed to
// visitors who have submitted the Get Quote / contact form. They live ONLY in
// src/assets/data/contactDetails.js (base64-encoded) and are rendered only when
// the visitor is unlocked. This script fails the build if any of them shows up in
// plain text anywhere else: source files, static HTML, or the built site.
//
// Do not weaken or remove this check. See CLAUDE.md -> "Contact gate".
import fs from 'fs';
import path from 'path';
import process from 'process';

const SELF = path.resolve('check_contact_gate.js');

// Built from parts so this file itself never contains the values it searches for
const PHONE_DIGITS = ['97699', '83108'];
const LANDLINE_DIGITS = ['6610', '9211'];
const RULES = [
  { name: 'mobile number', re: new RegExp(PHONE_DIGITS.join('[\\s.-]*')) },
  { name: 'landline number', re: new RegExp(LANDLINE_DIGITS.join('[\\s.-]*')) },
  { name: 'company email address', re: new RegExp('[A-Za-z0-9._%+-]+@remax' + 'forge\\.com', 'i') },
  { name: 'company Gmail address', re: new RegExp('remax' + 'forge@gmail\\.com', 'i') },
  { name: 'WhatsApp link', re: /wa\.me\/\d|api\.whatsapp\.com\/send|whatsapp:\/\/send/i },
  { name: 'tel: link with a number', re: /tel:\s*\+?\d/i },
  { name: 'mailto: link with an address', re: /mailto:\s*[A-Za-z0-9._%+-]+@/i },
];

const TEXT_EXT = /\.(jsx?|mjs|cjs|tsx?|json|html?|css|xml|txt|md)$/i;

const walk = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (TEXT_EXT.test(entry.name)) out.push(full);
  }
  return out;
};

const files = [
  ...walk('src'),
  ...walk('public').filter((f) => !f.startsWith(path.join('public', 'images'))),
  'index.html',
  ...walk('dist'),
].filter((f) => fs.existsSync(f) && path.resolve(f) !== SELF);

const violations = [];
for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const rule of RULES) {
      const m = line.match(rule.re);
      if (m) violations.push(`${file}:${i + 1}  ${rule.name}: "${m[0]}"`);
    }
  });
}

if (violations.length) {
  console.error('\n✖ CONTACT GATE VIOLATION - build stopped.\n');
  console.error('Contact details (phone / WhatsApp / email) must only be shown after the visitor');
  console.error('submits the Get Quote form. Use getContactDetails() from');
  console.error('src/assets/data/contactDetails.js inside an `isUnlocked` branch instead of writing');
  console.error('them in plain text. See CLAUDE.md -> "Contact gate".\n');
  violations.slice(0, 50).forEach((v) => console.error('  ' + v));
  if (violations.length > 50) console.error(`  ...and ${violations.length - 50} more`);
  process.exit(1);
}
console.log(`✓ Contact gate: no exposed contact details in ${files.length} files.`);
