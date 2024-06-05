/* /src/component/main.js */
import React from 'react';
import './main_content.css';


const Intro = () => {

    return (
        <div className="page">

            <div className="page-section">
                <img src="https://avatars.githubusercontent.com/u/151031767?s=400&v=4"></img>
                <p>"prompt": "skynet terminator skull metal slug pixel art neon colors",</p>
                <p>"model": "prompthero/openjourney",</p>
                <p>"step": 28,</p>
                <p>"width": 1024,</p>
                <p>"height": 1024,</p>
                <p>"seed": "3308458328"</p>
            </div> 

            <div className="page-section">
                <h1>Overview</h1>
                <p>Skynet is a community driven decentralized compute platform built on top of the Antelope blockchain stack.</p>
                <p>The main goal of the platform is to be a broker between GPU compute consumers and suppliers.</p>
                <p>We launched skynet alpha two years ago, today we bring a proposal to the telos community to get skynet to beta and launch on Telos Mainnet.</p>
                <p>Watch the <a href="https://youtu.be/zWfM2cMIML0?t=2625">July 27th Telos Core Developers interview</a></p>
            </div> 
                
            <div className="page-section">
                <h1>Vision</h1>
                <p>Create a decentralized alternative to big-AI tools and platforms following the principles of the original cypherpunks.</p>
            </div> 

            <div className="page-section">
                <h1>Team/contributors</h1>
                <p>Description</p>
            </div> 
        </div>
    )
    

};

export default Intro;
