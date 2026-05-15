import { useEffect, useRef, useState } from "react";
import { Gauge, Smartphone, TrendingUp, Crown, Sparkles, Palette } from "lucide-react";
import { SectionHeader } from "./Services";

const stats = [
  { value: 184, prefix: "", suffix: "%", l: "Creștere medie a conversiilor" },
  { value: 1.2, prefix: "<", suffix: "s", l: "Timp mediu de încărcare", decimals: 1 },
  { value: 98, prefix: "", suffix: "+", l: "Scor Lighthouse" },
  { value: 60, prefix: "", suffix: "+", l: "Proiecte premium livrate" },
];

const reasons = [
  { icon: Crown, title: "Design premium", desc: "Fiecare pixel este tratat ca într-un produs Apple." },
  { icon: TrendingUp, title: "Conversii reale", desc: "Decizii bazate pe date și UX testat." },
  { icon: Smartphone, title: "Mobile-first", desc: "Experiențe perfect optimizate pe orice device." },
  { icon: Sparkles, title: "Experiență modernă", desc: "Animații smooth, micro-interacțiuni fine." },
  { icon: Palette, title: "Branding high-end", desc: "Identitate vizuală coerentă pe toate touchpoint-urile." },
  { icon: Gauge, title: "Viteză", desc: "Cod curat, optimizat, livrat rapid." },
];

function CountUp({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(end * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setVal(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="De ce NOXA" title="Detaliile fac diferența între bun și legendar" />

      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-3xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-gradient tabular-nums">
              <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((r) => (
          <div key={r.title} className="glass rounded-3xl p-6 hover:ring-glow transition-all">
            <r.icon className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
