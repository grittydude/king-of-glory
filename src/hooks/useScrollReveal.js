import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean indicating whether the element
 * has entered the viewport. Useful for triggering CSS animations.
 */
export default function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '-40px', once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
