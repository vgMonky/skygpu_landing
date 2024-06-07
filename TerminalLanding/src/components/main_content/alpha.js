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
                <h1><TypewriterText speed={10}>Repos on github</TypewriterText></h1>
                
                <p><TypewriterText speed={10}>Old proof of concept:</TypewriterText></p>
                <a href="https://github.com/skygpu/skynet-art-bot" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>https://github.com/skygpu/skynet-art-bot</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Current software suite:</TypewriterText></p>
                <a href="https://github.com/skygpu/skynet" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>https://github.com/skygpu/skynet</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>yperion plugin for extra metadata indexing and serving:</TypewriterText></p>
                <a href="https://github.com/skygpu/hyperion-skynet-plugin" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>https://github.com/skygpu/hyperion-skynet-plugin</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Hyperion explorer custom UI:</TypewriterText></p>
                <a href="https://github.com/skygpu/hyperion-explorer-plugin" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>https://github.com/skygpu/hyperion-explorer-plugin</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Tools for generation and cataloging of datasets:</TypewriterText></p>
                <a href="https://github.com/guilledk/ptoolkit" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>https://github.com/guilledk/ptoolkit</TypewriterText></a>
                


            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Apps</TypewriterText></h1>

                <p><TypewriterText speed={10}>Chain Explorer</TypewriterText></p>
                <a href="https://testnet.skygpu.net/v2/explore/" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Landing Page</TypewriterText></a>
                <a href="https://testnet.skygpu.net/v2/explore/transaction/f9a0c91b75230f574921489226d5279d09bfeb8681cf235e1b1cca65d1b30e6b" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Example Request</TypewriterText></a>
                <a href="https://testnet.skygpu.net/v2/explore/transaction/638c9ef3f6fe486fcc129477c26e419e7c8e82d6af8fa22dc58bbdad47dd8a0b" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Example Result</TypewriterText></a>
                <a href="https://testnet.skygpu.net/v2/explore/account/telos.gpu" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Main Contract</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Telegram</TypewriterText></p>
                <a href="https://t.me/skynetgpu" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Main Group</TypewriterText></a>
                <a href="https://t.me/+y6UHmY_gF3o4ZGE5" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Museum Group</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Discord</TypewriterText></p>
                <a href="https://discord.gg/zuvk4SypMy" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Official Server</TypewriterText></a>
                <br></br>
                <p><TypewriterText speed={10}>Made by Boid.com</TypewriterText></p>
                <a href="https://muumba.art/" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Muumba Art Search</TypewriterText></a>
                <a href="https://app.pintastic.link/" target="_blank" rel="noopener noreferrer"><TypewriterText ticking={true} textSize="12pt" hover={true} orange={true} speed={10}>Pintastic Integration</TypewriterText></a>

            </div> 

        </div>
    )
    

};

export default Alpha;
