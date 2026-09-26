import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  RefreshCw,
  Clock,
  ShieldCheck,
  CreditCard,
  Utensils,
  ChevronDown,
  User,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExpirationRadar from '@/components/dashboard/ExpirationRadar';
import UnifiedVault from '@/components/dashboard/UnifiedVault';
import ItemDetailSheet, { VaultItem } from '@/components/dashboard/ItemDetailSheet';
import AddItemDialog from '@/components/dashboard/AddItemDialog';
import { DEMO_PERSONAS, DemoPersona, RewardsStore } from '@/lib/rewardsData';

export const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<DemoPersona | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVaultItem, setSelectedVaultItem] = useState<VaultItem | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [, setTick] = useState(0);

  const navigate = useNavigate();
  const { toast } = useToast();

  const loadUserData = () => {
    const storedUser = localStorage.getItem('perkpal_user');
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (e) {
        setUserData(DEMO_PERSONAS.alex);
      }
    } else {
      const defaultPersona = DEMO_PERSONAS.alex;
      localStorage.setItem('perkpal_user', JSON.stringify(defaultPersona));
      setUserData(defaultPersona);
    }
  };

  useEffect(() => {
    loadUserData();
    setLoading(false);

    const handleDataUpdate = () => setTick((t) => t + 1);
    window.addEventListener('perkpal_data_updated', handleDataUpdate);
    return () => window.removeEventListener('perkpal_data_updated', handleDataUpdate);
  }, []);

  const handleSwitchPersona = (key: 'alex' | 'sarah') => {
    const persona = DEMO_PERSONAS[key];
    localStorage.setItem('perkpal_user', JSON.stringify(persona));
    setUserData(persona);
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: `Switched to ${persona.name}`,
      description: persona.tagline,
    });
  };

  const handleResetData = () => {
    RewardsStore.resetAll();
    toast({
      title: 'Demo Vault Reset',
      description: 'Restored default food perks, gift cards, and gadget warranties.',
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem('perkpal_user');
    toast({
      title: 'Signed Out',
      description: 'You have exited the session.',
    });
    window.dispatchEvent(new Event('perkpal_auth_change'));
    navigate('/');
  };

  const metrics = RewardsStore.getMetrics();
  const radarItems = RewardsStore.getExpiringRadarItems();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-8">
        {/* Top Header & Glance Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                Welcome back, {userData?.name?.split(' ')[0] || 'Explorer'}
              </h1>
              <Badge variant="outline" className="text-xs font-semibold text-muted-foreground border-border/80">
                {userData?.tier || 'PerkPal Vault'}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {metrics.expiringCount > 0 ? (
                <span className="text-rose-600 dark:text-rose-400 font-semibold">
                  {metrics.expiringCount} items require action on your Expiration Radar
                </span>
              ) : (
                'All your points, gift cards, and gadget warranties are protected'
              )}
            </p>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsAddOpen(true)}
              size="sm"
              className="h-9 px-3.5 font-bold text-xs gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </Button>

            {/* Persona Switcher Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-medium gap-1.5 border-border/80">
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="hidden sm:inline">{userData?.name?.split(' ')[0]}</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 text-xs">
                <DropdownMenuItem onClick={() => handleSwitchPersona('alex')} className="cursor-pointer">
                  Alex (Everyday Perks & Tech)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSwitchPersona('sarah')} className="cursor-pointer">
                  Sarah (Dining & Coffee)
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleResetData} className="cursor-pointer text-muted-foreground">
                  <RefreshCw className="w-3 h-3 mr-2" />
                  Reset Demo State
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                  <LogOut className="w-3 h-3 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Section 1: Expiration Radar (Front & Center) */}
        <section>
          <ExpirationRadar onSelectItem={(item) => setSelectedVaultItem(item)} />
        </section>

        {/* Section 2: Unified Vault */}
        <section className="pt-2">
          <UnifiedVault onSelectItem={(item) => setSelectedVaultItem(item)} />
        </section>
      </main>

      <Footer />

      {/* 1-Tap Checkout / Claim Detail Sheet */}
      <ItemDetailSheet
        item={selectedVaultItem}
        isOpen={Boolean(selectedVaultItem)}
        onClose={() => setSelectedVaultItem(null)}
        onItemUpdated={() => setTick((t) => t + 1)}
      />

      {/* Clean Add Item Dialog */}
      <AddItemDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onItemAdded={() => setTick((t) => t + 1)}
      />
    </div>
  );
};

export default Dashboard;
