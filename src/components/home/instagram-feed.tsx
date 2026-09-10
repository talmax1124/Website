import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

export function InstagramFeed() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const apply = (size: number) => {
      if (!frame.current || !Number.isFinite(size)) return;
      const next = Math.min(Math.max(Math.round(size), 140), 640);
      frame.current.style.height = `${next}px`;
      frame.current.style.minHeight = "0px";
    };
    const onMessage = (event: MessageEvent) => {
      const origin = event.origin.replace(/^https?:\/\//i, "");
      if (!origin.includes("lightwidget.com")) return;
      let payload: { type?: string; size?: number } = {};
      try {
        payload =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      if (payload.size) apply(payload.size);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <iframe
        ref={frame}
        src={SITE.social.widget}
        title="Instagram — @wheelprofl"
        className="lightwidget-widget block w-full border-0"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: 180, minHeight: 0, overflow: "hidden" }}
      />
    </div>
  );
}
