// src/App.js
import React from 'react';
import { MainProvider } from './states/main_state'; // adjust the path as necessary
import NavBar from './components/NavBar';
import Main from './components/Main';


function App() {
  return (
    <MainProvider>
      <NavBar/>
      <Main/>
    </MainProvider>
  );
}

export default App;