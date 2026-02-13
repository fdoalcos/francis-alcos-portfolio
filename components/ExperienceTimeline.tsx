'use client';

import { Experience } from '@/data/experience';
import CompanyLogo from '@/components/CompanyLogo';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section className="relative pl-8 md:pl-48">
      <div className="absolute left-0 md:left-40 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-30"></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-24 group">
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
          
          <div className="text-slate-200 font-mono text-sm uppercase mb-6 tracking-widest">
            {exp.role}
          </div>
          
          <ul className="space-y-4 max-w-2xl font-mono text-[13px] text-slate-400 leading-relaxed uppercase">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-slate-600 shrink-0">
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
