import { useState } from "react";
import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowUpRight, X } from "lucide-react";

import beauty from "@/assets/portfolio/beauty.jpg";
import fitness from "@/assets/portfolio/fitness.jpg";
import restaurant from "@/assets/portfolio/restaurant.jpg";
import clinic from "@/assets/portfolio/clinic.jpg";
import education from "@/assets/portfolio/education.jpg";
import realestate from "@/assets/portfolio/realestate.jpg";

type Item = {
  tag: string;
  title: string;
  url: string;
  description: string;
  image: string;
};

const items: Item[] = [
  {
    tag: "Beauty & Salon",
    title: "Lumière Beauty",
    url: "lumiere-beauty.ro",
    description: "Site premium pentru salon de înfrumusețare cu sistem de programări online și galerie servicii.",
    image: beauty,
  },
  {
    tag: "Fitness & Gym",
    title: "Forge Athletics",
    url: "forge-athletics.ro",
    description: "Platformă pentru sală de fitness cu abonamente, clase live și profile pentru antrenori.",
    image: fitness,
  },
  {
    tag: "Restaurante",
    title: "Maison Noir",
    url: "maison-noir.ro",
    description: "Site de fine dining cu meniu interactiv, rezervări instant și storytelling pentru bucătar.",
    image: restaurant,
  },
  {
    tag: "Clinici & Medical",
    title: "Aurum Dental Clinic",
    url: "aurum-dental.ro",
    description: "Clinică stomatologică cu programări online, prezentare echipă medicală și recenzii pacienți.",
    image: clinic,
  },
  {
    tag: "Educație & Cursuri",
    title: "Lumen Academy",
    url: "lumen-academy.ro",
    description: "Platformă educațională cu cursuri online, plăți integrate și dashboard pentru cursanți.",
    image: education,
  },
  {
    tag: "Imobiliare",
    title: "Vanta Estates",
    url: "vanta-estates.ro",
    description: "Agenție imobiliară premium cu căutare avansată proprietăți și tururi virtuale.",
    image: realestate,
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <section id="portofoliu" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Portofoliu" title="Proiecte construite cu obsesie pentru detalii" />

      <Reveal stagger direction="scale" className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <button
            key={it.title}
            data-reveal-item
            onClick={() => setActive(it)}
            className="group relative rounded-3xl overflow-hidden glass-strong p-3 text-left transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40">
              <img
                src={it.image}
                alt={`Mockup site ${it.title} — ${it.tag}`}
                loading="lazy"
                width={1280}
                height={800}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Vezi proiectul <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.tag}</div>
                <div className="mt-1 text-lg font-semibold">{it.title}</div>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {it.url} →
              </span>
            </div>
          </button>
        ))}
      </Reveal>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl [&>button]:hidden">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">{active.description}</DialogDescription>

              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    https://{active.url}
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full p-2 hover:bg-white/10 transition-colors"
                  aria-label="Închide"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[80vh] overflow-y-auto bg-black/40">
                <img
                  src={active.image}
                  alt={`${active.title} — preview complet`}
                  className="w-full h-auto block"
                />
              </div>

              <div className="px-5 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{active.tag}</div>
                  <div className="text-base font-semibold">{active.title}</div>
                  <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{active.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
