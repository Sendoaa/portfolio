import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        scrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          'relative overflow-hidden flex items-center justify-between rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-6',
          scrolled ? 'py-3 glass shadow-lg shadow-black/20 translate-y-0' : 'py-5 bg-white/[0.02] border border-white/5 backdrop-blur-sm translate-y-2'
        )}>
          {/* Sweeping Light Animation */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '300%' }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent skew-x-12"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3 group">
            <motion.div 
              animate={{ 
                boxShadow: ["0px 0px 4px rgba(59,130,246,0.3)", "0px 0px 16px rgba(59,130,246,0.8)", "0px 0px 4px rgba(59,130,246,0.3)"],
                borderColor: ["rgba(59,130,246,0.3)", "rgba(59,130,246,1)", "rgba(59,130,246,0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border"
            >
              {'{S}'}
            </motion.div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
              Sendoa<span className="text-primary">Avedillo</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="relative z-10 hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20 backdrop-blur-md"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-10 md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center font-medium shadow-lg"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
