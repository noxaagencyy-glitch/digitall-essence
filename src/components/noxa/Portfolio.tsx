import { useMemo, useState } from "react";
import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowUpRight, ExternalLink, X, Target, Lightbulb, Package, TrendingUp } from "lucide-react";

import beauty from "@/assets/portfolio/beauty.jpg";
import fitness from "@/assets/portfolio/fitness.jpg";
import restaurant from "@/assets/portfolio/restaurant.jpg";
import clinic from "@/assets/portfolio/clinic.jpg";
import education from "@/assets/portfolio/education.jpg";
import realestate from "@/assets/portfolio/realestate.jpg";

type CaseStudy = {
  problem: string;
  solution: string;
  delivered: string[];
  results: { label: string; value: string }[];
};

type Item = {
  tag: string;
  title: string;
  url: string;
  demoUrl: string;
  description: string;
  image: string;
  caseStudy: CaseStudy;
};

const items: Item[] = [
  {
    tag: "Beauty & Salon",
    title: "Lumière Beauty",
    url: "lumiere-beauty.ro",
    demoUrl: "/demo/beauty",
    description: "Site premium pentru salon de înfrumusețare cu sistem de programări online și galerie servicii.",
    image: beauty,
    caseStudy: {
      problem: "Salonul pierdea programări din cauza unui site învechit, fără rezervări online și greu de folosit pe mobil.",
      solution: "Am construit o experiență premium, mobile-first, cu rezervări instant și o galerie ce pune în valoare lucrările.",
      delivered: ["Design custom premium", "Sistem de programări online", "Galerie servicii cu before/after", "Integrare WhatsApp & Google Maps", "SEO local optimizat"],
      results: [
        { label: "Programări online", value: "+180%" },
        { label: "Bounce rate", value: "-42%" },
        { label: "Trafic organic", value: "+220%" },
      ],
    },
  },
  {
    tag: "Fitness & Gym",
    title: "Forge Athletics",
    url: "forge-athletics.ro",
    demoUrl: "/demo/fitness",
    description: "Platformă pentru sală de fitness cu abonamente, clase live și profile pentru antrenori.",
    image: fitness,
    caseStudy: {
      problem: "Sala de fitness nu avea o platformă centralizată pentru abonamente și orarul claselor era greu de actualizat.",
      solution: "Am creat o platformă completă cu management de abonamente, orar dinamic și profile pentru antrenori.",
      delivered: ["Platformă cu autentificare membri", "Sistem de abonamente recurente", "Orar clase actualizabil", "Profile antrenori", "Dashboard administrare"],
      results: [
        { label: "Abonamente noi", value: "+135%" },
        { label: "Retenție membri", value: "+58%" },
        { label: "Timp admin", value: "-70%" },
      ],
    },
  },
  {
    tag: "Restaurante",
    title: "Maison Noir",
    url: "maison-noir.ro",
    demoUrl: "/demo/restaurant",
    description: "Site de fine dining cu meniu interactiv, rezervări instant și storytelling pentru bucătar.",
    image: restaurant,
    caseStudy: {
      problem: "Restaurantul fine dining avea nevoie de o prezență digitală pe măsura experienței oferite în local.",
      solution: "Am livrat un site cinematic cu meniu interactiv, rezervări instant și storytelling vizual pentru chef.",
      delivered: ["Design cinematic & animații smooth", "Meniu interactiv pe categorii", "Sistem rezervări online", "Pagină storytelling chef", "Galerie foto profesională"],
      results: [
        { label: "Rezervări online", value: "+240%" },
        { label: "Coperta medie", value: "+35%" },
        { label: "Reviews Google", value: "4.9★" },
      ],
    },
  },
  {
    tag: "Clinici & Medical",
    title: "Aurum Dental Clinic",
    url: "aurum-dental.ro",
    demoUrl: "/demo/clinic",
    description: "Clinică stomatologică cu programări online, prezentare echipă medicală și recenzii pacienți.",
    image: clinic,
    caseStudy: {
      problem: "Clinica primea majoritatea programărilor telefonic și pierdea pacienți care căutau servicii online.",
      solution: "Am construit un site profesional cu programări 24/7, prezentare detaliată a serviciilor și încredere prin recenzii.",
      delivered: ["Sistem programări 24/7", "Pagini servicii detaliate", "Profile medici cu specializări", "Integrare recenzii pacienți", "Optimizare SEO local"],
      results: [
        { label: "Programări online", value: "+310%" },
        { label: "Pacienți noi/lună", value: "+85%" },
        { label: "Pozitia Google", value: "Top 3" },
      ],
    },
  },
  {
    tag: "Educație & Cursuri",
    title: "Lumen Academy",
    url: "lumen-academy.ro",
    demoUrl: "/demo/education",
    description: "Platformă educațională cu cursuri online, plăți integrate și dashboard pentru cursanți.",
    image: education,
    caseStudy: {
      problem: "Cursurile erau vândute manual prin email, fără plată online și fără acces structurat la materiale.",
      solution: "Am dezvoltat o platformă LMS completă cu plăți, dashboard cursanți și progres tracking.",
      delivered: ["Catalog cursuri online", "Plăți cu card integrate", "Dashboard cursant cu progres", "Streaming video lecții", "Certificate de finalizare"],
      results: [
        { label: "Vânzări cursuri", value: "+420%" },
        { label: "Rata de finalizare", value: "+65%" },
        { label: "Suport manual", value: "-80%" },
      ],
    },
  },
  {
    tag: "Imobiliare",
    title: "Vanta Estates",
    url: "vanta-estates.ro",
    demoUrl: "/demo/realestate",
    description: "Agenție imobiliară premium cu căutare avansată proprietăți și tururi virtuale.",
    image: realestate,
    caseStudy: {
      problem: "Agenția prezenta proprietățile pe portaluri externe și pierdea controlul asupra branding-ului și lead-urilor.",
      solution: "Am creat o platformă proprie cu căutare avansată, tururi virtuale și captare directă de lead-uri.",
      delivered: ["Listing proprietăți cu filtre", "Tururi virtuale 360°", "Hartă interactivă", "Formular lead-uri inteligent", "CRM intern integrat"],
      results: [
        { label: "Lead-uri calificate", value: "+195%" },
        { label: "Timp pe site", value: "+140%" },
        { label: "Cost per lead", value: "-55%" },
      ],
    },
  },
];

