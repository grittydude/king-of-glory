import { useState, useEffect, useRef } from 'react';

export default function useCounter(target, options = {}) {
  const { duration = 2000, easing = 'easeOut' } = options;
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = easing === 'easeOut' ? 1 - Math.pow(1 - progress, 3) : progress;

            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, easing]);

  return { ref, count };
}
