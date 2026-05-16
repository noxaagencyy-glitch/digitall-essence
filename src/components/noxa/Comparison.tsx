import { X, Check, Clock, AlertTriangle, DollarSign, Code, MessageSquareOff, TrendingDown, Sparkles, Zap, Headphones, Rocket, ShieldCheck, TrendingUp, Heart } from "lucide-react";
import { SectionHeader } from "./Services";
import { Reveal } from "./Reveal";
import { NoxaLogo } from "./Logo";

const others = [
  { icon: DollarSign, text: "Pachete „premium” la preț mare, dar livrează minimul" },
  { icon: Clock, text: "Aștepți săptămâni întregi pentru un simplu update" },
  { icon: Code, text: "Folosesc template-uri și tehnologii învechite din 2018" },
  { icon: TrendingDown, text: "Site-uri lente, scor SEO slab, conversii zero" },
  { icon: AlertTriangle, text: "Calitate slabă, design generic, fără identitate" },
  { icon: MessageX, text: "Suport prin chatbot, răspund în 3-5 zile lucrătoare" },
  { icon: X, text: "Costuri ascunse, hosting separat, mentenanță extra" },
  { icon: X, text: "Te lasă singur după lansare, fără strategie pe termen lung" },
];

const us = [
  { icon: Sparkles, text: "Design premium, custom, gândit pentru brandul tău" },
  { icon: Rocket, text: "Lansare rapidă în 7-14 zile, fără compromisuri" },
  { icon: Zap, text: "Tehnologii moderne 2026 — React, AI, performanță 98+" },
  { icon: TrendingUp, text: "SEO inclus, viteză de top, conversii reale" },
  { icon: Check, text: "Atenție milimetrică la fiecare pixel și detaliu" },
  { icon: Headphones, text: "Suport real cu oameni adevărați, răspundem în ore" },
  { icon: ShieldCheck, text: "Hosting, SSL și mentenanță incluse, fără surprize" },
  { icon: Heart, text: "Partener pe termen lung, te susținem și după lansare" },
];

export function Comparison() {
  return (
    <section id="comparatie" className="relative py-24 sm:py-32 overflow-clip">
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-noxa opacity-[0.07] blur-[140px]" />

      <SectionHeader
        eyebrow="De ce ne aleg clienții"
        title="Diferența se vede din prima zi"
      />

      <Reveal>
        <p className="mx-auto max-w-2xl px-6 mt-6 text-center text-muted-foreground">
          Multe agenții promit munți și livrează pietre. Noi facem invers — promitem realist și
          livrăm peste așteptări.
        </p>
      </Reveal>

      <div className="mx-auto max-w-6xl px-6 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Other agencies */}
        <Reveal direction="left">
          <div className="relative glass rounded-3xl p-7 sm:p-8 h-full border border-red-500/10">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-red-400/80">Alte agenții</div>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground/70">Promit mult, livrează puțin</h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-400" strokeWidth={2.5} />
                </div>
              </div>

              <ul className="space-y-3">
                {others.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-red-500/[0.04] border border-red-500/10"
                  >
                    <div className="mt-0.5 h-7 w-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <o.icon className="h-3.5 w-3.5 text-red-400" />
                    </div>
                    <span className="text-sm text-foreground/65 leading-relaxed line-through decoration-red-500/30 decoration-1">
                      {o.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* NOXA */}
        <Reveal direction="right">
          <div className="relative glass-strong rounded-3xl p-7 sm:p-8 h-full ring-1 ring-white/10 hover:ring-glow transition-all">
            <div className="absolute -inset-px rounded-3xl bg-gradient-noxa opacity-20 blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-accent">NOXA Agency</div>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Livrăm <span className="text-gradient">premium real</span>
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-noxa flex items-center justify-center shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]">
                  <NoxaLogo className="h-6 w-6" />
                </div>
              </div>

              <ul className="space-y-3">
                {us.map((u, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="mt-0.5 h-7 w-7 rounded-lg bg-gradient-noxa flex items-center justify-center shrink-0 shadow-[0_6px_20px_-6px_oklch(0.55_0.27_285_/_0.6)]">
                      <u.icon className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-foreground/90 leading-relaxed">{u.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          <span className="text-gradient font-semibold">Concluzia?</span> Cu NOXA primești mai mult, plătești corect și dormi liniștit.
        </p>
      </Reveal>
    </section>
  );
}
