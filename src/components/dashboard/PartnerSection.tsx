import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BrandIcon } from '@/components/common/BrandLogos';

interface PartnerDeal {
  name: string;
  category: string;
  badge: string;
  offer: string;
  code: string;
  logoCode: string;
  bgClass: string;
}

const PARTNER_DEALS: PartnerDeal[] = [
  {
    name: 'Delta Air Lines',
    category: 'Travel',
    badge: 'Award Flash Sale',
    offer: 'Save up to 15,000 miles on transcon Comfort+ flights booked before Oct 15.',
    code: 'DL-FLASH26',
    logoCode: 'DL',
    bgClass: 'bg-blue-600',
  },
  {
    name: 'Marriott Bonvoy',
    category: 'Hotels',
    badge: '50% Transfer Bonus',
    offer: 'Receive 50% bonus Marriott Bonvoy points when transferring from Chase Ultimate Rewards.',
    code: 'MB-BONUS50',
    logoCode: 'MB',
    bgClass: 'bg-amber-800',
  },
  {
    name: 'Starbucks Rewards',
    category: 'Dining',
    badge: 'Double Star Tuesdays',
    offer: 'Earn 4 Stars per $1 spent on all handcrafted iced espressos and bakery items.',
    code: 'SB-2XSTARS',
    logoCode: 'SB',
    bgClass: 'bg-emerald-700',
  },
  {
    name: 'Target Circle 360',
    category: 'Retail',
    badge: '20% Back in Circle Cash',
    offer: 'Get 20% bonus earnings back on all home tech and electronics in your wallet.',
    code: 'TG-CIRCLE20',
    logoCode: 'TG',
    bgClass: 'bg-red-600',
  },
  {
    name: 'Virgin Atlantic',
    category: 'Travel',
    badge: '+30% Amex Boost',
    offer: 'Transfer Amex MR points and get 1,300 Flying Club miles per 1,000 points.',
    code: 'VS-AMEX30',
    logoCode: 'VS',
    bgClass: 'bg-rose-700',
  },
  {
    name: 'Uber One',
    category: 'Rideshare',
    badge: '10% Cash Back',
    offer: 'Earn 10% back in Uber Cash on reserve rides to all major domestic airports.',
    code: 'UB-RESERVE10',
    logoCode: 'UB',
    bgClass: 'bg-slate-800',
  },
];

export const PartnerSection: React.FC = () => {
  const { toast } = useToast();

  const handleActivateDeal = (deal: PartnerDeal) => {
    toast({
      title: 'Deal Activated!',
      description: `Promo code ${deal.code} for ${deal.name} applied to your PerkPal portfolio.`,
    });
  };

  return (
    <div className="space-y-4 pt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500 fill-amber-500" />
            Curated Partner Perks & Active Deals
          </h2>
          <p className="text-xs text-muted-foreground">
            Exclusive loyalty multipliers and transfer promotions negotiated for PerkPal members.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PARTNER_DEALS.map((deal, idx) => (
          <Card
            key={idx}
            className="glass-card border border-border/80 hover:border-primary/50 transition-all duration-200 flex flex-col justify-between"
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center p-2 shadow-xs shrink-0 ring-1 ring-border/50"
                  >
                    <BrandIcon name={deal.name} code={deal.logoCode} className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-bold text-foreground">{deal.name}</CardTitle>
                    <span className="text-2xs text-muted-foreground">{deal.category}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-2xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  {deal.badge}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-4 pt-2 space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">{deal.offer}</p>

              <div className="pt-2 border-t border-border/50 flex justify-between items-center text-xs">
                <span className="font-mono text-2xs text-muted-foreground">{deal.code}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleActivateDeal(deal)}
                  className="h-7 px-2.5 text-xs font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Activate Perk
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
