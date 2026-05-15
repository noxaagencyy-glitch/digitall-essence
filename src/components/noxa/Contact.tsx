import { Mail, MessageCircle, Send, Check } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Services";

const SERVICES = [
  "Website de prezentare",
  "Magazin online",
  "Landing page",
  "Branding & identitate vizuală",
  "Redesign website",
  "Website cu AI",
  "SEO & optimizare",
  "Altceva",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Contact" title="Hai să-ți creștem afacerea online" subtitle="Primești o ofertă personalizată, gratuită, în maxim 24h. Fără obligații." />

      <div className="mx-auto max-w-5xl px-6 mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Field label="Nume" name="name" />
            <Field label="Email" type="email" name="email" />
            <Field label="Telefon" name="phone" type="tel" optional />
            <Field label="Companie" name="company" optional />

            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Alege unul sau mai multe servicii
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const active = selected.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggle(s)}
                      className={
                        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs border transition-all " +
                        (active
                          ? "bg-foreground text-background border-foreground"
                          : "glass border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30")
                      }
                    >
                      {active && <Check className="h-3 w-3" />}
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Despre proiect</label>
              <textarea rows={5} className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Câteva detalii..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-3 mt-2">
              <p className="text-xs text-muted-foreground">Trimițând, ești de acord cu politica noastră.</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-5 py-3 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform">
                {sent ? "Mesaj trimis ✓" : "Solicită oferta gratuită"} <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <a href="mailto:hello@noxa.agency" className="flex items-center gap-4 glass rounded-3xl p-5 hover:ring-glow transition-all">
            <div className="h-11 w-11 rounded-2xl bg-gradient-noxa flex items-center justify-center"><Mail className="h-5 w-5 text-white" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium">hello@noxa.agency</div>
            </div>
          </a>
          <a href="https://wa.me/40000000000" className="flex items-center gap-4 glass rounded-3xl p-5 hover:ring-glow transition-all">
            <div className="h-11 w-11 rounded-2xl bg-gradient-noxa flex items-center justify-center"><MessageCircle className="h-5 w-5 text-white" /></div>
            <div>
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="font-medium">Chat direct</div>
            </div>
          </a>
          <div className="glass rounded-3xl p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Social</div>
            <div className="mt-3 flex gap-2">
              {["IG", "X", "LI", "BE"].map((s) => (
                <a key={s} className="h-10 w-10 rounded-xl glass flex items-center justify-center text-xs font-semibold hover:bg-white/10" href="#">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/40000000000"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-noxa flex items-center justify-center glow-purple hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </section>
  );
}

function Field({ label, name, type = "text", optional = false }: { label: string; name: string; type?: string; optional?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
        {label}
        {optional && <span className="normal-case tracking-normal text-[10px] text-muted-foreground/70">(opțional)</span>}
      </label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
        placeholder={label}
      />
    </div>
  );
}
