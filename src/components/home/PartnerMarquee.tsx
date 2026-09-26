import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { BrandIcon } from '@/components/common/BrandLogos';
import LogoLoop, { LogoItem } from '@/components/ui/LogoLoop';

const ROW_1_BRANDS: LogoItem[] = [
  {
    title: 'Delta SkyMiles',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="DL" className="w-6 h-6 text-[#E01933] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Delta SkyMiles
        </span>
      </div>
    ),
  },
  {
    title: 'Chase Ultimate Rewards',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="CH" className="w-6 h-6 text-[#117ACA] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Chase Ultimate Rewards
        </span>
      </div>
    ),
  },
  {
    title: 'American Express',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="AX" className="w-6 h-6 text-[#006FCF] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          American Express
        </span>
      </div>
    ),
  },
  {
    title: 'United MileagePlus',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="UA" className="w-6 h-6 text-[#005DAA] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          United MileagePlus
        </span>
      </div>
    ),
  },
  {
    title: 'Starbucks Rewards',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="SB" className="w-6 h-6 text-[#006241] dark:text-[#10B981] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Starbucks Rewards
        </span>
      </div>
    ),
  },
  {
    title: 'Apple Pay & Cash',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="AP" className="w-6 h-6 text-foreground shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Apple Pay & Cash
        </span>
      </div>
    ),
  },
];

const ROW_2_BRANDS: LogoItem[] = [
  {
    title: 'World of Hyatt',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="HY" className="w-6 h-6 text-[#8B5CF6] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          World of Hyatt
        </span>
      </div>
    ),
  },
  {
    title: 'Marriott Bonvoy',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="MB" className="w-6 h-6 text-[#E11D48] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Marriott Bonvoy
        </span>
      </div>
    ),
  },
  {
    title: 'Capital One Miles',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="C1" className="w-6 h-6 text-[#D03027] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Capital One Miles
        </span>
      </div>
    ),
  },
  {
    title: 'Virgin Atlantic',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="VS" className="w-6 h-6 text-[#E10A0A] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Virgin Atlantic
        </span>
      </div>
    ),
  },
  {
    title: 'Air France / KLM',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="AF" className="w-6 h-6 text-[#2563EB] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Air France / KLM
        </span>
      </div>
    ),
  },
  {
    title: 'Target Circle',
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1 group hover:opacity-100 opacity-90 transition-opacity">
        <BrandIcon code="TG" className="w-6 h-6 text-[#DC2626] shrink-0" />
        <span className="font-semibold text-sm tracking-tight text-foreground whitespace-nowrap">
          Target Circle
        </span>
      </div>
    ),
  },
];

export const PartnerMarquee: React.FC = () => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestProgramName, setRequestProgramName] = useState('');
  const { toast } = useToast();

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestProgramName.trim()) return;

    toast({
      title: 'Program Requested!',
      description: `Thanks! We added "${requestProgramName}" to our high-priority integration queue.`,
    });
    setRequestProgramName('');
    setIsRequestOpen(false);
  };

  return (
    <section id="partners" className="py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle ambient illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - No repetitive mini chip */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Synced With 140+ Premier Networks
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal">
            Real-time balance synchronization, automatic expiration tracking, and sweet spot redemption indexing.
          </p>
        </div>

        {/* Dual-Direction ReactBits LogoLoop Marquee */}
        <div className="relative max-w-6xl mx-auto py-2 space-y-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Row 1: Left */}
          <LogoLoop
            logos={ROW_1_BRANDS}
            speed={35}
            direction="left"
            gap={36}
            logoHeight={32}
            pauseOnHover={true}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Premier loyalty partners row 1"
          />

          {/* Row 2: Right */}
          <LogoLoop
            logos={ROW_2_BRANDS}
            speed={35}
            direction="right"
            gap={36}
            logoHeight={32}
            pauseOnHover={true}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Premier loyalty partners row 2"
          />
        </div>

        {/* Trust Badges & Action Bar */}
        <div className="mt-12 pt-8 border-t border-border/60 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <span className="flex items-center gap-1.5 text-foreground">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Read-Only 256-Bit AES
            </span>
            <span className="flex items-center gap-1.5 text-foreground">
              <RefreshCw className="w-4 h-4 text-teal-500" /> Automated 4-Hour Sync
            </span>
            <span className="flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 140+ Portals
            </span>
          </div>

          <Button
            variant="glass"
            size="sm"
            onClick={() => setIsRequestOpen(true)}
            className="text-xs font-semibold gap-1.5 h-8 px-4"
          >
            <Plus className="w-3.5 h-3.5 text-primary" />
            Request a Program
          </Button>
        </div>
      </div>

      {/* Program Request Dialog */}
      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="sm:max-w-md glass-card border border-border/80">
          <DialogHeader>
            <DialogTitle>Request a Loyalty Program</DialogTitle>
            <DialogDescription>
              Our engineering team regularly adds new airline, hotel, and banking portals.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRequestSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-semibold mb-1 block">Program or Bank Name</label>
              <Input
                placeholder="e.g. British Airways Executive Club, Best Buy, etc."
                value={requestProgramName}
                onChange={(e) => setRequestProgramName(e.target.value)}
                required
                className="bg-background/80"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsRequestOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="liquid">
                Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PartnerMarquee;
