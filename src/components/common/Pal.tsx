import { useState } from "react";

const poses = {
  coin: {
    src: "/mascot/perkpal-pal.png",
    alt: "Pal, the friendly green PerkPal mascot, holding a gold reward coin",
  },
  pointing: {
    src: "/mascot/perkpal-pointing.png",
    alt: "Pal holding a reward coin and pointing toward something worth a look",
  },
  celebrating: {
    src: "/mascot/perkpal-celebrating.png",
    alt: "Pal celebrating with a gold reward coin raised overhead",
  },
  searching: {
    src: "/mascot/perkpal-searching.png",
    alt: "Pal looking around for a missing perk",
  },
} as const;

export type PalPose = keyof typeof poses;
interface PalProps {
  pose?: PalPose;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  animate?: boolean;
}

/** One character, with a contextual pose and accessible description for each state. */
export default function Pal({
  pose = "coin",
  className = "",
  decorative = false,
  priority = false,
  animate = false,
}: PalProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const requested = poses[pose];
  const artwork = failedSource === requested.src ? poses.coin : requested;
  return (
    <img
      key={pose}
      src={artwork.src}
      alt={decorative ? "" : artwork.alt}
      aria-hidden={decorative || undefined}
      className={`perkpal-pal ${animate ? "pal-react" : ""} ${className}`}
      data-pose={pose}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailedSource(requested.src)}
    />
  );
}
