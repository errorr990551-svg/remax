import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/public/images';
const publicDir = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/public';
const srcDir = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/src';

const renamedMap = new Map();

// 1. Rename Brochure PDF
const oldBrochure = path.join(publicDir, 'Remax Brochure.pdf');
const newBrochure = path.join(publicDir, 'remax-forge-fittings-brochure.pdf');
if (fs.existsSync(oldBrochure)) {
  fs.renameSync(oldBrochure, newBrochure);
  console.log('Renamed brochure PDF on disk.');
}
renamedMap.set('Remax Brochure.pdf', 'remax-forge-fittings-brochure.pdf');
renamedMap.set('Remax%20Brochure.pdf', 'remax-forge-fittings-brochure.pdf');

// 2. Identify and rename images with spaces
if (fs.existsSync(imagesDir)) {
  const files = fs.readdirSync(imagesDir);
  files.forEach(file => {
    if (file.includes(' ')) {
      const newName = file.replace(/\s+/g, '-').toLowerCase();
      const oldPath = path.join(imagesDir, file);
      const newPath = path.join(imagesDir, newName);
      
      if (!fs.existsSync(newPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed image: "${file}" -> "${newName}"`);
      } else {
        fs.unlinkSync(oldPath); // delete duplicate with space
        console.log(`Deleted duplicate image with space: "${file}"`);
      }
      renamedMap.set(file, newName);
      renamedMap.set(encodeURIComponent(file), newName);
    }
  });
}

// 3. Scan and replace references in src/ recursively
const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
};

const updateFileReferences = (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanged = false;

    renamedMap.forEach((newVal, oldVal) => {
      // Create regex for old val
      const regex = new RegExp(oldVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
      if (regex.test(content)) {
        content = content.replace(regex, newVal);
        hasChanged = true;
        console.log(`Replacing reference: "${oldVal}" -> "${newVal}" in ${filePath}`);
      }
    });

    if (hasChanged) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
};

walkDir(srcDir, updateFileReferences);
// Also scan update_sitemap.js and index.html
updateFileReferences('c:/Users/amity/OneDrive/Desktop/Remax/frontend/index.html');
updateFileReferences('c:/Users/amity/OneDrive/Desktop/Remax/frontend/update_sitemap.js');

console.log('Asset renaming and reference updating completed successfully.');
