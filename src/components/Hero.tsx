import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      <div className="container flex flex-col items-center text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Your Business with{' '}
            <span className="text-primary">Zid Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Transform your e-commerce presence with custom Zid themes and expert development services.
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;