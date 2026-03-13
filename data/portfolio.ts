export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  category: string;
  title: string;
  headline: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  techStack: string[];
  image: string;
  problem: string;
  approach: string;
  impact: string[];
  visibilityNote?: string;
  links?: ProjectLink[];
}

export const projects: ProjectCaseStudy[] = [
  {
    id: '01',
    slug: 'strict-frequency-capping',
    category: 'ADTECH',
    title: 'Strict Frequency Capping',
    headline: 'Real-time backend enforcement to reduce duplicate ad delivery at production scale.',
    summary:
      'Built a backend enforcement path that made ad repetition materially less likely while preserving latency expectations for a large-scale serving system.',
    role: 'Software Engineer Intern, Ad-Serving Backend Infrastructure',
    timeline: 'Summer 2025',
    team: 'LinkedIn ads infrastructure internship project',
    techStack: ['Java', 'Couchbase', 'Spark', 'Hadoop'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPx1fF9QXl2qLrMUWcs0PV7YMF4YdmLSCNqqAU30JsqWiKS_SQbQtFnPmsjTJyWpL-S9yY1XFhR8oNlV1WwhgDOBVwTztMUktuarODpTuzMqK06VE0MO5qMlsuk-lkGmgNsLgw8HdWdbDm5zyV5KlUrqfbnnrgcprLjo5GTxYTwOLkiHg4vxJjCqqBXtFnbhdhtysy_1VRV9Z_nit6POP5zECaTYGi_tDe-bF5QvGCZuWisVkBrv_NzCC5_UPMPaF6w0RzJAZ2hjg',
    problem:
      'The serving stack needed stronger safeguards against duplicate ad exposure without adding enough coordination overhead to hurt delivery performance.',
    approach:
      'Implemented a strict frequency-capping flow backed by CAS-based locking, then paired it with a daily batch pipeline that surfaced violation and latency signals needed for ramp decisions and debugging.',
    impact: [
      'Reduced duplicated ads from 14% to 3% across more than 200 million impressions.',
      'Processed over 1 billion records in a seven-hour batch window for reporting and validation.',
      'Supported production rollout by diagnosing sync latency and lock-contention edge cases with partner engineers.',
    ],
    visibilityNote:
      'This summary is intentionally limited to public-safe architecture and impact details.',
  },
  {
    id: '02',
    slug: 'centralized-config-platform',
    category: 'INFRA',
    title: 'Centralized Config Platform',
    headline: 'A shared backend configuration system that removed repeated deployment overhead across services.',
    summary:
      'Built a control-plane style service for managing configuration in one place instead of duplicating service-by-service setup and deployment work.',
    role: 'Software Engineer Intern, Mosaic Blocks Backend',
    timeline: 'Winter 2025',
    team: 'Datadog Proposals Platform internship project',
    techStack: ['Go', 'gRPC', 'Protobuf', 'PostgreSQL', 'Docker'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA45TvKrHM2enxvjc5UjgKSnLieHivlrw7gzXPWiLEAzJwOz7pe5J9vtuMglMTWCfpEBtKFjl9XmK08hXOU_QJSiKdXWItDB4SKbIGPWrlP8FDpxA0TR-E-Z1y8IqFe73kBVKWrNHJVJTA2MW88IdnsujCsygKGiKQQh6836P6xBarRgJnjs4c5t3BxaUoARjA5hfTNZtPI4h4W29lZU5Br0MPg00sm62xsGmGvHYFzNINVUrkabjMhqZc2q-whgNyZ7z-wGbQhPCQ',
    problem:
      'Multiple services carried repeated configuration and release work, which slowed deployments and made operational changes harder to coordinate safely.',
    approach:
      'Designed and shipped a centralized configuration service with typed contracts and service-to-service APIs, then documented the operating model so other teams could adopt it without bespoke onboarding.',
    impact: [
      'Reduced deployment overhead by 30% across three services.',
      'Delivered two production backend projects during a single internship cycle.',
      'Authored design docs that improved adoption across multiple engineering teams.',
    ],
    visibilityNote:
      'Details are phrased at the system level to stay within public-safe boundaries.',
  },
  {
    id: '03',
    slug: 'live-ad-preview',
    category: 'FULL-STACK',
    title: 'Live Ad Preview',
    headline: 'End-to-end advertiser preview tooling with near-instant feedback across device formats.',
    summary:
      'Shipped a real-time preview experience so advertisers could see creative updates immediately instead of waiting through slow refresh cycles.',
    role: 'Software Engineer Intern, Ad Formats',
    timeline: 'Summer 2024',
    team: 'LinkedIn ads product internship project',
    techStack: ['Java', 'Ember.js', 'GraphQL', 'Rest.li'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_mrrGMwEdYFgUZYjlroP1tZK-vDfjRzWHzr2YgYJt70A0COR485SkqTUPlk1VSls4BU1VQORh9I8XKWapz7fmKumH-IbVn7HWMp6xmdtPVduw2fP6v0EXG3GHM-wnC8fRmnFa0-ZYL7ir4hl0xqRmfFiM3pTit6KV-tBhUsXgMNCVHfP7WSSf-Pu_a2lV4xrLlQhDzcykgTPUflkxL2hjPMR14XlNpCg0J6lUVme7kQlw5dKtGDj6I9b2jRz8Bxs4VavwmtskZBw',
    problem:
      'Advertisers needed a faster and more trustworthy way to validate creative during ad creation on both mobile and desktop layouts.',
    approach:
      'Built the feature end to end, wiring backend business logic to frontend preview updates so changes could render quickly and consistently across supported experiences.',
    impact: [
      'Reduced preview loading time by roughly 90%, from five seconds to half a second.',
      'Enabled the feature for more than 2 million advertisers.',
      'Delivered the project end to end in a 10-week internship window.',
    ],
    visibilityNote:
      'Implementation details are summarized to keep the case study public-safe.',
  },
  {
    id: '04',
    slug: 'gym-saas-platform',
    category: 'SAAS',
    title: 'JoeGym SaaS Platform',
    headline: 'A scheduling and operations platform designed around reliability for a growing fitness business.',
    summary:
      'Built a business-facing web platform that consolidated scheduling, operational workflows, and day-to-day data management into a single system.',
    role: 'Founder / Full-Stack Engineer',
    timeline: 'Independent build',
    team: 'Solo build with direct user feedback',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9YAlhi1-JfDB8JMXLN-K7J7maqaPz4k0z81yj18511QUGpQlm5YAgS9YjV4NdKpErDFCa26Vz10gU7_UK2T5JUE8cAO3Rzv-AzaaH_sQ221C54Ht9tZgHFOcIuRulxlYZO-6DWAIvH3je0YmPbd_qoU7by0YuT8VZ1-8n4XyXiXgEeJZgGRxJQOI2rVY1haqCB2InHUm97IXkPovekRJxr5orMf4dHr2KLRBAY9TfN_-qSbQipUVtNW3FpJYjdGJtYyEmKmXMZI',
    problem:
      'The business needed one reliable interface for operational workflows instead of scattered manual processes and disconnected tools.',
    approach:
      'Designed the application around clear operational paths, durable data handling, and fast iteration with real user feedback, prioritizing workflows that removed friction from daily use.',
    impact: [
      'Consolidated multiple operational tasks into a single web application.',
      'Improved day-to-day workflow speed by replacing manual coordination with a dedicated product flow.',
      'Used direct customer feedback to refine features instead of building in isolation.',
    ],
  },
  {
    id: '05',
    slug: 'multithreaded-queueing-simulation',
    category: 'SYSTEMS',
    title: 'Multithreaded Queueing Simulation',
    headline: 'A systems project for modeling producer-consumer behavior and concurrency tradeoffs under load.',
    summary:
      'Built a lower-level simulation to study queueing behavior, synchronization primitives, and failure modes in concurrent systems.',
    role: 'Systems programming project',
    timeline: 'Academic / independent work',
    team: 'Solo project',
    techStack: ['C', 'Pthreads'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQsZiVRf2isi6oFTPR-j1I7VNuvZT5lJaRiAJ64eQaHpmhVvzpmBNiFai9GcCkAIVc3__jzCpk46_2i3JKZVmPYNxSJQ1ouwtw6szIGxaP7wLUtzf3CPLrdyAruxyTgEZ-f9bCtd8uROrxUcmgbncbpt9ecrbCtTAxZBXYvDkJQx2JnPYUyabLWjdc5Avfd9L0_kL_2HXrrr4cBw6av0OCmAjAc6mZ7qzh9ThP2KyCUy4kN9Shza4hSe3RBX55QeELSYdWAEAHlfU',
    problem:
      'I wanted a concrete way to understand how concurrent workloads behave when coordination, resource contention, and scheduling choices start to interact.',
    approach:
      'Implemented producer-consumer flows with POSIX primitives, then used the simulation to reason about synchronization, deadlock prevention, throughput, and backpressure tradeoffs.',
    impact: [
      'Deepened understanding of concurrency primitives and synchronization behavior.',
      'Created a reusable project for discussing systems fundamentals in interviews.',
      'Turned abstract queueing and threading concepts into observable behavior under load.',
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return projects.find((project) => project.slug === slug);
}
