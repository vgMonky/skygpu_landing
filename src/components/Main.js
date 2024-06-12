/* /src/component/main.js */
import React from 'react';
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


    if (currentMain == "home_main"){
        return (
            <div className="main">
                <div className="main-section"><Selector/></div>
                <div className="main-section"><Viewer/></div>
            </div>
        );
    }   

    if (currentMain == "intro_main"){
        return (
            <Intro/>
        )
    }

    if (currentMain == "alpha_main"){
        return (
            <Alpha/>
        )
    }

    if (currentMain == "beta_main"){
        return (
            <Beta/>
        )
    }

    if (currentMain == "museum_main"){
        return (
            <Museum/>
        )
    }

};

export default Main;