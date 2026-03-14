'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ProjectCaseStudy } from '@/data/portfolio';

interface PortfolioCaseStudyModalProps {
  project?: ProjectCaseStudy;
}

function renderParagraphs(text: string) {
  return text
    .split('\n\n')
    .filter(Boolean)
    .map((paragraph) => (
      <p key={paragraph} className="text-base leading-7 text-zinc-300">
        {paragraph}
      </p>
    ));
}

export default function PortfolioCaseStudyModal({ project }: PortfolioCaseStudyModalProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    router.push(pathname, { scroll: false });
  };

  useEffect(() => {
    if (!project) {
      return;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.classList.add('case-study-open');
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    dialogRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('case-study-open');
      document.body.style.overflow = previousOverflow;
      lastFocusedElementRef.current?.focus();
    };
  }, [project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md px-4 pb-6 pt-10 md:px-8 md:pb-10 md:pt-12"
      onClick={closeModal}
    >
      <div
        id="portfolio-case-study-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-case-study-title"
        tabIndex={-1}
        className="mx-auto flex max-h-full w-full max-w-5xl flex-col overflow-hidden border border-white/10 bg-[#090909] outline-none"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-3 md:px-8 md:py-3.5">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-1 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
              {project.category} / {project.timeline}
            </div>
            <h2
              id="portfolio-case-study-title"
              className="max-w-full text-xl font-bold leading-tight tracking-tight text-white md:text-[1.75rem]"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="shrink-0 border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white hover:text-white"
            aria-label="Close case study"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="grid gap-10 p-5 md:grid-cols-[1.3fr,0.9fr] md:p-8">
            <section className="space-y-8">
              <div className="overflow-hidden border border-white/10">
                <div className="aspect-[16/8]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover grayscale-img"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                  Headline
                </p>
                <p className="text-xl leading-relaxed text-white md:text-2xl">
                  {project.headline}
                </p>
                <p className="max-w-3xl text-base leading-7 text-zinc-400">
                  {project.summary}
                </p>
              </div>

              <div className="border-y border-white/10 py-6">
                <div className="grid gap-6">
                  <div className="space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                      Problem
                    </p>
                    <div className="space-y-4">
                      {renderParagraphs(project.problem)}
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                      Approach
                    </p>
                    <div className="space-y-4">
                      {renderParagraphs(project.approach)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                  Outcome
                </p>
                <ul className="space-y-3">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-zinc-300">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <aside className="space-y-8">
              <div className="border border-white/10 bg-white/[0.02] p-5">
                <p className="mb-5 text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                  Snapshot
                </p>
                <dl className="space-y-5">
                  <div>
                    <dt className="mb-1 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Role</dt>
                    <dd className="text-sm leading-6 text-zinc-200">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Team</dt>
                    <dd className="text-sm leading-6 text-zinc-200">{project.team}</dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Stack</dt>
                    <dd className="flex flex-wrap gap-2">
                      {project.techStack.map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              {project.visibilityNote ? (
                <div className="border border-white/10 p-5">
                  <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                    Visibility Note
                  </p>
                  <p className="text-sm leading-6 text-zinc-400">{project.visibilityNote}</p>
                </div>
              ) : null}

              {project.links?.length ? (
                <div className="border border-white/10 p-5">
                  <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                    Links
                  </p>
                  <div className="space-y-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between border border-white/10 px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-white hover:text-white"
                      >
                        <span>{link.label}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Open</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
