import React, { useState } from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';

// Dynamically import all images and text files from the museum folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../museum', false, /_photo\.jpg$/));
const texts = importAll(require.context('../../museum', false, /_info\.txt$/));

const Museum = () => {
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
        <div className="page">
            {showCard && <div className="backdrop" onClick={handleBackdropClick}></div>}
            <div className="page-section">
                <h1><TypewriterText speed={10} textSize="20pt">Museum Gallery Examples</TypewriterText></h1>
            </div> 

            <div className="page-section">
                <p><TypewriterText speed={10}>This images were created and selected by the skygpu community.</TypewriterText></p>
                <div className="image-grid">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`museum-${index}`}
                            className="grid-image"
                            onClick={(event) => handleImageClick(image, index, event)}
                        />
                    ))}
                </div>
            </div> 

            {showCard && (
                <div className="card"  onClick={handleCardClick}>
                    <img src={selectedImage} alt="Selected" className="card-image" />
                    <p className="card-text">{selectedText}</p>
                </div>
            )}
        </div>
    );
};

export default Museum;
