// src/components/NavBar.js
import React from 'react';
import './NavBar.css';
import { useLayout } from '../variables'; // adjust the path as necessary

const NavBar = () => {
  const { currentLayout } = useLayout();
  
  var navbar_title
  if (currentLayout === "home_layout"){navbar_title = "Skynet"}
  if (currentLayout === "overview_layout"){navbar_title = "Skynet Overview"}
  if (currentLayout === "alfa_layout"){navbar_title = "Skynet ALFA"}
  if (currentLayout === "beta_layout"){navbar_title = "Skynet BETA"}

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="https://avatars.githubusercontent.com/u/151031767?s=64&v=4" alt="Icon" className="navbar-icon" />
          <span className="navbar-title">{navbar_title}</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Menu
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;