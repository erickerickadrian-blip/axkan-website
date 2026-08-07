import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { Reveal, Kicker, SectionTitle } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/brand";

export function Home() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {t.hero.titleA}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.hero.titleB}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href={waLink(t.contact.waMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> {t.hero.ctaPrimary}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/servicios">
                  {t.hero.ctaSecondary} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              {t.hero.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="h-8 w-px bg-border" />}
                  <div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="max-w-[160px] text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex min-h-[380px] items-center justify-center md:min-h-[520px]"
          >
            <InteractiveGlobe size={520} />
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.clients.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {t.clients.names.map((name) => (
              <span key={name} className="text-base font-semibold tracking-wide text-foreground/60">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="mb-12 text-center">
          <Kicker>{t.services.kicker}</Kicker>
          <SectionTitle>{t.services.title}</SectionTitle>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t.services.subtitle}</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {t.services.items.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/servicios">
              {t.hero.ctaSecondary} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* Process */}
      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal className="mb-12">
            <Kicker>{t.process.kicker}</Kicker>
            <SectionTitle>{t.process.title}</SectionTitle>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {t.process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="rounded-xl border border-border/70 bg-card/50 p-6">
                  <p className="mb-3 font-mono text-sm text-cyan-400">{step.n}</p>
                  <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certification teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card to-blue-950/30 p-8 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <Kicker>{t.cert.kicker}</Kicker>
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  {t.cert.title}
                </h2>
                <p className="mb-1 font-semibold text-cyan-400">{t.cert.org}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.cert.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-6 text-center">
                <ShieldCheck className="size-10 text-cyan-400" />
                <p className="text-sm font-semibold text-foreground">{t.cert.badge}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <Reveal>
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p className="mb-8 text-muted-foreground">{t.contact.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href={waLink(t.contact.waMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> {t.contact.waCta}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contacto">{t.nav.cta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
