'use client';

import { usePathname } from 'next/navigation';

const pathMap: Record<string, string> = {
  '/': 'HOME',
  '/about': 'ABOUT',
  '/experience': 'EXPERIENCE',
  '/portfolio': 'PORTFOLIO',
  '/mindset': 'MINDSET',
  '/contact': 'CONTACT',
};

export default function Footer() {
  const pathname = usePathname();
  const currentPath = pathMap[pathname] || 'HOME';

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background-dark border-t border-white/10 z-50">
      <div className="w-full px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[9px] font-mono tracking-[0.3em] uppercase whitespace-nowrap">
            <span className="relative flex w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-60"></span>
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-status-green"></span>
            </span>
            <span className="text-status-green">SYSTEM ONLINE</span>
            <span className="text-console-gray/60">|</span>
            <span className="text-console-gray">PATH: /ALCOS/{currentPath}</span>
          </div>

          <div className="hidden md:block text-[11px] font-mono tracking-[0.3em] uppercase text-console-gray whitespace-nowrap">
            FRANCIS ALCOS
          </div>
        </div>
      </div>
    </footer>
  );
}
