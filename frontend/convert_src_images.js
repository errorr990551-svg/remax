import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = 'c:/Users/amity/OneDrive/Desktop/Remax/frontend/src/assets/images';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const filePath = path.join(directory, file);
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.avif') {
      const fileNameWithoutExt = path.parse(file).name;
      const outputFilePath = path.join(directory, `${fileNameWithoutExt}.webp`);
      
      sharp(filePath)
        .webp()
        .toFile(outputFilePath, (err, info) => {
          if (err) {
            console.error(`Error converting ${file}:`, err);
          } else {
            console.log(`Converted ${file} to WebP`);
          }
        });
    }
  });
});
