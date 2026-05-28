import { Mail, Instagram, Facebook, MapPin, Cookie } from "lucide-react";
import { NoxaLogo } from "./Logo";
import { openCookieManager } from "./CookieBanner";
import { EmailLink, EmailText } from "./EmailLink";

const CURRENT_YEAR = "2026";

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
      { label: "Mentenanță", href: "mailto:contact@noxaweb.com?subject=Cerere%20mentenan%C8%9B%C4%83%20website" },
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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.883-9.885 9.883m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/noxaweb/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61589557965061", label: "Facebook" },
  { Icon: WhatsAppIcon, href: "https://wa.me/40753826448", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative mt-6 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-noxa opacity-[0.08] blur-[120px]" />


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
          <div>© {CURRENT_YEAR} NOXA Agency. Toate drepturile rezervate.</div>
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
