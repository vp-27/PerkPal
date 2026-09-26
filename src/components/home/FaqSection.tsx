import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: 'Is it safe to connect my loyalty accounts and credit cards to PerkPal?',
      a: 'Yes, absolutely. PerkPal uses read-only, bank-grade 256-bit AES encryption through regulated financial aggregators (similar to Plaid and AwardWallet). We never receive or store your raw account passwords, and read-only access prevents any unauthorized transactions, point transfers, or balance movements without your direct biometric consent.',
    },
    {
      q: 'How does PerkPal calculate the cash valuation of each point or mile?',
      a: 'Unlike apps that blindly assume 1 point = 1 cent, PerkPal monitors actual award travel inventory, airline award chart brackets, dynamic cash rates, and hotel seasonal tiers. For example, Chase Ultimate Rewards are valued at 1.85¢/pt because of high-yield Hyatt and airline partners, whereas Delta SkyMiles is valued at 1.35¢/pt based on domestic and flash sale award redemption averages.',
    },
    {
      q: 'How does the PerkPal Expiration Shield work?',
      a: 'Whenever you link an account or add a gift card, PerkPal indexes the program’s expiration policy (e.g. 18 months of inactivity for United, 6 months for Starbucks Stars, or 12 months for promotional gift certificates). You receive proactive notifications at 30, 14, and 7-day intervals, along with recommended low-cost actions to keep your account active or optimal 1-click redemptions.',
    },
    {
      q: 'What is the Transfer Bonus Matrix and why is it important?',
      a: 'Credit card rewards programs (Amex, Chase, Capital One, Citi) frequently run limited-time transfer promotions where transferring points to a partner airline yields an extra 20% to 50% in bonus miles. PerkPal tracks every active promo in real-time so you never transfer points right before a promo or miss out on a +30% boost to book international business class.',
    },
    {
      q: 'Can I use PerkPal on mobile devices at store checkouts?',
      a: 'Yes! PerkPal is fully responsive with high-contrast barcode and QR code rendering for all saved gift cards and loyalty memberships (Target, Starbucks, Sephora, etc.). Simply open your PerkPal wallet on your smartphone, scan the screen at checkout, and tap to log the updated balance.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Have questions about points valuation, security, or transfer optimization?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full divide-y divide-border/60 border-t border-b border-border/60">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-none py-1"
              >
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:no-underline hover:text-emerald-600 dark:hover:text-emerald-400 py-5 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 pr-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
