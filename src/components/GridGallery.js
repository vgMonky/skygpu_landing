import React, { useState, useEffect, useRef } from 'react';
import './GridGallery.css';

// Dynamically import all images and text files from the museum folders
const importAll = (r) => r.keys().map(r);
const smallImages = importAll(require.context('../assets/museum_150px', false, /_photo_150px\.jpg$/));
const largeImages = importAll(require.context('../assets/museum_400px', false, /_photo_400px\.jpg$/));
const texts = importAll(require.context('../assets/museum', false, /_info\.txt$/));

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GridGallery = ({ max_images, grid_size = '100px' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (showCard && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCard]);

  const handleImageClick = (largeImagePath, textIndex, event) => {
    event.stopPropagation();
    setLoading(true);
    setLargeImage(largeImagePath); // Set the large image path
    fetch(texts[textIndex])
      .then(response => response.text())
      .then(text => {
        // Remove the "Message: " part if it exists and exclude everything after "URL:"
        const cleanedText = text.replace(/^Message:\s*/, '').split("URL:")[0].trim();
        setSelectedText(cleanedText);
        setLoading(false);
        setShowCard(true);
      })
      .catch(() => {
        setLoading(false); // Handle errors by stopping the loading indicator
      });
  };

  const handleCardClick = (event) => {
    event.stopPropagation();
  };

  const handleBackdropClick = () => {
    setShowCard(false);
    setLargeImage(null); // Clear the large image when the card is closed
  };

  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    setShowCard(false);
    setLargeImage(null); // Clear the large image when the card is closed
  };

  // Shuffle smallImages array
  const shuffledImages = shuffleArray([...smallImages]);

  return (
    <div className="grid-gallery">
      {showCard && <div className="backdrop" onClick={handleBackdropClick}></div>}
      <div className="image-grid" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${grid_size}, 1fr))` }}>
        {shuffledImages.slice(0, max_images).map((smallImage, index) => (
          <img
            key={index}
            src={smallImage}
            alt={`museum-${index}`}
            className="grid-image"
            loading="lazy" // Use lazy loading for grid images
            onClick={(event) => handleImageClick(largeImages[smallImages.indexOf(smallImage)], smallImages.indexOf(smallImage), event)}
          />
        ))}
      </div>
      {showCard && (
        <div className="card" onClick={handleCardClick} ref={cardRef}>
          <button className="close-button" onClick={handleCloseButtonClick}>X</button>
          {loading ? (
            <div className="black-box">Loading...</div>
          ) : (
            <img src={largeImage} alt="Selected" className="card-image" />
          )}
          <p className="card-text">{selectedText}</p>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
