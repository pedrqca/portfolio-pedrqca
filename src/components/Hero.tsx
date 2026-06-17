import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.08),transparent_50%)]" />
      
      <div className="max-w-4xl text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-purple font-mono tracking-wider text-sm md:text-base mb-3"
        >
          Olá, meu nome é
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-400 mb-6 max-w-2xl mx-auto"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed"
        >
          Localizado em {personalInfo.location}.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-dark-card border border-dark-border px-5 py-2.5 rounded-lg text-slate-200 hover:border-brand-purple hover:text-brand-purple transition-all text-sm font-medium">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-dark-card border border-dark-border px-5 py-2.5 rounded-lg text-slate-200 hover:border-brand-purple hover:text-brand-purple transition-all text-sm font-medium">
            <FaGithub /> GitHub
          </a>
          <a href="/curriculo.pdf" download className="flex items-center gap-2 bg-dark-card border border-dark-border px-5 py-2.5 rounded-lg text-slate-200 hover:border-brand-purple hover:text-brand-purple transition-all text-sm font-medium">
            <FaFileDownload /> Currículo
          </a>
          <a href="#contact" className="flex items-center gap-2 bg-brand-purple hover:bg-brand-hover px-6 py-2.5 rounded-lg text-white transition-all text-sm font-medium shadow-lg shadow-brand-purple/20">
            <FaEnvelope /> Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};