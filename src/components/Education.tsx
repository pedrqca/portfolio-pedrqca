import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-brand-purple font-mono text-xl">
            05.
          </span>

          Formação Acadêmica
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
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

              {/* Icon */}
              <div
                className="
                  w-11 h-11
                  flex items-center justify-center
                  rounded-lg
                  bg-brand-purple/10
                  border border-brand-purple/20
                  text-brand-purple
                  mb-5
                  group-hover:bg-brand-purple/15
                  transition-colors
                "
              >
                <FaGraduationCap size={19} />
              </div>

              {/* Institution */}
              <h3 className="text-lg font-bold text-white">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="text-slate-400 text-sm mt-2">
                {edu.degree}
              </p>

              {/* Period */}
              {edu.period && (
                <p className="text-brand-purple text-xs font-mono mt-4">
                  {edu.period}
                </p>
              )}

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};