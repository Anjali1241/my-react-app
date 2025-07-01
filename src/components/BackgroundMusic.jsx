import React, { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const playAudio = () => {
      audio.play().catch(() => {});
    };
    document.addEventListener('click', playAudio, { once: true });
    return () => document.removeEventListener('click', playAudio);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/assets/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}