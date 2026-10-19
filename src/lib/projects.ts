export interface Project {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & AGENTS' | 'HACKATHONS' | 'LEGAL TECH' | 'DEV TOOLS & INFRA' | 'ENTERPRISE SAAS';
  categoryLabel: string;
  description: string;
  tech: string[];
  status: 'SHIPPED' | 'ACTIVE' | 'FLAGSHIP SYSTEM' | 'SUBMITTED' | 'EXPERIMENTAL' | 'ARCHITECTURAL SHOWCASE';
  statusColor?: string;
  featured: boolean;
  starred?: boolean;
  metrics: string;
  demoUrl?: string;
  githubUrl?: string;
  hackathon?: {
    name: string;
    eventDate: string;
    theme?: string;
    submissionUrl?: string;
    prompt?: string;
    outcome?: string;
  };
  buildLog?: {
    overview: string;
    architectureNotes: string[];
    lessonsLearned: string[];
  };
}

export const projectsCatalog: Project[] = [
  {
    slug: 'tenderlens',
    id: '00',
    title: 'TenderLens T&T',
    subtitle: 'WhatsApp & Gemma 2 autonomous tender readiness & proactive bid assistant',
    category: 'HACKATHONS',
    categoryLabel: 'DEV Hacktoberfest 2026',
    description:
      'An open-source AI tender readiness assistant that turns WhatsApp photos of newspaper ads into living bid plans. Extracts mandatory statutory clauses (BIR, NIS, VAT) with exact page citations, auto-drafts package requests for Oracle ERP portals, and triggers proactive follow-through check-ins via Temporal durable workflows.',
    tech: ['Gemma 2', 'Temporal Cloud', 'Render', 'FastAPI', 'PostgreSQL', 'WhatsApp Cloud API', 'Python 3.13'],
    status: 'SUBMITTED',
    featured: true,
    metrics: '20 Automated Tests • Durable Temporal Workflows • WhatsApp Native',
    demoUrl: 'https://tenderlens.builtbyanthony.tech',
    githubUrl: 'https://github.com/AnthonyASBaptiste/tenderlens',
    hackathon: {
      name: 'Hacktoberfest Open-Source AI Challenge: Week 2 (Side Hustle)',
      eventDate: 'October 2026',
      theme: 'Build something with open-weight models or open-source AI that someone would actually pay for.',
      outcome: 'Shipped Live Web Simulator & Render Multi-Service Blueprint.',
      prompt: 'Build something with open-source AI at its core that solves a real problem for a real person or viable side hustle.',
      submissionUrl: 'https://dev.to/it0nyb/tenderlens-turning-whatsapp-gemma-2-into-an-autonomous-bid-assistant-for-contractors-355b-temp-slug-1155480',
    },
    buildLog: {
      overview: 'Over 60% of bids from small Caribbean contractors get disqualified before technical evaluation due to administrative bureaucracy and 5-10 day statutory bottlenecks. TenderLens turns the newspaper notice into the true entry point, keeping the interface right inside WhatsApp.',
      architectureNotes: [
        'Open-weight Gemma 2 inference for dense procurement clause reasoning and multilingual Caribbean English nuance.',
        'Temporal durable workflows (TenderFollowThroughWorkflow) maintaining multi-week timer loops that survive server restarts.',
        'Render multi-service Blueprint deploying FastAPI Web Gateway, Temporal Worker with TLS/API key auth, and PostgreSQL database with automatic timestamptz migration.',
        'HMAC-SHA256 signed magic upload tokens (1-hr TTL) for secure drag-and-drop intake of multi-file packages >100MB.',
      ],
      lessonsLearned: [
        'Caribbean contractors do not want another portal or mobile app to log into; WhatsApp is the interface.',
        'Message concurrency from mobile bursts must be debounced and ordered via Temporal signals rather than direct raw webhook processing.',
        'Statutory lead-time warnings (e.g. BIR tax clearance 5-10 days) must be surfaced immediately at RFP intake, not in the final submission week.',
      ],
    },
  },
  {
    slug: 'briefly',
    id: '01',
    title: 'Briefly',
    subtitle: 'Local-first legal filing assistant for automated matter classification',
    category: 'HACKATHONS',
    categoryLabel: 'DEV Hacktoberfest 2026',
    description:
      'A local-first filing assistant built for a lawyer’s real habit: download now, file later. Watches download folders, extracts text from legal PDFs and DOCXs, and prompts an open-weight model (Gemma) to classify matters with strict confidence gating.',
    tech: ['Python 3.10+', 'Ollama Gemma', 'SQLite', 'PyPDF', 'python-docx', 'Local-First'],
    status: 'SHIPPED',
    featured: true,
    starred: true,
    metrics: 'Zero Cloud Telemetry • 4,096 Token Constrained JSON',
    githubUrl: 'https://github.com/AnthonyASBaptiste/briefly',
    hackathon: {
      name: 'Hacktoberfest Weekend Challenge: Build for a Friend',
      eventDate: 'October 2026',
      theme: 'Build something with open-source AI at its core that solves a real problem for a friend.',
      outcome: 'Completed & Shipped MVP for practicing attorney.',
      prompt: 'Build something with open-weight models that keeps data private and local.',
    },
    buildLog: {
      overview: 'Engineered over a weekend to solve confidential file clutter on resource-constrained laptops without leaking private legal matters to public cloud models.',
      architectureNotes: [
        'Local Ollama chat API using compact Gemma 4 E2B with memory-safe context limits.',
        'SQLite transaction log ensures duplicate-destination protection and atomic file moves.',
        'Strict confidence gating: files below threshold stay safely in inbox for manual review.',
      ],
      lessonsLearned: [
        'Local AI in legal workflows must prioritize privacy over cloud convenience.',
        'Scanned PDFs without OCR should fail gracefully rather than hallucinating classifications.',
      ],
    },
  },
  {
    slug: 'vali',
    id: '02',
    title: 'Vali',
    subtitle: 'Autonomous startup validation co-pilot enforcing The Mom Test',
    category: 'AI & AGENTS',
    categoryLabel: 'Research Navigator Subsystem',
    description:
      'An open-source, open-weights autonomous discovery engine for founders. Ingests field voice notes, detects leading pitch questions in real time, generates Mom Test probe questions, and synthesizes discovery evidence into market conviction scores.',
    tech: ['FastAPI', 'Groq LLaMA 3.3', 'Ollama Hermes 3', 'WhatsApp Cloud API', 'Tavily', 'Python'],
    status: 'ACTIVE',
    featured: true,
    starred: true,
    metrics: 'Mom Test Guardrails • Sovereign Cascade Routing',
    githubUrl: 'https://github.com/AnthonyASBaptiste/vali',
    buildLog: {
      overview: 'Created as the standalone interview & discovery engine of Research Navigator, providing founders with an objective auditor for customer discovery.',
      architectureNotes: [
        'Multi-model sovereign cascade routing between ultra-fast Groq LLaMA 3.3 70B and 100% offline local Ollama nodes.',
        'Real-time rule engine flagging hypothetical questions ("Would you pay...") and extracting past behavioral proof.',
        'WhatsApp webhook ingestion allowing founders to record voice notes right after customer interviews.',
      ],
      lessonsLearned: [
        'Prompt guardrails alone fail without structured JSON output validation.',
        'Field discovery requires mobile-first voice intake because founders rarely type notes immediately.',
      ],
    },
  },
  {
    slug: 'nemoclaw-agent-watchdog',
    id: '03',
    title: 'NemoClaw Agent Watchdog & Linux Sandbox',
    subtitle: 'Zero-dependency health daemon & Landlock container isolation runtime',
    category: 'DEV TOOLS & INFRA',
    categoryLabel: 'Autonomous Agent Infrastructure',
    description:
      'A zero-dependency health watchdog, incident logging daemon, and Linux Landlock/Capsh container security sandbox for multi-agent LLM runtimes (Hermes, OpenClaw). Monitors container memory and socket health, dispatching instant telemetry to Discord and ntfy.sh.',
    tech: ['Python 3.13', 'Docker', 'Landlock / Capsh', 'OpenShell', 'Systemd', 'Tailscale HTTPS'],
    status: 'FLAGSHIP SYSTEM',
    featured: true,
    starred: true,
    metrics: 'Kernel Landlock Isolation • Automatic Health Recovery',
    githubUrl: 'https://github.com/AnthonyASBaptiste/nemoclaw-agent-watchdog',
    buildLog: {
      overview: 'Engineered to manage persistent autonomous agent fleets on Fedora Linux without giving LLMs unchecked access to the host machine.',
      architectureNotes: [
        'POSIX ACL automatic inheritance allowing unprivileged sandbox containers to write to shared Obsidian vaults.',
        'Layer-7 Open Policy Agent supervisor proxy blocking unauthorized network egress.',
        'Tailscale Serve integration providing secure TLS web dashboards across remote devices.',
      ],
      lessonsLearned: [
        'Autonomous agent runtimes require kernel-level sandboxing, not just Docker containerization.',
        'Multi-agent concurrent ports must be dynamically offset to prevent gateway port collisions.',
      ],
    },
  },
  {
    slug: 'onboardbob',
    id: '04',
    title: 'OnboardBob',
    subtitle: 'Autonomous repository cartographer & onboarding copilot with injection defense',
    category: 'HACKATHONS',
    categoryLabel: 'IBM Dev Day Sprint',
    description:
      'An autonomous codebase topology cartographer and onboarding copilot built with 3 parallel subagents (Env Auditor, Repo Mapper, Runtime Checker). Features a 3-layer prompt injection defense against poisoned repositories.',
    tech: ['Node.js', 'TypeScript', 'AST Parsing', 'Subagent Orchestration', 'Prompt Injection Defense'],
    status: 'SUBMITTED',
    featured: true,
    starred: true,
    metrics: '3-Layer Injection Defense • 3 Parallel Subagents',
    githubUrl: 'https://github.com/AnthonyASBaptiste/onboardbob',
    hackathon: {
      name: 'IBM Dev Day Challenge',
      eventDate: '2026',
      theme: 'Autonomous Developer Tooling & Agent Productivity',
      outcome: 'Official Challenge Submission',
      prompt: 'Build autonomous agents that accelerate developer onboarding without compromising repository safety.',
    },
    buildLog: {
      overview: 'Built for IBM Dev Day to turn massive unfamiliar codebases into instant, navigable architectural maps within seconds.',
      architectureNotes: [
        'Decoupled subagents running concurrent AST analyses for package graphs, environment variables, and execution paths.',
        'Adversarial prompt sanitizer stripping hidden LLM instructions from READMEs and issue comments.',
      ],
      lessonsLearned: [
        'Codebase agents must verify ASTs directly rather than hallucinating from filenames alone.',
      ],
    },
  },
  {
    slug: 'research-navigator',
    id: '05',
    title: 'Research Navigator',
    subtitle: 'Multi-agent business model stress-testing platform with Go proxy and judge models',
    category: 'AI & AGENTS',
    categoryLabel: 'Demo Day Buildathon Flagship',
    description:
      'An active validation platform that stress-tests startup business models against real-time market data, unit economics, and customer acquisition costs. Orchestrates a high-performance Go proxy runtime, Vue 3 dashboard, and Python LLM-as-a-Judge audit engine.',
    tech: ['Go Proxy', 'Python LLM Brain', 'Vue 3', 'WebSockets', 'Tavily Search', 'LLM-as-a-Judge'],
    status: 'FLAGSHIP SYSTEM',
    featured: true,
    starred: true,
    metrics: 'High-Concurrency Go WebSocket Proxy • Brutal Gatekeeper',
    demoUrl: 'https://discover.research-navigator.ai',
    hackathon: {
      name: 'Startup AI Buildathon / Demo Day Sprint',
      eventDate: 'July 2026',
      theme: 'Autonomous Multi-Agent Validation Systems',
      outcome: 'Flagship Platform Deployment',
    },
    buildLog: {
      overview: 'Conceived to eliminate subjective founder bias by pitting multiple AI agents against each other in an adversarial audit loop.',
      architectureNotes: [
        'Go proxy handles concurrent WebSocket connections and token streaming at sub-10ms latency.',
        'Python agent engine implements a "Brutal Gatekeeper" that rejects unverified market claims.',
        'Vue 3 Traffic Light interface gives founders instant visual confidence scores.',
      ],
      lessonsLearned: [
        'Single LLM prompts cannot be trusted to grade themselves; independent auditor models are required.',
      ],
    },
  },
  {
    slug: 'newsletter-herald',
    id: '06',
    title: 'Newsletter Herald',
    subtitle: 'Automated liturgical bulletin processing, dual LLM summarization & distribution',
    category: 'AI & AGENTS',
    categoryLabel: 'Serverless Data Ingestion',
    description:
      'An automated document processing pipeline. Parses incoming multi-megabyte PDF and Word newsletters, standardizes metadata, generates multi-stage AI summaries, and dispatches weekly newsletters to a parish subscriber directory.',
    tech: ['Next.js 15', 'FastAPI', 'Neon Postgres', 'Cloudflare R2', 'Groq Llama 3.1', 'Ollama Local'],
    status: 'SHIPPED',
    featured: true,
    starred: true,
    metrics: 'Dual LLM Route • R2 Proxy Delivery • Zero-Cost Cloud Pipeline',
    demoUrl: 'https://newsletter-herald.vercel.app',
    buildLog: {
      overview: 'Automated a weekly manual 4-hour parish newsletter preparation cycle into a 90-second autonomous review pipeline.',
      architectureNotes: [
        'Dual LLM routing: dispatches real-time web tasks to Groq Cloud and delegates historical bulk parsing to local Ollama.',
        'Cloudflare R2 presigned storage with PyMuPDF compression reducing multi-megabyte PDFs by 70%.',
        'Neon serverless Postgres backing an admin audit log console with 1-click manual overrides.',
      ],
      lessonsLearned: [
        'Always provide a human review gate with confidence scores before triggering email dispatch.',
      ],
    },
  },
  {
    slug: 'sidequest-tt',
    id: '07',
    title: 'SideQuest T&T',
    subtitle: 'Open-weight AI-powered real-world RPG for exploring Trinidad',
    category: 'HACKATHONS',
    categoryLabel: 'DEV Hacktoberfest 2026',
    description:
      'A real-world RPG built to get players away from their screens and exploring Trinidad. Players choose from a shared daily quest pool, follow clear criteria and safety guidance, then submit an observation for an open-weight Gemma model to assess. The API validates the assessment and awards XP once per verified quest. The React app is hosted on Vercel, the NestJS API on Render, and Gemma runs locally through Ollama on a home server.',
    tech: ['React', 'Vite', 'NestJS', 'Ollama Gemma', 'MongoDB Atlas', 'Render', 'Vercel'],
    status: 'SHIPPED',
    featured: false,
    metrics: 'Local Gemma Quest Generation & Verification • Idempotent XP Awards',
    demoUrl: 'https://sidequest-tt.vercel.app',
    githubUrl: 'https://github.com/AnthonyASBaptiste/sidequest-tt',
    hackathon: {
      name: 'Hacktoberfest Open-Source AI Challenge: Week 1 — Touch Grass',
      eventDate: 'October 5–11, 2026',
      theme: 'Build with open-source AI to get people off the screen and into the world.',
      outcome: 'Built and demoed a hosted MVP, including a real outdoor quest verified by Gemma.',
      prompt: 'Build something with open-source AI at its core that gets people outside.',
    },
    buildLog: {
      overview: 'Built a Trinidad-focused outdoor RPG where open-weight AI creates daily quests and assesses player reflections against explicit quest criteria.',
      architectureNotes: [
        'Local Ollama Gemma generates the shared quest pool and assesses evidence through a home-server worker; the worker connects outbound to the Render API.',
        'The NestJS API manages guest sessions, quest acceptances, submissions, verification state, and transactional XP awards, with MongoDB Atlas as the data layer.',
        'The React/Vite frontend is deployed on Vercel and shows quest criteria, safety guidance, retry feedback, verification status, and earned XP.',
      ],
      lessonsLearned: [
        'Real outdoor testing exposed how important it is for quest criteria and retry feedback to be concrete and easy for players to act on.',
        'A scheduled generation time is not enough by itself; checking for a current pool when a player arrives makes quest availability more resilient.',
        'Keep reward decisions in the API: model assessments are validated before completion, and duplicate results must not award XP twice.',
      ],
    },
  },
  {
    slug: 'my-briefcase',
    id: '08',
    title: 'MyBriefcase Legal Suite',
    subtitle: 'Court-compliant automated legal PDF compiler and S3 delivery pipeline',
    category: 'LEGAL TECH',
    categoryLabel: 'Legal Document Assembly',
    description:
      'A court-compliant document bundling tool. Aggregates multiple legal PDFs, generates automated cover pages and indices, and uploads compiled briefs to AWS S3 with presigned URLs.',
    tech: ['Next.js 16', 'React 19', 'AWS S3', 'pdf-lib', 'Tailwind CSS'],
    status: 'ACTIVE',
    featured: false,
    metrics: 'Client-Side PDF Merging • Presigned S3 Encryption',
  },
  {
    slug: 'legal-document-sorter',
    id: '09',
    title: 'Legal Document Sorter',
    subtitle: 'Background filesystem daemon with case caption regex classification',
    category: 'DEV TOOLS & INFRA',
    categoryLabel: 'Desktop File Pipeline',
    description:
      'A local background daemon that monitors download directories, uses regular expressions to classify legal documents by case caption, and automatically synchronizes them to Google Drive and OneDrive folders.',
    tech: ['Python', 'Watchdog', 'SQLite', 'PyPDF', 'python-docx'],
    status: 'SHIPPED',
    featured: false,
    metrics: 'Safe Ingestion Loop • Zero-Latency File Watchdog',
    githubUrl: 'https://github.com/AnthonyASBaptiste/legal-document-sorter',
  },
  {
    slug: 'bookman-data-mesh',
    id: '10',
    title: 'Bookman Enterprise Data Mesh',
    subtitle: 'GCP BigQuery ML and Vertex AI Vector Search ETL pipeline for legacy databases',
    category: 'ENTERPRISE SAAS',
    categoryLabel: 'Multi-Database Semantic Search',
    description:
      'Consolidates customer support records from legacy databases. Transforms SQL tables via Python ETL scripts to run semantic lookups using BigQuery ML and Vertex AI Vector Search.',
    tech: ['Python ETL', 'GCP BigQuery ML', 'Vertex AI Vector Search', 'Next.js'],
    status: 'ARCHITECTURAL SHOWCASE',
    featured: false,
    metrics: 'Vector Indexing • Distributed SQL Aggregation',
  },
  {
    slug: 'pulseapp-promises',
    id: '11',
    title: 'PulseApp (Yello Promises)',
    subtitle: 'Transaction-safe peer-to-peer recognition feed and points ledger',
    category: 'ENTERPRISE SAAS',
    categoryLabel: 'HR Tech Microservice',
    description:
      'A peer-to-peer appreciation feed. Implements points allocation rules and real-time activity updates with Azure Blob file attachments.',
    tech: ['Next.js', 'Azure Blob Storage', 'Redux Toolkit', 'Prisma'],
    status: 'SHIPPED',
    featured: false,
    metrics: 'Transaction-Safe Points Ledger • Azure Blob Attachments',
  },
];

export function getAllProjects(): Project[] {
  return projectsCatalog;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsCatalog.find((p) => p.slug === slug);
}

export function getHackathonProjects(): Project[] {
  return projectsCatalog.filter((p) => Boolean(p.hackathon));
}

export function getFeaturedProjects(): Project[] {
  return projectsCatalog.filter((p) => p.featured);
}
