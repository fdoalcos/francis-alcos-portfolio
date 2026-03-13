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
    role: 'Backend Infrastructure Engineer, AI Platform Training and Serving',
    responsibilities: [
      'Building AI Platforms at Datadog',
    ],
  },
  {
    period: 'Summer 2025',
    companyKey: 'linkedin',
    company: 'LinkedIn',
    role: 'Software Engineer Intern, Ad-Serving Backend Infrastructure',
    responsibilities: [
      'Built a Strict Frequency Capping mechanism using Java and Couchbase with CAS-based locking, reducing duplicated ads from 14% to 3% across 200M+ impressions.',
      'Developed a Spark + Hadoop daily batch pipeline to process 1B+ records within a 7-hour window, producing frequency cap violation and latency metrics.',
      'Contributed an RFC and supported full production ramp of Strict Soft Fcap enforcement after diagnosing sync latency bottlenecks and CAS mismatch failures with 5+ engineers.',
    ],
  },
  {
    period: 'Winter 2025',
    companyKey: 'datadog',
    company: 'Datadog',
    role: 'Software Engineer Intern, Mosaic Blocks Backend',
    responsibilities: [
      'Reduced infrastructure deployment overhead by 30% across 3 services by building a centralized config system in Go (gRPC, Protobufs, PostgreSQL, Docker) for Datadog\'s Proposals Platform.',
      'Built a versioning system for Graph Gateway using Node.js, TypeScript, and GraphQL Mesh, reducing breaking changes across 10+ services.',
      'Delivered 2 backend projects to production in 14.5 weeks and authored 5+ design docs that improved onboarding and drove adoption across 2+ engineering teams.',
    ],
  },
  {
    period: 'Summer 2024',
    companyKey: 'linkedin',
    company: 'LinkedIn',
    role: 'Software Engineer Intern, Ad Formats Full-Stack',
    responsibilities: [
      'Developed a Live Preview for advertisers during ad creation with mobile and desktop support, reducing loading time by 90% (5s → 0.5s) and enabling use by 2M+ advertisers.',
      'Leveraged Java for backend business logic and Ember.js for real-time frontend updates, with data models built on the Rest.li framework and GraphQL.',
      'Collaborated with PMs, designers, and engineers to deliver the full feature end-to-end in 10 weeks.',
    ],
  },
  {
    period: 'Summer 2023',
    companyKey: 'liberty_mutual',
    company: 'Liberty Mutual',
    role: 'Software Engineer Intern, Full-Stack',
    responsibilities: [
      'Built backend features in Node.js, integrated AWS S3 to improve client data access efficiency by 10%, and deployed 12 production tickets via Bamboo.',
      'Increased Python test coverage from 35.7% to 100% and implemented Vue.js components with Lucidchart mockups to improve user experience.',
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
      'Built a full-stack algorithm visualization app converting code into visual graphs using React.js, CodeMirror, and Graphviz to support DSA learning.',
      'Implemented CUDA C GPU kernels and leveraged Faial-drf for debugging, reducing testing time by 15% and increasing output speed by 20%.',
    ],
  },
];
