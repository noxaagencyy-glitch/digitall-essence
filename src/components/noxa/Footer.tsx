import { NoxaLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <NoxaLogo className="h-8 w-8" />
          <div>
            <div className="font-semibold tracking-tight">NOXA Agency</div>
            <div className="text-xs text-muted-foreground">Premium digital experiences.</div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#servicii" className="hover:text-foreground">Servicii</a>
          <a href="#portofoliu" className="hover:text-foreground">Portofoliu</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} NOXA. All rights reserved.</div>
      </div>
    </footer>
  );
}
