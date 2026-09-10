import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JsonLd } from "@/components/layout/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import appCss from "../styles.css?url";

const APP_NAME = "Obsessions Wheels";

function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">{t.notFound.title}</h1>
      <p className="mt-3 text-muted">{t.notFound.body}</p>
      <Button asChild className="mt-8" variant="steel">
        <Link to="/">{t.notFound.home}</Link>
      </Button>
    </section>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "OEM original rims and replica wheels in Kissimmee, Florida. Family-run shop. Financing and nationwide shipping.",
      },
      { name: "theme-color", content: "#F2F4F3" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/brand/logo.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "preconnect", href: "https://cdn.lightwidget.com" },
    ],
    scripts: [
      {
        src: "https://cdn.lightwidget.com/widgets/lightwidget.js",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <JsonLd />
            <SiteShell>
              <Outlet />
            </SiteShell>
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
