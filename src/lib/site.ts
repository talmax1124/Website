export const SITE = {
  legalName: "Obsessions Wheels LLC",
  name: "Obsessions Wheels",
  alsoKnownAs: "Wheel Pro Kissimmee",
  tagline: "Where there is quality, there is no competition.",
  description:
    "OEM original rims and precision replicas in Kissimmee, Florida. Family-run shop. Financing and nationwide shipping.",
  url: "https://obsessionswheels.com",
  logo: "/brand/logo-full.png",
  ogImage: "/og.jpg",
  address: {
    street: "1897 John Henry Jones Blvd",
    city: "Kissimmee",
    state: "FL",
    zip: "34741",
    country: "United States",
    full: "1897 John Henry Jones Blvd, Kissimmee, FL 34741",
  },
  geo: { lat: 28.273836, lng: -81.425651 },
  phones: {
    office: "407-723-6374",
    officeTel: "tel:+14077236374",
    cell: "407-723-3889",
    cellTel: "tel:+14077233889",
    whatsapp: "https://wa.me/14077233889",
  },
  email: "wheelprokissimmee09@gmail.com",
  maps: {
    directions:
      "https://www.google.com/maps?saddr=John-Henry-Jones-Blvd.-1897,Kissimmee,FL,34741,United-States&daddr",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.8079640089695!2d-81.42565078467534!3d28.273836106974727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8479932f106b%3A0xc8f613046e19920f!2s1897%20John%20Henry%20Jones%20Blvd%2C%20Kissimmee%2C%20FL%2034741!5e0!3m2!1sen!2sus!4v1655828991726!5m2!1sen!2sus",
  },
  social: {
    instagram: "https://www.instagram.com/wheelprofl/",
    facebook: "https://www.facebook.com/obsessionswheelskissimmee",
    cashapp: "https://cash.app/$1801ax",
    widget:
      "https://cdn.lightwidget.com/widgets/14c4348c359055c6931d6933905a8698.html",
    widgetScript: "https://cdn.lightwidget.com/widgets/lightwidget.js",
  },
  formEndpoint: "https://formsubmit.co/ajax/wheelprokissimmee09@gmail.com",
  hours: [
    { day: 1, open: 10 * 60, close: 17 * 60 + 30 },
    { day: 2, open: 10 * 60, close: 17 * 60 + 30 },
    { day: 3, open: 10 * 60, close: 17 * 60 + 30 },
    { day: 4, open: 10 * 60, close: 17 * 60 + 30 },
    { day: 5, open: 10 * 60, close: 17 * 60 + 30 },
    { day: 6, open: 10 * 60, close: 17 * 60 + 30 },
  ] as const,
} as const;

export type StoreStatus = {
  open: boolean;
  label: "open" | "closed" | "weekend";
  nextChange: string;
};

function easternParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    day: dayMap[weekday] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

function formatMinutes(total: number) {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function getStoreStatus(date = new Date()): StoreStatus {
  const { day, minutes } = easternParts(date);
  const today = SITE.hours.find((h) => h.day === day);
  if (!today) {
    return { open: false, label: "weekend", nextChange: "10:00" };
  }
  const open = minutes >= today.open && minutes < today.close;
  return {
    open,
    label: open ? "open" : "closed",
    nextChange: open ? formatMinutes(today.close) : "10:00",
  };
}
