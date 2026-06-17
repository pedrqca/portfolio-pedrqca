import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-dark-border py-8 text-center text-xs font-mono text-slate-500">
      <p>© {new Date().getFullYear()} {personalInfo.name}</p>
      <p className="mt-1">Construído com React, TypeScript, Vite e Tailwind CSS.</p>
    </footer>
  );
};