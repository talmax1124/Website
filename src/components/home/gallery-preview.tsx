import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GALLERY } from "@/lib/gallery";
import { useLanguage } from "@/lib/language";

export function GalleryPreview() {
  const { t, lang } = useLanguage();
  const items = GALLERY.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">{t.gallery.kicker}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.gallery.title}
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link to="/gallery">
            {t.gallery.cta}
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.04}>
            <Link
              to="/gallery"
              className="group block overflow-hidden rounded-lg bg-elevated"
            >
              <img
                src={item.src}
                alt={lang === "es" ? item.altEs : item.alt}
                className="aspect-4/3 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-105"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
