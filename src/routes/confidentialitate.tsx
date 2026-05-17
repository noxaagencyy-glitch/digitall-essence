import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Cookie } from "lucide-react";
import { openCookieManager } from "@/components/noxa/CookieBanner";
import { EmailLink, EmailText } from "@/components/noxa/EmailLink";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — NOXA Agency" },
      { name: "description", content: "Cum colectează și procesează NOXA Agency datele personale și cookie-urile." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Înapoi la site
        </Link>
        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">Politica de confidențialitate</h1>
        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Date colectate">
            Colectăm doar datele necesare: nume, email, mesaj și informații despre proiect, transmise voluntar prin formularele site-ului sau prin email.
          </Section>
          <Section title="2. Scopul prelucrării">
            Datele sunt folosite pentru a-ți răspunde la solicitări, a transmite oferte și a livra serviciile contractate. Nu vindem date către terți.
          </Section>
          <Section title="3. Temei legal (GDPR)">
            Prelucrarea se face în baza consimțământului tău, a interesului legitim de a comunica cu clienții potențiali și a obligațiilor contractuale.
          </Section>
          <Section title="4. Stocare și securitate">
            Datele sunt stocate pe servere securizate, pe durata necesară scopului colectării sau cât prevede legea (de regulă maxim 5 ani).
          </Section>
          <Section title="5. Drepturile tale">
            Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Trimite cererile la{" "}
            <EmailLink className="underline hover:text-foreground"><EmailText /></EmailLink>.
          </Section>
          <Section title="6. Cookie-uri">
            Folosim cookie-uri strict necesare, analitice și (opțional) de marketing. Poți schimba oricând preferințele tale.
            <div className="mt-3">
              <button
                onClick={() => openCookieManager()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-4 py-2 text-xs font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.55_0.27_285_/_0.7)] hover:opacity-95"
              >
                <Cookie className="h-3.5 w-3.5" /> Gestionează cookie-urile
              </button>
            </div>
          </Section>
          <Section title="7. Contact">
            Pentru orice întrebare privind datele tale ne poți scrie la{" "}
            <EmailLink className="underline hover:text-foreground"><EmailText /></EmailLink>.
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
      <div className="mt-2">{children}</div>
    </section>
  );
}
