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
    image: '/images/soft-fcap.png',
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
    image: '/images/domain-config.png',
    problem:
      'Internal services depended on manual configuration changes whenever teams needed new data access or feature enablement.\n\nEven simple requests required editing YAML files, opening pull requests, waiting on CI/CD, and redeploying services, which created friction across teams and slowed feature rollout.\n\nThe replacement system still needed to support safe approvals, reusable configuration patterns, and service-specific overrides where defaults were not enough.',
    approach:
      'I built a Proposal Domains system around reusable domain-based configurations that services could reference when submitting proposals.\n\nTeams could use a default domain configuration, supply custom overrides, or fall back automatically when nothing custom was provided.\n\nI implemented CRUD APIs for domain management, designed the underlying data model for proposal domains and domain configurations, and built the service in Go with gRPC so approved proposals could automatically apply configuration changes without manual repository edits or redeployments.\n\nI also added end-to-end tests covering proposal creation, inheritance, overrides, and approval workflows across services.',
    impact: [
      'Moved teams from manual configuration edits and redeployments to a proposal-driven workflow for feature enablement and access changes.',
      'Enabled reusable shared configuration templates across services while still supporting custom overrides when needed.',
      'Improved developer velocity by reducing manual operational steps and automating approval-driven configuration deployment.',
    ],
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
    image: '/images/graphql-versioning.png',
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
    image: '/images/document-live-preview.gif',
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
  },
  {
    id: '05',
    slug: 'gym-saas-platform',
    category: 'SAAS',
    title: 'JoeGym Fitness SaaS Platform',
    headline: 'Gym management system for automating memberships, check-ins, and administrative operations.',
    summary:
      'Built a full-stack gym management platform that automates member management, membership tracking, and check-ins to replace manual paper-based gym operations.',
    role: 'Founder / Full-Stack Engineer',
    timeline: 'Independent build',
    team: 'Solo build with direct user feedback',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React', 'Cloud Deployment'],
    image: '/images/joe-gym.gif',
    problem:
      'Many small gyms still manage members using paper forms, spreadsheets, or manual logs. This creates operational friction when handling sign-ups, renewals, check-ins, and membership tracking.\n\nManual workflows make errors more likely and become harder to manage as a gym grows. Staff must repeatedly track expiration dates, update member records, and validate attendance without a centralized system.\n\nThe platform needed to stay simple for front-desk staff, work across multiple devices, and reliably support daily workflows like registration, renewals, and check-ins.',
    approach:
      'I designed and built JoeGym as a SaaS platform that digitizes core gym operations through a centralized admin dashboard for member registration, profile updates, and membership management.\n\nI implemented membership plan handling for 1-month, 3-month, 6-month, and 1-year subscriptions with automatic expiration tracking and status transitions (Active, Expired, Deactivated) so staff could quickly identify current and inactive members.\n\nI also built a member check-in flow using QR codes or member IDs, added administrative visibility for active members, expiring plans, deactivated accounts, and daily check-ins, and deployed the system to cloud infrastructure with health monitoring endpoints for backend availability.',
    impact: [
      'Replaced manual record-keeping with a digital system that organizes member data and automates repetitive administrative tasks.',
      'Improved membership tracking by centralizing status, expiration windows, and check-in history for staff operations.',
      'Delivered a browser-accessible platform usable from desktop and mobile devices, enabling more scalable day-to-day gym management.',
    ],
    links: [
      {
        label: 'Live System',
        href: 'https://joegymfitness.com',
      },
    ],
  },
  {
    id: '06',
    slug: 'arduino-smart-door-lock-system',
    category: 'EMBEDDED',
    title: 'Arduino Smart Door Lock System',
    headline: 'Embedded access control system using keypad authentication and servo actuation.',
    summary:
      'Built an Arduino-based door lock system that authenticates users through a keypad password and controls a servo motor to lock or unlock the door.',
    role: 'Embedded systems project',
    timeline: 'Academic / independent work',
    team: 'Solo project',
    techStack: ['Arduino', 'Embedded C/C++', 'Microcontrollers', 'Servo Motors', 'Keypad Interfaces', 'Hardware-Software Integration'],
    image: '/images/door-lock-system.gif',
    problem:
      'Traditional door locks rely on physical keys that can be lost or duplicated. Embedded systems provide an alternative through programmable access control built on microcontrollers and hardware components.\n\nThe challenge was to securely validate user input, actuate a physical lock mechanism, and provide clear user feedback through a lightweight hardware interface.\n\nThe solution had to run within microcontroller memory and processing limits while coordinating keypad input, display feedback, buzzer signaling, and servo control.',
    approach:
      'I built an Arduino-based embedded access control system that integrates keypad authentication with physical lock actuation.\n\nI implemented password-entry logic for validating predefined keypad codes, then connected a servo motor to unlock the door on successful authentication and return it to the locked state after a short delay.\n\nI also integrated display and buzzer feedback for successful and failed attempts, and wrote firmware in Arduino C/C++ to orchestrate keypad input, password checks, and GPIO-based actuator control.',
    impact: [
      'Delivered a functional access-control prototype that authenticates users and controls a physical locking mechanism.',
      'Strengthened hardware-software integration skills across microcontroller programming, keypad handling, actuator control, and feedback interfaces.',
      'Established a foundation for future smart-security extensions such as RFID, fingerprint sensors, and IoT-based remote access.',
    ],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/fdoalcos/door-lock-system-arduino',
      },
    ],
  },
  {
    id: '07',
    slug: 'social-networking-web-app',
    category: 'FULL-STACK',
    title: 'Social Networking Web App',
    headline: 'A full-stack social platform for learning CRUD application architecture.',
    summary:
      'Built a full-stack networking web app to practice authentication, user relationships, post feeds, and end-to-end CRUD workflows.',
    role: 'Learning project / Full-Stack Developer',
    timeline: 'Academic / independent build',
    team: 'Solo project',
    techStack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Web Application Architecture'],
    image: '/images/social.gif',
    problem:
      'Social networking platforms require systems that support posts, user connections, and messaging-like interactions while keeping data organized and interfaces responsive.\n\nBuilding this kind of application requires coordinating authentication, relationship handling, content feeds, and real-time style interactions without turning the codebase into tightly coupled features.\n\nThe platform needed to support user accounts, content creation, and social interaction flows while maintaining clean boundaries between frontend and backend responsibilities.',
    approach:
      'I designed and implemented a full-stack social networking application centered on core CRUD workflows and extensible web architecture.\n\nI built authentication and profile management for registration, login, and user activity views, then added social interaction flows for creating posts, viewing a dynamic feed, and engaging with content from other users.\n\nI also implemented a user relationship system for following and interacting with other users, developed backend services and frontend interfaces together, and modeled persistent data for accounts, posts, and social relationships with efficient retrieval and update paths.',
    impact: [
      'Delivered a functional social networking application with core capabilities including authentication, content sharing, and relationship management.',
      'Strengthened full-stack engineering skills across backend logic, frontend interaction design, and relational data modeling.',
      'Created a practical foundation that can be extended with notifications, messaging, and recommendation features.',
    ],
  },
  {
    id: '08',
    slug: 'mail-service-web-app',
    category: 'FULL-STACK',
    title: 'Mail Service Web App',
    headline: 'Web-based email platform with inbox management and client-server interactions.',
    summary:
      'Built a full-stack email web application inspired by Gmail that allows users to send, receive, archive, and reply to emails through a responsive browser interface.',
    role: 'Learning project / Full-Stack Developer',
    timeline: 'Academic / independent build',
    team: 'Solo project',
    techStack: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'REST APIs'],
    image: '/images/mail.gif',
    problem:
      'Email products must support account access, message delivery, inbox browsing, and state management while keeping interfaces responsive and easy to use. The goal for this project was to build a browser-based mail service with Gmail-like core workflows.\n\nThe application required coordination across backend data handling and frontend interactivity, including authentication, sending and viewing emails, archiving, replying, and updating views without unnecessary full page reloads.\n\nThe system also needed clean integration between a Django backend and JavaScript frontend, using API-style communication and persistent data models for core email actions.',
    approach:
      'I built a full-stack mail application with Django on the backend and a JavaScript-driven frontend.\n\nI designed a Django email data model covering sender, recipients, subject, body, timestamp, read state, and archived state so the system could represent the complete email lifecycle and return serialized message data to the client.\n\nI implemented fetch-based API communication for composing messages and updating mailbox state, delivered key workflows including registration, login, inbox browsing, email detail views, archive/unarchive actions, and reply flows, and built responsive mailbox interfaces using HTML, CSS, SCSS, and Bootstrap.',
    impact: [
      'Delivered a functional email platform covering core user flows including authentication, mailbox navigation, composition, and message state management.',
      'Strengthened end-to-end full-stack experience across backend models, API-style interactions, dynamic frontend state updates, and responsive interface implementation.',
      'Established an extensible foundation for additional inbox features such as starred and important message views.',
    ],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/fdoalcos/Mail',
      },
    ],
  },
  {
    id: '09',
    slug: 'online-auction-platform',
    category: 'FULL-STACK',
    title: 'Online Auction Platform',
    headline: 'Web-based marketplace for creating listings and bidding on items.',
    summary:
      'Built a full-stack online auction platform that allows users to create listings, place bids, manage watchlists, and participate in marketplace interactions.',
    role: 'Learning project / Full-Stack Developer',
    timeline: 'Academic / independent build',
    team: 'Solo project',
    techStack: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite', 'Web Application Architecture'],
    image: '/images/auctions.gif',
    problem:
      'Online marketplaces require reliable systems for item listings, bidding, auction status, and pricing updates while maintaining fair bidding behavior and accurate state transitions.\n\nThe core challenge was coordinating authentication, listing creation, bidding validation, and dynamic auction price updates without breaking data consistency.\n\nThe platform needed to support multiple users interacting with listings concurrently while ensuring bids were validated correctly and the highest bid remained the canonical listing price.',
    approach:
      'I developed a full-stack auction web application centered on listing workflows and interactive bidding behavior.\n\nI implemented listing creation and management for title, description, starting price, and category, then built bid validation logic to require each new bid to exceed the current highest bid and automatically update listing state.\n\nI also added authenticated account flows for registration and login, a user watchlist system for tracking items of interest, and auction lifecycle controls that allow listing owners to close auctions and determine winners based on the highest valid bid.',
    impact: [
      'Delivered a functional online auction product with core workflows including listing creation, bidding, watchlists, and auction completion.',
      'Strengthened full-stack development experience across backend business logic, relational data modeling, and dynamic frontend interaction patterns.',
      'Established a foundation for future marketplace extensions such as notifications, payment integration, and real-time bidding updates.',
    ],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/fdoalcos/auction',
      },
    ],
  },
  {
    id: '10',
    slug: 'wiki-knowledge-base-platform',
    category: 'FULL-STACK',
    title: 'Wiki Knowledge Base Platform',
    headline: 'Collaborative encyclopedia-style web application.',
    summary:
      'Built a web-based wiki platform that allows users to create, edit, search, and manage knowledge articles through a structured content system.',
    role: 'Learning project / Full-Stack Developer',
    timeline: 'Academic / independent build',
    team: 'Solo project',
    techStack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Web Application Architecture'],
    image: '/images/wiki.gif',
    problem:
      'Knowledge-base platforms need structured systems for creating, editing, and retrieving content so information remains organized and easy to navigate.\n\nBuilding a wiki experience requires handling article creation and editing workflows, search functionality, and article-level navigation while maintaining consistent formatting and reliable storage.\n\nThe system needed to support dynamic article rendering, page editing, and efficient search within a simple architecture that remains maintainable as content grows.',
    approach:
      'I built a web-based wiki application focused on collaborative content authoring and structured knowledge management.\n\nI implemented article management workflows for creating, editing, and viewing encyclopedia-style entries, with stored content rendered dynamically into readable pages.\n\nI also added search and navigation for keyword-based article discovery, and used Django across backend modeling, request handling, and template rendering within an MTv architecture to keep logic and presentation cleanly organized.',
    impact: [
      'Delivered a functional wiki platform with core workflows including article creation, editing, search, and navigation.',
      'Enabled structured content management for documentation-style use cases and collaborative knowledge sharing.',
      'Strengthened full-stack experience building database-backed applications with dynamic rendering and interactive user flows.',
    ],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/fdoalcos/Wiki',
      },
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return projects.find((project) => project.slug === slug);
}
