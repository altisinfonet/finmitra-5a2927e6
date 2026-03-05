import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const StickyDownloadBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("features");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
          style={{ background: "hsl(var(--navy))", boxShadow: "0 -4px 24px rgba(0,0,0,0.25)" }}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="text-white font-bold text-sm leading-tight">FinMitra App</p>
              <p className="text-white/60 text-xs">Free Download • iOS & Android</p>
            </div>
            <Button
              variant="cta"
              size="sm"
              className="shrink-0 gap-1.5 font-bold px-5"
              onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Download size={14} />
              Download
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDownloadBar;
