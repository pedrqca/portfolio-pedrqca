import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Sobre', href: '#about', number: '01.' },
  { label: 'Experiência', href: '#experience', number: '02.' },
  { label: 'Projetos', href: '#projects', number: '03.' },
  { label: 'Habilidades', href: '#skills', number: '04.' },
  { label: 'Contato', href: '#contact', number: '05.' },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50">

      {/* Navbar Card */}
      <div
        className="
          bg-dark-card/70
          backdrop-blur-xl
          border border-dark-border/70
          rounded-2xl
          shadow-xl shadow-black/10
        "
      >
        <div className="px-5 md:px-6 h-14 md:h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="
              text-lg
              font-mono
              font-bold
              tracking-tight
              text-white
              hover:opacity-80
              transition-opacity
            "
          >
            <span className="text-brand-purple">&lt;/</span>
            pedrqca
            <span className="text-brand-purple">&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-300">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  hover:text-white
                  transition-colors
                "
              >
                <span className="text-brand-purple font-mono text-[11px]">
                  {item.number}
                </span>

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
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-slate-300
              hover:text-brand-purple
              transition-colors
            "
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className="
              md:hidden
              border-t
              border-dark-border/70
              bg-dark-bg/30
              backdrop-blur-xl
              rounded-b-2xl
            "
          >
            <div className="flex flex-col px-5 py-3">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    gap-3
                    py-3
                    text-sm
                    text-slate-300
                    hover:text-white
                    transition-colors
                  "
                >
                  <span className="text-brand-purple font-mono text-xs">
                    {item.number}
                  </span>

                  {item.label}
                </a>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};