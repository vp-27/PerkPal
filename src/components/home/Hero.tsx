import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  Laptop,
  Smartphone,
  CreditCard,
  QrCode,
  Flame,
  CheckCircle2,
  Signal,
  Wifi,
  Plus,
  Play,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DEMO_PERSONAS } from '@/lib/rewardsData';
import { useToast } from '@/hooks/use-toast';
import { DeltaLogo, StarbucksLogo, ChaseLogo, BrandIcon } from '@/components/common/BrandLogos';

export const Hero: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'mac' | 'phone'>('mac');
  const [activeTab, setActiveTab] = useState<'vault' | 'expiring' | 'warranties'>('vault');
  const [activePhonePass, setActivePhonePass] = useState<number>(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLaunchDemo = (personaKey: 'alex' | 'sarah' = 'alex') => {
    const persona = DEMO_PERSONAS[personaKey];
    localStorage.setItem('perkpal_user', JSON.stringify(persona));
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: `Welcome, ${persona.name}!`,
      description: `Exploring PerkPal Demo with $${persona.netWorthUsd.toLocaleString()} in rewards.`,
    });
    navigate('/dashboard');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/15 to-background pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background radial gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] left-[30%] w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-foreground">
              All Your Points & Perks.{' '}
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200 bg-clip-text text-transparent">
                One Elegant Hub.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From your Starbucks stars and Domino's free pizzas to your Taco Bell rewards, active gift cards, and appliance warranties. PerkPal puts every perk, barcode, and expiration countdown into one stupid-clean hub.
            </p>

            {/* Quick Demo CTA Buttons with Liquid Glass hover effects */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="liquid"
                size="lg"
                onClick={() => handleLaunchDemo('alex')}
                className="w-full sm:w-auto font-bold text-sm px-8 py-6 shadow-xl flex items-center justify-center gap-2"
              >
                <span>Explore Live Demo</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Button>

              <a href="#calculator" className="w-full sm:w-auto">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto font-semibold text-sm px-6 py-6"
                >
                  <TrendingUp className="mr-2 w-4 h-4 text-primary" />
                  Points Calculator
                </Button>
              </a>
            </div>

            {/* Platform Metrics */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-black text-foreground tracking-tight">$4.8M+</p>
                <p className="text-xs text-muted-foreground font-medium">Rewards Monitored</p>
              </div>
              <div>
                <p className="text-2xl font-black text-foreground tracking-tight">140+</p>
                <p className="text-xs text-muted-foreground font-medium">Supported Programs</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                  99.8%
                </p>
                <p className="text-xs text-muted-foreground font-medium">Expiration Shield</p>
              </div>
            </div>
          </div>

          {/* Right Column: Familiar macOS / iOS Device Frame */}
          <div className="lg:col-span-6 relative">
            {/* Device Switcher Toggle (macOS vs iPhone look) */}
            <div className="flex justify-center lg:justify-end mb-4">
              <div className="inline-flex p-1 rounded-full bg-secondary/80 dark:bg-card/80 backdrop-blur-md border border-border/80 shadow-sm gap-1">
                <button
                  onClick={() => setDeviceMode('phone')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    deviceMode === 'phone'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  Apple Wallet Pass
                </button>
                <button
                  onClick={() => setDeviceMode('mac')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    deviceMode === 'mac'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Laptop className="h-3.5 w-3.5" />
                  Desktop Hub
                </button>
              </div>
            </div>

            {/* macOS Application Window Frame */}
            {deviceMode === 'mac' ? (
              <div className="rounded-2xl border border-border/80 shadow-2xl bg-background/95 dark:bg-card/90 backdrop-blur-2xl overflow-hidden transition-all duration-300">
                {/* macOS Title Bar with Traffic Lights */}
                <div className="px-4 py-3 bg-secondary/40 border-b border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm"></span>
                    <span className="text-xs font-semibold text-muted-foreground ml-2 hidden sm:inline">
                      PerkPal — Rewards Command Center
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded-md bg-background/80 border border-border text-2xs text-muted-foreground font-mono hidden sm:inline-block">
                      ⌘K Search
                    </div>
                    <Badge variant="outline" className="text-2xs font-bold text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                      ● Live Sync
                    </Badge>
                  </div>
                </div>

                {/* Window Subheader & Segments */}
                <div className="p-4 border-b border-border/40 flex justify-between items-center bg-background/40">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveTab('vault')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                        activeTab === 'vault'
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                      }`}
                    >
                      My Vault
                    </button>
                    <button
                      onClick={() => setActiveTab('expiring')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                        activeTab === 'expiring'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      Expiring (4)
                    </button>
                    <button
                      onClick={() => setActiveTab('warranties')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                        activeTab === 'warranties'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      Warranties (3)
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-2xs text-muted-foreground block uppercase font-mono">Protected Value</span>
                    <span className="text-sm font-black text-foreground">$2,894.20 USD</span>
                  </div>
                </div>

                {/* Tab Content Display */}
                <div className="p-5 space-y-3">
                  {activeTab === 'vault' && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center hover:bg-secondary/60 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#006491] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="DP" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Domino's Piece of the Pie</p>
                            <p className="text-2xs text-rose-500 font-semibold flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" /> Free Medium Pizza • Expires in 3 days!
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-foreground">60 pts</p>
                          <Badge className="bg-rose-500 text-white text-2xs py-0">Urgent</Badge>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center hover:bg-secondary/60 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#006241] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="SB" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Starbucks Rewards</p>
                            <p className="text-2xs text-muted-foreground">Gold Member • 2 Drinks Ready</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-foreground">420 stars</p>
                          <p className="text-2xs text-emerald-600 dark:text-emerald-400 font-semibold">$18.90 val</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center hover:bg-secondary/60 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#CC0000] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="TG" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Target Circle 360</p>
                            <p className="text-2xs text-muted-foreground">$10 Birthday Coupon + Cash</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-foreground">$54.80</p>
                          <p className="text-2xs text-muted-foreground">In Wallet</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'expiring' && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#006491] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="DP" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Domino's Pizza Rewards</p>
                            <p className="text-2xs text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Free Pizza expires in 3 days
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-rose-600 text-white text-2xs">Claim Now</Badge>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#702283] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="TB" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Taco Bell Rewards (Fire Tier)</p>
                            <p className="text-2xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Free Gordita Crunch in 12 days
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-amber-500 text-white text-2xs">View Code</Badge>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#006241] text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon code="SB" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">420 Starbucks Stars</p>
                            <p className="text-2xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" /> Expires in 18 days
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-amber-500 text-white text-2xs">$18.90 val</Badge>
                      </div>
                    </div>
                  )}

                  {activeTab === 'warranties' && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon name="Sony" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Sony WH-1000XM5</p>
                            <p className="text-2xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" /> 2-Yr Warranty ends in 24 days
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-amber-500/40 text-amber-600 text-2xs">Action</Badge>
                      </div>

                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon name="Apple" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">MacBook Pro 16" (M3 Max)</p>
                            <p className="text-2xs text-emerald-600 dark:text-emerald-400 font-semibold">
                              AppleCare+ Active • 340 Days Left
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-emerald-600 border-emerald-500/30 text-2xs">Protected</Badge>
                      </div>

                      <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                            <BrandIcon name="Dyson" className="w-full h-full text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Dyson V15 Detect Vacuum</p>
                            <p className="text-2xs text-muted-foreground">
                              Official Guarantee • 150 Days Left
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-2xs">Active</Badge>
                      </div>
                    </div>
                  )}

                  {/* Window Bottom Trigger */}
                  <Button
                    onClick={() => handleLaunchDemo('alex')}
                    variant="outline"
                    className="w-full mt-2 font-bold text-xs bg-primary/5 hover:bg-primary/10 border-primary/30 text-primary h-9"
                  >
                    Open Full macOS Dashboard →
                  </Button>
                </div>
              </div>
            ) : (
              /* Apple Wallet Authentic iPhone Frame */
              <div className="relative max-w-[360px] mx-auto group">
                {/* Ambient backlight glow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent rounded-[52px] blur-2xl opacity-60 pointer-events-none -z-10" />
                <div className="p-4 rounded-[46px] bg-slate-100/95 dark:bg-zinc-900/95 backdrop-blur-2xl border-[5px] border-slate-300/80 dark:border-zinc-800 shadow-2xl relative select-none ring-1 ring-slate-400/20 dark:ring-white/10 text-foreground transition-all duration-300">
                {/* Dynamic Island */}
                <div className="w-28 h-5 rounded-full bg-slate-900 dark:bg-black mx-auto mb-2.5 flex items-center justify-between px-3 relative z-40 shadow-inner">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-900/60" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* iOS Status Bar */}
                <div className="flex justify-between items-center px-3 mb-2.5 text-2xs font-semibold text-foreground/80">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="w-3 h-3 text-foreground/80" />
                    <Wifi className="w-3 h-3 text-foreground/80" />
                    <div className="w-5 h-2.5 rounded-[3px] border border-foreground/40 p-0.5 flex items-center">
                      <div className="h-full w-full bg-emerald-500 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Apple Wallet Header */}
                <div className="flex justify-between items-center mb-3 px-2">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">Wallet</h3>
                    <p className="text-2xs text-muted-foreground font-medium">PerkPal Connected • 3 Passes</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleLaunchDemo('alex')}
                      className="w-7 h-7 rounded-full bg-background hover:bg-secondary flex items-center justify-center text-foreground border border-border/80 transition-colors shadow-sm"
                      title="Add or sync"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stacked Interactive Passes Container */}
                <div className="relative h-[375px] rounded-2xl overflow-hidden pb-2">
                  {/* Pass 0: Delta SkyMiles */}
                  <div
                    onClick={() => setActivePhonePass(0)}
                    style={{
                      transform: activePhonePass === 0 ? 'translateY(0px)' : 'translateY(240px)',
                      zIndex: activePhonePass === 0 ? 30 : 15,
                    }}
                    className={`absolute inset-x-0 p-4 rounded-[22px] bg-gradient-to-b from-[#002244] via-[#091f3a] to-[#041226] border border-blue-400/25 shadow-xl cursor-pointer transition-all duration-300 ease-out ${
                      activePhonePass === 0 ? 'scale-100 shadow-2xl' : 'scale-[0.98] opacity-95 hover:opacity-100'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <DeltaLogo className="w-5 h-5 text-white shrink-0 drop-shadow-sm" />
                        <span className="font-bold text-xs tracking-tight text-white">Delta Air Lines</span>
                      </div>
                      <span className="text-2xs font-bold text-sky-200 uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                        Platinum Medallion
                      </span>
                    </div>

                    {/* Primary Field */}
                    <div className="mb-3">
                      <span className="text-[8px] font-semibold text-blue-200 uppercase tracking-wider block">
                        SkyMiles Balance
                      </span>
                      <div className="text-2xl font-black text-white tracking-tight leading-none mt-0.5">
                        74,250 <span className="text-xs font-semibold text-blue-200">miles</span>
                      </div>
                    </div>

                    {/* Secondary Fields Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/10 text-left">
                      <div>
                        <span className="text-[8px] text-blue-300/80 uppercase font-semibold block">Passenger</span>
                        <span className="text-xs font-bold text-white truncate block">Alex Mercer</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-blue-300/80 uppercase font-semibold block">Home Hub</span>
                        <span className="text-xs font-bold text-white block">JFK</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-blue-300/80 uppercase font-semibold block">Est. Value</span>
                        <span className="text-xs font-bold text-emerald-400 block">$1,002.38</span>
                      </div>
                    </div>

                    {/* Apple Wallet White Barcode Cutout Block */}
                    <div className="mt-2.5 p-2 bg-white rounded-xl flex flex-col items-center justify-center text-black shadow-inner">
                      <div className="flex items-center gap-[2px] h-6 w-full justify-center px-2">
                        {[2, 1, 3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 1, 3].map((w, i) => (
                          <div key={i} className="bg-black h-full" style={{ width: `${w * 1.5}px` }} />
                        ))}
                      </div>
                      <div className="w-full flex justify-between items-center px-1 mt-1 text-[9px] font-mono tracking-widest text-slate-700">
                        <span>0062 8491 7425 8821</span>
                        <span className="text-2xs text-slate-400 font-bold border border-slate-300 rounded-full w-3.5 h-3.5 flex items-center justify-center font-sans">
                          i
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pass 1: Starbucks Rewards */}
                  <div
                    onClick={() => setActivePhonePass(1)}
                    style={{
                      transform: activePhonePass === 1 ? 'translateY(0px)' : activePhonePass === 0 ? 'translateY(240px)' : 'translateY(290px)',
                      zIndex: activePhonePass === 1 ? 30 : 20,
                    }}
                    className={`absolute inset-x-0 p-4 rounded-[22px] bg-gradient-to-b from-[#006241] via-[#004f34] to-[#003824] border border-emerald-400/25 shadow-xl cursor-pointer transition-all duration-300 ease-out ${
                      activePhonePass === 1 ? 'scale-100 shadow-2xl' : 'scale-[0.98] opacity-95 hover:opacity-100'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <StarbucksLogo className="w-5 h-5 text-white shrink-0 drop-shadow-sm" />
                        <span className="font-bold text-xs tracking-tight text-white">Starbucks Rewards</span>
                      </div>
                      <span className="text-2xs font-bold text-amber-300 uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded-full">
                        Gold Member
                      </span>
                    </div>

                    {/* Primary Field */}
                    <div className="mb-3">
                      <span className="text-[8px] font-semibold text-emerald-200 uppercase tracking-wider block">
                        Available Stars
                      </span>
                      <div className="text-2xl font-black text-white tracking-tight leading-none mt-0.5 flex items-center gap-1.5">
                        420 <span className="text-amber-300 text-lg leading-none">★</span>
                      </div>
                    </div>

                    {/* Secondary Fields Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/10 text-left">
                      <div>
                        <span className="text-[8px] text-emerald-300/80 uppercase font-semibold block">Member</span>
                        <span className="text-xs font-bold text-white truncate block">Alex Mercer</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-emerald-300/80 uppercase font-semibold block">Tier Perk</span>
                        <span className="text-xs font-bold text-amber-300 block">2 Free Drinks</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-emerald-300/80 uppercase font-semibold block">Expiring</span>
                        <span className="text-xs font-bold text-amber-300 block">18 Days</span>
                      </div>
                    </div>

                    {/* Apple Wallet White Barcode Cutout Block */}
                    <div className="mt-2.5 p-2 bg-white rounded-xl flex flex-col items-center justify-center text-black shadow-inner">
                      <div className="flex items-center gap-[2px] h-6 w-full justify-center px-2">
                        {[1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1].map((w, i) => (
                          <div key={i} className="bg-black h-full" style={{ width: `${w * 1.5}px` }} />
                        ))}
                      </div>
                      <div className="w-full flex justify-between items-center px-1 mt-1 text-[9px] font-mono tracking-widest text-slate-700">
                        <span>6041 8290 1938 4401</span>
                        <span className="text-2xs text-slate-400 font-bold border border-slate-300 rounded-full w-3.5 h-3.5 flex items-center justify-center font-sans">
                          i
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pass 2: Chase Sapphire Reserve */}
                  <div
                    onClick={() => setActivePhonePass(2)}
                    style={{
                      transform: activePhonePass === 2 ? 'translateY(0px)' : activePhonePass === 1 ? 'translateY(240px)' : 'translateY(290px)',
                      zIndex: activePhonePass === 2 ? 30 : 10,
                    }}
                    className={`absolute inset-x-0 p-4 rounded-[22px] bg-gradient-to-b from-[#0f1d36] via-[#0b1629] to-[#060c17] border border-sky-400/25 shadow-xl cursor-pointer transition-all duration-300 ease-out ${
                      activePhonePass === 2 ? 'scale-100 shadow-2xl' : 'scale-[0.98] opacity-95 hover:opacity-100'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <ChaseLogo className="w-5 h-5 text-white shrink-0 drop-shadow-sm" />
                        <span className="font-bold text-xs tracking-tight text-white">Chase Sapphire Reserve</span>
                      </div>
                      <span className="text-2xs font-bold text-sky-200 uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                        Visa Infinite
                      </span>
                    </div>

                    {/* Primary Field */}
                    <div className="mb-3">
                      <span className="text-[8px] font-semibold text-sky-200 uppercase tracking-wider block">
                        Ultimate Rewards
                      </span>
                      <div className="text-2xl font-black text-white tracking-tight leading-none mt-0.5">
                        86,400 <span className="text-xs font-semibold text-sky-200">pts</span>
                      </div>
                    </div>

                    {/* Secondary Fields Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/10 text-left">
                      <div>
                        <span className="text-[8px] text-sky-300/80 uppercase font-semibold block">Cardmember</span>
                        <span className="text-xs font-bold text-white truncate block">Alex Mercer</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-sky-300/80 uppercase font-semibold block">Account</span>
                        <span className="text-xs font-bold text-white font-mono block">•••• 4019</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-sky-300/80 uppercase font-semibold block">Valuation</span>
                        <span className="text-xs font-bold text-emerald-400 block">$1,598.40</span>
                      </div>
                    </div>

                    {/* Apple Wallet White Barcode Cutout Block */}
                    <div className="mt-2.5 p-2 bg-white rounded-xl flex flex-col items-center justify-center text-black shadow-inner">
                      <div className="flex items-center gap-[2px] h-6 w-full justify-center px-2">
                        {[3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 4, 1, 3, 2, 1, 3, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3].map((w, i) => (
                          <div key={i} className="bg-black h-full" style={{ width: `${w * 1.5}px` }} />
                        ))}
                      </div>
                      <div className="w-full flex justify-between items-center px-1 mt-1 text-[9px] font-mono tracking-widest text-slate-700">
                        <span>4147 2091 8830 4019</span>
                        <span className="text-2xs text-slate-400 font-bold border border-slate-300 rounded-full w-3.5 h-3.5 flex items-center justify-center font-sans">
                          i
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-2xs text-slate-400 font-medium">
                    Tap any pass in stack to expand barcode & details
                  </span>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
