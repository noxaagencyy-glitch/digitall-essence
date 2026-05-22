import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Services";

const faqs = [
  { q: "Cât durează un proiect?", a: "În medie între 2 și 6 săptămâni, în funcție de complexitate." },
  { q: "Care este investiția?", a: "Pornește de la 1.500€ pentru landing pages și crește în funcție de scope." },
  { q: "Lucrați cu brand-uri internaționale?", a: "Da, livrăm proiecte global, în engleză și română." },
  { q: "Oferiți și mentenanță?", a: "Da, avem pachete lunare de mentenanță și optimizare continuă." },
  { q: "Folosiți AI în proiecte?", a: "Da, integrăm AI nativ acolo unde aduce valoare reală." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative pt-24 sm:pt-32 pb-10 sm:pb-14">
      <SectionHeader eyebrow="FAQ" title="Întrebări frecvente" />
      <div className="mx-auto max-w-3xl px-6 mt-14 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left glass rounded-2xl p-5 transition-all hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <Plus className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </div>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden text-sm text-muted-foreground">{f.a}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
