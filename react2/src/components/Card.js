import React from 'react';
import './Card.css';
import { useLayout } from '../variables'; // adjust the path as necessary



const Card = () => {
  const { setCurrentLayout } = useLayout();

  const handleClick = (name) => () => {
    setCurrentLayout(name);
    console.log("current_layout updated to overview_layout");
  };

  return (
    <div className="card">
      <div className="card-header">
       
        <h2>Welcome to Skynet.</h2>
      </div>
      <div className="card-buttons">
        <button className="card-button" onClick={handleClick("overview_layout")} >Overview</button>
        <button className="card-button" onClick={handleClick("alfa_layout")} >Alfa</button>
        <button className="card-button" onClick={handleClick("beta_layout")} >Beta</button>
      </div>
    </div>
  );
};

export default Card;