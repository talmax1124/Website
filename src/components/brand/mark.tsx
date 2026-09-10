import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo-full.png"
      alt="Obsessions Wheels"
      width={56}
      height={56}
      draggable={false}
      className={cn(
        "h-10 w-10 shrink-0 rounded-md object-cover sm:h-14 sm:w-14",
        className,
      )}
    />
  );
}
