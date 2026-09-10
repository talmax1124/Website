import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
