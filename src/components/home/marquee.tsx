import { useLanguage } from "@/lib/language";

export function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4">
      <div className="marquee-track gap-10 px-6">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl tracking-[0.18em] text-muted uppercase"
          >
            {item}
            <span className="ml-10 text-faint">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
