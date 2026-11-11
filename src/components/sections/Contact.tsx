import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { ContactFormData } from '../../types';

interface ContactProps {
  onSendMessage: (data: ContactFormData) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSendMessage }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e8a8bf] font-semibold block mb-2">
              Conecte-se comigo
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Vamos criar algo incrível juntas?</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Estou disponível para vagas Júnior de Front-End Developer, projetos freelancers ou parcerias de desenvolvimento.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#e8a8bf]/10 border border-[#e8a8bf]/30 flex items-center justify-center text-[#e8a8bf]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/50">E-mail para contato</p>
                <p className="text-sm font-medium text-white">nataliaperalta@exemplo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#e8a8bf]/10 border border-[#e8a8bf]/30 flex items-center justify-center text-[#e8a8bf]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/50">Localização</p>
                <p className="text-sm font-medium text-white">Brasil (Remoto / Presencial)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#e8a8bf] hover:border-[#e8a8bf]/40 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#e8a8bf] hover:border-[#e8a8bf]/40 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#1e1c3a]/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-2">Seu Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Natália Peralta"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8a8bf]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-2">Seu E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="voce@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8a8bf]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Assunto</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Oportunidade de Trabalho / Projeto"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8a8bf]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Mensagem</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Conte sobre seu projeto ou oportunidade..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e8a8bf] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#e8a8bf] text-[#16152b] font-semibold text-sm hover:bg-[#f0b8cc] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#e8a8bf]/20"
            >
              Enviar Mensagem
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
