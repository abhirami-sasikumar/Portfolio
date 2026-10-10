import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Compass, X } from 'lucide-react';

export const FloatingModeDock = ({ 
  themeMode = 'celestial', 
  onToggleTheme, 
  onPlayChime 
}) => {
  const isTechy = themeMode === 'techy';
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Auto-dismiss the hint tooltip after 8 seconds or on interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleSwitch = (targetMode) => {
    if (themeMode !== targetMode) {
      onToggleTheme();
      setHasInteracted(true);
      setShowHint(false);
      if (onPlayChime) {
        onPlayChime(targetMode === 'techy' ? 784 : 528, 0.25);
      }
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none select-none">
      
      {/* Floating Discovery Hint Tooltip */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-2 pointer-events-auto"
          >
            <div className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium border shadow-xl backdrop-blur-xl flex items-center gap-2 ${
              isTechy
                ? 'bg-zinc-950/90 border-sky-400/40 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                : 'bg-black/90 border-white/30 text-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>
                {isTechy 
                  ? 'Switch to My Space for 3D Planets & Night Sky!' 
                  : 'Switch to Tech for Engineering & System Specs!'}
              </span>
              <button 
                onClick={() => setShowHint(false)} 
                className="text-zinc-400 hover:text-white ml-1 p-0.5 rounded-full"
                aria-label="Dismiss hint"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Glass Dock */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`pointer-events-auto p-1.5 rounded-full border backdrop-blur-2xl shadow-2xl flex items-center gap-2 transition-all duration-300 ${
          isTechy
            ? 'bg-zinc-950/85 border-sky-400/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-black/85 border-white/25 shadow-[0_12px_40px_rgba(255,255,255,0.12)]'
        }`}
      >
        {/* Label Tag on Desktop */}
        <div className="hidden sm:flex items-center gap-1.5 pl-3 pr-1 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full ${isTechy ? 'bg-sky-400' : 'bg-white'} animate-pulse`}></span>
          <span>PERSPECTIVE:</span>
        </div>

        {/* Segmented Dual Mode Switcher */}
        <div className="flex items-center p-1 rounded-full bg-black/90 border border-white/10 font-mono text-xs">
          
          {/* Tech Button */}
          <button
            onClick={() => handleSwitch('techy')}
            className={`px-3 sm:px-4 py-1.5 rounded-full font-bold transition-all duration-300 flex items-center gap-1.5 text-xs ${
              isTechy
                ? 'bg-sky-400 text-black shadow-[0_0_16px_rgba(56,189,248,0.6)] scale-105'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>TECH</span>
          </button>

          {/* My Space Button */}
          <button
            onClick={() => handleSwitch('celestial')}
            className={`px-3 sm:px-4 py-1.5 rounded-full font-bold transition-all duration-300 flex items-center gap-1.5 text-xs ${
              !isTechy
                ? 'bg-white text-black shadow-[0_0_18px_rgba(255,255,255,0.75)] scale-105'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>MY SPACE</span>
          </button>

        </div>

      </motion.div>
    </div>
  );
};

