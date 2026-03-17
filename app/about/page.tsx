import SectionKicker from '@/components/SectionKicker';

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-28 md:pt-32 pb-16 relative z-10 min-h-screen">
      <div className="fixed inset-0 grayscale-grain z-0"></div>
      <div className="w-full relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left narrative */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <SectionKicker text="PROFILE // ENGINEER_SPEC_v1.0.0" />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Hey, I&apos;m Francis!
              </h1>
            </div>
            <div className="space-y-12">
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
		I'm an engineer and builder driven by curiosity and imagination. In engineering, I focus on building and scaling systems, especially large-scale infrastructure and product development. I'm deeply curious about how and why systems are built, and I enjoy continously learning and improving.
              </p>
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
		Outside, of engineering, I enjoy reading about topics that pique my intrests, such as self-improvement, finance, and sports. I'm also actively training as a triathlete, pushing my limits both physically and mentally, as I believe that you can't make an impact on the world without first making an impact on yourself.
              </p>
            </div>
          </div>

          {/* Right dashboard */}
          <div className="lg:col-span-6 relative lg:sticky lg:top-24 lg:self-start">
            <div className="border border-zinc-800 bg-zinc-900/10 backdrop-blur-md p-1">
              <div className="border border-zinc-800 p-8 dashboard-grid relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-6 mb-8">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-900"></div>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
			Francis Dominic O. Alcos
                  </span>
                </div>

                <div className="space-y-10 font-mono">
                  <div className="space-y-2">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span> ROLE
                    </span>
                    <p className="text-[13px] text-zinc-400 pl-4 border-l border-zinc-800">
			Engineer and builder
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span> ENGINEERING
                    </span>
                    <ul className="text-[12px] text-zinc-400 pl-4 space-y-2 list-none border-l border-zinc-800">
                      <li>Backend Systems</li>
                      <li>Distributed Infrastructure</li>
                      <li>Data-Intensive Applications</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span> LEARNING
                    </span>
                    <ul className="text-[12px] text-zinc-400 pl-4 space-y-1.5 list-none border-l border-zinc-800">
                      <li>Studying system tradeoffs</li>
                      <li>Distributed consistency models</li>
                      <li>Optimization patterns</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span> OFF-CLOCK
                    </span>
                    <ul className="text-[12px] text-zinc-400 pl-4 space-y-1.5 list-none border-l border-zinc-800">
                      <li>Training as a triathlete</li>
                      <li>Building endurance and strength</li>
                      <li>Reading, reflecting, and improving</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white"></span> PRINCIPLES
                    </span>
                    <div className="pl-4 border-l border-zinc-800 flex flex-wrap gap-x-4 gap-y-2">
                      <span className="text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5">
                        Build for reliability
                      </span>
                      <span className="text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5">
                        Prefer clarity
                      </span>
                      <span className="text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5">
                        Improve incrementally
                      </span>
                      <span className="text-[11px] text-zinc-400 border border-zinc-800 px-2 py-0.5">
                        Think long-term
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-zinc-800/50 font-mono text-[9px] text-zinc-600 flex justify-between items-center uppercase tracking-tighter">
                  <span>Status: operational</span>
                  <span>Region: us-east-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
