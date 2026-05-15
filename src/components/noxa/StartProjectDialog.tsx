import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Check, Sparkles, Send, Globe, ShoppingBag, Layout, Palette, RefreshCcw, MoreHorizontal, AlertCircle } from "lucide-react";

export const SERVICES = [
  { id: "site", label: "Website prezentare", Icon: Globe },
  { id: "shop", label: "Magazin online", Icon: ShoppingBag },
  { id: "landing", label: "Landing page", Icon: Layout },
  { id: "brand", label: "Branding & identitate", Icon: Palette },
  { id: "redesign", label: "Redesign website", Icon: RefreshCcw },
  { id: "other", label: "Altceva", Icon: MoreHorizontal },
];

const BUDGETS = ["< €500", "€500 – €1.000", "€1.000 – €3.000", "€3.000 – €7.000", "€7.000+"];
const TIMELINES = ["Cât mai repede", "În 2-4 săptămâni", "1-2 luni", "Sunt flexibil"];

const STEPS = ["Servicii", "Buget & timeline", "Despre tine", "Trimite"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"services" | "budget" | "timeline" | "name" | "email", string>>;

export function StartProjectDialog({
  open,
  onOpenChange,
  initialServices,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  initialServices?: string[];
}) {
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open && initialServices && initialServices.length > 0) {
      setServices((prev) => Array.from(new Set([...prev, ...initialServices])));
    }
  }, [open, initialServices]);

  const toggleService = (id: string) => {
    setServices((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
    setErrors((e) => ({ ...e, services: undefined }));
  };

  const validateStep = (s: number): Errors => {
    const e: Errors = {};
    if (s === 0 && services.length === 0) e.services = "Alege cel puțin un serviciu";
    if (s === 1) {
      if (!budget) e.budget = "Selectează un buget estimativ";
      if (!timeline) e.timeline = "Selectează un timeline";
    }
    if (s === 2) {
      if (!form.name.trim()) e.name = "Numele este obligatoriu";
      if (!form.email.trim()) e.email = "Email-ul este obligatoriu";
      else if (!EMAIL_RE.test(form.email.trim())) e.email = "Email invalid";
    }
    return e;
  };

  const tryNext = () => {
    const e = validateStep(step);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setServices([]);
    setBudget("");
    setTimeline("");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setErrors({});
    setSent(false);
  };

  const submit = () => {
    setSent(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(reset, 300);
      }}
    >
      <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl [&>button]:hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-noxa opacity-30 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[100px] pointer-events-none" />

        <div className="relative p-7 sm:p-9">
          <DialogTitle className="sr-only">Începe proiectul tău</DialogTitle>
          <DialogDescription className="sr-only">Configurează detaliile proiectului tău în câțiva pași.</DialogDescription>

          {/* Header */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Începe proiectul tău
          </div>

          {!sent && (
            <>
              {/* Progress */}
              <div className="mt-5 flex items-center gap-2">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex-1">
                    <div
                      className={
                        "h-1 rounded-full transition-all duration-500 " +
                        (i <= step ? "bg-gradient-noxa" : "bg-white/10")
                      }
                    />
                    <div
                      className={
                        "mt-2 text-[10px] uppercase tracking-widest transition-colors " +
                        (i === step ? "text-foreground" : "text-muted-foreground/60")
                      }
                    >
                      {String(i + 1).padStart(2, "0")} · {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step body */}
              <div className="mt-7 min-h-[280px]">
                {step === 0 && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-semibold tracking-tight">Ce ai în plan?</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Alege unul sau mai multe servicii.</p>
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES.map(({ id, label, Icon }) => {
                        const active = services.includes(id);
                        return (
                          <button
                            key={id}
                            onClick={() => toggleService(id)}
                            className={
                              "group flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 " +
                              (active
                                ? "border-accent/60 bg-accent/10 ring-1 ring-accent/40"
                                : "border-white/10 glass hover:border-white/25 hover:bg-white/5")
                            }
                          >
                            <div
                              className={
                                "h-9 w-9 rounded-xl flex items-center justify-center transition-all " +
                                (active ? "bg-gradient-noxa text-white" : "bg-white/5 text-muted-foreground")
                              }
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium flex-1">{label}</span>
                            {active && <Check className="h-4 w-4 text-accent" />}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && <FieldError msg={errors.services} />}
                  </div>
                )}

                {step === 1 && (
                  <div className="animate-fade-in space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">Buget estimativ</h2>
                      <p className="mt-1 text-sm text-muted-foreground">Ne ajută să-ți pregătim oferta potrivită.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {BUDGETS.map((b) => (
                          <button
                            key={b}
                            onClick={() => setBudget(b)}
                            className={
                              "rounded-full px-4 py-2.5 text-sm border transition-all " +
                              (budget === b
                                ? "bg-foreground text-background border-foreground"
                                : "glass border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30")
                            }
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                      {errors.budget && <FieldError msg={errors.budget} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">Când vrei să începem?</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={
                              "rounded-full px-4 py-2.5 text-sm border transition-all " +
                              (timeline === t
                                ? "bg-foreground text-background border-foreground"
                                : "glass border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30")
                            }
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {errors.timeline && <FieldError msg={errors.timeline} />}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-semibold tracking-tight">Despre tine</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Te contactăm în maxim 24h cu o propunere.</p>
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input label="Nume" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                      <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                      <Input label="Telefon" type="tel" optional value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                      <Input label="Companie" optional value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                      <div className="sm:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">
                          Mesaj <span className="normal-case tracking-normal text-[10px] text-muted-foreground/70">(opțional)</span>
                        </label>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Câteva detalii despre proiect..."
                          className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-semibold tracking-tight">Hai să verificăm</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Toate datele arată bine? Trimite și luăm legătura.</p>
                    <div className="mt-5 space-y-3">
                      <Summary label="Servicii" value={services.map((id) => SERVICES.find((s) => s.id === id)?.label).filter(Boolean).join(", ")} />
                      <Summary label="Buget" value={budget} />
                      <Summary label="Timeline" value={timeline} />
                      <Summary label="Contact" value={`${form.name} · ${form.email}${form.phone ? " · " + form.phone : ""}`} />
                      {form.company && <Summary label="Companie" value={form.company} />}
                      {form.message && <Summary label="Mesaj" value={form.message} />}
                    </div>
                  </div>
                )}
              </div>

              {/* Nav */}
              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ArrowLeft className="h-4 w-4" /> Înapoi
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => canNext && setStep((s) => s + 1)}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-5 py-2.5 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100"
                  >
                    Continuă <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-5 py-2.5 text-sm font-medium text-white glow-purple hover:scale-[1.02] transition-transform"
                  >
                    Trimite cererea <Send className="h-4 w-4" />
                  </button>
                )}
              </div>
            </>
          )}

          {sent && (
            <div className="animate-fade-in text-center py-10">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-noxa flex items-center justify-center glow-purple">
                <Check className="h-7 w-7 text-white" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">Cererea ta a fost trimisă</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                Mulțumim, {form.name || "îți"} răspundem în maxim 24h cu o propunere personalizată.
              </p>
              <button
                onClick={() => onOpenChange(false)}
                className="mt-7 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:bg-white/5 transition-colors"
              >
                Închide
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  optional = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
        {label}
        {optional && <span className="normal-case tracking-normal text-[10px] text-muted-foreground/70">(opțional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm">{value || "—"}</div>
    </div>
  );
}
