import React from 'react';
import './Selector.css';
import TypewriterText from '../fx/TypewriterText';
import { useViewerState } from '../states/viewer_state';

const Selector = ({ viewerRef }) => {
    const { setViewer } = useViewerState();

    const changeViewer = (state) => {
        setViewer(state);
        if (viewerRef && viewerRef.current) {
            viewerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                    <button className="option" onClick={() => changeViewer('intro')}>
                        <TypewriterText hover={true} ticking={true}>/intro</TypewriterText>
                    </button>
                    <button className="option" onClick={() => changeViewer('alpha')}>
                        <TypewriterText hover={true} ticking={true}>/alpha</TypewriterText>
                    </button>
                    <button className="option" onClick={() => changeViewer('beta')}>
                        <TypewriterText hover={true} ticking={true}>/beta</TypewriterText>
                    </button>
                    <button className="option" onClick={() => changeViewer('museum')}>
                        <TypewriterText hover={true} ticking={true}>/museum</TypewriterText>
                    </button>
                </div>
            </div>  
        </div>
    );
};

export default Selector;
