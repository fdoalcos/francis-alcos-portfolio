export interface Experience {
  period: string;
  companyKey:
    | 'datadog'
    | 'linkedin'
    | 'liberty_mutual'
    | 'umass_boston'
    | 'software_verification_lab';
  company: string;
  role: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    period: '2026 — Present',
    companyKey: 'datadog',
    company: 'Datadog',
    role: 'Software Engineer',
    responsibilities: [
      'Architecting high-scale observability platforms and distributed data pipelines.',
      'Optimization of backend services for global monitoring infrastructure.',
    ],
  },
  {
    period: 'Summer 2025',
    companyKey: 'linkedin',
    company: 'LinkedIn',
    role: 'Software Engineer Intern, Backend Infrastructure',
    responsibilities: [
      'Engineered core infrastructure services to support platform scalability and low-latency data retrieval.',
      'Implemented performance monitoring tools for distributed system health and resource allocation.',
    ],
  },
  {
    period: 'Winter 2025',
    companyKey: 'datadog',
    company: 'Datadog',
    role: 'Software Engineer Intern, Mosaic Blocks',
    responsibilities: [
      'Engineered core infrastructure services to support platform scalability and low-latency data retrieval.',
      'Implemented performance monitoring tools for distributed system health and resource allocation.',
    ],
  },
  {
    period: 'Summer 2024',
    companyKey: 'linkedin',
    company: 'LinkedIn',
    role: 'Software Engineer Intern, Ad Formats',
    responsibilities: [
      'Developed high-performance rendering engines for diverse advertisement formats across web and mobile.',
      'Leveraged internal frameworks to streamline ad delivery and maximize engagement metrics.',
    ],
  },
  {
    period: 'Summer 2023',
    companyKey: 'liberty_mutual',
    company: 'Liberty Mutual',
    role: 'Software Engineering Intern',
    responsibilities: [
      'Automated internal reporting workflows utilizing enterprise cloud infrastructure and Java services.',
      'Optimized database queries for large-scale insurance claim processing systems.',
    ],
  },
  {
    period: '2023 — 2024',
    companyKey: 'umass_boston',
    company: 'UMass Boston',
    role: 'Course Assistant, Computer Science',
    responsibilities: [
      'Facilitated technical labs in Data Structures and Algorithms for undergraduate students.',
      'Conducted code reviews and provided architectural guidance for complex software projects.',
    ],
  },
  {
    period: '2022 — 2023',
    companyKey: 'software_verification_lab',
    company: 'Software Verification Lab',
    role: 'Research Assistant',
    responsibilities: [
      'Investigated formal methods for system security and memory-safe program execution.',
      'Developed automated testing suites using LLVM and static analysis tools.',
    ],
  },
];
