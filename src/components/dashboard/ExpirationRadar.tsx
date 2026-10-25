import { ChevronRight, Bell, Clock3, CircleAlert } from "lucide-react";
import { BrandIcon } from "@/components/common/BrandLogos";
import {
  GiftCard,
  RewardProgram,
  RewardsStore,
  WarrantyItem,
} from "@/lib/rewardsData";
import { VaultItem } from "./ItemDetailSheet";
import Pal from "@/components/common/Pal";
import { expirationStatus } from "@/lib/expiration";

export default function ExpirationRadar({
  onSelectItem,
}: {
  onSelectItem: (item: VaultItem) => void;
}) {
  const items = RewardsStore.getExpiringRadarItems();
  const urgentCount = items.filter((item) => item.expiresDays <= 7).length;
  return (
    <section id="upcoming-expirations">
      <div className="section-title">
        <h2>Coming up soon</h2>
        <span className="expiry-section-count">
          <Bell size={13} />
          {items.length} upcoming
        </span>
      </div>
      {urgentCount > 0 && (
        <div className="pal-deadline-hint">
          <div>
            <strong>
              {urgentCount === 1
                ? "One to use this week."
                : `${urgentCount} to use this week.`}
            </strong>
            <p>Pal’s keeping an eye out.</p>
          </div>
          <Pal pose="pointing" decorative />
        </div>
      )}
      <div className="expiry-list">
        {items.length ? (
          items.map((item) => {
            const status = expirationStatus(item.expiresDays);
            const StatusIcon =
              status.tone === "critical" ? CircleAlert : Clock3;
            return (
              <button
                className={`expiry-row expiry-row-${status.tone}`}
                key={item.id}
                onClick={() =>
                  onSelectItem(
                    item.type === "reward"
                      ? {
                          type: "reward",
                          data: item.originalItem as RewardProgram,
                        }
                      : item.type === "giftcard"
                        ? {
                            type: "giftcard",
                            data: item.originalItem as GiftCard,
                          }
                        : {
                            type: "warranty",
                            data: item.originalItem as WarrantyItem,
                          },
                  )
                }
              >
                <span className="vault-brand">
                  <BrandIcon name={item.brand} className="w-full h-full" />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p className={`expiry-countdown expiry-text-${status.tone}`}>
                    <StatusIcon size={11} aria-hidden="true" />
                    {item.type === "warranty" ? "Coverage: " : ""}
                    {status.label}
                  </p>
                </div>
                <ChevronRight size={13} />
              </button>
            );
          })
        ) : (
          <div className="py-7 text-center">
            <Pal pose="celebrating" className="empty-pal" />
            <p className="text-xs text-muted-foreground">
              All caught up. Nothing expiring soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
