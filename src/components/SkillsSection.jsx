import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Layers,
  Wrench
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium mb-3 shadow-glow-indigo">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Languages, Frameworks & Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Practical, battle-tested tools I use across web platforms, backend architectures, mobile apps, and databases.
          </p>
        </motion.div>

        {/* 4 Skill Categories with Interactive Card Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKILLS_LIST.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-lg group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-700/60 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-glow-indigo">
                  {idx === 0 && <Layers className="w-5 h-5" />}
                  {idx === 1 && <Terminal className="w-5 h-5" />}
                  {idx === 2 && <Database className="w-5 h-5" />}
                  {idx === 3 && <Cpu className="w-5 h-5" />}
                </div>

                <h3 className="font-bold text-white text-base mb-3 group-hover:text-indigo-300 transition-colors">
                  {item.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx}
                      whileHover={{ scale: 1.08 }}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN & Django Highlights Strip with interactive hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500 shadow-xl"
          >
            <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Full-Stack Web (MERN Stack)</span>
            </h4>
            <p className="text-xs text-slate-400 mb-3 font-mono">React • Node.js • Express • MongoDB</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Certified MERN developer (58.5+ hours training) with real-world experience building interactive SPAs, modular component systems, and RESTful microservices.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-violet-500 shadow-xl"
          >
            <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Python & Django Framework</span>
            </h4>
            <p className="text-xs text-slate-400 mb-3 font-mono">Django • Django REST Framework • ORM</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Experienced in structuring Django applications, model ORM design, authentication and permissions, and developing high-throughput REST APIs.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
