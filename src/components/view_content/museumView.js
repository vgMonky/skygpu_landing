import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state
import GridGallery from '../GridGallery'; // Import the GridGallery component


const MAX_IMAGES = 12;

const MuseumView = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('museum_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };

  return (
    <div className="view-content">
      <div className="view-title">
        <TypewriterText>Prompt Examples.</TypewriterText>
      </div>

      <div className="view-body">
        <p>
          <TypewriterText speed={10}>
          These images are part of the museum gallery. Check them out or feel free to generate more.
          </TypewriterText>
        </p>

        <GridGallery max_images={MAX_IMAGES} grid_size="80px" />

        <br></br>

        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /full_museum
          </TypewriterText>
        </button>

        <a className="learn-more" href='https://discord.gg/zuvk4SypMy' target="_blank" rel="noopener noreferrer">
          <TypewriterText hover={true} ticking={true} >
            /generate_images
          </TypewriterText>
        </a>
      </div>
    </div>
  );
};

export default MuseumView;
