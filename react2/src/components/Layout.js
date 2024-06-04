// Layout.js
import React from 'react';
import './Layout.css';
import Card from './Card';
import Details from './Details';
import { useLayout } from '../variables'; // adjust the path as necessary

const Layout = () => {
  const { currentLayout } = useLayout();

  if (currentLayout === "home_layout") {
    return (
        <div className="layout">
          <div className="layout-section">1<Card/></div>
          <div className="layout-section">2<Details/></div>
        </div>
    );
  }  

  if (currentLayout === "overview_layout") {
    return (
        <div className="layout">
          <div className="layout-section">1 Overview content</div>
          <div className="layout-section">2 Overview content</div>
          <div className="layout-section">3 Overview content</div>
        </div>
    );
  } 
  
  if (currentLayout === "alfa_layout") {
    return (
        <div className="layout">
          <div className="layout-section">1 alfa content</div>
          <div className="layout-section">2 alfa content</div>
          <div className="layout-section">3 alfa content</div>
        </div>
    );
  } 

  if (currentLayout === "beta_layout") {
    return (
        <div className="layout">
          <div className="layout-section">1 beta content</div>
          <div className="layout-section">2 beta content</div>
          <div className="layout-section">3 beta content</div>
        </div>
    );
  } 

  return null;
};

export default Layout;