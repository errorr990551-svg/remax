import fs from 'fs';
import path from 'path';

const directory = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/src';

const walk = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

walk(directory, (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\/images\/([^"'\s)]+)\.(jpg|jpeg|png|avif)/gi, (match, p1, p2) => {
      return `/images/${p1}.webp`;
    });
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Updated references in ${filePath}`);
    }
  }
});
