import React from 'react';
import './Layout.css';
import Card from './Card';
import Details from './Details';
import {current_layout} from '../variables'



const Layout = () => {

  if (current_layout === "home_layout") {
    return (
        <div className="layout">
        <div className="layout-section">1<Card/></div>
        <div className="layout-section">2<Details/></div>
        </div>
    );
  }  

  if (current_layout === "overview_layout") {
    return (
        <div className="layout">
        <div className="layout-section">1 Overview content</div>
        <div className="layout-section">2 Overview content</div>
        <div className="layout-section">3 Overview content</div>
        </div>
    );
  } 
  
  
  if (current_layout === "alfa_layout") {
    return (
        <div className="layout">
        <div className="layout-section">1 alfa content</div>
        <div className="layout-section">2 alfa content</div>
        <div className="layout-section">3 alfa content</div>
        </div>
    );
  } 

  if (current_layout === "alfa_layout") {
    return (
        <div className="layout">
        <div className="layout-section">1 beta content</div>
        <div className="layout-section">2 beta content</div>
        <div className="layout-section">3 beta content</div>
        </div>
    );
  } 
};

export default Layout;