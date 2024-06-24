// src/components/SettingsMenu.js
import React from 'react';
import './SettingsMenu.css';
import { useSettings } from '../states/settings_state';

const SettingsMenu = ({ closeSettings }) => {
  const {
    typeFxEnabled, setTypeFxEnabled,
    muteEnabled, setMuteEnabled,
    crtFxEnabled, setCrtFxEnabled,
    frameFxEnabled, setFrameFxEnabled
  } = useSettings();

  const handleFrameChange = (e) => {
    const isChecked = e.target.checked;
    setFrameFxEnabled(isChecked);
    setCrtFxEnabled(isChecked); // Sync crtFxEnabled with frameFxEnabled
  };

  return (
    <div className="settings-menu">
      <button className="close-button" onClick={closeSettings}>X</button>
      <h2>Settings</h2>

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
          screen_frame
          <input 
            type="checkbox" 
            checked={frameFxEnabled} 
            onChange={handleFrameChange} 
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
