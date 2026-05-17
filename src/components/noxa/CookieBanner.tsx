import { useEffect, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const KEY = "noxa-cookie-consent";

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function writePrefs(p: Prefs) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(KEY, JSON.stringify(p));
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

    if (!existing) {
      setOpen(true);
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
  }, []);

  const acceptAll = () => {
    writePrefs({
      necessary: true,
      analytics: true,
      marketing: true,
    });

    setOpen(false);
  };

  const saveSelected = () => {
    writePrefs({
      necessary: true,
      analytics,
      marketing,
    });

    setOpen(false);
    setManage(false);
  };

  const rejectOptional = () => {
    writePrefs({
      necessary: true,
      analytics: false,
      marketing: false,
    });

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="rounded-xl bg-blue-500/10 p-3">
              <Cookie className="h-6 w-6 text-blue-400" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Preferințe Cookies</h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Folosim cookies pentru a îmbunătăți experiența ta pe site, pentru analiză și pentru funcționalități
                esențiale.
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {manage && (
          <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-white">Cookies necesare</h4>

                <p className="text-sm text-white/60">Necesare pentru funcționarea site-ului.</p>
              </div>

              <div className="text-sm text-green-400">Mereu active</div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-white">Analytics</h4>

                <p className="text-sm text-white/60">Ne ajută să înțelegem cum este utilizat site-ul.</p>
              </div>

              <button
                onClick={() => setAnalytics(!analytics)}
                className={`h-6 w-11 rounded-full transition ${analytics ? "bg-blue-500" : "bg-white/20"}`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition ${
                    analytics ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-white">Marketing</h4>

                <p className="text-sm text-white/60">Pentru reclame și conținut personalizat.</p>
              </div>

              <button
                onClick={() => setMarketing(!marketing)}
                className={`h-6 w-11 rounded-full transition ${marketing ? "bg-blue-500" : "bg-white/20"}`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition ${
                    marketing ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={acceptAll}
            className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            Accept toate
          </button>

          <button
            onClick={rejectOptional}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Refuz opționale
          </button>

          <button
            onClick={() => setManage(!manage)}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              <Settings2 className="h-4 w-4" />
              Gestionează
            </span>
          </button>

          {manage && (
            <button
              onClick={saveSelected}
              className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
            >
              Salvează preferințele
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
