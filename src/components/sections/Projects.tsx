import React from 'react';
import { Project } from '../../types';
import { ArrowUpRight } from 'lucide-react';

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
  const categories = ['Todos', 'React', 'TypeScript', 'JavaScript', 'UI/UX'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#e8a8bf] tracking-widest block mb-2">
           // PORTFÓLIO DE DESTAQUES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Projetos Recentes</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#16152b] via-transparent to-transparent opacity-80"></div>
              <span className="absolute top-4 left-4 bg-[#16152b]/80 backdrop-blur-md text-[#e8a8bf] border border-[#e8a8bf]/30 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
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
    </section>
  );
};
