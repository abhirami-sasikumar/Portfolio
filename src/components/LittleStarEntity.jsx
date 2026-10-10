import React, { useEffect, useState } from 'react';

export const LittleStarEntity = ({ themeMode = 'celestial', onClick }) => {
  const [pos, setPos] = useState({ x: 300, y: 300 });
  const isTechy = themeMode === 'techy';

  useEffect(() => {
    let target = { x: window.innerWidth * 0.75, y: window.innerHeight * 0.35 };
    let current = { ...target };
    let animId;

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const step = () => {
      // Celestial momentum & inertia follow
      current.x += (target.x - current.x) * 0.045;
      current.y += (target.y - current.y) * 0.045;
      setPos({ x: current.x, y: current.y });
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      onClick={onClick}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      className="fixed z-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto"
      title="In the space, being the little star — Click to commune"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing radiating halo */}
        <div className={`w-9 h-9 rounded-full little-star-breath flex items-center justify-center ${
          isTechy ? 'bg-emerald-500/25' : 'bg-white/20'
        }`}>
          {/* Physical stellar core */}
          <div className={`w-3.5 h-3.5 rounded-full transition-all group-hover:scale-150 ${
            isTechy 
              ? 'bg-emerald-300 shadow-[0_0_18px_4px_rgba(16,185,129,0.9)]' 
              : 'bg-white shadow-little-star'
          }`}></div>
        </div>
        
        {/* Hover Pill Badge */}
        <div className={`absolute left-10 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest whitespace-nowrap px-2.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
          isTechy 
            ? 'bg-black border border-emerald-500/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
            : 'bg-black/95 border border-white/30 text-white/90 shadow-starlight'
        }`}>
          {isTechy ? '⚡ CORE ORBIT // THE LITTLE STAR' : '✦ THE LITTLE STAR [COMMUNE]'}
        </div>
      </div>
    </div>
  );
};

