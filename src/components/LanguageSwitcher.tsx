import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

const INDIAN_LANGUAGES = [
  { code: "en", label: "English",    flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी",      flag: "🇮🇳" },
  { code: "mr", label: "मराठी",      flag: "🇮🇳" },
  { code: "gu", label: "ગુજરાતી",   flag: "🇮🇳" },
  { code: "ta", label: "தமிழ்",     flag: "🇮🇳" },
  { code: "te", label: "తెలుగు",    flag: "🇮🇳" },
  { code: "kn", label: "ಕನ್ನಡ",     flag: "🇮🇳" },
  { code: "ml", label: "മലയാളം",   flag: "🇮🇳" },
  { code: "bn", label: "বাংলা",     flag: "🇮🇳" },
  { code: "pa", label: "ਪੰਜਾਬੀ",   flag: "🇮🇳" },
  { code: "ur", label: "اردو",      flag: "🇵🇰" },
  { code: "or", label: "ଓଡ଼ିଆ",     flag: "🇮🇳" },
  { code: "as", label: "অসমীয়া",  flag: "🇮🇳" },
];

const WORLD_LANGUAGES = [
  { code: "zh-CN", label: "中文",       flag: "🇨🇳" },
  { code: "es",    label: "Español",    flag: "🇪🇸" },
  { code: "ar",    label: "العربية",    flag: "🇸🇦" },
  { code: "fr",    label: "Français",   flag: "🇫🇷" },
  { code: "pt",    label: "Português",  flag: "🇧🇷" },
  { code: "ru",    label: "Русский",    flag: "🇷🇺" },
  { code: "de",    label: "Deutsch",    flag: "🇩🇪" },
  { code: "ja",    label: "日本語",     flag: "🇯🇵" },
  { code: "ko",    label: "한국어",     flag: "🇰🇷" },
  { code: "tr",    label: "Türkçe",     flag: "🇹🇷" },
  { code: "it",    label: "Italiano",   flag: "🇮🇹" },
  { code: "id",    label: "Indonesia",  flag: "🇮🇩" },
  { code: "vi",    label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th",    label: "ภาษาไทย",   flag: "🇹🇭" },
  { code: "ms",    label: "Melayu",     flag: "🇲🇾" },
  { code: "fa",    label: "فارسی",      flag: "🇮🇷" },
  { code: "nl",    label: "Nederlands", flag: "🇳🇱" },
  { code: "pl",    label: "Polski",     flag: "🇵🇱" },
  { code: "uk",    label: "Українська", flag: "🇺🇦" },
  { code: "sw",    label: "Kiswahili",  flag: "🇰🇪" },
];

const LANGUAGES = [...INDIAN_LANGUAGES, ...WORLD_LANGUAGES];

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
      localStorage.removeItem("finmitra_lang");
      const host = location.hostname;
      const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = `googtrans=; ${expired}; path=/`;
      document.cookie = `googtrans=/en/en; ${expired}; path=/`;
      const parts = host.split(".");
      if (parts.length > 1) {
        const domain = `.${parts.slice(-2).join(".")}`;
        document.cookie = `googtrans=; ${expired}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/en; ${expired}; path=/; domain=${domain}`;
      }
      // Try live switch first, reload as fallback
      const switched = triggerGoogleTranslate("en");
      if (!switched) window.location.reload();
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

  const currentLangObj = LANGUAGES.find((l) => l.code === currentLang);
  const currentLabel = currentLangObj?.label ?? "EN";
  const currentFlag = currentLangObj?.flag;
  const isNonEnglish = currentLang !== "en";

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
          {isNonEnglish && currentFlag ? (
            <span className="notranslate text-base leading-none" translate="no">{currentFlag}</span>
          ) : (
            <Globe size={13} />
          )}
          <span className="notranslate hidden sm:inline max-w-[72px] truncate" translate="no">{currentLabel}</span>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-border bg-background shadow-lg z-[200] py-1 overflow-y-auto max-h-80">
            {/* Indian Languages */}
            <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
              🇮🇳 Indian Languages
            </p>
            {INDIAN_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`notranslate w-full text-left px-3 py-1.5 text-sm hover:bg-[hsl(var(--gold-pale))] transition-colors flex items-center gap-2 ${
                  currentLang === lang.code ? "text-[hsl(var(--gold))] font-bold" : "text-foreground/80"
                }`}
                translate="no"
              >
                <span className="notranslate text-base leading-none" translate="no">{lang.flag}</span>
                <span className="notranslate" translate="no">{lang.label}</span>
              </button>
            ))}

            {/* Divider */}
            <div className="my-1.5 mx-3 border-t border-border" />

            {/* World Languages */}
            <p className="px-3 pb-1 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
              🌍 World Languages
            </p>
            {WORLD_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`notranslate w-full text-left px-3 py-1.5 text-sm hover:bg-[hsl(var(--gold-pale))] transition-colors flex items-center gap-2 ${
                  currentLang === lang.code ? "text-[hsl(var(--gold))] font-bold" : "text-foreground/80"
                }`}
                translate="no"
              >
                <span className="notranslate text-base leading-none" translate="no">{lang.flag}</span>
                <span className="notranslate" translate="no">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
