import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/language";

export function Financing() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="kicker">{t.financing.kicker}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.financing.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">{t.financing.lead}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.financing.partners.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 0.05}>
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl bg-bg p-3 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <div className="flex h-28 items-center justify-center rounded-lg bg-surface p-5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 pb-1">
                  <span className="text-sm font-medium">{partner.name}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    {t.financing.apply}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
