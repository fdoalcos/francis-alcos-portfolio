import SectionKicker from '@/components/SectionKicker';
import RadarVisualizer from '@/components/RadarVisualizer';

function IconAt() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16a4 4 0 1 1 3.999-4.2v.2a2.2 2.2 0 0 0 4.4 0 8.4 8.4 0 1 0-3.1 6.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCode() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 7l-4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconNorthEast() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.75h6.5L19.25 8.5V19A1.25 1.25 0 0 1 18 20.25H8A1.25 1.25 0 0 1 6.75 19V5A1.25 1.25 0 0 1 8 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 3.75V8.5H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 12h4.5M9.75 15.5h4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <main className="pt-28 md:pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col h-full">
            <header className="mb-16 w-full">
              <SectionKicker text="INTERFACE // CONNECTION_ENDPOINT_v1.0" />
              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white max-w-4xl uppercase">
                CONTACT
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mt-6 max-w-xl">
                Best for backend engineering roles, infrastructure work, and conversations about scalable systems.
              </p>
            </header>

            <div className="w-full space-y-1 flex-grow">
              <a
                className="group flex items-center justify-between py-8 border-b border-border-gray hover:border-white transition-colors"
                href="https://docs.google.com/document/d/1VyXNTx9rIzQh-GnGVImYXhGltZN9CA-UA9V2es8P1js/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-console-gray uppercase tracking-widest mb-2 font-mono">
                    resume
                  </span>
                  <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors font-mono">
                    view resume
                  </span>
                </div>
                <span className="text-console-gray group-hover:text-white group-hover:translate-x-1 transition-all">
                  <IconDocument />
                </span>
              </a>

              <a
                className="group flex items-center justify-between py-8 border-b border-border-gray hover:border-white transition-colors"
                href="mailto:alcosfrancis@gmail.com"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-console-gray uppercase tracking-widest mb-2 font-mono">
                    email
                  </span>
                  <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors font-mono">
                    alcosfrancis@gmail.com
                  </span>
                </div>
                <span className="text-console-gray group-hover:text-white group-hover:translate-x-1 transition-all">
                  <IconAt />
                </span>
              </a>

              <a
                className="group flex items-center justify-between py-8 border-b border-border-gray hover:border-white transition-colors"
                href="https://github.com/fdoalcos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-console-gray uppercase tracking-widest mb-2 font-mono">
                    github
                  </span>
                  <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors font-mono">
                    github.com/fdoalcos
                  </span>
                </div>
                <span className="text-console-gray group-hover:text-white group-hover:translate-x-1 transition-all">
                  <IconCode />
                </span>
              </a>

              <a
                className="group flex items-center justify-between py-8 border-b border-border-gray hover:border-white transition-colors"
                href="https://linkedin.com/in/fdoalcos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-console-gray uppercase tracking-widest mb-2 font-mono">
                    linkedin
                  </span>
                  <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors font-mono">
                    linkedin.com/in/fdoalcos
                  </span>
                </div>
                <span className="text-console-gray group-hover:text-white group-hover:translate-x-1 transition-all">
                  <IconNorthEast />
                </span>
              </a>
            </div>
          </div>

          {/* Radar panel */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <RadarVisualizer />
          </div>
        </div>
      </div>
    </main>
  );
}
