import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PerkPalAdvisor from '@/components/common/PerkPalAdvisor';

export const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition bg-background text-foreground relative">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Background glow meshes */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <AuthForm />
      </main>

      <Footer />
      <PerkPalAdvisor />
    </div>
  );
};

export default SignIn;
