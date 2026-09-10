import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" lead="How this site uses the information you send us." />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-sm leading-relaxed text-muted sm:px-6">
        <p>
          {SITE.legalName} operates this website for the Kissimmee shop at{" "}
          {SITE.address.full}. Contact form submissions are sent to {SITE.email} so
          the shop can reply. We do not sell that information.
        </p>
        <p>
          Language preference is stored in your browser. The site does not require an
          account. Third-party financing partners (Snap, American First Finance,
          Koalafi) have their own privacy policies when you leave this site to apply.
        </p>
        <p>
          Questions: {SITE.email}.
        </p>
      </section>
    </>
  );
}
