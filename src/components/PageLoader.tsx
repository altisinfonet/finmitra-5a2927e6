import { motion } from "framer-motion";

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
  >
    {/* Spinning ring */}
    <div className="relative w-12 h-12">
      <motion.span
        className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[hsl(var(--gold))] border-r-[hsl(var(--gold-light))]"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      <span className="absolute inset-[6px] rounded-full border-[2px] border-transparent border-b-[hsl(var(--navy))] opacity-40"
        style={{ animation: "spin 1.2s linear infinite reverse" }}
      />
    </div>

    {/* Skeleton bars */}
    <div className="mt-8 flex flex-col items-center gap-2 w-48">
      {[80, 100, 64].map((w, i) => (
        <motion.div
          key={i}
          className="h-2.5 rounded-full bg-[hsl(var(--border))]"
          style={{ width: `${w}%` }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  </motion.div>
);

export default PageLoader;
