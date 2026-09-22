// data/homeData.ts
export interface Reference {
  name: string;
  role: string;
  relation: string;
  contact: string;
}

export interface CaseStudy {
  problem: string;
  role: string;
  stackDecision: string;
  outcome?: string;
  nextSteps?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  caseStudy: CaseStudy;
  badges: string[];
  icon: string;
  accentType: 'primary' | 'secondary' | 'tertiary';
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status?: 'LIVE' | 'IN PROGRESS' | 'RESEARCH' | 'COMPLETED';
}

export const personalInfo = {
  name: "OJAGE SALATHIEL AYUK",
  title: "FULL-STACK AI PRODUCT DEVELOPER",
  description: `Full-Stack Engineer with 4+ years building and shipping production web apps, dashboards, REST APIs, and AI-powered product experiences using TypeScript, NestJS, Node.js, React, and PostgreSQL on Google Cloud Platform.`,
  status: "B.Tech Software Engineering graduate (HIMS Buea) · Full-Stack Engineer at CSKY Telecom · Building NNACT Pro — an AI-integrated field service platform",
  location: "Buea, Cameroon",
  education: "HIMS BUEA (B.TECH, SOFTWARE ENGINEERING)",
  position: "FULL-STACK ENGINEER @ CSKY TELECOM",
  experience: "BUILDING NNACT PRO · FORMER TECHNICAL DIRECTOR",
  profileImage: "../../assets/images/myPicProfessional.jpeg"
};

export const coreCompetencies: ProjectData[] = [
  {
    id: "nnact-pro",
    title: "NNACT PRO — FIELD SERVICE PLATFORM",
    description: `A real-world AI-integrated field service management platform covering customers, equipment tracking, work orders, technician dispatch, quotations, invoicing, payments, inventory, and preventive maintenance.`,
    caseStudy: {
      problem: `Appliance repair operations ran on WhatsApp messages, paper notes, and memory — no shared record of jobs, equipment, or payments.`,
      role: `Architected and built end-to-end as full-stack developer for NNACT; designed role-based workflows for 5 user types.`,
      stackDecision: `NestJS + TypeScript backend with a role-based access model (technicians, dispatchers, senior techs, finance, admins) and a structured API, instead of a shared spreadsheet that everyone could edit.`,
      outcome: `A production platform with quoted-to-paid job flow, technician dispatch, inventory, and mobile-friendly field workflows.`,
      nextSteps: `Ship mobile/offline field workflows and extend multi-platform content publishing.`
    },
    badges: ["NESTJS", "REACT + TS", "POSTGRESQL", "RBAC"],
    icon: "FaWrench",
    accentType: "primary",
    githubUrl: "https://github.com/ojage",
    status: "LIVE"
  },
  {
    id: "ai-cultural-app",
    title: "AI CULTURAL-LINGUISTIC INTEGRATION APP",
    description: `Final-year academic project: a NestJS backend on GCP Cloud Run integrates a custom-trained NLP model via the OpenAI API and serves a React Native mobile client with real-time AI language processing.`,
    caseStudy: {
      problem: `Most consumer AI assistants handle Pidgin English and Cameroonian cultural context poorly — greetings, proverbs, and everyday phrasing get mangled.`,
      role: `Solo build of the full AI integration layer — prompt engineering, API consumption, response parsing, and error handling — end to end.`,
      stackDecision: `NestJS + TypeScript on GCP Cloud Run talking to the OpenAI API, with PostgreSQL persistence, so the model logic stays replaceable behind an integration layer.`,
      outcome: `A working LLM-powered product: real-time cultural/linguistic processing served to a React Native client.`,
      nextSteps: `Publish the dataset-prep tooling and add an evaluation set so accuracy is measurable.`
    },
    badges: ["NESTJS", "GCP CLOUD RUN", "OPENAI API", "REACT NATIVE"],
    icon: "FaBrain",
    accentType: "secondary",
    githubUrl: "https://github.com/ojage",
    status: "COMPLETED"
  },
  {
    id: "cm-sentinel",
    title: "CM SENTINEL — .CM DOMAIN INSPECTION",
    description: `A web app that inspects .cm domains for WHOIS & DNS records and flags typosquatting risks (TLD swaps, keyboard errors) for domain owners and brands.`,
    caseStudy: {
      problem: `Typosquatted and look-alike .cm domains cost Cameroonian businesses traffic, revenue, and trust. There was no single place to check a .cm domain's WHOIS, DNS, and typosquat exposure.`,
      role: `Solo design + build — React frontend, Flask API, and infrastructure.`,
      stackDecision: `Uses DNS-over-HTTPS (DoH) to keep DNS lookups private and a Flask API to centralize WHOIS + DNS checks behind a simple typed interface, instead of scattering them across five CLI tools.`,
      outcome: `One live URL now resolves WHOIS, DNS, and typosquat risk checks for any .cm domain in a single screen.`,
      nextSteps: `Add expiry watchlists and DMARC/DKIM checks.`
    },
    badges: ["REACT + TS", "FLASK API", "DNS-OVER-HTTPS", "TYPOSQUATTING"],
    icon: "FaShieldAlt",
    accentType: "primary",
    liveUrl: "https://sentinel.ojage.com",
    githubUrl: "https://github.com/ojage",
    imageUrl: "https://sentinel.ojage.com/assets/cmSentinelLogo-CTXLkV5l.png",
    status: "LIVE"
  },
  {
    id: "auto-publishing-pipeline",
    title: "AI CONTENT & AUTO-PUBLISHING PIPELINE",
    description: `A Claude-powered automated pipeline that generates scheduled, context-aware blog posts, publishes them to nnact.com, and is being extended to LinkedIn, Facebook, and Instagram via their APIs.`,
    caseStudy: {
      problem: `NNACT needed a consistent content presence but had no time for manual writing across multiple platforms every week.`,
      role: `Designed and built the pipeline, including the LLM prompt layer and multi-platform publishing integrations.`,
      stackDecision: `Scheduled jobs generate articles from the Institutional Repair Brain knowledge base and post through each platform's API, keeping content context-aware instead of boilerplate.`,
      outcome: `Automated blog generation + publishing to nnact.com; social multi-platform publishing in progress.`,
      nextSteps: `Productize the pipeline as a reusable multi-platform social publishing service.`
    },
    badges: ["CLAUDE API", "META GRAPH API", "SCHEDULING", "AUTOMATION"],
    icon: "FaCog",
    accentType: "tertiary",
    githubUrl: "https://github.com/ojage",
    status: "IN PROGRESS"
  }
];

