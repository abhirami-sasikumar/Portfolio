import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ArrowUpRight, 
  CheckCircle, 
  Smartphone, 
  Code2, 
  Terminal,
  Activity,
  Play,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Orbit,
  Sparkles,
  Minimize2,
  Maximize2,
  Pin
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

// Dedicated celestial planet configuration for each of Abhirami's 7 key projects
export const PROJECT_PLANETS = {
  'nemom-block': {
    name: 'Planet Nemom',
    num: '01',
    category: 'IoT & GIS Web Platform',
    theme: 'Emerald & Topo-Cyan',
    gradient: 'radial-gradient(circle at 35% 30%, #a7f3d0 0%, #34d399 26%, #059669 54%, #064e3b 80%, #022c22 100%)',
    corona: 'rgba(52, 211, 153, 0.55)',
    ringColor: 'rgba(52, 211, 153, 0.75)',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/40',
    accent: '#34d399',
    tag: 'GIS • IoT Telemetry',
    image: '/nemom_dashboard.png',
    hasRing: false,
    chime: 660,
  },
  'openiot-mobile': {
    name: 'Planet OpenIoT',
    num: '02',
    category: 'React Native & IoT Mobile Platform',
    theme: 'Electric Cyan & Azure Blue',
    gradient: 'radial-gradient(circle at 35% 30%, #e0f2fe 0%, #38bdf8 26%, #0284c7 54%, #0369a1 80%, #082f49 100%)',
    corona: 'rgba(56, 189, 248, 0.55)',
    ringColor: 'rgba(56, 189, 248, 0.8)',
    textColor: 'text-sky-300',
    borderColor: 'border-sky-500/40',
    accent: '#38bdf8',
    tag: 'React Native & IoT',
    image: '/openiot_v2_architecture.png',
    hasRing: true,
    chime: 700,
  },
  'idrb-monitoring': {
    name: 'Planet IDRB',
    num: '03',
    category: 'Full-Stack GIS & Telemetry Platform',
    theme: 'River Sapphire & InfluxDB',
    gradient: 'radial-gradient(circle at 35% 30%, #bfdbfe 0%, #60a5fa 26%, #2563eb 54%, #1e3a8a 80%, #0c1a3b 100%)',
    corona: 'rgba(96, 165, 250, 0.55)',
    ringColor: 'rgba(96, 165, 250, 0.75)',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/40',
    accent: '#60a5fa',
    tag: 'GIS River Basin',
    image: '/IDRB.png',
    hasRing: false,
    chime: 740,
  },
  'soil-nutrient-app': {
    name: 'Planet SNA',
    num: '04',
    category: 'IoT & Mobile Application Development',
    theme: 'Golden Earth & Nutrient Core',
    gradient: 'radial-gradient(circle at 35% 30%, #fef3c7 0%, #f59e0b 26%, #b45309 54%, #78350f 82%, #451a03 100%)',
    corona: 'rgba(245, 158, 11, 0.55)',
    ringColor: 'rgba(251, 191, 36, 0.8)',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-500/40',
    accent: '#f59e0b',
    tag: 'SNA • Soil Nutrient IoT',
    image: '/soil_nutrient_flow.png',
    hasRing: true,
    chime: 784,
  },
  'cms-migration': {
    name: 'Planet CoreCMS',
    num: '05',
    category: 'Backend Architecture & API Systems',
    theme: 'Radiant Amethyst & Cyber Purple',
    gradient: 'radial-gradient(circle at 35% 30%, #f3e8ff 0%, #c084fc 26%, #9333ea 54%, #581c87 82%, #260a4f 100%)',
    corona: 'rgba(192, 132, 252, 0.55)',
    ringColor: 'rgba(192, 132, 252, 0.75)',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/40',
    accent: '#c084fc',
    tag: 'Dynamic API Matrix',
    image: '/thettiyar_influxdb.png',
    hasRing: false,
    chime: 830,
  },
  'icfoss-website-migration': {
    name: 'Planet ICFOSS',
    num: '06',
    category: 'Full-Stack Modernization & Enterprise CMS',
    theme: 'Topographic Jade & Enterprise Modernization',
    gradient: 'radial-gradient(circle at 35% 30%, #ccfbf1 0%, #2dd4bf 26%, #0d9488 54%, #115e59 82%, #042f2e 100%)',
    corona: 'rgba(45, 212, 191, 0.55)',
    ringColor: 'rgba(45, 212, 191, 0.75)',
    textColor: 'text-teal-300',
    borderColor: 'border-teal-500/40',
    accent: '#2dd4bf',
    tag: 'Enterprise ICFOSS CMS',
    image: '/icfoss_landing_cms.png',
    hasRing: false,
    chime: 880,
  },
  'sarangi-music-school': {
    name: 'Planet Sarangi',
    num: '07',
    category: 'Full-Stack Web Platform & UI/UX',
    theme: 'Sunset Coral & Melody Ruby',
    gradient: 'radial-gradient(circle at 35% 30%, #ffe4e6 0%, #fb7185 26%, #e11d48 54%, #881337 82%, #450a18 100%)',
    corona: 'rgba(251, 113, 133, 0.55)',
    ringColor: 'rgba(251, 113, 133, 0.8)',
    textColor: 'text-rose-300',
    borderColor: 'border-rose-500/40',
    accent: '#fb7185',
    tag: 'Music Academy Web',
    image: '/slis_portal.png',
    hasRing: true,
    chime: 932,
  },
};

