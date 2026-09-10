import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language";
import { getStoreStatus } from "@/lib/site";

export function StatusBadge() {
  const { t } = useLanguage();
  const [status, setStatus] = useState(() => getStoreStatus());

  useEffect(() => {
    setStatus(getStoreStatus());
    const id = window.setInterval(() => setStatus(getStoreStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const label =
    status.label === "open"
      ? t.status.open
      : status.label === "weekend"
        ? t.status.weekend
        : t.status.closed;

  return (
    <Badge variant={status.open ? "open" : "closed"}>
      <span
        className={
          status.open
            ? "mr-1.5 inline-block size-1.5 rounded-full bg-open"
            : "mr-1.5 inline-block size-1.5 rounded-full bg-closed"
        }
      />
      {label}
    </Badge>
  );
}
