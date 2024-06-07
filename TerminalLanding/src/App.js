// src/App.js
import React from 'react';
import { MainProvider } from './states/main_state'; // adjust the path as necessary
import NavBar from './components/NavBar';
import Main from './components/Main';
import { ViewerStateProvider } from './states/viewer_state';


function App() {
  return (
    <MainProvider>
      <ViewerStateProvider>
        <NavBar/>
        <Main/>
        <div className="main-section">FOTTER</div>
      </ViewerStateProvider>
    </MainProvider>
  );
}

export default App;