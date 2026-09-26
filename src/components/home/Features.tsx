import React from 'react';
import {
  CheckCircle,
  BarChart3,
  ShieldAlert,
  ArrowRightLeft,
  Wallet,
} from 'lucide-react';

export const Features: React.FC = () => {
  const pillars = [
    {
      icon: BarChart3,
      badge: 'Unified Tracking',
      title: 'Full Portfolio Command Center',
      description:
        'Connect Delta, Chase, Amex, Marriott, Starbucks, and 140+ loyalty programs into one single board. Track real dollar valuations instead of confusing raw points.',
      bullets: [
        'Real-time automated account sync every 4 hours',
        'Dollar valuation per point (e.g. 1.85¢/pt) benchmarks',
        'Historic net worth progression & velocity trends',
      ],
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500',
    },
    {
      icon: ShieldAlert,
      badge: 'Zero Waste',
      title: 'PerkPal Expiration Shield',
      description:
        'Over $2.8B in loyalty rewards expire unused every year. PerkPal alerts you 30, 14, and 7 days before any expiration with recommended 1-click redemptions.',
      bullets: [
        'Automated countdown radar on points and gift balances',
        'Smart redemption suggestions for expiring coffee & miles',
        'Calendar sync and push notifications',
      ],
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500',
    },
    {
      icon: ArrowRightLeft,
      badge: 'Value Multiplier',
      title: 'Transfer Bonus Matrix & Optimizer',
      description:
        'Banks frequently offer 20% to 50% transfer bonuses to airlines and hotels. PerkPal automatically detects active promos and shows you the optimal transfer path.',
      bullets: [
        'Live transfer bonus alerts (e.g. Amex to Virgin +30%)',
        'Interactive point conversion calculator with fee estimates',
        'Award flight sweet spot search recommendations',
      ],
      color: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-500',
    },
    {
      icon: Wallet,
      badge: 'Secure Vault',
      title: 'Encrypted Digital Gift Card Barcode Vault',
      description:
        'Store physical and digital gift cards in one secure vault. Generate instant scannable barcodes at the register, toggle PINs, and track your remaining balance.',
      bullets: [
        'Instant high-contrast barcodes and QR codes for retail checkout',
        '256-bit AES encryption with biometric/PIN unlock',
        'Real-time simulated spend logging and balance deduction',
      ],
      color: 'from-emerald-600/20 to-teal-600/20',
      iconColor: 'text-emerald-500',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/15 dark:bg-card/15 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Everything You Need to <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Maximize Every Reward</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal">
            PerkPal replaces scattered logins, expired gift cards, and confusing spreadsheets with
            an automated, intelligent rewards powerhouse.
          </p>
        </div>

        {/* Open, Borderless Feature Grid (Zero Chips, Zero Container Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <IconComponent className="h-5 w-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
