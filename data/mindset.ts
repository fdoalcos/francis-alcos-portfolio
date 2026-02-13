export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface TrainingMetric {
  label: string;
  value: string;
  progress: number;
}

export interface ActiveBuild {
  name: string;
  active: boolean;
}

export interface CurrentRead {
  title: string;
  author: string;
  progress: number;
  total: number;
  image: string;
}

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Compounding',
    description: 'Optimize for long-term compounding. Small daily increments in code quality and VO2 max yield exponential dividends over decades.',
  },
  {
    number: '02',
    title: 'Reliability',
    description: 'Prioritize reliability over novelty. Boring technology and proven training protocols win through uptime and consistency.',
  },
  {
    number: '03',
    title: 'Extreme Ownership',
    description: 'The system is the responsibility of the operator. Errors are data points for immediate correction, not excuses for failure.',
  },
  {
    number: '04',
    title: 'Data Over Emotion',
    description: 'Subjective feeling is a secondary metric. Decisions are rooted in quantifiable biometrics and deployment logs.',
  },
  {
    number: '05',
    title: 'Iterative Refinement',
    description: 'The first draft is a baseline. True performance is found in the 100th refactor and the 1000th repetition.',
  },
];

export const trainingMetrics: TrainingMetric[] = [
  {
    label: 'RUN_DISTANCE_WTD',
    value: '64.2 KM',
    progress: 82,
  },
  {
    label: 'REST_HEART_RATE',
    value: '42 BPM',
    progress: 45,
  },
];

export const activeBuilds: ActiveBuild[] = [
  {
    name: 'Distributed_Tracing_Engine',
    active: true,
  },
  {
    name: 'Vector_Search_Optimizer',
    active: false,
  },
  {
    name: 'Personal_Health_API',
    active: false,
  },
];

export const currentRead: CurrentRead = {
  title: 'Systems Performance',
  author: 'Brendan Gregg — Enterprise and the Cloud',
  progress: 286,
  total: 12049,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrT4gZiUjqKm4zedFR0odAVDnymdEzh5DEmZYY3OihcJ_93HxNONXW27eJ8BvyI3lB78KET1KHfPURAywLqAfunws-PU0YAbwoeANddoHbwBwsYkEMLhMgu77h6bZrR_BL7rgr-b_R4Y389di6lCEJqn3rXxjSc8kcpz5aeRCkGEqjyRp5tkZ9H3TQENhY8qaS8NiEF5G7R-rc7IEao9bHnwgRZYx-xxMg5iFJ34SIzD6Wvhim0u9Xyn4I2RdJTj6KWQT-sV0bKxQ',
};
