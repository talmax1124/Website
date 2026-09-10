import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/language";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-6 lg:pt-2">
          <p className="kicker">{t.about.kicker}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.about.body}</p>
          <ul className="mt-6 space-y-3">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-steel" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={0.08}>
          <div className="overflow-hidden rounded-xl bg-elevated shadow-[var(--shadow-border)]">
            <img
              src="/gallery/owners.jpg"
              alt={t.about.title}
              className="aspect-square h-full w-full object-cover object-top outline outline-1 -outline-offset-1 outline-fg/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
