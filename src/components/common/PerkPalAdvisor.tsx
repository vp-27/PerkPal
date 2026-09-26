import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronRight, BellRing, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Tip {
  id: string;
  badge: string;
  badgeVariant: 'default' | 'destructive' | 'secondary' | 'outline';
  title: string;
  message: string;
  actionText: string;
  actionLink: string;
}

const PERKPAL_TIPS: Tip[] = [
  {
    id: 'tip-1',
    badge: 'Urgent Expiration',
    badgeVariant: 'destructive',
    title: '420 Starbucks Stars expiring soon!',
    message: 'Your stars expire in 18 days. Redeem them now for 2 handcrafted specialty drinks ($18.90 value) before they vanish!',
    actionText: 'View in Dashboard',
    actionLink: '/dashboard',
  },
  {
    id: 'tip-2',
    badge: 'Transfer Promo',
    badgeVariant: 'default',
    title: '30% Transfer Bonus on Amex MR',
    message: 'Transfer Amex points to Virgin Atlantic for +30% bonus miles. You can book Delta domestic flights from just 7,500 miles!',
    actionText: 'Open Optimizer',
    actionLink: '/offers',
  },
  {
    id: 'tip-3',
    badge: 'Smart Value Tip',
    badgeVariant: 'secondary',
    title: 'Maximize Your Chase Points',
    message: 'Transferring Chase UR points to World of Hyatt unlocks 2.1¢/pt value instead of standard 1.0¢ cash back. Save over $700 on your next hotel stay!',
    actionText: 'See Calculation',
    actionLink: '/#calculator',
  },
];

export const PerkPalAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [hasUnreadAlert, setHasUnreadAlert] = useState(true);

  // Rotate tips periodically when open
  const currentTip = PERKPAL_TIPS[currentTipIndex];

  const handleNextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % PERKPAL_TIPS.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Popover / Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl p-4 shadow-2xl border border-primary/20 bg-background/95 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center p-1 shadow-sm">
                <img
                  src="/perkpal-icon.png"
                  alt="PerkPal Mascot"
                  className="w-8 h-8 object-contain"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-background" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm tracking-tight">PerkPal Copilot</h4>
                  <Badge variant="outline" className="text-2xs px-1.5 py-0 bg-primary/10 text-primary border-primary/30">
                    AI Advisor
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Your loyal rewards guardian</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tip Content */}
          <div className="py-3">
            <div className="flex items-center justify-between mb-1.5">
              <Badge
                variant={currentTip.badgeVariant}
                className="text-2xs font-semibold"
              >
                {currentTip.badge}
              </Badge>
              <span className="text-2xs text-muted-foreground">
                Tip {currentTipIndex + 1} of {PERKPAL_TIPS.length}
              </span>
            </div>
            <h5 className="font-semibold text-sm mb-1">{currentTip.title}</h5>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {currentTip.message}
            </p>

            <div className="flex items-center justify-between pt-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextTip}
                className="text-xs text-muted-foreground hover:text-foreground h-8 px-2"
              >
                Next Tip <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Link to={currentTip.actionLink} onClick={() => setIsOpen(false)}>
                <Button size="sm" className="text-xs h-8 shadow-sm">
                  {currentTip.actionText} <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-2xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-emerald-500" /> Bank-grade encryption
            </span>
            <span className="font-medium text-primary">PerkPal Shield</span>
          </div>
        </div>
      )}

      {/* Floating Mascot Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasUnreadAlert(false);
        }}
        className="group relative flex items-center gap-2 p-1.5 pr-4 rounded-full bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/30 shadow-xl hover:border-primary hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Open PerkPal Rewards Copilot"
      >
        <div className="relative w-11 h-11 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center p-1">
          <img
            src="/perkpal-icon.png"
            alt="PerkPal Mascot"
            className="w-8 h-8 object-contain group-hover:rotate-6 transition-transform duration-300"
          />
          {hasUnreadAlert && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 text-2xs font-bold text-white items-center justify-center">
                !
              </span>
            </span>
          )}
        </div>
        <div className="text-left hidden sm:block">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold tracking-tight text-foreground">PerkPal</span>
            <Sparkles className="h-3 w-3 text-amber-500 fill-amber-500" />
          </div>
          <span className="text-2xs text-muted-foreground group-hover:text-primary transition-colors">
            {isOpen ? 'Close Copilot' : 'Rewards Tips (3)'}
          </span>
        </div>
      </button>
    </div>
  );
};

export default PerkPalAdvisor;
