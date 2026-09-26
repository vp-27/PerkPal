import React, { useState, useMemo } from 'react';
import {
  Search,
  ShieldCheck,
  CreditCard,
  Utensils,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  Clock,
  Layers,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BrandIcon } from '@/components/common/BrandLogos';
import { RewardProgram, GiftCard, WarrantyItem, RewardsStore } from '@/lib/rewardsData';
import { VaultItem } from './ItemDetailSheet';

interface UnifiedVaultProps {
  onSelectItem: (item: VaultItem) => void;
}

type FilterCategory = 'All' | 'Food & Dining' | 'Retail & Tech' | 'Gift Cards' | 'Warranties';

export const UnifiedVault: React.FC<UnifiedVaultProps> = ({ onSelectItem }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programs = RewardsStore.getPrograms();
  const giftCards = RewardsStore.getGiftCards();
  const warranties = RewardsStore.getWarranties();

  // Combine items into a unified searchable array
  const allVaultItems = useMemo<VaultItem[]>(() => {
    const list: VaultItem[] = [];
    programs.forEach((p) => list.push({ type: 'reward', data: p }));
    giftCards.forEach((g) => list.push({ type: 'giftcard', data: g }));
    warranties.forEach((w) => list.push({ type: 'warranty', data: w }));
    return list;
  }, [programs, giftCards, warranties]);

  // Filter items by category and search
  const filteredItems = useMemo(() => {
    return allVaultItems.filter((item) => {
      // 1. Category Filter
      if (activeFilter === 'Food & Dining') {
        if (item.type !== 'reward' || item.data.category !== 'Dining & Coffee') return false;
      } else if (activeFilter === 'Retail & Tech') {
        if (item.type !== 'reward' || item.data.category === 'Dining & Coffee') return false;
      } else if (activeFilter === 'Gift Cards') {
        if (item.type !== 'giftcard') return false;
      } else if (activeFilter === 'Warranties') {
        if (item.type !== 'warranty') return false;
      }

      // 2. Search Query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();

      if (item.type === 'reward') {
        return (
          item.data.name.toLowerCase().includes(q) ||
          item.data.category.toLowerCase().includes(q) ||
          item.data.tier.toLowerCase().includes(q)
        );
      }
      if (item.type === 'giftcard') {
        return (
          item.data.name.toLowerCase().includes(q) ||
          item.data.brand.toLowerCase().includes(q)
        );
      }
      if (item.type === 'warranty') {
        return (
          item.data.productName.toLowerCase().includes(q) ||
          item.data.brand.toLowerCase().includes(q) ||
          item.data.category.toLowerCase().includes(q) ||
          item.data.coverageType.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allVaultItems, activeFilter, searchQuery]);

  // Count metrics for filter tabs
  const counts = useMemo(() => {
    return {
      all: allVaultItems.length,
      food: programs.filter((p) => p.category === 'Dining & Coffee').length,
      retail: programs.filter((p) => p.category !== 'Dining & Coffee').length,
      giftCards: giftCards.length,
      warranties: warranties.length,
    };
  }, [allVaultItems, programs, giftCards, warranties]);

  return (
    <div className="space-y-4">
      {/* Header, Search & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
        <div>
          <h2 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            My Vault
          </h2>
          <p className="text-xs text-muted-foreground">
            All your food perks, gift cards, and product warranties in one tap
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rewards, cards, or warranties..."
            className="pl-8 h-9 text-xs bg-background/80 border-border/80 rounded-xl"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 pb-1">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeFilter === 'All'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          All ({counts.all})
        </button>

        <button
          onClick={() => setActiveFilter('Food & Dining')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'Food & Dining'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          <Utensils className="w-3 h-3" />
          Food & Dining ({counts.food})
        </button>

        <button
          onClick={() => setActiveFilter('Retail & Tech')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'Retail & Tech'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          <ShoppingBag className="w-3 h-3" />
          Retail & Common ({counts.retail})
        </button>

        <button
          onClick={() => setActiveFilter('Gift Cards')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'Gift Cards'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          <CreditCard className="w-3 h-3" />
          Gift Cards ({counts.giftCards})
        </button>

        <button
          onClick={() => setActiveFilter('Warranties')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeFilter === 'Warranties'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          <ShieldCheck className="w-3 h-3" />
          Warranties ({counts.warranties})
        </button>
      </div>

      {/* Grid of Clean Vault Cards */}
      {filteredItems.length === 0 ? (
        <div className="py-12 rounded-3xl bg-secondary/30 border border-border/60 text-center space-y-2">
          <p className="text-sm font-semibold text-foreground">No matching items found</p>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search query or switching categories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {filteredItems.map((item, idx) => {
            if (item.type === 'reward') {
              const p = item.data;
              const isUrgent = p.expiresDays <= 7;
              return (
                <div
                  key={`vault-prog-${p.id}`}
                  onClick={() => onSelectItem(item)}
                  className="group p-4 rounded-2xl bg-card hover:bg-secondary/40 border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Brand & Category */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center p-2 shadow-xs shrink-0 ring-1 ring-border/50">
                          <BrandIcon name={p.name} code={p.logoCode} className="w-full h-full" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {p.name}
                          </h4>
                          <span className="text-2xs text-muted-foreground font-medium block">
                            {p.category}
                          </span>
                        </div>
                      </div>

                      {p.expiresDays < 60 && (
                        <Badge
                          variant="outline"
                          className={`text-2xs font-bold px-1.5 py-0.5 ${
                            isUrgent
                              ? 'border-rose-500/40 text-rose-600 dark:text-rose-400 bg-rose-500/10'
                              : 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10'
                          }`}
                        >
                          <Clock className="w-2.5 h-2.5 mr-0.5" />
                          {p.expiresIn}
                        </Badge>
                      )}
                    </div>

                    {/* Balance */}
                    <div>
                      <div className="text-lg font-black tracking-tight text-foreground">
                        {p.points.toLocaleString()}{' '}
                        <span className="text-xs font-semibold text-muted-foreground">
                          {p.pointsName}
                        </span>
                      </div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        ${p.valueUsd.toFixed(2)} value
                      </p>
                    </div>

                    {/* Active Perk Preview */}
                    {p.notes && (
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {p.notes}
                      </p>
                    )}
                  </div>

                  {/* 1-Tap Tap prompt */}
                  <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>1-Tap Barcode</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            }

            if (item.type === 'giftcard') {
              const g = item.data;
              return (
                <div
                  key={`vault-gc-${g.id}`}
                  onClick={() => onSelectItem(item)}
                  className="group p-4 rounded-2xl bg-card hover:bg-secondary/40 border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Brand & Category */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center p-2 shadow-xs shrink-0 ring-1 ring-border/50">
                          <BrandIcon name={g.brand} code={g.logoCode} className="w-full h-full" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {g.name}
                          </h4>
                          <span className="text-2xs text-muted-foreground font-medium block">
                            Gift Card
                          </span>
                        </div>
                      </div>

                      <Badge variant="secondary" className="text-2xs font-semibold px-1.5 py-0.5">
                        {g.brand}
                      </Badge>
                    </div>

                    {/* Balance */}
                    <div>
                      <div className="text-xl font-black tracking-tight text-foreground">
                        ${g.balance.toFixed(2)}
                      </div>
                      <p className="text-2xs text-muted-foreground font-mono">
                        Card: •••• {g.cardNumber.slice(-4)}
                      </p>
                    </div>

                    {/* Last Used / Ready */}
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {g.lastUsed || 'Ready for checkout scan'}
                    </p>
                  </div>

                  {/* 1-Tap Checkout prompt */}
                  <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Scan at Checkout</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            }

            if (item.type === 'warranty') {
              const w = item.data;
              const isUrgent = w.expiresDays <= 30;
              return (
                <div
                  key={`vault-war-${w.id}`}
                  onClick={() => onSelectItem(item)}
                  className="group p-4 rounded-2xl bg-card hover:bg-secondary/40 border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Brand & Category */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center p-2 shadow-xs shrink-0 ring-1 ring-border/50">
                          <BrandIcon name={w.brand} code={w.brand.slice(0, 2)} className="w-full h-full" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">
                            {w.productName}
                          </h4>
                          <span className="text-2xs text-emerald-600 dark:text-emerald-400 font-semibold block">
                            {w.coverageType}
                          </span>
                        </div>
                      </div>

                      <Badge
                        variant="outline"
                        className={`text-2xs font-bold px-1.5 py-0.5 ${
                          isUrgent
                            ? 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10'
                            : 'border-border text-muted-foreground'
                        }`}
                      >
                        {w.expiresDays}d left
                      </Badge>
                    </div>

                    {/* Coverage Details */}
                    <div>
                      <div className="text-base font-black tracking-tight text-foreground">
                        {w.expiresDays > 30 ? `${Math.round(w.expiresDays / 30)} Months Coverage` : `${w.expiresDays} Days Left`}
                      </div>
                      <p className="text-2xs text-muted-foreground font-mono">
                        Serial: {w.serialNumber || 'Registered'}
                      </p>
                    </div>

                    {/* Notes preview */}
                    {w.notes && (
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {w.notes}
                      </p>
                    )}
                  </div>

                  {/* 1-Tap Claim prompt */}
                  <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>View Coverage & Claim</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default UnifiedVault;
