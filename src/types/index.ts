export interface Project {
    id: number;
    title: string;
    description: string;
    img: string;
    back?: string; // Optional field for background image
    brief: string;
    scopeOfWork: string[];
    relatedImgs: string[];
    idea: string;
    projectUrl?: string; // Optional field for linking to live project
    technologiesUsed?: string[]; // Optional field for listing technologies
  }
  export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
  }
  
  export interface Strength {
    title: string;
    description: string;
  }
  
  export interface Achievement {
    title: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    proficiency: string;
  }

export type itemVariantTypes = {
    hidden: {opacity: number, y: number},
    visible: {opacity: number, y: number, transition: {duration: number, ease: string}}
  }