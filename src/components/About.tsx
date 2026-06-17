import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FaGraduationCap, FaRocket, FaExternalLinkAlt } from 'react-icons/fa'; // Adicionado FaExternalLinkAlt

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-brand-purple font-mono text-xl">01.</span> Sobre Mim
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            {personalInfo.bio}
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Busco oportunidades de estágio onde possa integrar o conhecimento de engenharia de baixo nível à agilidade do ecossistema de desenvolvimento de software moderno, criando soluções eficientes e focadas em desempenho.
          </p>
        </div>
        
        <div className="w-full md:w-2/5 grid grid-cols-1 gap-4">
          <div className="bg-dark-card border border-dark-border p-5 rounded-xl">
            <div className="flex items-center gap-3 text-brand-purple mb-2">
              <FaGraduationCap size={20} />
              <h3 className="font-semibold text-white text-sm tracking-wide uppercase">Educação Ativa</h3>
            </div>
            <p className="text-slate-400 text-xs">Engenharia de Computação @ Inatel</p>
            <p className="text-slate-400 text-xs mt-1">Análise e Des. de Sistemas @ FIAP</p>
          </div>

          
          <div className="bg-dark-card border border-dark-border p-5 rounded-xl relative group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3 text-brand-purple">
                <FaRocket size={18} />
                <h3 className="font-semibold text-white text-sm tracking-wide uppercase">Inovação</h3>
              </div>
              <a 
                href="https://inatel.br/start-inatel/start-engenharia-telecomunicacoes" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-500 hover:text-brand-purple transition-colors"
                title="Ver site oficial do programa"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Bolsista e Monitor de Programação em {' '}
              <a 
                href="https://inatel.br/start-inatel/start-engenharia-telecomunicacoes" 
                target="_blank" 
                rel="noreferrer" 
                className="text-brand-purple hover:text-brand-hover font-semibold underline decoration-brand-purple/30 hover:decoration-brand-purple transition-all"
              >
                Start_Inatel
              </a>.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};