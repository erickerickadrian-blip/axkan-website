import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal, Kicker, SectionTitle } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export function Cases() {
  const { t } = useLang();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal className="mb-12 max-w-2xl">
          <Kicker>{t.cases.kicker}</Kicker>
          <SectionTitle>{t.cases.title}</SectionTitle>
          <p className="text-muted-foreground">{t.cases.subtitle}</p>
        </Reveal>

        <div className="space-y-6">
          {t.cases.items.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.05}>
              <article className="grid gap-6 rounded-2xl border border-border/70 bg-card/50 p-7 transition-colors hover:border-cyan-400/40 md:grid-cols-[1fr_auto] md:p-9">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-lg font-bold text-foreground">{c.client}</span>
                    <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                      {c.sector}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-cyan-400">{c.title}</h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
                <div className="flex gap-8 md:flex-col md:justify-center md:gap-5 md:border-l md:border-border/60 md:pl-8">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-bold text-foreground">{m.value}</p>
                      <p className="max-w-[140px] text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <Reveal>
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p className="mb-8 text-muted-foreground">{t.contact.subtitle}</p>
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link to="/contacto">{t.nav.cta}</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
