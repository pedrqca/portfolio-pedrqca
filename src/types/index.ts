export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  activities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
}