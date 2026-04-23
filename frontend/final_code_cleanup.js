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
    
    // Robust replacement to clean up any image path
    const updatedContent = content.replace(/\/images\/([^"']+\.)(?:jpg|jpeg|png|avif|webp(?:\.webp)?)/gi, (match, p1) => {
      // Clean p1 if it has trailing dots or intermediate extensions
      let cleanP1 = p1.replace(/\.(jpg|jpeg|png|avif|webp)\.$/i, '.');
      return `/images/${cleanP1}webp`;
    });
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Updated references in ${filePath}`);
    }
  }
});
