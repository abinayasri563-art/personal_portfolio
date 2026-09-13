import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const MouseGlow: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor tracking
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    // Disable on touch devices and mobile screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isTouch && isFinePointer && !prefersReducedMotion) {
      setIsEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
      className="pointer-events-none fixed top-0 left-0 z-30 w-[420px] h-[420px] rounded-full blur-3xl opacity-70"
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.06)_0%,rgba(6,63,58,0.035)_40%,transparent_70%)]" />
    </motion.div>
  );
};
