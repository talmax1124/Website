import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-svh bg-bg text-fg">
      <SmoothScroll />
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCta />
    </div>
  );
}
