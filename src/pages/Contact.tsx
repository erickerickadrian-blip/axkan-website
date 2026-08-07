import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Kicker, SectionTitle } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/brand";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `[${BRAND.name}] ${form.name} — ${form.company}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.company}\n${form.email}`;
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "w-full rounded-lg border border-border bg-card/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40";

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal className="mb-12 max-w-2xl">
        <Kicker>{t.contact.kicker}</Kicker>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <p className="text-muted-foreground">{t.contact.subtitle}</p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <Reveal>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-7">
              <div className="mb-3 grid size-11 place-items-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <MessageCircle className="size-5" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{t.contact.waTitle}</h3>
              <p className="mb-5 text-sm text-muted-foreground">{t.contact.waDesc}</p>
              <Button asChild className="w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400">
                <a href={waLink(t.contact.waMessage)} target="_blank" rel="noreferrer">
                  {t.contact.waCta}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-7">
              <div className="mb-3 grid size-11 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <CalendarDays className="size-5" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{t.contact.calTitle}</h3>
              <p className="mb-5 text-sm text-muted-foreground">{t.contact.calDesc}</p>
              <Button asChild variant="outline" className="w-full">
                <a href={BRAND.calendarUrl} target="_blank" rel="noreferrer">
                  {t.contact.calCta}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-border/70 bg-card/50 p-7 md:p-9"
          >
            <h3 className="mb-6 font-semibold text-foreground">{t.contact.formTitle}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                className={inputCls}
                placeholder={t.contact.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className={inputCls}
                placeholder={t.contact.formCompany}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <input
              required
              type="email"
              className={`${inputCls} mt-4`}
              placeholder={t.contact.formEmail}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              required
              rows={5}
              className={`${inputCls} mt-4 resize-none`}
              placeholder={t.contact.formMessage}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" className="mt-6 w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              {t.contact.formCta}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t.contact.formNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
