import React, { useState } from 'react';
import { 
  Sliders, 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  Download, 
  UserCheck, 
  Lock, 
  Terminal,
  RefreshCw,
  Droplets,
  Bell,
  Cpu
} from 'lucide-react';

export const InteractivePlayground = () => {
  // Playground state
  const [waterLevel, setWaterLevel] = useState(0.68);
  const [warningThreshold, setWarningThreshold] = useState(0.80);
  const [criticalThreshold, setCriticalThreshold] = useState(1.05);
  const [selectedRole, setSelectedRole] = useState('inspector'); // visitor | inspector | superadmin
  const [exportStatus, setExportStatus] = useState('idle'); // idle | throttling | complete
  const [alerts, setAlerts] = useState([]);

  // Check state against thresholds
  const isCritical = waterLevel >= criticalThreshold;
  const isWarning = waterLevel >= warningThreshold && !isCritical;
  const isNormal = !isCritical && !isWarning;

  // Trigger alert dispatch
  const handleLevelChange = (newVal) => {
    setWaterLevel(newVal);
    if (newVal >= criticalThreshold) {
      if (!alerts.some(a => a.type === 'critical')) {
        setAlerts(prev => [
          { id: Date.now(), type: 'critical', text: `CRITICAL ALERT: River level reached ${newVal}m! Localized dispatch to Emergency Inspector.` },
          ...prev.slice(0, 2)
        ]);
      }
    } else if (newVal >= warningThreshold) {
      if (!alerts.some(a => a.type === 'warning')) {
        setAlerts(prev => [
          { id: Date.now(), type: 'warning', text: `WARNING: Water level elevated to ${newVal}m. Monitoring rise-rate telemetry.` },
          ...prev.slice(0, 2)
        ]);
      }
    }
  };

  // Simulate throttled CSV streaming
  const handleSimulateExport = () => {
    setExportStatus('throttling');
    setTimeout(() => {
      setExportStatus('complete');
      setTimeout(() => setExportStatus('idle'), 3500);
    }, 1800);
  };

  return (
    <section id="playground" className="py-20 bg-[#060a15] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE HARDWARE & ACCESS SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try the System Architecture Live
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Interact with live simulated sensor thresholds, role-based access permissions, and streaming batch data exports directly in your browser.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Sensor & Threshold Control Unit */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0b1222] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Telemetry Threshold Simulator</h3>
                  <p className="text-xs text-slate-400">Simulate hydrological sensor rise-rates and watch alert logic fire</p>
                </div>
              </div>
              <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${
                isCritical 
                  ? 'bg-rose-950 text-rose-300 border-rose-800' 
                  : isWarning 
                  ? 'bg-amber-950 text-amber-300 border-amber-800' 
                  : 'bg-emerald-950 text-emerald-300 border-emerald-800'
              }`}>
                {isCritical ? '🔴 CRITICAL SURGE' : isWarning ? '🟡 WARNING ELEVATED' : '🟢 NORMAL ENVELOPE'}
              </span>
            </div>

            {/* Slider Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-sm">
                <span className="text-slate-300">Simulated Water Level:</span>
                <span className="text-2xl font-extrabold text-white">{waterLevel.toFixed(2)} m</span>
              </div>
              
              <input 
                type="range" 
                min="0.20" 
                max="1.30" 
                step="0.01"
                value={waterLevel}
                onChange={(e) => handleLevelChange(parseFloat(e.target.value))}
                className="w-full h-3 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>0.20m (Low Baseline)</span>
                <span className="text-amber-400 font-semibold">0.80m (Warning Trigger)</span>
                <span className="text-rose-400 font-semibold">1.05m (Critical Flood)</span>
                <span>1.30m (Max Record)</span>
              </div>
            </div>

            {/* Visual River Basin Indicator Bar */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>RESERVOIR CAPACITY TRACE</span>
                <span>{(waterLevel / 1.30 * 100).toFixed(0)}% CAPACITY</span>
              </div>
              <div className="h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 flex">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    isCritical 
                      ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)]' 
                      : isWarning 
                      ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]' 
                      : 'bg-gradient-to-r from-cyan-400 to-emerald-400'
                  }`}
                  style={{ width: `${(waterLevel / 1.30) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Live Dispatch Log */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>BACKGROUND CRON DISPATCH FEED</span>
                <span className="text-slate-600">INFLUXDB ALERT ENGINE</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5 min-h-[72px]">
                {alerts.length === 0 ? (
                  <div className="text-slate-500 italic">No threshold alerts dispatched yet. Drag slider above 0.80m to test early warning engine.</div>
                ) : (
                  alerts.map((alert) => (
                    <div 
                      key={alert.id}
                      className={`flex items-start gap-2 ${
                        alert.type === 'critical' ? 'text-rose-400' : 'text-amber-400'
                      }`}
                    >
                      <Bell className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{alert.text}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right: Multi-Tenant RBAC & Throttled Export Simulator */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0b1222] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Security & Multi-Tenancy</span>
              </div>
              <h3 className="font-bold text-white text-base">Granular Role-Based Access Control</h3>
              <p className="text-xs text-slate-400">Switch user roles to see UI permissions update dynamically</p>
            </div>

            {/* Role Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setSelectedRole('visitor')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedRole === 'visitor'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Public
              </button>
              <button
                onClick={() => setSelectedRole('inspector')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedRole === 'inspector'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Inspector
              </button>
              <button
                onClick={() => setSelectedRole('superadmin')}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedRole === 'superadmin'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Superadmin
              </button>
            </div>

            {/* Active Permissions Summary */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-850">
                <span>ACTIVE ACCESS LEVEL:</span>
                <span className="text-cyan-400 font-bold uppercase">{selectedRole}</span>
              </div>
              
              <div className="flex items-center justify-between text-slate-300">
                <span>Public Map & Telemetry:</span>
                <span className="text-emerald-400">✓ GRANTED</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Granular Device Drilldown:</span>
                <span className={selectedRole !== 'visitor' ? 'text-emerald-400' : 'text-slate-600'}>
                  {selectedRole !== 'visitor' ? '✓ GRANTED' : '✕ RESTRICTED'}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Export Historical Raw CSV:</span>
                <span className={selectedRole !== 'visitor' ? 'text-emerald-400' : 'text-slate-600'}>
                  {selectedRole !== 'visitor' ? '✓ GRANTED' : '✕ RESTRICTED'}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Cluster & API Key Generation:</span>
                <span className={selectedRole === 'superadmin' ? 'text-emerald-400' : 'text-slate-600'}>
                  {selectedRole === 'superadmin' ? '✓ GRANTED' : '✕ RESTRICTED'}
                </span>
              </div>
            </div>

            {/* Throttled CSV Stream Simulator */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>THROTTLED STREAM EXPORTER (OPENIOT CMS)</span>
              </div>

              <button
                disabled={selectedRole === 'visitor' || exportStatus === 'throttling'}
                onClick={handleSimulateExport}
                className={`w-full py-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                  selectedRole === 'visitor'
                    ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                    : exportStatus === 'throttling'
                    ? 'bg-amber-950 text-amber-300 border border-amber-800 animate-pulse'
                    : exportStatus === 'complete'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md'
                }`}
              >
                {selectedRole === 'visitor' ? (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Login as Inspector / Admin to Export</span>
                  </>
                ) : exportStatus === 'throttling' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing Stream (Throttled Chunk 40/100)...</span>
                  </>
                ) : exportStatus === 'complete' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Stream Delivered (0% Server Lag)</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Simulate Streaming CSV Export (50,000 Pts)</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 font-mono mt-2 text-center">
                Prevents server memory exhaustion during high-volume telemetry exports.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

