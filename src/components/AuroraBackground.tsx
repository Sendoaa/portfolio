import { motion } from 'framer-motion';

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {/* Blobs de Aurora */}
      <motion.div
        animate={{
          x: ["0vw", "30vw", "-10vw", "0vw"],
          y: ["0vh", "20vh", "-20vh", "0vh"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] rounded-full bg-primary/10 blur-[100px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: ["0vw", "-30vw", "10vw", "0vw"],
          y: ["0vh", "-20vh", "20vh", "0vh"],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] rounded-full bg-secondary/10 blur-[100px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: ["0vw", "20vw", "-20vw", "0vw"],
          y: ["0vh", "-30vh", "10vh", "0vh"],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] rounded-full bg-accent/10 blur-[100px] mix-blend-screen"
      />

      {/* Ruido Estático opcional muy leve encima de la aurora para textura */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
};
