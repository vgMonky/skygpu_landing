/* /src/component/Selector.js */
import React from 'react';
import './Selector.css';
import { useMain } from '../states/main_state'; // adjust the path as necessary
import TypewriterText from '../fx/TypewriterText';



const Selector = () => {
    const { currentMain } = useMain();
  
    if (currentMain === "home_main"){
  
        return (

                <div className="selector">
                <div className="selector-header">
                    <div className="selector-title">
                        <TypewriterText>Welcome to Skynet.</TypewriterText>
                    </div>
                    <p><TypewriterText >select an option:</TypewriterText></p>
                </div>
                <div className="selector-body">
                    <div className="selector-options">
                        <button className="option" ><TypewriterText hover={true}>/Intro</TypewriterText></button>
                        <button className="option" ><TypewriterText hover={true}>/Alpha</TypewriterText></button>
                        <button className="option" ><TypewriterText hover={true}>/Beta</TypewriterText></button>
                    </div>
                </div>  
                </div>
        );
    }

    if (currentMain === "intro_main"){ 
  
        return (
            <div className="selector">
            <div className="selector-header">
                <div className="selector-title" ><TypewriterText>Introduction.</TypewriterText></div>
                <p><TypewriterText >Select an option:</TypewriterText></p>
            </div>
            <div className="selector-body">
                <div className="selector-options">
                    <button className="option" ><TypewriterText hover={true}>/Prompt</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Overview</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Vision</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Team</TypewriterText></button>
                </div>
            </div>  
            </div>
        );
    }

    if (currentMain === "alpha_main"){ 
  
        return (
            <div className="selector">
            <div className="selector-header">
                <div className="selector-title" ><TypewriterText>Try the ALPHA!</TypewriterText></div>
                <p><TypewriterText >Select an option: </TypewriterText></p>
            </div>
            <div className="selector-body">
                <div className="selector-options">
                    <button className="option" ><TypewriterText hover={true}>/Current_State</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Repos</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Apps</TypewriterText></button>
                </div>
            </div>  
            </div>
        );
    }

    if (currentMain === "beta_main"){ 
  
        return (
            <div className="selector">
            <div className="selector-header">
                <div className="selector-title" ><TypewriterText>Taking Skynet to the BETA.</TypewriterText></div>
                <p><TypewriterText >Select an option:</TypewriterText></p>
            </div>
            <div className="selector-body">
                <div className="selector-options">
                    <button className="option" ><TypewriterText hover={true}>/Open_Moderation_Model</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Storage_Protocol</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Composable_Pipeline</TypewriterText></button>
                    <button className="option" ><TypewriterText hover={true}>/Compute Types</TypewriterText></button>
                </div>
            </div>  
            </div>
        );
    }

};

export default Selector;