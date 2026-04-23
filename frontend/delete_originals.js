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
    
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.avif') {
      const filePath = path.join(directory, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting ${file}:`, err);
        } else {
          console.log(`Deleted original file: ${file}`);
        }
      });
    }
  });
});
