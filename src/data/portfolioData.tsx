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
  formation: 'Minha formação combina hardware e software, e meus projetos e experiências práticas têm me permitido desenvolver aplicações utilizando Java, Spring Boot, React e TypeScript, além de trabalhar com C++, Arduino, PostgreSQL e Docker.',
  lookingFor: 'Busco oportunidades de estágio em desenvolvimento de software onde possa evoluir tecnicamente, contribuir com projetos reais e transformar conhecimento em soluções eficientes. Também tenho interesse na interseção entre tecnologia e saúde, especialmente em HealthTech e neurotecnologia.',
  activity: 'Também atuo no Start_Engenharias, onde ministro atividades de programação e sistemas embarcados para estudantes do ensino médio, experiência que fortaleceu minhas habilidades de comunicação, trabalho em equipe e resolução de problemas.',
  linkedin: 'https://www.linkedin.com/in/pedrqca/',
  github: 'https://github.com/pedrqca',
  email: 'phcosta@gec.inatel.br', 
};

export const experiences = [
  {
    period: '2023 — Atual',
    role: 'Bolsista / Monitor de Programação',
    company: 'Start_Engenharias — Inatel',

    activities: [
      'Ministração de atividades de programação em C++ e Arduino para estudantes do ensino médio.',
      'Montagem de circuitos eletrônicos e desenvolvimento de atividades práticas envolvendo sistemas embarcados.',
      'Preparação de materiais, organização dos alunos em grupos e acompanhamento das atividades.',
      'Manutenção e verificação dos componentes eletrônicos utilizados durante as atividades.',
      'Colaboração com outros bolsistas na preparação e execução das aulas e competições.',
    ],

    technologies: [
      'C++',
      'Arduino',
      'Programação',
      'Sistemas Embarcados',
      'Circuitos Eletrônicos',
    ],
  },
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

export const educationList = [
  {
    institution: 'Instituto Nacional de Telecomunicações — Inatel',
    degree: 'Engenharia de Computação',
    period: '2022 — Atual',
  },
  {
    institution: 'FIAP',
    degree: 'Análise e Desenvolvimento de Sistemas',
    period: '2025 — Atual',
  },
];

export const languages = [
  'Português — Nativo',
  'Inglês — Intermediário / Avançado',
];