import React from 'react';
import { skillCategories, languages } from '../data/portfolioData';
import { FaCode } from 'react-icons/fa';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-dark-bg/50 border-y border-dark-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-brand-purple font-mono text-xl">04.</span> Habilidades & Idiomas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, index) => (
            <div key={index} className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
                <FaCode className="text-brand-purple" size={14} /> {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="bg-dark-bg text-slate-300 text-xs px-3 py-1 rounded-md border border-dark-border/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark-card border border-dark-border p-6 rounded-xl max-w-md">
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase border-b border-dark-border pb-2 mb-3">
            Idiomas
          </h3>
          <div className="space-y-2">
            {languages.map((lang, idx) => (
              <p key={idx} className="text-slate-400 text-sm">{lang}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};