import { lazy, Suspense, useEffect, useState } from "react";

const WheelScene = lazy(() => import("@/components/three/wheel-scene"));

function Photo() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src="/gallery/hero-shop.jpg"
        alt=""
        className="h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/40 to-transparent" />
    </div>
  );
}

export function WheelCanvas() {
  const [mode, setMode] = useState<"image" | "3d">("image");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (!reduce && !small) setMode("3d");
  }, []);

  if (mode === "image") return <Photo />;

  return (
    <Suspense fallback={<Photo />}>
      <WheelScene />
    </Suspense>
  );
}
