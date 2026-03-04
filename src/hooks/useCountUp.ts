import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const useCountUp = (target: number, duration = 2, startOnView = true) => {
  const [count, setCount] = useState(0);
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
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, startOnView]);

  return { ref, count };
};
