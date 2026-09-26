import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { DEMO_PERSONAS } from '@/lib/rewardsData';
import { useToast } from '@/hooks/use-toast';

export const CtaBanner: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLaunch = () => {
    const persona = DEMO_PERSONAS.alex;
    localStorage.setItem('perkpal_user', JSON.stringify(persona));
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: 'Demo Session Started!',
      description: `Loaded ${persona.name}'s portfolio with $${persona.netWorthUsd.toLocaleString()} in points.`,
    });
    navigate('/dashboard');
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-emerald-950 via-zinc-900 to-emerald-950 border border-emerald-500/30 text-white shadow-2xl">
          {/* Ambient lighting inside banner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Take Control of Your Rewards Portfolio Today
              </h2>

              <p className="text-emerald-100/90 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                Join thousands of travelers, shoppers, and rewards optimizers. Test drive the complete
                interactive command center right now with preloaded multi-program data.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start text-xs font-medium text-emerald-200/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> 1-Click Instant Demo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> 140+ Supported Integrations
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
              <div className="relative shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src="/perkpal-icon.png"
                  alt="PerkPal Mascot"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
                />
              </div>

              <Button
                variant="liquidGlow"
                size="lg"
                onClick={handleLaunch}
                className="w-full sm:w-auto font-black text-sm px-8 py-6 shadow-xl"
              >
                Launch Live Demo Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
