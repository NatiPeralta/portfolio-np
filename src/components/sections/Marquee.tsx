import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'DESENVOLVIMENTO CRIATIVO',
    'EXPERIÊNCIAS DIGITAIS',
    'FRONT-END COM PROPÓSITO',
    'UI & UX DESIGN',
    'REACT & TYPESCRIPT',
  ];

  return (
    <div className="w-full bg-[#e8a8bf] text-[#16152b] py-3 overflow-hidden shadow-lg transform -rotate-1 my-8">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-bold tracking-wider text-sm uppercase">
        {[...items, ...items, ...items].map((text, idx) => (
          <React.Fragment key={idx}>
            <span>{text}</span>
            <span className="text-xs">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
