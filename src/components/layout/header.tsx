import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Mark } from "@/components/brand/mark";
import { StatusBadge } from "@/components/layout/status-badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "home" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/location", key: "location" as const },
  { to: "/contact", key: "contact" as const },
];

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-200",
        scrolled
          ? "border-b border-line bg-surface/90 shadow-[var(--shadow-border)] backdrop-blur-md"
          : "border-b border-transparent bg-bg/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg"
          aria-label={SITE.name}
        >
          <Mark />
          <span className="font-display text-base font-semibold tracking-[0.08em] uppercase whitespace-nowrap sm:text-lg">
            Obsessions Wheels
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <StatusBadge />
          </span>
          <div className="hidden items-center rounded-md border border-line p-0.5 sm:flex">
            {(["en", "es"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "min-h-9 rounded-sm px-2.5 text-xs font-semibold tracking-wide transition-colors duration-150",
                  lang === code
                    ? "bg-elevated text-fg"
                    : "text-muted hover:text-fg",
                )}
                aria-pressed={lang === code}
                aria-label={t.lang.switch}
              >
                {t.lang[code]}
              </button>
            ))}
          </div>
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <a href={SITE.phones.cellTel}>{t.hero.ctaSecondary}</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-8 tracking-[0.08em] uppercase">
                Obsessions Wheels
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="rounded-md px-2 py-3 text-lg text-fg hover:bg-elevated"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 flex gap-2">
                {(["en", "es"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={cn(
                      "min-h-11 flex-1 rounded-md border border-line text-sm font-semibold",
                      lang === code
                        ? "bg-elevated text-fg"
                        : "text-muted",
                    )}
                  >
                    {t.lang[code]}
                  </button>
                ))}
              </div>
              <Button asChild className="mt-6 w-full">
                <a href={SITE.phones.cellTel}>{t.hero.ctaSecondary}</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
