import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

export function InstagramFeed() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
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
      if (!payload.size || !frame.current) return;
      frame.current.style.height = `${payload.size}px`;
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
        style={{ width: "100%", minHeight: 360, overflow: "hidden" }}
      />
    </div>
  );
}
