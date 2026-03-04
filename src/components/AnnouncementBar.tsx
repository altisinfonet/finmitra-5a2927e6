import { useState } from "react";
import { X, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  onDismiss: () => void;
}

const AnnouncementBar = ({ onDismiss }: AnnouncementBarProps) => (
  <div className="fixed top-0 left-0 right-0 z-[60] bg-navy text-white text-xs font-semibold flex items-center justify-center gap-2 px-8 py-2 text-center">
    <Sparkles size={13} className="text-[hsl(var(--gold-light))] shrink-0" />
    <span>
      🎉 Start your <span className="text-[hsl(var(--gold-light))]">14-day free trial</span> — no credit card required.{" "}
      <a href="/#download" className="underline underline-offset-2 hover:text-[hsl(var(--gold-light))] transition-colors">
        Download the app →
      </a>
    </span>
    <button
      onClick={onDismiss}
      aria-label="Dismiss announcement"
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
    >
      <X size={14} />
    </button>
  </div>
);

export default AnnouncementBar;
