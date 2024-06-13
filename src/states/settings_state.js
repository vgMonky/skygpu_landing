// src/states/settings_state.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [typeFxEnabled, setTypeFxEnabled] = useState(() => {
    // Initialize state from localStorage
    const savedTypeFx = localStorage.getItem('typeFxEnabled');
    return savedTypeFx !== null ? JSON.parse(savedTypeFx) : true; // Default to true
  });

  useEffect(() => {
    // Save to localStorage whenever typeFxEnabled changes
    localStorage.setItem('typeFxEnabled', JSON.stringify(typeFxEnabled));
  }, [typeFxEnabled]);

  return (
    <SettingsContext.Provider value={{ typeFxEnabled, setTypeFxEnabled }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
