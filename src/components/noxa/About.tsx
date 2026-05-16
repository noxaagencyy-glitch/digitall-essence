import { Heart, Eye, Zap, ShieldCheck, Code2, Palette, Megaphone, Headphones, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";
import { NoxaLogo } from "./Logo";
import { Words } from "./Words";

const values = [
  {
    icon: Heart,
    title: "Te ascultăm cu adevărat",
    desc: "Nu vindem template-uri. Înțelegem brandul tău, publicul și obiectivele înainte de a desena un singur pixel.",
  },
  {
    icon: Eye,
    title: "Atenți la fiecare detaliu",
    desc: "Fiecare pixel își câștigă locul. Spațiere, tipografie, animații — totul este gândit milimetric.",
  },
  {
    icon: Zap,
    title: "Tehnologie de top",
    desc: "Folosim cele mai noi tehnologii și AI ca să livrăm rapid, fără să sacrificăm calitatea premium.",
  },
  {
    icon: ShieldCheck,
    title: "Suport real, nu chatbot",
    desc: "Suntem partenerul tău digital pe termen lung. Răspundem rapid și ești mereu pe mâini bune.",
  },
];

const team = [
  {
    name: "Andrei Mihai",
    role: "Founder & CEO",
    bio: "Strategie digitală și viziune de produs. Se asigură că fiecare proiect aduce rezultate reale.",
    icon: Megaphone,
  },
  {
    name: "Raluca Ionescu",
    role: "Lead Designer",
    bio: "Transformă idei în interfețe premium. Obsedată de tipografie, ritm vizual și micro-interacțiuni.",
    icon: Palette,
  },
  {
    name: "Cristian Dumitru",
    role: "Lead Developer",
    bio: "Construiește site-uri rapide, scalabile și securizate. Cod curat, performanță 98+.",
    icon: Code2,
  },
  {
    name: "Elena Stoica",
    role: "Client Success",
    bio: "Punctul tău de contact. Coordonează lansarea și se asigură că totul merge perfect după.",
    icon: Headphones,
  },
];

export function About() {
  return (
    <section id="despre" className="relative py-24 sm:py-32 overflow-clip">
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-noxa opacity-10 blur-[140px]" />

      <SectionHeader eyebrow="Cine suntem" title="O echipă care îți ia proiectul în serios" />

      <div className="mx-auto max-w-4xl px-6 mt-10 text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            Povestea noastră
          </div>
        </Reveal>

        <Words
          as="p"
          className="text-lg sm:text-2xl text-foreground/90 leading-relaxed font-light tracking-tight"
          text="NOXA Agency transformă ideile tale într-o prezență online care inspiră încredere și aduce clienți reali."
          highlight={["noxa", "agency"]}
          step={60}
        />

        <Words
          as="p"
          className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          text="Nu suntem doar un furnizor de site-uri — suntem partenerul tău digital, echipa din spate care îți face brandul să strălucească prin design premium, tehnologie modernă și o obsesie pentru detalii."
          step={45}
          delay={400}
        />
      </div>

      <Reveal stagger direction="up" className="mx-auto max-w-6xl px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => (
          <div
            key={v.title}
            data-reveal-item
            className="group relative glass rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:ring-glow"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-noxa opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            <div className="relative">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-gradient-noxa shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]">
                <v.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <div className="mx-auto max-w-6xl px-6 mt-24">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Echipa
            </div>
            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">
              Oamenii din spatele <span className="text-gradient">NOXA</span>
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Patru oameni cu o singură misiune: să-ți construim cea mai bună prezență online.
            </p>
          </div>
        </Reveal>

        <Reveal stagger direction="up" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              data-reveal-item
              className="group relative glass-strong rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-32 rounded-2xl bg-gradient-to-br from-[oklch(0.18_0.05_270)] to-[oklch(0.14_0.06_295)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-noxa opacity-20 group-hover:opacity-40 transition-opacity blur-2xl" />
                <m.icon className="relative h-12 w-12 text-white/85" strokeWidth={1.5} />
                <div className="absolute bottom-2 right-2 opacity-60">
                  <NoxaLogo className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-base font-semibold">{m.name}</div>
                <div className="text-xs uppercase tracking-wider text-accent mt-0.5">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Pricing pitch */}
      <Reveal>
        <div className="mt-20 mx-auto max-w-3xl px-6">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-accent/40 via-white/10 to-electric/40">
            <div className="rounded-[15px] glass-strong px-5 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent mb-1.5">
                  Cel mai bun raport calitate / preț
                </div>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Suntem printre <span className="text-gradient font-semibold">cele mai accesibile agenții</span> de web design din România.
                  Cere o ofertă și convinge-te singur — totul e clar, corect și surprinzător de ieftin.
                </p>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("noxa:open-start"))}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-5 py-3 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform whitespace-nowrap"
              >
                Cere o ofertă
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
