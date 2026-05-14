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

      <footer className="px-8 md:px-16 py-10 text-xs tracking-[0.2em] uppercase flex flex-col md:flex-row justify-between gap-4 border-t border-[#2a1d17]/10" style={{ fontFamily: "Inter" }}>
        <div>© Bella Hair Studio 2026</div>
        <div className="flex gap-6"><a>Instagram</a><a>Facebook</a><a>TikTok</a></div>
      </footer>
    </div>
  );
}
