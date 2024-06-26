import React from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';
import GridGallery from '../../components/GridGallery'; // Import the GridGallery component



const MAX_IMAGES = 300;

const Museum = () => {
    return (
        <div className="page">
            <div className="page-section">
                <h1><TypewriterText speed={10} textSize="20pt">Museum Gallery</TypewriterText></h1>

                <p><TypewriterText speed={10}>These images were selected and generated by the skygpu community.</TypewriterText></p>
                <GridGallery max_images={MAX_IMAGES} grid_size="100px" />
            </div> 
        </div>
    );
};

export default Museum;
