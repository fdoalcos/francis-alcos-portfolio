import ProjectCard from '@/components/ProjectCard';
import SectionKicker from '@/components/SectionKicker';
import { projects } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-28 md:pt-32 pb-16 min-h-screen">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-5"></div>
      
      <section className="mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-light-gray pb-12">
          <div className="max-w-2xl">
            <SectionKicker text="ARCHIVE // BUILD_HISTORY_v2.00" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none uppercase">
              PORTFOLIO: <span className="font-light text-white/30">CODE & FEATS</span>
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              A high-density collection of distributed engines, low-level simulations, and scalable architectures engineered for peak computational performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80">
            TECHNICAL REPOSITORIES
          </h2>
          <div className="flex-grow h-px bg-border-light-gray/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="border border-border-light-gray/20 border-dashed flex items-center justify-center min-h-[250px]">
            <span className="text-[10px] font-mono text-white/10 tracking-[0.4em] uppercase">
              End_Of_Archive
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
