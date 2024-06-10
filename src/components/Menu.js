// /src/component/menu.js
import React from 'react';
import './Menu.css';
import { useMain } from '../states/main_state'; // Adjust the path as necessary
import TypewriterText from '../fx/TypewriterText';


const Menu = () => {
  const { setCurrentMain } = useMain();
  

  const handleButtonClick = (newMain) => {
    setCurrentMain(newMain);
  }

    return (
      <div className="menu">
        <button className="option" onClick={() => { handleButtonClick('home_main'); }}>
          <TypewriterText hover={true}>/Init</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('intro_main'); }}>
          <TypewriterText hover={true}>/Intro</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('alpha_main'); }}>
          <TypewriterText hover={true}>/Alpha</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('beta_main'); }}>
          <TypewriterText hover={true}>/Beta</TypewriterText>
        </button>
      </div>
    );
};

export default Menu;
