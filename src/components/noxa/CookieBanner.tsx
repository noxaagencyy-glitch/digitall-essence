import { useEffect, useState } from "react";

const KEY = "noxa-cookie-consent";

export function openCookieManager() {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new Event("open-cookie-manager"));
}

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writePrefs(p: Prefs) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const existing = readPrefs();

    if (!existing) {
      setOpen(true);
    }

    const handler = () => {
      setOpen(true);
    };

    window.addEventListener("open-cookie-manager", handler);

    return () => {
      window.removeEventListener("open-cookie-manager", handler);
    };
  }, []);

  const accept = () => {
    writePrefs({
      necessary: true,
      analytics: true,
      marketing: true,
    });

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/90 p-6 text-white backdrop-blur-xl">
        <h3 className="text-lg font-semibold">Cookie Preferences</h3>

        <p className="mt-2 text-sm text-white/70">Folosim cookie-uri pentru funcționarea și analiza site-ului.</p>

        <button onClick={accept} className="mt-4 rounded-xl bg-white px-4 py-2 text-black">
          Accept
        </button>
      </div>
    </div>
  );
}
