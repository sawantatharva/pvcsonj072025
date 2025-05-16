'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const targetDate = new Date('June 7, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Update countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Animated Grid Pattern Background - Responsive grid columns */}
      <div className="absolute inset-0 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 opacity-30 grid-animation">
        {Array.from({ length: 144 }).map((_, index) => (
          <div 
            key={index} 
            className="border border-white/10 aspect-square grid-cell"
            style={{ 
              animation: `pulse-cell 3s infinite ease-in-out, grid-float ${3 + (index % 4)}s infinite ease-in-out ${index % 6 * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs - Responsive sizes */}
      <div className="absolute top-0 -left-4 w-36 sm:w-44 md:w-56 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob aspect-square"></div>
      <div className="absolute top-0 -right-4 w-36 sm:w-44 md:w-56 bg-white/80 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000 aspect-square"></div>
      <div className="absolute -bottom-8 left-20 w-36 sm:w-44 md:w-56 bg-white/60 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000 aspect-square"></div>
      
      {/* Main Content - Centered with responsive padding */}
      <div className="relative z-10 flex flex-grow flex-col justify-center items-center w-full py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center w-full">
          {/* Countdown Timer - Responsive spacing */}
          <div className="w-full flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-10">
            <div className="flex flex-col items-center justify-center w-full mb-4 sm:mb-5 md:mb-6">
              <div className="text-white text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-widest mb-2 sm:mb-3 opacity-80 text-center w-full px-2">
                REVEALING ON JUNE 7, 2025
              </div>
              <div className="h-[1px] w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
            
            <div className="flex justify-center items-center w-full mb-6 sm:mb-7 md:mb-8">
              <div className="flex flex-row items-center space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-4 mx-auto">
                <CountdownUnit value={timeLeft.days} label="DAYS" />
                <CountdownSeparator />
                <CountdownUnit value={timeLeft.hours} label="HRS" />
                <CountdownSeparator />
                <CountdownUnit value={timeLeft.minutes} label="MIN" />
                <CountdownSeparator />
                <CountdownUnit value={timeLeft.seconds} label="SEC" />
              </div>
            </div>
          </div>
          
          {/* Subline Text - Responsive text size and spacing */}
          <div className="flex flex-col items-center justify-center w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-5 sm:mb-6 md:mb-7 px-2">
            <p className="text-white/70 text-sm xs:text-base sm:text-lg md:text-xl mb-1 sm:mb-2 text-center w-full">
              Vode is not a dashboard — it&apos;s a discipline.
            </p>
            <p className="text-white/70 text-sm xs:text-base sm:text-lg md:text-xl text-center w-full">
              A modular OS for those who master finance, not manage it.
            </p>
          </div>
          
          {/* Waitlist Button - Responsive sizing */}
          <div className="flex justify-center items-center w-full mb-8 sm:mb-10 md:mb-12">
            <a 
              href="https://typeform.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm xs:text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer with Logo and Copyright - Responsive layout */}
      <footer className="relative z-10 w-full px-4 sm:px-6 py-2 sm:py-3 md:py-4 flex flex-col xs:flex-row justify-between items-center gap-3 xs:gap-0">
        {/* Vode Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Vode Logo" 
            width={120} 
            height={40} 
            className="h-auto w-auto max-w-[100px] xs:max-w-[120px] sm:max-w-[140px]" 
          />
        </div>
        
        {/* Copyright Text */}
        <div className="text-white/50 text-xs sm:text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      
      {/* Subtle Star Field - Responsive number of stars */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        {Array.from({ length: 25 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.floor(Math.random() * 4 + 4)}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
  const formattedValue = value.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center group">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg sm:rounded-xl shadow-lg group-hover:bg-black/40 transition-all duration-300">
        <div className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2.5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight tabular-nums relative overflow-hidden">
          {formattedValue}
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="text-white/70 text-[8px] xs:text-[9px] sm:text-xs font-medium tracking-widest mt-1.5 sm:mt-2">
        {label}
      </div>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <div className="separator-blink text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/50 px-0.5 xs:px-1 sm:px-1.5">
      :
    </div>
  );
}
