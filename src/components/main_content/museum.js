/* /src/component/main_component/museum.js */
import React from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';

// Dynamically import all images from the museum folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../museum', false, /\.(png|jpe?g|svg)$/));

const Museum = () => {
    return (
        <div className="page">
            <div className="page-section">
                <h1><TypewriterText speed={10} textSize="20pt">Museum Gallery Examples</TypewriterText></h1>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>This images were created and selected by the skygpu community.</TypewriterText></h1>
                <div className="image-grid">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`museum-${index}`} className="grid-image" />
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Museum;