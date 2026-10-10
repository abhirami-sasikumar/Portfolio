import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CoreExpertise } from './components/CoreExpertise';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { CelestialSkyCanvas } from './components/CelestialSkyCanvas';
import { LittleStarEntity } from './components/LittleStarEntity';
import { MeditationModal } from './components/MeditationModal';
import { PROFILE } from './data/portfolioData';
import { ArrowUp, ArrowUpRight, Linkedin } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [meditationOpen, setMeditationOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  // Two distinct theme modes: 'celestial' (In the space being the little) <-> 'techy' (Being Techy)
  const [themeMode, setThemeMode] = useState('celestial');

  const toggleThemeMode = () => {
    const nextMode = themeMode === 'celestial' ? 'techy' : 'celestial';
    setThemeMode(nextMode);
    playChime(nextMode === 'techy' ? 784 : 528, 0.25);
  };

  // Web Audio Harmonic Chime Synthesizer
  const playChime = (freq = 440, duration = 0.25) => {
    if (isAudioMuted) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  const handleToggleAudio = () => {
    const nextState = !isAudioMuted;
    setIsAudioMuted(nextState);
    if (!nextState) {
      playChime(528, 0.3); // 528Hz pure harmonic frequency
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    playChime(660, 0.12);
  };

  return (
    <div className={`min-h-screen bg-black text-[#f4f4f5] selection:bg-white selection:text-black relative transition-colors duration-500 ${
      themeMode === 'techy' ? 'theme-techy font-sans' : 'theme-celestial font-sans'
    }`}>
      
      {/* Reticle Geometry Grid Backdrop */}
      <div className={`fixed inset-0 pointer-events-none z-[1] transition-all duration-700 ${
        themeMode === 'techy' ? 'tech-cockpit-grid' : 'celestial-grid'
      }`}></div>

      {/* Celestial Night Sky Canvas & Autonomous Little Star in Celestial Mode */}
      {themeMode === 'celestial' && (
        <>
          <CelestialSkyCanvas 
            themeMode={themeMode} 
            onNavigateSection={scrollToSection}
            onPlayChime={playChime}
          />
          <LittleStarEntity themeMode={themeMode} onClick={() => {
            setMeditationOpen(true);
            playChime(880, 0.2);
          }} />
        </>
      )}

      {/* Little Star Commune / Meditation Modal (Accessible in all modes) */}
      <MeditationModal 
        isOpen={meditationOpen} 
        onClose={() => setMeditationOpen(false)}
        onPulseStardust={() => playChime(1056, 0.3)}
      />

      {/* Top Observatory Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        onOpenMeditation={() => {
          setMeditationOpen(true);
          playChime(880, 0.2);
        }}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        themeMode={themeMode}
        onToggleTheme={toggleThemeMode}
      />

      <main className="relative z-10">
        {/* 1. Hero / About: Theme-based, User-based & Professional Core */}
        <HeroSection 
          themeMode={themeMode}
          onToggleTheme={toggleThemeMode}
          onNavigate={scrollToSection}
          onOpenMeditation={() => {
            setMeditationOpen(true);
            playChime(880, 0.2);
          }}
          onPlayChime={playChime}
        />

        {/* 2. Projects: Constellations of Engineered Projects (nemomblock video included) */}
        <FeaturedProjects themeMode={themeMode} onPlayChime={playChime} />

        {/* 3. Constellations Matrix: Architectural Tooling & Protocols */}
        <CoreExpertise themeMode={themeMode} onPlayChime={playChime} />

        {/* 4. Experience & Academic Honors */}
        <ExperienceEducation themeMode={themeMode} onPlayChime={playChime} />

        {/* 5. Celestial Relay Station (Contact Form & Direct Channels) */}
        <ContactSection themeMode={themeMode} onPlayChime={playChime} />
      </main>

      {/* Footer */}
      <footer className="border-t border-void-800/80 py-12 px-4 sm:px-8 font-mono text-xs text-zinc-600 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${themeMode === 'techy' ? 'bg-sky-400' : 'bg-white'}`}></span>
            <span className="text-zinc-400">
              {themeMode === 'techy' 
                ? `FULL-STACK PRODUCTION MATRIX • ${PROFILE.name.toUpperCase()} (MERN & PYTHON)` 
                : `MY SPACE • ${PROFILE.name.toUpperCase()}`}
            </span>
          </div>
          <div>
            {themeMode === 'techy' 
              ? 'CLEAN ARCHITECTURE • HIGH-PERFORMANCE APIS • SCALABLE DELIVERABLES' 
              : '"DEVELOP • EXPLORE • MAINTAIN • LOVE TO REPEAT"'}
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-sky-300" />
            </a>
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>RETURN TO TOP ↑</span>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
