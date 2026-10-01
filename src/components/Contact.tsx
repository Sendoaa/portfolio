import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/xoevrbao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formState.name,
          email: formState.email,
          mensaje: formState.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-lg mx-auto">
            ¿Buscas un perfil técnico especializado en la Ingeniería de Software, Gestión de Proyectos y Ciberseguridad? Envíame un mensaje y te responderé lo antes posible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="glass p-8 sm:p-10 rounded-[2rem] h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Hablemos</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Si deseas ponerte en contacto conmigo para alguna consulta técnica, proyecto o simplemente para conectar profesionalmente, puedes escribirme mediante el formulario o encontrarme en mis perfiles oficiales.
              </p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <a href="https://www.linkedin.com/in/sendoa-avedillo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all group-hover:scale-110">
                    <LinkedinIcon size={24} />
                  </div>
                  <span className="font-medium text-lg">LinkedIn Profile</span>
                </a>
                
                <a href="https://github.com/Sendoaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all group-hover:scale-110">
                    <GithubIcon size={24} />
                  </div>
                  <span className="font-medium text-lg">GitHub Repository</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 sm:p-12 rounded-[2rem] relative"
          >
            {/* Success Overlay */}
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 z-20 glass rounded-[2rem] flex flex-col items-center justify-center bg-dark/80 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-accent mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400">Me pondré en contacto muy pronto.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState(prev => ({ ...prev, name: e.target.value }));
                      if(status === 'error') setStatus('idle');
                    }}
                    className={cn(
                      "w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none transition-all",
                      status === 'error' && !formState.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                    )}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState(prev => ({ ...prev, email: e.target.value }));
                      if(status === 'error') setStatus('idle');
                    }}
                    className={cn(
                      "w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none transition-all",
                      status === 'error' && !formState.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                    )}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState(prev => ({ ...prev, message: e.target.value }));
                    if(status === 'error') setStatus('idle');
                  }}
                  className={cn(
                    "w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none transition-all resize-none",
                    status === 'error' && !formState.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                  )}
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Por favor, completa todos los campos.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 w-full sm:w-auto sm:ml-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none group"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
