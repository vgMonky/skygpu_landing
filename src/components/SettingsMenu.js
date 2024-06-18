// src/components/SettingsMenu.js
import React from 'react';
import './SettingsMenu.css'; // Ensure this file exists and is correctly styled
import { useSettings } from '../states/settings_state'; // Import the settings context

const SettingsMenu = ({ closeSettings }) => {
  const { typeFxEnabled, setTypeFxEnabled, muteEnabled, setMuteEnabled } = useSettings();

  return (
    <div className="settings-menu">
      <button className="close-button" onClick={closeSettings}>X</button>
      <h2>Settings</h2>
      {/* Add your settings options here */}
      <div>
        <label>
          typing_fx
          <input 
            type="checkbox" 
            checked={typeFxEnabled} 
            onChange={(e) => setTypeFxEnabled(e.target.checked)} 
          />
        </label>
      </div>
      <div>
        <label>
          curved_fx
          <input type="checkbox" />
        </label>
      </div>
      <div>
        <label>
          mute_audio
          <input 
            type="checkbox" 
            checked={muteEnabled} 
            onChange={(e) => setMuteEnabled(e.target.checked)} 
          />
        </label>
      </div>
    </div>
  );
};

export default SettingsMenu;
