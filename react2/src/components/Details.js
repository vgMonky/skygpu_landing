import React from 'react';
import './Details.css';



var current_details = "Overview";

if (current_details === "Overview") {
    var name = "Overview"
    var description = "Skynet is a community driven decentralized compute platform built on top of the Antelope blockchain stack. The main goal of the platform is to be a broker between GPU compute consumers and suppliers. We launched skynet alpha two years ago, today we bring a proposal to the telos community to get skynet to beta and launch on Telos Mainnet. Watch the July 27th Telos Core Developers interview"
    var button_text = "Lern More"
    var button_href = "file:///home/monky/Downloads/Telegram%20Desktop/wp.pdf"

}
    

const Details = () => {
  return (
    <div className="details">

        <h3>{name}</h3>

        <div  className="details-description">
            {description}
        </div>

        <a className="orange" href={button_href} >{button_text}</a>
      
    </div>
  );
};

export default Details;