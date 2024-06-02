// src/components/NavBar.js
import React from 'react';
import './NavBar.css';
import { current_layout } from '../variables';

var navbar_title
if (current_layout === "home_layout"){navbar_title = "Skynet"}
if (current_layout === "overview_layout"){navbar_title = "Skynet Overview"}
if (current_layout === "alfa_layout"){navbar_title = "Skynet ALFA"}
if (current_layout === "beta_layout"){navbar_title = "Skynet BETA"}

const NavBar = () => {
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