export const FeaturedProjects = ({ themeMode = 'celestial', onPlayChime }) => {
  const [filter, setFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedPlanetId, setSelectedPlanetId] = useState(null);
  const [activeMediaTabs, setActiveMediaTabs] = useState({});
  const [isOrbitOpen, setIsOrbitOpen] = useState(false);
  const [isOrbitPinned, setIsOrbitPinned] = useState(false);
  const autoCloseTimerRef = useRef(null);
  const isTechy = themeMode === 'techy';

  // In My Space mode, the section is closed by default into the 7-planet system.
  // Clicking any planet expands ONLY that particular project!
  const isExtended = isTechy || isOrbitOpen || isOrbitPinned;

  // 2-second auto close handler: when cursor leaves the planet/project zone for 2s,
  // auto-close the section unless pinned open.
  const handleMouseEnterZone = () => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  };

  const handleMouseLeaveZone = () => {
    if (isTechy || isOrbitPinned || !isOrbitOpen) return;
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
    }
    autoCloseTimerRef.current = setTimeout(() => {
      setIsOrbitOpen(false);
      setSelectedPlanetId(null);
      if (onPlayChime) onPlayChime(528, 0.15);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
    };
  }, []);

  // When a planet is clicked: ONLY expand that particular project!
  const openSingleProjectPlanet = (projectId) => {
    handleMouseEnterZone();
    setSelectedPlanetId(projectId);
    setIsOrbitOpen(true);
    setIsOrbitPinned(true);
    setExpandedProjects({ [projectId]: true });
    const pPlanet = PROJECT_PLANETS[projectId];
    if (onPlayChime && pPlanet) onPlayChime(pPlanet.chime, 0.16);
    setTimeout(() => {
      const cardEl = document.getElementById(`project-${projectId}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
  };

  const showAllPlanets = () => {
    handleMouseEnterZone();
    setSelectedPlanetId('all');
    setIsOrbitOpen(true);
    setIsOrbitPinned(true);
    if (onPlayChime) onPlayChime(660, 0.15);
  };

  const collapseToOrbit = () => {
    handleMouseEnterZone();
    setIsOrbitOpen(false);
    setIsOrbitPinned(false);
    setSelectedPlanetId(null);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (onPlayChime) onPlayChime(528, 0.15);
  };

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
    if (onPlayChime) onPlayChime(720, 0.08);
  };

  const categories = [
    { id: 'all', label: isTechy ? 'ALL ARCHITECTURES' : 'ALL CONSTELLATIONS' },
    { id: 'gis', label: 'GIS & MAPPING' },
    { id: 'mern', label: 'MERN STACK' },
    { id: 'mobile', label: 'REACT NATIVE' },
    { id: 'backend', label: 'DISTRIBUTED CORE' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'gis') {
      return (
        p.category.includes('GIS') || 
        p.tech.some(t => /gis|leaflet|geojson|map|geotag/i.test(t))
      );
    }
    if (filter === 'mern') return p.category.includes('MERN') || p.category.includes('Web');
    if (filter === 'mobile') return p.category.includes('Mobile');
    if (filter === 'backend') return p.category.includes('Backend') || p.category.includes('Modernization') || p.category.includes('Monitoring');
    return true;
  });

  const activeSelectedPlanet = (!isTechy && selectedPlanetId && selectedPlanetId !== 'all')
    ? PROJECT_PLANETS[selectedPlanetId]
    : null;

  const projectsToRender = (!isTechy && selectedPlanetId && selectedPlanetId !== 'all')
    ? PROJECTS.filter((p) => p.id === selectedPlanetId)
    : filteredProjects;

  return (
    <section 
      id="projects" 
      onMouseEnter={handleMouseEnterZone}
      onMouseLeave={handleMouseLeaveZone}
      className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-void-800/80"
    >
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>{isTechy ? 'SYS_02 // PRODUCTION BUILDS & CLIENT PLATFORMS' : '01 // Planet Astra • Orbit of Creation'}</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-normal text-white tracking-tight ${isTechy ? 'font-sans font-bold' : 'font-serif'}`}>
            {isTechy ? 'Full-Stack Platforms & Distributed Core' : 'Full-Stack Platforms & Distributed Core'}
          </h2>
          <p className="text-justify text-zinc-400 text-sm mt-2 font-light max-w-xl font-sans">
            {isTechy 
              ? 'Multi-tier web applications, responsive React Native mobile platforms, and containerized backends built for real stakeholders.' 
              : 'Real full-stack systems, interactive web applications, and mobile solutions deployed across production environments.'}
          </p>
        </div>

        {/* Atlas Filter Pill Switcher */}
        <div className={`flex items-center p-1 rounded-full border font-mono text-xs ${
          isTechy ? 'border-zinc-800 bg-zinc-950/90 shadow-md' : 'border-void-700 bg-void-950'
        }`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                if (onPlayChime) onPlayChime(660, 0.1);
              }}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* CELESTIAL CLOSED STATE: 7-PLANET SYSTEM GATEWAY */}
      {!isExtended && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 rounded-[3.2rem] border border-white/10 bg-void-950/70 backdrop-blur-xl overflow-hidden text-center shadow-[0_20px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Subtle Ambient Cosmic Haze */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)]" />

          {/* Section Indicator */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-zinc-300 font-mono text-[11px] mb-6">
            <Orbit className="w-3.5 h-3.5 text-white animate-spin" />
            <span>THE 7 CELESTIAL WORLDS • ONE PLANET FOR EACH CREATION</span>
          </div>

          {/* Planetary Solar System Arena */}
          <div className="relative w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] flex items-center justify-center my-6 sm:my-10">
            {/* Concentric Orbit Paths */}
            <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_90s_linear_infinite]" />
            <div className="absolute inset-10 sm:inset-16 rounded-full border border-white/15 animate-[spin_60s_linear_infinite_reverse]" />
            <div className="absolute inset-24 sm:inset-36 rounded-full border border-white/20 border-dotted animate-[spin_35s_linear_infinite]" />

            {/* Central Star Core: Astra Nucleus */}
            <div 
              onClick={showAllPlanets}
              onMouseEnter={() => {
                if (onPlayChime) onPlayChime(528, 0.1);
              }}
              className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center p-3 text-center cursor-pointer select-none transition-transform duration-300 hover:scale-105 shadow-[0_0_45px_rgba(255,255,255,0.25),inset_-14px_-14px_28px_rgba(0,0,0,0.95),inset_10px_10px_22px_rgba(255,255,255,0.5)] border border-white/30"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 25%, #64748b 55%, #1e293b 80%, #060913 100%)'
              }}
            >
              <Orbit className="w-4 h-4 text-white animate-spin mb-1 opacity-80" />
              <span className="font-serif text-xs sm:text-sm text-white font-medium">
                Astra Core
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-zinc-950 bg-white/90 px-2 py-0.5 rounded-full font-bold uppercase mt-1">
                7 Worlds
              </span>
              <span className="font-mono text-[8px] text-zinc-300 mt-0.5 tracking-tighter">
                Click any planet
              </span>
            </div>

            {/* 7 DEDICATED PLANETS (One for each project) */}
            {PROJECTS.map((p, idx) => {
              const pPlanet = PROJECT_PLANETS[p.id] || {
                name: `Planet 0${idx + 1}`,
                gradient: 'radial-gradient(circle at 35% 30%, #fff 0%, #94a3b8 50%, #0f172a 100%)',
                corona: 'rgba(255,255,255,0.4)',
                accent: '#fff',
                chime: 660,
                tag: p.category
              };

              const total = PROJECTS.length;
              const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
              const radius = 210; // ample radius for 7 planets to prevent clipping

              return (
                <div
                  key={p.id}
                  className="absolute transition-transform duration-500 ease-out hidden sm:block"
                  style={{
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openSingleProjectPlanet(p.id)}
                    onMouseEnter={() => {
                      setHoveredProject(p.id);
                      if (onPlayChime && pPlanet) onPlayChime(pPlanet.chime, 0.05);
                    }}
                    onMouseLeave={() => setHoveredProject(null)}
                    title={`${pPlanet.name} • ${p.title} (Click to expand project)`}
                    className="group/planet relative cursor-pointer flex flex-col items-center"
                  >
                    {/* 3D Planet Sphere */}
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full relative flex items-center justify-center transition-all duration-300 border border-white/40 shadow-lg group-hover/planet:border-white"
                      style={{
                        background: pPlanet.gradient,
                        boxShadow: `0 0 25px ${pPlanet.corona}, inset -10px -10px 18px rgba(0,0,0,0.85), inset 8px 8px 15px rgba(255,255,255,0.5)`
                      }}
                    >
                      {/* Optional Ring for Planet OpenIoT, SNA, Sarangi */}
                      {pPlanet.hasRing && (
                        <div 
                          className="absolute w-20 sm:w-24 h-4 sm:h-5 rounded-full border -rotate-[22deg] pointer-events-none opacity-85"
                          style={{ borderColor: pPlanet.ringColor, boxShadow: `0 0 10px ${pPlanet.corona}` }}
                        />
                      )}
                      {/* Planet Number */}
                      <span className="text-[10px] font-mono text-black font-extrabold bg-white/75 px-1.5 py-0.5 rounded-full pointer-events-none shadow-sm">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Planet Floating Name Pill */}
                    <div className="mt-2 flex flex-col items-center pointer-events-none">
                      <span className={`text-[11px] font-serif font-semibold text-white drop-shadow whitespace-nowrap group-hover/planet:${pPlanet.textColor}`}>
                        {pPlanet.name}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400 bg-black/70 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap">
                        {pPlanet.tag}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Interactive 7 Planets Quick-Launch Deck */}
          <div className="mt-6 w-full max-w-5xl">
            <p className="text-zinc-400 font-mono text-xs mb-4">
              ✦ EXPLORE THE 7 PLANETARY WORLDS • CLICK ANY PLANET TO EXPAND THAT PARTICULAR PROJECT ✦
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {PROJECTS.map((p, idx) => {
                const pPlanet = PROJECT_PLANETS[p.id] || {};
                return (
                  <button
                    key={p.id}
                    onClick={() => openSingleProjectPlanet(p.id)}
                    onMouseEnter={() => {
                      setHoveredProject(p.id);
                      if (onPlayChime && pPlanet) onPlayChime(pPlanet.chime, 0.05);
                    }}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`flex flex-col items-center p-3.5 rounded-2xl border bg-void-900/70 hover:bg-white/10 transition-all hover:scale-105 group/item ${
                      pPlanet.borderColor || 'border-white/15'
                    } shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                  >
                    {/* Visual 3D Planet Orb */}
                    <div className="relative mb-2 flex items-center justify-center">
                      <div 
                        className="w-10 h-10 rounded-full shadow-lg border border-white/40 group-hover/item:scale-110 transition-transform"
                        style={{
                          background: pPlanet.gradient,
                          boxShadow: `0 0 16px ${pPlanet.corona}`
                        }}
                      />
                      {pPlanet.hasRing && (
                        <div 
                          className="absolute -inset-1 rounded-full border -rotate-[22deg] pointer-events-none opacity-85"
                          style={{ borderColor: pPlanet.ringColor }}
                        />
                      )}
                      <span className="absolute text-[9px] font-mono font-bold text-black bg-white/70 px-1 rounded pointer-events-none">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-serif text-white font-semibold whitespace-nowrap group-hover/item:text-sky-200">
                      {pPlanet.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 truncate w-full text-center mt-0.5">
                      {pPlanet.tag}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 mt-1 flex items-center gap-1">
                      {p.video ? '📹 Video' : '🖼️ Preview'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* EXTENDED / UNFOLDED STATE: FULL PROJECTS CONSTELLATION */}
      {isExtended && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45 }}
          className="space-y-10"
        >
          {/* Top Orbit Control Banner (in My Space mode) */}
          {!isTechy && (
            <div className="p-4 sm:p-5 rounded-3xl border border-white/15 bg-void-950/85 backdrop-blur-md space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full border flex items-center justify-center shadow-lg transition-transform"
                    style={{
                      background: activeSelectedPlanet?.gradient || 'radial-gradient(circle at 35% 30%, #fff 0%, #64748b 100%)',
                      borderColor: activeSelectedPlanet?.accent || 'rgba(255,255,255,0.4)',
                      boxShadow: `0 0 16px ${activeSelectedPlanet?.corona || 'rgba(255,255,255,0.3)'}`
                    }}
                  >
                    <Orbit className="w-4 h-4 text-white animate-spin" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">
                        {activeSelectedPlanet ? `${activeSelectedPlanet.name.toUpperCase()} EXPANDED` : 'THE 7 WORLDS EXPANDED'}
                      </span>
                      {activeSelectedPlanet && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${activeSelectedPlanet.borderColor} ${activeSelectedPlanet.textColor}`}>
                          {activeSelectedPlanet.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-zinc-400 text-[11px] font-sans">
                      Click any planet below to immediately expand that particular project.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-xs">
                  {selectedPlanetId !== 'all' ? (
                    <button
                      onClick={showAllPlanets}
                      className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>VIEW ALL 7</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const nextPinned = !isOrbitPinned;
                        setIsOrbitPinned(nextPinned);
                      }}
                      className={`px-3 py-1.5 rounded-full border transition-colors flex items-center gap-1.5 ${
                        isOrbitPinned
                          ? 'border-white/50 bg-white text-black font-semibold'
                          : 'border-white/20 text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Pin className={`w-3 h-3 ${isOrbitPinned ? 'fill-current' : ''}`} />
                      <span>{isOrbitPinned ? 'PINNED OPEN' : 'PIN OPEN'}</span>
                    </button>
                  )}

                  <button
                    onClick={collapseToOrbit}
                    className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-all hover:scale-105"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>COLLAPSE TO 7 PLANETS SYSTEM ✦</span>
                  </button>
                </div>
              </div>

              {/* 7 Planets Switcher Dock */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
                {PROJECTS.map((p, idx) => {
                  const pPlanet = PROJECT_PLANETS[p.id] || {};
                  const isCurrent = selectedPlanetId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => openSingleProjectPlanet(p.id)}
                      onMouseEnter={() => {
                        if (onPlayChime) onPlayChime(pPlanet.chime, 0.05);
                      }}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono shrink-0 transition-all ${
                        isCurrent
                          ? 'border-white bg-white/20 text-white shadow-[0_0_16px_rgba(255,255,255,0.3)] font-semibold scale-105'
                          : 'border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:border-white/30'
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                        style={{
                          background: pPlanet.gradient,
                          boxShadow: `0 0 8px ${pPlanet.corona}`
                        }}
                      />
                      <span>{pPlanet.name}</span>
                      {isCurrent && <span className="text-[10px] text-white">✦</span>}
                    </button>
                  );
                })}
                
                <button
                  onClick={showAllPlanets}
                  className={`px-3 py-1.5 rounded-full border text-xs font-mono shrink-0 transition-all ${
                    selectedPlanetId === 'all'
                      ? 'border-white bg-white/20 text-white shadow-[0_0_12px_rgba(255,255,255,0.2)] font-semibold'
                      : 'border-white/10 bg-black/40 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>✦ ALL 7 WORLDS</span>
                </button>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="space-y-12">
            <AnimatePresence>
          {projectsToRender.map((project, idx) => {
            const isSingleMode = !isTechy && selectedPlanetId && selectedPlanetId !== 'all';
            const isExpanded = isSingleMode ? true : !!expandedProjects[project.id];
            const currentMediaTab = activeMediaTabs[project.id] || (project.video ? 'video' : 'image');
            const planetInfo = PROJECT_PLANETS[project.id];

            return (
              <motion.article 
                layout
                id={`project-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => toggleProject(project.id)}
                className={`project-card group/card ${
                  isTechy 
                    ? 'tech-panel tech-sheen border border-sky-500/20 hover:border-sky-400/70 shadow-[0_4px_25px_rgba(0,0,0,0.8)]' 
                    : 'astral-panel reticle-corner border border-white/10 hover:border-white/40'
                } p-5 sm:p-7 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative overflow-hidden cursor-pointer`}
              >
                
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-zinc-500 font-mono text-xs font-semibold">
                        {isTechy ? `SYS_0${idx + 1} //` : `0${idx + 1} ✦`}
                      </span>
                      {!isTechy && planetInfo && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono bg-white/5 ${planetInfo.borderColor} ${planetInfo.textColor}`}>
                          <span 
                            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                            style={{
                              background: planetInfo.gradient,
                              boxShadow: `0 0 8px ${planetInfo.corona}`
                            }}
                          />
                          <span className="font-semibold">{planetInfo.name}</span>
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase transition-all duration-300 ${
                        isTechy 
                          ? 'border-sky-400/40 text-sky-300 bg-sky-950/60 shadow-[0_0_12px_rgba(56,189,248,0.2)] group-hover/card:border-sky-400 group-hover/card:shadow-[0_0_16px_rgba(56,189,248,0.35)]' 
                          : 'border-white/20 text-white bg-white/5 group-hover/card:border-white/40'
                      }`}>
                        {project.category}
                      </span>
                      {project.role && (
                        <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono transition-all duration-300 ${
                          isTechy
                            ? 'border-sky-500/30 text-sky-200 bg-zinc-900 group-hover/card:border-sky-400/50'
                            : 'border-white/10 text-zinc-300 bg-white/5 group-hover/card:border-white/20'
                        }`}>
                          {project.role}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.client}</span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 hover:bg-sky-500/25 border border-sky-400/40 text-sky-300 transition-colors shadow-sm"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 
                    className={`text-2xl sm:text-3xl lg:text-4xl text-white font-normal transition-all duration-300 flex items-center justify-between group/title ${
                      isTechy 
                        ? 'font-sans font-bold tracking-tight group-hover/card:text-sky-300' 
                        : 'font-serif group-hover/card:text-zinc-100'
                    }`}
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className={`w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-300 shrink-0 ml-2 ${
                      isTechy ? 'text-sky-400' : 'text-white'
                    }`} />
                  </h3>

                  {/* Tech Stack Pills (Visible by default in compact mode) */}
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] pt-1">
                    {project.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className={`px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-default ${
                          isTechy
                            ? 'bg-zinc-950 text-zinc-200 border-white/15 hover:border-sky-400 hover:text-sky-300 hover:bg-sky-950/60 hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                            : 'bg-void-900 text-zinc-300 border-void-800 hover:border-white/40 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Indicator Prompt */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProject(project.id);
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-300 ${
                        isExpanded
                          ? isTechy
                            ? 'border-sky-400 text-sky-200 bg-sky-950/80 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                            : 'border-white/40 text-white bg-white/15 shadow-sm'
                          : isTechy
                            ? 'border-white/10 text-zinc-400 hover:border-sky-400/60 hover:text-sky-300 hover:bg-sky-950/30'
                            : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <span>
                        {isExpanded
                          ? expandedProjects[project.id] ? 'LOCKED OPEN • CLICK TO COLLAPSE' : 'CLICK TO PIN FULL SPECS'
                          : 'HOVER OR CLICK TO EXTEND SPECS'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                      )}
                    </button>
                  </div>

                  {/* Overview: Unfolds on hover or click in left column */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pt-2 border-t border-white/10"
                      >
                        <p className="text-zinc-300 font-sans text-xs sm:text-sm font-light leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word]">
                          {project.overview}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              {/* Right Column: Visual Preview (Video or Image) */}
              <div className="lg:col-span-5">
                <div className={`media-glow-frame rounded-2xl overflow-hidden border ${
                  isTechy ? 'border-sky-500/30 bg-zinc-950 group-hover/card:border-sky-400/60' : 'border-void-700 bg-black group-hover/card:border-white/30'
                } shadow-2xl relative transition-all duration-300`}>
                  
                  {/* Console Header Bar */}
                  <div className="px-3.5 py-2.5 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between gap-2 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover/card:bg-red-500/80 transition-colors"></div>
                      <div className={`w-2.5 h-2.5 rounded-full bg-zinc-700 ${isTechy ? 'group-hover/card:bg-sky-400/80' : 'group-hover/card:bg-yellow-500/80'} transition-colors`}></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover/card:bg-emerald-500/80 transition-colors"></div>
                      {!project.mediaTabs && (
                        <span className="text-zinc-500 text-[10px] ml-2 hidden sm:inline">
                          {project.video ? 'stream://live-instance' : 'spec://interface'}
                        </span>
                      )}
                    </div>

                    {/* Multi-Media Switcher Tabs (e.g. Open IoT, IDRB) */}
                    {project.mediaTabs ? (
                      <div className="flex items-center gap-1 bg-black/90 p-0.5 rounded-lg border border-white/15 text-[10px]">
                        {project.mediaTabs.map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMediaTabs(prev => ({ ...prev, [project.id]: tab.id }));
                            }}
                            className={`px-2.5 py-0.5 rounded font-mono transition-all flex items-center gap-1 ${
                              currentMediaTab === tab.id
                                ? (isTechy ? 'bg-sky-500/25 text-sky-300 border border-sky-400/40 shadow-sm' : 'bg-white/20 text-white border border-white/30')
                                : 'text-zinc-400 hover:text-white border border-transparent'
                            }`}
                          >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                          </button>
                        ))}
                      </div>
                    ) : null}

                    <span className="text-[10px] text-zinc-400 flex items-center gap-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                      <span>ACTIVE</span>
                    </span>
                  </div>

                  {/* Media Content */}
                  {currentMediaTab === 'video' && project.video ? (
                    <div className="relative group/video bg-black flex items-center justify-center min-h-[220px]">
                      <video
                        key={project.video}
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        onClick={(e) => e.stopPropagation()}
                        className="w-full h-auto object-cover max-h-[360px]"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-1.5 pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                        <span>LIVE RECORDING</span>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-hidden bg-black flex items-center justify-center min-h-[220px]">
                      <img 
                        key={project.image}
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover/card:scale-105 transition-transform duration-700 ease-out max-h-[360px]"
                      />
                    </div>
                  )}

                  {/* Console Footer */}
                  <div className="p-3 bg-black/90 border-t border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span className="text-white flex items-center gap-1.5 font-semibold text-[11px]">
                      <span>
                        {project.mediaTabs?.find(tab => tab.id === currentMediaTab)?.footerLeft ||
                          (project.video ? 'Live Demo Stream' : 'Production Interface')}
                      </span>
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sky-400 hover:text-sky-300 font-mono text-[10px] flex items-center gap-1 hover:underline"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-zinc-500 font-mono text-[10px]">
                        {project.mediaTabs?.find(tab => tab.id === currentMediaTab)?.footerRight ||
                          (project.video ? 'Stream Recording' : 'Verified Build')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

                {/* Full-Width Extended Point Cards: Spans across whole card below media and details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="col-span-12 overflow-hidden pt-4 border-t border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <div className="flex items-center gap-2 uppercase tracking-wider font-semibold">
                          <span className={`w-1.5 h-1.5 rounded-full ${isTechy ? 'bg-sky-400' : 'bg-white'}`}></span>
                          <span>KEY TECHNICAL DELIVERABLES &amp; ARCHITECTURAL SPECIFICATIONS:</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
                          {project.highlights.length} SPECIFICATIONS ACTIVE
                        </span>
                      </div>

                      {/* Responsive Grid across full card width below the video/image card */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {project.highlights.map((point, pIdx) => {
                          const colonIdx = point.indexOf(':');
                          return (
                            <div 
                              key={pIdx} 
                              className={`group/item p-3.5 rounded-xl border transition-all duration-300 ${
                                isTechy
                                  ? 'bg-zinc-950/90 border-white/10 hover:border-sky-400/50 hover:bg-sky-950/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                                  : 'bg-void-950 border-white/10 hover:border-white/30 hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-start gap-2.5">
                                <span className={`mt-0.5 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 ${
                                  isTechy ? 'text-sky-400' : 'text-white'
                                }`}>
                                  {isTechy ? '▶' : '✦'}
                                </span>
                                <div className="space-y-1">
                                  {colonIdx > 0 ? (
                                    <>
                                      <h4 className="text-white font-semibold text-xs transition-colors group-hover/item:text-sky-200">
                                        {point.slice(0, colonIdx)}
                                      </h4>
                                      <p className="text-zinc-400 text-[11px] leading-relaxed text-left">
                                        {point.slice(colonIdx + 1).trim()}
                                      </p>
                                    </>
                                  ) : (
                                    <p className="text-zinc-300 text-xs leading-relaxed text-left">
                                      {point}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.article>
            );
          })}
          </AnimatePresence>
        </div>

        {/* Bottom Fold / Collapse Button (in My Space mode) */}
        {!isTechy && (
          <div className="pt-8 flex justify-center">
            <button
              onClick={collapseToOrbit}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 bg-void-950/90 hover:bg-white/10 text-white font-mono text-xs transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Orbit className="w-3.5 h-3.5 text-white" />
              <span>✦ COLLAPSE BACK INTO THE 7 PLANETS SYSTEM ✦</span>
            </button>
          </div>
        )}
      </motion.div>
    )}

    </section>
  );
};
