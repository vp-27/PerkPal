import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Gift,
  Plus,
  ShieldCheck,
  Wallet,
  ArrowDownLeft,
  Link2,
  X,
} from "lucide-react";
import Pal from "@/components/common/Pal";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import UnifiedVault from "@/components/dashboard/UnifiedVault";
import ExpirationRadar from "@/components/dashboard/ExpirationRadar";
import AddItemDialog from "@/components/dashboard/AddItemDialog";
import ItemDetailSheet, {
  VaultItem,
} from "@/components/dashboard/ItemDetailSheet";
import { DEMO_PERSONAS, RewardsStore } from "@/lib/rewardsData";

export default function Dashboard() {
  const [selected, setSelected] = useState<VaultItem | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [, update] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("perkpal_user")) {
      localStorage.setItem("perkpal_user", JSON.stringify(DEMO_PERSONAS.alex));
      window.dispatchEvent(new Event("perkpal_auth_change"));
    }
    const refresh = () => update((t) => t + 1);
    window.addEventListener("perkpal_data_updated", refresh);
    window.addEventListener("perkpal_auth_change", refresh);
    return () => {
      window.removeEventListener("perkpal_data_updated", refresh);
      window.removeEventListener("perkpal_auth_change", refresh);
    };
  }, []);
  useEffect(() => {
    if (!celebrating) return;
    const timeout = window.setTimeout(() => setCelebrating(false), 6500);
    return () => window.clearTimeout(timeout);
  }, [celebrating]);
  let name = "Alex";
  try {
    name =
      JSON.parse(localStorage.getItem("perkpal_user") || "null")?.name?.split(
        " ",
      )[0] || "Alex";
  } catch {
    /* Use demo name if stored profile is invalid. */
  }
  const metrics = RewardsStore.getMetrics();
  const balance = metrics.totalNetWorth.toFixed(2).split(".");
  return (
    <AppLayout>
      <div className="page-transition">
        <div className="page-heading">
          <div>
            <span className="eyebrow">YOUR EVERYDAY REWARDS</span>
            <h1>Good to see you, {name}.</h1>
            <p>
              Your points, your balances, your peace of mind. All right here.
            </p>
          </div>
          <Button onClick={() => setAddOpen(true)}>
            <Plus size={15} />
            Add an item
          </Button>
        </div>
        {celebrating && (
          <div className="pal-success" role="status">
            <Pal pose="celebrating" decorative animate />
            <div>
              <strong>One more thing, all together.</strong>
              <p>Your new item is saved in your wallet.</p>
            </div>
            <button
              onClick={() => setCelebrating(false)}
              aria-label="Dismiss Pal’s celebration"
            >
              <X size={16} />
            </button>
          </div>
        )}
        <div className="stat-grid">
          <div className="stat-card primary-stat">
            <div className="stat-label">
              Your wallet, at a glance
              <Wallet size={17} />
            </div>
            <div className="stat-value">
              ${Number(balance[0]).toLocaleString()}
              <span>.{balance[1]}</span>
            </div>
            <p className="stat-caption">
              Estimated value across rewards & gift cards
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-label">
              Gift cards, ready to go
              <Gift size={17} />
            </div>
            <div className="stat-value">
              ${metrics.giftCardsValue.toFixed(2)}
            </div>
            <p className="stat-caption">
              Available across {metrics.giftCardsCount} cards
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-label">
              Warranties tracked
              <ShieldCheck size={17} />
            </div>
            <div className="stat-value">
              {metrics.warrantiesCount}
              <span> products</span>
            </div>
            <p className="stat-caption">Warranty details kept together</p>
          </div>
        </div>
        <div className="wallet-content-grid">
          <div>
            <UnifiedVault onSelectItem={setSelected} />
            <section className="activity-section">
              <div className="section-title">
                <h2>Recent activity</h2>
                <span>Recent activity</span>
              </div>
              {RewardsStore.getTransactions()
                .slice(0, 4)
                .map((tx) => (
                  <div className="activity-row" key={tx.id}>
                    <span>
                      {tx.type === "earn" ? (
                        <Plus size={14} />
                      ) : (
                        <ArrowDownLeft size={14} />
                      )}
                    </span>
                    <div>
                      <strong>{tx.description}</strong>
                      <p>{tx.program}</p>
                    </div>
                    <b>
                      {tx.type === "earn"
                        ? "+"
                        : tx.type === "redeem"
                          ? "−"
                          : ""}
                      {tx.amount.toLocaleString()} {tx.unit}
                      <small>{tx.date}</small>
                    </b>
                  </div>
                ))}
            </section>
          </div>
          <aside className="wallet-aside">
            <ExpirationRadar onSelectItem={setSelected} />
            <div className="side-callout">
              <Link2 size={23} />
              <h3>Make room for more.</h3>
              <p>
                Bring another favorite into your wallet. Coffee runs and taco
                stops included.
              </p>
              <Link to="/accounts">
                Explore accounts <ArrowUpRight size={13} />
              </Link>
            </div>
          </aside>
        </div>
        <AddItemDialog
          isOpen={addOpen}
          onClose={() => setAddOpen(false)}
          onItemAdded={() => {
            update((t) => t + 1);
            setCelebrating(true);
          }}
        />
        <ItemDetailSheet
          item={selected}
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          onItemUpdated={() => {
            update((t) => t + 1);
            setSelected(null);
          }}
        />
      </div>
    </AppLayout>
  );
}
