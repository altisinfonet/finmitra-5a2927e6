import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export const StaggerContainer = ({
  children,
  className,
  stagger = 0.1,
  threshold = 0.1,
}: StaggerContainerProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);
  return (
    <motion.div
      ref={ref}
      variants={{ ...containerVariants, visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);
