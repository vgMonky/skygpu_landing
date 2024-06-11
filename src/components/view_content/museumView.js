import React, { useState } from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state
import '../main_content/main_content.css';

// Dynamically import all images and text files from the museum folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../museum', false, /_photo\.jpg$/));
const texts = importAll(require.context('../../museum', false, /_info\.txt$/));

// Set a constant for the maximum number of images to display
const MAX_IMAGES = 9;

const MuseumView = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('museum_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleImageClick = (image, index, event) => {
      event.stopPropagation();
      fetch(texts[index])
          .then(response => response.text())
          .then(text => {
              setSelectedImage(image);
              setSelectedText(text);
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
    <div className="view-content">
        {showCard && <div className="backdrop" onClick={handleBackdropClick}></div>}
      <div className="view-title">
        <TypewriterText>Prompt Examples.</TypewriterText>
      </div>

      <div className="view-body">
        <p>
          <TypewriterText speed={10}>
          This images are part of the museum gallery. Check them out or feel free to generate more.
          </TypewriterText>
        </p>

        <div className="image-grid">
            {images.slice(0, MAX_IMAGES).map((image, index) => (
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
        <br></br>

        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /full_museum
          </TypewriterText>
        </button>

        <a className="learn-more" href='https://discord.gg/zuvk4SypMy' target="_blank" rel="noopener noreferrer">
          <TypewriterText hover={true} ticking={true} orange={true}>
            /generate_images
          </TypewriterText>
        </a>
      </div>
    </div>
  );
};

export default MuseumView;




