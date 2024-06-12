import React from 'react';
import './Menu.css';
import { useMain } from '../states/main_state'; // Adjust the path as necessary
import TypewriterText from '../fx/TypewriterText';

const Menu = ({ toggleMenu }) => {
  const { currentMain, setCurrentMain } = useMain();

  const handleButtonClick = (newMain) => {
    setCurrentMain(newMain);
    toggleMenu(); // Close the menu after clicking an option
  };

  const getOptionText = (option, displayText) => {
    return currentMain === option ? `${displayText} *` : displayText;
  };

  return (
    <div className="menu">
      <a href='' className="option">
        <TypewriterText hover={true}>{getOptionText('home_main', '/init')}</TypewriterText>
      </a>
      <button className="option" onClick={() => { handleButtonClick('intro_main'); }}>
        <TypewriterText hover={true}>{getOptionText('intro_main', '/intro')}</TypewriterText>
      </button>
      <button className="option" onClick={() => { handleButtonClick('alpha_main'); }}>
        <TypewriterText hover={true}>{getOptionText('alpha_main', '/alpha')}</TypewriterText>
      </button>
      <button className="option" onClick={() => { handleButtonClick('beta_main'); }}>
        <TypewriterText hover={true}>{getOptionText('beta_main', '/beta')}</TypewriterText>
      </button>
      <button className="option" onClick={() => { handleButtonClick('museum_main'); }}>
        <TypewriterText hover={true}>{getOptionText('museum_main', '/museum')}</TypewriterText>
      </button>
    </div>
  );
};

export default Menu;
