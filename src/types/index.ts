export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  education: EducationProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  department?: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  technologies: TechnologyProps[]
}

export interface EducationProps {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  highlight?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  date?: string;
  linkPreview?: string;
  linkSource?: string;
  technologies: TechnologyProps[]
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface TechnologyProps {
  name: string;
  image: string;
}
