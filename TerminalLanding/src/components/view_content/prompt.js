// /src/component/view_content/intro.js
import React from 'react';
import './viewContent.css';
import TypewriterText from '../../fx/TypewriterText';



const Prompt = () => {
  
    return (
        <div >
          <div className="view-title">
            <TypewriterText>Prompt Example.</TypewriterText>
          </div>
          <br></br>
        <img src="https://avatars.githubusercontent.com/u/151031767?s=400&v=4"></img>
        <p><TypewriterText speed={10}>"prompt": "skynet terminator skull metal slug pixel art neon colors",</TypewriterText></p>
        <p><TypewriterText speed={10}>"model": "prompthero/openjourney",</TypewriterText></p>
        <p><TypewriterText speed={10}>"step": 28,</TypewriterText></p>
        <p><TypewriterText speed={10}>"width": 1024,</TypewriterText></p>
        <p><TypewriterText speed={10}>"height": 1024,</TypewriterText></p>
        <p><TypewriterText speed={10}>"seed": "3308458328"</TypewriterText></p>
        </div> 
  );
};

export default Prompt;