const ALL = "Toate";

export function Portfolio() {
  const [active, setActive] = useState<Item | null>(null);
  const [filter, setFilter] = useState<string>(ALL);

  const filters = useMemo(() => [ALL, ...Array.from(new Set(items.map((i) => i.tag)))], []);
  const filtered = useMemo(() => (filter === ALL ? items : items.filter((i) => i.tag === filter)), [filter]);

  return (
    <section id="portofoliu" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Portofoliu" title="Proiecte construite cu obsesie pentru detalii" />

      <div className="mx-auto max-w-6xl px-6 mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border " +
                (isActive
                  ? "bg-foreground text-background border-foreground"
                  : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30")
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      <Reveal
        key={filter}
        stagger
        direction="scale"
        className="mx-auto max-w-6xl px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filtered.map((it) => (
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
                <div className="flex items-center gap-2">
                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    Vezi demo live <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full p-2 hover:bg-white/10 transition-colors"
                    aria-label="Închide"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="max-h-[80vh] overflow-y-auto">
                <div className="bg-black/40">
                  <img
                    src={active.image}
                    alt={`${active.title} — preview complet`}
                    className="w-full h-auto block"
                  />
                </div>

                <div className="px-6 py-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{active.tag}</div>
                  <div className="text-xl font-semibold mt-1">{active.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{active.description}</p>

                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden mt-4 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-medium"
                  >
                    Vezi demo live <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="px-6 pb-8">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Case study</div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl glass p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Target className="w-4 h-4 text-foreground/70" /> Problema
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{active.caseStudy.problem}</p>
                    </div>

                    <div className="rounded-2xl glass p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Lightbulb className="w-4 h-4 text-foreground/70" /> Soluția
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{active.caseStudy.solution}</p>
                    </div>

                    <div className="rounded-2xl glass p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Package className="w-4 h-4 text-foreground/70" /> Ce am livrat
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {active.caseStudy.delivered.map((d) => (
                          <li key={d} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-foreground/40">—</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl glass p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <TrendingUp className="w-4 h-4 text-foreground/70" /> Rezultate
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {active.caseStudy.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-lg sm:text-xl font-semibold">{r.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 leading-tight">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
