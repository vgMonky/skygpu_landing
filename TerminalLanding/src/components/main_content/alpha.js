/* /src/component/main.js */
import React from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';

const Alpha = () => {

    return (
        <div className="page">

            <div className="page-section">
                <h1><TypewriterText speed={10} textSize='20pt'>Try the Alpha!</TypewriterText></h1>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Current State</TypewriterText></h1>
                <p><TypewriterText speed={1}>Today Skynet alpha runs on its own completely separate Antelope chain hosted by the dev team. Without marketing we have reached more than 17,000 text to image requests served, by four different GPU node operators who donated hardware, compute, development time and also invested to pay for dev bounties out of pocket</TypewriterText></p>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Repos</TypewriterText></h1>

            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Apps</TypewriterText></h1>

            </div> 

        </div>
    )
    

};

export default Alpha;
