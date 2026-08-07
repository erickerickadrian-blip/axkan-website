import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { Reveal, Kicker, SectionTitle } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { BRAND } from "@/brand";

export function About() {
  const { t } = useLang();
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <Kicker>{t.about.kicker}</Kicker>
          <SectionTitle>{t.about.title}</SectionTitle>
          <p className="mb-4 leading-relaxed text-muted-foreground">{t.about.p1}</p>
          <p className="leading-relaxed text-muted-foreground">{t.about.p2}</p>
        </Reveal>

        {/* Founder */}
        <Reveal className="mt-16">
          <div className="grid gap-8 rounded-2xl border border-border/70 bg-card/50 p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="mx-auto md:mx-0">
              {photoOk ? (
                <img
                  src="/erick.jpg"
                  alt={t.about.founderName}
                  onError={() => setPhotoOk(false)}
                  className="size-44 rounded-2xl border border-border object-cover md:size-52"
                />
              ) : (
                <div className="grid size-44 place-items-center rounded-2xl border border-border bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-4xl font-black text-cyan-400 md:size-52">
                  EL
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {t.about.founderTitle}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">{t.about.founderName}</h3>
              <p className="mb-4 text-sm font-medium text-muted-foreground">{t.about.founderRole}</p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {t.about.founderBio}
              </p>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        {/* Values */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {t.about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border/70 bg-card/50 p-6">
                <h3 className="mb-2 font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <Kicker>{t.cert.kicker}</Kicker>
                <h2 className="mb-1 text-2xl font-bold text-foreground">{t.cert.title}</h2>
                <p className="mb-3 font-semibold text-cyan-400">{t.cert.org}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.cert.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {t.cert.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-8 text-center">
                <ShieldCheck className="size-12 text-cyan-400" />
                <p className="text-sm font-semibold text-foreground">{t.cert.badge}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-xl font-bold text-foreground">{t.about.stackTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {t.about.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-cyan-400/40 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
