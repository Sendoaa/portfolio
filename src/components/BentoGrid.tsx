import { motion } from 'framer-motion';
import { MapPin, Code2, ShieldCheck, User2, Network } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { cn } from '../lib/utils';

const BentoCard = ({ className, children, delay = 0 }: { className?: string, children: React.ReactNode, delay?: number }) => (
  <TiltCard delay={delay} className={cn('glass rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden', className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </TiltCard>
);

export const BentoGrid = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {/* Bio - Span 2 columns, 2 rows */}
          <BentoCard className="md:col-span-2 md:row-span-2">
            <User2 className="w-8 h-8 text-secondary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ingeniería & Gestión</h3>
            <p className="text-slate-400 leading-relaxed text-lg flex-1">
              Perfil técnico especializado en <strong className="text-white font-medium">Ingeniería de Software</strong>, <strong className="text-white font-medium">Gestión de Proyectos</strong> y <strong className="text-white font-medium">Ciberseguridad</strong>.
              <br /><br />
              Mi trabajo está orientado a la creación de soluciones escalables, aseguradas por diseño, prestando especial atención a la optimización e integración de sistemas corporativos complejos como los ERPs (ej. KARVE).
              <br /><br />
              Cuento con experiencia en liderazgo técnico, metodologías Ágiles (Scrum) y estimación de proyectos, asegurando que los desarrollos cumplan siempre con los requisitos de negocio y estándares de seguridad.
            </p>
          </BentoCard>

          {/* Location & Languages */}
          <BentoCard delay={0.1} className="md:col-span-1 md:row-span-1 group hover:border-accent/50">
            <MapPin className="w-8 h-8 text-accent mb-auto" />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white mb-1">Portugalete</h3>
              <p className="text-slate-400 text-sm mb-3">Bizkaia, España</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10">🇪🇸 Nativo</span>
                <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10">🇬🇧 Intermedio</span>
                <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10">Euskera B2</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
          </BentoCard>

          {/* Specialization */}
          <BentoCard delay={0.2} className="md:col-span-1 lg:col-span-1 md:row-span-1">
            <ShieldCheck className="w-8 h-8 text-primary mb-auto" />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white mb-2">Especialidad</h3>
              <div className="flex flex-wrap gap-2">
                {['Project Management', 'Ingeniería', 'Scrum', 'Ciberseguridad'].map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-300 border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Interactive Glob / Tech */}
          <BentoCard delay={0.3} className="md:col-span-2 lg:col-span-2 md:row-span-1 overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
              <Code2 className="w-8 h-8 text-white mb-4" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Arquitectura e Infraestructura</h3>
                <p className="text-slate-400">Integración de ERPs, Bases de datos y despliegue con Docker.</p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 blur-[64px] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
            <Network className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-white/10 group-hover:rotate-12 transition-all duration-700" />
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
