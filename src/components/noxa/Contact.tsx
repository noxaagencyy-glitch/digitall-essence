import { Mail, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeader } from "./Services";
import { SERVICES } from "./StartProjectDialog";
import { EmailLink, EmailText } from "./EmailLink";

function openStartDialog(services?: string[]) {
  window.dispatchEvent(
    new CustomEvent("noxa:open-start", { detail: { services: services ?? [] } }),
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Contact" title="Hai să-ți creștem afacerea online" />

      <div className="mx-auto max-w-5xl px-6 mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: CTA card */}
        <div className="lg:col-span-3 relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-noxa opacity-30 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-accent/30 blur-[100px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Răspuns în 24h
            </div>

            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">
              Spune-ne <span className="text-gradient">ce ai în plan</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md">
              Configurezi totul în câțiva pași — alegi serviciul, bugetul și timeline-ul, iar noi îți răspundem cu o ofertă personalizată.
            </p>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Sau alege direct un serviciu
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => openStartDialog([id])}
                    className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => openStartDialog()}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-6 py-3.5 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform"
            >
              Începe acum cererea de ofertă
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Right: contact options */}
        <div className="lg:col-span-2 space-y-4">
          <EmailLink className="flex items-center gap-4 glass rounded-3xl p-5 hover:ring-glow transition-all">
            <div className="h-11 w-11 rounded-2xl bg-gradient-noxa flex items-center justify-center"><Mail className="h-5 w-5 text-white" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium"><EmailText /></div>
            </div>
          </EmailLink>
          <a href="https://wa.me/40000000000" className="flex items-center gap-4 glass rounded-3xl p-5 hover:ring-glow transition-all">
            <div className="h-11 w-11 rounded-2xl bg-gradient-noxa flex items-center justify-center"><MessageCircle className="h-5 w-5 text-white" /></div>
            <div>
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="font-medium">Chat direct</div>
            </div>
          </a>
        </div>
      </div>

    </section>
  );
}
