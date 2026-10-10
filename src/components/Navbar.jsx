import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar = ({ 
  activeSection, 
  onNavigate, 
  onOpenMeditation,
  themeMode,
  onToggleTheme 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  if (themeMode === 'techy') {
    /* =========================================================================
       BEING TECHY: Executive Full-Stack Developer Console Header
       Clean, structured, professional, spacious, and un-congested.
       ========================================================================= */
    return (
      <header className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Left: Professional Brand Identity */}
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/20 bg-zinc-950 flex items-center justify-center transition-all group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] shrink-0">
              <span className="font-mono text-xs font-bold text-white tracking-wider">AS</span>
            </div>
            <div className="min-w-0">
              <span className="font-sans text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight block truncate">
                {PROFILE.name}
              </span>
              <span className="block text-[10px] sm:text-xs font-mono text-zinc-400 mt-0.5 truncate max-w-[170px] sm:max-w-none">
                Full-Stack Software Developer
              </span>
            </div>
          </a>

          {/* Middle: Clean Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 font-sans text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium whitespace-nowrap ${
                    isActive 
                      ? 'bg-white/10 text-white font-semibold' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Mode Switcher & Primary Action */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Dual-Mode Segmented Selector */}
            <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-zinc-950/90 border border-white/20 backdrop-blur-md shadow-inner text-[10px] sm:text-xs font-mono">
              <button
                onClick={() => {
                  if (themeMode !== 'techy') onToggleTheme();
                }}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  themeMode === 'techy'
                    ? 'bg-sky-400 text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to Tech Mode"
              >
                <span>TECH</span>
              </button>
              <button
                onClick={() => {
                  if (themeMode !== 'celestial') onToggleTheme();
                }}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  themeMode === 'celestial'
                    ? 'bg-white text-black font-bold shadow-[0_0_14px_rgba(255,255,255,0.7)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to My Space Mode"
              >
                <span className="whitespace-nowrap">MY SPACE</span>
              </button>
            </div>

            {/* Direct Contact Button */}
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg bg-white text-black text-[11px] sm:text-xs font-mono font-bold tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1 shadow-sm whitespace-nowrap"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown for Being Techy */}
        {mobileOpen && (
          <div className="lg:hidden px-4 pb-6 pt-2 bg-black border-b border-white/10 space-y-2 font-sans text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex justify-between items-center font-mono text-xs">
              <span className="text-zinc-500">PERSPECTIVE:</span>
              <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/20">
                <button
                  onClick={() => {
                    if (themeMode !== 'techy') onToggleTheme();
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    themeMode === 'techy' ? 'bg-sky-400 text-black' : 'text-zinc-400'
                  }`}
                >
                  TECH
                </button>
                <button
                  onClick={() => {
                    if (themeMode !== 'celestial') onToggleTheme();
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    themeMode === 'celestial' ? 'bg-white text-black' : 'text-zinc-400'
                  }`}
                >
                  MY SPACE
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }

  /* =========================================================================
     CELESTIAL: Floating / Hanging Monochromatic Island Capsule
     ========================================================================= */
  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      {/* Floating / Hanging Capsule Island Navbar */}
      <nav className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)] max-w-5xl w-full transition-all duration-300 hover:border-white/25">
        
        {/* Brand identity: Monogram + Name */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="flex items-center gap-2 sm:gap-3 group shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 group-hover:border-white flex items-center justify-center transition-all bg-void-950 text-white">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold">AS</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-sans text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 transition-colors tracking-tight leading-tight">
              {PROFILE.name}
            </span>
            <span className="block text-xs font-sans font-medium text-zinc-300 tracking-normal mt-0.5">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Floating Menu Links */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-void-900/80 border border-white/5 font-sans text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-white text-black font-semibold shadow-starlight' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Theme Toggle ("Celestial" <-> "Being Techy") & Contact Pill */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Dual-Mode Segmented Selector */}
          <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-zinc-950/90 border border-white/20 backdrop-blur-md shadow-inner text-[10px] sm:text-xs font-mono">
            <button
              onClick={() => {
                if (themeMode !== 'techy') onToggleTheme();
              }}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                themeMode === 'techy'
                  ? 'bg-sky-400 text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Switch to Tech Mode"
            >
              <span>TECH</span>
            </button>
            <button
              onClick={() => {
                if (themeMode !== 'celestial') onToggleTheme();
              }}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                themeMode === 'celestial'
                  ? 'bg-white text-black font-bold shadow-[0_0_14px_rgba(255,255,255,0.7)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Switch to My Space Mode"
            >
              <span className="whitespace-nowrap">MY SPACE</span>
            </button>
          </div>

          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black text-[11px] sm:text-xs font-mono font-semibold tracking-wider hover:bg-zinc-200 hover:shadow-starlight transition-all duration-300 flex items-center gap-1 shadow-sm whitespace-nowrap"
          >
            <span>TALK</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

      </nav>

      {/* Floating Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 max-w-sm mx-auto p-5 rounded-3xl bg-black/95 backdrop-blur-2xl border border-white/20 shadow-2xl font-sans text-sm space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileOpen(false);
              }}
              className="block w-full text-left text-zinc-300 hover:text-white py-1.5 font-medium px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-void-800 flex justify-between items-center font-mono text-xs">
            <span className="text-zinc-500">PERSPECTIVE:</span>
            <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/20">
              <button
                onClick={() => {
                  if (themeMode !== 'techy') onToggleTheme();
                  setMobileOpen(false);
                }}
                className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  themeMode === 'techy' ? 'bg-sky-400 text-black' : 'text-zinc-400'
                }`}
              >
                TECH
              </button>
              <button
                onClick={() => {
                  if (themeMode !== 'celestial') onToggleTheme();
                  setMobileOpen(false);
                }}
                className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  themeMode === 'celestial' ? 'bg-white text-black' : 'text-zinc-400'
                }`}
              >
                MY SPACE
              </button>
            </div>
          </div>
          {themeMode === 'celestial' && (
            <button
              onClick={() => {
                onOpenMeditation();
                setMobileOpen(false);
              }}
              className="text-left text-zinc-400 hover:text-white px-2 py-1 font-mono text-xs"
            >
              ✦ The Little Star Story
            </button>
          )}
        </div>
      )}
    </div>
  );
};
