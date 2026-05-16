import { SectionHeader } from "./Services";

const steps = [
  { n: "01", t: "Strategie", d: "Definim obiectivele, audiența și direcția vizuală." },
  { n: "02", t: "Design", d: "Construim concepte premium și UI sistemic." },
  { n: "03", t: "Dezvoltare", d: "Implementăm rapid, curat și optimizat." },
  { n: "04", t: "Lansare", d: "Punem totul live și optimizăm continuu." },
];

export function Process() {
  return (
    <section id="proces" className="relative py-24 sm:py-32 overflow-clip">
      <SectionHeader eyebrow="Proces" title="Cum lucrăm — clar și predictibil" />

      {/* Parallax glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-gradient-noxa opacity-15 blur-[140px] pointer-events-none"
      />

      <div className="mx-auto max-w-6xl px-6 mt-14 relative">
        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative mb-10">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-noxa shadow-[0_0_16px_oklch(0.65_0.22_290_/_0.8)]"
          />
          <div className="relative grid grid-cols-4">
            {steps.map((_, i) => {
              return (
                <div key={i} className="flex justify-center">
                  <div
                    className="h-4 w-4 rounded-full bg-gradient-noxa shadow-[0_0_18px_oklch(0.65_0.22_290_/_0.9)]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical rail */}
        <div className="md:hidden absolute left-7 top-4 bottom-4 w-px bg-white/10">
          <div
            className="absolute left-0 top-0 h-full w-full bg-gradient-noxa shadow-[0_0_12px_oklch(0.65_0.22_290_/_0.8)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s) => {
            return (
              <div
                key={s.n}
                className="relative glass rounded-3xl p-6 ring-glow"
              >
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-3xl bg-gradient-noxa blur-xl opacity-20"
                />
                <div className="relative">
                  <div
                    className="inline-flex h-8 px-3 items-center rounded-full text-xs font-semibold tracking-widest bg-gradient-noxa text-white shadow-[0_10px_30px_-8px_oklch(0.55_0.27_285_/_0.7)]"
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
