import { useEffect, useRef, useState } from "react";
import { NoxaLogo } from "./Logo";

const links = [
  { href: "/#servicii", label: "Servicii" },
  { href: "/#despre", label: "Despre" },
  { href: "/#portofoliu", label: "Portofoliu" },
  { href: "/#proces", label: "Proces" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      setScrolled(y > 20);

      const delta = y - lastY.current;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-gradient-noxa shadow-[0_0_12px_oklch(0.65_0.22_290_/_0.8)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "pt-2" : "pt-4"
        } ${hidden ? "-translate-y-[140%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
      >
        <nav
          className={`flex items-center gap-2 sm:gap-6 rounded-full backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "bg-background/40 border border-white/10 shadow-card px-2.5 sm:px-4 py-2 scale-[0.97]"
              : "bg-background/20 border border-white/5 px-3 sm:px-5 py-2.5"
          }`}
        >
          <a href="/#top" className="flex items-center gap-2.5 pl-1 pr-2">
            <NoxaLogo className="h-7 w-7" />
            <span className="font-semibold tracking-tight text-sm sm:text-base">NOXA</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="/#contact"
            className="ml-1 sm:ml-2 inline-flex items-center rounded-full bg-gradient-noxa px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.55_0.27_285_/_0.7)] hover:opacity-95 transition-opacity"
          >
            Cere ofertă gratuită
          </a>
        </nav>
      </header>
    </>
  );
}
