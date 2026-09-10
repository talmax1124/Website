import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { StatusBadge } from "@/components/layout/status-badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/location")({ component: LocationPage });

function LocationPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        kicker={t.visit.kicker}
        title={t.pages.locationTitle}
        lead={t.pages.locationLead}
      >
        <div className="mt-6">
          <StatusBadge />
        </div>
      </PageHero>
      <section className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">{SITE.name}</h2>
          <p className="mt-3 text-muted">{SITE.address.full}</p>
          <ul className="mt-6 divide-y divide-line">
            {t.visit.days.map((day) => (
              <li
                key={day.label}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="font-medium">{day.label}</span>
                <span className="tabular-nums text-muted">{day.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="steel">
              <a href={SITE.maps.directions} target="_blank" rel="noreferrer">
                {t.visit.directions}
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl bg-elevated shadow-[var(--shadow-border)]">
          <iframe
            title={SITE.address.full}
            src={SITE.maps.embed}
            className="h-96 w-full lg:h-full min-h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
