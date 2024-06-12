import React, { useState, useEffect, useRef } from 'react';
import './GridGallery.css';

// Dynamically import all images and text files from the museum folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../museum', false, /_photo\.jpg$/));
const texts = importAll(require.context('../museum', false, /_info\.txt$/));

const GridGallery = ({ max_images, grid_size = '100px' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (showCard && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCard]);

  const handleImageClick = (image, index, event) => {
    event.stopPropagation();
    setLoading(true);
    fetch(texts[index])
      .then(response => response.text())
      .then(text => {
        // Remove the "Message: " part if it exists and exclude everything after "URL:"
        const cleanedText = text.replace(/^Message:\s*/, '').split("URL:")[0].trim();
        setSelectedImage(image);
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
  };

  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    setShowCard(false);
  };

  return (
    <div className="grid-gallery">
      {showCard && <div className="backdrop" onClick={handleBackdropClick}></div>}
      <div className="image-grid" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${grid_size}, 1fr))` }}>
        {images.slice(0, max_images).map((image, index) => (
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
        <div className="card" onClick={handleCardClick} ref={cardRef}>
          <button className="close-button" onClick={handleCloseButtonClick}>X</button>
          {loading ? (
            <div className="black-box">Loading...</div>
          ) : (
            <img src={selectedImage} alt="Selected" className="card-image" />
          )}
          <p className="card-text">{selectedText}</p>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
