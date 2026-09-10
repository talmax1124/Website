import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-wordmark text-[1.65rem] leading-none tracking-wide text-fg sm:text-[1.85rem]",
        className,
      )}
    >
      Obsessions Wheels
    </span>
  );
}
