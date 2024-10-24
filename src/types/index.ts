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
  