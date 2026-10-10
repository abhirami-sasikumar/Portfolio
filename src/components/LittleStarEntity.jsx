import React, { useEffect, useState } from 'react';

export const LittleStarEntity = ({ themeMode = 'celestial', onClick }) => {
  const [pos, setPos] = useState({ x: 300, y: 300 });
  const isTechy = themeMode === 'techy';

  useEffect(() => {
    // Gentle free autonomous orbital floating in celestial space
    // Placed gracefully in the upper right cosmos, slowly meandering like a living star
    let animId;
    let t = 0;

    const step = () => {
      t += 0.008; // very gentle, serene pace
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Base resting anchor: comfortably in the upper-right ambient sky
      const baseX = width * 0.82;
      const baseY = height * 0.28;

      // Smooth lissajous / harmonic wave floating
      const x = baseX + Math.sin(t * 0.9) * 28 + Math.cos(t * 0.4) * 14;
      const y = baseY + Math.cos(t * 0.7) * 22 + Math.sin(t * 0.3) * 10;

      setPos({ x, y });
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
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
          {isTechy ? 'CORE ORBIT // THE LITTLE STAR' : 'THE LITTLE STAR [COMMUNE]'}
        </div>
      </div>
    </div>
  );
};

