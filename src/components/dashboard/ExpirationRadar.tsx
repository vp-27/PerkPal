import React from 'react';
import {
  Clock,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Flame,
  Sparkles,
  QrCode,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BrandIcon } from '@/components/common/BrandLogos';
import { ExpiringRadarItem, RewardsStore, RewardProgram, GiftCard, WarrantyItem } from '@/lib/rewardsData';
import { VaultItem } from './ItemDetailSheet';

interface ExpirationRadarProps {
  onSelectItem: (item: VaultItem) => void;
}

export const ExpirationRadar: React.FC<ExpirationRadarProps> = ({ onSelectItem }) => {
  const radarItems = RewardsStore.getExpiringRadarItems();

  if (radarItems.length === 0) {
    return (
      <div className="p-6 rounded-3xl bg-secondary/30 border border-border/60 text-center space-y-2">
        <Sparkles className="w-6 h-6 text-emerald-500 mx-auto" />
        <h4 className="text-sm font-bold text-foreground">Zero Expiring Items</h4>
        <p className="text-xs text-muted-foreground">
          All your rewards, gift cards, and product warranties are safe and up to date.
        </p>
      </div>
    );
  }

  const handleItemClick = (radarItem: ExpiringRadarItem) => {
    if (radarItem.type === 'reward') {
      onSelectItem({ type: 'reward', data: radarItem.originalItem as RewardProgram });
    } else if (radarItem.type === 'giftcard') {
      onSelectItem({ type: 'giftcard', data: radarItem.originalItem as GiftCard });
    } else if (radarItem.type === 'warranty') {
      onSelectItem({ type: 'warranty', data: radarItem.originalItem as WarrantyItem });
    }
  };

  return (
    <div className="space-y-3.5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
          <h2 className="text-lg font-black tracking-tight text-foreground">
            Expiration Radar
          </h2>
          <Badge
            variant="outline"
            className="text-2xs font-bold border-rose-500/30 text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5"
          >
            {radarItems.length} Urgent Actions
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">
          Chronological urgency countdown
        </span>
      </div>

      {/* Grid of clean radar cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {radarItems.map((item) => {
          const isSuperUrgent = item.expiresDays <= 7;
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                isSuperUrgent
                  ? 'bg-rose-500/[0.04] hover:bg-rose-500/[0.08] border-rose-500/40 hover:border-rose-500 shadow-sm'
                  : 'bg-amber-500/[0.03] hover:bg-amber-500/[0.07] border-amber-500/30 hover:border-amber-500/60 shadow-sm'
              }`}
            >
              {/* Top Row: Brand & Urgency Countdown Badge */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center p-2 shadow-xs shrink-0 ring-1 ring-border/50">
                    <BrandIcon
                      name={item.brand}
                      code={item.brand.slice(0, 2)}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-2xs text-muted-foreground font-medium">
                      {item.category}
                    </p>
                  </div>
                </div>

                <Badge
                  className={`text-2xs font-black tracking-wide uppercase px-2 py-0.5 shrink-0 ${
                    isSuperUrgent
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-amber-500 text-white shadow-xs'
                  }`}
                >
                  <Clock className="w-2.5 h-2.5 mr-1" />
                  {item.expiresDays} {item.expiresDays === 1 ? 'day' : 'days'}
                </Badge>
              </div>

              {/* Middle Row: Reward / Value Details */}
              <div className="space-y-1 mb-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-black text-foreground">
                    {item.rewardValue}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.badgeText}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug line-clamp-1">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Row: 1-Click Action Link */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs font-bold">
                <span className="text-xs text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  {item.type === 'warranty' ? 'Check Warranty & Serial' : '1-Tap Scan / Redeem'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-2xs text-muted-foreground font-mono">
                  {item.type === 'reward' ? 'Barcode Ready' : item.type === 'giftcard' ? 'Scan at Till' : 'Coverage Active'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpirationRadar;
