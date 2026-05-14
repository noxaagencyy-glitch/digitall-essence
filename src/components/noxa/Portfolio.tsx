import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";

const items = [
  { tag: "SaaS · Dashboard", title: "Lumen Analytics", hue: "from-[oklch(0.45_0.25_260)] to-[oklch(0.55_0.28_295)]" },
  { tag: "E-commerce", title: "Aurora Atelier", hue: "from-[oklch(0.40_0.22_280)] to-[oklch(0.55_0.27_310)]" },
  { tag: "AI Platform", title: "Nova Intelligence", hue: "from-[oklch(0.42_0.24_255)] to-[oklch(0.50_0.28_285)]" },
  { tag: "Branding", title: "Vanta Studio", hue: "from-[oklch(0.50_0.20_270)] to-[oklch(0.55_0.27_300)]" },
];

export function Portfolio() {
  return (
    <section id="portofoliu" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Portofoliu" title="Proiecte construite cu obsesie pentru detalii" />

      <Reveal stagger direction="scale" className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} data-reveal-item className="group relative rounded-3xl overflow-hidden glass-strong p-3">
            <div className={`relative aspect-[16/10] rounded-2xl bg-gradient-to-br ${it.hue} overflow-hidden`}>
              <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
              <div className="absolute inset-6 rounded-xl glass-strong p-4 flex flex-col gap-3 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <div className="rounded-lg bg-white/10" />
                  <div className="rounded-lg bg-white/15 col-span-2" />
                  <div className="rounded-lg bg-white/10 col-span-2" />
                  <div className="rounded-lg bg-white/15" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.tag}</div>
                <div className="mt-1 text-lg font-semibold">{it.title}</div>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Studiază case study →</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
