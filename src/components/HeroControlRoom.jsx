import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Droplets, 
  Thermometer, 
  CloudRain, 
  Gauge, 
  MapPin, 
  ArrowUpRight, 
  AlertTriangle, 
  CheckCircle2, 
  Sliders,
  ChevronRight,
  Terminal,
  Download,
  Share2
} from 'lucide-react';
import { PROFILE, TELEMETRY_STATIONS } from '../data/portfolioData';

export const HeroControlRoom = ({ onNavigate }) => {
  const [selectedStation, setSelectedStation] = useState(TELEMETRY_STATIONS[0]);
  const [liveWaterLevel, setLiveWaterLevel] = useState(selectedStation.waterLevel);
  const [liveTemp, setLiveTemp] = useState(selectedStation.temp);
  const [liveRainfall, setLiveRainfall] = useState(selectedStation.rainfall);
  const [pulseCount, setPulseCount] = useState(0);
  const [alertActive, setAlertActive] = useState(false);

  // Sync state when station selection changes
  useEffect(() => {
    setLiveWaterLevel(selectedStation.waterLevel);
    setLiveTemp(selectedStation.temp);
    setLiveRainfall(selectedStation.rainfall);
  }, [selectedStation]);

  // Simulate real-time continuous sensor jitter & packet streaming
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);

      // Micro fluctuations mimicking live hardware probes
      setLiveWaterLevel((prev) => {
        const delta = (Math.random() - 0.48) * 0.008;
        const updated = parseFloat((prev + delta).toFixed(3));
        if (updated > selectedStation.threshold) {
          setAlertActive(true);
        } else {
          setAlertActive(false);
        }
        return updated;
      });

      setLiveTemp((prev) => {
        const delta = (Math.random() - 0.5) * 0.1;
        return parseFloat((prev + delta).toFixed(1));
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [selectedStation]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden">
      {/* Background ambient grid with glowing gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SYSTEM ACTIVE // OPEN IOT & FULL-STACK ENGINEER</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-mono">
            <span>PACKET COUNT: #{1420 + pulseCount}</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                Abhirami Sasikumar — Software Developer
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                From <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Sensor</span> to <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Screen.</span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              I turn high-frequency real-world sensor streams into <span className="text-white font-medium">GIS mapping dashboards</span>, <span className="text-white font-medium">time-series telemetry pipelines</span>, and <span className="text-white font-medium">companion mobile apps</span> that government and enterprise teams act on.
            </p>

            {/* Quick value proposition points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5 border border-cyan-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span><strong>MERN Stack & React Native</strong> cross-platform delivery</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5 border border-cyan-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span><strong>InfluxDB (TSDB) & Flux</strong> high-volume pipelines</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5 border border-cyan-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span><strong>Interactive Leaflet GIS</strong> with dynamic risk layers</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="p-1 rounded bg-cyan-950 text-cyan-400 mt-0.5 border border-cyan-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span><strong>Dockerized Backends</strong> & Multi-tenant RBAC Security</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('case-studies')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Live Case Studies</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('playground')}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Launch Live Sandbox</span>
              </button>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-white transition-all text-sm flex items-center gap-1.5"
                title="LinkedIn Profile"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick credentials proof */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div>🏆 <strong>Academic Topper (83%)</strong> - Kerala Univ</div>
              <div>📜 <strong>M.Sc Computer Science</strong></div>
              <div>🎖️ <strong>Best Paper Award</strong> QUAESITIO</div>
            </div>
          </div>

          {/* Right Column: Live Simulated Mission-Control Screen */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b1222]/90 border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-xl">
              
              {/* Terminal header */}
              <div className="bg-[#080d19] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-medium pl-2">
                    telemetry_monitor.live
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Station selector tabs */}
              <div className="p-3 bg-slate-900/50 border-b border-slate-800 flex gap-1.5 overflow-x-auto">
                {TELEMETRY_STATIONS.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => setSelectedStation(station)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      selectedStation.id === station.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {station.name.split(' (')[0]}
                  </button>
                ))}
              </div>

              {/* Live Metric Cards Grid */}
              <div className="p-5 space-y-4">
                
                {/* Station metadata */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-100 text-base">{selectedStation.name}</h3>
                    <p className="text-xs text-slate-400">{selectedStation.project}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {selectedStation.type}
                    </span>
                    <div className="text-[10px] text-slate-500 font-mono mt-1">{selectedStation.coordinates}</div>
                  </div>
                </div>

                {/* Main Gauge Telemetry Display */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                      SURFACE WATER LEVEL
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      THRESHOLD: {selectedStation.threshold} {selectedStation.waterLevelUnit}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                        {liveWaterLevel}
                      </span>
                      <span className="text-sm font-mono text-slate-400">{selectedStation.waterLevelUnit}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-mono text-emerald-400 flex items-center gap-1 justify-end">
                        <span>TREND: {selectedStation.waterTrend}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">SAMPLING: InfluxDB TSDB</div>
                    </div>
                  </div>

                  {/* Progress bar towards threshold */}
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        liveWaterLevel > selectedStation.threshold 
                          ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' 
                          : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                      }`}
                      style={{ 
                        width: `${Math.min(100, (liveWaterLevel / (selectedStation.threshold * 1.15)) * 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Sub-telemetry sensors */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1">
                      <CloudRain className="w-3.5 h-3.5 text-blue-400" />
                      PRECIPITATION
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-100">
                      {liveRainfall} <span className="text-xs font-normal text-slate-400">mm</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">Automated Rain Gauge (ARG)</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1">
                      <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                      AMBIENT TEMP
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-100">
                      {liveTemp} <span className="text-xs font-normal text-slate-400">°C</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">Humidity: {selectedStation.humidity}%</div>
                  </div>
                </div>

                {/* Interactive Simulated Alert */}
                {alertActive ? (
                  <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-600/80 text-rose-200 text-xs font-mono flex items-start gap-2.5 animate-pulse">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-rose-300">THRESHOLD EXCEEDED // HAZARD DISPATCH TRIGGERED</strong>
                      <span>Automated email alert dispatched to regional officer for {selectedStation.name}.</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>NOMINAL OPERATIONAL ENVELOPE</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">ALL SYSTEMS GREEN</span>
                  </div>
                )}

                {/* Live stream terminal footer */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-400">GET /api/v1/telemetry/stream</span>
                  <span className="text-slate-500">HTTP 200 OK (24ms)</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

