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
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'UI/UX' | 'Ferramentas';
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
