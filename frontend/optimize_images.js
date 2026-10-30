// Resize + recompress images in place (same filenames, so no references change).
// Only overwrites a file when the result is >20% smaller, so re-running is effectively a no-op.
//   node optimize_images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS = ['public/images', 'src/assets/images'];
const MAX_SIDE = 1600;   // largest any photo is displayed (full-width hero on desktop)
const LOGO_SIDE = 400;   // logos are shown at <= ~160px
const QUALITY = 75;

// Client logos from the "trusted by" marquees + the company logo
const pageSrc = fs.readFileSync('src/assets/pages/CityPageStrategy.jsx', 'utf8');
const logoList = (pageSrc.match(/const clientLogos = \[([\s\S]*?)\];/) || [, ''])[1];
const logos = new Set([...logoList.matchAll(/\/images\/([^"]+)"/g)].map(m => m[1]));
logos.add('REMAX_FORGE_AND_FITTINGS-01.webp');

let saved = 0;
for (const dir of DIRS) {
  for (const file of fs.readdirSync(dir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const full = path.join(dir, file);
    const input = fs.readFileSync(full);
    const meta = await sharp(input).metadata();
    const limit = logos.has(file) ? LOGO_SIDE : MAX_SIDE;

    let img = sharp(input).rotate();
    if (Math.max(meta.width, meta.height) > limit) {
      img = img.resize({ width: limit, height: limit, fit: 'inside', withoutEnlargement: true });
    }
    if (meta.format === 'jpeg') img = img.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true });
    else if (meta.format === 'webp') img = img.webp({ quality: QUALITY, alphaQuality: 90, effort: 6 });
    else if (meta.format === 'png') img = img.png({ compressionLevel: 9, palette: true });
    else continue;

    const out = await img.toBuffer();
    if (out.length < input.length * 0.8) {
      fs.writeFileSync(full, out);
      saved += input.length - out.length;
      console.log(`${file}: ${(input.length / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB`);
    }
  }
}
console.log(`Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
