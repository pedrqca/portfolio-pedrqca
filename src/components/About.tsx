import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FaGraduationCap,
  FaRocket,
  FaBrain,
} from 'react-icons/fa';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Text */}
          <div className="w-full md:w-3/5">

            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-brand-purple font-mono text-xl">
                01.
              </span>

              Sobre Mim
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                {personalInfo.bio}
              </p>

              <p>
                {personalInfo.formation}
              </p>

              <p>
                {personalInfo.lookingFor}
              </p>
            </div>

          </div>

          {/* Quick Info */}
          <div className="w-full md:w-2/5 grid grid-cols-1 gap-4">

            {/* Education */}
            <div
              className="
                group
                bg-dark-card
                border border-dark-border
                p-5
                rounded-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-purple/40
              "
            >
              <div className="flex items-center gap-3 text-brand-purple mb-3">
                <FaGraduationCap size={20} />

                <h3 className="font-semibold text-white text-sm tracking-wide uppercase">
                  Formação Atual
                </h3>
              </div>

              <p className="text-slate-400 text-xs">
                Engenharia de Computação @ Inatel
              </p>

              <p className="text-slate-400 text-xs mt-1">
                Análise e Desenvolvimento de Sistemas @ FIAP
              </p>
            </div>

            {/* Experience */}
            <div
              className="
                group
                bg-dark-card
                border border-dark-border
                p-5
                rounded-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-purple/40
              "
            >
              <div className="flex items-center gap-3 text-brand-purple mb-3">
                <FaRocket size={18} />

                <h3 className="font-semibold text-white text-sm tracking-wide uppercase">
                  Experiência Prática
                </h3>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Bolsista e Monitor de Programação no{' '}
                <span className="text-slate-300 font-medium">
                  Start_Inatel
                </span>
                , atuando com programação, Arduino e sistemas embarcados.
              </p>
            </div>

            {/* Interests */}
            <div
              className="
                group
                bg-dark-card
                border border-dark-border
                p-5
                rounded-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-purple/40
              "
            >
              <div className="flex items-center gap-3 text-brand-purple mb-3">
                <FaBrain size={18} />

                <h3 className="font-semibold text-white text-sm tracking-wide uppercase">
                  Interesses
                </h3>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Desenvolvimento de software, sistemas embarcados, 
                engenharia de computação e desenvolvimento de soluções tecnológicas.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};