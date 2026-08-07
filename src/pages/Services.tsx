import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Kicker, SectionTitle } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/brand";

export function Services() {
  const { t } = useLang();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal className="mb-12 max-w-2xl">
          <Kicker>{t.services.kicker}</Kicker>
          <SectionTitle>{t.services.title}</SectionTitle>
          <p className="text-muted-foreground">{t.services.subtitle}</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal className="mb-12 text-center">
            <Kicker>{t.pricing.kicker}</Kicker>
            <SectionTitle>{t.pricing.title}</SectionTitle>
            <p className="mx-auto max-w-2xl text-muted-foreground">{t.pricing.subtitle}</p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.pricing.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    tier.featured
                      ? "border-cyan-400/50 bg-gradient-to-b from-cyan-400/10 to-card shadow-lg shadow-cyan-500/5"
                      : "border-border/70 bg-card/50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.desc}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-xs text-muted-foreground">{tier.unit}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-7 w-full ${
                      tier.featured
                        ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        : ""
                    }`}
                    variant={tier.featured ? "default" : "outline"}
                  >
                    <a
                      href={waLink(`${t.contact.waMessage} — ${tier.name}`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {tier.cta}
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">{t.pricing.note}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Reveal>
          <SectionTitle>{t.contact.title}</SectionTitle>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link to="/contacto">{t.nav.cta}</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
