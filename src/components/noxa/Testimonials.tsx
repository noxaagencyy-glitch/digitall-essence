import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./Services";

const items = [
  {
    name: "Andrei Popescu",
    role: "Co-Founder",
    company: "Lumen Studio",
    initials: "AP",
    gradient: "from-[oklch(0.65_0.22_25)] to-[oklch(0.55_0.25_15)]",
    rating: 5,
    date: "Acum 2 luni",
    quote:
      "Am lucrat cu 3 agenții înainte și niciuna n-a livrat ce promitea. Cei de la NOXA au înțeles brand-ul din prima discuție. Site-ul a fost gata în 9 zile, iar conversiile au crescut cu peste 60% în prima lună după lansare.",
  },
  {
    name: "Ioana Mihăilescu",
    role: "Marketing Manager",
    company: "Aurora Beauty Clinic",
    initials: "IM",
    gradient: "from-[oklch(0.7_0.18_330)] to-[oklch(0.55_0.22_300)]",
    rating: 5,
    date: "Acum 3 săptămâni",
    quote:
      "Comunicare impecabilă și o atenție la detalii pe care nu o mai văzusem. Ne-au făcut și site-ul, și sistemul de rezervări online. Programările s-au triplat în primele 6 săptămâni.",
  },
  {
    name: "Radu Stănescu",
    role: "CEO",
    company: "Nova Construct",
    initials: "RS",
    gradient: "from-[oklch(0.6_0.2_240)] to-[oklch(0.5_0.22_270)]",
    rating: 5,
    date: "Acum 1 lună",
    quote:
      "Profesioniști de la A la Z. Au preluat un site vechi de aproape 10 ani și l-au transformat complet. Clienții mei îmi spun acum că arătăm ca un brand serios — recomandare 100%.",
  },
];

export function Testimonials() {
  return (
    <section id="testimoniale" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Testimoniale" title="Ce spun clienții noștri" />

      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((t) => (
          <figure
            key={t.name}
            className="relative glass-strong rounded-3xl p-6 sm:p-7 flex flex-col"
          >
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[oklch(0.82_0.17_85)] text-[oklch(0.82_0.17_85)]" />
                ))}
              </div>
              <Quote className="h-5 w-5 text-muted-foreground/40" />
            </div>

            <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90 flex-1">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
              <div
                className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-semibold text-white shadow-lg ring-2 ring-white/10`}
              >
                {t.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {t.role} · {t.company}
                </div>
              </div>
              <div className="text-[10px] text-muted-foreground/70 whitespace-nowrap">
                {t.date}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
