import { Gauge, Smartphone, TrendingUp, Crown, Sparkles, Palette } from "lucide-react";
import { SectionHeader } from "./Services";

const stats = [
  { v: "184%", l: "Creștere medie a conversiilor" },
  { v: "<1.2s", l: "Timp mediu de încărcare" },
  { v: "98+", l: "Scor Lighthouse" },
  { v: "60+", l: "Proiecte premium livrate" },
];

const reasons = [
  { icon: Crown, title: "Design premium", desc: "Fiecare pixel este tratat ca într-un produs Apple." },
  { icon: TrendingUp, title: "Conversii reale", desc: "Decizii bazate pe date și UX testat." },
  { icon: Smartphone, title: "Mobile-first", desc: "Experiențe perfect optimizate pe orice device." },
  { icon: Sparkles, title: "Experiență modernă", desc: "Animații smooth, micro-interacțiuni fine." },
  { icon: Palette, title: "Branding high-end", desc: "Identitate vizuală coerentă pe toate touchpoint-urile." },
  { icon: Gauge, title: "Viteză", desc: "Cod curat, optimizat, livrat rapid." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="De ce NOXA" title="Detaliile fac diferența între bun și legendar" />

      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-3xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-gradient">{s.v}</div>
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
