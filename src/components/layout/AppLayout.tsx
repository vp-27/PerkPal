import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Gift,
  LayoutGrid,
  Link2,
  LogOut,
  Menu,
  Settings,
  X,
  CircleHelp,
} from "lucide-react";
import Brand from "./Brand";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { DEMO_PERSONAS } from "@/lib/rewardsData";

const links = [
  { to: "/dashboard", label: "My wallet", icon: LayoutGrid },
  { to: "/accounts", label: "Connected accounts", icon: Link2 },
  { to: "/offers", label: "Discover perks", icon: Gift },
];
export default function AppLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Alex");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const update = () => {
      try {
        const user =
          JSON.parse(localStorage.getItem("perkpal_user") || "null") ||
          DEMO_PERSONAS.alex;
        setName(user.name || "Alex");
      } catch {
        setName("Alex");
      }
    };
    update();
    setOpen(false);
    window.addEventListener("perkpal_auth_change", update);
    return () => window.removeEventListener("perkpal_auth_change", update);
  }, [pathname]);
  const signOut = () => {
    localStorage.removeItem("perkpal_user");
    window.dispatchEvent(new Event("perkpal_auth_change"));
    navigate("/");
  };
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <aside className={`app-sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <Brand />
          <button
            className="mobile-menu"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X />
          </button>
        </div>
        <div className="sidebar-caption">YOUR EVERYDAY, ORGANIZED</div>
        <nav aria-label="Wallet navigation" className="sidebar-links">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}>
              <Icon size={19} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="note-icon">
            <Gift size={20} />
          </span>
          <h3>Make the most of your rewards.</h3>
          <p>
            Check what you’ve earned before your next coffee run or pizza night.
          </p>
          <Link to="/offers">
            Discover your perks <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="sidebar-bottom">
          <NavLink to="/settings">
            <Settings size={18} />
            Settings
          </NavLink>
          <Link to="/#faq">
            <CircleHelp size={18} />
            Help & FAQs
          </Link>
          <Link to="/">
            <ArrowLeft size={18} />
            Back to home
          </Link>
        </div>
        <div className="sidebar-profile">
          <span className="user-avatar">{name.slice(0, 1)}</span>
          <div>
            <strong>{name}</strong>
            <span>Demo wallet</span>
          </div>
          <button onClick={signOut} aria-label="Sign out" title="Sign out">
            <LogOut size={17} />
          </button>
        </div>
      </aside>
      {open && (
        <button
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <div className="app-body">
        <header className="app-topbar">
          <div className="flex items-center gap-3">
            <button
              className="mobile-menu"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
            >
              <Menu size={21} />
            </button>
            <span className="topbar-breadcrumb">
              Your space <span>/</span>{" "}
              <strong>
                {pathname === "/settings"
                  ? "Settings"
                  : links.find((l) => l.to === pathname)?.label}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="demo-pill">
              <span />
              Interactive demo
            </span>
            <ThemeToggle />
          </div>
        </header>
        <main id="main-content" className="app-main">
          {children}
        </main>
        <footer className="app-footer">
          <span>More value in your everyday.</span>
          <span>Sample data · Saved on this device</span>
        </footer>
      </div>
    </div>
  );
}
