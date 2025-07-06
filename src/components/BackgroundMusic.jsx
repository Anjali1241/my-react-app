import React, { useEffect, useRef } from 'react';
import music from '../backGroundMusic/Music.mp3'; // ✅ Correct import path

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const tryPlay = () => {
      audio.volume = 0.3;
      audio.play().catch((err) => {
        console.log('Autoplay failed:', err);
      });
    };

    // Allow play after user interaction
    document.addEventListener('click', tryPlay, { once: true });

    return () => {
      document.removeEventListener('click', tryPlay);
    };
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src={music} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
