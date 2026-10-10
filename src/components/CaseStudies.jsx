import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  Server, 
  MapPin, 
  Activity, 
  CheckCircle, 
  Maximize2,
  Workflow,
  Cpu,
  Shield,
  Smartphone
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(CASE_STUDIES[0]);
  const [activeTab, setActiveTab] = useState('overview'); // overview | architecture | role | outcome

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Works: Problem → Architecture → Outcome
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Click through real-world systems engineered for government departments, multi-panchayat grids, and field hardware.
          </p>
        </div>

        {/* Case Study Selection Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => {
                setSelectedCase(study);
                setActiveTab('overview');
              }}
              className={`p-4 rounded-xl text-left transition-all border ${
                selectedCase.id === study.id
                  ? 'bg-gradient-to-br from-cyan-950/60 to-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                {study.badge}
              </div>
              <div className="font-bold text-slate-100 text-sm line-clamp-2">
                {study.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="rounded-2xl bg-[#0b1222] border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Top banner / Client info */}
          <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                {selectedCase.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                {selectedCase.title}
              </h3>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                <span>CLIENT / COLLABORATOR:</span>
                <strong className="text-slate-200">{selectedCase.client}</strong>
              </div>
            </div>

            {/* Sub-tabs for deep diving */}
            <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Overview & Visuals
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab('role')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'role'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                My Engineering Role
              </button>
            </div>
          </div>

          {/* Main Body Content based on Tab */}
          <div className="p-6 sm:p-8">
            
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: The Narrative Story */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      System Overview
                    </h4>
                    <p className="text-slate-200 text-base leading-relaxed">
                      {selectedCase.overview}
                    </p>
                  </div>

                  {/* Problem Statement Box */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/30">
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span>THE PROBLEM WE SOLVED</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedCase.problem}
                    </p>
                  </div>

                  {/* Outcome Box */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/30">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span>MEASURABLE OUTCOME & IMPACT</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedCase.outcome}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                      Technologies & Tools
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-700/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: UI Mockup / System Screenshot */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-xl group relative">
                    <img 
                      src={selectedCase.image} 
                      alt={selectedCase.title}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="p-3 bg-slate-900/90 border-t border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Production Interface Screenshot</span>
                      </span>
                      <span className="text-slate-500">ICFOSS Open IoT Grid</span>
                    </div>
                  </div>

                  {selectedCase.secondaryImage && (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg">
                      <img 
                        src={selectedCase.secondaryImage} 
                        alt="Secondary preview"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>

              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-8">
                <div className="max-w-2xl">
                  <h4 className="text-base font-bold text-white mb-1">
                    Telemetry Ingestion & Pipeline Flow
                  </h4>
                  <p className="text-sm text-slate-400">
                    How data travels from physical measurement nodes through ingestion gateways, InfluxDB time-series storage, and into client interfaces.
                  </p>
                </div>

                {/* Architecture pipeline steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {selectedCase.architectureSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 relative group hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono font-bold flex items-center justify-center text-sm mb-3">
                        0{idx + 1}
                      </div>
                      <h5 className="font-bold text-slate-100 text-sm mb-1">{step.step}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Visual architectural diagram block */}
                <div className="p-5 rounded-xl bg-[#070c18] border border-cyan-900/40 font-mono text-xs text-cyan-300 space-y-2 overflow-x-auto">
                  <div className="text-slate-400">// PIPELINE TELEMETRY TRACE: {selectedCase.id.toUpperCase()}</div>
                  <div className="text-slate-300">
                    [Hardware Probe/BLE] ──▶ [Node.js Ingestion Gateway] ──▶ [InfluxDB TSDB (Flux Queries)] ──▶ [Cron Alert Engine] ──▶ [React/Leaflet GIS / React Native App]
                  </div>
                  <div className="text-slate-500">
                    Status: Verified Production Architecture // High-Throughput Ingestion
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'role' && (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Key Technical Contributions & Architectural Ownership
                  </h4>
                  <p className="text-sm text-slate-400">
                    Specific modules, database schemas, and frontend/backend components engineered by me:
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedCase.myRole.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3.5"
                    >
                      <div className="p-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 mt-0.5 shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

