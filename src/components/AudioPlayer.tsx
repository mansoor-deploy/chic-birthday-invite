
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      
      // If unmuting, also play (in case it hasn't started)
      if (isMuted && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Audio autoplay prevented:", e));
      }
    }
  };

  useEffect(() => {
    // Try to play on component mount (might be blocked by browser)
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set a reasonable volume
      audioRef.current.play().catch(e => console.log("Audio autoplay prevented:", e));
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={toggleMute}
        className="bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all duration-300 border border-gold/20"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? 
          <VolumeX className="w-5 h-5 text-charcoal" /> : 
          <Volume2 className="w-5 h-5 text-charcoal" />
        }
      </button>
      <audio 
        ref={audioRef} 
        loop 
        muted={isMuted}
        className="hidden"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // placeholder elegant music
      />
    </div>
  );
};

export default AudioPlayer;