export const leadershipMetrics = [
  { label: "Years Building Products", value: "4+" },
  { label: "Platform Users", value: "500+" },
  { label: "Production Uptime", value: "99.9%" },
  { label: "Manual Deploy Steps Removed", value: "70%" }
];

export const professionalReferences: Reference[] = [
  {
    name: "Mme. Fonkem Benita",
    role: "Lecturer, HIMS Buea",
    relation: "Academic Supervisor",
    contact: "Available on request",
  },
  {
    name: "Mr. Nkeng Arrey A.",
    role: "Co-founder, NNACT",
    relation: "Business Partner",
    contact: "Available on request",
  },
  {
    name: "Mme Rohda Assem",
    role: "Managing Director, ORA Consulting",
    relation: "Former Boss",
    contact: "Available on request",
  },
  {
    name: "Mr. Nsah Esli",
    role: "Managing Director, Tekstedia|Liah Technology",
    relation: "Former Boss",
    contact: "Available on request",
  },
  {
    name: "Mr. Sakwe BetranCliff",
    role: "Mobile App Engineer & Trainer, Liah Technology",
    relation: "Former Teammate",
    contact: "Available on request",
  },
  {
    name: "Mr. Nkwetacha Terence",
    role: "Full Stack Engineer & Trainer, Liah Technology",
    relation: "Former Teammate",
    contact: "Available on request",
  },
];

export const engagementTypes = [
  "Full-stack product development (React, TypeScript, NestJS, PostgreSQL)",
  "AI & LLM integrations (OpenAI, Claude, prompt engineering)",
  "Cloud deployment on GCP (Cloud Run, Cloud Build, Cloud Logging)",
  "Content automation and multi-platform publishing pipelines"
];

export const socialLinks = {
  github: "https://github.com/ojage",
  linkedin: "https://linkedin.com/in/ojage-sala/"
};