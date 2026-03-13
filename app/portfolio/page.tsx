import PortfolioSection from '@/components/PortfolioSection';
import SectionKicker from '@/components/SectionKicker';
import { getProjectBySlug, projects } from '@/data/portfolio';

interface PortfolioPageProps {
  searchParams?: {
    project?: string;
  };
}

export default function Portfolio({ searchParams }: PortfolioPageProps) {
  const selectedProject = getProjectBySlug(searchParams?.project);

  return (
    <main className="max-w-7xl mx-auto px-8 pt-28 md:pt-32 pb-16 min-h-screen">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-5"></div>
      
      <section className="mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-light-gray pb-12">
          <div className="max-w-2xl">
            <SectionKicker text="PORTFOLIO // CASE_STUDIES_v1.0" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none uppercase">
              PORTFOLIO: <span className="font-light text-white/30">SELECTED WORK</span>
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Real projects with enough context to understand the problem, the engineering choices, and the impact.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection projects={projects} selectedProject={selectedProject} />
    </main>
  );
}
