import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export function MobileCta() {
  const { t } = useLanguage();
  const items = [
    { href: SITE.phones.cellTel, icon: Phone, label: t.mobile.call },
    { href: SITE.phones.whatsapp, icon: MessageCircle, label: t.mobile.chat },
    { href: SITE.maps.directions, icon: MapPin, label: t.mobile.map },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-2 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-1">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md text-xs font-medium text-fg hover:bg-elevated"
          >
            <item.icon className="size-4" />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
