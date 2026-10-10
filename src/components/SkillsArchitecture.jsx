import React from 'react';
import { 
  Cpu, 
  Database, 
  Map, 
  ShieldCheck, 
  GitBranch, 
  Server, 
  Terminal,
  Code2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsArchitecture = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Systems Architecture & Technical Stack
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Production-tested engineering across front-end visualizations, real-time time-series databases, mobile clients, and DevOps.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-4">
                  {idx === 0 ? <Code2 className="w-5 h-5" /> :
                   idx === 1 ? <Database className="w-5 h-5" /> :
                   idx === 2 ? <Map className="w-5 h-5" /> :
                   <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-slate-100 text-base mb-3">{cat.category}</h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Docker Compose / Quick Reproducibility Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1326] to-[#070c18] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                <Terminal className="w-4 h-4" />
                <span>Docker Containerization & Deployment Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Engineered for Containerized Reproducibility
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every project I architect is structured with clean environment configurations, Docker Compose orchestration, and isolated network services for InfluxDB, Node APIs, and React web clients.
              </p>
            </div>

            {/* Mock Docker Compose Snippet */}
            <div className="w-full lg:w-auto min-w-[320px] rounded-xl bg-[#050811] border border-slate-800 p-4 font-mono text-xs text-slate-300 shadow-inner">
              <div className="text-slate-500 mb-2 flex items-center justify-between">
                <span>docker-compose.yml</span>
                <span className="text-emerald-400 text-[10px]">● READY</span>
              </div>
              <pre className="text-cyan-300/90 leading-tight">
{`services:
  telemetry-api:
    build: ./backend
    ports: ["5000:5000"]
    environment:
      - INFLUX_URL=http://influxdb:8086
  influxdb:
    image: influxdb:2.7
    ports: ["8086:8086"]`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

