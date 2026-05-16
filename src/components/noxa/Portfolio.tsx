import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight, X, Target, Lightbulb, Package, TrendingUp, Star, Monitor, Tablet, Smartphone, RefreshCw } from "lucide-react";
import demoBeauty from "@/assets/demo-beauty.png";
import demoFitness from "@/assets/demo-fitness.png";
import demoRestaurant from "@/assets/demo-restaurant.png";
import demoClinic from "@/assets/demo-clinic.png";
import demoEducation from "@/assets/demo-education.png";
import demoRealestate from "@/assets/demo-realestate.png";

type CaseStudy = {
  problem: string;
  solution: string;
  delivered: string[];
  results: { label: string; value: string }[];
};

type Review = { author: string; role: string; text: string; rating: number };

type Proof = {
  rating: number;
  reviewsCount: number;
  highlightKpis: { label: string; value: string }[];
  reviews: Review[];
};

type Item = {
  tag: string;
  title: string;
  url: string;
  demoUrl: string;
  description: string;
  image: string;
  caseStudy: CaseStudy;
  proof: Proof;
};

const items: Item[] = [
  {
    tag: "Beauty & Salon",
    title: "Bella Hair Studio",
    url: "bella-studio.ro",
    demoUrl: "/demo/beauty",
    description: "Site premium pentru salon de înfrumusețare cu sistem de programări online și galerie servicii.",
    image: demoBeauty,
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
    proof: {
      rating: 4.9,
      reviewsCount: 142,
      highlightKpis: [
        { label: "Programări/lună", value: "320+" },
        { label: "Lead-uri WhatsApp", value: "180+" },
      ],
      reviews: [
        { author: "Andreea M.", role: "Owner Bella Studio", text: "În prima lună am triplat programările online. Site-ul arată ca o reclamă Vogue.", rating: 5 },
        { author: "Cristina V.", role: "Manager salon", text: "Clientele noi ne spun constant că au venit din site. Diferență ca de la cer la pământ.", rating: 5 },
      ],
    },
  },
  {
    tag: "Fitness & Gym",
    title: "PowerHouse Gym",
    url: "powerhouse-gym.ro",
    demoUrl: "/demo/fitness",
    description: "Platformă pentru sală de fitness cu abonamente, clase live și profile pentru antrenori.",
    image: demoFitness,
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
    proof: {
      rating: 4.8,
      reviewsCount: 98,
      highlightKpis: [
        { label: "Conversii free trial", value: "62%" },
        { label: "Membri noi/lună", value: "85+" },
      ],
      reviews: [
        { author: "Răzvan T.", role: "Head Coach", text: "Aplicația de orar singură ne-a economisit 10 ore/săptămână. Membrii sunt încântați.", rating: 5 },
        { author: "Mihai D.", role: "Owner", text: "ROI-ul s-a întors în prima lună din abonamente noi venite direct prin site.", rating: 5 },
      ],
    },
  },
  {
    tag: "Restaurante",
    title: "Trattoria 23",
    url: "trattoria23.ro",
    demoUrl: "/demo/restaurant",
    description: "Site de fine dining cu meniu interactiv, rezervări instant și storytelling pentru bucătar.",
    image: demoRestaurant,
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
    proof: {
      rating: 4.9,
      reviewsCount: 211,
      highlightKpis: [
        { label: "Rezervări/seară", value: "48" },
        { label: "Ocupare weekend", value: "100%" },
      ],
      reviews: [
        { author: "Antoine R.", role: "Chef & Founder", text: "Site-ul reflectă perfect atmosfera restaurantului. Rezervări full pentru luni întregi.", rating: 5 },
        { author: "Diana P.", role: "Manager", text: "Procesul de rezervare e atât de fluid încât 80% dintre clienți rezervă acum online.", rating: 5 },
      ],
    },
  },
  {
    tag: "Clinici & Medical",
    title: "Smile Dental Clinic",
    url: "smile-dental.ro",
    demoUrl: "/demo/clinic",
    description: "Clinică stomatologică cu programări online, prezentare echipă medicală și recenzii pacienți.",
    image: demoClinic,
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
    proof: {
      rating: 5.0,
      reviewsCount: 187,
      highlightKpis: [
        { label: "Programări online/lună", value: "240+" },
        { label: "Lead-uri calificate", value: "95%" },
      ],
      reviews: [
        { author: "Dr. Andrei P.", role: "Medic primar", text: "Pacienții vin pregătiți, informați. Site-ul face jumătate din muncă înainte să intre în cabinet.", rating: 5 },
        { author: "Ioana B.", role: "Manager clinică", text: "De când avem programări online, telefonul recepției e descongestionat 70%.", rating: 5 },
      ],
    },
  },
  {
    tag: "Educație & Cursuri",
    title: "Codify Academy",
    url: "codify-academy.ro",
    demoUrl: "/demo/education",
    description: "Platformă educațională cu cursuri online, plăți integrate și dashboard pentru cursanți.",
    image: demoEducation,
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
    proof: {
      rating: 4.9,
      reviewsCount: 524,
      highlightKpis: [
        { label: "Cursanți activi", value: "8.4k+" },
        { label: "Conversii landing", value: "11.2%" },
      ],
      reviews: [
        { author: "Alex M.", role: "Co-founder", text: "Vânzările au explodat din ziua 1. Checkout-ul convertește mai bine decât orice am încercat înainte.", rating: 5 },
        { author: "Raluca G.", role: "Head of Growth", text: "Dashboard-ul cursanților a crescut retenția cu 65%. Material accesibil = clienți fericiți.", rating: 5 },
      ],
    },
  },
  {
    tag: "Imobiliare",
    title: "Premier Imobiliare",
    url: "premier-imobiliare.ro",
    demoUrl: "/demo/realestate",
    description: "Agenție imobiliară premium cu căutare avansată proprietăți și tururi virtuale.",
    image: demoRealestate,
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
    proof: {
      rating: 4.8,
      reviewsCount: 76,
      highlightKpis: [
        { label: "Lead-uri/lună", value: "120+" },
        { label: "Tranzacții închise", value: "18/lună" },
      ],
      reviews: [
        { author: "Sergiu A.", role: "Founder", text: "Lead-urile vin direct, calificate, cu buget. Nu mai depindem de portaluri externe.", rating: 5 },
        { author: "Elena V.", role: "Senior Agent", text: "Tururile virtuale au tăiat 70% din vizionările inutile. Câștig timp imens.", rating: 5 },
      ],
    },
  },
];

