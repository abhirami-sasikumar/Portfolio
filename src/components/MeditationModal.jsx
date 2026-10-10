import React from 'react';
import { X, Sparkles } from 'lucide-react';

export const MeditationModal = ({ isOpen, onClose, onPulseStardust }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-2xl">
      <div className="w-full max-w-2xl rounded-3xl border border-white/20 bg-void-950 p-6 sm:p-10 shadow-2xl relative font-mono text-xs astral-panel reticle-corner">
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 rounded-lg border border-void-800 bg-black text-zinc-400 hover:text-white"
          aria-label="Close Meditation Modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-zinc-400 text-[11px] mb-3 uppercase tracking-widest">
          <span className="text-white text-sm">✦</span>
          <span>CELESTIAL MEDITATION</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 italic">
          "In the space, being the little star."
        </h3>

        <div className="space-y-4 text-zinc-300 font-sans text-sm sm:text-base font-light leading-relaxed mb-8">
          <p>
            The cosmos is vast beyond measure. It contains blazing supernovas, sweeping nebulas, and entire galaxies. Yet on the darkest night, when a traveler is looking across uncharted waters, it is often a steady, quiet little star that points true north.
          </p>
          <div className="p-4 rounded-xl border border-white/20 bg-black font-serif italic text-white text-base">
            "Crafting things in my own way with your need. Develop, Explore, Maintain. Love to repeat."
          </div>
          <p>
            To me, engineering is not about generating loud spectacle. It is about being that steady star: writing reliable code that holds fast when systems surge, building interfaces that honor the user's attention, and finding deep fulfillment in tending to the craft every single day.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black border border-void-800 mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase">LITTLE STAR INERTIA ENGINE</span>
            <span className="text-white font-semibold">Active &bull; Drifting beside your cursor</span>
          </div>
          <button 
            onClick={onPulseStardust} 
            className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PULSE STARDUST ✦</span>
          </button>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-void-800">
          <span className="text-[10px] text-zinc-600">STEADY LIGHT IN THE VOID</span>
          <button 
            onClick={onClose} 
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200"
          >
            CONTINUE EXPLORING
          </button>
        </div>

      </div>
    </div>
  );
};

