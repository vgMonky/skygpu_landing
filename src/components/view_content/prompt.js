// /src/component/view_content/intro.js
import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';
import { useMain } from '../../states/main_state'; // Import the custom hook to access main state
import { useViewerState } from '../../states/viewer_state'; // Import the custom hook to access viewer state



const Prompt = () => {
  const { setCurrentMain } = useMain(); // Get the function to update the main state
  const { setViewer } = useViewerState(); // Get the function to update the viewer state

  const handleLearnMoreClick = () => {
    setCurrentMain('museum_main'); // Set the currentMain state to "intro_main"
    setViewer('none'); // Set the viewerState to "intro"
  };
  
    return (
        <div >
          <div className="view-title">
            <TypewriterText>Prompt Example</TypewriterText>
          </div>
          <br></br>
        <img src="https://avatars.githubusercontent.com/u/151031767?s=400&v=4"></img>
        <p><TypewriterText speed={10}>"prompt": "skynet terminator skull metal slug pixel art neon colors",</TypewriterText></p>
        <p><TypewriterText speed={10}>"model": "prompthero/openjourney",</TypewriterText></p>
        <p><TypewriterText speed={10}>"step": 28,</TypewriterText></p>
        <p><TypewriterText speed={10}>"width": 1024,</TypewriterText></p>
        <p><TypewriterText speed={10}>"height": 1024,</TypewriterText></p>
        <p><TypewriterText speed={10}>"seed": "3308458328"</TypewriterText></p>
        <br></br>
        <button className="learn-more" onClick={handleLearnMoreClick}>
          <TypewriterText hover={true} ticking={true} orange={true}>
            /museum_gallery
          </TypewriterText>
        </button>
        </div> 

  );
};

export default Prompt;