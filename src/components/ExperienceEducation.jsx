import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Building2,
  Calendar,
  Medal,
  FileText,
  CheckCircle2,
  ChevronRight,
  Orbit,
  Atom,
  Sparkles,
  Compass,
  Globe
} from 'lucide-react';
import { CAREER_HISTORY, EDUCATION } from '../data/portfolioData';

export const ExperienceEducation = ({ themeMode = 'celestial', onPlayChime }) => {
  const isTechy = themeMode === 'techy';

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-void-800/80">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-6xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-3 ${
          isTechy 
            ? 'border-white/20 bg-void-900 text-zinc-300 font-mono' 
            : 'border-white/30 bg-black/60 backdrop-blur-md text-zinc-200 font-serif tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.08)]'
        }`}>
          {isTechy ? (
            <>
              <Briefcase className="w-3.5 h-3.5 text-white" />
              <span>SYS_04 // TIMELINE &amp; CREDENTIALS</span>
            </>
          ) : (
            <>
              <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '14s' }} />
              <span>03 // PLANET ORION • ORBITAL TRAJECTORY &amp; STELLAR CREDENTIALS</span>
            </>
          )}
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-normal text-white tracking-tight sm:whitespace-nowrap ${
          isTechy ? 'font-sans font-bold' : 'font-serif'
        }`}>
          {isTechy 
            ? 'Professional Experience & Academic Background' 
            : 'Orbital Trajectory & Academic Constellations'}
        </h2>

        <p className="text-zinc-400 text-sm mt-3 font-sans font-light sm:whitespace-nowrap">
          {isTechy
            ? 'From computer science foundations to engineering production software at ICFOSS.'
            : 'A journey across open-source research observatories, software flightpaths, and academic constellations.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Work Experience Column (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className={`group/exp relative ${
            isTechy 
              ? 'tech-panel border-sky-500/20 hover:border-sky-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.15)] rounded-3xl p-6 sm:p-8' 
              : 'astral-panel rounded-[2.8rem] border-white/15 hover:border-white/40 hover:shadow-[0_16px_50px_rgba(56,189,248,0.15)] p-7 sm:p-9'
          } transition-all duration-300 overflow-hidden`}>
            
            {/* Top Accent Sheen */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover/exp:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Background Nebula Aura in Celestial Mode */}
            {!isTechy && (
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/10 blur-3xl pointer-events-none group-hover/exp:bg-sky-500/20 transition-all duration-500"></div>
            )}

            {/* Card Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                {isTechy ? (
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                ) : (
                  /* 3D Celestial Trajectory Orb */
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 rounded-full border border-dashed border-sky-400/40 opacity-70 group-hover/exp:rotate-180 transition-transform duration-1000"
                      style={{ transform: 'rotate(-25deg) scale(1.15)' }}
                    ></div>
                    <div 
                      className="w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, #7dd3fc 0%, #0284c7 60%, #082f49 100%)',
                        boxShadow: '0 0 14px rgba(56, 189, 248, 0.45)'
                      }}
                    >
                      <Orbit className="w-3.5 h-3.5 text-white drop-shadow" />
                    </div>
                  </div>
                )}
                <div>
                  <h3 className={`text-xl sm:text-2xl text-white ${isTechy ? 'font-sans font-bold' : 'font-serif'}`}>
                    {isTechy ? 'Professional Journey' : 'Orbital Flightpath'}
                  </h3>
                  {!isTechy && (
                    <span className="text-[11px] text-zinc-400 font-sans font-light block">
                      ICFOSS Observatory • Software Engineering Roles
                    </span>
                  )}
                </div>
              </div>

              <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${
                isTechy 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400' 
                  : 'bg-sky-500/10 border-sky-400/30 text-sky-300'
              }`}>
                {isTechy ? 'PRODUCTION ROLES' : '2+ YRS FLIGHT LOG'}
              </span>
            </div>

            {/* Timeline Stream */}
            <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-sky-500/40 before:to-transparent">
              {CAREER_HISTORY.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => {
                    if (onPlayChime) onPlayChime(600 + idx * 70, 0.05);
                  }}
                  className="relative pl-9 group/item"
                >
                  {/* Glowing Node Pulse */}
                  <div className={`absolute left-1.5 top-1.5 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                    item.current
                      ? 'bg-sky-500/20 border-2 border-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] scale-110'
                      : 'bg-black border-2 border-zinc-500 group-hover/item:border-sky-400 group-hover/item:bg-sky-500/20 group-hover/item:scale-125 group-hover/item:shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      item.current ? 'bg-sky-400' : 'bg-white group-hover/item:bg-sky-400'
                    }`}></span>
                  </div>

                  {/* Header Meta: Period & Company */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                      item.current
                        ? 'bg-sky-950/40 border border-sky-500/40 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                        : 'bg-zinc-950 border border-white/10 text-white group-hover/item:border-sky-500/40 group-hover/item:text-sky-300'
                    }`}>
                      {!isTechy && '✦ '}
                      {item.period}
                    </span>
                    <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{item.company}</span>
                    </span>
                  </div>

                  {/* Role Title */}
                  <h4 className={`text-lg font-bold mb-2.5 font-sans flex items-center gap-2.5 flex-wrap ${
                    item.current
                      ? 'text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                      : 'text-white group-hover/item:text-sky-300 transition-colors'
                  }`}>
                    <span>{item.role}</span>
                    {item.current && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-300 tracking-wider">
                        {isTechy ? 'CURRENT ROLE' : 'ACTIVE ORBIT'}
                      </span>
                    )}
                  </h4>

                  {/* Accomplishment Bullet Cards */}
                  <div className="space-y-2 font-sans">
                    {item.points.map((pt, pIdx) => (
                      <div 
                        key={pIdx} 
                        className={`flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-2.5 ${
                          isTechy ? 'rounded-xl' : 'rounded-2xl'
                        } transition-all duration-200 ${
                          item.current
                            ? 'bg-sky-950/20 border border-sky-500/20 group-hover/item:border-sky-400/40 group-hover/item:bg-sky-950/30'
                            : 'bg-black/40 border border-white/5 group-hover/item:border-white/10 group-hover/item:bg-zinc-950/60'
                        }`}
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Honors Column (Right) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Academic Foundation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={`group/edu-panel relative ${
              isTechy 
                ? 'tech-panel border-sky-500/20 hover:border-sky-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.15)] rounded-3xl p-6 sm:p-8' 
                : 'astral-panel rounded-[2.8rem] border-white/15 hover:border-white/40 hover:shadow-[0_16px_50px_rgba(34,211,238,0.15)] p-7 sm:p-8'
            } space-y-6 transition-all duration-300 overflow-hidden`}
          >
            {/* Top Accent Sheen */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover/edu-panel:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                {isTechy ? (
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    <div 
                      className="w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, #67e8f9 0%, #0891b2 60%, #164e63 100%)',
                        boxShadow: '0 0 14px rgba(34, 211, 238, 0.45)'
                      }}
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                )}
                <div>
                  <h3 className={`text-xl sm:text-2xl text-white ${isTechy ? 'font-sans font-bold' : 'font-serif'}`}>
                    {isTechy ? 'Academic Qualifications' : 'Academic Constellations'}
                  </h3>
                  {!isTechy && (
                    <span className="text-[11px] text-zinc-400 font-sans font-light block">
                      University of Kerala Foundational Orbit
                    </span>
                  )}
                </div>
              </div>
              
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                isTechy ? 'text-zinc-500 border-zinc-800 bg-zinc-900' : 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300'
              }`}>
                {isTechy ? 'GRADUATED' : 'CONFERRED'}
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  onMouseEnter={() => {
                    if (onPlayChime) onPlayChime(720 + idx * 80, 0.05);
                  }}
                  className={`p-4 sm:p-5 ${
                    isTechy ? 'rounded-2xl' : 'rounded-[1.75rem]'
                  } bg-black/80 hover:bg-zinc-950 border border-zinc-800/80 hover:border-cyan-400/40 hover:shadow-[0_4px_20px_rgba(34,211,238,0.1)] transition-all duration-200 space-y-2 cursor-default group/edu-card`}
                >
                  <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
                      {edu.period}
                    </span>
                    <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{isTechy ? 'COMPLETED' : '✦ MISSION ACCOMPLISHED'}</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans group-hover/edu-card:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="text-zinc-400 text-xs font-sans leading-relaxed">
                    {edu.institution}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic & Research Honors Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`group/award-panel relative ${
              isTechy 
                ? 'tech-panel border-sky-500/20 hover:border-sky-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.15)] rounded-3xl p-6 sm:p-8' 
                : 'astral-panel rounded-[2.8rem] border-white/15 hover:border-white/40 hover:shadow-[0_16px_50px_rgba(251,191,36,0.15)] p-7 sm:p-8'
            } space-y-4 transition-all duration-300 overflow-hidden`}
          >
            {/* Top Accent Sheen */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
              isTechy ? 'via-sky-400' : 'via-amber-400'
            } to-transparent opacity-0 group-hover/award-panel:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                {isTechy ? (
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Award className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    <div 
                      className="w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, #fde047 0%, #d97706 60%, #451a03 100%)',
                        boxShadow: '0 0 14px rgba(251, 191, 36, 0.45)'
                      }}
                    >
                      <Award className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                )}
                <div>
                  <h3 className={`text-xl sm:text-2xl text-white ${isTechy ? 'font-sans font-bold' : 'font-serif'}`}>
                    {isTechy ? 'Academic & Research Honors' : 'Stellar Accolades & Research Laurels'}
                  </h3>
                  {!isTechy && (
                    <span className="text-[11px] text-zinc-400 font-sans font-light block">
                      Recognitions &amp; Published Contributions
                    </span>
                  )}
                </div>
              </div>
              
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                isTechy ? 'text-sky-400/80 border-sky-500/20 bg-sky-500/10' : 'bg-amber-500/10 border-amber-400/30 text-amber-300'
              }`}>
                {isTechy ? 'ACCOLADES' : 'HONORS'}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onMouseEnter={() => {
                  if (onPlayChime) onPlayChime(880, 0.05);
                }}
                className={`p-4 sm:p-5 ${
                  isTechy ? 'rounded-2xl' : 'rounded-[1.75rem]'
                } bg-black/80 hover:bg-zinc-950 border border-zinc-800/80 ${
                  isTechy 
                    ? 'hover:border-sky-400/40 hover:shadow-[0_4px_20px_rgba(56,189,248,0.12)]' 
                    : 'hover:border-amber-400/40 hover:shadow-[0_4px_20px_rgba(251,191,36,0.12)]'
                } transition-all duration-200 cursor-default group/award-card`}
              >
                <div className={`flex items-center gap-2.5 font-bold text-white text-sm mb-1.5 ${
                  isTechy ? 'group-hover/award-card:text-sky-300' : 'group-hover/award-card:text-amber-300'
                } transition-colors font-sans`}>
                  <Medal className={`w-4 h-4 ${isTechy ? 'text-sky-400' : 'text-amber-400'} shrink-0`} />
                  <span>University Academic Topper Award 2022</span>
                </div>
                <div className="text-zinc-400 font-sans text-xs leading-relaxed pl-6 font-light">
                  Awarded Academic Topper for graduating B.Sc. Computer Science across University Institute of Technology, University of Kerala.
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onMouseEnter={() => {
                  if (onPlayChime) onPlayChime(920, 0.05);
                }}
                className={`p-4 sm:p-5 ${
                  isTechy ? 'rounded-2xl' : 'rounded-[1.75rem]'
                } bg-black/80 hover:bg-zinc-950 border border-zinc-800/80 hover:border-emerald-400/40 hover:shadow-[0_4px_20px_rgba(52,211,153,0.12)] transition-all duration-200 cursor-default group/award-card`}
              >
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5 group-hover/award-card:text-emerald-300 transition-colors font-sans">
                  <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Best Research Paper Award</span>
                </div>
                <div className="text-zinc-400 font-sans text-xs leading-relaxed pl-6 font-light">
                  QUAESITIO 2022-2023, Mahatma Gandhi University: "Future into the deep! Artificial neurons into machines".
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
