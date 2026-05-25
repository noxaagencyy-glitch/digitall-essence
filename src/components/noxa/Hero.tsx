import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NoxaLogo } from "./Logo";
import { StartProjectDialog } from "./StartProjectDialog";

function useInViewStagger<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

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
  const [openStart, setOpenStart] = useState(false);
  const [initialServices, setInitialServices] = useState<string[]>([]);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ services?: string[] }>).detail || {};
      setInitialServices(detail.services ?? []);
      setOpenStart(true);
    };
    window.addEventListener("noxa:open-start", onOpen);
    return () => window.removeEventListener("noxa:open-start", onOpen);
  }, []);

  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-clip">
      {/* Ambient blobs — parallax */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-noxa opacity-30 blur-[120px]" />
      <div aria-hidden className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-accent/40 blur-[120px] animate-pulse-glow" />
      <div aria-hidden className="absolute top-60 left-0 w-[420px] h-[420px] rounded-full bg-electric/40 blur-[120px] animate-pulse-glow" />

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
          <button
            onClick={() => setOpenStart(true)}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-7 py-4 text-base font-medium text-white hover:scale-[1.02] transition-transform"
          >
            Începe proiectul acum
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="#portofoliu"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
          >
            Descoperă platforma
          </a>
        </div>

        <BonusGrid />

        {/* Showcase */}
        <div className="relative mt-20 mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "320ms" }}>
          {/* Decorative glows */}
          <div aria-hidden className="absolute -top-20 -left-20 w-80 h-80 bg-[oklch(0.5_0.3_285)] opacity-20 blur-[120px]" />
          <div aria-hidden className="absolute -bottom-20 -right-20 w-80 h-80 bg-[oklch(0.6_0.2_260)] opacity-20 blur-[120px]" />

          {/* Main browser frame */}
          <div className="relative rounded-3xl border border-white/5 bg-[oklch(0.14_0.04_280)]/80 backdrop-blur-xl shadow-card overflow-hidden ring-1 ring-white/10">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto h-5 w-1/3 rounded-full bg-white/5 border border-white/5" />
            </div>

            {/* Content preview */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="flex-1 space-y-5 sm:space-y-6 text-left w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[oklch(0.6_0.2_285)]/10 border border-[oklch(0.6_0.2_285)]/20 text-[oklch(0.78_0.13_285)] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                  Case Study · Volantis
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
                  Redefining Digital
                  <br />
                  <span className="text-gradient">Luxury Experiences.</span>
                </h3>
                <p className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                  Cum am ajutat un brand premium să-și crească prezența online prin arhitectură custom și motion design de înaltă fidelitate.
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="h-11 w-32 rounded-xl bg-gradient-noxa shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.5)]" />
                  <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10" />
                </div>
              </div>

              {/* Visual column */}
              <div className="flex-1 relative w-full h-[280px] sm:h-[360px] lg:h-[400px]">
                {/* Back card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md transform rotate-2 transition-transform duration-500 hover:rotate-0">
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="h-32 sm:h-40 w-full rounded-lg bg-gradient-to-tr from-[oklch(0.55_0.27_285)]/20 via-white/5 to-[oklch(0.6_0.25_220)]/20 relative overflow-hidden">
                      <NoxaLogo className="absolute right-3 bottom-3 h-12 w-12 opacity-50 animate-float" />
                    </div>
                    <div className="h-3 w-3/4 rounded bg-white/15" />
                    <div className="h-3 w-1/2 rounded bg-white/10" />
                    <div className="flex gap-2 pt-1">
                      <span className="h-6 w-16 rounded-full bg-gradient-noxa" />
                      <span className="h-6 w-12 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                {/* Mobile card */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 sm:w-36 h-52 sm:h-64 bg-black/50 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-2xl p-2.5 sm:p-3 transform -rotate-6 z-10">
                  <div className="w-full h-full rounded-2xl bg-white/5 overflow-hidden border border-white/10">
                    <div className="p-3 sm:p-4 space-y-2">
                      <div className="w-full h-20 sm:h-24 rounded-lg bg-gradient-to-b from-[oklch(0.6_0.2_285)]/30 to-transparent" />
                      <div className="h-1.5 w-full rounded bg-white/20" />
                      <div className="h-1.5 w-2/3 rounded bg-white/10" />
                      <div className="h-5 w-12 rounded-lg bg-gradient-noxa mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand mark */}
            <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-12 opacity-20 pointer-events-none">
              <span className="text-[10px] tracking-[0.3em] font-bold text-white uppercase">NOXA DESIGN LABS</span>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hidden sm:flex absolute top-1/4 -left-8 lg:-left-12 items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20 animate-float">
            <div className="h-10 w-10 rounded-full bg-gradient-noxa flex items-center justify-center shadow-[0_0_20px_oklch(0.55_0.27_285_/_0.4)]">
              <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Conversion</div>
              <div className="text-lg font-bold">+184%</div>
            </div>
          </div>
          <div className="hidden sm:flex absolute bottom-16 -right-6 lg:-right-8 items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="relative h-10 w-10 flex items-center justify-center">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="2.5" className="text-electric" strokeLinecap="round" />
              </svg>
              <span className="absolute text-[10px] font-bold">98</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Page speed</div>
              <div className="text-lg font-bold">98 <span className="text-muted-foreground text-xs font-medium">/ 100</span></div>
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
          <div className="flex w-max animate-marquee gap-12 sm:gap-16 py-2 items-center">
            {[...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
              <span
                key={i}
                className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground/80 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee-reverse gap-12 sm:gap-16 py-2 items-center">
            {[...INDUSTRIES_2, ...INDUSTRIES_2].map((item, i) => (
              <span
                key={i}
                className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground/70 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <StartProjectDialog open={openStart} onOpenChange={setOpenStart} initialServices={initialServices} />
    </section>
  );
}

const BONUSES = [
  "Hosting gratuit",
  "SEO inclus",
  "Suport după lansare",
  "Website rapid & fluid",
  "Mobile responsive",
  "Mentenanță 1 lună gratis",
  "Livrare 3–7 zile",
  "Design premium",
];

function BonusGrid() {
  const ref = useInViewStagger<HTMLDivElement>();
  return (
    <div ref={ref} className="mt-14 mx-auto max-w-6xl">
      <div className="text-center mb-6 sm:mb-8" data-reveal style={{ transitionDelay: "0ms" }}>
        <div className="reveal-item text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-accent/80 uppercase mb-2">
          Premium Benefits
        </div>
        <div className="reveal-item text-lg sm:text-2xl md:text-3xl font-medium text-foreground tracking-tight">
          Totul inclus în pachet
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {BONUSES.map((b, i) => (
          <div
            key={b}
            data-reveal
            className="reveal-item group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent/50 backdrop-blur-md text-left"
            style={{ transitionDelay: `${80 + i * 70}ms` }}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <div
                className="relative flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-noxa transition-all"
              >
                <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[12px] sm:text-[15px] font-medium text-foreground/85 group-hover:text-foreground transition-colors leading-tight">
                {b}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center" data-reveal style={{ transitionDelay: `${80 + BONUSES.length * 70 + 100}ms` }}>
        <div className="reveal-item inline-flex items-center px-6 py-3 rounded-full bg-white/[0.02] border border-white/10 shadow-inner backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-accent mr-2" />
          <p className="text-sm text-muted-foreground font-light">+ multe alte funcționalități premium</p>
        </div>
      </div>
    </div>
  );
}
