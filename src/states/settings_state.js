// src/states/settings_state.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [typeFxEnabled, setTypeFxEnabled] = useState(() => {
    const savedTypeFx = localStorage.getItem('typeFxEnabled');
    return savedTypeFx !== null ? JSON.parse(savedTypeFx) : true; // Default to true
  });

  const [muteEnabled, setMuteEnabled] = useState(() => {
    const savedMute = localStorage.getItem('muteEnabled');
    return savedMute !== null ? JSON.parse(savedMute) : false; // Default to false
  });

  useEffect(() => {
    localStorage.setItem('typeFxEnabled', JSON.stringify(typeFxEnabled));
  }, [typeFxEnabled]);

  useEffect(() => {
    localStorage.setItem('muteEnabled', JSON.stringify(muteEnabled));
    document.querySelectorAll('audio').forEach(audio => {
      audio.muted = muteEnabled;
    });
  }, [muteEnabled]);

  return (
    <SettingsContext.Provider value={{ typeFxEnabled, setTypeFxEnabled, muteEnabled, setMuteEnabled }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
