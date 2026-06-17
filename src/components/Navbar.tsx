import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-dark-border z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        
        <a 
          href="#hero" 
          className="text-lg font-mono font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <span className="text-brand-purple">{"</"}</span>
          pedrqca
          <span className="text-brand-purple">{">"}</span>
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-brand-purple transition-colors">Sobre</a>
          <a href="#experience" className="hover:text-brand-purple transition-colors">Experiência</a>
          <a href="#projects" className="hover:text-brand-purple transition-colors">Projetos</a>
          <a href="#skills" className="hover:text-brand-purple transition-colors">Habilidades</a>
          <a href="#contact" className="hover:text-brand-purple transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};