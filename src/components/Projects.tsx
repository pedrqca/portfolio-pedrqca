import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolderOpen,
} from 'react-icons/fa';

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const openProject = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <h2 className="mb-12 flex items-center gap-3 text-2xl font-bold md:text-3xl">
        <span className="font-mono text-xl text-brand-purple">
          03.
        </span>
        Projetos
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion ? 0 : index * 0.1,
            }}
            role={project.demoUrl ? 'link' : undefined}
            tabIndex={project.demoUrl ? 0 : undefined}
            onClick={() => openProject(project.demoUrl)}
            onKeyDown={(event) => {
              if (!project.demoUrl) return;

              if (event.key === 'Enter') {
                event.preventDefault();
                openProject(project.demoUrl);
              }
            }}
            className={`
              group min-w-0 overflow-hidden rounded-xl
              border flex flex-col
              transition-all duration-300
              ${project.demoUrl
                ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple'
                : ''
              }
              ${project.isFeatured
                ? `
                    md:col-span-2
                    bg-gradient-to-br
                    from-dark-card to-dark-bg
                    border-brand-purple/40
                    shadow-lg shadow-brand-purple/5
                    hover:border-brand-purple/70
                  `
                : `
                    bg-dark-card
                    border-dark-border
                    hover:border-brand-purple/30
                  `
              }
              ${shouldReduceMotion ? '' : 'hover:-translate-y-1'}
            `}
          >
            {/* Project image */}
            <div
              className={`
                relative w-full overflow-hidden bg-dark-bg
                ${project.isFeatured ? 'aspect-[16/7]' : 'aspect-video'}
              `}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Prévia do projeto ${project.title}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`
                    h-full w-full object-cover object-top
                    transition-transform duration-500
                    ${shouldReduceMotion ? '' : 'group-hover:scale-[1.03]'}
                  `}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-500">
                  <FaFolderOpen size={32} />
                  <span className="font-mono text-xs">
                    Imagem em breve
                  </span>
                </div>
              )}

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-bg/30 to-transparent" />
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                {/* Header */}
                <div className="mb-5 flex items-center justify-between">
                  <FaFolderOpen
                    className={
                      project.isFeatured
                        ? 'text-brand-purple'
                        : 'text-slate-500 transition-colors group-hover:text-brand-purple'
                    }
                    size={24}
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-3 text-slate-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="relative z-10 transition-colors hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-dark-card"
                        title="Código fonte"
                        aria-label={`Código fonte de ${project.title}`}
                      >
                        <FaGithub size={18} aria-hidden="true" />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="relative z-10 transition-colors hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-dark-card"
                        title="Ver projeto"
                        aria-label={`Ver ${project.title}`}
                      >
                        <FaExternalLinkAlt
                          size={15}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>

                {/* Featured badge */}
                {project.isFeatured && (
                  <span className="mb-3 inline-block rounded-md bg-brand-purple/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-purple">
                    Projeto em destaque
                  </span>
                )}

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-brand-purple">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded border border-dark-border
                      bg-dark-bg px-2.5 py-1
                      font-mono text-[11px] text-slate-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};