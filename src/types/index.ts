export interface ProjectGalleryItem {
  image: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Projetos Pessoais' | 'Projetos Acadêmicos' | 'Projetos em Parceria';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  videoUrl?: string;
  gallery?: ProjectGalleryItem[];
  highlights?: string[]; 
  isPrivateRepo?: boolean;
}

export interface Skill {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'BANCO DE DADOS' | 'BACKEND / INTEGRAÇÃO' | 'UI/UX' | 'FERRAMENTAS';
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
