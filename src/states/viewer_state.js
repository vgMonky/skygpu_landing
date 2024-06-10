// src/states/viewer_state.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the viewer state
const ViewerStateContext = createContext();

// Custom hook to access the viewer state
export const useViewerState = () => {
  const context = useContext(ViewerStateContext);
  if (!context) {
    throw new Error('useViewerState must be used within a ViewerStateProvider');
  }
  return context;
};

// Provider component for the viewer state
export const ViewerStateProvider = ({ children }) => {
  // Define the state for viewer
  const [viewerState, setViewerState] = useState('none'); // Initial state is 'none'

  // Function to update the viewer state
  const setViewer = (state) => {
    setViewerState(state);
  };

  return (
    <ViewerStateContext.Provider value={{ viewerState, setViewer }}>
      {children}
    </ViewerStateContext.Provider>
  );
};
