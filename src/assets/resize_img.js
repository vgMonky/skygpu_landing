const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'museum'; // Input directory containing original images
const outputDir = 'museum_400px'; // Output directory for resized images
const maxWidth = 400; // Maximum width of resized images
const quality = 80; // Quality level for JPEG images (0-100)
const pngQuality = 6; // Quality level for PNG images (0-9)

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to resize and rename an image
const resizeImage = (inputPath, outputPath) => {
  const extension = path.extname(inputPath).toLowerCase();
  const pipeline = sharp(inputPath).resize({ width: maxWidth });

  if (extension === '.jpg' || extension === '.jpeg') {
    pipeline.jpeg({ quality });
  } else if (extension === '.png') {
    pipeline.png({ quality: pngQuality });
  }

  pipeline
    .toFile(outputPath)
    .then(() => console.log(`Resized and renamed ${path.basename(inputPath)} to ${path.basename(outputPath)}`))
    .catch(err => console.error(`Error resizing ${inputPath}: ${err}`));
};

// Read the input directory and process each image
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory ${inputDir}: ${err}`);
    return;
  }

  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const extension = path.extname(file);
    const basename = path.basename(file, extension);
    const outputPath = path.join(outputDir, `${basename}_${maxWidth}px${extension}`);

    // Only process image files
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extension.toLowerCase())) {
      resizeImage(inputPath, outputPath);
    }
  });
});