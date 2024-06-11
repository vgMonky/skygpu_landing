/* /src/component/main_component/intro.js */
import React from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';

const Intro = () => {

    return (
        <div className="page">
            <div className="page-section">
                <h1><TypewriterText speed={10} textSize='20pt'>Introduction.</TypewriterText></h1>
            </div> 
            

            <div className="page-section">
                <h1><TypewriterText speed={10}>Vision</TypewriterText></h1>
                <p><TypewriterText speed={10}>Create a decentralized alternative to big-AI tools and platforms following the principles of the original cypherpunks.</TypewriterText></p>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Overview</TypewriterText></h1>
                <p><TypewriterText speed={10}>Skynet is a community driven decentralized compute platform built on top of the Antelope blockchain stack.</TypewriterText></p>
                <p><TypewriterText speed={10}>The main goal of the platform is to be a broker between GPU compute consumers and suppliers.</TypewriterText></p>
                <p><TypewriterText speed={10}>We launched skynet alpha two years ago, today we bring a proposal to the telos community to get skynet to beta and launch on Telos Mainnet.</TypewriterText></p>
                <a href="https://youtu.be/zWfM2cMIML0?t=2625"><TypewriterText orange={true} hover={true} speed={10} ticking={true}>Watch the July 27th Telos Core Developers interview</TypewriterText></a>
            </div> 

            <div className="page-section">
                <h1> <TypewriterText speed={10}>Team|Contributors</TypewriterText></h1>
                <br></br>
                <a href="https://github.com/guilledk" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/guillermo_rodriguez</TypewriterText></a>
                <p><TypewriterText speed={10}>.Lead Developer & Node Operator</TypewriterText></p>
                <p><TypewriterText speed={10}>.Backend Developer at Telos Core Developers</TypewriterText></p>
                <br></br>
                <a href="https://github.com/iamzoltan" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/constantine_$SURNAME</TypewriterText></a>
                <p><TypewriterText speed={10}>.Developer & Node Operator</TypewriterText></p>
                <br></br>
                <a href="https://github.com/torresnelson" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/nelson_torres</TypewriterText></a>
                <p><TypewriterText speed={10}>.Developer</TypewriterText></p>
                <p><TypewriterText speed={10}>.Former Backend Developer at mercadolibre.com now full time open source</TypewriterText></p>
                <br></br>
                <a href="https://github.com/elmartinj" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/martin_juarez</TypewriterText></a>
                <p><TypewriterText speed={10}>.Data Scientist</TypewriterText></p>
                <br></br>
                <a href="https://github.com/vgMonky" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/victor_goudschaal</TypewriterText></a>
                <p><TypewriterText speed={10}>.Frontend Developer</TypewriterText></p>
                <p><TypewriterText speed={10}>.Self taught</TypewriterText></p>
                <br></br>
                <a href="https://x.com/escuelitabtc" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/ernesto_elias_aharonian</TypewriterText></a>
                <p><TypewriterText speed={10}>.Data Cataloger</TypewriterText></p>
                <p><TypewriterText speed={10}>.”Escuelita Bitcoin” founder, crypto evangelizer, (@escuelitabtc on X)</TypewriterText></p>
                <br></br>
                <a href="https://github.com/diegosanchezmarino" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/diego_sanchez_mariño:</TypewriterText></a>
                <p><TypewriterText speed={10}>.Frontend Developer</TypewriterText></p>
                <br></br>
                <a href="https://github.com/mchosc" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/seth:</TypewriterText></a>
                <p><TypewriterText speed={10}>.App Developer, Node Operator</TypewriterText></p>
                <p><TypewriterText speed={10}>.Boid Telos Block Producer: boid.com</TypewriterText></p>
                <br></br>
                <h1> <TypewriterText speed={10}>Special Thanks to:</TypewriterText></h1>
                <br></br>
                <a href="" ><TypewriterText  orange={true} speed={10}>”Slowlearner”</TypewriterText></a>
                <p><TypewriterText speed={10}>(on matrix: @slowlearner:fractaldark.com), early hard ware & monetary contributor, as well as guidance in his extensive experience in the industry.</TypewriterText></p>
                <br></br>
                <a href="https://github.com/Viterbo" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/viterbo_rodriguez </TypewriterText></a>
                <a href="https://github.com/poplexity" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} hover={true} orange={true} speed={10}>/jesse_schulman </TypewriterText></a>
                <p><TypewriterText speed={10}>For opening up the Telos community and giving great architectural advice.</TypewriterText></p>
            </div> 

            <div className="page-section">
                <img src="https://avatars.githubusercontent.com/u/151031767?s=200&v=4"></img>
                <p><TypewriterText speed={10}>"prompt": "skynet terminator skull metal slug pixel art neon colors",</TypewriterText></p>
                <p><TypewriterText speed={10}>"model": "prompthero/openjourney",</TypewriterText></p>
                <p><TypewriterText speed={10}>"step": 28,</TypewriterText></p>
                <p><TypewriterText speed={10}>"width": 1024,</TypewriterText></p>
                <p><TypewriterText speed={10}>"height": 1024,</TypewriterText></p>
                <p><TypewriterText speed={10}>"seed": "3308458328"</TypewriterText></p>
            </div> 

        </div>
    )
    

};

export default Intro;
