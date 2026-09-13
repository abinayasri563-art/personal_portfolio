import React from 'react';
import { motion } from 'motion/react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none"
    >
      {/* Slow floating subtle warm gold aura in top right */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C9A227]/[0.035] blur-[120px]"
      />

      {/* Slow floating deep forest aura in center left */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 45, -30, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] -left-36 w-[650px] h-[650px] rounded-full bg-[#063F3A]/[0.03] blur-[130px]"
      />

      {/* Slow floating ambient gold aura near bottom right */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-[10%] w-[550px] h-[550px] rounded-full bg-[#C9A227]/[0.025] blur-[110px]"
      />
    </div>
  );
};
