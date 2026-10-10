import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Layers, 
  Wrench,
  Layout,
  Server,
  Database,
  Sparkles,
  Cpu,
  Orbit,
  Atom,
  Radio,
  Compass,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

// Technical Mode Metadata
const TECH_CATEGORY_META = {
  "Frontend Development": {
    icon: Layout,
    accentColor: "text-sky-400",
    badgeBg: "bg-sky-500/10 border-sky-400/30 text-sky-300",
    borderHover: "hover:border-sky-400/70",
    sheenColor: "via-sky-400",
    glowShadow: "hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)]",
    dotActive: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
  },
  "Backend Development": {
    icon: Server,
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
    borderHover: "hover:border-emerald-400/70",
    sheenColor: "via-emerald-400",
    glowShadow: "hover:shadow-[0_12px_35px_rgba(52,211,153,0.2)]",
    dotActive: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
  },
  "Mobile Development": {
    icon: Smartphone,
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
    borderHover: "hover:border-cyan-400/70",
    sheenColor: "via-cyan-400",
    glowShadow: "hover:shadow-[0_12px_35px_rgba(34,211,238,0.2)]",
    dotActive: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
  },
  "Databases & DevOps": {
    icon: Database,
    accentColor: "text-violet-400",
    badgeBg: "bg-violet-500/10 border-violet-400/30 text-violet-300",
    borderHover: "hover:border-violet-400/70",
    sheenColor: "via-violet-400",
    glowShadow: "hover:shadow-[0_12px_35px_rgba(167,139,250,0.2)]",
    dotActive: "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]"
  }
};

// My Space (Celestial) Mode Metadata - The 4 Knowledge Constellations
const CELESTIAL_SPHERES = {
  "Frontend Development": {
    celestialName: "Frontend Galaxy",
    designation: "Constellation of UX & GIS Navigation",
    tagline: "Interface synthesis, GIS cartography & dynamic reactive vectors",
    starGlyph: "✦",
    spectralClass: "Spectral: Cyan Pulsar",
    accentColor: "text-sky-300",
    badgeBg: "bg-sky-500/15 border-sky-400/40 text-sky-200",
    orbBg: "radial-gradient(circle at 35% 35%, #7dd3fc 0%, #0284c7 50%, #082f49 100%)",
    haloGlow: "rgba(56, 189, 248, 0.45)",
    ringColor: "border-sky-400/50",
    sheenColor: "via-sky-400",
    chimeFreq: 587.33, // D5
    icon: Orbit
  },
  "Backend Development": {
    celestialName: "Backend Nebula",
    designation: "Gravitational Core & RESTful Engines",
    tagline: "Graviton backends, Django ORM reactors & distributed APIs",
    starGlyph: "◆",
    spectralClass: "Spectral: Emerald Quasar",
    accentColor: "text-emerald-300",
    badgeBg: "bg-emerald-500/15 border-emerald-400/40 text-emerald-200",
    orbBg: "radial-gradient(circle at 35% 35%, #6ee7b7 0%, #059669 50%, #022c22 100%)",
    haloGlow: "rgba(52, 211, 153, 0.45)",
    ringColor: "border-emerald-400/50",
    sheenColor: "via-emerald-400",
    chimeFreq: 659.25, // E5
    icon: Atom
  },
  "Mobile Development": {
    celestialName: "Mobile Orbit",
    designation: "Roaming Satellites & Offline Telemetry",
    tagline: "Field probes, native Android capsules & offline cache",
    starGlyph: "✧",
    spectralClass: "Spectral: Azure Beacon",
    accentColor: "text-cyan-300",
    badgeBg: "bg-cyan-500/15 border-cyan-400/40 text-cyan-200",
    orbBg: "radial-gradient(circle at 35% 35%, #67e8f9 0%, #0891b2 50%, #164e63 100%)",
    haloGlow: "rgba(34, 211, 238, 0.45)",
    ringColor: "border-cyan-400/50",
    sheenColor: "via-cyan-400",
    chimeFreq: 783.99, // G5
    icon: Radio
  },
  "Databases & DevOps": {
    celestialName: "DevOps Horizon",
    designation: "Containment Vaults & Orbital Launchers",
    tagline: "Docker pods, relational vaults & automated pipelines",
    starGlyph: "★",
    spectralClass: "Spectral: Solar Corona",
    accentColor: "text-amber-300",
    badgeBg: "bg-amber-500/15 border-amber-400/40 text-amber-200",
    orbBg: "radial-gradient(circle at 35% 35%, #fde047 0%, #d97706 50%, #451a03 100%)",
    haloGlow: "rgba(251, 191, 36, 0.45)",
    ringColor: "border-amber-400/50",
    sheenColor: "via-amber-400",
    chimeFreq: 880.00, // A5
    icon: Compass
  }
};

