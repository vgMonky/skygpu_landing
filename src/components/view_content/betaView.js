// /src/component/view_content/intro.js
import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state

const BetaView = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('beta_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };

  return (
    <div className="view-content">
      <div className="view-title">
        <TypewriterText>Taking Skynet to Beta.</TypewriterText>
      </div>

      <div className="view-body">
        <p>
          <TypewriterText speed={10}>
            This secction will focus on what we need to do to launch beta 1.0:
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            -Open Moderation Model
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            -Storage Protocol
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            -Composable Pipeline / Request Protocol
          </TypewriterText>
        </p>
        <p>
          <TypewriterText speed={10}>
            -Compute Types
          </TypewriterText>
        </p>
        <br/>

        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /Learn_More
          </TypewriterText>
        </button>

        <br />
        <img src="https://avatars.githubusercontent.com/u/151031767?s=128&v=4" alt="Icon" className="navbar-icon" />
      </div>
    </div>
  );
};

export default BetaView;
