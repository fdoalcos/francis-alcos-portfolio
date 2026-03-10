'use client';

import { Experience } from '@/data/experience';
import CompanyLogo from '@/components/CompanyLogo';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const isCurrent = (period: string) => period.toLowerCase().includes('present');

  return (
    <section className="relative pl-8 md:pl-48">
      <div className="absolute left-0 md:left-40 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-30"></div>

      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-24 group">
          {/* Timeline dot */}
          <div className={`absolute left-0 md:-left-[33px] top-3 w-[5px] h-[5px] rounded-full border transition-colors duration-300 ${
            isCurrent(exp.period)
              ? 'bg-status-green border-status-green shadow-[0_0_8px_rgba(25,222,35,0.6)]'
              : 'bg-transparent border-slate-700 group-hover:border-white'
          }`} />

          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-4">
            <span className="text-[12px] font-mono text-slate-500 uppercase tracking-widest min-w-[140px] md:absolute md:-left-52 md:text-right">
              {exp.period}
            </span>
            <div className="flex items-center gap-3">
              <CompanyLogo companyKey={exp.companyKey} size={40} />
              <h2 className="text-[26px] font-bold text-white uppercase tracking-tight font-mono">
                {exp.company}
              </h2>
            </div>
          </div>

          {/* Role badge — differentiates duplicate company names */}
          <div className={`inline-block mb-6 px-2 py-1 font-mono text-[11px] uppercase tracking-widest border ${
            isCurrent(exp.period)
              ? 'border-status-green/30 text-status-green/80 bg-status-green/5'
              : 'border-slate-800 text-slate-400 bg-transparent'
          }`}>
            {exp.role}
          </div>

          <ul className="space-y-4 max-w-2xl font-mono text-[13px] text-slate-400 leading-relaxed uppercase">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-4">
                <span className={`shrink-0 ${isCurrent(exp.period) ? 'text-slate-500' : 'text-slate-700'}`}>
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
