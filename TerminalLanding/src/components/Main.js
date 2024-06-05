/* /src/component/main.js */
import React from 'react';
import './Main.css';
import Selector from './Selector';
import Viewer from './Viewer';

const Main = () => {
    return (
        <div className="main">
            <div className="main-section"><Selector/></div>
            <div className="main-section"><Viewer/></div>
        </div>
    );
};

export default Main;
