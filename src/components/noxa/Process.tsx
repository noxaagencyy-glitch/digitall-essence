import { SectionHeader } from "./Services";

const steps = [
  { n: "01", t: "Strategie", d: "Definim obiectivele, audiența și direcția vizuală." },
  { n: "02", t: "Design", d: "Construim concepte premium și UI sistemic." },
  { n: "03", t: "Dezvoltare", d: "Implementăm rapid, curat și optimizat." },
  { n: "04", t: "Lansare", d: "Punem totul live și optimizăm continuu." },
];

export function Process() {
  return (
    <section id="proces" className="relative py-24 sm:py-32">
      <SectionHeader eyebrow="Proces" title="Cum lucrăm — clar și predictibil" />

      <div className="mx-auto max-w-6xl px-6 mt-14 relative">
        <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-3xl p-6">
              <div className="inline-flex h-8 px-3 items-center rounded-full bg-gradient-noxa text-xs font-semibold tracking-widest text-white">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
