import React, { useEffect, useRef } from 'react';

export const CelestialSkyCanvas = ({ 
  themeMode = 'celestial', 
  onNavigateSection,
  onPlayChime 
}) => {
  const canvasRef = useRef(null);
  const isTechy = themeMode === 'techy';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Planet Definitions (tied to Portfolio Sections)
    const planets = [
      {
        id: 'projects',
        name: 'PLANET ASTRA',
        label: 'Orbit of Creation // Projects',
        color: '#38bdf8', // Cyan / Electric Blue
        glowColor: 'rgba(56, 189, 248, 0.16)',
        shadowColor: '#0c2340',
        radius: 11,
        orbitRx: Math.min(width, height) * 0.28,
        orbitRy: Math.min(width, height) * 0.16,
        orbitTilt: -0.22,
        speed: 0.007,
        angle: 0.4,
        hasMoon: true,
        moonAngle: 0,
        moonDist: 19,
        freq: 660
      },
      {
        id: 'expertise',
        name: 'PLANET CHRONOS',
        label: 'Knowledge Spheres // Skills',
        color: '#fbbf24', // Amber / Gold
        glowColor: 'rgba(251, 191, 36, 0.16)',
        shadowColor: '#451a03',
        radius: 14,
        orbitRx: Math.min(width, height) * 0.44,
        orbitRy: Math.min(width, height) * 0.25,
        orbitTilt: -0.18,
        speed: 0.0048,
        angle: 2.1,
        hasRings: true,
        ringRx: 26,
        ringRy: 8,
        freq: 784
      },
      {
        id: 'experience',
        name: 'PLANET ORION',
        label: 'Orbital Path // Experience',
        color: '#34d399', // Emerald
        glowColor: 'rgba(52, 211, 153, 0.16)',
        shadowColor: '#064e3b',
        radius: 12,
        orbitRx: Math.min(width, height) * 0.60,
        orbitRy: Math.min(width, height) * 0.34,
        orbitTilt: -0.15,
        speed: 0.0034,
        angle: 3.9,
        hasAtmosphere: true,
        freq: 880
      },
      {
        id: 'contact',
        name: 'PLANET AURA',
        label: 'Celestial Relay // Contact',
        color: '#c084fc', // Amethyst / Violet
        glowColor: 'rgba(192, 132, 252, 0.16)',
        shadowColor: '#3b0764',
        radius: 10,
        orbitRx: Math.min(width, height) * 0.74,
        orbitRy: Math.min(width, height) * 0.42,
        orbitTilt: -0.12,
        speed: 0.0025,
        angle: 5.3,
        hasBeacon: true,
        beaconRadius: 0,
        freq: 988
      }
    ];

    let hoveredPlanet = null;
    let mouseX = -1000;
    let mouseY = -1000;

    // Shockwave particles from clicks on planets
    const shockwaves = [];

    // Background twinkling field stars
    let fieldStars = [];
    const seedStars = () => {
      fieldStars = [];
      const count = Math.floor((width * height) / 3400);
      for (let i = 0; i < count; i++) {
        fieldStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.006,
          baseAlpha: Math.random() * 0.55 + 0.2
        });
      }
    };
    seedStars();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      seedStars();

      // Recalculate orbit dimensions dynamically
      const base = Math.min(width, height);
      planets[0].orbitRx = base * 0.28;
      planets[0].orbitRy = base * 0.16;
      planets[1].orbitRx = base * 0.44;
      planets[1].orbitRy = base * 0.25;
      planets[2].orbitRx = base * 0.60;
      planets[2].orbitRy = base * 0.34;
      planets[3].orbitRx = base * 0.74;
      planets[3].orbitRy = base * 0.42;
    };

    window.addEventListener('resize', handleResize);

    // Spiral Galaxy Particles (Pre-seeded for performance)
    const galaxyStars = [];
    const galaxyArms = 2;
    const galaxyStarCount = 450;
    for (let i = 0; i < galaxyStarCount; i++) {
      const armIndex = i % galaxyArms;
      const armOffset = (armIndex * 2 * Math.PI) / galaxyArms;
      // Exponential distance from core
      const dist = Math.pow(Math.random(), 1.6) * 140 + 4;
      const angle = armOffset + dist * 0.042 + (Math.random() - 0.5) * 0.45;
      galaxyStars.push({
        dist,
        angle,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.65 + 0.25,
        color: Math.random() > 0.5 ? '#c084fc' : (Math.random() > 0.5 ? '#38bdf8' : '#ffffff')
      });
    }

    // Active interactive drawn stars
    const activeStars = [];

    // Ambient shooting stars
    const shootingStars = [];
    let nextShootTime = Date.now() + 2000;

    // Mouse Tracking for Planet Hover
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Click Handler (Planets, Moon, Galaxy, or Constellation Stars)
    const handleWindowClick = (e) => {
      // Check if clicked directly on an orbiting planet
      if (hoveredPlanet && onNavigateSection) {
        onNavigateSection(hoveredPlanet.id);
        if (onPlayChime) onPlayChime(hoveredPlanet.freq, 0.3);

        // Spawn celestial shockwave
        shockwaves.push({
          x: hoveredPlanet.currentX,
          y: hoveredPlanet.currentY,
          radius: hoveredPlanet.radius,
          maxRadius: hoveredPlanet.radius * 6,
          color: hoveredPlanet.color,
          alpha: 1.0
        });
        return;
      }

      // Check if clicked directly on the Moon
      const moonX = width * 0.88;
      const moonY = Math.max(90, height * 0.16);
      const moonRadius = 26;
      if (Math.hypot(e.clientX - moonX, e.clientY - moonY) < moonRadius + 16) {
        if (onPlayChime) onPlayChime(880, 0.35);
        shockwaves.push({
          x: moonX,
          y: moonY,
          radius: moonRadius,
          maxRadius: moonRadius * 6,
          color: '#ffffff',
          alpha: 1.0
        });
        return;
      }

      // Check if clicked directly on the Spiral Galaxy
      const galaxyX = width * 0.16;
      const galaxyY = Math.max(140, height * 0.32);
      if (Math.hypot(e.clientX - galaxyX, e.clientY - galaxyY) < 75) {
        if (onPlayChime) onPlayChime(440, 0.4);
        shockwaves.push({
          x: galaxyX,
          y: galaxyY,
          radius: 20,
          maxRadius: 150,
          color: '#c084fc',
          alpha: 1.0
        });
        return;
      }

      // Ignore canvas click if user clicked on HTML buttons, links, cards, or inputs
      if (e.target.closest('button, a, input, textarea, select, video, .astral-panel, .tech-panel, header, nav')) {
        return;
      }

      // Otherwise, spawn an interactive starlight point
      activeStars.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2.8,
        life: 1.0,
        decay: 0.0012,
        pulse: 0
      });

      if (onPlayChime) {
        onPlayChime(528 + Math.random() * 200, 0.15);
      }
    };

    window.addEventListener('click', handleWindowClick);

    // Render Loop
    let time = 0;
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const sunX = width * 0.5;
      const sunY = height * 0.48;

      // 0. THE SPIRAL GALAXY (Deep Celestial Background)
      const galaxyX = width * 0.16;
      const galaxyY = Math.max(140, height * 0.32);
      const galaxyTilt = 0.55;
      const galaxySpin = time * 0.06;

      ctx.save();
      ctx.translate(galaxyX, galaxyY);
      ctx.rotate(galaxyTilt);
      ctx.scale(1.0, 0.45);

      // Core nebula glow
      const coreGlow = ctx.createRadialGradient(0, 0, 4, 0, 0, 115);
      coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      coreGlow.addColorStop(0.2, 'rgba(192, 132, 252, 0.35)');
      coreGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.14)');
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(0, 0, 115, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Rotating spiral arm stars
      galaxyStars.forEach((s) => {
        const curAngle = s.angle + galaxySpin;
        const gx = Math.cos(curAngle) * s.dist;
        const gy = Math.sin(curAngle) * s.dist;

        ctx.beginPath();
        ctx.arc(gx, gy, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
      ctx.restore();

      // Check Galaxy Hover
      const distToGalaxy = Math.hypot(mouseX - galaxyX, mouseY - galaxyY);
      const isGalaxyHovered = distToGalaxy < 75;

      if (isGalaxyHovered) {
        ctx.beginPath();
        ctx.arc(galaxyX, galaxyY, 75, 0, Math.PI * 2);
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        const boxW = 210;
        const boxH = 46;
        const boxX = galaxyX + 25;
        const boxY = galaxyY - 23;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 8);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillStyle = '#c084fc';
        ctx.fillText('✦ SPIRAL GALAXY', boxX + 12, boxY + 18);

        ctx.font = '9px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('Andromeda Developer Disk', boxX + 12, boxY + 34);
      }

      // 1. Draw Twinkling Field Stars
      fieldStars.forEach((star) => {
        star.phase += star.speed;
        const alpha = star.baseAlpha * (0.35 + 0.65 * Math.sin(star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // 2. Periodic Shooting Stars
      const now = Date.now();
      if (now > nextShootTime) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 12 + 8,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
          life: 1.0,
          decay: 0.025
        });
        nextShootTime = now + Math.random() * 7000 + 4000;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life -= ss.decay;

        if (ss.life <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.life * 0.8})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();
      }

      // 3. THE CELESTIAL MOON: Silver Lunar Body with Craters & Atmospheric Aura
      const moonX = width * 0.88;
      const moonY = Math.max(90, height * 0.16);
      const moonRadius = 26;

      const distToMoon = Math.hypot(mouseX - moonX, mouseY - moonY);
      const isMoonHovered = distToMoon < moonRadius + 16;

      // Lunar corona / moonlight halo
      const moonGlow = ctx.createRadialGradient(moonX, moonY, moonRadius * 0.6, moonX, moonY, moonRadius * 4.2);
      moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.42)');
      moonGlow.addColorStop(0.3, 'rgba(226, 232, 240, 0.16)');
      moonGlow.addColorStop(0.7, 'rgba(148, 163, 184, 0.05)');
      moonGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 4.2, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();

      // Moon Body (Silvery pearl sphere with directional gradient)
      const moonGrad = ctx.createRadialGradient(moonX - 7, moonY - 7, 2, moonX, moonY, moonRadius);
      moonGrad.addColorStop(0, '#ffffff');
      moonGrad.addColorStop(0.55, '#e2e8f0');
      moonGrad.addColorStop(0.85, '#cbd5e1');
      moonGrad.addColorStop(1, '#64748b');

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = moonGrad;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = isMoonHovered ? 26 : 14;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Lunar Maria & Crater Relief
      const moonCraters = [
        { x: -7, y: -6, r: 5.5, a: 0.22 },
        { x: 7, y: 4, r: 7.2, a: 0.25 },
        { x: -9, y: 8, r: 4.8, a: 0.2 },
        { x: 3, y: -11, r: 4.0, a: 0.18 },
        { x: 10, y: -5, r: 3.5, a: 0.18 },
        { x: -2, y: 13, r: 5.0, a: 0.2 },
        { x: 1, y: 1, r: 8.5, a: 0.16 }
      ];

      moonCraters.forEach(c => {
        ctx.beginPath();
        ctx.arc(moonX + c.x, moonY + c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 65, 85, ${c.a})`;
        ctx.fill();
      });

      // Hover Callout on the Moon
      if (isMoonHovered) {
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius + 10, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        const boxW = 210;
        const boxH = 46;
        const boxX = Math.min(width - boxW - 20, moonX - boxW - 16);
        const boxY = moonY - 23;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 8);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('✦ THE CELESTIAL MOON', boxX + 12, boxY + 18);

        ctx.font = '9px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('Nocturnal Developer Haven', boxX + 12, boxY + 34);
      }

      // 4. SOLAR SYSTEM: Draw Elliptical Orbit Rings
      planets.forEach((p) => {
        ctx.save();
        ctx.translate(sunX, sunY);
        ctx.rotate(p.orbitTilt);

        ctx.beginPath();
        ctx.ellipse(0, 0, p.orbitRx, p.orbitRy, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // 4. Central Sun (The Core Star / Solar Nucleus) - Softened Background Ambiance
      const sunPulse = Math.sin(time * 2) * 3;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 4, sunX, sunY, 38 + sunPulse);
      sunGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      sunGrad.addColorStop(0.2, 'rgba(254, 243, 199, 0.22)');
      sunGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)');
      sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

      ctx.beginPath();
      ctx.arc(sunX, sunY, 38 + sunPulse, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.fill();

      // Sun core
      ctx.beginPath();
      ctx.arc(sunX, sunY, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5. Calculate & Draw Orbiting Planets (Reduced Opacity in Background)
      let currentHover = null;

      planets.forEach((p) => {
        p.angle += p.speed;

        // Position on tilted ellipse
        const cosAngle = Math.cos(p.angle);
        const sinAngle = Math.sin(p.angle);
        const unrotatedX = cosAngle * p.orbitRx;
        const unrotatedY = sinAngle * p.orbitRy;

        const cosTilt = Math.cos(p.orbitTilt);
        const sinTilt = Math.sin(p.orbitTilt);

        const px = sunX + (unrotatedX * cosTilt - unrotatedY * sinTilt);
        const py = sunY + (unrotatedX * sinTilt + unrotatedY * cosTilt);

        p.currentX = px;
        p.currentY = py;

        // Check hover distance
        const distToMouse = Math.hypot(mouseX - px, mouseY - py);
        const isHovered = distToMouse < p.radius + 18;
        if (isHovered) {
          currentHover = p;
        }

        // Draw background planet body & atmosphere with reduced opacity
        ctx.save();
        ctx.globalAlpha = isHovered ? 0.85 : 0.32;

        // Draw Planet Atmospheric Corona
        ctx.beginPath();
        ctx.arc(px, py, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.fill();

        // If Chronos (Ringed): Draw Back Half of Rings
        if (p.hasRings) {
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(-0.4);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.ringRx, p.ringRy, 0, Math.PI, Math.PI * 2);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }

        // 3D Shaded Planet Body (Sunlight facing the sun)
        const angleToSun = Math.atan2(sunY - py, sunX - px);
        const lightOffsetX = Math.cos(angleToSun) * (p.radius * 0.4);
        const lightOffsetY = Math.sin(angleToSun) * (p.radius * 0.4);

        const sphereGrad = ctx.createRadialGradient(
          px + lightOffsetX, 
          py + lightOffsetY, 
          p.radius * 0.2, 
          px, 
          py, 
          p.radius
        );
        sphereGrad.addColorStop(0, '#ffffff');
        sphereGrad.addColorStop(0.3, p.color);
        sphereGrad.addColorStop(1, p.shadowColor);

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrad;
        ctx.fill();

        // If Chronos (Ringed): Draw Front Half of Rings (passes in front of planet)
        if (p.hasRings) {
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(-0.4);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.ringRx, p.ringRy, 0, 0, Math.PI);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }

        // If Astra (Moon): Draw Orbiting Moon
        if (p.hasMoon) {
          p.moonAngle += 0.04;
          const mx = px + Math.cos(p.moonAngle) * p.moonDist;
          const my = py + Math.sin(p.moonAngle) * (p.moonDist * 0.5);

          ctx.beginPath();
          ctx.arc(mx, my, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#e0f2fe';
          ctx.fill();
        }

        // If Aura (Beacon): Pulsing beacon transmission wave
        if (p.hasBeacon) {
          p.beaconRadius = ((time * 30) % 40) + p.radius;
          const waveAlpha = Math.max(0, 1 - (p.beaconRadius - p.radius) / 40);
          ctx.beginPath();
          ctx.arc(px, py, p.beaconRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(192, 132, 252, ${waveAlpha * 0.35})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.restore();

        // Planet Hover Reticle & Floating HUD Callout
        if (isHovered) {
          // Orbiting target reticle
          ctx.beginPath();
          ctx.arc(px, py, p.radius + 10, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          // HUD Callout Card
          const boxW = 200;
          const boxH = 46;
          const boxX = px + 18;
          const boxY = py - 23;

          ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 8);
          ctx.fill();
          ctx.stroke();

          // Title
          ctx.font = 'bold 11px system-ui, sans-serif';
          ctx.fillStyle = p.color;
          ctx.fillText(`✦ ${p.name}`, boxX + 12, boxY + 18);

          // Subtitle / Action hint
          ctx.font = '9px monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(p.label, boxX + 12, boxY + 34);
        }
      });

      hoveredPlanet = currentHover;
      canvas.style.cursor = hoveredPlanet ? 'pointer' : 'default';

      // 6. Draw Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 3;
        sw.alpha -= 0.035;

        if (sw.alpha <= 0) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 7. Interactive User Constellations
      if (activeStars.length > 1) {
        ctx.lineWidth = 1;
        for (let i = 0; i < activeStars.length; i++) {
          for (let j = i + 1; j < activeStars.length; j++) {
            const sA = activeStars[i];
            const sB = activeStars[j];
            const dist = Math.hypot(sA.x - sB.x, sA.y - sB.y);

            if (dist < 220) {
              const vectorAlpha = (1 - dist / 220) * Math.min(sA.life, sB.life) * 0.35;
              ctx.strokeStyle = `rgba(255, 255, 255, ${vectorAlpha})`;
              ctx.beginPath();
              ctx.moveTo(sA.x, sA.y);
              ctx.lineTo(sB.x, sB.y);
              ctx.stroke();
            }
          }
        }
      }

      // 8. Draw Active User Created Stars
      for (let i = activeStars.length - 1; i >= 0; i--) {
        const star = activeStars[i];
        star.life -= star.decay;
        star.pulse += 0.04;

        if (star.life <= 0) {
          activeStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3 + Math.sin(star.pulse) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.life * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.life})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleWindowClick);
    };
  }, [themeMode, onNavigateSection, onPlayChime]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-auto z-[2]" 
    />
  );
};
