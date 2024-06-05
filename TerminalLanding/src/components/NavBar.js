/* /src/component/NavBar.js */
import React, { useState } from 'react';
import './NavBar.css';
import TypewriterText from '../fx/TypewriterText';
import Menu from './Menu'; 

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <img src="https://avatars.githubusercontent.com/u/151031767?s=64&v=4" alt="Icon" className="navbar-icon" />
                <span className="navbar-title"><TypewriterText>SKYNET.GPU</TypewriterText></span>
            </div>
                <a href="#" className="navbar-link" onClick={toggleMenu}>
                    <TypewriterText hover={true} ticking={true}>/Root</TypewriterText>   
                </a>
                {isMenuOpen && <Menu />} {/* Show Menu component when isMenuOpen is true */}
        </div>
        </nav>
    );
};

export default NavBar;