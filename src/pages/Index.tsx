import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import PartnerMarquee from '@/components/home/PartnerMarquee';
import Features from '@/components/home/Features';
import ValueCalculator from '@/components/home/ValueCalculator';
import FaqSection from '@/components/home/FaqSection';
import CtaBanner from '@/components/home/CtaBanner';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PartnerMarquee />
        <Features />
        <ValueCalculator />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
