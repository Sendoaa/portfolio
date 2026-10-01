import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';

import { Marquee } from './components/Marquee';

import { AuroraBackground } from './components/AuroraBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Evitar scroll mientras carga
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      
      <main className="relative min-h-screen">
        <AuroraBackground />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <div className="flex flex-col gap-10 md:gap-20 relative z-10">
          <Hero />
          <BentoGrid />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 border-t border-white/5 mt-20 relative z-10">
          <p>© {new Date().getFullYear()} - Sendoa Avedillo | Creado con React, Tailwind & Framer Motion.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
