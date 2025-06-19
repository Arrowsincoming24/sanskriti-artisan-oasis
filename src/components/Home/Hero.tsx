
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient cultural-pattern min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <span className="artisan-badge">✨ Authentic Handcrafted</span>
              <span className="authentic-badge">🌱 Sustainable</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-cultural font-bold text-foreground leading-tight mb-6">
              Discover the Soul of
              <span className="text-terracotta-600 block">Traditional Crafts</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Connect directly with master artisans across India. Every purchase empowers communities and preserves centuries-old traditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 text-white">
                Explore Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
                Meet Our Artisans
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-forest-600" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-terracotta-600" />
                <span>1000+ Artisans Supported</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-border/50">
              <div className="text-2xl font-bold text-terracotta-600">₹50L+</div>
              <div className="text-sm text-muted-foreground">Earned by Artisans</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-border/50">
              <div className="text-2xl font-bold text-forest-600">15</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
