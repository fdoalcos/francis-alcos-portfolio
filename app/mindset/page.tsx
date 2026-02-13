import {
  TrainingVolumeWidget,
  ActiveBuildsWidget,
  InputBufferWidget,
  ConsistencyHeatmap,
} from '@/components/StatusWidget';
import SectionKicker from '@/components/SectionKicker';
import { principles } from '@/data/mindset';

export default function Mindset() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-28 md:pt-32 pb-16 min-h-screen">
      <header className="mb-24 border-b border-neutral-900 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <SectionKicker text="PRINCIPLES // SYSTEM_PHILOSOPHY_v1.0" />
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase">
            MINDSET <span className="text-neutral-500 text-3xl md:text-4xl ml-2">&amp; CURRENT STATE</span>
          </h1>
          <p className="mt-4 text-neutral-400 max-w-md text-sm leading-relaxed">
            Francis Alcos: Software Engineer &amp; Endurance Athlete. Applying algorithmic rigor to physiological and professional systems.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-[10px] font-mono text-neutral-500 mb-1 uppercase tracking-widest">
            Last Sync
          </div>
          <div className="text-sm font-mono text-neutral-300">2023.10.27_08:42:01_PST</div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-16">
        {/* Operating Principles */}
        <section className="col-span-12 lg:col-span-5">
          <div className="text-[10px] font-mono text-white mb-10 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-white"></span>
            Operating Principles
          </div>
          <div className="space-y-12">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border-l border-neutral-800 pl-6 relative"
              >
                <div className="absolute left-0 top-0 h-4 w-px bg-white"></div>
                <h3 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">
                  {principle.number}. {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Status Widgets */}
        <section className="col-span-12 lg:col-span-7 space-y-8">
          <div className="text-[10px] font-mono text-white mb-10 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-neutral-600"></span>
            Now / Status
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrainingVolumeWidget />
            <ActiveBuildsWidget />
            <InputBufferWidget />
            <ConsistencyHeatmap />
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="text-[11px] font-mono text-neutral-600">
            <span className="text-neutral-400">Status:</span> Nominal
          </div>
          <div className="text-[11px] font-mono text-neutral-600">
            <span className="text-neutral-400">Location:</span> 37.7749° N, 122.4194° W
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-[10px] font-mono uppercase bg-white text-black font-bold border border-white hover:bg-neutral-200 transition-colors">
            Export_Log
          </button>
          <button className="px-4 py-2 text-[10px] font-mono uppercase text-neutral-400 border border-neutral-800 hover:border-neutral-500 transition-colors">
            Back_to_Root
          </button>
        </div>
      </footer>
    </main>
  );
}
