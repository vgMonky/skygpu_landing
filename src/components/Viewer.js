// /src/component/Viewer.js
import React from 'react';
import './Viewer.css';
import TypewriterText from '../fx/TypewriterText';
import { useViewerState } from '../states/viewer_state'; // Import the custom hook to access viewer state
import IntroView from './view_content/introView';
import AlphaView from './view_content/alphaView';
import BetaView from './view_content/betaView';
import Prompt from './view_content/prompt';
import MuseumView from './view_content/museumView';

const Viewer = () => {
    const { viewerState } = useViewerState(); // Get the viewer state using the custom hook

    // Render content based on viewer state
    let content;
    switch (viewerState) {
        case 'none':
            content = <TypewriterText>...waiting for selection.</TypewriterText>;
            break;
        case 'intro':
            content = <IntroView/>;
            break;
        case 'alpha':
            content = <AlphaView/>;
            break;
        case 'beta':
            content = <BetaView/>;
            break;
        case 'museum':
            content = <MuseumView/>;
            break;
        default:
            content = <TypewriterText>...waiting for selection.</TypewriterText>;
    }

    return (
        <div className="viewer">
            {content}
        </div>
    );
};

export default Viewer;
