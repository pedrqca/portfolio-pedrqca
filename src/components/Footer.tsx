import React from 'react';
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-dark-border py-8 text-center text-xs text-slate-500">
      <p className="font-mono">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>

      <div className="flex items-center justify-center gap-4 mt-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-brand-purple transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={16} />
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-brand-purple transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={16} />
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-brand-purple transition-colors"
          aria-label="E-mail"
        >
          <FaEnvelope size={16} />
        </a>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4 text-slate-600">
        <span>Construído com</span>

        <FaReact title="React" size={14} />
        <SiTypescript title="TypeScript" size={14} />
        <SiVite title="Vite" size={14} />
        <SiTailwindcss title="Tailwind CSS" size={14} />
      </div>
    </footer>
  );
};