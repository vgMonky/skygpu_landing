/* /src/component/Viewer.js */
import React from 'react';
import './Viewer.css';
import TypewriterText from '../fx/TypewriterText';


const Viewer = () => {
    return (

        <TypewriterText ticking={true}>...waiting for selection.</TypewriterText>

    );
};

export default Viewer;
