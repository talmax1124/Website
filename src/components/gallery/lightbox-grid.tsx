import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GALLERY } from "@/lib/gallery";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export function LightboxGrid() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = GALLERY[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((i) => (i + 1) % GALLERY.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {GALLERY.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="group overflow-hidden rounded-lg bg-elevated text-left"
          >
            <img
              src={item.src}
              alt={lang === "es" ? item.altEs : item.alt}
              className="aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-2">
          <DialogTitle className="sr-only">
            {current ? (lang === "es" ? current.altEs : current.alt) : t.pages.galleryTitle}
          </DialogTitle>
          {current ? (
            <img
              src={current.src}
              alt={lang === "es" ? current.altEs : current.alt}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
          ) : null}
          <div className="flex items-center justify-between px-2 py-2">
            <button
              type="button"
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-elevated",
              )}
              onClick={() =>
                setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length)
              }
              aria-label={t.gallery.prev}
            >
              <ChevronLeft />
            </button>
            <p className="text-xs tabular-nums text-muted">
              {index + 1} / {GALLERY.length}
            </p>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-elevated"
              onClick={() => setIndex((i) => (i + 1) % GALLERY.length)}
              aria-label={t.gallery.next}
            >
              <ChevronRight />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
