import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EmailLink, EmailText } from "@/components/noxa/EmailLink";

const LAST_UPDATED = "17.05.2026";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — NOXA Agency" },
      {
        name: "description",
        content: "Termenii și condițiile de utilizare a serviciilor NOXA Agency.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="relative min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Înapoi la site
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Termeni și condiții</h1>

        <p className="mt-3 text-sm text-muted-foreground">Ultima actualizare: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Despre noi">NOXA Agency oferă servicii de web design și dezvoltare.</Section>

          <Section title="2. Contact">
            <EmailLink className="underline hover:text-foreground">
              <EmailText />
            </EmailLink>
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
