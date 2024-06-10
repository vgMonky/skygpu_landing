/* /src/component/Selector.js */
import React from 'react';
import './Selector.css';
import TypewriterText from '../fx/TypewriterText';
import { useViewerState } from '../states/viewer_state'; 


const Selector = () => {
    const { setViewer } = useViewerState(); // Get the function to update viewer state

    const changeViewer = (state) => {
        setViewer(state);
    };


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
                    <button className="option" onClick={() => changeViewer('intro')}>
                        <TypewriterText hover={true} ticking={true}>/Intro</TypewriterText>
                    </button>
                    <button className="option" onClick={() => changeViewer('alpha')}>
                        <TypewriterText hover={true} ticking={true}>/Alpha</TypewriterText>
                        </button>
                    <button className="option" onClick={() => changeViewer('beta')}>
                        <TypewriterText hover={true} ticking={true}>/Beta</TypewriterText>
                        </button>
                    <button className="option" onClick={() => changeViewer('prompt')}>
                        <TypewriterText hover={true} ticking={true}>/Example</TypewriterText>
                        </button>
                </div>
            </div>  
            </div>
    );
    


};

export default Selector;