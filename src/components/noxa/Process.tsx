import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./Services";

const steps = [
  { n: "01", t: "Strategie", d: "Definim obiectivele, audiența și direcția vizuală." },
  { n: "02", t: "Design", d: "Construim concepte premium și UI sistemic." },
  { n: "03", t: "Dezvoltare", d: "Implementăm rapid, curat și optimizat." },
  { n: "04", t: "Lansare", d: "Punem totul live și optimizăm continuu." },
];

export function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // start when section top hits 80% of viewport, end when bottom hits 20%
      const start = vh * 0.8;
      const end = -rect.height + vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // map progress (0..1) → active step index (0..steps.length-1) smoothly
  const activeFloat = progress * steps.length;

  return (
    <section id="proces" className="relative py-24 sm:py-32 overflow-hidden">
      <SectionHeader eyebrow="Proces" title="Cum lucrăm — clar și predictibil" />

      {/* Parallax glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-gradient-noxa opacity-15 blur-[140px] pointer-events-none"
        style={{ transform: `translate(-50%, calc(-50% + ${(progress - 0.5) * 60}px))` }}
      />

      <div ref={ref} className="mx-auto max-w-6xl px-6 mt-14 relative">
        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative mb-10">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-noxa shadow-[0_0_16px_oklch(0.65_0.22_290_/_0.8)] transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
          <div className="relative grid grid-cols-4">
            {steps.map((_, i) => {
              const active = activeFloat >= i + 0.5;
              return (
                <div key={i} className="flex justify-center">
                  <div
                    className={`h-4 w-4 rounded-full transition-all duration-500 ${
                      active
                        ? "bg-gradient-noxa shadow-[0_0_18px_oklch(0.65_0.22_290_/_0.9)] scale-110"
                        : "bg-white/15 scale-90"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical rail */}
        <div className="md:hidden absolute left-7 top-4 bottom-4 w-px bg-white/10">
          <div
            className="absolute left-0 top-0 w-full bg-gradient-noxa shadow-[0_0_12px_oklch(0.65_0.22_290_/_0.8)] transition-[height] duration-300 ease-out"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const active = activeFloat >= i + 0.5;
            return (
              <div
                key={s.n}
                className={`relative glass rounded-3xl p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "ring-glow -translate-y-1 opacity-100"
                    : "opacity-60"
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute -inset-px rounded-3xl bg-gradient-noxa blur-xl transition-opacity duration-700 ${
                    active ? "opacity-25" : "opacity-0"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-8 px-3 items-center rounded-full text-xs font-semibold tracking-widest transition-all duration-500 ${
                      active
                        ? "bg-gradient-noxa text-white shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]"
                        : "bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
