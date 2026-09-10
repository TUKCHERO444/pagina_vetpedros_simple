"use client";

import dynamic from "next/dynamic";

const MapaLugar = dynamic(() => import("@/components/MapaLugar"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-surface-soft text-ink-muted">
      Cargando mapa…
    </div>
  ),
});

export default function Mapa() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl">
      <MapaLugar />
    </div>
  );
}
