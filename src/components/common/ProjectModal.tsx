import React from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16152b]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#1e1c3a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#16152b]/80 border border-white/10 text-white flex items-center justify-center hover:bg-[#e8a8bf] hover:text-[#16152b] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 space-y-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="text-xs font-semibold text-[#e8a8bf] uppercase tracking-wider">{project.category}</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1 mb-3">{project.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl bg-[#e8a8bf] text-[#16152b] font-semibold text-sm hover:bg-[#f0b8cc] transition-all flex items-center justify-center gap-2"
            >
              Ver Demo Online
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
