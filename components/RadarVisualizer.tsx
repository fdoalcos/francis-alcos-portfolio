'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Blip = {
  id: string;
  topPct: number;
  leftPct: number;
  sizePx: number;
  labelOpacityClass?: string;
};

function angularDiffDeg(a: number, b: number) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function pointAngleDeg(topPct: number, leftPct: number) {
  // Convert to center-relative [-0.5..0.5] in screen coords
  const x = leftPct / 100;
  const y = topPct / 100;
  const dx = x - 0.5;
  const dy = y - 0.5;
  // 0deg = up, clockwise positive
  const rad = Math.atan2(dx, -dy);
  const deg = (rad * 180) / Math.PI;
  return (deg + 360) % 360;
}

function LoadingDots() {
  return (
    <span className="inline-flex items-center">
      <span className="radar-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </span>
  );
}

export default function RadarVisualizer() {
  const [sweepDeg, setSweepDeg] = useState(0);
  const [nowMs, setNowMs] = useState(0);
  const startRef = useRef<number | null>(null);
  const lastHitRef = useRef<Record<string, number>>({});

  // Keep positions deterministic and matching your mock layout.
  const blips: Blip[] = useMemo(
    () => [
      { id: 'EMAIL', topPct: 22, leftPct: 72, sizePx: 8, labelOpacityClass: 'text-status-green/60' },
      { id: 'GITHUB', topPct: 65, leftPct: 22, sizePx: 10, labelOpacityClass: 'text-status-green/40' },
      { id: 'LINKEDIN', topPct: 65, leftPct: 82, sizePx: 6, labelOpacityClass: 'text-status-green/70' },
    ],
    []
  );

  const blipAngles = useMemo(() => {
    const map = new Map<string, number>();
    for (const b of blips) map.set(b.id, pointAngleDeg(b.topPct, b.leftPct));
    return map;
  }, [blips]);

  useEffect(() => {
    let raf = 0;
    const periodMs = 11000; // slower sweep for readability

    const tick = (t: number) => {
      if (startRef.current == null) startRef.current = t;
      const elapsed = t - startRef.current;
      const deg = ((elapsed % periodMs) / periodMs) * 360;
      setSweepDeg(deg);
      setNowMs(t);
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  const thresholdDeg = 18; // wider activation window so labels are readable

  return (
    <div className="relative w-full aspect-square max-w-lg border border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="text-[10px] text-console-gray uppercase tracking-widest font-mono">
            Connection_Visualizer
            <br />
            <span className="text-status-green">
              STATUS: SCANNING
              <LoadingDots />
            </span>
          </div>
          <div className="text-[10px] text-console-gray uppercase tracking-widest font-mono text-right">
            TRACE: FRANCIS ALCOS
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-[9px] text-console-gray font-mono">
            LOCATION: NEW YORK, NY
          </div>
          <div className="text-[10px] text-white/20 font-mono italic">Ready for a coffee chat.</div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        <div className="relative w-[85%] aspect-square flex items-center justify-center">
          {/* rings */}
          <div className="absolute inset-0 border border-white/10 rounded-full" />
          <div className="absolute inset-[12.5%] border border-white/5 rounded-full" />
          <div className="absolute inset-[25%] border border-white/10 rounded-full" />
          <div className="absolute inset-[37.5%] border border-white/5 rounded-full" />
          <div className="absolute inset-[50%] border border-white/10 rounded-full" />
          <div className="absolute inset-[62.5%] border border-white/5 rounded-full" />
          <div className="absolute inset-[75%] border border-white/10 rounded-full" />
          <div className="absolute inset-[87.5%] border border-white/5 rounded-full" />

          {/* crosshair */}
          <div className="absolute w-full h-[0.5px] bg-white/10" />
          <div className="absolute h-full w-[0.5px] bg-white/10" />
          <div className="absolute w-full h-[0.5px] bg-white/[0.03] rotate-[30deg]" />
          <div className="absolute w-full h-[0.5px] bg-white/[0.03] rotate-[60deg]" />
          <div className="absolute w-full h-[0.5px] bg-white/[0.03] rotate-[120deg]" />
          <div className="absolute w-full h-[0.5px] bg-white/[0.03] rotate-[150deg]" />

          {/* sweep (driven by JS) */}
          <div className="radar-sweep" style={{ transform: `rotate(${sweepDeg}deg)` }} />

          {/* blips that light up when sweep passes */}
          {blips.map((b) => {
            const a = blipAngles.get(b.id) ?? 0;
            const diff = angularDiffDeg(sweepDeg, a);
            const intensity = Math.max(0, 1 - diff / thresholdDeg);
            const isSweepingOver = intensity > 0;

            if (isSweepingOver) {
              lastHitRef.current[b.id] = nowMs;
            }

            const lastHit = lastHitRef.current[b.id] ?? -Infinity;
            const ageMs = nowMs - lastHit;
            const holdMs = 1000; // keep visible 1s extra
            const holdIntensity = ageMs >= 0 && ageMs < holdMs ? 1 - ageMs / holdMs : 0;
            const effective = isSweepingOver ? intensity : holdIntensity;
            const visible = effective > 0;

            return (
              <div
                key={b.id}
                className="absolute flex flex-col items-center"
                style={{
                  top: `${b.topPct}%`,
                  left: `${b.leftPct}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="bg-status-green rounded-full transition-opacity duration-150"
                  style={{
                    width: `${b.sizePx}px`,
                    height: `${b.sizePx}px`,
                    opacity: visible ? 0.25 + effective * 0.75 : 0,
                    boxShadow: visible ? `0 0 ${8 + effective * 10}px #4ade80` : 'none',
                  }}
                />
                <span
                  className={`text-[8px] font-mono mt-1 transition-opacity duration-150 ${b.labelOpacityClass ?? 'text-status-green/50'}`}
                  style={{ opacity: visible ? 0.2 + effective * 0.8 : 0 }}
                >
                  {b.id}
                </span>
              </div>
            );
          })}

          {/* center */}
          <div className="absolute w-2 h-2 bg-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <div className="absolute w-10 h-10 border border-white/20 rounded-full" />
        </div>
      </div>

      <div className="scanline" />
    </div>
  );
}

