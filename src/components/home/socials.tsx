import { Facebook, Instagram, Banknote } from "lucide-react";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

const SOCIALS = [
  {
    href: SITE.social.instagram,
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: SITE.social.facebook,
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: SITE.social.cashapp,
    label: "Cash App",
    icon: Banknote,
  },
] as const;

export function Socials() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="kicker">{t.socials.kicker}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.socials.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">{t.socials.lead}</p>
        </Reveal>

        <Reveal className="mt-10" delay={0.06}>
          <InstagramFeed />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {SOCIALS.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.04}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-bg px-4 text-sm font-medium text-fg shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150 hover:bg-elevated hover:shadow-[var(--shadow-border-hover)]"
              >
                <item.icon className="size-4" />
                {item.label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
