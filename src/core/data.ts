export interface ExperienceEntry {
  role: string
  company: string
  period: string
  start: number
  current?: boolean
  stack: string[]
  bullets: string[]
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface EducationEntry {
  degree: string
  school: string
  place: string
  period: string
}

export interface Language {
  lang: string
  level: string
}

export interface StatEntry {
  k: string
  v: string
}

export interface CV {
  name: string
  handle: string
  title: string
  role: string
  location: string
  tagline: string
  blurb: string
  contact: {
    email: string
    phone: string
    github: string
    githubUrl: string
  }
  stats: StatEntry[]
  experience: ExperienceEntry[]
  skills: SkillGroup[]
  education: EducationEntry[]
  languages: Language[]
  stack: string[]
}

export const CV: CV = {
  name: 'Morteza Behboodian',
  handle: 'xeptore',
  title: 'Senior Software Engineer',
  role: 'Back-End Engineer',
  location: 'Birjand, Iran',
  tagline: "Backend systems that scale, observe themselves, and don't wake you at 3am.",
  blurb:
    "I design and rebuild backend architectures — turning monoliths into resilient Go microservices, wiring up the observability that keeps them honest, and writing the docs so the next engineer doesn't have to ask.",
  contact: {
    email: 'work.xeptore@gmail.com',
    phone: '(+98) 937-129-6909',
    github: 'github.com/xeptore',
    githubUrl: 'https://github.com/xeptore',
  },
  stats: [
    { k: 'years shipping', v: '11+' },
    { k: 'teams & companies', v: '9' },
    { k: 'primary language', v: 'Go' },
    { k: 'spoken languages', v: '2' },
  ],
  experience: [
    {
      role: 'Sr. Back-End Engineer',
      company: 'Eways',
      period: '11/2023 — Present',
      start: 2023.83,
      current: true,
      stack: ['Go', 'Kubernetes', 'Docker', 'Elasticsearch', 'GitLab CI/CD', 'Redis', 'PostgreSQL'],
      bullets: [
        'Led the rewrite of a large e-commerce monolith into a scalable Go microservices architecture.',
        'Partnered with PMs and POs to define service boundaries aligned with business and user needs.',
        'Integrated unit, integration, and contract testing across services for reliability and maintainability.',
        'Introduced Buildah-based image builds in GitLab CI/CD for faster, secure, reproducible deploys.',
        'Stood up monitoring, centralized Elasticsearch logging, Slack alerting, and service-level dashboards.',
        'Configured health checks, crash analytics, and distributed-tracing foundations to improve reliability.',
      ],
    },
    {
      role: 'Go Course Instructor',
      company: 'Vandar',
      period: '10/2023 — 01/2024',
      start: 2023.75,
      stack: ['Go', 'Software Design'],
      bullets: [
        'Designed and delivered an in-house Go training course for the backend team.',
        'Built a curriculum covering idiomatic Go, internals, the memory model, benchmarking, and design patterns.',
        'Ran hands-on exercises, code reviews, and practical architecture discussions.',
      ],
    },
    {
      role: 'Sr. Back-End Engineer',
      company: 'Heli Tech',
      period: '10/2022 — 10/2023',
      start: 2022.75,
      stack: ['Go', 'MongoDB', 'Docker', 'InfluxDB', 'AWS', 'Grafana', 'WebSocket', 'gRPC', 'Envoy'],
      bullets: [
        'Drafted scalable service specs with PMs and shipped iterative MVPs to shorten feedback loops.',
        'Built a data-provider service streaming real-time market data from multiple external exchanges.',
        'Ran R&D on Envoy-based Web-gRPC proxying for direct browser communication.',
        'Added structured logging, metrics, and Grafana dashboards; tuned infra for stability.',
      ],
    },
    {
      role: 'Back-End Engineer',
      company: 'Edge Petrol',
      period: '12/2021 — 09/2022',
      start: 2021.92,
      stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'AWS', 'Ruby', 'Kubernetes', 'GitHub Actions'],
      bullets: [
        'Raised test coverage to 98%+ across legacy services, significantly improving reliability.',
        'Extracted a legacy Ruby codebase into a TypeScript microservice with clearer architecture.',
        'Refactored legacy JavaScript into TypeScript, reducing bugs and improving type safety.',
        'Optimized Dockerfiles for 35% faster builds, 25% smaller images, and a better security posture.',
      ],
    },
    {
      role: 'Sr. Back-End Engineer',
      company: 'Snappfood',
      period: '08/2020 — 11/2021',
      start: 2020.67,
      stack: ['Go', 'MySQL', 'Docker', 'Elasticsearch', 'GitLab CI/CD', 'Envoy', 'gRPC', 'Prometheus', 'Kong'],
      bullets: [
        'Defined microservice boundaries and APIs across squads, aligned with domain models.',
        'Integrated Prometheus monitoring and a unified ELK logging pipeline across services.',
        'Built automated linting / style-check pipelines to enforce consistent code quality.',
        'Shipped a fully tested gRPC microservice with clear contracts and backward compatibility.',
      ],
    },
    {
      role: 'Full-Stack Engineer',
      company: 'MedXFactor',
      period: '06/2019 — 07/2020',
      start: 2019.5,
      stack: ['Node.js', 'TypeScript', 'Fastify', 'React', 'AWS', 'Docker', 'MongoDB', 'Elasticsearch'],
      bullets: [
        'Automated build, versioning, and publishing for internal React libraries via GitLab CI/CD.',
        'Proposed an AWS redesign that cut costs by 60% while improving scalability.',
        'Refactored a 7+ year legacy codebase into modular Node.js + TypeScript projects.',
        'Guided teams through architecture discussions, pair-programming, and code reviews.',
      ],
    },
    {
      role: 'Full-Stack Engineer',
      company: 'DigiMap',
      period: '12/2017 — 05/2019',
      start: 2017.92,
      stack: ['Node.js', 'TypeScript', 'AWS', 'React', 'WebSocket', 'Prometheus', 'PostgreSQL'],
      bullets: [
        'Designed and implemented a backend split into two scalable services with the product owner.',
        'Built Prometheus monitoring and alerting for easier operation and issue detection.',
        'Authored design and implementation docs; mentored new developers via pair-programming.',
      ],
    },
    {
      role: 'Full-Stack Engineer',
      company: 'MyCoworkCafé',
      period: '05/2016 — 11/2017',
      start: 2016.42,
      stack: ['Node.js', 'TypeScript', 'Docker', 'GitLab CI/CD', 'Google Cloud', 'Vue', 'Webpack', 'Ionic'],
      bullets: [
        'Designed a robust frontend state-management system aligned with product requirements.',
        'Set up per-branch deployment environments to simplify QA and PM reviews.',
        'Built a modular web app enabling seamless migration to iOS/Android via build-time transforms.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Nik Modern',
      period: '01/2015 — 04/2016',
      start: 2015.0,
      stack: ['PHP', 'Symfony', 'AngularJS', 'PostgreSQL', 'Nginx', 'RabbitMQ', 'Linux'],
      bullets: [
        'Built a B2C multi-vendor e-commerce platform with Symfony and reusable core modules.',
        'Configured and maintained Linux servers: deployments, firewalls, and updates.',
        'Wrote complex SQL (often 70+ lines) for reporting, analytics, and domain logic.',
      ],
    },
  ],
  skills: [
    {
      group: 'Backend Engineering & Architecture',
      items: [
        'Scalable, performant, resilient backend architectures',
        'Strong data structures & CS fundamentals',
        'OOP and functional paradigms',
        'Microservices & inter-service communication patterns',
        'Real-time systems incl. WebSocket communication',
      ],
    },
    {
      group: 'Concurrency & Distributed Systems',
      items: [
        'Concurrent programming concepts, patterns & internals',
        'Established concurrency best practices and design patterns',
      ],
    },
    {
      group: 'Cloud & Infrastructure',
      items: [
        'Cloud-native apps on AWS, GCP, and Azure',
        'Dockerization tuned for performance, size & security',
        'Orchestration with Kubernetes and Docker Swarm',
        'Linux & web servers (Nginx, Apache)',
      ],
    },
    {
      group: 'Monitoring, Logging & Observability',
      items: [
        'Advanced logging, monitoring & alerting systems',
        'Centralized logging, metrics, dashboards & alert pipelines',
      ],
    },
    {
      group: 'CI/CD & DevOps',
      items: [
        'Complex pipelines (GitLab CI, GitHub Actions, CircleCI)',
        'Version-control workflows & semantic versioning',
      ],
    },
    {
      group: 'Security & Identity',
      items: ['AuthN/AuthZ with OAuth2, OpenID Connect & SSO'],
    },
    {
      group: 'Software Development Practices',
      items: ['TDD and Domain-Driven Design (DDD)', 'SOLID, DRY, YAGNI', 'API docs with Swagger & Doxygen'],
    },
  ],
  education: [
    {
      degree: 'M.S. in Software Engineering',
      school: 'Ferdowsi University',
      place: 'Mashhad, Iran',
      period: '09/2020 — 07/2023',
    },
    {
      degree: 'B.Eng. in Software Engineering',
      school: 'Birjand University of Technology',
      place: 'Birjand, Iran',
      period: '09/2016 — 08/2020',
    },
  ],
  languages: [
    { lang: 'Persian', level: 'Native' },
    { lang: 'English', level: 'Upper Intermediate' },
  ],
  stack: [
    'Go',
    'Kubernetes',
    'Docker',
    'PostgreSQL',
    'Redis',
    'Elasticsearch',
    'gRPC',
    'Envoy',
    'Node.js',
    'TypeScript',
    'AWS',
    'GCP',
    'Prometheus',
    'Grafana',
    'MongoDB',
    'WebSocket',
    'Kong',
    'GitLab CI/CD',
    'MySQL',
    'InfluxDB',
    'Fastify',
    'React',
    'Vue',
    'Linux',
  ],
}
