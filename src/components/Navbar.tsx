import React, { useEffect, useState } from 'react';
import {
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaCode,
  FaEnvelope,
} from 'react-icons/fa';

const navItems = [
  {
    label: 'Sobre',
    href: '#about',
    icon: FaUser,
  },
  {
    label: 'Experiência',
    href: '#experience',
    icon: FaBriefcase,
  },
  {
    label: 'Projetos',
    href: '#projects',
    icon: FaFolderOpen,
  },
  {
    label: 'Habilidades',
    href: '#skills',
    icon: FaCode,
  },
  {
    label: 'Contato',
    href: '#contact',
    icon: FaEnvelope,
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <nav
        className={`
          hidden md:block

          fixed
          top-5
          left-1/2
          -translate-x-1/2

          w-[calc(100%-2rem)]
          max-w-5xl

          z-50

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            scrolled
              ? `
                -translate-y-28
                opacity-0
                scale-[0.96]
                pointer-events-none
              `
              : `
                translate-y-0
                opacity-100
                scale-100
              `
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between

            bg-dark-card/75
            backdrop-blur-2xl

            border
            border-white/10

            rounded-2xl

            shadow-2xl
            shadow-black/20

            px-5
            h-16
          "
        >
          {/* Logo */}

          <a
            href="#hero"
            aria-label="Ir para o início"
            className="
              text-lg
              font-mono
              font-bold
              tracking-tight
              hover:opacity-80
              transition-opacity
            "
          >
            <span className="text-brand-purple">&lt;</span>
            <span className="text-white">P</span>
            <span className="text-brand-purple">/&gt;</span>
          </a>

          {/* Navegação */}

          <div
            className="
              flex
              items-center
              gap-6
              lg:gap-7
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2

                    text-sm
                    font-medium
                    text-slate-300

                    hover:text-white
                    transition-colors
                  "
                >
                  <Icon
                    size={14}
                    className="
                      text-slate-400
                      group-hover:text-brand-purple
                      transition-colors
                    "
                  />

                  <span className="relative">
                    {item.label}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1

                        w-0
                        h-px

                        bg-brand-purple

                        group-hover:w-full

                        transition-all
                        duration-300
                      "
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <nav
        className={`
          fixed
          bottom-5
          left-1/2
          -translate-x-1/2

          z-50

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            scrolled
              ? `
                translate-y-0
                opacity-100
                scale-100
              `
              : `
                translate-y-28
                opacity-0
                scale-[0.9]
                pointer-events-none
              `
          }
        `}
      >
        <div
          className="
            flex
            items-center
            gap-1

            bg-dark-card/80
            backdrop-blur-2xl

            border
            border-white/10

            rounded-full

            px-2
            py-2

            shadow-2xl
            shadow-black/30
          "
        >
          {/* Logo */}

          <a
            href="#hero"
            aria-label="Ir para o início"
            className="
              flex
              items-center
              justify-center

              w-10
              h-10

              rounded-full

              bg-brand-purple/10

              hover:bg-brand-purple/20

              transition-all
              duration-300
            "
          >
            <span className="font-mono font-bold text-sm">
              <span className="text-brand-purple">&lt;</span>
              <span className="text-white">P</span>
              <span className="text-brand-purple">/&gt;</span>
            </span>
          </a>

          {/* Ícones */}

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="
                  group
                  relative

                  flex
                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-full

                  text-slate-400

                  hover:text-white
                  hover:bg-white/10

                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={16}
                  className="
                    group-hover:text-brand-purple
                    group-hover:scale-110

                    transition-all
                    duration-300
                  "
                />

                {/* Tooltip */}

                <span
                  className="
                    pointer-events-none

                    absolute
                    bottom-full
                    left-1/2
                    -translate-x-1/2

                    mb-3

                    whitespace-nowrap

                    rounded-lg

                    border
                    border-white/10

                    bg-dark-card/95
                    backdrop-blur-xl

                    px-3
                    py-1.5

                    text-[11px]
                    font-medium
                    text-white

                    opacity-0
                    translate-y-1

                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all
                    duration-200
                  "
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};