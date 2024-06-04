// variables.js
import React, { createContext, useState, useContext } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("home_layout");

  return (
    <LayoutContext.Provider value={{ currentLayout, setCurrentLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);