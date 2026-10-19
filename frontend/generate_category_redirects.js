import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');

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

console.log('Category redirect index.html files generated successfully in dist/.');
