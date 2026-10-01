import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The total animation takes around 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Give it time to slide up before unmounting
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outline Drawing Animation */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="gradPreloader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Box Outline */}
              <motion.rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="20"
                fill="none"
                stroke="url(#gradPreloader)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Text S Outline */}
              <motion.text
                x="50"
                y="52"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                fontSize="50"
                fontWeight="800"
                fill="none"
                stroke="url(#gradPreloader)"
                strokeWidth="1.5"
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="-1"
                initial={{ pathLength: 0, fill: "rgba(59,130,246,0)" }}
                animate={{ pathLength: 1, fill: "rgba(59,130,246,1)" }}
                transition={{ 
                  pathLength: { duration: 1.5, ease: "easeInOut" },
                  fill: { duration: 0.8, delay: 1.5, ease: "easeIn" }
                }}
              >
                {'{S}'}
              </motion.text>
            </motion.svg>
            
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
              className="absolute -bottom-12 text-slate-400 font-mono text-sm tracking-widest"
            >
              CARGANDO...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
