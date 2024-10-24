import TtdiaLogo from "../assets/images/TeksTedialogo.png";
import RhibmsLogo from "../assets/images/rhibms.png";
import greenBack from "../assets/images/898.jpg";
import Mologo from "../assets/images/mologo.png";
import { Project } from "../types";

// Project data array with type safety
export const projects: Project[] = [
  {
    id: 1,
    title: "RHIBMS",
    description: "The official website for RHIBMS, a healthcare training institution.",
    img: RhibmsLogo,
    back: greenBack,
    brief:
      "RHIBMS is a reputable institution specializing in training skilled personnel in various healthcare disciplines, including nursing and laboratory studies.",
    scopeOfWork: [
      "Developing a visual concept that aligns with RHIBMS's values and mission.",
      "Designing a user-friendly website layout with intuitive navigation.",
      "Creating responsive design elements for optimal viewing on various devices.",
      "Providing sample content to showcase the structure and purpose of the website.",
      "Suggesting features and functionalities for future development.",
      "Ensuring that the design is adaptable for future updates and expansion.",
    ],
    relatedImgs: [
      "https://rhibms.org/assets/img/requirementsPics/tinified/_DSC0012.JPG",
    ],
    idea: "The main idea of the RHIBMS website is to serve as an informative and interactive platform for healthcare education.",
    projectUrl: "https://rhibms.org", // Adding project URL
    technologiesUsed: ["React", "Chakra UI", "Node.js", "MongoDB"], // Technologies used
  },
  {
    id: 2,
    title: "Mologo",
    description: "An online image compression platform.",
    img: Mologo,
    brief:
      "Mologo ('small' in the Ejagham dialect) is an online image compression website that allows users to efficiently compress their images for free without compromising quality.",
    scopeOfWork: [
      "Develop a user-friendly and visually appealing website.",
      "Implement efficient image compression algorithms.",
      "Ensure fast loading times for the website.",
      "Provide a secure user registration and login system.",
      "Offer multiple image compression options to cater to different user requirements.",
    ],
    relatedImgs: [
      "https://images.unsplash.com/photo-1682167176169-c74f2a6c6b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    ],
    idea: "Mologo offers an intuitive interface for individuals and businesses to compress images efficiently, optimizing website performance and saving storage space.",
    projectUrl: "https://mologo.com", // Placeholder URL
    technologiesUsed: ["Next.js", "Web Workers", "Node.js", "S3 Storage"],
  },
  {
    id: 3,
    title: "Apply Tekstedia",
    description: "A job application platform for Tekstedia.",
    img: TtdiaLogo,
    brief:
      "Apply Tekstedia is a platform aimed at streamlining the application process for Tekstedia, a technology company specializing in software development and IT services.",
    scopeOfWork: [
      "Developing a modern and visually appealing user interface that reflects Tekstedia's innovative approach to technology.",
      "Designing an intuitive and user-friendly application portal with seamless navigation.",
      "Creating responsive design elements to ensure optimal user experiences on various devices.",
      "Providing sample content to illustrate the structure and functionality of the application portal.",
      "Proposing advanced features and functionalities for potential future enhancements.",
      "Ensuring the design is adaptable and scalable for accommodating future updates and expansions.",
    ],
    relatedImgs: [
      "https://apply.tekstedia.com/static/media/mologo_compressed-flyer2.393f74a4967226965584.png",
    ],
    idea: "The Apply Tekstedia platform simplifies the hiring process and ensures a user-friendly experience for job applicants.",
    projectUrl: "https://apply.tekstedia.com",
    technologiesUsed: ["React", "Chakra UI", "TypeScript", "Node.js"],
  },
  // Additional projects can be added here
];
