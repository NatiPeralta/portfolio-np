import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false); // Fecha o menu mobile ao clicar em um item
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#16152b]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Lado Esquerdo: Logotipo e Legenda */}
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

        {/* Navegação Desktop */}
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

        {/* Ações à Direita: Botão de Contato (Desktop) + Menu Hambúrguer (Mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-[#e8a8bf]/60 hover:shadow-lg hover:shadow-[#e8a8bf]/10 active:scale-95"
          >
            Vamos conversar
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Botão Hambúrguer (Apenas em telas menores que md) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#e8a8bf]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown / Gaveta Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#16152b]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 shadow-2xl transition-all flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-medium py-2 transition-colors border-b border-white/5 ${
                  activeTab === item.id ? 'text-[#e8a8bf]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão de contato dentro do menu mobile */}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 rounded-full bg-[#e8a8bf] text-[#16152b] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#e8a8bf]/20"
          >
            Vamos conversar
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};