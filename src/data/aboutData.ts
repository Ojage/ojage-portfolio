export interface PersonalInfo {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    website: string;
}

export interface Experience {
    id: string;
    position: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    location: string;
    highlights?: string[];
}

export interface SkillCategory {
    id: string;
    category: string;
    skills: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer?: string;
    period?: string;
}

export interface ResumeData {
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
    certifications: Certification[];
}

export const resumeData: ResumeData = {
    personal: {
        name: "OJAGE SALATHIEL AYUK",
        title: "FULL-STACK AI PRODUCT DEVELOPER",
        phone: "+237 681 402 886",
        email: "salathiel.ojage@gmail.com",
        location: "Buea, Cameroon",
        linkedin: "https://www.linkedin.com/in/ojage-sala",
        website: "https://salathiel.ojage.com"
    },

    summary: `Full-Stack Engineer with 4+ years building and shipping production web applications, dashboards, REST APIs, and AI-powered product experiences using TypeScript, NestJS, Node.js, React, and PostgreSQL on Google Cloud Platform. Experienced integrating third-party platforms including OpenAI and LLM services, and proficient with AI-assisted development tools including Claude Code, GitHub Copilot, and Cursor. Currently building NNACT Pro — a real-world AI-integrated field service platform with automated content pipelines, multi-platform publishing to LinkedIn, Facebook, and Instagram, and Claude-powered blog generation. Comfortable owning the complete product stack from database schema and backend service design to responsive React interfaces and automated cloud deployment.`,

    experience: [
        {
            id: "1",
            position: "Full-Stack Engineer",
            company: "CSKY Telecom",
            period: "Oct 2025 - Present",
            location: "Limbe, Cameroon",
            responsibilities: [
                "Built and maintained production web applications and backend services using NestJS, TypeScript, and React; deployed on GCP Cloud Run with sub-200ms API response times and 99.9% uptime",
                "Designed and automated end-to-end CI/CD pipelines using GitHub Actions and Google Cloud Build; eliminated ~70% of manual deployment steps enabling multiple automated production releases per week",
                "Architected async background processing pipelines decoupling long-running tasks from the request cycle; reduced UI wait time by over 60% for high-load operations",
                "Administered GCP Cloud Storage with fine-grained IAM policies and instrumented services with Cloud Logging and Cloud Monitoring; built alerting policies reducing mean time-to-detection for production incidents",
                "Used AI-assisted development tools including Claude Code and GitHub Copilot daily to accelerate feature delivery while maintaining high standards for security and code quality"
            ]
        },
        {
            id: "2",
            position: "Full-Stack Developer",
            company: "NNACT Home Appliance & Maintenance Services",
            period: "2024 - Present",
            location: "Buea, Cameroon",
            responsibilities: [
                "Architected and built NNACT Pro: a full-stack field service management platform covering customer management, equipment tracking, work orders, technician dispatch, quotations, invoicing, payments, inventory, and preventive maintenance workflows",
                "Designed an Institutional Repair Brain: a structured AI-ready knowledge base capturing reusable repair knowledge, equipment models, known faults, symptoms, diagnostic procedures, measurements, parts compatibility, and technician-verified outcomes; built a Job → Diagnosis → Repair → Outcome → Verified Knowledge promotion pipeline",
                "Built a Claude-powered automated blog content pipeline that generates scheduled, context-aware blog posts and publishes directly to nnact.com; extending it to auto-post to LinkedIn, Facebook, and Instagram via their APIs",
                "Designed role-based workflows and guided in-app onboarding for 5 user types (technicians, dispatchers, senior technicians, finance, administrators); architected for mobile/offline technician field workflows"
            ]
        },
        {
            id: "3",
            position: "Full-Stack Developer & Technical Trainer",
            company: "Liah Technologies (formerly Tekstedia)",
            period: "Jan 2022 - Dec 2024",
            location: "Buea, Cameroon",
            responsibilities: [
                "Built and maintained scalable NestJS REST APIs and React web interfaces for a platform serving 500+ active users; delivered 3 major product releases using clean architecture and strict service-layer separation",
                "Integrated third-party APIs and external services into the product stack; designed modular integration layers for maintainability and extensibility",
                "Optimised PostgreSQL schemas across 10+ tables with proper indexing and query strategies; reduced average query execution time by ~40% across all releases",
                "Implemented RBAC and JWT authentication flows across 5+ user roles; hardened API security with zero unauthorised access incidents post-deployment",
                "Profiled and refactored backend bottlenecks; improved API response times by ~35% and contributed to a 20% increase in user retention",
                "Mentored junior developers through code reviews, architectural guidance, and pair programming; accelerated onboarding for 3 new engineers"
            ]
        },
        {
            id: "4",
            position: "Front-End Developer",
            company: "MUNGWIN Ltd",
            period: "Feb 2021 - Nov 2021",
            location: "Buea, Cameroon",
            responsibilities: [
                "Built pixel-accurate responsive React interfaces from UX wireframes; implemented custom SVG components and accessible UI patterns",
                "Contributed to a shared Git repository using structured branching and code review practices"
            ]
        }
    ],

    education: [
        {
            id: "1",
            degree: "Bachelor of Technology (B.Tech), Software Engineering",
            institution: "Higher Institute of Management Studies (HIMS)",
            period: "GPA 3.68 / 4.0 - 2025",
            location: "Buea, Cameroon",
            highlights: [
                "Final-year project: AI Cultural-Linguistic Integration App — NestJS + GCP Cloud Run + OpenAI API + React Native",
                "Led HIMS Leadership Academy cohort on ethics, leadership, and innovation",
                "Coordinated HIMS Entrepreneurship Jamboree 2025, mobilizing students and entrepreneurs"
            ]
        },
        {
            id: "2",
            degree: "Higher National Diploma (HND), Software Engineering",
            institution: "Higher Institute of Management Studies (HIMS)",
            period: "2022 - 2024",
            location: "Buea, Cameroon",
            highlights: [
                "Completed academic projects in web & mobile app development",
                "Gained proficiency in Java, C#, Python"
            ]
        }
    ],

    skills: [
        {
            id: "1",
            category: "Frontend",
            skills: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Responsive UI", "React Native"]
        },
        {
            id: "2",
            category: "Backend",
            skills: ["NestJS", "Node.js", "REST API design", "JWT auth", "RBAC", "Async Queuing", "Microservices"]
        },
        {
            id: "3",
            category: "AI & LLM",
            skills: ["OpenAI API", "Claude API", "LLM Integration", "Prompt Engineering", "Claude Code", "GitHub Copilot", "Cursor"]
        },
        {
            id: "4",
            category: "Automation",
            skills: ["Scheduled Content Pipelines", "Multi-Platform Social Publishing", "Marketing Automation"]
        },
        {
            id: "5",
            category: "Third-Party APIs",
            skills: ["Meta Graph API", "Google Ads API", "GCP Services", "REST Integrations"]
        },
        {
            id: "6",
            category: "Databases",
            skills: ["PostgreSQL", "Schema Design", "Query Optimisation", "Indexing", "Migrations"]
        },
        {
            id: "7",
            category: "Cloud & DevOps",
            skills: ["GCP (Cloud Run, Cloud Build, Cloud Logging, GCS, IAM)", "GitHub Actions", "Docker", "CI/CD"]
        },
        {
            id: "8",
            category: "Engineering",
            skills: ["Git", "Software Architecture", "Code Review", "Testing", "Debugging", "Agile/Scrum"]
        }
    ],

    certifications: [
        {
            id: "1",
            name: "ALX Full-Stack Developer Nanodegree",
            issuer: "Udacity / ALX Africa"
        },
        {
            id: "2",
            name: "Google Africa Developer Scholarship",
            issuer: "Google / Andela"
        }
    ]
};