// src/App.js
import React from 'react';
import { MainProvider } from './states/main_state'; // adjust the path as necessary
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
          <NavBar/>
          <Main/>
          <Foot/>
        </ViewerStateProvider>
      </MainProvider>
    </div>
  );
}

export default App;