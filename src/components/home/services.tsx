import { CircleGauge, Handshake, Package, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/language";

const ICONS = [Shield, CircleGauge, Handshake, Package];

const PHOTOS = [
  { src: "/gallery/g26.jpg", alt: "Tesla on aftermarket wheels" },
  { src: "/gallery/g03.jpg", alt: "SUV on bronze replica wheels" },
  { src: "/gallery/hero-shop.jpg", alt: "Custom wheel on a customer car" },
  { src: "/gallery/g29.jpg", alt: "Wheels stacked inside the Kissimmee shop" },
] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">{t.services.kicker}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t.services.lead}
          </p>
          <div className="mt-10 space-y-6">
            {t.services.items.map((item, i) => {
              const Icon = ICONS[i] ?? Shield;
              return (
                <article key={item.title} className="flex gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-elevated text-steel">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="grid grid-cols-2 gap-3">
            {PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="overflow-hidden rounded-lg bg-elevated shadow-[var(--shadow-border)]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
