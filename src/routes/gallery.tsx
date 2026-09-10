import { createFileRoute } from "@tanstack/react-router";
import { LightboxGrid } from "@/components/gallery/lightbox-grid";
import { PageHero } from "@/components/layout/page-hero";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function GalleryPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        kicker={t.gallery.kicker}
        title={t.pages.galleryTitle}
        lead={t.pages.galleryLead}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <LightboxGrid />
      </section>
    </>
  );
}
