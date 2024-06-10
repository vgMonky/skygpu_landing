// src/states/main_state.js
import React, { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [currentMain, setCurrentMain] = useState("home_main");

  return (
    <MainContext.Provider value={{ currentMain, setCurrentMain }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);