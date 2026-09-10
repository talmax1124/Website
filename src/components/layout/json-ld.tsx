import { SITE } from "@/lib/site";

export function JsonLd() {
  const logo = `${SITE.url}${SITE.logo}`;
  const image = `${SITE.url}${SITE.ogImage}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: SITE.legalName,
    alternateName: SITE.alsoKnownAs,
    description: SITE.description,
    telephone: SITE.phones.cell,
    email: SITE.email,
    url: SITE.url,
    logo,
    image,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "17:30",
      },
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
