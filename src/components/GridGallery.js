import React, { useState, useEffect, useRef } from 'react';
import { useSettings } from '../states/settings_state'; // Import the settings context
import './GridGallery.css';
import hoverSound from '../assets/audio/hover.mp3';
import enterSound from '../assets/audio/enter.mp3';

const importAll = (r) => r.keys().map(r);
const smallImages = importAll(require.context('../assets/museum_150px', false, /_photo_150px\.jpg$/));
const largeImages = importAll(require.context('../assets/museum_400px', false, /_photo_400px\.jpg$/));
const texts = importAll(require.context('../assets/museum', false, /_info\.txt$/));

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
  const [shuffledImages, setShuffledImages] = useState([]);
  const { muteEnabled } = useSettings(); // Access the muteEnabled state
  const [hoverAudio] = useState(new Audio(hoverSound));
  const audioRef = useRef(hoverAudio);
  const [clickAudio] = useState(new Audio(enterSound));
  const clickAudioRef = useRef(clickAudio);

  useEffect(() => {
    shuffleImages();
  }, []);

  const shuffleImages = () => {
    const shuffledArray = shuffleArray([...smallImages]);
    setShuffledImages(shuffledArray);
  };

  useEffect(() => {
    if (showCard && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCard]);

  const handleImageClick = (largeImagePath, textIndex, event) => {
    event.stopPropagation();
    if (!muteEnabled) {
      clickAudioRef.current.currentTime = 0; // Reset audio to start
      clickAudioRef.current.play();
    }
    setLoading(true);
    setLargeImage(largeImagePath);
    fetch(texts[textIndex])
      .then(response => response.text())
      .then(text => {
        const cleanedText = text.replace(/^Message:\s*/, '').split("URL:")[0].trim();
        setSelectedText(cleanedText);
        setLoading(false);
        setShowCard(true);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleCardClick = (event) => {
    event.stopPropagation();
  };

  const handleBackdropClick = () => {
    setShowCard(false);
    setLargeImage(null);
  };

  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    setShowCard(false);
    setLargeImage(null);
  };

  const handleImageHover = () => {
    if (!muteEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleImageLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    return () => {
      clickAudioRef.current.pause();
      clickAudioRef.current.currentTime = 0;
    };
  }, []);

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
            loading="lazy"
            onClick={(event) =>
              handleImageClick(
                largeImages[smallImages.indexOf(smallImage)],
                smallImages.indexOf(smallImage),
                event
              )
            }
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
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
