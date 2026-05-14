import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { NoxaLogo } from "./Logo";

const INDUSTRIES = [
  "Beauty & Salon",
  "Fitness & Gym",
  "Educație & Cursuri",
  "Restaurante & Cafenele",
  "Clinici & Medical",
  "Business-uri locale",
  "Imobiliare",
  "Avocatură",
];

const INDUSTRIES_2 = [
  "Hotel & Turism",
  "Coaching & Mentorat",
  "Magazine Online",
  "Construcții",
  "Auto & Service",
  "Frizerie & Barber",
  "Foto & Video",
  "Agenții & Studio",
];

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      {/* Ambient blobs — parallax */}
      <div aria-hidden style={{ transform: `translate3d(-50%, ${y * 0.25}px, 0)` }} className="absolute -top-40 left-1/2 w-[900px] h-[900px] rounded-full bg-gradient-noxa opacity-30 blur-[120px] will-change-transform" />
      <div aria-hidden style={{ transform: `translate3d(0, ${y * 0.12}px, 0)` }} className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-accent/40 blur-[120px] animate-pulse-glow will-change-transform" />
      <div aria-hidden style={{ transform: `translate3d(0, ${y * -0.18}px, 0)` }} className="absolute top-60 left-0 w-[420px] h-[420px] rounded-full bg-electric/40 blur-[120px] animate-pulse-glow will-change-transform" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Experiențe digitale premium
        </div>

        <h1 className="mt-6 text-5xl sm:text-7xl md:text-[88px] font-semibold leading-[1.02] tracking-tight animate-fade-up" style={{ animationDelay: "60ms" }}>
          Website-uri <span className="text-gradient">Premium</span> Pentru Orice Tip
          <br className="hidden sm:block" /> De Afacere
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "140ms" }}>
          Creăm website-uri moderne, rapide și premium pentru business-uri care vor să inspire
          încredere și profesionalism.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-6 py-3.5 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform"
          >
            Cere ofertă gratuită în 24h
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portofoliu"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
          >
            Vezi proiectele noastre
          </a>
        </div>

        {/* Mockup */}
        <div className="relative mt-20 mx-auto max-w-5xl animate-fade-up will-change-transform" style={{ animationDelay: "320ms", transform: `translate3d(0, ${y * -0.06}px, 0)` }}>
          <div className="absolute -inset-10 bg-gradient-noxa opacity-30 blur-3xl rounded-[40px]" />
          <div className="relative glass-strong rounded-3xl p-3 shadow-card ring-1 ring-white/10">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.16_0.05_270)] to-[oklch(0.13_0.06_295)] aspect-[16/9] relative">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="grid grid-cols-12 gap-4 p-6 sm:p-10 h-full">
                <div className="col-span-7 space-y-4">
                  <div className="h-3 w-24 rounded-full bg-white/10" />
                  <div className="h-10 w-3/4 rounded-lg bg-gradient-to-r from-white/15 to-white/5" />
                  <div className="h-10 w-2/3 rounded-lg bg-gradient-to-r from-white/15 to-white/5" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="h-3 w-2/5 rounded-full bg-white/10" />
                  <div className="flex gap-2 pt-3">
                    <div className="h-9 w-32 rounded-full bg-gradient-noxa" />
                    <div className="h-9 w-28 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="col-span-5 relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-noxa opacity-80 blur-xl" />
                  <div className="relative h-full rounded-2xl glass-strong flex items-center justify-center">
                    <NoxaLogo className="h-24 w-24 animate-float" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hidden sm:flex absolute -left-6 top-1/3 glass-strong rounded-2xl px-4 py-3 items-center gap-3 animate-float">
            <div className="h-8 w-8 rounded-lg bg-gradient-noxa" />
            <div>
              <div className="text-xs text-muted-foreground">Conversion</div>
              <div className="text-sm font-semibold">+184%</div>
            </div>
          </div>
          <div className="hidden sm:flex absolute -right-6 bottom-1/4 glass-strong rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="h-8 w-8 rounded-lg bg-electric" />
            <div>
              <div className="text-xs text-muted-foreground">Page speed</div>
              <div className="text-sm font-semibold">98 / 100</div>
            </div>
          </div>
        </div>

      </div>

      {/* Industries marquee */}
      <div className="relative mt-24">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 px-6">
          Tipuri de afaceri pentru care construim
        </div>
        <div className="mt-8 relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee gap-4 py-2">
            {[...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 glass rounded-full px-5 py-3 whitespace-nowrap hover:ring-glow transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-noxa shadow-[0_0_10px_oklch(0.65_0.22_290_/_0.9)]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee-reverse gap-4 py-2">
            {[...INDUSTRIES_2, ...INDUSTRIES_2].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 glass rounded-full px-5 py-3 whitespace-nowrap hover:ring-glow transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_10px_oklch(0.7_0.2_240_/_0.9)]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
