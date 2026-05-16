import { useEffect, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };
const KEY = "noxa-cookie-consent";

function readPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function writePrefs(p: Prefs) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* noop */
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readPrefs();
    if (!existing) setOpen(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const onManage = () => {
      const ex = readPrefs();
      if (ex) {
        setAnalytics(ex.analytics);
        setMarketing(ex.marketing);
      }
      setManage(true);
      setOpen(true);
    };
    window.addEventListener("noxa:manage-cookies", onManage);
    return () => window.removeEventListener("noxa:manage-cookies", onManage);
  }, []);

  if (!open) return null;

  const save = (p: Prefs) => {
    writePrefs(p);
    setOpen(false);
    setManage(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:pb-6 pointer-events-none">
      <div className="mx-auto max-w-2xl pointer-events-auto rounded-3xl border border-white/10 bg-background/70 backdrop-blur-2xl backdrop-saturate-150 shadow-card p-5 sm:p-6 animate-fade-in">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-noxa flex items-center justify-center">
            <Cookie className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold tracking-tight">
                {manage ? "Gestionează cookie-urile" : "Folosim cookie-uri"}
              </h3>
              <button
                aria-label="Închide"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Folosim cookie-uri pentru a îmbunătăți experiența ta, a analiza traficul și a personaliza conținutul. Poți accepta tot sau alege ce categorii activezi. Detalii în{" "}
              <a href="/confidentialitate" className="underline hover:text-foreground">Politica de confidențialitate</a>.
            </p>

            {manage && (
              <div className="mt-4 space-y-2">
                <Row label="Strict necesare" desc="Esențiale pentru funcționarea site-ului." checked disabled />
                <Row
                  label="Analitice"
                  desc="Ne ajută să înțelegem cum este folosit site-ul."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Row
                  label="Marketing"
                  desc="Folosite pentru reclame personalizate."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {!manage && (
                <button
                  onClick={() => setManage(true)}
                  className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-2 text-xs hover:border-white/30 transition-all"
                >
                  <Settings2 className="h-3.5 w-3.5" /> Preferințe
                </button>
              )}
              <button
                onClick={() =>
                  save({ necessary: true, analytics: false, marketing: false })
                }
                className="rounded-full glass border border-white/10 px-4 py-2 text-xs hover:border-white/30 transition-all"
              >
                Doar necesare
              </button>
              {manage && (
                <button
                  onClick={() => save({ necessary: true, analytics, marketing })}
                  className="rounded-full glass border border-white/10 px-4 py-2 text-xs hover:border-white/30 transition-all"
                >
                  Salvează preferințele
                </button>
              )}
              <button
                onClick={() =>
                  save({ necessary: true, analytics: true, marketing: true })
                }
                className="ml-auto inline-flex items-center rounded-full bg-gradient-noxa px-4 py-2 text-xs font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.55_0.27_285_/_0.7)] hover:opacity-95"
              >
                Accept toate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 ${
        disabled ? "opacity-70" : "cursor-pointer hover:bg-white/[0.04]"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 accent-[oklch(0.55_0.27_285)]"
      />
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </label>
  );
}

export function openCookieManager() {
  window.dispatchEvent(new CustomEvent("noxa:manage-cookies"));
}
