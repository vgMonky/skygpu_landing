// /src/component/view_content/intro.js
import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state

const IntroView = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('intro_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };

  return (
    <div className="view-content">
      <div className="view-title">
        <TypewriterText>Introduction.</TypewriterText>
      </div>

      <div className="view-body">
        <p>
          <TypewriterText speed={10}>
            Skynet is a community driven decentralized compute platform built on top of the Antelope blockchain stack.
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            We want to create a decentralized alternative to big-AI tools and platforms, following the principles of the original cypherpunks.
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            To learn more in depth about our vision, contributors, and overall ideas, enter the link below.
          </TypewriterText>
        </p>
        <br />

        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /learn_more
          </TypewriterText>
        </button>

        
        
      </div>
    </div>
  );
};

export default IntroView;
