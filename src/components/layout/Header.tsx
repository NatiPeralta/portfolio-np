import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#16152b]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Lado Esquerdo: Logotipo e Legenda Lado a Lado com Divisor */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight text-white select-none">
            np <span className="text-[#e8a8bf]">.</span>
          </span>
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-normal">
            FRONT-END DEVELOPER
            </span>
          </div>
        </div>

        {/* Navegação Central */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`relative text-sm transition-colors duration-200 py-1 group ${
                activeTab === item.id
                  ? 'text-white font-medium'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
              {/* Linha de Sublinhado no Hover */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-[#e8a8bf] transition-all duration-300 ${
                  activeTab === item.id
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Botão de Contato */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-[#e8a8bf]/60 hover:shadow-lg hover:shadow-[#e8a8bf]/10 active:scale-95"
        >
          Vamos conversar
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};
