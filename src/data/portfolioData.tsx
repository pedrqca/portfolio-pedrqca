import type {
  EducationItem,
  ExperienceItem,
  Project,
  SkillCategory,
} from '../types';
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

export const experiences: ExperienceItem[] = [
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
    title: "Aura Fotografia",
    description: "Site institucional para uma marca de fotografia, desenvolvido com React e JavaScript. Possui portfólio organizado por categorias, galerias com visualização ampliada de imagens, apresentação de serviços fotográficos, design responsivo e integração com WhatsApp para contato com clientes.",
    technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "React Router", "Lucide React"],
    demoUrl: "https://aura-photography.vercel.app/",
    githubUrl: "",
    isFeatured: true
  },
  {
    title: "CLOTHESTORE",
    description: "Plataforma de e-commerce streetwear full-stack desenvolvida com React e TypeScript. Possui arquitetura client-server com API REST em Fastify, persistência de dados em PostgreSQL utilizando Prisma ORM, integração entre frontend e backend e deploy em ambiente de produção.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Fastify", "Prisma", "PostgreSQL"],
    demoUrl: "https://clothestore-phi.vercel.app/",
    githubUrl: "https://github.com/pedrqca/CLOTHESTORE",
    isFeatured: true
  },
  {
    title: "ToDq List",
    description: "Aplicativo moderno e responsivo de gerenciamento de tarefas desenvolvido com React e TypeScript. Conta com suporte completo a Dark Mode, sistema de categorias customizáveis, níveis de prioridade, calendário interativo para controle de prazos e persistência de dados via LocalStorage.",
    technologies: ["React", "TypeScript", "Vite", "CSS3", "LocalStorage"],
    demoUrl: "https://todq-list.vercel.app/",
    isFeatured: true
  },
  {
    title: 'Sistema de Controle e Ranking para Competições Educacionais',
    description: 'Sistema web de alta performance customizado para gerenciar desafios acadêmicos em tempo real. Possui inteligência embarcada para critérios automáticos de desempate por tempo/pontuação e exportação otimizada de relatórios.',
    technologies: ['React', 'JavaScript', 'Vite', 'CSS', 'Local Storage'],
    demoUrl: 'https://modulo-start-painel.vercel.app/',
    isFeatured: false
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