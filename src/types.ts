export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'achievements' | 'contact';

export interface ProfileData {
  name: string;
  brandName: string;
  role?: string;
  headline: string;
  tagline: string;
  introduction: string;
  aboutText: string[];
  educationCard: {
    title: string;
    value: string;
    status?: string;
    institution?: string;
    cgpa?: string;
  };
  education?: EducationItem[];
  interestsCard: {
    title: string;
    value: string;
  };
  focusCard: {
    title: string;
    value: string;
  };
  careerGoalCard: {
    title: string;
    value: string;
  };
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  profileImage: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type ProjectCategoryFilter =
  | 'All'
  | 'Data Science'
  | 'Machine Learning'
  | 'IoT'
  | 'Web Development';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  machines?: string[];
  workflow: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  categoryTag: string;
  categories: ProjectCategoryFilter[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
  achievement?: string;
  location?: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  status?: string;
  percentage?: string;
  cgpa?: string;
}


