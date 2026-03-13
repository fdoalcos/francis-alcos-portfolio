import ExperienceTimeline from '@/components/ExperienceTimeline';
import SectionKicker from '@/components/SectionKicker';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <main className="relative min-h-screen max-w-7xl mx-auto px-8 pt-28 md:pt-32 pb-16">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-5"></div>
      
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 relative z-10">
        <div>
          <SectionKicker text="HISTORY // ENGINEERING_EXPERIENCE_v3.1" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter uppercase">
            EXPERIENCE
          </h1>
          <p className="max-w-2xl text-lg text-slate-400 font-light leading-relaxed">
            A focused record of engineering work across infrastructure, backend systems, and product delivery.
          </p>
        </div>
      </header>

      <ExperienceTimeline experiences={experiences} />
    </main>
  );
}
