export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  actionText: string;
}

export const projects: Project[] = [
  {
    id: '01',
    category: 'ADTECH',
    title: 'Soft Frequency Capping Engine',
    description: 'Distributed real-time ad delivery system with sub-millisecond state lookups using Akka and Kafka.',
    tech: 'Scala',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPx1fF9QXl2qLrMUWcs0PV7YMF4YdmLSCNqqAU30JsqWiKS_SQbQtFnPmsjTJyWpL-S9yY1XFhR8oNlV1WwhgDOBVwTztMUktuarODpTuzMqK06VE0MO5qMlsuk-lkGmgNsLgw8HdWdbDm5zyV5KlUrqfbnnrgcprLjo5GTxYTwOLkiHg4vxJjCqqBXtFnbhdhtysy_1VRV9Z_nit6POP5zECaTYGi_tDe-bF5QvGCZuWisVkBrv_NzCC5_UPMPaF6w0RzJAZ2hjg',
    actionText: 'View_Specs',
  },
  {
    id: '02',
    category: 'SAAS',
    title: 'JoeGym SaaS Platform',
    description: 'Scalable fitness infrastructure with automated data synchronization protocols and high-availability design.',
    tech: 'Next.js',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_mrrGMwEdYFgUZYjlroP1tZK-vDfjRzWHzr2YgYJt70A0COR485SkqTUPlk1VSls4BU1VQORh9I8XKWapz7fmKumH-IbVn7HWMp6xmdtPVduw2fP6v0EXG3GHM-wnC8fRmnFa0-ZYL7ir4hl0xqRmfFiM3pTit6KV-tBhUsXgMNCVHfP7WSSf-Pu_a2lV4xrLlQhDzcykgTPUflkxL2hjPMR14XlNpCg0J6lUVme7kQlw5dKtGDj6I9b2jRz8Bxs4VavwmtskZBw',
    actionText: 'Replay_L4G4',
  },
  {
    id: '03',
    category: 'SYSTEMS',
    title: 'Multithreaded Queueing Simulation',
    description: 'Architectural simulation of producer-consumer patterns using POSIX primitives and deadlock prevention.',
    tech: 'C / Pthreads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQsZiVRf2isi6oFTPR-j1I7VNuvZT5lJaRiAJ64eQaHpmhVvzpmBNiFai9GcCkAIVc3__jzCpk46_2i3JKZVmPYNxSJQ1ouwtw6szIGxaP7wLUtzf3CPLrdyAruxyTgEZ-f9bCtd8uROrxUcmgbncbpt9ecrbCtTAxZBXYvDkJQx2JnPYUyabLWjdc5Avfd9L0_kL_2HXrrr4cBw6av0OCmAjAc6mZ7qzh9ThP2KyCUy4kN9Shza4hSe3RBX55QeELSYdWAEAHlfU',
    actionText: 'Trace_C0RE',
  },
  {
    id: '04',
    category: 'STORAGE',
    title: 'Distributed Key-Value Store',
    description: 'Fault-tolerant, eventual consistency storage engine with Raft consensus implementation.',
    tech: 'Rust',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9YAlhi1-JfDB8JMXLN-K7J7maqaPz4k0z81yj18511QUGpQlm5YAgS9YjV4NdKpErDFCa26Vz10gU7_UK2T5JUE8cAO3Rzv-AzaaH_sQ221C54Ht9tZgHFOcIuRulxlYZO-6DWAIvH3je0YmPbd_qoU7by0YuT8VZ1-8n4XyXiXgEeJZgGRxJQOI2rVY1haqCB2InHUm97IXkPovekRJxr5orMf4dHr2KLRBAY9TfN_-qSbQipUVtNW3FpJYjdGJtYyEmKmXMZI',
    actionText: 'Access_R00K',
  },
  {
    id: '05',
    category: 'TRADING',
    title: 'Real-time Ad Auction Engine',
    description: 'Ultra-low latency bidding infrastructure processing millions of requests per second.',
    tech: 'Go',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA45TvKrHM2enxvjc5UjgKSnLieHivlrw7gzXPWiLEAzJwOz7pe5J9vtuMglMTWCfpEBtKFjl9XmK08hXOU_QJSiKdXWItDB4SKbIGPWrlP8FDpxA0TR-E-Z1y8IqFe73kBVKWrNHJVJTA2MW88IdnsujCsygKGiKQQh6836P6xBarRgJnjs4c5t3BxaUoARjA5hfTNZtPI4h4W29lZU5Br0MPg00sm62xsGmGvHYFzNINVUrkabjMhqZc2q-whgNyZ7z-wGbQhPCQ',
    actionText: 'Lead_METRCS',
  },
];
