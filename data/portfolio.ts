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
    title: 'Strict Soft Fcap Enforcement for CTV',
    headline: 'Real-time frequency cap enforcement in a large-scale ad serving system.',
    summary:
      'Designed a real-time frequency capping system to prevent duplicate ad delivery in high-volume Connected TV traffic.',
    role: 'Software Engineer Intern, Ad-Serving Backend Infrastructure',
    timeline: 'Summer 2025',
    team: 'LinkedIn ads infrastructure internship project',
    techStack: ['Java', 'Scala', 'Spark', 'Couchbase', 'Trino/Presto', 'Hadoop'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPx1fF9QXl2qLrMUWcs0PV7YMF4YdmLSCNqqAU30JsqWiKS_SQbQtFnPmsjTJyWpL-S9yY1XFhR8oNlV1WwhgDOBVwTztMUktuarODpTuzMqK06VE0MO5qMlsuk-lkGmgNsLgw8HdWdbDm5zyV5KlUrqfbnnrgcprLjo5GTxYTwOLkiHg4vxJjCqqBXtFnbhdhtysy_1VRV9Z_nit6POP5zECaTYGi_tDe-bF5QvGCZuWisVkBrv_NzCC5_UPMPaF6w0RzJAZ2hjg',
    problem:
      'As advertisers gained the ability to define custom frequency cap rules for Brand Awareness campaigns, reliable enforcement became much more important.\n\nThe main challenge was that RTB requests and impressions were separated by roughly two minutes, while Connected TV traffic could burst for the same user within milliseconds, allowing multiple requests to arrive before the previous exposure was recorded.\n\nThe solution had to prevent duplicate ad delivery without violating the latency requirements of a high-throughput real-time bidding system.',
    approach:
      'I moved frequency cap validation directly into the request serving path so duplicate ads could be blocked before delivery.\n\nI then changed exposure state updates from asynchronous to synchronous writes so each request checked the latest available state before another ad was served.\n\nEach incoming request was evaluated against the configured campaign time window in real time, and I also implemented a Spark-based analytics pipeline to measure violation rates and duplicate traffic patterns across Connected TV inventory during production ramp.',
    impact: [
      'Identified approximately 56% of Connected TV requests as duplicates, significantly improving frequency cap enforcement.',
      'Introduced only about 0.5 ms of P99.9 latency overhead, keeping performance within acceptable limits for real-time bidding.',
      'Reduced impressions by 2.58% and revenue by 0.52%, making the enforcement trade-off explicit and measurable.',
      'Proposed a follow-up bid-validation approach that would fall through to the next eligible bid instead of rejecting the request entirely, preserving valid ad opportunities while maintaining compliance.',
    ],
    visibilityNote:
      'Shared at the systems and outcome level, with implementation details limited to public-safe architecture and production metrics.',
  },
  {
    id: '02',
    slug: 'centralized-config-platform',
    category: 'INFRA',
    title: 'Proposal Domains Infrastructure',
    headline: 'Reusable configuration domains for automated proposal approvals.',
    summary:
      'Built a domain-based configuration system that simplifies and automates service proposals, eliminating manual configuration changes and deployment steps.',
    role: 'Software Engineer Intern, Mosaic Blocks Backend',
    timeline: 'Winter 2025',
    team: 'Datadog Proposals Platform internship project',
    techStack: ['Go', 'gRPC', 'Distributed Config', 'Feature Flags', 'E2E Testing'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA45TvKrHM2enxvjc5UjgKSnLieHivlrw7gzXPWiLEAzJwOz7pe5J9vtuMglMTWCfpEBtKFjl9XmK08hXOU_QJSiKdXWItDB4SKbIGPWrlP8FDpxA0TR-E-Z1y8IqFe73kBVKWrNHJVJTA2MW88IdnsujCsygKGiKQQh6836P6xBarRgJnjs4c5t3BxaUoARjA5hfTNZtPI4h4W29lZU5Br0MPg00sm62xsGmGvHYFzNINVUrkabjMhqZc2q-whgNyZ7z-wGbQhPCQ',
    problem:
      'Internal services depended on manual configuration changes whenever teams needed new data access or feature enablement.\n\nEven simple requests required editing YAML files, opening pull requests, waiting on CI/CD, and redeploying services, which created friction across teams and slowed feature rollout.\n\nThe replacement system still needed to support safe approvals, reusable configuration patterns, and service-specific overrides where defaults were not enough.',
    approach:
      'I built a Proposal Domains system around reusable domain-based configurations that services could reference when submitting proposals.\n\nTeams could use a default domain configuration, supply custom overrides, or fall back automatically when nothing custom was provided.\n\nI implemented CRUD APIs for domain management, designed the underlying data model for proposal domains and domain configurations, and built the service in Go with gRPC so approved proposals could automatically apply configuration changes without manual repository edits or redeployments.\n\nI also added end-to-end tests covering proposal creation, inheritance, overrides, and approval workflows across services.',
    impact: [
      'Moved teams from manual configuration edits and redeployments to a proposal-driven workflow for feature enablement and access changes.',
      'Enabled reusable shared configuration templates across services while still supporting custom overrides when needed.',
      'Improved developer velocity by reducing manual operational steps and automating approval-driven configuration deployment.',
    ],
    visibilityNote:
      'Framed at the infrastructure and workflow level to stay within public-safe implementation boundaries.',
  },
  {
    id: '03',
    slug: 'versioning-for-graph-gateway',
    category: 'INFRA',
    title: 'Versioning for Graph Gateway',
    headline: 'API Versioning for Graph Gateway',
    summary:
      'Implemented API versioning in a GraphQL gateway to provide stable contracts between backend services and frontend applications, enabling safe migrations and preventing breaking changes.',
    role: 'Software Engineer Intern, Mosaic Blocks Backend',
    timeline: 'Winter 2025',
    team: 'Datadog Proposals Platform internship project',
    techStack: ['Node.js', 'TypeScript', 'GraphQL', 'GraphQL Mesh', 'API Gateway', 'Observability'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA45TvKrHM2enxvjc5UjgKSnLieHivlrw7gzXPWiLEAzJwOz7pe5J9vtuMglMTWCfpEBtKFjl9XmK08hXOU_QJSiKdXWItDB4SKbIGPWrlP8FDpxA0TR-E-Z1y8IqFe73kBVKWrNHJVJTA2MW88IdnsujCsygKGiKQQh6836P6xBarRgJnjs4c5t3BxaUoARjA5hfTNZtPI4h4W29lZU5Br0MPg00sm62xsGmGvHYFzNINVUrkabjMhqZc2q-whgNyZ7z-wGbQhPCQ',
    problem:
      'The Graph Gateway acts as a middle layer between backend services and frontend applications, stitching together OpenAPI, gRPC, and GraphQL APIs into one unified GraphQL interface.\n\nBecause the gateway exposed unversioned APIs, backend changes could unintentionally break frontend applications, which increased coordination cost and slowed down safe API evolution.\n\nThe system needed to preserve backward compatibility, allow multiple API versions to coexist, and let frontend teams migrate gradually without disrupting existing services.',
    approach:
      'I implemented an API versioning framework inside the Graph Gateway so service owners and frontend consumers could rely on stable contracts.\n\nUsing GraphQL Mesh transforms, I built a versioned API layer that allowed multiple versions of the same API to coexist while still stitching together backend services from OpenAPI, gRPC, and GraphQL sources.\n\nAs a proof of concept, I migrated a frontend service in the SDP codebase from unversioned queries to versioned queries to demonstrate safe adoption.\n\nI also added usage metrics and observability to track which services were still relying on unversioned queries, and wrote migration documentation so teams could adopt versioned queries without guesswork.',
    impact: [
      'Made API evolution safer by allowing service owners to introduce changes without immediately breaking frontend applications.',
      'Enabled backend and frontend teams to work in parallel while older clients continued using stable API versions.',
      'Improved observability by tracking active API-version usage and identifying outdated integrations for migration.',
      'Delivered the core functionality in 8.5 weeks, then extended adoption through documentation, migration support, improvements, and an internal presentation.',
    ],
    visibilityNote:
      'Described at the gateway architecture and migration-workflow level to stay within public-safe implementation boundaries.',
  },
  {
    id: '04',
    slug: 'live-ad-preview',
    category: 'FULL-STACK',
    title: 'Document Live Ad Preview',
    headline: 'Unified Ads Live Preview',
    summary:
      'Built a real-time ad preview system that significantly reduced rendering and update latency, enabling advertisers to instantly preview and iterate on document ads.',
    role: 'Software Engineer Intern, Ad Formats',
    timeline: 'Summer 2024',
    team: 'LinkedIn ads product internship project',
    techStack: ['Java', 'Ember.js', 'Rest.li', 'Real-Time Rendering', 'Ads Infrastructure'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_mrrGMwEdYFgUZYjlroP1tZK-vDfjRzWHzr2YgYJt70A0COR485SkqTUPlk1VSls4BU1VQORh9I8XKWapz7fmKumH-IbVn7HWMp6xmdtPVduw2fP6v0EXG3GHM-wnC8fRmnFa0-ZYL7ir4hl0xqRmfFiM3pTit6KV-tBhUsXgMNCVHfP7WSSf-Pu_a2lV4xrLlQhDzcykgTPUflkxL2hjPMR14XlNpCg0J6lUVme7kQlw5dKtGDj6I9b2jRz8Bxs4VavwmtskZBw',
    problem:
      'Advertisers creating document ads relied on a preview workflow that was not truly real time.\n\nThey had to save the ad, wait for a backend service to retrieve and render the component, and then wait again for additional processing before seeing the result. In practice, preview rendering or updating could take around 4.2 seconds, which made iteration slow and frustrating.\n\nThe system also lacked default preview values, so users could not immediately visualize how the ad would appear. Any replacement needed to deliver instant feedback while still integrating with the existing rendering and ad-serving infrastructure.',
    approach:
      'I built a Unified Ads Preview workflow that let advertisers see a preview immediately without saving the ad first, removing the dependency on the earlier backend-persistence flow.\n\nThe new system supported initial preview rendering, fast reloads, and near-instant updates while advertisers edited content, which made iteration meaningfully faster during ad creation.\n\nI also added default preview states so users could understand the document ad layout before every field was fully completed.\n\nAlongside the implementation work, I collaborated closely with engineers, product managers, and designers on the experience, and investigated performance issues through bug reports, logs, and debugging tools to identify bottlenecks in the original preview pipeline.',
    impact: [
      'Delivered a much faster preview experience than the prior save-and-fetch workflow, substantially reducing rendering and update latency during ad creation.',
      'Improved a system supporting roughly 33,000 ads created per week, or about 1.7 million ads per year.',
      'Affected a workflow generating approximately $6 million in weekly revenue, or about $312 million annually.',
      'After ramping the feature to 100%, weekly ad creation increased to about 40,000 ads, generating roughly $6.5 million in revenue during that week.',
    ],
    visibilityNote:
      'Presented at the product workflow and performance-impact level to stay within public-safe implementation boundaries.',
  },
  {
    id: '05',
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
    id: '06',
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
