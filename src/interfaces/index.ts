export interface Project {
  id: number;
  title: string;
  img: string;
  description?: string;
  technologies?: string[];
  year?: string;
}

export interface ProjectListProps {
  projects: Project[];
  onProjectHover: (projectId: number | null) => void;
  onProjectClick: (projectId: number) => void;
  hoveredProject: number | null;
}

export interface ProjectPreviewProps {
  project: Project | null;
}