import { Brush, Layout, RefreshCcw, Sparkles, Cpu, Crown, ShoppingBag } from "lucide-react";

const services = [
  { icon: Brush, title: "Web Design", desc: "Site-uri custom, premium, gândite ca produse de top." },
  { icon: Layout, title: "Landing Pages", desc: "Pagini optimizate pentru conversii reale și lansări." },
  { icon: RefreshCcw, title: "Redesign Website", desc: "Transformăm site-uri vechi în experiențe moderne." },
  { icon: Sparkles, title: "Branding", desc: "Identitate vizuală coerentă, modernă, memorabilă." },
  { icon: Cpu, title: "Website-uri AI", desc: "Integrăm AI nativ în produsele tale digitale." },
  { icon: Crown, title: "Platforme Premium", desc: "SaaS, dashboards, platforme luxury la cheie." },
  { icon: ShoppingBag, title: "Magazine Online", desc: "E-commerce premium, rapid și optimizat." },
];

export function Services() {
  return (
    <section id="servicii" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Servicii" title="Tot ce ai nevoie pentru un brand modern" />

      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative glass rounded-3xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:ring-glow"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-noxa opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            <div className="relative">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-noxa shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      <div className="inline-flex glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
