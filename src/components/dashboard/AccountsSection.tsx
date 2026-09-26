import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Link as LinkIcon,
  Unlink,
  Plus,
  Search,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Check,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { RewardsStore, RewardProgram } from '@/lib/rewardsData';
import { useToast } from '@/hooks/use-toast';
import { BrandIcon } from '@/components/common/BrandLogos';

interface SuggestedProgram {
  name: string;
  category: 'Airlines' | 'Hotels' | 'Credit Cards' | 'Dining & Coffee' | 'Retail';
  logo: string;
  bg: string;
  notes: string;
}

const SUGGESTED_PROGRAMS: SuggestedProgram[] = [
  {
    name: 'United MileagePlus',
    category: 'Airlines' as const,
    logo: 'UA',
    bg: 'bg-indigo-600',
    notes: 'Star Alliance transfers & Polaris award travel',
  },
  {
    name: 'Hilton Honors',
    category: 'Hotels' as const,
    logo: 'HH',
    bg: 'bg-blue-950',
    notes: 'Diamond Status perks & 5th night free',
  },
  {
    name: 'Capital One Miles',
    category: 'Credit Cards' as const,
    logo: 'C1',
    bg: 'bg-red-700',
    notes: 'Venture X airport lounge access',
  },
  {
    name: 'Chipotle Rewards',
    category: 'Dining & Coffee' as const,
    logo: 'CP',
    bg: 'bg-amber-900',
    notes: 'Free burritos & bonus point drops',
  },
];

