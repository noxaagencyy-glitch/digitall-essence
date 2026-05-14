import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/restaurant")({
  component: RestaurantDemo,
  head: () => ({ meta: [{ title: "Trattoria 23 — Demo" }] }),
});

function RestaurantDemo() {
  return (
    <div className="min-h-screen bg-[#0d0a07] text-[#e8d9b8]" style={{ fontFamily: "'Lora', serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Lora:wght@300;400;500&display=swap" />

      {/* Top utility bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-8 md:px-16 py-2 text-[10px] tracking-[0.3em] uppercase border-b border-[#c9a84c]/20 text-[#e8d9b8]/70">
        <div className="flex items-center gap-4">
          <span>Strada Lipscani 23, București</span>
          <span className="hidden md:inline">Mar–Sâm · 19:00–23:00</span>
        </div>
        <div className="flex items-center gap-4">
          <span>+40 21 555 0123</span>
          <a className="hover:text-[#c9a84c]">RO · FR · EN</a>
        </div>
      </div>

      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.3em] uppercase">
          <a>Meniu</a><a>Bucătar</a><a>Vinuri</a>
        </nav>
        <div style={{ fontFamily: "'Playfair Display'" }} className="text-3xl tracking-wide">Trattoria 23</div>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.3em] uppercase">
          <a>Despre</a><a>Contact</a><a className="text-[#c9a84c]">Rezervă</a>
        </nav>
      </header>

      <section className="relative px-8 md:px-16 py-32 md:py-48 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&auto=format&fit=crop&q=80" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07] via-[#0d0a07]/60 to-[#0d0a07]" />
        <div className="relative">
          <div className="text-xs tracking-[0.5em] uppercase text-[#c9a84c]">Fine Dining · Bucureștii Vechi</div>
          <h1 style={{ fontFamily: "'Playfair Display'" }} className="mt-8 text-6xl md:text-9xl font-light italic leading-[1]">L'art de vivre,<br />redéfini.</h1>
          <p className="mt-10 max-w-xl mx-auto text-lg text-[#e8d9b8]/70 leading-relaxed">Un meniu degustare în 9 acte, semnat de Chef Antoine Renaud. O călătorie culinară între tradiția franceză și ingredientele românești de sezon.</p>
          <div className="mt-12 flex justify-center gap-6">
            <button className="bg-[#c9a84c] text-[#0d0a07] px-8 py-4 text-xs tracking-[0.3em] uppercase">Rezervă o masă</button>
            <button className="border border-[#c9a84c]/40 px-8 py-4 text-xs tracking-[0.3em] uppercase">Vezi meniul</button>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 border-t border-[#c9a84c]/20">
        <div className="text-center text-xs tracking-[0.5em] uppercase text-[#c9a84c]">Menu Dégustation</div>
        <h2 style={{ fontFamily: "'Playfair Display'" }} className="mt-6 text-center text-5xl md:text-6xl italic font-light">Nouă acte, o seară</h2>

        <div className="mt-20 max-w-3xl mx-auto space-y-10">
          {[
            { n: "I", name: "Amuse-bouche", desc: "Praline de foie gras, gem de smochine negre, brioșă caldă." },
            { n: "II", name: "Tartar de ton roșu", desc: "Avocado, citrice yuzu, caviar de hering, ulei de susan negru." },
            { n: "III", name: "Velouté de hribi", desc: "Spumă de parmezan reggiano, trufă neagră de Périgord." },
            { n: "IV", name: "Saint-Jacques", desc: "Scoici Saint-Jacques, beurre noisette, sparanghel alb, lămâie confiată." },
            { n: "V", name: "Mușchiuleț de vițel Black Angus", desc: "Reducție de Pinot Noir, piure de țelină, ciuperci sălbatice." },
            { n: "VI", name: "Brânzeturi maturate", desc: "Selecție de brânzeturi franțuzești, miere de salcâm, nuci caramelizate." },
            { n: "VII", name: "Pré-dessert", desc: "Granité de șampanie roz, fructe roșii." },
            { n: "VIII", name: "Soufflé Grand Marnier", desc: "Sos de ciocolată Valrhona 70%, înghețată de vanilie Madagascar." },
            { n: "IX", name: "Mignardises", desc: "Selecție de mici dulciuri, cafea de specialitate." },
          ].map((d) => (
            <div key={d.n} className="flex gap-6 items-start border-b border-[#c9a84c]/10 pb-8">
              <div style={{ fontFamily: "'Playfair Display'" }} className="text-3xl text-[#c9a84c] italic w-12">{d.n}.</div>
              <div className="flex-1">
                <div style={{ fontFamily: "'Playfair Display'" }} className="text-2xl">{d.name}</div>
                <p className="mt-2 text-sm text-[#e8d9b8]/60 italic">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div style={{ fontFamily: "'Playfair Display'" }} className="text-4xl italic">480 lei <span className="text-base">/ persoană</span></div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#e8d9b8]/50 mt-2">Pairing vinuri opțional · +260 lei</div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 border-t border-[#c9a84c]/20">
        <div className="text-center text-xs tracking-[0.5em] uppercase text-[#c9a84c]">Galerie</div>
        <h2 style={{ fontFamily: "'Playfair Display'" }} className="mt-6 text-center text-5xl italic font-light mb-16">Momente din bucătărie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=80",
          ].map((src, i) => (
            <img key={i} src={src} alt={`Preparat ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="px-8 md:px-16 py-32 text-center bg-[#15100b]">
        <div className="text-xs tracking-[0.5em] uppercase text-[#c9a84c]">Bucătar</div>
        <h2 style={{ fontFamily: "'Playfair Display'" }} className="mt-6 text-5xl italic font-light">Antoine Renaud</h2>
        <p className="mt-8 max-w-2xl mx-auto text-[#e8d9b8]/70 italic">"Bucătăria este un act de iubire. Fiecare farfurie pleacă din bucătăria mea cu o intenție: să creeze o amintire."</p>
        <div className="mt-6 text-xs tracking-[0.3em] uppercase text-[#e8d9b8]/50">Ex Le Bristol Paris · 15 ani Michelin</div>
      </section>

      <footer className="px-8 md:px-16 py-12 border-t border-[#c9a84c]/20 text-xs tracking-[0.3em] uppercase flex flex-col md:flex-row justify-between gap-4">
        <div>Strada Lipscani 23, București</div>
        <div>Mar–Sâm · 19:00–23:00</div>
        <div>+40 21 555 0123</div>
      </footer>
    </div>
  );
}
