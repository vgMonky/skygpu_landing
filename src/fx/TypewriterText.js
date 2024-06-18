import React, { useState, useEffect, useRef } from 'react';
import { useSettings } from '../states/settings_state'; // Import the settings context
import './TypewriterText.css'; // Import the CSS file for hover styles
import hoverSound from '../assets/audio/hover.mp3'; // Import the hover audio file
import enterSound from '../assets/audio/enter.mp3'; // Import the enter audio file
import dataRevealSound from '../assets/audio/data_reveal.mp3'; // Import the data reveal audio file

// Global variable to track the current playing audio for data reveal
let isDataRevealAudioPlaying = false;

const TypewriterText = ({ children, speed = 50, hover = false, textSize = '1em', ticking = false, orange = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFaded, setIsFaded] = useState(false);
  const { typeFxEnabled, muteEnabled } = useSettings(); // Access the typeFxEnabled and muteEnabled state
  const hoverAudioRef = useRef(null);
  const enterAudioRef = useRef(null);
  const dataRevealAudioRef = useRef(null);
  const spanRef = useRef(null); // Create a ref for the span element

  const playDataRevealSound = () => {
    if (isDataRevealAudioPlaying || muteEnabled) {
      return;
    }

    if (dataRevealAudioRef.current) {
      dataRevealAudioRef.current.currentTime = 0;
      dataRevealAudioRef.current.play();
      isDataRevealAudioPlaying = true;

      dataRevealAudioRef.current.onended = () => {
        isDataRevealAudioPlaying = false;
      };

      dataRevealAudioRef.current.onpause = () => {
        isDataRevealAudioPlaying = false;
      };
    }
  };

  useEffect(() => {
    if (!typeFxEnabled) {
      setDisplayedText(children); // Directly show the full text if type effect is disabled
      return;
    }

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

    // Play data reveal sound when the text starts revealing if typeFxEnabled is true
    if (typeFxEnabled) {
      playDataRevealSound();
    }

    return () => clearInterval(intervalId);
  }, [children, speed, typeFxEnabled]);

  useEffect(() => {
    if (ticking) {
      const tickInterval = setInterval(() => {
        setIsFaded((prev) => !prev);
      }, speed / 50); // Toggle fading every half of the speed duration

      return () => clearInterval(tickInterval);
    }
  }, [ticking, speed]);

  useEffect(() => {
    if (hover && hoverAudioRef.current && spanRef.current) {
      const handleMouseEnter = () => {
        if (!muteEnabled) {
          hoverAudioRef.current.currentTime = 0;
          hoverAudioRef.current.play();
        }
      };

      const spanElement = spanRef.current;
      spanElement.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        spanElement.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, [hover, muteEnabled]);

  useEffect(() => {
    if (enterAudioRef.current && spanRef.current) {
      const handleClick = () => {
        if (!muteEnabled) {
          enterAudioRef.current.currentTime = 0;
          enterAudioRef.current.play();
        }
      };

      const spanElement = spanRef.current;
      spanElement.addEventListener('click', handleClick);

      return () => {
        spanElement.removeEventListener('click', handleClick);
      };
    }
  }, [muteEnabled]);

  const typewriterClass = `${hover ? 'typewriter hover' : 'typewriter'} ${ticking ? 'ticking' : ''} ${isFaded ? 'faded' : ''} ${orange ? 'orange' : ''}`;

  return (
    <span className={typewriterClass} style={{ fontSize: textSize }} ref={spanRef}>
      {displayedText}
      <audio ref={hoverAudioRef} src={hoverSound} />
      <audio ref={enterAudioRef} src={enterSound} />
      <audio ref={dataRevealAudioRef} src={dataRevealSound} />
    </span>
  );
};

export default TypewriterText;
