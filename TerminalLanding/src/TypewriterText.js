// src/TypewriterText.js
import React, { useState, useEffect } from 'react';
import './TypewriterText.css'; // Import the CSS file for hover styles

const TypewriterText = ({ children, speed = 50, hover = false, textSize = '1em' }) => {
  const [displayedText, setDisplayedText] = useState('');

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

  return (
    <span className={hover ? 'typewriter hover' : 'typewriter'} style={{ fontSize: textSize }}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;
