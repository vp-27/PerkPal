import { Link } from "react-router-dom";
import { ArrowLeft, Layers2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <Layers2 size={40} className="mx-auto mb-7 text-primary" />
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
