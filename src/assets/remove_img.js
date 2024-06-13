const fs = require('fs');
const path = require('path');

// Function to remove all images from a directory
const removeAllImages = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Could not list the directory: ${err}`);
      return;
    }

    files.forEach((file, index) => {
      const filePath = path.join(directory, file);

      // Check if the file is an image
      if (/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(file)) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Could not delete file: ${filePath} - ${err}`);
          } else {
            console.log(`Deleted file: ${filePath}`);
          }
        });
      }
    });
  });
};

// Specify the directory to remove images from
const directoryPath = path.join(__dirname, './museum');

// Call the function
removeAllImages(directoryPath);
