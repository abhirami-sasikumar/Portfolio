import React from 'react';
import { 
  Building2, 
  Radio, 
  Trophy, 
  GraduationCap, 
  Database,
  ShieldCheck
} from 'lucide-react';

export const StatsBar = () => {
  const stats = [
    {
      value: "1+ Years",
      label: "Production & Research",
      sublabel: "Core IoT Systems at ICFOSS",
      icon: Building2,
      accent: "text-cyan-400"
    },
    {
      value: "7+",
      label: "Mission-Critical Systems",
      sublabel: "Govt of Kerala, IDRB & State Grids",
      icon: ShieldCheck,
      accent: "text-blue-400"
    },
    {
      value: "100+",
      label: "Live Telemetry Nodes",
      sublabel: "Time-Series InfluxDB & MERN",
      icon: Radio,
      accent: "text-emerald-400"
    },
    {
      value: "#1 Topper",
      label: "Academic Topper Award",
      sublabel: "83% B.Sc CS + Best Paper Award",
      icon: Trophy,
      accent: "text-amber-400"
    }
  ];

  return (
    <div className="relative z-20 -mt-6 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-[#0b1222]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-lg backdrop-blur-md group hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${item.accent}`}>
                    {item.value}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="font-semibold text-slate-200 text-sm">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

