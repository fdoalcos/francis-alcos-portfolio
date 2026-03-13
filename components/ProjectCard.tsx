'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ProjectCaseStudy } from '@/data/portfolio';

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const pathname = usePathname();
  const router = useRouter();

  const openCaseStudy = () => {
    router.push(`${pathname}?project=${project.slug}`, { scroll: false });
  };

  return (
    <article className="group border border-border-light-gray bg-matte-black/50 hover:border-white transition-all duration-300">
      <button
        type="button"
        onClick={openCaseStudy}
        className="w-full text-left"
        aria-haspopup="dialog"
        aria-controls="portfolio-case-study-modal"
        aria-label={`Open case study for ${project.title}`}
      >
        <div className="aspect-[16/8] overflow-hidden border-b border-border-light-gray">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full object-cover grayscale-img group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3 gap-3">
            <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
              {project.id} / {project.category}
            </span>
            <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 tracking-widest uppercase">
              {project.techStack[0]}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm font-light leading-relaxed mb-5">
            {project.summary}
          </p>
          <span className="inline-flex items-center gap-2 text-[9px] font-mono text-white tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Open_Case_Study
            <svg
              className="w-3 h-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </button>
    </article>
  );
}
