import React, { useState, useEffect } from 'react';
import './GridGallery.css';

// Dynamically import all images and text files from the museum folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../museum', false, /_photo\.jpg$/));
const texts = importAll(require.context('../museum', false, /_info\.txt$/));

const GridGallery = ({ max_images, grid_size = '100px' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle the images array when the component mounts
    setShuffledImages(shuffleArray(images));
  }, []);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleImageClick = (image, index, event) => {
    event.stopPropagation();
    fetch(texts[index])
      .then(response => response.text())
      .then(text => {
        // Remove the "Message: " part if it exists and exclude everything after "URL:"
        const cleanedText = text.replace(/^Message:\s*/, '').split("URL:")[0].trim();
        setSelectedImage(image);
        setSelectedText(cleanedText);
        setShowCard(true);
      });
  };

  const handleCardClick = (event) => {
    event.stopPropagation();
  };

  const handleBackdropClick = () => {
    setShowCard(false);
  };

  return (
    <div className="grid-gallery">
      {showCard && <div className="backdrop" onClick={handleBackdropClick}></div>}
      <div className="image-grid" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${grid_size}, 1fr))` }}>
        {shuffledImages.slice(0, max_images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`museum-${index}`}
            className="grid-image"
            onClick={(event) => handleImageClick(image, index, event)}
          />
        ))}
      </div>
      {showCard && (
        <div className="card" onClick={handleCardClick}>
          <img src={selectedImage} alt="Selected" className="card-image" />
          <p className="card-text">{selectedText}</p>
        </div>
      )}
    </div>
  );
};

export default GridGallery;