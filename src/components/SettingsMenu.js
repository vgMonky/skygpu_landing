// src/components/SettingsMenu.js
import React from 'react';
import './SettingsMenu.css'; // Ensure this file exists and is correctly styled

const SettingsMenu = ({ closeSettings }) => {
  return (
    <div className="settings-menu">
      <button className="close-button" onClick={closeSettings}>X</button>
      <h2>Settings</h2>
      {/* Add your settings options here */}
      <div>
        <label>
          Type Fx
          <input type="checkbox" />
        </label>
      </div>
      <div>
        <label>
          Texture Fx
          <input type="checkbox" />
        </label>
      </div>
      <div>
        <label>
          Sound Fx
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default SettingsMenu;
