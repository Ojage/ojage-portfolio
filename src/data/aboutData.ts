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
        title: "COMPUTER SCIENTIST",
        phone: "+237681402886",
        email: "salathiel.ojage@gmail.com",
        location: "Buea, Cameroon, Molyko, 063",
        linkedin: "https://www.linkedin.com/in/ojage-sala",
        website: "https://salathiel.ojage.com"
    },

    summary: `Dynamic and visionary Software Engineering student (B.Tech, HIMS Buea) passionate about applying Computer Science, Artificial Intelligence, and Machine Learning to solve real-world challenges. Experienced in full-stack development, entrepreneurship, and leadership, with a proven track record in building impactful technology platforms and community initiatives. Trained through the HIMS Leadership Academy, and organizer of the HIMS Entrepreneurship Jamboree 2025, I combine technical expertise with a commitment to empowering others and driving innovation in Africa.`,

    experience: [
        {
            id: "1",
            position: "Co-Founder & Technical Lead",
            company: "NNACT (Appliance Repair & Services)",
            period: "Jan 2023 - Current",
            location: "Buea, Cameroon",
            responsibilities: [
                "Built a digital platform connecting households with reliable appliance repair technicians",
                "Trained technicians in digital literacy and record-keeping, creating sustainable employment",
                "Managed operations, service quality, and customer engagement for 100+ clients"
            ]
        },
        {
            id: "2",
            position: "Technical Director",
            company: "ORA Consulting",
            period: "Sep 2024 - Jun 2025",
            location: "Buea, Cameroon",
            responsibilities: [
                "Led IT, printing, and digital service projects for SMEs and students",
                "Developed internal systems to streamline service delivery and client engagement",
                "Directed innovation initiatives including content digitization and online learning resources"
            ]
        },
        {
            id: "3",
            position: "Full Stack Developer & Trainer",
            company: "Liah Technologies (formerly Tekstedia)",
            period: "Jan 2022 - Dec 2024",
            location: "Buea, Cameroon",
            responsibilities: [
                "Mentored and trained 15+ junior developers, achieving a 95% satisfaction rate",
                "Conducted entrepreneurship and tech training for ~400 schoolmates under an academic initiative",
                "Enhanced apps with REST APIs, Redux, A/B testing, resulting in 20% user retention increase"
            ]
        },
        {
            id: "4",
            position: "Front-End Developer (React)",
            company: "MUNGWIN Ltd",
            period: "Feb 2021 - Nov 2021",
            location: "Buea, Cameroon",
            responsibilities: [
                "Built dynamic React interfaces improving user engagement",
                "Collaborated with UX designers to improve usability",
                "Worked on Crafting SVGs for the UI"
            ]
        }
    ],

    education: [
        {
            id: "1",
            degree: "Bachelor of Technology (B.Tech), Software Engineer",
            institution: "Higher Institute of Management Studies (HIMS)",
            period: "2024 - 2025",
            location: "Buea, Cameroon",
            highlights: [
                "Final year project: Attendance Management System with Facial Recognition",
                "Led HIMS Leadership Academy cohort on ethics, leadership, and innovation",
                "Coordinated HIMS Entrepreneurship Jamboree 2025, mobilizing students and entrepreneurs"
            ]
        },
        {
            id: "2",
            degree: "Higher National Diploma (HND), Software Engineering",
            institution: "Higher Institute of Management Studies (HIMS)",
            period: "2022 - 2024",
            location: "Buea - Cameroon",
            highlights: [
                "Completed academic projects in web & mobile app development",
                "Gained proficiency in Java, C#, Python"
            ]
        }
    ],

    skills: [
        {
            id: "1",
            category: "Frontend Development",
            skills: ["React.js", "TypeScript", "JavaScript", "UX/UI Design (Figma)"]
        },
        {
            id: "2",
            category: "Backend Development",
            skills: ["Node.js", "NestJS", "Python", "Java", "C#"]
        },
        {
            id: "3",
            category: "Database & Tools",
            skills: ["SQL", "Databases", "Git", "CI/CD"]
        },
        {
            id: "4",
            category: "Emerging Technologies",
            skills: ["Machine Learning (TensorFlow, Colab)", "Data Analytics", "Compiler Design Concepts"]
        },
        {
            id: "5",
            category: "Platforms & Tools",
            skills: ["Google Colab", "Jupyter", "Public Speaking & Presentations"]
        }
    ],

    certifications: [
        {
            id: "1",
            name: "ALX Full Stack Developer Nanodegree",
            issuer: "Udacity"
        },
        {
            id: "2",
            name: "Leadership & Entrepreneurship Training",
            issuer: "HIMS Leadership Academy"
        }
    ]
};