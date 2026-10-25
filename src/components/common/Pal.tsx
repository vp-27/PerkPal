interface PalProps {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
}

/** The core character asset. Future poses can be added here without changing page layouts. */
export default function Pal({
  className = "",
  decorative = false,
  priority = false,
}: PalProps) {
  return (
    <img
      src="/mascot/perkpal-pal.png"
      alt={
        decorative
          ? ""
          : "Pal, the friendly green PerkPal mascot, holding a gold reward coin"
      }
      aria-hidden={decorative || undefined}
      className={`perkpal-pal ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
