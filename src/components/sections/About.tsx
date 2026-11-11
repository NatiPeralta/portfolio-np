import React from 'react';
import { GraduationCap, Code, Palette } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Formada em Ciência da Computação (2024). Base sólida em estrutura de dados e engenharia de software aplicada à web.'
    },
    {
      icon: Code,
      title: 'Front-End Moderno',
      description: 'Experiência prática em desenvolvimento de interfaces utilizando React, JavaScript (ES6+), TypeScript e Tailwind CSS para aplicações ágeis.'
    },
    {
      icon: Palette,
      title: 'Sensibilidade UI/UX',
      description: 'Foco na experiência do usuário, tipografia harmoniosa, acessibilidade e micro-interações que encantam o visitante e prendem a atenção.'
    }
  ];

  return (
    <section id="sobre-mim" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Cabeçalho da Seção com comentário de código */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-[#e8a8bf] tracking-widest block mb-2">
          // CONHEÇA MINHA TRAJETÓRIA
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
          Sobre Mim
        </h2>
        <div className="w-12 h-1 bg-[#e8a8bf] mx-auto rounded-full"></div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="p-8 bg-[#1e1c3a]/40 border border-white/10 hover:border-[#e8a8bf]/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-sm group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e8a8bf]/10 border border-[#e8a8bf]/30 flex items-center justify-center text-[#e8a8bf] mb-6 group-hover:bg-[#e8a8bf] group-hover:text-[#16152b] transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8a8bf] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};