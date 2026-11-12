import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code2, Sparkles, Check, Copy, FileText } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

  // Valores de movimento do mouse para o efeito de "quase virada" (tilt & peek)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotação sutil baseada na posição do mouse (dá a sensação de que o card está inclinando)
  const rotateX = useTransform(mouseYSpring, [-0.10, 0.10], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.10, 0.10], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Posição do mouse relativa ao centro do card (-0.5 a 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Alternância automática a cada 5 segundos (pausa se o mouse estiver em cima)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setViewMode(viewMode === 'photo' ? 'code' : 'photo');
    }, 3000);

    return () => clearInterval(interval);
  }, [viewMode, setViewMode, isHovered]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="sobre" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Lado Esquerdo com Animação em Cascata */}
        <motion.div
          className="lg:col-span-7 space-y-6 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-[11px] font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              DISPONÍVEL PARA OPORTUNIDADES JÚNIOR
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Olá, eu sou <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#e8a8bf]">
                Natália Peralta
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-white/70 max-w-xl font-light leading-relaxed">
              Desenvolvedora front-end em construção, apaixonada por transformar ideias em experiências digitais intuitivas, elegantes e acessíveis.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="px-6 py-3.5 rounded-full bg-[#e8a8bf] text-[#16152b] font-semibold text-sm hover:bg-[#f0b8cc] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#e8a8bf]/20 hover:scale-105"
            >
              Explorar projetos
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/Natalia-Peralta-Desenvolvedora-Frontend.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:border-[#e8a8bf]/40"
            >
              <FileText className="w-4 h-4 text-[#e8a8bf]" />
              Currículo
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-10 flex items-center gap-3 text-xs text-white/40 font-mono tracking-widest uppercase">
            <div className="w-8 h-px bg-white/20"></div>
            <span>Role para descobrir</span>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Card com Efeito 3D, Flip e Tilt de Mouse */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Botões de Alternância Manual */}
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

          {/* Container Principal com Perspectiva e Eventos de Mouse */}
          <motion.div
            className="relative w-full max-w-[440px] aspect-[4/4.5] perspective-1000 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setViewMode(viewMode === 'photo' ? 'code' : 'photo')}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e8a8bf]/20 to-[#9d4edd]/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>

            {/* Elemento que faz a rotação de Flip (Virar) */}
            <div
              className={`w-full h-full relative duration-700 transition-all transform-gpu ${
                viewMode === 'code' ? '[transform:rotateY(180deg)]' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRENTE: Foto (Com fundo totalmente opaco: bg-[#16152b]) */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl border border-[#e8a8bf]/40 bg-[#16152b] p-3 shadow-2xl overflow-hidden flex flex-col justify-between"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <img
                  src={foto}
                  alt="Natália Peralta"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#16152b]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold text-white">Ciência da Computação</p>
                    <p className="text-[10px] text-[#e8a8bf]">Graduada em 2024</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#e8a8bf]/20 border border-[#e8a8bf] flex items-center justify-center text-[#e8a8bf] text-xs">
                    🎓
                  </div>
                </div>
              </div> 
              

              {/* VERSO: Hello World Card */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl border border-[#e8a8bf]/30 bg-[#16152b] p-6 shadow-2xl flex flex-col justify-between font-mono text-sm leading-relaxed [transform:rotateY(180deg)]"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-white/50 text-xs tracking-wider">hello-world.tsx</span>
                    <span className="text-[#e8a8bf] text-xs font-sans">✦ 2026</span>
                  </div>

                  <div className="space-y-1 text-xs sm:text-sm font-mono">
                    <p>
                      <span className="text-[#9d4edd] font-semibold">const</span>{' '}
                      <span className="text-[#818cf8]">developer</span>{' '}
                      <span className="text-white">=</span> <span className="text-white">{`{`}</span>
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
                      <span className="text-[#34d399]">'React & Modern UI/UX'</span>
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
                    <p className="text-white">{`};`}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">// Pronto para criar algo novo?</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyCode();
                    }}
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
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};