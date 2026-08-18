import { Project, ExperienceItem, SkillCategory, EducationItem } from '../types';
import { IconType } from 'react-icons';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMicrochip,
} from 'react-icons/fa';

export const personalInfo = {
  name: 'Pedro Henrique Oliveira Costa',
  title: 'Estudante de Engenharia de Computação | Desenvolvedor de Software',
  location: 'Santa Rita do Sapucaí - MG',
  bio: 'Sou estudante de Engenharia de Computação no Inatel e de Análise e Desenvolvimento de Sistemas na FIAP, com interesse em desenvolvimento de software, sistemas embarcados e na aplicação da tecnologia para resolver problemas reais.',
  formation: 'Minha formação combina conhecimentos de hardware e software, enquanto meus projetos e experiências práticas me permitem trabalhar com tecnologias como Java, Spring Boot, React, TypeScript, C++, Arduino, PostgreSQL e Docker.',
  activity: 'Também atuo no Start_Engenharias, onde ministro atividades de programação e sistemas embarcados para estudantes do ensino médio, experiência que fortaleceu minhas habilidades de comunicação, trabalho em equipe e resolução de problemas.',
  lookingFor: 'Atualmente, busco oportunidades de estágio em desenvolvimento de software, onde possa continuar evoluindo tecnicamente, contribuir com projetos reais e transformar conhecimento em soluções eficientes. Tenho também especial interesse pela interseção entre tecnologia e saúde, especialmente em HealthTech e neurotecnologia.',
  linkedin: 'https://www.linkedin.com/in/pedrqca/',
  github: 'https://github.com/pedrqca',
  email: 'phcosta@gec.inatel.br', 
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Bolsista',
    company: 'Start_Inatel:Telecomunicações',
    period: '2023 - Atual',
    activities: [
      'Desenvolvimento de exercícios práticos e algoritmos utilizando C++ e ecossistema Arduino.',
      'Ensino de lógica de programação orientada a resolução de problemas para novos alunos.',
      'Montagem e validação de circuitos eletrônicos analógicos e digitais em laboratório.',
      'Facilitador em oficinas educacionais tecnológicas promovidas pela instituição.',
      'Aprimoramento contínuo de soft skills focadas em comunicação técnica e liderança de equipes.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Sistema de Controle e Ranking para Competições Educacionais',
    description: 'Sistema web de alta performance customizado para gerenciar desafios acadêmicos em tempo real. Possui inteligência embarcada para critérios automáticos de desempate por tempo/pontuação e exportação otimizada de relatórios.',
    technologies: ['React', 'JavaScript', 'Vite', 'CSS', 'Local Storage'],
    demoUrl: 'https://modulo-start-painel.vercel.app/',
    isFeatured: true
  },
  {
    title: 'Game Hub Desktop',
    description: 'Plataforma integrada de jogos de estratégia clássicos desenvolvida sob rigorosos padrões de arquitetura e Engenharia de Software. Implementa jogos como Batalha Naval e Campo Minado.',
    technologies: ['Java', 'JavaFX', 'Maven'],
    githubUrl: 'https://github.com/C14-INATEL/Grupo-2-Desenvolvimento-completo',
    isFeatured: false
  }
];

export const skillCategories: {
  category: string;
  skills: string[];
  icon: IconType;
}[] = [
  {
    category: 'Frontend',
    icon: FaCode,
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },

  {
    category: 'Backend',
    icon: FaServer,
    skills: [
      'Java',
      'Spring Boot',
      'Python',
      'REST APIs',
    ],
  },

  {
    category: 'Banco de Dados',
    icon: FaDatabase,
    skills: [
      'PostgreSQL',
      'SQL',
    ],
  },

  {
    category: 'DevOps & Ferramentas',
    icon: FaTools,
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Maven',
      'Vite',
    ],
  },

  {
    category: 'Sistemas Embarcados',
    icon: FaMicrochip,
    skills: [
      'Arduino',
      'C++',
      'Circuitos Eletrônicos',
      'Sistemas Embarcados',
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: 'Inatel',
    degree: 'Graduação em Engenharia de Computação'
  },
  {
    institution: 'FIAP',
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas'
  }
];

export const languages = ['Português (Nativo)', 'Inglês (Intermediário / Avançado)'];