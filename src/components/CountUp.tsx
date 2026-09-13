import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number; // duration in seconds
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  decimals = 0,
  duration = 1.6,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const totalDurationMs = duration * 1000;

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / totalDurationMs, 1);
            // Ease out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOut * end;

            setValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setValue(end);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};
