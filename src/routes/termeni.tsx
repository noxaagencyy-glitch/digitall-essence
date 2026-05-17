import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EmailLink, EmailText } from "@/components/noxa/EmailLink";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — NOXA Agency" },
      { name: "description", content: "Termenii și condițiile de utilizare a serviciilor NOXA Agency." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="relative min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Înapoi la site
        </Link>
        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">Termeni și condiții</h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}</p>

        <div className="prose prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Despre noi">
            NOXA Agency („NOXA”, „noi”) oferă servicii de web design, dezvoltare, branding și marketing digital. Prin accesarea acestui site sau contractarea serviciilor, ești de acord cu termenii de mai jos.
          </Section>
          <Section title="2. Servicii">
            Serviciile sunt descrise pe site și detaliate în ofertele personalizate. Termenele, livrabilele și prețul final se confirmă prin contract sau document de comandă.
          </Section>
          <Section title="3. Plăți">
            Plățile se efectuează conform ofertei acceptate. De regulă, lucrăm cu avans și plăți pe etape. Facturile sunt emise în EUR sau RON.
          </Section>
          <Section title="4. Proprietate intelectuală">
            După plata integrală, clientul deține drepturile asupra livrabilelor finale. NOXA păstrează dreptul de a folosi proiectul în portofoliu și materiale promoționale.
          </Section>
          <Section title="5. Răspundere">
            NOXA nu răspunde pentru pierderi indirecte sau pentru daune cauzate de utilizarea greșită a livrabilelor. Răspunderea totală este limitată la valoarea proiectului.
          </Section>
          <Section title="6. Reziliere">
            Oricare dintre părți poate înceta colaborarea cu notificare scrisă. Sumele plătite pentru munca deja efectuată nu se restituie.
          </Section>
          <Section title="7. Contact">
            Pentru orice întrebare ne poți scrie la <EmailLink className="underline hover:text-foreground"><EmailText /></EmailLink>.
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
