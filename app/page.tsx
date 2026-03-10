import ScrollingKeywords from '@/components/ScrollingKeywords';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center">
      <div className="fixed inset-0 terminal-grid pointer-events-none"></div>
      
      {/* Left side info panel */}
      <div className="fixed top-1/2 -translate-y-1/2 left-12 hidden lg:block opacity-60">
        <div className="text-[9px] font-mono leading-relaxed text-white space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-accent-gray">LAT:</span> 40.7128° N
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-gray">LONG:</span> 74.0060° W
          </div>
        </div>
      </div>

      {/* Right side info panel */}
      <div className="fixed top-1/2 -translate-y-1/2 right-12 hidden lg:block z-20">
        <div className="text-[10px] font-mono leading-relaxed space-y-6 text-right">
          <div className="space-y-1">
            <p className="text-[8px] uppercase tracking-[0.25em] text-accent-gray font-bold">
              Location
            </p>
            <p className="text-white font-medium text-[11px]">New York, NY</p>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] uppercase tracking-[0.25em] text-accent-gray font-bold">
              Focus
            </p>
            <p className="text-white font-medium text-[11px]">Infrastructure & Data</p>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] uppercase tracking-[0.25em] text-accent-gray font-bold">
              Status
            </p>
            <p className="text-white font-medium text-[11px]">Building</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mb-12 relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 border border-accent-charcoal text-[10px] font-bold tracking-[0.5em] uppercase text-accent-light">
          SOFTWARE ENGINEER
        </div>
        <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-bold tracking-tighter text-white mb-8 leading-none">
          Francis Alcos
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-accent-gray font-light leading-relaxed tracking-wide">
          I design and build distributed systems, data infrastructure, and performance-driven software. Currently focused on{' '}
          <span className="text-white font-normal">backend systems, scalability, and reliability</span>.
        </p>
      </div>

      <ScrollingKeywords />
    </div>
  );
}
