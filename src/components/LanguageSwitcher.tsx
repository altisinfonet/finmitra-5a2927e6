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
    doGTranslate?: (lang: string) => void;
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

/** Read current lang — localStorage first, then cookie fallback */
const getCurrentLang = (): string => {
  const stored = localStorage.getItem("finmitra_lang");
  if (stored) return stored;
  const match = document.cookie.match(/(?:^|;)\s*googtrans=\/[a-z-]+\/([a-z-]+)/);
  return match ? match[1] : "en";
};

/** Trigger Google Translate via the select element it injects */
const triggerGoogleTranslate = (code: string) => {
  // Try the select element approach (most reliable)
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (select) {
    select.value = code;
    select.dispatchEvent(new Event("change"));
    return true;
  }
  return false;
};

/** Set googtrans cookie on both root path and domain */
const setGoogCookie = (val: string) => {
  const host = location.hostname;
  document.cookie = `googtrans=${val};path=/`;
  const parts = host.split(".");
  if (parts.length > 1) {
    document.cookie = `googtrans=${val};path=/;domain=.${parts.slice(-2).join(".")}`;
  }
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>(getCurrentLang);
  const ref = useRef<HTMLDivElement>(null);

  // Inject Google Translate script once + suppress toolbar
  useEffect(() => {
    // Suppress toolbar via CSS injection
    const style = document.createElement("style");
    style.id = "gt-suppress";
    style.textContent = `
      .goog-te-banner-frame, .goog-te-balloon-frame, #goog-gt-tt,
      .skiptranslate > iframe { display:none!important; visibility:hidden!important; }
      body { top:0!important; }
      .goog-te-gadget { display:none!important; }
    `;
    if (!document.getElementById("gt-suppress")) document.head.appendChild(style);

    if (document.getElementById("gt-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
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
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Kill injected toolbar elements
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll(".skiptranslate iframe, #goog-gt-tt, .goog-te-banner-frame")
        .forEach((el) => (el as HTMLElement).style.setProperty("display", "none", "important"));
      if (document.body.style.top) document.body.style.removeProperty("top");
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });
    return () => mo.disconnect();
  }, []);

  // Close on outside click
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

    localStorage.setItem("finmitra_lang", code);

    if (code === "en") {
      // Restore original language: clear cookie + localStorage and reload
      localStorage.removeItem("finmitra_lang");
      const host = location.hostname;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      const parts = host.split(".");
      if (parts.length > 1) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${parts.slice(-2).join(".")}`;
      }
      window.location.reload();
      return;
    }

    // Try live switching via the hidden select element
    const switched = triggerGoogleTranslate(code);
    if (!switched) {
      // Fallback: set cookie and reload
      setGoogCookie(`/en/${code}`);
      window.location.reload();
    }
  };

  const currentLabel = LANGUAGES.find((l) => l.code === currentLang)?.label ?? "EN";

  return (
    <>
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Change language"
          className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 hover:text-gold transition-colors px-2 py-1 rounded-md border border-border hover:border-gold/40 bg-transparent"
        >
          <Globe size={13} />
          <span className="hidden sm:inline max-w-[72px] truncate">{currentLabel}</span>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-white shadow-lg z-[200] py-1 overflow-y-auto max-h-72">
            <p className="px-3 py-1.5 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
              Language
            </p>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-[hsl(var(--gold-pale))] transition-colors ${
                  currentLang === lang.code
                    ? "text-[hsl(var(--gold))] font-bold"
                    : "text-foreground/80"
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
