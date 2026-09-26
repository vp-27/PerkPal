import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  LogIn,
  LayoutDashboard,
  CreditCard,
  Sparkles,
  Settings,
  LogOut,
  RefreshCw,
  Compass,
  Calculator,
  User,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { DEMO_PERSONAS, DemoPersona } from '@/lib/rewardsData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<DemoPersona | { name: string; email?: string } | null>(null);
  const isHomePage = location.pathname === '/';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('perkpal_user');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setIsAuthenticated(true);
          setUserProfile(parsed);
        } catch (e) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    window.addEventListener('perkpal_auth_change', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('perkpal_auth_change', checkAuth);
    };
  }, [location.pathname]);

  const handleSignOut = () => {
    localStorage.removeItem('perkpal_user');
    setIsAuthenticated(false);
    toast({
      title: 'Signed out',
      description: 'You have returned to visitor mode.',
    });
    window.dispatchEvent(new Event('perkpal_auth_change'));
    navigate('/');
  };

  const handleQuickDemo = (personaKey: 'alex' | 'sarah' = 'alex') => {
    const persona = DEMO_PERSONAS[personaKey];
    localStorage.setItem('perkpal_user', JSON.stringify(persona));
    setIsAuthenticated(true);
    setUserProfile(persona);
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: `Welcome, ${persona.name}!`,
      description: `Loaded demo profile (${persona.tagline}).`,
    });
    navigate('/dashboard');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav className="px-4 sm:px-6 py-2 rounded-full border-none shadow-none backdrop-blur-xl bg-background/70 dark:bg-background/60 transition-colors duration-200">
          <div className="flex items-center justify-between">
            {/* Brand Logo with PerkPal Mascot */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/perkpal-icon.png"
              alt="PerkPal icon"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent leading-none">
              PerkPal
            </span>
          </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
          {isHomePage ? (
            <>
              <a
                href="#partners"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 transition-all"
              >
                Partners
              </a>
              <a
                href="#features"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 transition-all"
              >
                Features
              </a>
              <a
                href="#calculator"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                <Calculator className="h-3.5 w-3.5 text-primary" />
                Value Calculator
              </a>
              <a
                href="#faq"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 transition-all"
              >
                FAQ
              </a>
              <Link
                to="/offers"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 transition-all flex items-center gap-1"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Transfer Radar
              </Link>
            </>
          ) : (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive('/dashboard')
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/accounts"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive('/accounts')
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Accounts
                </Link>
                <Link
                  to="/offers"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive('/offers')
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Offers & Optimizer
                </Link>
                <Link
                  to="/settings"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive('/settings')
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </>
            )}
          </div>

          {/* Desktop Right Hand Actions: Theme Toggle + Auth / Demo */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link to="/dashboard">
                  <Button variant="liquid" size="sm" className="flex items-center gap-1.5 h-8 text-xs font-semibold">
                    <User className="h-3.5 w-3.5" />
                    <span className="truncate max-w-[100px]">
                      {userProfile?.name?.split(' ')[0] || 'Dashboard'}
                    </span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="text-xs text-muted-foreground hover:text-destructive h-8 w-8 p-0 rounded-full"
                  title="Sign Out"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="liquid"
                  size="sm"
                  onClick={() => handleQuickDemo('alex')}
                  className="font-bold text-xs h-8 px-3.5 flex items-center gap-1.5 shadow-sm"
                >
                  <Play className="h-3 w-3 fill-current" />
                  Live Demo
                </Button>
                <Link to="/signin">
                  <Button variant="glass" size="sm" className="font-medium text-xs h-8 px-3">
                    <LogIn className="h-3.5 w-3.5 mr-1" />
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="md:hidden flex items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-1.5 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>

      {/* Mobile Drawer Navigation (Floating Frosted Glass Card) */}
      {isMobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 max-w-6xl mx-auto rounded-2xl border-none shadow-none backdrop-blur-2xl bg-background/95 dark:bg-background/90 p-4 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-border/60">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Menu Navigation
              </span>
              <Badge variant="outline" className="text-2xs text-primary border-primary/30">
                PerkPal
              </Badge>
            </div>

            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                isActive('/') ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Compass className="h-4 w-4" />
              Home Overview
            </Link>

            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                isActive('/dashboard') ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LayoutDashboard className="h-4 w-4" />
              Rewards Dashboard
            </Link>

            <Link
              to="/accounts"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                isActive('/accounts') ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CreditCard className="h-4 w-4" />
              Connected Accounts
            </Link>

            <Link
              to="/offers"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                isActive('/offers') ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              Offers & Optimizer
            </Link>

            <Link
              to="/settings"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                isActive('/settings') ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings & Preferences
            </Link>

            <div className="pt-3 mt-2 border-t border-border/60 flex flex-col gap-2">
              {!isAuthenticated ? (
                <>
                  <Button
                    variant="liquid"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleQuickDemo('alex');
                    }}
                    className="w-full font-bold flex items-center justify-center gap-2"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    Launch Interactive Demo
                  </Button>
                  <Link
                    to="/signin"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="glass" className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In / Register
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  variant="glass"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  className="w-full justify-start text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out ({userProfile?.name})
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
