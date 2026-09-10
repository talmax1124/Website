import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JsonLd } from "@/components/layout/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const APP_NAME = SITE.name;
const OG_IMAGE = `${SITE.url}${SITE.ogImage}`;
const LOGO = `${SITE.url}${SITE.logo}`;

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

function VercelAnalytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <Analytics path={pathname} route={pathname} />;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#061734" },
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: APP_NAME },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:logo", content: LOGO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: APP_NAME },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: APP_NAME },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", href: SITE.logo },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
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
  component: RootDocument,
});

function RootDocument() {
  return (
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
        <VercelAnalytics />
        <Scripts />
      </body>
    </html>
  );
}
