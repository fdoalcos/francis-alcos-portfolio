'use client';

import ProjectCard from '@/components/ProjectCard';
import PortfolioCaseStudyModal from '@/components/PortfolioCaseStudyModal';
import { ProjectCaseStudy } from '@/data/portfolio';

interface PortfolioSectionProps {
  projects: ProjectCaseStudy[];
  selectedProject?: ProjectCaseStudy;
}

export default function PortfolioSection({ projects, selectedProject }: PortfolioSectionProps) {
  return (
    <>
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80">
            CASE STUDIES
          </h2>
          <div className="flex-grow h-px bg-border-light-gray/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <div className="border border-border-light-gray/20 border-dashed flex items-center justify-center min-h-[250px]">
            <span className="text-[10px] font-mono text-white/10 tracking-[0.4em] uppercase">
              More_Case_Studies_Soon
            </span>
          </div>
        </div>
      </section>

      <PortfolioCaseStudyModal project={selectedProject} />
    </>
  );
}
