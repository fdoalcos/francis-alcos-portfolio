'use client';

import { Experience } from '@/data/experience';
import CompanyLogo from '@/components/CompanyLogo';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const isCurrent = (period: string) => period.toLowerCase().includes('present');

  return (
    <section className="relative pl-10 md:pl-52">
      <div className="absolute left-[7px] md:left-[167px] top-2 bottom-2 z-0 w-px bg-white/10"></div>

      {experiences.map((exp, index) => (
        <div key={index} className="relative z-[1] mb-16 group">
          <div
            className={`absolute left-[-33px] md:left-[-41px] top-3 z-40 h-[11px] w-[11px] -translate-x-1/2 rounded-full border transition-colors duration-300 ${
              isCurrent(exp.period)
                ? 'border-status-green bg-[#0b0b0b] shadow-[0_0_0_3px_#0b0b0b,0_0_8px_rgba(25,222,35,0.18)]'
                : 'border-white/40 bg-[#0b0b0b] group-hover:border-white/70'
            }`}
          >
            <span
              className={`absolute inset-[2px] rounded-full ${
                isCurrent(exp.period) ? 'bg-status-green' : 'bg-transparent'
              }`}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 mb-5">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-[0.25em] min-w-[140px] md:absolute md:-left-56 md:top-1 md:text-right">
              {exp.period}
            </span>
            <div className="flex items-center gap-4">
              <CompanyLogo companyKey={exp.companyKey} size={42} />
              <div>
                <h2 className="text-[26px] font-bold text-white tracking-tight">
                  {exp.company}
                </h2>
                <div className="mt-1 h-px w-16 bg-white/10" />
              </div>
            </div>
          </div>

          <div
            className={`inline-flex mb-6 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] border ${
              isCurrent(exp.period)
                ? 'border-status-green/30 text-status-green/85 bg-status-green/5'
                : 'border-white/10 text-slate-300 bg-white/[0.02]'
            }`}
          >
            {exp.role}
          </div>

          <ul className="space-y-4 max-w-3xl font-mono text-[13px] uppercase text-slate-400 leading-relaxed">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-4">
                <span
                  className="shrink-0 pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