export const CoreExpertise = ({ themeMode = 'celestial', onPlayChime }) => {
  const isTechy = themeMode === 'techy';
  const [activeSphereFilter, setActiveSphereFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Filter skills list when a specific sphere filter is selected in My Space mode
  const displayedSkills = isTechy || activeSphereFilter === 'all'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(group => group.category === activeSphereFilter);

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-void-800/80">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-5xl mx-auto mb-14"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-3 ${
          isTechy 
            ? 'border-white/20 bg-void-900 text-zinc-300 font-mono' 
            : 'border-white/30 bg-black/60 backdrop-blur-md text-zinc-200 font-serif tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.08)]'
        }`}>
          {isTechy ? (
            <>
              <Wrench className="w-3.5 h-3.5 text-white" />
              <span>SYS_03 // CORE CAPABILITIES MATRIX</span>
            </>
          ) : (
            <>
              <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '14s' }} />
              <span>02 // PLANET CHRONOS • THE KNOWLEDGE CONSTELLATIONS</span>
            </>
          )}
        </div>

        <h2 className={`text-3xl sm:text-5xl font-normal text-white tracking-tight ${
          isTechy ? 'font-sans font-bold' : 'font-serif'
        }`}>
          {isTechy ? 'Core Technologies & Technical Stack' : 'Knowledge Constellations & Celestial Stack'}
        </h2>

        <p className="text-zinc-400 text-sm mt-3 font-sans font-light max-w-3xl mx-auto leading-relaxed">
          {isTechy
            ? 'Disciplines mastered across full-stack web platforms, Python/Django backends, and React Native mobile apps.'
            : 'Where code forms living galaxies, and architectural disciplines orbit as enduring stars across deep-space telemetry.'}
        </p>
      </motion.div>

      {/* Constellation Switcher / Filter Pills (My Space Mode Only) */}
      {!isTechy && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          <button
            type="button"
            onClick={() => {
              setActiveSphereFilter('all');
              if (onPlayChime) onPlayChime(520, 0.08);
            }}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
              activeSphereFilter === 'all'
                ? 'bg-white text-black font-semibold shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-105'
                : 'bg-black/60 text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>ALL 4 CONSTELLATIONS</span>
          </button>

          {SKILLS_LIST.map((group) => {
            const sphere = CELESTIAL_SPHERES[group.category];
            const isSelected = activeSphereFilter === group.category;
            const Icon = sphere?.icon || Orbit;

            return (
              <button
                key={group.category}
                type="button"
                onClick={() => {
                  setActiveSphereFilter(group.category);
                  if (onPlayChime) onPlayChime(sphere?.chimeFreq || 600, 0.1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? `${sphere.badgeBg} border-white/50 scale-105 font-semibold text-white`
                    : 'bg-black/60 text-zinc-400 border border-white/10 hover:border-white/30 hover:text-zinc-200'
                }`}
                style={isSelected ? { boxShadow: `0 0 24px ${sphere.haloGlow}` } : undefined}
              >
                <Icon className={`w-3 h-3 ${sphere.accentColor}`} />
                <span>{sphere.starGlyph} {sphere.celestialName.toUpperCase()}</span>
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Interactive Constellation Cards Container */}
      <AnimatePresence mode="wait">
        {activeSphereFilter === 'all' ? (
          <motion.div 
            key="all-spheres"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs mb-14"
          >
            {SKILLS_LIST.map((group, idx) => {
              const techMeta = TECH_CATEGORY_META[group.category] || TECH_CATEGORY_META["Frontend Development"];
              const celestialSphere = CELESTIAL_SPHERES[group.category] || CELESTIAL_SPHERES["Frontend Development"];
              const TechIcon = techMeta.icon;
              const CelestialIcon = celestialSphere.icon;

              return (
                <motion.div 
                  key={group.category}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onMouseEnter={() => {
                    if (onPlayChime) {
                      onPlayChime(isTechy ? 560 + idx * 80 : celestialSphere.chimeFreq, 0.08);
                    }
                  }}
                  className={`group/card relative ${
                    isTechy 
                      ? `rounded-3xl p-6 sm:p-7 border bg-zinc-950/90 border-zinc-800 ${techMeta.borderHover} ${techMeta.glowShadow}` 
                      : 'astral-panel rounded-[2.8rem] p-7 border-white/15 hover:border-white/40 hover:shadow-2xl'
                  } overflow-hidden flex flex-col justify-between`}
                >
                  {/* Top Accent Sheen Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
                    isTechy ? techMeta.sheenColor : celestialSphere.sheenColor
                  } to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Subtle Background Glow Aura */}
                  <div 
                    className="absolute -top-14 -right-14 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20 group-hover/card:opacity-40 transition-opacity duration-500"
                    style={{
                      backgroundColor: isTechy ? 'rgba(255,255,255,0.1)' : celestialSphere.haloGlow
                    }}
                  ></div>

                  {/* Card Header */}
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center justify-between">
                      {isTechy ? (
                        <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 ${techMeta.badgeBg}`}>
                          <TechIcon className={`w-5 h-5 ${techMeta.accentColor}`} />
                        </div>
                      ) : (
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <div 
                            className={`absolute inset-0 rounded-full border border-dashed ${celestialSphere.ringColor} opacity-70 group-hover/card:rotate-180 transition-transform duration-1000`}
                            style={{ transform: 'rotate(-20deg) scale(1.15)' }}
                          ></div>
                          <div 
                            className="w-8 h-8 rounded-full shadow-lg relative flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110"
                            style={{
                              background: celestialSphere.orbBg,
                              boxShadow: `0 0 16px ${celestialSphere.haloGlow}`
                            }}
                          >
                            <CelestialIcon className="w-3.5 h-3.5 text-white/90 drop-shadow" />
                          </div>
                        </div>
                      )}

                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                        isTechy 
                          ? 'bg-zinc-900/90 border-zinc-800 text-zinc-500' 
                          : `${celestialSphere.badgeBg}`
                      }`}>
                        {isTechy ? `MOD_0${idx + 1}` : `ORBIT_0${idx + 1}`}
                      </span>
                    </div>

                    <div className="border-b border-zinc-800/80 pb-3">
                      <h3 className={`text-white font-bold tracking-wider text-sm transition-colors ${
                        !isTechy && 'font-serif text-base tracking-wide text-zinc-100'
                      }`}>
                        {isTechy 
                          ? group.category.toUpperCase() 
                          : celestialSphere.celestialName}
                      </h3>
                      
                      {!isTechy && (
                        <p className="text-[11px] text-zinc-400 font-sans mt-0.5 font-light leading-snug">
                          {celestialSphere.designation}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2 text-[10px] text-zinc-500 font-mono">
                        <span>{celestialSphere.spectralClass}</span>
                        <span>{group.skills.length} STARS</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Skill Nodes */}
                  <div className="space-y-2 font-sans text-sm flex-1">
                    {group.skills.map((skill, sIdx) => {
                      const isHovered = hoveredSkill === `${group.category}-${skill}`;

                      return (
                        <motion.div 
                          key={sIdx}
                          whileHover={{ x: 4, transition: { duration: 0.15 } }}
                          onMouseEnter={() => {
                            setHoveredSkill(`${group.category}-${skill}`);
                            if (onPlayChime) {
                              onPlayChime((isTechy ? 580 : celestialSphere.chimeFreq) + sIdx * 20, 0.04);
                            }
                          }}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group/item p-2.5 ${
                            isTechy ? 'rounded-xl' : 'rounded-2xl'
                          } ${
                            isTechy 
                              ? 'bg-black/80 hover:bg-zinc-900 border border-zinc-800/70 hover:border-white/25' 
                              : 'bg-zinc-950/70 hover:bg-black/90 border border-white/5 hover:border-white/30 hover:shadow-[0_4px_18px_rgba(255,255,255,0.04)]'
                          } flex items-center justify-between transition-colors duration-150 cursor-default`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {isTechy ? (
                              <span className={`w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/item:${techMeta.dotActive} transition-colors duration-200 flex-shrink-0`}></span>
                            ) : (
                              <span className={`text-[11px] ${celestialSphere.accentColor} transition-colors duration-200 flex-shrink-0`}>
                                {celestialSphere.starGlyph}
                              </span>
                            )}
                            <span className="text-zinc-300 group-hover/item:text-white font-normal text-xs sm:text-sm transition-colors truncate">
                              {skill}
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-mono transition-opacity duration-150 ${
                              isHovered ? 'opacity-100 text-zinc-300' : 'opacity-0 text-zinc-600'
                            }`}>
                              {isTechy ? '✦' : 'ORBIT: 100%'}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Card Footer Status Indicator */}
                  <div className="mt-5 pt-3 border-t border-zinc-900/90 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-zinc-400 font-mono">
                        {isTechy ? 'VERIFIED DISCIPLINE' : 'ORBITAL STABILITY'}
                      </span>
                    </span>
                    <span>
                      {isTechy ? 'PRODUCTION READY' : 'HARMONIC STATE'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            key={activeSphereFilter}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="max-w-2xl mx-auto font-mono text-xs mb-14"
          >
            {displayedSkills.map((group, idx) => {
              const techMeta = TECH_CATEGORY_META[group.category] || TECH_CATEGORY_META["Frontend Development"];
              const celestialSphere = CELESTIAL_SPHERES[group.category] || CELESTIAL_SPHERES["Frontend Development"];
              const TechIcon = techMeta.icon;
              const CelestialIcon = celestialSphere.icon;

              return (
                <motion.div 
                  key={group.category}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onMouseEnter={() => {
                    if (onPlayChime) {
                      onPlayChime(isTechy ? 560 + idx * 80 : celestialSphere.chimeFreq, 0.08);
                    }
                  }}
                  className={`group/card relative ${
                    isTechy 
                      ? `rounded-3xl p-7 sm:p-9 border bg-zinc-950/90 border-zinc-800 ${techMeta.borderHover} ${techMeta.glowShadow}` 
                      : 'astral-panel rounded-[2.8rem] p-8 sm:p-10 border-white/20 hover:border-white/40 shadow-2xl'
                  } overflow-hidden flex flex-col justify-between`}
                >
                  {/* Top Accent Sheen Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
                    isTechy ? techMeta.sheenColor : celestialSphere.sheenColor
                  } to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Subtle Background Glow Aura */}
                  <div 
                    className="absolute -top-14 -right-14 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-25 group-hover/card:opacity-45 transition-opacity duration-500"
                    style={{
                      backgroundColor: isTechy ? 'rgba(255,255,255,0.1)' : celestialSphere.haloGlow
                    }}
                  ></div>

                  {/* Card Header */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      {isTechy ? (
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 ${techMeta.badgeBg}`}>
                          <TechIcon className={`w-6 h-6 ${techMeta.accentColor}`} />
                        </div>
                      ) : (
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <div 
                            className={`absolute inset-0 rounded-full border border-dashed ${celestialSphere.ringColor} opacity-70 group-hover/card:rotate-180 transition-transform duration-1000`}
                            style={{ transform: 'rotate(-20deg) scale(1.15)' }}
                          ></div>
                          <div 
                            className="w-9 h-9 rounded-full shadow-lg relative flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110"
                            style={{
                              background: celestialSphere.orbBg,
                              boxShadow: `0 0 20px ${celestialSphere.haloGlow}`
                            }}
                          >
                            <CelestialIcon className="w-4 h-4 text-white/90 drop-shadow" />
                          </div>
                        </div>
                      )}

                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                        isTechy 
                          ? 'bg-zinc-900/90 border-zinc-800 text-zinc-500' 
                          : `${celestialSphere.badgeBg}`
                      }`}>
                        {isTechy ? `MODULE ACTIVE` : `✦ CONSTELLATION IN FOCUS`}
                      </span>
                    </div>

                    <div className="border-b border-zinc-800/80 pb-3">
                      <h3 className={`text-white font-bold tracking-wider text-base sm:text-lg transition-colors ${
                        !isTechy && 'font-serif text-xl tracking-wide text-zinc-100'
                      }`}>
                        {isTechy 
                          ? group.category.toUpperCase() 
                          : celestialSphere.celestialName}
                      </h3>
                      
                      {!isTechy && (
                        <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-0.5 font-light leading-snug">
                          {celestialSphere.designation} &bull; {celestialSphere.tagline}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2.5 text-[10px] text-zinc-400 font-mono">
                        <span>{celestialSphere.spectralClass}</span>
                        <span>{group.skills.length} STARS VERIFIED</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Skill Nodes in 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-sm mb-4">
                    {group.skills.map((skill, sIdx) => {
                      const isHovered = hoveredSkill === `${group.category}-${skill}`;

                      return (
                        <motion.div 
                          key={sIdx}
                          whileHover={{ x: 4, transition: { duration: 0.15 } }}
                          onMouseEnter={() => {
                            setHoveredSkill(`${group.category}-${skill}`);
                            if (onPlayChime) {
                              onPlayChime((isTechy ? 580 : celestialSphere.chimeFreq) + sIdx * 20, 0.04);
                            }
                          }}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group/item p-3 ${
                            isTechy ? 'rounded-xl' : 'rounded-2xl'
                          } ${
                            isTechy 
                              ? 'bg-black/80 hover:bg-zinc-900 border border-zinc-800/70 hover:border-white/25' 
                              : 'bg-zinc-950/70 hover:bg-black/90 border border-white/10 hover:border-white/35 hover:shadow-[0_4px_18px_rgba(255,255,255,0.06)]'
                          } flex items-center justify-between transition-colors duration-150 cursor-default`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {isTechy ? (
                              <span className={`w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/item:${techMeta.dotActive} transition-colors duration-200 flex-shrink-0`}></span>
                            ) : (
                              <span className={`text-[11px] ${celestialSphere.accentColor} transition-colors duration-200 flex-shrink-0`}>
                                {celestialSphere.starGlyph}
                              </span>
                            )}
                            <span className="text-zinc-200 group-hover/item:text-white font-normal text-xs sm:text-sm transition-colors truncate">
                              {skill}
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-mono transition-opacity duration-150 ${
                              isHovered ? 'opacity-100 text-zinc-300' : 'opacity-0 text-zinc-600'
                            }`}>
                              {isTechy ? '✦' : 'ORBIT: 100%'}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Card Footer Status Indicator */}
                  <div className="pt-3 border-t border-zinc-900/90 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-zinc-400 font-mono">
                        {isTechy ? 'VERIFIED DISCIPLINE' : 'ORBITAL STABILITY: 100%'}
                      </span>
                    </span>
                    <span>
                      {isTechy ? 'PRODUCTION READY' : 'HARMONIC STATE'}
                    </span>
                  </div>

                  {!isTechy && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSphereFilter('all');
                        if (onPlayChime) onPlayChime(520, 0.08);
                      }}
                      className="mt-4 py-2 px-4 rounded-full border border-white/10 hover:border-white/30 bg-black/40 hover:bg-white/10 text-zinc-400 hover:text-white text-[11px] font-mono transition-colors text-center w-full"
                    >
                      ✦ EXPAND ALL 4 KNOWLEDGE CONSTELLATIONS
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Twin Celestial Architectural Engines (Bottom 2 Interactive Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: MERN Starlight Reactor */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          onMouseEnter={() => {
            if (onPlayChime) onPlayChime(660, 0.1);
          }}
          className={`group/pillar relative ${
            isTechy 
              ? 'rounded-3xl p-7 border tech-panel border-sky-500/20 hover:border-sky-400/80 hover:shadow-[0_12px_35px_rgba(56,189,248,0.18)]' 
              : 'astral-panel rounded-[2.8rem] p-8 border-white/15 hover:border-white/40 hover:shadow-[0_16px_50px_rgba(56,189,248,0.2)]'
          } space-y-4 transition-all duration-300 overflow-hidden cursor-default`}
        >
          {/* Top Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Celestial Cosmic Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-sky-500/10 blur-3xl pointer-events-none group-hover/pillar:bg-sky-500/20 transition-all duration-500"></div>

          <div className="flex items-center justify-between font-mono text-xs text-white">
            <div className="flex items-center gap-2.5 text-sky-400">
              <div className={`w-9 h-9 ${
                isTechy ? 'rounded-xl' : 'rounded-2xl'
              } bg-sky-500/10 border border-sky-400/30 flex items-center justify-center group-hover/pillar:scale-110 group-hover/pillar:rotate-3 transition-transform duration-300`}>
                {isTechy ? (
                  <Code2 className="w-4 h-4 text-sky-300" />
                ) : (
                  <Orbit className="w-4 h-4 text-sky-300 animate-spin" style={{ animationDuration: '10s' }} />
                )}
              </div>
              <div>
                <span className="font-bold tracking-wider text-xs block">
                  {isTechy ? 'MERN STACK ARCHITECTURE' : 'THE MERN STARLIGHT REACTOR'}
                </span>
                {!isTechy && (
                  <span className="text-[10px] text-zinc-400 font-sans block">Cosmic Full-Stack Web Engine</span>
                )}
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[10px] font-mono">
              58.5+ HRS CERTIFIED
            </span>
          </div>

          <h4 className={`text-2xl text-white group-hover/pillar:text-sky-300 transition-colors ${
            isTechy ? 'font-sans font-bold' : 'font-serif'
          }`}>
            React.js &bull; Node.js &bull; Express &bull; MongoDB
          </h4>
          
          <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
            {isTechy 
              ? 'Certified MERN developer (58.5+ hours training) delivering responsive SPAs, structured state architectures, and robust RESTful API endpoints.'
              : 'Engineered full-stack starlight reactors spanning responsive React portals, GIS spatial plotting, robust Node/Express micro-services, and high-throughput MongoDB astral storage.'}
          </p>

          {/* Interactive Fuel / Tech Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'GIS Leaflet', 'Tailwind CSS'].map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 border border-white/10 text-zinc-300 group-hover/pillar:border-sky-400/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Django Graviton Core */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          onMouseEnter={() => {
            if (onPlayChime) onPlayChime(740, 0.1);
          }}
          className={`group/pillar relative ${
            isTechy 
              ? 'rounded-3xl p-7 border tech-panel border-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_12px_35px_rgba(52,211,153,0.18)]' 
              : 'astral-panel rounded-[2.8rem] p-8 border-white/15 hover:border-white/40 hover:shadow-[0_16px_50px_rgba(52,211,153,0.2)]'
          } space-y-4 transition-all duration-300 overflow-hidden cursor-default`}
        >
          {/* Top Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Celestial Cosmic Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover/pillar:bg-emerald-500/20 transition-all duration-500"></div>

          <div className="flex items-center justify-between font-mono text-xs text-white">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <div className={`w-9 h-9 ${
                isTechy ? 'rounded-xl' : 'rounded-2xl'
              } bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center group-hover/pillar:scale-110 group-hover/pillar:rotate-3 transition-transform duration-300`}>
                {isTechy ? (
                  <Terminal className="w-4 h-4 text-emerald-300" />
                ) : (
                  <Atom className="w-4 h-4 text-emerald-300 animate-pulse" />
                )}
              </div>
              <div>
                <span className="font-bold tracking-wider text-xs block">
                  {isTechy ? 'PYTHON & DJANGO BACKENDS' : 'THE DJANGO GRAVITATIONAL CORE'}
                </span>
                {!isTechy && (
                  <span className="text-[10px] text-zinc-400 font-sans block">Heavy Graviton Backend Services</span>
                )}
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono">
              PRODUCTION ARCHITECTURE
            </span>
          </div>

          <h4 className={`text-2xl text-white group-hover/pillar:text-emerald-300 transition-colors ${
            isTechy ? 'font-sans font-bold' : 'font-serif'
          }`}>
            Django REST &bull; ORM &bull; Scalable Services
          </h4>
          
          <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
            {isTechy 
              ? 'Experienced in architecting clean Django model structures, role-based authentication, background jobs, and high-throughput REST APIs.'
              : 'Architecting resilient backend graviton cores with Django ORM, multi-tiered role authentication (MFA/OTP), automated background cron daemons, and high-throughput REST APIs.'}
          </p>

          {/* Interactive Fuel / Tech Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Python 3', 'Django REST', 'ORM Optimization', 'PostgreSQL', 'MFA / OTP Auth', 'Docker'].map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 border border-white/10 text-zinc-300 group-hover/pillar:border-emerald-400/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};
