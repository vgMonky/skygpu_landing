import React, { useRef, useEffect } from 'react';
import './Main.css';
import { useMain } from '../states/main_state'; // adjust the path as necessary
import Selector from './Selector';
import Viewer from './Viewer';

import Intro from './main_content/intro';
import Alpha from './main_content/alpha';
import Beta from './main_content/beta';
import Museum from './main_content/museum';

const Main = () => {
    const { currentMain } = useMain();
    const viewerRef = useRef(null);

    useEffect(() => {
        // Scroll to the top of the page when currentMain changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentMain]);

    if (currentMain === "home_main") {
        return (
            <div className="main">
                <div className="main-section"><Selector viewerRef={viewerRef} /></div>
                <div className="main-section" ref={viewerRef}><Viewer /></div>
            </div>
        );
    }   

    if (currentMain === "intro_main") {
        return <Intro />;
    }

    if (currentMain === "alpha_main") {
        return <Alpha />;
    }

    if (currentMain === "beta_main") {
        return <Beta />;
    }

    if (currentMain === "museum_main") {
        return <Museum />;
    }
};

export default Main;
