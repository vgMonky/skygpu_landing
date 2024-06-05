/* /src/component/Selector.js */
import React from 'react';
import './Selector.css';
import { useMain } from '../states/main_state'; // adjust the path as necessary
import TypewriterText from '../TypewriterText';



const Selector = () => {
    const { currentMain } = useMain();
  
    if (currentMain === "home_main"){
  
        return (

                <div className="selector">
                <div className="selector-header">
                    <div className="selector-title">
                        <TypewriterText>Welcome to Skynet.</TypewriterText>
                    </div>
                    <p><TypewriterText>select an option:</TypewriterText></p>
                </div>
                <div className="selector-body">
                    <div className="selector-options">
                        <button className="option" ><TypewriterText hover={true}>/Intro.</TypewriterText></button>
                        <button className="option" ><TypewriterText hover={true}>/Alfa</TypewriterText></button>
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
                <div className="selector-title" >Intro.</div>
                <p>Select an option:</p>
            </div>
            <div className="selector-body">
                <div className="selector-options">
                    <button className="option"  >/Prompt</button>
                    <button className="option"  >/Overview</button>
                    <button className="option"  >/Vision</button>
                    <button className="option"  >/Team</button>
                </div>
            </div>  
            </div>
        );
    }



};

export default Selector;