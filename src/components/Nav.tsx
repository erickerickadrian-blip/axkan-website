import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { BRAND } from "@/brand";

const links = [
  { to: "/", key: "home" },
  { to: "/servicios", key: "services" },
  { to: "/casos", key: "cases" },
  { to: "/nosotros", key: "about" },
  { to: "/contacto", key: "contact" },
] as const;

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-sm text-slate-950">
            A
          </span>
          <span className="text-lg font-bold tracking-widest text-foreground">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-md border border-border text-xs font-semibold">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 uppercase transition-colors ${
                  lang === l
                    ? "bg-cyan-400/15 text-cyan-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex bg-cyan-400 text-slate-950 hover:bg-cyan-300">
            <Link to="/contacto">{t.nav.cta}</Link>
          </Button>
          <button
            className="grid size-9 place-items-center text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/60 bg-background md:hidden"
        >
          <div className="flex flex-col p-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm ${
                    isActive ? "text-cyan-400" : "text-muted-foreground"
                  }`
                }
              >
                {t.nav[l.key]}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
