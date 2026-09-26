import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md space-y-5">
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <img
            src="/perkpal-icon.png"
            alt="PerkPal Mascot"
            className="w-24 h-24 object-contain filter drop-shadow-xl"
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Error 404 • Out of Bounds
          </span>
          <h1 className="text-3xl font-black tracking-tight">Space Not On The Board</h1>
          <p className="text-xs text-muted-foreground">
            PerkPal searched all 140+ loyalty channels, but <code className="px-1.5 py-0.5 rounded bg-muted font-mono">{location.pathname}</code> does not exist.
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="outline" size="sm" className="font-semibold text-xs">
              <Home className="mr-1.5 h-3.5 w-3.5" />
              Home Overview
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="font-semibold text-xs">
              <Compass className="mr-1.5 h-3.5 w-3.5" />
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
