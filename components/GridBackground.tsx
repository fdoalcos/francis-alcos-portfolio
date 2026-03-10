'use client';

import { useEffect, useRef } from 'react';

const GRID = 48;

type Mode = 'tight' | 'nodes' | 'diffuse' | 'wave';

interface GridBackgroundProps {
  mode?: Mode;
}

export default function GridBackground({ mode = 'tight' }: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();

    // ── Mode A: tight ──────────────────────────────────────────────
    // Single spot, radius 60–80px, quadratic falloff
    let tX = Math.random() * w;
    let tY = Math.random() * h;
    let tVx = (Math.random() - 0.5) * 0.8;
    let tVy = (Math.random() - 0.5) * 0.8;
    let tPhase = 0;
    let tRadius = 60 + Math.random() * 20;
    let tMaxOp  = 0.30 + Math.random() * 0.2;

    // Draws every grid line in the viewport — base opacity always on, glow fades from center
    const drawFullGridGlow = (sx: number, sy: number, radius: number, glowOp: number) => {
      const baseOp = 0.06;
      const x1 = Math.ceil(w / GRID) * GRID;
      const y1 = Math.ceil(h / GRID) * GRID;

      ctx.lineWidth = 1;

      for (let ly = 0; ly <= y1; ly += GRID) {
        const t = Math.max(0, 1 - Math.abs(ly - sy) / radius);
        const fade = baseOp + glowOp * t * t;
        ctx.strokeStyle = `rgba(255,255,255,${fade})`;
        ctx.shadowColor = 'rgba(255,255,255,1)';
        ctx.shadowBlur  = fade * 45;
        ctx.beginPath();
        ctx.moveTo(0, ly);
        ctx.lineTo(w, ly);
        ctx.stroke();
      }

      for (let lx = 0; lx <= x1; lx += GRID) {
        const t = Math.max(0, 1 - Math.abs(lx - sx) / radius);
        const fade = baseOp + glowOp * t * t;
        ctx.strokeStyle = `rgba(255,255,255,${fade})`;
        ctx.shadowColor = 'rgba(255,255,255,1)';
        ctx.shadowBlur  = fade * 45;
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx, h);
        ctx.stroke();
      }

      ctx.shadowBlur  = 0;
      ctx.shadowColor = 'transparent';
    };

    const drawSpotQuad = (sx: number, sy: number, radius: number, opacity: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2);
      ctx.clip();

      const x0 = Math.floor((sx - radius) / GRID) * GRID;
      const x1 = Math.ceil((sx + radius)  / GRID) * GRID;
      const y0 = Math.floor((sy - radius) / GRID) * GRID;
      const y1 = Math.ceil((sy + radius)  / GRID) * GRID;

      ctx.lineWidth = 1;

      for (let ly = y0; ly <= y1; ly += GRID) {
        const t = 1 - Math.abs(ly - sy) / radius;
        if (t <= 0) continue;
        const fade = t * t; // quadratic
        ctx.strokeStyle = `rgba(255,255,255,${opacity * fade})`;
        ctx.beginPath();
        ctx.moveTo(x0, ly);
        ctx.lineTo(x1, ly);
        ctx.stroke();
      }

      for (let lx = x0; lx <= x1; lx += GRID) {
        const t = 1 - Math.abs(lx - sx) / radius;
        if (t <= 0) continue;
        const fade = t * t; // quadratic
        ctx.strokeStyle = `rgba(255,255,255,${opacity * fade})`;
        ctx.beginPath();
        ctx.moveTo(lx, y0);
        ctx.lineTo(lx, y1);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawSpotCubic = (sx: number, sy: number, radius: number, opacity: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2);
      ctx.clip();

      const x0 = Math.floor((sx - radius) / GRID) * GRID;
      const x1 = Math.ceil((sx + radius)  / GRID) * GRID;
      const y0 = Math.floor((sy - radius) / GRID) * GRID;
      const y1 = Math.ceil((sy + radius)  / GRID) * GRID;

      ctx.lineWidth = 1;

      for (let ly = y0; ly <= y1; ly += GRID) {
        const t = 1 - Math.abs(ly - sy) / radius;
        if (t <= 0) continue;
        const fade = t * t * t; // cubic
        ctx.strokeStyle = `rgba(255,255,255,${opacity * fade})`;
        ctx.beginPath();
        ctx.moveTo(x0, ly);
        ctx.lineTo(x1, ly);
        ctx.stroke();
      }

      for (let lx = x0; lx <= x1; lx += GRID) {
        const t = 1 - Math.abs(lx - sx) / radius;
        if (t <= 0) continue;
        const fade = t * t * t; // cubic
        ctx.strokeStyle = `rgba(255,255,255,${opacity * fade})`;
        ctx.beginPath();
        ctx.moveTo(lx, y0);
        ctx.lineTo(lx, y1);
        ctx.stroke();
      }

      ctx.restore();
    };

    // ── Mode B: nodes ──────────────────────────────────────────────
    // 3 simultaneous spots
    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      phase: number; phaseOffset: number;
      radius: number; maxOp: number;
    }

    const makeNode = (): Node => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      phase: 0,
      phaseOffset: Math.random() * Math.PI * 2,
      radius: 50 + Math.random() * 20,
      maxOp: 0.28 + Math.random() * 0.18,
    });

    const nodes: Node[] = [makeNode(), makeNode(), makeNode()];

    // ── Mode C: diffuse ────────────────────────────────────────────
    let dT = 0;
    const dRadius = 200;
    const dMaxOp  = 0.42;

    // ── Mode D: wave ───────────────────────────────────────────────
    let bandX = -300;
    const bandWidth = 150;
    const bandSpeed = 1.2;

    // ── Animate ────────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mode === 'tight') {
        tPhase += 0.007;
        const pulse   = Math.sin(tPhase * Math.PI);
        const flicker = 1 + 0.10 * Math.sin(tPhase * 15.3) * Math.sin(tPhase * 6.1);
        const opacity = Math.max(0, pulse * tMaxOp * flicker);

        if (opacity > 0.005) {
          tX += tVx;
          tY += tVy;
          drawSpotQuad(tX, tY, tRadius, opacity);
        }

        if (tPhase >= 1) {
          tPhase  = 0;
          tX      = Math.random() * w;
          tY      = Math.random() * h;
          tVx     = (Math.random() - 0.5) * 0.8;
          tVy     = (Math.random() - 0.5) * 0.8;
          tRadius = 60 + Math.random() * 20;
          tMaxOp  = 0.30 + Math.random() * 0.2;
        }
      }

      else if (mode === 'nodes') {
        for (const node of nodes) {
          node.phase += 0.007;
          const pulse   = Math.sin(node.phase * Math.PI);
          const flicker = 1 + 0.08 * Math.sin(node.phase * 13.7 + node.phaseOffset);
          const opacity = Math.max(0, pulse * node.maxOp * flicker);

          if (opacity > 0.005) {
            node.x += node.vx;
            node.y += node.vy;
            drawSpotQuad(node.x, node.y, node.radius, opacity);
          }

          if (node.phase >= 1) {
            node.phase  = 0;
            node.x      = Math.random() * w;
            node.y      = Math.random() * h;
            node.vx     = (Math.random() - 0.5) * 0.8;
            node.vy     = (Math.random() - 0.5) * 0.8;
            node.radius = 50 + Math.random() * 20;
            node.maxOp  = 0.28 + Math.random() * 0.18;
          }
        }
      }

      else if (mode === 'diffuse') {
        dT += 0.008;
        const dx = w / 2 + (w * 0.35) * Math.sin(dT);
        const dy = h / 2 + (h * 0.30) * Math.sin(dT * 1.414);
        const glowOp = dMaxOp * (0.6 + 0.4 * Math.sin(dT * 0.3));
        drawFullGridGlow(dx, dy, dRadius, glowOp);
      }

      else if (mode === 'wave') {
        bandX += bandSpeed;
        if (bandX > w + 300) bandX = -300;

        const x0 = Math.floor(0 / GRID) * GRID;
        const x1 = Math.ceil(w / GRID) * GRID;
        const y0 = Math.floor(0 / GRID) * GRID;
        const y1 = Math.ceil(h / GRID) * GRID;

        ctx.lineWidth = 1;

        // Vertical lines — main illumination from band
        for (let lx = x0; lx <= x1; lx += GRID) {
          const t = 1 - Math.abs(lx - bandX) / bandWidth;
          if (t <= 0) continue;
          const fade = t * t; // gaussian-style quadratic
          ctx.strokeStyle = `rgba(255,255,255,${0.35 * fade})`;
          ctx.beginPath();
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx, h);
          ctx.stroke();
        }

        // Horizontal lines — slight wash from band proximity
        for (let ly = y0; ly <= y1; ly += GRID) {
          const t = 1 - Math.abs(0 - bandX) / bandWidth; // use band center distance to screen
          // horizontal gets a dimmer, uniform wash when band is near center of screen
          const hFade = Math.max(0, 1 - Math.abs(bandX - w / 2) / (w / 2));
          const fade = hFade * hFade * 0.12;
          if (fade <= 0.001) continue;
          ctx.strokeStyle = `rgba(255,255,255,${fade})`;
          ctx.beginPath();
          ctx.moveTo(0, ly);
          ctx.lineTo(w, ly);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [mode]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
