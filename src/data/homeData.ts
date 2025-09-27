// data/homeData.ts
export interface Reference {
  name: string;
  role: string;
  relation: string;
  contact: string;
}

export interface ProjectData {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  projects?: Array<{
    name: string;
    description: string;
  }>;
  badges: string[];
  icon: string;
  accentType: 'primary' | 'secondary' | 'tertiary';
  liveUrl?: string;
  imageUrl?: string;
}

export const personalInfo = {
  name: "OJAGE SALATHIEL AYUK",
  title: "ONE BIG SOFTWARE ARCHITECT",
  description: `FULL STACK SOFTWARE ENGINEER & AI INNOVATOR SPECIALIZING IN
    ENTERPRISE-GRADE REACT ECOSYSTEMS, TYPESCRIPT ARCHITECTURES,
    AND CUTTING-EDGE AI/ML SOLUTIONS FOR CULTURAL INTEGRATION.`,
  location: "Buea, Cameroon",
  education: "HIMS BUEA",
  position: "CO-FOUNDER @ NNACT",
  experience: "FORMER TECHNICAL DIRECTOR",
  profileImage: "../../assets/images/myPicProfessional.jpeg"
};

export const coreCompetencies: ProjectData[] = [
  {
    id: "cm-sentinel",
    moduleNumber: "MODULE_00",
    title: "CM SENTINEL — .CM DOMAIN INSPECTION",
    description: `An awesome, very useful, web app that inspects .cm domains for WHOIS & DNS,
      detects typosquatting (TLD swaps, keyboard errors), and prioritizes risks.
      Built with React/TypeScript, Tailwind (UI), and a Flask API (DNS over HTTPS + optional WHOIS).`,
    badges: ["REACT + TS", "FLASK API", "WHOIS/DNS", "TYPOSQUATTING"],
    icon: "FaShieldAlt",
    accentType: "primary",
    liveUrl: "https://sentinel.ojage.com",
    imageUrl: "https://sentinel.ojage.com/assets/cmSentinelLogo-CTXLkV5l.png"
  },
  {
    id: "react-engineering",
    moduleNumber: "MODULE_01",
    title: "REACT ENGINEERING",
    description: `ARCHITECTING ENTERPRISE-SCALE SAAS PLATFORMS WITH REACT, TYPESCRIPT,
      AND ADVANCED WEB TECHNOLOGIES. SPECIALIZING IN COMPLEX STATE MANAGEMENT,
      OFFLINE-FIRST APPLICATIONS, AND HIGH-PERFORMANCE UI SYSTEMS.`,
    projects: [
      {
        name: "LIAHAPPLY",
        description: "Advanced job management system with enterprise-grade role-based access control"
      },
      {
        name: "SAAS PLATFORMS",
        description: "Multiple modern SaaS solutions with offline-first architecture"
      }
    ],
    badges: ["REACT", "TYPESCRIPT", "NESTJS", "SAAS"],
    icon: "BiCode",
    accentType: "primary"
  },
  {
    id: "ai-ml-innovation",
    moduleNumber: "MODULE_02",
    title: "AI/ML INNOVATION",
    description: `PIONEERING ARTIFICIAL INTELLIGENCE SOLUTIONS FOR CULTURAL AND
      LINGUISTIC INTEGRATION. DEVELOPING PIDGIN AND EJAGHAM-AWARE MODELS
      THAT BRIDGE LANGUAGE BARRIERS AND PRESERVE CULTURAL HERITAGE.`,
    projects: [
      {
        name: "LOKKITO GPT",
        description: "Revolutionary AI chatbot with Pidgin/English voice synthesis and cultural context"
      },
      {
        name: "NAUGHTML",
        description: "Automated data preparation engine for machine learning workflows"
      },
      {
        name: "CULTURAL AI MODELS",
        description: "Custom linguistic models preserving African language structures"
      }
    ],
    badges: ["AI/ML", "NLP", "VOICE AI", "CULTURAL TECH"],
    icon: "FaBrain",
    accentType: "secondary"
  },
  {
    id: "linux-kernel",
    moduleNumber: "MODULE_03",
    title: "LINUX KERNEL DEV",
    description: `BUILDING CUSTOM LINUX KERNEL MODULES FOR HIGHLY SPECIALIZED OPERATING SYSTEMS
      WITH DEEP AI/ML INTEGRATION. TUNING SYSTEM PERFORMANCE AND INTERFACING WITH
      NEURAL COMPUTATION ENGINES.`,
    projects: [
      {
        name: "COMPATOS",
        description: "Custom Linux-based AI-enhanced OS kernel designed for neural interaction, offline inference, and microservice orchestration."
      }
    ],
    badges: ["LINUX", "KERNEL", "C", "AI/OS"],
    icon: "FaCog",
    accentType: "tertiary"
  }
];

export const leadershipMetrics = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Team Members Led", value: "10+" },
  { label: "Years Experience", value: "5+" },
  { label: "Client Satisfaction", value: "100%" }
];

export const professionalReferences: Reference[] = [
  {
    name: "Mme. Fonkem Benita",
    role: "Lecturer, HIMS Buea",
    relation: "Academic Supervisor",
    contact: "+237 672 880 062",
  },
  {
    name: "Mr. Nkeng Arrey A.",
    role: "Co-founder, NNACT",
    relation: "Business Partner",
    contact: "+237 651 385 746",
  },
  {
    name: "Mme Rohda Assem",
    role: "Managing Director, ORA Consulting",
    relation: "Former Boss",
    contact: "rohdaassem1@gmail.com",
  },
  {
    name: "Mr. Nsah Esli",
    role: "Managing Director, Tekstedia|Liah Technology",
    relation: "Former Boss",
    contact: "+237 678 425 491",
  },
  {
    name: "Mr. Sakwe BetranCliff",
    role: "Mobile App Engineer & Trainer, Liah Technology",
    relation: "Former Teammate",
    contact: "+237 672 973 390",
  },
  {
    name: "Mr. Nkwetacha Terence",
    role: "Full Stack Engineer & Trainer, Liah Technology",
    relation: "Former Teammate",
    contact: "+237 695 442 479",
  },
];

export const engagementTypes = [
  "ENTERPRISE SOFTWARE ARCHITECTURE",
  "AI/ML SYSTEM DEVELOPMENT",
  "TECHNICAL LEADERSHIP & CONSULTING",
  "PRODUCT STRATEGY & INNOVATION"
];

export const socialLinks = {
  github: "https://github.com/ojage",
  linkedin: "https://linkedin.com/in/ojage-sala/"
};