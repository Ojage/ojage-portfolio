import { Achievement, Education, Experience, Skill, Strength } from "../types";

export const contactInfo = {
    name: "Salathiel Ojage",
    title: "React Full Stack Developer",
    email: "salathiel@ojage.com",
    phone: "+237 681 402 886",
    linkedin: "linkedin.com/in/ojage-ayuk",
    location: "Buea, Cameroon",
};

export const summary = `
  Results-oriented Full Stack Developer with extensive experience in React, TypeScript, and MongoDB. 
  Skilled in developing high-performance web applications and optimizing front-end and back-end systems. 
  Proven ability to lead cross-functional teams to deliver impactful projects on time. 
  Seeking to leverage my technical expertise and leadership skills in a challenging role to drive innovation and growth.
`;

export const experience: Experience[] = [
    {
        title: "Full Stack Developer & Trainer",
        company: "Liah Technologies",
        period: "March 2022 - Present", 
        location: "Buea, Cameroon",
        responsibilities: [
            "Spearheaded the development of browser-based applications using React and TypeScript, increasing user engagement by 20%.",
            "Optimized REST API calls, reducing page load times by 15%.",
            "Led a cross-functional team to deliver project milestones on time and within budget.",
            "Managed and mentored interns, overseeing recruitment, training, and development.",
            "Trained over 50 aspiring developers in core web development technologies."
        ],
    },
    {
        title: "Junior Cloud Solutions Architect",
        company: "Remote Cloud Solutions Provider",
        period: "January 2023 - December 2023",  // Adding the as per my review for month
        location: "California, United States",
        responsibilities: [
            "Provisioned and automated AWS infrastructure, reducing system downtime by 40%.",
            "Developed backend automation scripts using Python and YAML, increasing operational efficiency.",
            "Enhanced platform capabilities with AWS improvements, boosting user engagement by 25%.",
        ],
    },
    {
        title: "Junior React Front End Developer",
        company: "Mungwin Ltd",
        period: "February 2021 - December 2022",  // Adding the month
        location: "Buea, Cameroon",
        responsibilities: [
            "Designed and developed responsive web applications using React, increasing user engagement by 20%.",
            "Implemented mobile-first designs that boosted mobile traffic by 15%.",
            "Collaborated with clients to gather requirements, resulting in 100% client satisfaction."
        ],
    },
];

export const education: Education = {
    degree: "Higher National Diploma in Software Engineering",
    institution: "Higher Institute of Management Science",
    period: "2023 - 2024",
    location: "Buea, Cameroon",
};

export const strengths: Strength[] = [
    {
        title: "Problem-Solving Skills",
        description:
            "Solved complex coding problems using React and Python, resulting in faster application performance.",
    },
    {
        title: "Team Player",
        description:
            "Collaborated with cross-functional teams to develop and deliver high-quality products.",
    },
    {
        title: "Attention to Detail",
        description:
            "Ensured code quality and accuracy through rigorous testing and review processes.",
    },
];

export const achievements: Achievement[] = [
    {
        title: "Leading a Cross-Functional Team",
        description:
            "Successfully led a team of developers, designers, and product managers to deliver a complex web application on time and within budget.",
    },
    {
        title: "Contributing to Open-Source Projects",
        description:
            "Contributed to several open-source projects, including React and Python libraries, improving accessibility and performance.",
    },
];

export const skills: Skill[] = [
    { name: "React", proficiency: "Proficient" },
    { name: "TypeScript", proficiency: "Proficient" },
    { name: "MongoDB", proficiency: "Proficient" },
    { name: "REST API", proficiency: "Proficient" },
    { name: "Python", proficiency: "Advanced" },
    { name: "AWS", proficiency: "Advanced" },
    { name: "NestJS", proficiency: "Proficient" },
    { name: "NPM", proficiency: "Proficient" },
];