import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "gdpr_consent_v1";

const GdprBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="gdpr"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 z-[90] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[calc(100%-2rem)] sm:max-w-xl"
        >
          <div className="bg-[hsl(var(--navy))] text-white rounded-xl shadow-2xl px-4 py-3 flex items-start gap-3">
            <Cookie size={18} className="text-[hsl(var(--gold-light))] mt-0.5 shrink-0" />
            <p className="text-xs leading-relaxed flex-1 text-white/90">
              We use cookies and similar technologies to improve your experience and analyse site usage. By continuing, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 text-[hsl(var(--gold-light))] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <button
                onClick={accept}
                className="text-xs font-semibold bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-white rounded-md px-3 py-1 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={dismiss}
                aria-label="Dismiss"
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GdprBanner;
