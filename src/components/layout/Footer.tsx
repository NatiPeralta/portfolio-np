import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-white/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Natália Peralta. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Desenvolvido com <Heart className="w-3.5 h-3.5 text-[#e8a8bf] fill-[#e8a8bf]" /> usando React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
