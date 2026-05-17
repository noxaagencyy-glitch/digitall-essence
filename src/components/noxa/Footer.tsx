import { Mail, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight, MapPin, Cookie } from "lucide-react";
import { NoxaLogo } from "./Logo";
import { openCookieManager } from "./CookieBanner";
import { EmailLink, EmailText } from "./EmailLink";

const cols: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Companie",
    links: [
      { label: "Despre", href: "/#despre" },
      { label: "Proces", href: "/#proces" },
      { label: "Portofoliu", href: "/#portofoliu" },
      { label: "Testimoniale", href: "/#testimoniale" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Servicii",
    links: [
      { label: "Web Design", href: "/#servicii" },
      { label: "Branding", href: "/#servicii" },
      { label: "Dezvoltare", href: "/#servicii" },
      { label: "AI Integration", href: "/#servicii" },
      { label: "Mentenanță", href: "/#servicii" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termeni și condiții", href: "/termeni" },
      { label: "Politica de confidențialitate", href: "/confidentialitate" },
    ],
  },
];

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/noxaweb/", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-noxa opacity-[0.08] blur-[120px]" />

      {/* CTA strip */}
      <div className="relative mx-auto max-w-6xl px-6 pt-16">
        <div className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-gradient-noxa opacity-25 blur-[100px]" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Pregătit să <span className="text-gradient">construim împreună</span>?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Răspundem în mai puțin de 24h cu o ofertă personalizată pentru proiectul tău.
              </p>
            </div>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-noxa px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.55_0.27_285_/_0.7)] hover:scale-[1.02] transition-transform"
            >
              Cere ofertă gratuită
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <a href="/#top" className="flex items-center gap-3">
            <NoxaLogo className="h-9 w-9" />
            <div>
              <div className="font-semibold tracking-tight">NOXA Agency</div>
              <div className="text-xs text-muted-foreground">Premium digital experiences.</div>
            </div>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Construim experiențe digitale moderne — web design premium, branding și platforme care convertesc.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <EmailLink
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" /> <EmailText />
            </EmailLink>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> România · Servim global
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-9 w-9 rounded-xl glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} NOXA Agency. Toate drepturile rezervate.</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/termeni" className="hover:text-foreground transition-colors">Termeni</a>
            <a href="/confidentialitate" className="hover:text-foreground transition-colors">Confidențialitate</a>
            <button
              onClick={() => openCookieManager()}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Cookie className="h-3.5 w-3.5" /> Gestionează cookie-urile
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
