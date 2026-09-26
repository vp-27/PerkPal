import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { DEMO_PERSONAS } from '@/lib/rewardsData';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

export const AuthForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'demo@perkpal.com', password: 'password123' },
  });

  const registerForm = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const handle1ClickDemo = (personaKey: 'alex' | 'sarah') => {
    const persona = DEMO_PERSONAS[personaKey];
    localStorage.setItem('perkpal_user', JSON.stringify(persona));
    window.dispatchEvent(new Event('perkpal_auth_change'));
    toast({
      title: `Welcome, ${persona.name}!`,
      description: `Loaded ${persona.tagline} portfolio.`,
    });
    navigate('/dashboard');
  };

  const onLogin = (data: LoginValues) => {
    toast({
      title: 'Signing in...',
      description: 'Authenticating with PerkPal Cloud...',
    });

    setTimeout(() => {
      const userData = {
        name: data.email.split('@')[0].toUpperCase(),
        email: data.email,
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        homeAirport: 'JFK',
        tier: 'Gold Member',
      };
      localStorage.setItem('perkpal_user', JSON.stringify(userData));
      window.dispatchEvent(new Event('perkpal_auth_change'));
      toast({
        title: 'Welcome Back!',
        description: 'Successfully signed into your PerkPal dashboard.',
      });
      navigate('/dashboard');
    }, 1000);
  };

  const onRegister = (data: RegisterValues) => {
    toast({
      title: 'Creating Account...',
      description: 'Setting up your encrypted rewards vault...',
    });

    setTimeout(() => {
      const userData = {
        name: data.name,
        email: data.email,
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        homeAirport: 'JFK',
        tier: 'Member',
      };
      localStorage.setItem('perkpal_user', JSON.stringify(userData));
      window.dispatchEvent(new Event('perkpal_auth_change'));
      toast({
        title: 'Account Created!',
        description: 'Welcome to PerkPal. Your rewards copilot is ready to optimize your points.',
      });
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="glass-card rounded-3xl border border-border shadow-2xl overflow-hidden">
        {/* Mascot Greeting Header */}
        <div className="p-6 pb-2 text-center flex flex-col items-center">
          <div className="relative mb-3 shrink-0 flex items-center justify-center">
            <img
              src="/perkpal-icon.png"
              alt="PerkPal Mascot"
              className="w-16 h-16 object-contain drop-shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-1 border-2 border-background">
              <Sparkles className="h-3 w-3 text-slate-900 fill-slate-900" />
            </span>
          </div>

          <CardTitle className="text-2xl font-black tracking-tight text-foreground">
            Welcome to <span className="text-primary">PerkPal</span>
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1">
            Access your rewards, gift cards, and transfer multipliers
          </CardDescription>
        </div>

        <CardContent className="space-y-6 pt-2">
          {/* 1-Click Demo Fast Track */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-primary/10 to-indigo-500/10 border border-amber-500/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Zero-Friction Demo Access
              </span>
              <Badge className="bg-amber-500 text-white text-2xs font-bold">1-Click</Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handle1ClickDemo('alex')}
                className="text-xs font-semibold h-9 border-border hover:bg-primary hover:text-white transition-colors"
              >
                Alex (Traveler Portfolio)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handle1ClickDemo('sarah')}
                className="text-xs font-semibold h-9 border-border hover:bg-primary hover:text-white transition-colors"
              >
                Sarah (Retail Portfolio)
              </Button>
            </div>
          </div>

          {/* Standard Auth Tabs */}
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-secondary/80">
              <TabsTrigger value="login" className="text-xs font-semibold">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="register" className="text-xs font-semibold">
                Create Account
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-3.5">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="name@example.com"
                              className="pl-9 h-10 text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              className="pl-9 pr-9 h-10 text-xs"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full font-bold text-xs h-10 shadow-md mt-2">
                    Enter Dashboard <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-3.5">
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Jane Doe"
                              className="pl-9 h-10 text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="name@example.com"
                              className="pl-9 h-10 text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              className="pl-9 pr-9 h-10 text-xs"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full font-bold text-xs h-10 shadow-md mt-2">
                    Create Free Account <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="pt-0 pb-6 flex justify-center text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            256-Bit Hardware Encryption Guaranteed
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
