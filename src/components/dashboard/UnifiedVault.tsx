import { useState } from "react";
import { ArrowUpRight, Search, Clock3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BrandIcon } from "@/components/common/BrandLogos";
import { RewardsStore } from "@/lib/rewardsData";
import { expirationStatus } from "@/lib/expiration";
import { VaultItem } from "./ItemDetailSheet";

export default function UnifiedVault({
  onSelectItem,
}: {
  onSelectItem: (item: VaultItem) => void;
}) {
  const [filter, setFilter] = useState("All items");
  const [search, setSearch] = useState("");
  const items: VaultItem[] = [
    ...RewardsStore.getPrograms().map((data) => ({
      type: "reward" as const,
      data,
    })),
    ...RewardsStore.getGiftCards().map((data) => ({
      type: "giftcard" as const,
      data,
    })),
    ...RewardsStore.getWarranties().map((data) => ({
      type: "warranty" as const,
      data,
    })),
  ];
  const matches = (item: VaultItem, category: string) =>
    category === "All items" ||
    (category === "Rewards" && item.type === "reward") ||
    (category === "Gift cards" && item.type === "giftcard") ||
    (category === "Warranties" && item.type === "warranty");
  const filtered = items.filter(
    (item) =>
      matches(item, filter) &&
      JSON.stringify(item.data).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section>
      <div className="section-title">
        <h2>Everything, together</h2>
        <span>{items.length} items in your wallet</span>
      </div>
      <div className="vault-search">
        <Search />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find a brand, gift card, or product"
          aria-label="Search your wallet"
        />
      </div>
      <div
        className="filter-tabs"
        role="group"
        aria-label="Filter wallet items"
      >
        {["All items", "Rewards", "Gift cards", "Warranties"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? "selected" : ""}
              aria-pressed={filter === category}
            >
              {category}
              <small>
                {items.filter((item) => matches(item, category)).length}
              </small>
            </button>
          ),
        )}
      </div>
      {filtered.length ? (
        <div className="vault-grid">
          {filtered.map((item) => {
            const name =
              item.type === "warranty" ? item.data.productName : item.data.name;
            const brand =
              item.type === "reward" ? item.data.name : item.data.brand;
            const type =
              item.type === "reward"
                ? item.data.category
                : item.type === "giftcard"
                  ? "Gift card"
                  : "Warranty";
            const value =
              item.type === "reward"
                ? item.data.points.toLocaleString()
                : item.type === "giftcard"
                  ? `$${item.data.balance.toFixed(2)}`
                  : item.data.expiresDays <= 30
                    ? `${item.data.expiresDays} days`
                    : `${Math.round(item.data.expiresDays / 30)} months`;
            const unit =
              item.type === "reward"
                ? item.data.pointsName.toLowerCase()
                : item.type === "giftcard"
                  ? "available"
                  : "of coverage";
            const detail =
              item.type === "reward"
                ? `Est. $${item.data.valueUsd.toFixed(2)} in rewards`
                : item.type === "giftcard"
                  ? `Card ending in ${item.data.cardNumber.slice(-4)}`
                  : item.data.coverageType;
            const days =
              item.type === "giftcard"
                ? item.data.isExpiringSoon
                  ? 14
                  : 999
                : item.data.expiresDays;
            const expiring = days <= 60;
            const expiry = expirationStatus(days);
            return (
              <button
                key={`${item.type}-${item.data.id}`}
                className={`vault-card ${expiring ? `vault-expiry-${expiry.tone}` : ""}`}
                onClick={() => onSelectItem(item)}
              >
                <div className="vault-card-top">
                  <span className="vault-brand">
                    <BrandIcon name={brand} className="w-full h-full" />
                  </span>
                  <span className="vault-type">{type}</span>
                </div>
                <h3>{name}</h3>
                <div className="vault-balance">
                  {value}
                  <small>{unit}</small>
                </div>
                <p className="vault-description">{detail}</p>
                <div className="vault-card-bottom">
                  <span>
                    {item.type === "warranty"
                      ? "View coverage"
                      : "View details"}{" "}
                    <span aria-hidden="true">↗</span>
                  </span>
                  {expiring ? (
                    <span className={`expiry-label expiry-${expiry.tone}`}>
                      <Clock3 size={11} aria-hidden="true" />
                      {expiry.label}
                    </span>
                  ) : (
                    <ArrowUpRight size={13} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <Search className="mx-auto text-muted-foreground" size={23} />
          <p>No little extras found here.</p>
          <button
            onClick={() => {
              setSearch("");
              setFilter("All items");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
