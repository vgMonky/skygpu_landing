import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import { useMain } from '../states/main_state'; // Adjust the path as necessary
import TypewriterText from '../fx/TypewriterText';
import SettingsMenu from './SettingsMenu';

const Menu = ({ toggleMenu }) => {
  const { currentMain, setCurrentMain } = useMain();
  const [showSettings, setShowSettings] = useState(false);
  const menuRef = useRef(null);

  const handleButtonClick = (newMain) => {
    setCurrentMain(newMain);
    toggleMenu(); // Close the menu after clicking an option
  };

  const getOptionText = (option, displayText) => {
    return currentMain === option ? `${displayText} *` : displayText;
  };

  const openSettingsMenu = () => {
    setShowSettings(true);
  };

  const closeSettingsMenu = () => {
    setShowSettings(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu" ref={menuRef}>
      {showSettings && <SettingsMenu closeSettings={closeSettingsMenu} />}
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

      <div className='line'></div>
      <button className="option settings" onClick={openSettingsMenu}>
        <TypewriterText hover={true}>/setting</TypewriterText>
      </button>
    </div>
  );
};

export default Menu;
