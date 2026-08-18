import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolderOpen,
} from 'react-icons/fa';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-brand-purple font-mono text-xl">
          03.
        </span>

        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className={`
              group p-6 rounded-xl border flex flex-col
              justify-between transition-all duration-300
              hover:-translate-y-1
              ${
                project.isFeatured
                  ? `
                    md:col-span-2
                    bg-gradient-to-br
                    from-dark-card
                    to-dark-bg
                    border-brand-purple/40
                    shadow-lg
                    shadow-brand-purple/5
                    hover:border-brand-purple/70
                  `
                  : `
                    bg-dark-card
                    border-dark-border
                    hover:border-brand-purple/30
                  `
              }
            `}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <FaFolderOpen
                  className={
                    project.isFeatured
                      ? 'text-brand-purple'
                      : 'text-slate-500 group-hover:text-brand-purple transition-colors'
                  }
                  size={24}
                />

                <div className="flex items-center gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-purple transition-colors"
                      title="Código fonte"
                      aria-label={`Código fonte de ${project.title}`}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-purple transition-colors"
                      title="Ver projeto"
                      aria-label={`Ver ${project.title}`}
                    >
                      <FaExternalLinkAlt size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Featured */}
              {project.isFeatured && (
                <span className="text-[10px] font-mono tracking-widest text-brand-purple font-semibold uppercase bg-brand-purple/10 px-2 py-1 rounded-md mb-3 inline-block">
                  Projeto em destaque
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="
                    bg-dark-bg
                    border border-dark-border
                    text-slate-400
                    font-mono
                    text-[11px]
                    px-2.5
                    py-1
                    rounded
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};