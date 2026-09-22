// data/internshipsData.ts
export interface Internship {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    path: string;
    status: "completed" | "ongoing";
    skills: string[];
}

export const myInternships: Internship[] = [
    {
        id: "1",
        title: "Frontend Developer Intern",
        company: "AfroVision",
        period: "Jul 2025 - Oct 2025",
        description: "Worked across the full stack on the Buyam platform — loyalty programs, targeted advertising, and feature development using Laravel, Vue, and React.",
        path: "/internships/afrovision",
        status: "completed",
        skills: ["Laravel", "Vue.js", "React", "MySQL", "Tailwind CSS", "REST APIs"]
    },
    {
        id: "2",
        title: "Full-Stack Engineering Intern",
        company: "CSKY Telecom",
        period: "Oct 2025 - Nov 2025",
        description: "Contributed to production web applications and backend services built with NestJS, TypeScript, and React, deployed on GCP Cloud Run. Two-month internship before joining CSKY full-time.",
        path: "/internships/csky",
        status: "completed",
        skills: ["NestJS", "TypeScript", "React", "GCP Cloud Run", "GitHub Actions"]
    }
];