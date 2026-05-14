import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/beauty")({
  component: BeautyDemo,
  head: () => ({ meta: [{ title: "Bella Hair Studio — Demo" }] }),
});

function BeautyDemo() {
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="min-h-screen bg-[#f8f1ea] text-[#2a1d17]">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" />

      {/* Nav */}
      {/* Top utility bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-8 md:px-16 py-2 text-[11px] tracking-[0.2em] uppercase border-b border-[#2a1d17]/10 bg-[#efe5db]" style={{ fontFamily: "Inter" }}>
        <div className="flex items-center gap-4 text-[#2a1d17]/70">
          <span>📞 +40 21 555 0188</span>
          <span className="hidden sm:inline">L–S 09:00–20:00</span>
          <span className="hidden md:inline">Calea Victoriei 124, București</span>
        </div>
        <div className="flex items-center gap-4 text-[#2a1d17]/70">
          <a className="hover:text-[#2a1d17]">Card cadou</a>
          <a className="hover:text-[#2a1d17]">RO · EN</a>
        </div>
      </div>

      <header className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-[#2a1d17]/10">
        <div className="text-2xl tracking-[0.3em]">BELLA</div>
        <nav className="hidden md:flex gap-8 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          <a>Servicii</a><a>Echipa</a><a>Galerie</a><a>Contact</a>
        </nav>
        <button className="text-xs tracking-[0.2em] uppercase border border-[#2a1d17] px-4 py-2" style={{ fontFamily: "Inter" }}>Programare</button>
      </header>

      {/* Hero */}
      <section className="px-8 md:px-16 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase mb-6" style={{ fontFamily: "Inter" }}>Salon de înfrumusețare · București</div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] font-light">Frumusețea ta, redescoperită cu rafinament.</h1>
          <p className="mt-8 text-lg text-[#2a1d17]/70 max-w-md" style={{ fontFamily: "Inter" }}>Tratamente personalizate, produse premium și o echipă pasionată să îți ofere experiența pe care o meriți.</p>
          <div className="mt-10 flex gap-4" style={{ fontFamily: "Inter" }}>
            <button className="bg-[#2a1d17] text-[#f8f1ea] px-6 py-3 text-xs tracking-[0.2em] uppercase">Rezervă acum</button>
            <button className="px-6 py-3 text-xs tracking-[0.2em] uppercase border border-[#2a1d17]/30">Vezi servicii</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80" alt="Salon Bella" className="aspect-[4/5] w-full object-cover rounded-sm" loading="lazy" />
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 py-24 bg-[#efe5db]">
        <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Inter" }}>Servicii</div>
        <h2 className="text-4xl md:text-5xl font-light mb-16 max-w-2xl">O selecție de servicii signature</h2>
        <div className="grid md:grid-cols-3 gap-px bg-[#2a1d17]/10">
          {[
            { name: "Hair Couture", price: "de la 250 lei", desc: "Tunsoare, coafură, tratamente de lux." },
            { name: "Visage", price: "de la 320 lei", desc: "Facial, hidratare profundă, anti-aging." },
            { name: "Manucure d'Art", price: "de la 180 lei", desc: "Manichiură franceză, gel, nail art." },
            { name: "Spa Ritual", price: "de la 450 lei", desc: "Masaj, exfoliere, aromaterapie." },
            { name: "Bridal Suite", price: "de la 1200 lei", desc: "Pachet complet pentru ziua perfectă." },
            { name: "Brow & Lash", price: "de la 150 lei", desc: "Design sprâncene, gene fir cu fir." },
          ].map((s) => (
            <div key={s.name} className="bg-[#efe5db] p-10">
              <div className="text-2xl font-light">{s.name}</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-2 text-[#2a1d17]/60" style={{ fontFamily: "Inter" }}>{s.price}</div>
              <p className="text-sm text-[#2a1d17]/70 mt-4" style={{ fontFamily: "Inter" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-8 md:px-16 py-32 text-center">
        <div className="text-5xl md:text-6xl font-light italic max-w-3xl mx-auto leading-tight">"Cea mai frumoasă experiență de înfrumusețare pe care am trăit-o în București."</div>
        <div className="mt-8 text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "Inter" }}>— Andreea M., client din 2022</div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-24 bg-[#2a1d17] text-[#f8f1ea] text-center">
        <h2 className="text-4xl md:text-5xl font-light">Programează-te la Bella</h2>
        <p className="mt-4 max-w-xl mx-auto text-[#f8f1ea]/70" style={{ fontFamily: "Inter" }}>Disponibil de luni până sâmbătă, între 09:00 și 20:00.</p>
        <button className="mt-8 bg-[#f8f1ea] text-[#2a1d17] px-8 py-4 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "Inter" }}>Rezervă o programare</button>
      </section>

      <footer className="bg-[#efe5db] border-t border-[#2a1d17]/10" style={{ fontFamily: "Inter" }}>
        <div className="px-8 md:px-16 py-14 grid md:grid-cols-4 gap-10 text-sm text-[#2a1d17]/75">
          <div>
            <div className="text-2xl tracking-[0.3em] text-[#2a1d17]" style={{ fontFamily: "'Cormorant Garamond'" }}>BELLA</div>
            <p className="mt-3 text-xs leading-relaxed">Salon de înfrumusețare premium din inima Bucureștiului. Tratamente personalizate, produse premium, echipă pasionată.</p>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#2a1d17] mb-3">Servicii</div>
            <ul className="space-y-1.5 text-xs"><li><a>Hair Couture</a></li><li><a>Visage</a></li><li><a>Manucure</a></li><li><a>Spa Ritual</a></li><li><a>Bridal Suite</a></li></ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#2a1d17] mb-3">Companie</div>
            <ul className="space-y-1.5 text-xs"><li><a>Despre noi</a></li><li><a>Echipa</a></li><li><a>Cariere</a></li><li><a>Card cadou</a></li><li><a>Contact</a></li></ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#2a1d17] mb-3">Legal</div>
            <ul className="space-y-1.5 text-xs">
              <li><a>Termeni și condiții</a></li>
              <li><a>Politica de confidențialitate</a></li>
              <li><a>Politica de cookies</a></li>
              <li><a>FAQ</a></li>
              <li><a>Politica de retur</a></li>
            </ul>
          </div>
        </div>
        <div className="px-8 md:px-16 py-5 border-t border-[#2a1d17]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-[#2a1d17]/60">
          <div>© Bella Hair Studio 2026 · CUI RO12345678 · Reg. Com. J40/1234/2020</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#2a1d17]">ANPC</a>
            <a className="hover:text-[#2a1d17]">SOL</a>
            <a className="hover:text-[#2a1d17]">Instagram</a>
            <a className="hover:text-[#2a1d17]">Facebook</a>
            <a className="hover:text-[#2a1d17]">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
