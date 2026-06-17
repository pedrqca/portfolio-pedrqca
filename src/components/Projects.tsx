import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-brand-purple font-mono text-xl">03.</span> Projetos em Destaque
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`p-6 rounded-xl border flex flex-col justify-between transition-all ${
              project.isFeatured 
                ? 'bg-gradient-to-br from-dark-card to-dark-bg border-brand-purple/40 shadow-lg shadow-brand-purple/5' 
                : 'bg-dark-card border-dark-border hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <FaFolderOpen className={project.isFeatured ? 'text-brand-purple' : 'text-slate-500'} size={24} />
                <div className="flex items-center gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Código Fonte">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Deploy Ativo">
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              {project.isFeatured && (
                <span className="text-[10px] font-mono tracking-widest text-brand-purple font-semibold uppercase bg-brand-purple/10 px-2 py-0.5 rounded-md mb-2 inline-block">
                  Projeto Principal
                </span>
              )}
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-purple">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-dark-bg border border-dark-border text-slate-400 font-mono text-[11px] px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};