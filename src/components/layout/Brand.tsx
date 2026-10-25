import { Link } from "react-router-dom";
import Pal from "@/components/common/Pal";

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="PerkPal home"
      className={`brand ${inverse ? "brand-inverse" : ""}`}
    >
      <span className="brand-mark">
        <Pal decorative priority />
      </span>
      <span>
        perkpal<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
