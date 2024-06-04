// src/App.js
import React from 'react';
import { LayoutProvider } from './variables'; // adjust the path as necessary
import NavBar from './components/NavBar';
import Layout from './components/Layout';

function App() {
  return (
    <LayoutProvider>
      <NavBar/>
      <Layout/>
    </LayoutProvider>
  );
}

export default App;