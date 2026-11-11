import { Project } from '../types';
import kitbook from '../assets/kitbook.png';
import medfast from '../assets/medfast.png';
import movies from '../assets/movies.png';
import todo from '../assets/todo.png';
import iphone from '../assets/iphone.png';
import insta from '../assets/insta.png';
import garol from '../assets/garol.png';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Stardew Valley Pixel Portfolio',
    category: 'Projetos Pessoais',
    description: 'Interface interativa inspirada em pixel art com temas dinâmicos e componentes customizados.',
    longDescription: 'Projeto conceitual e funcional explorando estética retro, componentes de diálogo animados e mecânicas visuais divertidas.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Pixel Art'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '2',
    title: 'Book Management & Barcode Scanner',
    category: 'Projetos Pessoais',
    description: 'Aplicação para agendamento de leitura e busca automatizada via Google Books API.',
    longDescription: 'Plataforma web responsiva para amantes da leitura, integrada com leitura de código de barras via câmera e persistência via LocalStorage.',
    tags: ['React', 'TypeScript', 'Google Books API', 'CSS Modules'],
    image: kitbook,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '3',
    title: 'Medical Scheduling System',
    category: 'Projetos Acadêmicos',
    description: 'Interface para agendamento médico com fluxos acessíveis e responsivos.',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: medfast,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '4',
    title: 'React Movies',
    category: 'Projetos Acadêmicos',
    description: 'Site que lista todos os filmes. É possível pesquisar, favoritar e desfavoritar os filmes',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: movies,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '5',
    title: 'To-do-List',
    category: 'Projetos Acadêmicos',
    description: 'Aplicação interativa de lista de tarefas. É possível criar, editar, filtrar, buscar, marcar as concluídas e reordenar via Drag & Drop',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: todo,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '6',
    title: 'Clone iPhone 13 Pro',
    category: 'Projetos Acadêmicos',
    description: 'Clone interativo e responsivo da página do iPhone 13 Pro da Apple com alternância de temas (dark/light).',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: iphone,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '7',
    title: 'Clone Home do Instagram',
    category: 'Projetos Acadêmicos',
    description: 'Página clone da ´Home´ e do ´Esqueci minha senha´ do Instagram.',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: insta,
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '8',
    title: 'Chá de Casa Nova',
    category: 'Projetos Pessoais',
    description: 'Convite digital para o chá de casa nova de amigos queridos. O design traz uma identidade visual personalizada para o casal.',
    longDescription: 'Aplicação desenvolvida em equipe focada em acessibilidade WCAG, agendamento facilitado e prontuário digital estilizado.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: garol,
    demoUrl: '#',
    codeUrl: '#'
  },
];