export const AccountsSection: React.FC = () => {
  const [programs, setPrograms] = useState<RewardProgram[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);
  const [selectedToLink, setSelectedToLink] = useState<SuggestedProgram | null>(null);
  const [isConnectingMockOAuth, setIsConnectingMockOAuth] = useState(false);
  const { toast } = useToast();

  const loadData = () => {
    setPrograms(RewardsStore.getPrograms());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('perkpal_data_updated', loadData);
    return () => window.removeEventListener('perkpal_data_updated', loadData);
  }, []);

  const handleSyncAll = async () => {
    setIsSyncingAll(true);
    toast({
      title: 'Sync in Progress',
      description: 'Refreshing balances across all connected programs...',
    });
    await RewardsStore.syncAll();
    setIsSyncingAll(false);
    loadData();
    toast({
      title: 'Sync Complete',
      description: 'All 140+ loyalty channels updated successfully.',
    });
  };

  const handleSyncSingle = async (id: string, name: string) => {
    toast({
      title: `Syncing ${name}...`,
      description: 'Querying live server balances.',
    });
    await RewardsStore.syncProgram(id);
    loadData();
    toast({
      title: `${name} Synced`,
      description: 'Latest balance confirmed.',
    });
  };

  const handleUnlink = (id: string, name: string) => {
    RewardsStore.unlinkProgram(id);
    toast({
      title: 'Account Unlinked',
      description: `${name} has been removed from your active board.`,
    });
    loadData();
  };

  const handleSimulateOAuthConnect = (suggested: SuggestedProgram) => {
    setSelectedToLink(suggested);
    setIsConnectingMockOAuth(true);
    setTimeout(() => {
      RewardsStore.addProgram({
        name: suggested.name,
        category: suggested.category,
        logoCode: suggested.logo,
        brandColor: '#10b981',
        badgeBg: suggested.bg,
        points: Math.floor(15000 + Math.random() * 45000),
        pointsName: suggested.category === 'Airlines' ? 'Miles' : 'Points',
        centsPerPoint: 1.4,
        valueUsd: 420.0,
        expiresIn: 'Never',
        expiresDays: 999,
        isExpiringSoon: false,
        status: 'connected',
        lastSynced: 'Just now',
        accountNumberMask: `•••• ${Math.floor(1000 + Math.random() * 9000)}`,
        tier: 'Gold Status',
        notes: suggested.notes,
      });

      setIsConnectingMockOAuth(false);
      setIsAddAccountOpen(false);
      loadData();
      toast({
        title: 'Account Linked!',
        description: `Successfully authenticated with ${suggested.name}.`,
      });
    }, 1500);
  };

  const filteredConnected = programs.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header with Title and Sync Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Linked Loyalty Accounts
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage live authentication tokens, credentials health, and sync schedule.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSyncAll}
            disabled={isSyncingAll}
            className="flex items-center gap-1.5 h-9"
          >
            <RefreshCw className={`h-4 w-4 ${isSyncingAll ? 'animate-spin text-primary' : ''}`} />
            {isSyncingAll ? 'Syncing...' : 'Sync All Accounts'}
          </Button>

          <Button
            size="sm"
            onClick={() => setIsAddAccountOpen(true)}
            className="flex items-center gap-1.5 h-9 font-semibold"
          >
            <Plus className="h-4 w-4" />
            Connect New Program
          </Button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search linked accounts or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-9 text-xs"
        />
      </div>

      {/* Connected Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredConnected.map((account) => (
          <Card
            key={account.id}
            className={`glass-card border-border/80 transition-all duration-300 hover:shadow-md ${
              account.status === 'error' || account.status === 'reconnect_needed'
                ? 'border-amber-500/50'
                : ''
            }`}
          >
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${account.badgeBg} text-white flex items-center justify-center p-2 shadow-sm shrink-0`}
                  >
                    <BrandIcon name={account.name} code={account.logoCode} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{account.name}</h4>
                    <p className="text-2xs text-muted-foreground font-mono">
                      {account.accountNumberMask} • {account.category}
                    </p>
                  </div>
                </div>

                {account.status === 'connected' ? (
                  <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-2xs font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Synced
                  </Badge>
                ) : (
                  <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-2xs font-semibold flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Needs Re-auth
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                <span className="text-muted-foreground text-2xs">
                  Last synced: {account.lastSynced}
                </span>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSyncSingle(account.id, account.name)}
                    className="h-7 px-2 text-xs"
                    title="Sync now"
                  >
                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                    Sync
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUnlink(account.id, account.name)}
                    className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
                    title="Unlink account"
                  >
                    <Unlink className="h-3.5 w-3.5 mr-1" />
                    Unlink
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Suggested to Connect Section */}
      <div className="pt-4">
        <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
          <LinkIcon className="h-4 w-4 text-primary" />
          Recommended Programs to Connect
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SUGGESTED_PROGRAMS.map((sug, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl glass-card border border-border/70 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-lg ${sug.bg} text-white flex items-center justify-center p-1.5 shadow-sm shrink-0`}
                >
                  <BrandIcon name={sug.name} code={sug.logo} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-foreground">{sug.name}</h5>
                  <p className="text-2xs text-muted-foreground">{sug.category}</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSimulateOAuthConnect(sug)}
                className="w-full text-xs h-7 font-semibold border-primary/30 hover:bg-primary hover:text-white transition-colors"
              >
                + Connect Account
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Program Modal with Mock OAuth */}
      <Dialog open={isAddAccountOpen} onOpenChange={setIsAddAccountOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-500" />
              Secure 256-Bit Financial Link
            </DialogTitle>
            <DialogDescription>
              PerkPal connects via read-only APIs. Your password is never stored.
            </DialogDescription>
          </DialogHeader>

          {isConnectingMockOAuth ? (
            <div className="py-8 flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sm">Authenticating via OAuth 2.0</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Establishing read-only handshake with {selectedToLink?.name}...
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 py-2">
              <p className="text-xs text-muted-foreground">
                Select a program to trigger simulated bank-grade authentication:
              </p>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {SUGGESTED_PROGRAMS.map((sug, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSimulateOAuthConnect(sug)}
                    className="p-3 rounded-lg border border-border/70 hover:border-primary hover:bg-secondary/40 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg ${sug.bg} text-white flex items-center justify-center p-1.5 shadow-sm shrink-0`}
                      >
                        <BrandIcon name={sug.name} code={sug.logo} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs text-foreground">{sug.name}</h5>
                        <p className="text-2xs text-muted-foreground">{sug.notes}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountsSection;
