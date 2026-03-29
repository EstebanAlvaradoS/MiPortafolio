import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-slate-950/80 border-b border-slate-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2 group">
          <img src={`${import.meta.env.BASE_URL}imgs/Esteba_Logo.png`} alt="Logo" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-bold text-xl tracking-tight hidden sm:block">ESTEBAN <span className="text-sky-400">ALVARADO</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm hover:text-sky-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-xs uppercase tracking-widest px-6 py-2">
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-8 flex flex-col gap-6 md:hidden animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-sky-400 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
