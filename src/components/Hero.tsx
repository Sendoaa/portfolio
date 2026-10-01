import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ParticlesBackground } from './ParticlesBackground';
import { TypeAnimation } from 'react-type-animation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 10 },
  },
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles */}
      <ParticlesBackground />
      


      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center sm:text-left mt-10 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Sendoa Avedillo</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white block font-mono text-4xl sm:text-6xl mb-2 text-primary">&gt;_</span>
            <div className="h-[160px] sm:h-[240px] lg:h-[220px] flex items-start justify-center sm:justify-start">
              <TypeAnimation
                sequence={[
                  3000, // Wait for the preloader to finish and slide up
                  'Ingeniería de Software',
                  2000,
                  'Gestión de Proyectos',
                  2000,
                  'Ciberseguridad',
                  2000,
                  'Arquitectura Segura',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient block"
              />
            </div>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Soy un <strong className="text-white">Ingeniero de Software y Project Manager</strong> especializado en Ciberseguridad.
            Orientado a la creación de soluciones escalables, seguras por diseño y a la optimización e integración de sistemas corporativos (ERPs).
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pointer-events-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Contactar
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            

          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 pointer-events-auto">

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} className="text-primary" />
              <span>Portugalete, España</span>
            </div>
            <div className="flex items-center gap-4 ml-0 sm:ml-auto">
              <a href="https://github.com/Sendoaa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all hover:-translate-y-1">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sendoa-avedillo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all hover:-translate-y-1">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
