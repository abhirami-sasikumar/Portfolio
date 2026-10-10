import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Layers, 
  GraduationCap, 
  Trophy, 
  Award,
  CheckCircle2,
  Building2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const HeroSection = ({ 
  themeMode = 'celestial',
  onToggleTheme,
  onNavigate, 
  onOpenMeditation,
  onPlayChime
}) => {
  const isTechy = themeMode === 'techy';

  return (
    <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-24 sm:pt-36 pb-16 sm:pb-20 border-b border-void-800/80">
      
      {/* Top Credential Tag & Mode Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-void-900/80 text-zinc-300 font-mono text-[11px] sm:text-xs backdrop-blur-md"
        >
          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isTechy ? 'bg-sky-400' : 'bg-white'} animate-pulse shrink-0`}></span>
          <span className="truncate">
            {isTechy ? 'ENGINEERING APERTURE: ONLINE // FULL-STACK CORE' : 'SOLAR NUCLEUS // THE CORE STAR'}
          </span>
        </motion.div>
      </div>

      {/* Hero Dual-Perspective Discovery Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className={`mb-10 sm:mb-12 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 ${
          isTechy
            ? 'bg-zinc-950/85 border-sky-400/30 shadow-[0_8px_30px_rgba(56,189,248,0.08)]'
            : 'bg-void-950/85 border-white/20 shadow-[0_12px_35px_rgba(255,255,255,0.05)]'
        }`}
      >
        <div className="flex items-center gap-3.5 w-full md:w-auto">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
            isTechy 
              ? 'bg-sky-400/10 border-sky-400/30 text-sky-400' 
              : 'bg-white/10 border-white/30 text-white'
          }`}>
            {isTechy ? <Terminal className="w-5 h-5 text-sky-400" /> : <Compass className="w-5 h-5 text-white" />}
          </div>
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>TWO INTERACTIVE WORLDS OF ABHIRAMI</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 mt-0.5 font-sans font-light">
              {isTechy 
                ? 'Currently in TECH Mode (Clean Architecture & API Matrices). Switch to explore the 3D Solar System & Literary Space!'
                : 'Currently in MY SPACE Mode (3D Solar System & Philosophy). Switch to examine production system architecture & API specs!'}
            </p>
          </div>
        </div>

        {/* Action Toggle Inside Card */}
        <div className="flex items-center p-1 rounded-full bg-black/90 border border-white/20 shrink-0 font-mono text-xs shadow-inner w-full md:w-auto justify-center">
          <button
            onClick={() => { if (!isTechy) onToggleTheme(); }}
            className={`px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold ${
              isTechy 
                ? 'bg-sky-400 text-black shadow-[0_0_14px_rgba(56,189,248,0.6)]' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>TECH</span>
          </button>
          <button
            onClick={() => { if (isTechy) onToggleTheme(); }}
            className={`px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold ${
              !isTechy 
                ? 'bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.7)]' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>MY SPACE</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Professional Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase block">
              {isTechy ? '// ARCHITECTURAL & PRODUCT SPEC' : '// POETIC & ENGINEERING HORIZON'}
            </span>
            <h1 
              className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] ${
                isTechy ? 'font-sans' : 'font-serif'
              }`}
              style={isTechy ? { fontFamily: "'Plus Jakarta Sans', sans-serif" } : undefined}
            >
              {PROFILE.name}
            </h1>

            {isTechy ? (
              <div 
                className="space-y-1.5 pt-1 font-sans"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-sky-400"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Full-Stack Developer
                </div>
                <div 
                  className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Scalable Web &amp; Cross-Platform Mobile
                </div>
              </div>
            ) : (
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-zinc-200 tracking-wide">
                In the space, being the little — Poet in literature, creator in code.
              </p>
            )}
          </div>

          {/* Techy Mode: Architecture & Full-Stack Core // My Space Mode: Poetic & Literary Space */}
          {isTechy ? (
            /* BEING TECHY: Direct Professional Engineering Overview */
            <div className="p-6 rounded-2xl border-l-2 border-sky-400 bg-black border border-white/15 space-y-3.5 shadow-[0_0_25px_rgba(56,189,248,0.06)]">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="uppercase tracking-widest text-sky-400 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  <span>FULL-STACK ARCHITECTURE // PRODUCTION ENGINEERING</span>
                </span>
                <span className="text-zinc-500 font-mono text-[10px]">PRODUCTION READY</span>
              </div>

              <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                Building scalable web platforms, high-performance APIs, and cross-platform mobile apps.
              </h3>

              {/* Core Signature Quote */}
              <div className="p-3.5 rounded-xl border border-sky-400/25 bg-sky-950/25 font-serif italic text-sky-200 text-xs sm:text-sm flex items-start gap-2.5">
                <span className="text-sky-400 text-sm leading-none shrink-0 mt-0.5">✦</span>
                <p>
                  "Crafting things in my own way with your need. Develop, Explore, Maintain. Love to repeat."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed font-normal">
                Specialized in end-to-end software development with modern <strong>React.js frontends</strong>, scalable <strong>Node.js and Python/Django backends</strong>, and native-grade <strong>React Native mobile applications</strong>. Focused on clean architecture, modular codebases, and reliable client deliverables.
              </p>
            </div>
          ) : (
            /* MY SPACE: The Little Star Commune & Core Philosophy */
            <div className="p-7 sm:p-8 rounded-[2.8rem] border border-white/20 bg-void-950/85 backdrop-blur-xl space-y-4 relative overflow-hidden shadow-[0_12px_45px_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
                <span className="uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>✦ IN THE SPACE, BEING THE LITTLE STAR</span>
                </span>
                <span className="text-zinc-300 font-mono text-[10px] px-3 py-1 rounded-full border border-white/15 bg-white/5">
                  COMMUNE MANIFESTO
                </span>
              </div>

              <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                "In the space, being the little star."
              </h2>

              {/* Core Philosophy Signature Box */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/25 bg-black/80 font-serif italic text-white text-sm sm:text-base shadow-[0_0_25px_rgba(255,255,255,0.06)] flex items-start gap-3">
                <span className="text-white text-base sm:text-lg leading-none shrink-0 mt-0.5">✦</span>
                <p className="leading-relaxed">
                  "Crafting things in my own way with your need. Develop, Explore, Maintain. Love to repeat."
                </p>
              </div>

              {/* Core Philosophy Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                <p>
                  The cosmos is vast beyond measure. It contains blazing supernovas, sweeping nebulas, and entire galaxies. Yet on the darkest night, when a traveler is looking across uncharted waters, it is often a steady, quiet little star that points true north.
                </p>
                <p>
                  To me, engineering is not about generating loud spectacle. It is about being that steady star: writing reliable code that holds fast when systems surge, building interfaces that honor the user's attention, and finding deep fulfillment in tending to the craft every single day.
                </p>
              </div>

              {/* Direct Commune Action */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 text-[11px] font-mono">
                <span className="text-zinc-400">ABHIRAMI SASIKUMAR &bull; PERSONAL ESSENCE</span>
                <button 
                  onClick={onOpenMeditation}
                  className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5 font-sans text-xs"
                >
                  <span>✦ COMMUNE WITH THE LITTLE STAR</span>
                </button>
              </div>
            </div>
          )}

          {/* Core Professional Bio */}
          {isTechy ? (
            <p className="text-justify text-zinc-300 font-light text-sm sm:text-base leading-relaxed font-sans">
              Results-driven Full-Stack Software Developer with <strong>2 years of production experience</strong> designing, developing, and deploying high-impact software solutions. Specialized in architecting responsive web applications using the <strong>MERN Stack (React.js, Node.js, Express, MongoDB)</strong>, robust backend APIs with <strong>Python &amp; Django Framework</strong>, and native-grade mobile applications with <strong>React Native</strong>. Driven by a deep passion for research and technical exploration, backed by solid computer science foundations and containerized Docker deployments.
            </p>
          ) : (
            <p className="text-justify text-zinc-200 font-light text-sm sm:text-base leading-relaxed font-sans">
              Rooted in computer science foundations and <strong>2 years of production engineering at ICFOSS</strong>, I architect digital architectures that live and breathe: fluid <strong>React.js &amp; GIS web interfaces</strong>, robust <strong>Python/Django backends</strong> that hold steady under weight, and cross-platform <strong>React Native mobile apps</strong> crafted with care. Driven by technical research, literature, and the quiet beauty of writing elegant code.
            </p>
          )}

          {/* Professional Highlights Checklist / Architecture Matrix */}
          {isTechy ? (
            /* Being Techy: Executive Architecture Specification Console */
            <div className="tech-panel tech-sheen rounded-2xl overflow-hidden font-mono text-xs border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]">
              {/* Console Bar */}
              <div className="terminal-header px-4 py-2.5 flex items-center justify-between border-b border-white/10 bg-zinc-950/90">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
                  </div>
                  <span className="text-zinc-400 text-[11px] font-mono ml-2">architecture.spec.ts</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-zinc-400">SYSTEMS READY</span>
                </div>
              </div>

              {/* Console Body: Clean Architectural Matrix */}
              <div className="p-4 sm:p-5 bg-black/95 font-mono text-[11px] sm:text-xs space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] text-sky-400 font-semibold tracking-wider block uppercase">01 // FRONTEND ECOSYSTEM</span>
                    <span className="text-white font-medium block">React.js &bull; Tailwind CSS &bull; GIS &amp; Map Plotting</span>
                    <span className="text-[10px] text-zinc-500 block">Responsive SPAs, Real-Time Dashboards &amp; Leaflet</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] text-sky-400 font-semibold tracking-wider block uppercase">02 // BACKEND ARCHITECTURE</span>
                    <span className="text-white font-medium block">Python/Django &bull; Node.js &bull; Express</span>
                    <span className="text-[10px] text-zinc-500 block">REST APIs, ORM, Microservices</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] text-sky-400 font-semibold tracking-wider block uppercase">03 // MOBILE ENGINEERING</span>
                    <span className="text-white font-medium block">React Native &bull; Cross-Platform</span>
                    <span className="text-[10px] text-zinc-500 block">Offline Caching, Native Device Workflows</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-white/5 space-y-1">
                    <span className="text-[10px] text-sky-400 font-semibold tracking-wider block uppercase">04 // DEPLOYMENT &amp; RUNTIME</span>
                    <span className="text-white font-medium block">Docker &bull; Linux VM &bull; MongoDB / SQL</span>
                    <span className="text-[10px] text-zinc-500 block">Containerization, High Availability</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500 font-mono">STANDARDS: CLEAN CODE &bull; REST &bull; RBAC</span>
                  <span className="text-sky-300 font-mono font-medium flex items-center gap-1.5">
                    <span>DEPLOYED &amp; VERIFIED</span>
                    <span className="text-xs">✓</span>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* My Space: The Lunar Developer Chamber & Interactive Moon Sphere */
            <div className="astral-panel rounded-[2.8rem] overflow-hidden font-mono text-xs border border-white/20 shadow-[0_12px_45px_rgba(255,255,255,0.06)] group/moon-panel">
              {/* Lunar Header */}
              <div className="px-5 py-3 flex items-center justify-between border-b border-white/10 bg-void-950/90">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xs">✦</span>
                  <span className="text-white font-medium text-[11px] tracking-wider">LUNAR DEVELOPER CORE // NOCTURNAL FOCUS</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span className="text-white font-medium">FULL ILLUMINATION 🌕</span>
                </div>
              </div>

              {/* Lunar Body */}
              <div className="p-5 sm:p-6 bg-black/90 font-mono text-xs space-y-4">
                <div 
                  onClick={() => {
                    if (onPlayChime) onPlayChime(880, 0.25);
                  }}
                  className="flex items-center gap-4 p-4 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-pointer group/moon"
                  title="Click the Moon to pulse stardust"
                >
                  {/* Glowing 3D CSS Moon with Realistic Craters */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white via-slate-200 to-slate-400 shadow-[0_0_24px_rgba(255,255,255,0.65)] shrink-0 overflow-hidden group-hover/moon:scale-110 group-hover/moon:shadow-[0_0_32px_rgba(255,255,255,0.9)] transition-all duration-300">
                    {/* Lunar Craters */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-slate-500/35"></div>
                    <div className="absolute bottom-2.5 right-2 w-3.5 h-3.5 rounded-full bg-slate-600/40"></div>
                    <div className="absolute top-5 right-2.5 w-2 h-2 rounded-full bg-slate-500/30"></div>
                    <div className="absolute bottom-1.5 left-4 w-1.5 h-1.5 rounded-full bg-slate-500/30"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_-3px_-3px_7px_rgba(30,41,59,0.55)]"></div>
                  </div>
                  <div>
                    <span className="text-white font-bold text-xs sm:text-sm font-sans block group-hover/moon:text-white transition-colors">
                      The Celestial Moon &bull; Developer Observatory
                    </span>
                    <p className="text-zinc-300 text-[11px] font-sans font-light mt-0.5 leading-relaxed">
                      "Coding under the moonlight — where quiet nocturnal focus transforms complex logic into high-impact full-stack software."
                    </p>
                  </div>
                </div>

                {/* 4 Themed Planetary/Lunar Developer Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300 text-[11px]">
                  <div className="p-3.5 rounded-[1.8rem] bg-black/60 border border-white/5 space-y-1 hover:border-white/20 transition-colors">
                    <span className="text-[10px] text-white font-bold tracking-wider block">🌕 LUNAR FRONTEND ARCHITECTURE</span>
                    <span className="text-zinc-200 font-medium block">React.js &bull; Tailwind CSS &bull; Leaflet GIS</span>
                  </div>
                  <div className="p-3.5 rounded-[1.8rem] bg-black/60 border border-white/5 space-y-1 hover:border-white/20 transition-colors">
                    <span className="text-[10px] text-white font-bold tracking-wider block">🌖 GRAVITATIONAL BACKEND ENGINE</span>
                    <span className="text-zinc-200 font-medium block">Python &bull; Django REST &bull; Node.js</span>
                  </div>
                  <div className="p-3.5 rounded-[1.8rem] bg-black/60 border border-white/5 space-y-1 hover:border-white/20 transition-colors">
                    <span className="text-[10px] text-white font-bold tracking-wider block">🌗 ORBITAL MOBILE CLIENTS</span>
                    <span className="text-zinc-200 font-medium block">React Native &bull; Offline Data Caching</span>
                  </div>
                  <div className="p-3.5 rounded-[1.8rem] bg-black/60 border border-white/5 space-y-1 hover:border-white/20 transition-colors">
                    <span className="text-[10px] text-white font-bold tracking-wider block">🌘 DEEP-SPACE DEPLOYMENT</span>
                    <span className="text-zinc-200 font-medium block">Docker &bull; Linux VM &bull; MongoDB / SQL</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Triggers */}
          <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigate('projects')}
              className={`px-6 py-3.5 rounded-full font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                isTechy 
                  ? 'bg-sky-400 text-black hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.35)]' 
                  : 'bg-white text-black hover:bg-zinc-200 hover:shadow-starlight'
              }`}
            >
              {isTechy ? <Terminal className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
              <span>{isTechy ? 'VIEW CODE & PROJECTS' : 'EXPLORE WORKS'}</span>
            </button>

            <button 
              onClick={() => onNavigate('contact')}
              className={`px-6 py-3.5 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                isTechy
                  ? 'border-sky-400/40 text-sky-300 hover:bg-sky-400/10'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/5'
              }`}
            >
              <span>{isTechy ? 'START CONSULTATION' : 'GET IN TOUCH'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {!isTechy ? (
              <button 
                onClick={onOpenMeditation}
                className="px-5 py-3.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
              >
                <span>✦ COMMUNE WITH THE LITTLE STAR</span>
              </button>
            ) : (
              <button 
                onClick={onOpenMeditation}
                className="px-5 py-3.5 rounded-full border border-sky-400/30 text-sky-300 hover:bg-sky-400/10 transition-all text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
              >
                <span>✦ THE LITTLE STAR PHILOSOPHY</span>
              </button>
            )}
          </div>

        </div>

        {/* Right Column: Key Professional Credentials & Honors Bento Card */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Experience Card */}
          <div className={`${
            isTechy 
              ? 'tech-panel tech-sheen p-6 rounded-2xl space-y-3' 
              : 'astral-panel p-7 sm:p-8 rounded-[2.8rem] space-y-3.5 border border-white/20 bg-black/80 backdrop-blur-xl hover:border-white/40 shadow-[0_12px_45px_rgba(255,255,255,0.05)]'
          } transition-all duration-300 cursor-default`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <span className="font-mono text-xs text-white font-bold flex items-center gap-2">
                <Building2 className={`w-4 h-4 ${isTechy ? 'text-sky-400' : 'text-white'}`} />
                <span>{isTechy ? 'SYS // ACTIVE POST' : 'CURRENT POSITION'}</span>
              </span>
              <span className={`text-[10px] font-mono px-3 py-1 rounded-full border transition-all ${
                isTechy 
                  ? 'text-sky-300 bg-sky-950/70 border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.2)]' 
                  : 'text-zinc-300 bg-void-900 border-void-700'
              }`}>
                {isTechy ? 'RUNNING // PRODUCTION' : 'ACTIVE'}
              </span>
            </div>
            <div>
              <h4 className={`text-xl text-white ${isTechy ? 'font-sans font-bold group-hover:text-sky-300' : 'font-serif'}`}>
                Research Assistant &bull; Open IoT
              </h4>
              <p className="font-mono text-xs text-zinc-400 mt-0.5">ICFOSS (International Centre for Free &amp; Open Source Software)</p>
              <p className="text-zinc-300 text-xs font-sans mt-2.5 leading-relaxed font-light">
                Oct 2025 – Present &bull; Leading full-stack web and mobile application engineering, dynamic REST APIs, and production deployments.
              </p>
            </div>
          </div>

          {/* Academic Honors Card */}
          <div className={`${
            isTechy 
              ? 'tech-panel tech-sheen p-6 rounded-2xl space-y-3' 
              : 'astral-panel p-7 sm:p-8 rounded-[2.8rem] space-y-4 border border-white/20 bg-black/80 backdrop-blur-xl hover:border-white/40 shadow-[0_12px_45px_rgba(255,255,255,0.05)]'
          } transition-all duration-300 cursor-default`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <span className="font-mono text-xs text-white font-bold flex items-center gap-2">
                <Trophy className={`w-4 h-4 ${isTechy ? 'text-sky-400' : 'text-white'}`} />
                <span>{isTechy ? 'VALIDATED HONORS & AWARDS' : 'ACADEMIC HONORS'}</span>
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className={`${
                isTechy 
                  ? 'p-3 rounded-xl bg-black/90 border border-white/10 hover:border-sky-400/40' 
                  : 'p-4 sm:p-5 rounded-[2rem] bg-black/90 border border-white/10 hover:border-white/30'
              } transition-colors`}>
                <span className="text-white font-bold text-sm block">Academic Topper Award 2022</span>
                <span className="text-zinc-400 block mt-1">B.Sc. in Computer Science &bull; Academic Topper</span>
                <span className="text-[11px] text-zinc-500 block">University Institute of Technology, University of Kerala</span>
              </div>
              <div className={`${
                isTechy 
                  ? 'p-3 rounded-xl bg-black/90 border border-white/10 hover:border-sky-400/40' 
                  : 'p-4 sm:p-5 rounded-[2rem] bg-black/90 border border-white/10 hover:border-white/30'
              } transition-colors`}>
                <span className="text-white font-bold text-sm block">Best Research Paper Award</span>
                <span className="text-zinc-400 block mt-1">"Future into the deep! Artificial neurons into machines"</span>
                <span className="text-[11px] text-zinc-500 block">QUAESITIO 2022-2023, Mahatma Gandhi University</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className={`${
            isTechy 
              ? 'tech-panel tech-sheen p-6 rounded-2xl space-y-3' 
              : 'astral-panel p-7 sm:p-8 rounded-[2.8rem] space-y-3.5 border border-white/20 bg-black/80 backdrop-blur-xl hover:border-white/40 shadow-[0_12px_45px_rgba(255,255,255,0.05)]'
          } transition-all duration-300 cursor-default`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <span className="font-mono text-xs text-white font-bold flex items-center gap-2">
                <GraduationCap className={`w-4 h-4 ${isTechy ? 'text-sky-400' : 'text-white'}`} />
                <span>EDUCATION</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full">POST-GRADUATE</span>
            </div>
            <div className="font-mono text-xs">
              <h4 className="text-sm font-bold text-white font-sans">M.Sc. in Computer Science</h4>
              <p className="text-zinc-400 mt-1">Christ Nagar College, University of Kerala (2022–2024)</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
