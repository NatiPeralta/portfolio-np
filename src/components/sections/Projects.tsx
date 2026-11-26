import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';

interface ProjectsProps {
  projects: Project[];
  filter: string;
  setFilter: (category: string) => void;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  filter,
  setFilter,
  onSelectProject
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const categories = ['Todos Projetos', 'Projetos Pessoais', 'Projetos Acadêmicos', 'Projetos em Parceria'];

  const filteredProjects = filter === 'Todos Projetos'
    ? projects
    : projects.filter((p) => p.category === filter);

  // Sempre que mudar o filtro de categoria, volta para a primeira página
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-[#e8a8bf] tracking-widest block mb-2">
              // PORTFÓLIO DE TRABALHOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Projetos em Destaque</h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#e8a8bf] text-[#16152b] shadow-md font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

          {/* Grid de até 4 Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#1e1c3a]/40 border border-white/10 hover:border-[#e8a8bf]/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

                <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-[#e8a8bf] transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#e8a8bf] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] bg-white/5 text-white/70 px-2.5 py-1 rounded-lg border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>

        {/* Controles Inferiores (Setas para Mobile/Tablet + Indicadores de Página) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={handlePrev}
              aria-label="Página anterior"
              className="w-10 h-10 rounded-full bg-[#1e1c3a] border border-white/15 hover:border-[#e8a8bf] text-white hover:text-[#e8a8bf] flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Ir para página ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? 'w-8 bg-[#e8a8bf]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Próxima página"
              className="w-10 h-10 rounded-full bg-[#1e1c3a] border border-white/15 hover:border-[#e8a8bf] text-white hover:text-[#e8a8bf] flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </Reveal>
    </section>
  );
};