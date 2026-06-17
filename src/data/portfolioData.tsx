import { Project, ExperienceItem, SkillCategory, EducationItem } from '../types';

export const personalInfo = {
  name: 'Pedro Henrique Oliveira Costa',
  title: 'Estudante de Engenharia de Computação | Desenvolvedor de Software',
  location: 'Santa Rita do Sapucaí - MG',
  bio: 'Estudante focado em engenharia de hardware e software, aplicando conceitos avançados de computação no desenvolvimento de aplicações web robustas, sistemas embarcados e arquiteturas de software modernas.',
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

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend & Sistemas',
    skills: ['Java', 'Python', 'C++', 'Estruturas de Dados']
  },
  {
    category: 'Ferramentas & Hardware',
    skills: ['Git', 'GitHub', 'Maven', 'Arduino', 'Circuitos Eletrônicos']
  }
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