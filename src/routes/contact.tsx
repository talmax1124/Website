import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        kicker={t.contact.kicker}
        title={t.pages.contactTitle}
        lead={t.contact.lead}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold">{t.contact.title}</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <img
              src="/gallery/owners.jpg"
              alt={t.about.title}
              className="aspect-4/3 w-full object-cover object-top"
            />
            <div className="p-6 text-sm leading-relaxed">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                {t.footer.contacts}
              </p>
              <p className="mt-4">
                <a href={`mailto:${SITE.email}`} className="text-fg hover:text-steel">
                  {SITE.email}
                </a>
              </p>
              <p className="mt-4">
                <a
                  href={SITE.maps.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg hover:text-steel"
                >
                  {SITE.address.full}
                </a>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
