'use client';

import Image from 'next/image';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-border-light-gray bg-matte-black/50 hover:border-white transition-all duration-300">
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
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
            {project.id} / {project.category}
          </span>
          <span className="text-[9px] font-mono text-white bg-white/10 px-2 py-0.5 tracking-widest uppercase">
            {project.tech}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs font-light leading-snug mb-4">
          {project.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[8px] font-mono text-white tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
        >
          {project.actionText}
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
        </a>
      </div>
    </article>
  );
}
