import { ArrowUpRight, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";
import { SectionHeader } from "./Services";
import { SERVICES } from "./StartProjectDialog";

function openStartDialog(services?: string[]) {
  window.dispatchEvent(
    new CustomEvent("noxa:open-start", { detail: { services: services ?? [] } }),
  );
}

const TRUST = [
  { Icon: Clock, label: "Răspuns în 24h" },
  { Icon: ShieldCheck, label: "Ofertă fără obligații" },
  { Icon: Zap, label: "Start rapid în 48h" },
];

export function Contact() {
  return (
    <section id="contact" className="relative pt-10 sm:pt-14 pb-12 sm:pb-16">
      <SectionHeader eyebrow="Contact" title="Hai să-ți creștem afacerea online" />

      <div className="mx-auto max-w-4xl px-6 mt-14">
        <div className="relative glass-strong rounded-[2rem] p-8 sm:p-12 overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-noxa opacity-30 blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[110px] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Răspuns în 24h
            </div>

            <h3 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Spune-ne <span className="text-gradient">ce ai în plan</span>
            </h3>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Configurezi totul în câțiva pași — alegi serviciul, bugetul și timeline-ul,
              iar noi îți răspundem cu o ofertă personalizată.
            </p>

            {/* Trust row */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {TRUST.map(({ Icon, label }, i) => (
                <div key={label} className="flex items-center gap-4">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-white/20" />}
                  <div className="inline-flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-9">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Sau alege direct un serviciu
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SERVICES.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => openStartDialog([id])}
                    className="group inline-flex items-center gap-2 rounded-full glass border border-white/10 px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-white/30 hover:bg-white/5 transition-all"
                  >
                    <Icon className="h-3.5 w-3.5 group-hover:text-accent transition-colors" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => openStartDialog()}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-7 py-4 text-sm font-medium text-white glow-purple hover:scale-[1.03] transition-transform"
            >
              Începe acum cererea de ofertă
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
