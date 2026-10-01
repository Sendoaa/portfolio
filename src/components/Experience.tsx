import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

const experiences = [
  {
    title: 'Ingeniero de Software y Project Manager',
    company: 'Shackleton Innovation',
    date: 'Sep 2026 - Actualidad',
    description: 'Gestión de proyectos de software, planificación de sprints (Scrum), desarrollo e implementación de herramientas de movilidad, y análisis de protocolos de seguridad en bases de datos.',
    type: 'work',
  },
  {
    title: 'Técnico en Ciberseguridad y Des. Frontend',
    company: 'Shackleton Innovation',
    date: 'Mar 2026 - Ago 2026',
    description: 'Auditorías de Ciberseguridad, creación de Landing pages de la empresa y diseño de políticas de seguridad.',
    type: 'work',
  },
  {
    title: 'Ciberseguridad en entornos de TI',
    company: 'CIFP TXURDINAGA LHII',
    date: '2025 - 2026',
    description: 'Especialización en auditorías, políticas de seguridad y protección de entornos informáticos.',
    type: 'edu',
  },
  {
    title: 'Personal de salón de juego',
    company: 'Grupo RetaBet',
    date: 'Jun 2025 - Sep 2025',
    description: 'Resolución de incidencias técnicas en sala y atención directa al cliente.',
    type: 'work',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Grupo SCA',
    date: 'Ene 2025 - May 2025',
    description: 'Desarrollo de aplicaciones con Angular y Java, además de integración de APIs REST.',
    type: 'work',
  },
  {
    title: 'Técnico Superior en DAW',
    company: 'CIFP TXURDINAGA LHII',
    date: '2023 - 2025',
    description: 'Desarrollo de Aplicaciones Web (DAW) con enfoque en tecnologías de vanguardia.',
    type: 'edu',
  },
  {
    title: 'Técnico Informático',
    company: 'VERSIA SERVICIOS DISTRIBUIDOS',
    date: 'Mar 2023 - Sep 2023',
    description: 'Mantenimiento de aparatos informáticos y configuración de servicios en equipos corporativos.',
    type: 'work',
  },
  {
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    company: 'CIFP San Jorge LHIII',
    date: '2021 - 2023',
    description: 'Formación en instalación, configuración y reparación de redes y equipos.',
    type: 'edu',
  },
  {
    title: 'Técnico Informático',
    company: 'MAESTRA EMILIA ZUZA BRUN',
    date: 'Abr 2022 - Jun 2022',
    description: 'Instalación y configuración de redes informáticas, reparación de equipos y configuración de servicios.',
    type: 'work',
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia & Educación</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full glass flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-primary/50">
                  {exp.type === 'work' ? <Briefcase size={18} className="text-primary" /> : <GraduationCap size={18} className="text-secondary" />}
                </div>

                {/* Content Area */}
                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col md:px-8">
                  <div className={cn(
                    "glass p-6 rounded-2xl relative group hover:border-primary/50 transition-colors duration-300",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <div className={cn(
                      "flex items-center gap-2 mb-3 text-sm font-medium text-primary",
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    )}>
                      <Calendar size={14} />
                      {exp.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-md text-slate-300 mb-3">{exp.company}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
