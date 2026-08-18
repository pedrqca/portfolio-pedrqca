import React from 'react';
import { skillCategories, languages } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-dark-bg/50 border-y border-dark-border"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-brand-purple font-mono text-xl">
            04.
          </span>

          Habilidades & Idiomas
        </h2>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-dark-card
                  border border-dark-border
                  p-6
                  rounded-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-purple/40
                  hover:shadow-lg
                  hover:shadow-brand-purple/5
                "
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-lg
                      bg-brand-purple/10
                      border border-brand-purple/20
                      text-brand-purple
                      group-hover:bg-brand-purple/15
                      transition-colors
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                      {cat.category}
                    </h3>

                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {cat.skills.length} tecnologias
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="
                        bg-dark-bg
                        text-slate-300
                        text-xs
                        px-3
                        py-1.5
                        rounded-md
                        border border-dark-border/60
                        transition-colors
                        hover:border-brand-purple/40
                        hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="mt-6 bg-dark-card border border-dark-border p-6 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Idiomas
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Comunicação e leitura técnica
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {languages.map((lang, idx) => {
                const [language, level] = lang.split(' — ');

                return (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm text-slate-200">
                      {language}
                    </span>

                    <span className="text-xs text-slate-500 mt-1">
                      {level}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};