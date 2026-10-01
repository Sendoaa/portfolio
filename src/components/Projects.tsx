import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 1,
    title: 'Dashboard de Gestión & ERP KARVE',
    category: 'Ingeniería',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Desarrollo de un Dashboard de gestión avanzado ligado de forma segura a la integración con el ERP corporativo KARVE.',
    tech: ['React', 'Node.js', 'JavaScript', 'HTML', 'SQL Server'],
    links: { live: '#', github: '#' }
  },
  {
    id: 2,
    title: 'Herramientas de Movilidad',
    category: 'Gestión',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Desarrollo e implementación de herramientas de movilidad empresarial y gestión de recursos integrando APIs REST.',
    tech: ['Java', 'Spring Boot', 'Angular'],
    links: { live: '#', github: '#' }
  },
  {
    id: 3,
    title: 'Auditoría de Bases de Datos',
    category: 'Ciberseguridad',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    description: 'Interacción y análisis profundo de protocolos de seguridad de escritura en bases de datos y creación de políticas.',
    tech: ['Ciberseguridad', 'SQL Server', 'Auditoría'],
    links: { live: '#', github: '#' }
  },
  {
    id: 4,
    title: 'Landing Pages Seguras',
    category: 'Ingeniería',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    description: 'Creación de Landing pages corporativas orientadas a la captación, aseguradas por diseño y optimizadas para rendimiento.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vue'],
    links: { live: '#', github: '#' }
  }
];

const categories = ['Todos', 'Ingeniería', 'Gestión', 'Ciberseguridad'];

export const Projects = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = projects.filter(p => filter === 'Todos' || p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos & Casos de Uso</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  filter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/25" 
                    : "glass text-slate-400 hover:text-white hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} className="group relative rounded-3xl overflow-hidden glass hover:border-primary/50 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl pointer-events-none">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-8 relative z-30 bg-dark-card/50 backdrop-blur-md border-t border-white/5 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                    <Layers size={16} />
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
