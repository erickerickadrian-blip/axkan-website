import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/brand";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-sm text-slate-950">
              A
            </span>
            <span className="text-lg font-bold tracking-widest">{BRAND.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.nav}
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="text-muted-foreground hover:text-cyan-400" to="/servicios">{t.nav.services}</Link></li>
            <li><Link className="text-muted-foreground hover:text-cyan-400" to="/casos">{t.nav.cases}</Link></li>
            <li><Link className="text-muted-foreground hover:text-cyan-400" to="/nosotros">{t.nav.about}</Link></li>
            <li><Link className="text-muted-foreground hover:text-cyan-400" to="/contacto">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.contact}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400"
                href={waLink(t.contact.waMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> {BRAND.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400"
                href={`mailto:${BRAND.email}`}
              >
                <Mail className="size-4" /> {BRAND.email}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400"
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {year} {BRAND.legalName}. {t.footer.rights}
      </div>
    </footer>
  );
}