const ALL = "Toate";

type Device = "desktop" | "tablet" | "mobile";
const deviceWidth: Record<Device, string> = {
  desktop: "100%",
  tablet: "820px",
  mobile: "390px",
};

export function Portfolio() {
  const [active, setActive] = useState<Item | null>(null);
  const [filter, setFilter] = useState<string>(ALL);
  const [device, setDevice] = useState<Device>("desktop");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeSlow, setIframeSlow] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [loadedUrls, setLoadedUrls] = useState<Set<string>>(new Set());
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filters = useMemo(() => [ALL, ...Array.from(new Set(items.map((i) => i.tag)))], []);
  const filtered = useMemo(() => (filter === ALL ? items : items.filter((i) => i.tag === filter)), [filter]);

  // Reset only on project change or manual refresh — NOT on device change (CSS-only, no reload)
  useEffect(() => {
    if (!active) return;
    const cached = loadedUrls.has(active.demoUrl);
    setIframeLoaded(cached);
    setIframeSlow(false);
    if (slowTimer.current) clearTimeout(slowTimer.current);
    if (!cached) {
      slowTimer.current = setTimeout(() => setIframeSlow(true), 6000);
    }
    return () => {
      if (slowTimer.current) clearTimeout(slowTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, iframeKey]);

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
            className="group relative text-left transition-transform duration-500 hover:-translate-y-1"
          >
            {/* MacBook mockup */}
            <div className="relative">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -inset-6 bg-gradient-noxa opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500"
              />

              {/* Laptop lid */}
              <div className="relative rounded-t-2xl bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] p-2.5 sm:p-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
                {/* Camera notch */}
                <div className="absolute left-1/2 top-1 -translate-x-1/2 h-1 w-10 rounded-full bg-black/70 flex items-center justify-center">
                  <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
                </div>

                <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-black">
                  <img
                    src={it.image}
                    alt={`${it.title} — screenshot`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />

                  {/* Subtle screen glare */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"
                  />

                  {/* Hover overlay with action */}
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-noxa px-4 py-2 text-xs font-medium text-white shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]">
                      Previzualizare <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div className="relative mx-auto h-2 sm:h-2.5 w-[108%] -ml-[4%] rounded-b-xl bg-gradient-to-b from-[#3a3a3e] to-[#1a1a1e] shadow-[0_14px_24px_-12px_rgba(0,0,0,0.7)]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1 w-16 rounded-b-md bg-black/40" />
              </div>
            </div>

            {/* Info row */}
            <div className="flex items-center justify-between gap-3 px-1 pt-5">
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{it.tag}</div>
                <div className="mt-1 text-base sm:text-lg font-semibold truncate">{it.title}</div>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {it.url} →
              </span>
            </div>

            {/* Proof row (bottom) */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 px-1">
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[11px]">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{it.proof.rating}</span>
                <span className="text-muted-foreground">({it.proof.reviewsCount})</span>
              </span>
              {it.proof.highlightKpis.map((k) => (
                <span key={k.label} className="rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-wider">
                  <span className="font-semibold text-foreground">{k.value}</span>
                  <span className="text-muted-foreground ml-1.5">{k.label}</span>
                </span>
              ))}
            </div>
          </button>
        ))}
      </Reveal>

      <Dialog
        open={!!active}
        onOpenChange={(o) => {
          if (!o) {
            setActive(null);
            setDevice("desktop");
          }
        }}
      >
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl [&>button]:hidden">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">{active.description}</DialogDescription>

              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="hidden sm:flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="hidden md:flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground truncate">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">https://{active.url}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 rounded-full glass p-0.5">
                    {([
                      { id: "desktop" as const, Icon: Monitor, label: "Desktop" },
                      { id: "tablet" as const, Icon: Tablet, label: "Tablet" },
                      { id: "mobile" as const, Icon: Smartphone, label: "Mobile" },
                    ]).map(({ id, Icon, label }) => (
                      <button
                        key={id}
                        onClick={() => setDevice(id)}
                        aria-label={label}
                        title={label}
                        className={
                          "p-1.5 rounded-full transition-colors " +
                          (device === id ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")
                        }
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setLoadedUrls((prev) => {
                        const next = new Set(prev);
                        next.delete(active.demoUrl);
                        return next;
                      });
                      setIframeKey((k) => k + 1);
                    }}
                    aria-label="Reîncarcă demo"
                    title="Reîncarcă"
                    className="rounded-full p-2 hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full p-2 hover:bg-white/10 transition-colors"
                    aria-label="Închide"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="max-h-[85vh] overflow-y-auto">
                <div className="relative bg-[#0a0a0a] p-3 sm:p-6 flex items-start justify-center">
                  <div
                    className="relative bg-white rounded-md overflow-hidden shadow-2xl transition-[max-width] duration-300 ease-out w-full"
                    style={{ maxWidth: deviceWidth[device], height: "70vh" }}
                  >
                    {!iframeLoaded && (
                      <div className="absolute inset-0 z-10 p-6 space-y-4 bg-white">
                        <Skeleton className="h-10 w-1/3 bg-black/5" />
                        <Skeleton className="h-40 w-full bg-black/5" />
                        <div className="grid grid-cols-3 gap-4">
                          <Skeleton className="h-24 w-full bg-black/5" />
                          <Skeleton className="h-24 w-full bg-black/5" />
                          <Skeleton className="h-24 w-full bg-black/5" />
                        </div>
                        <Skeleton className="h-6 w-2/3 bg-black/5" />
                        <Skeleton className="h-6 w-1/2 bg-black/5" />
                        {iframeSlow && (
                          <div className="absolute inset-x-0 bottom-6 text-center text-xs text-black/60 px-6">
                            Demo-ul se încarcă mai greu decât de obicei...{" "}
                            <button
                              onClick={() => {
                                setLoadedUrls((prev) => {
                                  const next = new Set(prev);
                                  next.delete(active.demoUrl);
                                  return next;
                                });
                                setIframeKey((k) => k + 1);
                              }}
                              className="underline font-medium"
                            >
                              încearcă reîncărcarea
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    <iframe
                      key={`${active.demoUrl}-${iframeKey}`}
                      src={active.demoUrl}
                      title={`${active.title} — demo live`}
                      onLoad={() => {
                        setIframeLoaded(true);
                        setLoadedUrls((prev) => {
                          if (prev.has(active.demoUrl)) return prev;
                          const next = new Set(prev);
                          next.add(active.demoUrl);
                          return next;
                        });
                      }}
                      scrolling="auto"
                      className="w-full h-full border-0 block bg-white"
                    />
                  </div>
                </div>

                <div className="px-6 py-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{active.tag}</div>
                  <div className="text-xl font-semibold mt-1">{active.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{active.description}</p>
                </div>

                <div className="px-6 pb-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Dovezi & rezultate live</div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="rounded-2xl glass p-4">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="mt-2 text-2xl font-semibold">{active.proof.rating}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {active.proof.reviewsCount} recenzii
                      </div>
                    </div>
                    {active.proof.highlightKpis.map((k) => (
                      <div key={k.label} className="rounded-2xl glass p-4">
                        <div className="text-2xl font-semibold">{k.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                          {k.label}
                        </div>
                      </div>
                    ))}
                    <div className="rounded-2xl glass p-4">
                      <div className="text-2xl font-semibold">{active.caseStudy.results[0].value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {active.caseStudy.results[0].label}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {active.proof.reviews.map((r) => (
                      <div key={r.author} className="rounded-2xl glass p-5">
                        <div className="flex items-center gap-1 text-yellow-400 mb-2">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed">"{r.text}"</p>
                        <div className="mt-3 text-xs">
                          <span className="font-semibold">{r.author}</span>
                          <span className="text-muted-foreground"> · {r.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
