import { useState, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/common/ProjectModal';
import { Toast } from './components/common/Toast';
import { useParticles } from './hooks/useParticles';
import { PROJECTS } from './data/projects';
import { SKILLS } from './data/skills';
import { Project, ContactFormData } from './types';
import "./styles/global.css";

export function App() {
  const [activeTab, setActiveTab] = useState('sobre');
  const [viewMode, setViewMode] = useState<'photo' | 'code'>('code');
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);

  const codeSnippet = `const developer = {
  name: 'Natália Peralta',
  role: 'Front-End Developer',
  degree: 'Ciência da Computação',
  focus: 'React & Modern UI/UX',
  passion: 'Transformar código em arte',
  learning: 'always'
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = () => {
    setToastMessage('Mensagem enviada com sucesso! Obrigado pelo contato!');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#16152b] text-white relative overflow-x-hidden font-sans">
      {/* Constellation Canvas Stars Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center">
          <Hero
          viewMode={viewMode}
          setViewMode={setViewMode}
          copied={copied}
          handleCopyCode={handleCopyCode}
        />
        </div>

        <Marquee />

        <About />

        <Projects
          projects={PROJECTS}
          filter={filter}
          setFilter={setFilter}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Skills skills={SKILLS} />

        <Contact onSendMessage={handleSendMessage} />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
