import { useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LogoProps = HTMLAttributes<HTMLElement>;
export interface BrandIconProps extends LogoProps {
  name?: string;
  code?: string;
}

// Authentic locally stored assets; provenance is recorded in public/brands/sources.json.
const brands = [
  {
    name: "Starbucks",
    file: "starbucks.ico",
    aliases: ["starbucks", "sbux", "sb"],
  },
  {
    name: "Domino’s",
    file: "dominos.svg",
    aliases: ["dominos", "domino", "dp"],
  },
  { name: "Taco Bell", file: "tacobell.ico", aliases: ["tacobell", "tb"] },
  { name: "Target", file: "target.png", aliases: ["target", "tgt", "tg"] },
  { name: "Amazon", file: "amazon.ico", aliases: ["amazon", "amz", "az"] },
  { name: "Apple", file: "apple.ico", aliases: ["apple", "itunes", "ap"] },
  { name: "Chipotle", file: "chipotle.png", aliases: ["chipotle", "cp"] },
  {
    name: "Sephora",
    file: "sephora.ico",
    aliases: ["sephora", "beautyinsider", "sp"],
  },
  { name: "Sony", file: "sony.svg", aliases: ["sony"] },
  { name: "Dyson", file: "dyson.svg", aliases: ["dyson"] },
  { name: "Instant Pot", file: "instantpot.png", aliases: ["instantpot"] },
  {
    name: "Delta Air Lines",
    file: "delta.ico",
    aliases: ["delta", "skymiles", "dl", "dal"],
  },
  {
    name: "United Airlines",
    file: "united.ico",
    aliases: ["united", "mileageplus", "ua"],
  },
  {
    name: "Chase",
    file: "chase.ico",
    aliases: ["chase", "ultimaterewards", "sapphire", "ch"],
  },
  {
    name: "Marriott",
    file: "marriott.ico",
    aliases: ["marriott", "bonvoy", "mb"],
  },
  { name: "Hilton", file: "hilton.svg", aliases: ["hilton", "honors", "hh"] },
  {
    name: "Capital One",
    file: "capitalone.ico",
    aliases: ["capitalone", "venture", "c1"],
  },
  {
    name: "American Express",
    file: "amex.png",
    aliases: ["americanexpress", "amex", "membershiprewards", "ax"],
  },
  { name: "Citi", file: "citi.png", aliases: ["citi", "thankyou", "ty"] },
  { name: "Hyatt", file: "hyatt.ico", aliases: ["hyatt", "hy"] },
  {
    name: "Air France",
    file: "airfrance.png",
    aliases: ["airfrance", "klm", "flyingblue", "af"],
  },
  {
    name: "Virgin Atlantic",
    file: "virgin.ico",
    aliases: ["virgin", "flyingclub", "vs"],
  },
  { name: "Wyndham", file: "wyndham.svg", aliases: ["wyndham", "wyn"] },
];

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

export function BrandIcon({
  name = "",
  code = "",
  className = "w-5 h-5",
  ...props
}: BrandIconProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const query = normalize(name);
  const shortCode = normalize(code);
  const brand = brands.find((brand) =>
    brand.aliases.some(
      (alias) =>
        (query.includes(alias) && alias.length > 2) ||
        shortCode === alias ||
        query === alias,
    ),
  );
  const src = brand ? `/brands/${brand.file}` : null;
  if (!src || failedSource === src) {
    return (
      <span
        {...props}
        className={cn("brand-fallback", className)}
        aria-label={name || code || "Custom brand"}
      >
        {(code || name.slice(0, 2) || "?").toUpperCase()}
      </span>
    );
  }
  return (
    <img
      {...props}
      src={src}
      alt={props["aria-hidden"] ? "" : `${brand.name} logo`}
      className={cn("brand-image", className)}
      decoding="async"
      onError={() => setFailedSource(src)}
    />
  );
}

// Preserve named imports used by existing components, all through the same asset resolver.
export const DeltaLogo = (props: LogoProps) => (
  <BrandIcon name="Delta" {...props} />
);
export const UnitedLogo = (props: LogoProps) => (
  <BrandIcon name="United" {...props} />
);
export const AmericanLogo = (props: LogoProps) => (
  <BrandIcon name="American Airlines" code="AA" {...props} />
);
export const SouthwestLogo = (props: LogoProps) => (
  <BrandIcon name="Southwest" code="WN" {...props} />
);
export const VirginLogo = (props: LogoProps) => (
  <BrandIcon name="Virgin Atlantic" {...props} />
);
export const BritishAirwaysLogo = (props: LogoProps) => (
  <BrandIcon name="British Airways" code="BA" {...props} />
);
export const AirFranceLogo = (props: LogoProps) => (
  <BrandIcon name="Air France" {...props} />
);
export const ChaseLogo = (props: LogoProps) => (
  <BrandIcon name="Chase" {...props} />
);
export const AmexLogo = (props: LogoProps) => (
  <BrandIcon name="American Express" {...props} />
);
export const CapitalOneLogo = (props: LogoProps) => (
  <BrandIcon name="Capital One" {...props} />
);
export const CitiLogo = (props: LogoProps) => (
  <BrandIcon name="Citi" {...props} />
);
export const MarriottLogo = (props: LogoProps) => (
  <BrandIcon name="Marriott" {...props} />
);
export const HyattLogo = (props: LogoProps) => (
  <BrandIcon name="Hyatt" {...props} />
);
export const HiltonLogo = (props: LogoProps) => (
  <BrandIcon name="Hilton" {...props} />
);
export const IHGLogo = (props: LogoProps) => (
  <BrandIcon name="IHG" code="IHG" {...props} />
);
export const StarbucksLogo = (props: LogoProps) => (
  <BrandIcon name="Starbucks" {...props} />
);
export const TargetLogo = (props: LogoProps) => (
  <BrandIcon name="Target" {...props} />
);
export const AmazonLogo = (props: LogoProps) => (
  <BrandIcon name="Amazon" {...props} />
);
export const SephoraLogo = (props: LogoProps) => (
  <BrandIcon name="Sephora" {...props} />
);
export const AppleLogo = (props: LogoProps) => (
  <BrandIcon name="Apple" {...props} />
);
export const UberLogo = (props: LogoProps) => (
  <BrandIcon name="Uber" code="UB" {...props} />
);
export const AirbnbLogo = (props: LogoProps) => (
  <BrandIcon name="Airbnb" code="AB" {...props} />
);
export const ChipotleLogo = (props: LogoProps) => (
  <BrandIcon name="Chipotle" {...props} />
);
export const DunkinLogo = (props: LogoProps) => (
  <BrandIcon name="Dunkin" code="DK" {...props} />
);
export const WyndhamLogo = (props: LogoProps) => (
  <BrandIcon name="Wyndham" {...props} />
);
export const DominosLogo = (props: LogoProps) => (
  <BrandIcon name="Dominos" {...props} />
);
export const TacoBellLogo = (props: LogoProps) => (
  <BrandIcon name="Taco Bell" {...props} />
);
export const SonyLogo = (props: LogoProps) => (
  <BrandIcon name="Sony" {...props} />
);
export const DysonLogo = (props: LogoProps) => (
  <BrandIcon name="Dyson" {...props} />
);

export function PremierPartnerLogosStrip({
  className = "",
  itemClassName = "",
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {[
        "Delta Air Lines",
        "United Airlines",
        "Chase",
        "Marriott",
        "Starbucks",
        "Target",
        "Amazon",
        "Apple",
      ].map((name) => (
        <span
          key={name}
          className={`inline-flex items-center gap-2 text-xs ${itemClassName}`}
        >
          <BrandIcon name={name} />
          {name}
        </span>
      ))}
    </div>
  );
}
