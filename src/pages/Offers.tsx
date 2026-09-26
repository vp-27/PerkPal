import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PartnerSection from '@/components/dashboard/PartnerSection';
import PerkPalAdvisor from '@/components/common/PerkPalAdvisor';
import {
  Sparkles,
  ArrowRightLeft,
  Zap,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Percent,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { RewardsStore, TransferBonusOffer } from '@/lib/rewardsData';
import { useToast } from '@/hooks/use-toast';
import { BrandIcon } from '@/components/common/BrandLogos';

interface TransferRoute {
  from: string;
  to: string;
  bonus: number; // e.g. 30 for 30%
  centsPerPoint: number;
  sweetSpot: string;
}

const TRANSFER_ROUTES: TransferRoute[] = [
  {
    from: 'American Express MR',
    to: 'Virgin Atlantic Flying Club',
    bonus: 30,
    centsPerPoint: 1.8,
    sweetSpot: 'Delta domestic flights from 7,500 miles or Europe Upper Class',
  },
  {
    from: 'Chase Ultimate Rewards',
    to: 'Marriott Bonvoy',
    bonus: 50,
    centsPerPoint: 0.9,
    sweetSpot: '5th-night free resort redemptions in Hawaii or Caribbean',
  },
  {
    from: 'Capital One Miles',
    to: 'Air France / KLM Flying Blue',
    bonus: 20,
    centsPerPoint: 1.9,
    sweetSpot: 'One-way promo awards from US to Paris for 15,000 miles',
  },
  {
    from: 'Chase Ultimate Rewards',
    to: 'World of Hyatt',
    bonus: 0,
    centsPerPoint: 2.1,
    sweetSpot: 'Category 1 to 7 peak Hyatt luxury properties worldwide',
  },
  {
    from: 'Citi ThankYou Points',
    to: 'Wyndham Rewards',
    bonus: 20,
    centsPerPoint: 1.2,
    sweetSpot: 'Vacasa 1-bedroom luxury vacation cabin rentals',
  },
];

export const Offers: React.FC = () => {
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);
  const [transferAmount, setTransferAmount] = useState('50000');
  const [isSimulating, setIsSimulating] = useState(false);
  const { toast } = useToast();

  const bonuses = RewardsStore.getBonuses();
  const currentRoute = TRANSFER_ROUTES[selectedRouteIdx];

  const pointsInput = parseInt(transferAmount, 10) || 0;
  const bonusMultiplier = 1 + currentRoute.bonus / 100;
  const finalReceivedPoints = Math.round(pointsInput * bonusMultiplier);
  const bonusPointsGained = finalReceivedPoints - pointsInput;
  const estimatedValue = +(finalReceivedPoints * (currentRoute.centsPerPoint / 100)).toFixed(2);

  const handleSimulateTransfer = () => {
    if (pointsInput <= 0) return;

    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      // Record transaction
      RewardsStore.addTransaction({
        date: 'Just now',
        program: `${currentRoute.from} → ${currentRoute.to}`,
        description: `Transferred ${pointsInput.toLocaleString()} pts (+${bonusPointsGained.toLocaleString()} bonus)`,
        type: 'transfer',
        amount: finalReceivedPoints,
        unit: 'Miles/Pts',
        dollarValue: estimatedValue,
      });

      toast({
        title: 'Transfer Simulator Successful!',
        description: `Simulated transfer of ${pointsInput.toLocaleString()} points to ${currentRoute.to} yielding ${finalReceivedPoints.toLocaleString()} points ($${estimatedValue.toFixed(2)} value).`,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col page-transition bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1 fill-amber-500" />
            Live Transfer Radar & Multiplier Engine
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Transfer Bonus Optimizer
          </h1>
          <p className="text-base text-muted-foreground">
            Never transfer points without a multiplier. Calculate bonus yields, compare award sweet
            spots, and unlock maximum airline and hotel redemption value.
          </p>
        </div>

        {/* Interactive Transfer Calculator */}
        <Card className="glass-card max-w-4xl mx-auto rounded-3xl border border-border shadow-2xl p-6 sm:p-8">
          <CardHeader className="p-0 pb-6 border-b border-border/60">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-primary" />
              Interactive Transfer Conversion Simulator
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 pt-6 space-y-6">
            {/* Route Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                Select Active Transfer Promo Partner
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {TRANSFER_ROUTES.map((route, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRouteIdx(idx)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedRouteIdx === idx
                        ? 'border-primary bg-primary/10 shadow-sm ring-1 ring-primary'
                        : 'border-border/60 hover:bg-secondary/40 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-1.5 truncate">
                        <BrandIcon name={route.from} className="w-4 h-4 shrink-0 text-primary" />
                        <span className="text-xs font-bold text-foreground truncate">{route.from}</span>
                      </div>
                      {route.bonus > 0 && (
                        <Badge className="bg-emerald-500 text-white text-2xs font-bold shrink-0 ml-1">
                          +{route.bonus}%
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground truncate">
                      <span>→</span>
                      <BrandIcon name={route.to} className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{route.to}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                  Points to Transfer
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    step="1000"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="text-lg font-bold h-11"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">
                    points
                  </span>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                  Quick Amount Presets
                </label>
                <div className="flex gap-2">
                  {['25000', '50000', '75000', '100000'].map((amt) => (
                    <Button
                      key={amt}
                      variant="outline"
                      size="sm"
                      onClick={() => setTransferAmount(amt)}
                      className="text-xs font-semibold h-11 flex-1"
                    >
                      {parseInt(amt, 10) / 1000}k
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Calculation Result */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-indigo-500/10 border-2 border-primary/40 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">
                    You Send
                  </span>
                  <div className="text-2xl font-black text-foreground">
                    {pointsInput.toLocaleString()} pts
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center sm:justify-start">
                    <BrandIcon name={currentRoute.from} className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{currentRoute.from}</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">
                    Promotional Bonus
                  </span>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    +{bonusPointsGained.toLocaleString()} pts
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    {currentRoute.bonus > 0 ? `${currentRoute.bonus}% active multiplier` : 'Standard 1:1'}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">
                    You Receive
                  </span>
                  <div className="text-2xl font-black text-primary">
                    {finalReceivedPoints.toLocaleString()} miles
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center sm:justify-start">
                    <BrandIcon name={currentRoute.to} className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{currentRoute.to}</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
                <div className="space-y-0.5">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Sweet Spot Target: {currentRoute.sweetSpot}
                  </p>
                  <p className="text-muted-foreground">
                    Estimated redemption cash value:{' '}
                    <strong className="text-foreground">${estimatedValue.toLocaleString()} USD</strong>
                  </p>
                </div>

                <Button
                  onClick={handleSimulateTransfer}
                  disabled={isSimulating || pointsInput <= 0}
                  className="font-bold text-xs h-9 shadow-md shrink-0 w-full sm:w-auto"
                >
                  {isSimulating ? 'Simulating Handshake...' : 'Simulate Transfer'}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Transfer Bonus Matrix List */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              Active Partner Transfer Promotions (Q3/Q4 2026)
            </h2>
            <Badge variant="outline" className="text-xs font-bold text-emerald-500 border-emerald-500/30">
              Verified Daily
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonuses.map((bonus) => (
              <Card key={bonus.id} className="glass-card border border-border/80 hover:shadow-lg transition-all">
                <CardContent className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-emerald-500 text-white font-bold text-xs mb-2">
                        {bonus.tag}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-background border border-border/80 flex items-center justify-center p-1 shrink-0 shadow-2xs">
                          <BrandIcon name={bonus.fromProgram} className="w-5 h-5" />
                        </div>
                        <span className="text-muted-foreground text-xs font-bold">→</span>
                        <div className="w-8 h-8 rounded-lg bg-background border border-border/80 flex items-center justify-center p-1 shrink-0 shadow-2xs">
                          <BrandIcon name={bonus.toProgram} className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-sm sm:text-base text-foreground">
                          {bonus.fromProgram} → {bonus.toProgram}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3 text-amber-500" /> Ends {bonus.endsDate}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{bonus.highlight}</p>

                  <div className="pt-2 border-t border-border/60 flex justify-between items-center text-xs">
                    <span className="font-mono text-foreground font-semibold">
                      Effective Rate: {bonus.effectiveRatio}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setTransferAmount('50000');
                        toast({
                          title: 'Loaded in Simulator',
                          description: `Set up transfer for ${bonus.fromProgram} to ${bonus.toProgram}.`,
                        });
                      }}
                      className="text-xs font-semibold text-primary hover:underline h-7 px-2"
                    >
                      Test in Calculator →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Curated Partner Perks & Active Deals */}
        <section>
          <PartnerSection />
        </section>
      </main>

      <Footer />
      <PerkPalAdvisor />
    </div>
  );
};

export default Offers;
