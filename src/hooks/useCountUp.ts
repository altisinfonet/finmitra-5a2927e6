import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const useCountUp = (target: number, duration = 2, startOnView = true) => {
  const [count, setCount] = useState(0);
  const isFloat = target % 1 !== 0;
  const intTarget = isFloat ? Math.round(target * 10) : target;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (started.current) return;
    started.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = Math.floor(eased * intTarget);
      setCount(isFloat ? raw / 10 : raw);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, startOnView, intTarget, isFloat]);

  return { ref, count };
};
