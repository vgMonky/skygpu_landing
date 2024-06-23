// src/App.js

import React from 'react';
import { MainProvider } from './states/main_state'; // adjust the path as necessary
import { SettingsProvider } from './states/settings_state'; // Import the SettingsProvider
import NavBar from './components/NavBar';
import Main from './components/Main';
import Foot from './components/Foot';
import { ViewerStateProvider } from './states/viewer_state';
import './fx/CRT.css';
import BackNoiseLoop from './fx/backNoiseLoop'; // Import the BackNoiseLoop component

function App() {
  return (
    <div className='crt'>
      <div className='screen'></div>
      <div className='frame'></div>
      <MainProvider>
        <ViewerStateProvider>
          <SettingsProvider>
            <NavBar/>
            <Main/>
            <Foot/>
            <BackNoiseLoop /> {/* Add this line to integrate audio */}
          </SettingsProvider>
        </ViewerStateProvider>
      </MainProvider>
    </div>
  );
}

export default App;
