import { useState } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // 1. O useState fica AQUI dentro do componente, sempre no topo antes de qualquer return
  const [zoomedImage, setZoomedImage] = useState<{ image: string; caption: string } | null>(null);

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

            {/* Vídeo Demonstrativo (exibido apenas se o projeto tiver videoUrl) */}
            {project.videoUrl && (
              <div className="space-y-2 mt-6">
                <h4 className="text-sm font-semibold text-[#e8a8bf] uppercase tracking-wider">
                  Demonstração em Vídeo — Tela de Personalização White-Label
                </h4>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <video
                    src={project.videoUrl}
                    controls
                    muted
                    playsInline
                    className="w-full max-h-[400px] object-contain"
                  />
                </div>
              </div>
            )}

            {/* Minhas Contribuições no Projeto */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 mt-6">
                <h4 className="text-sm font-semibold text-[#e8a8bf] uppercase tracking-wider">
                  Minha Atuação & Entregas
                </h4>
                <ul className="space-y-2 text-sm text-white/80 list-disc pl-5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Galeria de Telas (Prints do Sistema) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4 mt-6">
                <h4 className="text-sm font-semibold text-[#e8a8bf] uppercase tracking-wider">
                  Telas do Sistema <span className="text-xs font-normal text-white/50 normal-case">(clique para ampliar)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setZoomedImage(item)}
                      className="group bg-white/5 border border-white/10 hover:border-[#e8a8bf]/50 rounded-2xl overflow-hidden flex flex-col cursor-zoom-in transition-all"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.caption}
                          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-xs font-medium bg-[#16152b]/90 text-white px-3 py-1.5 rounded-full border border-white/10">
                            Ampliar tela
                          </span>
                        </div>
                      </div>
                      <p className="p-3 text-xs text-white/70 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {/* Botão de Demo Online só aparece se houver link válido */}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#e8a8bf] text-[#16152b] font-semibold text-sm hover:bg-[#f0b8cc] transition-all flex items-center justify-center gap-2"
              >
                Ver Demo Online
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Condição para repositório remoto ou link do github */}
            {project.isPrivateRepo ? (
              <span className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-medium flex items-center justify-center gap-2 cursor-default">
                <Github className="w-4 h-4 text-[#e8a8bf]" />
                Repositório Privado (Equipe)
              </span>
            ) : (
              project.codeUrl &&
              project.codeUrl !== '#' && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom da Imagem */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setZoomedImage(null)}
            aria-label="Fechar imagem ampliada"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={zoomedImage.image}
            alt={zoomedImage.caption}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[80vh] object-contain rounded-xl border border-white/15 shadow-2xl cursor-default"
          />

          <p
            onClick={(e) => e.stopPropagation()}
            className="mt-4 max-w-3xl text-center text-sm text-white/90 bg-[#1e1c3a]/90 px-5 py-3 rounded-xl border border-white/10 cursor-default"
          >
            {zoomedImage.caption}
          </p>
        </div>
      )}
    </div>
  );
};