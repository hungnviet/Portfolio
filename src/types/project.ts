export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  isMobile: boolean;
  images: string[];
  videoLink?: string;
  techStack: string[];
  features: Feature[];
  date: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Feature {
  title: string;
  description: string;
  image?: string;
} 