// /src/component/view_content/intro.js
import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state

const AlphaView = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('alpha_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };

  return (
    <div className="view-content">
      <div className="view-title">
        <TypewriterText>Try the Alpha!</TypewriterText>
      </div>

      <div className="view-body">
        <p>
          <TypewriterText speed={10}>
          Today Skynet alpha runs on its own completely separate Antelope chain hosted by the dev team.
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
          Without marketing we have reached more than 17,000 text to image requests served, by four different GPU node operators who donated hardware, compute, development time and also invested to pay for dev bounties out of pocket.
          </TypewriterText>
        </p>

        <br />

        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /try_the_alpha
          </TypewriterText>
        </button>

        
      </div>
    </div>
  );
};

export default AlphaView;
