import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Banknote } from "lucide-react";
import { Mark } from "@/components/brand/mark";
import { StatusBadge } from "@/components/layout/status-badge";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface pb-24 text-fg md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center" aria-label={SITE.name}>
            <Mark className="text-[1.85rem] sm:text-3xl" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {t.footer.blurb}
          </p>
          <div className="mt-4">
            <StatusBadge />
          </div>
        </div>

        <div className="space-y-3 text-sm md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            {t.footer.contacts}
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-steel">
              {SITE.email}
            </a>
          </p>
          <p>
            <a
              href={SITE.maps.directions}
              target="_blank"
              rel="noreferrer"
              className="hover:text-steel"
            >
              {SITE.address.full}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            {t.footer.social}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-fg hover:bg-elevated"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-fg hover:bg-elevated"
              aria-label="Facebook"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={SITE.social.cashapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-fg hover:bg-elevated"
              aria-label="Cash App"
            >
              <Banknote className="size-5" />
            </a>
          </div>
          <p className="mt-3 text-sm text-muted">{t.footer.socialLead}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {SITE.legalName}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-muted">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-muted">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
