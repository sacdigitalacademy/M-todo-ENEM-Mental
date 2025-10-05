import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set ENEM date (typically in November)
    const enemDate = new Date('2024-11-03T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = enemDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center animate-pulse">
      <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold">
        <Clock className="w-5 h-5" />
        <span>⏰ FALTAM MENOS DE 60 DIAS PARA O ENEM 2024</span>
      </div>
      <div className="text-xs mt-1 opacity-90">
        Cada dia perdido é uma oportunidade a menos
      </div>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default Header;