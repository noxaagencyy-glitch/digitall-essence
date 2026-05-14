import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/fitness")({
  component: FitnessDemo,
  head: () => ({ meta: [{ title: "PowerHouse Gym — Demo" }] }),
});

function FitnessDemo() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#0a0a0a] text-white">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&display=swap" />

      {/* Top utility bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 md:px-12 py-2 text-[11px] uppercase tracking-wider bg-[#ff3d00] text-black font-semibold">
        <div className="flex items-center gap-4">
          <span>🔥 7 zile gratuite — fără card</span>
          <span className="hidden md:inline">📞 +40 264 555 022</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:underline">Locații</a>
          <a className="hover:underline">Cariere</a>
          <a className="hover:underline">RO · EN</a>
        </div>
      </div>

      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur">
        <div className="text-2xl font-black tracking-tight">POWERHOUSE<span className="text-[#ff3d00]">.</span></div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a>Clase</a><a>Antrenori</a><a>Abonamente</a><a>Despre</a>
        </nav>
        <button className="bg-[#ff3d00] px-5 py-2.5 text-sm font-bold uppercase tracking-wide">Free Trial</button>
      </header>

      <section className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3d00]/20 via-transparent to-transparent" />
        <div className="relative max-w-5xl">
          <div className="text-[#ff3d00] text-sm font-bold uppercase tracking-[0.3em] mb-6">PowerHouse Gym · Cluj-Napoca</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-7xl md:text-[140px] leading-[0.9] tracking-tight">
            BUILD<br />THE BODY<br /><span className="text-[#ff3d00]">YOU DESERVE.</span>
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-xl">Sală de fitness open 24/7. Echipamente Hammer Strength, antrenori certificați, comunitate care nu te lasă să renunți.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#ff3d00] px-8 py-4 font-bold uppercase tracking-wide">Începe acum</button>
            <button className="border border-white/30 px-8 py-4 font-bold uppercase tracking-wide hover:bg-white/5">Vezi orarul</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl">
          {[["2400+", "Membri activi"], ["80+", "Clase/săptămână"], ["24/7", "Acces total"]].map(([n, l]) => (
            <div key={l}><div style={{ fontFamily: "'Bebas Neue'" }} className="text-5xl text-[#ff3d00]">{n}</div><div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 bg-[#111]">
        <h2 style={{ fontFamily: "'Bebas Neue'" }} className="text-5xl md:text-7xl mb-12">CLASE LIVE</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "CrossFit", time: "Lun · Mie · Vin · 18:00", coach: "Andrei P." },
            { name: "HIIT Burner", time: "Mar · Joi · 19:30", coach: "Maria S." },
            { name: "Powerlifting", time: "Sâm · 10:00", coach: "Răzvan T." },
            { name: "Yoga Flow", time: "Mar · Joi · 07:00", coach: "Cristina L." },
            { name: "Boxing", time: "Lun · Mie · 20:00", coach: "Daniel I." },
            { name: "Mobility", time: "Vin · 17:00", coach: "Andrei P." },
          ].map((c) => (
            <div key={c.name} className="border border-white/10 p-8 hover:border-[#ff3d00] transition-colors">
              <div style={{ fontFamily: "'Bebas Neue'" }} className="text-3xl">{c.name}</div>
              <div className="text-sm text-white/60 mt-2">{c.time}</div>
              <div className="text-xs uppercase tracking-wider text-[#ff3d00] mt-4">Coach: {c.coach}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24">
        <h2 style={{ fontFamily: "'Bebas Neue'" }} className="text-5xl md:text-7xl mb-12">ABONAMENTE</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "STARTER", price: "199", per: "lună", feats: ["Acces sală", "Ore de vârf", "Vestiar standard"] },
            { name: "PRO", price: "299", per: "lună", feats: ["Acces 24/7", "Toate clasele incluse", "Vestiar premium", "1 sesiune PT/lună"], highlight: true },
            { name: "ELITE", price: "499", per: "lună", feats: ["Tot din Pro", "4 sesiuni PT/lună", "Plan nutrițional", "Recuperare/sauna"] },
          ].map((p) => (
            <div key={p.name} className={"p-8 " + (p.highlight ? "bg-[#ff3d00] text-black" : "border border-white/10")}>
              <div className="text-sm font-bold tracking-widest">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span style={{ fontFamily: "'Bebas Neue'" }} className="text-6xl">{p.price}</span>
                <span className="text-sm">lei/{p.per}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.feats.map((f) => <li key={f}>— {f}</li>)}
              </ul>
              <button className={"mt-8 w-full py-3 font-bold uppercase tracking-wide " + (p.highlight ? "bg-black text-white" : "bg-white text-black")}>Alege</button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <h2 style={{ fontFamily: "'Bebas Neue'" }} className="text-5xl md:text-7xl mb-12">SALA</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
          ].map((src, i) => (
            <img key={i} src={src} alt={`PowerHouse gym ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-white/5">
        <div className="px-6 md:px-12 py-14 grid md:grid-cols-4 gap-10 text-sm text-white/65">
          <div>
            <div className="text-2xl font-black tracking-tight text-white">POWERHOUSE<span className="text-[#ff3d00]">.</span></div>
            <p className="mt-3 text-xs leading-relaxed">Sală de fitness 24/7 în Cluj-Napoca. Echipamente Hammer Strength, antrenori certificați, comunitate solidă.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white mb-3 font-bold">Antrenament</div>
            <ul className="space-y-1.5 text-xs"><li><a>Clase live</a></li><li><a>Antrenori</a></li><li><a>Personal Training</a></li><li><a>Plan nutrițional</a></li></ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white mb-3 font-bold">Companie</div>
            <ul className="space-y-1.5 text-xs"><li><a>Despre PowerHouse</a></li><li><a>Locații</a></li><li><a>Cariere</a></li><li><a>Blog</a></li><li><a>Contact</a></li></ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white mb-3 font-bold">Legal</div>
            <ul className="space-y-1.5 text-xs">
              <li><a>Termeni și condiții</a></li>
              <li><a>Politica de confidențialitate</a></li>
              <li><a>Politica de cookies</a></li>
              <li><a>FAQ</a></li>
              <li><a>Regulament sală</a></li>
            </ul>
          </div>
        </div>
        <div className="px-6 md:px-12 py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© PowerHouse Gym 2026 · Cluj-Napoca · CUI RO34567890</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white">ANPC</a>
            <a className="hover:text-white">SOL</a>
            <a className="hover:text-white">Instagram</a>
            <a className="hover:text-white">YouTube</a>
            <a className="hover:text-white">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
