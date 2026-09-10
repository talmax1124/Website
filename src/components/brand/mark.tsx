import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo-full.png"
      alt="Obsessions Wheels"
      draggable={false}
      className={cn("h-12 w-12 rounded-md object-cover sm:h-14 sm:w-14", className)}
    />
  );
}
