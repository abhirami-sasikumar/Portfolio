import React, { useEffect, useRef } from 'react';

export const InteractiveNetworkMap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Major global developer tech nodes (lat/long relative to canvas)
    const baseNodes = [
      { x: 0.72, y: 0.58, label: 'Kerala / India (Hub)', isHub: true, pulse: 0 },
      { x: 0.70, y: 0.52, label: 'Bengaluru', isHub: false, pulse: 1 },
      { x: 0.65, y: 0.48, label: 'Mumbai', isHub: false, pulse: 2 },
      { x: 0.52, y: 0.38, label: 'London', isHub: false, pulse: 3 },
      { x: 0.56, y: 0.35, label: 'Berlin', isHub: false, pulse: 4 },
      { x: 0.28, y: 0.40, label: 'New York', isHub: false, pulse: 5 },
      { x: 0.20, y: 0.42, label: 'San Francisco', isHub: false, pulse: 2 },
      { x: 0.82, y: 0.62, label: 'Singapore', isHub: false, pulse: 1 },
      { x: 0.88, y: 0.42, label: 'Tokyo', isHub: false, pulse: 4 },
      { x: 0.90, y: 0.78, label: 'Sydney', isHub: false, pulse: 3 },
      { x: 0.58, y: 0.50, label: 'Dubai', isHub: false, pulse: 0 },
    ];

    // Flying data packets along connection lines
    const packets = [];
    for (let i = 0; i < 24; i++) {
      const targetIdx = Math.floor(Math.random() * (baseNodes.length - 1)) + 1;
      packets.push({
        sourceIdx: 0, // Kerala hub
        targetIdx: targetIdx,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        size: 2 + Math.random() * 2,
        color: Math.random() > 0.5 ? '#818cf8' : '#06b6d4'
      });
    }

    // Grid particles floating subtly
    const ambientParticles = [];
    for (let i = 0; i < 45; i++) {
      ambientParticles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0003,
        vy: (Math.random() - 0.5) * 0.0003,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient world coordinates grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw ambient floating star/grid particles
      ambientParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        ctx.fillStyle = `rgba(165, 180, 252, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw curved trajectory communication lines between nodes
      const hub = baseNodes[0];
      const hubX = hub.x * width;
      const hubY = hub.y * height;

      baseNodes.slice(1).forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;

        // Quadratic bezier curved arc
        const midX = (hubX + nx) / 2;
        const midY = (hubY + ny) / 2 - 40;

        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.quadraticCurveTo(midX, midY, nx, ny);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.16)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // 4. Animate flying data packets along the arcs
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress > 1) pkt.progress = 0;

        const target = baseNodes[pkt.targetIdx];
        const nx = target.x * width;
        const ny = target.y * height;
        const midX = (hubX + nx) / 2;
        const midY = (hubY + ny) / 2 - 40;

        // Compute point on quadratic bezier curve
        const t = pkt.progress;
        const curX = (1 - t) * (1 - t) * hubX + 2 * (1 - t) * t * midX + t * t * nx;
        const curY = (1 - t) * (1 - t) * hubY + 2 * (1 - t) * t * midY + t * t * ny;

        // Packet glow & head
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(curX, curY, pkt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // 5. Draw the city/station nodes with pulsing radar rings
      baseNodes.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;

        // Pulsing radar ripple
        const pulse = (time + node.pulse) % 3;
        const pulseRadius = pulse * 14;
        const pulseAlpha = Math.max(0, 1 - pulse / 3);

        ctx.beginPath();
        ctx.arc(nx, ny, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = node.isHub 
          ? `rgba(99, 102, 241, ${pulseAlpha * 0.7})` 
          : `rgba(6, 182, 212, ${pulseAlpha * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node center core
        ctx.beginPath();
        ctx.arc(nx, ny, node.isHub ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = node.isHub ? '#a5b4fc' : '#38bdf8';
        ctx.shadowColor = node.isHub ? '#6366f1' : '#06b6d4';
        ctx.shadowBlur = node.isHub ? 15 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label for Kerala hub
        if (node.isHub) {
          ctx.font = '11px "JetBrains Mono", monospace';
          ctx.fillStyle = '#c7d2fe';
          ctx.fillText(node.label, nx + 10, ny + 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-60">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
      />
      {/* Vignette mask so content stays crisp and legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-[#080c14]/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c14] via-transparent to-[#080c14]"></div>
    </div>
  );
};
