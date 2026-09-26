import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccountsSection from '@/components/dashboard/AccountsSection';
import PerkPalAdvisor from '@/components/common/PerkPalAdvisor';
import { ShieldCheck, ArrowLeft, Lock, RefreshCw, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const Accounts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
              Back to Dashboard
            </Button>
          </Link>
          <Badge variant="outline" className="text-xs text-emerald-600 dark:text-emerald-400 border-emerald-500/30 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            256-Bit Encrypted Sync Active
          </Badge>
        </div>

        {/* Security & Token Banner */}
        <div className="p-6 rounded-2xl bg-secondary/40 border border-border/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Key className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-foreground">Zero-Trust Credential Security</h3>
              <p className="text-xs text-muted-foreground max-w-xl">
                PerkPal uses isolated read-only OAuth tokens. Your passwords and payment PINs are never seen, stored, or transmitted to our servers.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-4 w-4 text-emerald-500" />
            <span>Read-Only API Tokens Only</span>
          </div>
        </div>

        {/* Main Accounts Manager */}
        <AccountsSection />
      </main>

      <Footer />
      <PerkPalAdvisor />
    </div>
  );
};

export default Accounts;
