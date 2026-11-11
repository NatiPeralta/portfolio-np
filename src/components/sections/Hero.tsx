import React from 'react';
import { ArrowUpRight, Code2, Sparkles, Check, Copy } from 'lucide-react';
import foto from "../../assets/NatiPeralta.png";

interface HeroProps {
  viewMode: 'photo' | 'code';
  setViewMode: (mode: 'photo' | 'code') => void;
  copied: boolean;
  handleCopyCode: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  viewMode,
  setViewMode,
  copied,
  handleCopyCode
}) => {
  return (
    <section id="sobre" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Lado Esquerdo */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-[11px] font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            DISPONÍVEL PARA OPORTUNIDADES JÚNIOR
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#e8a8bf]">
              Natália Peralta
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl font-light leading-relaxed">
          Desenvolvedora front-end em construção, apaixonada por transformar ideias em experiências digitais intuitivas, elegantes e acessíveis.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="px-6 py-3.5 rounded-full bg-[#e8a8bf] text-[#16152b] font-semibold text-sm hover:bg-[#f0b8cc] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#e8a8bf]/20 hover:scale-105"
            >
              Explorar projetos
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contato"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              Entrar em contato
            </a>
          </div>

          <div className="pt-10 flex items-center gap-3 text-xs text-white/40 font-mono tracking-widest uppercase">
            <div className="w-8 h-px bg-white/20"></div>
              <span>Role para descobrir</span>
          </div>
        </div>

        {/* Lado Direito: Alternador e Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="mb-4 bg-white/5 p-1.5 rounded-full border border-white/10 flex items-center gap-1 z-20">
            <button
              onClick={() => setViewMode('photo')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'photo'
                  ? 'bg-[#e8a8bf] text-[#16152b] shadow-md font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Foto
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'code'
                  ? 'bg-[#e8a8bf] text-[#16152b] shadow-md font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Hello World Card
            </button>
          </div>

          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e8a8bf]/20 to-[#9d4edd]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {viewMode === 'photo' ? (
              <div className="relative w-full h-full rounded-t-[180px] rounded-b-[40px] border-2 border-[#e8a8bf]/40 p-2 bg-[#1e1c3a]/50 backdrop-blur-sm shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-center">
                <img
                  src={foto}
                  alt="Natália Peralta"
                  className="w-full h-full object-cover rounded-t-[170px] rounded-b-[30px]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#16152b]/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Ciência da Computação</p>
                    <p className="text-[10px] text-[#e8a8bf]">Graduada em 2024</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#e8a8bf]/20 border border-[#e8a8bf] flex items-center justify-center text-[#e8a8bf] text-xs">
                    🎓
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full rounded-2xl border border-[#e8a8bf]/30 bg-[#1e1c3a]/90 backdrop-blur-md p-6 shadow-2xl transition-all duration-500 flex flex-col justify-between font-mono text-sm leading-relaxed">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-white/50 text-xs tracking-wider">hello-world.tsx</span>
                    <span className="text-[#e8a8bf] text-xs font-sans">✦ 2026</span>
                  </div>

                  {/* Código Colorido em Destaque */}
                  <div className="space-y-1 mb-5 text-xs sm:text-sm font-mono">
                    <p>
                      <span className="text-[#9d4edd] font-semibold">const</span>{' '}
                      <span className="text-[#818cf8]">developer</span>{' '}
                      <span className="text-white">=</span> <span className="text-white">&#123;</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">name</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'Natália Peralta'</span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">role</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'Front-End Developer'</span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">degree</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'Ciência da Computação'</span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">focus</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'React &amp; Modern UI/UX'</span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">passion</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'Transformar código em arte'</span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[#e8a8bf]">learning</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-[#34d399]">'always'</span>
                    </p>
                    <p className="text-white">&#125;;</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">// Pronto para criar algo novo?</span>
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-[#e8a8bf] hover:text-[#16152b] text-white/80 text-xs transition-all flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
