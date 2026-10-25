import { useEffect, useState } from "react";
import {
  Coffee,
  Pizza,
  Sandwich,
  ShoppingBag,
  Gift,
  Plane,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import TransferCalculator from "@/components/dashboard/TransferCalculator";
import { Button } from "@/components/ui/button";
import { RewardsStore } from "@/lib/rewardsData";
import ItemDetailSheet, {
  VaultItem,
} from "@/components/dashboard/ItemDetailSheet";

export default function Offers() {
  const [filter, setFilter] = useState("All perks");
  const [selected, setSelected] = useState<VaultItem | null>(null);
  const [, update] = useState(0);
  useEffect(() => {
    const refresh = () => update((t) => t + 1);
    window.addEventListener("perkpal_data_updated", refresh);
    return () => window.removeEventListener("perkpal_data_updated", refresh);
  }, []);
  const programs = RewardsStore.getPrograms();
  const cards = RewardsStore.getGiftCards();
  const offers = [
    {
      id: "starbucks",
      category: "Food & drink",
      eyebrow: "Your coffee break",
      title: "A little coffee, on your stars.",
      text: "Keep your Starbucks stars in sight and plan your next coffee stop.",
      art: "Coffee, covered.",
      icon: Coffee,
    },
    {
      id: "dominos",
      category: "Food & drink",
      eyebrow: "Make it a pizza night",
      title: "Good points. Great pizza.",
      text: "Check your Domino’s points before placing your next order.",
      art: "A slice of the good life.",
      icon: Pizza,
    },
    {
      id: "tacobell",
      category: "Food & drink",
      eyebrow: "Your next taco stop",
      title: "Something extra for your order.",
      text: "Your Taco Bell rewards have a place here, including the ones expiring soon.",
      art: "More to taco ’bout.",
      icon: Sandwich,
    },
    {
      id: "target",
      category: "Shopping",
      eyebrow: "The everyday essentials",
      title: "Make your next Target run count.",
      text: "See your sample Circle earnings and keep those small savings together.",
      art: "A rewarding little run.",
      icon: ShoppingBag,
    },
    {
      id: "gc-1",
      category: "Shopping",
      eyebrow: "Already in your wallet",
      title: "A gift you can put to good use.",
      text: "That Amazon gift card balance could cover part of your next little find.",
      art: "Something just for you.",
      icon: Gift,
    },
    {
      id: "delta",
      category: "Travel",
      eyebrow: "A little further afield",
      title: "Keep the next adventure in view.",
      text: "Your travel miles belong in the picture too. Check your sample balance.",
      art: "Good things ahead.",
      icon: Plane,
    },
  ];
  return (
    <AppLayout>
      <div className="page-transition">
        <div className="page-heading">
          <div>
            <span className="eyebrow">
              GOOD THINGS, ALREADY IN YOUR ROUTINE
            </span>
            <h1>More from your everyday.</h1>
            <p>
              Find a reward for your next coffee break, pizza night, or shopping
              trip.
            </p>
          </div>
        </div>
        <div className="notice">
          <Info size={17} />
          <p>
            These are sample rewards and ideas for the demo. Check the brand’s
            own app for current redemption options and terms.
          </p>
        </div>
        <div
          className="filter-tabs mb-6"
          role="group"
          aria-label="Filter perks"
        >
          {["All perks", "Food & drink", "Shopping", "Travel"].map((f) => (
            <button
              className={filter === f ? "selected" : ""}
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="discover-grid">
          {offers
            .filter((o) => filter === "All perks" || filter === o.category)
            .map((offer) => {
              const program = programs.find((p) => p.id === offer.id);
              const card = cards.find((c) => c.id === offer.id);
              const Icon = offer.icon;
              return (
                <article className="perk-card" key={offer.id}>
                  <div className="perk-art">
                    <Icon strokeWidth={1.4} />
                    <span>{offer.art}</span>
                  </div>
                  <div className="perk-info">
                    <span>{offer.eyebrow}</span>
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                    {program || card ? (
                      <Button
                        variant="outline"
                        onClick={() =>
                          setSelected(
                            program
                              ? { type: "reward", data: program }
                              : { type: "giftcard", data: card! },
                          )
                        }
                      >
                        View in your wallet <ArrowUpRight size={13} />
                      </Button>
                    ) : (
                      <Button variant="outline" asChild>
                        <Link to="/accounts">
                          Explore accounts <ArrowUpRight size={13} />
                        </Link>
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
        </div>
        {(filter === "All perks" || filter === "Travel") && (
          <TransferCalculator />
        )}
        <ItemDetailSheet
          item={selected}
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          onItemUpdated={() => {
            setSelected(null);
            update((t) => t + 1);
          }}
        />
      </div>
    </AppLayout>
  );
}
