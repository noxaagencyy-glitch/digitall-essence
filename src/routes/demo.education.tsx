import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/education")({
  component: EducationDemo,
  head: () => ({ meta: [{ title: "Lumen Academy — Demo" }] }),
});

function EducationDemo() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" />

      <header className="flex items-center justify-between px-6 md:px-12 py-5">
        <div style={{ fontFamily: "'Space Grotesk'" }} className="text-2xl font-bold">lumen<span className="text-[#6d4ee8]">.</span></div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a>Cursuri</a><a>Bootcamp</a><a>Mentori</a><a>Pentru companii</a>
        </nav>
        <div className="flex gap-3">
          <button className="text-sm font-medium">Login</button>
          <button className="bg-[#1a1a2e] text-white px-5 py-2.5 rounded-full text-sm font-medium">Începe acum</button>
        </div>
      </header>

      <section className="px-6 md:px-12 py-20 md:py-28 text-center">
        <div className="inline-block bg-[#6d4ee8]/10 text-[#6d4ee8] px-3 py-1.5 rounded-full text-xs font-semibold">🎓 Peste 8.400 de cursanți</div>
        <h1 style={{ fontFamily: "'Space Grotesk'" }} className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Învață abilitățile <span className="text-[#6d4ee8]">care contează</span> în 2026.
        </h1>
        <p className="mt-6 text-lg text-[#1a1a2e]/70 max-w-2xl mx-auto">Cursuri online live, proiecte reale, mentori din industrie. De la zero la angajat în 6 luni.</p>
        <div className="mt-10 flex gap-3 justify-center">
          <button className="bg-[#6d4ee8] text-white px-7 py-3.5 rounded-full font-semibold">Vezi cursurile →</button>
          <button className="border border-[#1a1a2e]/15 px-7 py-3.5 rounded-full font-semibold">Demo gratuit</button>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-[#1a1a2e]/40 font-semibold">
          <div>GOOGLE</div><div>STRIPE</div><div>NETFLIX</div><div>UIPATH</div><div>ENDAVA</div><div>BITDEFENDER</div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#6d4ee8]">Cursuri populare</div>
          <h2 style={{ fontFamily: "'Space Grotesk'" }} className="mt-3 text-4xl md:text-5xl font-bold">Ales de companii. Învățat de mii.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { tag: "Development", title: "Full-Stack JavaScript", price: "1.890 lei", weeks: "12 săpt", color: "#6d4ee8" },
            { tag: "Design", title: "UX/UI Design Bootcamp", price: "2.190 lei", weeks: "10 săpt", color: "#e85d8e" },
            { tag: "Data", title: "Data Analytics cu Python", price: "1.690 lei", weeks: "8 săpt", color: "#4ec9c9" },
            { tag: "Marketing", title: "Performance Marketing", price: "1.290 lei", weeks: "6 săpt", color: "#e8a64e" },
            { tag: "Product", title: "Product Management", price: "1.990 lei", weeks: "8 săpt", color: "#6d4ee8" },
            { tag: "AI", title: "AI Engineering Foundations", price: "2.390 lei", weeks: "10 săpt", color: "#e85d8e" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-7 border border-[#1a1a2e]/5 hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] rounded-xl mb-5" style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}88)` }} />
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.color }}>{c.tag}</div>
              <div style={{ fontFamily: "'Space Grotesk'" }} className="mt-2 text-xl font-bold">{c.title}</div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-[#1a1a2e]/60">{c.weeks} · Online live</span>
                <span className="font-bold">{c.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#1a1a2e] text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {[["94%", "Rata de finalizare"], ["8.4k+", "Cursanți activi"], ["320+", "Companii partenere"], ["4.9/5", "Rating mediu"]].map(([n, l]) => (
            <div key={l}><div style={{ fontFamily: "'Space Grotesk'" }} className="text-5xl font-bold text-[#a99eff]">{n}</div><div className="mt-2 text-sm text-white/60">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 text-center">
        <h2 style={{ fontFamily: "'Space Grotesk'" }} className="text-4xl md:text-5xl font-bold">Pregătit să începi?</h2>
        <p className="mt-4 text-[#1a1a2e]/70">Primele 2 lecții sunt gratuite. Fără card.</p>
        <button className="mt-8 bg-[#6d4ee8] text-white px-8 py-4 rounded-full font-semibold">Creează cont gratuit</button>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[#1a1a2e]/10 text-sm text-[#1a1a2e]/60 flex flex-col md:flex-row justify-between gap-4">
        <div>© Lumen Academy 2026</div>
        <div className="flex gap-6"><a>LinkedIn</a><a>YouTube</a><a>Discord</a></div>
      </footer>
    </div>
  );
}
