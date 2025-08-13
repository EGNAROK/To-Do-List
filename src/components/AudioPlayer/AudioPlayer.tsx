import React, { useState } from "react";
import useSound from "use-sound";
import backgroundMusic from '../../assets/sounds/piano.mp3';
import './audio-player.scss';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(backgroundMusic, {
    volume: 0.3,
    interrupt: true,
    loop: true,
    preload: true, 
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return <button onClick={togglePlay} className="audio-player">{isPlaying ? "Pause" : "Play"}</button>;
};
