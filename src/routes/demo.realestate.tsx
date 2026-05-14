import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/realestate")({
  component: RealEstateDemo,
  head: () => ({ meta: [{ title: "Vanta Estates — Demo" }] }),
});

function RealEstateDemo() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#e8e6e0]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap" />

      <header className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/5">
        <div style={{ fontFamily: "'Cormorant Garamond'" }} className="text-3xl tracking-wide">Vanta<span className="text-[#b8956a]"> Estates</span></div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a>Proprietăți</a><a>Lux</a><a>Investiții</a><a>Despre</a><a>Contact</a>
        </nav>
        <button className="border border-[#b8956a] text-[#b8956a] px-5 py-2.5 text-sm tracking-wide">Consultanță privată</button>
      </header>

      <section className="px-8 md:px-16 py-24 md:py-36">
        <div className="text-xs tracking-[0.4em] uppercase text-[#b8956a] mb-6">Proprietăți premium · București · Brașov · Mamaia</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond'" }} className="text-6xl md:text-8xl font-light leading-[1] max-w-4xl">Acasă nu este un loc. Este o experiență.</h1>
        <p className="mt-10 text-lg text-[#e8e6e0]/65 max-w-xl font-light">Selecție curatoriată de proprietăți premium pentru cei care înțeleg că arhitectura, locația și detaliul fac diferența.</p>

        <div className="mt-14 bg-[#1a2129] border border-white/5 p-6 rounded-sm grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Locație", "Tip", "Preț min", "Preț max", "Camere"].map((l) => (
            <div key={l}>
              <div className="text-xs tracking-[0.2em] uppercase text-[#e8e6e0]/50">{l}</div>
              <div className="mt-1 text-sm">Selectează →</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-16 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#b8956a]">Selecție</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond'" }} className="mt-3 text-5xl md:text-6xl font-light">Proprietăți remarcabile</h2>
          </div>
          <a className="text-sm tracking-wide text-[#b8956a] hidden md:block">Vezi toate →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {[
            { name: "Penthouse Floreasca", loc: "București · Sector 1", price: "€1.480.000", spec: "320 m² · 4 cam · terasă 90m²", grad: "from-[#3a4a5e] to-[#1a2129]" },
            { name: "Vila Cotroceni", loc: "București · Cotroceni", price: "€2.200.000", spec: "550 m² · 6 cam · grădină 800m²", grad: "from-[#5e4a3a] to-[#2a1f15]" },
            { name: "Apartament Herăstrău", loc: "București · Herăstrău", price: "€890.000", spec: "180 m² · 3 cam · vedere lac", grad: "from-[#3a5e5a] to-[#152a27]" },
            { name: "Casa Poiana Brașov", loc: "Brașov · Poiana", price: "€1.650.000", spec: "420 m² · 5 cam · vedere munte", grad: "from-[#4a3a5e] to-[#1f152a]" },
          ].map((p) => (
            <div key={p.name} className="bg-[#0f1419] p-6">
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.grad}`} />
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-[#b8956a]">{p.loc}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond'" }} className="mt-2 text-3xl font-light">{p.name}</div>
                  <div className="mt-2 text-sm text-[#e8e6e0]/60">{p.spec}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond'" }} className="text-2xl text-[#b8956a]">{p.price}</div>
              </div>
              <button className="mt-6 text-xs tracking-[0.3em] uppercase border-b border-[#b8956a]/40 pb-1">Tur virtual 360° →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-16 py-32 bg-[#1a2129] grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-[#b8956a]">Servicii Concierge</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond'" }} className="mt-4 text-5xl font-light">Mai mult decât o agenție.</h2>
          <p className="mt-6 text-[#e8e6e0]/70 leading-relaxed">Consultanță legală, evaluări independente, design interior, mutare premium. Tot ce ai nevoie pentru a-ți face din proprietate un acasă, fără efort.</p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Acces preferențial la proprietăți off-market", "Negociere și due diligence", "Servicii notariale și financiare integrate", "Design interior și amenajare cu parteneri premium"].map((s) => (
              <li key={s} className="flex gap-3"><span className="text-[#b8956a]">—</span> {s}</li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] bg-gradient-to-br from-[#3a4a5e] to-[#1a2129]" />
      </section>

      <section className="px-8 md:px-16 py-24 text-center border-t border-white/5">
        <h2 style={{ fontFamily: "'Cormorant Garamond'" }} className="text-5xl font-light">Programează o consultanță privată</h2>
        <p className="mt-4 text-[#e8e6e0]/60 max-w-xl mx-auto">Discreție completă. Răspuns în 24h.</p>
        <button className="mt-8 bg-[#b8956a] text-[#0f1419] px-10 py-4 text-xs tracking-[0.3em] uppercase">Solicită apel</button>
      </section>

      <footer className="px-8 md:px-16 py-10 border-t border-white/5 text-xs tracking-[0.2em] uppercase text-[#e8e6e0]/50 flex flex-col md:flex-row justify-between gap-4">
        <div>© Vanta Estates 2026</div>
        <div>concierge@vanta-estates.ro</div>
      </footer>
    </div>
  );
}
