import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms"
        lead="Fitment, financing, and shipping — the short version."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-sm leading-relaxed text-muted sm:px-6">
        <p>
          Product availability, pricing, and lead times change. A quote is confirmed
          when the shop says so — by phone, WhatsApp, or email — not by a photo on
          this site.
        </p>
        <p>
          Financing is provided by third-party lenders. Approval, rates, and terms
          are between you and the lender. {SITE.legalName} does not guarantee
          approval.
        </p>
        <p>
          Wheel fitment depends on the vehicle. We confirm bolt pattern, offset, and
          load rating before a sale when you give us year, make, and model.
        </p>
        <p>
          {SITE.legalName} · {SITE.address.full}
        </p>
      </section>
    </>
  );
}
