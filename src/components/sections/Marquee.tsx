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
    <div className="w-full overflow-x-clip py-4 my-6">
      <div className="w-[104%] -ml-[2%] bg-[#e8a8bf] text-[#16152b] py-3 overflow-hidden shadow-lg transform -rotate-1 transform-gpu">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-bold tracking-wider text-sm uppercase will-change-transform">
            {[...items, ...items, ...items].map((text, idx) => (
              <React.Fragment key={idx}>
                <span>{text}</span>
                <span className="text-xs">✦</span>
              </React.Fragment>
            ))}
          </div>
      </div>
    </div>
  );
};
