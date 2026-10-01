import { motion } from 'framer-motion';

export const Marquee = () => {
  const text = "SOFTWARE ENGINEER ✦ PROJECT MANAGER ✦ CIBERSEGURIDAD ✦ ";
  
  return (
    <div className="w-full bg-primary/5 border-y border-white/5 py-4 overflow-hidden flex whitespace-nowrap relative z-10">
      <motion.div
        className="flex items-center text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 opacity-20 uppercase tracking-widest min-w-max"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        <div className="flex px-4">{text}{text}{text}{text}</div>
        <div className="flex px-4">{text}{text}{text}{text}</div>
      </motion.div>
    </div>
  );
};
