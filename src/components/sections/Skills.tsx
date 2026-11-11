import React from 'react';
import { Skill } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="habilidades" className="py-24 px-6 max-w-7xl mx-auto bg-white/[0.01] rounded-3xl border border-white/5 my-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-[#e8a8bf] tracking-widest block mb-2">
          // COMPETÊNCIAS TÉCNICAS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Habilidades & Stacks</h2>
        <p className="text-white/60 text-sm">
          Combinação de conhecimentos acadêmicos em Ciência da Computação com práticas modernas de desenvolvimento front-end.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-[#1e1c3a]/50 border border-white/10 rounded-2xl hover:border-[#e8a8bf]/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className='mb-6'>
                <span className="text-xs text-[#e8a8bf] font-mono uppercase tracking-wider">{skill.category}</span>
                <h3 className="font-bold text-lg mt-1 group-hover:text-[#e8a8bf] transition-colors">{skill.name}</h3>
              </div>
            </div>
          
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
              <div
                className="bg-gradient-to-r from-[#e8a8bf] to-[#9d4edd] w-full h-full rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
