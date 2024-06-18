// src/fx/backNoiseLoop.js

import React, { useRef, useEffect } from 'react';
import backSound from '../assets/audio/back.mp3';

const BackNoiseLoop = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0; // Start with 0 volume
    audio.loop = true; // Ensure audio loops

    const fadeIn = () => {
      const fadeInterval = setInterval(() => {
        if (audio.volume < 0.1) { // Adjust maximum volume as needed
          audio.volume += 0.005; // Adjust the increment as per your preference
        } else {
          clearInterval(fadeInterval);
        }
      }, 100); // Adjust the interval for smoother or faster fade-in
    };

    audio.play().then(() => {
      fadeIn(); // Start fade-in when audio starts playing
    }).catch(error => {
      // Handle play error (like autoplay restrictions)
      console.error('Failed to play audio:', error);
    });

    return () => {
      audio.pause(); // Pause the audio when component unmounts
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <audio ref={audioRef} src={backSound} />
  );
};

export default BackNoiseLoop;
