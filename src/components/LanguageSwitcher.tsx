import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en",    label: "English",    flag: "🇬🇧" },
  // Indian languages
  { code: "hi",    label: "हिन्दी",      flag: "🇮🇳" },
  { code: "bn",    label: "বাংলা",       flag: "🇮🇳" },
  { code: "ta",    label: "தமிழ்",      flag: "🇮🇳" },
  { code: "te",    label: "తెలుగు",     flag: "🇮🇳" },
  { code: "mr",    label: "मराठी",      flag: "🇮🇳" },
  { code: "gu",    label: "ગુજરાતી",    flag: "🇮🇳" },
  { code: "kn",    label: "ಕನ್ನಡ",      flag: "🇮🇳" },
  { code: "ml",    label: "മലയാളം",     flag: "🇮🇳" },
  { code: "pa",    label: "ਪੰਜਾਬੀ",     flag: "🇮🇳" },
  { code: "ur",    label: "اردو",       flag: "🇮🇳" },
  // World languages
  { code: "fr",    label: "Français",   flag: "🇫🇷" },
  { code: "es",    label: "Español",    flag: "🇪🇸" },
  { code: "de",    label: "Deutsch",    flag: "🇩🇪" },
  { code: "ar",    label: "العربية",    flag: "🇸🇦" },
  { code: "zh-CN", label: "中文",        flag: "🇨🇳" },
  { code: "ja",    label: "日本語",      flag: "🇯🇵" },
  { code: "pt",    label: "Português",  flag: "🇧🇷" },
  { code: "ru",    label: "Русский",    flag: "🇷🇺" },
  { code: "ko",    label: "한국어",      flag: "🇰🇷" },
];

const triggerGoogleTranslate = (langCode: string) => {
  if (langCode === "en") {
    // Reset: remove cookie and reload
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
    window.location.reload();
    return;
  }
  // Set cookie and reload — most reliable method with Google Translate
  const val = `/en/${langCode}`;
  document.cookie = `googtrans=${val}; path=/`;
  document.cookie = `googtrans=${val}; path=/; domain=${window.location.hostname}`;
  window.location.reload();
};

const LanguageSwitcher = () => {
  const savedCode = typeof window !== "undefined" ? localStorage.getItem("fin_lang") || "en" : "en";
  const savedLang = languages.find(l => l.code === savedCode) || languages[0];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(savedLang);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (lang: typeof languages[0]) => {
    setSelected(lang);
    setOpen(false);
    triggerGoogleTranslate(lang.code);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-gold transition-colors px-2 py-1 rounded-lg hover:bg-gold/10"
        aria-label="Select language"
      >
        <Globe size={15} />
        <span className="hidden sm:inline">{selected.flag} {selected.label}</span>
        <span className="sm:hidden">{selected.flag}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-xl shadow-xl z-[200] py-1.5 max-h-80 overflow-y-auto">
          <div className="px-3 py-1 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">🇮🇳 Indian</div>
          {languages.filter(l => ["hi","bn","ta","te","mr","gu","kn","ml","pa","ur"].includes(l.code)).map(lang => (
            <button key={lang.code} onClick={() => select(lang)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2.5 hover:bg-gold/10 transition-colors ${selected.code === lang.code ? "text-gold font-semibold" : "text-foreground/80"}`}>
              <span>{lang.flag}</span><span>{lang.label}</span>
            </button>
          ))}
          <div className="px-3 py-1 mt-1 text-[10px] font-bold text-foreground/40 uppercase tracking-widest border-t border-border">🌍 World</div>
          {languages.filter(l => ["en","fr","es","de","ar","zh-CN","ja","pt","ru","ko"].includes(l.code)).map(lang => (
            <button key={lang.code} onClick={() => select(lang)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2.5 hover:bg-gold/10 transition-colors ${selected.code === lang.code ? "text-gold font-semibold" : "text-foreground/80"}`}>
              <span>{lang.flag}</span><span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
