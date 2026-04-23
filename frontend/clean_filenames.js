import fs from 'fs';
import path from 'path';

const directory = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/public/images';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.webp') {
      const fileNameWithoutExt = path.parse(file).name;
      // If filename is "foo.jpg", "foo.jpeg", "foo.png", etc.
      // Clean it to just "foo"
      const cleanName = fileNameWithoutExt.replace(/\.(jpg|jpeg|png|avif)$|(\.webp)$/i, '');
      const newFileName = `${cleanName}.webp`;
      
      if (file !== newFileName) {
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, newFileName);
        
        // Handle potential duplicates (e.g. if foo.jpg.webp and foo.png.webp both exist)
        if (fs.existsSync(newPath)) {
            console.log(`File ${newFileName} already exists, skipping rename of ${file}`);
        } else {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed ${file} to ${newFileName}`);
        }
      }
    }
  });
});
