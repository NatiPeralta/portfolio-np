export interface Project {
  id: string;
  title: string;
  category: 'React' | 'JavaScript' | 'TypeScript' | 'UI/UX';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'UI/UX' | 'Ferramentas';
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
