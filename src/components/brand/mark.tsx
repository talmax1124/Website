import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo.png"
      alt=""
      draggable={false}
      className={cn("size-11 rounded-full object-cover", className)}
    />
  );
}
