import { useEffect, useState } from "react";
import { NoxaLogo } from "./Logo";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#despre", label: "Despre" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#proces", label: "Proces" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      setScrolled(y > 20);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Scroll progress */}
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
        className={`fixed top-0 inset-x-0 z-50 flex justify-center px-4 transition-[padding] duration-300 ease-out ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <nav
          className={`flex items-center gap-2 sm:gap-6 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "glass-strong shadow-card px-2.5 sm:px-4 py-2 scale-[0.97] ring-1 ring-white/10"
              : "glass px-3 sm:px-5 py-2.5"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 pl-1 pr-2">
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
            href="#contact"
            className="ml-1 sm:ml-2 inline-flex items-center rounded-full bg-gradient-noxa px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.55_0.27_285_/_0.7)] hover:opacity-95 transition-opacity"
          >
            Cere ofertă gratuită
          </a>
        </nav>
      </header>
    </>
  );
}
