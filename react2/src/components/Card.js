import React from 'react';
import './Card.css';



const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="https://avatars.githubusercontent.com/u/151031767?s=64&v=4"></img>
        <h1>Welcome to Skynet.</h1>
      </div>
      <div className="card-buttons">
        <button className="card-button" >Overview</button>
        <button className="card-button" >Alfa</button>
        <button className="card-button" >Beta</button>
      </div>
    </div>
  );
};

export default Card;