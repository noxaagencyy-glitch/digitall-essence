import { SectionHeader } from "./Services";

const items = [
  { name: "Andrei P.", role: "Founder, Lumen", quote: "Echipa NOXA a transformat brand-ul nostru într-o experiență digitală premium. Conversiile s-au dublat în prima lună." },
  { name: "Ioana M.", role: "CMO, Aurora", quote: "Atenție obsesivă la detalii. Singura agenție cu care vrem să mai lucrăm." },
  { name: "Radu S.", role: "CEO, Nova", quote: "Design-ul nostru AI arată ca produsele Apple. Investiția s-a întors de 5x." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Testimoniale" title="Vorbim prin rezultate" />
      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((t) => (
          <figure key={t.name} className="relative glass-strong rounded-3xl p-7">
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <blockquote className="text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-noxa" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
