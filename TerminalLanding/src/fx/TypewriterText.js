// src/fx/TypewriterText.js
import React, { useState, useEffect } from 'react';
import './TypewriterText.css'; // Import the CSS file for hover styles

const TypewriterText = ({ children, speed = 50, hover = false, textSize = '1em', ticking = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const text = children;
    setDisplayedText(''); // Reset the displayed text before starting the typing effect

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [children, speed]);

  useEffect(() => {
    if (ticking) {
      const tickInterval = setInterval(() => {
        setIsFaded((prev) => !prev);
      }, speed / 150); // Toggle fading every half of the speed duration

      return () => clearInterval(tickInterval);
    }
  }, [ticking, speed]);

  return (
    <span className={`${hover ? 'typewriter hover' : 'typewriter'} ${ticking ? 'ticking' : ''} ${isFaded ? 'faded' : ''}`} style={{ fontSize: textSize }}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;

