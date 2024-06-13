// src/App.js
import React from 'react';
import { MainProvider } from './states/main_state'; // adjust the path as necessary
import { SettingsProvider } from './states/settings_state'; // Import the SettingsProvider
import NavBar from './components/NavBar';
import Main from './components/Main';
import Foot from './components/Foot';
import { ViewerStateProvider } from './states/viewer_state';
import './fx/CRT.css'

function App() {
  return (
    <div className='crt'>
      <MainProvider>
        <ViewerStateProvider>
          <SettingsProvider>
            <NavBar/>
            <Main/>
            <Foot/>
          </SettingsProvider>
        </ViewerStateProvider>
      </MainProvider>
    </div>
  );
}

export default App;
