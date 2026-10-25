import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Pal from "@/components/common/Pal";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <Pal pose="searching" className="not-found-pal" priority animate />
        <span className="eyebrow justify-center">404 / A LITTLE OFF TRACK</span>
        <h1 className="text-3xl font-semibold tracking-tight mt-5 mb-4">
          This perk is a little hard to find.
        </h1>
        <p className="text-sm text-muted-foreground mb-7">
          That page isn’t here. Let’s get you back to familiar ground.
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </Button>
      </div>
    </main>
  );
}
