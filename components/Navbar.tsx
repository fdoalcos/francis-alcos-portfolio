'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="site-chrome fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur-md transition-opacity duration-200">
      <div className="w-full px-4 md:px-6 h-20 flex justify-between items-center">
        <Link href="/" className="text-lg font-medium tracking-tighter hover:opacity-70 transition-opacity font-mono">
          FA<span className="text-console-gray">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-white relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-status-green'
                    : 'text-console-gray hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-console-gray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background-dark border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-[16px] font-mono tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-500'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
