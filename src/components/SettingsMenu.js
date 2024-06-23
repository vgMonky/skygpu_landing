// src/components/SettingsMenu.js
import React from 'react';
import './SettingsMenu.css'; // Ensure this file exists and is correctly styled
import { useSettings } from '../states/settings_state'; // Import the settings context

const SettingsMenu = ({ closeSettings }) => {
  const { typeFxEnabled, setTypeFxEnabled, muteEnabled, setMuteEnabled, crtFxEnabled, setCrtFxEnabled, frameFxEnabled, setFrameFxEnabled } = useSettings();

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
          crt_fx
          <input 
            type="checkbox" 
            checked={crtFxEnabled} 
            onChange={(e) => setCrtFxEnabled(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          crt_frame
          <input 
            type="checkbox"
            checked={frameFxEnabled}
            onChange={(e) => setFrameFxEnabled(e.target.checked)}
          />
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
