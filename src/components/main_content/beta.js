/* /src/component/main_component/beta.js */
import React from 'react';
import './main_content.css';
import TypewriterText from '../../fx/TypewriterText';

const Beta = () => {

    return (
        <div className="page">

            <div className="page-section">
                <h1><TypewriterText speed={10} textSize='20pt'>Taking Skynet to BETA.</TypewriterText></h1>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Open Moderation Model</TypewriterText></h1>
                <p><TypewriterText speed={1}>One thing we absolutely need before launching is an automatic moderation system, without this the potential for user abuse is too great. We want to allow users to create NSFW prompts, but never illegal content, and also in the case of legal NSFW content, we want to automatically tag it such that it can be shown accordingly on the multiple frontends.</TypewriterText></p>
                <p><TypewriterText speed={1}>Right now users can only communicate with Skynet through public channels where human moderators are present. In order for Skynet to scale and also to provide users with private channels of communication, we need to include an automatic moderation step in the smart contract logic itself</TypewriterText></p>
                <p><TypewriterText speed={1}>The logic of the smart contract will not allow for any request to be enqueued that does not contain as an initial step running a moderation model and getting a correct result.</TypewriterText></p>
                <p><TypewriterText speed={1}>In order to fill this need for a model we looked around and what we found did not impress us, in fact it looks like a nice opportunity to create a FOSS moderation model and release it for all to use under the Skynet organization.</TypewriterText></p>
                <p><TypewriterText speed={1}>We have made several tests which indicate we have already generated about 30% of the dataset we need for this model.</TypewriterText></p>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Storage Protocol</TypewriterText></h1>
                <p><TypewriterText speed={1}>Currently, Skynet alpha uses IPFS to share its input & output data between participants. We are thinking of moving to a hybrid HTTP/Bittorrent protocol where workers create and share torrents with the results for long term storage, and optionally for fast immediate access results are served over an HTTP domain for a time.</TypewriterText></p>
                <p><TypewriterText speed={1}>Skynet team would offer public trackers and mirrors, but workers are more than welcome to set up their own.</TypewriterText></p>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Composable Pipeline / Request Protocol</TypewriterText></h1>
                <p><TypewriterText speed={1}>At the moment the request protocol for Skynet is mostly geared towards image generation, but the base to make it fully generic and composable is there</TypewriterText></p>
                <p><TypewriterText speed={1}>Following the format that many multi model pipeline frameworks use, we propose a graph-based approach, where each node is a compute request, with its respective input & outputs, and inference parameters.</TypewriterText></p>
            </div> 

            <div className="page-section">
                <h1><TypewriterText speed={10}>Compute Types</TypewriterText></h1>
                <p><TypewriterText speed={1}>For now, Skynet compute daemon only supports diffusion (image generation) requests, so even though users could send any kind of request, it all depends if the compute backend supports it</TypewriterText></p>
                <p><TypewriterText speed={1}>In beta we want to support the following compute types:</TypewriterText></p>
                <p><TypewriterText speed={1}>- LLMs: single query, RAG, chat with history, translation.</TypewriterText></p>
                <p><TypewriterText speed={1}>- Diffusers: add latest models and execution types, like the ability to diffuse only part of an input image.</TypewriterText></p>
                <p><TypewriterText speed={1}>- Sound & Speech generation: add music & voice generation models.</TypewriterText></p>
            </div> 
        </div>
    )
    

};

export default Beta;
