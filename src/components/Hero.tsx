import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
  FaArrowDown,
} from 'react-icons/fa';

import { personalInfo } from '../data/portfolioData';
import GradientWaves from './GradientWaves/GradientWaves';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1.0}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.05}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-dark-bg/30 pointer-events-none" />


      <div className="relative z-10 max-w-4xl text-center">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-purple font-mono tracking-wider text-sm md:text-base mb-3"
        >
          Olá, eu sou
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-300 mb-6 max-w-2xl mx-auto"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mb-8 leading-relaxed"
        >
          Construindo soluções com{' '}
          <span className="text-slate-200 font-medium">
            Java, Spring Boot, React e TypeScript
          </span>
          , enquanto exploro{' '}
          <span className="text-slate-200 font-medium">
            sistemas embarcados e integração entre hardware e software
          </span>
          .
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              bg-dark-card/80
              backdrop-blur-sm
              border border-dark-border
              px-5 py-2.5
              rounded-lg
              text-slate-200
              hover:border-brand-purple
              hover:text-brand-purple
              transition-all
              text-sm
              font-medium
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              bg-dark-card/80
              backdrop-blur-sm
              border border-dark-border
              px-5 py-2.5
              rounded-lg
              text-slate-200
              hover:border-brand-purple
              hover:text-brand-purple
              transition-all
              text-sm
              font-medium
            "
          >
            <FaGithub />
            GitHub
          </a>

          {/* Currículo */}
          <a
            href="/Curriculo - Pedro Henrique Costa - Dev .pdf"
            download
            className="
              flex items-center gap-2
              bg-dark-card/80
              backdrop-blur-sm
              border border-dark-border
              px-5 py-2.5
              rounded-lg
              text-slate-200
              hover:border-brand-purple
              hover:text-brand-purple
              transition-all
              text-sm
              font-medium
            "
          >
            <FaFileDownload />
            Currículo
          </a>

          {/* Contato */}
          <a
            href="#contact"
            className="
              flex items-center gap-2
              bg-brand-purple
              hover:bg-brand-hover
              px-6 py-2.5
              rounded-lg
              text-white
              transition-all
              text-sm
              font-medium
              shadow-lg
              shadow-brand-purple/20
            "
          >
            <FaEnvelope />
            Contato
          </a>
        </motion.div>


        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="
    inline-flex
    items-center
    gap-3
    mt-12
    px-5
    py-2.5
    rounded-lg
    bg-dark-card/70
    backdrop-blur-md
    border
    border-dark-border/80
    text-sm
    font-medium
    text-slate-300
    shadow-lg
    shadow-black/10
    hover:border-brand-purple/60
    hover:text-white
    hover:bg-dark-card/90
    transition-all
    duration-300
    group
  "
        >
          <span>Ver meus projetos</span>

          <FaArrowDown
            size={11}
            className="
      text-brand-purple
      group-hover:translate-y-1
      transition-transform
      duration-300
    "
          />
        </motion.a>
      </div>
    </section>
  );
};