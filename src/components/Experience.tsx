import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-dark-bg relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-brand-purple font-mono text-xl">02.</span> Trajetória Prática
        </h2>
        
        <div className="relative border-l border-dark-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[17px] top-1.5 bg-dark-bg border-2 border-brand-purple w-8 h-8 rounded-full flex items-center justify-center text-brand-purple">
                <FaBriefcase size={12} />
              </div>
              
              <span className="text-xs font-mono text-brand-purple font-semibold uppercase tracking-wider">{exp.period}</span>
              <h3 className="text-xl font-bold text-white mt-1">
                {exp.role} <span className="text-brand-purple">@ {exp.company}</span>
              </h3>
              
              <ul className="mt-4 space-y-2.5 text-slate-400 text-sm leading-relaxed">
                {exp.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1.5 block min-w-[5px] h-[5px] rounded-full bg-brand-purple" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};