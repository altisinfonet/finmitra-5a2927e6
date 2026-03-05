import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "bn", label: "বাংলা" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ur", label: "اردو" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "as", label: "অসমীয়া" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          opts: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          id: string
        ) => void;
      };
    };
  }
}

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const getCurrentLang = (): string => {
  const cookie = getCookie("googtrans");
  if (cookie) {
    const parts = cookie.split("/");
    return parts[parts.length - 1] || "en";
  }
  return "en";
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(getCurrentLang);
  const ref = useRef<HTMLDivElement>(null);

  // Inject Google Translate script once
  useEffect(() => {
    if (document.getElementById("gt-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google!.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "gt-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Suppress Google Translate toolbar via MutationObserver
    const observer = new MutationObserver(() => {
      // Remove injected iframes
      document.querySelectorAll(".skiptranslate iframe, #goog-gt-tt").forEach((el) => el.remove());
      // Fix body top offset Google injects
      if (document.body.style.top) document.body.style.top = "";
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = (code: string) => {
    setCurrentLang(code);
    setOpen(false);

    const setGoogCookie = (val: string) => {
      document.cookie = `googtrans=${val};path=/`;
      document.cookie = `googtrans=${val};domain=${location.hostname};path=/`;
    };

    if (code === "en") {
      setGoogCookie("/en/en");
    } else {
      setGoogCookie(`/en/${code}`);
    }
    window.location.reload();
  };

  const currentLabel = LANGUAGES.find((l) => l.code === currentLang)?.label ?? "EN";

  return (
    <>
      {/* Hidden Google Translate element (required by the API) */}
      <div id="google_translate_element" className="hidden" />

      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Change language"
          className="flex items-center gap-1 text-xs font-semibold text-foreground/70 hover:text-gold transition-colors px-2 py-1 rounded-md border border-border hover:border-gold/40 bg-transparent"
        >
          <Globe size={13} />
          <span className="hidden sm:inline">{currentLabel}</span>
          <span className="sm:hidden">🌐</span>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-white shadow-lg z-[200] py-1 overflow-hidden">
            <p className="px-3 py-1.5 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Language</p>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gold-pale transition-colors ${
                  currentLang === lang.code ? "text-gold font-bold" : "text-foreground/80"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
