import type { Experience } from '@/data/experience';
import Image from 'next/image';

type CompanyKey = Experience['companyKey'];

const labelByKey: Record<CompanyKey, string> = {
  datadog: 'DD',
  linkedin: 'in',
  liberty_mutual: 'LM',
  umass_boston: 'UB',
  software_verification_lab: 'SVL',
};

export default function CompanyLogo({
  companyKey,
  size = 28,
}: {
  companyKey: CompanyKey;
  size?: number;
}) {
  const label = labelByKey[companyKey];

  const imageSrcByKey: Partial<Record<CompanyKey, string>> = {
    datadog: '/datadog.png',
    linkedin: '/linkedin.png',
    liberty_mutual: '/libertymutual.png',
    umass_boston: '/umass.png',
  };

  const imageFitByKey: Partial<Record<CompanyKey, 'cover' | 'contain'>> = {
    // square mark looks best filling the box
    linkedin: 'cover',
    // wordmarks / non-square assets should not be cropped
    datadog: 'contain',
    liberty_mutual: 'contain',
    umass_boston: 'contain',
  };

  const imgSrc = imageSrcByKey[companyKey];
  const fit = imageFitByKey[companyKey] ?? 'contain';

  if (imgSrc) {
    return (
      <div
        aria-label={companyKey}
        className="flex items-center justify-center border border-white/15 bg-background-dark overflow-hidden"
        style={{ width: size, height: size }}
      >
        <Image
          src={imgSrc}
          alt={companyKey}
          width={size}
          height={size}
          className={`w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
          priority
        />
      </div>
    );
  }

  return (
    <div
      aria-label={companyKey}
      className="flex items-center justify-center border border-white/15 bg-background-dark text-white font-mono uppercase tracking-widest"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(9, Math.floor(size * 0.34)),
        lineHeight: 1,
      }}
    >
      {label}
    </div>
  );
}

