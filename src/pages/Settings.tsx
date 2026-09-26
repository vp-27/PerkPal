import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PerkPalAdvisor from '@/components/common/PerkPalAdvisor';
import {
  User,
  Bell,
  Shield,
  Moon,
  Sun,
  Download,
  RefreshCw,
  Save,
  CheckCircle2,
  DollarSign,
  Laptop,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import { useToast } from '@/hooks/use-toast';
import { DEMO_PERSONAS, RewardsStore } from '@/lib/rewardsData';

interface UserProfileSettings {
  name: string;
  email: string;
  homeAirport: string;
  currency: string;
}

export const Settings: React.FC = () => {
  const [profile, setProfile] = useState<UserProfileSettings>({
    name: 'Alex Mercer',
    email: 'alex.mercer@perkpal.com',
    homeAirport: 'JFK - New York',
    currency: 'USD ($)',
  });

  const [notifications, setNotifications] = useState({
    expiry30d: true,
    expiry14d: true,
    expiry7d: true,
    transferBonuses: true,
    weeklyReport: false,
  });

  const [twoFactor, setTwoFactor] = useState(true);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem('perkpal_user');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch (e) {
        setProfile(DEMO_PERSONAS.alex);
      }
    }
  }, []);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('perkpal_user', JSON.stringify(profile));
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: 'Profile Updated',
      description: 'Your user preferences have been saved.',
    });
  };

  const handleExportJson = () => {
    const data = {
      user: profile,
      metrics: RewardsStore.getMetrics(),
      programs: RewardsStore.getPrograms(),
      giftCards: RewardsStore.getGiftCards(),
      transactions: RewardsStore.getTransactions(),
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `perkpal-portfolio-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: 'JSON Export Complete',
      description: 'Full portfolio data downloaded successfully.',
    });
  };

  const handleExportCsv = () => {
    const programs = RewardsStore.getPrograms();
    const rows = [
      ['Program Name', 'Category', 'Points Balance', 'Valuation Cents', 'Value USD', 'Expiration'],
      ...programs.map((p) => [
        `"${p.name}"`,
        `"${p.category}"`,
        p.points,
        p.centsPerPoint,
        p.valueUsd,
        `"${p.expiresIn}"`,
      ]),
    ];

    const csvContent = rows.map((e) => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `perkpal-rewards-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: 'CSV Export Complete',
      description: 'Spreadsheet downloaded successfully.',
    });
  };

  const handleResetData = () => {
    RewardsStore.resetAll();
    toast({
      title: 'Demo Data Restored',
      description: 'All demo programs and balances reset to factory state.',
    });
  };

  return (
    <div className="min-h-screen flex flex-col page-transition bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">
            Settings & Preferences
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account credentials, notifications, currencies, and data export.
          </p>
        </div>

        {/* Profile Details */}
        <Card className="glass-card border border-border/80">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Member Profile
            </CardTitle>
            <CardDescription className="text-xs">
              Your personal information and home travel hub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold mb-1 block">Full Name</label>
                  <Input
                    value={profile.name || ''}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block">Email Address</label>
                  <Input
                    value={profile.email || ''}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block">Home Airport (Hub)</label>
                  <Input
                    value={profile.homeAirport || 'JFK - New York'}
                    onChange={(e) => setProfile({ ...profile, homeAirport: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block">Display Currency</label>
                  <select
                    value={profile.currency || 'USD ($)'}
                    onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-xs"
                  >
                    <option value="USD ($)">USD ($)</option>
                    <option value="EUR (€)">EUR (€)</option>
                    <option value="GBP (£)">GBP (£)</option>
                    <option value="CAD ($)">CAD ($)</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" size="sm" className="font-semibold text-xs flex items-center gap-1.5">
                  <Save className="h-3.5 w-3.5" />
                  Save Profile
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Theme Preferences */}
        <Card className="glass-card border border-border/80">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Sun className="h-4 w-4 text-amber-500" />
              Interface Theme
            </CardTitle>
            <CardDescription className="text-xs">
              Choose your preferred visual appearance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 text-xs font-semibold transition-all ${
                  theme === 'light'
                    ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                    : 'border-border/60 hover:bg-secondary/40 text-muted-foreground'
                }`}
              >
                <Sun className="h-5 w-5 text-amber-500" />
                Light Mode
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 text-xs font-semibold transition-all ${
                  theme === 'dark'
                    ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                    : 'border-border/60 hover:bg-secondary/40 text-muted-foreground'
                }`}
              >
                <Moon className="h-5 w-5 text-sky-400" />
                Dark Mode
              </button>
              <button
                type="button"
                onClick={() => setTheme('system')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 text-xs font-semibold transition-all ${
                  theme === 'system'
                    ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                    : 'border-border/60 hover:bg-secondary/40 text-muted-foreground'
                }`}
              >
                <Laptop className="h-5 w-5 text-muted-foreground" />
                System Match
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Expiration Shield & Notifications */}
        <Card className="glass-card border border-border/80">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" />
              PerkPal Expiration Shield & Alerts
            </CardTitle>
            <CardDescription className="text-xs">
              Automated notifications to prevent points and gift balance forfeiture
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-xs">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <div>
                <p className="font-semibold text-foreground">30-Day Warning Radar</p>
                <p className="text-muted-foreground">Alert 1 month before points or miles expire</p>
              </div>
              <Switch
                checked={notifications.expiry30d}
                onCheckedChange={(c) => setNotifications({ ...notifications, expiry30d: c })}
              />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <div>
                <p className="font-semibold text-foreground">14-Day Urgent Reminder</p>
                <p className="text-muted-foreground">Actionable email with recommended 1-click redemptions</p>
              </div>
              <Switch
                checked={notifications.expiry14d}
                onCheckedChange={(c) => setNotifications({ ...notifications, expiry14d: c })}
              />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <div>
                <p className="font-semibold text-foreground">7-Day Final Rescue Alert</p>
                <p className="text-muted-foreground">High-priority push alert</p>
              </div>
              <Switch
                checked={notifications.expiry7d}
                onCheckedChange={(c) => setNotifications({ ...notifications, expiry7d: c })}
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-foreground">Transfer Bonus Drop Notifications</p>
                <p className="text-muted-foreground">Instant ping whenever a bank launches a +20% to +50% partner promo</p>
              </div>
              <Switch
                checked={notifications.transferBonuses}
                onCheckedChange={(c) => setNotifications({ ...notifications, transferBonuses: c })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Export & Demo Utilities */}
        <Card className="glass-card border border-border/80">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              Data Export & Reset
            </CardTitle>
            <CardDescription className="text-xs">
              Export your portfolio data or reset the demo state anytime
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportJson}
                className="text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Export Portfolio (JSON)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCsv}
                className="text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Export Programs (CSV)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetData}
                className="text-xs font-semibold flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reset Demo Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      <PerkPalAdvisor />
    </div>
  );
};

export default Settings;
