import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Briefcase, 
  FileCheck2, 
  Scroll,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { TIMELINE, AWARDS, PROFILE } from '../data/portfolioData';

export const AboutHonors = () => {
  return (
    <section id="about" className="py-20 relative bg-[#060a15]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & Honors
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Combining deep academic computer science fundamentals with hands-on research and production delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative & Awards */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Full-Stack Developer | IoT & Data Visualization Specialist</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                I build end-to-end software solutions that make complex, live data actionable. Backed by an M.Sc. in Computer Science and hands-on experience as a Research Assistant at ICFOSS, I specialize in:
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span><strong>Scalable Web Dashboards:</strong> Real-time GIS maps, interactive charts, and multi-datasource backends using React, Node.js, and InfluxDB.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span><strong>Mobile & Hardware Integration:</strong> Companion Android/React Native apps with Bluetooth connectivity, offline workflows, and role-based cluster security.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span><strong>High-Performance Architecture:</strong> Database migrations (MongoDB ➔ InfluxDB), custom CMS/API generators, and containerized deployments with Docker.</span>
                </li>
              </ul>

              <p className="text-slate-400 text-xs italic pt-2 border-t border-slate-800">
                "Driven by clean architecture, rock-solid reliability, and making real-world sensor streams immediately useful."
              </p>
            </div>

            {/* Academic Honors Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Major Awards & Certifications
              </h4>

              {AWARDS.map((award, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-[#0b1222] border border-slate-800 hover:border-amber-500/40 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-sm">{award.title}</h5>
                    <div className="text-xs text-amber-300/80 font-mono mt-0.5">{award.issuer}</div>
                    <p className="text-xs text-slate-400 mt-1">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Career Experience & Education Timeline</span>
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline bullet */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0b1222] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
                    
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {item.period}
                    </span>
                    <h4 className="font-bold text-slate-100 text-sm mt-0.5">
                      {item.role}
                    </h4>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">
                      {item.org}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

