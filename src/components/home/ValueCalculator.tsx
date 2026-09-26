import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandIcon } from '@/components/common/BrandLogos';

interface ProgramCalc {
  id: string;
  name: string;
  baseValuationCents: number; // cash/portal rate (e.g. 1.0)
  maxValuationCents: number; // partner transfer rate (e.g. 1.85)
  bestPartner: string;
  exampleRedemption: string;
}

const CALCULATOR_PROGRAMS: ProgramCalc[] = [
  {
    id: 'starbucks',
    name: 'Starbucks Stars',
    baseValuationCents: 1.0,
    maxValuationCents: 4.5,
    bestPartner: 'Handcrafted Espresso & Bakery',
    exampleRedemption: '150 stars = $6.75 handcrafted latte (4.5¢/star value)',
  },
  {
    id: 'chase',
    name: 'Chase Sapphire',
    baseValuationCents: 1.0,
    maxValuationCents: 1.85,
    bestPartner: 'Hyatt & Dining Portal',
    exampleRedemption: 'Redeem for 1.85¢/pt on luxury hotel stays & fine dining',
  },
  {
    id: 'target',
    name: 'Target Circle',
    baseValuationCents: 1.0,
    maxValuationCents: 2.2,
    bestPartner: 'In-Store Coupons & 360 Bonus',
    exampleRedemption: 'Stack 1% Circle earnings with $10 birthday perk',
  },
  {
    id: 'delta',
    name: 'Delta SkyMiles',
    baseValuationCents: 1.1,
    maxValuationCents: 1.45,
    bestPartner: 'Delta Award Flash Deals',
    exampleRedemption: 'Roundtrip domestic flights or transcon Comfort+ upgrades',
  },
  {
    id: 'marriott',
    name: 'Marriott Bonvoy',
    baseValuationCents: 0.65,
    maxValuationCents: 0.95,
    bestPartner: '5th Night Free Stays',
    exampleRedemption: '5 consecutive nights at beach resorts with 5th night free',
  },
];

export const ValueCalculator: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState('chase');
  const [pointsCount, setPointsCount] = useState(65000);

  const currentProgram =
    CALCULATOR_PROGRAMS.find((p) => p.id === selectedProgramId) || CALCULATOR_PROGRAMS[0];

  const standardCashValue = +(pointsCount * (currentProgram.baseValuationCents / 100)).toFixed(2);
  const perkpalOptimizedValue = +(
    pointsCount *
    (currentProgram.maxValuationCents / 100)
  ).toFixed(2);
  const extraValueUnlocked = +(perkpalOptimizedValue - standardCashValue).toFixed(2);
  const boostPercent = Math.round(
    ((perkpalOptimizedValue - standardCashValue) / standardCashValue) * 100
  );

  return (
    <section id="calculator" className="py-20 lg:py-28 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            How Much Are Your Points <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Really Worth?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal">
            Most cardholders redeem points for basic cash back and lose 40% to 60% of their actual
            value. See what PerkPal unlocks for your portfolio.
          </p>
        </div>

        {/* Borderless Calculator Layout */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Program Selectors */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Select Loyalty Program
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {CALCULATOR_PROGRAMS.map((prog) => (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between ${
                    selectedProgramId === prog.id
                      ? 'bg-emerald-500/15 dark:bg-emerald-500/25 text-foreground font-bold shadow-sm'
                      : 'bg-secondary/40 hover:bg-secondary/70 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <BrandIcon name={prog.name} className="w-4 h-4 shrink-0 text-foreground" />
                    <p className="text-xs truncate font-semibold">{prog.name}</p>
                  </div>
                  <p className="text-2xs text-muted-foreground">
                    Up to {prog.maxValuationCents}¢/pt
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-baseline">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Points / Miles Balance
              </label>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  {pointsCount.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground font-medium">pts</span>
              </div>
            </div>

            <Slider
              value={[pointsCount]}
              onValueChange={(vals) => setPointsCount(vals[0])}
              min={10000}
              max={250000}
              step={5000}
              className="py-4"
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>10,000 pts</span>
              <span>100,000 pts</span>
              <span>250,000 pts</span>
            </div>
          </div>

          {/* Value Comparison Results - Open & Borderless */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border/40">
            {/* Standard Cash Redemption */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                Standard Statement Credit
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-muted-foreground line-through decoration-destructive/50">
                ${standardCashValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-muted-foreground">
                At basic {currentProgram.baseValuationCents}¢/pt cash conversion rate
              </p>
              <div className="pt-2 text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-medium">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Leaves up to 60% of potential reward value unredeemed
              </div>
            </div>

            {/* PerkPal Optimized Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4" />
                  PerkPal Optimized Valuation
                </span>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  +{boostPercent}% Boost
                </span>
              </div>
              <div className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
                ${perkpalOptimizedValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                +${extraValueUnlocked.toLocaleString('en-US', { minimumFractionDigits: 2 })} unlocked through smart transfer sweet spots
              </p>
              <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {currentProgram.exampleRedemption}
                </p>
                <p className="text-2xs text-muted-foreground pl-5.5">
                  Recommended target: {currentProgram.bestPartner}
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/perkpal-icon.png"
                alt="PerkPal"
                className="w-10 h-10 object-contain shrink-0"
              />
              <p className="text-xs text-muted-foreground max-w-md">
                <strong className="text-foreground">PerkPal Insight:</strong> Transferring rewards to partner airlines and hotels unlocks peak travel value compared to basic cash-back options.
              </p>
            </div>

            <Link to="/dashboard" className="w-full sm:w-auto shrink-0">
              <Button variant="liquid" size="lg" className="w-full sm:w-auto font-bold text-xs h-11 px-6 shadow-sm">
                Try Valuation in Live Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCalculator;
