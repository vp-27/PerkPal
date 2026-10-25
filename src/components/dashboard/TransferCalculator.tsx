import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RewardsStore } from "@/lib/rewardsData";
import { useToast } from "@/hooks/use-toast";

const routes = [
  {
    from: "American Express MR",
    to: "Virgin Atlantic Flying Club",
    bonus: 30,
    cents: 1.8,
  },
  {
    from: "Chase Ultimate Rewards",
    to: "Marriott Bonvoy",
    bonus: 50,
    cents: 0.9,
  },
  {
    from: "Capital One Miles",
    to: "Air France / KLM Flying Blue",
    bonus: 20,
    cents: 1.9,
  },
  {
    from: "Chase Ultimate Rewards",
    to: "World of Hyatt",
    bonus: 0,
    cents: 2.1,
  },
  {
    from: "Citi ThankYou Points",
    to: "Wyndham Rewards",
    bonus: 20,
    cents: 1.2,
  },
];

export default function TransferCalculator() {
  const [routeIndex, setRouteIndex] = useState(0);
  const [amount, setAmount] = useState("50000");
  const { toast } = useToast();
  const route = routes[routeIndex];
  const points = Number(amount);
  const valid =
    Number.isFinite(points) && Number.isInteger(points) && points > 0;
  const received = valid ? Math.round(points * (1 + route.bonus / 100)) : 0;
  const value = (received * route.cents) / 100;

  const simulate = () => {
    if (!valid) return;
    RewardsStore.addTransaction({
      date: "Just now",
      program: `${route.from} → ${route.to}`,
      description: `Sample transfer of ${points.toLocaleString()} points`,
      type: "transfer",
      amount: received,
      unit: "Points",
      dollarValue: +value.toFixed(2),
    });
    toast({
      title: "Sample transfer recorded",
      description: `${received.toLocaleString()} illustrative points. No real points were moved.`,
    });
  };

  return (
    <section className="mt-9 settings-panel">
      <Accordion type="single" collapsible>
        <AccordionItem value="transfers" className="border-0">
          <AccordionTrigger className="text-sm font-medium text-left py-0 gap-4">
            <span className="flex items-center gap-3">
              <ArrowRightLeft size={18} className="text-primary" />A little
              further: travel transfer calculator
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-0">
            <p className="text-xs text-muted-foreground leading-relaxed mb-5">
              Explore the original demo’s travel tools. Rates, bonuses, and
              valuations below are illustrative sample data, not current offers.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="field-label" htmlFor="transfer-route">
                  Sample transfer route
                </label>
                <select
                  id="transfer-route"
                  className="w-full h-10 px-3 bg-background border border-input rounded-md text-xs"
                  value={routeIndex}
                  onChange={(e) => setRouteIndex(Number(e.target.value))}
                >
                  {routes.map((r, index) => (
                    <option key={`${r.from}-${r.to}`} value={index}>
                      {r.from} → {r.to}
                    </option>
                  ))}
                </select>
                <label className="field-label mt-5" htmlFor="transfer-points">
                  Points to explore
                </label>
                <Input
                  id="transfer-points"
                  value={amount}
                  type="number"
                  min="1"
                  step="1"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button
                  onClick={simulate}
                  disabled={!valid}
                  className="mt-5 w-full text-xs"
                >
                  Record sample transfer
                </Button>
              </div>
              <div className="bg-accent rounded-lg p-6">
                <p className="text-[10px] text-muted-foreground">
                  WITH A SAMPLE {route.bonus}% BONUS
                </p>
                <p className="text-3xl font-medium tracking-tight mt-3">
                  {received.toLocaleString()}
                  <span className="text-xs ml-2 text-muted-foreground">
                    points
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  {(received - (valid ? points : 0)).toLocaleString()} extra
                  sample points
                </p>
                <p className="border-t border-border pt-4 mt-5 text-xs">
                  Illustrative value: $
                  {value.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
