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

  const [crtFxEnabled, setCrtFxEnabled] = useState(() => {
    const savedCrtFx = localStorage.getItem('crtFxEnabled');
    return savedCrtFx !== null ? JSON.parse(savedCrtFx) : true; // Default to true
  });

  const [frameFxEnabled, setFrameFxEnabled] = useState(() => {
    const savedFrameFx = localStorage.getItem('frameFxEnabled');
    return savedFrameFx !== null ? JSON.parse(savedFrameFx) : true; // Default to true
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

  useEffect(() => {
    localStorage.setItem('crtFxEnabled', JSON.stringify(crtFxEnabled));
    const screen = document.querySelector('.screen');
    if (crtFxEnabled) {
      screen.style.display = 'block';
    } else {
      screen.style.display = 'none';
      setFrameFxEnabled(false);
    }
  }, [crtFxEnabled]);

  useEffect(() => {
    localStorage.setItem('frameFxEnabled', JSON.stringify(crtFxEnabled));
    const frame = document.querySelector('.frame');
    if (frameFxEnabled) {
      setCrtFxEnabled(true);
      frame.style.display = 'block';
    } else {
      frame.style.display = 'none';  
    }
  }, [frameFxEnabled]);

  return (
    <SettingsContext.Provider value={{
      typeFxEnabled, setTypeFxEnabled,
      muteEnabled, setMuteEnabled,
      crtFxEnabled, setCrtFxEnabled,
      frameFxEnabled, setFrameFxEnabled}}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
