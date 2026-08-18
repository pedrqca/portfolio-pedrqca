import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-dark-bg relative"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-brand-purple font-mono text-xl">
            02.
          </span>

          Experiência
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-dark-border ml-3 md:ml-6 space-y-12">

          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative pl-8"
            >

              {/* Timeline Icon */}
              <div
                className="
                  absolute
                  -left-[17px]
                  top-1
                  bg-dark-bg
                  border-2
                  border-brand-purple
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-brand-purple
                "
              >
                <FaBriefcase size={12} />
              </div>

              {/* Period */}
              <span className="text-xs font-mono text-brand-purple font-semibold uppercase tracking-wider">
                {exp.period}
              </span>

              {/* Role */}
              <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="text-sm text-slate-400 mt-1">
                <span className="text-brand-purple font-medium">
                  {exp.company}
                </span>
              </p>

              {/* Activities */}
              <ul className="mt-5 space-y-3 text-slate-400 text-sm leading-relaxed">
                {exp.activities.map((act, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="text-brand-purple mt-2 block min-w-[5px] h-[5px] rounded-full bg-brand-purple" />

                    <span>{act}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-6">
                <div>
                  <p className="text-xl font-bold text-white">300+</p>
                  <p className="text-xs text-slate-500">alunos alcançados</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white">2+</p>
                  <p className="text-xs text-slate-500">anos de experiência</p>
                </div>
              </div>

              {/* Technologies */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        bg-dark-card
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
              )}

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};