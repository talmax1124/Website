import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { StatusBadge } from "@/components/layout/status-badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export function Hero() {
  const { t } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", {
        y: 16,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.55,
      })
        .from(
          ".hero-word",
          { y: 32, opacity: 0, filter: "blur(8px)", duration: 0.7, stagger: 0.05 },
          0.08,
        )
        .from(".hero-sub", { y: 18, opacity: 0, duration: 0.55 }, 0.4)
        .from(".hero-cta", { y: 14, opacity: 0, duration: 0.45 }, 0.55);
    },
    { scope: root },
  );

  const line1 = t.hero.line1.split(" ");
  const line2 = t.hero.line2.split(" ");

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden grain pt-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20 lg:pt-10">
        <div className="relative z-10 lg:col-span-6">
          <p className="hero-kicker kicker">{t.hero.kicker}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.92] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            <span className="block">
              {line1.map((word, i) => (
                <span key={`a-${i}`} className="hero-word mr-2 inline-block">
                  {word}{" "}
                </span>
              ))}
            </span>
            <span className="mt-1 block text-steel">
              {line2.map((word, i) => (
                <span key={`b-${i}`} className="hero-word mr-2 inline-block">
                  {word}{" "}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-sub mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.sub}
          </p>
          <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/gallery">{t.hero.cta}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.phones.cellTel}>{t.hero.ctaSecondary}</a>
            </Button>
            <StatusBadge />
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-xl bg-elevated shadow-[var(--shadow-border)]">
            <img
              src="/gallery/hero-shop.jpg"
              alt={t.hero.line2}
              className="aspect-4/5 w-full object-cover sm:aspect-4/3 lg:min-h-[28rem] lg:aspect-4/5"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase md:flex">
        <ArrowDown className="size-3.5" />
        {t.hero.scroll}
      </div>
    </section>
  );
}
