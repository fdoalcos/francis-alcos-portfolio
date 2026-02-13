'use client';

import Image from 'next/image';
import { trainingMetrics, activeBuilds, currentRead } from '@/data/mindset';

export function TrainingVolumeWidget() {
  return (
    <div className="bg-surface-dark border border-border-dark p-6">
      <div className="flex justify-between items-start mb-8">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          Training_Volume
        </span>
        <svg
          className="w-4 h-4 text-neutral-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div className="space-y-4">
        {trainingMetrics.map((metric, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-[10px] mb-1 font-mono">
              <span className="text-neutral-500">{metric.label}</span>
              <span className="text-white">{metric.value}</span>
            </div>
            <div className="w-full bg-neutral-900 h-[2px]">
              <div
                className="bg-neutral-400 h-full transition-all duration-1000"
                style={{ width: `${metric.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActiveBuildsWidget() {
  return (
    <div className="bg-surface-dark border border-border-dark p-6">
      <div className="flex justify-between items-start mb-8">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          Active_Builds
        </span>
        <svg
          className="w-4 h-4 text-neutral-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <ul className="space-y-3 font-mono text-[11px]">
        {activeBuilds.map((build, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span
              className={`w-1 h-1 ${build.active ? 'bg-white' : 'bg-neutral-700'}`}
            ></span>
            <span className={build.active ? 'text-neutral-300' : 'text-neutral-500'}>
              {build.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InputBufferWidget() {
  const progressPercent = Math.round((currentRead.progress / currentRead.total) * 100);

  return (
    <div className="bg-surface-dark border border-border-dark p-6 col-span-1 md:col-span-2">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          Input_Buffer
        </span>
        <svg
          className="w-4 h-4 text-neutral-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-20 h-28 bg-neutral-900 border border-neutral-800 flex-shrink-0 grayscale opacity-50">
          <Image
            src={currentRead.image}
            alt={currentRead.title}
            width={80}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <div className="text-[10px] font-mono text-white mb-1 uppercase tracking-widest">
            Current Read
          </div>
          <h4 className="text-lg text-white font-medium mb-1">{currentRead.title}</h4>
          <p className="text-xs text-neutral-500 mb-4">{currentRead.author}</p>
          <div className="w-full bg-neutral-900 h-[2px]">
            <div
              className="bg-neutral-100 h-full transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-[9px] font-mono text-neutral-600 uppercase">
            <span>Progress</span>
            <span>
              {progressPercent}% / {currentRead.progress}pp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConsistencyHeatmap() {
  const gridItems = Array.from({ length: 30 }, (_, i) => {
    const intensity = Math.floor(Math.random() * 5);
    const colors = [
      'bg-neutral-800',
      'bg-neutral-700',
      'bg-neutral-400',
      'bg-neutral-300',
      'bg-white',
    ];
    return colors[intensity];
  });

  return (
    <div className="bg-surface-dark border border-border-dark p-6 col-span-1 md:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          Consistency_Heatmap
        </span>
        <span className="text-[9px] font-mono text-neutral-600">L30D_HISTORY</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {gridItems.map((color, idx) => (
          <div key={idx} className={`w-4 h-4 ${color}`}></div>
        ))}
      </div>
    </div>
  );
}
