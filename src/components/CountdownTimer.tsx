
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <div className="font-serif italic text-2xl">The celebration has begun!</div>;
  }

  return (
    <div className="py-6 flex justify-center">
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {timeBlocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 border-2 border-gold/30 rounded-sm bg-white/50 backdrop-blur-sm shadow-sm gold-gradient">
              <span className="font-serif text-xl md:text-3xl font-medium">{block.value}</span>
            </div>
            <span className="text-xs md:text-sm mt-2 text-muted-foreground font-medium tracking-wide">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
