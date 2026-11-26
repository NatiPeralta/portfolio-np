import { Project } from '../types';
import kitbook from '../assets/kitbook.png';
import movies from '../assets/movies.png';
import todo from '../assets/todo.png';
import medfast from '../assets/medfast.jpg';
import iphone from '../assets/iphone.png';
import insta from '../assets/insta.png';
import garol from '../assets/garol.png';
import vimais from '../assets/vimais.png';
import stardew from '../assets/stardew.png';

// arquivos do projeto MedFast
import medfastVideo from '../assets/MedFast.mp4';
import medfastDash from '../assets/medfast-dash.jpg';
import medfastMedicos from '../assets/medfast-medicos.jpg';
import medfastPaciente from '../assets/medfast-paciente.jpg';
import medfastLogin from '../assets/medfast-login.jpg';


export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Landing Page - Grupo Vimais',
    category: 'Projetos em Parceria',
    description: 'Landing page corporativa de alta performance desenvolvida em parceria com a Cubedev para o Grupo Vimais (setor de segurança e vigilância).',
    longDescription: 'Landing page institucional de alta conversão e performance desenvolvida em parceria comercial com a Cubedev para o Grupo Vimais, empresa referência no setor de segurança e vigilância. O projeto foi construído com foco em credibilidade, responsividade e experiência visual moderna, utilizando animações fluidas de rolagem com GSAP ScrollTrigger e arquitetura otimizada para carregamento rápido.',
    tags: ['React', 'CSS3', 'JavaScript', 'GSAP ScrollTrigger', 'Responsividade'],
    image: vimais,
    demoUrl: 'https://grupo-vimais-lp.vercel.app/',
    codeUrl: 'https://github.com/NatiPeralta/design-grupo-vimais',
    isPrivateRepo: true
  },
  {
    id: '2',
    title: 'MedFast - Plataforma White-Label de Saúde',
    category: 'Projetos Acadêmicos',
    description: 'Sistema white-label de agendamento médico com personalização dinâmica de identidade visual, portal do paciente e dashboard administrativo.',
    longDescription: 'Plataforma completa de agendamento de consultas médicas desenvolvida em equipe de 11 integrantes durante a formação Dev Full Stack Jr. (+praTi) e implantada originalmente na AWS. O sistema conta com arquitetura White-Label, permitindo que cada clínica personalize suas cores, nome e logotipo em tempo real, além de módulos completos para administradores, médicos e pacientes.',
    tags: ['React', 'Tailwind CSS', 'APIs REST', 'UX/UI', 'Git & Pull Requests'],
    image: medfast,
    demoUrl: '#',
    codeUrl: 'https://github.com/Plataforma-Saude',
    isPrivateRepo: true,
    videoUrl: medfastVideo,
    highlights: [
      'Desenvolvimento completo da interface de Personalização White-Label (alteração dinâmica de nome, paleta de cores primária/secundária, upload de logo e preview instantâneo).',
      'Auxílio direto na integração do front-end com o back-end via APIs REST, conectando fluxos de dados e tratando estados de interface.',
      'Construção e componentização de interfaces responsivas com React e Tailwind CSS seguindo boas práticas de acessibilidade.',
      'Organização e designação de tarefas da equipe através de quadro Kanban, aliada ao versionamento colaborativo com Git, branches e Pull Requests.'
    ],
    gallery: [
      {
        image: medfastDash,
        caption: 'Dashboard Administrativo: métricas de consultas totais, atendimentos do dia, médicos ativos/pendentes e lista de agendamentos recentes.'
      },
      {
        image: medfastMedicos,
        caption: 'Gestão de Médicos (CRUD): listagem completa de profissionais com ações para cadastrar, editar e remover registros.'
      },
      {
        image: medfastPaciente,
        caption: 'Portal do Paciente: busca inteligente com filtros por nome, CRM ou especialidade e sistema de favoritos.'
      },
      {
        image: medfastLogin,
        caption: 'Autenticação: fluxo de cadastro e login integrado aos perfis de acesso da plataforma.'
      }
    ]
  },
  {
    id: '3',
    title: 'KitBook - Gerenciador e Planejador de Leitura',
    category: 'Projetos Pessoais',
    description: 'Aplicação web para planejamento de metas de leitura, sorteio de livros e busca automatizada via código de barras e Google Books API.',
    longDescription: 'Aplicação web responsiva (Mobile-First) criada para organizar hábitos de leitura em etapas intuitivas. Conta com integração à Google Books API para busca por título ou ISBN, leitor de código de barras via câmera do dispositivo, cálculo dinâmico de metas diárias/semanais e persistência automática de dados no navegador utilizando LocalStorage.',
    tags: ['React', 'TypeScript', 'Google Books API', 'CSS Modules', 'LocalStorage'],
    image: kitbook,
    demoUrl: 'https://kitbook-kappa.vercel.app/',
    codeUrl: 'https://github.com/NatiPeralta/Kit-Book',
  },
  {
    id: '4',
    title: 'React Movies - Catálogo e Busca de Filmes',
    category: 'Projetos Acadêmicos',
    description: 'Aplicação web para explorar filmes, realizar buscas em tempo real, navegar por páginas e gerenciar uma lista de favoritos.',
    longDescription: 'Aplicação de descoberta de filmes desenvolvida em React com consumo assíncrono de API REST externa. Permite pesquisar títulos dinamicamente, visualizar detalhes completos de cada obra, navegar entre resultados paginados e salvar ou remover filmes favoritos com gerenciamento de estado reativo.',
    tags: ['React', 'JavaScript', 'APIs REST', 'React Router', 'CSS3'],
    image: movies,
    demoUrl: 'https://react-movies-mpi4.vercel.app/',
    codeUrl: 'https://github.com/NatiPeralta/react-movies'
  },
  {
    id: '5',
    title: 'Portfólio Pixel Art - Inspirado em Stardew Valley',
    category: 'Projetos Pessoais',
    description: 'Interface interativa em pixel art com alternância dinâmica de temas (dia/noite), caixas de diálogo e componentes customizados.',
    longDescription: 'Projeto criativo desenvolvido para unir design temático em pixel art e desenvolvimento Front-End puro. Apresenta sistema de alternância entre temas claro e escuro (dia e noite), caixas de diálogo interativas inspiradas no universo de Stardew Valley, barras de habilidades personalizadas e layout responsivo construído sem dependências de frameworks.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'UI/UX', 'Pixel Art'],
    image: stardew,
    demoUrl: 'https://stardew-valley-portfolio.vercel.app/',
    codeUrl: 'https://github.com/NatiPeralta/stardew-valley-portfolio'
  },
  {
    id: '6',
    title: 'Lista de Tarefas Interativa (Drag & Drop)',
    category: 'Projetos Acadêmicos',
    description: 'Gerenciador de tarefas com operações completas de CRUD, filtros por status, busca instantânea e reordenação via Drag & Drop.',
    longDescription: 'Aplicação interativa de produtividade desenvolvida com JavaScript puro e manipulação avançada do DOM. Oferece criação, edição e exclusão de tarefas, busca em tempo real, filtros por status (todas, pendentes e concluídas), persistência automática em LocalStorage e reordenação intuitiva dos itens utilizando a API nativa de Drag and Drop do HTML5.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Drag & Drop API', 'LocalStorage'],
    image: todo,
    demoUrl: 'https://to-do-list-js-orpin.vercel.app/',
    codeUrl: 'https://github.com/NatiPeralta/to-do-list-js'
  },
  {
    id: '7',
    title: 'Clone Interativo - iPhone 13 Pro',
    category: 'Projetos Acadêmicos',
    description: 'Recriação responsiva da página oficial do iPhone 13 Pro com seleção dinâmica de cores e alternância entre temas claro e escuro.',
    longDescription: 'Projeto focado em fidelidade visual, design responsivo e interatividade via DOM. Reproduz a página de apresentação do iPhone 13 Pro da Apple, permitindo ao usuário alternar entre as variantes de cores do aparelho com atualização dinâmica de imagens e alternar entre os modos de exibição claro e escuro (Dark/Light Mode).',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Manipulação do DOM', 'Responsividade'],
    image: iphone,
    demoUrl: 'https://natiperalta.github.io/clone_iphone13/',
    codeUrl: 'https://github.com/NatiPeralta/clone_iphone13'
  },
  {
    id: '8',
    title: 'Clone Interface - Instagram (Login & Recuperação)',
    category: 'Projetos Acadêmicos',
    description: 'Recriação fiel da tela inicial de login do Instagram acompanhada da interface auxiliar de recuperação de senha.',
    longDescription: 'Estudo prático de estruturação semântica e estilização avançada com HTML5 e CSS3 puro. Além de reproduzir com precisão o layout da página inicial e de login do Instagram para desktop e mobile, o projeto inclui uma tela funcional e responsiva de "Esqueci minha senha" seguindo a mesma identidade visual.',
    tags: ['React', 'Tailwind CSS', 'UX Research', 'Git'],
    image: insta,
    demoUrl: 'https://natiperalta.github.io/clone-home-instagram/',
    codeUrl: 'https://github.com/NatiPeralta/clone-home-instagram'
  },
  {
    id: '9',
    title: 'Convite Digital - Chá de Casa Nova',
    category: 'Projetos Pessoais',
    description: 'Convite web interativo e personalizado desenvolvido para celebrar o chá de casa nova de amigos, com identidade visual exclusiva.',
    longDescription: 'Página web personalizada desenvolvida como presente para o chá de casa nova de amigos próximos. O projeto combina design afetivo, paleta de cores sob medida, tipografia harmoniosa e layout totalmente adaptado para dispositivos móveis, facilitando o acesso rápido às informações do evento pelos convidados.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Design', 'Mobile-First'],
    image: garol,
    demoUrl: 'https://natiperalta.github.io/casa-nova/',
    codeUrl: 'https://github.com/NatiPeralta/casa-nova'
  },
];
