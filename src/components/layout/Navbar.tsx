import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="marketing-nav">
      <div className="site-width nav-inner">
        <Brand />
        <nav
          aria-label="Main navigation"
          className={open ? "marketing-links is-open" : "marketing-links"}
        >
          <a href="/#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="/#features" onClick={() => setOpen(false)}>
            The little extras
          </a>
          <a href="/#faq" onClick={() => setOpen(false)}>
            FAQs
          </a>
          <Link to="/signin" className="mobile-signin">
            Sign in
          </Link>
        </nav>
        <div className="nav-actions">
          <Link className="desktop-signin" to="/signin">
            Sign in
          </Link>
          <Button asChild>
            <Link to="/dashboard">
              Explore the demo <ArrowUpRight size={16} />
            </Link>
          </Button>
          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
