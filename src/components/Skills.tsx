import { motion } from 'framer-motion';

const skills = [
  { category: 'Gestión & Metodologías', items: ['Project Management', 'Metodologías Ágiles (Scrum)', 'Liderazgo técnico', 'Análisis de requisitos', 'Estimación técnica'] },
  { category: 'Backend & Arquitectura', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Python', 'PHP', 'Laravel'] },
  { category: 'Frontend', items: ['JavaScript', 'Angular', 'Vue', 'HTML', 'CSS'] },
  { category: 'Infraestructura & BD', items: ['SQL', 'Sybase', 'Docker', 'Integración ERPs (KARVE)'] },
  { category: 'Otros', items: ['Ciberseguridad', 'WordPress'] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 }
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Competencias & Habilidades</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {skillGroup.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skillGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={pillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
