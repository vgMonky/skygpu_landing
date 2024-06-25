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
                <a href='' className="navbar-brand">
                    <img src="https://avatars.githubusercontent.com/u/151031767?s=64&v=4" alt="Icon" className="navbar-icon" />
                    <span className="navbar-title"><TypewriterText>SKYGPU.NET</TypewriterText></span>
                </a>
                <a href="#" className="navbar-link" onClick={toggleMenu}>
                    <TypewriterText hover={true} ticking={true}>/root</TypewriterText>   
                </a>
                {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Pass toggleMenu as a prop */}
            </div>
        </nav>
    );
};

export default NavBar;
