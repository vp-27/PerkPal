import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";

const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Accounts = lazy(() => import("./pages/Accounts"));
const Offers = lazy(() => import("./pages/Offers"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/dashboard": "My wallet",
      "/accounts": "Connected accounts",
      "/offers": "Discover perks",
      "/settings": "Settings",
      "/signin": "Welcome back",
    };
    document.title =
      pathname === "/"
        ? "PerkPal — All your perks. One happy little place."
        : `${titles[pathname] || "Page not found"} · PerkPal`;
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <RouteEffects />
          <Suspense
            fallback={
              <div
                className="min-h-screen grid place-items-center"
                role="status"
              >
                <span className="text-sm text-muted-foreground">
                  Getting your little extras together…
                </span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/profile"
                element={<Navigate to="/settings" replace />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}
