import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ExternalLink,
  Lock,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RewardsStore } from '@/lib/rewardsData';
import { useToast } from '@/hooks/use-toast';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'help' | null>(null);
  const { toast } = useToast();

  const handleResetData = () => {
    RewardsStore.resetAll();
    toast({
      title: 'Demo Data Reset',
      description: 'Default loyalty portfolio and transactions have been restored.',
    });
  };

  return (
    <>
      <footer className="border-t border-border/60 bg-secondary/30 dark:bg-card/20 backdrop-blur-md pt-16 pb-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Brand & Mascot Column */}
            <div className="md:col-span-2 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div className="shrink-0">
                  <img
                    src="/perkpal-icon.png"
                    alt="PerkPal icon"
                    className="w-11 h-11 object-contain drop-shadow-sm"
                  />
                </div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">
                  PerkPal
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                The unified rewards & loyalty hub. Track all your airline miles, hotel points,
                credit card rewards, and gift cards with <strong>PerkPal</strong>, your intelligent
                rewards guardian.
              </p>

              {/* Security & System Status */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 py-1"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  All Systems Operational
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30 flex items-center gap-1.5 py-1"
                >
                  <Lock className="h-3 w-3" />
                  256-Bit SSL Encrypted
                </Badge>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Platform
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Rewards Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounts"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Linked Accounts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Transfer Radar
                    <Sparkles className="h-3 w-3 text-amber-500" />
                  </Link>
                </li>
                <li>
                  <a
                    href="#calculator"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Valuation Calculator
                  </a>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Settings & Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Loyalty Ecosystem */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Ecosystem
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#partners"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Supported Programs (140+)
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Expiration Shield
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('help')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Help Center & Guides
                  </button>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Rewards FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Demo Utilities */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Demo & Trust
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Privacy Commitment
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('terms')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetData}
                    className="text-xs flex items-center gap-1.5 h-8 border-border"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset Demo State
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} PerkPal Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>Read-only sync via secure financial APIs</span>
              <span>•</span>
              <span className="text-primary font-medium">SOC 2 Type II Audited</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals to eliminate 404s/dead links */}
      <Dialog open={activeModal === 'privacy'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              PerkPal Privacy Commitment
            </DialogTitle>
            <DialogDescription>
              How we safeguard your loyalty points and credentials.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground py-2 max-h-80 overflow-y-auto">
            <p>
              <strong>1. Read-Only Account Access:</strong> PerkPal uses bank-level read-only tokens
              to synchronize point balances, tier qualifications, and expiration dates. PerkPal can
              never initiate unapproved transfers, purchases, or withdrawals.
            </p>
            <p>
              <strong>2. 256-Bit Hardware Encryption:</strong> All account tokens and encrypted gift
              card vaults are secured using AES-256 GCM encryption at rest and TLS 1.3 in transit.
            </p>
            <p>
              <strong>3. Zero Data Brokering:</strong> We never sell, rent, or trade your purchase
              history or loyalty information to advertisers or third parties.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'terms'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Service agreement for the PerkPal platform & copilot.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground py-2 max-h-80 overflow-y-auto">
            <p>
              <strong>Valuation Estimates:</strong> Point valuations (e.g. 1.85¢/pt) are calculated
              based on current market redemption averages and dynamic award seat availability.
              Redemption values may vary dynamically by carrier and hotel program rules.
            </p>
            <p>
              <strong>Partner Trademarks:</strong> Delta, Chase, American Express, Marriott, Starbucks,
              and other brand names are registered trademarks of their respective owners. PerkPal is
              an independent portfolio tracking service.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'help'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>PerkPal Support & Help Center</DialogTitle>
            <DialogDescription>
              Quick answers from the PerkPal concierge team.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground py-2 max-h-80 overflow-y-auto">
            <div className="p-3 rounded-lg bg-accent/40 border border-border/50">
              <h4 className="font-semibold text-foreground text-xs mb-1">How do I connect my loyalty account?</h4>
              <p className="text-xs">Go to Linked Accounts, click &apos;Connect Program&apos;, and authenticate via the airline or bank&apos;s OAuth portal.</p>
            </div>
            <div className="p-3 rounded-lg bg-accent/40 border border-border/50">
              <h4 className="font-semibold text-foreground text-xs mb-1">How often do points refresh?</h4>
              <p className="text-xs">Balances automatically update every 4 to 6 hours or instantly whenever you tap &apos;Sync All&apos;.</p>
            </div>
            <div className="p-3 rounded-lg bg-accent/40 border border-border/50">
              <h4 className="font-semibold text-foreground text-xs mb-1">How does the Expiration Shield work?</h4>
              <p className="text-xs">PerkPal notifies you 30 days, 14 days, and 7 days prior to any point or gift card expiration, along with recommended 1-click redemptions.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
