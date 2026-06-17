import React from 'react';
import { educationList } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-brand-purple font-mono text-xl">05.</span> Formação Acadêmica
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationList.map((edu, index) => (
          <div key={index} className="bg-dark-card border border-dark-border p-6 rounded-xl flex items-start gap-4">
            <div className="text-brand-purple bg-brand-purple/10 p-3 rounded-lg mt-1">
              <FaGraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
              <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};