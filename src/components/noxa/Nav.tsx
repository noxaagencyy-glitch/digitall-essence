import { useEffect, useState } from "react";
import { NoxaLogo } from "./Logo";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#proces", label: "Proces" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center gap-2 sm:gap-6 rounded-full px-3 sm:px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-card" : "glass"
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
          Începe un proiect
        </a>
      </nav>
    </header>
  );
}
