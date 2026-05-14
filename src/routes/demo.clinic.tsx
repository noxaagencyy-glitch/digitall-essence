import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/clinic")({
  component: ClinicDemo,
  head: () => ({ meta: [{ title: "Smile Dental — Demo" }] }),
});

function ClinicDemo() {
  return (
    <div className="min-h-screen bg-white text-[#0f1f2e]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />

      {/* Top utility bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 md:px-12 py-2 text-xs bg-[#0f1f2e] text-white/80">
        <div className="flex items-center gap-4">
          <span>📞 +40 21 555 0199</span>
          <span className="hidden md:inline">📍 Calea Victoriei 89, București</span>
          <span className="hidden lg:inline">L–V 08:00–20:00 · S 09:00–14:00</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-[#c9a960]">Urgențe 24/7</a>
          <a className="hover:text-[#c9a960]">Asigurări medicale</a>
        </div>
      </div>

      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#0f1f2e]/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#c9a960]" />
          <div className="text-xl font-semibold">Smile Dental</div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a>Servicii</a><a>Echipa</a><a>Tarife</a><a>Recenzii</a><a>Contact</a>
        </nav>
        <button className="bg-[#0f1f2e] text-white px-5 py-2.5 text-sm font-medium rounded-md">Programare</button>
      </header>

      <section className="px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#c9a960]/10 text-[#a8893f] px-3 py-1.5 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a960]" /> Clinică acreditată · Sector 1
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">Zâmbetul tău, în mâini sigure.</h1>
          <p className="mt-6 text-lg text-[#0f1f2e]/70 max-w-lg">Echipa noastră de medici stomatologi specializați oferă servicii complete, de la igienizare profesională la implantologie de ultimă generație.</p>
          <div className="mt-8 flex gap-3">
            <button className="bg-[#0f1f2e] text-white px-6 py-3.5 rounded-md font-medium">Programează consultație</button>
            <button className="border border-[#0f1f2e]/20 px-6 py-3.5 rounded-md font-medium">Vezi servicii</button>
          </div>
          <div className="mt-10 flex gap-8">
            <div><div className="text-3xl font-bold">15+</div><div className="text-sm text-[#0f1f2e]/60">ani experiență</div></div>
            <div><div className="text-3xl font-bold">12k+</div><div className="text-sm text-[#0f1f2e]/60">pacienți</div></div>
            <div><div className="text-3xl font-bold">4.9★</div><div className="text-sm text-[#0f1f2e]/60">Google reviews</div></div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80" alt="Cabinet stomatologic Smile" className="aspect-square w-full object-cover rounded-3xl" loading="lazy" />
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#f5f7f9]">
        <div className="text-center">
          <div className="text-sm font-semibold text-[#c9a960] uppercase tracking-wider">Servicii</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tot ce ai nevoie, sub un singur acoperiș</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { name: "Implantologie", desc: "Implanturi Straumann și Nobel Biocare cu garanție pe viață." },
            { name: "Estetică dentară", desc: "Fațete ceramice, albire profesională, design digital al zâmbetului." },
            { name: "Ortodonție", desc: "Aparate Invisalign și autoligaturante pentru toate vârstele." },
            { name: "Endodonție microscopică", desc: "Tratamente de canal precise, sub microscop dentar." },
            { name: "Parodontologie", desc: "Tratamente avansate pentru sănătatea gingiilor." },
            { name: "Stomatologie pediatrică", desc: "Cabinet prietenos pentru cei mici, cu sedare conștientă." },
          ].map((s) => (
            <div key={s.name} className="bg-white p-7 rounded-2xl border border-[#0f1f2e]/5">
              <div className="w-10 h-10 rounded-lg bg-[#c9a960]/15 flex items-center justify-center text-[#c9a960] font-bold">+</div>
              <div className="mt-4 text-lg font-semibold">{s.name}</div>
              <p className="mt-2 text-sm text-[#0f1f2e]/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-[#c9a960] uppercase tracking-wider">Echipa</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Medici cu pasiune și experiență</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Dr. Andrei Popescu", spec: "Implantologie · Chirurgie orală", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80" },
            { name: "Dr. Ioana Marinescu", spec: "Estetică dentară · Fațete", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=80" },
            { name: "Dr. Mihai Stoica", spec: "Ortodonție · Invisalign", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80" },
          ].map((m) => (
            <div key={m.name} className="text-center">
              <img src={m.photo} alt={m.name} className="aspect-square w-full object-cover rounded-2xl" loading="lazy" />
              <div className="mt-4 font-semibold text-lg">{m.name}</div>
              <div className="text-sm text-[#0f1f2e]/60">{m.spec}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#0f1f2e] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Programează-te în 30 de secunde</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">Alege medicul, data și ora. Confirmare imediată pe SMS și email.</p>
        <button className="mt-8 bg-[#c9a960] text-[#0f1f2e] px-8 py-4 rounded-md font-semibold">Rezervă consultație gratuită</button>
      </section>

      <footer className="bg-[#f5f7f9] border-t border-[#0f1f2e]/10">
        <div className="px-6 md:px-12 py-14 grid md:grid-cols-4 gap-10 text-sm text-[#0f1f2e]/70">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#c9a960]" />
              <div className="text-lg font-semibold text-[#0f1f2e]">Smile Dental</div>
            </div>
            <p className="mt-3 text-xs leading-relaxed">Clinică stomatologică acreditată în Sector 1. Servicii complete pentru întreaga familie.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#0f1f2e] font-semibold mb-3">Servicii</div>
            <ul className="space-y-1.5 text-xs"><li><a>Implantologie</a></li><li><a>Estetică dentară</a></li><li><a>Ortodonție Invisalign</a></li><li><a>Stomatologie pediatrică</a></li><li><a>Urgențe dentare</a></li></ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#0f1f2e] font-semibold mb-3">Pacienți</div>
            <ul className="space-y-1.5 text-xs"><li><a>Programare online</a></li><li><a>Tarife</a></li><li><a>Asigurări medicale</a></li><li><a>Plan de tratament</a></li><li><a>Recenzii pacienți</a></li></ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#0f1f2e] font-semibold mb-3">Legal & info</div>
            <ul className="space-y-1.5 text-xs">
              <li><a>Termeni și condiții</a></li>
              <li><a>Politica de confidențialitate</a></li>
              <li><a>GDPR pacienți</a></li>
              <li><a>Politica de cookies</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="px-6 md:px-12 py-5 border-t border-[#0f1f2e]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#0f1f2e]/55">
          <div>© Smile Dental Clinic 2026 · CUI RO23456789 · Autorizație DSP nr. 1234/2019 · Calea Victoriei 89, București</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#0f1f2e]">ANPC</a>
            <a className="hover:text-[#0f1f2e]">SOL</a>
            <a className="hover:text-[#0f1f2e]">CMR</a>
            <a className="hover:text-[#0f1f2e]">Facebook</a>
            <a className="hover:text-[#0f1f2e]">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
