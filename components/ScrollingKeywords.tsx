'use client';

const keywords = [
  'DISTRIBUTED_SYSTEMS',
  'MARATHON_42.2KM',
  'DATA_INFRASTRUCTURE',
  'ULTRA_RUNNING',
  'SCALABILITY',
  'BIO_OPTIMIZATION',
  'RELIABILITY_ENG',
];

export default function ScrollingKeywords() {
  return (
    <div className="w-full max-w-6xl overflow-hidden border-y border-accent-charcoal py-6 relative bg-primary-black">
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-primary-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-primary-black to-transparent z-10"></div>
      <div className="animate-scroll whitespace-nowrap">
        <div className="flex space-x-16 items-center px-8">
          {keywords.map((keyword, idx) => (
            <span
              key={`first-${idx}`}
              className={`text-[11px] font-mono tracking-[0.3em] ${
                idx % 2 === 0 ? 'text-white' : 'text-accent-gray'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="flex space-x-16 items-center px-8">
          {keywords.map((keyword, idx) => (
            <span
              key={`second-${idx}`}
              className={`text-[11px] font-mono tracking-[0.3em] ${
                idx % 2 === 0 ? 'text-white' : 'text-accent-gray'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
