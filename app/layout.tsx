import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Francis Alcos | Software Engineer & Endurance Athlete',
  description: 'I design and build distributed systems, data infrastructure, and performance-driven software.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow relative z-10 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
