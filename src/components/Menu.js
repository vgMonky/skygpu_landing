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
          <TypewriterText hover={true}>/init</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('intro_main'); }}>
          <TypewriterText hover={true}>/intro</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('alpha_main'); }}>
          <TypewriterText hover={true}>/alpha</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('beta_main'); }}>
          <TypewriterText hover={true}>/beta</TypewriterText>
        </button>
        <button className="option" onClick={() => { handleButtonClick('museum_main'); }}>
          <TypewriterText hover={true}>/museum</TypewriterText>
        </button>
      </div>
    );
};

export default Menu;
